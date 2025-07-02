/// <reference types="cypress" />

describe('Avatar', () => {
  beforeEach(() => {
    cy.visit('iframe.html?id=components-avatar--default&viewMode=story');
  });

  describe('find element', () => {
    it('finding wink-avatar element', () => {
      cy.get('wink-avatar').should('exist');
    });
  });

  describe('check sizes element', () => {
    it('check sm size', () => {
      cy.get('wink-avatar').invoke('attr', 'src', 'https://shorturl.at/mNQR8');
      cy.get('wink-avatar').invoke('attr', 'size', 'sm');
      cy.get('wink-avatar').find('img').should('have.css', 'height', '24px');
      cy.get('wink-avatar').find('img').should('have.css', 'width', '24px');
    });
    it('check md size', () => {
      cy.get('wink-avatar').invoke('attr', 'src', 'https://shorturl.at/mNQR8');
      cy.get('wink-avatar').find('img').should('have.css', 'height', '40px');
      cy.get('wink-avatar').find('img').should('have.css', 'width', '40px');
    });
    it('check lg size', () => {
      cy.get('wink-avatar').invoke('attr', 'src', 'https://shorturl.at/mNQR8');
      cy.get('wink-avatar').invoke('attr', 'size', 'lg');
      cy.get('wink-avatar').find('img').should('have.css', 'height', '48px');
      cy.get('wink-avatar').find('img').should('have.css', 'width', '48px');
    });
    it('check xl size', () => {
      cy.get('wink-avatar').invoke('attr', 'size', 'xl');
      cy.get('wink-avatar').invoke('attr', 'src', 'https://shorturl.at/mNQR8');
      cy.get('wink-avatar').find('img').should('have.css', 'height', '72px');
      cy.get('wink-avatar').find('img').should('have.css', 'width', '72px');
    });
  });
});
