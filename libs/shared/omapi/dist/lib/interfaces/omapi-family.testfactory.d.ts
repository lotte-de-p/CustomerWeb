import * as Factory from 'factory.ts';
import { OmapiFamily, OmapiFamilyOptin, OmapiFamilyOption, OmapiFamilyTier, OmapiMobileData, OmapiProductInfo } from './omapi-family.interface';
export declare const omapiMobileDataFactory: Factory.Sync.Factory<OmapiMobileData, keyof OmapiMobileData>;
export declare const omapiProductInfoFactory: Factory.Sync.Factory<OmapiProductInfo, keyof OmapiProductInfo>;
export declare const omapiFamilyOptinFactory: Factory.Sync.Factory<OmapiFamilyOptin, keyof OmapiFamilyOptin>;
export declare const omapiFamilyOptionFactory: Factory.Sync.Factory<OmapiFamilyOption, keyof OmapiFamilyOption>;
export declare const omapiFamilyTierFactory: Factory.Sync.Factory<OmapiFamilyTier, keyof OmapiFamilyTier>;
export declare const omapiFamilyFactory: Factory.Sync.Factory<OmapiFamily, "tiers">;
export declare const omapiKlikFamily: () => OmapiFamily;
export declare const omapiConnectFiveFamily: () => OmapiFamily;
//# sourceMappingURL=omapi-family.testfactory.d.ts.map