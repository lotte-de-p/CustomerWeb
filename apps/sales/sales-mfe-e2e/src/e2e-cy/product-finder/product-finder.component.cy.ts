describe('sales-mfe', () => {
  beforeEach(() => cy.visit('/product-finder'));
  it('should render the component', () => {
    cy.get('app-sales-product-finder-stepper').should('exist');
  });
});
