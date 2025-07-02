/// <reference types="cypress" />

describe('wink-flyout', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=components-global-header-flyout--default&viewMode=story');
  });

  it('should find the wink-flyout element', () => {
    cy.get('wink-flyout').should('exist');
    cy.get('wink-flyout').should('have.css', 'background-color', 'rgb(255, 255, 255)');
    cy.get('wink-flyout').should('have.css', 'opacity', '1');
    cy.get('wink-flyout').should('have.css', 'z-index', '1');
  });

  it('should find a hidden wink-flyout element', () => {
    cy.get('wink-flyout').invoke('removeAttr', 'open');

    cy.get('wink-flyout').should('exist').and('not.be.visible');
  });

  it('should find fixed 4 columns/slots inside wink-flyout element', () => {
    cy.get('wink-flyout').shadow().find('slot').should('have.length', 4);

    cy.get('wink-flyout').find('div[slot^="col-"]').should('have.length', 4);
  });
});
