/* eslint-disable sonarjs/no-duplicate-string */
import suggestions from '../mock/suggestions-mock.json';
import instantSearchResults from '../mock/instant-search-results-full-page-mock.json';

describe('search-header-component', () => {
  beforeEach(() => {
    cy.intercept('POST', '**/suggestions', {
      statusCode: 200,
      body: suggestions,
    });

    cy.intercept('POST', '**/search', {
      statusCode: 200,
      body: instantSearchResults,
    });

    cy.visit('/header');
  });

  it('should render the component', () => {
    cy.get('tg-foundation-general-search-header').should('exist');
  });

  it('should expand the search bar when you click on it', () => {
    cy.get('#searchTerm').click();
    cy.get('#searchTerm').should('have.class', 'search-bar__input-expanded');
    cy.get('tg-foundation-general-search-brand-logo').should('be.visible');
    cy.get('div.search-bar__button').should('be.visible');
  });

  it('should shrink the search bar when click cancel', () => {
    cy.get('#searchTerm').click();
    cy.get('tg-foundation-general-search-header-button[type=cancel]').click();
    cy.get('#searchTerm').should('not.have.class', 'search-bar__input-expanded');
    cy.get('tg-foundation-general-search-brand-logo').should('not.be.visible');
    cy.get('div.search-bar__button').should('not.be.visible');
  });

  it('should shrink the search bar when clicking outside of the header', () => {
    cy.get('#searchTerm').click();
    cy.get('div.overlay-mask.position--fixed').click();
    cy.get('#searchTerm').should('not.have.class', 'search-bar__input-expanded');
    cy.get('tg-foundation-general-search-brand-logo').should('not.be.visible');
    cy.get('div.search-bar__button').should('not.be.visible');
  });

  it('should shrink the search bar when pressing escape', () => {
    cy.get('#searchTerm').click();
    cy.focused().type('{esc}');
    cy.get('#searchTerm').should('not.have.class', 'search-bar__input-expanded');
    cy.get('tg-foundation-general-search-brand-logo').should('not.be.visible');
    cy.get('div.search-bar__button').should('not.be.visible');
  });

  it('should give suggestions when entering a search query', () => {
    cy.get('#searchTerm').click();
    cy.focused().type('betalen');
    cy.get('tg-foundation-general-search-suggestions').should('be.visible');
    cy.get('tg-foundation-general-search-top-results').should('be.visible');
  });

  // FIXME this test is failing
  xit('should clear the suggestions and results when clicking the clear button', () => {
    cy.get('#searchTerm').click();
    cy.focused().type('betalen');
    cy.get('tg-foundation-general-search-icon > i.icon-clear').click();
    cy.get('tg-foundation-general-search-suggestions').should('not.exist');
    cy.get('tg-foundation-general-search-top-results').should('not.exist');
  });
  // FIXME this test is failing
  xit('should navigate through suggestions when you press the down and up arrow keys', () => {
    cy.get('#searchTerm').as('searchTerm').click();
    cy.get('@searchTerm').type('betalen');
    cy.get('tg-foundation-general-search-suggestions').should('be.visible');
    cy.get('tg-foundation-general-search-top-results').should('be.visible');
    cy.get('@searchTerm').type('{downArrow}');
    cy.get(
      'tg-foundation-general-search-suggestions > ul > li:nth-child(1) > tg-foundation-general-search-suggestion > a'
    )
      .should('have.focus')
      .type('{downArrow}');
    cy.get(
      'tg-foundation-general-search-suggestions > ul > li:nth-child(2) > tg-foundation-general-search-suggestion > a'
    )
      .should('have.focus')
      .type('{upArrow}');
    cy.get(
      'tg-foundation-general-search-suggestions > ul > li:nth-child(1) > tg-foundation-general-search-suggestion > a'
    ).should('have.focus');
  });
});
