import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { Store } from '@ngxs/store';
import { CookieService } from 'ngx-cookie-service';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing';
import { MockMarketingComponent } from './mock-marketing.component';
import { MockMarketingProduct } from './models/mock-marketing-product.model';
import {
  CustomerChosenManualDiscountInterface,
  MockCreateSalesOrderRequestBody,
  MockSelectedProductInterface,
} from './models/mock-create-sales-order-request.model';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PriceService } from '@telenet/ng-lib-form';
import { BrowserModule } from '@angular/platform-browser';
import { MockProductsService } from './services/mock-products.service';

const MOBILE_PLAN = 'mobile-plan';
const DOMAIN_NAME = 'domain-name';
const BASED_ON_YOU_29 = 'Based on you 29';
const SAMSUNG_A10_GALAXY_BLK_32GB = 'SAMSUNG A10 GALAXY BLK 32GB';
const DOMAIN_NAME_PRODUCT = { sku: 'DOMN1002', type: DOMAIN_NAME, title: 'domain-name-2' };
const ALL_INTERNET_TV_SKU = 'TWOP0010';
const ALL_INTERNET_TV = 'All-Internet + Telenet TV';
const CID = 'cid';
const manaualDiscount = {
  type: CID,
  discountCode: 'telenet',
} as CustomerChosenManualDiscountInterface;
const noManaualDiscount = {} as CustomerChosenManualDiscountInterface;

describe('MockMarketingComponent', () => {
  let component: MockMarketingComponent,
    fixture: ComponentFixture<MockMarketingComponent>,
    formBuilder: FormBuilder,
    fbGroup: FormGroup,
    mockProductsService: MockProductsService;

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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        HttpClientTestingModule,
      ],
      providers: [Store, CookieService, FormBuilder, PriceService, { provide: 'Window', useValue: window }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    mockProductsService = TestBed.inject(MockProductsService);
    fixture = TestBed.createComponent(MockMarketingComponent);
    component = fixture.componentInstance;
    formBuilder = TestBed.inject(FormBuilder);

    component.selectedProducts = [];
    fbGroup = formBuilder.group({
      selectedDiscountType: [''],
      endValidityDate: [''],
      price: [''],
      options: [{}],
    });
  });

  describe('ngOnInit', () => {
    it('should create the component', waitForAsync(() => {
      component.ngOnInit();
      expect(component).toBeTruthy();
      expect(component.hasProducts).toBeFalsy();
    }));

    it('should set hasProducts to TRUE productList', () => {
      component.productListJSONString = [
        {
          sku: 'BOYO0020',
          title: 'Based on you 20',
          price: '',
          type: MOBILE_PLAN,
          addOns: [],
        },
        {
          sku: 'BOYO0015',
          title: 'Based on you 15',
          price: '',
          type: MOBILE_PLAN,
          addOns: [],
        },
      ];
      component.ngOnInit();
      expect(component.productList[0].title).toBe('Based on you 20');
      expect(component.productList[1].title).toBe('Based on you 15');
      expect(component.hasProducts).toBe(true);
      expect(component.discountFormArr.length).toBe(2);
    });

    it('should set hasProducts to FALSE when productList is empty', () => {
      component.productListJSONString = [];
      component.ngOnInit();
      expect(component.hasProducts).toBe(false);
    });
  });

  describe('createReqBody', () => {
    it('should create Sales order Request Structure with multiple products, when domain-name product details are available', () => {
      component.selectedProducts.push({
        product: DOMAIN_NAME_PRODUCT,
        isProductTypeHardwareCheck: false,
        manualDiscount: manaualDiscount,
      });
      const product: MockMarketingProduct = {
        sku: 'DOMN1001',
        type: DOMAIN_NAME,
        title: DOMAIN_NAME,
      };
      const customerChosenDomainForm: FormGroup = formBuilder.group({
        domainName: 'telenet',
        domainExtension: 'com',
        orderType: 'new',
      });
      jest.spyOn(mockProductsService, 'addProducts');
      component.createReqBody(product, customerChosenDomainForm);
      const products = {
        product: {
          sku: 'DOMN1001',
          type: DOMAIN_NAME,
          title: DOMAIN_NAME,
        },
        isProductTypeHardwareCheck: false,
        manualDiscount: noManaualDiscount,
      } as MockSelectedProductInterface;
      const offers = {
        id: 'DOMN1001',
        type: 'Domain-name',
        chars: [{ orderType: 'new', domainName: 'telenet', extention: 'com' }],
      } as MockCreateSalesOrderRequestBody;
      expect(mockProductsService.addProducts).toHaveBeenCalledWith(products, offers);
    });

    it('should create Sales order Request Structure when manual discount is applied', () => {
      const product: MockMarketingProduct = {
        sku: 'INTB001',
        type: 'Internet',
        title: 'Internet Plans',
      };
      const customerChosenManualDiscountForm: FormGroup = formBuilder.group({
        manualSelectedDiscount: CID,
        discountCode: 'telenet',
      });
      jest.spyOn(mockProductsService, 'addProducts');
      component.createReqBody(product, customerChosenManualDiscountForm);
      const selectedProduct = {
        isProductTypeHardwareCheck: false,
        manualDiscount: manaualDiscount,
        product: {
          sku: 'INTB001',
          type: 'Internet',
          title: 'Internet Plans',
        },
      } as MockSelectedProductInterface;
      const offer = { id: 'INTB001', type: 'Internet' } as MockCreateSalesOrderRequestBody;
      expect(mockProductsService.addProducts).toHaveBeenCalledWith(selectedProduct, offer);
    });

    it('should create Sales order Request Structure for fixed Telephone', () => {
      const product: MockMarketingProduct = {
        sku: 'FIXED0001',
        title: 'Telenet Phone',
        price: '',
        type: 'fixed-telephone',
        addOns: [],
      };

      jest.spyOn(mockProductsService, 'addProducts');
      component.createReqBody(product, fbGroup);
      const selectedProduct = {
        isProductTypeHardwareCheck: false,
        manualDiscount: noManaualDiscount,
        product: {
          addOns: [],
          price: '',
          sku: 'FIXED0001',
          title: 'Telenet Phone',
          type: 'fixed-telephone',
        },
      } as MockSelectedProductInterface;
      const offer = { id: 'FIXED0001', type: 'Telephone' } as MockCreateSalesOrderRequestBody;
      expect(mockProductsService.addProducts).toHaveBeenCalledWith(selectedProduct, offer);
    });

    it('should create Sales order Request Structure with addons', () => {
      const product: MockMarketingProduct = {
        sku: 'BOYO0029',
        title: BASED_ON_YOU_29,
        price: '',
        type: MOBILE_PLAN,
        isPimConfiguredProduct: true,
        addOns: [
          {
            title: SAMSUNG_A10_GALAXY_BLK_32GB,
            sku: '2056041',
            type: 'smartphone',
          },
        ],
      };
      jest.spyOn(mockProductsService, 'addProducts');
      component.createReqBody(product, fbGroup);
      const selectedProduct = {
        isProductTypeHardwareCheck: false,
        manualDiscount: {},
        product: {
          addOns: [
            {
              sku: '2056041',
              title: SAMSUNG_A10_GALAXY_BLK_32GB,
              type: 'smartphone',
            },
          ],
          isPimConfiguredProduct: true,
          price: '',
          sku: 'BOYO0029',
          title: BASED_ON_YOU_29,
          type: MOBILE_PLAN,
        },
      } as MockSelectedProductInterface;
      const offer = {
        id: 'BOYO0029',
        offers: [{ itemCode: '2056041', type: 'Smartphone' }],
        type: 'Mobile',
      } as MockCreateSalesOrderRequestBody;
      expect(mockProductsService.addProducts).toHaveBeenCalledWith(selectedProduct, offer);
    });

    it('should create Sales order Request Structure with addons in case of isPimConfiguredProduct as false', () => {
      const product: MockMarketingProduct = {
        sku: 'BOYO0029',
        title: BASED_ON_YOU_29,
        price: '',
        type: MOBILE_PLAN,
        isPimConfiguredProduct: false,
        addOns: [
          {
            title: SAMSUNG_A10_GALAXY_BLK_32GB,
            sku: '2056041',
            type: 'smartphone',
          },
        ],
      };
      jest.spyOn(mockProductsService, 'addProducts');
      component.createReqBody(product, fbGroup);
      const selecteProduct = {
        product: {
          sku: 'BOYO0029',
          title: BASED_ON_YOU_29,
          price: '',
          type: MOBILE_PLAN,
          isPimConfiguredProduct: false,
          addOns: [
            {
              title: SAMSUNG_A10_GALAXY_BLK_32GB,
              sku: '2056041',
              type: 'smartphone',
            },
          ],
        },
        isProductTypeHardwareCheck: false,
        manualDiscount: noManaualDiscount,
      } as MockSelectedProductInterface;
      const offer = {
        id: 'BOYO0029',
        offers: [{ id: '2056041', type: 'Smartphone' }],
        type: 'Mobile',
      };
      expect(mockProductsService.addProducts).toHaveBeenCalledWith(selecteProduct, offer);
    });

    it('should create Sales order Request Structure with addons and basic discount applied', () => {
      const product: MockMarketingProduct = {
        sku: 'HWTO0001',
        title: 'Hardware product',
        price: '',
        type: 'HARDWARE',
        isPimConfiguredProduct: true,
        addOns: [
          {
            title: SAMSUNG_A10_GALAXY_BLK_32GB,
            sku: '2056041',
            type: 'smartphone',
          },
        ],
      };

      const basicDiscountForm = formBuilder.group({
        selectedDiscountType: [component.BASIC_DISCOUNT],
        endValidityDate: [''],
        price: [''],
      });
      jest.spyOn(mockProductsService, 'addProducts');
      component.createReqBody(product, basicDiscountForm);
      const selectedProduct = {
        product: {
          sku: 'HWTO0001',
          title: 'Hardware product',
          price: '',
          type: 'HARDWARE',
          isPimConfiguredProduct: true,
          addOns: [
            {
              title: SAMSUNG_A10_GALAXY_BLK_32GB,
              sku: '2056041',
              type: 'smartphone',
            },
          ],
        },
        isProductTypeHardwareCheck: false,
        manualDiscount: noManaualDiscount,
      } as MockSelectedProductInterface;
      const offer = {
        id: 'HWTO0001',
        offers: [
          {
            customerChosenDiscount: {
              id: '9155501914465272430',
              price: '200,00',
              type: 'Basic Discount',
            },
            itemCode: '2056041',
            type: 'Smartphone',
          },
        ],
        type: 'Hardware',
      };
      expect(mockProductsService.addProducts).toHaveBeenCalledWith(selectedProduct, offer);
    });

    it('should create Sales order Request Structure with addons and on-topdiscount applied', () => {
      const product: MockMarketingProduct = {
        sku: 'BOYO0029',
        title: BASED_ON_YOU_29,
        price: '',
        isPimConfiguredProduct: true,
        type: MOBILE_PLAN,
        addOns: [
          {
            title: SAMSUNG_A10_GALAXY_BLK_32GB,
            sku: '2056041',
            type: 'smartphone',
          },
        ],
      };
      const discountFbGroup: FormGroup = formBuilder.group({
        selectedDiscountType: [component.ON_TOP_DISCOUNT],
        endValidityDate: ['2020'],
        price: ['200,00'],
      });
      jest.spyOn(mockProductsService, 'addProducts');
      component.createReqBody(product, discountFbGroup);
      const selectedProduct = {
        product: {
          sku: 'BOYO0029',
          title: BASED_ON_YOU_29,
          price: '',
          isPimConfiguredProduct: true,
          type: MOBILE_PLAN,
          addOns: [
            {
              title: SAMSUNG_A10_GALAXY_BLK_32GB,
              sku: '2056041',
              type: 'smartphone',
            },
          ],
        },
        isProductTypeHardwareCheck: false,
        manualDiscount: noManaualDiscount,
      };
      const offer = {
        id: 'BOYO0029',
        offers: [
          {
            customerChosenDiscount: {
              endvalidityDate: '2020',
              price: '200,00',
              type: 'On-Top Discount with Yugo Slot',
            },
            itemCode: '2056041',
            type: 'Smartphone',
          },
        ],
        type: 'Mobile',
      };
      expect(mockProductsService.addProducts).toHaveBeenCalledWith(selectedProduct, offer);
    });

    it('should create Sales order Request Structure with addons for smartphone product', () => {
      const product: MockMarketingProduct = {
        sku: 'BOYO0029',
        title: BASED_ON_YOU_29,
        price: '',
        isPimConfiguredProduct: true,
        type: MOBILE_PLAN,
        addOns: [
          {
            title: SAMSUNG_A10_GALAXY_BLK_32GB,
            sku: '2056041',
            type: 'smartphone',
          },
        ],
      };
      const discountFbGroup: FormGroup = formBuilder.group({
        selectedDiscountType: [component.ON_TOP_DISCOUNT],
        endValidityDate: ['2020'],
        price: ['200,00'],
      });
      jest.spyOn(mockProductsService, 'addProducts');
      component.createReqBody(product, discountFbGroup);
      const selectProduct = {
        product: {
          sku: 'BOYO0029',
          title: BASED_ON_YOU_29,
          price: '',
          isPimConfiguredProduct: true,
          type: MOBILE_PLAN,
          addOns: [
            {
              title: SAMSUNG_A10_GALAXY_BLK_32GB,
              sku: '2056041',
              type: 'smartphone',
            },
          ],
        },
        isProductTypeHardwareCheck: false,
        manualDiscount: noManaualDiscount,
      } as MockSelectedProductInterface;
      const offer = {
        id: 'BOYO0029',
        offers: [
          {
            customerChosenDiscount: {
              endvalidityDate: '2020',
              price: '200,00',
              type: 'On-Top Discount with Yugo Slot',
            },
            itemCode: '2056041',
            type: 'Smartphone',
          },
        ],
        type: 'Mobile',
      } as MockCreateSalesOrderRequestBody;
      expect(mockProductsService.addProducts).toHaveBeenCalledWith(selectProduct, offer);
    });

    it('should create Sales order Request Structure with options and content pack', () => {
      const product: MockMarketingProduct = {
        sku: ALL_INTERNET_TV_SKU,
        title: ALL_INTERNET_TV,
        price: '',
        type: 'Bundle',
        addOns: [],
      };
      const form = formBuilder.group({
        options: [
          [
            {
              id: 'TVPK0005',
              type: 'OPTION',
            },
          ],
        ],
      });
      jest.spyOn(mockProductsService, 'addProducts');
      component.createReqBody(product, form);
      const selectedProduct = {
        product: {
          sku: ALL_INTERNET_TV_SKU,
          title: ALL_INTERNET_TV,
          price: '',
          type: 'Bundle',
          addOns: [],
        },
        isProductTypeHardwareCheck: false,
        manualDiscount: noManaualDiscount,
      } as MockSelectedProductInterface;
      const offer = {
        id: 'TWOP0010',
        type: 'Bundle',
        offers: [
          {
            id: 'TVPK0005',
            type: 'OPTION',
          },
        ],
      };
      expect(mockProductsService.addProducts).toHaveBeenCalledWith(selectedProduct, offer);
    });

    it('should create Sales order Request Structure with options, content pack and add ons', () => {
      const product: MockMarketingProduct = {
        sku: ALL_INTERNET_TV_SKU,
        title: ALL_INTERNET_TV,
        price: '',
        type: 'Bundle',
        addOns: [
          {
            sku: 'EQUI0250',
            title: SAMSUNG_A10_GALAXY_BLK_32GB,
            price: '',
            type: 'Smartphone',
          },
        ],
      };
      const form = formBuilder.group({
        options: [
          [
            {
              id: 'TVPK0005',
              type: 'OPTION',
            },
          ],
        ],
      });

      jest.spyOn(mockProductsService, 'addProducts');
      component.createReqBody(product, form);
      const selectedProduct = {
        product: {
          sku: ALL_INTERNET_TV_SKU,
          title: ALL_INTERNET_TV,
          price: '',
          type: 'Bundle',
          addOns: [
            {
              sku: 'EQUI0250',
              title: SAMSUNG_A10_GALAXY_BLK_32GB,
              price: '',
              type: 'Smartphone',
            },
          ],
        },
        isProductTypeHardwareCheck: false,
        manualDiscount: noManaualDiscount,
      } as MockSelectedProductInterface;
      const offer = {
        id: 'TWOP0010',
        offers: [
          {
            id: 'EQUI0250',
            type: 'Smartphone',
          },
          {
            id: 'TVPK0005',
            type: 'OPTION',
          },
        ],
        type: 'Bundle',
      };
      expect(mockProductsService.addProducts).toHaveBeenCalledWith(selectedProduct, offer);
    });
  });

  describe('isProductTypeHardware', () => {
    it('should return false if product has no hardware', fakeAsync(() => {
      const product: MockMarketingProduct = {
        sku: 'BOYO0029',
        title: BASED_ON_YOU_29,
        price: '',
        type: MOBILE_PLAN,
        addOns: [],
      };
      const actual = component['isProductTypeHardware'](product);
      expect(actual).toBe(false);
    }));

    it('should return true if product has hardware', fakeAsync(() => {
      const productType: MockMarketingProduct = {
        sku: 'BOYO0029',
        title: BASED_ON_YOU_29,
        type: 'smartphone',
      };

      const product: MockMarketingProduct = {
        sku: 'BOYO0029',
        title: BASED_ON_YOU_29,
        price: '',
        type: '',
        enableDiscount: true,
        addOns: [productType],
      };
      const actual = component['isProductTypeHardware'](product);
      expect(actual).toBe(true);
    }));
  });

  describe('addOptionsAndContentpacks', () => {
    it('should add options and content packs', fakeAsync(() => {
      const form = formBuilder.group({
        options: [
          [
            {
              id: 'TVPK0005',
              type: 'OPTION',
            },
          ],
        ],
      });
      const alloptions = [
        {
          id: 'TVPK0005',
          type: 'OPTION',
        },
      ] as MockCreateSalesOrderRequestBody[];
      const actual = component['addOptionsAndContentpacks'](form);
      expect(actual).toEqual(alloptions);
    }));
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
