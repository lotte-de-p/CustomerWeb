import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EligibleOfferInterface } from '../../interfaces/eligible-offers.interface';
import { OptionProductsModel } from '../../models/option-products.model';
import { MsaConstants } from '../../interfaces/msa-constants';
import { TranslateModule } from '@ngx-translate/core';
import { NgFor, NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'tg-tariff-plan',
  templateUrl: './tariff-plan.component.html',
  standalone: true,
  imports: [NgFor, NgClass, NgIf, TranslateModule],
})
export class TariffPlanComponent {
  @Input() eligibleOffers: EligibleOfferInterface[] = [];
  @Input() options: OptionProductsModel[] = [];
  @Input() selectedPlans: EligibleOfferInterface[] = [];

  @Output() selectionToggled = new EventEmitter<EligibleOfferInterface>();

  isDataPlan(plan: EligibleOfferInterface): boolean {
    return (
      plan.productInfo?.services[0]?.serviceType === MsaConstants.MOBILE_INTERNET &&
      plan.productInfo.services.length === 1
    );
  }

  getCurrentOptionPrice(offer: EligibleOfferInterface, optionName: string): string {
    const currentOption = offer.optionProducts.find((option) => option.label === optionName);
    return currentOption ? currentOption.price.amount : MsaConstants.NOT_AVAILABLE;
  }

  getOfferPrice(offer: EligibleOfferInterface): string {
    return offer.price.amount + ' ' + MsaConstants.PRICE_PER_MONTH;
  }

  currentOptionPriceIsAvailable(offer: EligibleOfferInterface, optionName: string): boolean {
    const currentOptionPrice = this.getCurrentOptionPrice(offer, optionName);
    return MsaConstants.NOT_AVAILABLE !== currentOptionPrice;
  }
}
