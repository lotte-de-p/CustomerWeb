import { BillingOverviewComponent } from './billing-overview.component';
import { BillingFacade } from '@demo/billing/data-access';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';

describe('BillingOverviewComponent', () => {
  beforeEach(() => {
    cy.mount(BillingOverviewComponent, {
      imports: [TgTranslateTestingModule.forRoot(), EffectsModule.forRoot(), StoreModule.forRoot()],
      providers: [BillingFacade],
      componentProperties: {},
    });
  });

  it('should render', () => {
    const invoiceAmounts = ['€ 968.52', '€ 132.23', '€ 2.5'];

    cy.get('[data-testid="invoice-amount"]').each((item, index) => {
      cy.wrap(item).should('contain.text', invoiceAmounts[index]);
    });
  });

  describe(`When expanding an invoice`, () => {
    beforeEach(() => {
      cy.get('[data-testid="accordion-button"]').first().click();
    });

    it(`should show the details for that invoice`, () => {
      cy.get('[data-testid="invoice-card-content"]')
        .first()
        .should('be.visible')
        .within(() => {
          cy.get('[data-testid="invoice-pay-now"]').should('be.visible');
          cy.get('[data-testid="invoice-description"]').should(
            'contain.text',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius condimentum nibh. Integer nulla diam, mattis eu semper in, ultricies. '
          );
        });
    });

    describe(`When I click to pay the invoice`, () => {
      it(`should log a payment to the console`, () => {
        cy.get('[data-testid="invoice-card-content"]')
          .first()
          .should('be.visible')
          .within(() => {
            cy.stub(window.console, 'log').as('consoleLog');
            cy.get('[data-testid="invoice-pay-now"]').click();
            cy.get('@consoleLog').should('be.calledWith', 'PAYED invoice Mar23 - 25695');
          });
      });
    });
  });

  describe(`When clicking on a sortable header`, () => {
    it(`should change the sort icon`, () => {
      cy.get('[data-testid="sort-status"]')
        .should('be.visible')
        .click()
        .within(() => {
          cy.get('.icon-sort-arrow-down').should('exist');
        });
    });
  });
});
