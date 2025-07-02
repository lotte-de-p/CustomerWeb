import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BillingOverviewExplicitBillScenariosComponent } from './billing-overview-explicit-bill-scenarios.component';
import { TranslateModule } from '@ngx-translate/core';
import { WinkBadge } from '@telenet/wink-ng';
import { BillingScenario, BillingScenarioName, BillingScenarioType } from '@billing/invoice-overview/data-access';
import { By } from '@angular/platform-browser';

describe('BillingOverviewExplicitBillScenariosComponent', () => {
  let component: BillingOverviewExplicitBillScenariosComponent;
  let fixture: ComponentFixture<BillingOverviewExplicitBillScenariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillingOverviewExplicitBillScenariosComponent, TranslateModule.forRoot(), WinkBadge],
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(BillingOverviewExplicitBillScenariosComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the correct number of wink-badge elements', () => {
    const mockBillingScenarios: BillingScenario[] = [
      { name: BillingScenarioName.EXTRA_COST_ROAMING_OUTSIDE_EU, type: BillingScenarioType.EXTRA_COST },
      { name: BillingScenarioName.CABLE_CONNECTION, type: BillingScenarioType.EXTRA_COST },
      { name: BillingScenarioName.DUPLICATE, type: BillingScenarioType.EXTRA_COST },
      { name: BillingScenarioName.DISCOUNTS_PROMOTIONS_TEMPORARILY, type: BillingScenarioType.DISCOUNT },
    ];

    component.billingScenarios = mockBillingScenarios;
    fixture.detectChanges();

    const badges = fixture.debugElement.queryAll(By.css('wink-badge'));
    expect(badges.length).toBe(mockBillingScenarios.length);
  });

  it('should render wink-badge elements with correct translated text', () => {
    const mockBillingScenarios: BillingScenario[] = [
      { name: BillingScenarioName.EXTRA_COST_ROAMING_OUTSIDE_EU, type: BillingScenarioType.EXTRA_COST },
      { name: BillingScenarioName.CABLE_CONNECTION, type: BillingScenarioType.EXTRA_COST },
    ];

    component.billingScenarios = mockBillingScenarios;
    fixture.detectChanges();

    const badges = fixture.debugElement.queryAll(By.css('wink-badge'));
    expect(badges[0].nativeElement.text).toContain(
      'ng.billing-overview.lbl.bill-scenario-extra-cost-roaming-outside-eu'
    );
    expect(badges[1].nativeElement.text).toContain('ng.billing-overview.lbl.bill-scenario-cable-connection');
  });
});
