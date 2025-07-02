function checkSpecification(
  index: number,
  specificationName: string,
  specificationValue: string | undefined = undefined,
  unitAtIndex: { index: number; unit: string } | undefined = undefined
) {
  cy.getElement('specificationName')
    .eq(index)
    .then((el) => expect(el.text()).contains(specificationName));
  if (specificationValue) {
    cy.getElement('specificationValue')
      .eq(index)
      .then((el) => expect(el.text()).contains(specificationValue));
  }
  if (unitAtIndex) {
    cy.getElement('specificationValueUnit')
      .eq(unitAtIndex.index)
      .then((el) => expect(el.text()).contains(unitAtIndex.unit));
  }
}

function checkFpbLabel(index: number, labelName: string) {
  cy.getElement('fpbLabel')
    .eq(index)
    .then((el) => expect(el.text()).contains(labelName));
}

function clickDropdown(index: number) {
  cy.getElement('dropdown').eq(index).click();
}

describe('FreePhone Business', () => {
  beforeEach(() => cy.visit('/iframe.html?id=products-freephone-business--primary'));

  it('should render the component', () => {
    cy.get('tg-product-freephone-business').should('exist');
  });

  it('if i have a basic fpb product, i should be able to see it', () => {
    checkFpbLabel(0, 'Basic Communication');
    clickDropdown(0);
    checkSpecification(
      0,
      'Stel zelf in hoe je je individuele oproepen beantwoordt: Gebruik je persoonlijke assistent, schakel je oproepen door en personaliseer je voicemail.',
      '1000',
      {
        index: 0,
        unit: 'MIN',
      }
    );
    checkSpecification(
      1,
      'Bel internationaal dankzij de optie International Calling. Je krijgt 1000 inbegrepen belminuten.'
    );
    checkSpecification(2, 'Je klant haken niet meer in omwille van een bezettoon.');
    checkSpecification(3, 'Jij krijgt tot 20 vaste nummers.');
  });

  it('if i have a smart fpb product, i should be able to see it', () => {
    checkFpbLabel(1, 'Smart Communication');
    clickDropdown(1);
    checkSpecification(
      0,
      'Beheer je oproepen voor al je medewerkers: stel een keuzemenu in, maak een belgroep aan en personaliseer je welkomstberichten.',
      '1000',
      {
        index: 0,
        unit: 'MIN',
      }
    );
    checkSpecification(
      1,
      'Bel internationaal dankzij de optie International Calling. Je krijgt 1000 inbegrepen belminuten.'
    );
    checkSpecification(2, 'Je klant haken niet meer in omwille van een bezettoon.');
    checkSpecification(3, 'Jij krijgt tot 23 vaste nummers.');
  });
});
