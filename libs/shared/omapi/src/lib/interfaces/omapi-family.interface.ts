import { OmapiProduct } from '../models/omapi-product.model';
import { OmapiMobileDataKey } from '../constants/omapi-family.constants';

export interface OmapiFamily {
  tiers: OmapiFamilyTier[];
}

export interface OmapiFamilyTier {
  key: string;
  omapiId: string;
  productInfo?: OmapiProduct;
  mobile?: OmapiProductInfo[];
  entertainment?: OmapiProductInfo[];
  fixedTelephony?: OmapiProductInfo[];
  optins?: OmapiFamilyOptin[];
  options?: OmapiFamilyOption[];
}

export interface OmapiProductInfo {
  omapiId: string;
  productInfo?: OmapiProduct;
  mobileData?: OmapiMobileData[];
}

export interface OmapiMobileData {
  omapiId: string;
  key: OmapiMobileDataKey;
  productInfo?: OmapiProduct;
}

export interface OmapiFamilyOptin {
  key: string;
  omapiId: string;
  mobileId: string;
  productInfo?: OmapiProduct;
}

export interface OmapiFamilyOption {
  key: string;
  type: string;
  omapiId: string;
  productInfo?: OmapiProduct;
  parents: string[];
}
