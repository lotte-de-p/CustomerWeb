import { EventStrategy } from '../../interfaces/event-strategy.interface';
import { Observable } from 'rxjs';
import { StrategyUtil } from '../../utils/strategy.util';
import { map, take } from 'rxjs/operators';
import { HardwareCheckoutFacade } from '../../facades/hardware-checkout.facade';
import { HardwareCheckoutError } from '../../classes/hardware-checkout-error.class';
import { SalesOrderNotSet } from '../../constants/errors.constants';

export class DeliveryStepFinishedStrategy implements EventStrategy {
  constructor(private readonly hardwareCheckoutFacade: HardwareCheckoutFacade) {}

  showLoader(): boolean {
    return true;
  }

  execute(): Observable<boolean> {
    return this.hardwareCheckoutFacade.salesOrderFromState$.pipe(
      take(1),
      map((salesOrder) => {
        if (salesOrder === undefined) {
          throw new HardwareCheckoutError(SalesOrderNotSet);
        }
        return salesOrder;
      }),
      StrategyUtil.updateDeliveryChars(this.hardwareCheckoutFacade),
      map(() => true)
    );
  }
}
