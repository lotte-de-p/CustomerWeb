import { TestBed } from '@angular/core/testing';
import { HeaderButtonComponent } from './header-button.component';

describe(HeaderButtonComponent.name, () => {
  beforeEach(() => {
    TestBed.overrideComponent(HeaderButtonComponent, {
      add: {
        imports: [],
        providers: [],
      },
    });
  });

  it('renders', () => {
    cy.mount(HeaderButtonComponent, {
      componentProperties: {
        expanded: false,
        hideMobile: false,
      },
    });
  });

  it('shoulder have a button', () => {
    cy.mount(HeaderButtonComponent, {
      componentProperties: {
        expanded: false,
        hideMobile: false,
      },
    });

    cy.getElement('general-search-button').should('exist');
    cy.getElement('general-search-button').should('be.visible');
  });

  it('shoulder have an icon', () => {
    cy.mount(HeaderButtonComponent, {
      componentProperties: {
        expanded: false,
        hideMobile: false,
        type: 'backspace',
      },
    });

    cy.getElement('general-search-header-icon').should('exist');
    cy.getElement('general-search-header-icon').should('be.visible');
  });
});
