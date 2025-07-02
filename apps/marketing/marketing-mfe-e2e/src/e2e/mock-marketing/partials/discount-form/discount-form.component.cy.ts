describe('marketing-mfe', () => {
  beforeEach(() => cy.visit('/iframe.html?id=discountformcomponent--secondary&args=parentForm;idx;'));
  it('should render the component', () => {
    cy.get('tg-marketing-nc-discount-form').should('exist');
  });
});
