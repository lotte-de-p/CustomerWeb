import { SalesOrder } from '../../../../models/sales-order/sales-order.model';
import { ValidateOptionsCheckoutResponseInterface } from '../../../../interfaces/validate-options-checkout.interface';
export interface SalesStateModel {
  ready: boolean;
  intent: string;
  analyticsIntent: string;
  isIntentCalculated: boolean;
  salesOrder: SalesOrder;
  eSimAllowed: boolean;
  errorMessage: string;
  validateOptionsCheckout: ValidateOptionsCheckoutResponseInterface;
}

export const defaultState: SalesStateModel = {
  ready: false,
  analyticsIntent: 'default',
  intent: 'default',
  isIntentCalculated: true,
  salesOrder: {} as SalesOrder,
  eSimAllowed: false,
  errorMessage: '',
  validateOptionsCheckout: null,
};
