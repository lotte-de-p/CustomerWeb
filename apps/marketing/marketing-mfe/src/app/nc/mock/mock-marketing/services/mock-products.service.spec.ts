import { TestBed, fakeAsync, flush } from '@angular/core/testing';

import { MockProductsService } from './mock-products.service';
import {
  CustomerChosenManualDiscountInterface,
  MockCreateSalesOrderRequest,
  MockCreateSalesOrderRequestBody,
  MockSelectedProductInterface,
} from '../models/mock-create-sales-order-request.model';

const DOMAIN_NAME = 'domain-name';
const DOMAIN_NAME_PRODUCT = { sku: 'DOMN1002', type: DOMAIN_NAME, title: 'domain-name-2' };
const CID = 'cid';
const manaualDiscount = {
  type: CID,
  discountCode: 'telenet',
} as CustomerChosenManualDiscountInterface;
const ALL_INTERNET_TV_SKU = 'TWOP0010';
const ALL_INTERNET_TV = 'All-Internet + Telenet TV';
const offer1 = {
  id: 'EQUI0259',
  type: 'Smartphone',
} as MockCreateSalesOrderRequestBody;
const offer2 = {
  id: 'BOYO0029',
  type: 'Mobile',
} as MockCreateSalesOrderRequestBody;
const selectedProduct = {
  product: {
    sku: 'DOMN1001',
    type: DOMAIN_NAME,
    title: DOMAIN_NAME,
  },
  isProductTypeHardwareCheck: false,
  manualDiscount: {},
} as MockSelectedProductInterface;
const offer = {
  id: 'TVPK0005',
  type: 'OPTION',
} as MockCreateSalesOrderRequestBody;

describe('MockProductsService', () => {
  let service: MockProductsService;

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
      providers: [{ provide: 'Window', useValue: window }],
    });
    service = TestBed.inject(MockProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('addProducts', () => {
    it('should be able to add new product to existing selected products and offers', () => {
      service.mockSelectedProducts.push({
        product: DOMAIN_NAME_PRODUCT,
        isProductTypeHardwareCheck: false,
        manualDiscount: manaualDiscount,
      });
      service.mockOffersArr.offers.push(offer1, offer2);
      service.addProducts(selectedProduct, offer);
      expect(service.mockSelectedProducts.length).toBe(2);
      expect(service.mockOffersArr.offers.length).toBe(3);
    });
  });

  describe('getAllProducts', () => {
    it('should return all productes selected', fakeAsync(() => {
      service.mockSelectedProducts.push(
        {
          product: DOMAIN_NAME_PRODUCT,
          isProductTypeHardwareCheck: false,
          manualDiscount: manaualDiscount,
        },
        selectedProduct
      );
      service.getAllProducts().subscribe((products: MockSelectedProductInterface[]) => {
        expect(products.length).toBe(2);
      });
      flush();
    }));
  });

  describe('getOffers', () => {
    it('should return all offeres for a selected product', fakeAsync(() => {
      service.mockOffersArr.offers.push(offer1, offer2);
      service.getOffers().subscribe((soRequest: MockCreateSalesOrderRequest) => {
        expect(soRequest.offers.length).toBe(2);
      });
      flush();
    }));
  });
  describe('deleteProduct', () => {
    it('should delete product  from te list of selected products based on index', () => {
      service.mockSelectedProducts.push(
        {
          product: DOMAIN_NAME_PRODUCT,
          isProductTypeHardwareCheck: false,
          manualDiscount: manaualDiscount,
        },
        selectedProduct,
        {
          product: {
            sku: ALL_INTERNET_TV_SKU,
            title: ALL_INTERNET_TV,
            price: '',
            type: 'Bundle',
            addOns: [],
          },
          isProductTypeHardwareCheck: false,
          manualDiscount: manaualDiscount,
        }
      );

      service.mockOffersArr.offers.push(offer1, offer2, offer);
      service.deleteProduct(1);
      expect(service.mockSelectedProducts.length).toBe(2);
      expect(service.mockOffersArr.offers.length).toBe(2);
      expect(service.mockSelectedProducts[1]).not.toBe(selectedProduct);
      expect(service.mockOffersArr.offers[1]).not.toBe(offer2);
    });
  });
});
