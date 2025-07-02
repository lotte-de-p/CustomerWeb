import {
  MYBASE_DASHBOARD_DAYS_UNTIL_RENEWAL_ATTR,
  MYBASE_MOBILE_DASHBOARD_INTERNET_USAGE_UNLIMITED,
  MYBASE_MOBILE_DASHBOARD_INTERNET_USAGE_UNLIMITED_DAYS_UNTIL_RENEWAL,
  MYBASE_MOBILE_DASHBOARD_INTERNET_USAGE_UNLIMITED_ICON_ERROR,
  MYBASE_MOBILE_DASHBOARD_INTERNET_USAGE_UNLIMITED_ICON_OK,
  MYBASE_MOBILE_DASHBOARD_INTERNET_USAGE_UNLIMITED_ICON_WARN,
  MYBASE_MOBILE_DASHBOARD_INTERNET_USAGE_UNLIMITED_VOLUME_USED,
} from './cypress-constants';

describe('MyBase Dashboard Internet Usage Unlimited - Usage OK', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-2-internet-internet-usage-unlimited--usage-ok'));

  it('the usage ok numbers and icon should be visible and correct', () => {
    cy.get(MYBASE_MOBILE_DASHBOARD_INTERNET_USAGE_UNLIMITED).should('exist');
    cy.get(MYBASE_MOBILE_DASHBOARD_INTERNET_USAGE_UNLIMITED_ICON_OK).should('exist');
    cy.get(MYBASE_MOBILE_DASHBOARD_INTERNET_USAGE_UNLIMITED_VOLUME_USED).contains('768,3');
    cy.get(MYBASE_MOBILE_DASHBOARD_INTERNET_USAGE_UNLIMITED_DAYS_UNTIL_RENEWAL)
      .invoke('attr', MYBASE_DASHBOARD_DAYS_UNTIL_RENEWAL_ATTR)
      .should('eq', '11');
  });
});

describe('MyBase Dashboard Internet Usage Unlimited - Usage Warning', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=mybase-dashboard-level-2-internet-internet-usage-unlimited--usage-warning')
  );

  it('the usage warning numbers and icon should be visible and correct', () => {
    cy.get(MYBASE_MOBILE_DASHBOARD_INTERNET_USAGE_UNLIMITED).should('exist');
    cy.get(MYBASE_MOBILE_DASHBOARD_INTERNET_USAGE_UNLIMITED_ICON_WARN).should('exist');
    cy.get(MYBASE_MOBILE_DASHBOARD_INTERNET_USAGE_UNLIMITED_VOLUME_USED).contains('2.507,44');
    cy.get(MYBASE_MOBILE_DASHBOARD_INTERNET_USAGE_UNLIMITED_DAYS_UNTIL_RENEWAL)
      .invoke('attr', MYBASE_DASHBOARD_DAYS_UNTIL_RENEWAL_ATTR)
      .should('eq', '5');
  });
});

describe('MyBase Dashboard Internet Usage Unlimited - Usage Limit', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-2-internet-internet-usage-unlimited--usage-limit'));

  it('the usage limit numbers and icon should be visible and correct', () => {
    cy.get(MYBASE_MOBILE_DASHBOARD_INTERNET_USAGE_UNLIMITED).should('exist');
    cy.get(MYBASE_MOBILE_DASHBOARD_INTERNET_USAGE_UNLIMITED_ICON_ERROR).should('exist');
    cy.get(MYBASE_MOBILE_DASHBOARD_INTERNET_USAGE_UNLIMITED_VOLUME_USED).contains('3.000');
    cy.get(MYBASE_MOBILE_DASHBOARD_INTERNET_USAGE_UNLIMITED_DAYS_UNTIL_RENEWAL)
      .invoke('attr', MYBASE_DASHBOARD_DAYS_UNTIL_RENEWAL_ATTR)
      .should('eq', '2');
  });
});
