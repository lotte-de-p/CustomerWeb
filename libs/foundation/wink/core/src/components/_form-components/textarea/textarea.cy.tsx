/// <reference types="cypress" />

describe('wink-textarea', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=form-components-textarea--default&viewMode=story');
  });

  it('should find the wink-textarea element', () => {
    cy.get('wink-textarea').should('exist');
  });

  it('should allow user to input text', () => {
    cy.get('wink-textarea').find('textarea').type('Hello, World!');
    cy.get('wink-textarea').find('textarea').should('have.value', 'Hello, World!');
  });

  it('should render the label', () => {
    cy.get('wink-textarea').invoke('attr', 'label', 'Test Label');
    cy.get('wink-textarea').find('label').should('contain.text', 'Test Label');
  });

  it('should render the helper text', () => {
    cy.get('wink-textarea').invoke('attr', 'helper', 'Test Helper');
    cy.get('wink-textarea').find('label').should('contain.text', 'Test Helper');
  });

  it('should render the placeholder text', () => {
    cy.get('wink-textarea').invoke('attr', 'placeholder', 'Test Placeholder');
    cy.get('wink-textarea').find('textarea').should('have.attr', 'placeholder', 'Test Placeholder');
  });

  it('should render the error message', () => {
    cy.get('wink-textarea').invoke('attr', 'error', 'Test Error');
    cy.get('wink-textarea').find('textarea').should('have.attr', 'aria-invalid');
    cy.get('wink-textarea').find('wink-validation-message').should('contain.text', 'Test Error');
  });

  it('should render the disabled state', () => {
    cy.get('wink-textarea').invoke('attr', 'is-disabled', 'true');
    cy.get('wink-textarea').find('textarea').should('be.disabled');
  });

  it('should render the required state', () => {
    cy.get('wink-textarea').invoke('attr', 'is-required', 'true');
    cy.get('wink-textarea').find('textarea').should('have.attr', 'required');
  });

  it('should render optional when is-required is false', () => {
    cy.get('wink-textarea').invoke('attr', 'is-required', 'false');
    cy.get('wink-textarea').find('wink-form-label').find('.label--optional').should('contain.text', 'Optioneel');
    cy.get('wink-textarea').find('textarea').should('not.have.attr', 'required');
  });

  it('should render the autocomplete attribute', () => {
    cy.get('wink-textarea').invoke('attr', 'autocomplete', 'on');
    cy.get('wink-textarea').find('textarea').should('have.attr', 'autocomplete', 'on');
    cy.get('wink-textarea').invoke('attr', 'autocomplete', 'off');
    cy.get('wink-textarea').find('textarea').should('have.attr', 'autocomplete', 'off');
  });

  it('should render the minlength attribute', () => {
    cy.get('wink-textarea').invoke('attr', 'minlength', '10');
    cy.get('wink-textarea').find('textarea').should('have.attr', 'minlength', '10');
  });

  it('should render the maxlength attribute', () => {
    cy.get('wink-textarea').invoke('attr', 'maxlength', '100');
    cy.get('wink-textarea').find('textarea').should('have.attr', 'maxlength', '100');
  });

  it('should render the rows attribute', () => {
    cy.get('wink-textarea').invoke('attr', 'rows', '5');
    cy.get('wink-textarea').find('textarea').should('have.attr', 'rows', '5');
  });

  it('should render the enterkeyhint attribute', () => {
    cy.get('wink-textarea').invoke('attr', 'enterkeyhint-option', 'enter');
    cy.get('wink-textarea').find('textarea').should('have.attr', 'enterkeyhint', 'enter');
  });
});
