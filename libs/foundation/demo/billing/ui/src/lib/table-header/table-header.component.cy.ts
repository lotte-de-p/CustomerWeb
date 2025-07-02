import { TableHeaderComponent } from './table-header.component';
import { TableConfig } from './table-config.interface';
import { createOutputSpy } from 'cypress/angular';
import { TranslateModule } from '@ngx-translate/core';

interface TestTableObject {
  col1: string;
  col2: string;
  col3: string;
}

const FIRST_COLUMN = '[data-testid="sort-col1"]';
const SECOND_COLUMN = '[data-testid="sort-col2"]';
const THIRD_COLUMN = '[data-testid="sort-col3"]';

describe('TableHeaderComponent', () => {
  beforeEach(() => {
    const tableConfig: TableConfig<TestTableObject> = {
      columns: [
        {
          property: 'col1',
          translation: 'ng.col1.lbl',
          sortable: true,
          sorting: { default: true, order: 'asc' },
          cols: 4,
        },
        { property: 'col2', sortable: false, cols: 11 },
        { property: 'col3', sortable: true, cols: 4 },
      ],
      component: 'table-header',
    };
    cy.mount(TableHeaderComponent<TestTableObject>, {
      imports: [TranslateModule.forRoot()],
      componentProperties: {
        config: tableConfig,
        updateSorting: createOutputSpy('updateSortingSpy'),
      },
    });
  });

  it('should render', () => {
    cy.get(FIRST_COLUMN)
      .should('contain.text', 'ng.table-header.lbl.sort-col1')
      .within(() => {
        cy.get('i').should('have.class', 'icon-sort-arrow-up').should('not.have.class', 'icon-sort');
      });

    cy.get(SECOND_COLUMN)
      .should('contain.text', 'ng.table-header.lbl.sort-col2')
      .within(() => {
        cy.get('i').should('not.exist');
      });
    cy.get(THIRD_COLUMN)
      .should('contain.text', 'ng.table-header.lbl.sort-col3')
      .within(() => {
        cy.get('i').should('have.class', 'icon-sort');
      });
  });

  describe(`When a sortable column is clicked`, () => {
    it(`should change the sort icon`, () => {
      cy.get(FIRST_COLUMN)
        .click()
        .within(() => {
          cy.get('i').should('have.class', 'icon-sort-arrow-down').should('not.have.class', 'icon-sort');
        });
    });

    it(`should emit an updateSorting event`, () => {
      cy.get(FIRST_COLUMN).click();
      cy.get('@updateSortingSpy').should('have.been.calledWith', {
        property: 'col1',
        translation: 'ng.col1.lbl',
        order: 'desc',
      });
    });
  });

  describe(`When a sorting a new un sorted column`, () => {
    it(`should change the sort icon`, () => {
      cy.get(THIRD_COLUMN)
        .click()
        .within(() => {
          cy.get('i').should('have.class', 'icon-sort-arrow-up').should('not.have.class', 'icon-sort');
        });
      cy.get(FIRST_COLUMN).within(() => {
        cy.get('i').should('have.class', 'icon-sort');
      });
    });

    it(`should emit an updateSorting event`, () => {
      cy.get(THIRD_COLUMN).click();
      cy.get('@updateSortingSpy').should('have.been.calledWith', {
        property: 'col3',
        translation: undefined,
        order: 'asc',
      });
    });
  });
});
