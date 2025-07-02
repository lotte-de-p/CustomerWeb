/// <reference types="cypress" />

describe('tabs', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=components-tabs--default&viewMode=story');
  });

  describe('host element', () => {
    it('should find the wink-tabs element', () => {
      cy.get('wink-tabs').should('exist');
    });
  });

  describe('tabs', () => {
    it('should find/check the 4 tabs', () => {
      cy.get('wink-tabs').find('button').should('have.length', '4');
    });

    it('should check if the second tab is disabled', () => {
      cy.get('wink-tabs').find('#tab-2').should('have.attr', 'disabled');
    });

    it('should check the active tab style and attributes', () => {
      cy.get('wink-tabs').find('#tab-1').should('be.visible');
      cy.get('wink-tabs').find('#tab-1').should('be.visible');
      cy.get('wink-tabs').find('#tab-1').should('have.attr', 'aria-selected', 'true');
      cy.get('wink-tabs').find('#tab-1').should('have.class', 'is-active-tab');
    });
  });

  describe('panels', () => {
    it('should find/check the 4 panels', () => {
      cy.get('wink-tabs').find('[role="tabpanel"]').should('have.length', '4');
      cy.get('wink-tabs').find('#tab-1').should('have.attr', 'aria-controls', 'tabpanel-1');
    });

    it('should find/check the active panel style and attributes', () => {
      cy.get('wink-tabs').find('#tabpanel-1').should('be.visible');
      cy.get('wink-tabs').find('#tabpanel-1').should('have.attr', 'aria-labelledby', 'tab-1');
      cy.get('wink-tabs').find('#tabpanel-1').should('have.attr', 'tabindex', '0');
      cy.get('wink-tabs').find('#tabpanel-2').should('not.be.visible');
      cy.get('wink-tabs').find('#tabpanel-3').should('not.be.visible');
      cy.get('wink-tabs').find('#tabpanel-4').should('not.be.visible');
    });
  });

  describe('controls', () => {
    beforeEach(() => {
      cy.viewport(400, 800);
    });

    it('should scroll the tabs to the right and skip the disabled one', () => {
      cy.get('wink-tabs')
        .find('.scroll-button-right')
        .then(($el) => {
          $el.on('click', (e) => e.preventDefault());
        })
        .click();
      cy.get('wink-tabs').find('#tabpanel-2').should('not.be.visible');
      cy.get('wink-tabs').find('#tabpanel-3').should('be.visible');
      cy.get('wink-tabs').find('.scroll-button-left').should('be.visible');
    });

    it('should scroll the tabs to the left and skip the disabled one', () => {
      cy.get('wink-tabs').find('.tab-list').scrollTo(700, 0);
      cy.get('wink-tabs')
        .find('#tab-3')
        .then(($el) => {
          $el.on('click', (e) => e.preventDefault());
        })
        .click({ force: true });
      cy.get('wink-tabs')
        .find('.scroll-button-left')
        .then(($el) => {
          $el.on('click', (e) => e.preventDefault());
        })
        .click();
      cy.get('wink-tabs').find('#tabpanel-2').should('not.be.visible');
      cy.get('wink-tabs').find('#tabpanel-1').should('be.visible');
      cy.get('wink-tabs').find('.scroll-button-right').should('be.visible');
    });
  });
});
