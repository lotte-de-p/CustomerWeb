/// <reference types="cypress" />

describe('wink-button', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=components-button--primary&viewMode=story');
  });

  describe('host', () => {
    it('should find the wink-button element', () => {
      cy.get('wink-button').should('exist');
    });

    it('should assign the right attribute to the default loaded button', () => {
      cy.get('wink-button').invoke('attr', 'element', 'button');
      cy.get('wink-button').invoke('attr', 'size', 'md');
      cy.get('wink-button').invoke('attr', 'appearance', 'primary');
      cy.get('wink-button').invoke('attr', 'status', 'none');
      cy.get('wink-button').invoke('attr', 'href', 'telenet.be');
      cy.get('wink-button').invoke('attr', 'typeAttribute', 'button');
      cy.get('wink-button').invoke('attr', 'icon', 'arrow-left');
      cy.get('wink-button').invoke('attr', 'loadingText', 'loading');
      cy.get('wink-button').invoke('attr', 'inputText', 'Text for input button');

      cy.get('wink-button').should('have.attr', 'element', 'button');
      cy.get('wink-button').should('have.attr', 'appearance', 'primary');
      cy.get('wink-button').should('have.attr', 'size', 'md');
      cy.get('wink-button').should('have.attr', 'status', 'none');
      cy.get('wink-button').should('have.attr', 'href', 'telenet.be');
      cy.get('wink-button').should('have.attr', 'typeAttribute', 'button');
      cy.get('wink-button').should('have.attr', 'icon', 'arrow-left');
      cy.get('wink-button').should('have.attr', 'loadingText', 'loading');
      cy.get('wink-button').should('have.attr', 'inputText', 'Text for input button');
    });
  });

  describe('type', () => {
    it('should render button by default', () => {
      cy.get('wink-button').find('button').should('have.class', 'button');
      cy.go('back');
    });

    it('should assign input type', () => {
      cy.get('wink-button').invoke('attr', 'element', 'input');

      cy.get('wink-button').find('input').should('have.class', 'button');
      cy.go('back');
    });

    it('should assign link type', () => {
      cy.get('wink-button').invoke('attr', 'element', 'a');

      cy.get('wink-button').find('a').should('have.class', 'button');
      cy.go('back');
    });
  });

  describe('appearance', () => {
    it('should assign primary appearance', () => {
      cy.get('wink-button').invoke('attr', 'appearance', 'primary');

      cy.get('wink-button').find('.button').should('have.class', 'primary');
      cy.go('back');
    });

    it('should assign secondary appearance', () => {
      cy.get('wink-button').invoke('attr', 'appearance', 'secondary');

      cy.get('wink-button').find('.button').should('have.class', 'secondary');
      cy.go('back');
    });

    it('should assign tertiary appearance', () => {
      cy.get('wink-button').invoke('attr', 'appearance', 'tertiary');

      cy.get('wink-button').find('.button').should('have.class', 'tertiary');
      cy.go('back');
    });
  });

  describe('size', () => {
    it('should assign default size', () => {
      cy.get('wink-button').invoke('attr', 'size', 'md');

      cy.get('wink-button').find('.button').should('not.have.class', 'button--size-sm');
      cy.go('back');
    });

    it('should assign small size', () => {
      cy.get('wink-button').invoke('attr', 'size', 'sm');

      cy.get('wink-button').find('.button').should('have.class', 'size-sm');
      cy.go('back');
    });
  });

  describe('state', () => {
    it('should assign no state', () => {
      cy.get('wink-button').invoke('attr', 'state', 'none');

      cy.get('wink-button').find('.button').should('not.have.class', 'button--state-disable');
      cy.go('back');
    });

    it('should assign disabled state', () => {
      cy.get('wink-button').invoke('attr', 'status', 'disable');

      cy.get('wink-button').find('.button').should('have.class', 'state-disable');
      cy.go('back');
    });

    it('should assign skeleton state', () => {
      cy.get('wink-button').invoke('attr', 'status', 'skeleton');

      cy.get('wink-button').find('.button').should('have.class', 'state-skeleton');
      cy.go('back');
    });

    it('should assign loading state', () => {
      cy.get('wink-button').invoke('attr', 'status', 'loading');
      cy.get('wink-button').find('.button').should('have.class', 'state-loading');
      cy.go('back');
    });
  });

  describe('special buttons', () => {
    it('should display custom loading button', () => {
      cy.get('wink-button').invoke('attr', 'status', 'loading');
      cy.get('wink-button').invoke('attr', 'text', 'loading button');

      cy.get('wink-button').find('.button').should('have.class', 'state-loading');
      cy.go('back');
    });

    it('should display custom link button', () => {
      cy.get('wink-button').invoke('attr', 'element', 'a');
      cy.get('wink-button').invoke('attr', 'href', '/nl');

      cy.get('wink-button').find('a').should('have.class', 'button');
      cy.get('wink-button').find('.button').should('have.class', 'type-a');
      cy.get('wink-button').find('a').should('have.attr', 'href').and('include', '/nl');
      cy.go('back');
    });

    it('should display icon button', () => {
      cy.get('wink-button').invoke('attr', 'element', 'button');
      cy.get('wink-button').invoke('attr', 'appearance', 'secondary');
      cy.get('wink-button').invoke('attr', 'has-icon', 'true');
      cy.get('wink-button').invoke('attr', 'icon-position', 'left');
      cy.get('wink-button').invoke('attr', 'icon', 'shop');

      cy.get('wink-button').find('button').should('have.class', 'button');
      cy.get('wink-button').find('.button').should('have.class', 'secondary');
      cy.get('wink-button').find('.button').should('have.class', 'icon-left');
      cy.get('wink-button').find('i').should('have.class', 'md');
      cy.go('back');
    });

    it('should display reset type input button', () => {
      cy.get('wink-button').invoke('attr', 'element', 'input');
      cy.get('wink-button').invoke('attr', 'type', 'reset');
      cy.get('wink-button').invoke('attr', 'text', 'This will reset everything');

      cy.get('wink-button').find('input').should('have.attr', 'type').and('include', 'reset');
      cy.get('wink-button').find('.button').should('have.attr', 'value').and('include', 'This will reset everything');
      cy.go('back');
    });
  });
});
