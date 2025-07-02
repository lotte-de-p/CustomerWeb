import { ComponentFixture, TestBed } from '@angular/core/testing';

import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { OmapiProduct, ServiceInterface, SpecificationInterface } from '@telenet/ng-lib-omapi';
import { of } from 'rxjs';
import { Option, Product } from '../models/product.model';
import { ProductLevelSpecificationsComponent } from './product-level-specifications.component';

describe('ProductLevelSpecificationsComponent', () => {
  let component: ProductLevelSpecificationsComponent;
  let fixture: ComponentFixture<ProductLevelSpecificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ProductLevelSpecificationsComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        StoreModule.forRoot({}),
        EffectsModule.forRoot({}),
      ],
    }).compileComponents();

    jest.spyOn(console, 'warn').mockImplementation(jest.fn);
    fixture = TestBed.createComponent(ProductLevelSpecificationsComponent);
    component = fixture.componentInstance;

    component.product = {
      productInfo: {
        getSortedSpecifications: () => {
          return [{}];
        },
      },
      productType: 'productType',
      options: [] as Option[],
      price: {
        taxInclPrices: {},
      },
    } as Product;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onInit', () => {
    it('ngOnInit', () => {
      jest.spyOn(component.product.productInfo, 'getSortedSpecifications');

      component.ngOnInit();

      expect(component.product.productInfo.getSortedSpecifications).toHaveBeenCalled();
    });

    it('ngOnInit when bundle but not the same types', () => {
      jest
        .spyOn(component.product.productInfo, 'getSortedSpecifications')
        .mockReturnValue([{ productType: 'TEST' } as SpecificationInterface]);
      component.isBundle = true;
      component.product.productInfo.productType = 'PRODUCTTYPE';

      component.ngOnInit();

      expect(component.product.productInfo.getSortedSpecifications).toHaveBeenCalled();
      expect(component.specifications).toEqual([]);
    });
    it('ngOnInit when bundle with same types', () => {
      const specificationReturn = { productType: 'PRODUCTTYPE' } as SpecificationInterface;
      jest.spyOn(component.product.productInfo, 'getSortedSpecifications').mockReturnValue([specificationReturn]);
      component.isBundle = true;
      component.product.productInfo.productType = 'PRODUCTTYPE';

      component.ngOnInit();

      expect(component.product.productInfo.getSortedSpecifications).toHaveBeenCalled();
      expect(component.specifications).toEqual([specificationReturn]);
    });
    it('ngOnInit when bundle and no producttype in specs', () => {
      const specificationReturn = {} as SpecificationInterface;
      jest.spyOn(component.product.productInfo, 'getSortedSpecifications').mockReturnValue([specificationReturn]);
      component.isBundle = true;
      component.product.productInfo.productType = 'PRODUCTTYPE';

      component.ngOnInit();

      expect(component.product.productInfo.getSortedSpecifications).toHaveBeenCalled();
      expect(component.specifications).toEqual([]);
    });

    it('ngOnInit when no specifications on product, try to retrieve them from bundle', () => {
      component.isBundle = false;
      jest.spyOn(component.product.productInfo, 'getSortedSpecifications').mockReturnValue([]);
      jest.spyOn(component, 'retrieveAndSetSpecifications');

      component.ngOnInit();

      expect(component.retrieveAndSetSpecifications).toHaveBeenCalled();
    });
  });

  describe('getLocalizedLabel', () => {
    it('UNLIMITED', () => {
      jest.spyOn(component['translateService'], 'instant').mockReturnValue('UNLIMITED_TRANSLATED');

      const returnValue = component.getLocalizedLabel('UNLIMITED');

      expect(returnValue).toEqual('UNLIMITED_TRANSLATED');
    });

    it('NUMBER', () => {
      jest.spyOn(component['translateService'], 'instant').mockReturnValue('NUMBER_TRANSLATED');

      const returnValue = component.getLocalizedLabel('nuMber');

      expect(returnValue).toEqual('NUMBER_TRANSLATED');
    });

    it('return value is value is empty', () => {
      const returnValue = component.getLocalizedLabel('');

      expect(returnValue).toEqual('');
    });

    it('return value is value is not found', () => {
      const returnValue = component.getLocalizedLabel('this.is.a.label');

      expect(returnValue).toEqual('this.is.a.label');
    });
  });

  describe('retrieveAndSetSpecifications', () => {
    it('should retrieve and set the specifications', () => {
      const mockProducts: Product[] = [
        {
          productType: 'bundle',
          children: [],
        } as unknown as Product,
        {
          productType: 'bundle',
          children: [
            {
              id: 'unwanted',
              productType: 'some_type',
            },
            {
              id: 'wanted',
              productType: 'mobile',
              productInfo: {
                services: [],
              },
            },
          ],
        } as unknown as Product,
      ];
      component.product.productInfo.productType = 'mobile';
      jest
        .spyOn(component['productOverviewFacade'], 'selectedAccountProducts$', 'get')
        .mockReturnValue(of(mockProducts));

      jest
        .spyOn(component, 'getSpecificationsForProductType')
        .mockReturnValue([{ id: 'wanted_spec' } as SpecificationInterface]);

      component.retrieveAndSetSpecifications();

      expect(component.specifications).toEqual([{ id: 'wanted_spec' }]);
    });
  });

  describe('getSpecificationsForProductType', () => {
    it('should return an empty array when no product or services present', () => {
      const resultValueNoProduct = component['getSpecificationsForProductType'](undefined, 'productType');
      expect(resultValueNoProduct).toEqual([]);

      const product = {
        productInfo: {
          services: undefined,
        } as unknown as OmapiProduct,
      } as Product;

      const resultValueNoServices = component.getSpecificationsForProductType(product, 'productType');
      expect(resultValueNoServices).toEqual([]);
    });

    it('should get specifications when product type is "internet"', () => {
      const unwantedService = {
        serviceType: 'some_type',
        specifications: [{ id: 'unwanted' } as SpecificationInterface],
      };
      const wantedService = {
        serviceType: 'fixed_internet',
        specifications: [{ id: 'wanted' } as SpecificationInterface],
      };

      const product = {
        productInfo: {
          services: [unwantedService, wantedService],
        },
      } as Product;

      const resultValue = component.getSpecificationsForProductType(product, 'internet');

      expect(resultValue).toEqual(wantedService.specifications);
    });

    it('should get specifications when product type is "mobile"', () => {
      const wantedService = {
        serviceType: 'mobile_internet',
        specifications: [{ id: 'wanted' } as SpecificationInterface],
      };
      const product = {
        productInfo: {
          services: [wantedService],
        },
      } as Product;
      jest.spyOn(component, 'filterMobileSpecs');

      component.getSpecificationsForProductType(product, 'mobile');

      expect(component.filterMobileSpecs).toHaveBeenCalledWith(wantedService, false);
    });

    it('should get specifications when product type is "dtv"', () => {
      const unwantedService = {
        serviceType: 'some_type',
        specifications: [{ id: 'unwanted' } as SpecificationInterface],
      };
      const wantedService = {
        serviceType: 'dtv',
        specifications: [{ id: 'wanted' } as SpecificationInterface],
      };

      const product = {
        productInfo: {
          services: [unwantedService, wantedService],
        },
      } as Product;

      const resultValue = component.getSpecificationsForProductType(product, 'dtv');

      expect(resultValue).toEqual(wantedService.specifications);
    });

    it('should get specifications when product type is "telephone"', () => {
      const unwantedService = {
        serviceType: 'some_type',
        specifications: [{ id: 'unwanted' } as SpecificationInterface],
      };
      const wantedService = {
        serviceType: 'fixed_calling',
        specifications: [{ id: 'wanted' } as SpecificationInterface],
      };

      const product = {
        productInfo: {
          services: [unwantedService, wantedService],
        },
      } as Product;

      const resultValue = component.getSpecificationsForProductType(product, 'telephone');

      expect(resultValue).toEqual(wantedService.specifications);
    });

    it('should get specifications when product type is "streaming"', () => {
      const unwantedService = {
        serviceType: 'some_type',
        specifications: [{ id: 'unwanted' } as SpecificationInterface],
      };
      const wantedService = {
        serviceType: 'streaming',
        specifications: [{ id: 'wanted' } as SpecificationInterface],
      };

      const product = {
        productInfo: {
          services: [unwantedService, wantedService],
        },
      } as Product;

      const resultValue = component.getSpecificationsForProductType(product, 'streaming');

      expect(resultValue).toEqual(wantedService.specifications);
    });

    it('should return empty array when product type is unknown', () => {
      const wantedService = {
        serviceType: 'mobile_internet',
        specifications: [{ id: 'wanted' } as SpecificationInterface],
      };

      const product = {
        productInfo: {
          services: [wantedService],
        },
      } as Product;

      const resultValue = component.getSpecificationsForProductType(product, 'xxxxxx');

      expect(resultValue).toEqual([]);
    });
  });

  describe('filterMobileSpecs', () => {
    it('should return only "mobile_internet" when product is Data Only Mobile Line', () => {
      const spec1: ServiceInterface = {
        serviceType: 'MOBILE_INTERNET',
        specifications: [],
      };

      const spec2: ServiceInterface = {
        serviceType: 'MOBILE_CALLING',
        specifications: [],
      };

      const resultValue1 = component['filterMobileSpecs'](spec1, true);
      expect(resultValue1).toEqual(true);

      const resultValue2 = component['filterMobileSpecs'](spec2, true);
      expect(resultValue2).toEqual(false);
    });
  });

  it('should return true when "mobile_internet" or "mobile_calling"', () => {
    const spec1: ServiceInterface = {
      serviceType: 'MOBILE_INTERNET',
      specifications: [],
    };

    const spec2: ServiceInterface = {
      serviceType: 'MOBILE_CALLING',
      specifications: [],
    };

    const resultValue1 = component['filterMobileSpecs'](spec1, false);
    expect(resultValue1).toEqual(true);

    const resultValue2 = component['filterMobileSpecs'](spec2, false);
    expect(resultValue2).toEqual(true);
  });

  describe('isDataOnlyMobileLine', () => {
    it('should return true when producttype is "DATA ONLY MOBILE LINE"', () => {
      component.product = {
        productInfo: {
          productType: 'DATA ONLY MOBILE LINE',
        } as OmapiProduct,
      } as Product;

      const returnValue = component.isDataOnlyMobileLine();

      expect(returnValue).toEqual(true);
    });

    it('should return false when producttype is not "DATA ONLY MOBILE LINE"', () => {
      component.product = {
        productInfo: {
          productType: 'data-not-only-mobile-line',
        } as OmapiProduct,
      } as Product;

      const returnValue = component.isDataOnlyMobileLine();

      expect(returnValue).toEqual(false);
    });
  });

  describe('removeLimitedIfBothLimitedAndUnlimitedExist', () => {
    it('should return spliced array', () => {
      const specs = [
        {
          labelKey: 'test-mobile-data-allowance-limited',
        },
        {
          labelKey: 'another-test-again-mobile-data-allowance-unlimited',
        },
      ] as SpecificationInterface[];

      const returnValue = component.removeLimitedIfBothLimitedAndUnlimitedExist(specs);

      expect(returnValue).toEqual([{ labelKey: 'another-test-again-mobile-data-allowance-unlimited' }]);
    });

    it('should return unaltered array', () => {
      const specs = [
        {
          labelKey: 'test-mobile-data-limited',
        },
        {
          labelKey: 'another-test-mobile-data-unlimited',
        },
      ] as SpecificationInterface[];

      const returnValue = component.removeLimitedIfBothLimitedAndUnlimitedExist(specs);

      expect(returnValue).toEqual(specs);
    });
  });

  describe('getLimitedSpecIndex', () => {
    it('should find index if existing', () => {
      const specs = [
        {
          labelKey: 'test-limited-mobile-data-allowance-limited',
        },
        {
          labelKey: 'another-mobile-data-allowance-unlimited',
        },
      ] as SpecificationInterface[];

      const returnValue = component.getLimitedSpecIndex(specs);

      expect(returnValue).toEqual(0);
    });

    it('should return -1 ', () => {
      const specs = [
        {
          labelKey: 'test-mobile-data',
        },
        {
          labelKey: 'another-test-unlimited-mobile-data-allowance-unlimited',
        },
      ] as SpecificationInterface[];

      const returnValue = component.getLimitedSpecIndex(specs);

      expect(returnValue).toEqual(-1);
    });
  });

  describe('getUnlimitedSpecIndex', () => {
    it('should find index if existing', () => {
      const specs = [
        {
          labelKey: 'test-unlimited-mobile-data-allowance-limited',
        },
        {
          labelKey: 'another-test-mobile-data-allowance-unlimited',
        },
      ] as SpecificationInterface[];

      const returnValue = component.getUnlimitedSpecIndex(specs);

      expect(returnValue).toEqual(1);
    });

    it('should return -1 ', () => {
      const specs = [
        {
          labelKey: 'test-mobile-data',
        },
        {
          labelKey: 'another-test',
        },
      ] as SpecificationInterface[];

      const returnValue = component.getUnlimitedSpecIndex(specs);

      expect(returnValue).toEqual(-1);
    });
  });
});
