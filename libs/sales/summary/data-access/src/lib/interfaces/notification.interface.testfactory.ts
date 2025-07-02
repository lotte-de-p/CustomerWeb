// create a factory for the notification.interface.ts using testfactory
import { makeFactory } from 'factory.ts';
import { SummaryNotification } from './notification.interface';

export const summaryNotificationFactory = makeFactory<SummaryNotification>({
  weight: 1,
  message: 'test message',
  type: 'error',
});
