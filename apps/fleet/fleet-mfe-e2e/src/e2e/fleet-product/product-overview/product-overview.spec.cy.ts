import userDetails from '../../../fixtures/fleet-product-overview/open-id/userdetails.json';
import products from '../../../fixtures/fleet-product-overview/products/products.json';
import identity from '../../../fixtures/fleet-product-overview/identities/identity-19012995.json';
import BFLC0001 from '../../../../../../../fixtures/http/fleet/omapi/BFLC0001.json';
import MOFL0000 from '../../../../../../../fixtures/http/fleet/omapi/MOFL0000.json';
import BFLE0001 from '../../../../../../../fixtures/http/fleet/omapi/BFLE0001.json';
import FDNS0001 from '../../../../../../../fixtures/http/fleet/omapi/FDNS0001.json';
import FVNM0250 from '../../../../../../../fixtures/http/fleet/omapi/FVNM0250.json';
import BFLS0001 from '../../../../../../../fixtures/http/fleet/omapi/BFLS0001.json';

describe('Product Overview', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/ocapi/oauth/userdetails', { statusCode: 200, body: userDetails });

    cy.intercept(
      'GET',
      '**/ocapi/public/api/fleet-product-service/v1/products?status=ACTIVE,SUSPENDED,ACTIVATION_IN_PROGRESS,DISCONNECTION_IN_PROGRESS,DISCONNECTION_PASSED_PONR,DISCONNECTED',
      {
        statusCode: 200,
        body: products,
      }
    );

    cy.intercept('GET', '**/ocapi/public/api/fleet-customer-service/v1/identities/19012995', {
      statusCode: 200,
      body: identity,
    });

    cy.intercept('GET', '**/omapi/public/product/BFLC0001', {
      statusCode: 200,
      body: BFLC0001,
    });
    cy.intercept('GET', '**/omapi/public/product/MOFL0000', {
      statusCode: 200,
      body: MOFL0000,
    });
    cy.intercept('GET', '**/omapi/public/product/BFLE0001', {
      statusCode: 200,
      body: BFLE0001,
    });
    cy.intercept('GET', '**/omapi/public/product/FDNS0001', {
      statusCode: 200,
      body: FDNS0001,
    });
    cy.intercept('GET', '**/omapi/public/product/FVNM0250', {
      statusCode: 200,
      body: FVNM0250,
    });
    cy.intercept('GET', '**/omapi/public/product/BFLS0001', {
      statusCode: 200,
      body: BFLS0001,
    });

    cy.intercept('GET', '**/ocapi/public/api/fleet-customer-service/v1/identities/19012995', {
      statusCode: 200,
      body: identity,
    });

    cy.visit('/product-overview');
  });

  it('On page load, form should be pre-populated with values', (): void => {
    checkIfComponentsExists();
    checkSuspendedPlanNotification();
    checkProductInfoLabel();
    checkIconSimTypeESim();
    checkIconSimTypePhysicalSim();
    checkSimCardNumber();
    checkPukCode();
    checkLabelForSuspendedProduct();
  });

  it('On click of more details section', (): void => {
    clickDropdown();
    checkIfProductSpecificationComponentsExists();
    checkSpecificationName();
    checkSpecificationValue();
    checkExtraOptionLabel();
    checkExtraOptionSpecification();
  });
});

function checkIfComponentsExists(): void {
  cy.get('tg-product-overview').should('exist');
  cy.get('tg-product-notifications').should('exist');
  cy.get('tg-product-standalone').should('exist');
  cy.get('tg-product-specifications').should('exist');
}

function checkIfProductSpecificationComponentsExists(): void {
  cy.get('tg-product-specifications').should('exist');
  cy.get('tg-product-level-specifications').should('exist');
  cy.get('tg-product-extra-options').should('exist');
  cy.get('tg-product-options-specifications').should('exist');
}

function checkProductInfoLabel(): void {
  cy.getElement('labelKey').eq(0).should('contain.text', 'Mobile 1');
}

function checkIconSimTypeESim(): void {
  cy.getElement('eSimType').eq(0).should('have.class', 'icon-sim-esim');
}

function checkIconSimTypePhysicalSim(): void {
  cy.getElement('physicalSimType').eq(0).should('have.class', 'icon-sim-card');
}

function checkSimCardNumber(): void {
  cy.getElement('simCardNumber').eq(0).should('contain.text', '8932030526001029366');
}

function checkPukCode(): void {
  cy.getElement('pukCode').eq(0).should('contain.text', '51092057');
}

function checkSpecificationName(): void {
  cy.getElement('specificationName').eq(0).should('contain.text', 'colleagues');
}

function checkSpecificationValue(): void {
  cy.getElement('specificationValue').eq(0).should('contain.text', 'ng.product-overview.lbl.unlimited');
}

function checkExtraOptionLabel(): void {
  cy.getElement('extraOptionLabel').eq(1).should('contain.text', 'Voice National 250 min');
}

function checkExtraOptionSpecification(): void {
  cy.getElement('optionSpecifications')
    .eq(0)
    .should('contain.text', '250 minutes calling to all numbers in Belgium (also valid in the EU zone)');
}

function checkLabelForSuspendedProduct(): void {
  cy.getElement('productSuspended').eq(0).should('contain.text', 'ng.product-overview.lbl.status-suspended');
}

function checkSuspendedPlanNotification(): void {
  cy.getElement('suspendedPlanNotification').eq(0).should('contain.text', 'ng.product-overview.lbl.suspended-plan');
}

function clickDropdown(): void {
  cy.getElement('dropdown').eq(0).click();
}
