import userDetails from '../../../fixtures/fleet-line-product-details/userdetails.json';
import eligibleProducts from '../../../fixtures/fleet-manager/line-change-tariff-plan/eligibleProducts.json';
import productHolding from '../../../fixtures/fleet-manager/line-change-tariff-plan/0487523810.json';
import products from '../../../fixtures/fleet-manager/line-change-tariff-plan/sales-order.json';
import productDisconnectedOptions from '../../../fixtures/fleet-manager/line-change-tariff-plan/sales-order-disconnected-options.json';
import modifyProductsPayload from '../../../fixtures/fleet-manager/line-change-tariff-plan/modify-products-payload.json';
import submit from '../../../fixtures/fleet-manager/line-change-tariff-plan/submit.json';
import BFLU0001 from '../../../../../../../fixtures/http/fleet/omapi/BFLU0001.json';
import BFLT0001 from '../../../../../../../fixtures/http/fleet/omapi/BFLT0001.json';
import BFLT0006 from '../../../../../../../fixtures/http/fleet/omapi/BFLT0006.json';
import BFLC0000 from '../../../../../../../fixtures/http/fleet/omapi/BFLC0000.json';
import BFLT0005 from '../../../../../../../fixtures/http/fleet/omapi/BFLT0005.json';
import BFLS0001 from '../../../../../../../fixtures/http/fleet/omapi/BFLS0001.json';
import BFLE0001 from '../../../../../../../fixtures/http/fleet/omapi/BFLE0001.json';
import FDATA0004 from '../../../../../../../fixtures/http/fleet/omapi/FDATA0004.json';
import FLOB0005 from '../../../../../../../fixtures/http/fleet/omapi/FLOB0005.json';
import TLTT0004 from '../../../../../../../fixtures/http/fleet/omapi/TLTT0004.json';
import BFLC0001 from '../../../../../../../fixtures/http/fleet/omapi/BFLC0001.json';
import FDOP0015 from '../../../../../../../fixtures/http/fleet/omapi/FDOP0015.json';
import BFLT0002 from '../../../../../../../fixtures/http/fleet/omapi/BFLT0002.json';
import FDDB0006 from '../../../../../../../fixtures/http/fleet/omapi/FDDB0006.json';
import FDTU0025 from '../../../../../../../fixtures/http/fleet/omapi/FDTU0025.json';
import FLOB0010 from '../../../../../../../fixtures/http/fleet/omapi/FLOB0010.json';
import INTW0250 from '../../../../../../../fixtures/http/fleet/omapi/INTW0250.json';
import TLLT0001 from '../../../../../../../fixtures/http/fleet/omapi/TLTT0001.json';
import TLTT0003 from '../../../../../../../fixtures/http/fleet/omapi/TLTT0003.json';
import TLTT0010 from '../../../../../../../fixtures/http/fleet/omapi/TLTT0010.json';
import TLTT0019 from '../../../../../../../fixtures/http/fleet/omapi/TLTT0019.json';
import MOFL0000 from '../../../../../../../fixtures/http/fleet/omapi/MOFL0000.json';
import FVNM0250 from '../../../../../../../fixtures/http/fleet/omapi/FVNM0250.json';
import VOEF0180 from '../../../fixtures/fleet-user/line-change-tariff-plan/VOEF0180.json';
import FDNS0001 from '../../../fixtures/fleet-user/line-change-tariff-plan/FDNS0001.json';

describe('Line Change Tariff Plan', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/ocapi/oauth/userdetails', { statusCode: 200, body: userDetails });

    cy.intercept('GET', '**/ocapi/public/api/fleet-product-service/v1/products/0487523810', {
      statusCode: 200,
      body: productHolding,
    });

    cy.intercept(
      'GET',
      '**/ocapi/public/api/fleet-product-service/v1/products/eligibleproducts?identifier=0487523810',
      {
        statusCode: 200,
        body: eligibleProducts,
      }
    ).as('eligibleProducts');

    cy.intercept('GET', '**/omapi/public/product/VOEF0180', {
      statusCode: 200,
      body: VOEF0180,
    });

    cy.intercept('GET', '**/omapi/public/product/FDNS0001', {
      statusCode: 200,
      body: FDNS0001,
    });

    cy.intercept('GET', '**/omapi/public/product/TLTT0004', {
      statusCode: 200,
      body: TLTT0004,
    });
    cy.intercept('GET', '**/omapi/public/product/FDOP0015', {
      statusCode: 200,
      body: FDOP0015,
    });
    cy.intercept('GET', '**/omapi/public/product/BFLC0001', {
      statusCode: 200,
      body: BFLC0001,
    });

    cy.intercept('GET', '**/omapi/public/product/BFLU0001', {
      statusCode: 200,
      body: BFLU0001,
    });
    cy.intercept('GET', '**/omapi/public/product/BFLT0001', {
      statusCode: 200,
      body: BFLT0001,
    });
    cy.intercept('GET', '**/omapi/public/product/BFLT0006', {
      statusCode: 200,
      body: BFLT0006,
    });
    cy.intercept('GET', '**/omapi/public/product/BFLC0000', {
      statusCode: 200,
      body: BFLC0000,
    });

    cy.intercept('GET', '**/omapi/public/product/BFLT0005', {
      statusCode: 200,
      body: BFLT0005,
    });
    cy.intercept('GET', '**/omapi/public/product/FDATA0004', {
      statusCode: 200,
      body: FDATA0004,
    });
    cy.intercept('GET', '**/omapi/public/product/BFLS0001', {
      statusCode: 200,
      body: BFLS0001,
    });

    cy.intercept('GET', '**/omapi/public/product/BFLE0001', {
      statusCode: 200,
      body: BFLE0001,
    }).as('BFLE0001');

    cy.intercept('GET', '**/omapi/public/product/FLOB0005', {
      statusCode: 200,
      body: FLOB0005,
    });

    cy.intercept('GET', '**/omapi/public/product/BFLT0002', {
      statusCode: 200,
      body: BFLT0002,
    });

    cy.intercept('GET', '**/omapi/public/product/FDDB0006', {
      statusCode: 200,
      body: FDDB0006,
    });

    cy.intercept('GET', '**/omapi/public/product/FDTU0025', {
      statusCode: 200,
      body: FDTU0025,
    });

    cy.intercept('GET', '**/omapi/public/product/FLOB0010', {
      statusCode: 200,
      body: FLOB0010,
    });

    cy.intercept('GET', '**/omapi/public/product/INTW0250', {
      statusCode: 200,
      body: INTW0250,
    });

    cy.intercept('GET', '**/omapi/public/product/TLTT0001', {
      statusCode: 200,
      body: TLLT0001,
    });

    cy.intercept('GET', '**/omapi/public/product/TLTT0003', {
      statusCode: 200,
      body: TLTT0003,
    });

    cy.intercept('GET', '**/omapi/public/product/TLTT0010', {
      statusCode: 200,
      body: TLTT0010,
    });

    cy.intercept('GET', '**/omapi/public/product/TLTT0019', {
      statusCode: 200,
      body: TLTT0019,
    });

    cy.intercept('GET', '**/omapi/public/product/MOFL0000', {
      statusCode: 200,
      body: MOFL0000,
    });

    cy.intercept('GET', '**/omapi/public/product/FVNM0250', {
      statusCode: 200,
      body: FVNM0250,
    });

    cy.intercept('POST', '**/ocapi/public/api/sales-service/v2/salesorders/9166671059613918354/submit', {
      statusCode: 200,
      body: submit,
    }).as('submit');

    cy.intercept('POST', '**/ocapi/public/api/sales-service/v2/products', {
      statusCode: 200,
      body: products,
    }).as('products');

    cy.visit('/fleet-manager-line-product-details-demo?msisdn=0487523810');
    cy.getElement('change-tariff-plan-link').click();
  });

  it('AC 1: Fleet Manager goes to products detail page when line change tariff plan is selected then the change tariff plan wizard is opened', (): void => {
    cy.getElement('line-change-tariff-plan').should('be.visible');
  });

  it('AC 2: Fleet Manager opens the change tariff plan wizard then the previous tariff plan is shown and is not available in the options list', (): void => {
    cy.getElement('line-change-tariff-plan').should('be.visible');
    cy.getElement('available-options').should('be.visible');
    cy.getElement('mobile-plan-option').should('not.contain.text', 'Mobile 1');
    cy.getElement('previous-tariff').should('have.text', 'Mobile Start +');
  });

  it('AC 3: Fleet Manager opens the change tariff plan wizard when fleet manager switches the mobile plan the new plan is visible ', (): void => {
    cy.getElement('mobile-plan-option').first().should('have.text', 'Fast');
    cy.getElement('mobile-plan-option').first().click();
    cy.getElement('previous-tariff').should('have.text', 'Mobile Start +');

    cy.getElement('new-tariff').should('have.text', 'Fast');
  });

  it('AC 4.1: Fleet Manager chooses a tariff plan in the wizard when he chooses another one then the newest chosen tariff plan will be shown ', (): void => {
    cy.getElement('mobile-plan-option').first().should('have.text', 'Fast');
    cy.getElement('mobile-plan-option').first().click();
    cy.getElement('new-tariff').should('have.text', 'Fast');
    cy.getElement('mobile-plan-option').eq(1).click();
    cy.getElement('new-tariff').should('have.text', 'Mobile Unlimited');
  });

  it('AC 4.2: Fleet Manager chooses a tariff plan in the wizard when he chooses the same one then the new tariff plan is removed', (): void => {
    cy.getElement('mobile-plan-option').first().should('have.text', 'Fast');
    cy.getElement('mobile-plan-option').first().click();
    cy.getElement('new-tariff').should('have.text', 'Fast');
    cy.getElement('mobile-plan-option').first().click();
    cy.getElement('new-tariff').should('not.exist');
  });

  it('AC 6: Fleet Manager chose a tariff plan in the wizard when he clicks on undo changes then tariff plan is unselected again ', (): void => {
    cy.getElement('mobile-plan-option').first().should('contain.text', 'Fast');
    cy.getElement('mobile-plan-option').first().click();
    cy.getElement('mobile-plan-option').first().should('not.have.class', 'available');
    cy.getElement('new-tariff').should('contain.text', 'Fast');
    cy.getElement('secondary-btn').first().click();

    cy.getElement('mobile-plan-option').first().should('have.class', 'available');
    cy.getElement('new-tariff').should('not.exist');
  });

  it('AC 8: Fleet Manager changes tariff plan in the wizard when he saves his changes then tariff plan is changed', (): void => {
    cy.getElement('mobile-plan-option').eq(1).click();

    cy.getElement('new-tariff').should('be.visible');
    cy.getElement('new-tariff').should('contain.text', 'Mobile Unlimited');
    cy.getElement('primary-btn').click();

    cy.wait('@products').then((interception) => {
      expect(interception.request.body).to.deep.equal(modifyProductsPayload);
    });
    cy.wait('@submit');

    cy.getElement('result-screen').should('be.visible');
    cy.getElement('result-screen-back-to-overview-link').should('be.visible');
    cy.getElement('app-message-flow').should('be.visible');
    cy.getElement('app-message-flow').should('have.class', 'notification--success');
  });

  it('AC 11: Fleet Manager opens the change tariff plan wizard then the options of the previous plan are shown', (): void => {
    cy.getElement('tariff-plan-option').first().should('have.text', 'World Data 500 MB500 MB');
    cy.getElement('tariff-plan-option').eq(1).should('have.text', 'Data Top 24 250 MB250 MB');
    cy.getElement('disconnected-tariff-plan-options').should('not.exist');
  });

  describe('Disconnected options', () => {
    beforeEach(() => {
      cy.intercept('POST', '**/ocapi/public/api/sales-service/v2/products', {
        statusCode: 200,
        body: productDisconnectedOptions,
      }).as('products');
    });

    it('Fleet User changes his tariff plan disconnected options will be shown of the previous tariff plan if present', (): void => {
      cy.getElement('mobile-plan-option').eq(1).click();

      cy.getElement('new-tariff').should('be.visible');

      cy.getElement('disconnected-tariff-plan-option').should('exist');
      cy.getElement('disconnected-tariff-plan-option').first().should('have.text', 'Data Top 24 250 MB250 MB');
    });
    it('Fleet User has disconnected options after changing the tariff plan when saving the changes then the warning message is shown with the amount of disconnected options', (): void => {
      cy.getElement('mobile-plan-option').eq(1).click();

      cy.getElement('new-tariff').should('be.visible');
      cy.getElement('disconnected-tariff-plan-option').should('exist');

      cy.getElement('primary-btn').click();

      cy.getElement('confirmation-screen').should('be.visible');
      cy.getElement('warning-title').should('be.visible');

      cy.getElement('warning-primary-btn').click();
      cy.wait('@submit');

      cy.getElement('confirmation-screen').should('not.exist');
      cy.getElement('line-change-tariff-plan').should('be.visible');
    });

    it('Fleet User has disconnected options after changing the tariff plan when saving the changes and the user changes his mind then the confirmation screen is closed', (): void => {
      cy.intercept(
        'POST',
        '**/ocapi/public/api/sales-service/v2/salesorders/9166671059613918354/submit',
        cy.spy().as('submitSpy')
      );
      cy.getElement('mobile-plan-option').eq(1).click();

      cy.getElement('new-tariff').should('be.visible');
      cy.getElement('disconnected-tariff-plan-option').should('exist');

      cy.getElement('primary-btn').click();

      cy.getElement('confirmation-screen').should('be.visible');

      cy.getElement('warning-secondary-btn').click();
      cy.get('@submitSpy').should('not.have.been.called');

      cy.getElement('confirmation-screen').should('not.exist');
      cy.getElement('line-change-tariff-plan').should('be.visible');
    });
  });
});
