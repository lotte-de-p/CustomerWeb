import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DeliveryState } from '../+state/delivery.state';
import { deliveryAddress, deliveryItems, notifications, personalInfo } from '../+state/delivery.selectors';
import { DeliveryAddress } from '../interfaces/delivery-address.interface';
import { PersonalInfo } from '../interfaces/personal-info.interface';
import { DeliveryItem } from '../interfaces/delivery-items.interface';
import { DeliveryNotification } from '../interfaces/notification.interface';

@Injectable({ providedIn: 'root' })
export class DeliveryFacade {
  deliveryAddress$: Observable<DeliveryAddress | undefined> = this.store.select(deliveryAddress);
  personalInfo$: Observable<PersonalInfo | undefined> = this.store.select(personalInfo);
  deliveryItems$: Observable<DeliveryItem[] | undefined> = this.store.select(deliveryItems);
  notifications$: Observable<DeliveryNotification[]> = this.store.select(notifications);

  constructor(private readonly store: Store<DeliveryState>) {}
}
