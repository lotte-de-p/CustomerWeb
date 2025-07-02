import { SalesOfferProductUtil } from './sales-offer-product.util';
import { SAFE_SPOT_PRO } from '../constants/sofy.constants';
import {
  SalesOffer,
  SalesOfferPricedItem,
  SalesOfferProduct,
  SalesOfferProductInstallType,
  SalesOfferProductOptin,
  SalesOfferProductOption,
  SalesOfferProductType,
  SalesOfferPromo,
  SalesOfferPromoDurationGroup,
} from '../models/response';
import { SalesOfferCost } from '../models/salesOfferCost';
import { concat, filter, flatMap, flatten, groupBy, isUndefined, map, min, minBy, sum, sumBy, uniqBy } from 'lodash-es';
import { SalesOfferProductStreamingService } from '../models/response/sales-offer-product-streaming-service.model';
import { SalesOfferPromoUtil } from './sales-offer-promo.util';

export class SalesOfferUtil {
  public static getTotalMonthlyPrice(offer: SalesOffer, exclusiveVat?: boolean): number {
    return sum([
      SalesOfferUtil.getMonthlyPriceForProducts(offer, exclusiveVat),
      SalesOfferUtil.getMonthlyPriceForSelectedProductOptions(offer, exclusiveVat),
      SalesOfferUtil.getMonthlyPriceForStandaloneOptions(offer, exclusiveVat),
    ]);
  }

  public static getTotalMonthlyPriceInclPromos(offer: SalesOffer, exclusiveVat?: boolean): number {
    return sum([this.getTotalMonthlyPrice(offer, exclusiveVat), this.getTotalMonthlyPromoPrice(offer, exclusiveVat)]);
  }

  public static getSafeSpotProOption(offer: SalesOffer): SalesOfferProductOption | undefined {
    const allSelectedProductOptions = SalesOfferUtil.getAllSelectedProductOptions(offer);
    return allSelectedProductOptions.find((option) => option.omapiid === SAFE_SPOT_PRO);
  }

  public static getAllSelectedProductOptions(offer?: SalesOffer): SalesOfferProductOption[] {
    return filter(this.getAllProductOptions(offer), (o) => o.selected);
  }

  public static getAllProductOptions(offer?: SalesOffer): SalesOfferProductOption[] {
    if (offer === undefined) {
      return [];
    }
    return SalesOfferUtil.getAllProductItemsByType(offer, SalesOfferProductType.OPTIONS);
  }

  public static getAllSelectedProductStreamingServices(offer?: SalesOffer): SalesOfferProductStreamingService[] {
    return filter(this.getAllProductStreamingServices(offer), (o) => o.selected);
  }

  public static getAllProductStreamingServices(offer?: SalesOffer): SalesOfferProductStreamingService[] {
    if (offer === undefined) {
      return [];
    }
    return SalesOfferUtil.getAllProductItemsByType(
      offer,
      SalesOfferProductType.STREAMING_SERVICES
    ) as SalesOfferProductStreamingService[];
  }

  public static getAllSelectedProductOptins(offer?: SalesOffer): SalesOfferProductOptin[] {
    return filter(this.getAllProductOptins(offer), (o) => o.selected);
  }

  public static getAllProductOptins(offer?: SalesOffer): SalesOfferProductOptin[] {
    if (offer === undefined) {
      return [];
    }
    return SalesOfferUtil.getAllProductItemsByType(offer, SalesOfferProductType.OPTINS);
  }

  private static getAllProductItemsByType(
    offer: SalesOffer,
    type: SalesOfferProductType
  ): SalesOfferProductOption[] | SalesOfferProductOptin[] | SalesOfferProductStreamingService[] {
    return uniqBy(flatten(map(offer.products, (product) => product[type])), (o) => o.omapiid);
  }

  public static getMonthlyPriceForSelectedProductOptions(offer: SalesOffer, exclusiveVat?: boolean): number {
    const allSelectedProductOptions = SalesOfferUtil.getAllSelectedProductOptions(offer);
    return (
      SalesOfferUtil.getMonthlyPriceForItems(allSelectedProductOptions, !!exclusiveVat) +
      SalesOfferUtil.getMonthlyPermanentPromoDiscountForItems(allSelectedProductOptions, !!exclusiveVat)
    );
  }

  public static getMonthlyPriceForProducts(offer: SalesOffer, exclusiveVat?: boolean): number {
    return (
      SalesOfferUtil.getMonthlyPriceForItems(offer.products, !!exclusiveVat) +
      SalesOfferUtil.getMonthlyPermanentPromoDiscountForItems(offer.products, !!exclusiveVat)
    );
  }

  public static getMonthlyPriceForStandaloneOptions(offer: SalesOffer, exclusiveVat?: boolean): number {
    return (
      SalesOfferUtil.getMonthlyPriceForItems(offer.standaloneoptions, !!exclusiveVat) +
      SalesOfferUtil.getMonthlyPermanentPromoDiscountForItems(offer.standaloneoptions, !!exclusiveVat)
    );
  }

  public static getMonthlyPromosForSelectedProductOptions(offer: SalesOffer, exclusiveVat?: boolean): number {
    return sum(
      map(
        SalesOfferUtil.getMonthlyPromotions(SalesOfferUtil.getAllSelectedProductOptions(offer)),
        (p: SalesOfferPromo) => (exclusiveVat ? p.priceexclvat : p.price)
      )
    );
  }

  public static getMonthlyPromosForProducts(offer: SalesOffer, exclusiveVat?: boolean): number {
    return sum(
      map(SalesOfferUtil.getMonthlyPromotions(offer.products), (p: SalesOfferPromo) =>
        exclusiveVat ? p.priceexclvat : p.price
      )
    );
  }

  public static getMonthlyPromosForStandaloneOptions(offer: SalesOffer, exclusiveVat?: boolean): number {
    return sum(
      map(SalesOfferUtil.getMonthlyPromotions(offer.standaloneoptions), (p: SalesOfferPromo) =>
        exclusiveVat ? p.priceexclvat : p.price
      )
    );
  }

  public static getMonthlyPromos(offer: SalesOffer): SalesOfferPromo[] {
    return flatMap(offer.products, (product) => SalesOfferUtil.getMonthlyProductPromos(product));
  }

  public static getAllPromos(offer: SalesOffer): SalesOfferPromo[] {
    return concat(
      SalesOfferUtil.getMonthlyPromos(offer),
      flatMap(offer.products, (product) => SalesOfferUtil.getCostPromos(product)),
      flatMap(offer.products, (product) => SalesOfferUtil.getInstallPromos(product))
    );
  }

  public static findProduct(offer: SalesOffer, omapiId: string): SalesOfferProduct | undefined {
    return offer && offer.products ? offer.products.find((product) => product.omapiid === omapiId) : undefined;
  }

  private static getCostPromos(product: SalesOfferProduct): SalesOfferPromo[] {
    return flatMap(product.costs, (cost) => cost.promotions);
  }

  private static getInstallPromos(product: SalesOfferProduct): SalesOfferPromo[] {
    return flatMap(
      product.installtypes.filter((installType) => installType.selected),
      (installType) => installType.promos
    );
  }

  private static getMonthlyProductPromos(product: SalesOfferProduct): SalesOfferPromo[] {
    return concat(
      product.promos,
      flatMap(product.optinproducts, (optin) => optin.promos),
      flatMap(
        product.options.filter((option) => option.selected),
        (option) => option.promos
      )
    );
  }

  public static getMonthlyPromosGroupedByDuration(offer: SalesOffer): SalesOfferPromoDurationGroup[] {
    return map(
      groupBy(
        SalesOfferUtil.getMonthlyPromos(offer).filter((promo) => promo.duration > 0),
        (promo: SalesOfferPromo) => promo.duration
      ),
      (promos: SalesOfferPromo[], key: string) => {
        return {
          duration: Number(key),
          promos: promos,
        } as SalesOfferPromoDurationGroup;
      }
    );
  }

  public static getPromoDurationGroupsTotal(
    salesOfferPromoGroups: SalesOfferPromoDurationGroup[],
    exclusiveVat?: boolean
  ): number {
    return sum(
      map(
        flatMap(salesOfferPromoGroups, (group: SalesOfferPromoDurationGroup) => group.promos),
        (promo: SalesOfferPromo) => (exclusiveVat ? promo.priceexclvat : promo.price)
      )
    );
  }

  public static getBundle(offer: SalesOffer): SalesOfferProduct {
    const bundle = offer.products.find((product) => {
      return product.productInfo && product.productInfo.isBundle();
    });

    if (!bundle) {
      throw new Error('Salesoffer does not contain a bundle');
    }

    return bundle;
  }

  public static containsResidentialProduct(offer: SalesOffer): boolean {
    return offer.products.some((product) => SalesOfferProductUtil.isResidentialProduct(product));
  }

  public static containsSohoProduct(offer: SalesOffer): boolean {
    return offer.products.some((product) => SalesOfferProductUtil.isSohoProduct(product));
  }

  public static containsPromoTag(offer: SalesOfferProduct, tag: string): boolean {
    return SalesOfferPromoUtil.containsTag(offer.promos, tag);
  }

  private static getMonthlyPriceForItems(items: SalesOfferPricedItem[], exclusiveVat: boolean): number {
    return sum(map(items, (p) => (exclusiveVat ? p.priceexclvat : p.price)));
  }

  private static getMonthlyPermanentPromoDiscountForItems(
    items: SalesOfferProduct[] | SalesOfferProductOption[],
    exclusiveVat: boolean
  ): number {
    return SalesOfferUtil.getPermanentPromotions(items)
      .map((promo) => SalesOfferUtil.getPrice(promo, exclusiveVat))
      .reduce((curr, previous) => curr + previous, 0);
  }

  private static getPermanentPromotions(items: SalesOfferProduct[] | SalesOfferProductOption[]): SalesOfferPromo[] {
    return SalesOfferUtil.getPromotionsWithDuration(items, (promo: SalesOfferPromo): boolean => promo?.duration === 0);
  }

  private static getMonthlyPromotions(items: SalesOfferProduct[] | SalesOfferProductOption[]): SalesOfferPromo[] {
    return SalesOfferUtil.getPromotionsWithDuration(items, (promo: SalesOfferPromo): boolean => promo?.duration > 0);
  }

  private static getPromotionsWithDuration(
    items: SalesOfferProduct[] | SalesOfferProductOption[],
    durationFilter: (promo: SalesOfferPromo) => boolean
  ): SalesOfferPromo[] {
    return (items || [])
      .map((item: SalesOfferProductOption | SalesOfferProduct) => item.promos)
      .reduce((accumulator, value) => accumulator.concat(value), [])
      .filter(durationFilter);
  }

  public static getShortestDurationOfAllPromos(salesOffer: SalesOffer): number {
    return min([
      this.getShortestPromoDurationOfProducts(salesOffer),
      this.getShortestPromoDurationOfProductOptions(salesOffer),
      this.getShortestPromoDurationOfStandaloneOptions(salesOffer),
    ]) as number;
  }

  public static getPriceInclPromo(
    salesOfferProduct: SalesOfferProduct | SalesOfferProductOption | SalesOfferProductOptin,
    business: boolean
  ): number {
    return this.getPrice(salesOfferProduct, business) + sumBy(salesOfferProduct.promos, this.getPriceTag(business));
  }

  public static getTotalTemporaryDiscount(salesOfferProduct: SalesOfferProduct, business: boolean): number {
    const temporaryPromos = salesOfferProduct.promos.filter((promo) => promo.duration !== 0);
    return sumBy(temporaryPromos, this.getPriceTag(business));
  }

  public static getShortestPromoDuration(
    salesOfferProduct: SalesOfferProduct | SalesOfferProductOption | SalesOfferProductOptin
  ): number {
    return this.calculateShortestPromoDuration(salesOfferProduct.promos);
  }

  private static getTotalMonthlyPromoPrice(offer: SalesOffer, exclusiveVat?: boolean): number {
    return sum([
      SalesOfferUtil.getMonthlyPromosForProducts(offer, exclusiveVat),
      SalesOfferUtil.getMonthlyPromosForSelectedProductOptions(offer, exclusiveVat),
      SalesOfferUtil.getMonthlyPromosForStandaloneOptions(offer, exclusiveVat),
    ]);
  }

  public static getPrice(
    salesOfferProduct: SalesOfferProduct | SalesOfferProductOption | SalesOfferProductOptin | SalesOfferPromo,
    business: boolean
  ): number {
    return business ? salesOfferProduct.priceexclvat : salesOfferProduct.price;
  }

  private static getPriceTag(business: boolean): string {
    return business ? 'priceexclvat' : 'price';
  }

  private static calculateShortestPromoDuration(salesOfferPromos: SalesOfferPromo[]): number {
    const shortestDurationPromo = minBy(salesOfferPromos, 'duration');

    return !isUndefined(shortestDurationPromo) ? shortestDurationPromo.duration : 0;
  }

  private static getShortestPromoDurationOfProducts(salesOffer: SalesOffer): number {
    return min(map(SalesOfferUtil.getMonthlyPromotions(salesOffer.products), (promo) => promo.duration)) as number;
  }

  private static getShortestPromoDurationOfStandaloneOptions(salesOffer: SalesOffer): number {
    return min(
      map(SalesOfferUtil.getMonthlyPromotions(salesOffer.standaloneoptions), (promo) => promo.duration)
    ) as number;
  }

  private static getShortestPromoDurationOfProductOptions(salesOffer: SalesOffer): number {
    return min(
      map(SalesOfferUtil.getMonthlyPromotions(this.getAllSelectedProductOptions(salesOffer)), (promo) => promo.duration)
    ) as number;
  }

  public static getCosts(salesOffer: SalesOffer, nameFilter: string | null = null): SalesOfferCost[] {
    const flat = (someFunction: (product: SalesOfferProduct) => SalesOfferCost[], arr: SalesOfferProduct[]) =>
      arr.reduce(
        (salesOfferCosts: SalesOfferCost[], salesOfferProduct: SalesOfferProduct) => [
          ...salesOfferCosts,
          ...someFunction(salesOfferProduct),
        ],
        []
      );
    const costs = flat((product: SalesOfferProduct) => {
      if (product.costs) {
        return product.costs;
      } else {
        return [];
      }
    }, salesOffer.products);
    if (nameFilter) {
      return costs.filter((cost) => cost.name === nameFilter);
    }
    return costs;
  }

  public static getInstallTypes(salesOffer: SalesOffer): SalesOfferProductInstallType[] {
    return flatMap(salesOffer.products, (product) => product.installtypes);
  }

  public static isOrderingHighTier(salesOffer: SalesOffer): boolean {
    return salesOffer.products.some((product) => {
      return product.productInfo && product.productInfo.isHighTier();
    });
  }

  static containsAll(offer: SalesOffer, omapiIds: string[]): boolean {
    return omapiIds.every((omapiId) => this.contains(offer, omapiId));
  }

  static containsAny(offer: SalesOffer, omapiIds: string[]): boolean {
    return omapiIds.some((omapiId) => this.contains(offer, omapiId));
  }

  static contains(offer: SalesOffer, omapiId: string): boolean {
    return offer.products.some((product) => product.omapiid === omapiId);
  }
}
