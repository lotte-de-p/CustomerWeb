describe('marketing-mfe', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mock-mockproductconfiguratorcomponent--primary&args=title;salesUrl;'));
  it('should render the component', () => {
    cy.get('tg-marketing-nc-mock-product-configurator').should('exist');
    cy.get('.form-control.select-dropdown').select('Klik');
    cy.get(
      '.mobile-lines__radio-view-container > .label-modifier-box > [style="--animation-delay: 0;"] > .label-modifier--append > .label-modifier--body > .label-modifier--body--inner-container > .label-modifier-radio__label'
    ).click();
    cy.get('.form__input-container > .form-control').select('1');
    cy.get(
      ':nth-child(6) > :nth-child(1) > .label-modifier-box > [style="--animation-delay: 0;"] > .label-modifier--append > .label-modifier--body > .label-modifier--body--inner-container > .label-modifier-radio__label'
    ).click();
    cy.get(
      ':nth-child(10) > .radio-checkbox--horizontal > :nth-child(1) > .CheckboxSwitch > .CheckboxSwitch-control'
    ).click();
  });
});
