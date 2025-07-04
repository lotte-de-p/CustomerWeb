export class SalesConstants {
  static EMPTY = '';
  static API_VERSION = 'v2';
  static API_VERSION_V1 = 'v1';
  static MESSAGE_GROUP = 'sales-checkout';
  static SALES_CUSTOM_MESSAGE_GROUP = 'sales-custom-message';
  static SALES_ORDER_REQUEST_KEY = 'sdata';
  static CONTEXT_PRODUCTS = '/products';
  static CONTEXT_PREPAID_PRODUCTS = '/productsforprepaid';
  static CONTEXT_SALES_ORDERS = '/salesorders';
  static CONTEXT_PENDING_MOVE_CHECK = '/checkpendingmoveoperations';
  static VALIDATION_ERROR_CUSTOMER_INFO_NOT_FILLED = 'CUSTOMER_INFO_NOT_FILLED';
  static VALIDATION_ERROR_WRONG_OFFERINGS_QUANTITY_UNDER_OFFERING = 'WRONG_OFFERINGS_QUANTITY_UNDER_OFFERING';
  static VALIDATION_ERROR_WRONG_MAX_PRODUCT_QUANTITY = 'WRONG_MAX_PRODUCT_QUANTITY';
  static SALES_SERVICE_PREFIX = '/public/api/sales-service/';
  static SERVICE_ACTIVATION_CONFIGURATION = '/public/api/service-activation-configuration/';
  static SALES_SERVICE_PREFIX_ITS_ME = '/public/api/sales-service/itsme/';
  static DEFAULT_COUNTRY = ['Belgium', 'België'];
  static SALES_ORDER_REQUEST_ENCRYPTED_ADDRESS_KEY = 'customerLocationAddress';
  static SALES_ORDER_REQUEST_ENCRYPTED_BILLING_ACCOUNT_KEY = 'billingAccountAddress';
  static SALES_ORDER_REQUEST_INSTALLATION_ADDRESS_ID = 'customerInstallationLocationId';
  static SALES_ORDER_REQUEST_INSTALLATION_ENCRYPTED_ADDRESS_KEY = 'customerInstallationLocationAddress';
  static SALES_ITS_ME_ATTEMPT_COUNT_KEY = 'itsMeAttemptCount';
  static SALES_ITS_ME_MAX_ATTEMPTS_ALLOWED = 3;
  static CUSTOMER_STATUS_PROSPECT = 'prospect';
  static CUSTOMER_STATUS_LOST_PROSPECT = 'lost prospect';
  static CUSTOMER_STATUS_FORMER = 'former';
  static CUSTOMER_STATUS_PENDING_ACTIVATION = 'pending activation';
  static LINE_STATUS_PROSPECT = 'prospect';
  static LINE_STATUS_FORMER = 'former';
  static LINE_STATUS_PENDING_ACTIVATION = 'pending activation';
  static CONFIGURATION_STEP_NEW_CUSTOMER_KEY = '-new';
  static CONFIGURATION_STEP_EXISTING_CUSTOMER_KEY = '-existing';
  static DELIVERY_STEP_READ_ONLY_ADDRESS_KEY = '-read-only-address';
  static ERROR_CODE_SALES_NRN_DOB_MISMATCH = 'ocapi.422-OCAPI-ERR-ODCS126';
  static ERROR_CODE_SALES_NRN_INVALID_CHECKSUM = 'ocapi.404-OCAPI-ERR-ODCS112';
  static ERROR_CODE_SALES_APPOINTMENT_SLOTS_NOT_AVAILABLE = 'ocapi.422-OCAPI-ERR-ODAP001';
  static ERROR_CODE_SALESORDER_NOT_AVAILABLE = 'ocapi.422-OCAPI-ERR-ODSO127';
  static ELIGIBLE_TRIALS = '/eligibletrials';
  static DISCOUNTED_PRICE = '/contentpackdiscountedprice';
  static ACTIVATE_TRIAL = '/activatetrial';
  static DTV_MESSAGE_GROUP = 'dtv-trials';
  static FEASIBILITY_CHECK = '/feasibilitycheck';
  static UPDATE_INSTALLDATE = '/updateinstalldate';
  static CHECK_INSTALL_TYPE = '/installtypecheck';
  static CONFIGURE_BUNDLE = '/configurebundle';
  static RELOCATE_CUSTOMER_PRODUCTS = '/relocatecustomerproducts';
  static GENERATE_CONTRACT_SUMMARY = '/contractsummary';
  static CHECK_CONTRACT_ELIGIBILITY = '/checkeligibility';
  static CHECK_CONTRACT_ELIGIBILITY_PREPAID = '/checkeligibilityforprepaid';
  static GET_APPOINTMENTS_SLOTS = '/getappointmentslots';
  static CANCEL_APPOINTMENT_SLOT = '/cancelappointmentslot';
  static CALCULATE_DELIVERY = '/calculatedelivery';
  static MANAGE_PROMOTIONS = '/managepromotions';
  static UPDATE_EASY_SWITCH_CASES = '/easyswitch';
  static MANAGE_EASY_SWITCH_CASES = '/easyswitchcases';
  static RESERVE_APPOINTMENT_SLOTS = '/reserveappointmentslots';
  static VALIDATE_OPTIONS_CHECKOUT = '/validateoptionscheckout';
  static VALIDATION_ERROR_DELIVERY_CONFIGURATION_REQUIRED = 'DELIVERY_CONFIGURATION_REQUIRED';
  static LUCKYCYCLE_GAMIFICATION_URL = 'https://custom.luckycycle.com/base/poke';
  static ADD_LOCATION_STEP = 'addLocationStep';
  static INTENT_MODEM_SWAP = 'modem-swap';
  static DEPRECIATION_VALUES = '/depreciationvalues';
  static CONTRACT_SUMMARY_ELIGIBILITY_STATUS = 'contractSummaryEligibilityStatus';
  static CONTRACT_SUMMARY_DOCUMENT_ID = 'contractSummaryDocumentId';
  static YEARLY_PRODUCTS = '/yearlyproducts';
  static YUP_PRODUCT_BLOCK_ERROR_MESSAGE_KEY = 'sales-checkout.installation-location.lbl.block-yup-product';
  static CONFIGURED_DISCOUNT = '/configurediscount';
  static QUERY_URL = 'queryurl';
  static HARDWARE_CVP_DELIVERY = 'Hardware CVP Delivery';
  static INTENT_HARDWARE = 'hardware';
  static LOCATION_ID = 'installationLocationId';
  static DTV_TYPE_SIPADAN = 'SIPADAN';
  static PRODUCT_TYPE_DTV = 'DTV';
  static STATUS_LIST = 'ACTIVE,SUSPENDED,ACTIVATION_IN_PROGRESS,DISCONNECTION_IN_PROGRESS';
  static INTENT_DEVICE_SWAP = 'device-swap';
  static PRODUCT_TYPE_DISCONNECTION_FEE = 'DISCONNECTIONFEE';
  static CONTEXT_REMOVE_BUNDLE = '/removegroupbundles';
  static CONTEXT_SUBMIT_GROUP_BUNDLES = '/addsubmitgroupbundles';
  static EXTERNAL_CUSTOMER = 'EXTERNAL_CUSTOMER';
  static ITSME_REGISTRATION = 'itsMe';
  static INTENT_ADD_SIM = 'add-sim';
  static ADD_SIM = '/addsim';
  static MOBILE_LINE_MOVE_VALIDATION = '/mobilelinemovevalidation';
  static ADD_REMOVE_ORDER_ITEM = '/addremoveorderitem';
  static ENDPOINT_MOBILE_LINE_MOVE = '/mobilelinemove/';
  static CID = 'cid';
  static CAMPAIGN = 'campaign';
  static SALES_ORDER_SUMMARY = '/summary';
  static MANAGE_CONTENT_PACK = '/managecontentpacks';
  static INTENT = 'intent';
}
