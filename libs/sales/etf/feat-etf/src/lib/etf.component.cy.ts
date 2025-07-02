import { EtfComponent } from './etf.component';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg-2';
import {
  EtfListComponent,
  OrderItemComponent,
  OrderItemMarkedAsNoDiscountComponent,
  OrderItemWithEtfListComponent,
  OrderItemWithTerminationComponent,
} from '@sales/etf/ui';
import { EtfState, reducer, etfStateTestFactory } from '@sales/etf/data-access';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TgFormsModule } from '@telenet/ng-lib-form';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { Action, StoreModule } from '@ngrx/store';

export function EtfMockReducer(state: EtfState = etfStateTestFactory.build(), action: Action): EtfState {
  return reducer(state, action);
}

const etfOrderItemWithList = '[data-cy="feat-etf-order-item-with-etf-list"]';
const etfListItem = '[data-cy="feat-etf-etf-list-item"]';
const etfOrderItemYesButton = '[data-cy="feat-etf-order-item-etf-yes-button"]';
const etfOrderItemNoButton = '[data-cy="feat-etf-order-item-etf-no-button"]';
const etfOrderItemEtfApplyButton = '[data-cy="feat-etf-list-apply-button"]';
const etfOrderItemEtfCancelButton = '[data-cy="feat-etf-list-cancel-button"]';
const etfOrderItemMarkedAsNo = '[data-cy="feat-etf-order-item-marked-as-no"]';
const etfOrderItemWithCancellation = '[data-cy="feat-etf-order-item-with-cancellation"]';

const etfOrderItemMarkedAsNoActivateDiscountLink =
  '[data-cy="feat-etf-order-item-marked-as-no-activate-discount-link"]';

describe(EtfComponent.name, () => {
  beforeEach(() => {
    cy.mount(EtfComponent, {
      providers: [],
      imports: [
        StoreModule.forRoot({ etfFeature: EtfMockReducer }),
        HttpClientTestingModule,
        CommonModule,
        TgTranslateTestingModule.forRoot(),
        InlineSVGModule,
        TgFormsModule,
        EtfListComponent,
        OrderItemComponent,
        OrderItemWithEtfListComponent,
        OrderItemWithTerminationComponent,
        OrderItemMarkedAsNoDiscountComponent,
      ],
      componentProperties: {},
    });
  });

  describe(EtfComponent.name, () => {
    it('should mount', () => {
      cy.get('[data-cy="feat-etf"]').should('be.visible');
    });

    it('should open the etf list when clicked', () => {
      cy.get(etfOrderItemYesButton).first().should('be.visible').click();
      cy.get(etfOrderItemWithList).should('exist');
    });

    it('should show 5 etf slots', () => {
      cy.get(etfListItem).should('not.exist');
      cy.get(etfOrderItemYesButton).first().should('be.visible').click();
      cy.get(etfListItem).should('exist').should('have.length', 5);
    });

    it('should not close when nothing was selected', () => {
      cy.get(etfOrderItemYesButton).first().should('be.visible').click();
      cy.get(etfOrderItemEtfApplyButton).first().should('be.visible').click();
      cy.get(etfListItem).should('exist').should('have.length', 5);
    });

    it('Should show extra info when I chose a discount and clicked yes', () => {
      cy.get(etfOrderItemYesButton).first().should('be.visible').click();
      cy.get(etfListItem).should('exist').first().click();
      cy.get(etfOrderItemEtfApplyButton).first().should('be.visible').click();
      cy.get(etfOrderItemWithCancellation).should('exist');
    });

    it('should close the etf when cancel is clicked', () => {
      cy.get(etfOrderItemYesButton).first().should('be.visible').click();
      cy.get(etfOrderItemWithList).should('exist');
      cy.get(etfOrderItemEtfCancelButton).first().should('be.visible').click();
      cy.get(etfOrderItemWithList).should('not.exist');
    });

    it('should show the activate discount link', () => {
      cy.get(etfOrderItemNoButton).first().should('exist').click();
      cy.get(etfOrderItemMarkedAsNo).should('exist');
      cy.get(etfOrderItemMarkedAsNoActivateDiscountLink).should('exist').click().should('not.exist');
    });
  });
});
