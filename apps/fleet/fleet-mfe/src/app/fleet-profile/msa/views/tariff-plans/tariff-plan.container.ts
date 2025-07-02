import { Component, Input } from '@angular/core';
import { EligibleOfferInterface } from '../../interfaces/eligible-offers.interface';
import { OptionProductsModel } from '../../models/option-products.model';
import { MsaConstants } from '../../interfaces/msa-constants';
import { DataLayerAttributes, DataLayerService } from '@telenet/ng-lib-datalayer';
import { Category, EventInfo } from 'udl';
import { TariffPlanComponent } from './tariff-plan.component';

@Component({
  selector: 'tg-tariff-plan-container',
  templateUrl: './tariff-plan.container.html',
  standalone: true,
  imports: [TariffPlanComponent],
})
export class TariffPlanContainerComponent {
  @Input() componentInstanceId: string;
  @Input() eligibleOffers: EligibleOfferInterface[] = [];
  @Input() options: OptionProductsModel[] = [];

  selectedPlans: EligibleOfferInterface[] = [];

  constructor(private readonly dataLayerService: DataLayerService) {}

  toggleSelection(option: EligibleOfferInterface): void {
    if (!this.selectedPlans.includes(option)) {
      option.isSelected = true;
      this.selectedPlans.push(option);
      if (this.selectedPlans.length <= MsaConstants.MAX_SELECTED_OPTION) {
        this.addEventToUDL(MsaConstants.EVENT_NAME_TARIFF_PLAN_SELECTED, option.label);
      }
    } else {
      this.deselectOption(option);
    }

    if (this.selectedPlans.length > MsaConstants.MAX_SELECTED_OPTION) {
      this.deselectOption(this.selectedPlans[0]);
    }
  }

  private deselectOption(option: EligibleOfferInterface): void {
    option.isSelected = false;
    this.selectedPlans = this.selectedPlans.filter((plan) => plan.label !== option.label);
  }

  private addEventToUDL(eventName: string, itemName?: string): void {
    const attributes: DataLayerAttributes = {} as DataLayerAttributes;

    if (itemName) {
      attributes[MsaConstants.EVENT_ATTRIBUTE_ITEM_NAME] = itemName;
    }

    const type: string = MsaConstants.EVENT_TYPE_CLICK;
    const category: Category = this.dataLayerService.getCategory(this.componentInstanceId);
    const msgGroup: string = MsaConstants.MESSAGE_GROUP;
    const eventInfo: EventInfo = this.dataLayerService.createEventInfo(eventName, type, [msgGroup]);
    this.dataLayerService.sendEvent({ eventInfo, attributes, category });
  }
}
