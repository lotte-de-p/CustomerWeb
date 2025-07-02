import { DataLayerService } from '@telenet/ng-lib-datalayer';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { expect, jest } from '@jest/globals';
import { Category, EventInfo } from 'udl';
import { PayByMobileDatalayerService } from './pay-by-mobile-datalayer.service';

describe('PayByMobileDataLayerService', () => {
  let service: PayByMobileDatalayerService;
  let dataLayerService: DataLayerService;
  const MESSAGE_GROUP = 'pay-by-mobile';

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
    service = TestBed.inject(PayByMobileDatalayerService);
    dataLayerService = TestBed.inject(DataLayerService);
    jest.spyOn(dataLayerService, 'addPageEvent').mockReturnValue();
    jest.spyOn(dataLayerService, 'sendEvent');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should emit stop subscription datalayer event when subscription is cancelled', () => {
    const category = new Category();
    const eventInfo = new EventInfo();
    jest.spyOn(dataLayerService, 'createCategory').mockReturnValue(category);
    jest.spyOn(dataLayerService, 'createEventInfo').mockReturnValue(eventInfo);
    service.addEventCancelSubscription('serviceText');
    expect(dataLayerService.createCategory).toHaveBeenCalledWith('care', 'billing');
    expect(dataLayerService.createEventInfo).toHaveBeenCalledWith(
      'pay by mobile settings changed',
      'change-mobile-service-settings',
      [MESSAGE_GROUP]
    );
    expect(dataLayerService.sendEvent).toHaveBeenCalledWith({
      eventInfo,
      attributes: {
        itemName: 'stop subscription',
        itemData: 'serviceText',
      },
      category,
    });
  });
});
