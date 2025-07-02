describe('marketing-mfe', () => {
  beforeEach(() => cy.visit('/iframe.html?id=pricedcustomerproductholding-overviewgroup--primary&args=items;type;'));
  it('should render the component', () => {
    cy.get('tg-marketing-cafe-overview-group').should('exist');
  });
});
