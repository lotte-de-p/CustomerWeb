import { EventBusService, EventPayload } from './event-bus.service';
import { filter } from 'rxjs/operators';

describe('EventBusService', () => {
  let service: EventBusService;

  beforeEach(() => {
    service = new EventBusService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should emit an event', () => {
    const payload: EventPayload = { name: 'TestEvent', data: 'TestData' };

    service.emit(payload);

    service
      .on(payload.name)
      .pipe(filter((data) => data === payload.data))
      .subscribe((data) => {
        expect(data).toBe(payload.data);
      });
  });

  it('should react to an event', (done) => {
    const payload: EventPayload = { name: 'TestEvent', data: 'TestData' };

    service
      .on(payload.name)
      .pipe(filter((data) => data === payload.data))
      .subscribe((data) => {
        expect(data).toBe(payload.data);
        done();
      });

    service.emit(payload);
  });
});
