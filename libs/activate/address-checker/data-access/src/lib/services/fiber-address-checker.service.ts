import { Injectable } from '@angular/core';
import { CitySuggestions } from '../interfaces/city-suggestions.interface';
import { Observable } from 'rxjs';
import { FiberAddressCheckerEnum } from '../models/fiber-address-checker.enum';
import { CitySuggestionsMapper } from '../mappers/city-suggestions.mapper';
import { OmapiQueryCallConfig, OmapiQueryService } from '@telenet/ng-lib-omapi-query';
import { StreetSuggestionsMapper } from '../mappers/street-suggestions.mapper';
import { NumberSuggestions } from '../interfaces/number.suggestions.interface';
import { NumberSuggestionsMapper } from '../mappers/number-suggestions.mapper';
import { FiberStatusEnum } from '../models/fiber-status.enum';
import { FiberStatusMapper } from '../mappers/fiber-status.mapper';
import { CustomerAddressInterface } from '../interfaces/customer-address.interface';
import { AddressGeoIdMapper } from '../mappers/address-geo-id.mapper';

@Injectable({
  providedIn: 'root',
})
export class FiberAddressCheckerService {
  constructor(
    private readonly omapiQueryService: OmapiQueryService,
    private readonly fiberStatusMapper: FiberStatusMapper,
    private readonly addressGeoIdMapper: AddressGeoIdMapper,
    private readonly citySuggestionsMapper: CitySuggestionsMapper,
    private readonly streetSuggestionsMapper: StreetSuggestionsMapper,
    private readonly numberSuggestionsMapper: NumberSuggestionsMapper
  ) {}

  private createServiceURI(endpoint: string, parameters = ''): string {
    return endpoint.concat(parameters);
  }

  getSuggestionsForZipcodeOrCity(zipcodeOrCity: string, messageGroup: string): Observable<CitySuggestions[]> {
    const parameters = `?searchTerm=${zipcodeOrCity}`;

    const endpoint: string = this.createServiceURI(FiberAddressCheckerEnum.ZIPCODE_CITY_ENDPOINT, parameters);

    return this.omapiQueryService.doGet(new OmapiQueryCallConfig(messageGroup, endpoint, this.citySuggestionsMapper));
  }

  getSuggestionsForStreet(messageGroup: string, street: string, geoId?: string): Observable<string[]> {
    const parameters = `?municipalityGeoId=${geoId}&searchTerm=${street}`;

    const endpoint: string = this.createServiceURI(FiberAddressCheckerEnum.STREET_CITY_ENDPOINT, parameters);

    return this.omapiQueryService.doGet(new OmapiQueryCallConfig(messageGroup, endpoint, this.streetSuggestionsMapper));
  }

  getSuggestionsForNumber(
    messageGroup: string,
    houseNumber: string,
    street?: string,
    geoId?: string
  ): Observable<NumberSuggestions[]> {
    const parameters = `?municipalityGeoId=${geoId}&streetName=${street}&searchTerm=${houseNumber}`;

    const endpoint: string = this.createServiceURI(FiberAddressCheckerEnum.NUMBER_CITY_ENDPOINT, parameters);

    return this.omapiQueryService.doGet(new OmapiQueryCallConfig(messageGroup, endpoint, this.numberSuggestionsMapper));
  }

  getFiberStatusForAddress(messageGroup: string, addressGeoId: string): Observable<FiberStatusEnum> {
    const parameters = `?geoId=${addressGeoId}`;
    const endpoint: string = FiberAddressCheckerEnum.FIBER_ELIGIBILITY_ENDPOINT.concat(parameters);
    const omapiQueryCallConfig = new OmapiQueryCallConfig(messageGroup, endpoint, this.fiberStatusMapper);

    omapiQueryCallConfig.errorHandler = (error) => {
      throw error?.error?.errorCode;
    };

    return this.omapiQueryService.doGet(omapiQueryCallConfig);
  }

  getAddressGeoId(messageGroup: string, customerAddress: CustomerAddressInterface): Observable<string> {
    const parameters = `?zipCode=${customerAddress.postalCode}&streetName=${customerAddress.street}&houseNumber=${
      customerAddress.houseNumber
    }${customerAddress.subHouseNumber ?? ''}`;

    const endpoint: string = FiberAddressCheckerEnum.ADDRESS_GEO_ID_ENDPOINT.concat(parameters);
    return this.omapiQueryService.doGet(new OmapiQueryCallConfig(messageGroup, endpoint, this.addressGeoIdMapper));
  }
}
