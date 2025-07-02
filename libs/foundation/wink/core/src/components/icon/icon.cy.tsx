/// <reference types="cypress" />

describe('icon', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=components-icon--default&viewMode=story');
  });

  describe('host', () => {
    it('should find the wink-icon element', () => {
      cy.get('wink-icon').should('exist');
    });

    it('should assign the right exportparts to the host', () => {
      cy.get('wink-icon').invoke('attr', 'appearance', 'primary');
      cy.get('wink-icon').invoke('attr', 'icon', 'advisor');
      cy.get('wink-icon').invoke('attr', 'size', 'l');

      cy.get('wink-icon').should('have.attr', 'exportparts', 'icon, icon-advisor');
    });
  });

  describe('icon font', () => {
    it('should assign the advisor icon', () => {
      cy.get('wink-icon').invoke('attr', 'icon', 'advisor');

      cy.get('wink-icon').find('i').should('have.attr', 'part', 'icon icon-advisor');
      cy.get('wink-icon').find('i').should('have.css', 'font-family', 'telenet-icons-font, sans-serif');
    });
  });

  describe('appearance', () => {
    it('should assign primary appearance', () => {
      cy.get('wink-icon').invoke('attr', 'appearance', 'primary');

      cy.get('wink-icon').find('i').should('have.class', 'primary').and('have.class', 'backdrop');
    });

    it('should assign transparent appearance', () => {
      cy.get('wink-icon').invoke('attr', 'appearance', 'secondary');

      cy.get('wink-icon').find('i').should('have.class', 'secondary').and('have.class', 'backdrop');
    });

    it('should assign transparent appearance', () => {
      cy.get('wink-icon').invoke('attr', 'appearance', 'transparent');

      cy.get('wink-icon').find('i').should('have.class', 'transparent').and('have.class', 'backdrop');
    });
  });

  describe('size', () => {
    it('should assign the s size', () => {
      cy.get('wink-icon').invoke('attr', 'size', 'sm');
      cy.get('wink-icon').invoke('attr', 'appearance', 'primary');

      cy.get('wink-icon').find('i').should('have.css', 'font-size', '16px');
      cy.get('wink-icon').find('i').should('have.class', 'primary').and('have.class', 'backdrop');
    });

    it('should assign the m size', () => {
      cy.get('wink-icon').invoke('attr', 'size', 'md');
      cy.get('wink-icon').invoke('attr', 'appearance', 'primary');

      cy.get('wink-icon').find('i').should('have.css', 'font-size', '24px');
      cy.get('wink-icon').find('i').should('have.class', 'primary').and('have.class', 'backdrop');
    });

    it('should assign the l size', () => {
      cy.get('wink-icon').invoke('attr', 'size', 'lg');
      cy.get('wink-icon').invoke('attr', 'appearance', 'primary');

      cy.get('wink-icon').find('i').should('have.css', 'font-size', '32px');
      cy.get('wink-icon').find('i').should('have.class', 'primary').and('have.class', 'backdrop');
    });

    it('should assign the xl size', () => {
      cy.get('wink-icon').invoke('attr', 'size', 'xl');
      cy.get('wink-icon').invoke('attr', 'appearance', 'primary');

      cy.get('wink-icon').find('i').should('have.css', 'font-size', '40px');
      cy.get('wink-icon').find('i').should('have.class', 'primary').and('have.class', 'backdrop');
    });
  });
});
