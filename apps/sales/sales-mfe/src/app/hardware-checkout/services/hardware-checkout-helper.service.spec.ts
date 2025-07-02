import { Injectable } from '@angular/core';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { HardwareCheckoutFacade } from '../facades/hardware-checkout.facade';
import { HardwareCheckoutHelperService } from './hardware-checkout-helper.service';
import { errorObjectFactory } from '../interfaces/error.interface.testfactory';
import { ReverseProxyService } from './reverse-proxy.service';
import { PaymentService } from './payment.service';
import {
  aemInput,
  contactFactory,
  customerAccountDetailsFactory,
  customerAccountDetailsSohoFactory,
  CustomerAccountTypeEnum,
  CustomerAccountUtil,
  CustomerTypeEnum,
  defaultSdataSalesOfferFactory,
  personalIdentityTestFactory,
  salesOrderFactory,
  setAnalyticsAttributes,
  UrlRequestParameters,
} from '@sales/hardware-checkout/data-access';
import { of, pipe, throwError } from 'rxjs';
import { addressUnitTestfactory } from '@sales/shared/address/data-access';
import { JsonUrlService, UrlService } from '@telenet/ng-lib-page';
import { StepFacade } from '@sales/shared/data-access';
import { HardwareCheckoutConstants } from '../constants/hardware-checkout.constants';
import { ConfigService } from '@telenet/ng-lib-config';
import { LoginDetailsTestfactory, LoginService } from '@telenet/ng-lib-ocapi';
import { customerDiscountFactory } from '@sales/etf/data-access';
import { StrategyUtil } from '../utils/strategy.util';
import { map } from 'rxjs/operators';
import { CustomerIncorrectStatus } from '../constants/ordercorrections.constants';
import { AemInputNotSet, GetCustomerDataError } from '../constants/errors.constants';
import { HardwareCheckoutError } from '../classes/hardware-checkout-error.class';
import { EventFacade, EventTypeEnum, StepEventBody } from '@sales/events/data-access';
import { deliveryEventStepKey } from '@sales/delivery/feat-delivery';
import { summaryEventStepKey } from '@sales/summary/feat-summary';
import { PersonalInfoUtil } from '../utils/personal-info.util';
import { personalInfoFactory } from '@sales/delivery/data-access';

@Injectable({ providedIn: 'root' })
export class MockService {}

const thankYouStepKey = 'confirmation';

describe('HardwareHelperCheckoutService', () => {
  let store$: MockStore;
  let reverseProxyService!: {
    createSalesOrder: jest.Mock;
  };
  let paymentService!: {
    getPaymentObject: jest.Mock;
  };
  let configService: ConfigService;

  let hardwareCheckoutFacade: HardwareCheckoutFacade;
  let stepFacade: StepFacade;
  let eventFacade: EventFacade;
  let hardwareCheckoutHelperService: HardwareCheckoutHelperService;
  let urlService: UrlService;
  let jsonUrlService: JsonUrlService;
  let loginService: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, StoreModule.forRoot()],
      providers: [
        HardwareCheckoutFacade,
        HardwareCheckoutHelperService,
        ReverseProxyService,
        UrlService,
        StepFacade,
        EventFacade,
        JsonUrlService,
        LoginService,
        provideMockStore(),
        {
          provide: ReverseProxyService,
          useValue: reverseProxyService,
        },
        {
          provide: PaymentService,
          useValue: paymentService,
        },
        {
          provide: 'Window',
          useValue: window,
        },
      ],
    });

    configService = TestBed.inject(ConfigService);
    jest.spyOn(configService, 'getConfig').mockReturnValue('http://test/url');

    store$ = TestBed.inject(MockStore);
    hardwareCheckoutFacade = TestBed.inject(HardwareCheckoutFacade);
    stepFacade = TestBed.inject(StepFacade);
    eventFacade = TestBed.inject(EventFacade);
    hardwareCheckoutHelperService = TestBed.inject(HardwareCheckoutHelperService);
    urlService = TestBed.inject(UrlService);
    jsonUrlService = TestBed.inject(JsonUrlService);
    loginService = TestBed.inject(LoginService);

    jest.spyOn(hardwareCheckoutFacade, 'setViewState');
    jest.spyOn(hardwareCheckoutFacade, 'setBackButtonVisibility');
    jest.spyOn(hardwareCheckoutFacade, 'setStartStepLoadTime');
    jest.spyOn(hardwareCheckoutFacade, 'retrieveSalesOrder').mockReturnValue(of(salesOrderFactory.build()));
    jest.spyOn(stepFacade, 'setStepConfig');
    jest.spyOn(urlService, 'getRequestParamValue');
    jest.spyOn(store$, 'dispatch');
  });

  describe('handleCustomerType', () => {
    it('should set the customer type to SOHO for SOHO customers', (done) => {
      jest
        .spyOn(hardwareCheckoutFacade, 'getCustomerAccountDetails')
        .mockReturnValue(of(customerAccountDetailsSohoFactory.build()));
      jest.spyOn(hardwareCheckoutFacade, 'setCustomerAccountDetails');
      jest.spyOn(hardwareCheckoutFacade, 'setPersonalInfo');
      jest.spyOn(hardwareCheckoutFacade, 'getAddressById').mockReturnValue(of(addressUnitTestfactory.build()));
      jest.spyOn(hardwareCheckoutFacade, 'setAddress');
      jest.spyOn(hardwareCheckoutFacade, 'setCustomerType');

      hardwareCheckoutHelperService.handleCustomerAccountData().subscribe({
        next: () => {
          expect(hardwareCheckoutFacade.setCustomerType).toHaveBeenCalledWith(CustomerTypeEnum.SOHO);
          done();
        },
      });
    });

    it('should set the customer type to RES for RES customers', (done) => {
      jest
        .spyOn(hardwareCheckoutFacade, 'getCustomerAccountDetails')
        .mockReturnValue(of(customerAccountDetailsFactory.build()));
      jest.spyOn(hardwareCheckoutFacade, 'setCustomerAccountDetails');
      jest.spyOn(hardwareCheckoutFacade, 'setPersonalInfo');
      jest.spyOn(hardwareCheckoutFacade, 'getAddressById').mockReturnValue(of(addressUnitTestfactory.build()));
      jest.spyOn(hardwareCheckoutFacade, 'setAddress');
      jest.spyOn(hardwareCheckoutFacade, 'setCustomerType');

      hardwareCheckoutHelperService.handleCustomerAccountData().subscribe({
        next: () => {
          expect(hardwareCheckoutFacade.setCustomerType).toHaveBeenCalledWith(CustomerTypeEnum.RESIDENTIAL);
          done();
        },
      });
    });
  });

  describe('handleCustomerStatus', () => {
    let setOrderCorrectionSpy: jest.SpyInstance;
    let setErrorSpy: jest.SpyInstance;

    beforeEach(() => {
      console.log = jest.fn();
      jest.spyOn(hardwareCheckoutFacade, 'getCustomerAccountDetails').mockReturnValue(
        of(
          customerAccountDetailsFactory.build({
            status: CustomerAccountTypeEnum.FORMER,
          })
        )
      );
      jest.spyOn(hardwareCheckoutFacade, 'setCustomerAccountDetails');
      jest.spyOn(hardwareCheckoutFacade, 'setPersonalInfo');
      jest.spyOn(hardwareCheckoutFacade, 'getAddressById').mockReturnValue(of(addressUnitTestfactory.build()));
      jest.spyOn(hardwareCheckoutFacade, 'setAddress');
      jest.spyOn(hardwareCheckoutFacade, 'setCustomerType');

      setErrorSpy = jest.spyOn(hardwareCheckoutHelperService, 'setError');
      setOrderCorrectionSpy = jest.spyOn(hardwareCheckoutHelperService, 'setOrderCorrection');
    });

    it('should call setOrderCorrection when customer status is blocked and redirect URL is available', (done) => {
      const aemInputValue = {
        thankyouRedirectUrl: 'thank-you-url',
        contactUsRedirectUrlInput: 'contact-us-url',
        customerServiceRedirectUrlInput: 'customer-service-url',
      };
      store$.overrideSelector(aemInput, aemInputValue);

      hardwareCheckoutHelperService.handleCustomerAccountData().subscribe({
        next: () => {
          expect(setOrderCorrectionSpy).toHaveBeenCalledWith(
            CustomerIncorrectStatus,
            aemInputValue.customerServiceRedirectUrlInput
          );
          done();
        },
      });
    });

    it('should call setError when customer status is blocked and redirect URL is not available', (done) => {
      const setErrorSpy = jest.spyOn(hardwareCheckoutHelperService, 'setError');

      store$.overrideSelector(aemInput, undefined);
      hardwareCheckoutHelperService.handleCustomerAccountData().subscribe({
        next: () => {
          expect(setErrorSpy).toHaveBeenCalledWith(new HardwareCheckoutError(AemInputNotSet), undefined, undefined);
          done();
        },
      });
    });

    it('should not call setOrderCorrection or setError when customer status is not blocked', (done) => {
      jest.spyOn(hardwareCheckoutFacade, 'getCustomerAccountDetails').mockReturnValue(
        of(
          customerAccountDetailsFactory.build({
            status: CustomerAccountTypeEnum.ACTIVE,
          })
        )
      );

      const aemInputValue = {
        thankyouRedirectUrl: 'thank-you-url',
        contactUsRedirectUrlInput: 'contact-us-url',
        customerServiceRedirectUrlInput: 'customer-service-url',
      };
      store$.overrideSelector(aemInput, aemInputValue);

      hardwareCheckoutHelperService.handleCustomerAccountData().subscribe({
        next: () => {
          expect(setOrderCorrectionSpy).not.toHaveBeenCalled();
          expect(setErrorSpy).not.toHaveBeenCalled();
          done();
        },
      });
    });
  });

  describe('handleCustomerData', () => {
    it('should handle error when getCustomerAccountDetails fails', (done) => {
      const error = new Error('Failed to fetch customer details');
      jest.spyOn(hardwareCheckoutFacade, 'getCustomerAccountDetails').mockReturnValue(throwError(() => error));

      hardwareCheckoutHelperService.handleCustomerAccountData().subscribe({
        error: (e) => {
          expect(e).toBeInstanceOf(HardwareCheckoutError);
          expect(e['errorObject']).toBe(GetCustomerDataError);
          done();
        },
      });
    });

    it('should handle error when no address ID is found for the customer', (done) => {
      const customerDetails = customerAccountDetailsFactory.build();
      jest.spyOn(hardwareCheckoutFacade, 'getCustomerAccountDetails').mockReturnValue(of(customerDetails));

      hardwareCheckoutHelperService.handleCustomerAccountData().subscribe({
        error: (e) => {
          expect(e).toBeInstanceOf(HardwareCheckoutError);
          expect(e['errorObject']).toBe(GetCustomerDataError);
          done();
        },
      });
    });

    it('should process successfully when valid data is returned', (done) => {
      const customerDetails = customerAccountDetailsFactory.build();
      const address = addressUnitTestfactory.build();

      jest.spyOn(hardwareCheckoutFacade, 'getCustomerAccountDetails').mockReturnValue(of(customerDetails));
      jest.spyOn(hardwareCheckoutFacade, 'getAddressById').mockReturnValue(of(address));
      jest.spyOn(hardwareCheckoutFacade, 'setAddress');

      hardwareCheckoutHelperService.handleCustomerAccountData().subscribe({
        next: (result) => {
          expect(result).toBeTruthy();
          expect(hardwareCheckoutFacade.setAddress).toHaveBeenCalledWith(expect.anything());
          done();
        },
        error: () => {
          fail('Should have succeeded');
        },
      });
    });
  });

  describe('setOrderCorrection', () => {
    it('should set the view state to the error state', () => {
      const errorObject = errorObjectFactory.build();
      hardwareCheckoutHelperService.setOrderCorrection(errorObject, 'https://order-correction-url');

      expect(hardwareCheckoutFacade.setStartStepLoadTime).toHaveBeenCalled();
      expect(hardwareCheckoutFacade.setViewState).toHaveBeenCalledWith({
        error: {
          buttonTextKey: 'ng.sales-checkout.button.order-correction-test-buttontext-key',
          descriptionKey: 'ng.sales-checkout.text.order-correction-test-description-keyy',
          image: '/content/dam/www-telenet-touch/default/images/hardware-checkout/order-correction.svg',
          key: 'test-key',
          mobileImage: '/content/dam/www-telenet-touch/default/images/hardware-checkout/order-correction-mobile.svg',
          redirectUrl: 'https://order-correction-url',
          titleKey: 'ng.sales-checkout.title.order-correction-test-title-key',
          description: 'test-description',
        },
        key: 2,
        showBackButton: true,
        showNavigation: false,
      });
    });
  });

  describe('initialiseFlow', () => {
    it('should initialise flow without sales order ID', fakeAsync(() => {
      const referrerUrl = 'https://www.telenet.be/hardware/store/item/1';
      jest
        .spyOn(hardwareCheckoutFacade, 'getCustomerAccountDetails')
        .mockReturnValue(of(customerAccountDetailsFactory.build()));
      jest.spyOn(hardwareCheckoutFacade, 'setCustomerAccountDetails');
      jest.spyOn(hardwareCheckoutFacade, 'setPersonalInfo');
      jest.spyOn(hardwareCheckoutFacade, 'getAddressById').mockReturnValue(of(addressUnitTestfactory.build()));
      jest.spyOn(hardwareCheckoutFacade, 'setAddress');
      jest.spyOn(hardwareCheckoutFacade, 'setCustomerType');
      jest.spyOn(hardwareCheckoutFacade, 'setReferrerUrl');
      jest.spyOn(urlService, 'getRequestParamValue').mockImplementation((param) => {
        if (param === HardwareCheckoutConstants.SDATA) {
          return 'aaa';
        } else {
          return '';
        }
      });
      jest.spyOn(urlService, 'getParameterByName').mockReturnValue('1');
      jest.spyOn(jsonUrlService, 'decompress').mockReturnValue(of({ offers: [{ test: 1 }] }));
      jest.spyOn(document, 'referrer', 'get').mockReturnValue(referrerUrl);

      hardwareCheckoutHelperService.initialiseFlow([]);
      tick();
      expect(hardwareCheckoutFacade.setReferrerUrl).toHaveBeenCalledWith(referrerUrl);
    }));

    describe('with existing sales order', () => {
      let paymentStatus = 'canceled';
      beforeEach(() => {
        const salesOrderId = '12345';
        const mockSalesOrder = salesOrderFactory.build({ id: salesOrderId });
        jest.spyOn(urlService, 'getRequestParamValue').mockImplementation((key, _defaultValue) => {
          if (key === 'orderid') {
            return salesOrderId;
          }
          if (key === 'status') {
            return paymentStatus;
          }
          return '';
        });
        jest
          .spyOn(hardwareCheckoutHelperService, 'getSalesOrderRequestFromSdata')
          .mockReturnValue(of(defaultSdataSalesOfferFactory.build()));
        jest
          .spyOn(hardwareCheckoutHelperService, 'getUrlRequestParameters')
          .mockReturnValue(of(<UrlRequestParameters>{ salesOffer: {}, flow: '', source: '', intent: '' }));
        jest
          .spyOn(hardwareCheckoutHelperService, 'handleCustomerAccountData')
          .mockReturnValue(of(customerAccountDetailsFactory.build()));
        jest
          .spyOn(hardwareCheckoutHelperService, 'handlePersonalIdentityData')
          .mockReturnValue(of(personalIdentityTestFactory.build()));
        jest.spyOn(StrategyUtil, 'handleBillingAccount').mockReturnValue(pipe(map((value) => value)));
        jest.spyOn(StrategyUtil, 'setOmapiDetails').mockReturnValue(pipe(map((value) => value)));

        jest.spyOn(hardwareCheckoutFacade, 'retrieveSalesOrder').mockReturnValue(of(mockSalesOrder));
        jest.spyOn(hardwareCheckoutFacade, 'saveSalesOrder');
        jest.spyOn(hardwareCheckoutFacade, 'setUrlRequestParameters');
        jest.spyOn(hardwareCheckoutFacade, 'setAnalyticsAttributesFromSessionStorage');
        jest.spyOn(hardwareCheckoutFacade, 'setAnalyticsCartFromSessionStorage');
        jest.spyOn(hardwareCheckoutFacade, 'setAnalyticsCartFromSessionStorage');
        jest.spyOn(hardwareCheckoutFacade, 'getCustomerDiscounts').mockReturnValue(of(customerDiscountFactory.build()));

        jest.spyOn(stepFacade, 'setStepConfig');
        jest.spyOn(loginService, 'getLoginDetails').mockReturnValue(of(LoginDetailsTestfactory.build()));
        jest.spyOn(urlService, 'getParameterByName').mockReturnValue('1');

        jest.spyOn(eventFacade, 'triggerAnalyticsClickEvent');
        jest.spyOn(eventFacade, 'triggerAnalyticsSalesFlowEndEvent');
      });

      afterEach(() => {
        jest.clearAllMocks();
      });

      it('should initialise flow and set the correct steps based on URL status', fakeAsync(() => {
        hardwareCheckoutHelperService.initialiseFlow([{ key: thankYouStepKey }]).subscribe();

        tick();

        expect(stepFacade.setStepConfig).toHaveBeenCalledWith({ steps: [] });

        expect(hardwareCheckoutFacade.setUrlRequestParameters).toHaveBeenCalledWith(<UrlRequestParameters>{
          salesOffer: {},
          flow: 'MARKETING',
          source: 'MARKETING',
          intent: 'hardware',
          ingenicoResult: 'canceled',
        });

        expect(StrategyUtil.setOmapiDetails).toHaveBeenCalled();
        expect(hardwareCheckoutFacade.setBackButtonVisibility).toHaveBeenCalled();
        expect(eventFacade.triggerAnalyticsClickEvent).not.toHaveBeenCalled();
        expect(eventFacade.triggerAnalyticsSalesFlowEndEvent).not.toHaveBeenCalled();
      }));

      it('should go to ThankYou step and load analytics data from session storage', fakeAsync(() => {
        paymentStatus = 'accept';
        hardwareCheckoutHelperService.initialiseFlow([{ key: thankYouStepKey }]).subscribe();

        tick();

        expect(stepFacade.setStepConfig).toHaveBeenCalledWith({ steps: [thankYouStepKey] });

        expect(hardwareCheckoutFacade.setUrlRequestParameters).toHaveBeenCalledWith(<UrlRequestParameters>{
          salesOffer: {},
          flow: 'MARKETING',
          source: 'MARKETING',
          intent: 'hardware',
          ingenicoResult: 'accept',
        });

        expect(store$.dispatch).toHaveBeenCalledWith(setAnalyticsAttributes({ analyticsAttributes: {} }));

        expect(StrategyUtil.setOmapiDetails).not.toHaveBeenCalled();
        expect(eventFacade.triggerAnalyticsClickEvent).not.toHaveBeenCalledWith({ name: 'order submitted' });
        expect(hardwareCheckoutFacade.setAnalyticsAttributesFromSessionStorage).toHaveBeenCalled();
        expect(hardwareCheckoutFacade.setAnalyticsCartFromSessionStorage).toHaveBeenCalled();
        expect(hardwareCheckoutFacade.setBackButtonVisibility).toHaveBeenCalled();
        expect(hardwareCheckoutFacade.saveSalesOrder).not.toHaveBeenCalled();
        expect(StrategyUtil.handleBillingAccount).not.toHaveBeenCalled();
      }));
    });
  });

  it('should return EMPTY observable when UserNotLoggedInError is thrown', fakeAsync(() => {
    console.log = jest.fn();

    jest.spyOn(loginService, 'getLoginDetails').mockReturnValue(of(LoginDetailsTestfactory.build({ httpStatus: 400 })));
    const loginSpy = jest.spyOn(loginService, 'login').mockImplementation(() => of(null));

    jest.spyOn(urlService, 'getRequestParamValue').mockReturnValue('');
    jest
      .spyOn(hardwareCheckoutHelperService, 'getSalesOrderRequestFromSdata')
      .mockReturnValue(of(defaultSdataSalesOfferFactory.build()));
    jest
      .spyOn(hardwareCheckoutHelperService, 'getUrlRequestParameters')
      .mockReturnValue(of(<UrlRequestParameters>{ salesOffer: {}, flow: '', source: '', intent: '' }));

    const observerSpy = {
      next: jest.fn(),
      error: jest.fn(),
      complete: jest.fn(),
    };

    // Execute the method under test
    hardwareCheckoutHelperService.initialiseFlow([]).subscribe(observerSpy);

    tick();

    expect(observerSpy.next).not.toHaveBeenCalled();
    expect(observerSpy.error).not.toHaveBeenCalled();
    expect(observerSpy.complete).toHaveBeenCalled();

    expect(loginSpy).toHaveBeenCalled();
  }));

  it('should propagate other errors', fakeAsync(() => {
    console.log = jest.fn();

    jest.spyOn(loginService, 'getLoginDetails').mockReturnValue(of(LoginDetailsTestfactory.build()));
    jest.spyOn(urlService, 'getRequestParamValue').mockReturnValue('');
    jest
      .spyOn(hardwareCheckoutHelperService, 'getSalesOrderRequestFromSdata')
      .mockReturnValue(of(defaultSdataSalesOfferFactory.build()));
    jest
      .spyOn(hardwareCheckoutHelperService, 'getUrlRequestParameters')
      .mockReturnValue(of(<UrlRequestParameters>{ salesOffer: {}, flow: '', source: '', intent: '' }));

    const genericError = new Error('GenericError');
    jest.spyOn(hardwareCheckoutFacade, 'getCustomerDiscounts').mockReturnValue(throwError(() => genericError));

    const observerSpy = {
      next: jest.fn(),
      error: jest.fn(),
      complete: jest.fn(),
    };

    // Execute the method under test
    hardwareCheckoutHelperService.initialiseFlow([]).subscribe(observerSpy);

    tick();

    expect(observerSpy.next).not.toHaveBeenCalled();
    expect(observerSpy.error).toHaveBeenCalled();
    expect(observerSpy.complete).not.toHaveBeenCalled();
  }));

  describe('goToNextStepIfNeeded', () => {
    const NAVIGATED_TO_NEXT_STEP = 'navigated to next step';
    beforeEach(() => {
      jest.spyOn(hardwareCheckoutFacade, 'setStartStepLoadTime');
      jest.spyOn(eventFacade, 'triggerAnalyticsClickEvent');
    });
    it('should set Start Step Load Time on STEP_FINISHED events', () => {
      hardwareCheckoutHelperService.goToNextStepIfNeeded({ eventType: EventTypeEnum.STEP_FINISHED });

      expect(hardwareCheckoutFacade.setStartStepLoadTime).toHaveBeenCalled();
      expect(eventFacade.triggerAnalyticsClickEvent).toHaveBeenCalledWith({ name: NAVIGATED_TO_NEXT_STEP });
    });
    it('should not set Start Step Load Time on other events', () => {
      hardwareCheckoutHelperService.goToNextStepIfNeeded({ eventType: EventTypeEnum.STEP_LOADED });

      expect(hardwareCheckoutFacade.setStartStepLoadTime).not.toHaveBeenCalled();
      expect(eventFacade.triggerAnalyticsClickEvent).not.toHaveBeenCalled();
    });
    it('should fire navigated-to-next-step-event for STEP_FINISHED when body has stepId different from summary', () => {
      hardwareCheckoutHelperService.goToNextStepIfNeeded({
        eventType: EventTypeEnum.STEP_FINISHED,
        body: <StepEventBody>{ stepKey: deliveryEventStepKey },
      });

      expect(eventFacade.triggerAnalyticsClickEvent).toHaveBeenCalledWith({ name: NAVIGATED_TO_NEXT_STEP });
    });
    it('should not fire navigated-to-next-step-event for STEP_FINISHED when body has stepId is summary', () => {
      hardwareCheckoutHelperService.goToNextStepIfNeeded({
        eventType: EventTypeEnum.STEP_FINISHED,
        body: <StepEventBody>{ stepKey: summaryEventStepKey },
      });

      expect(eventFacade.triggerAnalyticsClickEvent).not.toHaveBeenCalledWith({ name: NAVIGATED_TO_NEXT_STEP });
    });
  });

  describe('getUrlRequestParameters', () => {
    it('should return UrlRequestParameters', () => {
      const salesOffer = defaultSdataSalesOfferFactory.build();
      jest.spyOn(hardwareCheckoutHelperService, 'getSalesOrderRequestFromSdata').mockReturnValue(of(salesOffer));

      hardwareCheckoutHelperService.getUrlRequestParameters().subscribe((result) => {
        expect(result).toEqual(<UrlRequestParameters>{
          salesOffer: salesOffer,
          flow: 'MARKETING',
          source: 'MARKETING',
          intent: 'hardware',
        });
      });
    });
  });

  describe('handleDeliveryData', () => {
    it('should process and set personal information correctly', (done) => {
      const customerAccountDetails = customerAccountDetailsFactory.build();
      const personalIdentity = personalIdentityTestFactory.build();
      const contractHolderContactDetails = contactFactory.build();
      // Mock the dependencies and methods
      jest
        .spyOn(hardwareCheckoutHelperService, 'handleCustomerAccountData')
        .mockReturnValue(of(customerAccountDetails));
      jest.spyOn(hardwareCheckoutHelperService, 'handlePersonalIdentityData').mockReturnValue(of(personalIdentity));

      const email = 'email@test.com';
      jest.spyOn(CustomerAccountUtil, 'getContractHolder').mockReturnValue(contractHolderContactDetails);
      jest.spyOn(CustomerAccountUtil, 'getContactEmail').mockReturnValue(email);

      const personalInfo = personalInfoFactory.build();
      jest.spyOn(PersonalInfoUtil, 'getPersonalInfoFromIdentityAndCustomerAccount').mockReturnValue(personalInfo);

      jest.spyOn(hardwareCheckoutFacade, 'setPersonalInfo');

      // Execute the method
      hardwareCheckoutHelperService.handleDeliveryData().subscribe({
        next: () => {
          expect(CustomerAccountUtil.getContractHolder).toHaveBeenCalledWith(customerAccountDetails);
          expect(CustomerAccountUtil.getContactEmail).toHaveBeenCalledWith(contractHolderContactDetails);
          expect(PersonalInfoUtil.getPersonalInfoFromIdentityAndCustomerAccount).toHaveBeenCalledWith(
            personalIdentity,
            customerAccountDetails
          );
          done();
        },
        error: (err) => {
          fail(`Unexpected error: ${err}`);
          done();
        },
      });
    });
  });
});
