import { CommonModule } from '@angular/common';
import { SearchFacadeService } from '@general/data-access-search';
import { TopResultsComponent } from './top-results.component';
import { of } from 'rxjs';
import { TopResultComponent } from '../top-result/top-result.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

const mockSearchResults = {
  hits: [
    { id: 1, name: 'Result 1', tags: [] },
    { id: 2, name: 'Result 2', tags: [] },
    { id: 3, name: 'Result 3', tags: [] },
  ],
};

class MockSearchFacadeService {
  topResults$ = of(mockSearchResults);
}

describe(TopResultsComponent.name, () => {
  let mockSearchFacadeService: MockSearchFacadeService;

  const mountComponent = () => {
    cy.mount(TopResultsComponent, {
      imports: [
        CommonModule,
        TopResultComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [{ provide: SearchFacadeService, useValue: mockSearchFacadeService }],
      componentProperties: {
        detailsPagePath: '/details',
      },
    });
  };

  beforeEach(() => {
    mockSearchFacadeService = new MockSearchFacadeService();
  });

  it('should render the correct number of top results', () => {
    mountComponent();

    cy.get('.header-search--autosuggest-results-items').should('have.length', mockSearchResults.hits.length);
  });
});
