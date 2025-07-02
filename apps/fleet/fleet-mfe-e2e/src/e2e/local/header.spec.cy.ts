describe('Header', () => {
  describe('Page Loading and navigation', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    it('should load the header component', () => {
      cy.getElement('home-button').should('be.visible');
    });

    it('should navigate back to the home page when clicking the Home button', () => {
      cy.getElement('component-links').children().eq(0).click();
      cy.url().should('include', 'bundle');

      cy.getElement('home-button').click();
      cy.url().should('include', '/');
    });
  });
});
