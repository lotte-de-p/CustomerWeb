import {
  MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_POSTPAID,
  MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_POSTPAID_BUDGET_LIMIT,
  MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_POSTPAID_BUDGET_LIMIT_ATTR,
  MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_POSTPAID_CARRY_OVER,
  MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_POSTPAID_CARRY_OVER_ATTR,
  MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_POSTPAID_DAYS_UNTIL_RENEWAL,
  MYBASE_DASHBOARD_DAYS_UNTIL_RENEWAL_ATTR,
  MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_POSTPAID_PROGRESS_BAR_STATUS_LIMIT,
  MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_POSTPAID_PROGRESS_BAR_STATUS_OK,
  MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_POSTPAID_PROGRESS_BAR_STATUS_WARNING,
  MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_POSTPAID_VOLUME_TOTAL,
  MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_POSTPAID_VOLUME_USED,
} from './cypress-constants';

describe('MyBase Dashboard Mobile Usage Postpaid - Usage OK', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-2-mobile-mobile-usage-postpaid--usage-ok'));

  it('the usage ok numbers should be visible and correct', () => {
    cy.get(MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_POSTPAID).should('exist');
    cy.get(MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_POSTPAID_VOLUME_USED).contains(13);
    cy.get(MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_POSTPAID_VOLUME_TOTAL).contains(25);
    cy.get(MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_POSTPAID_DAYS_UNTIL_RENEWAL)
      .invoke('attr', MYBASE_DASHBOARD_DAYS_UNTIL_RENEWAL_ATTR)
      .should('eq', '16');
    cy.get(MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_POSTPAID_PROGRESS_BAR_STATUS_OK).should('exist');
  });
});

describe('MyBase Dashboard Mobile Usage Postpaid - Usage Warning', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-2-mobile-mobile-usage-postpaid--usage-warning'));

  it('the usage warning numbers should be visible and correct', () => {
    cy.get(MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_POSTPAID).should('exist');
    cy.get(MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_POSTPAID_VOLUME_USED).contains('21,5');
    cy.get(MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_POSTPAID_VOLUME_TOTAL).contains(25);
    cy.get(MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_POSTPAID_DAYS_UNTIL_RENEWAL)
      .invoke('attr', MYBASE_DASHBOARD_DAYS_UNTIL_RENEWAL_ATTR)
      .should('eq', '4');
    cy.get(MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_POSTPAID_PROGRESS_BAR_STATUS_WARNING).should('exist');
  });
});

describe('MyBase Dashboard Mobile Usage Postpaid - Usage Limit', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-2-mobile-mobile-usage-postpaid--usage-limit'));

  it('the usage limit numbers should be visible and correct', () => {
    cy.get(MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_POSTPAID).should('exist');
    cy.get(MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_POSTPAID_VOLUME_USED).contains(25);
    cy.get(MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_POSTPAID_VOLUME_TOTAL).contains(25);
    cy.get(MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_POSTPAID_DAYS_UNTIL_RENEWAL)
      .invoke('attr', MYBASE_DASHBOARD_DAYS_UNTIL_RENEWAL_ATTR)
      .should('eq', '3');
    cy.get(MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_POSTPAID_PROGRESS_BAR_STATUS_LIMIT).should('exist');
  });
});

describe('MyBase Dashboard Mobile Usage Postpaid - Data Jump', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-2-mobile-mobile-usage-postpaid--data-jump'));

  it('the data jump number should be visible and correct', () => {
    cy.get(MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_POSTPAID).should('exist');
    cy.get(MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_POSTPAID_CARRY_OVER)
      .invoke('attr', MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_POSTPAID_CARRY_OVER_ATTR)
      .should('eq', '6.75');
  });
});

describe('MyBase Dashboard Mobile Usage Postpaid - Budget Limit', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-2-mobile-mobile-usage-postpaid--budget-limit'));

  it('the budget limit number should be visible and correct', () => {
    cy.get(MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_POSTPAID).should('exist');
    cy.get(MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_POSTPAID_BUDGET_LIMIT)
      .invoke('attr', MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_POSTPAID_BUDGET_LIMIT_ATTR)
      .should('eq', '30');
  });
});
