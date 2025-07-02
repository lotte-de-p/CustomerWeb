/// <reference types="cypress" />

describe('wink-validation-message', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=form-components-validation-message--default');
  });

  it('should find the validation message element', () => {
    cy.get('wink-validation-message').should('exist');
  });

  it('should find the validation message element of type error the correct color', () => {
    cy.get('wink-validation-message').find('wink-icon').should('have.css', 'color', 'rgb(222, 53, 11)');
    cy.get('wink-validation-message').invoke('attr', 'message', 'This is an error');
    cy.get('wink-validation-message').find('> div').should('have.css', 'color', 'rgb(222, 53, 11)');
  });
});
