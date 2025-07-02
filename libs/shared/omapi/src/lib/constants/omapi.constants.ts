export enum OmapiServiceSpecificationLabelKey {
  MOBILE_INTERNET_UNLIMITED_SHARED_SPEC = 'spec.mobileinternet.volume.unlimited.shared',
  FIXED_INTERNET_DL_SPEED = 'spec.fixedinternet.speed.download',
  FIXED_INTERNET_DL_VOLUME_UNLIMITED = 'spec.fixedinternet.volume.download.fup',
  FIXED_INTERNET_DL_VOLUME_CAP = 'spec.fixedinternet.volume.download.cap',
  SPEC_BUNDLE_MAX_MOBILE_LINES = 'spec.bundle.mobile.maxlines',
}

export enum OmapiServiceType {
  FIXED_INTERNET = 'FIXED_INTERNET',
  FIXED_CALLING = 'FIXED_CALLING',
  MOBILE_INTERNET = 'MOBILE_INTERNET',
  MOBILE_CALLING = 'MOBILE_CALLING',
  GENERAL = 'GENERAL',
  DTV = 'DTV',
  ATV = 'ATV',
  TV = 'TV',
}

export enum OmapiConstituentType {
  DTV = 'dtv',
  INTERNET = 'internet_line',
  MOBILE = 'mobile_line',
}
export enum OmapiProductTierEnum {
  LOW = 'Low',
  MID = 'Mid',
  HIGH = 'High',
}

export enum OmapiLegacyProducts {
  WHOP = '71',
  WHOPPA = '70',
}

export enum OmapiDarwinProducts {
  STREAMING_SERVICE_CONTAINER = 'STRM0001',
  NETFLIX_PREMIUM_ADDON = 'STRM0006',
  NETFLIX_STANDARD = 'STRM0005',
}

export enum OmapiProductType {
  PRODUCT = 'PRODUCT',
  BUNDLE = 'BUNDLE',
  E_SIM = 'E_SIM',
}

export enum OmapiSubCategoryEnum {
  NETFLIX = 'Netflix',
}
