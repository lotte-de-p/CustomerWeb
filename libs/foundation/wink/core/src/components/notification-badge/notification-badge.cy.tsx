/// <reference types="cypress" />

describe('wink-notification-badge', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=components-notification-badge--default&viewMode=story');
  });

  it('should find the wink-notification-badge element', () => {
    cy.get('wink-notification-badge').should('exist');
  });

  it('should render the dot when there is no text set', () => {
    cy.get('wink-notification-badge').invoke('attr', 'size', 'md');
    cy.get('wink-notification-badge').invoke('attr', 'appearance', 'default');
    cy.get('wink-notification-badge').find('.dot').should('exist');
  });

  it('should not render the dot when there is no text set and size is sm', () => {
    cy.get('wink-notification-badge').invoke('attr', 'size', 'sm');
    cy.get('wink-notification-badge').find('.dot').should('not.exist');
  });

  it('should render the value when that is set', () => {
    cy.get('wink-notification-badge').invoke('attr', 'size', 'md');
    cy.get('wink-notification-badge').invoke('attr', 'show-number', true);
    cy.get('wink-notification-badge').invoke('attr', 'amount', '2');
    cy.get('wink-notification-badge').shadow().should('have.text', '2');
  });

  it('should render 99+ when the value exceeds 99', () => {
    cy.get('wink-notification-badge').invoke('attr', 'size', 'md');
    cy.get('wink-notification-badge').invoke('attr', 'show-number', true);
    cy.get('wink-notification-badge').invoke('attr', 'amount', '200');
    cy.get('wink-notification-badge').shadow().should('have.text', '99+');
  });

  it('should be invisible if the amount is 0', () => {
    cy.get('wink-notification-badge').invoke('attr', 'size', 'md');
    cy.get('wink-notification-badge').invoke('attr', 'show-number', true);
    cy.get('wink-notification-badge').invoke('attr', 'amount', '0');
    cy.get('wink-notification-badge').find('.notification-badge').should('not.be.visible');
  });

  it('should set the size', () => {
    cy.get('wink-notification-badge').invoke('attr', 'size', 'sm');
    cy.get('wink-notification-badge').find('.notification-badge').should('have.css', 'width', '8px');
    cy.get('wink-notification-badge').find('.notification-badge').should('have.css', 'height', '8px');
    cy.get('wink-notification-badge').invoke('attr', 'size', 'md');
    cy.get('wink-notification-badge').find('.notification-badge').should('have.css', 'height', '16px');
  });

  it('should be invisible if the visible is set to false', () => {
    cy.get('wink-notification-badge').invoke('attr', 'visible', 'false');
    cy.get('wink-notification-badge').find('.notification-badge').should('not.be.visible');
  });
});
