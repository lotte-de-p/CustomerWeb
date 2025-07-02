import { Injectable } from '@angular/core';
import { MapperInterface } from '@telenet/ng-lib-shared';
import { OmapiProduct, OmapiProductMapper } from '@telenet/ng-lib-omapi';
import { LanguageService, NormalizationService } from '@telenet/ng-lib-page';
import orderBy from 'lodash-es/orderBy';
import isEmpty from 'lodash-es/isEmpty';
import isNil from 'lodash-es/isNil';
import first from 'lodash-es/first';
import get from 'lodash-es/get';
import sortBy from 'lodash-es/sortBy';
import { OmapiQueryProductMapper, QueryProductInfoTransformer } from '@telenet/ng-lib-omapi-query';
import { ValidationMapper } from './validation.mapper';
import { CharsInterface } from '../interfaces/chars.interface';
import { OrderItemRankArray } from '../../product/shared/constants/order-item-rank.constants';
import { HardwareService } from '../services/hardware.service';
import { OrderItemUsageTypeEnum } from '../enums/order-item-usage-type.enum';
import { OrderItem } from '../models/order-item.model';
import {
  HardwareProductDetailsInterface,
  RawBillingAddressInterface,
  RawDiscountItemInterface,
  RawOrderItemInterface,
  RawValidationInterface,
} from '../interfaces/raw/raw-sales-order.interface';
import { CharacteristicsInterface } from '../interfaces/characteristics.interface';
import { PricesMapper } from './prices.mapper';
import { BillingAddressInterface } from '../interfaces/billing/billing-address.interface';
import { DiscountItemInterface } from '../interfaces/discount-item.interface';
import { DiscountItemMapper } from './discount-item.mapper';
import { Address } from '../models/address.model';
import { ValidationInterface } from '../interfaces/validation.interface';

@Injectable({
  providedIn: 'root',
})
export class OrderItemMapper implements MapperInterface<RawOrderItemInterface, OrderItem> {
  constructor(
    private readonly normalizeService: NormalizationService,
    private readonly pricesMapper: PricesMapper,
    private readonly validationMapper: ValidationMapper,
    private readonly omapiProductMapper: OmapiProductMapper,
    private readonly discountItemMapper: DiscountItemMapper,
    private readonly omapiQueryProductMapper: OmapiQueryProductMapper,
    private readonly queryProductInfoTransformer: QueryProductInfoTransformer,
    private readonly hardwareService: HardwareService,
    private readonly languageService: LanguageService
  ) {}

  toModel(rawOrderItem: RawOrderItemInterface): OrderItem {
    return this.createOrderItem(rawOrderItem);
  }

  private createOrderItem(rawOrderItem: RawOrderItemInterface): OrderItem {
    const orderItem = new OrderItem();
    orderItem.id = rawOrderItem.id;
    orderItem.type = this.normalizeService.normalizeKey(rawOrderItem.type);
    orderItem.otherPlatformWarningMsg = rawOrderItem.otherPlatformWarningMsg;
    orderItem.name = rawOrderItem.name;
    orderItem.prices = this.pricesMapper.toModel(rawOrderItem.prices);
    orderItem.locationId = rawOrderItem.locationId;
    orderItem.parentId = rawOrderItem.parentId;
    orderItem.orderItems = this.createOrderItems(rawOrderItem.orderItems);
    orderItem.productInfo = this.createProductInfo(rawOrderItem);
    orderItem.hwcvpItemCode = rawOrderItem.hwcvpItemCode;
    orderItem.status = rawOrderItem.status && rawOrderItem.status.toUpperCase();
    orderItem.eligibility = rawOrderItem.eligibility;
    orderItem.billingAddressId = rawOrderItem.billingAddressId;
    orderItem.billingAddress = this.createBillingAddress(rawOrderItem.billingAddress);
    orderItem.rank = this.getRank(orderItem.productInfo.productType, orderItem.status);
    orderItem.validations = this.createOrderItemValidations(rawOrderItem.validations);
    orderItem.orderItemsByRank = this.sortItemsByRank(orderItem.orderItems, orderItem.parentId);
    orderItem.setPricesFromOTCOrderItem();
    orderItem.setCancellationCharge();
    orderItem.chars = this.createChars(rawOrderItem.chars);
    orderItem.discountItem = this.createDiscountItem(rawOrderItem.discountItems);
    orderItem.productIdentifier = rawOrderItem.productIdentifier;
    orderItem.eligibleForEasySwitch = rawOrderItem.eligibleForEasySwitch;
    orderItem.publicateNumber = rawOrderItem.publicateNumber;
    orderItem.isMobileLineConfigured = rawOrderItem.isMobileLineConfigured;
    orderItem.serialNumber = rawOrderItem.serialNumber;
    orderItem.isMigratedFromStandalone = rawOrderItem.isMigratedFromStandalone;
    orderItem.isDiscountByCouponCode = rawOrderItem.isDiscountByCouponCode;
    orderItem.optionCount = rawOrderItem.optionCount;
    orderItem.usageType = rawOrderItem.usageType || OrderItemUsageTypeEnum.EMPTY;
    return orderItem;
  }

  private createProductInfo(rawOrderItem: RawOrderItemInterface): OmapiProduct {
    const preOrderOption = this.setPreOrderMessage(rawOrderItem);
    const backOrderOption = this.setBackOrderMessage(rawOrderItem);
    let preOrderDescriptionLabel: string;
    let backOrderDescriptionLabel: string;
    const isSameLanguageLocale = (element) => element.locale === this.languageService.getLanguage();
    if (preOrderOption && preOrderOption.length > 0) {
      const localizedContentObjectValues = first(
        get(preOrderOption[0].preOrderDescription, 'localizedContent', []).filter(isSameLanguageLocale)
      );
      preOrderDescriptionLabel = get(localizedContentObjectValues, 'value[0]', '');
    }
    if (backOrderOption && backOrderOption.length > 0) {
      const localizedContentObjectValues = first(
        get(backOrderOption[0].backOrderDescription, 'localizedContent', []).filter(isSameLanguageLocale)
      );
      backOrderDescriptionLabel = get(localizedContentObjectValues, 'value[0]', '');
    }
    if (!isEmpty(rawOrderItem.rawOmapiQuery)) {
      if (isEmpty(rawOrderItem.rawOmapiQuery.products) && !isEmpty(rawOrderItem.productDetails)) {
        const productInfo = new OmapiProduct();
        const productDetails = this.createProductDetails(rawOrderItem.productDetails);
        productInfo.name = productDetails.label;
        productInfo.productType = productDetails.productType.toUpperCase();
        productInfo.priceType = productDetails.priceType;
        productInfo.requiresInstallation = productDetails.requiresInstallation;
        productInfo.externalProductCode = rawOrderItem.hwcvpItemCode;
        productInfo.brand = productDetails.brand;
        productInfo.extraAtHomeDelivery = this.createExtraAtHomeDelivery(productDetails);
        productInfo.isPreOrder = preOrderOption.length > 0;
        productInfo.isBackOrder = backOrderOption.length > 0;
        productInfo.preOrderDescriptionLabel = preOrderDescriptionLabel;
        productInfo.backOrderDescriptionLabel = backOrderDescriptionLabel;
        return productInfo;
      } else {
        const queryProductInfo = this.omapiQueryProductMapper.toModel(rawOrderItem.rawOmapiQuery);
        const info = this.queryProductInfoTransformer.toModel(queryProductInfo);
        info.isPreOrder = preOrderOption.length > 0;
        info.isBackOrder = backOrderOption.length > 0;
        info.preOrderDescriptionLabel = preOrderDescriptionLabel;
        info.backOrderDescriptionLabel = backOrderDescriptionLabel;
        return info;
      }
    } else {
      return this.omapiProductMapper.toModel(rawOrderItem.rawOmapi);
    }
  }

  private setPreOrderMessage(rawOrderItem: RawOrderItemInterface) {
    const customerBrand = this.hardwareService.getCustomerBrandAndCategoryAlias();
    let tags = [];
    let preOrderOption;
    const parentVariant = rawOrderItem.rawOmapiQuery?.products[0]?.variants[0];
    if (parentVariant && parentVariant.tag && parentVariant.tag[customerBrand]) {
      tags = parentVariant.tag[customerBrand].options;
    }
    if (customerBrand === 'telenet' || customerBrand === 'baseSoho') {
      preOrderOption = tags.filter((tag) => tag.attributeKey === 'pre_order_label');
    }
    if (customerBrand === 'telenetSoho') {
      preOrderOption = tags.filter((tag) => tag.attributeKey === 'pre_order_label_soho');
    }
    return preOrderOption;
  }

  private setBackOrderMessage(rawOrderItem: RawOrderItemInterface) {
    const customerBrand = this.hardwareService.getCustomerBrandAndCategoryAlias();
    let tags = [];
    let backOrderOption;
    const parentVariant = rawOrderItem.rawOmapiQuery?.products[0]?.variants[0];
    if (parentVariant && parentVariant.tag && parentVariant.tag[customerBrand]) {
      tags = parentVariant.tag[customerBrand].options;
    }
    if (customerBrand === 'telenet' || customerBrand === 'baseSoho') {
      backOrderOption = tags.filter((tag) => tag.attributeKey === 'back_order_label');
    }
    if (customerBrand === 'telenetSoho') {
      backOrderOption = tags.filter((tag) => tag.attributeKey === 'back_order_label_soho');
    }
    return backOrderOption;
  }

  private createExtraAtHomeDelivery(productDetails: HardwareProductDetailsInterface): boolean {
    if (!isNil(productDetails.extraAtHomeDelivery)) {
      return productDetails.extraAtHomeDelivery;
    }
    return false;
  }

  private createProductDetails(rawProductDetails: HardwareProductDetailsInterface): HardwareProductDetailsInterface {
    const productDetails = {} as HardwareProductDetailsInterface;
    productDetails.productType = rawProductDetails.productType;
    productDetails.priceType = rawProductDetails.priceType;
    productDetails.requiresInstallation = rawProductDetails.requiresInstallation;
    productDetails.label = rawProductDetails.label;
    productDetails.brand = rawProductDetails.brand;
    productDetails.extraAtHomeDelivery = this.createExtraAtHomeDelivery(rawProductDetails);
    return productDetails;
  }

  private createOrderItems(rawOrderItems: RawOrderItemInterface[]): OrderItem[] {
    return (
      rawOrderItems &&
      rawOrderItems.map((rawOrderItem) => {
        return this.toModel(rawOrderItem);
      })
    );
  }

  private createOrderItemValidations(rawOrderItemValidations: RawValidationInterface[]): ValidationInterface[] {
    return (
      rawOrderItemValidations &&
      rawOrderItemValidations.map((rawOrderItemValidation) => {
        return this.validationMapper.toModel(rawOrderItemValidation);
      })
    );
  }

  private createChars(rawChars: CharsInterface): CharacteristicsInterface {
    const chars = {} as CharacteristicsInterface;
    if (!isEmpty(rawChars)) {
      chars.endDate = rawChars.endDate;
      chars.phoneNumber = rawChars.phoneNumber;
      chars['Cable Network Operator'] = rawChars['Cable Network Operator'];
      chars['Active VOO Customer?'] = rawChars['Active VOO Customer?'];
      chars['Floor'] = rawChars['Floor'];
      chars['Location on the Floor'] = rawChars['Location on the Floor'];
      chars['Connection Needed?'] = rawChars['Connection Needed?'];
    }
    return chars;
  }

  private getRank(productType: string, status: string): number {
    const orderingKey = this.getOrderingKey(productType, status);
    return this.getRankFromArray(orderingKey);
  }

  private getOrderingKey(productType: string, status: string): string {
    let orderingKey = '';
    if (productType && status) {
      orderingKey = productType.concat('-').concat(status);
    }
    return orderingKey;
  }

  private getRankFromArray(orderingKey: string): number {
    const defaultRank = 999;
    const rank = OrderItemRankArray.indexOf(orderingKey);
    return rank > -1 ? rank : defaultRank;
  }

  private sortItemsByRank(orderItems: OrderItem[], parentId: string): OrderItem[] {
    if (parentId) {
      return sortBy(orderItems, ['parentId'], ['name']);
    }
    return orderBy(orderItems, ['rank'], ['asc']);
  }

  private createBillingAddress(rawBillingAddress: RawBillingAddressInterface): BillingAddressInterface {
    const billingAddress = {} as BillingAddressInterface;
    const manualAddress = new Address();
    const rawManualAddress = rawBillingAddress && rawBillingAddress.manualAddress;
    if (rawManualAddress) {
      manualAddress.type = rawManualAddress.type;
      manualAddress.country = rawManualAddress.country;
      manualAddress.houseNumber = rawManualAddress.houseNumber;
      manualAddress.boxNumber = rawManualAddress.boxNumber;
      manualAddress.subHouseNumber = rawManualAddress.subHouseNumber;
      manualAddress.street = rawManualAddress.street;
      manualAddress.streetId = rawManualAddress.streetId;
      manualAddress.postalCode = rawManualAddress.postalCode;
      manualAddress.municipality = rawManualAddress.municipality;
    }
    billingAddress.manualAddress = manualAddress;
    return billingAddress;
  }

  private createDiscountItem(rawDiscountItems: RawDiscountItemInterface): DiscountItemInterface {
    return this.discountItemMapper.toModel(rawDiscountItems);
  }
}
