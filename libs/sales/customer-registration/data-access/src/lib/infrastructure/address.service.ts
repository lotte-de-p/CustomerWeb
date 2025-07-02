import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorMessage, MessageService } from '@telenet/ng-lib-message';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { CacheService, LanguageEnum, LanguageService } from '@telenet/ng-lib-page';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddressRequestInterface } from '../entities/interfaces/address-request.interface';
import { Municipality } from '../entities/interfaces/municipality.interface';
import { Address } from '../entities/models/address.model';
import { AddressMapper } from '../util/address.mapper';
import { AddressConstants } from './address.constant';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  selectedAddress: Address[] = [];

  constructor(
    private readonly ocapiService: OcapiService,
    private readonly addressMapper: AddressMapper,
    private readonly httpClient: HttpClient,
    private readonly languageService: LanguageService,
    private readonly cacheService: CacheService,
    private readonly messageService: MessageService
  ) {}

  getMunicipalities(): Observable<Municipality[]> {
    const url = AddressConstants.LOCATION_URL_PREFIX.concat(this.getLanguage());
    return this.httpClient.get<Municipality[]>(url);
  }

  getStreets(postalCode: string): Observable<string[]> {
    const url = AddressConstants.STREET_URL_PREFIX.concat(postalCode);
    return this.httpClient.get<string[]>(url);
  }

  getAddressByData(messageGroup: string, data: AddressRequestInterface): Observable<Address[]> {
    const endpoint = this.getEndPoint(data);
    const ocapiCallConfig = new OcapiCallConfig(
      messageGroup,
      endpoint,
      this.addressMapper,
      undefined,
      data.customHeaders
    );
    ocapiCallConfig.errorHandler = this.handleErrorForAddressByData.bind(this);
    return this.ocapiService.doGet(ocapiCallConfig).pipe(
      map((addresses: Address[]) => {
        this.selectedAddress = addresses;
        return addresses;
      })
    );
  }

  getAddressById(messageGroup: string, addressId: string): Observable<Address[]> {
    let endpoint = `/addresses/${addressId}`;
    endpoint = this.getServiceURI(endpoint);
    if (!this.cacheService.get(endpoint)) {
      this.cacheService.add(
        endpoint,
        this.ocapiService
          .doGet(new OcapiCallConfig(messageGroup, endpoint, this.addressMapper))
          .pipe(map((addresses: Address[]) => addresses))
      );
    }
    return this.cacheService.get(endpoint);
  }

  private handleErrorForAddressByData<T, G>(error: HttpErrorResponse, ocapiCall: OcapiCallConfig<T, G>) {
    const errorCode = 'ocapi.'.concat(error.status.toString());
    switch (error.status) {
      case 401:
        break;
      case 400: {
        const errorMessage =
          error?.error?.code === AddressConstants.OCAPI_ERROR_ADDRESS_NOT_FOUND
            ? `${ocapiCall.messageGroupName}.${AddressConstants.OCAPI_ERROR_ADDRESS_NOT_FOUND}`
            : errorCode;
        this.messageService.addMessage(new ErrorMessage(ocapiCall.messageGroupName, errorMessage));
        break;
      }
      case 500:
        this.messageService.addMessage(new ErrorMessage(ocapiCall.messageGroupName, errorCode));
        break;
      default:
        break;
    }
    return throwError(() => 'An error occured while trying to fetch ' + ocapiCall.messageGroupName + ' | ' + errorCode);
  }

  private getEndPoint(data: AddressRequestInterface): string {
    let endpoint: string = '/addresses'
      .concat(`?postalCode=${data.postalCode}`)
      .concat(`&municipality=${data.municipality}`)
      .concat(`&street=${data.street}`)
      .concat(`&houseNumber=${data.houseNumber}`);
    if (data.subHouseNumber) {
      endpoint = endpoint.concat(`&subHouseNumber=${data.subHouseNumber}`);
    }
    if (data.boxNumber) {
      endpoint = endpoint.concat(`&boxNumber=${data.boxNumber}`);
    }
    if (data.exactAddressSearch) {
      endpoint = endpoint.concat('&exactAddressSearch=true');
    }
    if (data.fields) {
      endpoint = endpoint.concat(`&fields=${data.fields}`);
    }
    return this.getServiceURI(endpoint);
  }

  private getLanguage() {
    let language = this.languageService.getLanguage();
    if (language === LanguageEnum.EN) {
      language = LanguageEnum.NL;
    }
    return language;
  }

  private getServiceURI(endpoint: string) {
    return AddressConstants.CONTACT_SERVICE_PREFIX.concat(AddressConstants.API_VERSION_V1)
      .concat(AddressConstants.CONTEXT_CONTACT)
      .concat(endpoint);
  }
}
