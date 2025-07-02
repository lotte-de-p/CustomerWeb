import { CustomerProductHolding, Offer, Product, Promotion, SalesOffer } from '@sales/shared/data-access';
import { initialState, ProductsDetailsState } from './products-details.reducers';
import {
  selectCustomerProductHolding,
  selectHumanCheckoutUrl,
  selectIsDarwinUser,
  selectIsFixedTelephoneRowVisible,
  selectIsInternetRowVisible,
  selectIsMobileRowVisible,
  selectIsTvFlowRowVisible,
  selectIsTvIconicRowVisible,
  selectOffers,
  selectProducts,
  selectPromotions,
  selectSalesCheckoutUrl,
  selectSalesOffer,
} from './products-details.selectors';
import { OmapiProduct, OmapiProductTestfactory } from '@telenet/ng-lib-omapi';
import { LoginDetails } from '@telenet/ng-lib-ocapi';

describe('ProductsDetailsSelectors', () => {
  describe('selectIsDarwinUser', () => {
    it('should return true', () => {
      const expected = true;
      const loginDetails: LoginDetails = new LoginDetails(200);
      loginDetails.bssSystem = 'NETCRACKER';
      const state: ProductsDetailsState = {
        ...initialState,
        loginDetails,
      };

      const result: boolean = selectIsDarwinUser.projector(state);

      expect(result).toEqual(expected);
    });

    it('should return false', () => {
      const expected = false;
      const loginDetails: LoginDetails = new LoginDetails(200);
      loginDetails.bssSystem = 'TEST';
      const state: ProductsDetailsState = {
        ...initialState,
        loginDetails,
      };

      const result: boolean = selectIsDarwinUser.projector(state);

      expect(result).toEqual(expected);
    });
  });

  describe('selectOffers', () => {
    it('should select offers', () => {
      const expected: Offer[] = [
        {
          id: 'id',
          type: 'type',
          offers: [],
          amountOfLimitedSims: 1,
        },
      ];
      const state: ProductsDetailsState = {
        ...initialState,
        offers: expected,
      };

      const result: Offer[] = selectOffers.projector(state);

      expect(result).toEqual(expected);
    });
  });

  describe('selectPromotions', () => {
    it('should select promotions', () => {
      const expected: Promotion[] = [{ description: 'description' }];
      const state: ProductsDetailsState = {
        ...initialState,
        promotions: expected,
      };

      const result: Promotion[] | null = selectPromotions.projector(state);

      expect(result).toEqual(expected);
    });
  });

  describe('selectCustomerProductHolding', () => {
    it('should select customerProductHolding', () => {
      const expected: CustomerProductHolding[] = [];
      const state: ProductsDetailsState = {
        ...initialState,
        customerProductHolding: expected,
      };

      const result: CustomerProductHolding[] | null = selectCustomerProductHolding.projector(state);

      expect(result).toEqual(expected);
    });
  });

  describe('selectProducts', () => {
    it('should select products', () => {
      const omapiProduct = OmapiProductTestfactory.build({});
      const expected: Product[] = [
        {
          localizedOmapiProductName: omapiProduct.getLocalizedContentNames().nl,
          omapiProduct,
          productSpec: {
            shortSummaries: [],
            detailedSpecs: [],
          },
        },
      ];
      const state: ProductsDetailsState = {
        ...initialState,
        products: expected,
      };

      const result: Product[] = selectProducts.projector(state);

      expect(result).toEqual(expected);
    });
  });

  describe('selectSalesOffer', () => {
    it('should select salesOffer', () => {
      const expected: SalesOffer = {
        price: 10,
        promo: null,
      };
      const state: ProductsDetailsState = {
        ...initialState,
        salesOffer: expected,
      };

      const result: SalesOffer | undefined = selectSalesOffer.projector(state);

      expect(result).toEqual(expected);
    });
  });

  describe('selectSalesCheckoutUrl', () => {
    it('should select salesCheckoutUrl', () => {
      const expected = 'url';
      const state: ProductsDetailsState = {
        ...initialState,
        salesCheckoutUrl: expected,
      };

      const result: string = selectSalesCheckoutUrl.projector(state);

      expect(result).toEqual(expected);
    });
  });

  describe('selectHumanCheckoutUrl', () => {
    it('should select humanCheckoutUrl', () => {
      const expected = 'url';
      const state: ProductsDetailsState = {
        ...initialState,
        humanCheckoutUrl: expected,
      };

      const result: string = selectHumanCheckoutUrl.projector(state);

      expect(result).toEqual(expected);
    });
  });

  describe('selectIsInternetRowVisible', () => {
    it('should return true when products contains product spec with type INTERNET', () => {
      const products: Product[] = [
        {
          localizedOmapiProductName: '',
          omapiProduct: new OmapiProduct(),
          productSpec: {
            shortSummaries: [],
            detailedSpecs: [
              {
                icon: '',
                labelKey: '',
                type: 'INTERNET',
              },
            ],
          },
        },
      ];
      const state: ProductsDetailsState = {
        ...initialState,
        products: products,
      };

      const result: boolean = selectIsInternetRowVisible.projector(state);

      expect(result).toBe(true);
    });
  });

  describe('selectIsTvIconicRowVisible', () => {
    it('should return true when products contains any TV Iconic product', () => {
      const omapiProduct: OmapiProduct = new OmapiProduct();
      omapiProduct.externalProductCode = 'TEOS0001';
      const products: Product[] = [
        {
          localizedOmapiProductName: '',
          omapiProduct,
          productSpec: {
            shortSummaries: [],
            detailedSpecs: [],
          },
        },
      ];
      const state: ProductsDetailsState = {
        ...initialState,
        products: products,
      };

      const result: boolean = selectIsTvIconicRowVisible.projector(state);

      expect(result).toBe(true);
    });
  });

  describe('selectIsTvFlowRowVisible', () => {
    it('should return true when products contains any TV Flow product', () => {
      const omapiProduct: OmapiProduct = new OmapiProduct();
      omapiProduct.externalProductCode = 'OTTV0000';
      const products: Product[] = [
        {
          localizedOmapiProductName: '',
          omapiProduct,
          productSpec: {
            shortSummaries: [],
            detailedSpecs: [],
          },
        },
      ];
      const state: ProductsDetailsState = {
        ...initialState,
        products: products,
      };

      const result: boolean = selectIsTvFlowRowVisible.projector(state);

      expect(result).toBe(true);
    });
  });

  describe('selectIsMobileRowVisible', () => {
    it('should return true when products contains product spec with type MOBILE', () => {
      const products: Product[] = [
        {
          localizedOmapiProductName: '',
          omapiProduct: new OmapiProduct(),
          productSpec: {
            shortSummaries: [],
            detailedSpecs: [
              {
                icon: '',
                labelKey: '',
                type: 'MOBILE',
              },
            ],
          },
        },
      ];
      const state: ProductsDetailsState = {
        ...initialState,
        products: products,
      };

      const result: boolean = selectIsMobileRowVisible.projector(state);

      expect(result).toBe(true);
    });
  });

  describe('selectIsFixedTelephoneRowVisible', () => {
    it('should return true when products contains product spec with type FIXED_TELEPHONE', () => {
      const products: Product[] = [
        {
          localizedOmapiProductName: '',
          omapiProduct: new OmapiProduct(),
          productSpec: {
            shortSummaries: [],
            detailedSpecs: [
              {
                icon: '',
                labelKey: '',
                type: 'FIXED_TELEPHONE',
              },
            ],
          },
        },
      ];
      const state: ProductsDetailsState = {
        ...initialState,
        products: products,
      };

      const result: boolean = selectIsFixedTelephoneRowVisible.projector(state);

      expect(result).toBe(true);
    });
  });
});
