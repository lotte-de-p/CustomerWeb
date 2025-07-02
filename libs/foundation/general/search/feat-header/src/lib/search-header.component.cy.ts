import { CommonModule } from '@angular/common';
import { SearchFacadeService } from '@general/data-access-search';

import { SearchInputComponent } from './search-input/search-input.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { TopResultsComponent } from './top-results/top-results.component';
import { SearchHeaderComponent } from './search-header.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

class MockSearchFacadeService {
  setInputParameters = cy.stub();
  postClick = cy.stub();
}

describe(SearchHeaderComponent.name, () => {
  let mockSearchFacadeService: MockSearchFacadeService;

  const mountComponent = () => {
    cy.mount(SearchHeaderComponent, {
      imports: [
        CommonModule,
        EffectsModule.forRoot([]),
        StoreModule.forRoot(),
        TranslateModule.forRoot(),
        HttpClientModule,
        SearchHeaderComponent,
        SearchInputComponent,
        SuggestionsComponent,
        TopResultsComponent,
      ],
      providers: [
        { provide: SearchFacadeService, useValue: mockSearchFacadeService },
        { provide: 'Window', useValue: window },
      ],
      componentProperties: {
        searchResultsCollection: JSON.stringify({ value: 'collectionValue' }),
        searchResultsPage: 'searchPage',
        detailsPagePath: '/details',
        suggestionsFieldName: 'suggestions',
        brand: 'brandName',
        language: 'en',
        includeHardwareResults: 'true',
      },
    });
  };

  beforeEach(() => {
    mockSearchFacadeService = new MockSearchFacadeService();
  });

  it('should render the search input component with correct inputs', () => {
    mountComponent();

    cy.get('tg-foundation-general-search-search-input')
      .should('have.attr', 'ng-reflect-details-page-path', '/details')
      .and('have.attr', 'ng-reflect-suggestions-field-name', 'suggestions')
      .and('have.attr', 'ng-reflect-include-hardware-results', 'true');
  });
});
