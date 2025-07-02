import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import {
  salesOfferProductComfortInstallTypeFactory,
  SalesOfferProductInstallType,
  salesOfferPromoFactory,
} from '../models/response';
import { SalesOfferInstallTypeUtil } from './sales-offer-install-type.util';
import { InstallTypeEnum } from '../enums/ocapi-move-order.enum';
import { FlowTypeEnum } from '../enums/flow-type.enum';
import { SelfInstallTypeEnum } from '../enums/self-install-type.enum';
import { DeliveryOptionInterface } from '../interfaces/delivery-option.interface';

describe('SalesOfferInstallTypeUtil', function () {
  const promo = salesOfferPromoFactory.build({ legalInformation: 'test' });
  const delivery = { description: SelfInstallTypeEnum.HOME_DELIVERY };
  const comfortInstallType: SalesOfferProductInstallType = salesOfferProductComfortInstallTypeFactory.build({
    promos: [promo],
    options: [delivery],
  });

  describe('getInstallTypeForFlowType', () => {
    it('should return the exact same object if flowType is RES', function () {
      const installTypeForFlowType = SalesOfferInstallTypeUtil.getInstallTypeForFlowType(
        InstallTypeEnum.PRE_INSTALL,
        [comfortInstallType],
        FlowTypeEnum.RES
      );
      expect(installTypeForFlowType).toBeUndefined();
    });
    it('should return undefinded given no instalationType found', function () {
      const installTypeForFlowType = SalesOfferInstallTypeUtil.getInstallTypeForFlowType(
        InstallTypeEnum.COMFORT_INSTALL,
        [comfortInstallType],
        FlowTypeEnum.RES
      );
      expect(installTypeForFlowType).toEqual(comfortInstallType);
    });
    it('should return the price excl VAT as price if flowType is SOHO', function () {
      const installTypeForFlowType = SalesOfferInstallTypeUtil.getInstallTypeForFlowType(
        InstallTypeEnum.COMFORT_INSTALL,
        [comfortInstallType],
        FlowTypeEnum.SOHO
      );
      expect(installTypeForFlowType?.price).toEqual(comfortInstallType.priceexclvat);
      expect(installTypeForFlowType?.promos[0]?.price).toEqual(promo.priceexclvat);
    });
  });

  describe('getDeliveryOption', () => {
    it('should return the DeliveryOption', (): void => {
      const deliveryOption = SalesOfferInstallTypeUtil.getDeliveryOption(
        SelfInstallTypeEnum.HOME_DELIVERY,
        comfortInstallType
      );
      expect(deliveryOption?.description).toEqual(SelfInstallTypeEnum.HOME_DELIVERY);
    });
    it('should return undefined given no delivery', (): void => {
      const deliveryOption = SalesOfferInstallTypeUtil.getDeliveryOption(
        SelfInstallTypeEnum.PICKUP,
        comfortInstallType
      );
      expect(deliveryOption).toBeUndefined();
    });
  });

  describe('hasHomeDelivery', () => {
    it('should return true given a homeDelivery', (): void => {
      const hasHomeDelivery = SalesOfferInstallTypeUtil.hasHomeDelivery(comfortInstallType);
      expect(hasHomeDelivery).toEqual(true);
    });
    it('should return false given no homeDelivery', (): void => {
      comfortInstallType.options = undefined;
      const hasHomeDelivery = SalesOfferInstallTypeUtil.hasHomeDelivery(comfortInstallType);
      expect(hasHomeDelivery).toEqual(false);
    });
  });

  describe('hasPickup', () => {
    it('should return true given a hasPickup', (): void => {
      comfortInstallType.options = [{ description: SelfInstallTypeEnum.PICKUP } as DeliveryOptionInterface];
      const hasPickup = SalesOfferInstallTypeUtil.hasPickup(comfortInstallType);
      expect(hasPickup).toEqual(true);
    });
    it('should return false given no hasPickup', (): void => {
      comfortInstallType.options = undefined;
      const hasPickup = SalesOfferInstallTypeUtil.hasPickup(comfortInstallType);
      expect(hasPickup).toEqual(false);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
