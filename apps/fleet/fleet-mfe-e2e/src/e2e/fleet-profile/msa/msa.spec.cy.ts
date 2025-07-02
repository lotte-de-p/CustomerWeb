import userDetails from '../../../../../../../fixtures/http/fleet/openid/user-details.json';
import msa from '../../../fixtures/fleet-msa/msa.json';
import bprb from '../../../fixtures/fleet-msa/BPRB2015.json';
import c5fa from '../../../fixtures/fleet-msa/C5FA0001.json';
import generic from '../../../fixtures/fleet-msa/NC915.json';
import stef from '../../../fixtures/fleet-msa/STEF0000.json';

describe('Master Service Agreement', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/ocapi/oauth/userdetails', { statusCode: 200, body: userDetails });
    cy.intercept('GET', '**/ocapi/public/api/fleet-customer-service/v1/msa', {
      statusCode: 200,
      body: msa,
    });
    cy.intercept('GET', '**/omapi/public/product/**', {
      statusCode: 200,
      body: generic,
    });
    cy.intercept('GET', '**/omapi/public/product/BPRB2015', {
      statusCode: 200,
      body: bprb,
    });
    cy.intercept('GET', '**/omapi/public/product/C5FA0001', {
      statusCode: 200,
      body: c5fa,
    });
    cy.intercept('GET', '**/omapi/public/product/STEF0000', {
      statusCode: 200,
      body: stef,
    });
    cy.visit('/msa');
  });

  it('should autoselect the first MSA on page load', () => {
    cy.get('input#msa').should('have.value', 'MSA 0000000001');

    cy.get('[data-cy="offer-label"]').should('have.length', 2);
    cy.get('[data-cy="offer-label"]').eq(0).should('have.text', 'B-Fleet Travel1');
    cy.get('[data-cy="offer-label"]').eq(1).should('have.text', 'B-Fleet World1');
  });

  it('should show the tariff plan for the selected msa when selecting another MSA', () => {
    cy.get('input#msa').click();
    cy.get('.select-dropdown__options__list').eq(1).click();

    cy.get('[data-cy="offer-label"]').should('have.length', 2);
    cy.get('[data-cy="offer-label"]').eq(0).should('have.text', 'C-Fleet Travel2');
    cy.get('[data-cy="offer-label"]').eq(1).should('have.text', 'C-Fleet World2');
  });

  it('should pin and unpin the selected offer when the pin button is clicked', () => {
    cy.get('[data-cy="offer-label"]').should('have.length', 2);
    cy.get('[data-cy="offer-label"]').eq(0).should('have.text', 'B-Fleet Travel1');
    cy.get('[data-cy="offer-label"]').eq(1).should('have.text', 'B-Fleet World1');
    cy.get('.pinned').should('have.length', 0);

    cy.get('[data-cy="pin-button"]').eq(1).click();
    cy.get('.pinned').should('have.length', 1);

    cy.get('[data-cy="unpin-button"]').eq(0).click();
    cy.get('.pinned').should('have.length', 0);
  });

  it('should show group bundles when the group bundles tab is clicked', () => {
    cy.get('div#mat-tab-label-0-1').click();
    cy.get('.group-bundles-item-name').should('have.length', 2);
    cy.get('.group-bundles-item-name').eq(0).should('have.text', 'Group bundle 2');
    cy.get('.group-bundles-item-name').eq(1).should('have.text', 'Group bundle 1');
  });
});
