import { Observable } from 'rxjs';
import { OrderItemWithDiscount, UsedSlot } from '@sales/etf/data-access';

export interface ViewModel {
  stepImage: string;
  discountItems: Observable<OrderItemWithDiscount[] | undefined>;
  usedAndPendingDiscounts: Observable<UsedSlot[] | undefined>;
  showValidationNotification: boolean;
}
