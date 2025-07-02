import { EventStrategy } from '../interfaces/event-strategy.interface';
import { Observable, of } from 'rxjs';
export class WaitingForStateUpdateStrategy implements EventStrategy {
  showLoader(): boolean {
    return true;
  }
  execute(): Observable<boolean> {
    return of(false);
  }
}
