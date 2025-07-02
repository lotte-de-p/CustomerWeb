describe('marketing-mfe', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=optionscontentpackcomponent--primary&args=parentForm;idx;epc;productType;')
  );
  it('should render the component', () => {
    cy.get('tg-marketing-nc-options-contentpack').should('exist');
  });
});
