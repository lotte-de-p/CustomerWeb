describe('marketing-mfe', () => {
  beforeEach(() => cy.visit('/iframe.html?id=pricedcustomerproductholding-billpricecomponent--primary&args=price;'));
  it('should render the component', () => {
    cy.get('tg-marketing-cafe-bill-price').should('exist');
  });
});
