import { EventStrategy } from '../interfaces/event-strategy.interface';
import { Observable, of } from 'rxjs';

export class NoActionStrategy implements EventStrategy {
  constructor(private readonly shouldShowLoader = false) {}

  showLoader(): boolean {
    return this.shouldShowLoader;
  }

  execute(): Observable<boolean> {
    return of(false);
  }
}
