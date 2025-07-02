import { OmapiUtil } from './omapi.util';
import { orderItemTestFactory } from '@sales/hardware-checkout/data-access';
import { OmapiAttributeKeysEnum } from '../enums/omapi.enum';
import {
  RawOmapiQueryProductInterfaceData,
  RawImagesInterfaceFactory,
  rawLocalizedContentInterfaceFactory,
  rawOmapiQueryProductInterfaceDataFactory,
  rawOmapiQueryProductInterfaceDataWithBackOrderFactory,
  rawOmapiQueryProductInterfaceDataWithPreOrderFactory,
  rawVariantsInterfaceFactory,
  rawBigItemVariantInterfaceFactory,
} from '@telenet/ng-lib-omapi-query';
import { SalesOrderUtil } from './sales-order.util';

describe('OmapiUtil', () => {
  describe('isPreOrBackOrder', () => {
    it('should return false if no pre back order is set', () => {
      const omapiQueryProducts = rawOmapiQueryProductInterfaceDataFactory.buildList(3);
      const preBackOrderUnderTest = OmapiUtil.isPreOrBackOrder(omapiQueryProducts);
      expect(preBackOrderUnderTest).toBeFalsy();
    });

    it('should return true if pre order is set', () => {
      const omapiQueryProducts = rawOmapiQueryProductInterfaceDataFactory.buildList(3);
      omapiQueryProducts.push(rawOmapiQueryProductInterfaceDataWithPreOrderFactory.build());
      const preBackOrderUnderTest = OmapiUtil.isPreOrBackOrder(omapiQueryProducts);
      expect(preBackOrderUnderTest).toBeTruthy();
    });

    it('should return true if back order is set', () => {
      const omapiQueryProducts = rawOmapiQueryProductInterfaceDataFactory.buildList(3);
      omapiQueryProducts.push(rawOmapiQueryProductInterfaceDataWithBackOrderFactory.build());
      const preBackOrderUnderTest = OmapiUtil.isPreOrBackOrder(omapiQueryProducts);
      expect(preBackOrderUnderTest).toBeTruthy();
    });
  });

  describe('getProductMainImage', () => {
    const productId = '1000';
    const imageUrl = 'https://telenet.be/main-image';
    const orderItem = orderItemTestFactory.build({
      chars: {
        'Item Code': productId,
      },
    });
    let omapiQueryProducts: RawOmapiQueryProductInterfaceData[] = [];

    beforeEach(() => {
      omapiQueryProducts = rawOmapiQueryProductInterfaceDataFactory.buildList(3);
    });

    it('should return the main image url if one is present', () => {
      omapiQueryProducts.push(
        rawOmapiQueryProductInterfaceDataFactory.build({
          variants: [
            rawVariantsInterfaceFactory.build({
              productId: productId,
              images: [
                RawImagesInterfaceFactory.build({
                  attributeKey: OmapiAttributeKeysEnum.MAIN_IMAGE,
                  value: imageUrl,
                }),
              ],
            }),
          ],
        })
      );

      const mainImageUnderTest = OmapiUtil.getProductMainImage(orderItem, omapiQueryProducts);
      expect(mainImageUnderTest?.value).toBe(imageUrl);
    });

    it('should return nothing when there is no image present', () => {
      omapiQueryProducts.push(
        rawOmapiQueryProductInterfaceDataFactory.build({
          variants: [
            rawVariantsInterfaceFactory.build({
              productId: productId,
              images: [],
            }),
          ],
        })
      );

      const mainImageUnderTest = OmapiUtil.getProductMainImage(orderItem, omapiQueryProducts);
      expect(mainImageUnderTest?.value).toBeUndefined();
    });

    it('should return nothing when the correct variant is not present', () => {
      omapiQueryProducts.push(
        rawOmapiQueryProductInterfaceDataFactory.build({
          variants: [],
        })
      );

      const mainImageUnderTest = OmapiUtil.getProductMainImage(orderItem, omapiQueryProducts);
      expect(mainImageUnderTest?.value).toBeUndefined();
    });
  });

  describe('getLocalisedContent', () => {
    it('should return localized content if it exists', () => {
      const localizedContent = rawLocalizedContentInterfaceFactory.build({
        key: 'test_pre',
        locale: 'nl',
        value: ['test_content'],
      });

      const underTest = OmapiUtil.getLocalisedContent({ localizedContent: [localizedContent] }, 'nl');
      expect(underTest).toBe('test_content');
    });

    it('should return undefined if the content doesnt exist', () => {
      const localizedContent = rawLocalizedContentInterfaceFactory.build({
        key: 'test_pre',
        locale: 'nl',
        value: ['test_content'],
      });

      const underTest = OmapiUtil.getLocalisedContent({ localizedContent: [localizedContent] }, 'en');
      expect(underTest).toBeUndefined();
    });
  });

  describe('getProductVariant', () => {
    const productId = '123';
    const orderItem = orderItemTestFactory.build({
      chars: {
        'Item Code': productId,
      },
    });

    it('should return the matching variant when it exists', () => {
      const productVariant = rawBigItemVariantInterfaceFactory.build({ productId: productId });
      const omapiProducts = [rawOmapiQueryProductInterfaceDataFactory.build({ variants: [productVariant] })];

      jest.spyOn(SalesOrderUtil, 'getOrderItemItemCode').mockReturnValue(productId);

      const result = OmapiUtil.getProductVariant(orderItem, omapiProducts);
      expect(result).toEqual(productVariant);
      expect(SalesOrderUtil.getOrderItemItemCode).toHaveBeenCalledWith(orderItem);
    });

    it('should return undefined when no variant exists', () => {
      const productVariant = rawBigItemVariantInterfaceFactory.build({ productId: '789' });
      const omapiProducts = [rawOmapiQueryProductInterfaceDataFactory.build({ variants: [productVariant] })];

      jest.spyOn(SalesOrderUtil, 'getOrderItemItemCode').mockReturnValue(productId);

      const result = OmapiUtil.getProductVariant(orderItem, omapiProducts);
      expect(result).toBeUndefined();
      expect(SalesOrderUtil.getOrderItemItemCode).toHaveBeenCalledWith(orderItem);
    });

    it('should return undefined when no omapi products', () => {
      jest.spyOn(SalesOrderUtil, 'getOrderItemItemCode').mockReturnValue(productId);

      const result = OmapiUtil.getProductVariant(orderItem, []);
      expect(result).toBeUndefined();
      expect(SalesOrderUtil.getOrderItemItemCode).toHaveBeenCalledWith(orderItem);
    });
  });
});
