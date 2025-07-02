describe('Fleet SIM User Activation', () => {
  beforeEach(() => {
    cy.viewport(1366, 768);
    cy.visit('/sim-activation-user?orderNumber=1234&msisdn=32479223312');
  });

  describe('On page load', () => {
    it('should display page title', () => {
      cy.get('.heading--nomargin.text-align--center.pb--s').should('exist');
      cy.get('.text-align--center.mb--xxl').should('exist');
    });

    it('should display inputs', () => {
      cy.intercept('/**/ocapi/oauth/userdetails', { customer_number: '1163298061' });

      const simActivationStatus = { status: 'Completed' };
      cy.intercept('/mobile-service/v2/subscriptions/', simActivationStatus);

      cy.get('#order-number').should('exist');
      cy.get('#msisdn').should('exist');
      cy.get('#sim-card-number').should('exist');
    });

    it('should display disabled activate button', () => {
      cy.get('.button.button--primary.display--flex.align-self--end').should('be.disabled');
    });
  });
});
