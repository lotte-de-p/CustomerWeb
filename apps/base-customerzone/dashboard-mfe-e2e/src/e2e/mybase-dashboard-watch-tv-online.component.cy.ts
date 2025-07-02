import {
  MYBASE_DASHBOARD_APP_STORE_LOGO,
  MYBASE_DASHBOARD_APP_STORE_QR,
  MYBASE_DASHBOARD_BASE_TV_DIALOG_CLOSE_BUTTON,
  MYBASE_DASHBOARD_BASE_TV_LOGO,
  MYBASE_DASHBOARD_BASE_TV_SUBTITLE,
  MYBASE_DASHBOARD_PLAY_STORE_LOGO,
  MYBASE_DASHBOARD_PLAY_STORE_QR,
  MYBASE_DASHBOARD_WATCH_TV_IN_APP,
  MYBASE_DASHBOARD_WATCH_TV_ONLINE,
} from './cypress-constants';

function clickApp() {
  cy.get(MYBASE_DASHBOARD_WATCH_TV_IN_APP).eq(0).click();
}

describe('MyBase Dashboard Watch tv online', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-1-watch-tv-online--watch-tv-online'));

  it('should render card', () => {
    cy.get(MYBASE_DASHBOARD_BASE_TV_LOGO).should('exist');
    clickApp();
    cy.get(MYBASE_DASHBOARD_APP_STORE_LOGO).should('exist');
    cy.get(MYBASE_DASHBOARD_APP_STORE_QR).should('exist');
    cy.get(MYBASE_DASHBOARD_PLAY_STORE_LOGO).should('exist');
    cy.get(MYBASE_DASHBOARD_PLAY_STORE_QR).should('exist');
    cy.get(MYBASE_DASHBOARD_BASE_TV_SUBTITLE).should('not.exist');
    cy.get(MYBASE_DASHBOARD_WATCH_TV_ONLINE).should('exist');
  });

  it('should click on watch online', () => {
    cy.window().then((win) => {
      cy.stub(win, 'open')
        .as('windowOpen')
        .callsFake(() => {
          // Do nothing when window.open is called
        });
    });

    cy.get(MYBASE_DASHBOARD_WATCH_TV_ONLINE).click();
    cy.get('@windowOpen').should('be.calledOnce');
    cy.get('@windowOpen').should('have.been.calledWithMatch', (url: string) => {
      expect(url).to.include('watch-tv');
      return true;
    });
  });

  it('should close dialog', () => {
    clickApp();
    cy.get(MYBASE_DASHBOARD_BASE_TV_DIALOG_CLOSE_BUTTON).eq(0).click();
    cy.get(MYBASE_DASHBOARD_APP_STORE_LOGO).should('not.be.visible');
    cy.get(MYBASE_DASHBOARD_APP_STORE_QR).should('not.be.visible');
  });
});

describe('MyBase Dashboard Watch tv online with subtitle', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybase-dashboard-level-1-watch-tv-online--watch-tv-online-with-subtitle'));

  it('should render card', () => {
    cy.get(MYBASE_DASHBOARD_BASE_TV_LOGO).should('exist');
    clickApp();
    cy.get(MYBASE_DASHBOARD_APP_STORE_LOGO).should('exist');
    cy.get(MYBASE_DASHBOARD_APP_STORE_QR).should('exist');
    cy.get(MYBASE_DASHBOARD_PLAY_STORE_LOGO).should('exist');
    cy.get(MYBASE_DASHBOARD_PLAY_STORE_QR).should('exist');
    cy.get(MYBASE_DASHBOARD_BASE_TV_SUBTITLE).should('exist');
    cy.get(MYBASE_DASHBOARD_WATCH_TV_ONLINE).should('exist');
  });
});
