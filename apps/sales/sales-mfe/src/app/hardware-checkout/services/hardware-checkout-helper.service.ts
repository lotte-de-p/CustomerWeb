import { Injectable } from '@angular/core';
import { AssetService, JsonUrlService, LoaderService, UrlService } from '@telenet/ng-lib-page';
import { HardwareCheckoutConstants } from '../constants/hardware-checkout.constants';
import {
  ContactDetailsCustomerCategoryEnum,
  CustomerAccountDetails,
  customerAccountTypeBlockedConst,
  CustomerAccountUtil,
  CustomerCreditClassificationTypeEnum,
  CustomerTypeEnum,
  PersonalIdentity,
  SalesOrderStateEnum,
  SdataSalesOffer,
  UrlRequestParameters,
  ViewStateEnum,
} from '@sales/hardware-checkout/data-access';
import { AddressUnit } from '@sales/shared/address/data-access';
import { HardwareCheckoutFacade } from '../facades/hardware-checkout.facade';
import { EMPTY, forkJoin, MonoTypeOperatorFunction, Observable, of, OperatorFunction, throwError } from 'rxjs';
import { catchError, map, mergeMap, take, tap } from 'rxjs/operators';
import {
  AemInputNotSet,
  CorruptSdata,
  errorButtonPrefix,
  errorMessagePrefix,
  errorTitlePrefix,
  EventStrategyError,
  GenericError,
  GetCustomerDataError,
  UserNotLoggedInError,
} from '../constants/errors.constants';
import { ErrorRedirectUrlEnum } from '../enums/error.enum';
import { LogFactory } from '@telenet/ng-lib-shared';
import { AddressUtil } from '../utils/address.util';
import { ErrorViewModel } from '@sales/error/data-access';
import { WaitingForStateUpdateStrategy } from '../strategy/waiting-for-state-update.strategy';
import { NoActionStrategy } from '../strategy/no-action.strategy';
import { EventStrategyFactory } from '../factory/event-strategy.factory';
import { ComponentStep, createIngenicoResultUtil, StepFacade } from '@sales/shared/data-access';
import { StrategyUtil } from '../utils/strategy.util';
import { CustomerDiscounts } from '@sales/etf/data-access';
import { HardwareCheckoutError } from '../classes/hardware-checkout-error.class';
import { EventFacade, EventInterface, EventTypeEnum, StepEventBody } from '@sales/events/data-access';
import { LoginDetails, LoginService } from '@telenet/ng-lib-ocapi';
import {
  CustomerHasBadCreditClassification,
  CustomerIncorrectStatus,
  OrderCorrectionButtonPrefix,
  OrderCorrectionMessagePrefix,
  OrderCorrectionTitlePrefix,
} from '../constants/ordercorrections.constants';
import { ErrorObject } from '../interfaces/error.interface';
import { HardwareCheckoutAnalytics } from '../constants/analytics/analytics.constants';
import { thankYouEventStepKey } from '@sales/thank-you/feat-thank-you';
import { summaryEventStepKey } from '@sales/summary/feat-summary';
import { SdataSalesOfferUtil } from '../utils/sdata-sales-offer.util';
import { PersonalInfo } from '@sales/delivery/data-access';
import { PersonalInfoUtil } from '../utils/personal-info.util';
import { CustomerCategoryUtil } from '../utils/customer-category.util';

@Injectable({
  providedIn: 'root',
})
export class HardwareCheckoutHelperService {
  private readonly log = LogFactory.createLogger(HardwareCheckoutHelperService);

  constructor(
    private readonly jsonUrlService: JsonUrlService,
    private readonly urlService: UrlService,
    private readonly stepFacade: StepFacade,
    private readonly eventFacade: EventFacade,
    private readonly hardwareCheckoutFacade: HardwareCheckoutFacade,
    private readonly eventStrategyFactory: EventStrategyFactory,
    private readonly loaderService: LoaderService,
    private readonly loginService: LoginService
  ) {}

  getUrlRequestParameters(): Observable<UrlRequestParameters> {
    return this.getSalesOrderRequestFromSdata().pipe(
      take(1),
      map(
        (salesOffer) =>
          <UrlRequestParameters>{
            salesOffer: salesOffer,
            flow: HardwareCheckoutAnalytics.FLOW,
            source: HardwareCheckoutAnalytics.SOURCE,
            intent: HardwareCheckoutAnalytics.INTENT,
          }
      )
    );
  }

  handleDeliveryData() {
    return forkJoin({
      customerAccountDetails: this.handleCustomerAccountData(),
      personalIdentity: this.handlePersonalIdentityData(),
    }).pipe(
      tap(({ customerAccountDetails, personalIdentity }) => {
        const contractHolderContactDetails = CustomerAccountUtil.getContractHolder(customerAccountDetails);
        const contractHolderEmail = CustomerAccountUtil.getContactEmail(contractHolderContactDetails);

        const deliveryInfo: PersonalInfo = PersonalInfoUtil.getPersonalInfoFromIdentityAndCustomerAccount(
          personalIdentity,
          customerAccountDetails
        );
        this.hardwareCheckoutFacade.setPersonalInfo(deliveryInfo, {
          epithet: contractHolderContactDetails.title,
          firstname: contractHolderContactDetails.firstNameOfficial,
          lastname: contractHolderContactDetails.lastName,
          email: contractHolderEmail,
        });
      })
    );
  }

  handlePersonalIdentityData(): Observable<PersonalIdentity> {
    return this.hardwareCheckoutFacade.getPid().pipe(
      tap((personalIdentity) => {
        this.hardwareCheckoutFacade.setPersonalIdentity(personalIdentity);
      })
    );
  }

  handleCustomerAccountData(): Observable<CustomerAccountDetails> {
    return this.hardwareCheckoutFacade.getCustomerAccountDetails().pipe(
      tap((customerAccountDetails) => {
        this.hardwareCheckoutFacade.setCustomerAccountDetails(customerAccountDetails);
        this.handleCustomerType(customerAccountDetails);
        this.handleCustomerStatus(customerAccountDetails);
        this.handleCustomerBadPayer(customerAccountDetails);
      }),
      mergeMap((contactDetails: CustomerAccountDetails) => {
        let addressUnitId: string | undefined = '';
        const customerCategory = CustomerCategoryUtil.getCustomerCategory(contactDetails.customerCategory.name);
        if (customerCategory === ContactDetailsCustomerCategoryEnum.RESIDENTIAL) {
          addressUnitId = contactDetails.customerAddress?.id;
        } else if (customerCategory === ContactDetailsCustomerCategoryEnum.SOHO) {
          addressUnitId = contactDetails.legalAddress?.id;
        }
        if (addressUnitId) {
          return this.hardwareCheckoutFacade.getAddressById(addressUnitId).pipe(
            tap((address: AddressUnit) => {
              this.setCustomerAddress(address);
            }),
            map(() => contactDetails) // Ensure the main observable still returns CustomerAccountDetails
          );
        } else {
          return of(contactDetails); // Return contactDetails if there's no address to fetch
        }
      }),
      catchError((error) => {
        if (error instanceof HardwareCheckoutError) {
          throw error;
        } else {
          throw new HardwareCheckoutError(GetCustomerDataError, error);
        }
      })
    );
  }

  setCustomerAddress(address: AddressUnit) {
    this.hardwareCheckoutFacade.setAddress(AddressUtil.convertNcAddressToDeliveryAddress(address));
  }

  executeEventStrategy(): OperatorFunction<[EventInterface | undefined, SalesOrderStateEnum], EventInterface> {
    return mergeMap(([stepEvent, salesOrderState]) => {
      if (stepEvent) {
        const eventStrategy = this.eventStrategyFactory.getStrategy(stepEvent, salesOrderState);
        if (eventStrategy) {
          if (eventStrategy.showLoader()) {
            this.loaderService.start();
          }
          if (
            !(eventStrategy instanceof WaitingForStateUpdateStrategy) &&
            !(eventStrategy instanceof NoActionStrategy)
          ) {
            return eventStrategy.execute().pipe(
              map(() => {
                return stepEvent;
              })
            );
          } else return EMPTY;
        }
      }
      throw EventStrategyError;
    });
  }

  goToNextStepIfNeeded(event: EventInterface) {
    if (event && event.eventType === EventTypeEnum.STEP_FINISHED) {
      if ((<StepEventBody>event.body)?.stepKey !== summaryEventStepKey) {
        this.eventFacade.triggerAnalyticsClickEvent({ name: 'navigated to next step' });
      }
      this.hardwareCheckoutFacade.setStartStepLoadTime();
      this.loaderService.stop();
      this.stepFacade.goToNextStep();
    }
  }

  logDebug() {
    return tap({
      next: ([stepEvent, salesOrderState]) => {
        this.log.logDebug('Received event: ', {
          stepEvent: stepEvent,
          salesOrderState: salesOrderState,
          strategy: this.eventStrategyFactory.getStrategy(stepEvent, salesOrderState),
        });
      },
    });
  }

  initialiseFlow(componentSteps: ComponentStep[]): Observable<boolean> {
    this.hardwareCheckoutFacade.setReferrerUrl(this.getReferrerUrl());
    const salesOrderIdFromUrl = this.getSalesOrderIdFromUrl();
    if (salesOrderIdFromUrl === '') {
      return this.initialiseFlowFromBasket(componentSteps);
    } else {
      return this.initialiseFlowComingBackFromIngenico(componentSteps, salesOrderIdFromUrl);
    }
  }

  setOrderCorrection(errorObject: ErrorObject, url: string) {
    this.hardwareCheckoutFacade.setStartStepLoadTime();
    const errorViewModel: ErrorViewModel = {
      key: errorObject.key,
      titleKey: OrderCorrectionTitlePrefix.concat(errorObject.titleKey),
      buttonTextKey: OrderCorrectionButtonPrefix.concat(errorObject.buttonTextKey),
      descriptionKey: OrderCorrectionMessagePrefix.concat(errorObject.descriptionKey),
      image: AssetService.getImagePath('HARDWARE_CHECKOUT', HardwareCheckoutConstants.ORDER_CORRECTION_IMAGE),
      mobileImage: AssetService.getImagePath(
        'HARDWARE_CHECKOUT',
        HardwareCheckoutConstants.ORDER_CORRECTION_MOBILE_IMAGE
      ),
      redirectUrl: url,
      description: errorObject.description,
    };

    this.hardwareCheckoutFacade.setViewState({
      key: ViewStateEnum.ERROR,
      showNavigation: false,
      showBackButton: true,
      error: errorViewModel,
    });
  }

  setError(error: Error, customerServiceRedirectUrl: string | undefined, contactUsRedirectUrl: string | undefined) {
    this.hardwareCheckoutFacade.setStartStepLoadTime();
    console.error(error.message, error);

    if (window['dtrum'] && window['dtrum'].reportError) {
      window['dtrum'].reportError(error);
    } else {
      console.warn('Dynatrace dtrum API not available');
    }

    let hardwareCheckoutError: HardwareCheckoutError;

    if (error instanceof HardwareCheckoutError) {
      hardwareCheckoutError = error;
    } else {
      hardwareCheckoutError = new HardwareCheckoutError(GenericError, error);
    }

    const errorViewModel: ErrorViewModel = {
      key: hardwareCheckoutError.errorObject.key,
      titleKey: errorTitlePrefix.concat(hardwareCheckoutError.errorObject.titleKey),
      descriptionKey: errorMessagePrefix.concat(hardwareCheckoutError.errorObject.descriptionKey),
      buttonTextKey: errorButtonPrefix.concat(hardwareCheckoutError.errorObject.buttonTextKey),
      redirectUrl: undefined,
      image: AssetService.getImagePath('HARDWARE_CHECKOUT', HardwareCheckoutConstants.ORDER_CORRECTION_IMAGE),
      mobileImage: AssetService.getImagePath(
        'HARDWARE_CHECKOUT',
        HardwareCheckoutConstants.ORDER_CORRECTION_MOBILE_IMAGE
      ),
      apiRequest: hardwareCheckoutError.errorObject.apiRequest,
      description: hardwareCheckoutError.errorObject.description,
    };
    if (customerServiceRedirectUrl && contactUsRedirectUrl) {
      errorViewModel.redirectUrl =
        hardwareCheckoutError.errorObject.type === ErrorRedirectUrlEnum.CUSTOMER_SERVICE_REDIRECT_URL
          ? customerServiceRedirectUrl
          : contactUsRedirectUrl;
    }
    this.hardwareCheckoutFacade.setViewState({
      key: ViewStateEnum.ERROR,
      showNavigation: false,
      showBackButton: true,
      error: errorViewModel,
    });
  }

  getSalesOrderIdFromUrl(): string {
    return this.urlService.getRequestParamValue(HardwareCheckoutConstants.SALES_ORDER_URL_ID, '');
  }

  getSalesOrderRequestFromSdata(): Observable<SdataSalesOffer> {
    const encodedString = this.urlService.getRequestParamValue(HardwareCheckoutConstants.SDATA, '');

    if (encodedString !== '') {
      return this.jsonUrlService.decompress(encodedString).pipe(
        map((response) => {
          if (response && response['offers'] && response['offers'][0]) {
            return response['offers'][0];
          }
        })
      );
    }
    throw new HardwareCheckoutError(CorruptSdata);
  }

  private initialiseFlowFromBasket(componentSteps: ComponentStep[]) {
    return this.getUrlRequestParameters().pipe(
      this.confirmUserIsLoggedIn(),
      tap((urlRequestParams) => {
        this.hardwareCheckoutFacade.setUrlRequestParameters(urlRequestParams);
        this.eventFacade.triggerAnalyticsSalesFlowStartEvent();
      }),
      mergeMap((urlRequestParams) => {
        return this.hardwareCheckoutFacade.getCustomerDiscounts().pipe(
          this.handleComponentSteps(componentSteps, urlRequestParams.salesOffer),
          tap(() => {
            this.hardwareCheckoutFacade.setDeliveryViewModel(urlRequestParams.salesOffer);
          })
        );
      }),
      mergeMap(() => this.handleDeliveryData().pipe(take(1))),
      map(() => true),
      StrategyUtil.handleBillingAccount(this.hardwareCheckoutFacade),
      catchError((error) => {
        console.log('error', error);

        if (error.message === UserNotLoggedInError) {
          return EMPTY;
        } else {
          return throwError(() => error);
        }
      })
    );
  }

  private initialiseFlowComingBackFromIngenico(
    componentSteps: ComponentStep[],
    salesOrderIdFromUrl: string
  ): Observable<boolean> {
    const ingenicoResult = this.urlService.getRequestParamValue(HardwareCheckoutConstants.STATUS_URL, '');
    const ingenicoResultUtil = createIngenicoResultUtil(ingenicoResult);
    // coming back from Ingenico we no longer have the URL request parameters, so setting to default
    this.setDefaultUrlRequestParameters(ingenicoResult);

    if (ingenicoResultUtil.isSuccessful()) {
      // for success status we only show thank you step
      return this.initialisePaymentSuccessFlow(componentSteps, salesOrderIdFromUrl);
    } else {
      // for error/cancel status we need to reload the sales order and show the summary step
      return this.initialisePaymentFailedFlow(salesOrderIdFromUrl, componentSteps);
    }
  }

  private initialisePaymentSuccessFlow(componentSteps: ComponentStep[], salesOrderIdFromUrl: string) {
    this.hardwareCheckoutFacade.setOrderNumber(salesOrderIdFromUrl);
    // reset analytics info from session storage
    this.hardwareCheckoutFacade.setAnalyticsAttributesFromSessionStorage();
    this.hardwareCheckoutFacade.setAnalyticsCartFromSessionStorage();

    const filteredSteps = componentSteps.filter((step) => step.key === thankYouEventStepKey).map((step) => step.key);
    this.stepFacade.setStepConfig({ steps: filteredSteps });
    this.hardwareCheckoutFacade.setBackButtonVisibility(false);

    return of(true);
  }

  private initialisePaymentFailedFlow(salesOrderIdFromUrl: string, componentSteps: ComponentStep[]) {
    return forkJoin({
      deliveryData: this.handleDeliveryData().pipe(take(1)),
      salesOrder: this.hardwareCheckoutFacade.retrieveSalesOrder(salesOrderIdFromUrl),
    }).pipe(
      tap(() => {
        const filteredSteps = componentSteps
          .filter((step) => {
            return step.key === 'summary';
          })
          .map((step) => step.key);
        this.stepFacade.setStepConfig({ steps: filteredSteps });
        this.hardwareCheckoutFacade.setBackButtonVisibility(false);
      }),
      map(({ salesOrder }) => salesOrder),
      StrategyUtil.setOmapiDetails(this.hardwareCheckoutFacade),
      mergeMap((salesOrder) => {
        this.hardwareCheckoutFacade.saveSalesOrder(salesOrder);
        return of(salesOrder);
      }),
      StrategyUtil.setOmapiDetails(this.hardwareCheckoutFacade),
      map(() => true),
      StrategyUtil.handleBillingAccount(this.hardwareCheckoutFacade)
    );
  }

  private confirmUserIsLoggedIn(): MonoTypeOperatorFunction<UrlRequestParameters> {
    return mergeMap((urlRequestParams) => {
      return this.loginService.getLoginDetails().pipe(
        map((loginDetails: LoginDetails) => {
          if (!loginDetails.isLoggedIn()) {
            this.loginService.login();
            throw new Error(UserNotLoggedInError);
          }
          return urlRequestParams;
        })
      );
    });
  }

  private handleComponentSteps(componentSteps: ComponentStep[], sdataSalesOffer: SdataSalesOffer) {
    componentSteps = componentSteps.filter((step) => {
      return step.key !== thankYouEventStepKey;
    });
    const numberOfOrderedProducts = SdataSalesOfferUtil.getSdataSalesOfferItemsWithDiscount(sdataSalesOffer).length;
    return tap((customerDiscounts: CustomerDiscounts) => {
      if (Number(customerDiscounts.usedSlots.length) + numberOfOrderedProducts <= 5) {
        componentSteps = componentSteps.filter((step) => {
          return step.key !== 'etf';
        });
      } else {
        this.hardwareCheckoutFacade.setEtfUsedSlots(customerDiscounts);
      }

      const stepKeys = componentSteps.map((step) => step.key);
      this.stepFacade.setStepConfig({ steps: stepKeys });
    });
  }

  private handleCustomerType(customerAccountDetails: CustomerAccountDetails) {
    let customerType = CustomerTypeEnum.RESIDENTIAL;
    if (
      CustomerCategoryUtil.getCustomerCategory(customerAccountDetails.customerCategory.name.valueOf()) ===
      CustomerTypeEnum.SOHO.valueOf()
    ) {
      customerType = CustomerTypeEnum.SOHO;
    }
    this.hardwareCheckoutFacade.setCustomerType(customerType);
  }

  private handleCustomerStatus(customerAccountDetails: CustomerAccountDetails) {
    const isBlocked = customerAccountTypeBlockedConst.includes(customerAccountDetails.status);
    if (isBlocked) {
      this.hardwareCheckoutFacade.aemInput$.pipe(take(1)).subscribe({
        next: (aemInput) => {
          if (aemInput && aemInput.customerServiceRedirectUrlInput) {
            this.setOrderCorrection(CustomerIncorrectStatus, aemInput.customerServiceRedirectUrlInput);
          } else {
            this.setError(new HardwareCheckoutError(AemInputNotSet), undefined, undefined);
          }
        },
      });
    }
  }

  private handleCustomerBadPayer(customerAccountDetails: CustomerAccountDetails) {
    const isBlocked = customerAccountDetails.creditClassificationCode === CustomerCreditClassificationTypeEnum.NO_SALES;

    if (isBlocked) {
      this.hardwareCheckoutFacade.aemInput$.pipe(take(1)).subscribe({
        next: (aemInput) => {
          if (aemInput && aemInput.customerServiceRedirectUrlInput) {
            this.setOrderCorrection(CustomerHasBadCreditClassification, aemInput.customerServiceRedirectUrlInput);
          } else {
            this.setError(new HardwareCheckoutError(AemInputNotSet), undefined, undefined);
          }
        },
      });
    }
  }

  private getReferrerUrl() {
    return document.referrer;
  }

  private setDefaultUrlRequestParameters(ingenicoResult: string) {
    this.hardwareCheckoutFacade.setUrlRequestParameters(<UrlRequestParameters>{
      salesOffer: {},
      flow: HardwareCheckoutAnalytics.FLOW,
      source: HardwareCheckoutAnalytics.SOURCE,
      intent: HardwareCheckoutAnalytics.INTENT,
      ingenicoResult: ingenicoResult,
    });
  }
}
