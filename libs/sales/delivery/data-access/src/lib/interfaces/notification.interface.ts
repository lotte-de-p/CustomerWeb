export interface DeliveryNotification {
  weight: number;
  title: string | undefined;
  message: string;
  type: 'notification';
}
