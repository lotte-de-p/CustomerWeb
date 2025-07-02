import { LabelKeyType } from '@telenet/ng-lib-page';
export declare class LabelUtil {
    static LABEL_PREFIX: string;
    static getLabelKeyWithTypeLabel(key: string | string[]): string;
    static getLabelKeyWithTypeTitle(key: string | string[]): string;
    static getLabelKeyWithTypePlaceholder(key: string | string[]): string;
    static getLabelKeyWithTypeText(key: string | string[]): string;
    static getLabelKeyWithTypeError(key: string | string[]): string;
    static getLabelKeyWithTypeButton(key: string | string[]): string;
    static getLabelKeyWithTypeTooltip(key: string | string[]): string;
    static getLabelKeyByType(key: string | string[], type: LabelKeyType): string;
    static normalizeKey(key: string): string;
    private static parseKey;
    private static joinKeys;
}
//# sourceMappingURL=label.util.d.ts.map