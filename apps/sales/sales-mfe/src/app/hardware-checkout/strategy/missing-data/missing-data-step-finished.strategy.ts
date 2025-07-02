import { Observable } from 'rxjs';
import { map, mergeMap, take } from 'rxjs/operators';
import { HardwareCheckoutError } from '../../classes/hardware-checkout-error.class';
import { UnableToUpdateCustomerAccountError } from '../../constants/errors.constants';
import { HardwareCheckoutFacade } from '../../facades/hardware-checkout.facade';
import { EventStrategy } from '../../interfaces/event-strategy.interface';

export class MissingDataStepFinishedStrategy implements EventStrategy {
  constructor(private readonly hardwareCheckoutFacade: HardwareCheckoutFacade) {}

  execute(): Observable<boolean> {
    return this.hardwareCheckoutFacade.missingData$.pipe(
      take(1),
      mergeMap((missingData) => {
        if (missingData) {
          return this.hardwareCheckoutFacade.updateCustomer({
            nationalRegistryNumber: missingData.nationalRegistryNumber,
            identityCardNumber: missingData.identityCardNumber,
            isForeignIdentity: missingData.isForeignIdentity,
          });
        }
        throw new HardwareCheckoutError(UnableToUpdateCustomerAccountError);
      }),
      map(() => true)
    );
  }

  showLoader(): boolean {
    return false;
  }
}
