import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DataLayerService } from '@telenet/ng-lib-datalayer';
import { Category, EventInfo } from 'udl';
import { SimActivationDataLayerService } from './sim-activation-datalayer.service';
import { expect, jest } from '@jest/globals';

describe('SimActivationDataLayerService', () => {
  let service: SimActivationDataLayerService;
  let dataLayerService: DataLayerService;
  const ACTIVATE_SIM = 'activate-sim';

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
    service = TestBed.inject(SimActivationDataLayerService);
    dataLayerService = TestBed.inject(DataLayerService);
    jest.spyOn(dataLayerService, 'addPageEvent').mockReturnValue();
    jest.spyOn(dataLayerService, 'sendEvent');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should call addPageEvent with proper params', () => {
    service.addPageEvent();
    expect(dataLayerService.addPageEvent).toHaveBeenCalledWith(ACTIVATE_SIM + '-overlay', {
      intent: 'activate-sim',
      stepId: 'activate-sim-overlay',
    });
  });

  it('Should call sendEvent with proper params', () => {
    const category = new Category();
    const eventInfo = new EventInfo();
    jest.spyOn(dataLayerService, 'createCategory').mockReturnValue(category);
    jest.spyOn(dataLayerService, 'createEventInfo').mockReturnValue(eventInfo);
    service.sendDataLayerEvent('someEventName', 'someEventType');
    expect(dataLayerService.createCategory).toHaveBeenCalledWith('fleet', 'sim-card');
    expect(dataLayerService.createEventInfo).toHaveBeenCalledWith('someEventName', 'someEventType', [ACTIVATE_SIM]);
    expect(dataLayerService.sendEvent).toHaveBeenCalledWith({
      eventInfo,
      attributes: {
        intent: ACTIVATE_SIM,
        flowType: 'someEventType',
      },
      category,
    });
  });
});
