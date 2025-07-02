describe('product-journey-mfe', () => {
  beforeEach(() => cy.visit('/iframe.html?id=productjourneycomponent--primary'));
  it('should render the component', () => {
    cy.get('tg-product-journey').should('exist');
  });

  describe('appointments', () => {
    it('successfully load appointments component', () => {
      cy.get('a[routerLink="/appointments"]').click();
      cy.get('tg-appointments-overview').should('not.be.visible');
    });
  });
});
