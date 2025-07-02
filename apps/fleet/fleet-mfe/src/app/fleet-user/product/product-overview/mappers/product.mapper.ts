import { Injectable } from '@angular/core';
import { OmapiProduct, OmapiProductMapper, RawOmapiProductInterface, ServiceInterface } from '@telenet/ng-lib-omapi';
import { MapperInterface } from '@telenet/ng-lib-shared';
import {
  ContentPack,
  ContractInterface,
  HandsetInterface,
  Option,
  PriceInterface,
  Product,
  ProductExperienceInterface,
} from '../../../shared/models/product.model';
import {
  RawContractDetailsInterface,
  RawHandsetInterface,
  RawOptionInterface,
  RawProduct,
  RawProductPrice,
} from '../interfaces/raw-product.interface';
import { RawOmapiQueryProductInterfaceData } from '@telenet/ng-lib-omapi-query';
import { ProductOverviewConstants } from '../../../../shared/common/constants/product-overview.constant';

@Injectable({
  providedIn: 'root',
})
export class ProductMapper implements MapperInterface<RawProduct[], Product[]> {
  constructor(
    private readonly omapiMapper: OmapiProductMapper // private readonly omapiService: OmapiQueryProductService
  ) {}

  toModel(rawProducts: RawProduct[]): Product[] {
    return rawProducts.map((rawProduct) => {
      if (rawProduct.productType === ProductOverviewConstants.DTV && rawProduct.children?.length === 1) {
        const dtvProduct = this.getBundleProductDetails(rawProduct.children[0], rawProduct);
        dtvProduct.children = [];
        dtvProduct.locationId = rawProduct.locationId;
        dtvProduct.addressId = rawProduct.addressId;
        dtvProduct.parentIdentifier = rawProduct.identifier;
        dtvProduct.hasOldSocialTariffDiscount = rawProduct.hasOldSocialTariffDiscount;
        return dtvProduct;
      } else {
        return this.createProduct(rawProduct);
      }
    });
  }

  private createProduct(rawProduct: RawProduct): Product {
    const product = new Product();

    product.accountNumber = Number(rawProduct.accountNumber);
    product.handsets = this.getHandsets(rawProduct.handsets);
    product.locationId = rawProduct.locationId;
    product.identifier = rawProduct.identifier;
    product.label = rawProduct.label;
    product.options = this.getOptions(rawProduct.options);
    product.price = this.createPrice(rawProduct.price);
    product.productInfo = this.createProductInfo(rawProduct.rawOmapi);
    product.productType = rawProduct.productType;
    product.specUrl = rawProduct.specurl;
    product.status = rawProduct.status;
    product.addressId = rawProduct.addressId;
    product.isUnderMove = false;
    product.showModemUpgradeBanner = rawProduct.showModemUpgradeBanner;
    product.bundleType = rawProduct.bundleType;
    product.hasOldSocialTariffDiscount = rawProduct.hasOldSocialTariffDiscount;
    product.simCardType = rawProduct.simCardType;
    product.simCardNumber = rawProduct.simCardNumber;
    product.pukCode = rawProduct.pukCode;
    product.splitBillProfileType = rawProduct.splitBillProfile?.type;

    product.hasExtraOptions = product.options.some((option) => !option.isIncludedOption);
    product.hasIncludedOptions = product.options.some((option) => option.isIncludedOption);

    product.children = this.createChildren(rawProduct);

    if (rawProduct.upgradePossibleTo) {
      product.upgradePossibleTo = rawProduct.upgradePossibleTo;
    }

    if (
      rawProduct.productType === ProductOverviewConstants.BUNDLE &&
      rawProduct.children.filter((child) => child.productType === ProductOverviewConstants.DTV)?.length > 1
    ) {
      product.isMultipleDTV = true;
    }

    return product;
  }

  private getOptions(rawOptions: RawOptionInterface[]): Option[] {
    let options: Option[] = [];

    rawOptions?.forEach((rawOption) => {
      const productInfo = this.createProductInfo(rawOption.rawOmapi);
      const option: Option = {
        label: rawOption.label,
        productInfo: productInfo,
        status: rawOption.status,
        price: this.createPrice(rawOption.price),
        isIncludedOption: rawOption.isIncludedOption,
        isFree: rawOption.isFree,
        activeOptions: rawOption.activeOptions,
        productType: rawOption.productType,
        upgradedFrom: '',
        description: rawOption.label,
        shortDescription: productInfo?.shortDescription?.localizedContent?.name,
        productId: productInfo?.productId,
        category: productInfo?.subCategory?.localizedName,
        name: productInfo?.name,
        volume: productInfo?.services?.length > 0 ? this.mapVolume(productInfo.services[0]) : null,
      };

      if (rawOption.contract) {
        option.contract = this.getContractDetails(rawOption.contract) as RawContractDetailsInterface;
      }

      /// STILLTOCHECK
      if (rawOption.upgradePossibleTo) {
        option.upgradePossibleTo = rawOption.upgradePossibleTo;
      }

      option.weight = option.productInfo.weight;

      options.push(option);
    });

    options = options.sort((a, b) => {
      return (a.weight || 0) - (b.weight || 0);
    });

    return options;
  }

  private mapVolume(service: ServiceInterface) {
    if (service.specifications[0]?.unit) {
      return service.specifications[0]?.value + ' ' + service.specifications[0].unit;
    }
    return service.specifications[0]?.value;
  }

  private getHandsets(rawHandsets: RawHandsetInterface[]): HandsetInterface[] {
    const handsets: HandsetInterface[] = [];

    rawHandsets?.forEach((rawHandset) => {
      const currentDate = new Date();
      const obligationEndDate = rawHandset.contract?.obligationEndDate;

      if (new Date(obligationEndDate) > currentDate) {
        const handset = {
          identifier: rawHandset.identifier,
          msisdn: rawHandset.msisdn,
          accountNumber: rawHandset.accountNumber,
          label: rawHandset.label,
          /// productInfo: rawHandset.queryurl
          //   ? this.omapiService.getRawQueryProductByEndpoint('', rawHandset.queryurl)
          //   : [],
          productInfo: rawHandset.rawOmapiQuery,
          contract: this.getContractDetails(rawHandset.contract),
          handsetName: this.getHandsetName(rawHandset.label, rawHandset.rawOmapiQuery?.products),
        };
        handsets.push(handset as HandsetInterface);
      }
    });

    return handsets;
  }

  private getHandsetName(label: string, info?: RawOmapiQueryProductInterfaceData[]): string {
    if (info?.length) {
      const variant = info[0].variants[0];
      /// STILLTOCHECK
      return (
        variant?.manBrand?.localizedContent?.[0]?.value?.[0] +
        ' ' +
        variant.shortDescription?.localizedContent?.[0]?.data
      );
    }
    return label;
  }

  private getContractDetails(rawContract: RawContractDetailsInterface): ContractInterface {
    if (!rawContract) {
      return {} as ContractInterface;
    }

    const contract: ContractInterface = {
      obligationEndDate: rawContract.obligationEndDate,
      duration: rawContract.duration,
    };

    if (rawContract.price) {
      contract.price = this.createPrice(rawContract.price);
    }

    return contract;
  }

  private createPrice(rawPrices: RawProductPrice): PriceInterface {
    const prices: PriceInterface = {
      currency: rawPrices?.currency,
      recurrentTotal: rawPrices?.recurrentTotal,
      recurrentDiscounted: rawPrices?.recurrentDiscounted,
      recurrentDiscount: rawPrices?.recurrentDiscount,
      earlyTerminationFee: rawPrices?.earlyTerminationFee,
      taxInclPrices: {
        currency: rawPrices?.currency,
        recurrentTotal: rawPrices?.taxInclPrices?.recurrentTotal,
        recurrentDiscounted: rawPrices?.taxInclPrices?.recurrentDiscounted,
        recurrentDiscount: rawPrices?.recurrentDiscount,
      },
      taxExclPrices: {
        currency: rawPrices?.taxExclPrices?.currency,
        recurrentDiscounted: rawPrices?.taxExclPrices?.recurrentDiscounted,
        recurrentTotal: rawPrices?.taxExclPrices?.recurrentTotal,
        recurrentDiscount: rawPrices?.taxExclPrices?.recurrentDiscount,
      },
    };

    return prices;
  }

  private createProductInfo(rawOmapi: RawOmapiProductInterface): OmapiProduct {
    if (rawOmapi) {
      return this.omapiMapper.toModel(rawOmapi);
    }

    return {} as OmapiProduct;
  }

  private createChildren(rawProduct: RawProduct): Product[] | [] {
    if (!rawProduct.children?.length) {
      return [];
    }
    let childArray: Product[] = [];
    rawProduct.children.forEach((child) => {
      childArray.push(this.getBundleProductDetails(child, rawProduct));
    });

    childArray = childArray.sort((a, b) => {
      return (a.productSpec?.weight || 0) - (b.productSpec?.weight || 0);
    });

    let mobileLines = childArray.filter((item) => item.productType === 'mobile');
    if (mobileLines && mobileLines.length > 0) {
      mobileLines = mobileLines.sort((mobileLine1, mobileLine2) => (mobileLine1.status < mobileLine2.status ? -1 : 1));
      childArray = childArray.filter((item) => item.productType !== 'mobile');
      childArray.push(mobileLines[0]);
    }
    return childArray;
  }

  private getBundleProductDetails(child: RawProduct, rawProduct: RawProduct): Product {
    const bundleProduct = new Product();

    bundleProduct.eSimStatus = child.eSimStatus;
    bundleProduct.identifier = child.identifier;
    bundleProduct.id = child.id;
    bundleProduct.status = child.status;
    bundleProduct.handsets = this.getHandsets(child.handsets);
    bundleProduct.productType = child.productType;
    bundleProduct.productSpec = this.createProductInfo(child.rawOmapi);
    bundleProduct.productInfo = this.createProductInfo(rawProduct.rawOmapi);
    bundleProduct.addressId = rawProduct.addressId;
    if (child.contentPacks?.length) {
      /// bundleProduct.productInfo.contentPacks = this.createProductInfo(child.contentPacks[0]?.rawOmapi)
      /// bundleProduct.productInfo.contentPackSpecifications = bundleProduct.productInfo.contentPacks && bundleProduct.productInfo.contentPacks.services && bundleProduct.productInfo.contentPacks.services[0] &&
      ///                                                        bundleProduct.productInfo.contentPacks.services[0].specifications;
      bundleProduct.contentPacks = child.contentPacks.map((rawContentPack) => {
        const mappedContentPack: ContentPack = {} as ContentPack;
        mappedContentPack.label = rawContentPack.label;
        mappedContentPack.status = rawContentPack.status;
        mappedContentPack.isIncludedOption = rawContentPack.isIncludedOption;
        mappedContentPack.productInfo = this.createProductInfo(rawContentPack.rawOmapi);
        return mappedContentPack;
      });
    }
    if (child.experience) {
      bundleProduct.experience = {} as ProductExperienceInterface;
      bundleProduct.experience.experienceId = child.experience.experienceId;
      bundleProduct.experience.label = child.experience.label;
      bundleProduct.experience.productInfo = this.createProductInfo(child.experience.rawOmapi);
    }
    bundleProduct.options = this.getOptions(child.options);
    bundleProduct.hasIncludedOptions = Boolean(bundleProduct.options.find((option) => option.isIncludedOption));
    bundleProduct.hasExtraOptions = Boolean(bundleProduct.options.find((option) => !option.isIncludedOption));
    bundleProduct.bundleMaxlines = this.getBundleMaxPossibleLines(bundleProduct.productInfo);
    bundleProduct.label = child.label;

    if (bundleProduct.productType === 'mobile') {
      bundleProduct.mobileIdentifier = [];
      bundleProduct.limitedLines = [];
      bundleProduct.unlimitedLines = [];
      rawProduct.children.forEach((child) => {
        if (child.productType === 'mobile') {
          bundleProduct.mobileIdentifier?.push({ identifier: child.identifier, eSimStatus: child.eSimStatus });
          if (child.dataLimit && child.dataLimit?.toUpperCase() !== ProductOverviewConstants.UNLIMITED) {
            bundleProduct.limitedLines?.push(child.identifier);
          } else {
            bundleProduct.unlimitedLines?.push(child.identifier);
          }
        }
      });
    }
    if (
      rawProduct.productType === ProductOverviewConstants.BUNDLE &&
      bundleProduct.productType === ProductOverviewConstants.DTV &&
      rawProduct.children.filter((child) => child.productType === ProductOverviewConstants.DTV)?.length > 1
    ) {
      bundleProduct.isMultipleDTV = true;
    }
    return bundleProduct;
  }

  getBundleMaxPossibleLines(product: OmapiProduct) {
    const generalService = product.services?.find((service) => service.serviceType.toLowerCase() === 'general');
    const mobileMaxLineSpecification = generalService?.specifications?.find(
      (specification) => specification.labelKey === 'spec-bundle-mobile-maxlines'
    );
    return Number(mobileMaxLineSpecification?.value);
  }
}
