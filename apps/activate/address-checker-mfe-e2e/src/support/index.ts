declare global {
  namespace Cypress {
    interface Chainable {
      getElement(dataCy: string): Chainable;
      checkElementDisabled(dataCy: string): Chainable;
      checkElementEnabled(dataCy: string): Chainable;
    }
  }
}
