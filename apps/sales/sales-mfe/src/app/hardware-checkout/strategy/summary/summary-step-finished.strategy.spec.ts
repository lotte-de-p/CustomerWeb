import { SummaryStepFinishedStrategy } from './summary-step-finished.strategy';
import { HardwareCheckoutFacade } from '../../facades/hardware-checkout.facade';
import { SummaryFacade, summaryFeature } from '@sales/summary/data-access';
import { MediaQueryService, UrlService } from '@telenet/ng-lib-page';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import {
  hardwareCheckoutFeature,
  orderItemTestFactory,
  PaymentRequestDataInterface,
  PaymentResponseDataInterface,
  salesOrderFactory,
} from '@sales/hardware-checkout/data-access';
import { EventFacade } from '@sales/events/data-access';
import { SalesOrderUtil } from '../../utils/sales-order.util';
import { Inject } from '@angular/core';
import { of } from 'rxjs';
import { addressUnitTestfactory } from '@sales/shared/address/data-access';
import { PaymentRequestUtil } from '../../utils/payment-request.util';

const ingenicoRequest: PaymentResponseDataInterface = {
  signature: 'signature',
  payment: {
    template: 'template',
    language: 'NL',
    device: 'computer',
    email: 'test@test.com',
    amount: '10000',
    currency: 'EUR',
    ownerAddress: 'Liersesteenweg 4',
    ownerZip: '2800',
    ownerTown: 'Mechelen',
    ownerCountry: 'BE',
    ownerContactNumber: '0472404040',
    transactionId: '1234567',
    paymentServiceProviderId: 'NCeShopTelenet',
    acceptURL: 'https://www.local.telenet.be/accpet',
    cancelURL: 'https://www.local.telenet.be/cancel',
    declineURL: 'https://www.local.telenet.be/decline',
    exceptionURL: 'https://www.local.telenet.be/exception',
    paramPlus: '',
    paramVar: '',
    contactName: 'Tony Stark',
  },
};

const paymentRequest: PaymentRequestDataInterface = {
  amount: '9000',
  salesOrderId: '123123123',
  mobileNumber: '0472404040',
  shopUrl: 'https://www.local.telenet.be/',
  language: 'nl',
  personalInfo: {
    firstName: 'Gualterio',
    lastName: 'Peerenboom',
    email: 'automation.tlokb.kvsfs@staff.telenet.be',
  },
  address: {
    street: 'Darwin Loadteststraat',
    municipality: 'Mechelen',
    postalCode: '2800',
  },
  deviceType: 'computer',
};

@Inject({
  provdeIn: 'root',
})
export class MockHardwareCheckout {
  submitSalesOrder = jest.fn(() => of(salesOrderFactory.build()));
  getAddressById = jest.fn(() => of(addressUnitTestfactory.build()));
  getPaymentRequestObject = jest.fn(() => of(ingenicoRequest));
  checkoutDelivery = jest.fn(() => of(salesOrderFactory.build()));
}

describe('SummaryStepFinishedStrategy', () => {
  let urlService: UrlService;
  let mediaQueryService: MediaQueryService;
  let hardwareCheckoutFacade: HardwareCheckoutFacade;
  let summaryFacade: SummaryFacade;
  let eventFacade: EventFacade;

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
        {
          provide: HardwareCheckoutFacade,
          useClass: MockHardwareCheckout,
        },
      ],
    }).compileComponents();

    urlService = TestBed.inject(UrlService);
    mediaQueryService = TestBed.inject(MediaQueryService);
    jest.spyOn(urlService, 'getCurrentUrl');

    hardwareCheckoutFacade = TestBed.inject(HardwareCheckoutFacade);

    summaryFacade = TestBed.inject(SummaryFacade);
    eventFacade = TestBed.inject(EventFacade);
    jest.spyOn(eventFacade, 'triggerAnalyticsClickEvent');
    jest.spyOn(summaryFacade, 'getLanguage').mockReturnValue('nl');
    Object.defineProperty(hardwareCheckoutFacade, 'salesOrderFromState$', {
      get: jest.fn(() => of(salesOrderFactory.build())),
    });
  });
  describe('showLoader', () => {
    it('should return true', () => {
      const showLoader = new SummaryStepFinishedStrategy(
        hardwareCheckoutFacade,
        summaryFacade,
        urlService,
        mediaQueryService,
        eventFacade
      ).showLoader();
      expect(showLoader).toBe(true);
    });
  });
  describe('execute', () => {
    it('should throw an error when submit fails', async () => {
      new SummaryStepFinishedStrategy(hardwareCheckoutFacade, summaryFacade, urlService, mediaQueryService, eventFacade)
        .execute()
        .subscribe(
          () => {
            fail('should throw error');
          },
          (err) => {
            expect(err).toBeDefined();
          }
        );
    });
    it('should trigger order submitted event when order is not in awaiting payment status', fakeAsync(() => {
      jest.spyOn(SalesOrderUtil, 'orderAwaitsPayment').mockReturnValue(false);
      jest.spyOn(SalesOrderUtil, 'getDeliveryOrderItem').mockReturnValue(orderItemTestFactory.build());
      jest.spyOn(PaymentRequestUtil, 'getPaymentRequestObject').mockReturnValue(paymentRequest);
      new SummaryStepFinishedStrategy(hardwareCheckoutFacade, summaryFacade, urlService, mediaQueryService, eventFacade)
        .execute()
        .subscribe(() => {
          tick();
        });
      expect(eventFacade.triggerAnalyticsClickEvent).toHaveBeenCalledWith({ name: 'order submitted' });
    }));
    it('should not trigger order submitted event when order is in awaiting payment status', fakeAsync(() => {
      jest.spyOn(SalesOrderUtil, 'orderAwaitsPayment').mockReturnValue(true);
      jest.spyOn(SalesOrderUtil, 'getDeliveryOrderItem').mockReturnValue(orderItemTestFactory.build());
      jest.spyOn(PaymentRequestUtil, 'getPaymentRequestObject').mockReturnValue(paymentRequest);
      new SummaryStepFinishedStrategy(hardwareCheckoutFacade, summaryFacade, urlService, mediaQueryService, eventFacade)
        .execute()
        .subscribe(() => {
          tick();
        });
      expect(eventFacade.triggerAnalyticsClickEvent).not.toHaveBeenCalled();
    }));
    it('should pass the language as part of request for payment', (done) => {
      jest.spyOn(SalesOrderUtil, 'getDeliveryOrderItem').mockReturnValue(orderItemTestFactory.build());
      hardwareCheckoutFacade.getPaymentRequestObject(paymentRequest).subscribe({
        next: (response) => {
          expect(response).toEqual(ingenicoRequest);
          done();
        },
      });
    });
  });
});
