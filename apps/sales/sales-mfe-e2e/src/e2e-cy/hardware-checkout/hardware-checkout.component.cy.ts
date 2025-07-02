import {
  CanceledPayment,
  createOmapiProductStub,
  createSalesOrderStub,
  customerWithFiveUsedDiscountsBuyingTwoNewProducts,
  customerWithNoHardwareItemsBuyingTwoNewProductsOfWhichOneBigItem,
  Having3UsedDiscountsBuying2NewItems,
  Having5UsedDiscountsBuying2NewItems,
  HavingNoHardwareItemsBuying2NewItems,
} from './hardware-checkout.testfactory';
import { rawOmapiProductTestFactory } from '@telenet/ng-lib-omapi';
import { elements } from './constants/elements.const';
import {
  contactFactory,
  customerAccountDetailsFactory,
  personalIdentityResponseTestFactory,
  personalIdentityTestFactory,
} from '@sales/hardware-checkout/data-access';

const phoneAndChargerUrl =
  '/hardware-checkout?sdata=XQAAAAICAQAAAAAAAABAqYnmbFEIbVbO-Byot3B8C0q-GAHZdT11MPMbFQH4MFj4gjf0AkFqDaAeB9dzn9baBKB7RmPp7OoQ4j-Lbl3VMBLdsBtbXWLJHtvoOzhcRqx8AohTycQMV7G8Rgiw9U3BegCefQo7BvrIct4a6vGUWfhmEyATXDdZ1lpzazQM2q-r7dbDHfsQfm7PzWMiUC09m9_COqqyybToghn_61vQAA';

const successUrl = '/hardware-checkout?orderid=9168485854013261194&status=accept';
const cancelUrl = '/hardware-checkout?orderid=9168485854013261194&status=cancel';
const failedUrl = '/hardware-checkout?orderid=9168485854013261194&status=reject';
describe('Hardware checkout', () => {
  context('A customer ordering 2 items', () => {
    context('Errors', () => {
      beforeEach(() => {
        Having5UsedDiscountsBuying2NewItems();
        cy.visit(phoneAndChargerUrl);
      });

      it('should intercept createSalesOrder and show an error screen in case of 500 error', () => {
        cy.intercept(
          'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/customerAccount/location/123456789/salesOrder',
          {
            statusCode: 500,
            body: '500 internal server error',
          }
        );
        cy.visit(phoneAndChargerUrl);
        cy.get('tg-sales-stepper').should('not.exist');
        cy.get('tg-sales-error').should('exist');
      });

      it('should show an order correction when using incorrect SDATA', () => {
        cy.visit('/hardware-checkout');
        cy.get('tg-sales-stepper').should('not.exist');
        cy.get('tg-sales-error').should('exist');
      });
    });
    context('Stepper navigation', () => {
      beforeEach(() => {
        Having3UsedDiscountsBuying2NewItems();
        cy.visit(phoneAndChargerUrl);
      });
      it('should show and hide the navigation when opening and closing the overlay', () => {
        cy.getElement(elements.NAVIGATION_BAR).should('exist');
        cy.getElement(elements.FEAT_DELIVERY_CHANGE_ADDRESS).click();
        cy.getElement(elements.NAVIGATION_BAR).should('not.exist');
        cy.getElement(elements.FEAT_DELIVERY_CHANGE_INFO_CANCEL).click();
        cy.getElement(elements.NAVIGATION_BAR).should('exist');
      });
    });
    context('While having 5 used slots', () => {
      beforeEach(() => {
        Having5UsedDiscountsBuying2NewItems();
      });

      describe('ETF screen', () => {
        // it should show the etf screen
        it('should show the etf screen with 2 discount items', () => {
          cy.visit(phoneAndChargerUrl);
          cy.get(elements.SALES_STEPPER).should('exist');
          cy.getElement(elements.FEAT_ETF).should('exist');
        });

        it('should show a validation msg if not all etfs were configured', () => {
          cy.visit(phoneAndChargerUrl);
          cy.getElement(elements.FEAT_ETF_ORDER_ITEM_ETF_NO_BUTTON).should('have.length', 2);
          cy.getElement(elements.FEAT_ETF_ORDER_ITEM_ETF_YES_BUTTON).should('have.length', 2);
          cy.getElement(elements.FEAT_ETF_ORDER_ITEM_ETF_NO_BUTTON).first().click();
          cy.getElement(elements.FEAT_ETF_ORDER_ITEM_ETF_YES_BUTTON).first().click();
          cy.getElement(elements.NAVIGATION_BAR_NEXT).first().click();
          cy.getElement(elements.FEAT_ETF_VALIDATION_MESSAGE).should('exist');
        });
      });

      describe('Delivery screen', () => {
        it('should render the delivery screen with the correct items', () => {
          cy.visit(phoneAndChargerUrl);
          cy.getElement(elements.FEAT_ETF_ORDER_ITEM_ETF_NO_BUTTON).first().click();
          cy.getElement(elements.FEAT_ETF_ORDER_ITEM_ETF_NO_BUTTON).last().click();
          cy.getElement(elements.NAVIGATION_BAR_NEXT).first().click();
          cy.get('app-loader').should('not.be.visible');
          cy.get('tg-sales-delivery-items').should('exist');
          cy.getElement(elements.FEAT_DELIVERY_ITEM).should('exist').should('have.length', 2);
          cy.get('tg-sales-delivery-notification').should('exist');
          cy.get('tg-sales-delivery-delivery-address').should('exist');
          cy.get('tg-sales-delivery-personal-info').should('exist');
          // Should show the previous button
        });

        it('should render big item notification', () => {
          cy.intercept('omapi-query/public/hc-products/v1/products?itemcodes=*', {
            body: createOmapiProductStub(customerWithNoHardwareItemsBuyingTwoNewProductsOfWhichOneBigItem),
          });
          cy.visit(phoneAndChargerUrl);
          cy.getElement(elements.FEAT_ETF_ORDER_ITEM_ETF_NO_BUTTON).first().click();
          cy.getElement(elements.FEAT_ETF_ORDER_ITEM_ETF_NO_BUTTON).last().click();
          cy.getElement(elements.NAVIGATION_BAR_NEXT).first().click();
          cy.get('app-loader').should('not.be.visible');
          cy.get('tg-sales-delivery-items').should('exist');
          cy.getElement(elements.FEAT_DELIVERY_ITEM).should('exist').should('have.length', 2);
          cy.get('tg-sales-delivery-notification').should('exist').should('have.length', 2);
          // Should show the previous button
        });

        context('changes address', () => {
          const updatedPersonalInfo = {
            firstname: 'UpdatedFirstName',
            lastname: 'UpdatedLastName',
            mobile: '0411111111',
            email: 'updates@email.com',
          };

          it('should change the address and personal info', () => {
            cy.intercept('/telenet/data/streets?postalCode=2800', { body: ['Begijnenstraat'] });
            cy.visit(phoneAndChargerUrl);
            cy.getElement(elements.FEAT_ETF_ORDER_ITEM_ETF_NO_BUTTON).first().click();
            cy.getElement(elements.FEAT_ETF_ORDER_ITEM_ETF_NO_BUTTON).last().click();
            cy.getElement(elements.NAVIGATION_BAR_NEXT).first().click();

            // Click change address
            cy.getElement(elements.FEAT_DELIVERY_CHANGE_ADDRESS).click();

            // Should show the overlay
            // change personal info
            cy.get('tg-sales-change-delivery-personal-info').should('be.visible');
            cy.getElement(elements.FEAT_DELIVERY_PERSONAL_INFO_FIRST_NAME).clear().type(updatedPersonalInfo.firstname);
            cy.getElement(elements.FEAT_DELIVERY_PERSONAL_INFO_LAST_NAME).clear().type(updatedPersonalInfo.lastname);
            cy.getElement(elements.FEAT_DELIVERY_PERSONAL_INFO_MOBILE).clear().type(updatedPersonalInfo.mobile);
            cy.getElement(elements.FEAT_DELIVERY_PERSONAL_INFO_EMAIL).clear().type(updatedPersonalInfo.email);

            // change address
            cy.getElement(elements.FEAT_DELIVERY_ADDRESS_MUNICIPALITY).clear().type('2800');
            cy.get('mat-option').contains('2800 - Mechelen').click();

            cy.getElement(elements.FEAT_DELIVERY_ADDRESS_STREET).should('be.empty');
            cy.getElement(elements.FEAT_DELIVERY_ADDRESS_STREET).type('Begij');
            cy.get('mat-option').contains('Begijnenstraat').click();

            cy.getElement(elements.FEAT_DELIVERY_ADDRESS_HOUSE_NUMBER).type('50');
            cy.get('mat-option').contains('50').click();

            cy.getElement(elements.FEAT_DELIVERY_ADDRESS_SUB_HOUSE_NUMBER).type('A');
            cy.get('mat-option').contains('A').click();

            cy.getElement(elements.FEAT_DELIVERY_ADDRESS_BOX).click();
            cy.getElement(elements.FEAT_DELIVERY_ADDRESS_BOX).type('1');
            cy.get('mat-option').contains('103 (1)').click();
            // Should have changed the info on the screen
            cy.getElement(elements.FEAT_DELIVERY_CHANGE_INFO_SUBMIT).click();

            cy.getElement(elements.NAVIGATION_BAR_NEXT).first().click();
            // Should show the address on the summary screen
          });
        });
      });

      describe('Summary screen', () => {
        it('should render the summary screen with the NO discount items', () => {
          cy.visit(phoneAndChargerUrl);
          cy.get('app-loader').should('not.be.visible');
          cy.getElement(elements.FEAT_ETF_ORDER_ITEM_ETF_NO_BUTTON).should('have.length', 2);
          cy.getElement(elements.FEAT_ETF_ORDER_ITEM_ETF_YES_BUTTON).should('have.length', 2);
          cy.getElement(elements.FEAT_ETF_ORDER_ITEM_ETF_NO_BUTTON).first().click();
          cy.getElement(elements.FEAT_ETF_ORDER_ITEM_ETF_NO_BUTTON).last().click();
          cy.getElement(elements.NAVIGATION_BAR_NEXT).first().click();
          cy.getElement(elements.NAVIGATION_BAR_NEXT).first().click();
          cy.get('tg-sales-summary-personal-info').should('exist');
          cy.get('tg-sales-summary-delivery-info').should('exist');
          cy.get('tg-sales-summary-order-data').should('exist');
          cy.get('tg-sales-summary-footer').should('exist');
          cy.getElement(elements.FEAT_SUMMARY_DEPRECIATION_ITEM).should('not.exist');
          cy.getElement(elements.FEAT_SUMMARY_ORDER_ITEM_DISCOUNT_ROW).should('not.exist');
          cy.get('tg-sales-summary-order-item-with-discount').should('not.exist');
        });

        it('should render the summary screen WITH the discount items', () => {
          cy.intercept(
            'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/calculateDelivery',
            {
              body: createSalesOrderStub(customerWithFiveUsedDiscountsBuyingTwoNewProducts, false, ['1000']),
            }
          );
          cy.intercept('omapi/public/product/1000', {
            body: { product: rawOmapiProductTestFactory.build({ productid: '1000' }) },
          });
          cy.visit(phoneAndChargerUrl);
          cy.getElement(elements.FEAT_ETF_ORDER_ITEM_ETF_YES_BUTTON).first().click();
          cy.getElement(elements.FEAT_ETF_ORDER_ITEM_ETF_NO_BUTTON).last().click();
          cy.getElement(elements.FEAT_ETF_ETF_ITEM).first().click();
          cy.getElement(elements.FEAT_ETF_APPLY_BUTTON).click();
          cy.getElement(elements.NAVIGATION_BAR_NEXT).first().click();
          cy.getElement(elements.NAVIGATION_BAR_NEXT).first().click();
          cy.getElement(elements.FEAT_SUMMARY_ORDER_ITEM_DISCOUNT_ROW).should('exist').should('have.length', 1);
        });

        it('should redirect to the TOC', () => {
          cy.visit(phoneAndChargerUrl);
          cy.get('app-loader').should('not.be.visible');
          cy.getElement(elements.FEAT_ETF_ORDER_ITEM_ETF_NO_BUTTON).first().click();
          cy.getElement(elements.FEAT_ETF_ORDER_ITEM_ETF_NO_BUTTON).last().click();
          cy.getElement(elements.NAVIGATION_BAR_NEXT).click();
          cy.getElement(elements.NAVIGATION_BAR_NEXT).click();

          cy.window().then((win) => {
            cy.stub(win, 'open').as('Open');
          });
          cy.getElement(elements.FEAT_SUMMARY_TOC_LINK).click();
          cy.get('@Open').should('have.been.calledOnce');
        });
      });

      context('While selecting 1 etf to be replaced by a discount', () => {
        beforeEach(() => {
          Having5UsedDiscountsBuying2NewItems();
          cy.visit(phoneAndChargerUrl);
        });

        it('should delete and add discounts when discounts are selected ', () => {
          cy.getElement(elements.FEAT_ETF_ORDER_ITEM_ETF_YES_BUTTON).first().click();
          cy.getElement(elements.FEAT_ETF_ORDER_ITEM_ETF_NO_BUTTON).last().click();
          cy.getElement(elements.FEAT_ETF_ETF_ITEM).first().click();
          cy.getElement(elements.FEAT_ETF_APPLY_BUTTON).click();
          cy.getElement(elements.NAVIGATION_BAR_NEXT).first().click();
        });

        it('should reload the etf screen and reset the screen', () => {
          cy.getElement(elements.FEAT_ETF_ORDER_ITEM_ETF_YES_BUTTON).first().click();
          cy.getElement(elements.FEAT_ETF_ORDER_ITEM_ETF_NO_BUTTON).last().click();
          cy.getElement(elements.FEAT_ETF_ETF_ITEM).first().click();
          cy.getElement(elements.FEAT_ETF_APPLY_BUTTON).click();
          cy.getElement(elements.NAVIGATION_BAR_NEXT).first().click();
          cy.getElement(elements.NAVIGATION_BAR_PREVIOUS).first().click();
          cy.get(elements.FEAT_ETF_ORDER_ITEM).should('have.length', 2);
        });
      });
    });
    context('While having less then 5 used slots', () => {
      beforeEach(() => {
        Having3UsedDiscountsBuying2NewItems();
        cy.visit(phoneAndChargerUrl);
      });

      describe('ETF screen', () => {
        // it should show the etf screen
        it('should NOT show the etf screen but the delivery screen with 2 items', () => {
          cy.get(elements.SALES_STEPPER).should('exist');
          cy.getElement(elements.FEAT_ETF).should('not.exist');
          cy.getElement(elements.FEAT_DELIVERY).should('exist');
        });
      });

      describe('Delivery screen', () => {
        // it should show the etf screen
        it('should show same day delivery notification after etf screen', () => {
          cy.get('app-loader').should('not.be.visible');
          cy.get('tg-sales-delivery-items').should('exist');
          cy.getElement(elements.FEAT_DELIVERY_ITEM).should('exist').should('have.length', 2);
          cy.get('tg-sales-delivery-delivery-address').should('exist');
          cy.get('tg-sales-delivery-personal-info').should('exist');
          cy.get('tg-sales-delivery-notification').should('exist');
          // Should NOT show the previous button
        });
      });

      describe('Summary screen', () => {
        it('should render the summary screen with the correct items', () => {
          cy.getElement(elements.NAVIGATION_BAR_NEXT).first().click();
          cy.get('tg-sales-summary-personal-info').should('exist');
          cy.get('tg-sales-summary-delivery-info').should('exist');
          cy.get('tg-sales-summary-order-data').should('exist');
          cy.get('tg-sales-summary-footer').should('exist');
          cy.getElement(elements.FEAT_SUMMARY_DEPRECIATION_ITEM).should('not.exist');
          // Should not show any discounts
          cy.get('tg-sales-summary-order-item-with-discount').should('not.exist');
          // Should not show any depreciation tables
        });
      });
    });
    context('While having no hardware items', () => {
      beforeEach(() => {
        HavingNoHardwareItemsBuying2NewItems();
        cy.visit(phoneAndChargerUrl);
      });

      describe('ETF screen', () => {
        it('should NOT show the etf screen but the delivery screen with 2 items', () => {
          cy.get(elements.SALES_STEPPER).should('exist');
          cy.getElement(elements.FEAT_ETF).should('not.exist');
          cy.getElement(elements.FEAT_DELIVERY).should('exist');
        });
      });

      describe('Delivery screen', () => {
        it('should show same day delivery notification', () => {
          cy.get('app-loader').should('not.be.visible');
          cy.get('tg-sales-delivery-items').should('exist');
          cy.getElement(elements.FEAT_DELIVERY_ITEM).should('exist').should('have.length', 2);
          cy.get('tg-sales-delivery-delivery-address').should('exist');
          cy.get('tg-sales-delivery-personal-info').should('exist');
          cy.get('tg-sales-delivery-notification').should('exist');
          // Should NOT show the previous button
        });
      });

      describe('Summary screen', () => {
        it('should render the summary screen with the correct items', () => {
          cy.get('app-loader').should('not.be.visible');
          cy.getElement(elements.NAVIGATION_BAR_NEXT).click();
        });

        it('should render notification message when error occurs in contract generation', () => {
          cy.intercept(
            'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/document/cs/generation',
            {
              body: 'oops something went wrong',
              statusCode: 500,
            }
          );
          cy.getElement(elements.NAVIGATION_BAR_NEXT).click();
          cy.get('app-loader').should('not.be.visible');
          cy.getElement('order-summary-toc-link').click();
          cy.getElement('app-message-flow')
            .should('exist')
            .should('contain.text', 'ng.sales-checkout.lbl.error.contract-generation-errorfield');
        });
      });

      describe('Payment', () => {
        it('should redirect to the payment', () => {
          cy.getElement(elements.NAVIGATION_BAR_NEXT).click();
          cy.document().then((doc) => {
            doc.addEventListener('submit', cy.stub().as('submit'));
          });
          cy.getElement(elements.INGENICO_FORM)
            .then((form$) => {
              form$.on('submit', (event: JQuery.Event) => {
                event.preventDefault();
              });
            })
            .as('ogoneRequest');
          cy.getElement(elements.NAVIGATION_BAR_NEXT).click();
          cy.get('app-loader').should('not.be.visible');
        });
        it('should redirect to the payment on order button clicked', () => {
          cy.getElement(elements.NAVIGATION_BAR_NEXT).click();
          cy.document().then((doc) => {
            doc.addEventListener('submit', cy.stub().as('submit'));
          });
          cy.getElement(elements.INGENICO_FORM)
            .then((form$) => {
              form$.on('submit', (event: JQuery.Event) => {
                event.preventDefault();
              });
            })
            .as('ogoneRequest');
          cy.getElement(elements.FEAT_SUMMARY_ORDER_BUTTON).click();
          cy.get('app-loader').should('not.be.visible');
          cy.getElement(elements.FEAT_THANK_YOU).should('not.exist');
        });
      });
    });
    context('Returning after completing succesful payment', () => {
      beforeEach(() => {
        HavingNoHardwareItemsBuying2NewItems();
        cy.visit(successUrl);
      });

      describe('thank-you screen', () => {
        it('should display a thank you screen if accept is in the url', () => {
          cy.getElement(elements.FEAT_THANK_YOU).should('exist');
          cy.get('app-loader').should('not.be.visible');
          cy.getElement(elements.FEAT_THANK_YOU_IMAGE).should('be.visible');
          cy.getElement(elements.FEAT_THANK_YOU_BUTTON).click();
          cy.location().should((loc) => {
            expect(loc.pathname).to.eq('/');
          });
        });
        it('should display mobile image when in mobile view', () => {
          cy.viewport('iphone-6');

          cy.getElement(elements.FEAT_THANK_YOU).should('exist');
          cy.get('app-loader').should('not.be.visible');
          cy.getElement(elements.FEAT_THANK_YOU_IMAGE).should('not.be.visible');
          cy.getElement(elements.FEAT_THANK_YOU_MOBILE_IMAGE).should('be.visible');
        });
      });
    });
    context('Returning after cancelling payment', () => {
      beforeEach(() => {
        CanceledPayment();
        cy.visit(cancelUrl);
      });

      describe('canceled payment flow', () => {
        it('should display the summary screen', () => {
          cy.getElement(elements.FEAT_THANK_YOU).should('not.exist');
          cy.get('app-loader').should('not.be.visible');
          cy.getElement('app-message-flow').should('not.exist');
          cy.get('tg-sales-summary-personal-info').should('exist');
          cy.get('tg-sales-summary-delivery-info').should('exist');
          cy.get('tg-sales-summary-order-data').should('exist');
          cy.get('tg-sales-summary-footer').should('exist');
        });

        it('should redirect to the payment', () => {
          cy.document().then((doc) => {
            doc.addEventListener('submit', cy.stub().as('submit'));
          });
          cy.getElement(elements.INGENICO_FORM)
            .then((form$) => {
              form$.on('submit', (event: JQuery.Event) => {
                event.preventDefault();
              });
            })
            .as('ogoneRequest');
          cy.getElement(elements.NAVIGATION_BAR_NEXT).click();
          cy.get('app-loader').should('not.be.visible');
        });
      });
    });

    context('Returning after failed payment', () => {
      beforeEach(() => {
        CanceledPayment();
        cy.visit(failedUrl);
      });

      describe('Failed payment flow', () => {
        it('should display summary screen with message', () => {
          cy.getElement(elements.FEAT_THANK_YOU).should('not.exist');
          cy.get('app-loader').should('not.be.visible');
          cy.getElement('app-message-flow').should('exist');
          cy.get('tg-sales-summary-personal-info').should('exist');
          cy.get('tg-sales-summary-delivery-info').should('exist');
          cy.get('tg-sales-summary-order-data').should('exist');
          cy.get('tg-sales-summary-footer').should('exist');
        });
      });
    });
  });

  context('Customer missing mandatory personal info', () => {
    it('should automatically open change address overlay when navigating to Delivery Step', () => {
      Having5UsedDiscountsBuying2NewItems();
      // intercept account details and PID to return empty e-mail and/or empty mobile
      cy.intercept('ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/customerManagement/customerAccount', {
        body: customerAccountDetailsFactory.build({ contacts: [contactFactory.build()] }),
      });
      cy.intercept('ocapi/public/api/sales-service/v2/pid', {
        body: personalIdentityResponseTestFactory.build({
          chars: personalIdentityTestFactory.build({ 'E-Mail': '', 'Mobile Number': '' }),
        }),
      });

      cy.visit(phoneAndChargerUrl);

      cy.getElement(elements.FEAT_ETF_ORDER_ITEM_ETF_NO_BUTTON).first().click();
      cy.getElement(elements.FEAT_ETF_ORDER_ITEM_ETF_NO_BUTTON).last().click();
      cy.getElement(elements.NAVIGATION_BAR_NEXT).first().click();

      cy.get('tg-sales-change-delivery-personal-info').should('be.visible');
      cy.getElement(elements.FEAT_DELIVERY_PERSONAL_INFO_MOBILE_REQUIRED).should('be.visible');
      cy.getElement(elements.FEAT_DELIVERY_PERSONAL_INFO_EMAIL_REQUIRED).should('be.visible');
      cy.getElement(elements.FEAT_DELIVERY_PERSONAL_INFO_CHECK_REQUIRED_FIELDS_INFO).should('be.visible');
    });
  });
});
