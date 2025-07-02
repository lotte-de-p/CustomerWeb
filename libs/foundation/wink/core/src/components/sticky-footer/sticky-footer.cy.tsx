/// <reference types="cypress" />

describe('wink-sticky-footer', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=components-sticky-footer--default&viewMode=story');
  });

  it('should find the wink-sticky-footer element', () => {
    cy.get('wink-sticky-footer').should('exist');
  });
});
