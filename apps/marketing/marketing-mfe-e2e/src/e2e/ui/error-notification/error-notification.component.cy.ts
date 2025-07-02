describe('marketing-mfe', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=pricedcustomerproductholding-errornotificationcomponent--primary&args=labelKey;type;')
  );
  it('should render the component', () => {
    cy.get('tg-marketing-cafe-error-notification').should('exist');
  });
});
