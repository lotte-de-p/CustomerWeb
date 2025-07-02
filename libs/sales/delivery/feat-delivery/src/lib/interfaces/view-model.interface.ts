import { DeliveryItem, DeliveryAddress, PersonalInfo, DeliveryNotification } from '@sales/delivery/data-access';
import { Observable } from 'rxjs';

export interface ViewModel {
  stepImage: string;
  validatePersonalInfoOnInit: boolean;
  deliveryItems$: Observable<DeliveryItem[] | undefined>;
  deliveryAddress$: Observable<DeliveryAddress | undefined>;
  personalInfo$: Observable<PersonalInfo | undefined>;
  notifications$: Observable<DeliveryNotification[]>;
}
