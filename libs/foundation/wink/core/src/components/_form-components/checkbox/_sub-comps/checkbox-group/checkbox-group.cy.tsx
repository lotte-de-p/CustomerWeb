/// <reference types="cypress" />

describe('wink-checkbox-group', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=form-components-checkbox--multiple-checkboxes');
  });

  it('should find the wink-checkbox-group element', () => {
    cy.get('wink-checkbox-group').should('exist');
  });

  it('should have the correct styling on the label', () => {
    cy.get('wink-checkbox-group').find('wink-form-label .label--text').should('have.css', 'font-size', '16px');
    cy.get('wink-checkbox-group').find('wink-form-label .label--text').should('have.css', 'line-height', '24px');
    cy.get('wink-checkbox-group').find('wink-form-label .label--text').should('have.css', 'color', 'rgb(41, 29, 24)');
  });

  it('should have the correct styling on the helper', () => {
    cy.get('wink-checkbox-group').find('wink-form-label .label--helper').should('have.css', 'font-size', '14px');
    cy.get('wink-checkbox-group').find('wink-form-label .label--helper').should('have.css', 'line-height', '20px');
    cy.get('wink-checkbox-group')
      .find('wink-form-label .label--helper')
      .should('have.css', 'color', 'rgb(118, 111, 107)');
  });

  it('should render the checkboxes based on the direction', () => {
    cy.get('wink-checkbox-group').find('.checkbox-group--vertical').should('have.css', 'flex-direction', 'column');
    cy.get('wink-checkbox-group').find('.checkbox-group--vertical').should('have.css', 'gap', '16px');
    cy.get('wink-checkbox-group').invoke('attr', 'direction', 'horizontal');
    cy.get('wink-checkbox-group').find('.checkbox-group--horizontal').should('have.css', 'flex-direction', 'row');
    cy.get('wink-checkbox-group').find('.checkbox-group--horizontal').should('have.css', 'gap', '32px');
  });

  it('should render an error at the bottom of the error group if an error is set', () => {
    cy.get('wink-checkbox-group').find('wink-validation-message').should('not.exist');

    cy.get('wink-checkbox-group').invoke('attr', 'error', 'Check at least one checkbox');
    cy.get('wink-checkbox-group').find('wink-validation-message').should('exist');
    cy.get('wink-checkbox-group').find('wink-validation-message *').should('have.css', 'color', 'rgb(222, 53, 11)');
  });

  it('should toggle an optional text when the checkbox group is not required', () => {
    cy.get('wink-checkbox-group').find('wink-form-label .label--optional').should('exist');

    cy.get('wink-checkbox-group').invoke('attr', 'is-required', 'true');
    cy.get('wink-checkbox-group').find('wink-form-label .label--optional').should('not.exist');
  });
});
