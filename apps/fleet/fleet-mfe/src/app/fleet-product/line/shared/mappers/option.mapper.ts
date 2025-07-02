import { inject, Injectable } from '@angular/core';
import { MapperInterface } from '@telenet/ng-lib-shared';
import { Option } from '../models/option.model';
import { OmapiProduct, OmapiProductMapper, ServiceInterface, SpecificationInterface } from '@telenet/ng-lib-omapi';
import { CharsDto, ContractDetailsDto, OptionDto } from '../interfaces/dto/customer-product-holding-dto.interface';
import { OmapiProductInfo, Service, Specification } from '../interfaces/omapi-products.interface';
import { ContractDetailsInterface } from '../interfaces/contract-details.interface';
import { ProductConstants } from '../constants/product.constant';
import { CharsInterface } from '../interfaces/chars.interface';
import { DiscountItemMapper } from './sales/discount-item.mapper';
import { PricesMapper } from './sales/prices.mapper';

@Injectable({
  providedIn: 'root',
})
export class OptionMapper implements MapperInterface<OptionDto, Option> {
  readonly #omapiProductMapper = inject(OmapiProductMapper);
  readonly #discountItemMapper = inject(DiscountItemMapper);
  readonly #pricesMapper = inject(PricesMapper);

  toModel(rawOption: OptionDto): Option {
    return this.createOption(rawOption);
  }

  private createOption(rawOption: OptionDto): Option {
    const option = new Option();
    if (rawOption) {
      option.label = rawOption.label;
      option.productInfo = this.createProductInfo(this.#omapiProductMapper.toModel(rawOption.rawOmapi));
      option.status = rawOption.status;
      option.prices = this.#pricesMapper.toModel(rawOption.price);
      option.contract = this.createContract(rawOption.contract);
      option.discountItem = this.#discountItemMapper.toModel(rawOption.discountItems);
      option.isIncluded = rawOption.isIncluded;
      option.category = rawOption.category;
      option.hwcvpItemCode = rawOption.hwcvpItemCode;
      option.productType = rawOption.productType;
      option.rank = this.getRank(rawOption.category);
      option.isIncludedOption = rawOption.isIncludedOption;
      option.parentId = rawOption.parentId;
      option.isFree = rawOption.isFree;
      option.chars = this.createChars(rawOption.chars);
    }
    return option;
  }

  private createProductInfo(rawOmapi: OmapiProduct): OmapiProductInfo {
    return {
      productId: rawOmapi.productId,
      name: rawOmapi.name,
      services: rawOmapi.services?.map((service) => this.createServices(service)),
      subCategory: {
        localizedName: rawOmapi.subCategory?.localizedName,
      },
    };
  }

  private createServices(service: ServiceInterface): Service {
    return {
      specifications: service.specifications.map((specification) => this.createSpecififcations(specification)),
    };
  }

  private createSpecififcations(specifications: SpecificationInterface): Specification {
    return {
      value: specifications.value,
      unit: specifications.unit,
    };
  }

  private createContract(rawContract: ContractDetailsDto): ContractDetailsInterface {
    return {
      obligationEndDate: rawContract.obligationEndDate,
      duration: rawContract.duration,
      price: rawContract.price,
    };
  }

  private createChars(rawChars: CharsDto): CharsInterface {
    return {
      hasVoiceMailBox: rawChars.hasVoiceMailBox,
    };
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
