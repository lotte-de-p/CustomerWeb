import {
  MYBASE_DASHBOARD_DAYS_UNTIL_RENEWAL_ATTR,
  MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_BASEDONYOU,
  MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_BASEDONYOU_CREDIT_REMAINING,
  MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_BASEDONYOU_CREDIT_TOTAL,
  MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_BASEDONYOU_DAYS_UNTIL_RENEWAL,
} from './cypress-constants';

describe('MyBase Dashboard Mobile Usage Based On You - Usage OK', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-2-mobile-mobile-usage-basedonyou--usage-ok'));

  it('the usage ok numbers should be visible and correct', () => {
    cy.get(MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_BASEDONYOU).should('exist');
    cy.get(MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_BASEDONYOU_CREDIT_REMAINING).contains(25);
    cy.get(MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_BASEDONYOU_CREDIT_TOTAL).contains(50);
    cy.get(MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_BASEDONYOU_DAYS_UNTIL_RENEWAL)
      .invoke('attr', MYBASE_DASHBOARD_DAYS_UNTIL_RENEWAL_ATTR)
      .should('eq', '16');
  });
});
