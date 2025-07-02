describe('marketing-mfe', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=pricedcustomerproductholding-dropdownaccordionheadercomponent--primary&args=title;isPanelCollapsed;'
    )
  );
  it('should render the component', () => {
    cy.get('tg-marketing-cafe-drop-down-accordion-header').should('exist');
  });
});
