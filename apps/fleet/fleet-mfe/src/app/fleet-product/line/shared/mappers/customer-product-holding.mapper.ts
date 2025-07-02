import { isEmpty } from 'lodash-es';
import { inject, Injectable } from '@angular/core';
import { MapperInterface } from '@telenet/ng-lib-shared';
import { OptionMapper } from './option.mapper';
import {
  ContractDetailsDto,
  CustomerProductHoldingDto,
  HandsetDto,
  HardwareProductDetailsDto,
  LineLevelProductsDto,
} from '../interfaces/dto/customer-product-holding-dto.interface';
import { CustomerProductHolding } from '../models/customer-product-holding.model';
import { SplitBillProfile } from '../interfaces/split-bill-profile.interface';
import { OmapiProduct, OmapiProductMapper } from '@telenet/ng-lib-omapi';
import { SmartPhoneInterface } from '../interfaces/smartphone.interface';
import { PricesMapper } from './sales/prices.mapper';
import { DiscountItemMapper } from './sales/discount-item.mapper';
import { LineLevelProductsInterface } from '../interfaces/line-level-products.interface';
import { OmapiQueryProductMapper, QueryProductInfoTransformer } from '@telenet/ng-lib-omapi-query';
import { ContractDetailsInterface } from '../interfaces/contract-details.interface';

@Injectable({
  providedIn: 'root',
})
export class CustomerProductHoldingMapper
  implements MapperInterface<CustomerProductHoldingDto, CustomerProductHolding>
{
  readonly #optionMapper = inject(OptionMapper);
  readonly #omapiProductMapper = inject(OmapiProductMapper);
  readonly #omapiQueryProductMapper = inject(OmapiQueryProductMapper);
  readonly #omapiQueryProductTransformer = inject(QueryProductInfoTransformer);
  readonly #pricesMapper = inject(PricesMapper);
  readonly #discountItemMapper = inject(DiscountItemMapper);

  toModel(rawCustomerProductHolding: CustomerProductHoldingDto): CustomerProductHolding {
    return this.createCustomerProductHolding(rawCustomerProductHolding);
  }

  private createCustomerProductHolding(rawCustomerProductHolding: CustomerProductHoldingDto): CustomerProductHolding {
    const customerProductHolding = new CustomerProductHolding();
    if (!isEmpty(rawCustomerProductHolding)) {
      customerProductHolding.splitBillProfile = {
        id: rawCustomerProductHolding.splitBillProfile?.id,
        name: rawCustomerProductHolding.splitBillProfile?.name,
      } as SplitBillProfile;
      customerProductHolding.options = rawCustomerProductHolding.options.map((option) =>
        this.#optionMapper.toModel(option)
      );
      customerProductHolding.referenceInformation = rawCustomerProductHolding.referenceInformation;
      customerProductHolding.secondaryBillingAddressId = rawCustomerProductHolding.secondaryBillingAddressId;
      customerProductHolding.id = rawCustomerProductHolding.id;
      customerProductHolding.id = rawCustomerProductHolding.id;
      customerProductHolding.locationId = rawCustomerProductHolding.locationId;
      customerProductHolding.success = true;
      customerProductHolding.selection = rawCustomerProductHolding.selection;
      customerProductHolding.identifier = rawCustomerProductHolding.identifier;
      customerProductHolding.lineIdentifier = rawCustomerProductHolding.lineIdentifier;
      customerProductHolding.msisdn = rawCustomerProductHolding.msisdn;
      customerProductHolding.splitBillProfile = rawCustomerProductHolding.splitBillProfile;
      customerProductHolding.accountNumber = rawCustomerProductHolding.accountNumber;
      customerProductHolding.label = rawCustomerProductHolding.label;
      customerProductHolding.productInfo = this.#omapiProductMapper.toModel(rawCustomerProductHolding.rawOmapi);
      customerProductHolding.plan = customerProductHolding.productInfo;
      customerProductHolding.status = rawCustomerProductHolding.status;
      customerProductHolding.smartPhones = this.createSmartPhones(rawCustomerProductHolding.handsets);
      customerProductHolding.secondaryAccountNumber = rawCustomerProductHolding.secondaryAccountNumber;
      customerProductHolding.prices = this.#pricesMapper.toModel(rawCustomerProductHolding.price);
      customerProductHolding.summaryPrices = this.#pricesMapper.toModel(rawCustomerProductHolding.summaryPrices);
      customerProductHolding.discountItem = this.#discountItemMapper.toModel(rawCustomerProductHolding.discountItems);
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
    }
    return customerProductHolding;
  }

  private createSmartPhones(rawHandsets: HandsetDto[]): SmartPhoneInterface[] {
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

  private createSmartPhone(rawHandset: HandsetDto): SmartPhoneInterface {
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

  private createLineLevelProducts(rawLineLevelProducts: LineLevelProductsDto[]): LineLevelProductsInterface[] {
    return rawLineLevelProducts.map((rawProduct) => {
      return {
        category: rawProduct.category,
        identifier: rawProduct.identifier,
        productInfo: this.#omapiProductMapper.toModel(rawProduct.rawOmapi),
        prices: this.#pricesMapper.toModel(rawProduct.prices),
        isFree: rawProduct.isFree,
        discountItem: this.#discountItemMapper.toModel(rawProduct.discountItems),
      };
    });
  }

  private createProductInfo(rawHandset: HandsetDto): OmapiProduct {
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
        const queryProductInfo = this.#omapiQueryProductMapper.toModel(rawHandset.rawOmapiQuery);
        return this.#omapiQueryProductTransformer.toModel(queryProductInfo);
      } else {
        const productInfo = new OmapiProduct();
        productInfo.name = rawHandset.label;
        return productInfo;
      }
    } else {
      return this.#omapiProductMapper.toModel(rawHandset.rawOmapi);
    }
  }

  private createProductDetails(rawProductDetails: HardwareProductDetailsDto): HardwareProductDetailsDto {
    const productDetails = {} as HardwareProductDetailsDto;
    productDetails.productType = rawProductDetails.productType;
    productDetails.priceType = rawProductDetails.priceType;
    productDetails.requiresInstallation = rawProductDetails.requiresInstallation;
    productDetails.label = rawProductDetails.label;
    return productDetails;
  }

  private createContractDetails(rawContract: ContractDetailsDto): ContractDetailsInterface {
    const contract = {} as ContractDetailsInterface;
    if (rawContract) {
      contract.obligationEndDate = rawContract.obligationEndDate;
      contract.duration = rawContract.duration;
      if (rawContract.price) {
        contract.price = this.#pricesMapper.toModel(rawContract.price);
      }
    }
    return contract;
  }
}
