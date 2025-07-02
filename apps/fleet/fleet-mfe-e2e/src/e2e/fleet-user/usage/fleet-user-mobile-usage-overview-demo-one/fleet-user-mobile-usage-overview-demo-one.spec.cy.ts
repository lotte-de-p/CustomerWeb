import userDetails from '../../../../fixtures/usage/fleet-user-mobile-usage-overview/open-id/userdetails.json';
import products from '../../../../fixtures/usage/fleet-user-mobile-usage-overview/products/products.json';
import subscriptions_0489214096 from '../../../../fixtures/usage/fleet-user-mobile-usage-overview/products/subscriptions_0489214096.json';
import pendingoperations from '../../../../fixtures/usage/fleet-user-mobile-usage-overview/products/pendingoperations.json';
import usage_0489214096 from '../../../../fixtures/usage/fleet-user-mobile-usage-overview/mobile-service/mobilesubscriptions/0489214096/usages.json';
import SMCM0100 from '../../../../../../../../fixtures/http/fleet/omapi/SMCM0100.json';
import BOYO0015 from '../../../../../../../../fixtures/http/fleet/omapi/BOYO0015.json';
import CLOD0003 from '../../../../../../../../fixtures/http/fleet/omapi/CLOD0003.json';
import VOEU0060 from '../../../../../../../../fixtures/http/fleet/omapi/VOEU0060.json';
import BOYO0040 from '../../../../../../../../fixtures/http/fleet/omapi/BOYO0040.json';
import WORL0010 from '../../../../../../../../fixtures/http/fleet/omapi/WORL0010.json';
import OIKO0102 from '../../../../../../../../fixtures/http/fleet/omapi/OIKO0102.json';
import SPPR0000 from '../../../../../../../../fixtures/http/fleet/omapi/SPPR0000.json';
import BOYO0020 from '../../../../../../../../fixtures/http/fleet/omapi/BOYO0020.json';
import WORL0030 from '../../../../../../../../fixtures/http/fleet/omapi/WORL0030.json';
import BASE0000 from '../../../../../../../../fixtures/http/fleet/omapi/BASE0000.json';
import KING0000 from '../../../../../../../../fixtures/http/fleet/omapi/KING0000.json';
import C5FA0001 from '../../../../../../../../fixtures/http/fleet/omapi/C5FA0001.json';
import BFLC0002 from '../../../../../../../../fixtures/http/fleet/omapi/BFLC0002.json';
import DNUN0025 from '../../../../../../../../fixtures/http/fleet/omapi/DNUN0025.json';
import FDNS0001 from '../../../../../../../../fixtures/http/fleet/omapi/FDNS0001.json';
import VOEF0180 from '../../../../../../../../fixtures/http/fleet/omapi/VOEF0180.json';

describe('Fleet User Mobile Usage Overview Demo One', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/ocapi/oauth/userdetails', { statusCode: 200, body: userDetails });

    cy.intercept(
      'GET',
      '**/ocapi/public/api/fleet-product-service/v1/products?status=ACTIVE,SUSPENDED,ACTIVATION_IN_PROGRESS,DISCONNECTED,DISCONNECTION_IN_PROGRESS',
      {
        statusCode: 200,
        body: products,
      }
    );

    cy.intercept('GET', '**/ocapi/public/api/fleet-product-service/v1/product-subscriptions?producttypes=MOBILE', {
      statusCode: 200,
      body: subscriptions_0489214096,
    });

    cy.intercept('GET', '**/ocapi/public/api/fleet-product-service/v1/products/pendingoperations', {
      statusCode: 200,
      body: pendingoperations,
    });

    cy.intercept('GET', '**/ocapi/public/api/mobile-service/v3/mobilesubscriptions/0489214096/usages', {
      statusCode: 200,
      body: usage_0489214096,
    });

    cy.intercept('GET', '**/omapi/public/product/KING0000', {
      statusCode: 200,
      body: KING0000,
    });

    cy.intercept('GET', '**/omapi/public/product/SMCM0100', {
      statusCode: 200,
      body: SMCM0100,
    });
    cy.intercept('GET', '**/omapi/public/product/BOYO0015', {
      statusCode: 200,
      body: BOYO0015,
    });
    cy.intercept('GET', '**/omapi/public/product/CLOD0003', {
      statusCode: 200,
      body: CLOD0003,
    });
    cy.intercept('GET', '**/omapi/public/product/VOEU0060', {
      statusCode: 200,
      body: VOEU0060,
    });
    cy.intercept('GET', '**/omapi/public/product/BOYO0040', {
      statusCode: 200,
      body: BOYO0040,
    });
    cy.intercept('GET', '**/omapi/public/product/WORL0010', {
      statusCode: 200,
      body: WORL0010,
    });
    cy.intercept('GET', '**/omapi/public/product/OIKO0102', {
      statusCode: 200,
      body: OIKO0102,
    });
    cy.intercept('GET', '**/omapi/public/product/SPPR0000', {
      statusCode: 200,
      body: SPPR0000,
    });
    cy.intercept('GET', '**/omapi/public/product/BOYO0020', {
      statusCode: 200,
      body: BOYO0020,
    });
    cy.intercept('GET', '**/omapi/public/product/WORL0030', {
      statusCode: 200,
      body: WORL0030,
    });
    cy.intercept('GET', '**/omapi/public/product/BASE0000', {
      statusCode: 200,
      body: BASE0000,
    });
    cy.intercept('GET', '**/omapi/public/product/C5FA0001', {
      statusCode: 200,
      body: C5FA0001,
    });
    cy.intercept('GET', '**/omapi/public/product/BFLC0002', {
      statusCode: 200,
      body: BFLC0002,
    });
    cy.intercept('GET', '**/omapi/public/product/DNUN0025', {
      statusCode: 200,
      body: DNUN0025,
    });
    cy.intercept('GET', '**/omapi/public/product/FDNS0001', {
      statusCode: 200,
      body: FDNS0001,
    });
    cy.intercept('GET', '**/omapi/public/product/VOEF0180', {
      statusCode: 200,
      body: VOEF0180,
    });
    cy.intercept('GET', '**/omapi/public/product/BFLC0002', {
      statusCode: 200,
      body: BFLC0002,
    });

    cy.visit('/fleet-user-mobile-usage-overview-demo-one');
  });

  it('On page load, form should be pre-populated with values', (): void => {
    checkIfComponentsExists();
    checkCardLineIdentifier();
    daysForNextBill();
    checkCardConfigUsedAmount();
  });
});

function checkIfComponentsExists(): void {
  cy.get('tg-fleet-user-mobile-usage-overview').should('exist');
  cy.get('app-bundle-card').should('exist');
  cy.get('app-line-view').should('exist');
  cy.get('app-liquid-chart').should('exist');
}

function checkCardLineIdentifier(): void {
  cy.getElement('card-line-identifier').eq(0).should('contain.text', '0489 21 40 96');
}

function daysForNextBill(): void {
  cy.getElement('days-for-next-bill').should('contain.text', '0');
}

function checkCardConfigUsedAmount(): void {
  cy.getElement('config-used-amount').eq(0).should('contain.text', '36 GB');
}
