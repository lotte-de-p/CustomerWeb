import { Injector } from '@angular/core';
import { Observable } from 'rxjs';

export type ValidationFunction = (injector?: Injector) => Observable<boolean>;

export interface Notification {
  type: NotificationTypeEnum;
  labelKey: string;

  shouldShow: ValidationFunction;
}

export enum NotificationTypeEnum {
  INFO,
  ERROR,
  WARNING,
}
