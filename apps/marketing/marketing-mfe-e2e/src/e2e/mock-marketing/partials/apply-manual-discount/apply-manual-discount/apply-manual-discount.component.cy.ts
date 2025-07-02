describe('marketing-mfe', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=applymanualdiscountcomponent--primary&args=parentForm;idx;productType;sku;')
  );
  it('should render the component', () => {
    cy.get('tg-marketing-nc-apply-manual-discount').should('exist');
  });
});
