/// <reference types="cypress" />

describe('wink-badge', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=components-badge--default&viewMode=story');
  });

  it('should find the wink-badge element', () => {
    cy.get('wink-badge').should('exist');
  });

  it('should find the wink-badge element have be default some styling', () => {
    cy.get('wink-badge').invoke('attr', 'background', 'light');
    cy.get('wink-badge').should('have.css', 'background-color', 'rgb(255, 255, 255)');
    cy.get('wink-badge').should('have.css', 'color', 'rgb(41, 29, 24)');
    cy.get('wink-badge').should('have.css', 'font-size', '16px');
    cy.get('wink-badge').should('have.css', 'line-height', '24px');
    cy.get('wink-badge').should('have.css', 'padding', '4px 8px');
  });
});
