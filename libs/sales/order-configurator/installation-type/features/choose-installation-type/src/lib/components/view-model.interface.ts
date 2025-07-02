import { DeliveryMethod, InstallationTypes } from '@sales/order-configurator/installation-type/domain';
import { Observable } from 'rxjs';

export interface ViewModel {
  installationTypes: Observable<InstallationTypes>;
  selectedInstallationTypeOption: Observable<DeliveryMethod | undefined>;
}
