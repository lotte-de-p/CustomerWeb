import {
  MYBASE_DASHBOARD_MANAGE_PRODUCTS_DTV_CARD,
  MYBASE_DASHBOARD_MANAGE_PRODUCTS_DTV_CARD_PENDING,
  MYBASE_DASHBOARD_MANAGE_PRODUCTS_INTERNET_CARD,
  MYBASE_DASHBOARD_MANAGE_PRODUCTS_INTERNET_CARD_PENDING,
  MYBASE_DASHBOARD_MANAGE_PRODUCTS_MOBILE_CARD,
  MYBASE_DASHBOARD_MANAGE_PRODUCTS_MOBILE_CARD_PENDING,
  MYBASE_DASHBOARD_MANAGE_PRODUCTS_PENDING,
} from './cypress-constants';

describe('MyBase Dashboard Manage Products - All product types, multiple products', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=mybase-dashboard-level-1-manage-products--all-product-types-multiple-products')
  );

  it('should render all cards (product types)', () => {
    cy.get(MYBASE_DASHBOARD_MANAGE_PRODUCTS_INTERNET_CARD).should('exist');
    cy.get(MYBASE_DASHBOARD_MANAGE_PRODUCTS_DTV_CARD).should('exist');
    cy.get(MYBASE_DASHBOARD_MANAGE_PRODUCTS_MOBILE_CARD).should('exist');
  });
});

describe('MyBase Dashboard Manage Products - One product type, one product', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-1-manage-products--one-product-type-one-product'));

  it('should render the card for the product type available', () => {
    cy.get(MYBASE_DASHBOARD_MANAGE_PRODUCTS_MOBILE_CARD).should('exist');
  });

  it('should not render other product types that are not available', () => {
    cy.get(MYBASE_DASHBOARD_MANAGE_PRODUCTS_INTERNET_CARD).should('not.exist');
    cy.get(MYBASE_DASHBOARD_MANAGE_PRODUCTS_DTV_CARD).should('not.exist');
  });
});

describe('MyBase Dashboard Manage Products - Few Products Pending', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=mybase-dashboard-level-1-manage-products--few-cards-pending-for-onboarding')
  );

  it('should render the pending card for the product type available', () => {
    cy.get(MYBASE_DASHBOARD_MANAGE_PRODUCTS_MOBILE_CARD_PENDING).should('exist');
    cy.get(MYBASE_DASHBOARD_MANAGE_PRODUCTS_PENDING).should('exist');
  });
});

describe('MyBase Dashboard Manage Products - All Products Pending', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=mybase-dashboard-level-1-manage-products--all-cards-pending-for-onboarding')
  );

  it('should render the pending card for all product types', () => {
    cy.get(MYBASE_DASHBOARD_MANAGE_PRODUCTS_MOBILE_CARD_PENDING).should('exist');
    cy.get(MYBASE_DASHBOARD_MANAGE_PRODUCTS_INTERNET_CARD_PENDING).should('exist');
    cy.get(MYBASE_DASHBOARD_MANAGE_PRODUCTS_DTV_CARD_PENDING).should('exist');
    cy.get(MYBASE_DASHBOARD_MANAGE_PRODUCTS_PENDING).should('exist');
  });
});
