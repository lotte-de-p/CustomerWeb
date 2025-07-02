import {
  MYBASE_DTV_DASHBOARD_NAVIGATION_CARDS_PRODUCT_OVERVIEW,
  MYBASE_DTV_DASHBOARD_NAVIGATION_CARDS_ADD_REMOVE_TV_BOX,
  MYBASE_DTV_DASHBOARD_NAVIGATION_CARDS_MANAGE_CONTENT_PACKS,
  MYBASE_DTV_DASHBOARD_NAVIGATION_CARDS_MANAGE_YOUR_DEVICE,
} from './cypress-constants';

describe('MyBase DTV Dashboard Navigation Cards - All cards visible', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-2-dtv-navigation-cards--all-cards-visible'));

  it('should render all cards', () => {
    cy.get(MYBASE_DTV_DASHBOARD_NAVIGATION_CARDS_PRODUCT_OVERVIEW).should('exist');
    cy.get(MYBASE_DTV_DASHBOARD_NAVIGATION_CARDS_MANAGE_YOUR_DEVICE).should('exist');
    cy.get(MYBASE_DTV_DASHBOARD_NAVIGATION_CARDS_MANAGE_CONTENT_PACKS).should('exist');
    cy.get(MYBASE_DTV_DASHBOARD_NAVIGATION_CARDS_ADD_REMOVE_TV_BOX).should('exist');
  });
});

describe('MyBase DTV Dashboard Navigation Cards - Some cards visible', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-2-dtv-navigation-cards--some-cards-visible'));

  it('should render some cards but not all', () => {
    cy.get(MYBASE_DTV_DASHBOARD_NAVIGATION_CARDS_PRODUCT_OVERVIEW).should('exist');
    cy.get(MYBASE_DTV_DASHBOARD_NAVIGATION_CARDS_MANAGE_YOUR_DEVICE).should('not.exist');
    cy.get(MYBASE_DTV_DASHBOARD_NAVIGATION_CARDS_MANAGE_CONTENT_PACKS).should('not.exist');
    cy.get(MYBASE_DTV_DASHBOARD_NAVIGATION_CARDS_ADD_REMOVE_TV_BOX).should('exist');
  });
});
