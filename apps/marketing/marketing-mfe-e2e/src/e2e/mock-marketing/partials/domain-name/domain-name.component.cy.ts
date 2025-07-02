describe('marketing-mfe', () => {
  beforeEach(() => cy.visit('/iframe.html?id=domainnamecomponent--primary&args=parentForm;idx;'));
  it('should render the component', () => {
    cy.get('tg-marketing-nc-domain-name').should('exist');
  });
});
