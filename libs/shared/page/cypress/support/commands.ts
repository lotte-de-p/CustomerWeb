import { mount } from 'cypress/angular';

declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): void;
      mount: typeof mount;
    }
  }
}

Cypress.Commands.add('mount', mount);
