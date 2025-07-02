import { LoginDetails } from '@telenet/ng-lib-ocapi';
import { PricedCphOverview } from '../model/priced-cph-data.model';
import { Notification } from '../model/notification.model';

export interface PricedCphStateModel {
  loginDetails?: LoginDetails;
  overview?: PricedCphOverview[];
  isLoggedIn: boolean;
  notification?: Notification;
}

export const defaultState: PricedCphStateModel = {
  loginDetails: undefined,
  overview: undefined,
  isLoggedIn: false,
};
