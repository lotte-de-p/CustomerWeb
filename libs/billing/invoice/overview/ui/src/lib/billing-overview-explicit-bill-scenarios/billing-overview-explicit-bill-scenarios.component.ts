import { Component, Input } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { InvoiceAmountPipe } from '../pipes/invoice-amount.pipe';
import { WinkBadge } from '@telenet/wink-ng';
import { BillingScenario, BillingScenarioType } from '@billing/invoice-overview/data-access';

export const BILL_SCENARIO_PREFIX = 'ng.billing-overview.lbl.bill-scenario-';

@Component({
  standalone: true,
  selector: 'tg-billing-overview-explicit-bill-scenarios',
  template: ` <div data-testid="billing-overview-bill-scenarios" class="mt--xxs scrollbar--hidden scrollable">
    <div
      class="display--inline"
      *ngFor="let scenario of billingScenarios; let ind = index"
      [attr.data-testid]="'billing-scenario-' + ind">
      <wink-badge
        class="mr--xxs mb--xxs"
        [text]="generateLabel(scenario).labelKey | translate"
        size="md"
        background="accent1"></wink-badge>
    </div>
  </div>`,
  imports: [InvoiceAmountPipe, NgIf, TranslateModule, WinkBadge, NgForOf],
  styleUrl: './billing-overview-explicit-bill-scenarios.component.scss',
})
export class BillingOverviewExplicitBillScenariosComponent {
  @Input() billingScenarios!: BillingScenario[];

  generateLabel(scenario: BillingScenario) {
    const typeToPrefixMap: Record<BillingScenarioType, string> = {
      [BillingScenarioType.EXTRA_COST]: BILL_SCENARIO_PREFIX,
      [BillingScenarioType.CORRECTION]: BILL_SCENARIO_PREFIX,
      [BillingScenarioType.DISCOUNT]: BILL_SCENARIO_PREFIX,
    };

    const prefix = typeToPrefixMap[scenario.type] ?? '';
    const labelKey = `${prefix}${scenario.name.replaceAll('_', '-').toLowerCase()}`;

    return { labelKey };
  }
}
