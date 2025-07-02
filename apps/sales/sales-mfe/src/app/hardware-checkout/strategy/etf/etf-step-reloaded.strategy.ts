import { EventStrategy } from '../../interfaces/event-strategy.interface';
import { Observable, of } from 'rxjs';
import { HardwareCheckoutFacade } from '../../facades/hardware-checkout.facade';
import { SalesOrderStateEnum } from '@sales/hardware-checkout/data-access';
import { EtfFacade } from '@sales/etf/data-access';

export class EtfStepReloadedStrategy implements EventStrategy {
  constructor(
    private readonly hardwareCheckoutFacade: HardwareCheckoutFacade,
    private readonly etfFacade: EtfFacade
  ) {}

  showLoader(): boolean {
    return true;
  }

  execute(): Observable<boolean> {
    this.hardwareCheckoutFacade.setSalesOrderState(SalesOrderStateEnum.INITIALISING);
    this.etfFacade.resetEtfState();
    return of(true);
  }
}
