import { MYBASE_DASHBOARD_HOME_NETWORK } from './cypress-constants';

describe('MyBase Dashboard Home Network', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-1-home-network-card--home-network-ok'));

  it('should render the home network card', () => {
    cy.get(MYBASE_DASHBOARD_HOME_NETWORK).should('exist');
  });
});
