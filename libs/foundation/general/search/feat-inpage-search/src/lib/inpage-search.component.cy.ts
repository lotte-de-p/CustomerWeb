import { mount } from 'cypress/angular';
import { InpageSearchComponent } from './inpage-search.component';
import { SearchFacadeService, SearchNgrxModule } from '@general/data-access-search';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AccessibilitySpanComponent } from '@general/ui-search';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

const SELECTOR_SEARCH_INPAGE_SEARCH = '[data-testid="tgFoundationGeneralSearchInpageSearch"]';

class MockSearchFacadeService {
  inPageSuggestions$ = of([]);
  setQueryForInPage = cy.stub();
  initInPage = cy.stub();
  selectSuggestionInPage = cy.stub();
  getSearchResultsPageForInPage = cy.stub().callsFake((query) => of(`/search?q=${query}`));
  navigateToInPageResults = cy.stub();
  setInputParameters = cy.stub();
}

describe('InpageSearchComponent', () => {
  let mockSearchFacadeService: MockSearchFacadeService;

  const mountComponent = () => {
    mount(InpageSearchComponent, {
      imports: [
        CommonModule,
        SearchNgrxModule,
        AccessibilitySpanComponent,
        EffectsModule.forRoot([]),
        StoreModule.forRoot(),
        TranslateModule.forRoot(),
        HttpClientModule,
        SuggestionsComponent,
        SearchInputComponent,
      ],
      providers: [
        { provide: SearchFacadeService, useValue: mockSearchFacadeService },
        { provide: 'Window', useValue: window },
      ],
      componentProperties: {
        searchCollection: JSON.stringify({ value: 'test-collection' }),
        searchResultsPage: 'test-results-page',
        suggestionsFieldName: 'test-field-name',
        includeHardwareResults: 'true',
        brand: 'test-brand',
        language: 'en',
      },
    });
  };

  beforeEach(() => {
    mockSearchFacadeService = new MockSearchFacadeService();
  });

  it('should mount', () => {
    mountComponent();

    cy.get(SELECTOR_SEARCH_INPAGE_SEARCH).should('exist');
  });

  it('should call initInPage and setInputParameters on init', () => {
    mountComponent();

    cy.wrap(mockSearchFacadeService.initInPage).should('have.been.calledWith', 'test-collection', 'test-results-page');
  });
});
