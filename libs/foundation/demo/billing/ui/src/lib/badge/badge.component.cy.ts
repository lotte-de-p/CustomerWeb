/// <reference types="cypress" />
import { BadgeComponent } from './badge.component';

const winkBadgeSelector = 'wink-badge';
describe('BadgeComponent', () => {
  describe(`Given a default badge`, () => {
    beforeEach(() => {
      cy.mount(`<tg-demo-badge content="Default"></tg-demo-badge>`, {
        imports: [BadgeComponent],
      });
    });

    it('should render the default badge', () => {
      cy.get(winkBadgeSelector)
        .should('exist')
        .should('have.attr', 'background', 'default')
        .shadow()
        .should('contain.text', 'Default');
    });
  });

  describe(`Given the badge color is set to Dark Brown`, () => {
    beforeEach(() => {
      cy.mount(`<tg-demo-badge content="Dark Brown" color="dark" ></tg-demo-badge>`, {
        imports: [BadgeComponent],
      });
    });

    it('should render a dark-brown badge', () => {
      cy.get(winkBadgeSelector)
        .should('exist')
        .should('have.attr', 'background', 'dark')
        .shadow()
        .should('contain.text', 'Dark');
    });
  });

  describe(`Given the badge color is set to yellow`, () => {
    beforeEach(() => {
      cy.mount(`<tg-demo-badge content="Yellow" color='brand'></tg-demo-badge>`, {
        imports: [BadgeComponent],
      });
    });

    it('should render a yellow badge', () => {
      cy.get(winkBadgeSelector)
        .should('exist')
        .should('have.attr', 'background', 'brand')
        .shadow()
        .should('contain.text', 'Yellow');
    });
  });
});
