/// <reference types="cypress" />

describe('wink-radio-button', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=form-components-radio-button--single-radio-button');
  });

  it('should find the wink-radio-button element', () => {
    cy.get('wink-radio-button').should('exist');
  });
  it('should have the correct input styling', () => {
    cy.get('wink-radio-button').find('input').should('have.css', 'height', '20px');
    cy.get('wink-radio-button').find('input').should('have.css', 'width', '20px');
    cy.get('wink-radio-button').find('input').should('have.css', 'background-color', 'rgba(255, 255, 255, 0)');
    cy.get('wink-radio-button').find('input').should('have.css', 'border-color', 'rgba(41, 29, 24, 0.64)');
  });
  it('should have the correct styling on the label', () => {
    cy.get('wink-radio-button').find('wink-form-label .label--text').should('have.css', 'font-size', '18px');
    cy.get('wink-radio-button').find('wink-form-label .label--text').should('have.css', 'line-height', '28px');
    cy.get('wink-radio-button').find('wink-form-label .label--text').should('have.css', 'color', 'rgb(41, 29, 24)');
    cy.viewport('iphone-x');
    cy.get('wink-radio-button').find('wink-form-label .label--text').should('have.css', 'font-size', '16px');
    cy.get('wink-radio-button').find('wink-form-label .label--text').should('have.css', 'line-height', '20px');
  });
  it('should have the correct styling on the helper text', () => {
    cy.get('wink-radio-button').find('wink-form-label .label--helper').should('have.css', 'font-size', '14px');
    cy.get('wink-radio-button').find('wink-form-label .label--helper').should('have.css', 'line-height', '20px');
    cy.get('wink-radio-button')
      .find('wink-form-label .label--helper')
      .should('have.css', 'color', 'rgb(118, 111, 107)');
    cy.viewport('iphone-x');
    cy.get('wink-radio-button').find('wink-form-label .label--helper').should('have.css', 'font-size', '12px');
  });

  it('should have the correct styling when clicked', () => {
    cy.get('wink-radio-button').find('input').click();
    cy.get('wink-radio-button').find('input').should('have.css', 'border-color', 'rgb(41, 29, 24)');
    cy.get('wink-radio-button').find('input').should('have.css', 'background-color', 'rgb(255, 196, 33)');
  });

  it('should have the correct styling on error', () => {
    cy.get('wink-radio-button').invoke('attr', 'error', 'true');
    cy.get('wink-radio-button').find('input').should('have.css', 'border-color', 'rgb(222, 53, 11)');
  });

  it('should have the correct styling when disabled', () => {
    cy.get('wink-radio-button').invoke('attr', 'disabled', 'true');
    cy.get('wink-radio-button').find('input').should('have.css', 'opacity', '0.4');
    cy.get('wink-radio-button').find('wink-form-label').should('have.css', 'opacity', '0.4');
  });

  it('should have the correct attributes when checked', () => {
    cy.get('wink-radio-button').invoke('attr', 'checked', true);
    cy.get('wink-radio-button').should('have.attr', 'checked');
  });
});
