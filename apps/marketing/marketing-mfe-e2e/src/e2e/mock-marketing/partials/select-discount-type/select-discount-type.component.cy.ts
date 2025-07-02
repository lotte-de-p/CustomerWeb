describe('marketing-mfe', () => {
  beforeEach(() => cy.visit('/iframe.html?id=selectdiscounttypecomponent--primary&args=parentForm;idx;'));
  it('should render the component', () => {
    cy.get('app-select-discount-type').should('exist');
  });
});
