/// <reference types="cypress" />

describe('title', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=components-title--default&viewMode=story');
  });

  describe('Element', () => {
    it('should find the wink-title element', () => {
      cy.get('wink-title').should('exist');
    });
  });
  describe('props', () => {
    it('should load an h2 tag and if you change the html-tag prop it should change to', () => {
      cy.get('wink-title').find('h2').should('exist');

      cy.get('wink-title').invoke('attr', 'html-tag', 'h1');
      cy.get('wink-title').find('h1').should('exist');
    });

    it('should load an div tag with h2 class', () => {
      cy.get('wink-title').invoke('attr', 'no-seo', 'true');

      cy.get('wink-title').find('h2').should('not.exist');
      cy.get('wink-title').find('.h2').should('exist');
    });

    it("should render load text 'Set title/heading text.' but if text is set it should render that text", () => {
      cy.get('wink-title').find('h2').should('have.text', 'Klantenservice');
      cy.get('wink-title').invoke('attr', 'text', 'This is a test text prop');
      cy.get('wink-title').find('h2').should('have.text', 'This is a test text prop');
    });

    it('should render title with correct margins if spacingY prop is set check if margins are removed correctly ', () => {
      cy.get('wink-title').find('h2').should('have.css', 'margin-top', '24px');
      cy.get('wink-title').find('h2').should('have.css', 'margin-bottom', '4px');

      cy.get('wink-title').invoke('attr', 'spacing-y', 'top');
      cy.get('wink-title').find('h2').should('have.css', 'margin-top', '24px');
      cy.get('wink-title').find('h2').should('have.css', 'margin-bottom', '0px');

      cy.get('wink-title').invoke('attr', 'spacing-y', 'bottom');
      cy.get('wink-title').find('h2').should('have.css', 'margin-top', '0px');
      cy.get('wink-title').find('h2').should('have.css', 'margin-bottom', '4px');

      cy.get('wink-title').invoke('attr', 'spacing-y', 'none');
      cy.get('wink-title').find('h2').should('have.css', 'margin-top', '0px');
      cy.get('wink-title').find('h2').should('have.css', 'margin-bottom', '0px');
    });
  });
  describe('extra styling checks', () => {
    it('h1 should have the the correct font-size and line-height ', () => {
      cy.get('wink-title').invoke('attr', 'html-tag', 'h1');

      cy.get('wink-title').find('h1').should('have.css', 'font-size', '56px');
      cy.get('wink-title').find('h1').should('have.css', 'line-height', '60px');
    });

    it('h2 should have the the correct font-size and line-height ', () => {
      cy.get('wink-title').find('h2').should('have.css', 'font-size', '40px');
      cy.get('wink-title').find('h2').should('have.css', 'line-height', '48px');
    });

    it('h3 should have the the correct font-size and line-height ', () => {
      cy.get('wink-title').invoke('attr', 'html-tag', 'h3');
      cy.get('wink-title').find('h3').should('have.css', 'font-size', '32px');
      cy.get('wink-title').find('h3').should('have.css', 'line-height', '40px');
    });

    it('h4 should have the the correct font-size and line-height ', () => {
      cy.get('wink-title').invoke('attr', 'html-tag', 'h4');
      cy.get('wink-title').find('h4').should('have.css', 'font-size', '24px');
      cy.get('wink-title').find('h4').should('have.css', 'line-height', '32px');
    });

    it('h5 should have the the correct font-size and line-height ', () => {
      cy.get('wink-title').invoke('attr', 'html-tag', 'h5');
      cy.get('wink-title').find('h5').should('have.css', 'font-size', '20px');
      cy.get('wink-title').find('h5').should('have.css', 'line-height', '28px');
    });

    it('h6 should have the the correct font-size and line-height ', () => {
      cy.get('wink-title').invoke('attr', 'html-tag', 'h6');
      cy.get('wink-title').find('h6').should('have.css', 'font-size', '18px');
      cy.get('wink-title').find('h6').should('have.css', 'line-height', '28px');
    });

    it('h3 should have the the correct font-size and line-height ', () => {
      cy.get('wink-title').invoke('attr', 'html-tag', 'h3');
      cy.get('wink-title').invoke('attr', 'no-seo', 'true');

      cy.get('wink-title').find('.h3').should('have.css', 'font-size', '32px');
      cy.get('wink-title').find('.h3').should('have.css', 'line-height', '40px');
    });
  });
});
