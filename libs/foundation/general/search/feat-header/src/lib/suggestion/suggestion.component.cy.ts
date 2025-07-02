/* eslint-disable sonarjs/no-duplicate-string */

import { defaultState, SearchFacadeService, SuggestionItem } from '@general/data-access-search';
import { SuggestionComponent } from './suggestion.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';

describe(SuggestionComponent.name, () => {
  it('renders', () => {
    cy.mount(SuggestionComponent, {
      imports: [HttpClientTestingModule, EffectsModule.forRoot([]), StoreModule.forRoot({})],
      providers: [
        SearchFacadeService,
        {
          provide: 'Window',
          useValue: window,
        },
        provideMockStore({ initialState: { searchFeature: defaultState } }),
      ],
    });
  });

  it('should have a suggestion item', () => {
    cy.mount(SuggestionComponent, {
      imports: [HttpClientTestingModule, EffectsModule.forRoot([]), StoreModule.forRoot({})],
      providers: [
        SearchFacadeService,
        {
          provide: 'Window',
          useValue: window,
        },
        provideMockStore({ initialState: { searchFeature: defaultState } }),
      ],
      componentProperties: {
        item: {
          text: 'text',
          highlight: 'highlight',
        } as SuggestionItem,
      },
    });

    cy.getElement('suggestion-item').should('exist');
    cy.getElement('suggestion-item').should('be.visible');
    cy.getElement('general-search-icon').should('exist');
    cy.getElement('general-search-icon').should('be.visible');
    cy.getElement('suggestion-text').should('exist');
    cy.getElement('suggestion-text').should('contain.text', 'highlight');
  });

  it('should select suggestion on focus', () => {
    cy.spy(SuggestionComponent.prototype, 'selectSuggestion').as('selectSuggestion');
    cy.mount(SuggestionComponent, {
      imports: [HttpClientTestingModule, EffectsModule.forRoot([]), StoreModule.forRoot({})],
      providers: [
        SearchFacadeService,
        {
          provide: 'Window',
          useValue: window,
        },
        provideMockStore({ initialState: { searchFeature: defaultState } }),
      ],
      componentProperties: {
        item: {
          text: 'text',
          highlight: 'highlight',
        } as SuggestionItem,
      },
    });

    cy.getElement('suggestion-item').focus();
    cy.get('@selectSuggestion').should('have.been.calledOnce');
  });

  it('should select suggestion on hover', () => {
    cy.spy(SuggestionComponent.prototype, 'selectSuggestion').as('selectSuggestion');
    cy.mount(SuggestionComponent, {
      imports: [HttpClientTestingModule, EffectsModule.forRoot([]), StoreModule.forRoot({})],
      providers: [
        SearchFacadeService,
        {
          provide: 'Window',
          useValue: window,
        },
        provideMockStore({ initialState: { searchFeature: defaultState } }),
      ],
      componentProperties: {
        item: {
          text: 'text',
          highlight: 'highlight',
        } as SuggestionItem,
      },
    });

    cy.getElement('suggestion-item').trigger('mouseover');
    cy.get('@selectSuggestion').should('have.been.calledOnce');
  });

  it('should go to result page on click', () => {
    cy.spy(SuggestionComponent.prototype, 'goToResultsPage').as('goToResultsPage');
    cy.mount(SuggestionComponent, {
      imports: [HttpClientTestingModule, EffectsModule.forRoot([]), StoreModule.forRoot({})],
      providers: [
        SearchFacadeService,
        {
          provide: 'Window',
          useValue: window,
        },
        provideMockStore({ initialState: { searchFeature: defaultState } }),
      ],
      componentProperties: {
        item: {
          text: 'text',
          highlight: 'highlight',
        } as SuggestionItem,
      },
    });

    cy.getElement('suggestion-item').click();
    cy.get('@goToResultsPage').should('have.been.calledOnce');
  });
});
