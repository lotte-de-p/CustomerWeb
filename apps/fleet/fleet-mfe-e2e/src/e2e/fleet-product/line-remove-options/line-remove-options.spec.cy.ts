import userDetails from '../../../fixtures/fleet-line-product-details/userdetails.json';
import productHolding from '../../../fixtures/fleet-line-product-details/0484058561.json';
import eligibleProducts from '../../../fixtures/fleet-line-product-details/eligibleProducts.json';
import submit from '../../../fixtures/fleet-manager/line-remove-options/submit.json';
import BFLC0001 from '../../../../../../../fixtures/http/fleet/omapi/BFLC0001.json';
import BFLC0000 from '../../../../../../../fixtures/http/fleet/omapi/BFLC0000.json';
import MOFL0000 from '../../../../../../../fixtures/http/fleet/omapi/MOFL0000.json';
import BFLE0001 from '../../../../../../../fixtures/http/fleet/omapi/BFLE0001.json';
import FDNS0001 from '../../../../../../../fixtures/http/fleet/omapi/FDNS0001.json';
import FVNM0250 from '../../../../../../../fixtures/http/fleet/omapi/FVNM0250.json';
import BFLS0001 from '../../../../../../../fixtures/http/fleet/omapi/BFLS0001.json';
import products from '../../../fixtures/fleet-manager/line-remove-options/products-post.json';
import TLTT0004 from '../../../../../../../fixtures/http/fleet/omapi/TLTT0004.json';
import FDOP0015 from '../../../../../../../fixtures/http/fleet/omapi/FDOP0015.json';
import INTW0250 from '../../../../../../../fixtures/http/fleet/omapi/INTW0250.json';
import FLOB0010 from '../../../../../../../fixtures/http/fleet/omapi/FLOB0010.json';
import BFLT0001 from '../../../../../../../fixtures/http/fleet/omapi/BFLT0001.json';
import BFLT0005 from '../../../../../../../fixtures/http/fleet/omapi/BFLT0005.json';
import BFLU0001 from '../../../../../../../fixtures/http/fleet/omapi/BFLU0001.json';
import FDDB0006 from '../../../../../../../fixtures/http/fleet/omapi/FDDB0006.json';
import FDTU0025 from '../../../../../../../fixtures/http/fleet/omapi/FDTU0025.json';
import TLTT0019 from '../../../../../../../fixtures/http/fleet/omapi/TLTT0019.json';
import TLTT0001 from '../../../../../../../fixtures/http/fleet/omapi/TLTT0001.json';
import BFLT0006 from '../../../../../../../fixtures/http/fleet/omapi/BFLT0006.json';
import FDATA0004 from '../../../../../../../fixtures/http/fleet/omapi/FDATA0004.json';
import TLTT0010 from '../../../../../../../fixtures/http/fleet/omapi/TLTT0010.json';
import TLTT0003 from '../../../../../../../fixtures/http/fleet/omapi/TLTT0003.json';
import BFLT0002 from '../../../../../../../fixtures/http/fleet/omapi/BFLT0002.json';

describe('Line Remove Options', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/ocapi/oauth/userdetails', { statusCode: 200, body: userDetails });

    cy.intercept('GET', '**/ocapi/public/api/fleet-product-service/v1/products/0484058561', {
      statusCode: 200,
      body: productHolding,
    });

    cy.intercept('GET', '**/omapi/public/product/BFLC0001', {
      statusCode: 200,
      body: BFLC0001,
    });
    cy.intercept('GET', '**/omapi/public/product/BFLC0000', {
      statusCode: 200,
      body: BFLC0000,
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

    cy.intercept('GET', '**/omapi/public/product/TLTT0004', {
      statusCode: 200,
      body: TLTT0004,
    });

    cy.intercept('GET', '**/omapi/public/product/FDOP0015', {
      statusCode: 200,
      body: FDOP0015,
    });

    cy.intercept('GET', '**/omapi/public/product/INTW0250', {
      statusCode: 200,
      body: INTW0250,
    });

    cy.intercept('GET', '**/omapi/public/product/FLOB0010', {
      statusCode: 200,
      body: FLOB0010,
    });

    cy.intercept('GET', '**/omapi/public/product/BFLT0001', {
      statusCode: 200,
      body: BFLT0001,
    });

    cy.intercept('GET', '**/omapi/public/product/BFLT0005', {
      statusCode: 200,
      body: BFLT0005,
    });

    cy.intercept('GET', '**/omapi/public/product/BFLU0001', {
      statusCode: 200,
      body: BFLU0001,
    });

    cy.intercept('GET', '**/omapi/public/product/FDDB0006', {
      statusCode: 200,
      body: FDDB0006,
    });

    cy.intercept('GET', '**/omapi/public/product/FDTU0025', {
      statusCode: 200,
      body: FDTU0025,
    });

    cy.intercept('GET', '**/omapi/public/product/TLTT0019', {
      statusCode: 200,
      body: TLTT0019,
    });

    cy.intercept('GET', '**/omapi/public/product/TLTT0001', {
      statusCode: 200,
      body: TLTT0001,
    });

    cy.intercept('GET', '**/omapi/public/product/BFLT0006', {
      statusCode: 200,
      body: BFLT0006,
    });

    cy.intercept('GET', '**/omapi/public/product/FDATA0004', {
      statusCode: 200,
      body: FDATA0004,
    });

    cy.intercept('GET', '**/omapi/public/product/TLTT0010', {
      statusCode: 200,
      body: TLTT0010,
    });

    cy.intercept('GET', '**/omapi/public/product/TLTT0003', {
      statusCode: 200,
      body: TLTT0003,
    });

    cy.intercept('GET', '**/omapi/public/product/EXSF0002', {
      statusCode: 200,
      body: {},
    });

    cy.intercept('GET', '**/omapi/public/product/BFLT0002', {
      statusCode: 200,
      body: BFLT0002,
    });

    cy.intercept(
      'GET',
      '**/ocapi/public/api/fleet-product-service/v1/products/eligibleproducts?identifier=0484058561',
      {
        statusCode: 200,
        body: eligibleProducts,
      }
    );

    cy.intercept('POST', '**/ocapi/public/api/sales-service/v2/salesorders/9170776469913554118/submit', {
      statusCode: 200,
      body: submit,
    }).as('submit');

    cy.intercept('POST', '**/ocapi/public/api/sales-service/v2/products', {
      statusCode: 200,
      body: products,
    }).as('products');

    cy.visit('/fleet-manager-line-product-details-demo?msisdn=0484058561');
    openRemoveOptions();
  });

  it('On page load, check options', (): void => {
    cy.getElement('option-category').eq(0).should('contain.text', 'World Data');
    cy.getElement('option-category').eq(0).click();
    cy.getElement('available-option').eq(2).should('contain.text', '2 GB');
    cy.getElement('available-option').eq(2).should('have.class', 'available');

    cy.getElement('previously-added-option').eq(0).should('contain.text', 'Data OPEC');
    cy.getElement('previously-added-option').eq(0).should('contain.text', '1.5 GB');
  });

  it('when on the remove options wizard then the manager can remove an option from the plan', () => {
    cy.getElement('option-category').eq(0).click();
    cy.getElement('available-option').eq(2).click();

    cy.getElement('removed-option').eq(0).should('contain.text', 'World Data');
    cy.getElement('removed-option').eq(0).should('contain.text', '2 GB');

    cy.getElement('previously-added-option').eq(0).should('contain.text', 'Data OPEC');
    cy.getElement('previously-added-option').eq(0).should('contain.text', '1.5 GB');
  });

  it('when on the remove options wizard then the manager can not select an option that is not in the plan', () => {
    cy.getElement('option-category').eq(0).click();
    cy.getElement('available-option').eq(1).should('be.disabled');

    cy.getElement('removed-option').should('not.exist');

    cy.getElement('previously-added-option').eq(0).should('contain.text', 'Data OPEC');
    cy.getElement('previously-added-option').eq(0).should('contain.text', '1.5 GB');
  });

  it('when on the remove options wizard then the manager can not select an option that is not in the plan', () => {
    cy.getElement('option-category').eq(0).click();
    cy.getElement('available-option').eq(1).should('be.disabled');

    cy.getElement('removed-option').should('not.exist');

    cy.getElement('previously-added-option').eq(0).should('contain.text', 'Data OPEC');
    cy.getElement('previously-added-option').eq(0).should('contain.text', '1.5 GB');
  });

  it('when on the remove options wizard then the manager can remove the options', () => {
    cy.getElement('option-category').eq(0).click();
    cy.getElement('available-option').eq(2).click();

    cy.getElement('primary-btn').click();

    cy.getElement('confirmation-screen').should('be.visible');
    cy.getElement('warning-primary-btn').click();

    cy.wait('@submit');
    cy.wait('@products');
  });
});

function openRemoveOptions(): void {
  cy.getElement('remove-options-link').click();
  cy.getElement('remove-options').should('exist');
}
