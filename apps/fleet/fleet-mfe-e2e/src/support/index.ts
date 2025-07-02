export {};

declare global {
  namespace Cypress {
    interface Chainable {
      getElement(dataCy: string): Chainable;

      getTgFormInput(param: string): Chainable;

      getTgFormInputError(param: string): Chainable;

      getTgSuccessMessage(): Chainable;

      getTgErrorMessage(): Chainable;

      getTgWarningMessage(): Chainable;

      selectBillingAccount(accountNumber: string): void;

      equalLowercase(identifierElement: Chainable, value: string): void;

      elementContainsAllTexts(dataCy: string, expectedTexts: string[]): void;
    }
  }
}
