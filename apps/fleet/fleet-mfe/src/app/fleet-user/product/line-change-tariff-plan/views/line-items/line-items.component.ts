import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { JsonPipe, NgClass } from '@angular/common';
import { Product } from '../../../../shared/models/product.model';
import { TariffPlanOption } from '../../interfaces/tariff-plan-option.interface';
import { EligibleOfferInterface } from '../../../../shared/interfaces/eligible-offers.interface';

@Component({
  selector: 'tg-line-items',
  templateUrl: './line-items.component.html',
  standalone: true,
  imports: [TranslateModule, NgClass, JsonPipe],
  styleUrls: ['../../fleet-user-line-change-tariff-plan.component.css'],
})
export class LineItemsComponent {
  @Input() disconnectedActiveTariffPlanOptions: TariffPlanOption[] = [];
  @Input() isChangesConfirmed = false;
  @Input() lineProductDetails: Product;
  @Input() tariffPlanOptions: TariffPlanOption[] = [];
  @Input() selectedTariffPlan: EligibleOfferInterface;

  containsDisconnectedStatus() {
    return this.disconnectedActiveTariffPlanOptions.length > 0;
  }
}
