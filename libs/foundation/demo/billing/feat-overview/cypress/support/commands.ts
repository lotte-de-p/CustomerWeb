import { mount } from 'cypress/angular';

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      mount: typeof mount;
    }
  }
}

Cypress.Commands.add('mount', mount);
