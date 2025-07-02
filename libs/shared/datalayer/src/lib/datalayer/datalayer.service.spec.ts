import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DataLayerService } from './datalayer.service';
import * as udl from 'udl';
import { AnalyticsCallFireStrategyEnum, Cart, Category, DataLayer, EventInfo, Price } from 'udl';
import { ErrorMessage, MessageService } from '@telenet/ng-lib-message';
import { EventNameEnum } from './enums/event-name.enum';

const EVENT_A = 'eventName-A';
const EVENT_TYPE_A = 'eventType-A';
const MESSAGE_GROUP = 'message-group';
describe('DataLayerService', () => {
  let dataLayerService: DataLayerService, messageService: MessageService, dataLayer: DataLayer;
  let windowSpy: jest.SpyInstance;
  const originalWindow = { ...window };

  beforeEach(() => {
    originalWindow.sessionStorage.setItem('udl.logging', 'enable');
    windowSpy = jest.spyOn(global, 'window', 'get');
    windowSpy.mockImplementation(() => ({
      ...originalWindow,
      isSatelliteLoaded: true,
      _satellite: {
        track: () => {
          console.log('rule invoked');
        },
      },
      udlObjectName: 'digitalData',
      digitalData: {
        'version ': '1.0',
        environment: 'dvp',
        applicationID: 'Telenet',
        page: { pageInfo: { language: 'nl' } },
        component: [
          {
            componentInfo: {
              componentID: 'aff-base-be/components/care/invoice/nc/invoice-overview',
              componentName: 'invoice-overview',
              componentInstanceID: 'component_instance_1/root/invoice-overview',
            },
            category: {
              primaryCategory: 'care',
              subCategory1: 'invoices and payments',
            },
          },
          {
            componentInfo: {
              componentID: 'aff-base-be/components/general/card',
              componentName: 'card',
              componentInstanceID: 'component_instance_1/root/card',
            },
          },
        ],
      },
    }));

    TestBed.configureTestingModule({
      providers: [DataLayerService, MessageService, { provide: 'Window', useValue: windowSpy.getMockImplementation() }],
      imports: [HttpClientTestingModule],
    });

    dataLayerService = TestBed.inject(DataLayerService);
    messageService = TestBed.inject(MessageService);
    dataLayerService['dataLayer'] = DataLayer.create();
    dataLayer = dataLayerService.getDataLayer();
  });

  describe('init', () => {
    it('should create an instance of udl.datalayer', () => {
      jest.spyOn(DataLayer, 'create');
      jest.spyOn(dataLayer, 'getComponents');

      const actual = dataLayerService.init();

      expect(actual).toBe(true);
    });
  });

  describe('createCategory', () => {
    it('should create a category if primary category is supplied as input', () => {
      const category: Category = dataLayerService.createCategory('primaryCategory');
      expect(category.getPrimaryCategory()).toEqual('primaryCategory');
    });
    it('should create a category if primary category and subCate4gory1 are supplied as input', () => {
      const category: Category = dataLayerService.createCategory('primaryCategory', 'subCategory1');
      expect(category.getPrimaryCategory()).toEqual('primaryCategory');
      expect(category.getSubCategory1()).toEqual('subCategory1');
    });
  });

  describe('addPageEvent', () => {
    it('should create a page and set the page in the datalayer with the correct pageID', () => {
      jest.spyOn(dataLayer, 'getApplicationID').mockReturnValue('brol');

      dataLayerService.addPageEvent('pageID');

      const actual = dataLayerService.getDataLayer();

      expect(actual.getPage().getPageInfo().getPageName()).toBe('pageID');
      expect(actual.getPage().getPageInfo().getPageID()).toBe('pageID');
      expect(actual.getPage().getPageInfo().getLanguage()).toBe('nl');
    });

    it('should create a page and set the page in the datalayer with the correct pageID and attributes', () => {
      dataLayerService.addPageEvent('pageID', { itemName: 'random', intent: 'marketing' });

      const actual = dataLayerService.getDataLayer();

      expect(actual.getPage().getPageInfo().getPageName()).toBe('pageID');
      expect(actual.getPage().getPageInfo().getPageID()).toBe('pageID');
      expect(actual.getPage().getPageInfo().getLanguage()).toBe('nl');
      expect(actual.getPage().getAttribute('itemName')).toBe('random');
      expect(actual.getPage().getAttribute('intent')).toBe('marketing');
    });

    it('should create a page and set the page in the datalayer with the correct pageID when empty attributes passed', () => {
      dataLayerService.addPageEvent('pageID', {});

      const actual = dataLayerService.getDataLayer();

      expect(actual.getPage().getPageInfo().getPageName()).toBe('pageID');
      expect(actual.getPage().getPageInfo().getPageID()).toBe('pageID');
      expect(actual.getPage().getPageInfo().getLanguage()).toBe('nl');
    });
  });

  describe('addStepViewEvent', () => {
    it('should call the addStepViewEvent of dataLayerService with stepId', () => {
      dataLayerService.init();

      jest.spyOn(dataLayerService, 'createEventInfo');

      dataLayerService.addStepViewEvent({ stepId: 'xx' });

      expect(dataLayerService.createEventInfo).toHaveBeenCalledWith(EventNameEnum.EVENT_NAME_VIEW_STEP);
    });
  });

  describe('createEventInfo', () => {
    it('should create an eventInfo object', () => {
      const eventInfo: EventInfo = dataLayerService.createEventInfo(EVENT_A, EVENT_TYPE_A, ['msgGrp']);

      expect(eventInfo.getEventName()).toEqual(EVENT_A);
      expect(eventInfo.getType()).toEqual(EVENT_TYPE_A);
      expect(eventInfo.getEventStatus()).toEqual('success');
      expect(eventInfo.getEventStatusMessage()).toEqual('');
      expect(eventInfo.getTimestamp()).toBeDefined();
    });

    it('should create an eventInfo object if messageGroup[] is not passed', () => {
      const eventInfo: EventInfo = dataLayerService.createEventInfo(EVENT_A, EVENT_TYPE_A);

      expect(eventInfo.getEventName()).toEqual(EVENT_A);
      expect(eventInfo.getType()).toEqual(EVENT_TYPE_A);
      expect(eventInfo.getEventStatus()).toEqual('');
      expect(eventInfo.getEventStatusMessage()).toEqual('');
      expect(eventInfo.getTimestamp()).toBeDefined();
    });

    it('should create an eventInfo object with failed status if there is exception', () => {
      jest.spyOn(messageService, 'hasErrorMessages').mockReturnValue(true);
      messageService.addMessage(new ErrorMessage('msgGrp', 'abc'));

      const eventInfo: EventInfo = dataLayerService.createEventInfo(EVENT_A, EVENT_TYPE_A, ['msgGrp']);

      expect(eventInfo.getEventName()).toEqual(EVENT_A);
      expect(eventInfo.getType()).toEqual(EVENT_TYPE_A);
      expect(eventInfo.getEventStatus()).toEqual('failed');
      expect(eventInfo.getEventStatusMessage()).toEqual('abc');
      expect(eventInfo.getTimestamp()).toBeDefined();
    });
  });

  describe('createEvent', () => {
    it('should create an Event object and add it to the datalayer', () => {
      const event = dataLayerService.createEvent({
        eventInfo: new udl.EventInfo({ eventName: 'myevent' }),
        attributes: {},
      });

      expect(event.getEventInfo().getEventName()).toEqual('myevent');
    });

    it('should create an Event object with strategy', () => {
      const event = dataLayerService.createEvent({
        eventInfo: new udl.EventInfo({ eventName: 'myevent' }),
        attributes: {},
        strategy: AnalyticsCallFireStrategyEnum.FIRE_ON_NEXT_PAGE,
      });

      expect(event.getEventInfo().getEventName()).toEqual('myevent');
      expect(event.getStrategy()).toEqual(AnalyticsCallFireStrategyEnum.FIRE_ON_NEXT_PAGE);
    });
  });

  describe('sendEvent', () => {
    it('should send event to datalayer based on event properties', () => {
      const addEventSpy = jest.spyOn(dataLayer, 'addEvent');
      dataLayerService.sendEvent({
        eventInfo: new udl.EventInfo({ eventName: 'myevent' }),
        attributes: {},
      });

      const event = addEventSpy.mock.calls[0][0];
      expect(dataLayer.addEvent).toHaveBeenCalledTimes(1);
      expect(event.getEventInfo().getEventName()).toBe('myevent');
    });

    it('should send event with straetgy to datalayer based on event properties', () => {
      const addEventSpy = jest.spyOn(dataLayer, 'addEvent');
      dataLayerService.sendEvent({
        eventInfo: new udl.EventInfo({ eventName: 'myevent' }),
        attributes: {},
        strategy: AnalyticsCallFireStrategyEnum.FIRE_ON_PAGE_RELOAD,
      });

      const event = addEventSpy.mock.calls[0][0];
      expect(dataLayer.addEvent).toHaveBeenCalledTimes(1);
      expect(event.getEventInfo().getEventName()).toBe('myevent');
      expect(event.getStrategy()).toBe(AnalyticsCallFireStrategyEnum.FIRE_ON_PAGE_RELOAD);
    });
  });

  describe('getStatus', () => {
    it('should call the getStatus if no error then return success', () => {
      const actual = dataLayerService['getStatus']([MESSAGE_GROUP]);
      expect(actual).toEqual('success');
    });

    it('should call the getStatus if has error then return failed', () => {
      jest.spyOn(messageService, 'hasErrorMessages').mockReturnValue(true);

      const actual = dataLayerService['getStatus']([MESSAGE_GROUP]);

      expect(messageService.hasErrorMessages).toHaveBeenCalledWith(MESSAGE_GROUP);
      expect(actual).toEqual('failed');
    });

    it('should call the getStatus and return empty if messageGroup is empty array', () => {
      const actual = dataLayerService['getStatus']([]);
      expect(actual).toEqual('');
    });
  });

  describe('getStatusMessage', () => {
    it('should call the getStatusMessage if no any match then return empty', () => {
      jest.spyOn(messageService, 'hasErrorMessages').mockReturnValue(true);
      messageService.addMessage(new ErrorMessage('message-group-1', 'abc'));
      messageService.addMessage(new ErrorMessage('message-group-2', 'xyz'));

      const actual = dataLayerService['getStatusMessage'](['message-group-1', 'message-group-2']);

      expect(actual).toBe('abc,xyz');
    });

    it('should call the getStatusMessage and return empty if messageGroup is empty array', () => {
      const actual = dataLayerService['getStatusMessage']([]);
      expect(actual).toEqual('');
    });
  });

  describe('createCart', () => {
    it('should create a Cart object', () => {
      const price: Price = new Price();

      const cart: Cart = dataLayerService.createCart('cartId', price);

      expect(cart.getCartID()).toEqual('cartId');
      expect(cart.getPrice()).toEqual(price);
    });
  });

  describe('setCart', () => {
    it('should set the Cart object to the passed value', () => {
      const cart: Cart = new Cart();

      dataLayerService.setCart(cart);
      const actual = dataLayerService.getDataLayer().getCart();

      expect(actual).toEqual(cart);
    });
  });

  describe('rollbackStepIdToParent', () => {
    it('should rollback parent step id', fakeAsync(() => {
      const datalayer = udl.DataLayer.create();
      const page = new udl.Page();
      const pageInfo = new udl.PageInfo();
      pageInfo.setStepId('MyStep');
      page.setAttributes(pageInfo);
      datalayer.setPage(page);
      tick(page.getForceResolvePromiseAfterDelay());
      const promise: Promise<boolean> = new Promise<boolean>((resolve) => {
        resolve(true);
      });
      jest.spyOn(dataLayerService, 'getAnalyticsPromises').mockReturnValue([promise]);
      jest.spyOn(dataLayerService, 'getDataLayer').mockReturnValue(datalayer);
      dataLayerService.rollbackStepIdToParent('stepId');
      tick(100);
      expect(dataLayerService.getDataLayer).toHaveBeenCalled();
      const actual = dataLayerService.getDataLayer().getPage().getPageInfo().getStepId();
      expect(actual).toBe('stepId');
    }));
  });
  afterEach(() => {
    TestBed.resetTestingModule();
    windowSpy.mockRestore();
  });
});
