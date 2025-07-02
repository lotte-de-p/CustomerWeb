import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { JsonPipe, NgClass } from '@angular/common';
import { EligibleOfferInterface } from '../../../shared/interfaces/eligible-offer.interface';
import { TariffPlanOption } from '../../interfaces/tariff-plan-option.interface';
import { CustomerProductHolding } from '../../../shared/models/customer-product-holding.model';

@Component({
  selector: 'tg-line-items',
  templateUrl: './line-items.component.html',
  standalone: true,
  imports: [TranslateModule, NgClass, JsonPipe],
})
export class LineItemsComponent {
  @Input() disconnectedActiveTariffPlanOptions: TariffPlanOption[] = [];
  @Input() isChangesConfirmed = false;
  @Input() lineProductDetails: CustomerProductHolding;
  @Input() tariffPlanOptions: TariffPlanOption[] = [];
  @Input() selectedTariffPlan: EligibleOfferInterface;

  containsDisconnectedStatus() {
    return this.disconnectedActiveTariffPlanOptions.length > 0;
  }
}
