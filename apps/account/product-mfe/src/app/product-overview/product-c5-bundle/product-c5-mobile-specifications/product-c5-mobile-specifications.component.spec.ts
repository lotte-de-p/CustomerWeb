import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductC5MobileSpecificationsComponent } from './product-c5-mobile-specifications.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { UrlService } from '@telenet/ng-lib-page';
import { Option, Product } from '../../models/product.model';
import { OmapiProduct, SpecificationInterface } from '@telenet/ng-lib-omapi';

const DATA_ONLY_MOBILE_LINE = 'data-only-mobile-line';

describe('ProductC5MobileSpecificationsComponent', () => {
  let component: ProductC5MobileSpecificationsComponent;
  let fixture: ComponentFixture<ProductC5MobileSpecificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ProductC5MobileSpecificationsComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [UrlService, { provide: 'Window', useValue: { location: {} } }],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductC5MobileSpecificationsComponent);
    component = fixture.componentInstance;

    component.product = {
      productInfo: {
        subCategory: {},
      } as OmapiProduct,
      isProductActivationInProgress: () => false,
      isProductDisconnectionInProgress: () => false,
      isProductModificationInProgress: () => false,
      isProductSuspended: () => false,
    } as Product;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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

  describe('getLineSpecification', () => {
    it('should get specifications', () => {
      jest.spyOn(component, 'getBundleSpecifications').mockReturnValue([] as SpecificationInterface[]);
      jest
        .spyOn(component, 'removeLimitedIfBothLimitedAndUnlimitedExist')
        .mockReturnValue([] as SpecificationInterface[]);
      component.product = {
        productInfo: {
          productType: DATA_ONLY_MOBILE_LINE,
        } as OmapiProduct,
      } as Product;
      const returnValue = component.getLineSpecification();

      expect(component.getBundleSpecifications).toHaveBeenCalled();
      expect(component.removeLimitedIfBothLimitedAndUnlimitedExist).toHaveBeenCalled();
      expect(returnValue).toEqual([]);
    });
  });

  describe('getBundleSpecifications', () => {
    it('should get specifications - internet', () => {
      jest.spyOn(component, 'filterMobileSpecs').mockReturnValue(true);
      component.product = {
        productType: 'internet',
        productInfo: {
          productType: DATA_ONLY_MOBILE_LINE,
        } as OmapiProduct,
      } as Product;

      const spec = {
        serviceType: 'fixed_internet',
      } as SpecificationInterface;

      component.specifications = [spec];

      const returnValue = component.getBundleSpecifications();

      expect(component.filterMobileSpecs).not.toHaveBeenCalled();
      expect(returnValue).toEqual([spec]);
    });

    it('should get specifications - mobile', () => {
      jest.spyOn(component, 'filterMobileSpecs').mockReturnValue(true);
      component.product = {
        productType: 'mobile',
        productInfo: {
          productType: DATA_ONLY_MOBILE_LINE,
        } as OmapiProduct,
      } as Product;

      const spec = {
        serviceType: 'mobile_internet',
      } as SpecificationInterface;

      component.specifications = [spec];

      const returnValue = component.getBundleSpecifications();

      expect(component.filterMobileSpecs).toHaveBeenCalledWith(spec, undefined);
      expect(returnValue).toEqual([spec]);
    });

    it('should get specifications - dtv', () => {
      jest.spyOn(component, 'filterMobileSpecs').mockReturnValue(true);
      component.product = {
        productType: 'dtv',
        productInfo: {
          productType: DATA_ONLY_MOBILE_LINE,
        } as OmapiProduct,
      } as Product;

      const spec = {
        serviceType: 'dtv',
      } as SpecificationInterface;

      component.specifications = [spec];

      const returnValue = component.getBundleSpecifications();

      expect(returnValue).toEqual([spec]);
    });

    it('should get specifications - telephone', () => {
      jest.spyOn(component, 'filterMobileSpecs').mockReturnValue(true);
      component.product = {
        productType: 'telephone',
        productInfo: {
          productType: DATA_ONLY_MOBILE_LINE,
        } as OmapiProduct,
      } as Product;

      const spec = {
        serviceType: 'fixed_calling',
      } as SpecificationInterface;

      component.specifications = [spec];

      const returnValue = component.getBundleSpecifications();

      expect(returnValue).toEqual([spec]);
    });

    it('should get specifications - streaming', () => {
      jest.spyOn(component, 'filterMobileSpecs').mockReturnValue(true);
      component.product = {
        productType: 'streaming',
        productInfo: {
          productType: DATA_ONLY_MOBILE_LINE,
        } as OmapiProduct,
      } as Product;

      const spec = {
        serviceType: 'streaming',
      } as SpecificationInterface;

      component.specifications = [spec];

      const returnValue = component.getBundleSpecifications();

      expect(returnValue).toEqual([spec]);
    });

    it('should get no specifications', () => {
      jest.spyOn(component, 'filterMobileSpecs').mockReturnValue(true);
      component.product = {
        productType: 'productType',
        productInfo: {
          productType: DATA_ONLY_MOBILE_LINE,
        } as OmapiProduct,
      } as Product;

      const spec = {
        serviceType: 'streaming',
      } as SpecificationInterface;

      component.specifications = [spec];

      const returnValue = component.getBundleSpecifications();

      expect(returnValue).toEqual([]);
    });

    it('should get specifications from option', () => {
      jest.spyOn(component, 'filterMobileSpecs').mockReturnValue(true);
      component.product = {
        productType: 'productType',
        productInfo: {
          productType: DATA_ONLY_MOBILE_LINE,
        } as OmapiProduct,
      } as Product;

      const option = {
        productType: 'streaming',
      } as Option;

      const spec = {
        serviceType: 'streaming',
      } as SpecificationInterface;

      component.specifications = [spec];

      const returnValue = component.getBundleSpecifications(option);

      expect(returnValue).toEqual([spec]);
    });
  });

  describe('getFormattedSpecifications', () => {
    it('should getFormattedSpecifications', () => {
      const returnValue = component.getFormattedSpecifications('test\ntest2\n');
      expect(returnValue).toEqual('test<li>test2<li>');
    });

    it('should return empty string', () => {
      const returnValue = component.getFormattedSpecifications();
      expect(returnValue).toEqual('');
    });
  });

  describe('filterMobileSpecs', () => {
    it('should return if it can be filtered based on serviceType', () => {
      const spec = {
        serviceType: 'mobile_internet',
      } as SpecificationInterface;
      component.product = {
        productInfo: {
          productType: DATA_ONLY_MOBILE_LINE,
        },
      } as Product;

      const returnValue = component.filterMobileSpecs(spec);

      expect(returnValue).toEqual(true);
    });
    it('should return if it can be filtered based on serviceType - mobile_calling', () => {
      const spec = {
        serviceType: 'mobile_calling',
      } as SpecificationInterface;
      component.product = {
        productInfo: {
          productType: 'data',
        },
      } as Product;

      const returnValue = component.filterMobileSpecs(spec);

      expect(returnValue).toEqual(true);
    });
    it('should return false when comparing', () => {
      const spec = {
        serviceType: 'mobile',
      } as SpecificationInterface;
      component.product = {
        productInfo: {
          productType: 'data',
        },
      } as Product;

      const returnValue = component.filterMobileSpecs(spec);

      expect(returnValue).toEqual(false);
    });
    it('should return true when comparing from option', () => {
      const spec = {
        serviceType: 'mobile_internet',
      } as SpecificationInterface;
      component.product = {
        productInfo: {
          productType: 'data',
        },
      } as Product;

      const option = {
        productInfo: {
          productType: DATA_ONLY_MOBILE_LINE,
        },
      } as Option;

      const returnValue = component.filterMobileSpecs(spec, option);

      expect(returnValue).toEqual(true);
    });
  });

  describe('removeLimitedIfBothLimitedAndUnlimitedExist', () => {
    it('should remove spec from array', () => {
      const specs = [
        {
          labelKey: 'mobile-data-allowance-limited',
        } as SpecificationInterface,
        {
          labelKey: 'test',
        } as SpecificationInterface,
        {
          labelKey: 'yyyy',
        } as SpecificationInterface,
        {
          labelKey: 'mobile-data-allowance-unlimited',
        } as SpecificationInterface,
      ];

      component.removeLimitedIfBothLimitedAndUnlimitedExist(specs);

      expect(specs.length).toEqual(3);
    });
  });
});
