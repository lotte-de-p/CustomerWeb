/// <reference types="cypress" />

describe('wink-main-navigation', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=components-global-header-main-navigation--default&viewMode=story');
  });

  it('should have no flex-direction for the main navigation ul on a screen size above 769', () => {
    cy.get('ul[role="menu"]').should('have.css', 'flex-direction', 'row');
  });

  it('should have flex-direction column for the main navigation ul on a screen size below 769', () => {
    cy.viewport('iphone-x');
    cy.get('ul[role="menu"]').should('have.css', 'flex-direction', 'column');
  });

  it('should find the wink-main-navigation and menu items', () => {
    cy.get('wink-main-navigation').should('exist');
    cy.get('nav[role="navigation"]').should('exist');
    cy.get('ul[role="menu"]').should('exist');
    cy.get('li[role="none"]').should('exist').should('have.length', 7);
    cy.get('a[role="menuitem"]').should('exist').should('have.length', 7);
    cy.get('a[role="menuitem"] > wink-icon').should('exist').should('have.length', 3).should('not.be.visible');
  });

  it('should check for the chevron', () => {
    cy.get('a[role="menuitem"]').eq(0).children('wink-icon').should('exist').should('have.css', 'display', 'none');
    cy.get('a[role="menuitem"]').eq(1).children('wink-icon').should('not.exist');

    cy.viewport('iphone-x');
    cy.get('a[role="menuitem"]').eq(0).children('wink-icon').should('not.have.css', 'display', 'none');
  });

  it('should verify the correct styles of the "::after" pseudo-element of a tag/link', () => {
    cy.get('a[role="menuitem"]')
      .first()
      .trigger('mouseover')
      .then(($el) => {
        const style = getComputedStyle($el[0], '::after');

        expect(style.content).to.equal('""');
        expect(style.position).to.equal('absolute');
        expect(style.height).to.equal('3px');
        expect(style.left).to.equal('0px');
        expect(style.bottom).to.equal('0px');
        expect(style.borderBottomLeftRadius).to.equal('0px');
        expect(style.borderBottomRightRadius).to.equal('0px');
        expect(style.borderTopLeftRadius).to.equal('3px');
        expect(style.borderTopRightRadius).to.equal('3px');
        expect(style.backgroundColor).to.equal('rgba(0, 0, 0, 0)');
      });
  });

  it('should verify the correct styles of the "::after" pseudo-element when a link is clicked over', () => {
    cy.get('a[role="menuitem"]')
      .first()
      .then(($el) => {
        $el.on('click', (e) => e.preventDefault());
      })
      .click();

    cy.get('a[role="menuitem"]')
      .first()
      .then(($el) => {
        const style = getComputedStyle($el[0], '::after');

        expect(style.backgroundColor).to.equal('rgb(255, 196, 33)');
      });
  });
});
describe('wink-main-navigation tablet', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=components-global-header--full&viewMode=story');
    cy.viewport(1024, 800);
  });
  it('should show the main navigation and should render its links correctly', () => {
    cy.get('wink-main-navigation').find('nav').should('have.css', 'display', 'contents');
    cy.get('wink-main-navigation').find('[role="menuitem"]').should('have.css', 'font-size', '16px');
    cy.get('wink-main-navigation').find('ul').should('have.css', 'gap', '12px');
  });
});
