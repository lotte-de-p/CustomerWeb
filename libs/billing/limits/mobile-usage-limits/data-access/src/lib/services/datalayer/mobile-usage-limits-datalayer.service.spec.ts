import { TestBed } from '@angular/core/testing';
import { MobileUsageLimitsDatalayerService } from './mobile-usage-limits-datalayer.service';
import { DataLayerService } from '@telenet/ng-lib-datalayer';
import {
  ATTRIBUTE_ITEM_DATA,
  ATTRIBUTE_ITEM_GROUP,
  ATTRIBUTE_ITEM_NAME,
  CATEGORY_PRIMARY_CARE,
  CATEGORY_SUBCATEGORY_MOBILE,
  EVENT_NAME_CHANGED,
  EVENT_NAME_DECLINED,
  EVENT_TYPE,
  ITEM_DATA_LIMIT_EXCEEDED,
  ITEM_DATA_LIMIT_NOT_EXCEEDED,
  MESSAGE_GROUP,
} from '../mobile-usage-limits-service.constants';
import { jest } from '@jest/globals';
import { Category, EventInfo } from 'udl';
import { EventInfoBuilder } from 'udl/dist/models/eventInfo';
import { CategoryBuilder } from 'udl/dist/models/category';

describe('MobileUsageLimitsDatalayerService', () => {
  let service: MobileUsageLimitsDatalayerService;
  let dataLayerService: DataLayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DataLayerService,
        {
          provide: 'Window',
          useValue: {},
        },
      ],
    });
    service = TestBed.inject(MobileUsageLimitsDatalayerService);
    dataLayerService = TestBed.inject(DataLayerService);
    jest.spyOn(dataLayerService, 'addPageEvent').mockReturnValue();
    jest.spyOn(dataLayerService, 'sendEvent');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send data layer event with attributes when itemName is provided', () => {
    const limitAlreadyExceeded = false;
    const updateDeclined = false;
    const itemName = 'Test Item';
    const category = new Category();
    const eventInfo = new EventInfo();
    jest.spyOn(dataLayerService, 'createCategory').mockReturnValue(category);
    jest.spyOn(dataLayerService, 'createEventInfo').mockReturnValue(eventInfo);
    service.sendDataLayerEventWithAttributes(limitAlreadyExceeded, updateDeclined, '50', itemName);

    expect(dataLayerService.createCategory).toHaveBeenCalledWith(CATEGORY_PRIMARY_CARE, CATEGORY_SUBCATEGORY_MOBILE);
    expect(dataLayerService.createEventInfo).toHaveBeenCalledWith(EVENT_NAME_CHANGED, EVENT_TYPE, [MESSAGE_GROUP]);
    expect(dataLayerService.sendEvent).toHaveBeenCalledWith({
      eventInfo,
      attributes: {
        [ATTRIBUTE_ITEM_NAME]: itemName,
        [ATTRIBUTE_ITEM_DATA]: '50',
        [ATTRIBUTE_ITEM_GROUP]: ITEM_DATA_LIMIT_NOT_EXCEEDED,
      },
      category,
    });
  });

  it('should not send data layer event when itemName is not defined', () => {
    const limitAlreadyExceeded = false;
    const updateDeclined = false;

    service.sendDataLayerEventWithAttributes(limitAlreadyExceeded, updateDeclined, undefined);

    expect(dataLayerService.sendEvent).not.toHaveBeenCalled();
  });

  it('should not send data layer event when itemName is undefined', () => {
    const limitAlreadyExceeded = false;
    const updateDeclined = false;
    const itemName = undefined;

    service.sendDataLayerEventWithAttributes(limitAlreadyExceeded, updateDeclined, itemName);

    expect(dataLayerService.sendEvent).not.toHaveBeenCalled();
  });

  it('should send data layer event with limit exceeded attributes when update is declined', () => {
    const limitAlreadyExceeded = true;
    const updateDeclined = true;
    const itemName = 'testName';
    const category = new CategoryBuilder()
      .withPrimaryCategory(CATEGORY_PRIMARY_CARE)
      .withSubCategoryOne(CATEGORY_SUBCATEGORY_MOBILE)
      .build();
    const eventInfo = new EventInfoBuilder().withEventName(EVENT_NAME_DECLINED).withType(EVENT_TYPE).build();
    jest.spyOn(dataLayerService, 'createCategory').mockReturnValue(category);
    jest.spyOn(dataLayerService, 'createEventInfo').mockReturnValue(eventInfo);
    service.sendDataLayerEventWithAttributes(limitAlreadyExceeded, updateDeclined, '50', itemName);

    expect(dataLayerService.createCategory).toHaveBeenCalledWith(CATEGORY_PRIMARY_CARE, CATEGORY_SUBCATEGORY_MOBILE);
    expect(dataLayerService.createEventInfo).toHaveBeenCalledWith(EVENT_NAME_DECLINED, EVENT_TYPE, [MESSAGE_GROUP]);
    expect(dataLayerService.sendEvent).toHaveBeenCalledWith({
      eventInfo,
      attributes: {
        [ATTRIBUTE_ITEM_NAME]: itemName,
        [ATTRIBUTE_ITEM_DATA]: '50',
      },
      category,
    });
  });

  it('should send data layer event when limit is exceeded and update is called', () => {
    const limitAlreadyExceeded = true;
    const updateDeclined = false;
    const itemName = 'testName';
    const category = new CategoryBuilder()
      .withPrimaryCategory(CATEGORY_PRIMARY_CARE)
      .withSubCategoryOne(CATEGORY_SUBCATEGORY_MOBILE)
      .build();
    const eventInfo = new EventInfoBuilder().withEventName(EVENT_NAME_CHANGED).withType(EVENT_TYPE).build();
    jest.spyOn(dataLayerService, 'createCategory').mockReturnValue(category);
    jest.spyOn(dataLayerService, 'createEventInfo').mockReturnValue(eventInfo);
    service.sendDataLayerEventWithAttributes(limitAlreadyExceeded, updateDeclined, '50', itemName);

    expect(dataLayerService.createCategory).toHaveBeenCalledWith(CATEGORY_PRIMARY_CARE, CATEGORY_SUBCATEGORY_MOBILE);
    expect(dataLayerService.createEventInfo).toHaveBeenCalledWith(EVENT_NAME_CHANGED, EVENT_TYPE, [MESSAGE_GROUP]);
    expect(dataLayerService.sendEvent).toHaveBeenCalledWith({
      eventInfo,
      attributes: {
        [ATTRIBUTE_ITEM_NAME]: itemName,
        [ATTRIBUTE_ITEM_DATA]: '50',
        [ATTRIBUTE_ITEM_GROUP]: ITEM_DATA_LIMIT_EXCEEDED,
      },
      category,
    });
  });
});
