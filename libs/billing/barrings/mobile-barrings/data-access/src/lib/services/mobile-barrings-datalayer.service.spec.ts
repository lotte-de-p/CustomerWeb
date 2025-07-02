import { TestBed } from '@angular/core/testing';
import { DataLayerService } from '@telenet/ng-lib-datalayer';
import { Category, EventInfo } from 'udl';
import { MobileBarringsDatalayerService } from './mobile-barrings-datalayer.service';
import { MobileBarringsDatalayer } from '../entities/mobile-barrings.interface';

describe('SearchResultsDatalayerService', () => {
  let service: MobileBarringsDatalayerService;
  let dataLayerService: DataLayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataLayerService, { provide: 'Window', useValue: { window, udlObjectName: 'digitalData' } }],
    });
    service = TestBed.inject(MobileBarringsDatalayerService);
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
        eventName: 'barring settings changed',
        eventType: 'change-mobile-service-settings',
        attributeName: 'general',
      } as MobileBarringsDatalayer;

      const mockAttributes = {
        itemName: 'general',
      };

      service.sendDataLayerEventWithAttributes(mockEvent);

      expect(dataLayerService.addEvent).toHaveBeenCalledWith(mockEventInfo, mockAttributes, mockCategory);
    });
  });
});
