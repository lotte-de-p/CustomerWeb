import { PaymentRequestUtil } from './payment-request.util';
import {
  hardwareCheckoutFeature,
  OrderItem,
  orderItemTestFactory,
  SalesOrder,
  salesOrderFactory,
} from '@sales/hardware-checkout/data-access';
import { addressUnitTestfactory } from '@sales/shared/address/data-access';
import { SummaryFacade, summaryFeature } from '@sales/summary/data-access';
import { fakeAsync, TestBed } from '@angular/core/testing';
import { DeliveryAddress } from '@sales/delivery/data-access';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { HardwareCheckoutError } from '../classes/hardware-checkout-error.class';
import { MandatoryFieldsAreMissing } from '../constants/errors.constants';

describe('PaymentUtil', () => {
  const deliveryAddress = 'Elektriciteitstraat, h. 27, sub h. a, b. 1, 2800, Mechelen, België';
  const deliveryType = '9158239724013806199';
  const municipality = 'Mechelen';
  const postalCode = '2800';
  const street = 'Elektriciteitstraat';
  const houseNumber = '27';
  const subHouseNumber = 'a';
  const boxNumber = '1';
  const firstName = 'John';
  const lastName = 'Doe';
  const mobileNumber = '123456789';
  const email = 'john.doe@example.com';

  const homeDeliveryOrderItem: OrderItem = orderItemTestFactory.build({
    chars: {
      'Delivery Address': deliveryAddress,
      'Delivery Type': deliveryType,
      'Municipality/Sub-municipality': municipality,
      'Postal Code': postalCode,
      Street: street,
      'House Number': houseNumber,
      'Sub-house Number': subHouseNumber,
      'Box Number': boxNumber,
      'First Name': firstName,
      'Last Name': lastName,
      'Mobile Number': mobileNumber,
      'E-Mail': email,
    },
  });
  const salesOrder: SalesOrder = salesOrderFactory.build({
    price: {
      upfrontPaymentTotalForSecuredHomeDeliveryEquipment: { value: '222' },
    },
  });
  const urlWithoutParams = 'www.telenet.be';
  const address: DeliveryAddress = {
    addressUnit: addressUnitTestfactory.build(),
    municipality: 'City',
    postalCode: '12345',
    street: '123 Main St',
    houseNumber: '1',
    subHouseNumber: '1',
    box: 'Box',
    country: 'Country',
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot(),
        StoreModule.forFeature(hardwareCheckoutFeature),
        StoreModule.forFeature(summaryFeature),
      ],
      declarations: [],
      providers: [
        {
          provide: 'Window',
          useValue: {
            Config: {
              'ocapi-url': 'https://api.int.telenet.be/ocapi',
              'omapi-url': 'https://api.int.telenet.be/omapi',
              'omapi-query-url': 'https://api.int.telenet.be/omapi-query/public',
              'openid-auth-url': 'https://login.int.telenet.be/openid/oauth/authorize',
              'openid-url': 'https://login.int.telenet.be/openid',
              'gateway-url': 'https://api.int.telenet.be',
              'sofy-url': 'https://int.sofy-dev.awscloud.external.telenet.be',
              'gsa-url': 'https://api.int.telenet.be/searchapi/gsa/api/',
              'openid-client-id': 'ocapi',
              'oauth-callback-url': '',
              'php-eshop-url': 'https://shop.int.telenet.be/shop/nl',
              'base-ac-systems-url': 'https://base.rest.ac-systems.com',
              'recaptcha-api-url': 'https://www.google.com/recaptcha/api.js',
              'recaptcha-site-key': '6Ld15hAbAAAAABL4l8LoTnBv-CBkhYE8Ukwc3aMQ',
              'recaptcha-v3-site-key': '6Lc2hCQbAAAAACaxx5NvByzCNYI4NSpgqsrrT4Wp',
              'is-author-mode': 'false',
              'kbc-post-message-receiver-origin-url': 'kbcPostMessageReceiverOriginUrl',
              'oauth-url-pid': 'oauthUrlPid',
              'oauth-callback-url-pid': 'oauthCallbackUrlPid',
              'search-index-parameter': 'searchIndexParameter',
            },
          },
        },
      ],
    }).compileComponents();
  });
  describe('PaymentRequestUtil', () => {
    it('should pass when all values are passed', fakeAsync(() => {
      const summaryFacade: SummaryFacade = TestBed.inject(SummaryFacade);
      jest.spyOn(summaryFacade, 'getLanguage').mockReturnValue('nl');

      // Expected result
      const expectedPaymentRequestData = {
        amount: '222',
        salesOrderId: '9168485854013261194',
        personalInfo: {
          firstName: 'John',
          lastName: 'Doe',
          email: 'john.doe@example.com',
        },
        address: {
          street: '123 Main St',
          municipality: 'City',
          postalCode: '12345',
        },
        mobileNumber: '123456789',
        shopUrl: 'www.telenet.be?orderid=9168485854013261194',
        language: 'nl',
        device: 'computer',
      };

      const result = PaymentRequestUtil.getPaymentRequestObject(
        salesOrder,
        homeDeliveryOrderItem,
        urlWithoutParams,
        address,
        'nl',
        'computer'
      );

      expect(result.amount).toBe(expectedPaymentRequestData.amount);
      expect(result.salesOrderId).toBe(expectedPaymentRequestData.salesOrderId);
      expect(result.personalInfo).toEqual(expectedPaymentRequestData.personalInfo);
      expect(result.address.street).toBe(expectedPaymentRequestData.address.street);
      expect(result.address.municipality).toBe(expectedPaymentRequestData.address.municipality);
      expect(result.address.postalCode).toBe(expectedPaymentRequestData.address.postalCode);
      expect(result.mobileNumber).toBe(expectedPaymentRequestData.mobileNumber);
      expect(result.shopUrl).toBe(expectedPaymentRequestData.shopUrl);
      expect(result.language).toBe(expectedPaymentRequestData.language);
      expect(result.deviceType).toBe(expectedPaymentRequestData.device);
    }));

    it('should throw HC-0034 when email value is missing', fakeAsync(() => {
      const homeDeliveryOrderItem: OrderItem = orderItemTestFactory.build({
        chars: {
          'Delivery Address': deliveryAddress,
          'Delivery Type': deliveryType,
          'Municipality/Sub-municipality': municipality,
          'Postal Code': postalCode,
          Street: street,
          'House Number': houseNumber,
          'Sub-house Number': subHouseNumber,
          'Box Number': boxNumber,
          'First Name': firstName,
          'Last Name': lastName,
          'Mobile Number': mobileNumber,
          'E-Mail': '',
        },
      });

      expect(function () {
        PaymentRequestUtil.getPaymentRequestObject(
          salesOrder,
          homeDeliveryOrderItem,
          urlWithoutParams,
          address,
          'nl',
          'computer'
        );
      }).toThrow(new HardwareCheckoutError(MandatoryFieldsAreMissing));
    }));

    it('should throw HC-0034 when last name value is missing', fakeAsync(() => {
      const homeDeliveryOrderItem: OrderItem = orderItemTestFactory.build({
        chars: {
          'Delivery Address': deliveryAddress,
          'Delivery Type': deliveryType,
          'Municipality/Sub-municipality': municipality,
          'Postal Code': postalCode,
          Street: street,
          'House Number': houseNumber,
          'Sub-house Number': subHouseNumber,
          'Box Number': boxNumber,
          'First Name': firstName,
          'Last Name': '',
          'Mobile Number': mobileNumber,
          'E-Mail': email,
        },
      });

      expect(function () {
        PaymentRequestUtil.getPaymentRequestObject(
          salesOrder,
          homeDeliveryOrderItem,
          urlWithoutParams,
          address,
          'nl',
          'computer'
        );
      }).toThrow(new HardwareCheckoutError(MandatoryFieldsAreMissing));
    }));

    it('should throw HC-0034 when first name value is missing', fakeAsync(() => {
      const homeDeliveryOrderItem: OrderItem = orderItemTestFactory.build({
        chars: {
          'Delivery Address': deliveryAddress,
          'Delivery Type': deliveryType,
          'Municipality/Sub-municipality': municipality,
          'Postal Code': postalCode,
          Street: street,
          'House Number': houseNumber,
          'Sub-house Number': subHouseNumber,
          'Box Number': boxNumber,
          'First Name': '',
          'Last Name': lastName,
          'Mobile Number': mobileNumber,
          'E-Mail': email,
        },
      });

      expect(function () {
        PaymentRequestUtil.getPaymentRequestObject(
          salesOrder,
          homeDeliveryOrderItem,
          urlWithoutParams,
          address,
          'nl',
          'computer'
        );
      }).toThrow(new HardwareCheckoutError(MandatoryFieldsAreMissing));
    }));

    it('should throw HC-0034 when mobile number value is missing', fakeAsync(() => {
      const homeDeliveryOrderItem: OrderItem = orderItemTestFactory.build({
        chars: {
          'Delivery Address': deliveryAddress,
          'Delivery Type': deliveryType,
          'Municipality/Sub-municipality': municipality,
          'Postal Code': postalCode,
          Street: street,
          'House Number': houseNumber,
          'Sub-house Number': subHouseNumber,
          'Box Number': boxNumber,
          'First Name': firstName,
          'Last Name': lastName,
          'Mobile Number': '',
          'E-Mail': email,
        },
      });

      expect(function () {
        PaymentRequestUtil.getPaymentRequestObject(
          salesOrder,
          homeDeliveryOrderItem,
          urlWithoutParams,
          address,
          'nl',
          'computer'
        );
      }).toThrow(new HardwareCheckoutError(MandatoryFieldsAreMissing));
    }));
  });
});
