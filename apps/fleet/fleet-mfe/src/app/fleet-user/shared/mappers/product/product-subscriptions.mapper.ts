import { MapperInterface } from '@telenet/ng-lib-shared';
import { Injectable } from '@angular/core';
import { ProductConstants } from '../../constants/product/product.constant';
import { OmapiProductInterfaceData, OmapiProductMapper, RawOmapiProductInterfaceData } from '@telenet/ng-lib-omapi';
import { LanguageService } from '@telenet/ng-lib-page';
import { ProductSubscriptionsInterface } from '../../interfaces/product/product-subscriptions.interface';
import each from 'lodash-es/each';
import find from 'lodash-es/find';
import isEmpty from 'lodash-es/isEmpty';
import { PricesMapper } from '../prices.mapper';
import { RawProductSubscriptionsInterface } from '../../interfaces/raw/raw-product-subscriptions.interface';
import { ProductSubscriptionsModel } from '../../models/product-subscriptions.model';

@Injectable({
  providedIn: 'root',
})
export class ProductSubscriptionsMapper
  implements MapperInterface<RawProductSubscriptionsInterface[], ProductSubscriptionsInterface[]>
{
  constructor(
    private readonly languageService: LanguageService,
    private readonly omapiProductMapper: OmapiProductMapper,
    private readonly pricesMapper: PricesMapper
  ) {}

  toModel(rawProductSubscriptions: RawProductSubscriptionsInterface[]): ProductSubscriptionsInterface[] {
    return this.createProductSubscriptions(rawProductSubscriptions);
  }

  private createProductSubscriptions(
    rawProductSubscriptions: RawProductSubscriptionsInterface[]
  ): ProductSubscriptionsInterface[] {
    return (
      rawProductSubscriptions &&
      rawProductSubscriptions.map((rawProductSubscription) => {
        return this.createProductSubscription(rawProductSubscription);
      })
    );
  }

  private createProductSubscription(
    rawProductSubscription: RawProductSubscriptionsInterface
  ): ProductSubscriptionsInterface {
    let productSubscription = new ProductSubscriptionsModel();

    if (!isEmpty(rawProductSubscription)) {
      productSubscription.description = rawProductSubscription.description;
      productSubscription.id = rawProductSubscription.id;
      productSubscription.identifier = rawProductSubscription.identifier;
      productSubscription.externalProductCode = rawProductSubscription.externalProductCode;
      productSubscription.label = rawProductSubscription.label
        ? rawProductSubscription.label.split('/')[0]
        : rawProductSubscription.label;
      productSubscription.useSpecurl = rawProductSubscription.useSpecurl;
      productSubscription.internetType = rawProductSubscription.internetType;
      productSubscription.activationDate = rawProductSubscription.activationDate;
      productSubscription.addressId = rawProductSubscription.addressId;
      productSubscription.locationId = rawProductSubscription.locationId;
      productSubscription.status = rawProductSubscription.status;
      productSubscription.userPIDLinked = rawProductSubscription.userPIDLinked;
      productSubscription.isDataOnlyPlan = rawProductSubscription.isDataOnlyPlan;
      productSubscription.productType = rawProductSubscription.productType;
      productSubscription.bundleIdentifier = rawProductSubscription.bundleIdentifier;
      productSubscription.pid = rawProductSubscription.pid;
      productSubscription.bundleFamily = rawProductSubscription.bundleFamily;
      productSubscription.hasVoiceMail = rawProductSubscription.hasVoiceMail;
      productSubscription.salesOrderId = rawProductSubscription.salesOrderId;
      productSubscription.name = rawProductSubscription.name;
      productSubscription.billingAccountNumber = rawProductSubscription.billingAccountNumber;
      productSubscription.inviteType = rawProductSubscription.inviteType;
      productSubscription.chargePeriod = rawProductSubscription.chargePeriod;
      productSubscription.isInteractive = rawProductSubscription.isInteractive;
      productSubscription.serialNumber = rawProductSubscription.serialNumber;
      productSubscription.hwReturnDueDate = rawProductSubscription.hwReturnDueDate;
      productSubscription.hwClaimFee = rawProductSubscription.hwClaimFee;
      productSubscription.parentId = rawProductSubscription.parentId;
      productSubscription.targetepc = rawProductSubscription.targetepc;
      productSubscription.compositeOrderId = rawProductSubscription.compositeOrderId;
      productSubscription.deviceType = rawProductSubscription.deviceType;
      productSubscription.bundleType = rawProductSubscription.bundleType;
      productSubscription.lineType = rawProductSubscription.lineType;
      productSubscription.simType = rawProductSubscription.simType;

      productSubscription = this.enrichProductSubscription(rawProductSubscription, productSubscription);
    }
    return productSubscription;
  }

  private getMappedProductSpec(product: RawOmapiProductInterfaceData): OmapiProductInterfaceData {
    const spec = {} as OmapiProductInterfaceData;
    spec.localizedcontent = find(product.localizedcontent, ['locale', this.languageService.getLanguage()]);
    return spec;
  }

  private enrichProductSubscription(
    rawProductSubscription: RawProductSubscriptionsInterface,
    productSubscription: ProductSubscriptionsModel
  ): ProductSubscriptionsModel {
    if (rawProductSubscription.options) {
      productSubscription.options = rawProductSubscription.options.map((option) => {
        return {
          productInfo: this.omapiProductMapper.toModel(option.rawOmapi),
        };
      });
    }
    this.enrichProductSubscriptionWithOmapi(rawProductSubscription, productSubscription);
    this.enrichProductSubscriptionsWithMsisdn(productSubscription);
    this.enrichProductSubscriptionsWithLabel(productSubscription);
    this.enrichProductSubscriptionWithProductOrders(rawProductSubscription, productSubscription);

    if (rawProductSubscription.products) {
      productSubscription.products = rawProductSubscription.products;
      each(rawProductSubscription.products, (rawProduct, index) => {
        if (rawProduct && rawProduct.rawOmapi) {
          productSubscription.products[index].productInfo = this.omapiProductMapper.toModel(rawProduct.rawOmapi);
        }
      });
    }
    if (rawProductSubscription.prices) {
      productSubscription.prices = this.pricesMapper.toModel(rawProductSubscription.prices);
    }

    if (!isEmpty(rawProductSubscription.children)) {
      productSubscription.children = this.toModel(rawProductSubscription.children);
    }

    return productSubscription;
  }

  private enrichProductSubscriptionWithOmapi(
    rawProductSubscription: RawProductSubscriptionsInterface,
    productSubscription: ProductSubscriptionsModel
  ): ProductSubscriptionsModel {
    if (rawProductSubscription.rawOmapi) {
      productSubscription.spec = this.getMappedProductSpec(rawProductSubscription.rawOmapi.product);
      productSubscription.productInfo = this.omapiProductMapper.toModel(rawProductSubscription.rawOmapi);
      productSubscription.plan = productSubscription.productInfo;
      productSubscription.isBase0Plan = productSubscription.plan.productId === ProductConstants.BASE_0_PLAN_IDENTIFIER;
    }

    return productSubscription;
  }

  private enrichProductSubscriptionWithProductOrders(
    rawProductSubscription: RawProductSubscriptionsInterface,
    productSubscription: ProductSubscriptionsModel
  ): ProductSubscriptionsModel {
    productSubscription.productOrders = rawProductSubscription.productOrders;
    each(rawProductSubscription.productOrders, (rawProductOrder, index) => {
      if (rawProductOrder.customerProduct && rawProductOrder.customerProduct.rawOmapi) {
        productSubscription.productOrders[index].customerProduct.productInfo = this.omapiProductMapper.toModel(
          rawProductOrder.customerProduct.rawOmapi
        );
      }
    });

    return productSubscription;
  }

  private enrichProductSubscriptionsWithLabel(
    productSubscription: ProductSubscriptionsModel
  ): ProductSubscriptionsModel {
    if (
      productSubscription.useSpecurl &&
      (productSubscription.productType === ProductConstants.PRODUCT_TYPE_MOBILE ||
        productSubscription.productType === ProductConstants.PRODUCT_TYPE_INTERNET ||
        productSubscription.productType === ProductConstants.PRODUCT_TYPE_BUNDLE)
    ) {
      productSubscription.label = productSubscription.spec.localizedcontent.name;
    }
    return productSubscription;
  }

  private enrichProductSubscriptionsWithMsisdn(
    productSubscription: ProductSubscriptionsModel
  ): ProductSubscriptionsModel {
    if (
      productSubscription.productType === ProductConstants.PRODUCT_TYPE_MOBILE ||
      productSubscription.productType === ProductConstants.PRODUCT_TYPE_TELEPHONE ||
      productSubscription.productType === ProductConstants.PRODUCT_TYPE_BUNDLE
    ) {
      productSubscription.msisdn = productSubscription.identifier;
    }
    return productSubscription;
  }
}
