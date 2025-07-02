import { HeaderIconComponent } from './header-icon.component';

describe('HeaderIconComponent', () => {
  it('should mount', () => {
    cy.mount(HeaderIconComponent);
  });

  it('shoulder have a icon', () => {
    cy.mount(HeaderIconComponent, {
      componentProperties: {
        type: 'search',
        mobile: false,
      },
    });

    cy.getElement('general-search-icon').should('exist');
  });

  it('shoulder display search span', () => {
    cy.mount(HeaderIconComponent, {
      componentProperties: {
        type: 'search',
        mobile: false,
      },
    });

    cy.getElement('accessibility-span-search').should('exist');
    cy.getElement('accessibility-span-search').should('be.visible');
  });

  it('shoulder display clear span', () => {
    cy.mount(HeaderIconComponent, {
      componentProperties: {
        type: 'backspace',
        mobile: false,
      },
    });

    cy.getElement('accessibility-span-clear').should('exist');
    cy.getElement('accessibility-span-clear').should('be.visible');
  });

  it('shoulder display search span', () => {
    cy.mount(HeaderIconComponent, {
      componentProperties: {
        type: 'close',
        mobile: false,
      },
    });

    cy.getElement('accessibility-span-close-cancel').should('exist');
    cy.getElement('accessibility-span-close-cancel').should('be.visible');
  });
});
