import { createAction, props } from '@ngrx/store';
import { SummaryPersonalInfo } from '../interfaces/personal-info.interface';
import { DeliveryInfo, DeliveryInfoAddress, DeliveryPersonalInfo } from '../interfaces/delivery-info.interface';
import { BillingAddress } from '../interfaces/invoice-info.interface';
import { DepreciationItem } from '../interfaces/depriciation-item.interface';
import { SummaryOrderItem, SummaryPrices } from '../interfaces/order-item.interface';
import { SummaryNotification } from '../interfaces/notification.interface';
import { IngenicoRequestForm } from '@sales/shared/data-access';

export const setSummaryPersonalInfo = createAction(
  '[summary] set personal info',
  props<{ personalInfo: SummaryPersonalInfo }>()
);

export const setSummaryDeliveryAddress = createAction(
  '[summary] set delivery address',
  props<{ deliveryAddress: DeliveryInfoAddress }>()
);

export const setSummaryDeliveryInfo = createAction(
  '[summary] set delivery info',
  props<{ deliveryInfo: DeliveryInfo }>()
);

export const setSummaryDeliveryPersonalInfo = createAction(
  '[summary] set delivery personal info',
  props<{ personalInfo: DeliveryPersonalInfo }>()
);

export const setSummaryInvoiceInfo = createAction(
  '[summary] set invoice info',
  props<{ billingAddress: BillingAddress }>()
);

export const setSummaryOrderItems = createAction(
  '[summary] set order items',
  props<{ orderItems: SummaryOrderItem[] }>()
);

export const setSummaryPrices = createAction('[summary] set prices', props<{ prices: SummaryPrices }>());

export const setSummaryDepreciationItems = createAction(
  '[summary] set depreciation Items',
  props<{ depreciationItems: DepreciationItem[] }>()
);

export const setSummaryContractSummaryRequired = createAction(
  '[summary] set if the contract summary is required',
  props<{ contractSummaryRequired: boolean }>()
);

export const setSummaryIngenicoForm = createAction(
  '[summary] set ingenico request form',
  props<{ ingenicoForm: IngenicoRequestForm }>()
);
export const setSummaryIngenicoFormReady = createAction(
  '[summary] set ingenico request form ready',
  props<{ ingenicoFormReady: boolean }>()
);
export const setIngenicoFormUrl = createAction(
  '[summary] set ingenico form url',
  props<{ ingenicoFormUrl: string | undefined }>()
);
export const setTermsAndConditionsUrl = createAction(
  '[summary] set Terms and Conditions url',
  props<{ termsAndConditionsUrl: string | undefined }>()
);

export const addSummaryDeliveryNotification = createAction(
  '[summary] add delivery notification',
  props<{ notification: SummaryNotification }>()
);

export const addSummaryGeneralNotification = createAction(
  '[summary] add general notification',
  props<{ notification: SummaryNotification }>()
);
