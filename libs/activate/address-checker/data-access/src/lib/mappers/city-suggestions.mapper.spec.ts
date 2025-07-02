import { TestBed } from '@angular/core/testing';
import { CitySuggestionsMapper } from './city-suggestions.mapper';
import { CitySuggestions } from '../interfaces/city-suggestions.interface';
import { RawCitySuggestions } from '../interfaces/raw-city-suggestions.interface';

const mockCitySuggestionsResponse = require('../../data/city-suggestions.json');

const mockCitySuggestions = mockCitySuggestionsResponse as RawCitySuggestions[];

describe('city-suggestions-mapper', () => {
  let citySuggestionsMapper: CitySuggestionsMapper, citySuggestion: CitySuggestions[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CitySuggestionsMapper, { provide: 'Window', useValue: {} }],
    });
    citySuggestionsMapper = TestBed.inject(CitySuggestionsMapper);
  });

  describe('toModel', () => {
    it('should  map the city suggestions', () => {
      citySuggestion = citySuggestionsMapper.toModel(mockCitySuggestions);
      expect(citySuggestion[0].geoId).toEqual('47bda15e-839f-6b81-e054-00144f80cbe2');
      expect(citySuggestion[0].subMunicipality).toEqual('Muizen');
      expect(citySuggestion[0].zipCode).toEqual('2812');
    });
  });
});
