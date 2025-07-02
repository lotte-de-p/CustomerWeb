import noSubscriptions from '../fixtures/dtv/no-subscriptions.json';
import subscriptions from '../fixtures/dtv/subscriptions.json';
import subscriptionsNoBoxes from '../fixtures/dtv/subscriptions-no-boxes.json';

const SECURITY_CODE_NOTIFICATION = '[data-cy="dtv-box-show-security-code"]';
const DTV_BOX_OVERVIEW = '[data-cy="dtv-box-overview"]';
const DTV_BOX_OVERVIEW_DETAILS = '[data-cy="dtv-boxes-overview-details"]';
const DTV_BOX_DETAIL_ROW = '[data-cy="dtv-box-detail-row"]';
const DTV_BOX_DETAIL_IMAGE = '[data-cy="dtv-box-detail-type-image"]';
const DTV_BOX_DETAIL_TYPE = '[data-cy="dtv-box-detail-type-name"]';
const DTV_BOX_DETAIL_SALE_TYPE = '[data-cy="dtv-box-detail-sale-type"]';
const DTV_BOX_DETAIL_MAC_ADDRESS = '[data-cy="dtv-box-detail-mac-address"]';
const DTV_BOX_DETAIL_SERIAL_NUMBER = '[data-cy="dtv-box-detail-serial-number"]';
const FIRST_DECODER = '@firstDecoder';
const RESET_PIN_NOTIFICATION = '[data-cy="dtv-box-reset-pin-notification"]';
const ADDRESS_SELECTOR = '@addressSelector';
const RESET_PIN_BUTTON = '[data-cy="dtv-box-reset-pin-code-button"]';
const HAVE_LENGTH = 'have.length';
const NO_SUBSCRIPTION_NOTIFICATION = '[data-cy="dtv-box-no-subscription-notification"]';
const NO_BOXES_NOTIFICATION = '[data-cy="dtv-box-no-boxes-notification"]';
const NOTIFICATION_INFO = 'notification--info';

function mockSubscriptionsAndCallPage(subscriptions: object) {
  cy.intercept('GET', '**/subscriptions', {
    statusCode: 200,
    body: subscriptions,
  }).as('subscriptionCall');
  cy.visit('/iframe.html?path=/story/dtv-box-management-overview--primary');
  cy.wait('@subscriptionCall');
}

describe('Dtv Box Management Overview', () => {
  beforeEach(() => {
    mockSubscriptionsAndCallPage(subscriptions);
  });

  it('should display the component and have all the details in the box', () => {
    cy.get(DTV_BOX_OVERVIEW).should('exist');
    cy.get(DTV_BOX_OVERVIEW_DETAILS).find(DTV_BOX_DETAIL_ROW).should(HAVE_LENGTH, 4);
    cy.get(DTV_BOX_OVERVIEW_DETAILS).first().as('firstDecoder');

    cy.get(FIRST_DECODER).within(() => {
      cy.get(DTV_BOX_DETAIL_ROW).should('exist');
      cy.get(DTV_BOX_DETAIL_IMAGE).should('exist');
      cy.get(DTV_BOX_DETAIL_TYPE).should('exist');
      cy.get(DTV_BOX_DETAIL_SALE_TYPE).should('exist');
      cy.get(DTV_BOX_DETAIL_MAC_ADDRESS).should('exist');
      cy.get(DTV_BOX_DETAIL_SERIAL_NUMBER).should('exist');
    });
  });

  it('should display the security code notification when reset pin button is clicked for SIPADAN', () => {
    cy.get(RESET_PIN_BUTTON).should('exist');
    cy.get(RESET_PIN_BUTTON).first().click();

    cy.get(SECURITY_CODE_NOTIFICATION).should('exist');
    cy.get(SECURITY_CODE_NOTIFICATION).parent().should('have.class', NOTIFICATION_INFO);
  });

  it('should display the reset pin success message when reset pin button is clicked for EOS', () => {
    cy.get('[data-cy="address-selector"]').should('exist').as('addressSelector');
    cy.get(ADDRESS_SELECTOR).click();

    cy.get('[data-cy="address-selector-list"]').find('li').should('have.length', 3).as('addressSelectorList');
    cy.get('@addressSelectorList').last().click();

    cy.get(RESET_PIN_BUTTON).should('exist');
    cy.get(RESET_PIN_BUTTON).click();

    cy.get(RESET_PIN_NOTIFICATION).should('exist');
    cy.get(RESET_PIN_NOTIFICATION).parent().should('have.class', 'notification--success');
  });
});

describe('Dtv Box Management Overview - no subscriptions', () => {
  beforeEach(() => {
    mockSubscriptionsAndCallPage(noSubscriptions);
  });

  it('should display the notification for no subscriptions', () => {
    cy.get(DTV_BOX_OVERVIEW).should('exist');
    cy.get(NO_SUBSCRIPTION_NOTIFICATION).should('exist');
    cy.get(NO_SUBSCRIPTION_NOTIFICATION).parent().should('have.class', NOTIFICATION_INFO);
  });
});

describe('Dtv Box Management Overview - subscriptions with no boxes', () => {
  beforeEach(() => {
    mockSubscriptionsAndCallPage(subscriptionsNoBoxes);
  });

  it('should display the notification for no boxes', () => {
    cy.get(DTV_BOX_OVERVIEW).should('exist');
    cy.get(NO_BOXES_NOTIFICATION).should('exist');
    cy.get(NO_BOXES_NOTIFICATION).parent().should('have.class', NOTIFICATION_INFO);
  });
});
