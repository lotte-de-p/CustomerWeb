import {
  MYBASE_DASHBOARD_INTERNET_USAGE,
  MYBASE_DASHBOARD_INTERNET_USAGE_ICON_HEADER,
  MYBASE_DASHBOARD_INTERNET_USAGE_SMOOTH_SURFING,
  MYBASE_DASHBOARD_INTERNET_USAGE_LIMIT_ALMOST_REACHED,
  MYBASE_DASHBOARD_INTERNET_USAGE_LIMIT_EXCEEDED,
  MYBASE_DASHBOARD_INTERNET_USAGE_LIMIT_ALMOST_REACHED_MULTIPLE,
  MYBASE_DASHBOARD_INTERNET_USAGE_LIMIT_EXCEEDED_MULTIPLE,
} from './cypress-constants';

// recheck this when unhappy scenario's are also developed
describe('MyBase Dashboard Internet Usage Card', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-1-internet-usage-card--internet-usage-ok'));

  it('should render the internet usage card with visual', () => {
    cy.get(MYBASE_DASHBOARD_INTERNET_USAGE).should('exist');
    cy.get(MYBASE_DASHBOARD_INTERNET_USAGE_ICON_HEADER).should('exist');
    cy.get(MYBASE_DASHBOARD_INTERNET_USAGE_SMOOTH_SURFING).should('exist');
  });
});

describe('MyBase Dashboard Internet Usage Card Limit Almost Reached', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-1-internet-usage-card--internet-usage-warning'));

  it('should render the internet usage card with warning', () => {
    cy.get(MYBASE_DASHBOARD_INTERNET_USAGE).should('exist');
    cy.get(MYBASE_DASHBOARD_INTERNET_USAGE_LIMIT_ALMOST_REACHED).should('exist');
    cy.get(MYBASE_DASHBOARD_INTERNET_USAGE_ICON_HEADER).should('not.exist');
    cy.get(MYBASE_DASHBOARD_INTERNET_USAGE_SMOOTH_SURFING).should('not.exist');
  });
});

describe('MyBase Dashboard Internet Usage Card Limit Exceeded', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-1-internet-usage-card--internet-usage-critical'));

  it('should render the internet usage card with critical', () => {
    cy.get(MYBASE_DASHBOARD_INTERNET_USAGE).should('exist');
    cy.get(MYBASE_DASHBOARD_INTERNET_USAGE_LIMIT_EXCEEDED).should('exist');
    cy.get(MYBASE_DASHBOARD_INTERNET_USAGE_ICON_HEADER).should('not.exist');
    cy.get(MYBASE_DASHBOARD_INTERNET_USAGE_SMOOTH_SURFING).should('not.exist');
  });
});

describe('MyBase Dashboard Internet Usage Card Limit Almost Reached Multiple', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=mybase-dashboard-level-1-internet-usage-card--multiple-internet-usage-warning')
  );

  it('should render the internet usage card with warning multiple', () => {
    cy.get(MYBASE_DASHBOARD_INTERNET_USAGE).should('exist');
    cy.get(MYBASE_DASHBOARD_INTERNET_USAGE_LIMIT_ALMOST_REACHED).should('exist');
    cy.get(MYBASE_DASHBOARD_INTERNET_USAGE_LIMIT_ALMOST_REACHED_MULTIPLE).should('exist');
    cy.get(MYBASE_DASHBOARD_INTERNET_USAGE_ICON_HEADER).should('not.exist');
    cy.get(MYBASE_DASHBOARD_INTERNET_USAGE_SMOOTH_SURFING).should('not.exist');
  });
});

describe('MyBase Dashboard Internet Usage Card Limit Exceeded Multiple', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=mybase-dashboard-level-1-internet-usage-card--multiple-internet-usage-critical')
  );

  it('should render the internet usage card with critical multiple', () => {
    cy.get(MYBASE_DASHBOARD_INTERNET_USAGE).should('exist');
    cy.get(MYBASE_DASHBOARD_INTERNET_USAGE_LIMIT_EXCEEDED).should('exist');
    cy.get(MYBASE_DASHBOARD_INTERNET_USAGE_LIMIT_EXCEEDED_MULTIPLE).should('exist');
    cy.get(MYBASE_DASHBOARD_INTERNET_USAGE_ICON_HEADER).should('not.exist');
    cy.get(MYBASE_DASHBOARD_INTERNET_USAGE_SMOOTH_SURFING).should('not.exist');
  });
});
