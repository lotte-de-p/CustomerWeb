import { TestBed } from '@angular/core/testing';
import { DataLayerAttributes, DataLayerService } from '@telenet/ng-lib-datalayer';
import { Category, EventInfo } from 'udl';
import { HardwareDiscountDatalayerService } from './hardware-discount-datalayer.service';
import { HardwareDiscountDatalayerEvent } from '../entities/hardware-discount.interface';

describe('SearchResultsDatalayerService', () => {
  let service: HardwareDiscountDatalayerService;
  let dataLayerService: DataLayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataLayerService, { provide: 'Window', useValue: { window, udlObjectName: 'digitalData' } }],
    });
    service = TestBed.inject(HardwareDiscountDatalayerService);
    dataLayerService = TestBed.inject(DataLayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('initDataLayer', () => {
    it('should initialise the datalayerService', () => {
      jest.spyOn(dataLayerService, 'init');

      service.initDataLayer();

      expect(dataLayerService.init).toHaveBeenCalled();
    });
  });

  describe('sendDataLayerEventWithAttributes', () => {
    it('should send event to datalayer with eventInfo category and attributes', () => {
      const mockEventInfo = {} as EventInfo;
      const mockCategory = {} as Category;
      jest.spyOn(dataLayerService, 'createEventInfo').mockReturnValue(mockEventInfo);
      jest.spyOn(dataLayerService, 'createCategory').mockReturnValue(mockCategory);
      jest.spyOn(dataLayerService, 'addEvent');

      const mockEvent = {
        eventName: 'use discount clicked',
        eventType: 'click',
      } as HardwareDiscountDatalayerEvent;

      const mockAttributes = {} as DataLayerAttributes;

      service.sendDataLayerEventWithAttributes(mockEvent, mockAttributes);

      expect(dataLayerService.addEvent).toHaveBeenCalledWith(mockEventInfo, mockAttributes, mockCategory);
    });
  });
});
