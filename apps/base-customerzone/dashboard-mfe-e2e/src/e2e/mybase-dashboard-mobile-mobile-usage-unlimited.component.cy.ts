import {
  MYBASE_DASHBOARD_DAYS_UNTIL_RENEWAL_ATTR,
  MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_UNLIMITED,
  MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_UNLIMITED_DAYS_UNTIL_RENEWAL,
  MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_UNLIMITED_ICON_ERROR,
  MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_UNLIMITED_ICON_OK,
  MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_UNLIMITED_ICON_WARN,
  MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_UNLIMITED_VOLUME_USED,
} from './cypress-constants';

xdescribe('MyBase Dashboard Mobile Usage Unlimited - Usage OK', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-2-mobile-mobile-usage-unlimited--usage-ok'));

  it('the usage ok numbers and icon should be visible and correct', () => {
    cy.get(MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_UNLIMITED).should('exist');
    cy.get(MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_UNLIMITED_ICON_OK).should('exist');
    cy.get(MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_UNLIMITED_VOLUME_USED).contains('9,7');
    cy.get(MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_UNLIMITED_DAYS_UNTIL_RENEWAL)
      .invoke('attr', MYBASE_DASHBOARD_DAYS_UNTIL_RENEWAL_ATTR)
      .should('eq', '22');
  });
});

xdescribe('MyBase Dashboard Mobile Usage Unlimited - Usage Warning', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-2-mobile-mobile-usage-unlimited--usage-warning'));

  it('the usage warning numbers and icon should be visible and correct', () => {
    cy.get(MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_UNLIMITED).should('exist');
    cy.get(MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_UNLIMITED_ICON_WARN).should('exist');
    cy.get(MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_UNLIMITED_VOLUME_USED).contains('114,47');
    cy.get(MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_UNLIMITED_DAYS_UNTIL_RENEWAL)
      .invoke('attr', MYBASE_DASHBOARD_DAYS_UNTIL_RENEWAL_ATTR)
      .should('eq', '11');
  });
});

xdescribe('MyBase Dashboard Mobile Usage Unlimited - Usage Limit', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-2-mobile-mobile-usage-unlimited--usage-limit'));

  it('the usage limit numbers and icon should be visible and correct', () => {
    cy.get(MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_UNLIMITED).should('exist');
    cy.get(MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_UNLIMITED_ICON_ERROR).should('exist');
    cy.get(MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_UNLIMITED_VOLUME_USED).contains('184,28');
    cy.get(MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_UNLIMITED_DAYS_UNTIL_RENEWAL)
      .invoke('attr', MYBASE_DASHBOARD_DAYS_UNTIL_RENEWAL_ATTR)
      .should('eq', '4');
  });
});
