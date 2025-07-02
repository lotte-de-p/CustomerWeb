import { SummaryPersonalInfo } from '../interfaces/personal-info.interface';
import { DeliveryInfo } from '../interfaces/delivery-info.interface';
import { BillingAddress } from '../interfaces/invoice-info.interface';
import { DepreciationItem } from '../interfaces/depriciation-item.interface';
import { SummaryOrderItem, SummaryPrices } from '../interfaces/order-item.interface';
import { SummaryNotification } from '../interfaces/notification.interface';
import { IngenicoRequestForm } from '@sales/shared/data-access';

export interface SummaryState {
  personalInfo: SummaryPersonalInfo | undefined;
  deliveryInfo: DeliveryInfo | undefined;
  invoiceInfo: BillingAddress | undefined;
  depreciationItems: DepreciationItem[] | undefined;
  orderItems: SummaryOrderItem[] | undefined;
  prices: SummaryPrices | undefined;
  ingenicoRequest: IngenicoRequestForm | undefined;
  contractSummaryRequired: boolean | undefined;
  ingenicoFormReady: boolean;
  generalNotifications: SummaryNotification[];
  deliveryNotifications: SummaryNotification[];
  termsAndConditionsUrl: string | undefined;
  ingenicoFormUrl: string | undefined;
}

export const defaultState: SummaryState = {
  personalInfo: undefined,
  deliveryInfo: undefined,
  invoiceInfo: undefined,
  depreciationItems: undefined,
  orderItems: undefined,
  prices: undefined,
  contractSummaryRequired: undefined,
  ingenicoFormReady: false,
  ingenicoRequest: undefined,
  generalNotifications: [],
  deliveryNotifications: [],
  termsAndConditionsUrl: undefined,
  ingenicoFormUrl: undefined,
};
