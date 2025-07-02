describe('marketing-mfe', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=pricing-pricingcomponent--primary&args=productCategory;productIds;optionIds;optinIds;postalCode;campaignCode;shortestDuration;hideFrequency;startingFrom;isBusiness;isAlternativeColor;enableNbo;theme;alignment;customProduct;selectedRendition;applyBaseSingleDigitStyle;'
    )
  );
  it('should render the component', () => {
    cy.get('tg-marketing-cafe-pricing').should('exist');
  });
});
