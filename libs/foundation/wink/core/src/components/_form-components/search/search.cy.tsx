/// <reference types="cypress" />

describe('wink-search', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=form-components-search--default&viewMode=story');
  });

  it('should find the wink-search element', () => {
    cy.get('wink-search').should('exist');
  });

  it('should propagate the name prop to the wink-input child', () => {
    cy.get('wink-search').invoke('attr', 'name', 'Name');
    cy.get('wink-search').find('wink-input').find('input').should('have.attr', 'name', 'Name');
  });

  it('should propagate the inputId prop to the wink-input child', () => {
    cy.get('wink-search').invoke('attr', 'input-id', 'Name');
    cy.get('wink-search').find('wink-input').find('input').should('have.attr', 'id', 'Name');
  });

  it('should propagate the value prop to the wink-input child', () => {
    cy.get('wink-search').invoke('attr', 'value', 'Search');
    cy.get('wink-search').find('wink-input').should('have.attr', 'value', 'Search');
  });

  it('should propagate the enterkeyhintOption prop to the wink-input child', () => {
    cy.get('wink-search').invoke('attr', 'enterkeyhint-option', 'search');
    cy.get('wink-search').find('wink-input').find('input').should('have.attr', 'enterkeyhint', 'search');
  });

  it('should propagate the placeholder prop to the wink-input child', () => {
    cy.get('wink-search').invoke('attr', 'placeholder', 'placeholder');
    cy.get('wink-search').find('wink-input').find('input').should('have.attr', 'placeholder', 'placeholder');
  });
});
