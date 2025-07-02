import { Component, EventEmitter, Input, Output } from '@angular/core';
import { JsonPipe, NgClass } from '@angular/common';
import { AbstractBaseComponent } from '@telenet/ng-lib-page';
import { TranslateModule } from '@ngx-translate/core';
import { Product } from '../../../../shared/models/product.model';
import { EligibleOfferInterface } from '../../../../shared/interfaces/eligible-offers.interface';

@Component({
  selector: 'tg-available-options',
  templateUrl: './available-options.component.html',
  standalone: true,
  imports: [NgClass, TranslateModule, JsonPipe],
  styleUrls: ['../../fleet-user-line-change-tariff-plan.component.css'],
})
export class AvailableOptionsComponent extends AbstractBaseComponent {
  @Input() selectedLine: Product;
  @Input() newTariffPlan: EligibleOfferInterface;
  @Input() mobilePlans: EligibleOfferInterface[] = [];
  @Input() dataPlans: EligibleOfferInterface[] = [];
  @Input() showAvailableOptions: boolean;

  @Input() set isCategorySelected(value: boolean) {
    this._isCategorySelected = value;
  }

  @Output() tariffPlanSelected: EventEmitter<EligibleOfferInterface> = new EventEmitter();
  @Output() toggleAvailableOptionsContainer: EventEmitter<boolean> = new EventEmitter();
  public _isCategorySelected = true;

  constructor() {
    super();
  }

  public onSelectTariff(selectedTariffPlan: EligibleOfferInterface) {
    this.toggleAvailableOptions();
    this.tariffPlanSelected.emit(selectedTariffPlan);
  }

  toggleAvailableOptions() {
    this.toggleAvailableOptionsContainer.emit(!this.showAvailableOptions);
  }

  toggleCategorySelected() {
    this._isCategorySelected = !this._isCategorySelected;
  }
}
