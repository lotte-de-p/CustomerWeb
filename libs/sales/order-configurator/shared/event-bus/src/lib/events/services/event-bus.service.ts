import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export interface EventPayload {
  name: string;
  data?: unknown;
}

@Injectable({
  providedIn: 'root',
})
export class EventBusService {
  private readonly eventSubject = new Subject<EventPayload>();

  emit(event: EventPayload): void {
    this.eventSubject.next(event);
  }

  on(eventName: string): Observable<unknown> {
    return this.eventSubject.asObservable().pipe(
      filter((event) => event.name === eventName),
      map((event) => event.data)
    );
  }
}
