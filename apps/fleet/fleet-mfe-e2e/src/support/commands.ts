// ***********************************************
// This example namespace declaration will help
// with Intellisense and code completion in your
// IDE or Text Editor.
// ***********************************************
// declare namespace Cypress {
//   interface Chainable<Subject = any> {
//     customCommand(param: any): typeof customCommand;
//   }
// }
//
// function customCommand(param: any): void {
//   console.warn(param);
// }
//
// NOTE: You can use it like so:
// Cypress.Commands.add('customCommand', customCommand);
//
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import Chainable = Cypress.Chainable;

/*** Don't forget to add new commands to the Typescript definition file : ./cypress/support/index.ts ***/

Cypress.Commands.add('getElement', (identifier: string) => {
  return cy.get(`[data-cy=${identifier}]`);
});

Cypress.Commands.add('getTgFormInput', (identifier: string) => {
  return cy.get(`[data-cy=${identifier}]`).children('div.form-group').first().children('input').first();
});

Cypress.Commands.add('getTgSuccessMessage', () => {
  return cy.get('.notification--success');
});

Cypress.Commands.add('getTgWarningMessage', () => {
  return cy.get('.notification--warning');
});

Cypress.Commands.add('getTgErrorMessage', () => {
  return cy.get('.notification--errorfield');
});

Cypress.Commands.add('getTgFormInputError', (identifier: string) => {
  return cy.get(`[data-cy=${identifier}]`).children('div.form-group').first().children('div.formErrorInput').first();
});

Cypress.Commands.add('selectBillingAccount', (accountNumber: string) => {
  cy.getElement('billing-account-selector').click();
  cy.getElement('account-selector-list').contains(accountNumber).click();
});

Cypress.Commands.add('equalLowercase', (identifierElement: Chainable, value: string) => {
  identifierElement.should(($element) => {
    let text = $element.text().toLowerCase();
    let expectedText = value.toLowerCase();
    expect(text).to.contain(expectedText);
  });
});

Cypress.Commands.add('elementContainsAllTexts', (identifier: string, expectedTexts: string[]) => {
  cy.getElement(identifier)
    .then(($els) => Cypress.$.map($els, (el) => el.innerText.trim()))
    .should('deep.equal', expectedTexts);
});
