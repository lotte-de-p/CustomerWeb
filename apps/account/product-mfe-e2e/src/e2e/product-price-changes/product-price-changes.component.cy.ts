const ACCOUNT_SELECTOR = '[data-cy="account-selector"]';
const ACCOUNT_SELECTOR_OPTION = '[data-cy="account-selector-list-option"]';
const PRICE_CHANGES = '[data-cy="price-changes"]';
const CUSTOM_LOGIN_BUTTON = '[data-cy="custom-login-form-button"]';
const CARE_PRODUCT_PRICE_CHANGE = 'tg-product-price-changes';
const LOGIN_LASTNAME = '[data-cy="custom-login-form-lastname"]';
const LOGIN_CUSTOMER_NUMBER = '[data-cy="custom-login-form-customer-number"]';
const HAVE_LENGTH = 'have.length';

describe('product-mfe', () => {
  describe('Authenticated User', () => {
    beforeEach(() => cy.visit('/iframe.html?id=product-price-changes--logged-in'));

    it('should render the Authenticated User component', () => {
      cy.get(CARE_PRODUCT_PRICE_CHANGE).should('exist');
    });

    it('should render all necessary components', () => {
      cy.get(ACCOUNT_SELECTOR).should('exist');
      cy.get('[data-cy="no-price-change"]').should('not.exist');
      cy.get('[data-cy="price-adjustment"]').should('exist');
      cy.get('[data-cy="description-summary"]').should('exist');
      cy.get(PRICE_CHANGES).should(HAVE_LENGTH, 1);
      cy.get('[data-cy="price-changes-current-price-title"]').should('contain.text', 'excl VAT');
      cy.get('[data-cy="price-changes-new-price-title"]').should('contain.text', 'excl VAT');
    });

    it('should switch between accounts', () => {
      cy.get(ACCOUNT_SELECTOR).should('exist');
      validateAccountsPriceChanges();
    });
  });

  describe('Unauthorized User', () => {
    beforeEach(() => cy.visit('/iframe.html?id=product-price-changes--unauthorized'));

    it('should render the correct error message', () => {
      cy.get(CARE_PRODUCT_PRICE_CHANGE).should('exist');
      cy.get('[data-cy="price-cannot-show"]').should('not.exist');
      cy.get(CARE_PRODUCT_PRICE_CHANGE)
        .get('[data-cy="product-price-changes-unauthorized"]')
        .should('contain.text', 'User is missing the required scope for requested property.');
    });
  });

  describe('Wrong Credentials', () => {
    beforeEach(() => cy.visit('/iframe.html?id=product-price-changes--wrong-credentials'));

    it('should do a custom login with wrong credentials', () => {
      cy.get('[data-cy="custom-login-form"]').should('exist');
      cy.get(CUSTOM_LOGIN_BUTTON).click();
      cy.get(LOGIN_LASTNAME).should('exist').should('have.class', 'ng-invalid');
      cy.get(LOGIN_CUSTOMER_NUMBER).should('exist').should('have.class', 'ng-invalid');
      cy.get(LOGIN_LASTNAME).type('test');
      cy.get(LOGIN_CUSTOMER_NUMBER).type('01234');
      cy.get(CUSTOM_LOGIN_BUTTON).click();
      cy.get(CARE_PRODUCT_PRICE_CHANGE)
        .get('app-message-flow')
        .get('.notification--errorfield')
        .should('contain.text', 'Incorrect combination of name and customer number. Will you try again?');
    });
  });

  describe('Unauthenticated User', () => {
    beforeEach(() => cy.visit('/iframe.html?id=product-price-changes--not-logged-in'));

    it('should render the Unauthenticated User component', () => {
      cy.get(CARE_PRODUCT_PRICE_CHANGE).should('exist');
    });

    it('should do a custom login', () => {
      cy.get('[data-cy="custom-login-form"]').should('exist');
      cy.get('[data-cy="custom-login-form-link"')
        .should('exist')
        .should('have.text', 'Where can I find my client number?');
      cy.get(LOGIN_LASTNAME).should('exist').type('test');
      cy.get(LOGIN_CUSTOMER_NUMBER).should('exist').type('01234');
      cy.get(CUSTOM_LOGIN_BUTTON).click();
      validateAccountsPriceChanges();
    });
  });

  describe('No Price Changes', () => {
    beforeEach(() => cy.visit('/iframe.html?id=product-price-changes--no-price-changes'));

    it('should render the component', () => {
      cy.get(CARE_PRODUCT_PRICE_CHANGE).should('exist');
      cy.get('[data-cy="price-cannot-show"]').should('exist');
    });
  });

  describe('No Price Changes (Price According Consumption)', () => {
    beforeEach(() => cy.visit('/iframe.html?id=product-price-changes--price-according-to-consumption-price-change'));

    it('should render the component', () => {
      cy.get(CARE_PRODUCT_PRICE_CHANGE).should('exist');
      cy.get('[data-cy="account-selector"]').should('exist');
      cy.get('[data-cy="no-price-change"]').should('exist');
    });
  });
});

function validateAccountsPriceChanges() {
  validateSelectedAccount('501094665');
  validatePriceChanges([
    {
      description: 'Telenet Telefonie',
      priceBefore: '€ 156,96',
      priceAfter: '€ 5,78',
    },
  ]);
  cy.get(ACCOUNT_SELECTOR).click();
  cy.get('[data-cy="account-selector-list"]').should('exist');
  cy.get(ACCOUNT_SELECTOR_OPTION).should(HAVE_LENGTH, 3);
  cy.get(ACCOUNT_SELECTOR_OPTION).eq(1).click();
  validateSelectedAccount('501190680');
  validatePriceChanges([
    {
      description: 'Auteursrechten',
      priceBefore: '€ 59,04',
      priceAfter: '€ 61,80',
    },
    {
      description: 'Abonnement kabel-tv',
      priceBefore: '€ 164,05',
      priceAfter: '€ 171,76',
    },
  ]);
}

function validateSelectedAccount(customerNumber: string): void {
  cy.get('[data-cy="account-selector-account-number"]').should('contain.text', customerNumber);
}

function validatePriceChanges(
  priceChanges: {
    description: string;
    priceBefore: string;
    priceAfter: string;
  }[]
): void {
  cy.get(PRICE_CHANGES).should(HAVE_LENGTH, priceChanges.length);
  priceChanges.forEach((producePriceChange, index) => {
    cy.get(PRICE_CHANGES)
      .eq(index)
      .get('[data-cy="price-changes-description"]')
      .contains(producePriceChange.description);
    cy.get(PRICE_CHANGES)
      .eq(index)
      .get('[data-cy="price-changes-current-price"]')
      .contains(producePriceChange.priceBefore);
    cy.get(PRICE_CHANGES).eq(index).get('[data-cy="price-changes-new-price"]').contains(producePriceChange.priceAfter);
  });
}
