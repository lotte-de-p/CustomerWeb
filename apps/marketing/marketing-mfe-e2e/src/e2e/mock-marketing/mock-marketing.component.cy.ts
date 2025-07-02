describe('marketing-mfe', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=mock-mockmarketingcomponent--primary&args=title;salesUrl;productConfiguratorUrl;productListJSONString;'
    )
  );
  it('should render the component', () => {
    cy.get('tg-marketing-nc-mock-marketing').should('exist');
  });
});
