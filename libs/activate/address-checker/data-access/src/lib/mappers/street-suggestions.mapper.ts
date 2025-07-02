import { MapperInterface } from '@telenet/ng-lib-shared';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StreetSuggestionsMapper implements MapperInterface<string[], string[]> {
  toModel(streetSuggestionsInterface: string[]): string[] {
    return this.createOmapiQueryStreetSuggestions(streetSuggestionsInterface);
  }

  private createOmapiQueryStreetSuggestions(streetSuggestionsInterface: string[]): string[] {
    return streetSuggestionsInterface;
  }
}
