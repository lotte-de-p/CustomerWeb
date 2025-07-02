import { TestBed } from '@angular/core/testing';
import { jest } from '@jest/globals';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockProvider } from 'ng-mocks';
import { ProductPriceChangesService } from './product-price-changes.service';
import { Address, BillingFrequency } from '../entities/product-price-change';
import { DataLayerService } from '@telenet/ng-lib-datalayer';
import { ProductPriceChangesDatalayerService } from './product-price-changes-datalayer.service';
import { Category, EventInfo } from 'udl';

describe('ProductPriceChangesDatalayerService', () => {
  let service: ProductPriceChangesDatalayerService;
  let datalayerService: DataLayerService;
  const productPriceChange = {
    address: {
      addressId: 'addressId',
    } as Address,
    billingFrequency: BillingFrequency.MONTHLY,
    priceChange: 123.45,
    segment: 'segment',
    products: [],
    vatInclusive: true,
    priceAccordingToConsumption: true,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductPriceChangesService,
        MockProvider(DataLayerService),
        {
          provide: 'Window',
          useValue: {},
        },
      ],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ProductPriceChangesDatalayerService);
    datalayerService = TestBed.inject(DataLayerService);
    jest.spyOn(datalayerService, 'setPage').mockReturnValue(Promise.resolve(true));
    jest.spyOn(datalayerService, 'addPageEvent');
    jest.spyOn(datalayerService, 'sendEvent').mockReturnValue(Promise.resolve(true));
  });

  it('should send the price according to consumption event', () => {
    const eventInfo = {} as EventInfo;
    const category = {} as Category;
    jest.spyOn(datalayerService, 'createEventInfo').mockReturnValue(eventInfo);
    jest.spyOn(datalayerService, 'createCategory').mockReturnValue(category);
    service.sendSelectProductPriceChange(productPriceChange);
    expect(datalayerService.createCategory).toHaveBeenCalledWith(
      ProductPriceChangesDatalayerService.CATEGORY_CARE,
      ProductPriceChangesDatalayerService.MESSAGE_GROUP
    );
    expect(datalayerService.createEventInfo).toHaveBeenCalledWith(
      ProductPriceChangesDatalayerService.EVENT_COMPONENT_NAME,
      ProductPriceChangesDatalayerService.EVENT_INFO_TYPE_IMPRESSION,
      [ProductPriceChangesDatalayerService.MESSAGE_GROUP]
    );
    expect(datalayerService.sendEvent).toHaveBeenCalledWith({
      eventInfo,
      attributes: {
        [ProductPriceChangesDatalayerService.ATTRIBUTES_ITEM_NAME]:
          ProductPriceChangesDatalayerService.EVENT_INFO_NAME_NOT_IMPACTED,
      },
      category,
    });
  });

  it('should send the displayed event', () => {
    const eventInfo = {} as EventInfo;
    const category = {} as Category;
    jest.spyOn(datalayerService, 'createEventInfo').mockReturnValue(eventInfo);
    jest.spyOn(datalayerService, 'createCategory').mockReturnValue(category);
    service.sendSelectProductPriceChange({
      ...productPriceChange,
      priceAccordingToConsumption: false,
    });
    expect(datalayerService.createCategory).toHaveBeenCalledWith(
      ProductPriceChangesDatalayerService.CATEGORY_CARE,
      ProductPriceChangesDatalayerService.MESSAGE_GROUP
    );
    expect(datalayerService.createEventInfo).toHaveBeenCalledWith(
      ProductPriceChangesDatalayerService.EVENT_COMPONENT_NAME,
      ProductPriceChangesDatalayerService.EVENT_INFO_TYPE_IMPRESSION,
      [ProductPriceChangesDatalayerService.MESSAGE_GROUP]
    );
    expect(datalayerService.sendEvent).toHaveBeenCalledWith({
      eventInfo,
      attributes: {
        [ProductPriceChangesDatalayerService.ATTRIBUTES_ITEM_NAME]:
          ProductPriceChangesDatalayerService.EVENT_INFO_NAME_DISPLAYED,
      },
      category,
    });
  });

  it('should send the not impacted event', () => {
    const eventInfo = {} as EventInfo;
    const category = {} as Category;
    jest.spyOn(datalayerService, 'createEventInfo').mockReturnValue(eventInfo);
    jest.spyOn(datalayerService, 'createCategory').mockReturnValue(category);
    service.sendSelectProductPriceChange(undefined);
    expect(datalayerService.createCategory).toHaveBeenCalledWith(
      ProductPriceChangesDatalayerService.CATEGORY_CARE,
      ProductPriceChangesDatalayerService.MESSAGE_GROUP
    );
    expect(datalayerService.createEventInfo).toHaveBeenCalledWith(
      ProductPriceChangesDatalayerService.EVENT_COMPONENT_NAME,
      ProductPriceChangesDatalayerService.EVENT_INFO_TYPE_IMPRESSION,
      [ProductPriceChangesDatalayerService.MESSAGE_GROUP]
    );
    expect(datalayerService.sendEvent).toHaveBeenCalledWith({
      eventInfo,
      attributes: {
        [ProductPriceChangesDatalayerService.ATTRIBUTES_ITEM_NAME]:
          ProductPriceChangesDatalayerService.EVENT_INFO_NAME_NOT_POSSIBLE,
      },
      category,
    });
  });

  it('should send the click event', () => {
    const eventInfo = {} as EventInfo;
    const category = {} as Category;
    jest.spyOn(datalayerService, 'createEventInfo').mockReturnValue(eventInfo);
    jest.spyOn(datalayerService, 'createCategory').mockReturnValue(category);
    service.sendClick(
      ProductPriceChangesDatalayerService.EVENT_INPAGE_LOGIN_NAME,
      ProductPriceChangesDatalayerService.EVENT_INFO_NAME_LOGIN
    );
    expect(datalayerService.createCategory).toHaveBeenCalledWith(
      ProductPriceChangesDatalayerService.CATEGORY_CARE,
      ProductPriceChangesDatalayerService.MESSAGE_GROUP
    );
    expect(datalayerService.createEventInfo).toHaveBeenCalledWith(
      ProductPriceChangesDatalayerService.EVENT_INPAGE_LOGIN_NAME,
      ProductPriceChangesDatalayerService.EVENT_INFO_TYPE_CLICK,
      [ProductPriceChangesDatalayerService.MESSAGE_GROUP]
    );
    expect(datalayerService.sendEvent).toHaveBeenCalledWith({
      eventInfo,
      attributes: {
        [ProductPriceChangesDatalayerService.ATTRIBUTES_ITEM_NAME]:
          ProductPriceChangesDatalayerService.EVENT_INFO_NAME_LOGIN,
      },
      category,
    });
  });
});
