/// <reference types="cypress" />

describe('wink-select', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=form-components-select--default&viewMode=story');
  });

  it('should find the wink-select element', () => {
    cy.get('wink-select').should('exist');
  });

  it('should render the wink-select with the correct styling', () => {
    cy.get('wink-select').find('select').should('have.css', 'width', '1900px');
    cy.get('wink-select').find('select').should('have.css', 'border', '2px solid rgb(168, 165, 163)');
    cy.get('wink-select').find('select').should('have.css', 'color', 'rgb(101, 92, 88)');
  });

  it('should change color when a value is selected', () => {
    cy.get('wink-select')
      .find('select')
      .should('have.css', 'color', 'rgb(101, 92, 88)')
      .should('have.class', 'placeholder');

    cy.get('wink-select')
      .find('select')
      .select('iphone-15')
      .should('have.css', 'color', 'rgb(41, 29, 24)')
      .should('not.have.class', 'placeholder');
  });
});
