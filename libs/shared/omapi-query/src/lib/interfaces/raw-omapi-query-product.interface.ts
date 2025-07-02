export interface RawOmapiQueryProductInterface {
  products: RawOmapiQueryProductInterfaceData[];
  totalProducts?: number;
}

export interface RawOmapiQueryProductInterfaceData {
  labelKey: string;
  productFamily: string;
  variants: RawVariantsInterface[];
  manBrand: RawColorInterface;
  shortDescription?: RawShortDescription;
  longDescription?: unknown;
  isPreOrder: boolean;
  isBackOrder: boolean;
}

export interface RawProductTypeInterface {
  code: string;
  sortOrder?: string;
  localizedContent: RawLocalizedContentInterface[];
}

export interface RawLocalizedContentInterface {
  key?: string;
  locale: string;
  value?: string[];
  data?: string;
}

export interface VariantTagOptionInterface {
  attributeKey: string;
  startDate?: string;
  endDate?: string;
  backOrderWindow?: string;
  backOrderDescription?: {
    localizedContent: RawLocalizedContentInterface[];
  };
  preOrderDescription?: {
    localizedContent: RawLocalizedContentInterface[];
  };
}

export interface VariantTagInterface {
  telenet: { options: VariantTagOptionInterface[] };
  telenetSOHO: { options: VariantTagOptionInterface[] };
  base: { options: VariantTagOptionInterface[] };
  baseSOHO: { options: VariantTagOptionInterface[] };
}

export interface RawVariantsInterface {
  productId: string;
  images: RawImagesInterface[];
  contractMonths: unknown;
  prices: RawPricesInterface;
  color: RawColorInterface;
  manBrand: RawBrandInterface;
  shortDescription: RawShortDescription;
  tag: VariantTagInterface;
  extraAtHomeDelivery?: boolean;
  characteristics: unknown;
}

export interface RawShortDescription {
  localizedContent: RawLocalizedContentInterface[];
}

export interface RawImagesInterface {
  attributeKey: string;
  value: string;
  localizedContent: RawLocalizedContentInterface[];
}

export interface RawPricesInterface {
  priceType: string;
}

export interface RawColorInterface {
  hexCode?: string;
  sortOrder: string;
  localizedContent: RawLocalizedContentInterface[];
  attributeGroup: RawProductTypeInterface;
}

export interface RawBrandInterface {
  sortOrder?: string;
  localizedContent: RawLocalizedContentInterface[];
  attributeGroup?: RawProductTypeInterface;
}
