describe('marketing-mfe', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mock-klikmockproductconfiguratorcomponent--primary&args=title;salesUrl;'));
  it('should render the component', () => {
    cy.get('tg-marketing-nc-mock-product-configurator').should('exist');
  });
});
