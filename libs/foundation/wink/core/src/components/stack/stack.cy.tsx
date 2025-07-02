/// <reference types="cypress" />

describe('stack', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=components-stack--default&viewMode=story');
  });

  describe('host', () => {
    it('should find the wink-stack element', () => {
      cy.get('wink-stack').should('exist');
    });
  });

  describe('col', () => {
    it('should have full width', () => {
      cy.get('wink-stack').should('have.css', 'flex-basis', '100%');
      cy.get('wink-stack').should('have.css', 'max-width', '100%');
    });

    it('should have half width', () => {
      cy.visit('/iframe.html?id=components-stack--default&args=col:6&viewMode=story');

      cy.get('wink-stack').should('have.css', 'flex-basis', '50%');
      cy.get('wink-stack').should('have.css', 'max-width', '50%');
    });
  });

  describe('direction', () => {
    it('should have row direction', () => {
      cy.get('wink-stack').should('have.class', 'flex-direction-row');
      cy.get('wink-stack').should('have.css', 'flex-direction', 'row');
    });
    it('should have column direction', () => {
      cy.visit('/iframe.html?id=components-stack--default&args=direction:column&viewMode=story');

      cy.get('wink-stack').should('have.class', 'flex-direction-column');
      cy.get('wink-stack').should('have.css', 'flex-direction', 'column');
    });
  });

  describe('gap', () => {
    it('should have the xs gap class', () => {
      cy.get('wink-stack').should('have.class', 'gap-xs');
    });
    it('should have the none gap class', () => {
      cy.visit('/iframe.html?id=components-stack--default&args=gap:none&viewMode=story');

      cy.get('wink-stack').should('have.class', 'gap-none');
    });
  });

  describe('justifyContent', () => {
    it('should justifyContent to center', () => {
      cy.get('wink-stack').should('have.css', 'justify-content', 'center');
    });

    it('should justifyContent to space-around', () => {
      cy.visit('/iframe.html?id=components-stack--default&args=justifyContent:space-around&viewMode=story');

      cy.get('wink-stack').should('have.css', 'justify-content', 'space-around');
    });
  });

  describe('alignItems', () => {
    it('should alignItems to center', () => {
      cy.get('wink-stack').should('have.css', 'align-items', 'center');
    });

    it('should alignItems to flex-start', () => {
      cy.visit('/iframe.html?id=components-stack--default&args=alignItems:flex-start&viewMode=story');

      cy.get('wink-stack').should('have.css', 'align-items', 'flex-start');
    });
  });

  describe('wrap', () => {
    it('should wrap to wrap', () => {
      cy.get('wink-stack').should('have.css', 'flex-wrap', 'wrap');
    });

    it('should wrap to nowrap', () => {
      cy.visit('/iframe.html?id=components-stack--default&args=wrap:nowrap&viewMode=story');

      cy.get('wink-stack').should('have.css', 'flex-wrap', 'nowrap');
    });
  });
});
