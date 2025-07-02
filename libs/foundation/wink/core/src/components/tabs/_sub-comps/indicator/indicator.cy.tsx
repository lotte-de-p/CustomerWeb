/// <reference types="cypress" />

describe('wink-indicator', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=utils-indicator--default&viewMode=story');
  });

  it('should find the wink-indicator element', () => {
    cy.get('wink-indicator').should('exist');
  });

  it('should assign direction prop and show the correct icon', () => {
    cy.get('wink-indicator').find('wink-icon').should('have.attr', 'exportparts', 'icon, icon-chevron-right-small');
    cy.get('wink-indicator').invoke('attr', 'direction', 'left');
    cy.get('wink-indicator').find('wink-icon').should('have.attr', 'exportparts', 'icon, icon-chevron-left-small');
    cy.get('wink-indicator').invoke('attr', 'direction', 'up');
    cy.get('wink-indicator').find('wink-icon').should('have.attr', 'exportparts', 'icon, icon-chevron-up-small');
    cy.get('wink-indicator').invoke('attr', 'direction', 'down');
    cy.get('wink-indicator').find('wink-icon').should('have.attr', 'exportparts', 'icon, icon-chevron-down-small');
  });
});
