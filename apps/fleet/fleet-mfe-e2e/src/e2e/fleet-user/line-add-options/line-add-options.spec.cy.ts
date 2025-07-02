import userDetails from '../../../fixtures/fleet-product-overview/open-id/userdetails.json';
import product from '../../../fixtures/fleet-user/line-add-options/0487523810.json';
import eligibleProducts from '../../../fixtures/fleet-user/line-add-options/eligibleproducts.json';
import salesOrder from '../../../fixtures/fleet-user/line-add-options/sales-order.json';
import submit from '../../../fixtures/fleet-user/line-add-options/submit.json';
import addedOptionModifyProductsPayload from '../../../fixtures/fleet-user/line-add-options/added-option-modify-products-payload.json';
import upgradedOptionModifyProductsPayload from '../../../fixtures/fleet-user/line-add-options/upgraded-option-modify-products-payload.json';
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
import FVNM0250 from '../../../../../../../fixtures/http/fleet/omapi/FVNM0250.json';
import TLTT0013 from '../../../../../../../fixtures/http/fleet/omapi/TLTT0013.json';
import MOFL0000 from '../../../../../../../fixtures/http/fleet/omapi/MOFL0000.json';
import { SplitBillProfileTypeEnum } from '@fleet-mfe/app/fleet-user/product/shared/enums/split-bill-profile-type.enum';

describe('Fleet User Line Add Options', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/ocapi/oauth/userdetails', { statusCode: 200, body: userDetails });

    cy.intercept('GET', '**/ocapi/public/api/fleet-customer-service/v1/customer-account/properties', {
      statusCode: 200,
      body: { fleetUserOrderingEnabled: true },
    });

    cy.intercept('GET', '**/ocapi/public/api/fleet-product-service/v1/products/0487523810', {
      statusCode: 200,
      body: product,
    });

    cy.intercept(
      'GET',
      '**/ocapi/public/api/fleet-product-service/v1/products/eligibleproducts?identifier=0487523810',
      {
        statusCode: 200,
        body: eligibleProducts,
      }
    ).as('eligibleProducts');

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

    cy.intercept('GET', '**/omapi/public/product/FVNM0250', {
      statusCode: 200,
      body: FVNM0250,
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
    }).as('INTW0250');

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

    cy.intercept('GET', '**/omapi/public/product/MOFL0000', {
      statusCode: 200,
      body: MOFL0000,
    });

    cy.intercept('POST', '**/ocapi/public/api/sales-service/v2/salesorders/9166671059613918354/submit', {
      statusCode: 200,
      body: submit,
    }).as('submit');

    cy.intercept('POST', '**/ocapi/public/api/sales-service/v2/products', {
      statusCode: 200,
      body: salesOrder,
    }).as('products');

    cy.visit('/fleet-user-line-add-options?msisdn=0487523810');
    cy.wait('@BFLE0001');
    cy.wait('@eligibleProducts');
  });

  describe('As a fleet user I can use add options on my desktop', () => {
    it('AC 1: Fleet User goes to products overview page when add options is selected then the add options wizard is opened and previously added options are shown', (): void => {
      // TODO: Add logic when we start from the product overview page
      cy.getElement('add-options').should('be.visible');
      cy.getElement('previously-added-option').first().should('contain.text', 'World Data €20,00');
      cy.getElement('previously-added-option-description').first().should('contain.text', '500 MB World Data');
      cy.getElement('previously-added-option').eq(1).should('contain.text', 'Data Top 24 €10,00');
      cy.getElement('previously-added-option-description')
        .eq(1)
        .should('contain.text', '250 MB mobile data in 24 countries world');
    });

    it('AC 2: Fleet User opens the add options wizard when fleet user he sees an option that is already in his sim line he can not add this option again ', (): void => {
      cy.getElement('add-options').should('be.visible');

      cy.getElement('available-option-category').first().click();

      cy.getElement('available-option').first().should('be.disabled');
      cy.getElement('available-option').first().should('not.have.class', 'available');
      cy.getElement('available-option').first().should('have.text', '500 MB€39,00');

      cy.getElement('available-option').eq(1).should('not.be.disabled');
      cy.getElement('available-option').eq(1).should('have.class', 'available');
      cy.getElement('available-option').eq(1).should('have.text', '1.5 GB€117,00');

      cy.getElement('available-option').eq(2).should('have.class', 'available');
      cy.getElement('available-option').eq(2).should('not.be.disabled');
      cy.getElement('available-option').eq(2).should('have.text', '2 GB€156,00');
    });

    it('AC 3: Fleet User opens the add options wizard when fleet user tried to add multiple options from the same category only one is allowed ', (): void => {
      cy.getElement('add-options').should('be.visible');
      cy.getElement('available-option-category').eq(1).click();
      cy.getElement('available-option').first().should('have.class', 'available');
      cy.getElement('available-option').first().click();
      cy.getElement('available-option').first().should('not.have.class', 'available');
      cy.getElement('available-option').eq(1).should('have.class', 'available');
      cy.getElement('available-option').eq(1).click();
      cy.getElement('available-option').eq(1).should('not.have.class', 'available');
      cy.getElement('available-option').first().should('have.class', 'available');
    });

    it('AC 4: Fleet User adds an option in the wizard when he did not have another option from this category before then the added option is shown under the subtitle Added ', (): void => {
      cy.getElement('add-options').should('be.visible');
      cy.getElement('new-options').should('not.be.visible');
      cy.getElement('available-option-category').eq(1).click();
      cy.getElement('available-option-category')
        .eq(1)
        .within(() => {
          cy.getElement('available-option').first().click();
        });

      cy.getElement('new-options').should('be.visible');
      cy.getElement('added-option').first().should('contain.text', 'World Data WG€39,00');
      cy.getElement('added-option-description')
        .first()
        .should('contain.text', '500 MB mobile data for use in all countries (not valid for satellite connections)');
    });

    it('AC 5: Fleet User adds an option in the wizard when he already had an option in this category before then the added option is shown under the subtitle Updated ', (): void => {
      cy.getElement('add-options').should('be.visible');
      cy.getElement('new-options').should('not.be.visible');
      cy.getElement('previously-added-options').should('be.visible');
      cy.getElement('previously-added-option').then((options) => expect(options).to.contain.text('World Data €20,00'));

      cy.getElement('available-option-category').first().click();
      cy.getElement('available-option-category')
        .first()
        .within(() => {
          cy.getElement('available-option').eq(2).click();
        });

      cy.getElement('upgraded-options').should('be.visible');
      cy.getElement('upgraded-option').first().should('contain.text', 'World Data€156,00');
      cy.getElement('upgraded-option-description')
        .first()
        .should('contain.text', '2 GB mobile data for use in all countries (not valid for satellite connections)');
      cy.getElement('previously-added-option').then((options) =>
        expect(options).not.to.contain.text('World Data €20,00')
      );
    });

    it('AC 6: Fleet User upgrades options in the wizard when he clicks on undo changes then the upgraded option is unselected again', (): void => {
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

      cy.getElement('upgraded-options').should('be.visible');
      cy.getElement('upgraded-option').first().should('contain.text', 'World Data€156,00');

      cy.getElement('revert-changes').click();

      cy.getElement('upgraded-options').should('be.not.visible');
      cy.getElement('available-option-category').first().click();
      cy.getElement('available-option-category')
        .first()
        .within(() => {
          cy.getElement('available-option-icon').should('have.class', 'icon-plus');
        });
    });

    it('AC 7: Fleet User adds option of a unselected category in the wizard when he clicks on undo changes then the options are removed from the overview ', (): void => {
      cy.getElement('available-option-category').eq(1).click();
      cy.getElement('available-option-category')
        .eq(1)
        .within(() => {
          cy.getElement('available-option').first().click();
        });

      cy.getElement('new-options').should('be.visible');
      cy.getElement('added-option').first().should('contain.text', 'World Data WG€39,00');
      cy.getElement('revert-changes').should('not.be.disabled');
      cy.getElement('revert-changes').click();

      cy.getElement('new-options').should('not.be.visible');
    });

    it('AC 8.1: Fleet User adds an option in the wizard when he saves his changes then the options are successfully submitted', (): void => {
      cy.getElement('available-option-category').eq(1).click();
      cy.getElement('available-option-category')
        .eq(1)
        .within(() => {
          cy.getElement('available-option').eq(1).click();
        });

      cy.getElement('new-options').should('be.visible');
      cy.getElement('added-option').first().should('contain.text', 'World Data WG€78,00');
      cy.getElement('confirm-changes').click();

      cy.getElement('confirmation-screen').should('be.visible');
      cy.getElement('confirm-add-option').click();

      cy.wait('@submit');
      cy.wait('@products').then((interception) => {
        expect(interception.request.body).to.deep.equal(addedOptionModifyProductsPayload);
      });

      cy.getElement('app-message-flow').should('be.visible');
      cy.getElement('app-message-flow').should('have.class', 'notification--success');
    });

    it('AC 8.2: Fleet User upgrades an option in the wizard when he saves his changes then the options are successfully submitted', (): void => {
      cy.getElement('available-option-category').first().click();
      cy.getElement('available-option-category')
        .first()
        .within(() => {
          cy.getElement('available-option').eq(2).click();
        });

      cy.getElement('upgraded-options').should('be.visible');
      cy.getElement('upgraded-option').first().should('contain.text', 'World Data€156,00');
      cy.getElement('upgraded-option-description')
        .first()
        .should('contain.text', '2 GB mobile data for use in all countries (not valid for satellite connections)');

      cy.getElement('confirm-changes').click();

      cy.getElement('confirmation-screen').should('be.visible');
      cy.getElement('confirm-add-option').click();

      cy.wait('@submit');
      cy.wait('@products').then((interception) => {
        expect(interception.request.body).to.deep.equal(upgradedOptionModifyProductsPayload);
      });

      cy.getElement('result-screen').should('be.visible');
      cy.getElement('result-screen-back-to-overview-link').should('be.visible');
      cy.getElement('app-message-flow').should('be.visible');
      cy.getElement('app-message-flow').should('have.class', 'notification--success');
    });

    it('AC 9: Fleet User adds an option in the wizard when he saves his changes then he changes his mind and cancels it the user is redirected to the wizard again ', (): void => {
      cy.getElement('available-option-category').eq(1).click();
      cy.getElement('available-option-category')
        .eq(1)
        .within(() => {
          cy.getElement('available-option').eq(1).click();
        });

      cy.getElement('new-options').should('be.visible');
      cy.getElement('added-option').first().should('contain.text', 'World Data WG€78,00');
      cy.getElement('confirm-changes').click();

      cy.getElement('confirmation-screen').should('be.visible');
      cy.getElement('cancel-add-option').click();

      cy.getElement('add-options').should('be.visible');
      cy.getElement('new-options').should('be.visible');
      cy.getElement('added-option').first().should('contain.text', 'World Data WG€78,00');
    });

    it("AC 10: Fleet User should not see buttons that allow him to go back to Fleet Portal when he's coming from oneApp", (): void => {
      cy.visit('/fleet-user-line-add-options?msisdn=0487523810&cmp=app_oneapp');
      cy.wait('@BFLE0001');
      cy.wait('@eligibleProducts');

      cy.getElement('available-option-category').first().click();
      cy.getElement('available-option-category')
        .first()
        .within(() => {
          cy.getElement('available-option').eq(2).click();
        });
      cy.getElement('confirm-changes').click();
      cy.getElement('confirm-add-option').click();

      cy.wait('@submit');
      cy.wait('@products').then((interception) => {
        expect(interception.request.body).to.deep.equal(upgradedOptionModifyProductsPayload);
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

        cy.visit('/fleet-user-line-add-options?msisdn=0487523810');

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

        cy.visit('/fleet-user-line-add-options?msisdn=0487523810');

        cy.getElement('result-screen').should('be.visible');
        cy.getElement('add-options').should('not.to.exist');
      });
    });
  });

  describe('As a fleet user I can use add options on my mobile', () => {
    beforeEach(() => {
      cy.viewport('iphone-x');
    });

    it('AC 2: Fleet User opens the add options wizard when fleet user he sees an option that is already in his sim line he can not add this option again ', () => {
      cy.getElement('add-options').should('be.visible');

      cy.getElement('available-option-category').first().click();

      cy.getElement('available-option').first().should('be.disabled');
      cy.getElement('available-option').first().should('not.have.class', 'available');
      cy.getElement('available-option').first().should('have.text', '500 MB€39,00');

      cy.getElement('available-option').eq(1).should('not.be.disabled');
      cy.getElement('available-option').eq(1).should('have.class', 'available');
      cy.getElement('available-option').eq(1).should('have.text', '1.5 GB€117,00');

      cy.getElement('available-option').eq(2).should('have.class', 'available');
      cy.getElement('available-option').eq(2).should('not.be.disabled');
      cy.getElement('available-option').eq(2).should('have.text', '2 GB€156,00');
    });

    it('AC 5: Fleet User adds an option in the wizard when he already had an option in this category before then the added option is shown under the subtitle Updated ', (): void => {
      cy.getElement('add-options').should('be.visible');
      cy.getElement('new-options').should('not.be.visible');
      cy.getElement('previously-added-options').should('be.visible');
      cy.getElement('previously-added-option').then((options) => expect(options).to.contain.text('World Data €20,00'));

      cy.getElement('available-option-category').first().click();
      cy.getElement('available-option-category')
        .first()
        .within(() => {
          cy.getElement('available-option').eq(2).click();
        });

      cy.getElement('upgraded-options').should('be.visible');
      cy.getElement('upgraded-option').first().should('contain.text', 'World Data€156,00');
      cy.getElement('upgraded-option-description')
        .first()
        .should('contain.text', '2 GB mobile data for use in all countries (not valid for satellite connections)');
      cy.getElement('previously-added-option').then((options) =>
        expect(options).not.to.contain.text('World Data €20,00')
      );
    });

    it('AC 7: Fleet User adds option of a unselected category in the wizard when he clicks on undo changes then the options are removed from the overview ', (): void => {
      cy.getElement('available-option-category').eq(1).click();
      cy.getElement('available-option-category')
        .eq(1)
        .within(() => {
          cy.getElement('available-option').first().click();
        });

      cy.getElement('new-options').should('be.visible');
      cy.getElement('added-option').first().should('contain.text', 'World Data WG€39,00');
      cy.getElement('revert-changes-mobile').should('not.be.disabled');
      cy.getElement('revert-changes-mobile').click();

      cy.getElement('new-options').should('not.be.visible');
    });

    it('AC 8.1: Fleet User adds an option in the wizard when he saves his changes then the options are successfully submitted', (): void => {
      cy.getElement('available-option-category').eq(1).click();
      cy.getElement('available-option-category')
        .eq(1)
        .within(() => {
          cy.getElement('available-option').eq(1).click();
        });

      cy.getElement('new-options').should('be.visible');
      cy.getElement('added-option').first().should('contain.text', 'World Data WG€78,00');
      cy.getElement('confirm-changes-mobile').click();

      cy.getElement('confirmation-screen').should('be.visible');
      cy.getElement('confirm-add-option').click();

      cy.wait('@submit');
      cy.wait('@products').then((interception) => {
        expect(interception.request.body).to.deep.equal(addedOptionModifyProductsPayload);
      });

      cy.getElement('app-message-flow').should('be.visible');
      cy.getElement('app-message-flow').should('have.class', 'notification--success');
    });

    it('AC 8.2: Fleet User upgrades an option in the wizard when he saves his changes then the options are successfully submitted', (): void => {
      cy.getElement('available-option-category').first().click();
      cy.getElement('available-option-category')
        .first()
        .within(() => {
          cy.getElement('available-option').eq(2).click();
        });

      cy.getElement('upgraded-options').should('be.visible');
      cy.getElement('upgraded-option').first().should('contain.text', 'World Data€156,00');
      cy.getElement('upgraded-option-description')
        .first()
        .should('contain.text', '2 GB mobile data for use in all countries (not valid for satellite connections)');

      cy.getElement('confirm-changes-mobile').click();

      cy.getElement('confirmation-screen').should('be.visible');
      cy.getElement('confirm-add-option').click();

      cy.wait('@submit');
      cy.wait('@products').then((interception) => {
        expect(interception.request.body).to.deep.equal(upgradedOptionModifyProductsPayload);
      });

      cy.getElement('result-screen').should('be.visible');
      cy.getElement('result-screen-back-to-overview-link').should('be.visible');
      cy.getElement('app-message-flow').should('be.visible');
      cy.getElement('app-message-flow').should('have.class', 'notification--success');
    });

    it('AC 9: Fleet User adds an option in the wizard when he saves his changes then he changes his mind and cancels it the user is redirected to the wizard again ', (): void => {
      cy.getElement('available-option-category').eq(1).click();
      cy.getElement('available-option-category')
        .eq(1)
        .within(() => {
          cy.getElement('available-option').eq(1).click();
        });

      cy.getElement('new-options').should('be.visible');
      cy.getElement('added-option').first().should('contain.text', 'World Data WG€78,00');
      cy.getElement('confirm-changes-mobile').click();

      cy.getElement('confirmation-screen').should('be.visible');
      cy.getElement('cancel-add-option').click();

      cy.getElement('add-options').should('be.visible');
      cy.getElement('new-options').should('be.visible');
      cy.getElement('added-option').first().should('contain.text', 'World Data WG€78,00');
    });
  });
});
