import userDetails from '../../../fixtures/fleet-product-overview/open-id/userdetails.json';
import eligibleProducts from '../../../fixtures/fleet-user/line-change-tariff-plan/eligibleProducts-0487373602.json';
import userProduct from '../../../fixtures/fleet-user/line-change-tariff-plan/0487523810.json';
import products from '../../../fixtures/fleet-user/line-change-tariff-plan/sales-order.json';
import productDisconnectedOptions from '../../../fixtures/fleet-user/line-change-tariff-plan/sales-order-disconnected-options.json';
import modifyProductsPayload from '../../../fixtures/fleet-user/line-change-tariff-plan/modify-products-payload.json';
import submit from '../../../fixtures/fleet-user/line-add-options/submit.json';
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
import product from '../../../fixtures/fleet-user/line-add-options/0487523810.json';
import { SplitBillProfileTypeEnum } from '@fleet-mfe/app/fleet-user/product/shared/enums/split-bill-profile-type.enum';

describe('Line Change Tariff Plan', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/ocapi/public/api/fleet-customer-service/v1/customer-account/properties', {
      statusCode: 200,
      body: { fleetUserOrderingEnabled: true },
    });
    cy.intercept('GET', '**/ocapi/oauth/userdetails', { statusCode: 200, body: userDetails });

    cy.intercept('GET', '**/ocapi/public/api/fleet-product-service/v1/products/0487523810', {
      statusCode: 200,
      body: userProduct,
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

    cy.visit('/fleet-user-line-change-tariff-plan?msisdn=0487523810');
  });

  describe('As a fleet user I want to change my tariff plan on desktop', () => {
    it('AC 1: Fleet User goes to products detail page when line change tariff plan is selected then the change tariff plan wizard is opened', (): void => {
      // TODO: Add logic when product details page is moved
      cy.getElement('line-change-tariff-plan').should('be.visible');
    });

    it('AC 2: Fleet User opens the change tariff plan wizard then the previous tariff plan is shown and is not available in the options list', (): void => {
      cy.getElement('line-change-tariff-plan').should('be.visible');
      cy.getElement('available-options').should('be.visible');
      cy.getElement('mobile-plan-option').should('not.contain.text', 'Mobile 1');
      cy.getElement('previous-tariff').should('have.text', 'Mobile Start +€10,00');
      cy.getElement('previous-tariff-description').should(
        'contain.text',
        'Combine 200 minutes of calling and unlimited calling between colleagues, with unlimited texting and 1,5 GB mobile data.'
      );
    });

    it('AC 3: Fleet User opens the change tariff plan wizard when fleet user switches the mobile plan the new plan is visible ', (): void => {
      cy.getElement('mobile-plan-option').first().should('have.text', 'Fast€25,00');
      cy.getElement('mobile-plan-option').first().click();
      cy.getElement('previous-tariff').should('have.text', 'Mobile Start +€10,00');
      cy.getElement('previous-tariff-description').should(
        'contain.text',
        'Combine 200 minutes of calling and unlimited calling between colleagues, with unlimited texting and 1,5 GB mobile data.'
      );

      cy.getElement('new-tariff').should('have.text', 'Fast€25,00');
      cy.getElement('new-tariff-description').should(
        'contain.text',
        'Combine unlimited calling, texting and 300 GB mobile data within Belgium/EU. 4G/5G download speed up to 10Mbps.'
      );
    });

    it('AC 4.1: Fleet User chooses a tariff plan in the wizard when he chooses another one then the newest chosen tariff plan will be shown ', (): void => {
      cy.getElement('mobile-plan-option').first().should('have.text', 'Fast€25,00');
      cy.getElement('mobile-plan-option').first().click();
      cy.getElement('new-tariff').should('have.text', 'Fast€25,00');
      cy.getElement('mobile-plan-option').eq(1).click();
      cy.getElement('new-tariff').should('have.text', 'Mobile Unlimited€35,00');
    });

    it('AC 4.2: Fleet User chooses a tariff plan in the wizard when he chooses the same one then the new tariff plan is removed', (): void => {
      cy.getElement('mobile-plan-option').first().should('have.text', 'Fast€25,00');
      cy.getElement('mobile-plan-option').first().click();
      cy.getElement('new-tariff').should('have.text', 'Fast€25,00');
      cy.getElement('mobile-plan-option').first().click();
      cy.getElement('new-tariff').should('not.exist');
    });

    it('AC 6: Fleet User chose a tariff plan in the wizard when he clicks on undo changes then tariff plan is unselected again ', (): void => {
      cy.getElement('mobile-plan-option').first().should('contain.text', 'Fast€25,00');
      cy.getElement('mobile-plan-option').first().click();
      cy.getElement('mobile-plan-option').first().should('not.have.class', 'available');
      cy.getElement('new-tariff').should('contain.text', 'Fast');
      cy.getElement('secondary-btn').first().click();

      cy.getElement('mobile-plan-option').first().should('have.class', 'available');
      cy.getElement('new-tariff').should('not.exist');
    });

    it('AC 8: Fleet User changes tariff plan in the wizard when he saves his changes then tariff plan is changed', (): void => {
      cy.getElement('mobile-plan-option').eq(1).click();

      cy.getElement('new-tariff').should('be.visible');
      cy.getElement('new-tariff').should('contain.text', 'Mobile Unlimited€35,00');
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

    it('AC 10: Fleet User opens the change tariff plan wizard then he can see the message that all prices are VAT excl', (): void => {
      cy.getElement('prices-vat-excluded').should('be.visible');
    });

    it('AC 11: Fleet User opens the change tariff plan wizard then the options of the previous plan are shown', (): void => {
      cy.getElement('tariff-plan-option').first().should('have.text', '500 MB World Data500 MB');
      cy.getElement('tariff-plan-option').eq(1).should('have.text', '250 MB mobile data in 24 countries world250 MB');
      cy.getElement('disconnected-tariff-plan-options').should('not.exist');
    });

    it("AC 12: Fleet User should not see buttons that allow him to go back to Fleet Portal when he's coming from oneApp", (): void => {
      cy.visit('/fleet-user-line-change-tariff-plan?msisdn=0487523810&cmp=app_oneapp');

      cy.getElement('mobile-plan-option').eq(1).click();
      cy.getElement('primary-btn').click();

      cy.wait('@products').then((interception) => {
        expect(interception.request.body).to.deep.equal(modifyProductsPayload);
      });
      cy.wait('@submit');

      cy.get('.icon-cross').should('not.exist');
      cy.getElement('result-screen-back-to-overview-link').should('not.exist');
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
        cy.getElement('disconnected-tariff-plan-option')
          .first()
          .should('have.text', '250 MB mobile data in 24 countries world250 MB');
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

    describe('Split bill guard checks', () => {
      it('should show error message when fleet user ordering is not enabled', () => {
        cy.intercept('GET', '**/ocapi/public/api/fleet-customer-service/v1/customer-account/properties', {
          statusCode: 200,
          body: { fleetUserOrderingEnabled: false },
        });

        cy.visit('/fleet-user-line-change-tariff-plan?msisdn=0487523810');

        cy.getElement('result-screen').should('be.visible');
        cy.getElement('add-options').should('not.to.exist');
      });

      it('should show error message when product is not of type SB20', () => {
        cy.intercept('GET', '**/ocapi/public/api/fleet-customer-service/v1/customer-account/properties', {
          statusCode: 200,
          body: { fleetUserOrderingEnabled: true },
        });

        const productWithoutSplitBill = {
          ...product,
          splitBillProfile: {
            ...product.splitBillProfile,
            type: SplitBillProfileTypeEnum.SB10,
          },
        };

        cy.intercept('GET', '**/ocapi/public/api/fleet-product-service/v1/products/0487523810', {
          statusCode: 200,
          body: productWithoutSplitBill,
        });

        cy.visit('/fleet-user-line-change-tariff-plan?msisdn=0487523810');

        cy.getElement('result-screen').should('be.visible');
        cy.getElement('add-options').should('not.to.exist');
      });
    });
  });

  describe('As a fleet user I can change my tariff plan via mobile', () => {
    beforeEach(() => {
      cy.viewport('iphone-x');
    });

    it('AC 2: Fleet User opens the change tariff plan wizard when fleet user he can not see a tariff plan that is already active ', () => {
      cy.getElement('line-change-tariff-plan').should('be.visible');
      cy.getElement('available-options').should('be.visible');
      cy.getElement('mobile-plan-option').should('not.contain.text', 'Mobile 1');
      cy.getElement('previous-tariff').should('have.text', 'Mobile Start +€10,00');
      cy.getElement('previous-tariff-description').should(
        'contain.text',
        'Combine 200 minutes of calling and unlimited calling between colleagues, with unlimited texting and 1,5 GB mobile data.'
      );
    });

    it('AC 6: Fleet User chose a tariff plan in the wizard when he clicks on undo changes then tariff plan is unselected again ', (): void => {
      cy.getElement('mobile-plan-option').first().should('contain.text', 'Fast€25,00');
      cy.getElement('mobile-plan-option').first().click();

      cy.getElement('new-tariff').should('contain.text', 'Fast');
      cy.getElement('revert-changes-mobile').first().click();

      cy.getElement('new-tariff').should('not.exist');
    });

    it('AC 8: Fleet User changes tariff plan in the wizard when he saves his changes then tariff plan is changed', (): void => {
      cy.getElement('mobile-plan-option').eq(1).click();

      cy.getElement('new-tariff').should('be.visible');
      cy.getElement('new-tariff').should('contain.text', 'Mobile Unlimited€35,00');
      cy.getElement('confirm-changes-mobile').click();
      cy.getElement('warning-primary-btn').click();

      cy.wait('@products').then((interception) => {
        expect(interception.request.body).to.deep.equal(modifyProductsPayload);
      });
      cy.wait('@submit');

      cy.getElement('result-screen').should('be.visible');
      cy.getElement('app-message-flow').should('be.visible');
      cy.getElement('app-message-flow').should('have.class', 'notification--success');
    });
  });
});
