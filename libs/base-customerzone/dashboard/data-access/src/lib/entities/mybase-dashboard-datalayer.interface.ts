export interface MyBaseDashboardDatalayer {
  eventName: string;
  eventType: string;
  attributeName: string;
  attributeData?: string;
  attributeGroup?: string;
  destinationUrl?: string;
}

export enum MyBaseAnalyticsEventMobileUsage {
  BASED_ON_YOU = 'mobile usage based on you',
  BASE_ZERO = 'mobile usage base zero',
  UNLIMITED = 'mobile usage unlimited',
  PREPAID = 'mobile usage prepaid',
  POSTPAID = 'mobile usage postpaid',
}

export enum MyBaseDashboardDatalayerEventName {
  STATUS_CARD_VIEWED = 'status card viewed',
  STATUS_CARD_CLICKED = 'status card clicked',
  BUTTON_CLICKED = 'button clicked',
  CARD_CLICKED = 'card clicked',
}

export enum MyBaseDashboardDatalayerEventType {
  IMPRESSION = 'impression',
  CLICK = 'click',
  CLICK_CARD = 'click-card',
}

export enum MyBaseDashboardDatalayerAttributeName {
  BILLING = 'billing',
  MOBILE_USAGE = 'mobile usage',
  INTERNET_USAGE = 'internet usage',
  INTERNET_USAGE_LIMITED = 'internet usage limited',
  INTERNET_USAGE_UNLIMITED = 'internet usage unlimited',
  HOME_NETWORK = 'home network',
  SERVICE_MOMENT = 'service moment',
  SHARE_HOME_NETWORK = 'share home network',
  MANAGE_INTERNET = 'manage internet',
  MANAGE_MOBILE = 'manage mobile',
  MANAGE_DTV = 'manage tv',
  SUPPORT = 'support',
  CHANGE_LINE = 'change line',
  CHANGE_ADDRESS = 'change address',
}

export enum MyBaseDashboardDatalayerAttributeData {
  ALL_GOOD = 'all good',
  OUTSTANDING_BILL = 'outstanding bill',
  PAYMENT_OVERDUE = 'payment overdue',
  REFUND_ISSUED = 'refund issued',
  USAGE_LIMIT_WARNING = 'usage limit warning',
  USAGE_LIMIT_REACHED = 'usage limit reached',
  ACTIVATE_SIM = 'activate your SIM card',
  PRODUCTS_ACTIVATION = 'products waiting activation',
  PLANNED_WORKS = 'planned works',
  INSTALLATION_APPOINTMENT = 'installation appointment',
  EASY_SWITCH = 'easy switch',
  BEST_TARIFF = 'best tariff',
  SUPPORT = 'support',
  WATCH_TV = 'watch tv',
}

export enum MyBaseDashboardDatalayerAttributeGroup {
  PAY_NOW_BUTTON = 'pay now button',
  VIEW_BILLS_BUTTON = 'view bills button',
  VIEW_DETAILS_LINK = 'link to view details',
  USAGE_DETAILS_LINK = 'link to usage details',
  USAGE_LIMIT_REACHED = 'usage limit reached',
  ACTIVATE = 'activate',
  VIEW_DETAILS = 'view details',
}
