import { ErrorRedirectUrlEnum } from '../enums/error.enum';
import { ErrorObject } from '../interfaces/error.interface';

export const errorTitlePrefix = 'ng.sales-checkout.title.error-';
export const errorMessagePrefix = 'ng.sales-checkout.text.error-';
export const errorButtonPrefix = 'ng.sales-checkout.button.error-';

export const UserNotLoggedInError = 'UserNotLoggedIn';

export const GenericError: ErrorObject = {
  key: 'HC-0000',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL,
  description: 'Generic Error',
};

export const GetCustomerDataError: ErrorObject = {
  key: 'HC-0001',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL,
  description: 'Get Customer Data Error',
};

export const EventStrategyError: ErrorObject = {
  key: 'HC-0002',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL,
  description: 'Event Strategy Error',
};

export const NoHardwareItemsFound: ErrorObject = {
  key: 'HC-0003',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL,
  description: 'No Hardware Items Found',
};

export const OrderItemCreationFailed: ErrorObject = {
  key: 'HC-0004',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL,
  description: 'Order Item Creation Failed',
};

export const SalesOfferNotFound: ErrorObject = {
  key: 'HC-0005',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL,
  description: 'Sales Offer Not Found',
};

export const DiscountRuleNotFound: ErrorObject = {
  key: 'HC-0006',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL,
  description: 'Discount Rule Not Found',
};

export const DiscountCouldNotBeRemoved: ErrorObject = {
  key: 'HC-0007',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL,
  description: 'Discount Could Not Be Removed',
};

export const DiscountCouldNotBeAdded: ErrorObject = {
  key: 'HC-0008',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL,
  description: 'Discount Could Not Be Added',
};

export const SalesOrderNotSet: ErrorObject = {
  key: 'HC-0009',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL,
  description: 'Sales Order Not Set',
};

export const EligibilityError: ErrorObject = {
  key: 'HC-0010',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL,
  description: 'Eligibility Error',
};

export const ContractSummaryUrlError: ErrorObject = {
  key: 'HC-0011',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL,
  description: 'Contract Summary URL Error',
};

export const NoBillingAccount: ErrorObject = {
  key: 'HC-0012',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL,
  description: 'No Billing Account',
};

export const NoDeliveryOrderItemFound: ErrorObject = {
  key: 'HC-0014',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL,
  description: 'No Delivery Order Item Found',
};

export const SubmitSalesOrderFailed: ErrorObject = {
  key: 'HC-0015',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL,
  description: 'Submit Sales Order Failed',
};

export const UpdateHomeDeliveryCharsError: ErrorObject = {
  key: 'HC-0016',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL,
  description: 'Update Home Delivery Chars Error',
};

export const CheckoutDeliveryError: ErrorObject = {
  key: 'HC-0017',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL,
  description: 'Checkout Delivery Error',
};

export const CouldNotReadContractSummaryRequired: ErrorObject = {
  key: 'HC-0018',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL,
  description: 'Could Not Read Contract Summary Required',
};

export const CouldNotStoreSalesOrderOnSummary: ErrorObject = {
  key: 'HC-0019',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL,
  description: 'Could Not Store Sales Order On Summary',
};

export const CreatePaymentTransactionFailed: ErrorObject = {
  key: 'HC-0020',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL,
  description: 'Create Payment Transaction Failed',
};

export const updateAwaitingPaymentFailed: ErrorObject = {
  key: 'HC-0021',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL,
  description: 'Update Awaiting Payment Failed',
};

export const HardwareCreationFailed: ErrorObject = {
  key: 'HC-0022',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL,
  description: 'Hardware Creation Failed',
};

export const UserNotLoggedIn: ErrorObject = {
  key: 'HC-0023',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL,
  description: 'User Not Logged In',
};

export const OcapiNotConfigured: ErrorObject = {
  key: 'HC-0024',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL,
  description: 'Ocapi Not Configured',
};

export const CustomerHasNoLocationAssociated: ErrorObject = {
  key: 'HC-0025',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL,
  description: 'Customer Has No Location Associated',
};

export const NoHomeDeliveryOrderItem: ErrorObject = {
  key: 'HC-0026',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL,
  description: 'No Home Delivery Order Item',
};

export const CorruptSdata: ErrorObject = {
  key: 'HC-0026',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL,
  description: 'Corrupt Sdata',
};

export const AemInputNotSet: ErrorObject = {
  key: 'HC-0027',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL,
  description: 'Aem Input Not Set',
};

export const CouldNotUpdateInstallationLocation: ErrorObject = {
  key: 'HC-0028',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL,
  description: 'Could Not Update Installation Location',
};

export const AbandonableMailCouldNOtBeSet: ErrorObject = {
  key: 'HC-0029',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL,
  description: 'Abandonable Mail Could Not Be Set',
};

export const OmapiQueryNotConfigured: ErrorObject = {
  key: 'HC-0030',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL,
  description: 'Omapi Query Not Configured',
};

export const PersonalIdentityCouldNotBeHandled: ErrorObject = {
  key: 'HC-0031',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL,
  description: 'Personal Identity Could Not Be Handled',
};

export const CustomerAccountCouldNotBeHandled: ErrorObject = {
  key: 'HC-0032',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL,
  description: 'Customer Account Could Not Be Handled',
};

const PreviousProcessingBaseErrorObject: Omit<ErrorObject, 'key'> = {
  titleKey: 'generic',
  descriptionKey: 'previous-order-processing',
  buttonTextKey: 'generic',
  type: ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL,
  description: 'Previous Processing Base Error',
};

export const MandatoryFieldsAreMissing: ErrorObject = {
  key: 'HC-0034',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL,
  description: 'Mandatory Fields Are Missing',
};

export const CouldNotParseAddress: ErrorObject = {
  key: 'HC-0035',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL,
  description: 'Could Not Parse Address',
};

export const UpdateDeliveryCharsError: ErrorObject = {
  key: 'HC-0036',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL,
  description: 'Update Delivery Chars Error',
};

export const FeasibilityError: ErrorObject = {
  key: 'HC-0010',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL,
  description: 'Feasibility Error',
};

export const ProductNotActive: ErrorObject = {
  key: 'HC-0031',
  ...PreviousProcessingBaseErrorObject,
};

export const PreviousSalesOrderStillInProcessing: ErrorObject = {
  key: 'HC-0032',
  ...PreviousProcessingBaseErrorObject,
};

export const OperationProhibitedDueToIncompatibleStateOfOrderItem: ErrorObject = {
  key: 'HC-0033',
  ...PreviousProcessingBaseErrorObject,
};

export const UnableToUpdateCustomerAccountError: ErrorObject = {
  key: 'HC-0034',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL,
  description: 'unable to update customer account due to missing data in state',
};

export const NcErrors: { key: string; error: ErrorObject }[] = [
  {
    key: 'OE-0100',
    error: ProductNotActive,
  },
  {
    key: 'OE-0071',
    error: PreviousSalesOrderStillInProcessing,
  },
  {
    key: 'OE-0069',
    error: OperationProhibitedDueToIncompatibleStateOfOrderItem,
  },
];
