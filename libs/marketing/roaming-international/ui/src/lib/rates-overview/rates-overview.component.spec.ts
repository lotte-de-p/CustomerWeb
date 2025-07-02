import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RatesOverviewComponent } from './rates-overview.component';
import { initRatesOverview } from '@marketing/marketing/roaming-international/data-access';
import { TranslateModule } from '@ngx-translate/core';

describe('RatesOverviewComponent', () => {
  let component: RatesOverviewComponent;
  let fixture: ComponentFixture<RatesOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatesOverviewComponent, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(RatesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
    expect(component.overview).toBe(initRatesOverview);
  });
});
