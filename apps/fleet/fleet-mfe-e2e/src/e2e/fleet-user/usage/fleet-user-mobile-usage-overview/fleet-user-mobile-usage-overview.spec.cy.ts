import userDetails from '../../../../fixtures/fleet-product-overview/open-id/userdetails.json';
import products from '../../../../fixtures/usage/fleet-user-mobile-usage-overview/products/products.json';
import subscriptions from '../../../../fixtures/usage/fleet-user-mobile-usage-overview/products/subscriptions.json';
import pendingoperations from '../../../../fixtures/usage/fleet-user-mobile-usage-overview/products/pendingoperations.json';
import usages from '../../../../fixtures/usage/fleet-user-mobile-usage-overview/mobile-service/mobilesubscriptions/015373104/usages.json';
import KING0000 from '../../../../../../../../fixtures/http/fleet/omapi/KING0000.json';
import FREU0000 from '../../../../../../../../fixtures/http/fleet/omapi/FREU0000.json';
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
import C5FA0001 from '../../../../../../../../fixtures/http/fleet/omapi/C5FA0001.json';

describe('Fleet User Mobile Usage Overview', () => {
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
      body: subscriptions,
    });

    cy.intercept('GET', '**/ocapi/public/api/fleet-product-service/v1/products/pendingoperations', {
      statusCode: 200,
      body: pendingoperations,
    });

    cy.intercept('GET', '**/ocapi/public/api/mobile-service/v3/mobilesubscriptions/015373104/usages', {
      statusCode: 200,
      body: usages,
    });

    cy.intercept('GET', '**/omapi/public/product/KING0000', {
      statusCode: 200,
      body: KING0000,
    });
    cy.intercept('GET', '**/omapi/public/product/FREU0000', {
      statusCode: 200,
      body: FREU0000,
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

    cy.visit('/fleet-user-mobile-usage-overview?includeMobileLineSelector=true');
  });

  it('On page load, form should be pre-populated with values', (): void => {
    checkIfComponentsExists();
    checkCardConfigName();
    checkCardConfigUsedAmount();
    daysForNextBill();
    usageTypeLabel();
    usedAndStartAmount();
  });
});

function checkIfComponentsExists(): void {
  cy.get('tg-fleet-user-mobile-usage-overview').should('exist');
  cy.get('app-usage-blob').should('exist');
  cy.get('app-consumption-data').should('exist');
  cy.get('app-liquid-chart').should('exist');
}

function checkCardConfigName(): void {
  cy.getElement('card-config-name').eq(0).should('contain.text', 'Unlimited Internet');
}

function checkCardConfigUsedAmount(): void {
  cy.getElement('config-used-amount').eq(0).should('contain.text', '0,72 GB');
}

function daysForNextBill(): void {
  cy.getElement('days-for-next-bill').should('contain.text', '0');
}

function usageTypeLabel(): void {
  cy.getElement('usage-type-label').eq(1).should('contain.text', 'Unlimited Internet');
}

function usedAndStartAmount(): void {
  cy.getElement('used-and-start-amount').eq(1).should('contain.text', '7.28 GB  / 8 GB');
}
