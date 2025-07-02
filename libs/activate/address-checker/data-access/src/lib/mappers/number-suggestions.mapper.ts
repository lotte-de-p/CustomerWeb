import { MapperInterface } from '@telenet/ng-lib-shared';
import { NumberSuggestions } from '../interfaces/number.suggestions.interface';
import { RawNumberSuggestions } from '../interfaces/raw-number.suggestions.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NumberSuggestionsMapper implements MapperInterface<RawNumberSuggestions[], NumberSuggestions[]> {
  toModel(rawNumberSuggestionsInterface: RawNumberSuggestions[]): NumberSuggestions[] {
    return this.createOmapiQueryStreetSuggestions(rawNumberSuggestionsInterface);
  }

  private createOmapiQueryStreetSuggestions(
    rawNumberSuggestionsInterface: RawNumberSuggestions[]
  ): NumberSuggestions[] {
    return rawNumberSuggestionsInterface.map((rawNumberSuggestionsInterface) =>
      this.createOmapiQueryStreetSuggestion(rawNumberSuggestionsInterface)
    );
  }

  private createOmapiQueryStreetSuggestion(rawNumberSuggestionsInterface: RawNumberSuggestions): NumberSuggestions {
    const numberSuggestionData = new NumberSuggestions();

    numberSuggestionData.geoId = rawNumberSuggestionsInterface.geoId;
    numberSuggestionData.houseNumber = rawNumberSuggestionsInterface.houseNumber;
    numberSuggestionData.unit = rawNumberSuggestionsInterface.unit;

    return numberSuggestionData;
  }
}
