import { Observable } from 'rxjs';

export interface ViewModel {
  deliveryPrice$?: Observable<number | undefined>;
  installationCost$?: Observable<number | undefined>;
  totalOrderCost$: Observable<number>;
  monthlyTotalOrderCost$: Observable<number>;
  oneTimeTotalOrderCost$: Observable<number>;
  totalDiscountedCost$: Observable<number>;
}
