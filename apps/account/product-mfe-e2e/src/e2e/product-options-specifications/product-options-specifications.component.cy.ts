function checkIfComponentExists() {
  cy.get('tg-product-options-specifications').should('exist');
}

function checkOptionSpecifications(index: number, optionSpecifications: string[]) {
  optionSpecifications.forEach((detail) =>
    cy
      .getElement('optionSpecifications')
      .eq(index)
      .then((el) => expect(el.text()).contains(detail))
  );
}

describe('when i have product option specifications', () => {
  beforeEach(() => cy.visit('/iframe.html?id=products-option-specifications--primary'));
  it('i should be able to see all the specifications of my product options', () => {
    checkIfComponentExists();
    checkOptionSpecifications(0, [
      'Veilig surfen op al je toestellen thuis',
      'Met Safesurf ga je met al je toestellen thuis veilig op het internet.  Dankzij de software die we automatisch op je modem installeren, is je thuisnetwerk op elk moment beschermd tegen phishing.',
    ]);
  });
});
