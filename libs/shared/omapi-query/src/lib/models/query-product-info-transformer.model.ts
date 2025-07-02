import { Injectable } from '@angular/core';
import { ProductTypeEnum } from '../enums/product-type.enum';
import { LanguageService } from '@telenet/ng-lib-page';
import { isEmpty, first, isNil } from 'lodash-es';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import {
  BrandInterface,
  LocalizedContentInterface,
  OmapiQueryProductInterface,
  QueryProductsInterface,
  ShortDescriptionInterface,
  VariantsInterface,
} from '../interfaces/omapi-query-product.interface';

@Injectable({
  providedIn: 'root',
})
export class QueryProductInfoTransformer {
  constructor(private readonly languageService: LanguageService) {}

  toModel(queryProductInfo: OmapiQueryProductInterface): OmapiProduct {
    return this.transformToOmapiProduct(queryProductInfo);
  }

  transformToOmapiProduct(queryProductInfo: OmapiQueryProductInterface): OmapiProduct {
    const omapiProduct = new OmapiProduct();
    if (!isEmpty(queryProductInfo.products)) {
      const queryProductDetails = first(queryProductInfo.products);
      if (queryProductDetails) {
        omapiProduct.labelKey = queryProductDetails.labelKey;
        omapiProduct.productType =
          queryProductDetails.productFamily.toUpperCase() === ProductTypeEnum.SMARTPHONES
            ? ProductTypeEnum.SMARTPHONE
            : queryProductDetails.productFamily.toUpperCase();
        if (!isEmpty(queryProductDetails.variants)) {
          this.appendVariantToOmapiProduct(queryProductDetails, omapiProduct);
        }
      }
    }
    return omapiProduct;
  }

  private appendVariantToOmapiProduct(queryProductDetails: QueryProductsInterface, omapiProduct: OmapiProduct) {
    const variant = first(queryProductDetails.variants);
    if (variant) {
      if (!isNil(variant.extraAtHomeDelivery)) {
        omapiProduct.extraAtHomeDelivery = variant.extraAtHomeDelivery;
      }
      omapiProduct.productId = variant.productId;
      omapiProduct.externalProductCode = variant.productId;
      omapiProduct.priceType = variant.prices.priceType;
      omapiProduct.imageUrl = QueryProductInfoTransformer.getImageUrl(variant);
      const contentForLocale = this.getContentForLocale(variant.shortDescription);
      if (contentForLocale) {
        omapiProduct.name = contentForLocale.data;
      }
      const brandValue = this.getBrandValueForLocale(variant.brand);
      if (brandValue) {
        omapiProduct.brand = first(brandValue.value);
      }
    }
  }

  private static getImageUrl(variant: VariantsInterface): string {
    if (!isEmpty(variant) && !isEmpty(variant.images)) {
      const imageDetails = first(variant.images);
      return imageDetails ? imageDetails.value : '';
    }
    return '';
  }

  private getContentForLocale(shortDescription: ShortDescriptionInterface): LocalizedContentInterface {
    if (!isEmpty(shortDescription) && !isEmpty(shortDescription.localizedContent)) {
      const localizedContentInterface = shortDescription.localizedContent.find((localizeContent) => {
        return localizeContent.locale === this.languageService.getLanguage();
      });
      return localizedContentInterface ? localizedContentInterface : ({} as LocalizedContentInterface);
    }

    return {} as LocalizedContentInterface;
  }

  private getBrandValueForLocale(brand: BrandInterface): LocalizedContentInterface {
    if (!isEmpty(brand) && !isEmpty(brand.localizedContent)) {
      const localizedContentInterface = brand.localizedContent.find((localizedContent) => {
        return localizedContent.locale === this.languageService.getLanguage();
      });

      return localizedContentInterface ? localizedContentInterface : ({} as LocalizedContentInterface);
    }

    return {} as LocalizedContentInterface;
  }
}
