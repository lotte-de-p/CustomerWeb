/// <reference types="cypress" />

describe('default dropdown', () => {
  beforeEach(() => {
    cy.visit('iframe.html?id=components-dropdown-menu--default&viewMode=story');
  });

  describe('Element', () => {
    it('should find the wink-dropdown-menu element', () => {
      cy.get('wink-dropdown-menu').should('exist');
      cy.get('wink-dropdown-menu').find('wink-link').should('have.attr', 'appearance', 'dropdown-menu-link');
    });
  });

  describe('props', () => {
    it('should render by default Account as selected item but if selected-item is set it should render to that string', () => {
      cy.get('wink-dropdown-menu').find('wink-link:nth-child(2)').contains('Account');
    });

    it('should check if prop open is set it should render attribute open on overlay otherwise it should not exist', () => {
      cy.get('wink-dropdown-menu').should('not.have.attr', 'is-expanded');
      cy.get('wink-dropdown-menu').find('.dropdown-menu--list').should('have.css', 'display', 'none');

      cy.get('wink-dropdown-menu').invoke('attr', 'is-expanded', true);
      cy.get('wink-dropdown-menu').should('have.attr', 'is-expanded');
      cy.get('wink-dropdown-menu')
        .find('.dropdown-menu--chevron')
        .should('have.css', 'transform', 'matrix(1, 0, 0, -1, 0, 0)');
      cy.get('wink-dropdown-menu').find('.dropdown-menu--list').should('have.css', 'display', 'flex');
    });

    it("should render it's list aligned top left based on it's position ", () => {
      cy.get('wink-dropdown-menu').invoke('attr', 'is-expanded', true);
      cy.get('wink-dropdown-menu').should('have.class', 'dropdown-menu--align-list--top-left');
      cy.get('wink-dropdown-menu').find('.dropdown-menu--list').should('have.css', 'left', '0px');
      cy.get('wink-dropdown-menu').find('.dropdown-menu--list').should('have.css', 'top', '48px');
    });

    it("should render it's list aligned top right based on it's position ", () => {
      cy.get('#root-inner').invoke('css', 'text-align', 'right');
      cy.get('wink-dropdown-menu').invoke('attr', 'is-expanded', true);
      cy.get('wink-dropdown-menu').should('have.class', 'dropdown-menu--align-list--top-right');
      cy.get('wink-dropdown-menu').find('.dropdown-menu--list').should('have.css', 'right', '0px');
      cy.get('wink-dropdown-menu').find('.dropdown-menu--list').should('have.css', 'top', '48px');
    });

    it("should render it's list aligned bottom left based on it's position ", () => {
      cy.get('#root-inner').invoke('css', 'padding-top', '70vh');
      cy.get('wink-dropdown-menu').invoke('attr', 'is-expanded', true);
      cy.get('wink-dropdown-menu').should('have.class', 'dropdown-menu--align-list--bottom-left');
      cy.get('wink-dropdown-menu').find('.dropdown-menu--list').should('have.css', 'left', '0px');
      cy.get('wink-dropdown-menu').find('.dropdown-menu--list').should('have.css', 'bottom', '48px');
    });

    it("should render it's list aligned bottom left based on it's position ", () => {
      cy.get('#root-inner').invoke('css', 'padding-top', '70vh');
      cy.get('#root-inner').invoke('css', 'text-align', 'right');
      cy.get('wink-dropdown-menu').invoke('attr', 'is-expanded', true);
      cy.get('wink-dropdown-menu').should('have.class', 'dropdown-menu--align-list--bottom-right');
      cy.get('wink-dropdown-menu').find('.dropdown-menu--list').should('have.css', 'right', '0px');
      cy.get('wink-dropdown-menu').find('.dropdown-menu--list').should('have.css', 'bottom', '48px');
    });

    it('should render a wink link with an active class if the text of a wink link equals to the active item', () => {
      cy.get('wink-dropdown-menu').invoke('attr', 'item-selected', '');
      cy.get('wink-dropdown-menu').find('wink-link:nth-child(2)').should('not.have.class', 'active');

      cy.get('wink-dropdown-menu').invoke('attr', 'item-selected', 'Account');
      cy.get('wink-dropdown-menu').find('wink-link:nth-child(2)').should('have.class', 'active');
    });
  });

  describe('Extra tests', () => {
    it('should test if unwanted html is set in children it should not get rendered', () => {
      cy.document().then(($doc) => {
        cy.get('wink-dropdown-menu').then(($drp) => {
          const p = $doc.createElement('p');
          p.id = 'unwanted-html';
          p.innerText = 'I will not be rendered';
          $drp.append(p);
        });
      });

      cy.get('wink-dropdown-menu').find('ul p#unwanted-html').should('not.exist');
    });

    it('should test if it get decently rendered over an element', () => {
      cy.document().then(($doc) => {
        cy.get('wink-dropdown-menu').then(($drp) => {
          const div = $doc.createElement('div');
          div.id = 'next-el';
          div.style.cssText = 'background-color:yellow;width:100px;height:200px';
          $drp.after(div);
        });
      });
      cy.get('wink-dropdown-menu').invoke('attr', 'is-expanded', true);

      cy.get('body').find('wink-dropdown-menu + #next-el').should('exist');
      cy.get('wink-dropdown-menu').find('.dropdown-menu--list').should('have.css', 'display', 'flex');
      cy.get('wink-dropdown-menu').find('.dropdown-menu--list').should('have.css', 'top', '48px');
    });
  });
});

describe('Language dropdown', () => {
  beforeEach(() => {
    cy.visit('iframe.html?id=components-dropdown-menu--language-dropdown&viewMode=story');
  });
  it('should find the wink-dropdown-menu element', () => {
    cy.get('wink-dropdown-menu').should('exist');
    cy.get('wink-dropdown-menu').find('.dropdown-menu--heading').contains('NL');
    cy.get('.dropdown-menu--heading').contains('NL');
  });
  it('should contain the right children', () => {
    cy.get('wink-dropdown-menu').find('wink-link:first-child').contains('NL');
    cy.get('wink-dropdown-menu').find('wink-link:nth-child(2)').contains('FR');
    cy.get('wink-dropdown-menu').find('wink-link:last-child').contains('EN');
  });
});
