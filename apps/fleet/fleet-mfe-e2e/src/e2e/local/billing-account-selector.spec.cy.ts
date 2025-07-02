import accounts from '../../fixtures/fleet-bundle-usage-reminders/accounts.json';
import userDetails from '../../../../../../fixtures/http/fleet/openid/user-details.json';
import msa from '../../fixtures/fleet-msa/msa.json';
import generic from '../../fixtures/fleet-msa/NC915.json';
import bprb from '../../fixtures/fleet-msa/BPRB2015.json';
import c5fa from '../../fixtures/fleet-msa/C5FA0001.json';
import stef from '../../fixtures/fleet-msa/STEF0000.json';

describe('BillingAccountSelector', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/ocapi/oauth/userdetails', { statusCode: 200, body: userDetails });
    cy.intercept('GET', '**/ocapi/public/api/fleet-customer-service/v1/msa', {
      statusCode: 200,
      body: msa,
    });
    cy.intercept('GET', '**/omapi/public/product/**', {
      statusCode: 200,
      body: generic,
    });
    cy.intercept('GET', '**/omapi/public/product/BPRB2015', {
      statusCode: 200,
      body: bprb,
    });
    cy.intercept('GET', '**/omapi/public/product/C5FA0001', {
      statusCode: 200,
      body: c5fa,
    });
    cy.intercept('GET', '**/omapi/public/product/STEF0000', {
      statusCode: 200,
      body: stef,
    });
  });

  it('should navigate to a component including the billing account selector when checkbox is enabled', () => {
    cy.intercept('GET', '**/v2/accounts', { statusCode: 200, body: accounts });

    cy.visit('/');
    cy.getElement('billing-account-checkbox').click();
    cy.getElement('component-links').children().filter(':contains("msa")').click();

    cy.url().should('include', 'msa?includeBillingAccountSelector=true');
    cy.getElement('billing-account-selector')
      .should('be.visible')
      .click()
      .then(() => {
        cy.getElement('account-selector-list').should('be.visible').get('li').and('have.length', 2);
      });
  });
});
