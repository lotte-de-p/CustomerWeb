import { Notification, NotificationTypeEnum } from './notification.model';
import { Observable, of } from 'rxjs';
import { Injector } from '@angular/core';
import { map } from 'rxjs/operators';
import { PricedCphConstants } from '../util/priced-cph.constants';
import { CafeContactDetailsService } from '../../../http/cafe/contact-details/services/cafe-contact-details.service';

export class BusinessCustomerNotification implements Notification {
  labelKey = 'business-customer';
  type = NotificationTypeEnum.ERROR;

  shouldShow(injector?: Injector): Observable<boolean> {
    const cafeContactDetailsService = injector?.get<CafeContactDetailsService>(CafeContactDetailsService);

    return (
      cafeContactDetailsService
        ?.getContactDetails(PricedCphConstants.MESSAGE_GROUP)
        .pipe(map((cafeContactDetails) => cafeContactDetails && cafeContactDetails.isOrganization())) || of(false)
    );
  }
}
