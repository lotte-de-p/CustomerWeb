/// <reference types="cypress" />

describe('paragraph', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=components-paragraph--default&viewMode=story');
  });

  it('should check that paragraph exist ', () => {
    cy.get('wink-paragraph').should('exist');
  });

  it('should check for caption regular ', () => {
    cy.get('wink-paragraph').invoke('attr', 'appearance', 'caption');
    cy.get('wink-paragraph').invoke('attr', 'size', 'regular');
    cy.get('wink-paragraph').should('have.class', 'font--caption-regular');
  });

  it('should check for caption bold ', () => {
    cy.get('wink-paragraph').invoke('attr', 'appearance', 'caption');
    cy.get('wink-paragraph').invoke('attr', 'size', 'bold');
    cy.get('wink-paragraph').should('have.class', 'font--caption-bold');
  });

  it('should check for caption small ', () => {
    cy.get('wink-paragraph').invoke('attr', 'appearance', 'caption');
    cy.get('wink-paragraph').invoke('attr', 'size', 'small');
    cy.get('wink-paragraph').should('have.class', 'font--caption-small');
  });

  it('should check for body regular ', () => {
    cy.get('wink-paragraph').invoke('attr', 'appearance', 'body');
    cy.get('wink-paragraph').invoke('attr', 'size', 'regular');
    cy.get('wink-paragraph').should('have.class', 'font--body-regular');
  });

  it('should check for body small ', () => {
    cy.get('wink-paragraph').invoke('attr', 'appearance', 'body');
    cy.get('wink-paragraph').invoke('attr', 'size', 'small');
    cy.get('wink-paragraph').should('have.class', 'font--body-small');
  });

  it('should check for body large ', () => {
    cy.get('wink-paragraph').invoke('attr', 'appearance', 'body');
    cy.get('wink-paragraph').invoke('attr', 'size', 'large');
    cy.get('wink-paragraph').should('have.class', 'font--body-large');
  });
});
