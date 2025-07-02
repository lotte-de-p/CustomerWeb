import { TestBed } from '@angular/core/testing';
import { NumberSuggestionsMapper } from './number-suggestions.mapper';
import { NumberSuggestions } from '../interfaces/number.suggestions.interface';
import { RawNumberSuggestions } from '../interfaces/raw-number.suggestions.interface';

const mockNumberSuggestionsResponse = require('../../data/number-suggestions.json');

const mockNumberSuggestions = mockNumberSuggestionsResponse as RawNumberSuggestions[];

describe('number-suggestions-mapper', () => {
  let numberSuggestionsMapper: NumberSuggestionsMapper, numberSuggestions: NumberSuggestions[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NumberSuggestionsMapper, { provide: 'Window', useValue: {} }],
    });
    numberSuggestionsMapper = TestBed.inject(NumberSuggestionsMapper);
    numberSuggestions = numberSuggestionsMapper.toModel(mockNumberSuggestions);
  });

  describe('toModel', () => {
    it('should  map the number suggestions', () => {
      expect(numberSuggestions[1].geoId).toEqual('47bda15e-839f-6b81-e054-00144f80cbe2');
      expect(numberSuggestions[1].houseNumber).toEqual(50);
      expect(numberSuggestions[1].unit).toEqual(1);
    });
  });
});
