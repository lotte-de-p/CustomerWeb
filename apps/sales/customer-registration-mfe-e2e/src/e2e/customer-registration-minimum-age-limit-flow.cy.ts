import {
  customerNoMatchResponse,
  fixedProductResponse,
  generateNRNWithOffset,
  postpaidBundleResponse,
  prepaidMobileResponse,
} from './customer-registration.testfactory';
import { goThroughPersonalDetailsPageAndVerify } from '../support/app.po';

describe('Customer registration', () => {
  beforeEach(() => {
    cy.intercept('omapi/public/product/MYPR0000', {
      body: { omapiPrePaidMobile: prepaidMobileResponse },
    });
    cy.intercept('ocapi/public/api/customer-service/v1/customers/brands/telenet/search?distributionchannel=sales', {
      body: customerNoMatchResponse,
    });
  });

  it('if the product in sdata is a prepaid mobile line, customers younger than 16 years old cannot register', () => {
    cy.visit(
      '/customer-registration/?sdata=XQAAAAIiAAAAAAAAAABAqYnmbFEIbVbO7gEot3B_C5Gur1pH_K18FKfQ4a7LeQ6c7DmQcv_oXYAA',
      {
        onBeforeLoad: (win) => {
          win['TelenetGroup'] = win['TelenetGroup'] || {};
          win['TelenetGroup'].pathCategorisation = win['TelenetGroup'].pathCategorisation || {};
          win['TelenetGroup'].pathCategorisation.customerCategory = 'RESIDENTIAL';
          cy.stub(win['TelenetGroup'].pathCategorisation, 'customerCategory').returns('RESIDENTIAL');
        },
      }
    );

    goThroughPersonalDetailsPageAndVerify();

    cy.getElement('belgian-eid-field').type('AHC599230634');
    cy.getElement('nrn-field').type(generateNRNWithOffset(15));
    cy.getElement('navigation-bar-next').click();

    cy.getElement('year-of-birth-field-invalid-error').should('be.visible');
  });

  it('if the product in sdata is a prepaid mobile line, customers can register from 16 years old onwards', () => {
    cy.visit(
      '/customer-registration/?sdata=XQAAAAIiAAAAAAAAAABAqYnmbFEIbVbO7gEot3B_C5Gur1pH_K18FKfQ4a7LeQ6c7DmQcv_oXYAA',
      {
        onBeforeLoad: (win) => {
          win['TelenetGroup'] = win['TelenetGroup'] || {};
          win['TelenetGroup'].pathCategorisation = win['TelenetGroup'].pathCategorisation || {};
          win['TelenetGroup'].pathCategorisation.customerCategory = 'RESIDENTIAL';
          cy.stub(win['TelenetGroup'].pathCategorisation, 'customerCategory').returns('RESIDENTIAL');
        },
      }
    );

    goThroughPersonalDetailsPageAndVerify();

    cy.getElement('belgian-eid-field').type('AHC599230634');
    cy.getElement('nrn-field').type(generateNRNWithOffset(16));
    cy.getElement('navigation-bar-next').click();
  });

  it('if no sdata, customers younger than 18 years old cannot register', () => {
    cy.visit('/customer-registration/', {
      onBeforeLoad: (win) => {
        win['TelenetGroup'] = win['TelenetGroup'] || {};
        win['TelenetGroup'].pathCategorisation = win['TelenetGroup'].pathCategorisation || {};
        win['TelenetGroup'].pathCategorisation.customerCategory = 'RESIDENTIAL';
        cy.stub(win['TelenetGroup'].pathCategorisation, 'customerCategory').returns('RESIDENTIAL');
      },
    });

    goThroughPersonalDetailsPageAndVerify();

    cy.getElement('belgian-eid-field').type('AHC599230634');
    cy.getElement('nrn-field').type(generateNRNWithOffset(17));
    cy.getElement('navigation-bar-next').click();

    cy.getElement('year-of-birth-field-invalid-error').should('be.visible');
  });

  it('if no sdata, customers can register from 18 years old onwards', () => {
    cy.visit('/customer-registration/', {
      onBeforeLoad: (win) => {
        win['TelenetGroup'] = win['TelenetGroup'] || {};
        win['TelenetGroup'].pathCategorisation = win['TelenetGroup'].pathCategorisation || {};
        win['TelenetGroup'].pathCategorisation.customerCategory = 'RESIDENTIAL';
        cy.stub(win['TelenetGroup'].pathCategorisation, 'customerCategory').returns('RESIDENTIAL');
      },
    });

    goThroughPersonalDetailsPageAndVerify();

    cy.getElement('belgian-eid-field').type('AHC599230634');
    cy.getElement('nrn-field').type(generateNRNWithOffset(18));
    cy.getElement('navigation-bar-next').click();
  });

  it('if the product in sdata is postpaid, customers younger than 18 years old cannot register', () => {
    cy.visit(
      '/customer-registration/?sdata=XQAAAAI_AAAAAAAAAABAqYnmbFEIbVbPAjgot3B5ANI__iZZy0QyLiRJzG2XrkYbezNms8GPW4_LWE7MfK9Ow4dRl-ufTDkrWVdmYXC__g3AAA',
      {
        onBeforeLoad: (win) => {
          win['TelenetGroup'] = win['TelenetGroup'] || {};
          win['TelenetGroup'].pathCategorisation = win['TelenetGroup'].pathCategorisation || {};
          win['TelenetGroup'].pathCategorisation.customerCategory = 'RESIDENTIAL';
          cy.stub(win['TelenetGroup'].pathCategorisation, 'customerCategory').returns('RESIDENTIAL');
        },
      }
    );
    cy.intercept('https://api.int.telenet.be/omapi/public/product/C5FA0006', {
      body: { omapiPostpaidBundle: postpaidBundleResponse },
    });

    goThroughPersonalDetailsPageAndVerify();

    cy.getElement('belgian-eid-field').type('AHC599230634');
    cy.getElement('nrn-field').type(generateNRNWithOffset(17));
    cy.getElement('navigation-bar-next').click();

    cy.getElement('year-of-birth-field-invalid-error').should('be.visible');
  });

  it('should go through customer registration for residential customer', () => {
    cy.visit(
      '/customer-registration/?sdata=XQAAAAI_AAAAAAAAAABAqYnmbFEIbVbPAjgot3B5ANI__iZZy0QyLiRJzG2XrkYbezNms8GPW4_LWE7MfK9Ow4dRl-ufTDkrWVdmYXC__g3AAA',
      {
        onBeforeLoad: (win) => {
          win['TelenetGroup'] = win['TelenetGroup'] || {};
          win['TelenetGroup'].pathCategorisation = win['TelenetGroup'].pathCategorisation || {};
          win['TelenetGroup'].pathCategorisation.customerCategory = 'RESIDENTIAL';
          cy.stub(win['TelenetGroup'].pathCategorisation, 'customerCategory').returns('RESIDENTIAL');
        },
      }
    );
    cy.intercept('https://api.int.telenet.be/omapi/public/product/C5FA0006', {
      body: { omapiPostpaidBundle: postpaidBundleResponse },
    });

    goThroughPersonalDetailsPageAndVerify();

    cy.intercept('GET', '**/telenet/data/municipalities?language=nl', {
      statusCode: 200,
      body: [
        {
          postalCode: '7340',
          location: 'Colfontaine',
        },
        {
          postalCode: '2800',
          location: 'Mechelen',
        },
      ],
    }).as('getMunicipalities');

    cy.intercept('GET', '**/telenet/data/streets?postalCode=2800', {
      statusCode: 200,
      body: ['Olivetenvest', 'Battelsesteenweg'],
    }).as('getStreets');
    cy.getElement('belgian-eid-field').type('AHC599230634');
    cy.getElement('nrn-field').type(generateNRNWithOffset(18));
    cy.getElement('navigation-bar-next').click();

    cy.getElement('zip-code').should('be.visible');
    cy.getElement('zip-code').type('2800');
    cy.get('mat-option').contains('2800 - Mechelen').click();
    cy.getElement('street').type('Olivetenvest');
    cy.get('mat-option').contains('Olivetenvest').click();
    cy.getElement('street').type('Olivetenvest');
    cy.get('mat-option').contains('Olivetenvest').click();
    cy.getElement('houseNumber').type('10');
    cy.getElement('navigation-bar-next').click();
  });

  it('should block residential customer with navs overlay when navs status is not ALLOWED after filling navs form', () => {
    cy.visit(
      '/customer-registration/?sdata=XQAAAAI_AAAAAAAAAABAqYnmbFEIbVbPAjgot3B5ANI__iZZy0QyLiRJzG2XrkYbezNms8GPW4_LWE7MfK9Ow4dRl-ufTDkrWVdmYXC__g3AAA',
      {
        onBeforeLoad: (win) => {
          win['TelenetGroup'] = win['TelenetGroup'] || {};
          win['TelenetGroup'].pathCategorisation = win['TelenetGroup'].pathCategorisation || {};
          win['TelenetGroup'].pathCategorisation.customerCategory = 'RESIDENTIAL';
          cy.stub(win['TelenetGroup'].pathCategorisation, 'customerCategory').returns('RESIDENTIAL');
        },
      }
    );
    cy.intercept('https://api.int.telenet.be/omapi/public/product/C5FA0006', {
      body: { omapiPostpaidBundle: postpaidBundleResponse },
    });

    goThroughPersonalDetailsPageAndVerify();

    cy.intercept('GET', '**/telenet/data/municipalities?language=nl', {
      statusCode: 200,
      body: [
        {
          postalCode: '7340',
          location: 'Colfontaine',
        },
        {
          postalCode: '2800',
          location: 'Mechelen',
        },
      ],
    }).as('getMunicipalities');

    cy.intercept('GET', '**/telenet/data/streets?postalCode=2800', {
      statusCode: 200,
      body: ['Olivetenvest', 'Battelsesteenweg'],
    }).as('getStreets');

    cy.intercept('https://api.int.telenet.be/ocapi/public/api/customer-registration/navs/residential', {
      body: { navsStatus: 'REVIEW_NEEDED' },
    });

    cy.getElement('belgian-eid-field').type('AHC599230634');
    cy.getElement('nrn-field').type(generateNRNWithOffset(18));
    cy.getElement('navigation-bar-next').click();

    cy.getElement('zip-code').should('be.visible');
    cy.getElement('zip-code').type('2800');
    cy.get('mat-option').contains('2800 - Mechelen').click();
    cy.getElement('street').type('Olivetenvest');
    cy.get('mat-option').contains('Olivetenvest').click();
    cy.getElement('street').type('Olivetenvest');
    cy.get('mat-option').contains('Olivetenvest').click();
    cy.getElement('houseNumber').type('10');
    cy.getElement('navigation-bar-next').click();

    cy.getElement('navs-first-name-field').should('be.visible');
    cy.getElement('navs-last-name-field').should('be.visible');
    cy.getElement('navs-notification').should('be.visible');
  });

  it('should show navs form is navs status is Denied for residential customer', () => {
    cy.visit(
      '/customer-registration/?sdata=XQAAAAI_AAAAAAAAAABAqYnmbFEIbVbPAjgot3B5ANI__iZZy0QyLiRJzG2XrkYbezNms8GPW4_LWE7MfK9Ow4dRl-ufTDkrWVdmYXC__g3AAA',
      {
        onBeforeLoad: (win) => {
          win['TelenetGroup'] = win['TelenetGroup'] || {};
          win['TelenetGroup'].pathCategorisation = win['TelenetGroup'].pathCategorisation || {};
          win['TelenetGroup'].pathCategorisation.customerCategory = 'RESIDENTIAL';
          cy.stub(win['TelenetGroup'].pathCategorisation, 'customerCategory').returns('RESIDENTIAL');
        },
      }
    );
    cy.intercept('https://api.int.telenet.be/omapi/public/product/C5FA0006', {
      body: { omapiPostpaidBundle: postpaidBundleResponse },
    });

    goThroughPersonalDetailsPageAndVerify();

    cy.intercept('GET', '**/telenet/data/municipalities?language=nl', {
      statusCode: 200,
      body: [
        {
          postalCode: '7340',
          location: 'Colfontaine',
        },
        {
          postalCode: '2800',
          location: 'Mechelen',
        },
      ],
    }).as('getMunicipalities');

    cy.intercept('GET', '**/telenet/data/streets?postalCode=2800', {
      statusCode: 200,
      body: ['Olivetenvest', 'Battelsesteenweg'],
    }).as('getStreets');

    cy.intercept('https://api.int.telenet.be/ocapi/public/api/customer-registration/navs/residential', {
      body: { navsStatus: 'REVIEW_NEEDED' },
    });

    cy.getElement('belgian-eid-field').type('AHC599230634');
    cy.getElement('nrn-field').type(generateNRNWithOffset(18));
    cy.getElement('navigation-bar-next').click();

    cy.getElement('zip-code').should('be.visible');
    cy.getElement('zip-code').type('2800');
    cy.get('mat-option').contains('2800 - Mechelen').click();
    cy.getElement('street').type('Olivetenvest');
    cy.get('mat-option').contains('Olivetenvest').click();
    cy.getElement('street').type('Olivetenvest');
    cy.get('mat-option').contains('Olivetenvest').click();
    cy.getElement('houseNumber').type('10');
    cy.getElement('navigation-bar-next').click();
    cy.getElement('navigation-bar-previous').should('not.exist');

    cy.getElement('navs-first-name-field').should('be.visible');
    cy.getElement('navs-last-name-field').should('be.visible');
    cy.getElement('navs-notification').should('be.visible');
    cy.getElement('navigation-bar-next').click();

    cy.intercept('https://api.int.telenet.be/ocapi/public/api/customer-registration/navs/residential', {
      body: { navsStatus: 'DENIED' },
    });

    cy.getElement('navs-overlay', { timeout: 10000 }).should('be.visible');
  });
  it('should go through the registration for a BUSINESS customer', () => {
    cy.visit(
      '/customer-registration/?sdata=XQAAAAIkAAAAAAAAAABAqYnmbFEIbVbO7gEot3B8ofI0dvkA8wsoibOqgRWW_1YLYAh6D1E55___usWAAA',
      {
        onBeforeLoad: (win) => {
          win['TelenetGroup'] = win['TelenetGroup'] || {};
          win['TelenetGroup'].pathCategorisation = win['TelenetGroup'].pathCategorisation || {};
          win['TelenetGroup'].pathCategorisation.customerCategory = 'BUSINESS';
          cy.stub(win['TelenetGroup'].pathCategorisation, 'customerCategory').returns('BUSINESS');
        },
      }
    );

    cy.intercept('https://api.int.telenet.be/omapi/public/product/INTF0102', {
      body: { omapiPostpaidBundle: fixedProductResponse },
    });
    cy.intercept('GET', '**/telenet/data/municipalities?language=nl', {
      statusCode: 200,
      body: [
        {
          postalCode: '7340',
          location: 'Colfontaine',
        },
        {
          postalCode: '2800',
          location: 'Mechelen',
        },
      ],
    }).as('getMunicipalities');

    cy.intercept('GET', '**/telenet/data/streets?postalCode=2800', {
      statusCode: 200,
      body: ['Olivetenvest', 'Battelsesteenweg'],
    }).as('getStreets');
    cy.getElement('business-view-button').click();
    cy.getElement('first-name-field').type('John');
    cy.getElement('last-name-field').type('Porter');
    cy.getElement('email-field').type('John.Porter@telenet.be');
    cy.getElement('phone-number-field').type('0484567098');
    cy.getElement('dob-field').should('be.visible');
    cy.get('input[id="day"]').type('12');
    cy.get('select').select(11).should('have.value', '11');
    cy.get('input[id="year"]').type('2000');
    cy.getElement('navigation-bar-next').click();

    cy.wait('@getMunicipalities').its('response.statusCode').should('eq', 200);
    cy.getElement('company-name-field').should('be.visible');
    cy.getElement('belgian-enterprise-number-field').should('be.visible');

    cy.getElement('company-name-field').type('Telenet');
    cy.getElement('belgian-enterprise-number-field').type('1218.744.622');

    cy.getElement('legal-entity-field').should('be.visible');
    cy.getElement('legal-entity-field').type('AV');

    cy.getElement('zip-code').should('be.visible');
    cy.getElement('zip-code').type('2800');
    cy.get('mat-option').contains('2800 - Mechelen').click();
    cy.getElement('street').type('Olivetenvest');
    cy.get('mat-option').contains('Olivetenvest').click();
    cy.getElement('street').type('Olivetenvest');
    cy.get('mat-option').contains('Olivetenvest').click();
    cy.getElement('houseNumber').type('10');
    cy.getElement('navigation-bar-next').click();
  });
});
