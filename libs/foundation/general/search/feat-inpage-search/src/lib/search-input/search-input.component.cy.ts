import { mount } from 'cypress/angular';
import { SearchInputComponent } from './search-input.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AccessibilitySpanComponent, ButtonComponent } from '@general/ui-search';
import { SuggestionsComponent } from '../suggestions/suggestions.component';
import { SearchFacadeService } from '@general/data-access-search';
import { of } from 'rxjs';

const SELECTOR_BODY = 'body';
const SELECTOR_SEARCH_INPUT = '[data-testid="tgFoundationGeneralSearchSearchInput"]';
const SELECTOR_SEARCH_BACKSPACE = '[data-testid="tgFoundationGeneralSearchBackspace"]';
const SELECTOR_SEARCH_BUTTON = '[data-testid="tgFoundationGeneralSearchButton"]';

class MockSearchFacadeService {
  inPageSuggestions$ = of([]);
  setQueryForInPage = cy.stub();
  clearInPage = cy.stub();
  navigateToInPageResults = cy.stub();
}

describe('SearchInputComponent', () => {
  let mockSearchFacadeService: MockSearchFacadeService;

  const mountComponent = () => {
    mount(SearchInputComponent, {
      imports: [
        CommonModule,
        ReactiveFormsModule,
        TranslateModule.forRoot(),
        AccessibilitySpanComponent,
        ButtonComponent,
        SuggestionsComponent,
      ],
      providers: [{ provide: SearchFacadeService, useValue: mockSearchFacadeService }],
    });
  };

  beforeEach(() => {
    mockSearchFacadeService = new MockSearchFacadeService();
  });

  it('should mount and display the input field', () => {
    mountComponent();

    cy.get(SELECTOR_SEARCH_INPUT).should('exist');
  });

  it('should type in the input field and trigger value changes', () => {
    const mockInput = 'Example';

    mountComponent();

    cy.get(SELECTOR_SEARCH_INPUT).type(mockInput);
    cy.get(SELECTOR_SEARCH_INPUT).should('have.value', mockInput);
  });

  it('should clear the input field when the clear button is clicked', () => {
    const mockInput = 'Should clear on click';

    mountComponent();

    cy.get(SELECTOR_SEARCH_INPUT).type(mockInput);
    cy.get(SELECTOR_SEARCH_BACKSPACE).click();
    cy.get(SELECTOR_SEARCH_INPUT).should('be.empty');
  });

  it('should navigate to results on search button click', () => {
    const mockInput = 'Should navigate';

    mountComponent();

    cy.get(SELECTOR_SEARCH_INPUT).type(mockInput);
    cy.get(SELECTOR_SEARCH_BUTTON).click();
    cy.wrap(mockSearchFacadeService.navigateToInPageResults).should('have.been.calledWith', mockInput);
  });

  it('should clear input on Escape key press', () => {
    const mockInput = 'Should clear on escape';

    mountComponent();

    cy.get(SELECTOR_SEARCH_INPUT).type(mockInput);
    cy.get(SELECTOR_BODY).type('{esc}');
    cy.get(SELECTOR_SEARCH_INPUT).should('be.empty');
  });
});
