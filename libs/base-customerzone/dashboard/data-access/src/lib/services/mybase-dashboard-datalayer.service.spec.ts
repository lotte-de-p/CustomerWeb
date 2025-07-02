import { TestBed } from '@angular/core/testing';
import { MyBaseDashboardDatalayerService } from './mybase-dashboard-datalayer.service';
import { DataLayerService } from '@telenet/ng-lib-datalayer';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { Category, EventInfo } from 'udl';
import { MyBaseDashboardDatalayer } from '../entities/mybase-dashboard-datalayer.interface';

describe('SearchResultsDatalayerService', () => {
  let service: MyBaseDashboardDatalayerService;
  let dataLayerService: DataLayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataLayerService, { provide: 'Window', useValue: window }],
    });
    service = TestBed.inject(MyBaseDashboardDatalayerService);
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
        eventName: 'status card clicked',
        eventType: 'click',
        attributeName: 'billing',
        attributeData: 'payment overdue',
        attributeGroup: 'pay now button',
      } as MyBaseDashboardDatalayer;

      const mockAttributes = {
        itemName: 'billing',
        itemData: 'payment overdue',
        itemGroup: 'pay now button',
      };

      service.sendDataLayerEventWithAttributes(mockEvent);

      expect(dataLayerService.addEvent).toHaveBeenCalledWith(mockEventInfo, mockAttributes, mockCategory);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
