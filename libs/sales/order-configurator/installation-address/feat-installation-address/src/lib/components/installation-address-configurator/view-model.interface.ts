import { Observable } from 'rxjs';
import { InstallationAddress } from '@sales/order-configurator/domain-installation-address';

export interface ViewModel {
  stepImage: string;
  addresses: Observable<InstallationAddress[] | undefined>;
  selectedAddress: Observable<InstallationAddress | undefined>;
  manuallyAddedAddress: Observable<InstallationAddress | undefined>;
}
