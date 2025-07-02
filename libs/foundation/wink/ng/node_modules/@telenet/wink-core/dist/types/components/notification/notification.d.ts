import { NotificationType } from './models/notification.types';
export declare class Notification {
    appearance: NotificationType;
    hasCloseIcon: boolean;
    isNotificationVisible: boolean;
    private readonly iconsNamesMap;
    private readonly closeNotification;
    render(): any;
}
