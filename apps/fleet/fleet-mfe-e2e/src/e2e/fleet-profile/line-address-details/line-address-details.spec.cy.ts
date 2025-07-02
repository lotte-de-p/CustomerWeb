import userDetails from '../../../../../../../fixtures/http/fleet/openid/user-details.json';
import products from '../../../../../../../fixtures/http/fleet/products/products-0483523244.json';
import addresses from '../../../../../../../fixtures/http/fleet/addresses/addresses-9150757953013640830.json';
import omapiProduct from '../../../fixtures/line-address-details/omapi-product.json';
describe('Line Address Details', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/ocapi/oauth/userdetails', { statusCode: 200, body: userDetails });
    cy.intercept('GET', '**/ocapi/public/api/fleet-product-service/v1/products/0480004287', {
      statusCode: 200,
      body: products,
    });
    cy.intercept('GET', '**/ocapi/public/api/contact-service/v1/contact/addresses/9150757953013640830', {
      statusCode: 200,
      body: addresses,
    });
    cy.intercept('GET', '**/omapi/public/product/**', {
      statusCode: 200,
      body: omapiProduct,
    });

    cy.visit('/line-address-details?msisdn=0480004287');
  });

  it('On page load, the page should be loaded with address details', () => {
    cy.get('#postalCode').should('have.text', '2800');
    cy.get('#municipality').should('have.text', 'Mechelen');
    cy.get('#streetHouseNr').should('have.text', 'Lange Akkerstraat 18');
    cy.get('#boxNumber').should('have.text', '');
  });
});
