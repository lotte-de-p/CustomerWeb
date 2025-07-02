describe('product-mfe', () => {
  beforeEach(() => cy.visit('/iframe.html?id=products-overview-monthly-payment--primary'));
  it('should render the component', () => {
    cy.get('tg-product-overview-monthly-plan').should('exist');
  });
});
