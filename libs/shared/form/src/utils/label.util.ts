import { LabelKeyType } from '@telenet/ng-lib-page';

export class LabelUtil {
  static LABEL_PREFIX = 'ng';

  static getLabelKeyWithTypeLabel(key: string | string[]): string {
    return this.parseKey(key, LabelKeyType.LABEL);
  }

  static getLabelKeyWithTypeTitle(key: string | string[]): string {
    return this.parseKey(key, LabelKeyType.TITLE);
  }

  static getLabelKeyWithTypePlaceholder(key: string | string[]) {
    return this.parseKey(key, LabelKeyType.PLACEHOLDER);
  }

  static getLabelKeyWithTypeText(key: string | string[]) {
    return this.parseKey(key, LabelKeyType.TXT);
  }

  static getLabelKeyWithTypeError(key: string | string[]) {
    return this.parseKey(key, LabelKeyType.ERROR);
  }

  static getLabelKeyWithTypeButton(key: string | string[]) {
    return this.parseKey(key, LabelKeyType.BUTTON);
  }

  static getLabelKeyWithTypeTooltip(key: string | string[]) {
    return this.parseKey(key, LabelKeyType.TOOLTIP);
  }

  static getLabelKeyByType(key: string | string[], type: LabelKeyType): string {
    return this.parseKey(key, type);
  }

  static normalizeKey(key: string): string {
    return key
      .replace(/ /g, '-')
      .replace(/_/g, '-')
      .replace(/[^.0-9a-zA-Z_-]/g, '')
      .toLowerCase();
  }

  private static parseKey(key: string | string[], labelKeyType: LabelKeyType) {
    if (Array.isArray(key)) {
      return this.joinKeys([this.LABEL_PREFIX, this.joinKeys(key), labelKeyType]);
    }
    return this.joinKeys([this.LABEL_PREFIX, key, labelKeyType]);
  }

  private static joinKeys(values: string[]): string {
    return values.join('.');
  }
}
