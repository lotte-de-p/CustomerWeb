import { CollapsibleHeaderComponent } from './collapsible-header.component';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CollapsibleHeaderComponent],
  template: ` <demo-product-collapsible-header header="This is the header"
    ><ng-template>This is the content</ng-template></demo-product-collapsible-header
  >`,
})
class HarnassComponent {}

describe('ProductSpecificationsComponent', () => {
  const COLLAPSIBLE_CONTENT_SELECTOR = '[data-testid="collapsible-content"]';
  const HEADER_SELECTOR = '[data-testid="collapsible-header"]';
  const DROPDOWN_SELECTOR = '[data-testid="dropdown"]';

  beforeEach(() => {
    cy.mount(HarnassComponent, {});
  });
  it(`should render collapsed`, () => {
    cy.get(DROPDOWN_SELECTOR).should('have.class', 'icon-chevron-down');
    cy.get(HEADER_SELECTOR).should('contain.text', 'This is the header');
    cy.get(COLLAPSIBLE_CONTENT_SELECTOR).should('not.exist');
  });

  describe(`When clicking on the header `, () => {
    beforeEach(() => {
      cy.get(HEADER_SELECTOR).click();
    });

    it(`should show the correct chevron`, () => {
      cy.get(DROPDOWN_SELECTOR).should('have.class', 'icon-chevron-up');
    });

    it(`should render the content`, () => {
      cy.get(COLLAPSIBLE_CONTENT_SELECTOR).should('exist');
      cy.get(COLLAPSIBLE_CONTENT_SELECTOR).should('contain.text', 'This is the content');
    });
  });
});
