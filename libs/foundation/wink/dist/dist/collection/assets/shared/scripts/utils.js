import { themesSwatchesMap } from "../maps";
// TO repeat element in case you need to test performance
export function repeat(length, aThing) {
    return Array.from({ length }, () => aThing);
}
export function getStorybookPreviewIframeCssBg(selectedTheme) {
    return themesSwatchesMap.get(selectedTheme);
}
export function capitalize(s) {
    if (s && typeof s === 'string') {
        return s.trim().charAt(0).toUpperCase() + s.slice(1);
    }
    return 'CHECK YOUR STRING!';
}
export function replaceDashesWithSpace(s) {
    return s.replace(/-/g, ' ').trim();
}
//# sourceMappingURL=utils.js.map
