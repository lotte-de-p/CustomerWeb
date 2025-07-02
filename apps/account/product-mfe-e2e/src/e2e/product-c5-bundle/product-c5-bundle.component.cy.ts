const containTextAssert = 'contain.text';

function checkC5Section(index: number, sectionName: string) {
  cy.getElement('c5SectionTitle').eq(index).should(containTextAssert, sectionName);
}

function checkC5SectionType(index: number, sectionType: string) {
  cy.getElement('c5SectionType').eq(index).should(containTextAssert, sectionType);
}

function checkUnlimitedLinesText(index: number, prefix: string, endFix: string) {
  cy.getElement('unlimitedLineText').eq(index).should(containTextAssert, prefix);
  cy.getElement('amountOfunlimitedLines').eq(index).should(containTextAssert, endFix);
}

function checkStatus(statusType: string, containsText: string) {
  cy.getElement(statusType).eq(0).should(containTextAssert, containsText);
}

describe('c5 bundles', () => {
  beforeEach(() => cy.visit('/iframe.html?id=products-c5-bundle--primary'));
  it('component should load', () => {
    cy.get('tg-product-c5-bundle').should('exist');
  });

  it('i should be able to see connectivity section', () => {
    checkC5Section(0, 'Connectiviteit');
    checkC5SectionType(0, 'Internet');
    checkC5SectionType(1, 'Telenet Mobile Line');
    checkUnlimitedLinesText(0, '1 ongelimiteerde', 'nummer(s)');
    checkC5SectionType(2, 'Vaste lijn');
    cy.getElement('activePhoneNumber').eq(0).should(containTextAssert, '015 13 45 31');
  });

  it('i should be able to see entertainment section', () => {
    checkC5Section(1, 'Entertainment');
    checkC5SectionType(3, 'Telenet TV Iconic');
  });

  it('i should be able to see includedOptions section', () => {
    checkC5Section(2, 'Inbegrepen opties');
    checkC5SectionType(4, 'Telenet Data Only Mobile Line');
    checkStatus('notRequestedStatus', 'Niet aangevraagd');
    checkC5SectionType(5, 'Safespot+');
    checkStatus('productNotActiveStatus', 'Niet geactiveerd');
  });

  it('i should be able to see streaming section', () => {
    checkC5Section(3, 'Streamingdiensten');
    checkC5SectionType(6, 'Disney+');
    checkStatus('modificationInProgressStatus', 'In verwerking');
  });
});
