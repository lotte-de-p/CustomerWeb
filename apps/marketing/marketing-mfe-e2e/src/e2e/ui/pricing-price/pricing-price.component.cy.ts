describe('marketing-mfe', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=pricing-pricingpricecomponent--primary&args=rendition:large;amount;applyBaseSingleDigitStyle;'
    )
  );
  it('should render the component', () => {
    cy.get('tg-marketing-cafe-pricing-price').should('exist');
  });
});
