import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ProductSummaryComponent } from './product-summary.component';
import { FormBuilder } from '@angular/forms';
import {
  CustomerChosenManualDiscountInterface,
  MockCreateSalesOrderRequest,
  MockSelectedProductInterface,
} from '../../models/mock-create-sales-order-request.model';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { JsonUrlService, UrlService } from '@telenet/ng-lib-page';
import { MockProductsService } from '../../services/mock-products.service';

const CID = 'cid';
const manaualDiscount = {
  type: CID,
  discountCode: 'telenet',
} as CustomerChosenManualDiscountInterface;
const selectedProduct = [
  {
    isProductTypeHardwareCheck: false,
    manualDiscount: manaualDiscount,
    product: {
      sku: 'INTB001',
      type: 'Internet',
      title: 'Internet Plans',
    },
  },
] as MockSelectedProductInterface[];
const SALES_URL = 'https://www.int.base.be/en/sales';
const offers = {
  offers: [
    {
      id: 'EQUI0259',
      type: 'Smartphone',
    },
    {
      id: 'BOYO0029',
      type: 'Mobile',
    },
  ],
} as MockCreateSalesOrderRequest;
const noManaualDiscount = {} as CustomerChosenManualDiscountInterface;
const interNetProduct = {
  product: { sku: 'BASE0150', type: 'internet', title: 'internet limited' },
  isProductTypeHardwareCheck: false,
  manualDiscount: noManaualDiscount,
};
const mockResponse = jest.fn();
Object.defineProperty(window, 'location', {
  value: {
    hash: {
      endsWith: mockResponse,
      includes: mockResponse,
    },
    assign: mockResponse,
  },
  writable: true,
});
const internetProductWitDiscount = {
  product: { sku: 'BASE0150', type: 'internet', title: 'internet limited' },
  isProductTypeHardwareCheck: false,
  manualDiscount: manaualDiscount,
};

const DOMAIN_NAME = 'domain-name';
const DOMAIN_NAME_PRODUCT = { sku: 'DOMN1002', type: DOMAIN_NAME, title: 'domain-name-2' };
describe('ProductSummaryComponent', () => {
  let component: ProductSummaryComponent;
  let fixture: ComponentFixture<ProductSummaryComponent>;
  let mockProductsService: MockProductsService;
  let urlService: UrlService;
  let jsonUrlService: JsonUrlService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [FormBuilder, { provide: 'Window', useValue: window }, MockProductsService, UrlService],
    }).compileComponents();
    mockProductsService = TestBed.inject(MockProductsService);
    urlService = TestBed.inject(UrlService);
    jsonUrlService = TestBed.inject(JsonUrlService);
    fixture = TestBed.createComponent(ProductSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should init selected products ', () => {
      jest.spyOn(mockProductsService, 'getAllProducts').mockReturnValue(of(selectedProduct));
      component.ngOnInit();
      expect(component.selectedProducts).toBe(selectedProduct);
    });
  });

  describe('expandChevron', () => {
    it('should change the state of chevron to opened', () => {
      component.chevronExpanded = false;
      component.expandChevron();
      expect(component.chevronExpanded).toBe(true);
    });
    it('should change the state of chevron to closed', () => {
      component.chevronExpanded = true;
      component.expandChevron();
      expect(component.chevronExpanded).toBe(false);
    });
  });

  describe('deleteProduct', function () {
    it('should call mock product component to delete products and offers', () => {
      jest.spyOn(mockProductsService, 'deleteProduct');
      component.deleteProduct(0);
      expect(mockProductsService.deleteProduct).toHaveBeenCalledWith(0);
    });
  });

  describe('Submit', () => {
    it('should redirect to correct sales url with correct sdata which has no hardware on submit', fakeAsync(() => {
      jest.spyOn(mockProductsService, 'getAllProducts').mockReturnValue(of([interNetProduct]));
      jest.spyOn(mockProductsService, 'getOffers').mockReturnValue(of(offers));
      jest.spyOn(urlService, 'redirectTo');

      const encodedString = 'XQAAAAIjAAAAAAAAAABAqYnmbFEIbVbO7gEot3B4b5SZE4CcYhLtXznaU-11lNN2skEPH_5a__-ONgAA';
      jest.spyOn(jsonUrlService, 'compress').mockReturnValue(of(encodedString));
      component.salesUrl = SALES_URL;
      component.submit();
      const redirectUrl = component.salesUrl + '?flow=marketing&sdata=' + encodedString;
      tick();
      expect(urlService.redirectTo).toHaveBeenCalledWith(redirectUrl);
    }));

    it('should redirect to correct sales url with correct sdata which has manual selected discount  on submit', fakeAsync(() => {
      jest.spyOn(mockProductsService, 'getAllProducts').mockReturnValue(of([internetProductWitDiscount]));
      jest.spyOn(mockProductsService, 'getOffers').mockReturnValue(of(offers));
      const encodedString =
        'XQAAAAJDAAAAAAAAAABBKYnmbFEIbVbO7gEot29rEykgXbPGuRSkmi4Z8OddY1GNz8iNwnRerF6TraY3VjoM_Bq6nhQkVQ-i7e1V_UGuFlbuAUfg___FtOAA';
      jest.spyOn(jsonUrlService, 'compress').mockReturnValue(of(encodedString));
      const manualDiscountType = CID;
      const manualDiscountCode = 'telenet';

      jest.spyOn(urlService, 'redirectTo');
      component.salesUrl = SALES_URL;
      const salesUrl = component.salesUrl + '?' + manualDiscountType + '=' + manualDiscountCode;
      const redirectUrl = salesUrl + '&flow=marketing&sdata=' + encodedString;
      component.submit();
      tick();
      expect(urlService.redirectTo).toHaveBeenCalledWith(redirectUrl);
    }));

    it('should redirect to correct sales url with correct sdata which has hardware on submit', fakeAsync(() => {
      internetProductWitDiscount.isProductTypeHardwareCheck = true;
      jest.spyOn(mockProductsService, 'getAllProducts').mockReturnValue(of([internetProductWitDiscount]));
      jest.spyOn(mockProductsService, 'getOffers').mockReturnValue(of(offers));
      const encodedString = 'XQAAAAIjAAAAAAAAAABAqYnmbFEIbVbO7gEot3B4b5SZE4CcYhLtXznaU-11lNN2skEPH_5a__-ONgAA';
      jest.spyOn(jsonUrlService, 'compress').mockReturnValue(of(encodedString));
      jest.spyOn(urlService, 'redirectTo');
      component.salesUrl = SALES_URL;
      const manualDiscountType = CID;
      const manualDiscountCode = 'telenet';
      const redirectUrl =
        component.salesUrl +
        '?' +
        manualDiscountType +
        '=' +
        manualDiscountCode +
        '&flow=marketing&intent=hardware&sdata=' +
        encodedString;
      component.submit();
      tick();
      expect(urlService.redirectTo).toHaveBeenCalledWith(redirectUrl);
    }));

    it('should redirect to correct sales url with correct sdata which has product type domain-name on submit', fakeAsync(() => {
      jest.spyOn(mockProductsService, 'getAllProducts').mockReturnValue(
        of([
          {
            product: DOMAIN_NAME_PRODUCT,
            isProductTypeHardwareCheck: false,
            manualDiscount: manaualDiscount,
          },
        ])
      );
      jest.spyOn(mockProductsService, 'getOffers').mockReturnValue(of(offers));
      const manualDiscountType = CID;
      const manualDiscountCode = 'telenet';
      const encodedString =
        'XQAAAAJbAAAAAAAAAABAqYnmbFEIbVbO-Byot3B5oqG0vEgqx-HgGxUkqh3QlBe8UPQiu56uputRil1_WYQlhbt4mLbiCtHGBZtSljKSCWaDWTGrK5LuBFp4VgAL3pL1ofecLxBB__nX0AA';

      jest.spyOn(jsonUrlService, 'compress').mockReturnValue(of(encodedString));
      jest.spyOn(urlService, 'redirectTo');
      component.salesUrl = SALES_URL;
      const redirectUrl =
        component.salesUrl +
        '?' +
        manualDiscountType +
        '=' +
        manualDiscountCode +
        '&flow=marketing&intent=domain-name&sdata=' +
        encodedString;
      component.submit();
      tick();
      expect(urlService.redirectTo).toHaveBeenCalledWith(redirectUrl);
    }));
  });
});
