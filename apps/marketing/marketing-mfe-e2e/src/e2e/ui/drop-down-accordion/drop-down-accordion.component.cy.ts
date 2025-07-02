describe('marketing-mfe', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=pricedcustomerproductholding-dropdownaccordioncomponent--primary&args=title;overviews;')
  );
  it('should render the component', () => {
    cy.get('tg-marketing-cafe-drop-down-accordion').should('exist');
  });
});
