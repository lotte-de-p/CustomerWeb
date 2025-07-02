import { CustomerOrderCorrections } from './hardware-checkout.testfactory';
import {
  customerAccountDetailsFactory,
  CustomerAccountTypeEnum,
  CustomerCreditClassificationTypeEnum,
} from '@sales/hardware-checkout/data-access';
import { elements } from './constants/elements.const';

const phoneAndChargerUrl =
  '/hardware-checkout?sdata=XQAAAAK4AAAAAAAAAABAqYnmbFEIbVbO-Byot3B8C0q-GAHZdT11MPMbFQH4MFj4gjf0AkFqDaAeB9dzn9baBKB7RmPp7OoQ4j-Lbl3VMBLdsBtbXWLJHtvoOzhcRqx8AohTycQMV7G8Rgiw9U3BegCefQo7BvrIct4a6vGUWfhmEyATXDdZ1lpzazQM2q-aMnUmL20Wagz909r9Ht0-xzd2_O___zRMAAA';

describe.only('Hardware checkout order corrections', () => {
  context('Errors', () => {
    beforeEach(() => {
      CustomerOrderCorrections();
      cy.intercept('/nl.pageLocaleData.js', {});
    });

    context('Customer data', () => {
      it('should give an order correction if the customer has a blocked status', () => {
        cy.intercept('ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/customerManagement/customerAccount*', {
          body: customerAccountDetailsFactory.build({ status: CustomerAccountTypeEnum.FORMER }),
        });
        cy.visit(phoneAndChargerUrl);
        cy.getElement(elements.ERROR.PAGE).should('exist');
        cy.getElement(elements.ERROR.DESCRIPTION).should('exist');
        cy.getElement(elements.ERROR.BUTTON).should('exist');
      });

      it('should not show an order correction if the customer has an active status', () => {
        cy.intercept('ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/customerManagement/customerAccount*', {
          body: customerAccountDetailsFactory.build({ status: CustomerAccountTypeEnum.ACTIVE }),
        }).as('getCustomerAccount');

        cy.visit(phoneAndChargerUrl);
        cy.wait('@getCustomerAccount');
        cy.getElement(elements.ERROR.PAGE).should('not.exist');
      });

      it('should give an order correction if the customer is a bad payer', () => {
        cy.intercept('ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/customerManagement/customerAccount*', {
          body: customerAccountDetailsFactory.build({
            status: CustomerAccountTypeEnum.ACTIVE,
            creditClassificationCode: CustomerCreditClassificationTypeEnum.NO_SALES,
          }),
        });
        cy.visit(phoneAndChargerUrl);
        cy.getElement(elements.ERROR.PAGE).should('exist');
        cy.getElement(elements.ERROR.DESCRIPTION).should('exist');
        cy.getElement(elements.ERROR.BUTTON).should('exist');
      });
    });

    context('NC error responses', () => {
      it('should give an order correction if an order is still validating', () => {
        const processingStateMessage = 'ng.sales-checkout.text.error-previous-order-processing';
        cy.intercept('ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/customerManagement/customerAccount*', {
          body: customerAccountDetailsFactory.build({ status: CustomerAccountTypeEnum.ACTIVE }),
        });
        cy.visit(phoneAndChargerUrl);
        cy.getElement(elements.ERROR.PAGE).should('exist');
        cy.getElement(elements.ERROR.DESCRIPTION).should('exist');
        cy.getElement(elements.ERROR.DESCRIPTION).should('have.text', processingStateMessage);
        cy.getElement(elements.ERROR.BUTTON).should('exist');
      });
    });

    context('ERROR image', () => {
      it('should display normal image in desktop view', () => {
        cy.intercept('ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/customerManagement/customerAccount', {
          body: customerAccountDetailsFactory.build({ status: CustomerAccountTypeEnum.ACTIVE }),
        });

        cy.visit(phoneAndChargerUrl);
        cy.getElement(elements.ERROR.PAGE).should('exist');
        cy.getElement(elements.ERROR.IMAGE).should('be.visible');
        cy.getElement(elements.ERROR.IMAGE_MOBILE).should('not.be.visible');
      });
      it('should display mobile image in mobile view', () => {
        cy.viewport('iphone-6');
        cy.intercept('ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/customerManagement/customerAccount', {
          body: customerAccountDetailsFactory.build({ status: CustomerAccountTypeEnum.ACTIVE }),
        });
        cy.visit(phoneAndChargerUrl);
        cy.getElement(elements.ERROR.PAGE).should('exist');
        cy.getElement(elements.ERROR.IMAGE).should('not.be.visible');
        cy.getElement(elements.ERROR.IMAGE_MOBILE).should('be.visible');
      });
    });
  });
});
