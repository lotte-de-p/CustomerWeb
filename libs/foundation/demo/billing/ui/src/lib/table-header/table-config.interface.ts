import { TableColumn } from './table-column.interface';

export interface TableConfig<T> {
  columns: TableColumn<T>[];
  component: string;
}
