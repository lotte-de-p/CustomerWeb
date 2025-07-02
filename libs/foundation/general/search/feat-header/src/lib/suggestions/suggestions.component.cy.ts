/* eslint-disable sonarjs/no-duplicate-string */

import {
  ElasticSearchService,
  SearchApiServiceProvider,
  SuggestionItem,
  Suggestions,
} from '@general/data-access-search';
import { SuggestionsComponent } from './suggestions.component';
import { of } from 'rxjs';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { provideMockStore } from '@ngrx/store/testing';

describe(SuggestionsComponent.name, () => {
  it('renders', () => {
    cy.mount(SuggestionsComponent, {
      imports: [SuggestionsComponent],
    });
  });

  it('should have a suggestion item for hits', () => {
    cy.mount(SuggestionsComponent, {
      imports: [SuggestionsComponent],
      providers: [
        SearchApiServiceProvider,
        {
          provide: ElasticSearchService,
          useFactory: (http: HttpClient) => {
            return new ElasticSearchService(http, 'url');
          },
          deps: [HttpClient],
        },
        HttpClient,
        HttpHandler,
        provideMockStore({}),
        { provide: 'Window', useValue: window },
      ],
      componentProperties: {
        suggestions$: of({
          hits: [
            {
              text: 'text1',
              highlight: 'highlight1',
            } as SuggestionItem,
          ],
          asYouType: [
            {
              text: 'text2',
              highlight: 'highlight2',
            } as SuggestionItem,
          ],
          locale: '',
        } as Suggestions),
        suggestionsFieldName: 'hits',
      },
    });

    cy.getElement('suggestion-text').should('exist');
    cy.getElement('suggestion-text').should('contain.text', 'highlight1');
  });

  it('should have a suggestion item for asYouType', () => {
    cy.mount(SuggestionsComponent, {
      imports: [SuggestionsComponent],
      providers: [
        SearchApiServiceProvider,
        {
          provide: ElasticSearchService,
          useFactory: (http: HttpClient) => {
            return new ElasticSearchService(http, 'url');
          },
          deps: [HttpClient],
        },
        HttpClient,
        HttpHandler,
        provideMockStore({}),
        { provide: 'Window', useValue: window },
      ],
      componentProperties: {
        suggestions$: of({
          hits: [
            {
              text: 'text1',
              highlight: 'highlight1',
            } as SuggestionItem,
          ],
          asYouType: [
            {
              text: 'text2',
              highlight: 'highlight2',
            } as SuggestionItem,
          ],
          locale: '',
        } as Suggestions),
        suggestionsFieldName: 'asYouType',
      },
    });

    cy.getElement('suggestion-text').should('exist');
    cy.getElement('suggestion-text').should('contain.text', 'highlight2');
  });
});
