import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOverviewMonthlyPlanComponent } from './product-overview-monthly-plan.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

describe('ProductOverviewMonthlyPlanComponent', () => {
  let component: ProductOverviewMonthlyPlanComponent;
  let fixture: ComponentFixture<ProductOverviewMonthlyPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ProductOverviewMonthlyPlanComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductOverviewMonthlyPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
