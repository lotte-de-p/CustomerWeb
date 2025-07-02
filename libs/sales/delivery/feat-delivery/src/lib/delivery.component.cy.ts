import { DeliveryComponent } from './delivery.component';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { deliveryStateTestfactory } from '@sales/delivery/data-access';

const shouldExist = 'should exist';
const tgSalesChangeDeliveryInfo = 'tg-sales-change-delivery-info';
describe(DeliveryComponent.name, () => {
  beforeEach(() => {
    cy.mount(DeliveryComponent, {
      providers: [provideMockStore({ initialState: { deliveryFeature: deliveryStateTestfactory.build() } })],
      imports: [TranslateModule.forRoot(), HttpClientTestingModule],
    });
  });
  describe('delivery-items', () => {
    it(shouldExist, () => {
      cy.get('tg-sales-delivery-items').should('exist');
    });

    it('should contain 2 items', () => {
      cy.getElement('delivery-item').should('have.length', 2);
      cy.getElement('delivery-item').first().should('exist').should('contain.text', 'smartphone');
    });
  });

  describe('delivery-address', () => {
    it(shouldExist, () => {
      cy.get('tg-sales-delivery-delivery-address').should('exist');
    });

    it('should show a street and housenumber', () => {
      cy.getElement('delivery-address-housenumber-street').should('contain.text', '17767 Darwin Loadteststraat');
    });

    it('should show a postalcode and municipality', () => {
      cy.getElement('delivery-address-postalcode').should('contain.text', '2800');
      cy.getElement('delivery-address-municipality').should('contain.text', 'Mechelen');
    });

    it('should show a country', () => {
      cy.getElement('delivery-address-country').should('contain.text', 'België');
    });
  });

  describe('delivery-personal-info', () => {
    it(shouldExist, () => {
      cy.get('tg-sales-delivery-personal-info').should('exist');
    });

    it('should show a first and last name', () => {
      cy.getElement('delivery-personal-info-full-name').should('contain.text', 'Alexandre | Bunschoten');
    });

    it('should show a mobile number', () => {
      cy.getElement('delivery-personal-info-mobile').should('contain.text', '0452458456');
    });
    it('should show an email address', () => {
      cy.getElement('delivery-personal-info-email').should('contain.text', 'automation.ghpki.slzcl@staff.telenet.be');
    });
  });

  describe('change address button', () => {
    it(shouldExist, () => {
      cy.getElement('change-delivery-address-button').should('exist');
    });
  });

  describe('overlay', () => {
    beforeEach(() => {
      cy.getElement('change-delivery-address-button').click();
    });

    it('should open an overlay when clicking change address', () => {
      cy.get(tgSalesChangeDeliveryInfo).should('exist').should('be.visible');
    });

    it('should show the personal info form', () => {
      cy.get('tg-sales-change-delivery-personal-info').should('be.visible');
    });

    it('should show the address form', () => {
      cy.get('tg-sales-address-form-field').should('be.visible');
    });

    it('should close the overlay when clicking x', () => {
      cy.getElement('change-delivery-info-x-button').click();
      cy.get(tgSalesChangeDeliveryInfo).should('not.exist');
    });

    it('should close the overlay when clicking cancel', () => {
      cy.getElement('change-delivery-info-cancel-button').click();
      cy.get(tgSalesChangeDeliveryInfo).should('not.exist');
    });

    it('should save and close when clicking the submit button', () => {
      cy.getElement('change-delivery-info-submit-button').click();
      cy.get(tgSalesChangeDeliveryInfo).should('not.exist');
    });
  });
});
