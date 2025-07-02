import { MYBASE_DASHBOARD_BILLING, MYBASE_DASHBOARD_MANAGE_PRODUCTS_INTERNET_CARD } from './cypress-constants';

// We need to extend this while we are working on dashboard.
describe('MyBase Dashboard', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-1-dashboard--full-dashboard'));

  it('should render the dashboard with billing card', () => {
    cy.get(MYBASE_DASHBOARD_BILLING).should('exist');
  });

  it('should render the dashboard with manage products card', () => {
    cy.get(MYBASE_DASHBOARD_MANAGE_PRODUCTS_INTERNET_CARD).should('exist');
  });
});
