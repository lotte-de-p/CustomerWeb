import {
  MYBASE_DASHBOARD_DAYS_UNTIL_RENEWAL_ATTR,
  MYBASE_MOBILE_DASHBOARD_INTERNET_USAGE_LIMITED,
  MYBASE_MOBILE_DASHBOARD_INTERNET_USAGE_LIMITED_DAYS_UNTIL_RENEWAL,
  MYBASE_MOBILE_DASHBOARD_INTERNET_USAGE_LIMITED_PROGRESS_BAR_STATUS_LIMIT,
  MYBASE_MOBILE_DASHBOARD_INTERNET_USAGE_LIMITED_PROGRESS_BAR_STATUS_OK,
  MYBASE_MOBILE_DASHBOARD_INTERNET_USAGE_LIMITED_PROGRESS_BAR_STATUS_WARNING,
  MYBASE_MOBILE_DASHBOARD_INTERNET_USAGE_LIMITED_VOLUME_TOTAL,
  MYBASE_MOBILE_DASHBOARD_INTERNET_USAGE_LIMITED_VOLUME_USED,
} from './cypress-constants';

describe('MyBase Dashboard Internet Usage Limited - Usage OK', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-2-internet-internet-usage-limited--usage-ok'));

  it('the usage ok numbers should be visible and correct', () => {
    cy.get(MYBASE_MOBILE_DASHBOARD_INTERNET_USAGE_LIMITED).should('exist');
    cy.get(MYBASE_MOBILE_DASHBOARD_INTERNET_USAGE_LIMITED_VOLUME_USED).contains('15,5');
    cy.get(MYBASE_MOBILE_DASHBOARD_INTERNET_USAGE_LIMITED_VOLUME_TOTAL).contains(30);
    cy.get(MYBASE_MOBILE_DASHBOARD_INTERNET_USAGE_LIMITED_DAYS_UNTIL_RENEWAL)
      .invoke('attr', MYBASE_DASHBOARD_DAYS_UNTIL_RENEWAL_ATTR)
      .should('eq', '16');
    cy.get(MYBASE_MOBILE_DASHBOARD_INTERNET_USAGE_LIMITED_PROGRESS_BAR_STATUS_OK).should('exist');
  });
});

describe('MyBase Dashboard Internet Usage Limited - Usage Warning', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-2-internet-internet-usage-limited--usage-warning'));

  it('the usage warning numbers should be visible and correct', () => {
    cy.get(MYBASE_MOBILE_DASHBOARD_INTERNET_USAGE_LIMITED).should('exist');
    cy.get(MYBASE_MOBILE_DASHBOARD_INTERNET_USAGE_LIMITED_VOLUME_USED).contains('37,4');
    cy.get(MYBASE_MOBILE_DASHBOARD_INTERNET_USAGE_LIMITED_VOLUME_TOTAL).contains(40);
    cy.get(MYBASE_MOBILE_DASHBOARD_INTERNET_USAGE_LIMITED_DAYS_UNTIL_RENEWAL)
      .invoke('attr', MYBASE_DASHBOARD_DAYS_UNTIL_RENEWAL_ATTR)
      .should('eq', '9');
    cy.get(MYBASE_MOBILE_DASHBOARD_INTERNET_USAGE_LIMITED_PROGRESS_BAR_STATUS_WARNING).should('exist');
  });
});

describe('MyBase Dashboard Internet Usage Limited - Usage Limit', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-2-internet-internet-usage-limited--usage-limit'));

  it('the usage limit numbers should be visible and correct', () => {
    cy.get(MYBASE_MOBILE_DASHBOARD_INTERNET_USAGE_LIMITED).should('exist');
    cy.get(MYBASE_MOBILE_DASHBOARD_INTERNET_USAGE_LIMITED_VOLUME_USED).contains(40);
    cy.get(MYBASE_MOBILE_DASHBOARD_INTERNET_USAGE_LIMITED_VOLUME_TOTAL).contains(40);
    cy.get(MYBASE_MOBILE_DASHBOARD_INTERNET_USAGE_LIMITED_DAYS_UNTIL_RENEWAL)
      .invoke('attr', MYBASE_DASHBOARD_DAYS_UNTIL_RENEWAL_ATTR)
      .should('eq', '3');
    cy.get(MYBASE_MOBILE_DASHBOARD_INTERNET_USAGE_LIMITED_PROGRESS_BAR_STATUS_LIMIT).should('exist');
  });
});
