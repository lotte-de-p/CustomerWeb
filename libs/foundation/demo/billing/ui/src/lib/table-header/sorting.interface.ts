import { SortingOrder } from './sorting-order.type';

export interface Sorting<T> {
  property: keyof T;
  translation?: string;
  order: SortingOrder;
}
