import { OmapiMobileDataKey } from '../constants';
import { OmapiProduct } from '../models/omapi-product.model';
export interface KlikOmapiFamily {
    tiers: KlikOmapiFamilyTier[];
    products: KlikOmapiFamilyProduct[];
    optins: KlikOmapiFamilyOptIn[];
    options: KlikOmapiFamilyOption[];
}
export interface KlikOmapiFamilyTier {
    key: string;
    omapiId: string;
    productInfo?: OmapiProduct;
}
export interface KlikOmapiFamilyProduct {
    type: string;
    tiers: KlikOmapiProductTier[];
}
export interface KlikOmapiProductTier {
    key: string;
    products: KlikOmapiProduct[];
}
export interface KlikOmapiProduct {
    key?: string;
    omapiId: string;
    mobileData?: KlikMobileData[];
    productInfo?: OmapiProduct;
}
export interface KlikMobileData {
    key: OmapiMobileDataKey;
    omapiId: string;
    productInfo?: OmapiProduct;
}
export interface KlikOmapiFamilyOptIn {
    key: string;
    tiers: KlikOptinTier[];
}
export interface KlikOptinTier {
    key: string;
    pax: KlikOptinPax[];
}
export interface KlikOptinPax {
    omapiId: string;
    optinId: string;
    productInfo?: OmapiProduct;
}
export interface KlikOmapiFamilyOption {
    type: string;
    key: string;
    omapiId: string;
    parents?: string[];
    productInfo?: OmapiProduct;
}
//# sourceMappingURL=klik-omapi-family.interface.d.ts.map