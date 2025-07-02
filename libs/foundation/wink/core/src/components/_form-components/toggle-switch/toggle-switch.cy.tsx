/// <reference types="cypress" />

describe('wink-toggle-switch', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=form-components-toggle-switch--default&viewMode=story');
  });

  it('should find the wink-toggle-switch element', () => {
    cy.get('wink-toggle-switch').should('exist');
  });

  xit('should have the correct label styling', () => {
    cy.get('wink-toggle-switch').find('label').should('have.css', 'height', '32px');
    cy.get('wink-toggle-switch').find('label').should('have.css', 'width', '52px');
    cy.get('wink-toggle-switch').find('label').should('have.css', 'border-radius', '20px');
    cy.get('wink-toggle-switch').find('label').should('have.css', 'background-color', 'rgb(153, 147, 145)');

    cy.get('wink-toggle-switch')
      .find('label')
      .then(($el) => {
        const style = getComputedStyle($el[0], '::after');
        expect(style.backgroundColor).to.equal('rgb(255, 255, 255)');
        expect(style.width).to.equal('24px');
        expect(style.height).to.equal('24px');
        expect(style.borderRadius).to.equal('90px');
        expect(style.left).to.equal('4px');
      });
  });

  xit('should have the correct label styling', () => {
    cy.get('wink-toggle-switch').find('label').click().wait(400);
    cy.get('wink-toggle-switch').find('label').should('have.css', 'background-color', 'rgb(255, 196, 33)');
    cy.get('wink-toggle-switch')
      .find('label')
      .then(($el) => {
        const style = getComputedStyle($el[0], '::after');
        expect(style.left).to.equal('47px');
      });
  });

  it('should have the correct correct clicking area', () => {
    cy.get('wink-toggle-switch')
      .find('label')
      .then(($el) => {
        const style = getComputedStyle($el[0], '::before');
        expect(style.width).to.equal('60px');
        expect(style.height).to.equal('40px');
        expect(style.left).to.equal('-4px');
        expect(style.top).to.equal('-4px');
      });
  });
  it('should have the correct attributes when checked', () => {
    cy.get('wink-toggle-switch').invoke('attr', 'checked', true);
    cy.get('wink-toggle-switch').should('have.attr', 'checked');
  });
});
