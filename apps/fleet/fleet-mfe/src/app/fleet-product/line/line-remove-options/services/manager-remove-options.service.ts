import { inject, Injectable, signal } from '@angular/core';
import { ManageProductsRequest, OfferRequest } from '../../shared/interfaces/manage-product-request.interface';
import { LineRemoveConstants } from '../constants/line-remove-constants';
import { ManageProductsActionPayload } from '../../shared/store/sales/actions/sales.actions';
import { CoreService } from '../../shared/services/core.service';
import { SalesOrder } from '../../shared/models/sales-order/sales-order.model';
import { DataLayerAttributes, DataLayerService } from '@telenet/ng-lib-datalayer';
import { Category, EventInfo } from 'udl';
import { Observable } from 'rxjs';
import { CartObjectCreator } from './cart-object-creator';
import isEmpty from 'lodash-es/isEmpty';
import cloneDeep from 'lodash-es/cloneDeep';
import { CustomerProductHolding } from '../../shared/models/customer-product-holding.model';
import { GroupedOptions } from '../../shared/models/grouped-options.model';
import { Option } from '../../shared/models/option.model';
import { LineOption } from '../../shared/models/line-option.model';

@Injectable({
  providedIn: 'root',
})
export class ManagerRemoveOptionsService {
  readonly #coreService = inject(CoreService);
  readonly #dataLayerService = inject(DataLayerService);
  readonly #selectedLines = signal<CustomerProductHolding[]>([]);
  readonly #initialSelectedLines = signal<CustomerProductHolding[]>([]);
  readonly #productLineOptions = signal<GroupedOptions[]>(null);
  readonly #initialLineOptions = signal<GroupedOptions[]>(null);

  showWarning = signal<boolean>(false);
  selectedLines = this.#selectedLines.asReadonly();
  productLineOptions = this.#productLineOptions.asReadonly();

  setSelectedLineData(products: CustomerProductHolding[]) {
    this.#selectedLines.set(products);
    this.#initialSelectedLines.set(cloneDeep(products));
  }

  setProductLineData(groupedOptions: GroupedOptions[]) {
    this.#productLineOptions.set(groupedOptions);
    this.#initialLineOptions.set(cloneDeep(groupedOptions));
  }

  updateOptions($event: Option[]) {
    this.#selectedLines.update((products: CustomerProductHolding[]) => {
      return products.map((product) => {
        return {
          ...product,
          options: $event,
          isAffected: $event.some((option) => option.isOptionRemoved),
        } as CustomerProductHolding;
      });
    });
  }

  removeOption(option: LineOption): void {
    this.#selectedLines.update((products: CustomerProductHolding[]) => {
      return products.map((product) => {
        const options = product.options.map((currentOption) => {
          if (currentOption.productId === option.id) {
            return {
              ...currentOption,
              isOptionRemoved: !currentOption.isOptionRemoved,
            };
          }
          return currentOption;
        });
        return {
          ...product,
          options: options,
          isAffected: options.some((currentOption) => currentOption.isOptionRemoved),
        } as CustomerProductHolding;
      });
    });
  }

  disableOptions(): void {
    const eligibleOptions: Option[] = this.selectedLines().flatMap((product) => product.options);
    this.#productLineOptions.update((groupedOptions) => {
      groupedOptions.forEach((category) => {
        category.subcategory.forEach((lineOption) => {
          if (lineOption.type === LineRemoveConstants.MANDATORY) {
            lineOption.isDisabled = true;
          }
          const filteredOption = eligibleOptions.find((option: Option) => option.productId === lineOption.id);
          if (isEmpty(filteredOption)) {
            lineOption.isDisabled = true;
          }
        });
      });
      return groupedOptions;
    });
  }

  revertChanges = (): void => {
    this.showWarning.set(false);
    this.#selectedLines.set(cloneDeep(this.#initialSelectedLines()));
    this.#productLineOptions.set(cloneDeep(this.#initialLineOptions()));
    this.disableOptions();
  };

  submitOptions(): Observable<SalesOrder> {
    const payload: ManageProductsActionPayload = {
      messageGroupName: LineRemoveConstants.MESSAGE_GROUP,
      data: this.getManageProductsRequestBody(this.selectedLines()),
    };
    return this.#coreService.manageProducts(payload);
  }

  private getManageProductsRequestBody(products: CustomerProductHolding[]): ManageProductsRequest[] {
    return products
      .filter((product) => !isEmpty(product.options) && product.isAffected)
      .map((product) => {
        return {
          productIdentifier: product.identifier,
          offers: this.calculateOffers(product),
        };
      });
  }

  private calculateOffers(selectedLine: CustomerProductHolding): OfferRequest[] {
    return selectedLine.options
      .filter((option) => option.isOptionRemoved)
      .map((option) => {
        return {
          id: option.productId,
          type: LineRemoveConstants.OPTION,
          action: LineRemoveConstants.DISCONNECT,
        };
      });
  }

  submitSalesOrder(salesOrder: SalesOrder): Observable<SalesOrder> {
    const payload = {
      messageGroup: LineRemoveConstants.MESSAGE_GROUP,
      salesOrderId: salesOrder.id,
      distributionChannel: undefined,
    };

    return this.#coreService.submitSalesOrder(payload);
  }

  addEventToUDL(name: string, type: string, products: CustomerProductHolding[], response?): void {
    const attributes: DataLayerAttributes = {
      intent: LineRemoveConstants.EVENT_ATTRIBUTE_INTENT_REMOVE_OPTION,
      flowType: type,
    };
    const category: Category = this.#dataLayerService.createCategory(
      'fleet',
      LineRemoveConstants.SUB_CATEGORY1_FLEET_PRODUCT
    );
    const eventInfo: EventInfo = this.#dataLayerService.createEventInfo(name, type, [
      LineRemoveConstants.MESSAGE_GROUP,
    ]);
    const removedItems = this.getManageProductsRequestBody(products);
    attributes.cart = CartObjectCreator.createCartObjectForRemovedItem(response, removedItems);
    this.#dataLayerService.addEvent(eventInfo, attributes, category);
  }
}
