/// <reference types="cypress" />

describe('wink-toaster', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=components-toast--default&viewMode=story');
  });

  it('should find the wink-toaster element', () => {
    cy.get('wink-toaster').should('exist');
  });

  it('should render a toast positive element when it is added to the slot', () => {
    cy.get('wink-toaster').should('exist');
    cy.get('wink-toaster').then(($toaster) => {
      const toast = document.createElement('wink-toast');
      toast.setAttribute('appearance', 'actionable');
      toast.setAttribute('text', 'Toast text.');
      toast.setAttribute('href', '#');
      toast.setAttribute('target', '_self');
      toast.setAttribute('link-text', 'Link');
      toast.setAttribute('duration', '0');
      toast.setAttribute('is-open', '');
      $toaster[0].appendChild(toast);

      cy.get('wink-toast').should('exist');
      cy.get('wink-toast').should('be.visible');
      cy.get('wink-toast').eq(1).should('have.attr', 'appearance', 'actionable');
      cy.get('wink-toast').find('p').eq(1).should('have.text', 'Toast text.');
      cy.get('wink-toast').eq(1).should('have.attr', 'href', '#');
      cy.get('wink-toast').eq(1).should('have.attr', 'target', '_self');
      cy.get('wink-toast').eq(1).should('have.attr', 'link-text', 'Link');
      cy.get('wink-toast').eq(1).should('have.attr', 'duration', '0');
    });
  });

  it('should render a toast element when the public method is called', () => {
    cy.reload();

    cy.get('wink-button')
      .then(($el) => {
        $el.on('click', (e) => e.preventDefault());
      })
      .click();

    cy.get('wink-toast').should('exist');
    cy.get('wink-toast').should('be.visible');
    cy.get('wink-toast').find('p').eq(1).should('have.text', 'De notificatie is succesvol verwijderd');
  });
});
