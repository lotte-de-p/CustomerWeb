/* eslint-disable sonarjs/no-duplicate-string */
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { SearchedForComponent } from './searched-for.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { provideMockStore } from '@ngrx/store/testing';
import { defaultState } from '@general/data-access-search';

describe(SearchedForComponent.name, () => {
  it('renders', () => {
    mountWithProperties({
      query: 'test',
      numberOfSearchResults: 10,
      loading: false,
      didYouMean: [],
    });
  });

  it('should correctly show the results for a query and the amount', () => {
    mountWithProperties({
      query: 'test',
      numberOfSearchResults: 10,
      loading: false,
      didYouMean: [],
    });

    cy.getElement('search-result').contains('test (10)');
  });

  it('should show a different label for an empty query', () => {
    mountWithProperties({
      query: '',
      numberOfSearchResults: 10,
      loading: false,
      didYouMean: [],
    });

    cy.getElement('search-result').contains('ng.search-results-page.lbl.allresults (10)');
  });

  it('should show the didYouMean component if there are didYouMean items', () => {
    mountWithProperties({
      query: '',
      numberOfSearchResults: 10,
      loading: false,
      didYouMean: ['test'],
    });

    cy.getElement('didyoumean').contains('test');
  });

  it('should not show when loading is true', () => {
    mountWithProperties({
      query: '',
      numberOfSearchResults: 10,
      loading: true,
      didYouMean: [],
    });

    cy.getElement('search-result').should('not.exist');
  });
});

function mountWithProperties(props: ComponentProperties) {
  cy.mount(SearchedForComponent, {
    imports: [TgTranslateTestingModule.forRoot(), SearchedForComponent],
    providers: [
      HttpClient,
      HttpHandler,
      provideMockStore({ initialState: { searchFeature: defaultState } }),
      { provide: 'Window', useValue: window },
    ],
    componentProperties: props,
  });
}

interface ComponentProperties {
  query: string;
  numberOfSearchResults: number;
  loading: boolean;
  didYouMean: string[];
}
