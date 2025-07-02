/// <reference types="cypress" />

describe('wink-toast', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=components-toast-toastelement--default&viewMode=story');
  });

  it('should find the wink-toast element', () => {
    cy.get('wink-toast').should('exist');
  });

  describe('appearance', () => {
    it('should assign appearance actionable', () => {
      cy.get('wink-toast').invoke('attr', 'appearance', 'actionable');
      cy.get('wink-toast').find('wink-icon').should('not.exist');
    });

    it('should assign appearance negative', () => {
      cy.get('wink-toast').invoke('attr', 'appearance', 'negative');
      cy.get('wink-toast').find('wink-icon').should('be.visible');
      cy.get('wink-toast').find('wink-icon').should('have.attr', 'exportparts', 'icon, icon-cross-circle-filled');
    });

    it('should assign appearance positive', () => {
      cy.get('wink-toast').invoke('attr', 'appearance', 'positive');
      cy.get('wink-toast').find('wink-icon').should('be.visible');
      cy.get('wink-toast').find('wink-icon').should('have.attr', 'exportparts', 'icon, icon-check-shape-filled');
    });
  });

  describe('props', () => {
    it('should assign text and display it', () => {
      cy.get('wink-toast').invoke('attr', 'text', 'this is a toast');
      cy.get('wink-toast').find('p').should('have.text', 'this is a toast');
    });

    it('should assign prop isOpen and be invisible when it is removed', () => {
      cy.get('wink-toast').invoke('attr', 'is-open', 'true');
      cy.get('wink-toast').should('be.visible');
      cy.get('wink-toast').invoke('removeAttr', 'is-open');
      cy.get('wink-toast').should('not.have.attr', 'is-open');
      cy.get('wink-toast').find('wink-button').should('not.be.visible');
    });

    it('should assign duration and close after duration', () => {
      cy.get('wink-toast').invoke('attr', 'appearance', 'positive');
      cy.get('wink-toast').invoke('attr', 'is-open', 'true');
      cy.get('wink-toast').invoke('attr', 'duration', '400');
      cy.get('wink-toast').should('be.visible');
      cy.wait(500);
      cy.get('wink-toast').should('not.have.attr', 'is-open');
    });

    it('should not close after duration when appearance is actionable', () => {
      cy.get('wink-toast').invoke('attr', 'is-open', 'true');
      cy.get('wink-toast').invoke('attr', 'duration', '400');
      cy.get('wink-toast').should('be.visible');
      cy.wait(500);
      cy.get('wink-toast').should('have.attr', 'is-open');
    });

    it('should assign link props to appearance actionable', () => {
      cy.get('wink-toast').invoke('attr', 'appearance', 'actionable');
      cy.get('wink-toast').invoke('attr', 'href', '#test');
      cy.get('wink-toast').invoke('attr', 'target', '_blank');
      cy.get('wink-toast').invoke('attr', 'link-text', 'link text');
      cy.get('wink-toast').find('wink-link').should('be.visible');
      cy.get('wink-toast').find('a').should('have.attr', 'href', '#test');
      cy.get('wink-toast').find('a').should('have.attr', 'target', '_blank');
      cy.get('wink-toast').find('wink-link').should('have.text', 'link text');
    });
  });

  describe('extra tests', () => {
    it('should close when close button is clicked', () => {
      cy.get('wink-toast')
        .find('wink-button')
        .then(($el) => {
          $el.on('click', (e) => e.preventDefault());
        })
        .click();
      cy.wait(1000);
      cy.get('wink-toast').should('not.have.attr', 'is-open');
    });

    it('should close when escape key is clicked', () => {
      cy.get('wink-toast').then(($el) => {
        const escapeKeyEvent = new KeyboardEvent('keydown', { key: 'Escape' });
        $el[0].dispatchEvent(escapeKeyEvent);
      });
      cy.get('wink-toast').should('not.be.visible');
    });
  });
});
