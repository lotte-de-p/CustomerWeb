import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import {
  DataLayerAttributes,
  DataLayerService,
  DataLayerServiceProvider,
  dataLayerServiceProviderFactory,
} from '@telenet/ng-lib-datalayer';
import { HardwareCheckoutDataLayerService } from './data-layer.service';
import { Cart, Category, DirectCallLabelEnum, EventInfo, Page, Transaction } from 'udl';
import { APP_INITIALIZER, Injectable } from '@angular/core';
import { AnalyticsInterface, AnalyticsTypeEnum, EventInterface, EventTypeEnum } from '@sales/events/data-access';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { analyticsAttributes, cart, stepAnalytics, StepAnalyticsInfo } from '@sales/hardware-checkout/data-access';
import { summaryEventStepKey } from '@sales/summary/feat-summary';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { thankYouEventStepKey } from '@sales/thank-you/feat-thank-you';
import { UrlService } from '@telenet/ng-lib-page';
import * as udl from 'udl';
import { ErrorMessage, MessageService } from '@telenet/ng-lib-message';
import { PrimaryCategories } from '../constants/analytics/analytics.constants';

@Injectable({ providedIn: 'root' })
export class MockUrlService {
  getCurrentUrl = jest.fn();
}
describe('DataLayerService', () => {
  const analyticsTestAttributes: DataLayerAttributes = { intent: 'this is a test' };
  let analyticsTestCart: Cart | undefined;
  let stepAnalyticsInfo: StepAnalyticsInfo;
  let hardwareCheckoutDataLayerService: HardwareCheckoutDataLayerService;
  let dataLayerService: DataLayerService;
  let messageService: MessageService;
  let store$: MockStore;

  let addStepViewSpy: jest.SpyInstance<Promise<boolean>, [attributes: DataLayerAttributes], boolean>,
    addEventSpy: jest.SpyInstance<
      Promise<boolean>,
      [
        eventInfo: EventInfo,
        attributes: DataLayerAttributes,
        category?: Category | undefined,
        directCallLabel?: DirectCallLabelEnum | undefined,
      ],
      boolean
    >,
    setCartSpy: jest.SpyInstance<Promise<boolean>, [cart: Cart], boolean>,
    setTransactionSpy: jest.SpyInstance<Promise<boolean>, [transaction: Transaction], boolean>,
    setPageSpy: jest.SpyInstance<Promise<boolean>, [page: Page], boolean>,
    createEventInfoSpy: jest.SpyInstance<
      EventInfo,
      [eventName: string, eventType?: string | undefined, messageGroups?: string[] | undefined],
      boolean
    >,
    addStepLoadTimeEventSpy: jest.SpyInstance<Promise<boolean>, [attributes: DataLayerAttributes], boolean>;

  let urlService: UrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [],
      providers: [
        provideMockStore(),
        DataLayerServiceProvider,
        {
          provide: APP_INITIALIZER,
          useFactory: dataLayerServiceProviderFactory,
          deps: [DataLayerServiceProvider],
          multi: true,
        },
        { provide: 'Window', useValue: window },
        {
          provide: UrlService,
          useClass: MockUrlService,
        },
      ],
    }).compileComponents();

    messageService = TestBed.inject(MessageService);
    dataLayerService = TestBed.inject(DataLayerService);

    addStepViewSpy = jest.spyOn(dataLayerService, 'addStepViewEvent');
    addEventSpy = jest.spyOn(dataLayerService, 'addEvent');
    setCartSpy = jest.spyOn(dataLayerService, 'setCart');
    setTransactionSpy = jest.spyOn(dataLayerService, 'setTransaction');
    setPageSpy = jest.spyOn(dataLayerService, 'setPage');
    addStepLoadTimeEventSpy = jest.spyOn(dataLayerService, 'addStepLoadTimeEvent');
    createEventInfoSpy = jest.spyOn(dataLayerService, 'createEventInfo');
    store$ = TestBed.inject(MockStore);

    urlService = TestBed.inject(UrlService);
    hardwareCheckoutDataLayerService = TestBed.inject(HardwareCheckoutDataLayerService);

    analyticsTestCart = new Cart();
    stepAnalyticsInfo = { startLoadTime: undefined };

    jest.spyOn(console, 'warn');
    jest.spyOn(store$, 'select').mockImplementation((selector) => {
      if (selector === analyticsAttributes) {
        return of(analyticsTestAttributes);
      }
      if (selector === cart) {
        return of(analyticsTestCart);
      }
      if (selector === stepAnalytics) {
        return of(stepAnalyticsInfo);
      }
      return of(false);
    });
    jest.spyOn(messageService, 'clearMessages');
    jest.spyOn(messageService, 'addMessage');
  });

  describe('handleAnalyticsEvent', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('should not handle events for which no analytics should be triggered', () => {
      hardwareCheckoutDataLayerService.handleAnalyticsEvent({ eventType: 'do not trigger analytics' });

      expect(addStepViewSpy).not.toHaveBeenCalled();
      expect(addEventSpy).not.toHaveBeenCalled();
      expect(setCartSpy).not.toHaveBeenCalled();
    });

    describe('setPageProperties', () => {
      it('should set page properties for residential', () => {
        jest.spyOn(urlService, 'getCurrentUrl').mockReturnValue('http://localhost:4200/residential/nl/test');
        hardwareCheckoutDataLayerService.setPageProperties();

        expect(setPageSpy).toHaveBeenCalledWith(
          expect.objectContaining({ pageInfo: expect.objectContaining({ pageID: 'sales', pageName: 'sales' }) })
        );
      });
      it('should set page properties for business', () => {
        jest.spyOn(urlService, 'getCurrentUrl').mockReturnValue('http://localhost:4200/business/nl/test');
        hardwareCheckoutDataLayerService.setPageProperties();

        expect(setPageSpy).toHaveBeenCalledWith(
          expect.objectContaining({
            pageInfo: expect.objectContaining({ pageID: 'soho/sales', pageName: 'soho/sales' }),
          })
        );
      });
    });

    describe('STEP_LOADED event', () => {
      it('should log warning when start load time is not set', fakeAsync(() => {
        hardwareCheckoutDataLayerService.handleAnalyticsEvent({
          eventType: EventTypeEnum.STEP_LOADED,
          body: { stepKey: 'test' },
        });

        tick();

        expect(console.warn).toHaveBeenCalled();

        expect(addStepLoadTimeEventSpy).not.toHaveBeenCalled();
        expect(addEventSpy).not.toHaveBeenCalled();
        expect(setCartSpy).not.toHaveBeenCalled();
      }));
      it('should fire step-load-time event', fakeAsync(() => {
        stepAnalyticsInfo = { startLoadTime: 44 };
        hardwareCheckoutDataLayerService.handleAnalyticsEvent({
          eventType: EventTypeEnum.STEP_LOADED,
          body: { stepKey: 'test' },
        });

        tick();

        expect(console.warn).not.toHaveBeenCalled();

        expect(addStepLoadTimeEventSpy).toHaveBeenCalled();
      }));

      it('should fire stepView event for given step', fakeAsync(() => {
        hardwareCheckoutDataLayerService.handleAnalyticsEvent({
          eventType: EventTypeEnum.STEP_LOADED,
          body: { stepKey: 'test' },
        });

        tick();

        expect(addStepViewSpy).toHaveBeenCalled();
      }));
      it('should fire stepView event even if no cart available', fakeAsync(() => {
        analyticsTestCart = undefined;
        hardwareCheckoutDataLayerService.handleAnalyticsEvent({
          eventType: EventTypeEnum.STEP_LOADED,
          body: { stepKey: 'test' },
        });

        tick();

        expect(addStepViewSpy).toHaveBeenCalled();
      }));

      describe('for summaryStep', () => {
        const summaryStepLoadedEvent = {
          eventType: EventTypeEnum.STEP_LOADED,
          body: { stepKey: summaryEventStepKey },
        };

        it('should not fire setCart event if no cart available', fakeAsync(() => {
          analyticsTestCart = undefined;
          hardwareCheckoutDataLayerService.handleAnalyticsEvent(summaryStepLoadedEvent);

          tick();

          expect(setCartSpy).not.toHaveBeenCalled();
        }));
        it('should fire setCart event if cart is available', fakeAsync(() => {
          hardwareCheckoutDataLayerService.handleAnalyticsEvent(summaryStepLoadedEvent);

          tick();

          expect(setCartSpy).toHaveBeenCalled();
        }));
      });

      describe('for thankYouStep', () => {
        const thankYouStepLoaded = {
          eventType: EventTypeEnum.STEP_LOADED,
          body: { stepKey: thankYouEventStepKey },
        };

        it('should event with intent in the stepId', fakeAsync(() => {
          analyticsTestCart = undefined;
          hardwareCheckoutDataLayerService.handleAnalyticsEvent(thankYouStepLoaded);

          tick();

          expect(addStepViewSpy).toHaveBeenCalledWith(expect.objectContaining({ stepId: 'CONFIRMATION-hardware' }));
        }));
      });
    });

    describe('STEP_FINISHED event', () => {
      const summaryStepLoadedEvent = {
        eventType: EventTypeEnum.STEP_FINISHED,
        body: { stepKey: summaryEventStepKey },
      };

      it('should not fire addEvent event', fakeAsync(() => {
        hardwareCheckoutDataLayerService.handleAnalyticsEvent(summaryStepLoadedEvent);

        tick();

        expect(addStepViewSpy).not.toHaveBeenCalled();
        expect(addEventSpy).not.toHaveBeenCalled();
        expect(setCartSpy).not.toHaveBeenCalled();
      }));
    });

    describe('ANALYTICS event', () => {
      let someAnalyticsEvent: EventInterface<AnalyticsInterface>;

      beforeEach(() => {
        someAnalyticsEvent = {
          eventType: EventTypeEnum.ANALYTICS,
          body: { name: 'test name' },
        };
      });

      it('should fire by default addEvent event', fakeAsync(() => {
        hardwareCheckoutDataLayerService.handleAnalyticsEvent(someAnalyticsEvent);

        tick();

        expect(addStepViewSpy).not.toHaveBeenCalled();
        expect(addEventSpy).toHaveBeenCalled();
        expect(setCartSpy).not.toHaveBeenCalled();
      }));

      it('should fire transaction event if type is TRANSACTION and cart info is available', fakeAsync(() => {
        const someAnalyticsEvent: EventInterface<AnalyticsInterface> = {
          eventType: EventTypeEnum.ANALYTICS,
          body: { type: AnalyticsTypeEnum.TRANSACTION, name: 'test name' },
        };

        hardwareCheckoutDataLayerService.handleAnalyticsEvent(someAnalyticsEvent);

        tick();

        expect(addStepViewSpy).not.toHaveBeenCalled();
        expect(addEventSpy).not.toHaveBeenCalled();
        expect(setCartSpy).not.toHaveBeenCalled();
        expect(setTransactionSpy).toHaveBeenCalled();
      }));

      it('should log warning for TRANSACTION event if no cart info is available', fakeAsync(() => {
        analyticsTestCart = undefined;
        const someAnalyticsEvent: EventInterface<AnalyticsInterface> = {
          eventType: EventTypeEnum.ANALYTICS,
          body: { type: AnalyticsTypeEnum.TRANSACTION, name: 'test name' },
        };

        hardwareCheckoutDataLayerService.handleAnalyticsEvent(someAnalyticsEvent);

        tick();

        expect(console.warn).toHaveBeenCalled();
        expect(setTransactionSpy).not.toHaveBeenCalled();
      }));

      it('should trigger addEvent with EventInfo containing the error', () => {
        const statusMessage = 'analytics error';
        const eventInfo = new udl.EventInfo();
        eventInfo.setEventName('error-name');
        eventInfo.setType('error');
        eventInfo.setEventStatus('failed');
        eventInfo.setEventStatusMessage(statusMessage);

        const errorEvent = {
          eventType: EventTypeEnum.ANALYTICS,
          body: { type: AnalyticsTypeEnum.ERROR, name: 'test name', statusMessage: statusMessage },
        };

        createEventInfoSpy.mockReturnValue(eventInfo);
        hardwareCheckoutDataLayerService.handleAnalyticsEvent(errorEvent);

        expect(createEventInfoSpy).toHaveBeenCalledWith(errorEvent.body.name, errorEvent.body.type, [
          errorEvent.body.name,
        ]);
        expect(addEventSpy).toHaveBeenCalledWith(
          eventInfo,
          { ...analyticsTestAttributes, cart: analyticsTestCart },
          PrimaryCategories.SALES
        );
        expect(messageService.clearMessages).toHaveBeenCalledWith(errorEvent.body.name);
        expect(messageService.addMessage).toHaveBeenCalledWith(new ErrorMessage(errorEvent.body.name, statusMessage));
      });
    });
  });
});
