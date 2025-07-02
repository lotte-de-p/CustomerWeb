import { ErrorRedirectUrlEnum } from '../enums/error.enum';
import { ErrorObject } from '../interfaces/error.interface';

export const OrderCorrectionTitlePrefix = 'ng.sales-checkout.title.order-correction-';
export const OrderCorrectionMessagePrefix = 'ng.sales-checkout.text.order-correction-';
export const OrderCorrectionButtonPrefix = 'ng.sales-checkout.button.order-correction-';
export const CustomerIncorrectStatus: ErrorObject = {
  key: 'OC-0001',
  titleKey: 'blocked-status-title',
  descriptionKey: 'blocked-status-description',
  buttonTextKey: 'blocked-status',
  type: ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL,
  description: 'Customer has incorrect status',
};

export const CustomerHasBadCreditClassification: ErrorObject = {
  key: 'OC-0002',
  titleKey: 'blocked-status-title',
  descriptionKey: 'blocked-status-description',
  buttonTextKey: 'blocked-status',
  type: ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL,
  description: 'Customer has bad credit classification',
};
