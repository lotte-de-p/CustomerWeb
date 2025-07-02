import { RawConstituentInterface } from '@telenet/ng-lib-omapi';

export interface CafeRawCustomerproductholdingsInterface {
  customerproductholding: CafeRawCustomerproductholdingInterface[];
  eligiblefreeproductoptions: CafeRawCustomerproductholdingInterface[];
}

export interface CafeRawCustomerproductholdingInterface {
  identifier: string;
  customerproductid: string;
  accountnumber: string;
  label: string;
  rateclassid: string;
  rateclassdescription: string;
  specurl: string;
  products: CafeRawCustomerproductholdingInterface[];
  options: CafeRawCustomerproductholdingOptionInterface[];
  address: CafeRawCustomerproductholdingAddressInterface;
  rawOmapi: CafeRawCustomerproductholdingRawOmapiProductInterface;
}

export interface CafeRawCustomerproductholdingOptionInterface {
  specurl: string;
  label: string;
  rawOmapi: CafeRawCustomerproductholdingRawOmapiProductInterface;
}

export interface CafeRawCustomerproductholdingAddressInterface {
  street: string;
  postalcode: string;
  municipality: string;
  country: string;
  housenr: string;
  boxnr?: string;
  subhousenr?: string;
  floor: string;
  addressid: string;
}

export interface CafeRawCustomerproductholdingRawOmapiProductInterface {
  product: CafeRawCustomerproductholdingRawOmapiProductInterfaceData;
}

export interface CafeRawCustomerproductholdingRawOmapiProductInterfaceData {
  productid: string;
  externalProductCode: string;
  labelkey: string;
  visible: boolean;
  family?: string;
  salesofferingid: string;
  producttype: string;
  weight: number;
  apps: CafeRawCustomerproductholdingRawOmapiAppInterface[];
  services: CafeRawCustomerproductholdingRawOmapiServicesInterface[];
  characteristics: CafeRawCustomerproductholdingRawOmapiCharacteristicsInterface;
  customercategories: string[];
  category: string[];
  subcategory: CafeRawCustomerproductholdingRawOmapiSubCategoryInterface;
  localizedcontent: CafeRawCustomerproductholdingRawOmapiLocalizedContentInterface[];
  shortdescription: CafeRawCustomerproductholdingRawOmapiShortDescriptionInterface;
  rates: CafeRawCustomerproductholdingRawOmapiRateInterface[];
  visibilityrules: CafeRawCustomerproductholdingRawOmapiVisibilityrulesInterface;
  unlimited: boolean;
  priceType: string;
}

export interface CafeRawCustomerproductholdingRawOmapiAppInterface {
  labelkey: string;
}

export interface CafeRawCustomerproductholdingRawOmapiServicesInterface {
  labelkey: string;
  servicetype: string;
  experience: CafeRawCustomerproductholdingRawOmapiServicesExperienceInterface;
  weight?: number;
  specifications: CafeRawCustomerproductholdingRawOmapiServicesSpecificationInterface[];
}

export interface CafeRawCustomerproductholdingRawOmapiServicesExperienceInterface {
  experiencetype: string;
  weight?: number;
}

export interface CafeRawCustomerproductholdingRawOmapiServicesSpecificationInterface {
  labelkey: string;
  value?: string;
  maxvalue?: string;
  minvalue?: string;
  unit: string;
  visible: boolean;
  weight: string;
  localizedcontent: CafeRawCustomerproductholdingRawOmapiLocalizedContentInterface[];
}

export interface CafeRawCustomerproductholdingRawOmapiCharacteristicsInterface {
  alert_threshold_marker?: CafeRawCustomerproductholdingRawOmapiCharacteristicsUnitValueInterface;
  initial_threshold_1?: CafeRawCustomerproductholdingRawOmapiCharacteristicsUnitValueInterface;
  initial_threshold_2?: CafeRawCustomerproductholdingRawOmapiCharacteristicsUnitValueInterface;
  alert_threshold?: CafeRawCustomerproductholdingRawOmapiCharacteristicsUnitValueInterface;
  service_category_limit?: CafeRawCustomerproductholdingRawOmapiCharacteristicsUnitValueInterface;
  sharedmobiledata?: CafeRawCustomerproductholdingRawOmapiCharacteristicsUnitValueInterface;
  productsegment?: string;
  producttier?: string;
  productgroup?: string;
  productsubgroup?: string;
  max_mobile_lines?: string;
  activationsalesofferingid?: string;
  max_mobile_includeddata_reminders?: string;
  max_mobile_outofbundle_reminders?: string;
  productlevel?: string;
  salespricevatexcl?: CafeRawCustomerproductholdingRawOmapiCharacteristicsUnitValueInterface;
  salespricevatincl?: CafeRawCustomerproductholdingRawOmapiCharacteristicsUnitValueInterface;
  rentalpricevatexcl?: CafeRawCustomerproductholdingRawOmapiCharacteristicsUnitValueInterface;
  rentalpricevatincl?: CafeRawCustomerproductholdingRawOmapiCharacteristicsUnitValueInterface;
  service_category?: string;
  detailed_scale?: CafeRawCustomerproductholdingRawOmapiCharacteristicsUnitValueInterface;
  sharedmobiledata_unlimited?: CafeRawCustomerproductholdingRawOmapiCharacteristicsUnitValueInterface;
  huwrecipientsmandatory?: string;
  devicetype?: string;
  is_sellable?: string;
  weightnl?: string;
  weightfr?: string;
  constituents: RawConstituentInterface[];
}

export interface CafeRawCustomerproductholdingRawOmapiCharacteristicsUnitValueInterface {
  unit: string;
  value: string;
}

export interface CafeRawCustomerproductholdingRawOmapiLocalizedContentInterface {
  locale: string;
  name: string;
  logo: string;
}

export interface CafeRawCustomerproductholdingRawOmapiSubCategoryInterface {
  name: string;
  localizedcontent: CafeRawCustomerproductholdingRawOmapiLocalizedContentInterface[];
  weight: number;
  mutualexclusion: boolean;
}

export interface CafeRawCustomerproductholdingRawOmapiShortDescriptionInterface {
  localizedcontent: CafeRawCustomerproductholdingRawOmapiLocalizedContentInterface[];
}

export interface CafeRawCustomerproductholdingRawOmapiRateInterface {
  type: string;
  unit: string;
  cost: string;
  currency: string;
}

export interface CafeRawCustomerproductholdingRawOmapiVisibilityrulesInterface {
  conditionalvisibility: boolean;
}
