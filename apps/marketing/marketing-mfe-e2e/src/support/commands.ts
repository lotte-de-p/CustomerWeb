// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  // eslint-disable-next-line
  interface Chainable<Subject> {
    componentHasLoaded(): boolean;
  }
}

Cypress.Commands.add('componentHasLoaded', () => {
  cy.get('#storybook-preview-iframe')
    .should((iframe) => expect(iframe.contents().find('#error-message')).to.be.empty)
    .should((iframe) => expect(iframe.contents().find('#root')).not.be.empty);
});
