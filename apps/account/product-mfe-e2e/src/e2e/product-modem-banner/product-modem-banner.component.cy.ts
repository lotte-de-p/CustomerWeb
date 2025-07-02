function checkIfComponentExists() {
  cy.get('tg-product-modem-banner').should('exist');
}

describe('product modem banner', () => {
  beforeEach(() => cy.visit('/iframe.html?id=products-modem-banner--primary'));

  it('i should be able to have to possibility to upgrade my modem', () => {
    checkIfComponentExists();
    cy.getElement('modemUpgradeButton').should('exist');
  });

  it('when i click the button to upgrade the modem, i should be redirected to the url for the upgrade', () => {
    cy.getElement('modemUpgradeButton').click();
    cy.contains('Cannot GET /upgradeModemDummyUrl').should('exist');
  });
});
