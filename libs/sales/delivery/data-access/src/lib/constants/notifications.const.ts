import { DeliveryNotification } from '../interfaces/notification.interface';

export const bigItemDeliveryNotification: DeliveryNotification = {
  weight: 1,
  title: 'ng.sales-checkout.text.extra-big-item-delivery-title',
  message: 'ng.sales-checkout.text.extra-big-item-delivery-message',
  type: 'notification',
};

export const multipleItemDelivery: DeliveryNotification = {
  weight: 3,
  title: undefined,
  message: 'ng.sales-checkout.text.multiple-hardware-notification-message',
  type: 'notification',
};
