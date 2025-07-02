import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HardwareDiscountFacade } from './hardware-discount.facade';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { loadHardwareDiscount } from './hardware-discount.actions';
import { HardwareDiscountDatalayerService } from '../services/hardware-discount-datalayer.service';
import { HardwareDiscountDatalayerEvent } from '../entities/hardware-discount.interface';
import { DataLayerAttributes } from '@telenet/ng-lib-datalayer';

describe('HardwareDiscountFacade', () => {
  let facade: HardwareDiscountFacade;
  let store$: MockStore;
  let hardwareDiscountDatalayerService: HardwareDiscountDatalayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideMockStore(), { provide: 'Window', useValue: {} }],
    });

    facade = TestBed.inject(HardwareDiscountFacade);
    hardwareDiscountDatalayerService = TestBed.inject(HardwareDiscountDatalayerService);
    store$ = TestBed.inject(MockStore);
    jest.spyOn(store$, 'dispatch');
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  describe('loadHardwareDiscount', () => {
    it('should call store with loadHardwareDiscount action', () => {
      facade.loadHardwareDiscount();
      expect(store$.dispatch).toHaveBeenCalledWith(loadHardwareDiscount());
    });
  });

  describe('sendDatalayerEvent', () => {
    it('should send datalayer event and attributes to hardwareDiscount datalayer service', () => {
      const event = {} as HardwareDiscountDatalayerEvent;
      const attributes = {} as DataLayerAttributes;
      jest.spyOn(hardwareDiscountDatalayerService, 'sendDataLayerEventWithAttributes');
      facade.sendDatalayerEvent(event, attributes);
      expect(hardwareDiscountDatalayerService.sendDataLayerEventWithAttributes).toHaveBeenCalledWith(event, attributes);
    });
  });
});
