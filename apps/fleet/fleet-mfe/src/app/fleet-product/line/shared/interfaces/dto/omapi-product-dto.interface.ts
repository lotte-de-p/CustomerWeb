import { CharsDto } from './customer-product-holding-dto.interface';
import { ElementaryCharacteristicsInterface } from '@telenet/ng-lib-omapi';

export interface OmapiProductDto {
  product?: OmapiProductDtoData;
}

export interface OmapiProductDtoData {
  productid: string | number;
  isYupProduct?: boolean;
  salesofferingid: string;
  externalProductCode: string;
  labelkey: string;
  producttype: string;
  weight: number;
  apps: unknown;
  characteristics?: CharacteristicsDto;
  family?: string;
  customercategories?: string[];
  category?: string[];
  subcategory?: SubCategoryDto;
  visible: boolean;
  localizedcontent: LocalizedContentDto[];
  shortdescription?: ShortDescriptionDto;
  rates?: RawRateDto[];
  services: ServiceDto[];
  visibilityrules?: {
    conditionalvisibility: boolean;
  };
  unlimited: boolean;
  priceType?: string;
  usageBasedRatePlan?: boolean;
  requiresInstallation?: boolean;
  maxCount?: string;
  unlimitedInternet?: boolean;
  usageLimits?: UsageLimits;
  usagenotifications?: UsageNotificationsDto;
  chars?: CharsDto[];
  constituents?: OmapiConstituentDto[];
  isEligibleForAutoPause?: boolean;
  isEligibleForPauseProfile?: boolean;
  isEligibleForSettinglimits?: boolean;
  isFPBProduct?: boolean;
}

interface LocalizedContentDto {
  locale: string;
  name: string;
  logo?: string;
}

interface UsageNotificationsDto {
  mobile: MobileDto[];
}

interface ThresholdDto {
  communicationPreferenceType: string;
  communicationPreferenceTypeValue: string;
  values: string[];
}
interface MobileDto {
  category: string;
  preferenceGroup: string;
  threshold: ThresholdDto[];
}

interface ShortDescriptionDto {
  localizedcontent: LocalizedContentDto[];
}

interface SubCategoryDto {
  name: string;
  localizedcontent: LocalizedContentDto[];
  weight: number;
  mutualexclusion: boolean;
}

interface RawRateDto {
  type: string;
  unit: string;
  cost: string;
  currency: string;
}

interface ServiceDto {
  servicetype: string;
  experience?: ExperienceDto;
  specifications?: SpecificationDto[];
}

interface ExperienceDto {
  experiencetype: string;
}

interface SpecificationDto {
  labelkey: string;
  value?: string;
  maxvalue?: string;
  minvalue?: string;
  disclaimerlocalizedcontent?: LocalizedContentDto[];
  unit: string;
  visible: boolean;
  weight: string;
  localizedcontent: LocalizedContentDto[];
}

interface CharacteristicsDto {
  //  to do not camelcase, and make all data types string
  service_category?: string;
  detailed_scale?: UnitValue;
  productgroup?: string;
  productsubgroup?: string;
  productsegment?: string;
  salespricevatincl?: UnitValue;
  salespricevatexcl?: UnitValue;
  rentalpricevatincl?: UnitValue;
  rentalpricevatexcl?: UnitValue;
  sharedmobiledata?: UnitValue;
  sharedmobiledata_unlimited?: UnitValue;
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
  constituents?: ConstituentDto[];
  esimAvailable?: boolean;
  elementarycharacteristics?: ElementaryCharacteristicsInterface[];
}

interface ConstituentDto {
  specurl: string;
  type: string;
  rawOmapi?: OmapiProductDto;
}

interface OmapiConstituentDto {
  type: string;
  minCount: string;
  maxCount: string;
}

interface UnitValue {
  unit: string;
  value: string;
}

interface PricesInterface {
  activationFee: number;
}

interface UsageLimits {
  outOfBundle: OutOfBundle;
  premiumService: PremiumServiceDto;
}

interface PremiumServiceDto {
  preferenceGroup: string;
  policyInstanceName: string;
  limits: PremiumServiceLimit[];
}

interface PremiumServiceLimit {
  minValue: string;
  maxValue: string;
  default: string;
  isEditable: boolean;
}

interface OutOfBundle {
  preferenceGroup: string;
  policyInstanceName: string;
  limits: OutOfBundleLimit[];
}

interface OutOfBundleLimit {
  communicationPreferenceType: string;
  communicationPreferenceTypeValue: string;
  isEditable: boolean;
  values: string[];
}
