import { mount } from 'cypress/angular';
import { ChoiceGroupComponent, ChoiceType } from './choice-group.component';
import { TranslateModule } from '@ngx-translate/core';
import { FacetGroup } from '@general/data-access-search';

describe(ChoiceGroupComponent.name, () => {
  const facetGroup: FacetGroup = {
    title: 'Categories',
    facets: [
      { id: '1', label: 'Electronics', selected: false, count: 10 },
      { id: '2', label: 'Books', selected: true, count: 5 },
    ],
  };

  const mountComponent = (type: ChoiceType = ChoiceType.MULTI) => {
    mount(ChoiceGroupComponent, {
      componentProperties: {
        facetGroup: facetGroup,
        groupPrefix: 'testGroup',
        type: type,
      },
      imports: [TranslateModule.forRoot()],
    });
  };

  it('renders the component with multiple choice options', () => {
    mountComponent(ChoiceType.MULTI);

    cy.get('.search-product--nav__items-name').should('contain.text', 'Categories');
    cy.get('.form__checkbox__input').should('have.length', 2);
    cy.get('[data-testid="Electronics"]').should('contain.text', 'Electronics (10)');
    cy.get('[data-testid="Books"]').should('contain.text', 'Books (5)');
  });

  it('renders the component with single choice options', () => {
    mountComponent(ChoiceType.SINGLE);

    cy.get('.form__radio__input').should('have.length', 2);
  });
});
