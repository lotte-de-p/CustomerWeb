import { Injectable } from '@angular/core';
import { isEmpty, isNil } from 'lodash-es';
import {
  BrandInterface,
  ImagesInterface,
  LocalizedContentInterface,
  OmapiQueryProductInterface,
  PricesInterface,
  QueryProductsInterface,
  ShortDescriptionInterface,
  VariantsInterface,
} from '../interfaces/omapi-query-product.interface';
import {
  RawBrandInterface,
  RawImagesInterface,
  RawLocalizedContentInterface,
  RawOmapiQueryProductInterface,
  RawOmapiQueryProductInterfaceData,
  RawPricesInterface,
  RawShortDescription,
  RawVariantsInterface,
} from '../interfaces/raw-omapi-query-product.interface';
import { MapperInterface } from '@telenet/ng-lib-shared';

@Injectable({
  providedIn: 'root',
})
export class OmapiQueryProductMapper
  implements MapperInterface<RawOmapiQueryProductInterface, OmapiQueryProductInterface>
{
  toModel(rawOmapiQueryProduct: RawOmapiQueryProductInterface): OmapiQueryProductInterface {
    return this.createOmapiQueryProduct(rawOmapiQueryProduct);
  }

  private createOmapiQueryProduct(rawOmapiQueryProduct: RawOmapiQueryProductInterface): OmapiQueryProductInterface {
    const omapiQueryProduct = {} as OmapiQueryProductInterface;
    omapiQueryProduct.products = this.createQueryProducts(rawOmapiQueryProduct.products);

    return omapiQueryProduct;
  }

  createQueryProducts(rawQueryProducts: RawOmapiQueryProductInterfaceData[]): QueryProductsInterface[] {
    return (
      rawQueryProducts &&
      rawQueryProducts.map((rawQueryProduct) => {
        return this.createQueryProductData(rawQueryProduct);
      })
    );
  }

  createQueryProductData(rawQueryProduct: RawOmapiQueryProductInterfaceData): QueryProductsInterface {
    const queryProduct = {} as QueryProductsInterface;
    queryProduct.labelKey = rawQueryProduct.labelKey;
    queryProduct.productFamily = rawQueryProduct.productFamily;
    queryProduct.variants = this.createVariants(rawQueryProduct.variants);
    return queryProduct;
  }

  private createLocalizedContents(rawLocalizedContents: RawLocalizedContentInterface[]): LocalizedContentInterface[] {
    return (
      rawLocalizedContents &&
      rawLocalizedContents.map((rawLocalizedContent) => {
        return OmapiQueryProductMapper.createLocalizedContent(rawLocalizedContent);
      })
    );
  }

  private static createLocalizedContent(rawLocalizedContent: RawLocalizedContentInterface): LocalizedContentInterface {
    const localizedContent = {} as LocalizedContentInterface;
    localizedContent.locale = rawLocalizedContent.locale;
    localizedContent.key = rawLocalizedContent.key;
    localizedContent.data = rawLocalizedContent.data;
    localizedContent.value = OmapiQueryProductMapper.createLocalizedContentValue(
      rawLocalizedContent.value ? rawLocalizedContent.value : []
    );
    return localizedContent;
  }

  private static createLocalizedContentValue(rawLocalizedContentValue: string[]): string[] {
    return (
      rawLocalizedContentValue &&
      rawLocalizedContentValue.map((value) => {
        return value;
      })
    );
  }

  private createVariants(rawVariants: RawVariantsInterface[]): VariantsInterface[] {
    return (
      rawVariants &&
      rawVariants.map((rawVariant) => {
        return this.createVariant(rawVariant);
      })
    );
  }

  private createVariant(rawVariant: RawVariantsInterface): VariantsInterface {
    const variant = {} as VariantsInterface;
    variant.productId = rawVariant.productId;
    if (!isNil(rawVariant.extraAtHomeDelivery)) {
      variant.extraAtHomeDelivery = rawVariant.extraAtHomeDelivery;
    }
    variant.prices = OmapiQueryProductMapper.createPrices(rawVariant.prices);
    variant.images = this.createImages(rawVariant.images);
    const shortDescription = this.createShortDescription(rawVariant.shortDescription);
    if (shortDescription) {
      variant.shortDescription = shortDescription;
    }
    variant.brand = this.createBrand(rawVariant.manBrand);
    return variant;
  }

  private static createPrices(rawPrices: RawPricesInterface): PricesInterface {
    const prices = {} as PricesInterface;
    prices.priceType = rawPrices.priceType;
    return prices;
  }

  private createImages(rawImages: RawImagesInterface[]): ImagesInterface[] {
    return (
      rawImages &&
      rawImages.map((rawImage) => {
        return this.createImage(rawImage);
      })
    );
  }

  private createImage(rawImage: RawImagesInterface): ImagesInterface {
    const image = {} as ImagesInterface;
    image.attributeKey = rawImage.attributeKey;
    image.value = rawImage.value;
    image.localizedContent = this.createLocalizedContents(rawImage.localizedContent);
    return image;
  }

  private createShortDescription(rawShortDescription: RawShortDescription): ShortDescriptionInterface {
    if (!isEmpty(rawShortDescription) && !isEmpty(rawShortDescription.localizedContent)) {
      const shortDescription = {} as ShortDescriptionInterface;
      shortDescription.localizedContent = this.createLocalizedContents(rawShortDescription.localizedContent);
      return shortDescription;
    }

    return {} as ShortDescriptionInterface;
  }
  private createBrand(rawBrand: RawBrandInterface): BrandInterface {
    if (!isEmpty(rawBrand) && !isEmpty(rawBrand.localizedContent)) {
      const brand = {} as BrandInterface;
      brand.localizedContent = this.createLocalizedContents(rawBrand.localizedContent);
      return brand;
    }
    return {} as BrandInterface;
  }
}
