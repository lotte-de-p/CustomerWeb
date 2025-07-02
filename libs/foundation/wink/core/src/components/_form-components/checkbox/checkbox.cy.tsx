/// <reference types="cypress" />

describe('wink-checkbox', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=form-components-checkbox--single-checkbox');
  });

  it('should find the wink-checkbox element', () => {
    cy.get('wink-checkbox').should('exist');
  });

  it('should style the wink-checkbox element correctly', () => {
    cy.get('wink-checkbox').find('input').should('have.css', 'height', '20px');
    cy.get('wink-checkbox').find('input').should('have.css', 'width', '20px');
    cy.get('wink-checkbox').find('input').should('have.css', 'border-width', '2px');
    cy.get('wink-checkbox').find('input').should('have.css', 'border-color', 'rgba(41, 29, 24, 0.64)');
  });

  it('should style the wink-checkbox element correctly when there is an error', () => {
    cy.get('wink-checkbox').invoke('attr', 'error', true);
    cy.get('wink-checkbox').find('input').should('have.css', 'border-color', 'rgb(222, 53, 11)');
  });

  it('should style the wink-checkbox element correctly when the checkbox is disabled', () => {
    cy.get('wink-checkbox').invoke('attr', 'disabled', true);
    cy.get('wink-checkbox').find('input').should('have.css', 'opacity', '0.4');
    cy.get('wink-checkbox').find('input').should('have.css', 'cursor', 'not-allowed');
    cy.get('wink-checkbox').invoke('attr', 'disabled', false);
  });

  it('should style the wink-checkbox element correctly when clicked', () => {
    cy.get('wink-checkbox').find('input').click({ force: true });
    cy.get('wink-checkbox').find('input').should('have.css', 'border-color', 'rgb(41, 29, 24)');
    cy.get('wink-checkbox').find('input').should('have.css', 'background-color', 'rgb(255, 196, 33)');
    cy.get('wink-checkbox').invoke('attr', 'disabled', false);
  });
  it('should have the correct attributes when checked', () => {
    cy.get('wink-checkbox').invoke('attr', 'checked', true);
    cy.get('wink-checkbox').should('have.attr', 'checked');
  });
});
