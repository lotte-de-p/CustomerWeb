function checkBundleProduct(index: number, productName: string) {
  cy.getElement('bundleProductName').eq(index).should('contain.text', productName);
}

function checkBundleTitle(bundleName: string) {
  cy.getElement('bundleTitle').eq(0).should('contain.text', bundleName);
}

describe('product-mfe', () => {
  beforeEach(() => cy.visit('/iframe.html?id=products-bundle--primary'));
  it('should render the component', () => {
    cy.get('tg-product-bundle').should('exist');
  });
  it('i should be able to see my product bundles', () => {
    checkBundleTitle('All-Internet + Telenet TV Iconic');
    checkBundleProduct(0, 'Internet');
    checkBundleProduct(1, 'Toegang digitale tv');
  });
});
