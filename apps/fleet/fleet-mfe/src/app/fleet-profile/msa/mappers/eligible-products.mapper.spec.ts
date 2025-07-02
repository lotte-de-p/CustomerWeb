import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { TestBed } from '@angular/core/testing';
import { EligibleProductsMapper } from './eligible-products.mapper';
import { RawEligibleProductInterface } from '../interfaces/raw-eligiblie-products.interface';
import { OmapiProduct, OmapiProductMapper } from '@telenet/ng-lib-omapi';
import { PriceInterface } from '../interfaces/price.interface';
import { describe, it, beforeEach, expect, afterEach, jest } from '@jest/globals';

const eligibleProductsMock = require('./eligible-products.json');

describe('EligibleProductsMapper', () => {
  let eligibleProductsMapper: EligibleProductsMapper, omapiProductMapper: OmapiProductMapper;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OmapiProductMapper, { provide: 'Window', useValue: {} }],
    });
    eligibleProductsMapper = TestBed.inject(EligibleProductsMapper);
    omapiProductMapper = TestBed.inject(OmapiProductMapper);
  });

  describe('toModel', () => {
    it('should map id and label', () => {
      const actual = eligibleProductsMapper.toModel(eligibleProductsMock);
      expect(actual[0].id).toBe('BOYO0020');
      expect(actual[0].label).toBe('20 Based on you');
    });

    it('should map productInfo', () => {
      const productInfo = { productId: 'VOEU0180', name: 'Voice Europe 180 MIN' };
      jest.spyOn(omapiProductMapper, 'toModel').mockReturnValue(<OmapiProduct>productInfo);
      const actual = eligibleProductsMapper.toModel(eligibleProductsMock);
      expect(actual[0].productInfo.productId).toBe(productInfo.productId);
      expect(actual[0].productInfo.name).toBe(productInfo.name);
    });

    it('should map eligible offers', () => {
      const productInfo = { productId: 'VOEU0180', name: 'Voice Europe 180 MIN' },
        priceInfo: PriceInterface = { currency: 'Euro', amount: '15,00', earlyTerminationFee: undefined };

      jest.spyOn(omapiProductMapper, 'toModel').mockReturnValue(<OmapiProduct>productInfo);
      const actual = eligibleProductsMapper.toModel(eligibleProductsMock);
      const eligibleOffers = actual[0].eligibleOffers[0];
      expect(eligibleOffers.productInfo.productId).toBe(productInfo.productId);
      expect(eligibleOffers.productInfo.name).toBe(productInfo.name);
      expect(eligibleOffers.price).toEqual(priceInfo);
    });

    it('should map product options', () => {
      const productInfo = { productId: 'VOEU0180', name: 'Voice Europe 180 MIN' },
        priceInfo: PriceInterface = { currency: 'Euro', amount: '15,00', earlyTerminationFee: undefined };

      jest.spyOn(omapiProductMapper, 'toModel').mockReturnValue(<OmapiProduct>productInfo);
      const actual = eligibleProductsMapper.toModel(eligibleProductsMock);
      const optionProducts = actual[0].optionProducts[0];
      expect(optionProducts.productInfo.productId).toBe(productInfo.productId);
      expect(optionProducts.productInfo.name).toBe(productInfo.name);
      expect(optionProducts.category).toBe('mobile');
      expect(optionProducts.rank).toBe('5');
      expect(optionProducts.price).toEqual(priceInfo);
    });

    it('should map price', () => {
      const productInfo = { productId: 'VOEU0180', name: 'Voice Europe 180 MIN' },
        priceInfo: PriceInterface = { currency: 'Euro', amount: '15,00', earlyTerminationFee: undefined };
      const eligibleProductsWithPrice = <RawEligibleProductInterface[]>[
        {
          eligibleOffers: [],
          optionProducts: [],
          price: priceInfo,
        },
      ];
      jest.spyOn(omapiProductMapper, 'toModel').mockReturnValue(<OmapiProduct>productInfo);
      const actual = eligibleProductsMapper.toModel(eligibleProductsWithPrice);
      expect(actual[0].price).toEqual(priceInfo);
    });
  });

  describe('getRank', () => {
    it('should return 1 when category is bundle', () => {
      expect(eligibleProductsMapper['getRank']('bundle')).toEqual('1');
    });

    it('should return 1 when category is internet', () => {
      expect(eligibleProductsMapper['getRank']('internet')).toEqual('2');
    });

    it('should return 1 when category is dtv', () => {
      expect(eligibleProductsMapper['getRank']('dtv')).toEqual('3');
    });

    it('should return 1 when category is telephone', () => {
      expect(eligibleProductsMapper['getRank']('telephone')).toEqual('4');
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
