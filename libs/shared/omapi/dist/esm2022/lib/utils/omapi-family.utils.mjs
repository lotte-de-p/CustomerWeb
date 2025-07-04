import { OmapiFamilyTierEnum } from '../constants';
export class OmapiFamilyUtils {
    static getFamilyTier(omapiId, omapiFamily) {
        const family = Object.values(OmapiFamilyTierEnum).find((family) => this.isOmapiIdInTier(omapiId, family, omapiFamily));
        return family ? family : OmapiFamilyTierEnum.FAST;
    }
    static isOmapiIdInTier(omapiId, familyTier, omapiFamily) {
        const omapiFamilyTier = omapiFamily.tiers.find((tier) => {
            return tier.key === familyTier;
        });
        if (omapiFamilyTier === undefined) {
            return false;
        }
        const strings = omapiFamilyTier.mobile?.map((mobile) => {
            return mobile.omapiId;
        }) ?? [];
        strings.push(omapiFamilyTier.omapiId);
        return strings.indexOf(omapiId) > -1;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib21hcGktZmFtaWx5LnV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi91dGlscy9vbWFwaS1mYW1pbHkudXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRW5ELE1BQU0sT0FBTyxnQkFBZ0I7SUFDcEIsTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFlLEVBQUUsV0FBd0I7UUFDbkUsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQ2hFLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FDbkQsQ0FBQztRQUNGLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQztJQUNwRCxDQUFDO0lBRU8sTUFBTSxDQUFDLGVBQWUsQ0FBQyxPQUFlLEVBQUUsVUFBa0IsRUFBRSxXQUF3QjtRQUMxRixNQUFNLGVBQWUsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ3RELE9BQU8sSUFBSSxDQUFDLEdBQUcsS0FBSyxVQUFVLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLGVBQWUsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUNsQyxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUM7UUFDRCxNQUFNLE9BQU8sR0FDWCxlQUFlLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ3JDLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWCxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QyxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT21hcGlGYW1pbHkgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IE9tYXBpRmFtaWx5VGllckVudW0gfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5leHBvcnQgY2xhc3MgT21hcGlGYW1pbHlVdGlscyB7XG4gIHB1YmxpYyBzdGF0aWMgZ2V0RmFtaWx5VGllcihvbWFwaUlkOiBzdHJpbmcsIG9tYXBpRmFtaWx5OiBPbWFwaUZhbWlseSk6IHN0cmluZyB7XG4gICAgY29uc3QgZmFtaWx5ID0gT2JqZWN0LnZhbHVlcyhPbWFwaUZhbWlseVRpZXJFbnVtKS5maW5kKChmYW1pbHkpID0+XG4gICAgICB0aGlzLmlzT21hcGlJZEluVGllcihvbWFwaUlkLCBmYW1pbHksIG9tYXBpRmFtaWx5KVxuICAgICk7XG4gICAgcmV0dXJuIGZhbWlseSA/IGZhbWlseSA6IE9tYXBpRmFtaWx5VGllckVudW0uRkFTVDtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGlzT21hcGlJZEluVGllcihvbWFwaUlkOiBzdHJpbmcsIGZhbWlseVRpZXI6IHN0cmluZywgb21hcGlGYW1pbHk6IE9tYXBpRmFtaWx5KTogYm9vbGVhbiB7XG4gICAgY29uc3Qgb21hcGlGYW1pbHlUaWVyID0gb21hcGlGYW1pbHkudGllcnMuZmluZCgodGllcikgPT4ge1xuICAgICAgcmV0dXJuIHRpZXIua2V5ID09PSBmYW1pbHlUaWVyO1xuICAgIH0pO1xuICAgIGlmIChvbWFwaUZhbWlseVRpZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBzdHJpbmdzID1cbiAgICAgIG9tYXBpRmFtaWx5VGllci5tb2JpbGU/Lm1hcCgobW9iaWxlKSA9PiB7XG4gICAgICAgIHJldHVybiBtb2JpbGUub21hcGlJZDtcbiAgICAgIH0pID8/IFtdO1xuICAgIHN0cmluZ3MucHVzaChvbWFwaUZhbWlseVRpZXIub21hcGlJZCk7XG4gICAgcmV0dXJuIHN0cmluZ3MuaW5kZXhPZihvbWFwaUlkKSA+IC0xO1xuICB9XG59XG4iXX0=