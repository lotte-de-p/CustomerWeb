import { Notification } from '../model/notification.model';
import { PricedCphOverview } from '../model/priced-cph-data.model';
import { LoginDetails } from '@telenet/ng-lib-ocapi';

export class Initialize {
  static readonly type = '[PricedCPH] Initialise the data';
}

export class SetNotificationIfNotSet {
  static readonly type = '[PricedCPH] Set notification';

  constructor(public notification: Notification) {}
}

export class SetLoginDetails {
  static readonly type = '[PricedCPH] Set login details';

  constructor(public loginDetails: LoginDetails) {}
}

export class SetOverview {
  static readonly type = '[PricedCPH] Set overview';

  constructor(public overview: PricedCphOverview[]) {}
}
