/// <reference types="cypress" />

describe('notification', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=components-notification--information&viewMode=story');
  });

  it('should close the notification when the close icon is clicked', () => {
    cy.get('wink-notification').invoke('attr', 'has-close-icon', 'true');

    cy.get('wink-notification').should('be.visible');
    cy.get('wink-notification').find('.close-icon').should('be.visible');

    cy.get('wink-notification').find('.close-icon').click();

    cy.get('wink-notification').should('not.be.visible');
  });

  it('should that h6 tag is available', () => {
    cy.get('wink-notification').find('h6').should('be.visible');
  });

  it('should check for a paragraph', () => {
    cy.get('wink-notification').find('wink-paragraph').should('be.visible');
  });

  it('should that notification type default is present', () => {
    cy.get('wink-notification').invoke('attr', 'appearance', 'information');
    cy.get('wink-notification').find('i').should('have.attr', 'part', 'icon icon-information-shape');
  });

  it('should that notification type success is present', () => {
    cy.get('wink-notification').invoke('attr', 'appearance', 'success');
    cy.get('wink-notification').find('i').should('have.attr', 'part', 'icon icon-check-shape');
  });

  it('should that notification type error is present', () => {
    cy.get('wink-notification').invoke('attr', 'appearance', 'error');
    cy.get('wink-notification').find('i').should('have.attr', 'part', 'icon icon-error-shape');
  });

  it('should that notification type warning is present', () => {
    cy.get('wink-notification').invoke('attr', 'appearance', 'warning');
    cy.get('wink-notification').find('i').should('have.attr', 'part', 'icon icon-alert-shape');
  });
});
