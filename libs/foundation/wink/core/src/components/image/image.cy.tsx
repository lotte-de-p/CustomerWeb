/// <reference types="cypress" />

describe('Image', () => {
  beforeEach(() => {
    cy.visit('iframe.html?id=components-image--default&viewMode=story');
  });

  describe('Element', () => {
    it('should find the wink-img element', () => {
      cy.get('wink-img').should('exist');
    });
    it('should render wink-img tag the correct src-desktop tag', () => {
      cy.get('wink-img').find('img').should('attr', 'src', '/assets/shared/img/place-holders/testimg-desktop.jpg');
    });
  });
  describe('props', () => {
    it('should render render a source element with the correct sourceset with media query (max-width: 769px)', () => {
      cy.get('wink-img').invoke('attr', 'src-tablet', '/assets/shared/img/place-holders/testimg-tablet.jpg');
      cy.get('wink-img').find('source[media="(max-width: 769px)"]').should('exist');
      cy.get('wink-img')
        .find('source[media="(max-width: 769px)"]')
        .should('attr', 'srcset', '/assets/shared/img/place-holders/testimg-tablet.jpg');
    });

    it('should render render a source element with the correct sourceset with media query (max-width: 576px)', () => {
      cy.get('wink-img').invoke('attr', 'src-mobile', '/assets/shared/img/place-holders/testimg-mobile.jpg');
      cy.get('wink-img').find('source[media="(max-width: 576px)"]').should('exist');
      cy.get('wink-img')
        .find('source[media="(max-width: 576px)"]')
        .should('attr', 'srcset', '/assets/shared/img/place-holders/testimg-mobile.jpg');
    });

    it('should render a alt attribute', () => {
      cy.get('wink-img').invoke('attr', 'alt', 'Please describe picture for screen-readers');
      cy.get('wink-img').find('img').should('attr', 'alt', 'Please describe picture for screen-readers');
    });

    it('should have a loading plan', () => {
      cy.get('wink-img').find('img').should('attr', 'loading', 'lazy');

      cy.get('wink-img').invoke('attr', 'loading', 'eager');
      cy.get('wink-img').find('img').should('attr', 'loading', 'eager');
    });
  });
});
