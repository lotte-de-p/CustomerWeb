import { SummaryNotification } from '../interfaces/notification.interface';

export const paymentErrorNotification: SummaryNotification = {
  weight: 1,
  message: 'ng.sales-checkout.lbl.error.ingenico-decline-errorfield',
  type: 'error',
};

export const contractGenerationErrorNotification: SummaryNotification = {
  weight: 1,
  message: 'ng.sales-checkout.lbl.error.contract-generation-errorfield',
  type: 'error',
};
