import { PriceAttributes } from './price-attributes.interface';

export class InstallTypePriceModel {
  public price: string;
  public originalPrice?: string;
  public isPromo: boolean;

  constructor(price: string, promoPrice: string | null = null) {
    this.price = this.replaceCommaByDot(price);
    this.originalPrice = this.replaceCommaByDot(promoPrice);
    this.isPromo = !!promoPrice;
  }

  static installPriceWithPromo(priceAttributes: PriceAttributes) {
    return new InstallTypePriceModel(priceAttributes.oneTimeDiscounted, priceAttributes.oneTimeTotal);
  }

  static installPriceWithoutPromo(priceAttributes: PriceAttributes) {
    return new InstallTypePriceModel(priceAttributes.oneTimeDiscounted);
  }

  private replaceCommaByDot(price: string | null) {
    return price?.replace(',', '.') || '';
  }
}
