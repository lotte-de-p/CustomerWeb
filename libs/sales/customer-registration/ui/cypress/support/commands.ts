import { mount } from 'cypress/angular';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Chainable<Subject> {
      login(email: string, password: string): void;
      mount: typeof mount;
      getElement(dataCy: string): Chainable;
    }
  }
}

Cypress.Commands.add('mount', mount);

Cypress.Commands.add('getElement', (identifier: string) => {
  return cy.get(`[data-cy=${identifier}]`);
});
