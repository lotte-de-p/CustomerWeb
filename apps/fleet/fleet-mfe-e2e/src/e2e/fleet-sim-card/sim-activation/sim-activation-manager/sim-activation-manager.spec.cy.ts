import userDetails from '../../../../fixtures/fleet-bundle-usage-reminders/user-details.json';
import simDetails from '../../../../fixtures/fleet-sim-activation-manager/simdetails.json';

describe('Bundle usage reminders', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/ocapi/oauth/userdetails', { statusCode: 200, body: userDetails });
    cy.intercept('GET', '**/v2/simdetails?msisdn=123456', { statusCode: 200, body: simDetails });

    cy.visit('/sim-activation-manager');
  });

  it('On page load, date picker should exist', () => {
    cy.get('.date-picker.hide-until-sm').should('exist');
  });

  it('On click on date input , date picker should be visible', () => {
    cy.get('.mat-datepicker-input')
      .click({ force: true })
      .then(() => cy.get('.mat-datepicker-content-container').should('exist'));
  });

  it('When choosing current date, the input must be enabled', () => {
    cy.get('.mat-datepicker-input')
      .click({ force: true })
      .get('.mat-calendar-body-today')
      .click({ force: true })
      .then(() => {
        cy.get('input[type="text"]').should('not.be.empty');
        cy.get('#activateSim').should('be.enabled');
      });
  });
});
