export class MobileUsageOverviewConstant {
  static readonly PRODUCT_TYPE_MOBILE = 'mobile';
  static readonly PRODUCT_TYPE_BUNDLE = 'bundle';
  static readonly MESSAGE_GROUP_NAME = 'fleet-user-mobile-usage-overview';
  static readonly CUSTOM_MESSAGE_GROUP_NAME = 'fleet-user-mobile-usage-overview-custom';
  static readonly SCOPES = ['D_mobileusage'];
  static readonly TITLE_UNLIMITED = 'ng.fleet-user-mobile-usage-overview.lbl.unlimited';
  static readonly SUBTITLE_DATA = 'ng.fleet-user-mobile-usage-overview.lbl.data-remaining';
  static readonly SUBTITLE_VOICE = 'ng.fleet-user-mobile-usage-overview.lbl.remaining';
  static readonly SUBTITLE_UNLIMITED = 'ng.fleet-user-mobile-usage-overview.lbl.data-used';
  static readonly ICON_NAME_DATA = 'ng.fleet-user-mobile-usage-overview.txt.data';
  static readonly ICON_NAME_CALLS = 'ng.fleet-user-mobile-usage-overview.txt.calls';
  static readonly ICON_NAME_AMOUNT = 'ng.fleet-user-mobile-usage-overview.txt.amount';
  static readonly CAROUSEL_CONFIG = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    infinite: false,
  };
  static readonly USAGE_BLOB_TYPES = ['data', 'voice'];
  static readonly USAGE_BLOB_TYPE_DATA = 'data';
  static readonly USAGE_TYPE_ZBR = 'ZBR';
  static readonly ALL_CONSUMPTION_DATA_TYPES = ['monetary', 'data', 'text', 'voice'];
  static readonly EMPTY = '';
  static readonly TITLE = 'Mobile Usage Overview';
  static readonly REACHING_THRESHOLD_WARNING = 'fleet-user-mobile-usage-overview.reaching-threshold';
  static readonly REACHED_THRESHOLD_WARNING = 'fleet-user-mobile-usage-overview.reached-threshold';
  static readonly BAR_PERCENTAGE_FOR_WARNING = 90;
  static readonly MAX_BLOB_ON_CARD_VIEW = 2;
  static readonly SUBTITLE_PAY_AS_YOU_GO = 'ng.fleet-user-mobile-usage-overview.lbl.pay-as-you-go';
  static readonly BUCKET_TYPE_SPLIT_BILL_CAP = 'Split Billing Cap';
  static readonly GROUP_VIEW = 'ng.fleet-user-mobile-usage-overview.lbl.group-view';
  static readonly SUBTITLE_USED = 'ng.fleet-user-mobile-usage-overview.lbl.used';
  static readonly SUBTITLE_PAUSED = 'ng.fleet-user-mobile-usage-overview.lbl.paused';
  static readonly DATA_PAUSE_MSG = 'fleet-user-mobile-usage-overview.lbl.paused-msg';
  static readonly DATA_UNPAUSE_MSG = 'fleet-user-mobile-usage-overview.lbl.unpaused-msg';
  static readonly UPGRADE = 'Upgrade';
  static readonly DOWNGRADE = 'Downgrade';
  static readonly UPGRADE_WARNING = 'fleet-user-mobile-usage-overview.lbl.upgrade';
  static readonly DOWNGRADE_WARNING = 'fleet-user-mobile-usage-overview.lbl.downgrade';
  static readonly NATIONAL_ZBR_REACHING_THRESHOLD_WARNING =
    'fleet-user-mobile-usage-overview.lbl.reaching-threshold-national-zbr';
  static readonly NATIONAL_ZBR_REACHED_THRESHOLD_WARNING =
    'fleet-user-mobile-usage-overview.lbl.reached-threshold-national-zbr';
  static readonly INTERNATIONAL_ZBR_REACHED_THRESHOLD_WARNING =
    'fleet-user-mobile-usage-overview.lbl.reached-threshold-international-zbr';
  static readonly OCAPI_RESOURCE_URL = '-resource/public?p=profilepicture&f=';
  static readonly KEY_MOBILE_USAGE_OVERVIEW_LABEL = 'ng.fleet-user-mobile-usage-overview.lbl.';
  static readonly BUCKET_TYPE_EU_DATA = 'data in EU';
  static readonly BUCKET_EU_DATA = 'Data EU';
  static readonly BUNDLE_TYPE_C5 = 'C5';
  static readonly DATA_UNITS = ['GB', 'MB'];
  static readonly VOICE_UNITS = ['MINUTES', 'mins', 'SECONDS'];
  static readonly CONVERT_TO_SECONDS = 60 / 100;
  static readonly OUT_OF_BUNDLE = 'Out of bundle';
  static readonly UNLIMITED_PLAN = 'Unlimited';
  static readonly INTERNATIONAL = 'International';
  static readonly BUCKET_TYPE_OUTSIDE_EUROPE = 'data outside Europe';
  static readonly MOBILE_EU_DATA = 'EU Data';
  static readonly MESSAGE_GROUP_PRODUCTS = 'product-overview';
  static readonly PRODUCTS_STATUS = 'ACTIVE,SUSPENDED,ACTIVATION_IN_PROGRESS,DISCONNECTED,DISCONNECTION_IN_PROGRESS';
  static readonly PRODUCT_STATUS_ACTIVE = 'ACTIVE';
  static readonly PRODUCT_STATUS_SUSPENDED = 'SUSPENDED';
  static readonly PRODUCT_STATUS_PENDING = 'ACTIVATION_IN_PROGRESS';
  static readonly PRODUCT_STATUS_ACTIVATION_PASSED_PONR = 'ACTIVATION_PASSED_PONR';
  static readonly MOBILE = 'mobile';
  static readonly SPLIT_BILL_BUDGET_LABEL = 'split-bill-consumption';
}
