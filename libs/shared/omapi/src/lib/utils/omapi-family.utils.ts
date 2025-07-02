import { OmapiFamily } from '../interfaces';
import { OmapiFamilyTierEnum } from '../constants';

export class OmapiFamilyUtils {
  public static getFamilyTier(omapiId: string, omapiFamily: OmapiFamily): string {
    const family = Object.values(OmapiFamilyTierEnum).find((family) =>
      this.isOmapiIdInTier(omapiId, family, omapiFamily)
    );
    return family ? family : OmapiFamilyTierEnum.FAST;
  }

  private static isOmapiIdInTier(omapiId: string, familyTier: string, omapiFamily: OmapiFamily): boolean {
    const omapiFamilyTier = omapiFamily.tiers.find((tier) => {
      return tier.key === familyTier;
    });
    if (omapiFamilyTier === undefined) {
      return false;
    }
    const strings =
      omapiFamilyTier.mobile?.map((mobile) => {
        return mobile.omapiId;
      }) ?? [];
    strings.push(omapiFamilyTier.omapiId);
    return strings.indexOf(omapiId) > -1;
  }
}
