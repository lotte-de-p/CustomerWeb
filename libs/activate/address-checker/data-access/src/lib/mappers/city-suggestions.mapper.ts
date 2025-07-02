import { MapperInterface } from '@telenet/ng-lib-shared';
import { RawCitySuggestions } from '../interfaces/raw-city-suggestions.interface';
import { CitySuggestions } from '../interfaces/city-suggestions.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CitySuggestionsMapper implements MapperInterface<RawCitySuggestions[], CitySuggestions[]> {
  toModel(rawCitySuggestionsInterface: RawCitySuggestions[]): CitySuggestions[] {
    return this.createOmapiQueryAddresses(rawCitySuggestionsInterface);
  }

  private createOmapiQueryAddresses(rawCitySuggestionsInterface: RawCitySuggestions[]): CitySuggestions[] {
    return rawCitySuggestionsInterface.map((rawCitySuggestionsInterface) =>
      this.createOmapiQueryAddress(rawCitySuggestionsInterface)
    );
  }

  private createOmapiQueryAddress(rawCitySuggestionsInterface: RawCitySuggestions): CitySuggestions {
    const citySuggestionsData = new CitySuggestions();

    citySuggestionsData.geoId = rawCitySuggestionsInterface.geoId;
    citySuggestionsData.zipCode = rawCitySuggestionsInterface.zipCode;
    citySuggestionsData.subMunicipality = rawCitySuggestionsInterface.subMunicipality;

    return citySuggestionsData;
  }
}
