import { Injectable } from '@angular/core';
import { RatesDataRaw, RateResponse } from '../entities/rates.data.mock';
import { Rate, RateDetailType, RatesOverview, RateType } from '../entities/rate.interface';
import { Observable } from 'rxjs';
import { Country } from '../entities/country-list.interface';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { PathCategorisationService } from '@telenet/ng-lib-page';
import { ConfigConstants, ConfigService } from '@telenet/ng-lib-config';

@Injectable({
  providedIn: 'root',
})
export class RatesService {
  constructor(
    private readonly http: HttpClient,
    private readonly pathCategorisationService: PathCategorisationService,
    private readonly configService: ConfigService
  ) {}

  getRoamingRates(from: Country, customerType: string, toCountry?: Country): Observable<RatesDataRaw[]> {
    const destinationCountry = toCountry ? toCountry.roamingZone : 'Belgium';
    const baseUrl = this.configService.getConfig(ConfigConstants.OMAPI_QUERY_URL) + `/rir/v1`;

    const endpoint = from.iso === 'BE' ? 'international' : 'roaming';
    const url = [baseUrl, 'rates/' + endpoint].join('/');

    let params = new HttpParams()
      .set('brand', this.pathCategorisationService.getCustomerBrand())
      .set('category', customerType)
      .set('toZone', destinationCountry);

    if (from.iso !== 'BE') {
      params = new HttpParams()
        .set('brand', this.pathCategorisationService.getCustomerBrand())
        .set('category', customerType)
        .set('toZone', destinationCountry)
        .set('fromZone', from.roamingZone);
    }

    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http.get<RateResponse>(url, { params, headers }).pipe(map((response: RateResponse) => response.rates));
  }

  getRoamingRatesForSameCountry(from: Country, customerType: string): Observable<RatesDataRaw[]> {
    const baseUrl = this.configService.getConfig(ConfigConstants.OMAPI_QUERY_URL) + `/rir/v1`;

    const endpoint = 'roaming';
    const url = [baseUrl, 'rates/' + endpoint].join('/');

    const params = new HttpParams()
      .set('brand', this.pathCategorisationService.getCustomerBrand())
      .set('category', customerType)
      .set('toZone', from.roamingZone)
      .set('fromZone', from.roamingZone);

    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http.get<RateResponse>(url, { params, headers }).pipe(map((response: RateResponse) => response.rates));
  }

  convertToOverview(
    country: Country,
    toBelgium: boolean,
    raw: RatesDataRaw,
    isAnotherCountry?: boolean
  ): RatesOverview {
    return {
      country: country,
      toBelgium: toBelgium,
      rates: this.convertToRates(raw, toBelgium, isAnotherCountry),
      options: raw.options,
    };
  }

  private convertToRates(raw: RatesDataRaw, toBelgium: boolean, isAnotherCountry?: boolean): Rate[] {
    const voice = this.convertToVoiceRates(raw, toBelgium, isAnotherCountry);
    const sms = this.convertToSmsRates(raw);
    const mms = this.convertToMmsRates(raw);
    const rates = [voice, sms, mms];
    const data = this.convertToDataRates(raw, toBelgium, isAnotherCountry);
    if (data) {
      rates.push(data);
    }
    return rates;
  }

  private convertToDataRates(raw: RatesDataRaw, toBelgium: boolean, isAnotherCountry?: boolean) {
    if (!toBelgium && !isAnotherCountry && raw.data !== undefined) {
      const data: Rate = {
        type: RateType.DATA,
        details: [
          {
            type: RateDetailType.VOLUME,
            amount: raw.data,
          },
        ],
      };
      return data;
    }
    return undefined;
  }

  private convertToMmsRates(raw: RatesDataRaw) {
    const mms: Rate = {
      type: RateType.MMS,
      details: [
        {
          type: RateDetailType.OUTGOING,
          amount: raw.mms.outgoing,
        },
        {
          type: RateDetailType.INCOMING,
          amount: raw.mms.received,
        },
      ],
    };
    return mms;
  }

  private convertToSmsRates(raw: RatesDataRaw) {
    const sms: Rate = {
      type: RateType.SMS,
      details: [
        {
          type: RateDetailType.OUTGOING,
          amount: raw.sms.outgoing,
        },
        {
          type: RateDetailType.INCOMING,
          amount: raw.sms.received,
        },
      ],
    };
    return sms;
  }

  private convertToVoiceRates(raw: RatesDataRaw, toBelgium: boolean, isAnotherCountry?: boolean) {
    const voice: Rate = {
      type: RateType.CALL,
      details: [
        {
          type: RateDetailType.OUTGOING,
          amount:
            raw.voice.same_country && !toBelgium && !isAnotherCountry ? raw.voice.same_country : raw.voice.outgoing,
        },
        {
          type: RateDetailType.INCOMING,
          amount: raw.voice.received,
        },
      ],
    };
    return voice;
  }
}
