/// <reference types="cypress" />

describe('wink-progress-bar', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=form-components-progress-bar--default&viewMode=story');
  });

  it('should find the wink-progress-bar element', () => {
    cy.get('wink-progress-bar').should('exist');
  });
});
