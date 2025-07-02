export enum OmapiFamilyProductType {
  MOBILE = 'mobile',
  ENTERTAINMENT = 'entertainment',
  FIXED_TELEPHONY = 'fixedTelephony',
}

export class OmapiFamilyConstants {
  static readonly FAMILY_PRODUCT_TYPES = [
    OmapiFamilyProductType.MOBILE,
    OmapiFamilyProductType.ENTERTAINMENT,
    OmapiFamilyProductType.FIXED_TELEPHONY,
  ];
}

export enum OmapiFamilyTierEnum {
  FURIOUS = 'furious',
  FAST = 'fast',
  KLIK = 'klik',
  ONE = 'ONE',
  ONE_UP = 'ONEup',
}

export type OmapiMobileDataKey = 'limited' | 'unlimited';
