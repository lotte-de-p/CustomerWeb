import { SimManagementConstants } from '@sim-management/data-access';
import { LoginDetails } from '@telenet/ng-lib-ocapi';

const userDetailsApiPath = '**/ocapi/oauth/userdetails';

const termsAndConditionsStepSelector = '[data-testid="sim-terms-and-conditions"]';
const backButtonSelector = '[data-testid="step-container-back-button"]';
const proceedButtonSelector = '[data-testid="step-container-proceed-button"]';
const msisdnInputSelector = '[data-testid="sim-validation-input-msisdn"]';
const iccidInputSelector = '[data-testid="sim-validation-input-iccid"]';
const msisdnInputErrorSelector = '[data-testid="sim-validation-input-msisdn-error"]';
const orderNumberInputSelector = '[data-testid="sim-validation-input-order-number"]';
const orderNumberInputErrorSelector = '[data-testid="sim-validation-input-order-number-error"]';
const iccidInputErrorSelector = '[data-testid="sim-validation-input-iccid-error"]';
const portingStepSelector = '[data-testid="sim-porting"]';
const validationStepSelector = '[data-testid="sim-validation"]';
const accountTypePrepaidSelector = '#subscription-option-PREPAID';
const portingIccidInputSelector = '[data-testid="sim-porting-input-iccid"]';
const validIccid = '1234567890123';

describe('Sim activation when not logged in', () => {
  beforeEach(() => {
    initializeUserDetailsAnonymousInterception();
    initializeValidationInterception('0419134565', '1234567890123', '', '');
    initializeActivationInterception('0419134565', '1234567890123');

    cy.visit('/sim-activation?type=sim');
  });

  it('should show a form with SIM card details (msisdn & iccid & order number)', () => {
    cy.get(msisdnInputSelector).should('exist');
    cy.get(iccidInputSelector).should('exist');
    cy.get(backButtonSelector).should('not.exist');
    cy.get(proceedButtonSelector).should('exist');

    cy.get(msisdnInputSelector).should('be.empty');
    cy.get(msisdnInputSelector).should('not.be.disabled');
    cy.get(iccidInputSelector).should('be.empty');
    cy.get(iccidInputSelector).should('not.be.disabled');
  });

  it('should show corresponding error messages when invalid values entered in input boxes', () => {
    cy.get(msisdnInputSelector).should('exist');
    cy.get(iccidInputSelector).should('exist');
    cy.get(orderNumberInputSelector).should('exist');

    cy.get(orderNumberInputSelector).type('12345678910111248');
    cy.get(orderNumberInputErrorSelector).should('not.exist');
    cy.get(orderNumberInputSelector).type('6');
    cy.get('body').click(0, 0);
    cy.get(orderNumberInputErrorSelector).should('exist');

    cy.get(msisdnInputSelector).type('0470586512');
    cy.get(msisdnInputErrorSelector).should('not.exist');
    cy.get(msisdnInputSelector).type('+');
    cy.get('body').click(0, 0);
    cy.get(msisdnInputErrorSelector).should('exist');

    cy.get(iccidInputSelector).type('9876543210123');
    cy.get(iccidInputErrorSelector).should('not.exist');
    cy.get(iccidInputSelector).type('2');
    cy.get('body').click(0, 0);
    cy.get(iccidInputErrorSelector).should('exist');
  });

  it('should call the activate API', () => {
    cy.get(msisdnInputSelector).clear();
    cy.get(msisdnInputSelector).type('0419134565');
    cy.get(iccidInputSelector).clear();
    cy.get(iccidInputSelector).type('1234567890123');

    cy.get(proceedButtonSelector).click();
  });
});

describe('Sim activation when logged in', () => {
  beforeEach(() => {
    initializeUserDetailsInterception({});
    initializeValidationInterception('0419134565', '1234567890123', '', '');
    initializeActivationInterception('0419134565', '1234567890123');
    cy.visit('/sim-activation?type=sim&msisdn=0419134565&iccid=1234567890123');
  });

  it('should show a form with SIM card details (msisdn & iccid) with data filled in & readonly', () => {
    cy.get(msisdnInputSelector).should('exist');
    cy.get(iccidInputSelector).should('exist');
    cy.get(backButtonSelector).should('exist');
    cy.get(proceedButtonSelector).should('exist');

    cy.get(msisdnInputSelector).should('have.value', '0419134565');
    cy.get(msisdnInputSelector).should('be.disabled');
    cy.get(iccidInputSelector).should('have.value', '1234567890123');
    cy.get(iccidInputSelector).should('be.disabled');
  });

  it('should go back to mobile line details when you click on back button', () => {
    cy.get(backButtonSelector).click();

    cy.url().should('contain', '/mobile-line-details');
  });

  it('should go to the terms & conditions page when you click on the continue button', () => {
    cy.get(proceedButtonSelector).click();

    cy.get(termsAndConditionsStepSelector).should('exist');
  });

  it('should go back to the validation page when you click on back button', () => {
    cy.get(proceedButtonSelector).click();

    cy.get(backButtonSelector).click();
    cy.get(msisdnInputSelector).should('exist');
    cy.get(iccidInputSelector).should('exist');
  });

  it('should call the activate API and redirect to thank you URL when everything is ok', () => {
    cy.get(proceedButtonSelector).click();
    cy.get(proceedButtonSelector).click();

    cy.url().should('contain', 'thank-you-sim-postpaid');
  });
});

describe('Sim activation with porting when logged in', () => {
  beforeEach(() => {
    initializeUserDetailsInterception({});
    initializeValidationInterception(
      '0419134565',
      '1234567890123',
      SimManagementConstants.ORDER_TYPE_PORTING,
      SimManagementConstants.LINE_TYPE_PREPAID
    );
    initializeActivationInterception('0419134565', '1234567890123');
    cy.visit('/sim-activation?type=sim&msisdn=0419134565&iccid=1234567890123');
  });

  it('should go through validation & porting & terms and conditions steps correctly', () => {
    cy.get(validationStepSelector).should('exist');

    cy.get(proceedButtonSelector).click();
    cy.get(portingStepSelector).should('exist');

    cy.get(accountTypePrepaidSelector).click();
    cy.get(portingIccidInputSelector).type(validIccid);
    cy.get('body').click(0, 0);

    cy.get(proceedButtonSelector).click();
    cy.get(termsAndConditionsStepSelector).should('exist');

    cy.get(backButtonSelector).click();
    cy.get(portingStepSelector).should('exist');

    cy.get(proceedButtonSelector).click();
    cy.get(proceedButtonSelector).click();
    cy.url().should('contain', 'thank-you-sim-prepaid');
  });
});

function initializeUserDetailsAnonymousInterception() {
  cy.intercept('GET', userDetailsApiPath, {
    statusCode: 403,
    body: {},
  });
}

function initializeUserDetailsInterception(params: Partial<LoginDetails>) {
  cy.intercept('GET', userDetailsApiPath, {
    statusCode: 200,
    body: {
      customer_number: '1209003924',
      identity_id: '418948108',
      username: 'Manager_1209003924_csfsis@telenetgroup.be',
      login_alias: 'bbaae42e-054f-47d9-864e-66a1b78773bc',
      first_name: 'William manager',
      last_name: 'Blanc',
      scopes: ['activatesim'],
      explicit_login: true,
      narrowed_scope: false,
      bss_system: 'NETCRACKER',
      auth_age: 264874,
      is_pid: true,
      role: params?.role || 'MANAGER',
    },
  });
}

function initializeValidationInterception(msisdn: string, iccid: string, orderType: string, lineType: string) {
  cy.intercept('POST', `**/mobile-lines/${msisdn}/sim-cards/${iccid}/validation`, {
    statusCode: 200,
    body: {
      orderType: orderType,
      lineType: lineType,
    },
  });
}

function initializeActivationInterception(msisdn: string, iccid: string) {
  cy.intercept('POST', `**/mobile-lines/${msisdn}/sim-cards/${iccid}/activation`, {
    statusCode: 204,
    body: {},
  });
}
