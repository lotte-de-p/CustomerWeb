import { SearchInputComponent } from './search-input.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { mount } from 'cypress/angular';

const SELECTOR_SEARCH_BAR_EXPANDED = 'search-bar__input-expanded';
const SELECTOR_SEARCH_INPUT = '[data-testid="tgFoundationGeneralSearchSearchInput"]';
const SELECTOR_SEARCH_INPUT_CANCEL = '[data-testid="tgFoundationGeneralSearchSearchInputCancel"]';

describe(SearchInputComponent.name, () => {
  const mountComponent = () => {
    mount(SearchInputComponent, {
      imports: [
        TgTranslateTestingModule.forRoot(),
        EffectsModule.forRoot({}),
        StoreModule.forRoot({}),
        BrowserAnimationsModule,
        HttpClientTestingModule,
      ],
      providers: [{ provide: 'Window', useValue: window }],
    });
  };

  it('should expand search bar it is clicked', () => {
    mountComponent();

    cy.get(SELECTOR_SEARCH_INPUT).should('exist').should('not.have.class', SELECTOR_SEARCH_BAR_EXPANDED);
    cy.get(SELECTOR_SEARCH_INPUT).click();
    cy.get(SELECTOR_SEARCH_INPUT).should('exist').should('have.class', SELECTOR_SEARCH_BAR_EXPANDED);
  });

  it('should collapse search bar when it is cancelled', () => {
    mountComponent();

    cy.get(SELECTOR_SEARCH_INPUT).click();
    cy.get(SELECTOR_SEARCH_INPUT).type('betalen');
    cy.get(SELECTOR_SEARCH_INPUT_CANCEL).click();
    cy.get(SELECTOR_SEARCH_INPUT).should('exist').should('not.have.class', SELECTOR_SEARCH_BAR_EXPANDED);
    cy.get(SELECTOR_SEARCH_INPUT).should('have.value', '');
  });

  it('should collapse search bar when it is escaped', () => {
    mountComponent();

    cy.get(SELECTOR_SEARCH_INPUT).click();
    cy.get(SELECTOR_SEARCH_INPUT).type('betalen');
    cy.get('body').type('{esc}');
    cy.get(SELECTOR_SEARCH_INPUT).should('exist').should('not.have.class', SELECTOR_SEARCH_BAR_EXPANDED);
  });
});
