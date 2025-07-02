import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import {
  SalesOffer,
  salesOfferCostFactory,
  SalesOfferProduct,
  salesOfferProductComfortInstallTypeFactory,
  salesOfferProductFactory,
  salesOfferProductOptinFactory,
  salesOfferProductOptionFactory,
  salesOfferProductSelfInstallTypeFactory,
  salesOfferProductStreamingServiceFactory,
  SalesOfferPromo,
  SalesOfferPromoDurationGroup,
  salesOfferPromoFactory,
  salesOfferStandaloneOptionsFactory,
  salesOfferTestFactory,
  salesOfferTestStandaloneOptionsFactory,
} from '../models/response';
import { OmapiProduct, OmapiProductTestfactory } from '@telenet/ng-lib-omapi';
import { SalesOfferUtil } from './sales-offer.util';
import { SalesOfferProductUtil } from './sales-offer-product.util';
import { SAFE_SPOT_PRO } from '../constants/sofy.constants';
import { InstallTypeEnum } from '../enums/ocapi-move-order.enum';

const spyOn = jest.spyOn;
const PRODUCT_PROMO = 'product promo';
const OPTIN_PROMO = 'optin promo';
const OPTION_PROMO_1 = 'option promo';

describe('SalesOfferUtil', () => {
  const permanentPromo10 = salesOfferPromoFactory.build({ duration: 0, price: -10, priceexclvat: -8 });
  const permanentPromo100 = salesOfferPromoFactory.build({ duration: 0, price: -100, priceexclvat: -88 });
  const monthlyPromo5 = salesOfferPromoFactory.build();

  describe('getTotalMonthlyPrice', () => {
    it('should return the total monthly price', () => {
      const salesOffer = salesOfferTestFactory.build();

      const actual = SalesOfferUtil.getTotalMonthlyPrice(salesOffer);

      expect(actual).toBe(120);
    });
    it('should return the total monthly price for standalone options', () => {
      const salesOffer = salesOfferTestStandaloneOptionsFactory.build();

      const actual = SalesOfferUtil.getTotalMonthlyPrice(salesOffer);

      expect(actual).toBe(100);
    });
    it('should return the total monthly price with permanent promotions included', () => {
      const product = salesOfferProductFactory.build({
        promos: [monthlyPromo5, permanentPromo10, permanentPromo100],
      });
      const salesOffer = salesOfferTestFactory.build({ products: [product] });

      const actual = SalesOfferUtil.getTotalMonthlyPrice(salesOffer);

      expect(actual).toBe(10);
    });
    it('should return the total monthly price with permanent promotions on options included', () => {
      const option = salesOfferProductOptionFactory.build({ promos: [permanentPromo10, monthlyPromo5] });
      const product = salesOfferProductFactory.build({ options: [option] });
      const salesOffer = salesOfferTestFactory.build({ products: [product] });

      const actual = SalesOfferUtil.getTotalMonthlyPrice(salesOffer);

      expect(actual).toBe(110);
    });
    it('should return the total monthly price for standalone options with permanent promotions included', () => {
      const product = salesOfferProductFactory.build({ promos: [monthlyPromo5, permanentPromo10] });
      const salesOffer = salesOfferTestStandaloneOptionsFactory.build({ standaloneoptions: [product] });

      const actual = SalesOfferUtil.getTotalMonthlyPrice(salesOffer);

      expect(actual).toBe(90);
    });
  });

  describe('getTotalMonthlyPriceInclPromos', () => {
    it('should return the total monthly price inclusive option promos', () => {
      const salesOffer = salesOfferTestFactory.build();

      const actual = SalesOfferUtil.getTotalMonthlyPriceInclPromos(salesOffer);

      expect(actual).toBe(115);
    });
    it('should return the total monthly price inclusive product promos', () => {
      const option = salesOfferProductOptionFactory.build();
      const product = salesOfferProductFactory.build({ options: [option], promos: [monthlyPromo5] });
      const salesOffer = salesOfferTestFactory.build({ products: [product] });

      const actual = SalesOfferUtil.getTotalMonthlyPriceInclPromos(salesOffer);

      expect(actual).toBe(110);
    });
    it('should return the total monthly price for standalone options inclusive option promos', () => {
      const salesOffer = salesOfferTestStandaloneOptionsFactory.build();

      const actual = SalesOfferUtil.getTotalMonthlyPriceInclPromos(salesOffer);

      expect(actual).toBe(95);
    });
  });

  describe('getAllSelectedOptions', () => {
    it('should return all selected options in this sales offer', () => {
      const selectedOption = salesOfferProductOptionFactory.build();
      const notSelectedOption = salesOfferProductOptionFactory.build({ selected: false });
      const product = salesOfferProductFactory.build({ options: [selectedOption, notSelectedOption] });
      const salesOffer = salesOfferTestFactory.build({ products: [product] });

      const actual = SalesOfferUtil.getAllSelectedProductOptions(salesOffer);

      expect(actual).toEqual([selectedOption]);
    });
    it('should return empty array given no offer', () => {
      const actual = SalesOfferUtil.getAllSelectedProductOptions();

      expect(actual).toEqual([]);
    });
  });

  describe('getAllSelectedOptins', () => {
    it('should return all selected optins in this sales offer', () => {
      const selectedOptin = salesOfferProductOptinFactory.build();
      const notSelectedOptin = salesOfferProductOptinFactory.build({ selected: false });
      const product = salesOfferProductFactory.build({ optinproducts: [selectedOptin, notSelectedOptin] });
      const salesOffer = salesOfferTestFactory.build({ products: [product] });

      const actual = SalesOfferUtil.getAllSelectedProductOptins(salesOffer);

      expect(actual).toEqual([selectedOptin]);
    });
    it('should return empty array given no sales offer', () => {
      const actual = SalesOfferUtil.getAllSelectedProductOptins();

      expect(actual).toEqual([]);
    });
  });
  describe('containsSohoProduct', () => {
    it('should return true if sales offer contains soho', () => {
      const selectedOptin = salesOfferProductOptinFactory.build();
      const notSelectedOptin = salesOfferProductOptinFactory.build({ selected: false });
      const product = salesOfferProductFactory.build({
        optinproducts: [selectedOptin, notSelectedOptin],
        productInfo: { getCharacteristic: (_: string) => SalesOfferProductUtil.SOHO_PRODUCT },
      });
      const salesOffer = salesOfferTestFactory.build({ products: [product] });

      const actual = SalesOfferUtil.containsSohoProduct(salesOffer);

      expect(actual).toEqual(true);
    });
    it('should return false given sales offer doesnt contain soho', () => {
      const selectedOptin = salesOfferProductOptinFactory.build();
      const notSelectedOptin = salesOfferProductOptinFactory.build({ selected: false });
      const product = salesOfferProductFactory.build({
        optinproducts: [selectedOptin, notSelectedOptin],
        productInfo: { getCharacteristic: (_: string) => SalesOfferProductUtil.RMD_PRODUCT },
      });
      const salesOffer = salesOfferTestFactory.build({ products: [product] });

      const actual = SalesOfferUtil.containsSohoProduct(salesOffer);

      expect(actual).toEqual(false);
    });
  });

  describe('containsPromoTag', () => {
    it('should return true if sales offer contains promo tag', () => {
      const promotion: SalesOfferPromo = salesOfferPromoFactory.build();
      promotion.tags = ['combo'];

      const selectedOption = salesOfferProductOptionFactory.build();
      const notSelectedSSP = salesOfferProductOptionFactory.build({ omapiid: SAFE_SPOT_PRO, selected: false });
      const product = salesOfferProductFactory.build({ options: [selectedOption, notSelectedSSP] });
      product.promos = [promotion];

      const actual = SalesOfferUtil.containsPromoTag(product, 'combo');

      expect(actual).toEqual(true);
    });
    it('should return false given sales offer doesnt contain tag', () => {
      const promotion: SalesOfferPromo = salesOfferPromoFactory.build();
      promotion.tags = ['combo'];

      const selectedOption = salesOfferProductOptionFactory.build();
      const notSelectedSSP = salesOfferProductOptionFactory.build({ omapiid: SAFE_SPOT_PRO, selected: false });
      const product = salesOfferProductFactory.build({ options: [selectedOption, notSelectedSSP] });
      product.promos = [promotion];

      const actual = SalesOfferUtil.containsPromoTag(product, 'webdeal');

      expect(actual).toEqual(false);
    });
  });

  describe('getBundle', () => {
    it('should return bundle given bundle product info', () => {
      const selectedOptin = salesOfferProductOptinFactory.build();
      const notSelectedOptin = salesOfferProductOptinFactory.build({ selected: false });
      const product = salesOfferProductFactory.build({
        optinproducts: [selectedOptin, notSelectedOptin],
        productInfo: { isBundle: () => true } as OmapiProduct,
      });
      const salesOffer = salesOfferTestFactory.build({ products: [product] });
      const actual = SalesOfferUtil.getBundle(salesOffer);

      expect(actual).toBeDefined();
    });
    it('should throw error given no bundle in sales offer', () => {
      const selectedOptin = salesOfferProductOptinFactory.build();
      const notSelectedOptin = salesOfferProductOptinFactory.build({ selected: false });
      const product = salesOfferProductFactory.build({
        optinproducts: [selectedOptin, notSelectedOptin],
        productInfo: { isBundle: () => false } as OmapiProduct,
      });
      const salesOffer = salesOfferTestFactory.build({ products: [product] });
      expect(() => SalesOfferUtil.getBundle(salesOffer)).toThrowError('Salesoffer does not contain a bundle');
    });
  });

  describe('getSafeSpotProOption', () => {
    it('should return undefined if SSP is not in this sales offer', () => {
      const selectedOption = salesOfferProductOptionFactory.build();
      const notSelectedOption = salesOfferProductOptionFactory.build({ selected: false });
      const product = salesOfferProductFactory.build({ options: [selectedOption, notSelectedOption] });
      const salesOffer = salesOfferTestFactory.build({ products: [product] });

      const actual = SalesOfferUtil.getSafeSpotProOption(salesOffer);

      expect(actual).toBeUndefined();
    });

    it('should return undefined if SSP is not a selected option in this sales offer', () => {
      const selectedOption = salesOfferProductOptionFactory.build();
      const notSelectedSSP = salesOfferProductOptionFactory.build({ omapiid: SAFE_SPOT_PRO, selected: false });
      const product = salesOfferProductFactory.build({ options: [selectedOption, notSelectedSSP] });
      const salesOffer = salesOfferTestFactory.build({ products: [product] });

      const actual = SalesOfferUtil.getSafeSpotProOption(salesOffer);

      expect(actual).toBeUndefined();
    });

    it('should return SSP if SSP is a selected option in this sales offer', () => {
      const selectedOption = salesOfferProductOptionFactory.build();
      const selectedSSP = salesOfferProductOptionFactory.build({ omapiid: SAFE_SPOT_PRO });
      const product = salesOfferProductFactory.build({ options: [selectedOption, selectedSSP] });
      const salesOffer = salesOfferTestFactory.build({ products: [product] });

      const actual = SalesOfferUtil.getSafeSpotProOption(salesOffer);

      expect(actual).toEqual(selectedSSP);
    });
  });

  describe('getMonthlyPriceForSelectedOptions', () => {
    it('should return the total monthly price for selected product options', () => {
      const salesOffer = salesOfferTestFactory.build();

      const actual = SalesOfferUtil.getMonthlyPriceForSelectedProductOptions(salesOffer);

      expect(actual).toBe(20);
    });
  });
  describe('getCosts', () => {
    it('should return the costs', () => {
      const salesOffer = salesOfferTestFactory.build();

      const actual = SalesOfferUtil.getCosts(salesOffer);

      expect(actual).toEqual([
        {
          name: 'cable-installation',
          price: 50,
          priceexclvat: 45,
          promotions: [],
          recurring: 0,
        },
      ]);
    });
  });
  describe('getInstallTypes', () => {
    it('should return the installation types', () => {
      const salesOffer = salesOfferTestFactory.build();

      const actual = SalesOfferUtil.getInstallTypes(salesOffer);

      expect(actual).toEqual([
        {
          description: InstallTypeEnum.COMFORT_INSTALL,
          price: 85,
          mutuallyexclusive: '',
          priceexclvat: 70.25,
          selected: false,
          promos: [],
        },
        {
          description: InstallTypeEnum.SELF_INSTALL,
          price: 0,
          mutuallyexclusive: '',
          priceexclvat: 0,
          selected: false,
          promos: [],
        },
      ]);
    });
  });

  describe('getMonthlyPromosForSelectedOptions', () => {
    it('should return the total monthly promo amount for selected options', () => {
      const salesOffer = salesOfferTestFactory.build();

      const actual = SalesOfferUtil.getMonthlyPromosForSelectedProductOptions(salesOffer);

      expect(actual).toBe(-5);
    });
  });

  describe('getMonthlyPromosForProducts', () => {
    it('should return the total monthly promo amount for products', () => {
      const salesOfferProduct = salesOfferProductFactory.build({ promos: [salesOfferPromoFactory.build()] });
      const salesOffer = salesOfferTestFactory.build({ products: [salesOfferProduct] });

      const actual = SalesOfferUtil.getMonthlyPromosForProducts(salesOffer);

      expect(actual).toBe(-5);
    });
  });

  describe('getMonthlyPriceForProducts', () => {
    it('should return the total monthly price', () => {
      const salesOffer = salesOfferTestFactory.build();

      const actual = SalesOfferUtil.getMonthlyPriceForProducts(salesOffer);

      expect(actual).toBe(100);
    });
  });

  describe('getMonthlyPriceForStandaloneOptions', () => {
    it('should return the total monthly price for standalone options', () => {
      const salesOffer = salesOfferTestStandaloneOptionsFactory.build();

      const actual = SalesOfferUtil.getMonthlyPriceForStandaloneOptions(salesOffer);

      expect(actual).toBe(100);
    });
  });

  describe('getShortestDurationOfAllPromos', () => {
    it('should return the shortest duration of all option promos excluding zero duration promos', () => {
      const longPromo = salesOfferPromoFactory.build({ duration: 10 });
      const option = salesOfferProductOptionFactory.build({
        promos: [monthlyPromo5, permanentPromo10, longPromo],
      });
      const product = salesOfferProductFactory.build({ options: [option] });
      const salesOffer = salesOfferTestFactory.build({ products: [product] });

      const actual = SalesOfferUtil.getShortestDurationOfAllPromos(salesOffer);

      expect(actual).toBe(3);
    });
    it('should return the shortest duration of all product promos excluding zero duration promos', () => {
      const longPromo = salesOfferPromoFactory.build({ duration: 10 });
      const option = salesOfferProductOptionFactory.build({ promos: [permanentPromo10, longPromo] });
      const product = salesOfferProductFactory.build({
        options: [option],
        promos: [permanentPromo10, monthlyPromo5],
      });
      const salesOffer = salesOfferTestFactory.build({ products: [product] });

      const actual = SalesOfferUtil.getShortestDurationOfAllPromos(salesOffer);

      expect(actual).toBe(3);
    });
    it('should return the shortest duration of all standalone promos excluding zero duration promos', () => {
      const longPromo = salesOfferPromoFactory.build({ duration: 10 });
      const option = salesOfferProductFactory.build({ promos: [permanentPromo10, longPromo, monthlyPromo5] });
      const salesOffer = salesOfferTestStandaloneOptionsFactory.build({ standaloneoptions: [option] });

      const actual = SalesOfferUtil.getShortestDurationOfAllPromos(salesOffer);

      expect(actual).toBe(3);
    });
  });

  describe('getPriceInclPromo', () => {
    it('should return the price for a product inclusive promos, inclusive vat', () => {
      const salesOfferProduct = salesOfferProductFactory.build({ promos: [salesOfferPromoFactory.build()] });

      const actual = SalesOfferUtil.getPriceInclPromo(salesOfferProduct, false);

      expect(actual).toBe(95);
    });

    it('should return the price for a product inclusive promos, exclusive vat', () => {
      const salesOfferProduct = salesOfferProductFactory.build({ promos: [salesOfferPromoFactory.build()] });

      const actual = SalesOfferUtil.getPriceInclPromo(salesOfferProduct, true);

      expect(actual).toBe(86);
    });

    it('should return the price for a product inclusive promos, inclusive vat', () => {
      const salesOfferOption = salesOfferProductOptionFactory.build({ promos: [salesOfferPromoFactory.build()] });

      const actual = SalesOfferUtil.getPriceInclPromo(salesOfferOption, false);

      expect(actual).toBe(15);
    });
  });

  describe('getTotalTemporaryDiscount', () => {
    it('should return 0 if no promo is present', () => {
      const salesOfferProduct = salesOfferProductFactory.build({ promos: [] });
      const actual = SalesOfferUtil.getTotalTemporaryDiscount(salesOfferProduct, false);
      expect(actual).toBe(0);
    });
    it('should return the temporary discount for a product with a temporary promo', () => {
      const salesOfferProduct = salesOfferStandaloneOptionsFactory.build();
      const actual = SalesOfferUtil.getTotalTemporaryDiscount(salesOfferProduct, false);
      expect(actual).toBe(-5);
    });
    it('should return 0 for a product without a temporary promo', () => {
      const salesOfferProduct = salesOfferStandaloneOptionsFactory.build();
      salesOfferProduct.promos[0].duration = 0;
      const actual = SalesOfferUtil.getTotalTemporaryDiscount(salesOfferProduct, false);
      expect(actual).toBe(0);
    });
  });

  describe('getShortestPromoDuration', () => {
    it('should return the shortest duration of all promos for a product', () => {
      const salesOfferProduct = salesOfferProductFactory.build({ promos: [salesOfferPromoFactory.build()] });

      const actual = SalesOfferUtil.getShortestPromoDuration(salesOfferProduct);

      expect(actual).toBe(3);
    });
  });

  describe('getMonthlyPromos', () => {
    it('should return empty array if no promotions', function () {
      const option = salesOfferProductOptionFactory.build({ promos: [] });
      const optin = salesOfferProductOptinFactory.build({ promos: [] });
      const product = salesOfferProductFactory.build({ options: [option], optinproducts: [optin], promos: [] });
      const salesOffer = salesOfferTestFactory.build({ products: [product] });

      const actual: SalesOfferPromo[] = SalesOfferUtil.getMonthlyPromos(salesOffer);

      expect(actual).toEqual([]);
    });
    it('should not include cost promotions promotions', function () {
      const costPromo = salesOfferPromoFactory.build({ name: OPTION_PROMO_1 });
      const cost = salesOfferCostFactory.build({ promotions: [costPromo] });
      const option = salesOfferProductOptionFactory.build({ promos: [] });
      const optin = salesOfferProductOptinFactory.build({ promos: [] });
      const product = salesOfferProductFactory.build({
        costs: [cost],
        options: [option],
        optinproducts: [optin],
        promos: [],
      });
      const salesOffer = salesOfferTestFactory.build({ products: [product] });

      const actual: SalesOfferPromo[] = SalesOfferUtil.getMonthlyPromos(salesOffer);

      expect(actual).toEqual([]);
    });
    it('should return all promotions including on options and optins', function () {
      const optionPromo = salesOfferPromoFactory.build({ name: OPTION_PROMO_1 });
      const optinPromo = salesOfferPromoFactory.build({ name: OPTIN_PROMO });
      const productPromo = salesOfferPromoFactory.build({ name: PRODUCT_PROMO });
      const option = salesOfferProductOptionFactory.build({ promos: [optionPromo] });
      const optin = salesOfferProductOptinFactory.build({ promos: [optinPromo] });
      const product = salesOfferProductFactory.build({
        options: [option],
        optinproducts: [optin],
        promos: [productPromo],
      });
      const salesOffer = salesOfferTestFactory.build({ products: [product] });

      const actual: SalesOfferPromo[] = SalesOfferUtil.getMonthlyPromos(salesOffer);

      expect(actual).toEqual([productPromo, optinPromo, optionPromo]);
    });
  });

  describe('getAllPromos', function () {
    it('should return monthly promotions and cost promotions', function () {
      const optionPromo = salesOfferPromoFactory.build({ name: OPTION_PROMO_1 });
      const optinPromo = salesOfferPromoFactory.build({ name: OPTIN_PROMO });
      const productPromo = salesOfferPromoFactory.build({ name: PRODUCT_PROMO });
      const costPromo = salesOfferPromoFactory.build({ name: OPTION_PROMO_1 });
      const cost = salesOfferCostFactory.build({ promotions: [costPromo] });
      const option = salesOfferProductOptionFactory.build({ promos: [optionPromo] });
      const optin = salesOfferProductOptinFactory.build({ promos: [optinPromo] });
      const product = salesOfferProductFactory.build({
        costs: [cost],
        options: [option],
        optinproducts: [optin],
        promos: [productPromo],
      });
      const salesOffer = salesOfferTestFactory.build({ products: [product] });

      const actual: SalesOfferPromo[] = SalesOfferUtil.getAllPromos(salesOffer);

      expect(actual).toEqual([productPromo, optinPromo, optionPromo, costPromo]);
    });
    it('should return monthly promotions and selected installation promotions', function () {
      const optionPromo = salesOfferPromoFactory.build({ name: OPTION_PROMO_1 });
      const optinPromo = salesOfferPromoFactory.build({ name: OPTIN_PROMO });
      const productPromo = salesOfferPromoFactory.build({ name: PRODUCT_PROMO });
      const selectedInstallPromo = salesOfferPromoFactory.build({ name: 'selected 1 promo' });
      const unSelectedInstallPromo = salesOfferPromoFactory.build({ name: 'unselected 1 promo' });
      const cost = salesOfferCostFactory.build({ promotions: [] });
      const selectedInstallation = salesOfferProductSelfInstallTypeFactory.build({
        selected: true,
        promos: [selectedInstallPromo],
      });
      const unSelectedInstallation = salesOfferProductComfortInstallTypeFactory.build({
        selected: false,
        promos: [unSelectedInstallPromo],
      });
      const option = salesOfferProductOptionFactory.build({ promos: [optionPromo] });
      const optin = salesOfferProductOptinFactory.build({ promos: [optinPromo] });
      const product = salesOfferProductFactory.build({
        costs: [cost],
        options: [option],
        optinproducts: [optin],
        installtypes: [selectedInstallation, unSelectedInstallation],
        promos: [productPromo],
      });
      const salesOffer = salesOfferTestFactory.build({ products: [product] });

      const actual: SalesOfferPromo[] = SalesOfferUtil.getAllPromos(salesOffer);

      expect(actual).toEqual([productPromo, optinPromo, optionPromo, selectedInstallPromo]);
    });
  });

  describe('getMonthlyPromosGroupedByDuration', () => {
    it('should return empty array if no promotions', function () {
      spyOn(SalesOfferUtil, 'getMonthlyPromos').mockReturnValue([]);

      const actual: SalesOfferPromoDurationGroup[] = SalesOfferUtil.getMonthlyPromosGroupedByDuration({} as SalesOffer);

      expect(actual).toEqual([]);
    });
    it('should return promotions grouped by duration', function () {
      const promoDuration1 = salesOfferPromoFactory.build({ price: -10, duration: 1 });
      const promo2Duration1 = salesOfferPromoFactory.build({ price: -5, duration: 1 });
      const promo3Duration3 = salesOfferPromoFactory.build({ price: -2, duration: 3 });
      spyOn(SalesOfferUtil, 'getMonthlyPromos').mockReturnValue([promo2Duration1, promo3Duration3, promoDuration1]);

      const actual: SalesOfferPromoDurationGroup[] = SalesOfferUtil.getMonthlyPromosGroupedByDuration({} as SalesOffer);

      expect(actual).toEqual([
        { duration: 1, promos: [promo2Duration1, promoDuration1] },
        { duration: 3, promos: [promo3Duration3] },
      ]);
    });
  });

  describe('getPromoDurationGroupsTotal', () => {
    const promo1 = salesOfferPromoFactory.build({ price: -10, priceexclvat: -8, duration: 1 });
    const promo2 = salesOfferPromoFactory.build({ price: -5, priceexclvat: -3, duration: 1 });
    const promo3 = salesOfferPromoFactory.build({ price: -2, priceexclvat: -0.5, duration: 3 });
    const promotionGroups = [
      { duration: 1, promos: [promo1, promo2] },
      { duration: 3, promos: [promo3] },
    ];

    it('should return sum of all promotions incl vat', function () {
      const actual: number = SalesOfferUtil.getPromoDurationGroupsTotal(promotionGroups);

      expect(actual).toEqual(-17);
    });

    it('should return sum of all promotions excl vat', function () {
      const actual: number = SalesOfferUtil.getPromoDurationGroupsTotal(promotionGroups, true);

      expect(actual).toEqual(-11.5);
    });

    it('should return zero if empty array', function () {
      const actual: number = SalesOfferUtil.getPromoDurationGroupsTotal([], true);

      expect(actual).toEqual(0);
    });
  });

  describe('containsResidentialProduct', () => {
    it('should return false if no product is a business product', function () {
      spyOn(SalesOfferProductUtil, 'isResidentialProduct').mockReturnValue(false);

      const salesOffer = salesOfferTestFactory.build();
      expect(SalesOfferUtil.containsResidentialProduct(salesOffer)).toBe(false);
    });
    it('should return true if one product is a business product', function () {
      spyOn(SalesOfferProductUtil, 'isResidentialProduct').mockReturnValue(true);

      const salesOffer = salesOfferTestFactory.build();
      expect(SalesOfferUtil.containsResidentialProduct(salesOffer)).toBe(true);
    });
  });

  describe('isOrderingHighTier', () => {
    const highCharacteristic = { productTier: 'High' };
    const midCharacteristic = { productTier: 'Mid' };

    const lowOmapiProduct: OmapiProduct = OmapiProductTestfactory.build({ characteristics: midCharacteristic });
    const highOmapiProduct: OmapiProduct = OmapiProductTestfactory.build({ characteristics: highCharacteristic });

    const lowProduct1: SalesOfferProduct = salesOfferProductFactory.build({ productInfo: lowOmapiProduct });
    const lowProduct2: SalesOfferProduct = salesOfferProductFactory.build({ productInfo: lowOmapiProduct });
    const highProduct: SalesOfferProduct = salesOfferProductFactory.build({ productInfo: highOmapiProduct });

    it('should return false if no product is a high tier product', function () {
      const salesOffer = salesOfferTestFactory.build({ products: [lowProduct1, lowProduct2] });
      expect(SalesOfferUtil.isOrderingHighTier(salesOffer)).toBe(false);
    });
    it('should return true if one product is a high tier product', function () {
      const salesOffer = salesOfferTestFactory.build({ products: [lowProduct1, highProduct] });
      expect(SalesOfferUtil.isOrderingHighTier(salesOffer)).toBe(true);
    });
  });

  describe('findProduct', function () {
    it('should return undefined if product not available', function () {
      const salesOffer = salesOfferTestFactory.build();
      expect(SalesOfferUtil.findProduct(salesOffer, 'unknown')).toBeUndefined();
    });
    it('should return the product if product is available', function () {
      const salesOffer = salesOfferTestFactory.build();
      expect(SalesOfferUtil.findProduct(salesOffer, '87')?.omapiid).toEqual('87');
    });
  });

  describe('getAllSelectedProductStreamingServices', () => {
    it('should return only selected streaming services', () => {
      const selectedStreamingService = salesOfferProductStreamingServiceFactory.build();
      const notSelectedStreamingService = salesOfferProductStreamingServiceFactory.build({ selected: false });
      const product = salesOfferProductFactory.build({
        streamingservices: [selectedStreamingService, notSelectedStreamingService],
      });
      const salesOffer = salesOfferTestFactory.build({ products: [product] });

      const actual = SalesOfferUtil.getAllSelectedProductStreamingServices(salesOffer);

      expect(actual).toEqual([selectedStreamingService]);
    });
  });

  describe('getAllProductStreamingServices', () => {
    it('should return all unique streaming services', () => {
      const selectedStreamingService = salesOfferProductStreamingServiceFactory.build();
      const notSelectedStreamingService = salesOfferProductStreamingServiceFactory.build({ selected: false });
      const notSelectedStreamingService2 = salesOfferProductStreamingServiceFactory.build({ omapiid: 'STRM0000' });
      const product = salesOfferProductFactory.build({
        streamingservices: [selectedStreamingService, notSelectedStreamingService, notSelectedStreamingService2],
      });
      const salesOffer = salesOfferTestFactory.build({ products: [product] });

      const actual = SalesOfferUtil.getAllProductStreamingServices(salesOffer);

      expect(actual).toEqual([selectedStreamingService, notSelectedStreamingService2]);
    });
    it('should return empty array if SalesOffer is undefined', () => {
      const actual = SalesOfferUtil.getAllProductStreamingServices(undefined);

      expect(actual).toEqual([]);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
