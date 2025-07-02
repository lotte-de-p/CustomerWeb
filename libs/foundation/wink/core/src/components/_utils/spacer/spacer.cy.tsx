/// <reference types="cypress" />

describe('wink-spacer', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=utils-spacer--default&viewMode=story');
  });

  it('should find the wink-spacer element', () => {
    cy.get('wink-spacer').should('exist');
  });

  it('should find the wink-spacer element with the right class and css', () => {
    cy.get('wink-spacer').invoke('attr', 'size', 'lg');

    cy.get('wink-spacer').find('div').should('have.class', 'height-lg');
    cy.get('wink-spacer').find('div').should('have.css', 'height', '24px');
  });
});
