import { SortingOrder } from './sorting-order.type';

export interface TableColumn<T> {
  property: keyof T;
  translation?: string;
  sortable: boolean;
  cols: number;
  sorting?: {
    default: boolean;
    order: SortingOrder;
  };
}

export interface SortableTableColumn<T> extends TableColumn<T> {
  active: boolean;
  translation?: string;
  order: SortingOrder;
  label: string;
}
