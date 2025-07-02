import { mount } from 'cypress/angular';

import { KeyboardNavigationService, SearchFacadeService } from '@general/data-access-search';
import { of } from 'rxjs';
import { SuggestionsComponent } from './suggestions.component';

const SELECTOR_SEARCH_SUGGESTIONS = '[data-testid="tgFoundationGeneralSearchSuggestions"]';

class MockSearchFacadeService {
  inPageSuggestions$ = of([]);
  setQueryForInPage = cy.stub();
  selectSuggestionInPage = cy.stub();
  getSearchResultsPageForInPage = cy.stub().callsFake((query) => of(`/search?q=${query}`));
  navigateToInPageResults = cy.stub();
}

class MockKeyboardNavigationService {
  setFocusedElement = cy.stub();
}

describe('SuggestionsComponent', () => {
  const suggestions = {
    locale: 'en-US',
    hits: [
      { text: 'First suggestion', highlight: '<strong>First</strong> suggestion' },
      { text: 'Second suggestion', highlight: 'Second suggestion' },
    ],
    asYouType: [],
  };

  let mockSearchFacadeService: MockSearchFacadeService;
  let mockKeyboardNavigationService: MockKeyboardNavigationService;

  const mountComponent = () => {
    mount(SuggestionsComponent, {
      providers: [
        { provide: SearchFacadeService, useValue: mockSearchFacadeService },
        { provide: KeyboardNavigationService, useValue: mockKeyboardNavigationService },
      ],
      componentProperties: {
        suggestions: suggestions,
        suggestionsFieldName: 'hits',
      },
    });
  };

  beforeEach(() => {
    mockSearchFacadeService = new MockSearchFacadeService();
    mockKeyboardNavigationService = new MockKeyboardNavigationService();
  });

  it('renders suggestions', () => {
    mountComponent();

    cy.get(SELECTOR_SEARCH_SUGGESTIONS).should('have.length', suggestions.hits.length);
    cy.get(SELECTOR_SEARCH_SUGGESTIONS).first().contains(suggestions.hits[0].text);
    cy.get(SELECTOR_SEARCH_SUGGESTIONS).last().contains(suggestions.hits[1].text);
  });

  it('handles suggestion click', () => {
    mountComponent();

    cy.get(SELECTOR_SEARCH_SUGGESTIONS).first().click();
    cy.wrap(mockSearchFacadeService.selectSuggestionInPage).should('have.been.calledOnce');
  });

  it('handles mouseenter event to set focus', () => {
    mountComponent();

    cy.get(SELECTOR_SEARCH_SUGGESTIONS).first().trigger('mouseenter');
    cy.wrap(mockKeyboardNavigationService.setFocusedElement).should('have.been.calledOnce');
  });
});
