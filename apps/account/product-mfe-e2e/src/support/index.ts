declare global {
  namespace Cypress {
    interface Chainable {
      getElement(dataCy: string): Chainable;
    }
  }
}
