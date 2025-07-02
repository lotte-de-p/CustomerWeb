import {
  MYBASE_DASHBOARD_SUPPORT_ASSISTANCE_BEST_TARIFF,
  MYBASE_DASHBOARD_SUPPORT_ASSISTANCE_EASY_SWITCH,
  MYBASE_DASHBOARD_SUPPORT_ASSISTANCE_SUPPORT,
} from './cypress-constants';

describe('MyBase Dashboard Support Assistance - All cards visible', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-1-support-assistance--all-cards-visible'));

  it('should render all cards', () => {
    cy.get(MYBASE_DASHBOARD_SUPPORT_ASSISTANCE_BEST_TARIFF).should('exist');
    cy.get(MYBASE_DASHBOARD_SUPPORT_ASSISTANCE_EASY_SWITCH).should('exist');
    cy.get(MYBASE_DASHBOARD_SUPPORT_ASSISTANCE_SUPPORT).should('exist');
  });
});

describe('MyBase Dashboard Support Assistance - Some cards visible', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-1-support-assistance--some-cards-visible'));

  it('should render some cards but not all', () => {
    cy.get(MYBASE_DASHBOARD_SUPPORT_ASSISTANCE_EASY_SWITCH).should('exist');
    cy.get(MYBASE_DASHBOARD_SUPPORT_ASSISTANCE_BEST_TARIFF).should('not.exist');
    cy.get(MYBASE_DASHBOARD_SUPPORT_ASSISTANCE_SUPPORT).should('not.exist');
  });
});
