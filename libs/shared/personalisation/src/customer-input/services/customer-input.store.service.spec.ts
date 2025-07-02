import { CustomerInputStoreService } from './customer-input.store.service';
import { DataLayerService } from '@telenet/ng-lib-datalayer';
import { NgZone } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ContexthubConstants } from '@telenet/ng-lib-page';

describe('CustomerInputStoreService', () => {
  let customerInputStoreService: CustomerInputStoreService, dataLayerService: DataLayerService, ngZone: NgZone;
  const FIBER_CHECK = 'fiberCheck';

  function mockWindowContextHub() {
    const callbacks = {};
    const mockEventing = {
      once: (storeEvent: string, callback: unknown) => {
        callbacks[storeEvent] = callback;
      },
    };

    const mockContextHubStore = {
      name: 'customerinput',
      eventing: mockEventing,
      getData: () => {
        return {};
      },
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      updateStoreData: () => {},
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
    customerInputStoreService = new CustomerInputStoreService(ngZone, window, dataLayerService);
  });

  describe('updateStoreData', () => {
    it('should call update on contexthub store if it exists with the given address', (done) => {
      const address = {
        zipcode: '2180',
        subMunicipality: 'Ekeren',
        street: 'Onze-Lieve-Vrouwstraat',
        houseNumber: '55',
        addressGeoId: 'addressGeoId',
        fiberConnectable: true,
      };

      jest.spyOn(window[ContexthubConstants.CONTEXTHUB].getStore(), 'updateStoreData');

      customerInputStoreService.enrichStoreData(FIBER_CHECK, address);

      expect(window[ContexthubConstants.CONTEXTHUB].getStore().updateStoreData).toHaveBeenCalledWith(
        expect.objectContaining({ fiberCheck: address }),
        true
      );

      done();
    });

    it('should call update on contexthub store if it exists with address undefined', (done) => {
      jest.spyOn(window[ContexthubConstants.CONTEXTHUB].getStore(), 'updateStoreData');

      customerInputStoreService.enrichStoreData(FIBER_CHECK, undefined);

      expect(window[ContexthubConstants.CONTEXTHUB].getStore().updateStoreData).toHaveBeenCalledWith(
        expect.objectContaining({ fiberCheck: undefined }),
        true
      );

      done();
    });
  });
});
