const fiberNotReady = 'tg-fiber-not-ready';
const checkFiberButton = 'check-fiber-button';
const productPageButton = 'product-page-button';
const checkOtherAddressLink = 'check-other-address-link';
const addressNotFound = 'address-not-found';
const secondAddress = '[for="choice-1-address';
const appAddressCheckerComponent = 'app-address-checker';
const addressLink = 'address-link';
const addressSelectorComponent = 'app-address-selector';

const BRUSSEL_1070 = '1070 Brussel';
const AVENUE_MUTSAARD_75 = 'Avenue Mutsaard 75';
const AVENUE_MUTSAARD_76 = 'Avenue Mutsaard 76';
const DARWIN_LOADTESTSTRAAT_5796 = 'Darwin Loadteststraat 5796';

describe.only('address-checker-mfe', () => {
  describe('logged in customer', () => {
    beforeEach(() => {
      cy.intercept('GET', '**/omapi/public/product/**', {
        statusCode: 200,
        body: {},
      }).as('productCall');
      cy.intercept('GET', '**/oauth/userdetails', {
        statusCode: 200,
        body: {
          customer_number: '1202407495',
          identity_id: '41111893388',
        },
      }).as('loginCall');
      cy.visit('/iframe.html?viewMode=story&id=addresscheckercomponent--primary');
      cy.wait('@loginCall');
    });
    it('should display all customer addresses with first address preselected', () => {
      cy.get(appAddressCheckerComponent).should('exist');
      checkAddressSelector();
      cy.get('tg-address-form').should('not.exist');
      cy.checkWinkButtonEnabled(checkFiberButton);
    });

    it('should select first customer address and display fiber ready', () => {
      cy.getElement(checkFiberButton).click();
      cy.getElement(addressLink).should('exist');
      cy.getElement(addressLink).contains('2800 Mechelen');
      cy.getElement(addressLink).contains(DARWIN_LOADTESTSTRAAT_5796);
      checkReadyOverlay();
    });

    it('should select second customer address and display fiber not ready', () => {
      cy.get(secondAddress).click();
      cy.getElement(checkFiberButton).click();
      cy.getElement(addressLink).contains('4000 Gent');
      cy.getElement(addressLink).contains('Gent Street 1234');
      checkNotReadyOverlay();
    });

    it('should manually add an an address and display fiber ready', () => {
      cy.getElement(checkOtherAddressLink).click();
      fillAddressForm('75');
      cy.getElement(checkFiberButton).click();
      cy.getElement(addressLink).contains(BRUSSEL_1070);
      cy.getElement(addressLink).contains(AVENUE_MUTSAARD_75);
      checkReadyOverlay();
    });

    it('should manually add an an address and display address does not exist section', () => {
      cy.getElement(checkOtherAddressLink).click();
      checkNotExistingAddress();
    });
  });
  describe('not logged in customer', () => {
    beforeEach(() => {
      cy.intercept('GET', '**/oauth/userdetails', { statusCode: 401 }).as('loginCall');
      cy.visit('/iframe.html?viewMode=story&id=addresscheckercomponent--primary');
      cy.wait('@loginCall');
    });

    it('should add address details and display fiber ready', () => {
      fillAddressForm('75');
      cy.getElement(checkFiberButton).click();
      cy.getElement(addressLink).contains(BRUSSEL_1070);
      cy.getElement(addressLink).contains(AVENUE_MUTSAARD_75);
      checkReadyOverlay();
    });

    it('should add address details and display fiber address does not exist section', () => {
      checkNotExistingAddress();
    });

    it('should add address details and display fiber not ready', () => {
      fillAddressForm('76');
      cy.getElement(checkFiberButton).click();
      cy.getElement(addressLink).contains(BRUSSEL_1070);
      cy.getElement(addressLink).contains(AVENUE_MUTSAARD_76);
      checkNotReadyOverlay();
    });
  });
});

function checkReadyOverlay(): void {
  const fiberReadyOverlaySelector = 'tg-fiber-ready';
  cy.get(fiberReadyOverlaySelector).should('exist');
  cy.getElement(addressLink).should('exist');
  cy.getElement(productPageButton).should('exist');
}

function checkAddressSelector(): void {
  const firstAddressSelector = '#choice-0-address';
  cy.get(addressSelectorComponent).should('exist');
  cy.get(addressSelectorComponent).contains('2800 Mechelen');
  cy.get(addressSelectorComponent).contains(DARWIN_LOADTESTSTRAAT_5796);
  cy.get(addressSelectorComponent).contains('4000 Gent');
  cy.get(addressSelectorComponent).contains('Gent Street 1234');
  cy.get(firstAddressSelector).should('be.checked');
}

function fillAddressForm(houseNumber: string, isMatOption = true): void {
  const matOption = 'mat-option';
  cy.get('tg-address-form').should('be.visible');
  cy.get('#new-zc').type('10');
  cy.get(matOption).first().click();
  cy.checkWinkButtonDisabled(checkFiberButton);
  cy.get('#new-as').type('Aa');
  cy.get(matOption).first().click();
  cy.checkWinkButtonDisabled(checkFiberButton);
  cy.get('#new-hn').type(houseNumber);
  if (isMatOption) {
    cy.get(matOption).contains(houseNumber).click();
  }
  cy.checkWinkButtonEnabled(checkFiberButton);
}

function checkNotExistingAddress(): void {
  fillAddressForm('1', false);
  cy.getElement(checkFiberButton).click();
  cy.getElement(addressNotFound).should('be.visible');
}

function checkNotReadyOverlay(): void {
  cy.get(fiberNotReady).should('exist');
  cy.getElement(addressLink).should('exist');
  cy.getElement(productPageButton).should('exist');
}
