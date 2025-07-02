import { goThroughPersonalDetailsPageAndVerify } from '../support/app.po';
import { customerNoMatchResponse, generateNRNWithOffset } from './customer-registration.testfactory';

describe('Customer registration', () => {
  beforeEach(() => {
    const now = new Date(2021, 0, 1, 12, 0, 0).getTime();
    cy.clock(now);
    cy.visit('/customer-registration', {
      onBeforeLoad: (win) => {
        win['TelenetGroup'] = win['TelenetGroup'] || {};
        win['TelenetGroup'].pathCategorisation = win['TelenetGroup'].pathCategorisation || {};
        win['TelenetGroup'].pathCategorisation.customerCategory = 'RESIDENTIAL';
        cy.stub(win['TelenetGroup'].pathCategorisation, 'customerCategory').returns('RESIDENTIAL');
      },
    });
    cy.intercept('ocapi/public/api/customer-service/v1/customers/brands/telenet/search?distributionchannel=sales', {
      body: customerNoMatchResponse,
    });
  });

  describe('Personal details form', () => {
    it('should go through the registration for a RESIDENTIAL customer', () => {
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
      cy.getElement('personal-view-button').click();
      cy.getElement('first-name-field').type('John');
      cy.getElement('last-name-field').type('Porter');
      cy.getElement('email-field').type('John.Porter@telenet.be');
      cy.getElement('phone-number-field').type('0484567098');
      cy.getElement('dob-field').should('not.exist');
      cy.getElement('navigation-bar-next').click();

      cy.getElement('belgian-eid-field').should('be.visible');
      cy.getElement('belgian-eid-field').type('AHC599230634');
      cy.getElement('nrn-field').type(generateNRNWithOffset(50));
      cy.getElement('navigation-bar-next').click();

      cy.wait('@getMunicipalities');
      cy.getElement('zip-code').should('be.visible');
      cy.getElement('zip-code').type('2800');
      cy.getElement('address-toggle-component').should('not.exist');
    });

    it('should go through the registration for a BUSINESS customer', () => {
      cy.visit('/customer-registration', {
        onBeforeLoad: (win) => {
          win['TelenetGroup'] = win['TelenetGroup'] || {};
          win['TelenetGroup'].pathCategorisation = win['TelenetGroup'].pathCategorisation || {};
          win['TelenetGroup'].pathCategorisation.customerCategory = 'BUSINESS';
          cy.stub(win['TelenetGroup'].pathCategorisation, 'customerCategory').returns('BUSINESS');
        },
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
      cy.getElement('company-name-field').should('be.visible');
      cy.getElement('belgian-enterprise-number-field').should('be.visible');

      cy.getElement('company-name-field').type('Telenet');
      cy.getElement('belgian-enterprise-number-field').type('1218.744.622');

      cy.getElement('legal-entity-field').should('be.visible');
      cy.getElement('legal-entity-field').type('AV');

      cy.getElement('zip-code').should('be.visible');
      cy.getElement('zip-code').type('2800');
      cy.getElement('installation-address-toggle').should('not.exist');
      cy.getElement('billing-address-toggle').should('be.visible');
    });
    it('should NOT go through the registration for a BUSINESS customer if invalid enterprise number is provided', () => {
      cy.visit('/customer-registration', {
        onBeforeLoad: (win) => {
          win['TelenetGroup'] = win['TelenetGroup'] || {};
          win['TelenetGroup'].pathCategorisation = win['TelenetGroup'].pathCategorisation || {};
          win['TelenetGroup'].pathCategorisation.customerCategory = 'BUSINESS';
          cy.stub(win['TelenetGroup'].pathCategorisation, 'customerCategory').returns('BUSINESS');
        },
      });
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

      cy.getElement('company-name-field').should('be.visible');
      cy.getElement('belgian-enterprise-number-field').should('be.visible');

      cy.getElement('company-name-field').type('Telenet');
      cy.getElement('belgian-enterprise-number-field').type('1218.744.645');
      cy.get('[id="belgianEnterpriseNumberField"]').focus().blur();
      cy.getElement('belgian-enterprise-number-constraint').should('be.visible');
      cy.getElement('legal-entity-field').should('be.visible');
      cy.getElement('legal-entity-field').type('ABC');
    });
    it('should display error if dob is below 18 years', () => {
      cy.visit('/customer-registration', {
        onBeforeLoad: (win) => {
          win['TelenetGroup'] = win['TelenetGroup'] || {};
          win['TelenetGroup'].pathCategorisation = win['TelenetGroup'].pathCategorisation || {};
          win['TelenetGroup'].pathCategorisation.customerCategory = 'BUSINESS';
          cy.stub(win['TelenetGroup'].pathCategorisation, 'customerCategory').returns('BUSINESS');
        },
      });
      cy.getElement('business-view-button').click();
      cy.getElement('first-name-field').type('John');
      cy.getElement('last-name-field').type('Porter');
      cy.getElement('email-field').type('John.Porter@telenet.be');
      cy.getElement('phone-number-field').type('0484567098');
      cy.getElement('dob-field').should('be.visible');
      cy.get('input[id="day"]').type('12');
      cy.get('select').select(11).should('have.value', '11');
      cy.get('input[id="year"]').type('2012');
      cy.getElement('navigation-bar-next').click();
      cy.getElement('year-of-birth-field-invalid-error').should('be.visible');
    });
    it('should display error if dob is invalid', () => {
      cy.visit('/customer-registration', {
        onBeforeLoad: (win) => {
          win['TelenetGroup'] = win['TelenetGroup'] || {};
          win['TelenetGroup'].pathCategorisation = win['TelenetGroup'].pathCategorisation || {};
          win['TelenetGroup'].pathCategorisation.customerCategory = 'BUSINESS';
          cy.stub(win['TelenetGroup'].pathCategorisation, 'customerCategory').returns('BUSINESS');
        },
      });
      cy.getElement('business-view-button').click();
      cy.getElement('first-name-field').type('John');
      cy.getElement('last-name-field').type('Porter');
      cy.getElement('email-field').type('John.Porter@telenet.be');
      cy.getElement('phone-number-field').type('0484567098');
      cy.getElement('dob-field').should('be.visible');
      cy.get('input[id="day"]').type('31');
      cy.get('select').select(2).should('have.value', '2');
      cy.get('input[id="year"]').type('2012');
      cy.getElement('navigation-bar-next').click();
      cy.getElement('day-invalid-error').should('be.visible');
    });

    it('should display error messages for required fields that are not filled in', () => {
      cy.getElement('personal-view-button').click();
      cy.getElement('navigation-bar-next').click();

      cy.getElement('first-name-field-required-error').should('be.visible');
      cy.getElement('last-name-field-required-error').should('be.visible');
      cy.getElement('email-field-required-error').should('be.visible');
      cy.getElement('phone-number-field-required-error').should('be.visible');
    });

    it('should display error messages for invalid email and phone number', () => {
      cy.getElement('personal-view-button').click();
      cy.getElement('email-field').type('John.Porter');
      cy.getElement('phone-number-field').type('123456');
      cy.getElement('navigation-bar-next').click();

      cy.getElement('email-field-invalid-error').should('be.visible');
      cy.getElement('phone-number-field-invalid-error').should('be.visible');
    });

    it('should display error messages for too long email', () => {
      cy.getElement('personal-view-button').click();
      cy.getElement('email-field').type(
        'this_email_is_over_eighty_characters_long_but_just_barely_though@telenetgroup.com'
      );
      cy.getElement('navigation-bar-next').click();

      cy.getElement('email-field-maxlength-error').should('be.visible');
    });

    it('should NOT go through the registration for a RESIDENTIAL customer when hard match found for given id card', () => {
      cy.getElement('personal-view-button').click();
      cy.getElement('first-name-field').type('John');
      cy.getElement('last-name-field').type('Porter');
      cy.getElement('email-field').type('John.Porter@telenet.be');
      cy.getElement('phone-number-field').type('0484567098');
      cy.getElement('dob-field').should('not.exist');
      cy.getElement('navigation-bar-next').click();

      cy.getElement('belgian-eid-field').should('be.visible');
      cy.getElement('belgian-eid-field').type('VHT498675178');
      cy.intercept(
        'https://api.int.telenet.be/ocapi/public/api/customer-service/v1/customers/brands/telenet/search?distributionchannel=sales',
        {
          body: {
            firstName: 'dfserfewrewr',
            lastName: 'ewretr',
            id: '9161507808413900693',
            status: 'Active',
            type: 'hard',
            customerNumber: '1208057390',
          },
        }
      );
      cy.get('[formcontrolname="belgianEid"]').focus().blur();
      cy.getElement('hard-match-error').should('be.visible');
    });

    it('should NOT go through the registration for a RESIDENTIAL customer when hard match found for given nrn', () => {
      cy.getElement('personal-view-button').click();
      cy.getElement('first-name-field').type('John');
      cy.getElement('last-name-field').type('Porter');
      cy.getElement('email-field').type('John.Porter@telenet.be');
      cy.getElement('phone-number-field').type('0484567098');
      cy.getElement('dob-field').should('not.exist');
      cy.getElement('navigation-bar-next').click();

      cy.getElement('belgian-eid-field').should('be.visible');
      cy.getElement('belgian-eid-field').type('VHT498675178');
      cy.getElement('nrn-field').type('99041272750');
      cy.intercept(
        'https://api.int.telenet.be/ocapi/public/api/customer-service/v1/customers/brands/telenet/search?distributionchannel=sales',
        {
          body: {
            firstName: 'dfserfewrewr',
            lastName: 'ewretr',
            id: '9161507808413900693',
            status: 'Active',
            type: 'hard',
            customerNumber: '1208057390',
          },
        }
      );
      cy.get('[formcontrolname="nationalRegistrationNumberField"]').focus().blur();
      cy.getElement('hard-match-error').should('be.visible');
    });
    it('should NOT go through the registration for a BUSINESS customer when hard match found for given enterprise id', () => {
      cy.visit('/customer-registration', {
        onBeforeLoad: (win) => {
          win['TelenetGroup'] = win['TelenetGroup'] || {};
          win['TelenetGroup'].pathCategorisation = win['TelenetGroup'].pathCategorisation || {};
          win['TelenetGroup'].pathCategorisation.customerCategory = 'BUSINESS';
          cy.stub(win['TelenetGroup'].pathCategorisation, 'customerCategory').returns('BUSINESS');
        },
      });
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

      cy.getElement('company-name-field').should('be.visible');
      cy.getElement('belgian-enterprise-number-field').should('be.visible');

      cy.getElement('company-name-field').type('Telenet');
      cy.getElement('belgian-enterprise-number-field').type('1218.744.622');

      cy.getElement('legal-entity-field').should('be.visible');
      cy.getElement('legal-entity-field').type('ABC');

      cy.intercept(
        'https://api.int.telenet.be/ocapi/public/api/customer-service/v1/customers/brands/telenet/search?distributionchannel=sales',
        {
          body: {
            firstName: 'dfserfewrewr',
            lastName: 'ewretr',
            id: '9161507808413900693',
            status: 'Active',
            type: 'hard',
            customerNumber: '1208057390',
          },
        }
      );
      cy.get('[formcontrolname="belgianEnterpriseNumberField"]').focus().blur();
      cy.getElement('hard-match-error').should('be.visible');
    });
  });

  describe('Identity details form', () => {
    it('should display error if belgian eid is invalid', () => {
      goThroughPersonalDetailsPageAndVerify();

      cy.getElement('belgian-eid-field').type('DLK92733525');
      cy.getElement('belgian-eid-field').blur();

      cy.getElement('belgian-eid-field-invalid-error').should('be.visible');
    });

    it('should display error messages for required fields that are not filled in', () => {
      goThroughPersonalDetailsPageAndVerify();
      cy.getElement('navigation-bar-next').click();

      cy.getElement('belgian-eid-field-required-error').should('be.visible');
      cy.getElement('nrn-field-required-error').should('be.visible');
      cy.getElement('day-field-required-error').should('be.visible');
      cy.getElement('month-of-birth-field-required-error').should('be.visible');
      cy.getElement('year-of-birth-field-required-error').should('be.visible');
    });

    it('should go through the registration for a RESIDENTIAL customer', () => {
      goThroughPersonalDetailsPageAndVerify();

      cy.getElement('belgian-eid-field').type('SNO970439530');
      cy.getElement('nrn-field').type('83080610460');
      cy.getElement('dob-field').should('not.exist');
      cy.getElement('navigation-bar-next').click();

      cy.getElement('address-toggle-component').should('not.exist');
    });
  });
});
