export class ProductConstants {
  static BASE_0_PLAN_IDENTIFIER = 'BASE0000';
  static EMPTY = '';
  static API_VERSION_V1 = 'v1';
  static API_VERSION_V2 = 'v2';
  static UNLIMITED = 'UNLIMITED';
  static MOBILE_CALLING = 'MOBILE_CALLING';
  static MOBILE_INTERNET = 'MOBILE_INTERNET';
  static FIXED_INTERNET = 'FIXED_INTERNET';
  static MOBILE_MONETARY = 'MOBILE_MONETARY';
  static TV = 'TV';
  static MINUTES = 'MINUTES';
  static MIN = 'MIN';
  static FUP = 'FUP';
  static EVENT_NAME_TARIFF_PLAN = 'plan details viewed';
  static EVENT_TYPE_VIEW_PRODUCT_DETAILS = 'view-product-details';
  static VOICE = ['voice', 'call-to-other-networks'];
  static DATA = ['data', 'mobile-data'];
  static PRODUCT_SERVICE_PREFIX = '/public/api/product-service/';
  static CONTEXT_PRODUCTS = '/products';
  static OMAPI_CATEGORY_PRE_PAID_MOBILE = 'PREPAID-MOBILE';
  static PRODUCT_STATUS_ACTIVE = 'ACTIVE';
  static PRODUCT_TYPE_TELEPHONE = 'telephone';
  static PRODUCT_TYPE_MOBILE = 'mobile';
  static PRODUCT_TYPE_DTV = 'dtv';
  static PRODUCT_TYPE_INTERNET = 'internet';
  static TELEPHONE_RANK = '4';
  static MOBILE_RANK = '5';
  static DTV_RANK = '3';
  static INTERNET_RANK = '2';
  static BUNDLE_RANK = '1';
  static PRODUCT_TYPE_BUNDLE = 'bundle';
  static FIXED_PRODUCTS = ['dtv', 'internet', 'telephone', ProductConstants.PRODUCT_TYPE_BUNDLE];
  static WIGO_PRODUCT = 'WIGO';
  static WHOP_WHOPPA_PRODUCT = 'WHOP(PA)';
  static PREPAID = 'prepaid-mobile';
  static UNIT_TYPE_MB = 'MB';
  static PRODUCT_TYPE = '/type';
  static FIXED_IP = '/fixedip';
  static MOBILE_LINE = 'mobile_line';
  static FULL_SPECS_LINE_OPTIONS = [
    'TLTT0005',
    'TLTT0006',
    'TLTT0007',
    'TLTT0008',
    'TLTT0013',
    'TLTT0014',
    'TLTT0015',
    'TLTT0016',
  ];
  static CONTEXT_GROUP_BUNDLES = '/groupbundles/';
  static PRODUCTS = '/products';
}
