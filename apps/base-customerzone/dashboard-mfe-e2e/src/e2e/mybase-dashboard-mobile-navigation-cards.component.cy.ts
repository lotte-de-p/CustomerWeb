import {
  MYBASE_MOBILE_DASHBOARD_NAVIGATION_CARDS_MOBILE_USAGE_NOTIFICATION,
  MYBASE_MOBILE_DASHBOARD_NAVIGATION_CARDS_PRODUCT_OVERVIEW,
  MYBASE_MOBILE_DASHBOARD_NAVIGATION_CARDS_SIM_MANAGEMENT,
  MYBASE_MOBILE_DASHBOARD_NAVIGATION_CARDS_VOICEMAIL,
} from './cypress-constants';

describe('MyBase Mobile Dashboard Navigation Cards - All cards visible', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-2-mobile-navigation-cards--all-cards-visible'));

  it('should render all cards', () => {
    cy.get(MYBASE_MOBILE_DASHBOARD_NAVIGATION_CARDS_MOBILE_USAGE_NOTIFICATION).should('exist');
    cy.get(MYBASE_MOBILE_DASHBOARD_NAVIGATION_CARDS_VOICEMAIL).should('exist');
    cy.get(MYBASE_MOBILE_DASHBOARD_NAVIGATION_CARDS_SIM_MANAGEMENT).should('exist');
    cy.get(MYBASE_MOBILE_DASHBOARD_NAVIGATION_CARDS_PRODUCT_OVERVIEW).should('exist');
  });
});

describe('MyBase Mobile Dashboard Navigation Cards - Some cards visible', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-2-mobile-navigation-cards--some-cards-visible'));

  it('should render some cards but not all', () => {
    cy.get(MYBASE_MOBILE_DASHBOARD_NAVIGATION_CARDS_MOBILE_USAGE_NOTIFICATION).should('exist');
    cy.get(MYBASE_MOBILE_DASHBOARD_NAVIGATION_CARDS_PRODUCT_OVERVIEW).should('exist');
    cy.get(MYBASE_MOBILE_DASHBOARD_NAVIGATION_CARDS_VOICEMAIL).should('not.exist');
    cy.get(MYBASE_MOBILE_DASHBOARD_NAVIGATION_CARDS_SIM_MANAGEMENT).should('not.exist');
  });
});
