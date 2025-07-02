import { Injectable } from '@angular/core';
import { isEmpty } from 'lodash-es';
import { Builder, MapperInterface } from '@telenet/ng-lib-shared';
import { OmapiProductMapper } from '@telenet/ng-lib-omapi';
import {
  RawEligibleOfferInterface,
  RawEligibleProductInterface,
  RawOptionInterfaceProduct,
  RawPriceInterface,
} from '../interfaces/raw-eligiblie-products.interface';
import { EligibleProductsModel } from '../models/eligible-products.model';
import { OptionProductsModel } from '../models/option-products.model';
import { EligibleOfferInterface } from '../interfaces/eligible-offers.interface';
import { PriceInterface } from '../interfaces/price.interface';
import { ProductConstants } from '../interfaces/product.constant';

@Injectable({
  providedIn: 'root',
})
export class EligibleProductsMapper implements MapperInterface<RawEligibleProductInterface[], EligibleProductsModel[]> {
  constructor(private readonly omapiProductMapper: OmapiProductMapper) {}

  toModel(rawEligibleProducts: RawEligibleProductInterface[]): EligibleProductsModel[] {
    return this.createEligibleProducts(rawEligibleProducts);
  }

  private createEligibleProducts(rawEligibleProducts: RawEligibleProductInterface[]): EligibleProductsModel[] {
    return (
      rawEligibleProducts &&
      rawEligibleProducts.map((rawEligibleProduct) => {
        return this.createEligibleProduct(rawEligibleProduct);
      })
    );
  }

  public createEligibleProduct(rawEligibleProduct: RawEligibleProductInterface): EligibleProductsModel {
    if (!isEmpty(rawEligibleProduct)) {
      return Builder(EligibleProductsModel)
        .id(rawEligibleProduct.id)
        .label(rawEligibleProduct.label)
        .productInfo(this.omapiProductMapper.toModel(rawEligibleProduct.rawOmapi))
        .eligibleOffers(this.createEligibleOffers(rawEligibleProduct.eligibleOffers))
        .optionProducts(this.createOptionProducts(rawEligibleProduct.optionProducts))
        .price(this.createPrice(rawEligibleProduct.price))
        .isIncluded(rawEligibleProduct.isIncluded)
        .build();
    }
  }

  createPrice(rawPrice: RawPriceInterface): PriceInterface {
    const price = {} as PriceInterface;
    if (rawPrice) {
      price.currency = rawPrice.currency;
      price.amount = rawPrice.amount;
      if (!rawPrice.amount && rawPrice.value) {
        price.amount = rawPrice.value;
      }
      price.earlyTerminationFee = rawPrice.earlyTerminationFee;
    }
    return price;
  }

  createEligibleOffers(rawEligibleOffers: RawEligibleOfferInterface[]): EligibleOfferInterface[] {
    return (
      rawEligibleOffers &&
      rawEligibleOffers.map((rawEligibleOffer) => {
        return this.createEligibleOffer(rawEligibleOffer);
      })
    );
  }

  createEligibleOffer(rawEligibleOffer: RawEligibleOfferInterface): EligibleOfferInterface {
    const eligibleOffer = {} as EligibleOfferInterface;
    eligibleOffer.productInfo = this.omapiProductMapper.toModel(rawEligibleOffer.rawOmapi);
    eligibleOffer.price = this.createPrice(rawEligibleOffer.price);
    eligibleOffer.label = rawEligibleOffer.label;
    if (eligibleOffer.optionProducts) {
      eligibleOffer.optionProducts = this.createOptionProducts(rawEligibleOffer.optionProducts);
    }
    if (rawEligibleOffer.options) {
      eligibleOffer.optionProducts = this.createOptionProducts(rawEligibleOffer.options);
    }
    return eligibleOffer;
  }

  createOptionProducts(rawOptionProducts: RawOptionInterfaceProduct[]): OptionProductsModel[] {
    return (
      rawOptionProducts &&
      rawOptionProducts.map((rawOptionProduct) => {
        return this.createOptionProduct(rawOptionProduct);
      })
    );
  }

  createOptionProduct(rawOptionProduct: RawOptionInterfaceProduct): OptionProductsModel {
    return Builder(OptionProductsModel)
      .productInfo(this.omapiProductMapper.toModel(rawOptionProduct.rawOmapi))
      .price(this.createPrice(rawOptionProduct.price))
      .category(rawOptionProduct.category)
      .rank(this.getRank(rawOptionProduct.category))
      .otherPlatformWarningMsg(rawOptionProduct.otherPlatformWarningMsg)
      .label(rawOptionProduct.label)
      .isFree(rawOptionProduct.isFree)
      .build();
  }

  private getRank(category: string) {
    switch (category) {
      case ProductConstants.PRODUCT_TYPE_BUNDLE:
        return ProductConstants.BUNDLE_RANK;
      case ProductConstants.PRODUCT_TYPE_INTERNET:
        return ProductConstants.INTERNET_RANK;
      case ProductConstants.PRODUCT_TYPE_DTV:
        return ProductConstants.DTV_RANK;
      case ProductConstants.PRODUCT_TYPE_TELEPHONE:
        return ProductConstants.TELEPHONE_RANK;
      case ProductConstants.PRODUCT_TYPE_MOBILE:
        return ProductConstants.MOBILE_RANK;
    }
  }
}
