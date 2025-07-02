/// <reference types="cypress" />

describe('title', () => {
  beforeEach(() => {
    cy.visit("/iframe.html?id=patterns-title-text--default&viewMode=story'");
  });

  it('should change h1 tag', () => {
    cy.get('wink-title').invoke('attr', 'html-tag', 'h1');
    cy.get('wink-title').invoke('attr', 'text', 'This is a test for h1');
    cy.get('wink-title').find('h1').should('be.visible');
    cy.get('wink-title').find('h1').should('have.text', 'This is a test for h1');
  });

  it('should change h2 tag', () => {
    cy.get('wink-title').invoke('attr', 'html-tag', 'h2');
    cy.get('wink-title').invoke('attr', 'text', 'This is a test for h2');
    cy.get('wink-title').find('h2').should('be.visible');
    cy.get('wink-title').find('h2').should('have.text', 'This is a test for h2');
  });

  it('should change h3 tag', () => {
    cy.get('wink-title').invoke('attr', 'html-tag', 'h3');
    cy.get('wink-title').invoke('attr', 'text', 'This is a test for h3');
    cy.get('wink-title').find('h3').should('be.visible');
    cy.get('wink-title').find('h3').should('have.text', 'This is a test for h3');
  });

  it('should change h4 tag', () => {
    cy.get('wink-title').invoke('attr', 'html-tag', 'h4');
    cy.get('wink-title').invoke('attr', 'text', 'This is a test for h4');
    cy.get('wink-title').find('h4').should('be.visible');
    cy.get('wink-title').find('h4').should('have.text', 'This is a test for h4');
  });

  it('should change h5 tag', () => {
    cy.get('wink-title').invoke('attr', 'html-tag', 'h5');
    cy.get('wink-title').invoke('attr', 'text', 'This is a test for h5');
    cy.get('wink-title').find('h5').should('be.visible');
    cy.get('wink-title').find('h5').should('have.text', 'This is a test for h5');
  });

  it('should change h6 tag', () => {
    cy.get('wink-title').invoke('attr', 'html-tag', 'h6');
    cy.get('wink-title').invoke('attr', 'text', 'This is a test for h6');
    cy.get('wink-title').find('h6').should('be.visible');
    cy.get('wink-title').find('h6').should('have.text', 'This is a test for h6');
  });
});
