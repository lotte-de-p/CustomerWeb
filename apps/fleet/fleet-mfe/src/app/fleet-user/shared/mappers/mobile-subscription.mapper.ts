import { MapperInterface } from '@telenet/ng-lib-shared';
import { OmapiProductMapper } from '@telenet/ng-lib-omapi';
import { Injectable } from '@angular/core';
import isArray from 'lodash-es/isArray';
import {
  RawMobileSubscription,
  RawMobileSubscriptionsInterface,
} from '../interfaces/raw/raw-mobile-subscriptions.interface';
import { MobileSubscriptionModel } from '../models/mobile-subscription.model';
import { ProductConstants } from '../constants/product/product.constant';
import { MobileConstants } from '../constants/mobile.constant';

@Injectable({
  providedIn: 'root',
})
export class MobileSubscriptionsMapper
  implements MapperInterface<RawMobileSubscriptionsInterface, MobileSubscriptionModel[]>
{
  constructor(private readonly omapiProductMapper: OmapiProductMapper) {}

  toModel(rawMobileSubscriptions: RawMobileSubscriptionsInterface): MobileSubscriptionModel[] {
    if (isArray(rawMobileSubscriptions)) {
      return this.createMobileLines([].concat(rawMobileSubscriptions));
    } else {
      return [];
    }
  }

  private createMobileLines(rawMobileSubscriptions: RawMobileSubscription[]): MobileSubscriptionModel[] {
    const mobileLines = [] as MobileSubscriptionModel[];
    rawMobileSubscriptions.forEach((rawMobileLine) => mobileLines.push(this.createMobileLine(rawMobileLine)));
    return mobileLines;
  }

  private createMobileLine(rawMobileLine: RawMobileSubscription): MobileSubscriptionModel {
    const mobileLine = {} as MobileSubscriptionModel;
    mobileLine.msisdn = rawMobileLine.msisdn;
    mobileLine.id = rawMobileLine.id;
    mobileLine.locationId = rawMobileLine.locationId;
    mobileLine.nextBillingDate = rawMobileLine.nextBillingDate;
    mobileLine.plan = this.omapiProductMapper.toModel(rawMobileLine.rawOmapi);
    mobileLine.isPrepaid = mobileLine.plan.hasCategory(ProductConstants.OMAPI_CATEGORY_PRE_PAID_MOBILE);
    mobileLine.status = rawMobileLine.status;
    mobileLine.activeSocialTariff = rawMobileLine.activeSocialTariff;
    mobileLine.isBase0Plan = mobileLine.plan.productId === MobileConstants.BASE_0_PLAN_IDENTIFIER;
    return mobileLine;
  }
}
