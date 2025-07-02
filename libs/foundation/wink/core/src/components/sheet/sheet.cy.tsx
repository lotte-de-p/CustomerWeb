/// <reference types="cypress" />

describe('wink-sheet', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=components-sheet--default&viewMode=story');
  });

  it('should find the wink-sheet element', () => {
    cy.get('wink-sheet').should('exist');
  });

  describe('props', () => {
    it('should assign the right class when dashboard prop is set', () => {
      cy.get('wink-sheet').invoke('attr', 'dashboard', 'true');
      cy.get('wink-sheet').find('dialog').should('have.class', 'sheet-darker');
    });

    it('should be visible when isVisible prop is set', () => {
      cy.get('wink-sheet').invoke('attr', 'isVisible', 'true');
      cy.get('wink-sheet').find('dialog').should('have.attr', 'open');
      cy.get('wink-sheet').invoke('attr', 'isVisible', 'false');
      cy.get('wink-sheet').find('dialog').should('not.have.property', 'open');
    });
  });

  describe('interactions', () => {
    it('should close when close button is clicked', () => {
      cy.get('wink-sheet')
        .find('.sheet-icon-close')
        .then(($el) => {
          $el.on('click', (e) => e.preventDefault());
        })
        .click();
      cy.wait(1000);
      cy.get('wink-sheet').should('not.be.visible');
    });

    it('should close when escape key is clicked', () => {
      cy.get('wink-sheet').then(($el) => {
        const escapeKeyEvent = new KeyboardEvent('keydown', { key: 'Escape' });
        $el[0].dispatchEvent(escapeKeyEvent);
      });
      cy.get('wink-sheet').should('not.be.visible');
    });
  });

  describe('multipage', () => {
    beforeEach(() => {
      cy.visit('/iframe.html?id=components-sheet--multipage&viewMode=story');
    });

    it('should have multiple pages when multipage prop is set', () => {
      cy.get('wink-sheet').invoke('attr', 'multipage', 'true');
      cy.get('wink-sheet').find('.sheet-content-page').should('have.length', 2);
      cy.get('wink-sheet').invoke('attr', 'multipage', 'false');
      cy.get('wink-sheet').find('.sheet-content-page').should('have.length', 0);
    });

    it('should have go to next page when the button is clicked and back when the back button is clicked', () => {
      cy.get('wink-sheet').invoke('attr', 'multipage', 'true');
      cy.get('wink-sheet').find('.sheet-content-page').eq(0).should('have.class', 'sheet-content-page-visible');
      cy.get('wink-sheet').find('.sheet-content-page').eq(1).should('not.have.class', 'sheet-content-page-visible');
      cy.get('wink-sheet')
        .find('.wink-button-forward')
        .then(($el) => {
          $el.on('click', (e) => e.preventDefault());
        })
        .click();
      cy.wait(1000);
      cy.get('wink-sheet').find('.sheet-content-page').eq(0).should('not.have.class', 'sheet-content-page-visible');
      cy.get('wink-sheet').find('.sheet-content-page').eq(1).should('have.class', 'sheet-content-page-visible');
      cy.get('wink-sheet')
        .find('.sheet-icon-back')
        .then(($el) => {
          $el.on('click', (e) => e.preventDefault());
        })
        .click();
      cy.wait(1000);
      cy.get('wink-sheet').find('.sheet-content-page').eq(0).should('have.class', 'sheet-content-page-visible');
      cy.get('wink-sheet').find('.sheet-content-page').eq(1).should('not.have.class', 'sheet-content-page-visible');
    });

    it('should have go to next page when the button is clicked and back when the cancel button is clicked', () => {
      cy.get('wink-sheet').invoke('attr', 'multipage', 'true');
      cy.get('wink-sheet').find('.sheet-content-page').eq(0).should('have.class', 'sheet-content-page-visible');
      cy.get('wink-sheet').find('.sheet-content-page').eq(1).should('not.have.class', 'sheet-content-page-visible');
      cy.get('wink-sheet')
        .find('.wink-button-forward')
        .then(($el) => {
          $el.on('click', (e) => e.preventDefault());
        })
        .click();
      cy.wait(1000);
      cy.get('wink-sheet').find('.sheet-content-page').eq(0).should('not.have.class', 'sheet-content-page-visible');
      cy.get('wink-sheet').find('.sheet-content-page').eq(1).should('have.class', 'sheet-content-page-visible');
      cy.get('wink-sheet')
        .find('.wink-button-back')
        .then(($el) => {
          $el.on('click', (e) => e.preventDefault());
        })
        .click();
      cy.wait(1000);
      cy.get('wink-sheet').find('.sheet-content-page').eq(0).should('have.class', 'sheet-content-page-visible');
      cy.get('wink-sheet').find('.sheet-content-page').eq(1).should('not.have.class', 'sheet-content-page-visible');
    });
  });
});
