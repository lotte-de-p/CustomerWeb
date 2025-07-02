import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Municipality } from '../interfaces/municipality.interface';
import { AddressUnit } from '../interfaces/address-unit.interface';
import { AddressConstants, AddressTypeIdConstants } from '../constants/address.constants';
import { LanguageService, UrlService } from '@telenet/ng-lib-page';
import { ConfigConstants, ConfigService } from '@telenet/ng-lib-config';

@Injectable({ providedIn: 'root' })
export class AddressReverseProxyService {
  baseUrl: string;
  basePath = '/public/api/mytelenet-web-sales-checkout-rp';

  fields =
    'id,name,validationElements,orderItems,price,status,customerId,cartStatus,chars,discountItems,locationIds,eligibleForEasySwitch,warningElements,isAbandonable,rules';

  constructor(
    private readonly http: HttpClient,
    private readonly urlService: UrlService,
    private readonly configService: ConfigService,
    private readonly languageService: LanguageService
  ) {
    const ocapiUrl = this.configService.getConfig(ConfigConstants.OCAPI_URl);
    if (!ocapiUrl) {
      throw new Error('Ocapi not configured');
    }
    this.baseUrl = this.configService.getConfig(ConfigConstants.OCAPI_URl);
  }

  getMunicipalities(): Observable<Municipality[]> {
    const language = this.languageService.getLanguage() === 'en' ? 'nl' : this.languageService.getLanguage();
    const url = `${AddressConstants.LOCATION_URL_PREFIX}${language}`;
    return this.doGet<Municipality[]>(url).pipe();
  }

  getStreets(postalCode: string): Observable<string[]> {
    const url = AddressConstants.STREET_URL_PREFIX.concat(postalCode);
    return this.doGet<string[]>(url);
  }

  getMunicipalityAddressUnit(postalCodeQuery: string): Observable<AddressUnit[]> {
    const url = this.getUrl(
      `/v1/addressManagement/address?postalCode=${postalCodeQuery}&=parentAddressUnit.id=9145466696013668158`
    );
    return this.doGet(url);
  }

  getStreetAddressUnit(streetValue: string, postalCodeValue: string): Observable<AddressUnit | null> {
    return this.getMunicipalityAddressUnit(postalCodeValue).pipe(
      switchMap((municipalities) => {
        if (municipalities.length > 0) {
          let parentAddressUnitId = municipalities[0].id;
          if (postalCodeValue === '3000') {
            const leuvenAddressUnitId = municipalities.find((municipality) => municipality.name === 'Leuven')?.id;
            if (leuvenAddressUnitId) {
              parentAddressUnitId = leuvenAddressUnitId;
            }
          }
          const url = this.getUrl(
            `/v1/addressManagement/address?parentAddressUnit.id=${parentAddressUnitId}&name=${streetValue}&addressUnitTypeId=9148294798613629990`
          );
          return this.doGet<AddressUnit[]>(url);
        } else {
          return of([]);
        }
      }),
      map((addressUnits) => (addressUnits.length > 0 ? addressUnits[0] : null))
    );
  }

  getGeographicalAddresses(query: string, streetAddressUnitId: string): Observable<AddressUnit[]> {
    const url = this.getUrl(
      `/v1/addressManagement/address?addressUnitTypeId=${AddressTypeIdConstants.GEOGRAPHICAL_ADDRESS}&name.s=${query}&parentAddressUnit.id=${streetAddressUnitId}`
    );
    return this.doGet(url);
  }

  getAddressById(addressId: string): Observable<AddressUnit> {
    const path = `/v1/addressManagement/address/${addressId}`;
    return this.doGet<AddressUnit>(this.getUrl(path));
  }

  private getUrl(path: string) {
    return `${this.baseUrl}${this.basePath}${path}`;
  }

  doGet<T>(url: string): Observable<T> {
    this.createHttpHeaders();
    return this.http.get<T>(url, {
      headers: {
        'x-alt-referer': this.urlService.getCurrentUrl(),
        'X-Requested-With': 'XMLHttpRequest',
      },
      withCredentials: true,
    });
  }

  private createHttpHeaders(): HttpHeaders {
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set('x-alt-referer', this.urlService.getCurrentUrl());
    httpHeaders = httpHeaders.set('X-Requested-With', 'XMLHttpRequest');
    return httpHeaders;
  }
}
