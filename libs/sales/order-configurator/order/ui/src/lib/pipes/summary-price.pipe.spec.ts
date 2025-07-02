import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { TestBed } from '@angular/core/testing';
import { SummaryPricePipe } from './summary-price.pipe';
import { PricePipe } from './price.pipe';
import { ChangeDetectorRef } from '@angular/core';

describe('SummaryPricePipe', () => {
  let translatePipe: TranslatePipe;
  let pricePipe: PricePipe;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [TranslatePipe, PricePipe, { provide: ChangeDetectorRef, useValue: {} }],
    });

    translatePipe = TestBed.inject(TranslatePipe);
    jest.spyOn(translatePipe, 'transform').mockImplementation((param1) => {
      return param1;
    });

    pricePipe = new PricePipe();
    jest.spyOn(pricePipe, 'transform').mockReturnValue('200.00');
  });
  describe('transform', () => {
    it('should return a labelkey for the price given ismonthy false', () => {
      const s = new SummaryPricePipe(translatePipe, pricePipe).transform(40);
      expect(s).toEqual('ng.sales-checkout.shopping-cart.lbl.price-one-time');
    });

    it('should return a labelkey for the monthly price given ismonthy true', () => {
      const s = new SummaryPricePipe(translatePipe, pricePipe).transform(200, true);
      expect(s).toEqual('ng.sales-checkout.shopping-cart.lbl.price-monthly');
    });
  });
});
