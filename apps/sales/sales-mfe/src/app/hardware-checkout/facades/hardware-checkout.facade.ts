import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import {
  addDeliveryNotification,
  bigItemDeliveryNotification,
  contactAddress,
  deliveryAddress,
  DeliveryAddress,
  multipleItemDelivery,
  PersonalInfo,
  personalInfo,
  PersonalInfo as DeliveryPersonalInfo,
  resetNotifications,
  setAvailableAddresses,
  setDeliveryAddress,
  setDeliveryItems,
  setDeliveryPersonalInfo,
} from '@sales/delivery/data-access';
import {
  CustomerDiscounts,
  OrderItemWithDiscount,
  setOrderItemsWithDiscount,
  setUsedSlots,
  UsedSlot,
  usedSlots,
} from '@sales/etf/data-access';
import { EventInterface, selectEvent } from '@sales/events/data-access';
import {
  AemInput,
  aemInput,
  BillingAccount,
  contractSummaryGenerationNotPossible,
  contractSummaryUrl,
  CustomerAccountDetails,
  customerAccountDetails,
  customerType,
  CustomerTypeEnum,
  defaultBillingAccount,
  DeliveryMethods,
  ingenicoResult,
  missingData,
  MissingIdentityDataInterface,
  omapiProducts,
  omapiQueryProducts,
  OrderItem,
  PaymentRequestDataInterface,
  PaymentResponseDataInterface,
  PersonalIdentity,
  referrerUrl,
  Rule,
  salesOffer,
  SalesOrder,
  salesOrderFromState,
  salesOrderState,
  SalesOrderStateEnum,
  saveSalesOrder,
  SdataSalesOffer,
  SessionStorageConstants,
  setAemInput,
  setAnalyticsAttributes,
  setBackButtonVisibility,
  setBillingAccounts,
  setCart,
  setContractSummaryGenerationNotPossible,
  setContractSummaryRequired,
  setContractSummaryUrl,
  setCustomerAccountDetails,
  setCustomerType,
  setNavigationState,
  setOmapiProducts,
  setOmapiQueryProducts,
  setPersonalIdentity,
  setReferrerUrl,
  setSalesOrderState,
  setStartStepLoadTime,
  setUrlRequestParameters,
  setViewState,
  UrlRequestParameters,
  ViewState,
  viewState,
} from '@sales/hardware-checkout/data-access';
import { AddressUnit } from '@sales/shared/address/data-access';
import {
  addSummaryDeliveryNotification,
  addSummaryGeneralNotification,
  DeliveryInfo,
  DeliveryInfoAddress,
  DeliveryPersonalInfo as SummaryDeliveryPersonalInfo,
  setIngenicoFormUrl,
  setSummaryContractSummaryRequired,
  setSummaryDeliveryAddress,
  setSummaryDeliveryInfo,
  setSummaryDeliveryPersonalInfo,
  setSummaryDepreciationItems,
  setSummaryInvoiceInfo,
  setSummaryOrderItems,
  setSummaryPersonalInfo,
  setSummaryPrices,
  setTermsAndConditionsUrl,
  SummaryNotification,
  SummaryPersonalInfo,
} from '@sales/summary/data-access';
import { setOrderNumber, setRedirectUrl } from '@sales/thank-you/data-access';
import { ConfigConstants, ConfigService } from '@telenet/ng-lib-config';
import { OmapiProduct, OmapiProductService } from '@telenet/ng-lib-omapi';
import {
  OmapiQueryProductService,
  RawOmapiQueryProductInterface,
  RawOmapiQueryProductInterfaceData,
} from '@telenet/ng-lib-omapi-query';
import { LanguageService } from '@telenet/ng-lib-page';
import { mergeMap, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Cart } from 'udl';
import { HardwareCheckoutError } from '../classes/hardware-checkout-error.class';
import {
  DiscountRuleNotFound,
  OmapiQueryNotConfigured,
  UpdateHomeDeliveryCharsError,
} from '../constants/errors.constants';
import { HardwareCheckoutConstants } from '../constants/hardware-checkout.constants';
import { ContractSummaryCheckResponse } from '../interfaces/contract-summary-check-response.interface';
import { ContractSummaryGenerationResponse } from '../interfaces/contract-summary-generation-response.interface';
import { ErrorRecord } from '../interfaces/eligibility-response.interface';
import { UpdateDeliveryCharsRequest } from '../interfaces/update-installation-address-request.interface';
import { PaymentService } from '../services/payment.service';
import { ReverseProxyService } from '../services/reverse-proxy.service';
import { DeliveryUtil } from '../utils/delivery.util';
import { OmapiUtil } from '../utils/omapi.util';
import { SalesOrderUtil } from '../utils/sales-order.util';

@Injectable({ providedIn: 'root' })
export class HardwareCheckoutFacade {
  stepEvent: Observable<EventInterface | undefined> = this.store.pipe(
    select(selectEvent),
    filter((val) => val !== undefined)
  );
  salesOffer$ = this.store.select<SdataSalesOffer | undefined>(salesOffer);
  referrerUrl$ = this.store.select<string | undefined>(referrerUrl);
  defaultBillingAccount$ = this.store.select<BillingAccount | undefined>(defaultBillingAccount);
  salesOrderFromState$ = this.store.select(salesOrderFromState);
  omapiProducts$ = this.store.select(omapiProducts);
  omapiQueryProducts$ = this.store.select(omapiQueryProducts);
  viewState$ = this.store.select<ViewState>(viewState);
  salesOrderState$ = this.store.select<SalesOrderStateEnum>(salesOrderState);
  deliveryPersonalInfo$ = this.store.select<PersonalInfo | undefined>(personalInfo);
  deliveryAddress$ = this.store.select<DeliveryAddress | undefined>(deliveryAddress);
  deliveryContactAddress$ = this.store.select<DeliveryAddress | undefined>(contactAddress);
  contractSummaryUrl$ = this.store.select<string | undefined>(contractSummaryUrl);
  contractSummaryGenerationNotPossible$ = this.store.select<boolean>(contractSummaryGenerationNotPossible);
  customerType$ = this.store.select<CustomerTypeEnum>(customerType);
  customerAccountDetails$ = this.store.select<CustomerAccountDetails | undefined>(customerAccountDetails);
  aemInput$ = this.store.select<AemInput | undefined>(aemInput);
  usedDiscountSlots$: Observable<UsedSlot[] | undefined> = this.store.select(usedSlots);
  ingenicoResultUtil$ = this.store.select(ingenicoResult);
  omapiQueryBaseUrl: string;
  missingData$ = this.store.select(missingData);

  constructor(
    private readonly store: Store,
    private readonly reverseProxyService: ReverseProxyService,
    private readonly paymentService: PaymentService,
    private readonly omapiQueryProductService: OmapiQueryProductService,
    private readonly omapiProductService: OmapiProductService,
    private readonly languageService: LanguageService,
    private readonly configService: ConfigService
  ) {
    this.omapiQueryBaseUrl = this.configService.getConfig(ConfigConstants.OMAPI_QUERY_URL);
    if (!this.omapiQueryBaseUrl) {
      throw new HardwareCheckoutError(OmapiQueryNotConfigured);
    }
  }

  getPid(): Observable<PersonalIdentity> {
    return this.reverseProxyService.getPid().pipe(SalesOrderUtil.handleNcErrors());
  }

  getCustomerAccountDetails(): Observable<CustomerAccountDetails> {
    return this.reverseProxyService.getCustomerAccountDetails().pipe(SalesOrderUtil.handleNcErrors());
  }

  createSalesOrder(locationId: string): Observable<SalesOrder> {
    return this.reverseProxyService.createSalesOrder(locationId).pipe(SalesOrderUtil.handleNcErrors());
  }

  retrieveSalesOrder(salesOrderId: string): Observable<SalesOrder> {
    return this.reverseProxyService.getSalesOrder(salesOrderId).pipe(SalesOrderUtil.handleNcErrors());
  }

  createHardwareTLO(salesOrderId: string, customerType: CustomerTypeEnum): Observable<SalesOrder> {
    return this.reverseProxyService.createHardwareTLO(salesOrderId, customerType).pipe(SalesOrderUtil.handleNcErrors());
  }

  addOrderItem(salesOrderId: string, TLOOrderItemId: string, OrderItemCode: string): Observable<SalesOrder> {
    return this.reverseProxyService
      .addOrderItem(salesOrderId, TLOOrderItemId, OrderItemCode)
      .pipe(SalesOrderUtil.handleNcErrors());
  }

  deleteOrderItem(salesOrderId: string, orderItemId: string): Observable<SalesOrder> {
    return this.reverseProxyService.deleteOrderItem(salesOrderId, orderItemId).pipe(SalesOrderUtil.handleNcErrors());
  }

  saveSalesOrder(salesOrder: SalesOrder): void {
    this.store.dispatch(saveSalesOrder(salesOrder));
  }

  setThankYouRedirectUrl(url: string | undefined): void {
    this.store.dispatch(setRedirectUrl({ redirectUrl: url }));
  }

  setTermsAndConditionsUrl(url: string | undefined): void {
    this.store.dispatch(setTermsAndConditionsUrl({ termsAndConditionsUrl: url }));
  }

  updateDeliveryChars(
    salesOrderId: string,
    orderItemId: string,
    deliveryInfoChange: UpdateDeliveryCharsRequest
  ): Observable<SalesOrder> {
    return this.reverseProxyService
      .updateDeliveryChars(salesOrderId, orderItemId, deliveryInfoChange)
      .pipe(SalesOrderUtil.handleNcErrors());
  }

  addDiscount(salesOrderId: string, ruleElementId: string): Observable<SalesOrder> {
    return this.reverseProxyService.addDiscount(salesOrderId, ruleElementId).pipe(SalesOrderUtil.handleNcErrors());
  }

  getDeliveryOptions(salesOrderId: string): Observable<DeliveryMethods> {
    return this.reverseProxyService.getDeliveryOptions(salesOrderId).pipe(SalesOrderUtil.handleNcErrors());
  }

  calculateDelivery(salesOrderId: string, deliveryMethods: DeliveryMethods): Observable<SalesOrder> {
    return this.reverseProxyService
      .calculateDelivery(salesOrderId, deliveryMethods)
      .pipe(SalesOrderUtil.handleNcErrors());
  }

  checkoutDelivery(salesOrderId: string): Observable<SalesOrder> {
    return this.reverseProxyService.checkoutDelivery(salesOrderId).pipe(SalesOrderUtil.handleNcErrors());
  }

  getAddressById(addressUnitId: string): Observable<AddressUnit> {
    return this.reverseProxyService.getAddressById(addressUnitId).pipe(SalesOrderUtil.handleNcErrors());
  }

  getCustomerDiscounts(): Observable<CustomerDiscounts> {
    return this.reverseProxyService.getCustomerDiscounts().pipe(SalesOrderUtil.handleNcErrors());
  }

  getBillingAccounts(): Observable<BillingAccount[]> {
    return this.reverseProxyService.getBillingAccounts().pipe(SalesOrderUtil.handleNcErrors());
  }

  checkFeasibility(salesOrderId: string): Observable<SalesOrder> {
    return this.reverseProxyService.checkFeasibility(salesOrderId).pipe(SalesOrderUtil.handleNcErrors());
  }

  checkEligibility(salesOrderId: string): Observable<ErrorRecord[]> {
    return this.reverseProxyService.checkEligibility(salesOrderId).pipe(SalesOrderUtil.handleNcErrors());
  }

  updateCustomer(customer: MissingIdentityDataInterface): Observable<string> {
    return this.reverseProxyService.updateCustomer({
      rrn: customer.nationalRegistryNumber,
      cardIdNumber: customer.identityCardNumber,
    });
  }

  checkContractSummary(salesOrderId: string): Observable<ContractSummaryCheckResponse> {
    return this.reverseProxyService.checkContractSummary(salesOrderId).pipe(SalesOrderUtil.handleNcErrors());
  }

  generateContractSummary(salesOrderId: string): Observable<ContractSummaryGenerationResponse> {
    return this.reverseProxyService.generateContractSummary(salesOrderId).pipe(SalesOrderUtil.handleNcErrors());
  }

  setUrlRequestParameters(urlRequestParameters: UrlRequestParameters): void {
    this.store.dispatch(setUrlRequestParameters({ urlRequestParameters: urlRequestParameters }));
  }

  setOmapiQueryProducts(rawOmapiQueryProduct: RawOmapiQueryProductInterface): void {
    this.store.dispatch(setOmapiQueryProducts({ omapiProducts: rawOmapiQueryProduct.products }));
  }

  setOmapiProducts(omapiProducts: OmapiProduct[]): void {
    this.store.dispatch(setOmapiProducts({ omapiProducts: omapiProducts }));
  }

  setContractSummaryRequired(isRequired: boolean) {
    this.store.dispatch(setContractSummaryRequired({ contractSummaryRequired: isRequired }));
    this.store.dispatch(setSummaryContractSummaryRequired({ contractSummaryRequired: isRequired }));
  }

  setContractSummaryUrl(url: string) {
    this.store.dispatch(setContractSummaryUrl({ contractSummaryUrl: url }));
  }

  setContractSummaryGenerationNotPossible() {
    this.store.dispatch(setContractSummaryGenerationNotPossible());
  }

  submitSalesOrder(salesOrderId: string): Observable<SalesOrder> {
    return this.reverseProxyService.submitSalesOrder(salesOrderId).pipe(SalesOrderUtil.handleNcErrors());
  }

  setSalesorderAsAbandonable(salesOrderId: string, customerId: string, basketUrl: string): Observable<SalesOrder> {
    return this.reverseProxyService
      .setSalesorderAsAbandonable(salesOrderId, customerId, basketUrl)
      .pipe(SalesOrderUtil.handleNcErrors());
  }

  setPersonalIdentity(personalIdentity: PersonalIdentity): void {
    this.store.dispatch(setPersonalIdentity({ personalIdentity: personalIdentity }));
  }

  setPersonalInfo(deliveryPersonalInfo: DeliveryPersonalInfo, summaryPersonalInfo: SummaryPersonalInfo): void {
    this.store.dispatch(setDeliveryPersonalInfo({ personalInfo: deliveryPersonalInfo }));
    this.store.dispatch(setSummaryPersonalInfo({ personalInfo: summaryPersonalInfo }));
    this.store.dispatch(setSummaryDeliveryPersonalInfo({ personalInfo: deliveryPersonalInfo }));
  }

  setDeliveryPersonalInfo(deliveryPersonalInfo: DeliveryPersonalInfo): void {
    this.store.dispatch(setDeliveryPersonalInfo({ personalInfo: deliveryPersonalInfo }));
  }

  setSummaryDeliveryPersonalInfo(summaryPersonalInfo: SummaryDeliveryPersonalInfo): void {
    this.store.dispatch(setSummaryDeliveryPersonalInfo({ personalInfo: summaryPersonalInfo }));
  }

  setAddress(contactAddress: DeliveryAddress): void {
    this.store.dispatch(setAvailableAddresses({ availableAddresses: [contactAddress] }));
    this.store.dispatch(setDeliveryAddress({ deliveryAddress: contactAddress }));
  }

  setBillingAccounts(billingAccounts: BillingAccount[]): void {
    this.store.dispatch(setBillingAccounts({ billingAccounts: billingAccounts }));
  }

  setDeliveryAddress(contactAddress: DeliveryAddress): void {
    this.store.dispatch(setDeliveryAddress({ deliveryAddress: contactAddress }));
  }

  setDeliveryViewModel(salesOffer: SdataSalesOffer): void {
    const deliveryItems = DeliveryUtil.createDeliveryItems(salesOffer.offers);
    if (deliveryItems) {
      this.store.dispatch(setDeliveryItems({ deliveryItems: deliveryItems }));
    }
  }

  setDeliveryNotifications(salesOrder: SalesOrder, products?: RawOmapiQueryProductInterfaceData[]): void {
    const bigItemDeliveryNeeded = SalesOrderUtil.isBigItemDeliveryOrder(salesOrder, products);
    const hasMultipleItems = SalesOrderUtil.hasMultipleItems(salesOrder);
    this.store.dispatch(resetNotifications());
    if (bigItemDeliveryNeeded) {
      this.store.dispatch(addDeliveryNotification({ notification: bigItemDeliveryNotification }));
    }
    if (hasMultipleItems) {
      this.store.dispatch(addDeliveryNotification({ notification: multipleItemDelivery }));
    }
  }

  setSummaryNotifications(salesOrder: SalesOrder, products?: RawOmapiQueryProductInterfaceData[]): void {
    if (products) {
      const isBigItemDelivery = SalesOrderUtil.isBigItemDeliveryOrder(salesOrder, products);
      if (isBigItemDelivery) {
        this.addSummaryDeliveryNotification(bigItemDeliveryNotification);
      }

      const preOrderNotification = OmapiUtil.getPreOrderNotification(products, this.languageService.getLanguage());
      if (preOrderNotification) {
        this.addSummaryDeliveryNotification({
          weight: 2,
          message: preOrderNotification,
          type: 'notification',
        });
      }

      const backOrderNotification = OmapiUtil.getBackOrderNotification(products, this.languageService.getLanguage());
      if (backOrderNotification) {
        this.addSummaryDeliveryNotification({
          weight: 3,
          message: backOrderNotification,
          type: 'notification',
        });
      }
    }
  }

  setSummaryViewModel(
    salesOrder: SalesOrder,
    orderItems: OrderItem[],
    omapiProducts: OmapiProduct[],
    omapiQueryProducts: RawOmapiQueryProductInterfaceData[],
    isSoho: boolean
  ) {
    const summaryOrderItems = SalesOrderUtil.createSummaryOrderItems(
      orderItems,
      salesOrder.discountItems,
      omapiQueryProducts,
      omapiProducts,
      isSoho,
      this.languageService.getLanguage().toLocaleLowerCase()
    );

    this.store.dispatch(
      setSummaryOrderItems({
        orderItems: summaryOrderItems,
      })
    );

    const summaryPrices = SalesOrderUtil.getSummaryPrices(salesOrder, isSoho);
    this.store.dispatch(setSummaryPrices({ prices: summaryPrices }));

    const depreciationItems = SalesOrderUtil.getDepreciationItems(salesOrder, isSoho);
    this.store.dispatch(setSummaryDepreciationItems({ depreciationItems: depreciationItems }));
  }

  setSummaryDeliveryInfo(personalInfo: PersonalInfo, contactAddress: DeliveryAddress) {
    const deliveryInfo: DeliveryInfo = {
      personalInfo: {
        firstname: personalInfo.firstname,
        lastname: personalInfo.lastname,
        email: personalInfo.email,
        mobile: personalInfo.mobile,
      },
      address: {
        street: contactAddress.street ? contactAddress.street : '',
        box: contactAddress.box ? contactAddress.box : '',
        country: contactAddress.country ? contactAddress.country : '',
        houseNumber: contactAddress.houseNumber ? contactAddress.houseNumber : '',
        postalCode: contactAddress.postalCode ? contactAddress.postalCode : '',
        municipality: contactAddress.municipality ? contactAddress.municipality : '',
        subHouseNumber: contactAddress.subHouseNumber ? contactAddress.subHouseNumber : '',
      },
    };

    this.store.dispatch(setSummaryDeliveryInfo({ deliveryInfo: deliveryInfo }));
  }

  setSummaryDeliveryAddress(contactAddress: DeliveryAddress) {
    const deliveryInfoAddress: DeliveryInfoAddress = {
      street: contactAddress.street ? contactAddress.street : '',
      box: contactAddress.box ? contactAddress.box : '',
      country: contactAddress.country ? contactAddress.country : '',
      houseNumber: contactAddress.houseNumber ? contactAddress.houseNumber : '',
      postalCode: contactAddress.postalCode ? contactAddress.postalCode : '',
      municipality: contactAddress.municipality ? contactAddress.municipality : '',
      subHouseNumber: contactAddress.subHouseNumber ? contactAddress.subHouseNumber : '',
    };

    this.store.dispatch(setSummaryDeliveryAddress({ deliveryAddress: deliveryInfoAddress }));
  }

  setSummaryInvoiceInfo(address: DeliveryAddress) {
    this.store.dispatch(setSummaryInvoiceInfo({ billingAddress: address }));
  }

  setViewState(viewState: ViewState) {
    this.store.dispatch(setViewState({ viewState: viewState }));
  }

  setBackButtonVisibility(backButtonVisibility: boolean) {
    this.store.dispatch(setBackButtonVisibility({ backButtonVisibility: backButtonVisibility }));
  }

  setNavigationState(navigationState: boolean) {
    this.store.dispatch(setNavigationState({ navigationState: navigationState }));
  }

  setEtfOrderItems(orderItems: OrderItem[], rules: Rule[]) {
    const orderItemsWithDiscount: OrderItemWithDiscount[] = orderItems.map((orderItem) => {
      const discountRule = SalesOrderUtil.getOrderItemDiscountRuleByTarget(orderItem, rules);
      if (!discountRule) {
        throw new HardwareCheckoutError(DiscountRuleNotFound);
      }
      return {
        name: orderItem.name,
        id: orderItem.id,
        rule: discountRule,
        showEtfOptions: false,
        hasMadeASelection: false,
        prices: orderItem.prices,
      };
    });
    this.store.dispatch(setOrderItemsWithDiscount({ orderItemsWithDiscount: orderItemsWithDiscount }));
  }

  setEtfUsedSlots(discountSlots: CustomerDiscounts) {
    this.store.dispatch(setUsedSlots({ usedSlots: discountSlots.usedSlots }));
  }

  setSalesOrderState(salesOrderState: SalesOrderStateEnum) {
    this.store.dispatch(setSalesOrderState({ salesOrderState: salesOrderState }));
  }

  getOmapiQueryProducts(productIds: string[]): Observable<RawOmapiQueryProductInterface> {
    const endpoint = `${this.omapiQueryBaseUrl}/hc-products/v1/products?itemcodes=${productIds.join(',')}&flow=esales`;
    return this.omapiQueryProductService.getRawQueryProductByEndpoint(
      HardwareCheckoutConstants.MESSAGE_GROUP,
      endpoint
    );
  }

  getOmapiProduct(productId: string): Observable<OmapiProduct> {
    return this.omapiProductService.getProductById('hardware-checkout', productId);
  }

  updateOrderItemCharsHomeDelivery(
    salesOrderId: string,
    customerAccountDetails: CustomerAccountDetails
  ): Observable<SalesOrder> {
    return this.deliveryPersonalInfo$.pipe(
      mergeMap((deliveryPersonalInfo: DeliveryPersonalInfo | undefined): Observable<SalesOrder> => {
        if (!deliveryPersonalInfo || !deliveryPersonalInfo.email) {
          throw new HardwareCheckoutError(UpdateHomeDeliveryCharsError);
        }

        return this.reverseProxyService
          .updateSalesOrderDeliveryEmail(salesOrderId, customerAccountDetails.id, deliveryPersonalInfo.email)
          .pipe(SalesOrderUtil.handleNcErrors());
      })
    );
  }

  setCustomerType(customerType: CustomerTypeEnum) {
    this.store.dispatch(setCustomerType({ customerType: customerType }));
  }

  setCustomerAccountDetails(customerAccountDetails: CustomerAccountDetails) {
    this.store.dispatch(setCustomerAccountDetails({ customerAccountDetails: customerAccountDetails }));
  }

  getPaymentRequestObject(request: PaymentRequestDataInterface): Observable<PaymentResponseDataInterface> {
    return this.paymentService.getPaymentObject(request);
  }

  setAemInputs(aemInputs: AemInput) {
    this.store.dispatch(setAemInput({ aemInput: aemInputs }));
  }

  setReferrerUrl(referrerUrl: string) {
    this.store.dispatch(setReferrerUrl({ referrerUrl: referrerUrl }));
  }

  setStartStepLoadTime() {
    this.store.dispatch(setStartStepLoadTime());
  }

  setIngenicoFormUrl(ingenicoFormUrl: string | undefined): void {
    this.store.dispatch(setIngenicoFormUrl({ ingenicoFormUrl: ingenicoFormUrl }));
  }

  addSummaryDeliveryNotification(summaryNotification: SummaryNotification) {
    this.store.dispatch(addSummaryDeliveryNotification({ notification: summaryNotification }));
  }

  addSummaryGeneralNotification(summaryNotification: SummaryNotification) {
    this.store.dispatch(addSummaryGeneralNotification({ notification: summaryNotification }));
  }

  setAnalyticsAttributesFromSessionStorage() {
    const analyticsAttributes = JSON.parse(
      window.sessionStorage.getItem(SessionStorageConstants.CHECKOUT_ANALYTICS_ATTRIBUTES) || '{}'
    );
    this.store.dispatch(setAnalyticsAttributes({ analyticsAttributes: analyticsAttributes }));
  }

  setAnalyticsCartFromSessionStorage() {
    const cart = new Cart(
      JSON.parse(window.sessionStorage.getItem(SessionStorageConstants.CHECKOUT_ANALYTICS_CART) || '{}')
    );
    this.store.dispatch(setCart({ cart: cart }));
  }

  setOrderNumber(orderNumber: string) {
    this.store.dispatch(setOrderNumber({ orderNumber: orderNumber }));
  }
}
