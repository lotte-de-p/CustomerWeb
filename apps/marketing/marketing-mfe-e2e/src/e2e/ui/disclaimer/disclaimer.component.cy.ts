describe('marketing-mfe', () => {
  beforeEach(() => cy.visit('/iframe.html?id=pricedcustomerproductholding-disclaimercomponent--primary'));
  it('should render the component', () => {
    cy.get('tg-marketing-cafe-disclaimer').should('exist');
  });
});
