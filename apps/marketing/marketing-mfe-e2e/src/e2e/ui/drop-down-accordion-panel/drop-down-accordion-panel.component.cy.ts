describe('marketing-mfe', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=pricedcustomerproductholding-dropdownaccordionpanelcomponent--primary&args=overviews;')
  );
  it('should render the component', () => {
    cy.get('tg-marketing-cafe-drop-down-accordion-panel').should('exist');
  });
});
