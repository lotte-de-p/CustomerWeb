import { Component, EventEmitter, Input, Output } from '@angular/core';
import { JsonPipe, NgClass } from '@angular/common';
import { AbstractBaseComponent } from '@telenet/ng-lib-page';
import { TranslateModule } from '@ngx-translate/core';
import { EligibleOfferInterface } from '../../../shared/interfaces/eligible-offer.interface';

@Component({
  selector: 'tg-available-options',
  templateUrl: './available-options.component.html',
  standalone: true,
  imports: [NgClass, TranslateModule, JsonPipe],
})
export class AvailableOptionsComponent extends AbstractBaseComponent {
  @Input() newTariffPlan: EligibleOfferInterface;
  @Input() mobilePlans: EligibleOfferInterface[] = [];
  @Input() dataPlans: EligibleOfferInterface[] = [];
  @Input() set isCategorySelected(value: boolean) {
    this._isCategorySelected = value;
  }

  @Output() tariffPlanSelected: EventEmitter<EligibleOfferInterface> = new EventEmitter();
  public _isCategorySelected = true;

  constructor() {
    super();
  }

  public onSelectTariff(selectedTariffPlan: EligibleOfferInterface) {
    this.tariffPlanSelected.emit(selectedTariffPlan);
  }
}
