export interface MyBaseDashboard {
  billing: MyBaseDashboardBilling;
  mobileUsage: MyBaseDashboardUsageStatus;
  internetUsage: MyBaseDashboardUsageStatus;
  homeNetwork: MyBaseDashboardHomeNetwork;
  products: ProductsResponse;
  actions: SupportAssistanceType[];
}

export interface MyBaseDashboardBilling {
  showCard: boolean;
  pending: boolean;
  billingAccounts: MyBaseDashboardBillingAccount[];
}

export interface MyBaseDashboardBillingAccount {
  accountNumber: string;
  openBills: MyBaseDashboardOpenBills[];
  refunds: MyBaseDashboardRefunds[];
}

export interface MyBaseDashboardOpenBills {
  openAmount: number;
  dueInDays: number;
  showPayNowButton: boolean;
  paymentMethod: BillingPaymentMethod;
}

export interface MyBaseDashboardRefunds {
  amount: number;
}

export enum BillingPaymentMethod {
  DIRECT_DEBIT = 'DIRECT_DEBIT',
  MANUAL = 'MANUAL',
}

export interface UpdatedProductsResponse {
  showCard: boolean;
  mobile: { productName: string }[];
  internet: { productName: string }[];
  dtv: { productName: string }[];
}

export interface ProductsResponse {
  showCard: boolean;
  mobile?: Product;
  internet?: Product;
  dtv?: Product;
}

export interface Product {
  pending: boolean;
  products: { productName: string }[];
}

export interface MyBaseDashboardUsageStatus {
  showCard: boolean;
  pending: boolean;
  products: MyBaseDashboardProductUsage[];
}

export interface MyBaseDashboardProductUsage {
  productName: string;
  msisdn?: string;
  productIdentifier?: string;
  address?: MyBaseDashboardAddress;
  usageStatus: UsageStatusEnum;
}

export interface MyBaseDashboardAddress {
  street: string;
  houseNumber: string;
  subHouseNumber: string;
  boxNumber: string;
  floor: string;
  municipality: string;
  country: string;
  postalCode: string;
}

export interface MyBaseDashboardHomeNetwork {
  showCard: boolean;
  pending: boolean;
}

export enum UsageStatusEnum {
  OK = 'OK',
  LIMIT_ALMOST_REACHED = 'LIMIT_ALMOST_REACHED',
  LIMIT_EXCEEDED_SLOW_SPEED = 'LIMIT_EXCEEDED_SLOW_SPEED',
  LIMIT_EXCEEDED = 'LIMIT_EXCEEDED',
}

export interface MyBaseDashboardMobile {
  mobileUsage: MobileUsage;
  msisdn: string;
  productName: string;
  actions: (NavigationCardType | ServiceType)[];
}

export enum SupportAssistanceType {
  WATCH_TV = 'watch-tv',
  BEST_TARIFF = 'best-tariff',
  EASY_SWITCH = 'easy-switch',
  SUPPORT = 'support',
}

export enum NavigationCardType {
  MOBILE_USAGE_NOTIFICATIONS = 'mobile-usage-notifications',
  VOICEMAIL = 'voicemail',
  SIM_MANAGEMENT = 'sim-management',
  PRODUCT_OVERVIEW = 'product-overview',
  TOPUP = 'topup',
  TOPUP_HISTORY = 'topup-history',
  USAGE_DETAILS = 'usage-details',
  USAGE_LIMITS = 'usage-limits',
  BARRINGS = 'barrings',
  INTERNET_USAGE_NOTIFICATIONS = 'internet-notifications',
  SPEEDTEST = 'speedtest',
  MANAGE_YOUR_PRODUCT = 'manage-your-product',
  MY_DEVICE = 'my-device',
  DEVICES_USING_YOUR_NETWORK = 'devices-using-your-network',
  MANAGE_YOUR_DEVICE = 'manage-your-device',
  MANAGE_CONTENT_PACKS = 'manage-content-packs',
  ADD_TV_BOX = 'add-remove-tv-box',
}

export enum ServiceType {
  PAYBYMOBILE = 'paybymobile',
  BUY_HARDWARE_DISCOUNT = 'buy-hardware-discount',
  EASY_SWITCH = 'easy-switch',
  BEST_TARIFF = 'best-tariff',
  RETURN_DEVICE = 'return-device',
}

export interface MobileLine {
  msisdn: string;
  productName: string;
  default: boolean;
  addressId: string;
  dataOnly: boolean;
  simAlias?: string;
}

export interface MobileUsage {
  showCard: boolean;
  postpaid?: PostPaidData;
  legacy?: LegacyPostPaidData;
  prepaid?: {
    balance: number;
    expiryDate: string;
  };
  unlimited?: {
    daysUntilRenewal: number;
    used: number;
    status: UsageStatusEnum;
  };
  baseZero?: {
    daysUntilRenewal: number;
    used: number;
    status: UsageStatusEnum;
  };
  basedOnYou?: {
    daysUntilRenewal: number;
    remaining: number;
    total: number;
    status: UsageStatusEnum;
  };
}

export interface LegacyPostPaidData {
  daysUntilRenewal: number;
  data: {
    remaining: number;
    total: number;
    carryOver: number;
  };
  status: UsageStatusEnum;
  outOfBundleLimit: number;
}

export interface PostPaidData extends LegacyPostPaidData {
  outOfBundleLimit: number;
}

export interface InternetLine {
  productIdentifier: string;
  productName: string;
  completeAddress?: string;
  address: Address;
  default: boolean;
}

export interface Address {
  id: string;
  street: string;
  houseNumber: string;
  subHouseNumber?: string;
  boxNumber?: string;
  municipality: string;
  postalCode: string;
  country: string;
}

export interface InternetUsage {
  showCard: boolean;
  limited?: {
    remainingBytes: number;
    totalBytes: number;
    daysUntilRenewal: number;
  };
  unlimited?: {
    usedBytes: number;
    daysUntilRenewal: number;
    status: UsageStatusEnum;
  };
}

export interface MyBaseDashboardInternet {
  usage: InternetUsage;
  homeNetwork: MyBaseDashboardHomeNetwork;
  actions: (NavigationCardType | ServiceType)[];
}

export interface DtvLine {
  msisdn: string;
  productName: string;
  default: boolean;
}

export interface MyBaseDashboardDtv {
  productIdentifier: string;
  actions: (NavigationCardType | ServiceType)[];
}

export enum ServiceMomentsType {
  SIM_ACTIVATION = 'SIM_ACTIVATION',
  ESIM_ACTIVATION = 'ESIM_ACTIVATION',
  APPOINTMENT = 'APPOINTMENT',
}
export interface ServiceMoments {
  type: ServiceMomentsType;
  msisdn: string;
  timeslot?: {
    start: string;
    end: string;
  };
}

export interface MappedServiceMoments {
  title: string;
  subTitle: string;
  buttonText: string;
  icon: string;
  type: string;
  url: string;
  msisdn?: string;
  attributeData: string;
  attributeGroup: string;
  subType: SubType;
}

export enum SubType {
  SIM_ACTIVATION = 'sim-activation',
  ESIM_ACTIVATION = 'esim-activation',
  PLANNED_APPOINTMENT = 'planned-appointment',
  UNPLANNED_APPOINTMENT = 'unplanned-appointment',
}
