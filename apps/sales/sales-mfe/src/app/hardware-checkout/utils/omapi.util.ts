import {
  RawImagesInterface,
  RawLocalizedContentInterface,
  RawOmapiQueryProductInterfaceData,
} from '@telenet/ng-lib-omapi-query';
import { preAndBackOrderLabelTagKeys } from '../constants/omapi.constants';
import { OrderItem } from '@sales/hardware-checkout/data-access';
import { OmapiAttributeKeysEnum } from '../enums/omapi.enum';
import { SalesOrderUtil } from './sales-order.util';

export class OmapiUtil {
  static isPreOrBackOrder(omapiQueryProducts: RawOmapiQueryProductInterfaceData[]): boolean {
    const variantTagOptions = omapiQueryProducts.flatMap((omapiProduct) => {
      return omapiProduct.variants.flatMap((variant) => {
        return variant.tag.telenet.options;
      });
    });

    return variantTagOptions.some((option) => {
      return preAndBackOrderLabelTagKeys.includes(option.attributeKey);
    });
  }

  static getPreOrderNotification(
    omapiQueryProducts: RawOmapiQueryProductInterfaceData[],
    language: string
  ): string | undefined {
    const isPreOrder = omapiQueryProducts
      .flatMap((omapiProduct) => {
        return omapiProduct.variants.flatMap((variant) => {
          return variant.tag.telenet.options.find((option) => {
            return option.attributeKey === 'pre_order_label';
          });
        });
      })
      .filter((variant) => variant)
      .shift()?.preOrderDescription;

    if (isPreOrder?.localizedContent) {
      const message = OmapiUtil.getLocalisedContent(isPreOrder, language);
      if (message) {
        return message;
      }
    }

    return undefined;
  }

  static getBackOrderNotification(
    omapiQueryProducts: RawOmapiQueryProductInterfaceData[],
    language: string
  ): string | undefined {
    const isBackOrder = omapiQueryProducts
      .flatMap((omapiProduct) => {
        return omapiProduct.variants.flatMap((variant) => {
          return variant.tag.telenet.options.find((option) => {
            return option.attributeKey === 'back_order_label';
          });
        });
      })
      .filter((variant) => variant)
      .shift()?.backOrderDescription;

    if (isBackOrder?.localizedContent) {
      const message = OmapiUtil.getLocalisedContent(isBackOrder, language);
      if (message) {
        return message;
      }
    }

    return undefined;
  }

  static getLocalisedContent(
    content: { localizedContent: RawLocalizedContentInterface[] },
    language: string
  ): string | undefined {
    const message = content.localizedContent.find((content) => {
      return content.locale.toLocaleLowerCase() === language.toLocaleLowerCase();
    });
    return message?.value?.[0];
  }

  static getProductMainImage(
    orderItem: OrderItem,
    omapiProducts: RawOmapiQueryProductInterfaceData[]
  ): RawImagesInterface | undefined {
    const itemCode = orderItem.chars['Item Code'];
    return omapiProducts
      .flatMap((product) => product.variants)
      .find((product) => product.productId === itemCode)
      ?.images.find((image) => image.attributeKey === OmapiAttributeKeysEnum.MAIN_IMAGE);
  }

  static getProductVariant(orderItem: OrderItem, omapiProducts: RawOmapiQueryProductInterfaceData[]) {
    return omapiProducts
      .flatMap((omapiQueryProduct) => omapiQueryProduct.variants)
      .find((variant) => variant.productId === SalesOrderUtil.getOrderItemItemCode(orderItem));
  }
}
