/// <reference types="cypress" />

describe('link', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=components-link--inline&viewMode=story');
  });

  describe('host', () => {
    it('should find the wink-link element', () => {
      cy.get('wink-link').should('exist');
    });
  });

  describe('appearance', () => {
    it('should assign appearance default', () => {
      cy.get('wink-link').invoke('attr', 'appearance', 'default');
      cy.get('wink-link').find('a').should('have.class', 'link');
    });

    it('should assign appearance subtle', () => {
      cy.get('wink-link').invoke('attr', 'appearance', 'subtle');
      cy.get('wink-link').find('a').should('have.class', 'subtle');
    });

    it('should assign appearance area', () => {
      cy.get('wink-link').invoke('attr', 'appearance', 'area');
      cy.get('wink-link').find('a').should('have.class', 'area');
    });

    it('should assign appearance dropdown-menu-link', () => {
      cy.get('wink-link').invoke('attr', 'appearance', 'dropdown-menu-link');
      cy.get('wink-link').find('a').should('have.class', 'dropdown-menu-link');
      cy.get('wink-link').find('a div#link-content').should('have.css', 'display', 'block');
      cy.get('wink-link').find('a div#link-content').should('have.css', 'padding', '0px');
    });
  });

  describe('size', () => {
    it('should assign size inherit', () => {
      cy.get('wink-link').invoke('attr', 'size', 'inherit');
      cy.get('wink-link').find('a').should('have.class', 'font-inherit');
    });

    it('should assign size body-regular', () => {
      cy.get('wink-link').invoke('attr', 'size', 'body-regular');
      cy.get('wink-link').find('a').should('have.class', 'font-body-regular');
    });

    it('should assign size body-small', () => {
      cy.get('wink-link').invoke('attr', 'size', 'body-small');
      cy.get('wink-link').find('a').should('have.class', 'font-body-small');
    });
  });

  describe('no icon rendered on default', () => {
    it('should not assign any icon', () => {
      cy.get('wink-link').invoke('attr', 'icon', '');
      cy.get('wink-link').find('wink-icon').should('not.exist');
    });
  });

  describe('should assign icon when icon name selected', () => {
    it('should assign the chevron-left icon to left side', () => {
      cy.get('wink-link').invoke('attr', 'icon', 'chevron-left');
      cy.get('wink-link').find('a').should('have.class', 'link-with-icon');
      cy.get('wink-link').find('wink-icon').should('not.exist');
    });
  });

  describe('icon-position', () => {
    it('should assign correct position-left classes to the link', () => {
      cy.get('wink-link').invoke('attr', 'icon', 'chevron-left');
      cy.get('wink-link').invoke('attr', 'icon-position', 'left');
      cy.get('wink-link').find('a').should('have.class', 'link-with-icon link-with-icon-left');
    });

    it('should assign correct position-right classes to the link', () => {
      cy.get('wink-link').invoke('attr', 'icon', 'chevron-left');
      cy.get('wink-link').invoke('attr', 'icon-position', 'right');
      cy.get('wink-link').find('a').should('have.class', 'link-with-icon link-with-icon-right');
    });
  });

  describe('iconAppearance', () => {
    it('should not assign the class link-with-icon-backdrop to the link when iconAppearance is default', () => {
      cy.get('wink-link').invoke('attr', 'icon', 'chevron-left');
      cy.get('wink-link').invoke('attr', 'icon-appearance', 'default');
      cy.get('wink-link').find('a').should('not.have.class', 'link-with-icon-backdrop');
    });
    it('should assign the class link-with-icon-backdrop to the link when iconAppearance is primary', () => {
      cy.get('wink-link').invoke('attr', 'icon', 'chevron-left');
      cy.get('wink-link').invoke('attr', 'icon-appearance', 'primary');
      cy.get('wink-link').find('a').should('have.class', 'link-with-icon-backdrop');
    });
    it('should assign the class link-with-icon-backdrop to the link when iconAppearance is secondary', () => {
      cy.get('wink-link').invoke('attr', 'icon', 'chevron-left');
      cy.get('wink-link').invoke('attr', 'icon-appearance', 'secondary');
      cy.get('wink-link').find('a').should('have.class', 'link-with-icon-backdrop');
    });
  });

  describe('isDisabled', () => {
    it('should assign the state disabled', () => {
      cy.get('wink-link').invoke('attr', 'is-disabled', 'true');
      cy.get('wink-link').find('a').should('have.class', 'disabled');
    });
    it('should not assign the state disabled', () => {
      cy.get('wink-link').invoke('attr', 'is-disabled', 'false');
      cy.get('wink-link').find('a').should('not.have.class', 'disabled');
    });
  });
});
