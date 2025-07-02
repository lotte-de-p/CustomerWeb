describe('marketing-mfe', () => {
  beforeEach(() => cy.visit('/iframe.html?id=pricedcustomerproductholding--primary&args=title;'));
  it('should render the component', () => {
    cy.get('tg-marketing-cafe-priced-customer-product-holding').should('exist');
  });
});
