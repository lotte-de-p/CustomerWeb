import { Injectable } from '@angular/core';
import { DetailsInterface, RawDetailsInterface, RawOmapiPremiumInterface } from '../interfaces';
import { MapperInterface } from '@telenet/ng-lib-shared';
import { OmapiPremium } from '../models';
import dayjs from 'dayjs';

@Injectable({
  providedIn: 'root',
})
export class OmapiPremiumMapper implements MapperInterface<RawOmapiPremiumInterface, OmapiPremium> {
  toModel(rawResponse: RawOmapiPremiumInterface): OmapiPremium {
    return this.createOmapiPremium(rawResponse);
  }

  private createOmapiPremium(rawResponse: RawOmapiPremiumInterface): OmapiPremium {
    const omapiPremium = new OmapiPremium();
    if (rawResponse.serviceDetails) {
      omapiPremium.premiumSerivceId = rawResponse.serviceDetails.premiumSerivceId || '';
      omapiPremium.details = rawResponse.serviceDetails.details.map((detail) => this.mapPremiumDetails(detail));
    }
    return omapiPremium;
  }

  private mapPremiumDetails(rawDetails: RawDetailsInterface): DetailsInterface {
    const details = {} as DetailsInterface;

    details.serviceType = rawDetails.serviceType;
    details.serviceStatus = rawDetails.serviceStatus;
    details.serviceDescription = rawDetails.serviceDescription;
    if (rawDetails.serviceConfirmedDate) {
      details.serviceConfirmedDate = this.convertDate(rawDetails.serviceConfirmedDate);
    }
    if (rawDetails.serviceEndDate) {
      details.serviceEndDate = this.convertDate(rawDetails.serviceEndDate);
    }
    details.premium = rawDetails.premium;
    details.fixOrMobile = rawDetails.fixOrMobile;
    if (rawDetails.priceStartDate) {
      details.priceStartDate = this.convertDate(rawDetails.priceStartDate);
    }
    if (rawDetails.priceEndDate) {
      details.priceEndDate = this.convertDate(rawDetails.priceEndDate);
    }
    details.sendSms = this.covertPrice(rawDetails.sendSms);
    details.receiveSms = this.covertPrice(rawDetails.receiveSms);
    details.sendMms = this.covertPrice(rawDetails.sendMms);
    details.receiveMms = this.covertPrice(rawDetails.receiveMms);
    details.callPerMinute = this.covertPrice(rawDetails.callPerMinute);
    details.callPerSecond = this.covertPrice(rawDetails.callPerSecond);
    details.setUpCost = rawDetails.setUpCost;
    if (rawDetails.contentProviderStartDate) {
      details.contentProviderStartDate = this.convertDate(rawDetails.contentProviderStartDate);
    }
    if (rawDetails.contentProviderEndDate) {
      details.contentProviderEndDate = this.convertDate(rawDetails.contentProviderEndDate);
    }
    details.contentProviderName = rawDetails.contentProviderName;
    details.contentProviderStreet = rawDetails.contentProviderStreet;
    details.contentProviderPostalCode = rawDetails.contentProviderPostalCode;
    details.contentProviderCity = rawDetails.contentProviderCity;
    details.contentProviderCountry = rawDetails.contentProviderCountry;
    details.customerCareTelephoneOrEmail = rawDetails.customerCareTelephoneOrEmail;
    details.customerCareUrl = rawDetails.customerCareUrl;

    return details;
  }

  covertPrice(rawPrice: string): string | undefined {
    if (rawPrice) {
      return rawPrice.split('/')[0];
    }
    return undefined;
  }

  convertDate(rawDate: string): string {
    return dayjs(rawDate, 'YYYYMMDD').format('DD/MM/YYYY');
  }
}
