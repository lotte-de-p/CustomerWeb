import {
  MYBASE_DASHBOARD_ONBOARDING_CARD_BILLING,
  MYBASE_DASHBOARD_ONBOARDING_CARD_COMING_SOON,
  MYBASE_DASHBOARD_ONBOARDING_CARD_HOME_NETWORK,
  MYBASE_DASHBOARD_ONBOARDING_CARD_INTERNET,
  MYBASE_DASHBOARD_ONBOARDING_CARD_MOBILE,
  MYBASE_DASHBOARD_ONBOARDING_CARD_NO_BILLS,
} from './cypress-constants';

// We need to extend this while we are working on dashboard.
describe('MyBase Dashboard Onboarding Usage Card - Billing', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-1-onboarding--billing-card-pending'));

  it('should render the dashboard with billing card', () => {
    cy.get(MYBASE_DASHBOARD_ONBOARDING_CARD_BILLING).should('exist');
    cy.get(MYBASE_DASHBOARD_ONBOARDING_CARD_NO_BILLS).should('exist');
  });
});

describe('MyBase Dashboard Onboarding Usage Card - Mobile', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-1-onboarding--mobile-usage-card-pending'));

  it('should render the dashboard with mobile usage card', () => {
    cy.get(MYBASE_DASHBOARD_ONBOARDING_CARD_MOBILE).should('exist');
    cy.get(MYBASE_DASHBOARD_ONBOARDING_CARD_COMING_SOON).should('exist');
  });
});

describe('MyBase Dashboard Onboarding Usage Card - Internet', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-1-onboarding--internet-usage-card-pending'));

  it('should render the dashboard with internet usage card', () => {
    cy.get(MYBASE_DASHBOARD_ONBOARDING_CARD_INTERNET).should('exist');
    cy.get(MYBASE_DASHBOARD_ONBOARDING_CARD_COMING_SOON).should('exist');
  });
});

describe('MyBase Dashboard Onboarding Usage Card - Home Network', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-1-onboarding--home-network-card-pending'));

  it('should render the dashboard with home network card', () => {
    cy.get(MYBASE_DASHBOARD_ONBOARDING_CARD_HOME_NETWORK).should('exist');
    cy.get(MYBASE_DASHBOARD_ONBOARDING_CARD_COMING_SOON).should('exist');
  });
});
