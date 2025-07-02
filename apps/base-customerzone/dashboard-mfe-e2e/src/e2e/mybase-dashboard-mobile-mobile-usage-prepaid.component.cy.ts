import {
  MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_PREPAID,
  MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_PREPAID_AMOUNT,
  MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_PREPAID_EXPIRY_DATE,
  MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_PREPAID_CTA,
} from './cypress-constants';

describe('MyBase Dashboard Mobile Usage Prepaid - Basic', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-2-mobile-mobile-usage-prepaid--basic'));

  it('the card should be visible and the numbers correct', () => {
    cy.get(MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_PREPAID).should('exist');
    cy.get(MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_PREPAID_AMOUNT).contains('89,95');
    cy.get(MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_PREPAID_EXPIRY_DATE).contains('14 maart 2024');
    cy.get(MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_PREPAID_CTA).should('exist');
  });
});
