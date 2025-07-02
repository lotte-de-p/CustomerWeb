export class ProductOverviewConstants {
  static EMPTY = '';
  static MSISDN_PARAM = 'msisdn';
  static API_VERSION_V1 = 'v1';
  static API_VERSION_V2 = 'v2';
  static CONTEXT_PRODUCT = '/products';
  static PRODUCT_SERVICE_PREFIX = '/public/api/fleet-product-service/';
  static CUSTOMER_SERVICE_PREFIX = '/public/api/fleet-customer-service/';

  // Statuses
  static ACTIVE_STATUS = 'ACTIVE';
  static SUSPENDED_STATUS = 'SUSPENDED';
  static ACTIVATION_IN_PROGRESS_STATUS = 'ACTIVATION_IN_PROGRESS';
  static DISCONNECTION_IN_PROGRESS_STATUS = 'DISCONNECTION_IN_PROGRESS';
  static DISCONNECTION_PASSED_PONR_STATUS = 'DISCONNECTION_PASSED_PONR';
  static DISCONNECTED_STATUS = 'DISCONNECTED';
  static STATUS_NOT_ACTIVE = 'NOT_ACTIVE';

  static INTERMEDIATE_PRODUCT_STATUSES = [
    'SUSPENSION_IN_PROGRESS',
    'SUSPENSION_PASSED_PONR',
    'MODIFICATION_IN_PROGRESS',
    'MODIFICATION_PASSED_PONR',
    'RESUMING_IN_PROGRESS',
    'RESUMING_PASSED_PONR',
    'DISCONNECTION_IN_PROGRESS',
    'DISCONNECTION_PASSED_PONR',
  ];
  static SUSPEND_PRODUCT_STATUSES = ['SUSPENDED', 'SUSPENSION_IN_PROGRESS', 'SUSPENSION_PASSED_PONR'];
  static MODIFICATION_PRODUCT_STATUSES = ['MODIFICATION_IN_PROGRESS', 'MODIFICATION_PASSED_PONR'];
  static DISCONNECTION_PRODUCT_STATUSES = ['DISCONNECTION_IN_PROGRESS', 'DISCONNECTION_PASSED_PONR'];
  static ACTIVATION_PRODUCT_STATUSES = ['ACTIVATION_IN_PROGRESS', 'ACTIVATION_PASSED_PONR'];

  static UNLIMITED = 'UNLIMITED';
  static SMS_UNIT = 'NUMBER';

  static PRODUCT_OPTIONS = 'product-options';

  static PREPAID_MOBILE = 'prepaid-mobile';

  static BRAND_TELENET = 'TELENET';

  static BUNDLE = 'bundle';
  static DTV = 'dtv';

  static MOBILE_MONETARY = 'MOBILE_MONETARY';

  static MESSAGE_GROUP = 'product-overview';
  static MESSAGE_GROUP_CUSTOMER = 'ch-customer';

  static GENERIC_ERROR_CODE = 'ocapi.response-500-OCAPI-ERR-OCGE500';

  static BUNDLE_TYPE_C5 = 'Connect 5';
  static WEIGHT = 'weight';
  static NEW_ONEUP_BUNDLE_KEY = 'LimitedMobileVolumeSupported';

  static ENDPOINT_IDENTITY = '/identities';

  static readonly PRIMARY_CATEGORY_FLEET = 'fleet';
  static readonly SUB_CATEGORY1_FLEET_PRODUCT = 'product';

  static readonly SOURCE_PARAMETER = 'cmp';
  static readonly ONE_APP_SOURCE = 'app_oneapp';
}

export enum DataLimitEnum {
  UNLIMITED = 'Unlimited',
  UNKNOWN = 'Unknown',
}
