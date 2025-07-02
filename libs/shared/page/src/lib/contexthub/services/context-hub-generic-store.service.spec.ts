import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ContextHubGenericStoreService } from './context-hub-generic-store.service';
import { ReplaySubject } from 'rxjs';
import { ContexthubConstants } from '../constants/contexthub.constant';
import { DataLayerService } from '@telenet/ng-lib-datalayer';
import { ContextHubStoreConfigInterface } from '../interfaces/context-hub-store-config.interface';
import { NgZone } from '@angular/core';
import { DirectCallLabelEnum } from 'udl';
import { ContextHubModelInterface } from '../interfaces/context-hub-model-interface';

const spyOn = jest.spyOn;

describe('ContextHubGenericStoreService', <T extends ContextHubModelInterface<T>>() => {
  let genericStoreService: ContextHubGenericStoreService<T>,
    dataLayerService: DataLayerService,
    storeConfig: ContextHubStoreConfigInterface<T>,
    ngZone: NgZone;

  function mockWindowContextHub() {
    const callbacks = {};
    const mockEventing: Record<string, (arg1: string, ...args: unknown[]) => void> = {
      once: (storeEvent, callback) => {
        callbacks[storeEvent] = callback;
      },
    };

    const mockContextHubStore = {
      name: 'testStoreName',
      eventing: mockEventing,
      getData: jest.fn,
      updateStoreData: jest.fn,
    };

    return {
      callbacks,
      getStore: () => mockContextHubStore,
    };
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataLayerService, { provide: 'Window', useValue: window }],
      imports: [HttpClientTestingModule],
    });

    ngZone = TestBed.inject(NgZone);
    window[ContexthubConstants.CONTEXTHUB] = mockWindowContextHub();
    dataLayerService = TestBed.inject(DataLayerService);
    storeConfig = {
      serviceName: 'testServiceName',
      storeModel: {} as T,
      storeName: 'testStoreName',
    };

    genericStoreService = new ContextHubGenericStoreService(ngZone, window, dataLayerService, storeConfig);
  });

  describe('getStoreData', () => {
    it('should return a replay subject', (done) => {
      const actual$ = genericStoreService.getStoreData();
      expect(actual$).toBeInstanceOf(ReplaySubject);

      done();
    });

    it('should make a subscription on the store eventing with the right parameters', (done) => {
      spyOn(window[ContexthubConstants.CONTEXTHUB].getStore().eventing, 'once');
      genericStoreService.getStoreData();
      expect(window[ContexthubConstants.CONTEXTHUB].getStore().eventing.once).toHaveBeenCalledWith(
        ContexthubConstants.EVENT_STORE_READY,
        expect.any(Function),
        'testStoreName_store_ready',
        true
      );
      done();
    });
  });

  describe('updateStoreData', () => {
    it('should call update on contexthub store if it exists', (done) => {
      spyOn(window[ContexthubConstants.CONTEXTHUB].getStore(), 'updateStoreData');
      genericStoreService.updateStoreData(null);
      expect(window[ContexthubConstants.CONTEXTHUB].getStore().updateStoreData).toHaveBeenCalled();

      done();
    });
  });

  describe('registerStoreEventHook', () => {
    it('should fire a data layer event when store data is loaded', (done) => {
      dataLayerService.sendEvent = jest.fn();
      dataLayerService.createEventInfo = jest.fn().mockImplementation(() => {
        return null;
      });
      dataLayerService.createCategory = jest.fn().mockImplementation(() => {
        return null;
      });

      window[ContexthubConstants.CONTEXTHUB].callbacks['store_data_loaded:testStoreName']();
      expect(dataLayerService.sendEvent).toHaveBeenCalledWith({
        eventInfo: null,
        attributes: expect.anything(),
        category: null,
        directCallLabel: DirectCallLabelEnum.STORE_DATA_LOADED,
      });

      done();
    });
  });

  describe('onStoreDataLoaded', () => {
    it('should emmit data store value when the ReplaySubject is defined', (done) => {
      const replaySubject$ = genericStoreService.getStoreData();
      spyOn(replaySubject$, 'next');

      genericStoreService.onStoreDataLoaded({} as T);
      expect(replaySubject$.next).toHaveBeenCalled();

      done();
    });
  });

  describe('enrich', () => {
    it('should throw error', (done) => {
      expect(() => {
        genericStoreService.enrich({});
      }).toThrow(new Error('Method not Supported'));

      done();
    });
  });

  describe('onLoadData', () => {
    it('should throw error', (done) => {
      expect(() => {
        genericStoreService.onLoadData();
      }).toThrow(new Error('Method not Supported'));

      done();
    });
  });
});
