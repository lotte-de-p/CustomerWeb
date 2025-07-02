import accounts from '../../../fixtures/fleet-bundle-usage-reminders/accounts.json';
import userDetails from '../../../fixtures/fleet-bundle-usage-reminders/user-details.json';
import { AccountThresholdFactory } from '../../../global/test-data/fleet-billing/account-threshold.factory';

describe('Bundle usage reminders', () => {
  const SAVE_BUTTON = 'save-button';
  const THRESHOLD_INPUT = 'over-consumption-threshold-input';
  const ENABLE_REMINDER_CHECKBOX = 'enable-reminder-checkbox';

  beforeEach(() => {
    cy.intercept('GET', '**/ocapi/oauth/userdetails', { statusCode: 200, body: userDetails });
    cy.intercept('GET', '**/v2/accounts', { statusCode: 200, body: accounts });

    cy.visit('/bundle-usage-reminders?includeBillingAccountSelector=true');
  });

  it('should show enabled checkbox and threshold 50', () => {
    cy.intercept(
      'GET',
      '**/v2/accounts/501052973',
      AccountThresholdFactory.accountThreshold({
        overConsumptionThreshold: {
          isEnabled: true,
          value: 50,
        },
      })
    );

    cy.getElement(ENABLE_REMINDER_CHECKBOX).should('be.checked');
    cy.getTgFormInput(THRESHOLD_INPUT).should('have.value', '50');
    cy.getElement(SAVE_BUTTON).should('be.disabled');
  });

  it('should show disabled checkbox and hide threshold input', () => {
    cy.intercept(
      'GET',
      '**/v2/accounts/501052973',
      AccountThresholdFactory.accountThreshold({
        overConsumptionThreshold: {
          isEnabled: false,
          value: 50,
        },
      })
    );

    cy.getElement(ENABLE_REMINDER_CHECKBOX).should('not.be.checked');
    cy.getElement('over-consumption-threshold-section').should('not.exist');
    cy.getElement(SAVE_BUTTON).should('be.disabled');
  });

  it('should show enabled checkbox and empty threshold input when threshold value is default value', () => {
    cy.intercept(
      'GET',
      '**/v2/accounts/501052973',
      AccountThresholdFactory.accountThreshold({
        overConsumptionThreshold: { isEnabled: true, value: 10000000000 },
      })
    );

    cy.getElement(ENABLE_REMINDER_CHECKBOX).should('be.checked');
    cy.getTgFormInput(THRESHOLD_INPUT).should('be.empty');
    cy.getElement(SAVE_BUTTON).should('be.disabled');
  });

  it('should save a threshold', () => {
    cy.intercept(
      'GET',
      '**/v2/accounts/501052973',
      AccountThresholdFactory.accountThreshold({ overConsumptionThreshold: { isEnabled: true, value: 30 } })
    );
    cy.getTgFormInput(THRESHOLD_INPUT).clear().type('60');
    cy.intercept('PUT', '**/v1/accounts/501052973', { status: '200' }).as('saveThresholdXhr');

    cy.getElement(SAVE_BUTTON).click({ force: true });

    cy.wait('@saveThresholdXhr').then((saveThresholdXhr) => {
      expect(saveThresholdXhr.request.body.overConsumptionThreshold.isEnabled).to.eq(true);
      expect(saveThresholdXhr.request.body.overConsumptionThreshold.value).to.eq(60);
    });
    cy.getTgSuccessMessage().should('contain', 'ng.bundle-usage-reminders.response-success-update-account-success');
    cy.getElement(SAVE_BUTTON).should('be.disabled');
  });

  it('should display an error message and disable the save button when threshold is empty', () => {
    cy.intercept(
      'GET',
      '**/v2/accounts/501052973',
      AccountThresholdFactory.accountThreshold({ overConsumptionThreshold: { isEnabled: true, value: 30 } })
    );
    cy.getTgFormInput(THRESHOLD_INPUT).clear().type(' ');

    // THEN
    cy.getTgFormInputError(THRESHOLD_INPUT).should(
      'contain',
      'ng.bundle-usage-reminders.overconsumptionthreshold.required.error'
    );
    cy.getElement(SAVE_BUTTON).should('be.disabled');
  });

  it('should not display the form and show error message when it cannot retrieve the threshold', () => {
    cy.intercept('GET', '**/v2/accounts/501052973', { forceNetworkError: true });

    cy.getElement('bundle-usage-reminders-form').should('not.exist');
    cy.getTgErrorMessage().should('contain', 'ng.ocapi.0-errorfield');
  });

  it('should disable the form when threshold is in progress', () => {
    cy.intercept(
      'GET',
      '**/v2/accounts/501052973',
      AccountThresholdFactory.accountThreshold({
        overConsumptionThreshold: { isEnabled: true, inProgress: true, value: 30 },
      })
    );

    cy.getTgWarningMessage().should('contain', 'ng.bundle-usage-reminders.update-in.progress-warning');
    cy.getTgFormInput(THRESHOLD_INPUT).should('be.disabled');
    cy.getElement(ENABLE_REMINDER_CHECKBOX).should('be.disabled');
    cy.getElement(SAVE_BUTTON).should('be.disabled');
  });

  it('should update the form and clear the messages when you switch to a different billing account', () => {
    cy.intercept(
      'GET',
      '**/v2/accounts/501052973',
      AccountThresholdFactory.accountThreshold({ overConsumptionThreshold: { isEnabled: true, value: 50 } })
    );
    cy.intercept(
      'GET',
      '**/v2/accounts/501052974',
      AccountThresholdFactory.accountThreshold({ overConsumptionThreshold: { isEnabled: true, value: 100 } })
    );
    cy.getTgFormInput(THRESHOLD_INPUT).clear().type('60');
    cy.intercept('PUT', '**/v1/accounts/501052973', { status: '200' });

    cy.getElement(SAVE_BUTTON).click({ force: true });
    cy.getTgSuccessMessage().should('contain', 'ng.bundle-usage-reminders.response-success-update-account-success');

    cy.selectBillingAccount('501052974');

    cy.getTgFormInput(THRESHOLD_INPUT).should('have.value', 100);
    cy.getElement(ENABLE_REMINDER_CHECKBOX).should('be.checked');
    cy.getTgSuccessMessage().should('not.exist');
    cy.getElement(SAVE_BUTTON).should('be.disabled');
  });
});
