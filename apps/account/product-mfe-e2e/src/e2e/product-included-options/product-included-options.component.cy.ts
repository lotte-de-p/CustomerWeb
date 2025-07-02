function checkIncludedOption(index: number, includedOptionName: string) {
  cy.getElement('includedOptionLabel')
    .eq(index)
    .then((el) => expect(el.text()).contains(includedOptionName));
}

describe('Included Options', () => {
  beforeEach(() => cy.visit('/iframe.html?id=products-included-options--primary'));
  it('i should be able to see all the included options of a certain product', () => {
    checkIncludedOption(0, 'Internet Service');
    checkIncludedOption(1, 'Safesurf');
  });
});
