import { LabelUtil } from './label.util';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { LabelKeyType } from '@telenet/ng-lib-page';

describe('LabelUtil', () => {
  describe('getLabelKeyWithTypeLabel', () => {
    it('should return <label>.lbl', () => {
      const actual = LabelUtil.getLabelKeyWithTypeLabel('abc');
      expect(actual).toBe('ng.abc.lbl');
    });
  });

  describe('getLabelKeyWithTypeTitle', () => {
    it('should return <label>.title', () => {
      const actual = LabelUtil.getLabelKeyWithTypeTitle('abc');
      expect(actual).toBe('ng.abc.title');
    });
  });

  describe('getLabelKeyWithTypePlaceholder', () => {
    it('should return <label>.phd', () => {
      const actual = LabelUtil.getLabelKeyWithTypePlaceholder('abc');
      expect(actual).toBe('ng.abc.phd');
    });
  });

  describe('getLabelKeyWithTypeText', () => {
    it('should return <label>.text', () => {
      const actual = LabelUtil.getLabelKeyWithTypeText('abc');
      expect(actual).toBe('ng.abc.text');
    });
  });

  describe('getLabelKeyWithTypeError', () => {
    it('should return <label>.error', () => {
      const actual = LabelUtil.getLabelKeyWithTypeError('abc');
      expect(actual).toBe('ng.abc.error');
    });
  });

  describe('getLabelKeyWithTypeButton', () => {
    it('should return <label>.error', () => {
      const actual = LabelUtil.getLabelKeyWithTypeButton('abc');
      expect(actual).toBe('ng.abc.btn');
    });
  });

  describe('getLabelKeyWithTypeTooltip', () => {
    it('should return <label>.ttp', () => {
      const actual = LabelUtil.getLabelKeyWithTypeTooltip('abc');
      expect(actual).toBe('ng.abc.ttp');
    });
  });

  describe('getLabelKeyByType', () => {
    it('should return label with type', () => {
      const actual = LabelUtil.getLabelKeyByType('button', LabelKeyType.LINK);
      expect(actual).toBe('ng.button.lnk');
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
