import userDetails from '../../../../../../../fixtures/http/fleet/openid/user-details.json';
import simDetails from '../../../../../../../fixtures/http/fleet/sim-details/sim-details-0483523244.json';
import contactDetails from '../../../../../../../fixtures/http/fleet/contacts/contact-details-0483523244.json';
import emptyContactDetails from '../../../../../../../fixtures/http/fleet/contacts/contact-details-0483523244-empty.json';
import profileDetails from '../../../../../../../fixtures/http/fleet/profile/profile-details-0483523244.json';
import products from '../../../../../../../fixtures/http/fleet/products/products-0483523244.json';
import omapiProduct from '../../../fixtures/line-address-details/omapi-product.json';

describe('Line Identification Details', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/ocapi/oauth/userdetails', { statusCode: 200, body: userDetails });
    cy.intercept('GET', '**/ocapi/public/api/mobile-service/v2/simdetails?msisdn=0483523244', {
      statusCode: 200,
      body: simDetails,
    });
    cy.intercept('GET', '**/ocapi/public/api/fleet-customer-service/v2/contactdetails?msisdn=0483523244', {
      statusCode: 200,
      body: contactDetails,
    });
    cy.intercept('GET', '**/ocapi/public/api/fleet-product-service/v1/products/0483523244', {
      statusCode: 200,
      body: products,
    });
    cy.intercept('GET', '**/ocapi/public/api/fleet-customer-service/v1/profiledetails?msisdn=0483523244', {
      statusCode: 200,
      body: profileDetails,
    });
    cy.intercept('GET', '**/omapi/public/product/**', {
      statusCode: 200,
      body: omapiProduct,
    });

    cy.visit('/line-identification-details?msisdn=0483523244');
  });

  it('On page load, form should be pre-populated with values', () => {
    cy.get('#phoneNumberValue').should('have.value', '0485937768');
    cy.get('#emailValue').should('have.value', 'ashwini.bijavaara.shivalinga.swamy@staff.telenet.be');
    cy.get('#day').should('have.value', '13');
    cy.get('#dob-month-mobile').should('have.value', '9');
    cy.get('#year').should('have.value', '1977');
    cy.get('[data-cy="simType"]').should('have.text', 'ng.line-identification-details.e-sim.lbl');
    cy.get('[data-cy="simNumber"]').should('have.text', '8932030000113443782');
    cy.get('[data-cy="simPuk"]').should('have.text', '81304518');
  });

  it('Edit description and save', () => {
    cy.get('#description')
      .type('someDescription')
      .then(() => {
        cy.get('#saveButton').should('be.enabled');
        cy.intercept('POST', '**/ocapi/public/api/fleet-customer-service/v2/contactdetails?msisdn=0483523244', {
          firstName: 'rohini',
          lastName: 'bogata',
          language: 'EN',
          emails: [{ id: '9161437696213335737', value: 'ashwini.bijavaara.shivalinga.swamy@staff.telenet.be' }],
          phones: [{ id: '9161445265713668051', value: '0485937768' }],
          birthDate: '13-09-1977',
          gender: 'Female',
          referenceInformation: 'someDescription',
        });
        cy.intercept('GET', '**/ocapi/public/api/fleet-customer-service/v2/contactdetails?msisdn=0483523244', {
          statusCode: 200,
          body: contactDetails,
        });
        cy.intercept('GET', '**/ocapi/public/api/fleet-product-service/v1/products/0483523244', {
          statusCode: 200,
          body: products,
        });
        cy.intercept('GET', '**/ocapi/public/api/fleet-customer-service/v1/profiledetails?msisdn=0483523244', {
          statusCode: 200,
          body: profileDetails,
        });
        cy.get('#saveButton')
          .click()
          .then(() => {
            cy.get('#saveButton').should('be.disabled');
            cy.get('.notification--success').should('exist');
          });
      });
  });
});

describe('Line Identification Details - No customer Details', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/ocapi/oauth/userdetails', { statusCode: 200, body: userDetails });
    cy.intercept('GET', '**/ocapi/public/api/mobile-service/v2/simdetails?msisdn=0483523244', {
      statusCode: 200,
      body: simDetails,
    });
    cy.intercept('GET', '**/ocapi/public/api/fleet-customer-service/v2/contactdetails?msisdn=0483523244', {
      statusCode: 200,
      body: emptyContactDetails,
    });
    cy.intercept('GET', '**/ocapi/public/api/fleet-product-service/v1/products/0483523244', {
      statusCode: 200,
      body: products,
    });
    cy.intercept('GET', '**/ocapi/public/api/fleet-customer-service/v1/profiledetails?msisdn=0483523244', {
      statusCode: 200,
      body: profileDetails,
    });
    cy.intercept('GET', '**/omapi/public/product/**', {
      statusCode: 200,
      body: omapiProduct,
    });

    cy.visit('/line-identification-details?msisdn=0483523244');
  });

  it('As a fleet manager when I view line details and the user does not have details then I see only the description field at first and can update the description ', () => {
    cy.get('#description')
      .type('someDescription')
      .then(() => {
        cy.get('#saveButton').should('be.enabled');
        cy.intercept('PUT', '**/ocapi/public/api/fleet-product-service/v1/products/0483523244', {
          referenceInformation: 'someDescription',
        });
        cy.intercept('GET', '**/ocapi/public/api/fleet-customer-service/v2/contactdetails?msisdn=0483523244', {
          statusCode: 200,
          body: emptyContactDetails,
        });
        cy.intercept('GET', '**/ocapi/public/api/fleet-product-service/v1/products/0483523244', {
          statusCode: 200,
          body: products,
        });
        cy.intercept('GET', '**/ocapi/public/api/fleet-customer-service/v1/profiledetails?msisdn=0483523244', {
          statusCode: 200,
          body: profileDetails,
        });
        cy.get('#saveButton')
          .click()
          .then(() => {
            cy.get('#saveButton').should('be.disabled');
            cy.get('.notification--success').should('exist');
          });
      });
  });
});
