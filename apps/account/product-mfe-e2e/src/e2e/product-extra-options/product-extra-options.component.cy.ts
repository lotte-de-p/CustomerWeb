describe('extra options', () => {
  beforeEach(() => cy.visit('/iframe.html?id=products-extra-options--primary'));

  it('should render the component', () => {
    cy.get('tg-product-extra-options').should('exist');
  });

  it('if i have extra options, it should be visible', () => {
    cy.getElement('extraOptionLabel').eq(0).should('contain.text', 'Giga Speedboost');
  });
});
