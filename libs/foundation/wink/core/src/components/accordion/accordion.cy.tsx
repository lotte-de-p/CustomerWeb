/// <reference types="cypress" />

describe('wink-accordion', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=components-accordion--default&viewMode=story');
  });

  it('should find wink-accordion element', () => {
    cy.get('wink-accordion').should('exist');
  });

  it('should not show the panel', () => {
    cy.get('wink-accordion').find('button').should('be.visible');
    cy.get('wink-accordion').find('wink-icon').should('be.visible');
    cy.get('wink-accordion').find('wink-icon').should('have.css', 'transform', 'none');
    cy.get('wink-accordion').find('.accordion-panel').should('not.be.visible');
  });

  it('should open panel when title is clicked', () => {
    cy.get('wink-accordion').find('button').click();

    cy.get('wink-accordion').find('wink-icon').should('have.css', 'transform', 'matrix(-1, 0, 0, -1, 0, 0)');
    cy.get('wink-accordion').find('.accordion-panel').should('be.visible');
  });

  it('should show the icon before the title', () => {
    cy.get('wink-accordion').invoke('attr', 'icon', 'bell');

    cy.get('wink-accordion').find('.accordion-title').find('[part="icon icon-bell"]').should('be.visible');
  });
});
