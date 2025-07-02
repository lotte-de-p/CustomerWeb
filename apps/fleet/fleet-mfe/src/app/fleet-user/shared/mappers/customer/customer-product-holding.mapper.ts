import isEmpty from 'lodash-es/isEmpty';
import { Injectable } from '@angular/core';
import { Option } from '../../models/option.model';
import { SmartPhoneInterface } from '../../interfaces/smartphone.interface';
import { Builder, MapperInterface } from '@telenet/ng-lib-shared';
import { CustomerProductHolding } from '../../models/customer-product-holding.model';
import { ContractDetailsInterface } from '../../interfaces/contract-details.interface';
import { ProductConstants } from '../../constants/product/product.constant';
import { OmapiProduct, OmapiProductMapper } from '@telenet/ng-lib-omapi';
import {
  HardwareProductDetailsInterface,
  RawActiveTrialPackInterface,
  RawContractDetailsInterface,
  RawCustomerProductHoldingInterface,
  RawHandsetInterface,
  RawLineLevelProductsInterface,
  RawOptionInterface,
} from '../../interfaces/raw/raw-customer-product-holding.interface';
import { LineLevelProductsInterface } from '../../interfaces/line-level-products.interface';
import { OmapiQueryProductMapper, QueryProductInfoTransformer } from '@telenet/ng-lib-omapi-query';
import { PriceAttributes } from '@telenet/ng-lib-form';
import { DiscountItemMapper } from '../discount-item.mapper';
import { ProductExperienceInterface } from '../../interfaces/product/product-experience.interface';
import { RawDiscountItemInterface, RawPricesInterface } from '../../interfaces/raw/raw-sales-order.interface';
import { Prices } from '../../models/prices.model';
import { TrialPack } from '../../models/trial-pack.model';
import { DiscountItemInterface } from '../../interfaces/discount-item.interface';

@Injectable({
  providedIn: 'root',
})
export class CustomerProductHoldingMapper
  implements MapperInterface<RawCustomerProductHoldingInterface, CustomerProductHolding>
{
  constructor(
    private readonly omapiProductMapper: OmapiProductMapper,
    private readonly discountItemMapper: DiscountItemMapper,
    private readonly omapiQueryProductMapper: OmapiQueryProductMapper,
    private readonly queryProductInfoTransformer: QueryProductInfoTransformer
  ) {}

  toModel(rawCustomerProductHolding: RawCustomerProductHoldingInterface): CustomerProductHolding {
    return this.createCustomerProductHolding(rawCustomerProductHolding);
  }

  private createCustomerProductHolding(
    rawCustomerProductHolding: RawCustomerProductHoldingInterface
  ): CustomerProductHolding {
    const customerProductHolding = new CustomerProductHolding();
    if (!isEmpty(rawCustomerProductHolding)) {
      customerProductHolding.id = rawCustomerProductHolding.id;
      customerProductHolding.locationId = rawCustomerProductHolding.locationId;
      customerProductHolding.success = true;
      customerProductHolding.selection = rawCustomerProductHolding.selection;
      customerProductHolding.identifier = rawCustomerProductHolding.identifier;
      customerProductHolding.lineIdentifier = rawCustomerProductHolding.lineIdentifier;
      customerProductHolding.msisdn = rawCustomerProductHolding.msisdn;
      customerProductHolding.referenceInformation = rawCustomerProductHolding.referenceInformation;
      customerProductHolding.splitBillProfile = rawCustomerProductHolding.splitBillProfile;
      customerProductHolding.accountNumber = rawCustomerProductHolding.accountNumber;
      customerProductHolding.label = rawCustomerProductHolding.label;
      customerProductHolding.productInfo = this.omapiProductMapper.toModel(rawCustomerProductHolding.rawOmapi);
      customerProductHolding.plan = customerProductHolding.productInfo;
      customerProductHolding.status = rawCustomerProductHolding.status;
      customerProductHolding.smartPhones = this.createSmartPhones(rawCustomerProductHolding.handsets);
      customerProductHolding.options = this.createOptions(rawCustomerProductHolding.options);
      customerProductHolding.secondaryAccountNumber = rawCustomerProductHolding.secondaryAccountNumber;
      customerProductHolding.secondaryBillingAccount = rawCustomerProductHolding.secondaryBillingAccount;
      customerProductHolding.secondaryBillingAddressId = rawCustomerProductHolding.secondaryBillingAddressId;
      customerProductHolding.prices = this.createPrices(rawCustomerProductHolding.price);
      customerProductHolding.summaryPrices = this.createPrices(rawCustomerProductHolding.summaryPrices);
      customerProductHolding.discountItem = this.createDiscountItem(rawCustomerProductHolding.discountItems);
      customerProductHolding.hasUsage = true;
      customerProductHolding.hwcvpItemCode = rawCustomerProductHolding.hwcvpItemCode;
      customerProductHolding.activationDate = rawCustomerProductHolding.activationDate;
      customerProductHolding.productType = rawCustomerProductHolding.productType;
      customerProductHolding.addressId = rawCustomerProductHolding.addressId;
      customerProductHolding.description = rawCustomerProductHolding.description;
      customerProductHolding.billingAccount = rawCustomerProductHolding.billingAccount;
      customerProductHolding.contentPacks = rawCustomerProductHolding.contentPacks;
      customerProductHolding.address = rawCustomerProductHolding.address;
      customerProductHolding.lineType = rawCustomerProductHolding.lineType;
      customerProductHolding.specUrl = rawCustomerProductHolding.specurl;
      if (rawCustomerProductHolding.lineLevelProducts) {
        customerProductHolding.lineLevelProducts = this.createLineLevelProducts(
          rawCustomerProductHolding.lineLevelProducts
        );
      }
      if (rawCustomerProductHolding.children && rawCustomerProductHolding.children.length > 0) {
        customerProductHolding.children = rawCustomerProductHolding.children.map((child) =>
          this.createCustomerProductHolding(child)
        );
      }
      if (rawCustomerProductHolding.experience) {
        customerProductHolding.experience = Builder<ProductExperienceInterface>()
          .experienceId(rawCustomerProductHolding.experience.experienceId)
          .label(rawCustomerProductHolding.experience.label)
          .externalProductCode(this.getProductIdFromUrl(rawCustomerProductHolding.experience.specurl))
          .build();
      }
      customerProductHolding.simType = rawCustomerProductHolding.simType;
      customerProductHolding.hasPendingOrder = rawCustomerProductHolding.hasPendingOrder;
      customerProductHolding.hasPendingSwapToESim = rawCustomerProductHolding.hasPendingSwapToESim;
    }
    return customerProductHolding;
  }

  private readonly getProductIdFromUrl = (specUrl: string): string => specUrl.substring(specUrl.lastIndexOf('/') + 1);

  private createLineLevelProducts(rawLineLevelProducts: RawLineLevelProductsInterface[]): LineLevelProductsInterface[] {
    return rawLineLevelProducts.map((rawProduct) => {
      return {
        category: rawProduct.category,
        identifier: rawProduct.identifier,
        productInfo: this.omapiProductMapper.toModel(rawProduct.rawOmapi),
        prices: this.createPrices(rawProduct.prices),
        isFree: rawProduct.isFree,
        discountItem: this.createDiscountItem(rawProduct.discountItems),
      };
    });
  }

  private createPrices(rawPrices: RawPricesInterface): Prices {
    const prices = new Prices();
    prices.earlyTerminationFee = rawPrices && rawPrices.earlyTerminationFee;
    if (rawPrices && rawPrices.taxInclPrices) {
      prices.taxInclPrices = {} as PriceAttributes;
      prices.taxInclPrices.currency = rawPrices.taxInclPrices.currency;
      prices.taxInclPrices.recurrentTotal = rawPrices.taxInclPrices.recurrentTotal;
      prices.taxInclPrices.recurrentDiscount = rawPrices.taxInclPrices.recurrentDiscount;
      prices.taxInclPrices.recurrentDiscounted = rawPrices.taxInclPrices.recurrentDiscounted;
      prices.taxInclPrices.oneTimeTotal = rawPrices.taxInclPrices.oneTimeTotal;
      prices.taxInclPrices.oneTimeDiscount = rawPrices.taxInclPrices.oneTimeDiscount;
      prices.taxInclPrices.oneTimeDiscounted = rawPrices.taxInclPrices.oneTimeDiscounted;
    }
    if (rawPrices && rawPrices.taxExclPrices) {
      prices.taxExclPrices = {} as PriceAttributes;
      prices.taxExclPrices.currency = rawPrices.taxExclPrices.currency;
      prices.taxExclPrices.recurrentTotal = rawPrices.taxExclPrices.recurrentTotal;
      prices.taxExclPrices.recurrentDiscount = rawPrices.taxExclPrices.recurrentDiscount;
      prices.taxExclPrices.recurrentDiscounted = rawPrices.taxExclPrices.recurrentDiscounted;
      prices.taxExclPrices.oneTimeTotal = rawPrices.taxExclPrices.oneTimeTotal;
      prices.taxExclPrices.oneTimeDiscount = rawPrices.taxExclPrices.oneTimeDiscount;
      prices.taxExclPrices.oneTimeDiscounted = rawPrices.taxExclPrices.oneTimeDiscounted;
    }
    return prices;
  }

  private createActiveTrials(rawActiveTrialPack: RawActiveTrialPackInterface): TrialPack {
    const trialPack = new TrialPack();
    if (rawActiveTrialPack) {
      trialPack.id = rawActiveTrialPack.id;
      trialPack.label = rawActiveTrialPack.label;
      trialPack.productInfo = this.omapiProductMapper.toModel(rawActiveTrialPack.rawOmapi);
      trialPack.status = rawActiveTrialPack.status;
      trialPack.deactivationDate = rawActiveTrialPack.deactivationDate;
    }
    return trialPack;
  }

  private createSmartPhones(rawHandsets: RawHandsetInterface[]): SmartPhoneInterface[] {
    const smartPhones = [] as SmartPhoneInterface[];
    if (rawHandsets) {
      rawHandsets.forEach((rawHandset) => {
        const currentDate = new Date();
        if (!isEmpty(rawHandset.contract) && new Date(rawHandset.contract.obligationEndDate) > currentDate) {
          smartPhones.push(this.createSmartPhone(rawHandset));
        }
      });
    }
    return smartPhones;
  }

  private createSmartPhone(rawHandset: RawHandsetInterface): SmartPhoneInterface {
    const smartPhone = {} as SmartPhoneInterface;
    if (rawHandset) {
      smartPhone.identifier = rawHandset.identifier;
      smartPhone.msisdn = rawHandset.msisdn;
      smartPhone.accountNumber = rawHandset.accountNumber;
      smartPhone.hwcvpItemCode = rawHandset.hwcvpItemCode;
      smartPhone.productInfo = this.createProductInfo(rawHandset);
      smartPhone.contract = this.createContractDetails(rawHandset.contract);
    }
    return smartPhone;
  }

  private createProductInfo(rawHandset: RawHandsetInterface): OmapiProduct {
    if (!isEmpty(rawHandset.rawOmapiQuery)) {
      if (isEmpty(rawHandset.rawOmapiQuery.products) && !isEmpty(rawHandset.productDetails)) {
        const productInfo = new OmapiProduct();
        const productDetails = this.createProductDetails(rawHandset.productDetails);
        productInfo.name = productDetails.label;
        productInfo.productType = productDetails.productType.toUpperCase();
        productInfo.priceType = productDetails.priceType;
        productInfo.requiresInstallation = productDetails.requiresInstallation;
        productInfo.externalProductCode = rawHandset.hwcvpItemCode;
        return productInfo;
      } else if (!isEmpty(rawHandset.rawOmapiQuery.products)) {
        const queryProductInfo = this.omapiQueryProductMapper.toModel(rawHandset.rawOmapiQuery);
        return this.queryProductInfoTransformer.toModel(queryProductInfo);
      } else {
        const productInfo = new OmapiProduct();
        productInfo.name = rawHandset.label;
        return productInfo;
      }
    } else {
      return this.omapiProductMapper.toModel(rawHandset.rawOmapi);
    }
  }

  private createProductDetails(rawProductDetails: HardwareProductDetailsInterface): HardwareProductDetailsInterface {
    const productDetails = {} as HardwareProductDetailsInterface;
    productDetails.productType = rawProductDetails.productType;
    productDetails.priceType = rawProductDetails.priceType;
    productDetails.requiresInstallation = rawProductDetails.requiresInstallation;
    productDetails.label = rawProductDetails.label;
    return productDetails;
  }

  private createContractDetails(rawContract: RawContractDetailsInterface): ContractDetailsInterface {
    const contract = {} as ContractDetailsInterface;
    if (rawContract) {
      contract.obligationEndDate = rawContract.obligationEndDate;
      contract.duration = rawContract.duration;
      if (rawContract.price) {
        contract.price = this.createPrices(rawContract.price);
      }
    }
    return contract;
  }

  private createOptions(rawOptions: RawOptionInterface[]): Option[] {
    const options = [] as Option[];
    if (rawOptions) {
      rawOptions.forEach((rawOption) => {
        options.push(this.createOption(rawOption));
      });
    }
    return options;
  }

  private createOption(rawOption: RawOptionInterface): Option {
    const option = new Option();
    if (rawOption) {
      option.label = rawOption.label;
      option.productInfo = this.omapiProductMapper.toModel(rawOption.rawOmapi);
      option.status = rawOption.status;
      option.prices = this.createPrices(rawOption.price);
      option.contract = this.createContractDetails(rawOption.contract);
      option.discountItem = this.createDiscountItem(rawOption.discountItems);
      option.isIncluded = rawOption.isIncluded;
      option.category = rawOption.category;
      option.hwcvpItemCode = rawOption.hwcvpItemCode;
      option.productType = rawOption.productType;
      option.rank = this.getRank(rawOption.category);
      option.activeTrialPack = this.createActiveTrials(rawOption.activeTrialPack);
      option.isIncludedOption = rawOption.isIncludedOption;
      option.parentId = rawOption.parentId;
      option.isFree = rawOption.isFree;
      option.chars = rawOption.chars;
      option.optionCount = rawOption.optionCount;
    }
    return option;
  }
  private createDiscountItem(rawDiscountItems: RawDiscountItemInterface): DiscountItemInterface {
    return this.discountItemMapper.toModel(rawDiscountItems);
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
