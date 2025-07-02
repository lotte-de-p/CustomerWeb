import { InstallationAddressInterface } from '@sales/address/data-access';
import { Observable } from 'rxjs';

export interface ViewModel {
  addresses: Observable<InstallationAddressInterface[] | undefined>;
  editableAddress: Observable<InstallationAddressInterface | undefined>;
}
