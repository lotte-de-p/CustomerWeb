/// <reference types="cypress" />

describe('wink-column-count', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=utils-column-count--default&viewMode=story');
  });

  it('should find the wink-column-count element', () => {
    cy.get('wink-column-count').should('exist');
  });

  it('should find the wink-column-count element with the right class and css', () => {
    cy.get('wink-column-count').invoke('attr', 'cols-count', '3');

    cy.get('wink-column-count').find('div').should('have.class', 'cols-count-3');
    cy.get('wink-column-count').find('div').should('have.css', 'column-width', '270px');
  });
});
