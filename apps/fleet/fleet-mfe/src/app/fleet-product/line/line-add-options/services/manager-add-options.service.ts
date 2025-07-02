import { inject, Injectable, signal } from '@angular/core';
import { ManageProductsRequest, OfferRequest } from '../../shared/interfaces/manage-product-request.interface';
import { ManageProductsActionPayload } from '../../shared/store/sales/actions/sales.actions';
import { CoreService } from '../../shared/services/core.service';
import { SalesOrder } from '../../shared/models/sales-order/sales-order.model';
import { DataLayerAttributes, DataLayerService } from '@telenet/ng-lib-datalayer';
import { Category, EventInfo } from 'udl';
import { Observable } from 'rxjs';
import isEmpty from 'lodash-es/isEmpty';
import cloneDeep from 'lodash-es/cloneDeep';
import { CustomerProductHolding } from '../../shared/models/customer-product-holding.model';
import { GroupedOptions } from '../../shared/models/grouped-options.model';
import { Option } from '../../shared/models/option.model';
import { LineOption } from '../../shared/models/line-option.model';
import { LineAddOptionsConstants } from '../../shared/constants/line-add-options.constants';
import { CartObjectCreator } from './cart-object-creator';
import { mapLineOptionToProductOption } from '../mapper/product-options.mapper';

@Injectable({
  providedIn: 'root',
})
export class ManagerAddOptionsService {
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
          isAffected: $event.some((option) => option.isSelected),
        } as CustomerProductHolding;
      });
    });
  }

  selectOption(option: LineOption): void {
    const oldOption = this.#selectedLines()
      .flatMap((product) => product.options.find((currentOption) => currentOption.category === option.category))
      .at(0);

    if (this.optionAlreadyActive(option)) {
      this.resetOption(option, oldOption);
    } else {
      if (oldOption && oldOption?.productId === option.id) {
        this.deselectOption(option);
        if (this.categoryAlreadyActive(this.#initialSelectedLines(), option.category)) {
          this.resetOption(option, oldOption);
        }
        return;
      } else if (this.categoryAlreadyActive(this.#selectedLines(), option.category)) {
        this.updateOption(option, oldOption);
      } else {
        this.addNewOption(option);
      }
    }
  }

  updateOption(option: LineOption, previousOption: Option): void {
    this.#selectedLines.update((products: CustomerProductHolding[]) => {
      return products.map((product) => {
        product.options = product.options.filter((currentOption) => {
          return currentOption.category !== option.category;
        });
        product.options.push({
          ...mapLineOptionToProductOption(option),
          isSelected: true,
          status: LineAddOptionsConstants.STATUS_INACTIVE,
          oldVolume: previousOption.volume,
          isOptionUpgraded: true,
        });
        return product;
      });
    });
    this.removeSelection(previousOption);
  }

  addNewOption(option: LineOption): void {
    this.#selectedLines.update((products: CustomerProductHolding[]) => {
      return products.map((product) => {
        product.options.push({
          ...mapLineOptionToProductOption(option),
          isSelected: true,
          status: LineAddOptionsConstants.STATUS_INACTIVE,
          isOptionAdded: true,
          optionCategory: LineAddOptionsConstants.OPTION_CATEGORY_ADDED,
        });
        return product;
      });
    });
  }

  deselectOption(option: LineOption): void {
    this.#selectedLines.update((products: CustomerProductHolding[]) => {
      return products.map((product) => {
        product.options = product.options.filter((currentOption) => currentOption.productId !== option.id);
        return product;
      });
    });
  }

  removeSelection(option: Option) {
    this.#productLineOptions.update((productLineOptions) => {
      return productLineOptions.map((productLineOption) => {
        if (productLineOption.category === option.category) {
          productLineOption.subcategory.map((lineOption) => {
            if (lineOption.id === option.productId) {
              lineOption.isSelected = false;
              lineOption.isDisabled = false;
            }

            return lineOption;
          });
        }
        return productLineOption;
      });
    });
  }

  disableOption(option: Option): void {
    this.#productLineOptions.update((productLineOptions) => {
      return productLineOptions.map((productLineOption) => {
        if (productLineOption.category === option.category) {
          productLineOption.subcategory.map((lineOption) => {
            if (lineOption.id === option.productId) {
              lineOption.isDisabled = true;
            }
            return lineOption;
          });
        }
        return productLineOption;
      });
    });
  }

  resetOption(option: LineOption, oldOption: Option): void {
    const initialOption: Option = this.#initialSelectedLines()
      .flatMap((product) => product.options.find((currentOption) => currentOption.category === option.category))
      .at(0);
    this.#selectedLines.update((products: CustomerProductHolding[]) => {
      return products.map((product) => {
        product.options = product.options.filter((currentOption) => currentOption.category !== option.category);
        product.options.push(cloneDeep(initialOption));
        this.removeSelection(oldOption);
        this.disableOption(initialOption);
        return product;
      });
    });
  }

  optionAlreadyActive(option: LineOption): boolean {
    return this.#initialSelectedLines().some((product) => {
      return product.options.some((currentOption) => {
        return mapLineOptionToProductOption(option).productId === currentOption.productId;
      });
    });
  }

  disableOptions(): void {
    const eligibleOptions: Option[] = this.selectedLines().flatMap((product) => product.options);
    this.#productLineOptions.update((groupedOptions) => {
      groupedOptions.forEach((category) => {
        category.subcategory.forEach((lineOption) => {
          if (lineOption.type === LineAddOptionsConstants.MANDATORY) {
            lineOption.isDisabled = true;
          }
          const filteredOption = eligibleOptions.find((option: Option) => option.productId === lineOption.id);
          if (!isEmpty(filteredOption)) {
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
      messageGroupName: LineAddOptionsConstants.MESSAGE_GROUP,
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
          type: LineAddOptionsConstants.OPTION,
          action: LineAddOptionsConstants.DISCONNECT,
        };
      });
  }

  submitSalesOrder(salesOrder: SalesOrder): Observable<SalesOrder> {
    const payload = {
      messageGroup: LineAddOptionsConstants.MESSAGE_GROUP,
      salesOrderId: salesOrder.id,
      distributionChannel: undefined,
    };

    return this.#coreService.submitSalesOrder(payload);
  }

  addEventToUDL(name: string, type: string, products: CustomerProductHolding[], response?): void {
    const attributes: DataLayerAttributes = {
      intent: LineAddOptionsConstants.EVENT_ATTRIBUTE_INTENT_ADD_OPTION,
      flowType: type,
    };
    const category: Category = this.#dataLayerService.createCategory(
      'fleet',
      LineAddOptionsConstants.SUB_CATEGORY1_FLEET_PRODUCT
    );
    const eventInfo: EventInfo = this.#dataLayerService.createEventInfo(name, type, [
      LineAddOptionsConstants.MESSAGE_GROUP,
    ]);
    const removedItems = this.getManageProductsRequestBody(products);
    attributes.cart = CartObjectCreator.createCartObjectForRemovedItem(response, removedItems);
    this.#dataLayerService.addEvent(eventInfo, attributes, category);
  }

  private categoryAlreadyActive(lines: CustomerProductHolding[], category: string): boolean {
    return lines.some((currentProduct) =>
      currentProduct.options.some((currentOption) => {
        return currentOption.category === category;
      })
    );
  }
}
