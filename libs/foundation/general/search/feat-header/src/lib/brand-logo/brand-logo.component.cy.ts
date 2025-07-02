import { BrandLogoComponent } from './brand-logo.component';
import { mount } from 'cypress/angular';

describe(BrandLogoComponent.name, () => {
  beforeEach(() => {
    mount(BrandLogoComponent);
  });

  it('should display telenet logo', () => {
    cy.getElement('telenet-logo').should('exist');
  });

  it('should display base logo', () => {
    cy.getElement('base-logo').should('exist');
  });

  it('should display telenet logo accessibility text', () => {
    cy.getElement('telenet-accessibility-text').should('exist');
  });

  it('should display base logo accessibility text', () => {
    cy.getElement('base-accessibility-text').should('exist');
  });
});
