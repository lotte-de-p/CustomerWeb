import { MYBASE_DTV_DASHBOARD_SERVICES_RETURN_DEVICE } from './cypress-constants';

describe('MyBase DTV Dashboard Services - All cards visible', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-2-dtv-services--all-cards-visible'));

  it('should render all cards', () => {
    cy.get(MYBASE_DTV_DASHBOARD_SERVICES_RETURN_DEVICE).should('exist');
  });
});
