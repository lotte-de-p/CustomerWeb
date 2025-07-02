import userDetails from '../../../fixtures/fleet-line-product-details/userdetails.json';
import products from '../../../fixtures/fleet-line-add-options/products.json';
import eligibleProducts from '../../../fixtures/fleet-line-product-details/eligibleProducts.json';
import productHolding from '../../../fixtures/fleet-line-product-details/0484058561.json';
import submit from '../../../fixtures/fleet-line-add-options/submit.json';
import BFLC0001 from '../../../../../../../fixtures/http/fleet/omapi/BFLC0001.json';
import BFLC0000 from '../../../../../../../fixtures/http/fleet/omapi/BFLC0000.json';
import MOFL0000 from '../../../../../../../fixtures/http/fleet/omapi/MOFL0000.json';
import BFLE0001 from '../../../../../../../fixtures/http/fleet/omapi/BFLE0001.json';
import FDNS0001 from '../../../../../../../fixtures/http/fleet/omapi/FDNS0001.json';
import FVNM0250 from '../../../../../../../fixtures/http/fleet/omapi/FVNM0250.json';
import BFLS0001 from '../../../../../../../fixtures/http/fleet/omapi/BFLS0001.json';
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
import VOEF0180 from '../../../../../../../fixtures/http/fleet/omapi/VOEF0180.json';
import FLOB0005 from '../../../../../../../fixtures/http/fleet/omapi/FLOB0005.json';
import BFLT0002 from '../../../../../../../fixtures/http/fleet/omapi/BFLT0002.json';

describe('Line Add Options', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/ocapi/oauth/userdetails', { statusCode: 200, body: userDetails });

    cy.intercept('GET', '**/ocapi/public/api/fleet-product-service/v1/products/0484058561', {
      statusCode: 200,
      body: productHolding,
    });

    cy.intercept(
      'GET',
      '**/ocapi/public/api/fleet-product-service/v1/products/eligibleproducts?identifier=0484058561',
      {
        statusCode: 200,
        body: eligibleProducts,
      }
    );
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
    }).as('FLOB0010');

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

    cy.intercept('GET', '**/omapi/public/product/BFLT0002', {
      statusCode: 200,
      body: BFLT0002,
    });

    cy.intercept('GET', '**/omapi/public/product/EXSF0002', {
      statusCode: 200,
      body: {},
    });

    cy.intercept('GET', '**/omapi/public/product/VOEF0180', {
      statusCode: 200,
      body: VOEF0180,
    });

    cy.intercept('GET', '**/omapi/public/product/FLOB0005', {
      statusCode: 200,
      body: FLOB0005,
    });

    cy.intercept('POST', '**/ocapi/public/api/sales-service/v2/salesorders/9166671059613918354/submit', {
      statusCode: 200,
      body: submit,
    }).as('submit');

    cy.intercept('POST', '**/ocapi/public/api/sales-service/v2/products', {
      statusCode: 200,
      body: products,
    }).as('products');

    cy.visit('/fleet-manager-line-product-details-demo?msisdn=0484058561');
    openAddOptions();
  });

  it('AC 2: Fleet Manager opens the add options wizard when fleet manager he sees an option that is already in his sim line he can not add this option again ', (): void => {
    cy.getElement('available-option-category').contains('World Data').click();
    cy.getElement('available-option').eq(2).should('have.class', 'previously-added');
    cy.getElement('available-option').eq(2).should('be.disabled');
  });

  it('AC 3: Fleet Manager opens the add options wizard when fleet manager tried to add multiple options from the same cateogry only one is allowed ', (): void => {
    cy.getElement('available-option-category').first().click();
    cy.getElement('available-option').first().should('have.class', 'available');
    cy.getElement('available-option').first().click();
    cy.getElement('available-option').first().should('not.have.class', 'available');
    cy.getElement('available-option').eq(1).should('have.class', 'available');
    cy.getElement('available-option').eq(1).click();
    cy.getElement('available-option').eq(1).should('not.have.class', 'available');
    cy.getElement('available-option').first().should('have.class', 'available');
  });

  it('AC 4: Fleet Manager adds an option in the wizard when he did not have another option from this category before then the added option is shown under the subtitle Added ', (): void => {
    cy.getElement('new-options').should('not.be.visible');
    cy.getElement('available-option-category').eq(1).click();
    cy.getElement('available-option-category')
      .eq(1)
      .within(() => {
        cy.getElement('available-option').first().click();
      });

    cy.getElement('new-options').should('be.visible');
    cy.getElement('added-option').first().should('contain.text', 'World Data WG500 MB++');
  });

  it('AC 5: Fleet Manager adds an option in the wizard when he already had an option in this category before then the added option is shown under the subtitle Updated ', (): void => {
    cy.getElement('new-options').should('not.be.visible');
    cy.getElement('available-option-category').first().click();
    cy.getElement('available-option-category')
      .first()
      .within(() => {
        cy.getElement('available-option').first().click();
      });

    cy.getElement('upgraded-options').should('be.visible');
    cy.getElement('upgraded-option').first().should('contain.text', 'World Data500 MB');
  });

  // TODO: implement after fixing the bug
  it.skip('AC 6: Fleet Manager added  options in the wizard when he clicks on undo changes then added options are unselected again ', (): void => {
    cy.getElement('available-option-category').first().click();
    cy.getElement('available-option-category')
      .first()
      .within(() => {
        cy.getElement('available-option').first().click();
      });

    cy.getElement('upgraded-options').should('be.visible');
    cy.getElement('upgraded-option').first().should('contain.text', 'World Data500 MB');
  });

  it('AC 7: Fleet Manager added  options in the wizard when he clicks on undo changes then the options are removed from the overview ', (): void => {
    cy.getElement('available-option-category').first().click();
    cy.getElement('available-option-category')
      .first()
      .within(() => {
        cy.getElement('available-option').first().click();
      });

    cy.getElement('upgraded-options').should('be.visible');
    cy.getElement('upgraded-option').first().should('contain.text', 'World Data500 MB');
    cy.getElement('revert-changes').should('not.be.disabled');
    cy.getElement('revert-changes').eq(1).click();

    cy.getElement('upgraded-options').should('not.be.visible');
  });

  it('AC 8: Fleet Manager adds an option in the wizard when he saves his changes then the options  that are selected are in his SIM Line ', (): void => {
    cy.getElement('available-option-category').eq(1).click();
    cy.getElement('available-option-category')
      .eq(1)
      .within(() => {
        cy.getElement('available-option').eq(1).click();
      });

    cy.getElement('new-options').should('be.visible');
    cy.getElement('added-option').first().should('contain.text', 'World Data WG1 GB');
    cy.getElement('confirm-changes').eq(1).click();

    cy.getElement('confirmation-screen').should('be.visible');
    cy.getElement('confirm-add-option').click();

    cy.wait('@submit');
    cy.wait('@products');

    cy.getElement('app-message-flow').should('be.visible');
    cy.getElement('app-message-flow').should('have.class', 'notification--success');
  });

  it('AC 9: Fleet Manager adds an option in the wizard when he saves his changes then he changes his mind and cancels it the manager is redirected to the wizard again ', (): void => {
    cy.getElement('available-option-category').eq(1).click();
    cy.getElement('available-option-category')
      .eq(1)
      .within(() => {
        cy.getElement('available-option').eq(1).click();
      });

    cy.getElement('new-options').should('be.visible');
    cy.getElement('added-option').first().should('contain.text', 'World Data WG1 GB');
    cy.getElement('confirm-changes').eq(1).click();

    cy.getElement('confirmation-screen').should('be.visible');
    cy.getElement('cancel-add-option').click();

    cy.getElement('new-options').should('be.visible');
    cy.getElement('added-option').first().should('contain.text', 'World Data WG1 GB');
  });
});

function openAddOptions(): void {
  cy.getElement('add-options-link').click();
  cy.getElement('add-options').should('exist');
}
