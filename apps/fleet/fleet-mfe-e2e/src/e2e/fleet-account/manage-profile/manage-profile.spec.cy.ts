import invalidFleetNumber from '../../../fixtures/manage-profile/identity-invalid-fleet-number.json';
import accountAlreadyActive from '../../../fixtures/manage-profile/identity-account-already-active.json';
import accountPending from '../../../fixtures/manage-profile/identity-account-pending.json';
import accountInvited from '../../../fixtures/manage-profile/identity-account-invited.json';
describe('Manage Profile', () => {
  beforeEach(() => {
    cy.visit('/manage-profile');
  });

  it('should show mobile number step at first', () => {
    cy.getElement('mobile-number-page').should('be.visible');
    cy.getElement('phone-number-field').should('be.visible');
  });

  it('should fill in phone number field', () => {
    cy.getElement('phone-number-field').type('0471232427');
    cy.getElement('phone-number-field').should('have.value', '0471232427');
  });

  it('should show required error message', () => {
    cy.getElement('phone-number-field').type('a');
    cy.getElement('phone-number-field').type('{backspace}');
    cy.getElement('phone-number-field').should('have.value', '');
    cy.getElement('required').should('contain.text', 'mandatory');
  });

  it('should show number-constraint', () => {
    cy.getElement('phone-number-field').type('a');
    cy.getElement('phone-number-field').should('have.value', 'a');
    cy.getElement('invalid-format').should('contain.text', 'constraint');
  });

  it('should show invalid fleet profile', () => {
    cy.intercept('GET', '**/products/0478232425/identity', { statusCode: 500, body: invalidFleetNumber });

    cy.getElement('phone-number-field').type('0478232425');
    cy.getElement('phone-number-field').should('have.value', '0478232425');

    cy.getElement('submit-button').click();

    cy.getElement('invalid-fleet-number').should('contain.text', 'invalid-fleet-number');
  });

  it('should show already exists', () => {
    cy.intercept('GET', '**/products/0478232426/identity', { statusCode: 200, body: accountAlreadyActive });

    cy.getElement('phone-number-field').type('0478232426');
    cy.getElement('phone-number-field').should('have.value', '0478232426');

    cy.getElement('submit-button').click();

    cy.getElement('account-exist').should('contain.text', 'active-profile');
  });

  it('should show status in active state when account is pending', () => {
    cy.intercept('GET', '**/products/0478232426/identity', { statusCode: 200, body: accountPending });

    cy.getElement('phone-number-field').type('0478232426');
    cy.getElement('phone-number-field').should('have.value', '0478232426');

    cy.getElement('submit-button').click();

    cy.getElement('active-account').should('contain.text', 'inactive-profile');
  });

  it('should show status in active state when account is invited', () => {
    cy.intercept('GET', '**/products/0478232426/identity', { statusCode: 200, body: accountInvited });

    cy.getElement('phone-number-field').type('0478232426');
    cy.getElement('phone-number-field').should('have.value', '0478232426');

    cy.getElement('submit-button').click();

    cy.getElement('active-account').should('contain.text', 'inactive-profile');
  });
});
