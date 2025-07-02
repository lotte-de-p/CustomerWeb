import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { map } from 'lodash-es';
import { TableConfig } from './table-config.interface';
import { Sorting } from './sorting.interface';
import { SortableTableColumn, TableColumn } from './table-column.interface';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TableHeaderCypressColumnIdPipe } from './table-header-cypress-column-id.pipe';

@Component({
  standalone: true,
  selector: 'tg-demo-billing-table-header',
  template: `
    <div class="display--flex background-light-grey py--xxs px--xxxs font--caption-bold mb--m">
      <div class="row width--full m--n">
        <ng-container *ngFor="let column of sortableTableColumns">
          <div class="display--flex no-select col--{{ column.cols }}">
            <div
              class="display--flex gap--sorting"
              [ngClass]="{ 'cursor--pointer': column.sortable }"
              [attr.data-testid]="column.property | tableHeaderCypressColumnId"
              (click)="column.sortable && onToggleSort(column)">
              <div>{{ column.label | translate }}</div>
              <div *ngIf="column.sortable">
                <i
                  class="icon-sm"
                  [ngClass]="{
                    'color-shade_32 icon-sort': !column.active,
                    'color-shade_64': column.active,
                    'icon-sort-arrow-down': column.order === 'desc',
                    'icon-sort-arrow-up': column.order === 'asc'
                  }">
                </i>
              </div>
            </div>
          </div>
        </ng-container>
        <div class="col-1"></div>
      </div>
    </div>
  `,
  imports: [NgClass, NgForOf, NgIf, TranslateModule, TableHeaderCypressColumnIdPipe],
  styleUrls: ['./table-header.component.css'],
})
export class TableHeaderComponent<T> implements OnInit {
  @Input() config: TableConfig<T> = {} as TableConfig<T>;

  @Output() updateSorting: EventEmitter<Sorting<T>> = new EventEmitter<Sorting<T>>();

  sortableTableColumns: SortableTableColumn<T>[] = [];

  ngOnInit(): void {
    this.sortableTableColumns = map(this.config.columns, (col) => this.mapToSortableTableColumn(col));
  }

  onToggleSort(column: SortableTableColumn<T>): void {
    if (column.active) {
      column.order = column.order === 'asc' ? 'desc' : 'asc';
    } else {
      this.resetPreviousActiveColumn();
      column.active = true;
    }

    this.onUpdateSorting({
      property: column.property,
      translation: column.translation,
      order: column.order,
    });
  }

  private mapToSortableTableColumn(col: TableColumn<T>): SortableTableColumn<T> {
    return {
      active: !!col.sorting?.default,
      translation: col.translation,
      order: col.sorting?.order ? col.sorting.order : 'asc',
      label: `ng.${this.config.component}.lbl.sort-${this.toKebabCase(String(col.property))}`,
      ...col,
    };
  }

  private resetPreviousActiveColumn(): void {
    const activeColumn = this.sortableTableColumns.find((col) => col.active);
    if (activeColumn) {
      activeColumn.active = false;
      activeColumn.order = 'asc';
    }
  }

  private onUpdateSorting(sorting: Sorting<T>): void {
    this.updateSorting.emit(sorting);
  }

  private toKebabCase(text: string): string {
    return text.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }
}
