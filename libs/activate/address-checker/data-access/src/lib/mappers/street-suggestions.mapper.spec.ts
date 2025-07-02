import { TestBed } from '@angular/core/testing';
import { StreetSuggestionsMapper } from './street-suggestions.mapper';

const mockStreetSuggestionsResponse = require('../../data/street-suggestions.json');

const mockStreetSuggestions = mockStreetSuggestionsResponse as string[];

describe('street-suggestions-mapper', () => {
  let streetSuggestionsMapper: StreetSuggestionsMapper, streetSuggestions: string[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StreetSuggestionsMapper, { provide: 'Window', useValue: {} }],
    });
    streetSuggestionsMapper = TestBed.inject(StreetSuggestionsMapper);
    streetSuggestions = streetSuggestionsMapper.toModel(mockStreetSuggestions);
  });

  describe('toModel', () => {
    it('should  map the street suggestions', () => {
      expect(streetSuggestions[0]).toEqual('Koekoekstraat');
      expect(streetSuggestions[1]).toEqual('Brusselsepoortstraat');
    });
  });
});
