const componentSearchId = 'component-search';
const componentLinksId = 'component-links';

describe('Home', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('Page Loading and navigation', () => {
    it('should load the home component', () => {
      cy.getElement(componentSearchId).should('be.visible');
      cy.getElement(componentLinksId).should('be.visible');
    });

    it('should show all the routes', () => {
      cy.getElement(componentLinksId).children().should('have.length', 31);
    });

    it('should allow searching components', () => {
      cy.getElement(componentSearchId).type('bundle', { delay: 0 });
      cy.getElement(componentLinksId).children().should('have.length', 4);
      cy.getElement(componentLinksId).should('be.visible');
    });

    it('should allow navigating to components', () => {
      cy.getElement(componentLinksId).children().eq(0).click();
      cy.url().should('include', 'bundle');
    });
  });
});
