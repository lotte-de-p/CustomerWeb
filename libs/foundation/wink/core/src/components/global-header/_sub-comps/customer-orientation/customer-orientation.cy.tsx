/// <reference types="cypress" />

describe('wink-customer-orientation', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=components-global-header-customer-orientation--default&viewMode=story');
  });

  it('should find the wink-customer-orientation element', () => {
    cy.get('wink-customer-orientation').should('exist');
  });

  it('should contain 2 wink-dropdown-menu elements', () => {
    cy.get('wink-customer-orientation').shadow().find('wink-dropdown-menu').should('have.length', 2);
  });

  it('should contain 2 wink-dropdown-menu elements with specified attributes and children', () => {
    cy.get('wink-customer-orientation')
      .shadow()
      .find('wink-dropdown-menu')
      .should('have.length', 2)
      .each((dropdown) => {
        cy.wrap(dropdown).find('wink-link').should('have.attr', 'appearance', 'dropdown-menu-link');
      });
  });
});
describe('check customer orientation in global header in tablet', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=components-global-header--full&viewMode=story');
    cy.viewport(1024, 800);
  });
  it('should show or hide slot customer orientation if provided or not', () => {
    cy.get('wink-global-header').find('[slot="customer-orientation"]').should('exist').and('be.visible');
  });
});
