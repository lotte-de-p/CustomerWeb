import { TestBed } from '@angular/core/testing';

import { DataLayerAttributes, DataLayerService } from '@telenet/ng-lib-datalayer';
import { Category, EventInfo, Item } from 'udl';
import { ProductOverviewService } from './product-overview.service';
import { windowFactory } from '@telenet/ng-lib-page';
import { expect, jest } from '@jest/globals';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { EventsConstants } from '../constants/events.constant';
import { ProductIconConstants } from '../constants/product-icon.constant';
import { Product } from '../../../fleet-user/shared/models/product.model';

describe('ProductOverviewService', () => {
  let service: ProductOverviewService;
  let dataLayerService: DataLayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataLayerService, { provide: 'Window', useValue: windowFactory() }],
    });

    service = TestBed.inject(ProductOverviewService);
    dataLayerService = TestBed.inject(DataLayerService);
  });

  describe('addEventToDataLayer', () => {
    it('should call datalayer', () => {
      const eventInfo = new EventInfo();
      const componentInstanceID = 'componentInstanceID';
      const item = new Item();
      const attributes = {
        product: [item] as Item[],
      } as DataLayerAttributes;
      const cat = new Category();
      jest.spyOn(dataLayerService, 'getCategory').mockReturnValue(cat);
      jest.spyOn(dataLayerService, 'createCategory').mockReturnValue(cat);
      jest.spyOn(dataLayerService, 'sendEvent');

      service.addEventToDataLayer(eventInfo, componentInstanceID, attributes);

      expect(dataLayerService.sendEvent).toHaveBeenCalledWith({ eventInfo, attributes, category: cat });
    });
  });

  describe('getClickEventInfoData', () => {
    it('should call datalayer when clicking', () => {
      const product = new Product();
      product.status = 'ACTIVE';
      product.upgradePossibleTo = 'true';
      jest.spyOn(service['dataLayerService'], 'createEventInfo');

      service.getClickEventInfoData(product);

      expect(dataLayerService.createEventInfo).toHaveBeenCalledWith(
        EventsConstants.EVENT_NAME_SECURITY_OPTION_CLICK,
        EventsConstants.EVENT_TYPE_CLICK
      );
    });
  });

  describe('getProductIcon', () => {
    describe('should return the correct icon name for the given product', () => {
      it('should return the security icon', () => {
        const product = {
          productInfo: {
            subCategory: { name: ProductIconConstants.SUBCATEGORY_SECURITY },
          },
        } as unknown as Product;

        const result = service.getProductIcon(product);

        expect(result).toEqual(ProductIconConstants.SECURITY_ICON);
      });

      it('should return the international calling icon', () => {
        const product = {
          productInfo: {
            externalProductCode: ProductIconConstants.INTERNATIONAL_CALLING_EPC,
          },
        } as unknown as Product;

        const result = service.getProductIcon(product);

        expect(result).toEqual(ProductIconConstants.INTERNATIONAL_CALLING_ICON);
      });

      it('should return the Kong icon', () => {
        const productKongEpc = {
          productInfo: {
            externalProductCode: ProductIconConstants.KONG_EPC,
          },
        } as unknown as Product;

        const productKongUnlimitedEpc = {
          productInfo: {
            externalProductCode: ProductIconConstants.KONG_UNLIMITED_EPC,
          },
        } as unknown as Product;

        const resultKongEpc = service.getProductIcon(productKongEpc);
        const resultKongUnlimitedEpc = service.getProductIcon(productKongUnlimitedEpc);

        expect(resultKongEpc).toEqual(ProductIconConstants.KONG_EPC_ICON);
        expect(resultKongUnlimitedEpc).toEqual(ProductIconConstants.KONG_EPC_ICON);
      });

      it('should return the data sim icon', () => {
        const product = {
          productInfo: {
            externalProductCode: ProductIconConstants.DATA_SIM_EPC,
          },
        } as unknown as Product;

        const result = service.getProductIcon(product);

        expect(result).toEqual(ProductIconConstants.DATA_SIM_EPC_ICON);
      });

      it('should return the streaming icon', () => {
        const product = {
          productInfo: {
            externalProductCode: ProductIconConstants.STREAMING_PRODUCT_PREFIX,
          },
        } as unknown as Product;

        const result = service.getProductIcon(product);

        expect(result).toEqual(ProductIconConstants.STREAMING_ICON);
      });

      it('should return internet icon when product type equals internet', () => {
        const product = {
          productInfo: {} as OmapiProduct,
          productType: ProductIconConstants.PRODUCT_TYPE_INTERNET,
        } as Product;

        const result = service.getProductIcon(product);

        expect(result).toEqual(ProductIconConstants.INTERNET_ICON);
      });

      it('should return mobile icon when product type equals mobile', () => {
        const product = {
          productInfo: {} as OmapiProduct,
          productType: ProductIconConstants.PRODUCT_TYPE_MOBILE,
        } as Product;

        const result = service.getProductIcon(product);

        expect(result).toEqual(ProductIconConstants.MOBILE_ICON);
      });

      it('should return dtv icon when product type equals dtv', () => {
        const product = {
          productInfo: {} as OmapiProduct,
          productType: ProductIconConstants.PRODUCT_TYPE_DTV,
        } as Product;

        const result = service.getProductIcon(product);

        expect(result).toEqual(ProductIconConstants.DTV_ICON);
      });

      it('should return telephone icon when product type equals telephone', () => {
        const product = {
          productInfo: {} as OmapiProduct,
          productType: ProductIconConstants.PRODUCT_TYPE_FIXED_TELEPHONE,
        } as Product;

        const result = service.getProductIcon(product);

        expect(result).toEqual(ProductIconConstants.FIXED_TELEPHONY_ICON);
      });

      it('should return phone2go icon when product type equals phone2go', () => {
        const product = {
          productInfo: {} as OmapiProduct,
          productType: ProductIconConstants.PRODUCT_TYPE_PHONE2GO,
        } as Product;

        const result = service.getProductIcon(product);

        expect(result).toEqual(ProductIconConstants.PHONE2GO_TELEPHONE_ICON);
      });

      it('should return mobile icon in all other cases', () => {
        const product = {
          productInfo: {},
          productType: 'other',
        } as Product;

        expect(service.getProductIcon(product)).toEqual(ProductIconConstants.MOBILE_ICON);
      });
    });
  });
});
