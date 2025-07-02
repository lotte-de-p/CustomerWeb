import {
  MYBASE_MOBILE_DASHBOARD_SERVICES_PAYBYMOBILE,
  MYBASE_MOBILE_DASHBOARD_SERVICES_BUY_HARDWARE_DISCOUNT,
} from './cypress-constants';

describe('MyBase Mobile Dashboard Services - All cards visible', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-2-mobile-services--all-cards-visible'));

  it('should render all cards', () => {
    cy.get(MYBASE_MOBILE_DASHBOARD_SERVICES_PAYBYMOBILE).should('exist');
    cy.get(MYBASE_MOBILE_DASHBOARD_SERVICES_BUY_HARDWARE_DISCOUNT).should('exist');
  });
});

describe('MyBase Mobile Dashboard Services - Some cards visible', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-2-mobile-services--some-cards-visible'));

  it('should render some cards but not all', () => {
    cy.get(MYBASE_MOBILE_DASHBOARD_SERVICES_BUY_HARDWARE_DISCOUNT).should('exist');
    cy.get(MYBASE_MOBILE_DASHBOARD_SERVICES_PAYBYMOBILE).should('not.exist');
  });
});
