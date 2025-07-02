import { OmapiMobileDataKey } from '../constants/';

export interface RawOmapiFamily {
  tiers: RawOmapiFamilyTier[];
  products: RawOmapiFamilyProduct[];
  optins: RawOmapiFamilyOptIn[];
  options: RawOmapiFamilyOption[];
}

export interface RawOmapiFamilyTier {
  key: string;
  omapiId: string;
}

export interface RawOmapiFamilyProduct {
  type: string;
  tiers: RawOmapiProductTier[];
}

export interface RawOmapiProductTier {
  key: string;
  products: RawOmapiProduct[];
}

export interface RawOmapiFamilyOptIn {
  key: string;
  tiers: RawOptinTier[];
}

export interface RawOmapiFamilyOption {
  type: string;
  key: string;
  omapiId: string;
  parents: string[];
}

export interface RawOmapiProduct {
  key: string;
  omapiId: string;
  mobileData?: RawMobileData[];
}

export interface RawMobileData {
  key: OmapiMobileDataKey;
  omapiId: string;
}

export interface RawOptinTier {
  key: string;
  pax: RawOptinPax[];
}

export interface RawOptinPax {
  omapiId: string;
  optinId: string;
}
