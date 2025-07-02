import { createOutputSpy, mount } from 'cypress/angular';
import { TranslateModule } from '@ngx-translate/core';
import { PaginationComponent } from './pagination.component';

describe(PaginationComponent.name, () => {
  const mountComponent = () => {
    mount(PaginationComponent, {
      componentProperties: {
        totalPages: 10,
        currentPageNumber: 1,
        pageChanged: createOutputSpy('pageChanged'),
      },
      imports: [TranslateModule.forRoot()],
    });
  };

  it('should display pagination correctly', () => {
    mountComponent();

    cy.get('.pagination__list__item').should('have.length', 7); // 5 pages + 2 arrows
    cy.contains('1').should('have.class', 'pagination__list__item__active');
    cy.contains('2').should('have.class', 'pagination__list__item__in-active');
    cy.contains('...').should('exist');
    cy.contains('10').should('exist');
  });

  it('should navigate to the next page', () => {
    mountComponent();

    cy.get('.icon-chevron-right').click();
    cy.get('@pageChanged').should('have.been.calledWith', 2);
  });

  it('should navigate to a specific page', () => {
    mountComponent();

    cy.contains('4').click();
    cy.get('@pageChanged').should('have.been.calledWith', 4);
  });

  it('should display dots when there are more pages than visible', () => {
    mountComponent();

    cy.contains('...').should('have.length', 1);
    cy.contains('1').should('exist');
    cy.contains('10').should('exist');
  });
});
