describe('notifications', () => {
  beforeEach(() => cy.visit('/iframe.html?id=products-notifications--primary'));

  it('should render the component', () => {
    cy.get('tg-product-notifications').should('exist');
  });

  it('i should be able to see the YUP notification if triggered', () => {
    cy.getElement('yupNotification')
      .eq(0)
      .then((el) =>
        expect(el.text()).contains(
          'Je kan helaas geen nieuwe diensten online bestellen. Contacteer hiervoor onze klantendienst. '
        )
      );
  });

  it('i should be able to see the Suspended Plan notification if triggered', () => {
    cy.getElement('suspendedPlanNotification')
      .eq(0)
      .then((el) =>
        expect(el.text()).contains(
          'Je Telenet-diensten werden opgeschort. Hierdoor kan je geen opties bestellen of je abonnement wijzigen. '
        )
      );
  });

  it('i should be able to see the Move notification if triggered', () => {
    cy.getElement('moveNotification')
      .eq(0)
      .then((el) =>
        expect(el.text()).contains(
          'Je diensten verhuizen binnenkort naar een nieuw adres. Zodra de diensten overgezet zijn, kan je opnieuw aanpassingen maken. '
        )
      );
  });
});
