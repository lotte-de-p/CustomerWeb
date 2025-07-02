import {
  MYBASE_DASHBOARD_DAYS_UNTIL_RENEWAL_ATTR,
  MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_BASEZERO,
  MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_BASEZERO_MONETARY_USED,
  MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_BASEZERO_DAYS_UNTIL_RENEWAL,
} from './cypress-constants';

describe('MyBase Dashboard Mobile Usage Base Zero - Usage OK', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-2-mobile-mobile-usage-basezero--usage-ok'));

  it('the usage ok numbers should be visible and correct', () => {
    cy.get(MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_BASEZERO).should('exist');
    cy.get(MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_BASEZERO_MONETARY_USED).contains(12);
    cy.get(MYBASE_MOBILE_DASHBOARD_MOBILE_USAGE_BASEZERO_DAYS_UNTIL_RENEWAL)
      .invoke('attr', MYBASE_DASHBOARD_DAYS_UNTIL_RENEWAL_ATTR)
      .should('eq', '16');
  });
});
