import { EventStrategy } from '../interfaces/event-strategy.interface';
import { Observable } from 'rxjs';
import { ErrorEventBody } from '@sales/events/data-access';

export class ErrorStrategy implements EventStrategy {
  constructor(private readonly errorEventBody: ErrorEventBody) {}

  showLoader(): boolean {
    return false;
  }

  execute(): Observable<boolean> {
    throw this.errorEventBody.error;
  }
}
