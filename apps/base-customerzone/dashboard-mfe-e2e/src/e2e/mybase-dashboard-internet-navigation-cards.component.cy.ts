import {
  MYBASE_INTERNET_DASHBOARD_NAVIGATION_CARDS_INTERNET_USAGE_NOTIFICATION,
  MYBASE_INTERNET_DASHBOARD_NAVIGATION_CARDS_SPEEDTEST,
  MYBASE_INTERNET_DASHBOARD_NAVIGATION_CARDS_MANAGE_YOUR_PRODUCT,
  MYBASE_INTERNET_DASHBOARD_NAVIGATION_CARDS_MY_DEVICE,
  MYBASE_INTERNET_DASHBOARD_NAVIGATION_CARDS_DEVICE_USING_YOUR_NETWORK,
} from './cypress-constants';

describe('MyBase Internet Dashboard Navigation Cards - All cards visible', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-2-internet-navigation-cards--all-cards-visible'));

  it('should render all cards', () => {
    cy.get(MYBASE_INTERNET_DASHBOARD_NAVIGATION_CARDS_INTERNET_USAGE_NOTIFICATION).should('exist');
    cy.get(MYBASE_INTERNET_DASHBOARD_NAVIGATION_CARDS_SPEEDTEST).should('exist');
    cy.get(MYBASE_INTERNET_DASHBOARD_NAVIGATION_CARDS_MANAGE_YOUR_PRODUCT).should('exist');
    cy.get(MYBASE_INTERNET_DASHBOARD_NAVIGATION_CARDS_MY_DEVICE).should('exist');
    cy.get(MYBASE_INTERNET_DASHBOARD_NAVIGATION_CARDS_DEVICE_USING_YOUR_NETWORK).should('exist');
  });
});

describe('MyBase DTV Dashboard Navigation Cards - Some cards visible', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-2-internet-navigation-cards--some-cards-visible'));

  it('should render some cards but not all', () => {
    cy.get(MYBASE_INTERNET_DASHBOARD_NAVIGATION_CARDS_INTERNET_USAGE_NOTIFICATION).should('exist');
    cy.get(MYBASE_INTERNET_DASHBOARD_NAVIGATION_CARDS_SPEEDTEST).should('exist');
    cy.get(MYBASE_INTERNET_DASHBOARD_NAVIGATION_CARDS_MANAGE_YOUR_PRODUCT).should('not.exist');
    cy.get(MYBASE_INTERNET_DASHBOARD_NAVIGATION_CARDS_MY_DEVICE).should('not.exist');
    cy.get(MYBASE_INTERNET_DASHBOARD_NAVIGATION_CARDS_DEVICE_USING_YOUR_NETWORK).should('not.exist');
  });
});
