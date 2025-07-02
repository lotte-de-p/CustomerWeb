import { TranslateService } from '@ngx-translate/core';
import { SalesOfferPromo } from '../models/response';
import { isNil } from 'lodash-es';
import { ConnectFiveConstants } from '../constants/connect-five.constants';
import { LabelUtil } from '@telenet/ng-lib-page';

export class SalesOfferPromoUtil {
  private static readonly PROMOTION_DICTIONARY = 'promotions';
  private static readonly DEFAULT_LABEL = 'default';
  private static readonly DEFAULT_PERMANENT_LABEL = 'default-permanent';

  public static containsTag(promo: SalesOfferPromo[], tag: string): boolean {
    return promo.some((promo: SalesOfferPromo) => promo.tags.some((promoTag: string) => promoTag === tag));
  }

  public static hasDiscount(promo: SalesOfferPromo): boolean {
    return promo && promo.duration > 0 && promo.price < 0;
  }

  public static getShortestPromoExcludingZeroDurations(promos: SalesOfferPromo[]): SalesOfferPromo | undefined {
    const nonZeroDurationPromos = promos.filter((promo: SalesOfferPromo) => promo.duration > 0);

    return nonZeroDurationPromos.length === 0
      ? undefined
      : nonZeroDurationPromos.reduce((prev, curr) => (prev.duration < curr.duration ? prev : curr));
  }

  public static getPromoWithZeroDurationAndZeroDiscount(promos: SalesOfferPromo[]): SalesOfferPromo | undefined {
    return promos.find((promo: SalesOfferPromo) => promo.duration === 0 && promo.price === 0);
  }

  public static getTotalDiscountWithZeroDuration(promos: SalesOfferPromo[], sohoFlow: boolean): number {
    return promos
      .filter((promo: SalesOfferPromo) => promo.duration === 0)
      .map((promo) => (sohoFlow ? promo.priceexclvat : promo.price))
      .reduce((curr: number, prev: number) => curr + prev, 0);
  }

  static getOverviewLabel(
    promo: SalesOfferPromo,
    product: string,
    translateService: TranslateService,
    isSoho: boolean,
    discount: number
  ): string {
    const labelKey = SalesOfferPromoUtil.getLabelKey(
      [SalesOfferPromoUtil.PROMOTION_DICTIONARY, LabelUtil.normalizeKey(promo.name)],
      isSoho
    );
    const params = { amount: this.transformPrice(discount), product: product, duration: promo.duration };

    let copy = translateService.instant(labelKey, params);
    if (copy === undefined || copy === null || copy === '' || copy === labelKey) {
      copy = this.getDefaultCopy(promo, isSoho, translateService, params, labelKey);
    }
    return copy;
  }

  private static getDefaultCopy<T extends object>(
    promo: SalesOfferPromo,
    isSoho: boolean,
    translateService: TranslateService,
    params: T,
    labelKey: string
  ) {
    const defaultKeyWord = SalesOfferPromoUtil.isPermanentPromotion(promo)
      ? SalesOfferPromoUtil.DEFAULT_PERMANENT_LABEL
      : SalesOfferPromoUtil.DEFAULT_LABEL;
    const defaultLabelKey = SalesOfferPromoUtil.getLabelKey(
      [SalesOfferPromoUtil.PROMOTION_DICTIONARY, defaultKeyWord],
      isSoho
    );
    let copy = translateService.instant(defaultLabelKey, params);

    if (copy === undefined || copy === null || copy === '' || copy === defaultLabelKey) {
      copy = labelKey;
    }
    return copy;
  }

  private static getLabelKey(keyWords: string[], isSoho: boolean): string {
    if (isSoho) {
      keyWords.push(ConnectFiveConstants.SOHO_LABEL_APPENDIX);
    }
    return LabelUtil.getLabelKeyWithTypeText(keyWords.join('.'));
  }

  private static isPermanentPromotion(promo: SalesOfferPromo): boolean {
    return promo.duration === 0 && promo.price < 0;
  }

  private static transformPrice(price: number): string {
    return !isNil(price) ? price.toFixed(2).replace('.', ',') : '';
  }
}
