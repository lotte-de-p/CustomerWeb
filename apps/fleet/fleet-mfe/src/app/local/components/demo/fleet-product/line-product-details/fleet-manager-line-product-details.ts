import { Component } from '@angular/core';
import { FleetManagerLineProductDetailsComponent } from '../../../../../fleet-product/line/line-product-details/fleet-manager-line-product-details.component';

@Component({
  selector: 'tg-fleet-user-mobile-usage-overview-demo-one',
  standalone: true,
  styles: [],
  imports: [FleetManagerLineProductDetailsComponent],
  template: ` <tg-fleet-manager-line-product-details
    [tariffPlanUrl]="LINE_CHANGE_TARIFF_PLAN"
    [removeOptionUrl]="LINE_REMOVE_OPTIONS"
    [addOptionUrl]="LINE_ADD_OPTIONS">
  </tg-fleet-manager-line-product-details>`,
})
export class FleetManagerLineProductDetailsDemoComponent {
  readonly LINE_REMOVE_OPTIONS = 'fleet-manager-line-remove-options';
  readonly LINE_CHANGE_TARIFF_PLAN = 'fleet-manager-line-change-tariff-plan';
  readonly LINE_ADD_OPTIONS = 'fleet-manager-line-add-options';
}
