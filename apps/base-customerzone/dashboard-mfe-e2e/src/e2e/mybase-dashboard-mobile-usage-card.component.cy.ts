import {
  MYBASE_DASHBOARD_MOBILE_USAGE,
  MYBASE_DASHBOARD_MOBILE_USAGE_ICON_HEADER,
  MYBASE_DASHBOARD_MOBILE_USAGE_SMOOTH_SURFING,
  MYBASE_DASHBOARD_MOBILE_USAGE_LIMIT_ALMOST_REACHED,
  MYBASE_DASHBOARD_MOBILE_USAGE_LIMIT_EXCEEDED,
  MYBASE_DASHBOARD_MOBILE_USAGE_LIMIT_ALMOST_REACHED_MULTIPLE,
  MYBASE_DASHBOARD_MOBILE_USAGE_LIMIT_EXCEEDED_MULTIPLE,
} from './cypress-constants';

// recheck this when unhappy scenario's are also developed
describe('MyBase Dashboard Mobile Usage Card', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-1-mobile-usage-card--mobile-usage-ok'));

  it('should render the mobile usage card with visual', () => {
    cy.get(MYBASE_DASHBOARD_MOBILE_USAGE).should('exist');
    cy.get(MYBASE_DASHBOARD_MOBILE_USAGE_ICON_HEADER).should('exist');
    cy.get(MYBASE_DASHBOARD_MOBILE_USAGE_SMOOTH_SURFING).should('exist');
  });
});

describe('MyBase Dashboard Mobile Usage Card Limit Almost Reached', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-1-mobile-usage-card--mobile-usage-warning'));

  it('should render the mobile usage card with warning', () => {
    cy.get(MYBASE_DASHBOARD_MOBILE_USAGE).should('exist');
    cy.get(MYBASE_DASHBOARD_MOBILE_USAGE_LIMIT_ALMOST_REACHED).should('exist');
    cy.get(MYBASE_DASHBOARD_MOBILE_USAGE_ICON_HEADER).should('not.exist');
    cy.get(MYBASE_DASHBOARD_MOBILE_USAGE_SMOOTH_SURFING).should('not.exist');
  });
});

describe('MyBase Dashboard Mobile Usage Card Limit Exceeded', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-1-mobile-usage-card--mobile-usage-critical'));

  it('should render the mobile usage card with critical', () => {
    cy.get(MYBASE_DASHBOARD_MOBILE_USAGE).should('exist');
    cy.get(MYBASE_DASHBOARD_MOBILE_USAGE_LIMIT_EXCEEDED).should('exist');
    cy.get(MYBASE_DASHBOARD_MOBILE_USAGE_ICON_HEADER).should('not.exist');
    cy.get(MYBASE_DASHBOARD_MOBILE_USAGE_SMOOTH_SURFING).should('not.exist');
  });
});

describe('MyBase Dashboard Mobile Usage Card Limit Almost Reached Multiple', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=mybase-dashboard-level-1-mobile-usage-card--multiple-mobile-usage-warning')
  );

  it('should render the mobile usage card with warning multiple', () => {
    cy.get(MYBASE_DASHBOARD_MOBILE_USAGE).should('exist');
    cy.get(MYBASE_DASHBOARD_MOBILE_USAGE_LIMIT_ALMOST_REACHED).should('exist');
    cy.get(MYBASE_DASHBOARD_MOBILE_USAGE_LIMIT_ALMOST_REACHED_MULTIPLE).should('exist');
    cy.get(MYBASE_DASHBOARD_MOBILE_USAGE_ICON_HEADER).should('not.exist');
    cy.get(MYBASE_DASHBOARD_MOBILE_USAGE_SMOOTH_SURFING).should('not.exist');
  });
});

describe('MyBase Dashboard Mobile Usage Card Limit Exceeded Multiple', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=mybase-dashboard-level-1-mobile-usage-card--multiple-mobile-usage-critical')
  );

  it('should render the mobile usage card with critical multiple', () => {
    cy.get(MYBASE_DASHBOARD_MOBILE_USAGE).should('exist');
    cy.get(MYBASE_DASHBOARD_MOBILE_USAGE_LIMIT_EXCEEDED).should('exist');
    cy.get(MYBASE_DASHBOARD_MOBILE_USAGE_LIMIT_EXCEEDED_MULTIPLE).should('exist');
    cy.get(MYBASE_DASHBOARD_MOBILE_USAGE_ICON_HEADER).should('not.exist');
    cy.get(MYBASE_DASHBOARD_MOBILE_USAGE_SMOOTH_SURFING).should('not.exist');
  });
});
