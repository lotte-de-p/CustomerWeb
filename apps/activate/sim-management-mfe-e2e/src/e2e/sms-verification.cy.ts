import { LoginDetails, LoginDetailsConstants } from '@telenet/ng-lib-ocapi';
import { mobileLineFactory, RawMobileLine } from '@sim-management/data-access';

const userDetailsApiPath = '**/ocapi/oauth/userdetails';
const mobileLinesApiPath = '**/api/sim-management-cs/v1/mobile-lines';
const backButtonSelector = '[data-testid="step-container-back-button"]';
const proceedButtonSelector = '[data-testid="step-container-proceed-button"]';
const resendCodeButtonSelector = '[data-testid="sms-verification-resend-code-button"]';
const sendCodeButtonSelector = '[data-testid="sms-verification-send-code-button"]';
const sixDigitFormSelector = '[data-testid="sms-verification-six-digit-form"]';
const mobileLineSelector = '[data-testid="sms-verification-mobile-line-selector"]';
const readonlyMobileLineSelector = '[data-testid="sms-verification-readonly-mobile-line"]';
const sixDigitInput1Selector = '[data-testid="sms-verification-six-digit-form-input-0"]';
const sixDigitInput2Selector = '[data-testid="sms-verification-six-digit-form-input-1"]';
const sixDigitInput3Selector = '[data-testid="sms-verification-six-digit-form-input-2"]';
const sixDigitInput4Selector = '[data-testid="sms-verification-six-digit-form-input-3"]';
const sixDigitInput5Selector = '[data-testid="sms-verification-six-digit-form-input-4"]';
const sixDigitInput6Selector = '[data-testid="sms-verification-six-digit-form-input-5"]';
const notReceivedCodeAccordionSelector = '[data-testid="sms-verification-not-received-code-accordion"]';
const mobileLineToSelect1Selector = '[data-testid="sms-verification-mobile-line-to-select-0"]';
const mobileLineToSelect2Selector = '[data-testid="sms-verification-mobile-line-to-select-1"]';
const mobileLineToSelect3Selector = '[data-testid="sms-verification-mobile-line-to-select-2"]';
const winkNotificationSelector = '[data-testid="sim-management-notification"]';

describe('Sms verification with non data sim', () => {
  beforeEach(() => {
    initializeUserDetailsInterception({ role: LoginDetailsConstants.MANAGER_ROLE });
    initializeMobileLinesInterception(mobileLineFactory.buildList(1));
    initializeCodeGenerationInterception('0499999999');
    initializeESimSwap('0499999999');

    cy.visit('/sms-verification');
  });

  it('should show readonly msisdn selector with six digit form when a non data sim is selected', () => {
    cy.get(winkNotificationSelector).should('not.exist');
    cy.get(readonlyMobileLineSelector).should('exist');
    cy.get(notReceivedCodeAccordionSelector).should('exist');
    cy.get(backButtonSelector).should('exist');
    cy.get(proceedButtonSelector).should('exist');
    cy.get(sixDigitFormSelector).should('exist');
    cy.get(mobileLineSelector).should('not.exist');
    cy.get(resendCodeButtonSelector).should('exist');
  });

  it('should only be allowed to type in numbers, max 1 per input field', () => {
    cy.get(sixDigitInput1Selector).should('exist').type('a1');
    cy.get(sixDigitInput2Selector).should('exist').type('2b');
    cy.get(sixDigitInput3Selector).should('exist').type('c3');
    cy.get(sixDigitInput4Selector).should('exist').type('4d');
    cy.get(sixDigitInput5Selector).should('exist').type('5');
    cy.get(sixDigitInput6Selector).should('exist').type('6');

    cy.get(sixDigitInput1Selector).should('have.value', '1');
    cy.get(sixDigitInput2Selector).should('have.value', '2');
    cy.get(sixDigitInput3Selector).should('have.value', '3');
    cy.get(sixDigitInput4Selector).should('have.value', '4');
    cy.get(sixDigitInput5Selector).should('have.value', '5');
    cy.get(sixDigitInput6Selector).should('have.value', '6');
  });

  it('should generate sms code & redirect to sales when validated successfully', () => {
    fillInSixDigitForm();
    cy.get(proceedButtonSelector).should('exist').click();
    cy.url().should(
      'include',
      '/residential/nl/sales?flow=review&pid=0499999999&sid=123456&statuses=ADD&intent=esim-add&source=esim-add'
    );
  });
});

describe('Sms verification with data sim', () => {
  beforeEach(() => {
    initializeUserDetailsInterception({ role: LoginDetailsConstants.MANAGER_ROLE });
    initializeMobileLinesInterception([
      mobileLineFactory.build({
        dataOnly: true,
      }),
      mobileLineFactory.build({ name: 'Non data sim 1' }),
      mobileLineFactory.build({ name: 'Non data sim 2' }),
    ]);
    initializeCodeGenerationInterception('0499999999');
    initializeESimSwap('0499999999');

    cy.visit('/sms-verification');
  });

  it('should show mobile line selector with button when data sim in session', () => {
    cy.get(winkNotificationSelector).should('not.exist');
    cy.get(readonlyMobileLineSelector).should('not.exist');
    cy.get(notReceivedCodeAccordionSelector).should('not.exist');
    cy.get(backButtonSelector).should('exist');
    cy.get(proceedButtonSelector).should('exist');
    cy.get(sixDigitFormSelector).should('not.exist');
    cy.get(mobileLineSelector).should('exist');
    cy.get(sendCodeButtonSelector).should('exist');
  });

  it('should show six digit form when button is clicked and code has been sent', () => {
    cy.get(sixDigitFormSelector).should('not.exist');
    cy.get(sendCodeButtonSelector).should('exist').click();
    cy.get(sixDigitFormSelector).should('exist');
    cy.get(sendCodeButtonSelector).should('not.exist');
  });

  it('should only show non data sim mobile lines in the selector', () => {
    cy.get(mobileLineToSelect1Selector).should('exist').contains('Non data sim 1');
    cy.get(mobileLineToSelect2Selector).should('exist').contains('Non data sim 2');
    cy.get(mobileLineToSelect3Selector).should('not.exist');
  });

  it('should generate sms code & redirect to sales when validated successfully', () => {
    cy.get(sendCodeButtonSelector).should('exist').click();
    fillInSixDigitForm();
    cy.get(proceedButtonSelector).should('exist').click();
    cy.url().should(
      'include',
      '/residential/nl/sales?flow=review&pid=0499999999&sid=123456&statuses=ADD&intent=esim-add&source=esim-add'
    );
  });
});

function fillInSixDigitForm() {
  cy.get(sixDigitInput1Selector).should('exist').type('1');
  cy.get(sixDigitInput2Selector).should('exist').type('0');
  cy.get(sixDigitInput3Selector).should('exist').type('0');
  cy.get(sixDigitInput4Selector).should('exist').type('3');
  cy.get(sixDigitInput5Selector).should('exist').type('2');
  cy.get(sixDigitInput6Selector).should('exist').type('1');
}

function initializeMobileLinesInterception(mobileLines: RawMobileLine[]): void {
  cy.intercept('GET', mobileLinesApiPath, {
    statusCode: 200,
    body: mobileLines,
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
      scopes: ['D_simcarddetails'],
      explicit_login: true,
      narrowed_scope: false,
      bss_system: 'NETCRACKER',
      auth_age: 264874,
      is_pid: true,
      role: params.role || 'MANAGER',
    },
  });
}

function initializeCodeGenerationInterception(msisdn: string) {
  cy.intercept('POST', `**/mobile-lines/${msisdn}/generate-verification-code`, {
    statusCode: 200,
    body: {
      verificationCode: 100321,
    },
  });
}

function initializeESimSwap(msisdn: string): void {
  cy.intercept('POST', mobileLinesApiPath + '/' + msisdn + '/swap-sim/esim', {
    statusCode: 200,
    body: '123456',
  });
}
