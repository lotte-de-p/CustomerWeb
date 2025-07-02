import { LoginDetails } from '@telenet/ng-lib-ocapi';

const userDetailsApiPath = '**/ocapi/oauth/userdetails';

const termsAndConditionsSelector = '[data-testid="sim-terms-and-conditions"]';
const portStepSelector = '[data-testid="sim-porting"]';
const validationSelector = '[data-testid="sim-validation"]';
const backButtonSelector = '[data-testid="step-container-back-button"]';
const proceedButtonSelector = '[data-testid="step-container-proceed-button"]';
const msisdnInputSelector = '[data-testid="sim-validation-input-msisdn"]';
const iccidInputSelector = '[data-testid="sim-validation-input-iccid"]';
const orderNumberInputSelector = '[data-testid="sim-validation-input-order-number"]';
const accountTypePrepaidSelector = '#subscription-option-PREPAID';
const accountTypeSubscriptionSelector = '#subscription-option-SUBSCRIPTION';
const accountTypeBusinessSelector = '#subscription-option-BUSINESS_SUBSCRIPTION';
const portingIccidInputSelector = '[data-testid="sim-porting-input-iccid"]';
const portingAccountNumberSelector = '[data-testid="sim-porting-input-account-number"]';
const portingIccidErrorSelector = '[data-testid="sim-porting-input-iccid-error"]';
const portingAccountNumberErrorSelector = '[data-testid="sim-porting-input-accountNumber-error"]';
const portingAccountTypeErrorSelector = '[data-testid="sim-porting-input-account-type-error"]';
const validIccid = '1234567890123';
const validMsisdn = '0469423771';

describe('E-sim porting logged in user', () => {
  beforeEach(() => {
    initializeUserDetailsInterception({});
    initializeActivationInterception(validMsisdn, validIccid);
    cy.visit(`/sim-activation?type=e_sim&msisdn=${validMsisdn}&iccid=${validIccid}`);
  });

  it('should show a form with only msisdn & filled in & readonly', () => {
    cy.get(validationSelector).should('exist');
    cy.get(msisdnInputSelector).should('exist');
    cy.get(iccidInputSelector).should('not.exist');
    cy.get(orderNumberInputSelector).should('not.exist');
    cy.get(backButtonSelector).should('exist');
    cy.get(proceedButtonSelector).should('exist');
    cy.get(msisdnInputSelector).should('have.value', validMsisdn);
    cy.get(msisdnInputSelector).should('be.disabled');
  });

  it('should go to the porting page when you click on the continue button', () => {
    cy.get(proceedButtonSelector).click();
    cy.get(portStepSelector).should('exist');
    cy.get(backButtonSelector).click();
    cy.get(validationSelector).should('exist');
  });

  it('should go to the terms & conditions page when you click on the continue button after filling in the form', () => {
    proceedToTermsAndConditions();
  });

  it('should go back to porting page when you click on back button', () => {
    proceedToTermsAndConditions();
    cy.get(backButtonSelector).click();
    cy.get(portStepSelector).should('exist');
  });

  it('should call activate API & go to thank you', () => {
    cy.get(proceedButtonSelector).click();
    cy.get(accountTypePrepaidSelector).click();
    cy.get(portingIccidInputSelector).type(validIccid);
    cy.get('body').click(0, 0);
    cy.get(proceedButtonSelector).click();
    cy.get(termsAndConditionsSelector).should('exist');
    cy.get(proceedButtonSelector).click();
    cy.url().should('contain', 'thank-you-e-sim-porting');
  });

  it('should show validations errors when not filling the porting form correctly', () => {
    cy.get(proceedButtonSelector).click();

    cy.get(accountTypePrepaidSelector).click();
    cy.get(portingIccidInputSelector).type('123');
    cy.get('body').click(0, 0);
    cy.get(portingIccidErrorSelector).should('exist');
    cy.get(portingAccountNumberErrorSelector).should('not.exist');

    cy.get(accountTypeSubscriptionSelector).click();
    cy.get(portingIccidErrorSelector).should('exist');
    cy.get(portingAccountNumberErrorSelector).should('not.exist');

    cy.get(accountTypeBusinessSelector).click();
    cy.get(portingIccidErrorSelector).should('not.exist');
    cy.get(portingAccountNumberErrorSelector).should('not.exist');

    cy.get(proceedButtonSelector).click();
    cy.get(portingAccountNumberErrorSelector).should('exist');
    cy.get(portingAccountNumberSelector).type('123');
    cy.get('body').click(0, 0);
    cy.get(portingAccountNumberErrorSelector).should('not.exist');

    cy.get(proceedButtonSelector).click();
    cy.get(termsAndConditionsSelector).should('exist');
  });

  it('should show validations errors when clicking submit', () => {
    cy.get(proceedButtonSelector).click();
    cy.get(proceedButtonSelector).click();
    cy.get(portingAccountTypeErrorSelector).should('exist');

    cy.get(accountTypePrepaidSelector).click();
    cy.get(portingIccidErrorSelector).should('exist');
    cy.get(portingIccidInputSelector).type(validIccid);
    cy.get('body').click(0, 0);
    cy.get(portingIccidErrorSelector).should('not.exist');

    cy.get(proceedButtonSelector).click();
    cy.get(termsAndConditionsSelector).should('exist');
  });
});

function proceedToTermsAndConditions() {
  cy.get(proceedButtonSelector).click();
  cy.get(accountTypePrepaidSelector).click();
  cy.get(portingIccidInputSelector).type(validIccid);
  cy.get('body').click(0, 0);
  cy.get(proceedButtonSelector).click();
  cy.get(termsAndConditionsSelector).should('exist');
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

function initializeActivationInterception(msisdn: string, iccid: string) {
  cy.intercept('POST', `**/mobile-lines/${msisdn}/sim-cards/${iccid}/activation`, {
    statusCode: 204,
    body: {},
  });
}
