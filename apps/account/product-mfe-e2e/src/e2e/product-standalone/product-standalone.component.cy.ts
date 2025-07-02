function checkSpecification(
  index: number,
  specificationName: string,
  specificationValue: string,
  unitAtIndex: { index: number; unit: string } | undefined = undefined
) {
  cy.getElement('specificationName')
    .eq(index)
    .then((el) => expect(el.text()).contains(specificationName));
  cy.getElement('specificationValue')
    .eq(index)
    .then((el) => expect(el.text()).contains(specificationValue));
  if (unitAtIndex) {
    cy.getElement('specificationValueUnit')
      .eq(unitAtIndex.index)
      .then((el) => expect(el.text()).contains(unitAtIndex.unit));
  }
}

function clickDropdown() {
  cy.getElement('dropdown').eq(0).click();
}

function checkIfComponentExists() {
  cy.get('tg-product-standalone').should('exist');
}

function checkProductInfoLabel(label: string) {
  cy.getElement('labelKey')
    .eq(0)
    .then((el) => expect(el.text()).contains(label));
}

function checkIncludedOption(index: number, includedOptionName: string) {
  cy.getElement('includedOptionLabel')
    .eq(index)
    .then((el) => expect(el.text()).contains(includedOptionName));
}

function checkOptionSpecifications(index: number, optionSpecifications: string[]) {
  optionSpecifications.forEach((detail) =>
    cy
      .getElement('optionSpecifications')
      .eq(index)
      .then((el) => expect(el.text()).contains(detail))
  );
}

describe('when i have standalone products', () => {
  beforeEach(() => cy.visit('/iframe.html?id=products-standalone--primary'));
  it('i should be able to see my standalone products', () => {
    checkIfComponentExists();
    checkProductInfoLabel('All-Internet');
    clickDropdown();
    checkSpecification(0, ' Onbeperkt surfen ', 'ONBEPERKT');
    checkSpecification(1, ' Per mailbox ', '5', { index: 0, unit: 'GB' });
    checkSpecification(2, ' Downloadsnelheid: tot ', '300', { index: 1, unit: 'Mbps' });
    checkSpecification(3, ' Uploadsnelheid: tot ', '20', { index: 2, unit: 'Mbps' });
    checkSpecification(4, ' Mailboxen ', '10');
    checkIncludedOption(0, 'Internet Service');
    checkIncludedOption(1, 'Safesurf');
    checkOptionSpecifications(0, [
      'Veilig surfen op al je toestellen thuis',
      'Met Safesurf ga je met al je toestellen thuis veilig op het internet.  Dankzij de software die we automatisch op je modem installeren, is je thuisnetwerk op elk moment beschermd tegen phishing.',
    ]);
  });
});
