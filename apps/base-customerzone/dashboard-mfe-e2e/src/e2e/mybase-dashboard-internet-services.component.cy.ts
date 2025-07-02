import {
  MYBASE_INTERNET_DASHBOARD_SERVICES_EASY_SWITCH,
  MYBASE_INTERNET_DASHBOARD_SERVICES_BEST_TARIFF,
  MYBASE_INTERNET_DASHBOARD_SERVICES_RETURN_DEVICE,
} from './cypress-constants';

describe('MyBase Internet Dashboard Services - All cards visible', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-2-internet-services--all-cards-visible'));

  it('should render all cards', () => {
    cy.get(MYBASE_INTERNET_DASHBOARD_SERVICES_EASY_SWITCH).should('exist');
    cy.get(MYBASE_INTERNET_DASHBOARD_SERVICES_BEST_TARIFF).should('exist');
    cy.get(MYBASE_INTERNET_DASHBOARD_SERVICES_RETURN_DEVICE).should('exist');
  });
});

describe('MyBase Internet Dashboard Services - Some cards visible', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-2-internet-services--some-cards-visible'));

  it('should render some cards but not all', () => {
    cy.get(MYBASE_INTERNET_DASHBOARD_SERVICES_EASY_SWITCH).should('exist');
    cy.get(MYBASE_INTERNET_DASHBOARD_SERVICES_BEST_TARIFF).should('not.exist');
  });
});
