// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable<Subject> {
    login(email: string, password: string): void;

    componentHasLoaded(): boolean;

    interceptStorybookCompositionCalls(): void;
  }
}

Cypress.Commands.add('componentHasLoaded', () => {
  cy.get('#storybook-preview-iframe')
    .should((iframe) => expect(iframe.contents().find('#error-message')).to.be.empty)
    .should((iframe) => expect(iframe.contents().find('#root')).not.be.empty);
});
Cypress.Commands.add('interceptStorybookCompositionCalls', () => {
  cy.intercept(
    {
      method: 'GET',
      url: '**/stories.json',
    },
    {
      statusCode: 200,
      log: false,
    }
  );
  cy.intercept(
    {
      method: 'GET',
      url: '**/metadata.json',
    },
    {
      statusCode: 200,
      log: false,
    }
  );
});
