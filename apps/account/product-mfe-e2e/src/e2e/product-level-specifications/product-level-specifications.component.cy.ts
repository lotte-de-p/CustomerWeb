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

function checkIfComponentExists() {
  cy.get('tg-product-level-specifications').should('exist');
}
describe('product level specification', () => {
  beforeEach(() => cy.visit('/iframe.html?id=products-level-specifications--primary'));
  it('I should be able to see all my product level specifications', () => {
    checkIfComponentExists();
    checkSpecification(0, ' Onbeperkt surfen ', 'ONBEPERKT');
    checkSpecification(1, ' Per mailbox ', '5', { index: 0, unit: 'GB' });
    checkSpecification(2, ' Downloadsnelheid: tot ', '300', { index: 1, unit: 'Mbps' });
    checkSpecification(3, ' Uploadsnelheid: tot ', '20', { index: 2, unit: 'Mbps' });
    checkSpecification(4, ' Mailboxen ', '10');
  });
});
