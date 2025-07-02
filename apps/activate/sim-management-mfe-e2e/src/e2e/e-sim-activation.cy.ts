import { LoginDetails, LoginDetailsConstants } from '@telenet/ng-lib-ocapi';

const userDetailsApiPath = '**/ocapi/oauth/userdetails';

const eSimActivationSelector = '[data-testid="e-sim-activation-ready"]';
const qrCodeSelector = '[data-testid="e-sim-activation-qr-code"]';
const backButtonSelector = '[data-testid="step-container-back-button"]';
const proceedButtonSelector = '[data-testid="step-container-proceed-button"]';
const pinIconSelector = '[data-testid="e-sim-activation-pin-icon"]';
const pinValueSelector = '[data-testid="e-sim-activation-pin-value"]';
const pukIconSelector = '[data-testid="e-sim-activation-puk-icon"]';
const pukValueSelector = '[data-testid="e-sim-activation-puk-value"]';

describe('ESim Activation', () => {
  beforeEach(() => {
    initializeUserDetailsInterception({ role: LoginDetailsConstants.MANAGER_ROLE });
    cy.visit('/e-sim-activation?eSimProfileData=qr&pin=1234&puk=123456');
  });

  it('should display qr code and pin & puk code when present', () => {
    cy.get(eSimActivationSelector).should('exist');
    cy.get(qrCodeSelector).should('exist');
    cy.get(pinIconSelector).should('exist');
    cy.get(pinValueSelector).should('exist');
    cy.get(pukIconSelector).should('exist');
    cy.get(pukValueSelector).should('exist');
    cy.get(proceedButtonSelector).should('exist');
    cy.get(backButtonSelector).should('exist');
  });

  it('should redirect to sim management page when clicking corresponding button', () => {
    cy.get(proceedButtonSelector).should('exist');
    cy.get(proceedButtonSelector).click();
    cy.url().should('contain', '/mobile-line-details');
  });
});

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
      role: params.role || 'MANAGER',
    },
  });
}
