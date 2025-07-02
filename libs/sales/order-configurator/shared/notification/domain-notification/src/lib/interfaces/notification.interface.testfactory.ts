import { Factory } from 'fishery';
import { Notification } from './notification.interface';

export const notificationTestfactory = Factory.define<Notification>(() => {
  return {
    title: 'Notification',
    message: 'This is a message',
    closeable: true,
  };
});
