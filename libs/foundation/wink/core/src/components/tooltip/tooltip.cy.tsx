/// <reference types="cypress" />

describe('wink-tooltip', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=components-tooltip--default&viewMode=story');
  });

  it('should find the wink-tooltip element', () => {
    cy.get('wink-tooltip').should('exist');
  });

  it('should render the question icon when there is no icon set', () => {
    cy.get('wink-tooltip').find('wink-icon').should('have.attr', 'exportparts', 'icon, icon-question-shape');
  });

  it('should render a correct other icon when there is an icon set', () => {
    cy.get('wink-tooltip').invoke('attr', 'icon', 'error');
    cy.get('wink-tooltip').find('wink-icon').should('have.attr', 'exportparts', 'icon, icon-error');
  });

  it('should not render an icon when withoutIcon is set', () => {
    cy.get('wink-tooltip').invoke('attr', 'hide-icon', 'true');
    cy.get('wink-tooltip').find('wink-icon').should('not.exist');
  });

  it('should set the correct classes for vertical position', () => {
    cy.get('wink-tooltip').invoke('attr', 'vertical-position', 'top');
    cy.get('wink-tooltip').find('.tooltip__content').should('have.class', 'top');
    cy.get('wink-tooltip').invoke('attr', 'vertical-position', 'bottom');
    cy.get('wink-tooltip').find('.tooltip__content').should('have.class', 'bottom');
  });

  it('should set the correct classes for horizontal position', () => {
    cy.get('wink-tooltip').invoke('attr', 'horizontal-position', 'left');
    cy.get('wink-tooltip').find('.tooltip__content').should('have.class', 'left');
    cy.get('wink-tooltip').invoke('attr', 'horizontal-position', 'center');
    cy.get('wink-tooltip').find('.tooltip__content').should('have.class', 'center');
    cy.get('wink-tooltip').invoke('attr', 'horizontal-position', 'right');
    cy.get('wink-tooltip').find('.tooltip__content').should('have.class', 'right');
  });
});
