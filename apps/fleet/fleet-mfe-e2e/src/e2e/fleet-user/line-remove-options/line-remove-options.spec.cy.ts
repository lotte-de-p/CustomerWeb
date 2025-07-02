import userDetails from '../../../fixtures/fleet-product-overview/open-id/userdetails.json';
import product from '../../../fixtures/fleet-user/line-remove-options/0468239791.json';
import salesOrder from '../../../fixtures/fleet-user/line-remove-options/sales-order.json';
import eligibleProducts from '../../../fixtures/fleet-user/line-remove-options/eligibleProducts-0468239791.json';
import submit from '../../../fixtures/fleet-user/line-remove-options/submit.json';
import modifyProductsPayload from '../../../fixtures/fleet-user/line-remove-options/modify-products-payload.json';
import BFLU0001 from '../../../../../../../fixtures/http/fleet/omapi/BFLU0001.json';
import BFLT0001 from '../../../../../../../fixtures/http/fleet/omapi/BFLT0001.json';
import BFLT0006 from '../../../../../../../fixtures/http/fleet/omapi/BFLT0006.json';
import BFLC0000 from '../../../../../../../fixtures/http/fleet/omapi/BFLC0000.json';
import BFLT0005 from '../../../../../../../fixtures/http/fleet/omapi/BFLT0005.json';
import BFLS0001 from '../../../../../../../fixtures/http/fleet/omapi/BFLS0001.json';
import BFLE0001 from '../../../../../../../fixtures/http/fleet/omapi/BFLE0001.json';
import VOEF0180 from '../../../../../../../fixtures/http/fleet/omapi/VOEF0180.json';
import FDATA0004 from '../../../../../../../fixtures/http/fleet/omapi/FDATA0004.json';
import FDNS0001 from '../../../../../../../fixtures/http/fleet/omapi/FDNS0001.json';
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
import TLTT0013 from '../../../../../../../fixtures/http/fleet/omapi/TLTT0013.json';
import { SplitBillProfileTypeEnum } from '@fleet-mfe/app/fleet-user/product/shared/enums/split-bill-profile-type.enum';

describe('Line Remove Options', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/ocapi/public/api/fleet-customer-service/v1/customer-account/properties', {
      statusCode: 200,
      body: { fleetUserOrderingEnabled: true },
    });
    cy.intercept('GET', '**/ocapi/oauth/userdetails', { statusCode: 200, body: userDetails });

    cy.intercept('GET', '**/ocapi/public/api/fleet-product-service/v1/products/0468239791', {
      statusCode: 200,
      body: product,
    });

    cy.intercept(
      'GET',
      '**/ocapi/public/api/fleet-product-service/v1/products/eligibleproducts?identifier=0468239791',
      {
        statusCode: 200,
        body: eligibleProducts,
      }
    );

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

    cy.intercept('GET', '**/omapi/public/product/VOEF0180', {
      statusCode: 200,
      body: VOEF0180,
    });

    cy.intercept('GET', '**/omapi/public/product/FDNS0001', {
      statusCode: 200,
      body: FDNS0001,
    });

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

    cy.intercept('GET', '**/omapi/public/product/TLTT0013', {
      statusCode: 200,
      body: TLTT0013,
    });

    cy.intercept('POST', '**/ocapi/public/api/sales-service/v2/salesorders/9166671059613918354/submit', {
      statusCode: 200,
      body: submit,
    }).as('submit');

    cy.intercept('POST', '**/ocapi/public/api/sales-service/v2/products', {
      statusCode: 200,
      body: salesOrder,
    }).as('products');

    cy.visit('/fleet-user-line-remove-options?msisdn=0468239791');
    cy.wait('@BFLE0001');
  });

  describe('As a fleet user I can use remove options on desktop', () => {
    it('AC 1: Fleet User goes to products detail page when remove options is selected then the add options wizard is opened', (): void => {
      // TODO: Add logic when product details page is moved
      cy.getElement('remove-options').should('be.visible');
      cy.getElement('prices-excluding-vat-message').should('be.visible');
    });

    it('AC 2: Fleet User opens the remove options wizard when fleet user he sees an option that is not in his sim line he can not remove this option ', (): void => {
      cy.getElement('remove-options').should('be.visible');

      cy.getElement('available-option-category').contains('World Data').click();

      cy.getElement('available-option').first().should('be.disabled');
      cy.getElement('available-option').first().should('have.class', 'available');
      cy.getElement('available-option').first().should('have.text', '500 MB€39,00');

      cy.getElement('available-option').eq(1).should('be.disabled');
      cy.getElement('available-option').eq(1).should('have.class', 'available');
      cy.getElement('available-option').eq(1).should('have.text', '1.5 GB€117,00');

      cy.getElement('available-option').eq(2).should('have.class', 'available');
      cy.getElement('available-option').eq(2).should('not.be.disabled');
      cy.getElement('available-option').eq(2).should('have.text', '2 GB€156,00');
    });

    it('AC 3: Fleet User removes an option in the wizard when he selected to remove this option then the option is shown under  ', (): void => {
      cy.getElement('remove-options').should('be.visible');
      cy.getElement('removed-options').should('not.exist');
      cy.getElement('available-option-category')
        .first()
        .click()
        .within(() => {
          cy.getElement('available-option').eq(2).click();
        });

      cy.getElement('removed-options').should('be.visible');
      cy.getElement('removed-option').first().should('contain.text', 'World Data€156,00');
      cy.getElement('removed-option-description')
        .first()
        .should('contain.text', '2 GB mobile data for use in all countries (not valid for satellite connections)');
    });

    it('AC 4: Fleet User is in the wizard and sees all the options he already has under Previously added ', (): void => {
      cy.getElement('remove-options').should('be.visible');

      cy.getElement('previously-added').should('be.visible');
      cy.getElement('previously-added-option').first().should('contain.text', 'World Data€156,00');
      cy.getElement('previously-added-option-description').first().should('contain.text', '2 GB World Data');
      cy.getElement('previously-added-option').eq(1).should('contain.text', 'Data OPEC€60,00');
      cy.getElement('previously-added-option-description')
        .eq(1)
        .should('contain.text', '1.5 GB mobile data in OPEC countries');
    });

    it('AC 6: Fleet User added  options in the wizard when he clicks on undo changes then added options are unselected again ', (): void => {
      cy.getElement('available-option-category').first().click();
      cy.getElement('available-option-category')
        .first()
        .within(() => {
          cy.getElement('available-option').eq(2).click();
        });

      cy.getElement('available-option')
        .eq(2)
        .within(() => {
          cy.getElement('available-option-icon').should('have.class', 'icon-tick');
        });

      cy.getElement('removed-options').should('be.visible');
      cy.getElement('removed-option').first().should('contain.text', 'World Data€156,00');
      cy.getElement('removed-option-description')
        .first()
        .should('contain.text', '2 GB mobile data for use in all countries (not valid for satellite connections)');

      cy.getElement('secondary-btn').click();

      cy.getElement('removed-options').should('not.exist');
      cy.getElement('available-option-category').first().click();
      cy.getElement('available-option-category')
        .first()
        .within(() => {
          cy.getElement('available-option-icon').should('have.class', 'icon-minus');
        });
    });

    it('AC 7: Fleet User removed an option  in the wizard when he clicks on undo changes then the options are removed from the overview ', (): void => {
      cy.getElement('available-option-category').first().click();
      cy.getElement('available-option-category')
        .first()
        .within(() => {
          cy.getElement('available-option').eq(2).click();
        });

      cy.getElement('removed-options').should('be.visible');
      cy.getElement('removed-option').first().should('contain.text', 'World Data€156,00');
      cy.getElement('removed-option-description')
        .first()
        .should('contain.text', '2 GB mobile data for use in all countries (not valid for satellite connections)');
      cy.getElement('secondary-btn').should('not.be.disabled');
      cy.getElement('secondary-btn').first().click();

      cy.getElement('removed-option').should('have.length', 0);
    });

    it('AC 8: Fleet User removes an option in the wizard when he saves his changes then the options  that are selected are removed from his SIM line ', (): void => {
      cy.getElement('available-option-category').first().click();
      cy.getElement('available-option-category')
        .first()
        .within(() => {
          cy.getElement('available-option').eq(2).click();
        });

      cy.getElement('removed-options').should('be.visible');
      cy.getElement('removed-option').first().should('contain.text', 'World Data€156,00');
      cy.getElement('removed-option-description')
        .first()
        .should('contain.text', '2 GB mobile data for use in all countries (not valid for satellite connections)');
      cy.getElement('primary-btn').first().click();

      cy.getElement('confirmation-screen').should('be.visible');
      cy.getElement('warning-primary-btn').click();

      cy.wait('@submit');
      cy.wait('@products').then((interception) => {
        expect(interception.request.body).to.deep.equal(modifyProductsPayload);
      });

      cy.getElement('result-screen').should('be.visible');
      cy.getElement('result-screen-back-to-overview-link').should('be.visible');
      cy.getElement('app-message-flow').should('be.visible');
      cy.getElement('app-message-flow').should('have.class', 'notification--success');
    });

    it('AC 9: Fleet User removes an option in the wizard when he saves his changes then he changes his mind and cancels it the user sees the wizard again ', (): void => {
      cy.getElement('available-option-category').first().click();
      cy.getElement('available-option-category')
        .first()
        .within(() => {
          cy.getElement('available-option').eq(2).click();
        });

      cy.getElement('removed-options').should('be.visible');
      cy.getElement('removed-option').first().should('contain.text', 'World Data€156,00');
      cy.getElement('removed-option-description')
        .first()
        .should('contain.text', '2 GB mobile data for use in all countries (not valid for satellite connections)');
      cy.getElement('primary-btn').click();

      cy.getElement('confirmation-screen').should('be.visible');
      cy.getElement('warning-secondary-btn').click();
      cy.getElement('confirmation-screen').should('not.exist');
    });

    it("AC 10: Fleet User should not see buttons that allow him to go back to Fleet Portal when he's coming from oneApp", (): void => {
      cy.visit('/fleet-user-line-remove-options?msisdn=0468239791&cmp=app_oneapp');
      cy.wait('@BFLE0001');

      cy.getElement('available-option-category').first().click();
      cy.getElement('available-option-category')
        .first()
        .within(() => {
          cy.getElement('available-option').eq(2).click();
        });

      cy.getElement('primary-btn').first().click();

      cy.getElement('warning-primary-btn').click();

      cy.wait('@submit');
      cy.wait('@products').then((interception) => {
        expect(interception.request.body).to.deep.equal(modifyProductsPayload);
      });

      cy.get('.icon-cross').should('not.exist');
      cy.getElement('result-screen-back-to-overview-link').should('not.exist');
    });

    describe('Split bill guard checks', () => {
      it('should show error message when fleet user ordering is not enabled', () => {
        cy.intercept('GET', '**/ocapi/public/api/fleet-customer-service/v1/customer-account/properties', {
          statusCode: 200,
          body: { fleetUserOrderingEnabled: false },
        });

        cy.visit('/fleet-user-line-remove-options?msisdn=0487523810');

        cy.getElement('result-screen').should('be.visible');
        cy.getElement('remove-options').should('not.to.exist');
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

        cy.visit('/fleet-user-line-remove-options?msisdn=0487523810');

        cy.getElement('result-screen').should('be.visible');
        cy.getElement('add-options').should('not.to.exist');
      });
    });
  });

  describe('As a fleet user I can use remove options on my mobile', () => {
    beforeEach(() => {
      cy.viewport('iphone-x');
    });

    it('AC 2: Fleet User opens the remove options wizard when fleet user he sees an option that is not in his sim line he can not remove this option ', (): void => {
      cy.getElement('remove-options').should('be.visible');

      cy.getElement('available-option-category').contains('World Data').click();

      cy.getElement('available-option').first().should('be.disabled');
      cy.getElement('available-option').first().should('have.class', 'available');
      cy.getElement('available-option').first().should('have.text', '500 MB€39,00');

      cy.getElement('available-option').eq(1).should('be.disabled');
      cy.getElement('available-option').eq(1).should('have.class', 'available');
      cy.getElement('available-option').eq(1).should('have.text', '1.5 GB€117,00');

      cy.getElement('available-option').eq(2).should('have.class', 'available');
      cy.getElement('available-option').eq(2).should('not.be.disabled');
      cy.getElement('available-option').eq(2).should('have.text', '2 GB€156,00');
    });

    it('AC 6: Fleet User added  options in the wizard when he clicks on undo changes then added options are unselected again ', (): void => {
      cy.getElement('available-option-category').first().click();
      cy.getElement('available-option-category')
        .first()
        .within(() => {
          cy.getElement('available-option').eq(2).click();
        });

      cy.getElement('available-option')
        .eq(2)
        .within(() => {
          cy.getElement('available-option-icon').should('have.class', 'icon-tick');
        });

      cy.getElement('removed-options').should('be.visible');
      cy.getElement('removed-option').first().should('contain.text', 'World Data€156,00');
      cy.getElement('removed-option-description')
        .first()
        .should('contain.text', '2 GB mobile data for use in all countries (not valid for satellite connections)');

      cy.getElement('revert-changes-mobile').click();

      cy.getElement('removed-options').should('not.exist');
      cy.getElement('toggle-available-options').click();
      cy.getElement('available-option-category').first().click();
      cy.getElement('available-option-category')
        .first()
        .within(() => {
          cy.getElement('available-option-icon').should('have.class', 'icon-minus');
        });
    });

    it('AC 7: Fleet User removed an option  in the wizard when he clicks on undo changes then the options are removed from the overview ', (): void => {
      cy.getElement('available-option-category').first().click();
      cy.getElement('available-option-category')
        .first()
        .within(() => {
          cy.getElement('available-option').eq(2).click();
        });

      cy.getElement('removed-options').should('be.visible');
      cy.getElement('removed-option').first().should('contain.text', 'World Data€156,00');
      cy.getElement('removed-option-description')
        .first()
        .should('contain.text', '2 GB mobile data for use in all countries (not valid for satellite connections)');
      cy.getElement('revert-changes-mobile').should('not.be.disabled');
      cy.getElement('revert-changes-mobile').first().click();

      cy.getElement('removed-option').should('have.length', 0);
    });

    it('AC 8: Fleet User removes an option in the wizard when he saves his changes then the options  that are selected are removed from his SIM line ', (): void => {
      cy.getElement('available-option-category').first().click();
      cy.getElement('available-option-category')
        .first()
        .within(() => {
          cy.getElement('available-option').eq(2).click();
        });

      cy.getElement('removed-options').should('be.visible');
      cy.getElement('removed-option').first().should('contain.text', 'World Data€156,00');
      cy.getElement('removed-option-description')
        .first()
        .should('contain.text', '2 GB mobile data for use in all countries (not valid for satellite connections)');
      cy.getElement('confirm-changes-mobile').first().click();

      cy.getElement('confirmation-screen').should('be.visible');
      cy.getElement('warning-primary-btn').click();

      cy.wait('@submit');
      cy.wait('@products').then((interception) => {
        expect(interception.request.body).to.deep.equal(modifyProductsPayload);
      });

      cy.getElement('result-screen').should('be.visible');
      cy.getElement('result-screen-back-to-overview-link').should('be.visible');
      cy.getElement('app-message-flow').should('be.visible');
      cy.getElement('app-message-flow').should('have.class', 'notification--success');
    });

    it('AC 9: Fleet User removes an option in the wizard when he saves his changes then he changes his mind and cancels it the user sees the wizard again ', (): void => {
      cy.getElement('available-option-category').first().click();
      cy.getElement('available-option-category')
        .first()
        .within(() => {
          cy.getElement('available-option').eq(2).click();
        });

      cy.getElement('removed-options').should('be.visible');
      cy.getElement('removed-option').first().should('contain.text', 'World Data€156,00');
      cy.getElement('removed-option-description')
        .first()
        .should('contain.text', '2 GB mobile data for use in all countries (not valid for satellite connections)');
      cy.getElement('confirm-changes-mobile').click();

      cy.getElement('confirmation-screen').should('be.visible');
      cy.getElement('warning-secondary-btn').click();
      cy.getElement('confirmation-screen').should('not.exist');
    });
  });
});
