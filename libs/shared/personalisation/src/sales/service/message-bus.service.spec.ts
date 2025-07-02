import { TestBed } from '@angular/core/testing';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { MessageBusService } from './message-bus.service';

describe('MessageBusService', () => {
  let service: MessageBusService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
    });

    service = TestBed.inject(MessageBusService);
  });

  describe('messageBus$', () => {
    it('should be initialized', () => {
      expect(service.messageBus$).not.toBeNull();
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
