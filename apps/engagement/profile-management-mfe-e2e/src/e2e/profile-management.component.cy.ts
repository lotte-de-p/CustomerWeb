describe('profile-management-mfe', () => {
  beforeEach(() => cy.visit('/iframe.html?id=profilemanagementcomponent--primary'));
  it('should render the component', () => {
    cy.get('tg-profile-management').should('exist');
  });
});
