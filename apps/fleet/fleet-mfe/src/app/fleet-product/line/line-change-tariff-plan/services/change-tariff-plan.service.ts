import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerProductHolding } from '../../shared/models/customer-product-holding.model';
import { EligibleOfferInterface } from '../../shared/interfaces/eligible-offer.interface';
import { LineChangeTariffPlanConstants } from '../constants/line-change-tariff-plan.constants';
import { ManageModifyProductsInterface } from '../../shared/interfaces/manage-modify-products.interface';
import { CoreService } from '../../shared/services/core.service';
import { SalesOrder } from '../../shared/models/sales-order/sales-order.model';
import { TariffPlanOptionMapper } from '../mapper/tariff-plan-option.mapper';
import { TariffPlanOption } from '../interfaces/tariff-plan-option.interface';
import { EligibleProductInterface } from '../../shared/interfaces/eligible-product.interface';
import { cloneDeep } from 'lodash-es';
import { patchState, signalState } from '@ngrx/signals';

interface ChangeTariffPlanState {
  product: CustomerProductHolding;
  tariffPlanOptions: TariffPlanOption[];
  initialProduct: CustomerProductHolding;
  initialTariffPlanOptions: TariffPlanOption[];
  disconnectedActiveTariffPlanOptions: TariffPlanOption[];
  dataPlans: EligibleOfferInterface[];
  mobilePlans: EligibleOfferInterface[];
  newTariffPlan: EligibleOfferInterface;
  salesOrderId: string;
  hasActiveTariff: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class ChangeTariffPlanService {
  readonly #coreService = inject(CoreService);
  readonly #tariffPlanOptionMapper = inject(TariffPlanOptionMapper);
  readonly #changeTariffPlanState = signalState<ChangeTariffPlanState>({
    product: null,
    tariffPlanOptions: null,
    initialProduct: null,
    initialTariffPlanOptions: null,
    disconnectedActiveTariffPlanOptions: [],
    dataPlans: [],
    mobilePlans: [],
    newTariffPlan: null,
    salesOrderId: null,
    hasActiveTariff: false,
  });

  readonly product = this.#changeTariffPlanState.product;
  readonly tariffPlanOptions = this.#changeTariffPlanState.tariffPlanOptions;
  readonly disconnectedActiveTariffPlanOptions = this.#changeTariffPlanState.disconnectedActiveTariffPlanOptions;
  readonly mobilePlans = this.#changeTariffPlanState.mobilePlans;
  readonly dataPlans = this.#changeTariffPlanState.dataPlans;
  readonly newTariffPlan = this.#changeTariffPlanState.newTariffPlan;
  readonly salesOrderId = this.#changeTariffPlanState.salesOrderId;
  readonly hasActiveTariff = this.#changeTariffPlanState.hasActiveTariff;

  initializeData(product: CustomerProductHolding): void {
    const tariffPlanOptions = this.#tariffPlanOptionMapper.mapNonDisconnectedTariffPlanOptions(product.options);
    patchState(this.#changeTariffPlanState, {
      product: product,
      tariffPlanOptions: tariffPlanOptions,
      initialProduct: cloneDeep(product),
      initialTariffPlanOptions: cloneDeep(tariffPlanOptions),
    });
  }
  setLineOptionsData(eligibleProduct: EligibleProductInterface): void {
    const dataPlans = [];
    const mobilePlans = [];
    eligibleProduct.eligibleOffers.forEach((offer) => {
      if (offer.productInfo.productId === this.product().productInfo.productId) {
        offer.isSelected = false;
        offer.isPreviouslyAdded = true;
        offer.isDisabled = true;
      }
      this.isDataPlans(offer) ? dataPlans.push(offer) : mobilePlans.push(offer);
    });
    patchState(this.#changeTariffPlanState, { dataPlans, mobilePlans });
  }

  private isDataPlans(plan): boolean {
    return (
      plan.productInfo.services?.serviceType === LineChangeTariffPlanConstants.MOBILE_INTERNET &&
      plan.productInfo.services.length === 1
    );
  }

  updateSalesOrderId(salesOrderId: string): void {
    patchState(this.#changeTariffPlanState, { salesOrderId });
  }

  updateTariffPlanOptionData(salesOrderResponse: SalesOrder): void {
    const modifiedTariffPlan = salesOrderResponse.lineItems[0].orderItems.find(
      (item) => item && item.status === LineChangeTariffPlanConstants.MODIFY_STATUS
    );
    const activeTariffPlan = salesOrderResponse.lineItems[0].orderItems.find(
      (item) => item && item.status.toUpperCase() === LineChangeTariffPlanConstants.ACTIVE_STATUS
    );
    patchState(this.#changeTariffPlanState, {
      tariffPlanOptions: modifiedTariffPlan
        ? this.#tariffPlanOptionMapper.mapNonDisconnectedTariffPlanOptions(modifiedTariffPlan.orderItems)
        : [],
      hasActiveTariff: !!activeTariffPlan,
      disconnectedActiveTariffPlanOptions: this.#tariffPlanOptionMapper.mapDisconnectedTariffPlanOptions(
        activeTariffPlan ? activeTariffPlan.orderItems : []
      ),
    });
  }

  public updateNewTariffPlan(selectedTariffPlan: EligibleOfferInterface): void {
    patchState(this.#changeTariffPlanState, (state) => ({
      newTariffPlan:
        state.newTariffPlan && state.newTariffPlan.productInfo.productId === selectedTariffPlan.productInfo.productId
          ? null
          : selectedTariffPlan,
    }));
  }

  modifyProduct(selectedTariffPlan: EligibleOfferInterface): Observable<SalesOrder> {
    return this.#coreService.modifyProducts(
      LineChangeTariffPlanConstants.MESSAGE_GROUP,
      this.getPostData(selectedTariffPlan)
    );
  }

  getPostData(eligibleOffer: EligibleOfferInterface): ManageModifyProductsInterface[] {
    return [
      {
        productIdentifier: this.product().identifier,
        offers: [
          {
            id: eligibleOffer.productInfo.productId,
            type: 'PRODUCT',
          },
        ],
      },
    ];
  }

  submitSalesOrder(): Observable<SalesOrder> {
    const payload = {
      salesOrderId: this.salesOrderId(),
      messageGroup: LineChangeTariffPlanConstants.MESSAGE_GROUP,
    };
    return this.#coreService.submitSalesOrder(payload);
  }

  revertChanges() {
    patchState(this.#changeTariffPlanState, (state) => ({
      product: cloneDeep(state.initialProduct),
      tariffPlanOptions: cloneDeep(state.initialTariffPlanOptions),
      newTariffPlan: null,
      disconnectedActiveTariffPlanOptions: [],
    }));
  }
}
