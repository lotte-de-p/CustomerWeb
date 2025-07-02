import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingComponent } from './pricing.component';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';

describe('PricingComponent', () => {
  let component: PricingComponent;
  let fixture: ComponentFixture<PricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingComponent, TgTranslateTestingModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(PricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('create', () => {
    it('should convert numbers to string with at least 2 decimals', () => {
      component.salesOffer = {
        price: 10,
        promo: {
          price: 9.9,
          durationInMonths: 6,
        },
      };

      expect(component).toBeTruthy();
      expect(component.normalPrice).toEqual('10.00');
      expect(component.discountedPrice).toEqual('9.90');
      expect(component.durationInMonths).toEqual(6);
    });
  });
});
