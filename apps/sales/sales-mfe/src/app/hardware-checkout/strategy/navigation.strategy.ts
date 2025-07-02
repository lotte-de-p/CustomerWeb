import { EventStrategy } from '../interfaces/event-strategy.interface';
import { Observable, of } from 'rxjs';
import { EventInterface, EventTypeEnum } from '@sales/events/data-access';
import { HardwareCheckoutFacade } from '../facades/hardware-checkout.facade';

export class NavigationStrategy implements EventStrategy {
  constructor(
    private readonly hardwareCheckoutFacade: HardwareCheckoutFacade,
    private readonly event: EventInterface
  ) {}

  showLoader(): boolean {
    return false;
  }

  execute(): Observable<boolean> {
    let navigationState = true;
    if (this.event.eventType === EventTypeEnum.HIDE_NAVIGATION) {
      navigationState = false;
    }
    this.hardwareCheckoutFacade.setNavigationState(navigationState);
    return of(false);
  }
}
