/// <reference types="cypress" />

describe('wink-pricing', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=components-pricing--default&viewMode=story');
  });

  it('should find the wink-pricing element', () => {
    cy.get('wink-pricing').should('exist');
  });

  it('should check if the appearance patch gives a yellow badge background', () => {
    cy.get('wink-pricing').invoke('attr', 'appearance', 'patch');
    cy.get('wink-pricing').should('have.css', 'display', 'inline-flex');
    cy.get('wink-pricing').should('have.css', 'background-color', `rgb(255, 196, 33)`);
    cy.get('wink-pricing').should('have.css', 'aspect-ratio', '1 / 1');
  });

  it('should render the right alignment in the appearance subtle text', () => {
    cy.get('wink-pricing').invoke('attr', 'appearance', 'subtle text');
    cy.get('wink-pricing').invoke('attr', 'alignment', 'right');

    cy.get('wink-pricing')
      .find('.pricing__header.price-align__right')
      .should('have.css', 'justify-content', 'flex-end');
    cy.get('wink-pricing')
      .find('.pricing__current-price-wrapper.price-align__right')
      .should('have.css', 'align-items', 'flex-end');
    cy.get('wink-pricing')
      .find('.pricing__footer.price-align__right')
      .should('have.css', 'justify-content', 'flex-end');
  });

  it('should render the price after the comma or dot in separate html tag', () => {
    cy.get('wink-pricing').invoke('attr', 'price', '65.95');
    cy.get('wink-pricing').find('.pricing__price-value-wrapper span.price__price-decimal').contains(',95');
    cy.get('wink-pricing').invoke('attr', 'price', '65');
    cy.get('wink-pricing').find('.pricing__price-value-wrapper span.price__price-decimal').should('not.exist');
  });

  it('should render the price correctly after it has gets the correct language set', () => {
    cy.get('wink-pricing').invoke('attr', 'price', '65.95');
    cy.get('wink-pricing').find('.pricing__price-value-wrapper').should('not.have.class', 'currency-after');
    cy.get('wink-pricing').find('.pricing__price-value-wrapper span.price__price-decimal').contains(',95');

    cy.get('wink-pricing').invoke('attr', 'annotation', 'FR');
    cy.get('wink-pricing').find('.pricing__price-value-wrapper').should('have.class', 'currency-after');
    cy.get('wink-pricing').find('.pricing__price-value-wrapper span.price__price-decimal').contains(',95');

    cy.get('wink-pricing').invoke('attr', 'annotation', 'EN');
    cy.get('wink-pricing').find('.pricing__price-value-wrapper').should('not.have.class', 'currency-after');
    cy.get('wink-pricing').find('.pricing__price-value-wrapper span.price__price-decimal').contains('.95');
  });

  it('should render the screenreader text correctly after it has gets the correct language set', () => {
    cy.get('wink-pricing').invoke('attr', 'price', '65.95');
    cy.get('wink-pricing').find('.pricing__price-value-wrapper .sr-only').contains('Huidige prijs');

    cy.get('wink-pricing').invoke('attr', 'annotation', 'FR');
    cy.get('wink-pricing').find('.pricing__price-value-wrapper .sr-only').contains('Prix Maintenant');

    cy.get('wink-pricing').invoke('attr', 'annotation', 'EN');
    cy.get('wink-pricing').find('.pricing__price-value-wrapper .sr-only').contains('Current price');
  });

  it('should render  the price the promotag after it is set', () => {
    cy.get('wink-pricing').invoke('attr', 'price-strikethrough', '50,43');
    cy.get('wink-pricing').find('.pricing__promo-price').should('exist');
    cy.get('wink-pricing').find('.pricing__promo-price').should('have.css', 'text-decoration-line', 'line-through');
    cy.get('wink-pricing').find('.pricing__promo-price .sr-only').contains('Normale prijs');
  });
});
