import { mount } from 'cypress/angular';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Chainable<Subject> {
      getElement(dataCy: string): Chainable;
      login(email: string, password: string): void;
      mount: typeof mount;
    }
  }
}

Cypress.Commands.add('mount', mount);

Cypress.Commands.add('getElement', (identifier: string) => {
  return cy.get(`[data-testid=${identifier}]`);
});
