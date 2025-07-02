import {
  MYBASE_DASHBOARD_BILLING,
  MYBASE_DASHBOARD_BILLING_BUTTON_PAY_NOW,
  MYBASE_DASHBOARD_BILLING_BUTTON_VIEW_BILLS,
  MYBASE_DASHBOARD_BILLING_BUTTON_VIEW_DETAILS,
  MYBASE_DASHBOARD_BILLING_DUE_BILL_MULTIPLE,
  MYBASE_DASHBOARD_BILLING_DUE_BILL_SINGLE,
  MYBASE_DASHBOARD_BILLING_NO_OPEN_AMOUNT,
  MYBASE_DASHBOARD_BILLING_OVERDUE_BILL_MULTIPLE,
  MYBASE_DASHBOARD_BILLING_OVERDUE_BILL_SINGLE,
  MYBASE_DASHBOARD_BILLING_REFUNDS_MULTIPLE,
  MYBASE_DASHBOARD_BILLING_REFUNDS_SINGLE,
} from './cypress-constants';

describe('MyBase Dashboard Billing Card - No open amount', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-1-billing-card--no-open-amount'));

  it('should render the billing card with no open amount', () => {
    cy.get(MYBASE_DASHBOARD_BILLING).should('exist');
    cy.get(MYBASE_DASHBOARD_BILLING_NO_OPEN_AMOUNT).should('exist');
    cy.get(`${MYBASE_DASHBOARD_BILLING_NO_OPEN_AMOUNT} img`)
      .eq(0)
      .should('have.attr', 'src')
      .should('include', 'happy-bills');
  });
});

describe('MyBase Dashboard Billing Card - Due bills single', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-1-billing-card--due-bills-single'));

  it('should render the billing card with due bills single', () => {
    cy.get(MYBASE_DASHBOARD_BILLING).should('exist');
    cy.get(MYBASE_DASHBOARD_BILLING_DUE_BILL_SINGLE).should('exist');
    cy.get(MYBASE_DASHBOARD_BILLING_BUTTON_PAY_NOW).should('exist');
  });
});

describe('MyBase Dashboard Billing Card - Due bills multiple', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-1-billing-card--due-bills-multiple'));

  it('should render the billing card with due bills multiple', () => {
    cy.get(MYBASE_DASHBOARD_BILLING).should('exist');
    cy.get(MYBASE_DASHBOARD_BILLING_DUE_BILL_MULTIPLE).should('exist');
    cy.get(MYBASE_DASHBOARD_BILLING_BUTTON_VIEW_BILLS).should('exist');
  });
});

describe('MyBase Dashboard Billing Card - Overdue bills single Payment method Manual', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=mybase-dashboard-level-1-billing-card--over-due-bills-single-payment-manual')
  );

  it('should render the billing card with overdue bills single', () => {
    cy.get(MYBASE_DASHBOARD_BILLING).should('exist');
    cy.get(MYBASE_DASHBOARD_BILLING_OVERDUE_BILL_SINGLE).should('exist');
    cy.get(MYBASE_DASHBOARD_BILLING_BUTTON_PAY_NOW).should('exist');
    cy.get(MYBASE_DASHBOARD_BILLING_BUTTON_VIEW_DETAILS).should('not.exist');
  });
});

describe('MyBase Dashboard Billing Card - Overdue bills single Payment method Direct debit', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=mybase-dashboard-level-1-billing-card--over-due-bills-single-payment-direct-debit')
  );

  it('should render the billing card with overdue bills single', () => {
    cy.get(MYBASE_DASHBOARD_BILLING).should('exist');
    cy.get(MYBASE_DASHBOARD_BILLING_OVERDUE_BILL_SINGLE).should('exist');
    cy.get(MYBASE_DASHBOARD_BILLING_BUTTON_PAY_NOW).should('not.exist');
    cy.get(MYBASE_DASHBOARD_BILLING_BUTTON_VIEW_DETAILS).should('exist');
  });
});

describe('MyBase Dashboard Billing Card - Overdue bills multiple', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-1-billing-card--over-due-bills-multiple'));

  it('should render the billing card with overdue bills multiple', () => {
    cy.get(MYBASE_DASHBOARD_BILLING).should('exist');
    cy.get(MYBASE_DASHBOARD_BILLING_OVERDUE_BILL_MULTIPLE).should('exist');
    cy.get(MYBASE_DASHBOARD_BILLING_BUTTON_VIEW_BILLS).should('exist');
  });
});

describe('MyBase Dashboard Billing Card - Refunds single', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-1-billing-card--refunds-single'));

  it('should render the billing card with refunds single', () => {
    cy.get(MYBASE_DASHBOARD_BILLING).should('exist');
    cy.get(MYBASE_DASHBOARD_BILLING_REFUNDS_SINGLE).should('exist');
    cy.get(MYBASE_DASHBOARD_BILLING_BUTTON_VIEW_DETAILS).should('exist');
  });
});

describe('MyBase Dashboard Billing Card - Refunds multiple', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-1-billing-card--refunds-multiple'));

  it('should render the billing card with refunds multiple', () => {
    cy.get(MYBASE_DASHBOARD_BILLING).should('exist');
    cy.get(MYBASE_DASHBOARD_BILLING_REFUNDS_MULTIPLE).should('exist');
    cy.get(MYBASE_DASHBOARD_BILLING_BUTTON_VIEW_DETAILS).should('exist');
  });
});
