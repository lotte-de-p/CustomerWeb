import { ServiceCasesDatalayerService } from './service-cases-datalayer.service';
import { DataLayerService } from '@telenet/ng-lib-datalayer';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { expect, jest } from '@jest/globals';
import { Category, EventInfo } from 'udl';

describe('ServiceCasesDataLayerService', () => {
  let service: ServiceCasesDatalayerService;
  let dataLayerService: DataLayerService;
  const SERVICE_CASES = 'service-cases';
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        DataLayerService,
        {
          provide: 'Window',
          useValue: {},
        },
      ],
    });
    service = TestBed.inject(ServiceCasesDatalayerService);
    dataLayerService = TestBed.inject(DataLayerService);
    jest.spyOn(dataLayerService, 'addPageEvent').mockReturnValue();
    jest.spyOn(dataLayerService, 'sendEvent');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should setPageProperties', () => {
    jest.spyOn(dataLayerService, 'setPage').mockReturnValue(new Promise(() => true));
    service.setPageProperties();
    expect(dataLayerService.setPage).toHaveBeenCalled();
  });

  it('should call addPageEvent with proper params', () => {
    service.addPageEvent();
    expect(dataLayerService.addPageEvent).toHaveBeenCalledWith(SERVICE_CASES, {
      intent: 'view-service-cases',
      stepId: SERVICE_CASES,
    });
  });

  it('should call sendEvent with proper params', () => {
    const category = new Category();
    const eventInfo = new EventInfo();
    jest.spyOn(dataLayerService, 'createCategory').mockReturnValue(category);
    jest.spyOn(dataLayerService, 'createEventInfo').mockReturnValue(eventInfo);
    service.sendDataLayerEventWithAttributes('eventName', 'type', 'itemName', 'itemData', 'itemGroup');
    expect(dataLayerService.createCategory).toHaveBeenCalledWith('care', SERVICE_CASES);
    expect(dataLayerService.createEventInfo).toHaveBeenCalledWith('eventName', 'type', [SERVICE_CASES]);
    expect(dataLayerService.sendEvent).toHaveBeenCalledWith({
      eventInfo,
      attributes: {
        itemName: 'itemName',
        itemData: 'itemData',
        itemGroup: 'itemGroup',
      },
      category,
    });
  });
});
