/// <reference types="cypress" />

describe('wink-range-slider', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=form-components-range-slider--default&viewMode=story');
  });

  it('should find the wink-range-slider element', () => {
    cy.get('wink-range-slider').should('exist');
  });

  it('should set the wink-range-slider to single', () => {
    cy.get('wink-range-slider').invoke('attr', 'slider-type', 'single');
    cy.get('wink-range-slider').invoke('attr', 'show-input', 'true');

    cy.get('wink-range-slider').should('have.attr', 'slider-type', 'single');
    cy.get('wink-range-slider').find('.slider-from').should('not.exist');
    cy.get('wink-range-slider').get('wink-input.slider-specific-from').should('not.exist');
  });

  it('should show and hide the inputs based on the property for it', () => {
    cy.get('wink-range-slider').invoke('attr', 'slider-type', 'range');
    cy.get('wink-range-slider').invoke('attr', 'show-input', 'true');
    cy.get('wink-range-slider').get('wink-input.slider-specific-from').should('exist');
    cy.get('wink-range-slider').get('wink-input.slider-specific-to').should('exist');
    cy.get('wink-range-slider').invoke('attr', 'show-input', 'false');
    cy.get('wink-range-slider').get('wink-input.slider-specific-from').should('not.exist');
    cy.get('wink-range-slider').get('wink-input.slider-specific-to').should('not.exist');
  });

  it('should show and hide the values based on the property for it', () => {
    cy.get('wink-range-slider').invoke('attr', 'show-values', 'true');
    cy.get('wink-range-slider').invoke('attr', 'min-value', '0');
    cy.get('wink-range-slider').invoke('attr', 'max-value', '100');
    cy.get('wink-range-slider').find('.slider-wrapper span').eq(0).should('have.text', '0');
    cy.get('wink-range-slider').find('.slider-wrapper span').eq(1).should('have.text', '100');
  });

  it('should show a label when this is filled in', () => {
    cy.get('wink-range-slider').invoke('attr', 'label', 'label text');
    cy.get('wink-range-slider').invoke('attr', 'helper', 'helper text');

    cy.get('wink-range-slider').find('wink-form-label').find('.label--text').eq(0).should('have.text', 'label text');
    cy.get('wink-range-slider').find('wink-form-label').find('.label--helper').eq(0).should('have.text', 'helper text');
  });

  it('should set the correct value', () => {
    cy.get('wink-range-slider').invoke('attr', 'slider-type', 'range');
    cy.get('wink-range-slider').invoke('attr', 'bottom-value', '30');
    cy.get('wink-range-slider').invoke('attr', 'value', '70');
    cy.get('wink-range-slider').find('.slider-from').should('have.value', '30');
    cy.get('wink-range-slider').find('.slider-to').should('have.value', '70');
    cy.get('wink-range-slider').invoke('attr', 'slider-type', 'single');
    cy.get('wink-range-slider').invoke('attr', 'value', '50');
    cy.get('wink-range-slider').find('.slider-to').should('have.value', '50');
  });

  it('should set the correct min and max values', () => {
    cy.get('wink-range-slider').invoke('attr', 'slider-type', 'range');
    cy.get('wink-range-slider').invoke('attr', 'min-value', '0');
    cy.get('wink-range-slider').invoke('attr', 'max-value', '100');
    cy.get('wink-range-slider').find('.slider-from').should('have.attr', 'min', '0');
    cy.get('wink-range-slider').find('.slider-from').should('have.attr', 'max', '100');
    cy.get('wink-range-slider').find('.slider-to').should('have.attr', 'min', '0');
    cy.get('wink-range-slider').find('.slider-to').should('have.attr', 'max', '100');
    cy.get('wink-range-slider').get('wink-input').find('input').should('have.attr', 'min', '0');
    cy.get('wink-range-slider').get('wink-input').find('input').should('have.attr', 'max', '100');
  });
});
