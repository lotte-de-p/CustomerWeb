/// <reference types="cypress" />

describe('wink-intent-bar', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=components-global-header-intent-bar--default&viewMode=story');
  });

  it('should find the wink-intent-bar element', () => {
    cy.get('wink-intent-bar').should('exist');
  });

  it('should have 3 wink-link elements', () => {
    cy.get('wink-intent-bar').shadow().find('wink-link').should('have.length', 3);
  });

  it('should have 3 wink-link elements with appearance menu-secondary', () => {
    cy.get('wink-intent-bar')
      .shadow()
      .find('wink-link[appearance="menu-secondary"]')
      .should('have.length', 3)
      .parent()
      .contains('Webmail');
  });

  it('should have a wink-icon with email icon in the first wink-link', () => {
    cy.get('wink-intent-bar')
      .shadow()
      .find('wink-link')
      .first()
      .find('wink-icon[exportparts="icon, icon-message-question"]')
      .should('exist')
      .parent()
      .contains('Hulp');
  });

  it('should have a wink-icon with email headset in the second wink-link', () => {
    cy.get('wink-intent-bar')
      .shadow()
      .find('wink-link')
      .eq(1)
      .find('wink-icon[exportparts="icon, icon-headset"]')
      .should('exist')
      .parent()
      .contains('Contact');
  });

  it('should have a wink-icon with email message-question in the third wink-link', () => {
    cy.get('wink-intent-bar')
      .shadow()
      .find('wink-link')
      .eq(2)
      .find('wink-icon[exportparts="icon, icon-email"]')
      .should('exist')
      .parent()
      .contains('Webmail');
  });
});
describe('wink-global-header tablet', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=components-global-header--full&viewMode=story');
    cy.viewport(1024, 800);
  });
  it('should show the intent-bar desktop slot on tablet and not the mobile', () => {
    cy.get('wink-global-header').find('[slot="intent-bar"]').should('exist').and('be.visible');
    cy.get('wink-global-header').find('[slot="mobile-intent-bar"]').should('exist').and('not.be.visible');
  });
});
