/// <reference types="cypress" />

describe('NavigationList', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=components-global-header-navigation-list--default&viewMode=story');
  });

  it('renders the component', () => {
    cy.get('wink-navigation-list').should('exist');
  });

  it('renders the list title correctly', () => {
    cy.get('wink-navigation-list')
      .shadow()
      .find('.navigation-list--title')
      .should('have.text', 'Support')
      .should('have.css', 'font-family', `TelenetAlbra-Bold, "Helvetica Neue", Helvetica, Arial, sans-serif`)
      .should('have.css', 'font-weight', '700')
      .should('have.css', 'color', 'rgb(118, 111, 107)');
  });

  it('renders bold links when hasBoldLinks prop is true', () => {
    cy.get('wink-navigation-list').invoke('attr', 'has-bold-links', true);
    cy.get('wink-navigation-list')
      .shadow()
      .find('.navigation-list--list li')
      .each(($li) => {
        cy.wrap($li)
          .find('wink-navigation-list-item')
          .should('have.css', 'font-family', `TelenetAlbra-Bold, "Helvetica Neue", Helvetica, Arial, sans-serif`)
          .should('have.css', 'font-weight', '700');
      });
  });
});
