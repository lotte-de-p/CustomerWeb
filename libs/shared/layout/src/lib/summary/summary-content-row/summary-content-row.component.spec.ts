import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  SummaryContentPromoRowLevel1,
  SummaryContentPromoRowLevel2,
  SummaryContentPromoRowLevel3,
  SummaryContentRowLevel1,
  SummaryContentRowLevel2,
  SummaryContentRowLevel3,
} from './summary-content-row.interface';
import { SummaryContentRowComponent } from './summary-content-row.component';
import { TgFormsModule } from '@telenet/ng-lib-form';

describe('SummaryContentRowComponent', () => {
  let component: SummaryContentRowComponent;
  let fixture: ComponentFixture<SummaryContentRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SummaryContentRowComponent],
      imports: [TgFormsModule],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryContentRowComponent);
    component = fixture.componentInstance;
    component.labelConfiguration = undefined;
    component.priceConfiguration = undefined;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    beforeEach(() => {
      component.labelConfiguration = undefined;
      component.priceConfiguration = undefined;
    });

    describe('standard row', function () {
      it('should set values for level 0 by default when no level is passed', () => {
        component.ngOnInit();
        expect(component.labelConfiguration).toBe(SummaryContentRowLevel1);
        expect(component.priceConfiguration).toBe(SummaryContentRowLevel1);
      });

      it('should initialize variables with right values when level 1 is passed', () => {
        component.level = 1;
        component.ngOnInit();
        expect(component.labelConfiguration).toBe(SummaryContentRowLevel1);
        expect(component.priceConfiguration).toBe(SummaryContentRowLevel1);
      });

      it('should initialize variables with right values when level 2 is passed', () => {
        component.level = 2;
        component.ngOnInit();
        expect(component.labelConfiguration).toBe(SummaryContentRowLevel2);
        expect(component.priceConfiguration).toBe(SummaryContentRowLevel2);
      });

      it('should initialize variables with right values when level 3 is passed', () => {
        component.level = 3;
        component.ngOnInit();
        expect(component.labelConfiguration).toBe(SummaryContentRowLevel3);
        expect(component.priceConfiguration).toBe(SummaryContentRowLevel3);
      });

      it('should not overwrite configuration when it is already set', () => {
        component.level = 2;
        component.labelConfiguration = SummaryContentRowLevel1;
        component.priceConfiguration = SummaryContentRowLevel1;
        component.ngOnInit();
        expect(component.labelConfiguration).toBe(SummaryContentRowLevel1);
        expect(component.priceConfiguration).toBe(SummaryContentRowLevel1);
      });
    });

    describe('promo row', function () {
      beforeEach(() => {
        component.promo = true;
      });

      it('should set values for level 0 by default when no level is passed', () => {
        component.ngOnInit();
        expect(component.labelConfiguration).toBe(SummaryContentPromoRowLevel1);
        expect(component.priceConfiguration).toBe(SummaryContentPromoRowLevel1);
      });

      it('should initialize variables with right values when level 1 is passed', () => {
        component.level = 1;
        component.ngOnInit();
        expect(component.labelConfiguration).toBe(SummaryContentPromoRowLevel1);
        expect(component.priceConfiguration).toBe(SummaryContentPromoRowLevel1);
      });

      it('should initialize variables with right values when level 2 is passed', () => {
        component.level = 2;
        component.ngOnInit();
        expect(component.labelConfiguration).toBe(SummaryContentPromoRowLevel2);
        expect(component.priceConfiguration).toBe(SummaryContentPromoRowLevel2);
      });

      it('should initialize variables with right values when level 3 is passed', () => {
        component.level = 3;
        component.ngOnInit();
        expect(component.labelConfiguration).toBe(SummaryContentPromoRowLevel3);
        expect(component.priceConfiguration).toBe(SummaryContentPromoRowLevel3);
      });

      it('should not overwrite configuration when it is already set', () => {
        component.level = 2;
        component.labelConfiguration = SummaryContentPromoRowLevel1;
        component.priceConfiguration = SummaryContentPromoRowLevel1;
        component.ngOnInit();
        expect(component.labelConfiguration).toBe(SummaryContentPromoRowLevel1);
        expect(component.priceConfiguration).toBe(SummaryContentPromoRowLevel1);
      });
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
