import { FeatInstallationAddressComponent } from './feat-installation-address.component';
import { Action, StoreModule } from '@ngrx/store';
import { AddressState, addressStateTestFactory, reducer } from '@sales/address/data-access';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { AddressListComponent, InstallationAddressComponent } from '@sales/address/ui';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { TgFormsModule } from '@telenet/ng-lib-form';
import { EventFacade } from '@sales/events/data-access';

export function AddressMockReducer(
  state: AddressState = addressStateTestFactory.build(),
  action: Action
): AddressState {
  return reducer(state, action);
}

const installationAddressFeature = '[data-cy="feat-installation-address"]';
const addressListChevron = '[data-cy="address-list-chevron"]';
const addressList = '[data-cy="address-list"]';
const addressItem = '[data-cy="address-item"]';
const addressItemFirstLine = '[data-cy="installation-address-first-line"]';
const addressItemSecondLine = '[data-cy="installation-address-second-line"]';
const addEditActionLink = '[data-cy="feat-installation-address-action"]';

describe(FeatInstallationAddressComponent.name, () => {
  beforeEach(() => {
    // Visit the page or component containing the FeatInstallationAddressComponent
    cy.mount(FeatInstallationAddressComponent, {
      providers: [],
      imports: [
        StoreModule.forRoot({ addressFeature: AddressMockReducer }),
        HttpClientTestingModule,
        CommonModule,
        TgTranslateTestingModule.forRoot(),
        InlineSVGModule,
        TgFormsModule,
        AddressListComponent,
        InstallationAddressComponent,
      ],
      componentProperties: {},
    });
  });

  describe(FeatInstallationAddressComponent.name, () => {
    it('should mount', () => {
      cy.get(installationAddressFeature).should('be.visible');
    });

    describe('Address list', () => {
      it('should close/open the address list when chevron clicked', () => {
        cy.get(addressList).should('be.visible');
        cy.get(addressListChevron).first().should('be.visible').click();
        cy.get(addressList).should('not.be.visible');
        cy.get(addressListChevron).first().should('be.visible').click();
        cy.get(addressList).should('be.visible');
      });

      it('should display all addresses correctly', () => {
        cy.get(addressItem).should('exist').should('have.length', 3);
        cy.get(addressItemFirstLine).first().should('exist').contains('Oude baan 90');
        cy.get(addressItemSecondLine).first().should('exist').contains('2800 Mechelen , Belgie');
        cy.get(addressItemFirstLine).eq(1).should('exist').contains('Klapdorp 34 /301');
        cy.get(addressItemSecondLine).eq(1).should('exist').contains('2000 Antwerpen , Belgie');
        cy.get(addressItemFirstLine).eq(2).should('exist').contains('Meir 34 /A /221');
        cy.get(addressItemSecondLine).eq(2).should('exist').contains('2000 Antwerpen , Belgie');
      });

      it('should have add-action', () => {
        cy.get(addEditActionLink).should('exist').contains('Nieuw adres toevoegen');
        cy.get(addEditActionLink).get('i').should('have.class', 'icon icon-plus');
      });

      it('should trigger analytics event when address is clicked', () => {
        cy.spy(EventFacade.prototype, 'triggerAnalyticsClickEvent').as('triggerAnalyticsEvent');
        cy.get(addEditActionLink).should('exist').contains('Nieuw adres toevoegen');
        cy.get(addressItem).first().click();
        cy.get('@triggerAnalyticsEvent').should('have.been.calledWith', { name: 'existing address selected' });
      });

      it('should click event of add-item', () => {
        cy.window().then((win) => {
          cy.stub(win.console, 'log').as('consoleLog');
          cy.get(addEditActionLink).should('exist').click();
          // Check if console.log is called with the correct message
          cy.get('@consoleLog').should('be.calledWith', 'add/editing address with overlay ', true);
        });
      });
    });
  });
});
