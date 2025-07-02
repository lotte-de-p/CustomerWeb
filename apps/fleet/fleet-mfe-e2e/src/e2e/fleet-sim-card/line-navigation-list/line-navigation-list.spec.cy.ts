describe('Line Navigation List', () => {
  describe('Show address nav item', () => {
    it('should show the address nav item if it is a split bill user', () => {
      cy.intercept('GET', '**/ocapi/public/api/fleet-customer-service/v1/profiledetails?msisdn=0477777777', {
        statusCode: 200,
        body: { profiledetails: [{ status: 'VALIDATED' }] },
      });
      cy.intercept('GET', '**/ocapi/public/api/fleet-product-service/v1/products/0477777777', {
        statusCode: 200,
        body: { splitBillProfile: {} },
      });

      cy.visit('/line-navigation-list?msisdn=0477777777');

      cy.getElement('nav').should('contain.text', 'ng.line-navigation-list.link.address');
    });

    it('should not show the address nav item if it is not a split bill user', () => {
      cy.intercept('GET', '**/ocapi/public/api/fleet-customer-service/v1/profiledetails?msisdn=0477777777', {
        statusCode: 200,
        body: { profiledetails: [{ status: 'VALIDATED' }] },
      });
      cy.intercept('GET', '**/ocapi/public/api/fleet-product-service/v1/products/0477777777', {
        statusCode: 200,
        body: {},
      });

      cy.visit('/line-navigation-list?msisdn=0477777777');

      cy.getElement('nav').should('not.contain.text', 'ng.line-navigation-list.link.address');
    });
  });

  describe('Show identification nav item regardless of profile details', () => {
    it('Ff the status in profile details is validated', () => {
      cy.intercept('GET', '**/ocapi/public/api/fleet-customer-service/v1/profiledetails?msisdn=0477777777', {
        statusCode: 200,
        body: { profiledetails: [{ status: 'VALIDATED' }] },
      });
      cy.intercept('GET', '**/ocapi/public/api/fleet-product-service/v1/products/0477777777', {
        statusCode: 200,
        body: {},
      });

      cy.visit('/line-navigation-list?msisdn=0477777777');

      cy.getElement('nav').should('contain.text', 'ng.line-navigation-list.link.identification');
    });

    it('If the status in profile details is pending', () => {
      cy.intercept('GET', '**/ocapi/public/api/fleet-customer-service/v1/profiledetails?msisdn=0477777777', {
        statusCode: 200,
        body: { profiledetails: [{ status: 'PENDING_VALIDATION' }] },
      });
      cy.intercept('GET', '**/ocapi/public/api/fleet-product-service/v1/products/0477777777', {
        statusCode: 200,
        body: {},
      });

      cy.visit('/line-navigation-list?msisdn=0477777777');

      cy.getElement('nav').should('contain.text', 'ng.line-navigation-list.link.identification');
    });

    it('If the status in profile details is invited', () => {
      cy.intercept('GET', '**/ocapi/public/api/fleet-customer-service/v1/profiledetails?msisdn=0477777777', {
        statusCode: 200,
        body: { profiledetails: [{ status: 'INVITED' }] },
      });
      cy.intercept('GET', '**/ocapi/public/api/fleet-product-service/v1/products/0477777777', {
        statusCode: 200,
        body: {},
      });

      cy.visit('/line-navigation-list?msisdn=0477777777');

      cy.getElement('nav').should('contain.text', 'ng.line-navigation-list.link.identification');
    });

    it('If the profile details is empty', () => {
      cy.intercept('GET', '**/ocapi/public/api/fleet-customer-service/v1/profiledetails?msisdn=0477777777', {
        statusCode: 200,
        body: {},
      });
      cy.intercept('GET', '**/ocapi/public/api/fleet-product-service/v1/products/0477777777', {
        statusCode: 200,
        body: {},
      });

      cy.visit('/line-navigation-list?msisdn=0477777777');

      cy.getElement('nav').should('contain.text', 'ng.line-navigation-list.link.identification');
    });
  });

  // TODO enable after investigating flakyness
  describe.skip('Navigation', () => {
    it('should navigate to, highlight and show content of a nav item', () => {
      cy.intercept('GET', '**/ocapi/public/api/fleet-customer-service/v1/profiledetails?msisdn=0477777777', {
        statusCode: 200,
        body: { profiledetails: [{ status: 'VALIDATED' }] },
      });
      cy.intercept('GET', '**/ocapi/public/api/fleet-product-service/v1/products/0477777777', {
        statusCode: 200,
        body: {},
      });
      cy.visit('/line-navigation-list?msisdn=0477777777');

      cy.getElement('nav-item').contains('ng.line-navigation-list.link.barrings').click();

      cy.getElement('content').should('contain.text', 'Barrings Content');
      cy.getElement('nav').contains('li', 'ng.line-navigation-list.link.barrings').should('have.class', 'active');
    });
  });

  describe('Default navigation item', () => {
    it('should first check if a default nav item is present in the URL', () => {
      cy.intercept('GET', '**/ocapi/public/api/fleet-customer-service/v1/profiledetails?msisdn=0477777777', {
        statusCode: 200,
        body: { profiledetails: [{ status: 'VALIDATED' }] },
      });
      cy.intercept('GET', '**/ocapi/public/api/fleet-product-service/v1/products/0477777777', {
        statusCode: 200,
        body: { splitBillProfile: {} },
      });

      cy.visit('/line-navigation-list?msisdn=0477777777&default=barrings');

      cy.getElement('content').should('contain.text', 'Barrings Content');
    });

    it('should show the default nav item from the navigation data if the URL does not contain a default', () => {
      cy.intercept('GET', '**/ocapi/public/api/fleet-customer-service/v1/profiledetails?msisdn=0477777777', {
        statusCode: 200,
        body: { profiledetails: [{ status: 'VALIDATED' }] },
      });
      cy.intercept('GET', '**/ocapi/public/api/fleet-product-service/v1/products/0477777777', {
        statusCode: 200,
        body: { splitBillProfile: {} },
      });

      cy.visit('/line-navigation-list?msisdn=0477777777');

      cy.getElement('content').should('contain.text', 'Address Content');
    });

    it('should show the first nav item in the list if there is no default in URL and navigation data', () => {
      cy.intercept('GET', '**/ocapi/public/api/fleet-customer-service/v1/profiledetails?msisdn=0477777777', {
        statusCode: 200,
        body: { profiledetails: [{ status: 'VALIDATED' }] },
      });
      /**
       * The product holding doesn't contain a split bill profile so the address navigation item will not be visible.
       * Address is the default in the navigation data.
       * There is no default navigation item in the URL and the navigation data.
       * This will allow us to test that it then shows the first navigation item in the list.
       */
      cy.intercept('GET', '**/ocapi/public/api/fleet-product-service/v1/products/0477777777', {
        statusCode: 200,
        body: {},
      });

      cy.visit('/line-navigation-list?msisdn=0477777777');

      cy.getElement('content').should('contain.text', 'Identification Content');
    });
  });
});
