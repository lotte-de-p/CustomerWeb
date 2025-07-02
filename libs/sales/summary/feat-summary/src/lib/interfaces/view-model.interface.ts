import { Observable } from 'rxjs';
import {
  BillingAddress,
  DeliveryInfo,
  DepreciationItem,
  SummaryNotification,
  SummaryOrderItem,
  SummaryPersonalInfo,
  SummaryPrices,
} from '@sales/summary/data-access';

export interface ViewModel {
  personalInfo$: Observable<SummaryPersonalInfo | undefined>;
  deliveryInfo$: Observable<DeliveryInfo | undefined>;
  invoiceInfo$: Observable<BillingAddress | undefined>;
  orderItems$: Observable<SummaryOrderItem[] | undefined>;
  prices$: Observable<SummaryPrices | undefined>;
  depreciationItems$: Observable<DepreciationItem[] | undefined>;
  contractSummaryRequired$: Observable<boolean | undefined>;
  generalNotifications$: Observable<SummaryNotification[]>;
  deliveryNotifications$: Observable<SummaryNotification[]>;
}
