import { SdataSalesOffer, SdataSalesOfferItem } from '../interfaces/sdata-sales-offer.interface';
import { Cart, CartBuilder, Item, ItemBuilder, PriceBuilder, ProductBuilder } from 'udl';
import { SalesOfferTypeEnum } from '../constants/hardware-checkout.constant';

export class SalesOfferUtil {
  static mapToUdlCart(salesOffer: SdataSalesOffer): Cart {
    const cartBuilder = new CartBuilder();
    salesOffer.offers.forEach((offer) => cartBuilder.withItem(this.mapToUdlItem(offer)));

    const price = new PriceBuilder()
      .withBasePrice(new PriceBuilder().withOneTimePrice(0).withRecurringPrice(0).build())
      .withTotalPrice(new PriceBuilder().withOneTimePrice(0).withRecurringPrice(0).build())
      .build();

    return cartBuilder.withPrice(price).build();
  }

  private static mapToUdlItem(offer: SdataSalesOfferItem): Item {
    const itemBuilder = new ItemBuilder();
    const productInfoBuilder = new ProductBuilder();

    productInfoBuilder.withProductId(offer.itemCode);
    productInfoBuilder.withProductStatus('ADD');

    productInfoBuilder.withProductType(
      SalesOfferTypeEnum.SMARTPHONES.includes(offer.type.toLowerCase())
        ? SalesOfferTypeEnum.SMARTPHONE
        : offer.type.toUpperCase()
    );

    const item = itemBuilder.withProductInfo(productInfoBuilder.build()).withQuantity(1).build();
    item['_helpers'] = {};
    return item;
  }
}
