import { CustomerProductHolding, Offer, Product, ProductSpec, Promotion, SalesOffer } from '@sales/shared/data-access';
import {
  updateCustomerProductHolding,
  updateHumanCheckoutUrl,
  updateLoginDetails,
  updateOffers,
  updateProducts,
  updatePromotions,
  updateSalesCheckoutUrl,
  updateSalesOffer,
} from './products-details.actions';
import { initialState, productsDetailsReducers, ProductsDetailsState } from './products-details.reducers';
import { OmapiProduct, OmapiProductTestfactory } from '@telenet/ng-lib-omapi';
import { LoginDetails } from '@telenet/ng-lib-ocapi';

describe('ProductsDetailsReducer', () => {
  describe('updateLoginDetails', () => {
    it('should update loginDetails', () => {
      const loginDetails: LoginDetails = new LoginDetails(200);
      const action = updateLoginDetails({ loginDetails });

      const expected: ProductsDetailsState = {
        ...initialState,
        loginDetails,
      };

      const result: ProductsDetailsState = productsDetailsReducers(initialState, action);

      expect(result).toEqual(expected);
    });
  });

  describe('updatePromotions', () => {
    it('should update promotions', () => {
      const promotions: Promotion[] = [{ description: 'description' }];
      const action = updatePromotions({ promotions });

      const expected: ProductsDetailsState = {
        ...initialState,
        promotions,
      };

      const result: ProductsDetailsState = productsDetailsReducers(initialState, action);

      expect(result).toEqual(expected);
    });
  });

  describe('updateCustomerProductHolding', () => {
    it('should update customerProductHolding', () => {
      const customerProductHolding: CustomerProductHolding[] = [];
      const action = updateCustomerProductHolding({ customerProductHolding });

      const expected: ProductsDetailsState = {
        ...initialState,
        customerProductHolding,
      };

      const result: ProductsDetailsState = productsDetailsReducers(initialState, action);

      expect(result).toEqual(expected);
    });
  });

  describe('updateOffers', () => {
    it('should update offers', () => {
      const offers: Offer[] = [
        {
          id: 'id',
          type: 'type',
          offers: [],
          amountOfLimitedSims: 1,
        },
      ];
      const action = updateOffers({ offers });

      const expected: ProductsDetailsState = {
        ...initialState,
        offers,
      };

      const result: ProductsDetailsState = productsDetailsReducers(initialState, action);

      expect(result).toEqual(expected);
    });
  });

  describe('updateProducts', () => {
    it('should update products', () => {
      const omapiProduct: OmapiProduct = OmapiProductTestfactory.build();
      const productSpec: ProductSpec = {
        shortSummaries: [],
        detailedSpecs: [],
      };
      const products: Product[] = [
        {
          localizedOmapiProductName: omapiProduct.getLocalizedContentNames().nl,
          omapiProduct,
          productSpec,
          amountOfLimitedSims: 1,
        },
      ];
      const action = updateProducts({ products });

      const expected: ProductsDetailsState = {
        ...initialState,
        products,
      };

      const result: ProductsDetailsState = productsDetailsReducers(initialState, action);

      expect(result).toEqual(expected);
    });
  });

  describe('updateSalesOffer', () => {
    it('should update salesOffer', () => {
      const salesOffer: SalesOffer = {
        price: 10,
        promo: null,
      };
      const action = updateSalesOffer({ salesOffer });

      const expected: ProductsDetailsState = {
        ...initialState,
        salesOffer,
      };

      const result: ProductsDetailsState = productsDetailsReducers(initialState, action);

      expect(result).toEqual(expected);
    });
  });

  describe('updateSalesCheckoutUrl', () => {
    it('should update salesCheckoutUrl', () => {
      const salesCheckoutUrl = 'url';
      const action = updateSalesCheckoutUrl({ salesCheckoutUrl });

      const expected: ProductsDetailsState = {
        ...initialState,
        salesCheckoutUrl,
      };

      const result: ProductsDetailsState = productsDetailsReducers(initialState, action);

      expect(result).toEqual(expected);
    });
  });

  describe('updateHumanCheckoutUrl', () => {
    it('should update humanCheckoutUrl', () => {
      const humanCheckoutUrl = 'url';
      const action = updateHumanCheckoutUrl({ humanCheckoutUrl });

      const expected: ProductsDetailsState = {
        ...initialState,
        humanCheckoutUrl,
      };

      const result: ProductsDetailsState = productsDetailsReducers(initialState, action);

      expect(result).toEqual(expected);
    });
  });
});
