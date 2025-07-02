import { inject, Injectable, signal } from '@angular/core';
import { ManageProductsRequest, OfferRequest } from '../../../shared/interfaces/manage-product-request.interface';
import { LineRemoveConstants } from '../constants/line-remove-constants';
import { ManageProductsActionPayload } from '../../shared/store/sales/actions/sales.actions';
import { CoreService } from '../../../shared/services/sales/core.service';
import { DataLayerAttributes, DataLayerService } from '@telenet/ng-lib-datalayer';
import { Category, EventInfo } from 'udl';
import { Observable } from 'rxjs';
import { Option, Product } from '../../../shared/models/product.model';
import { CartObjectCreator } from './cart-object-creator';
import { GroupedOptions } from '../../../shared/interfaces/grouped-options.interface';
import isEmpty from 'lodash-es/isEmpty';
import cloneDeep from 'lodash-es/cloneDeep';
import { SalesOrder } from '../../../shared/models/sales-order.model';

@Injectable({
  providedIn: 'root',
})
export class RemoveOptionsService {
  readonly #coreService = inject(CoreService);
  readonly #dataLayerService = inject(DataLayerService);
  readonly #selectedLine = signal<Product>(null);
  readonly #initialSelectedLine = signal<Product>(null);
  readonly #productLineOptions = signal<GroupedOptions[]>(null);
  readonly #initialLineOptions = signal<GroupedOptions[]>(null);

  showWarning = signal<boolean>(false);
  selectedLine = this.#selectedLine.asReadonly();
  productLineOptions = this.#productLineOptions.asReadonly();

  setSelectedLineData(product: Product) {
    this.#selectedLine.set(product);
    this.#initialSelectedLine.set(product);
  }

  setProductLineData(groupedOptions: GroupedOptions[]) {
    this.#productLineOptions.set(groupedOptions);
    this.#initialLineOptions.set(cloneDeep(groupedOptions));
  }

  updateOptions($event: Option[]) {
    this.#selectedLine.update(
      (product: Product) =>
        ({ ...product, options: $event, isAffected: $event.some((option) => option.isOptionRemoved) }) as Product
    );
  }

  disableOptions(): void {
    const eligibleOptions: Option[] = this.selectedLine().options;
    this.#productLineOptions.update((groupedOptions) => {
      groupedOptions.forEach((category) => {
        category.lineOptions.forEach((lineOption) => {
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
    this.#selectedLine.set(cloneDeep(this.#initialSelectedLine()));
    this.#productLineOptions.set(cloneDeep(this.#initialLineOptions()));
    this.disableOptions();
  };

  submitOptions(): Observable<SalesOrder> {
    const payload: ManageProductsActionPayload = {
      messageGroupName: LineRemoveConstants.MESSAGE_GROUP,
      data: this.getManageProductsRequestBody(this.selectedLine()),
    };
    return this.#coreService.manageProducts(payload);
  }

  private getManageProductsRequestBody(product: Product): ManageProductsRequest[] {
    return [
      {
        productIdentifier: product.identifier,
        locationId: product.locationId,
        offers: this.calculateOffers(product),
      },
    ];
  }

  private calculateOffers(selectedLine: Product): OfferRequest[] {
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

  addEventToUDL(name: string, type: string, product: Product, response?): void {
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

    const removedItems = this.getManageProductsRequestBody(product);
    attributes.cart = CartObjectCreator.createCartObjectForRemovedItem(response, removedItems);
    this.#dataLayerService.addEvent(eventInfo, attributes, category);
  }
}
