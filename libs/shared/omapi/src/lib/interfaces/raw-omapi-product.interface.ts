import { ElementaryCharacteristicsInterface, RawCharsInterface } from './chars.interface';

export interface RawOmapiProductInterface {
  product?: RawOmapiProductInterfaceData;
}

export interface RawOmapiProductInterfaceData {
  productid: string | number;
  isYupProduct?: boolean;
  salesofferingid: string;
  externalProductCode: string;
  labelkey: string;
  producttype: string;
  weight: number;
  apps: unknown;
  characteristics?: RawCharacteristicsInterface;
  family?: string;
  customercategories?: string[];
  category?: string[];
  subcategory?: RawSubCategoryInterface;
  visible: boolean;
  localizedcontent: RawLocalizedContentInterface[];
  shortdescription?: RawShortDescriptionInterface;
  rates?: RawRateInterface[];
  services: RawServiceInterface[];
  visibilityrules?: {
    conditionalvisibility: boolean;
  };
  unlimited: boolean;
  priceType?: string;
  usageBasedRatePlan?: boolean;
  requiresInstallation?: boolean;
  maxCount?: string;
  unlimitedInternet?: boolean;
  usageLimits?: UsageLimitsInterface;
  usagenotifications?: UsageNotificationsInterface;
  chars?: RawCharsInterface[];
  constituents?: RawOmapiConstituentInterface[];
  isEligibleForAutoPause?: boolean;
  isEligibleForPauseProfile?: boolean;
  isEligibleForSettinglimits?: boolean;
  isFPBProduct?: boolean;
}

export interface RawLocalizedContentInterface {
  locale: string;
  name: string;
  logo?: string;
}

export interface UsageNotificationsInterface {
  mobile: Mobile[];
}

export interface Threshold {
  communicationPreferenceType: string;
  communicationPreferenceTypeValue: string;
  values: string[];
}

export interface Mobile {
  category: string;
  preferenceGroup: string;
  threshold: Threshold[];
}

export interface RawShortDescriptionInterface {
  localizedcontent: RawLocalizedContentInterface[];
}

export interface RawSubCategoryInterface {
  name: string;
  localizedcontent: RawLocalizedContentInterface[];
  weight: number;
  mutualexclusion: boolean;
}

export interface RawRateInterface {
  type: string;
  unit: string;
  cost: string;
  currency: string;
}

export interface RawServiceInterface {
  servicetype: string;
  experience?: RawExperienceInterface;
  specifications?: RawSpecificationInterface[];
}

export interface RawExperienceInterface {
  experiencetype: string;
}

export interface RawSpecificationInterface {
  labelkey: string;
  value?: string;
  maxvalue?: string;
  minvalue?: string;
  disclaimerlocalizedcontent?: RawLocalizedContentInterface[];
  unit: string;
  visible: boolean;
  weight: string;
  localizedcontent: RawLocalizedContentInterface[];
  grouping?: string;
}

export interface RawCharacteristicsInterface {
  // to do not camelcase, and make all data types string
  service_category?: string;
  detailed_scale?: UnitValueInterface;
  productgroup?: string;
  productsubgroup?: string;
  productsegment?: string;
  salespricevatincl?: UnitValueInterface;
  salespricevatexcl?: UnitValueInterface;
  rentalpricevatincl?: UnitValueInterface;
  rentalpricevatexcl?: UnitValueInterface;
  sharedmobiledata?: UnitValueInterface;
  sharedmobiledata_unlimited?: UnitValueInterface;
  activationsalesofferingid?: string;
  max_mobile_includeddata_reminders?: string;
  max_mobile_outofbundle_reminders?: string;
  max_mobile_lines?: string;
  huwrecipientsmandatory?: string;
  devicetype?: string;
  is_sellable?: string;
  weightnl?: string;
  weightfr?: string;
  producttier?: string;
  productlevel?: string;
  prices?: PricesInterface;
  constituents?: RawConstituentInterface[];
  esimAvailable?: boolean;
  elementarycharacteristics?: ElementaryCharacteristicsInterface[];
}

export interface RawConstituentInterface {
  specurl: string;
  type: string;
  rawOmapi?: RawOmapiProductInterface;
}

export interface RawOmapiConstituentInterface {
  type: string;
  minCount: string;
  maxCount: string;
}

export interface RawUnitValueInterface {
  value: string;
  unit: string;
}

export interface UnitValueInterface {
  unit: string;
  value: string;
}

export interface PricesInterface {
  activationFee: number;
}

export interface UsageLimitsInterface {
  outOfBundle: OutOfBundleInterface;
  premiumService: PremiumServiceInterface;
}

export interface PremiumServiceInterface {
  preferenceGroup: string;
  policyInstanceName: string;
  limits: PremiumServiceLimitInterface[];
}

export interface PremiumServiceLimitInterface {
  minValue: string;
  maxValue: string;
  default: string;
  isEditable: boolean;
}

export interface OutOfBundleInterface {
  preferenceGroup: string;
  policyInstanceName: string;
  limits: OutOfBundleLimitInterface[];
}

export interface OutOfBundleLimitInterface {
  communicationPreferenceType: string;
  communicationPreferenceTypeValue: string;
  isEditable: boolean;
  values: string[];
}

export interface UsageNotificationsInterface {
  internet: InternetUsageNotications[];
}

export interface InternetUsageNotications {
  preferenceGroup: string;
  threshold: InternetThresholds[];
}

export interface InternetThresholds {
  communicationPreferenceType: string;
  communicationPreferenceTypeValue: string;
}
