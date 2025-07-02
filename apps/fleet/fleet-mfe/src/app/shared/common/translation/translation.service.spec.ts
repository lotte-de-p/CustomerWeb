import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { TranslationService } from './translation.service';
import { expect } from '@jest/globals';

describe('TranslationService', () => {
  let translationService: TranslationService;
  const MESSAGE_GROUP = 'message-group';
  beforeEach(() => {
    translationService = new TranslationService();
  });

  describe('getTitle', () => {
    it('should return the correct label key for the title', () => {
      expect(translationService.getTitle(MESSAGE_GROUP, 'title-content')).toBe('ng.message-group.title-content.title');
    });
  });

  describe('getText', () => {
    it('should return the correct label key for the text', () => {
      expect(translationService.getText(MESSAGE_GROUP, 'text-content')).toBe('ng.message-group.text-content.text');
    });
  });

  describe('getLabel', () => {
    it('should return the correct label key for the label', () => {
      expect(translationService.getLabel(MESSAGE_GROUP, 'label-content')).toBe('ng.message-group.label-content.lbl');
    });
  });

  describe('getButton', () => {
    it('should return the correct label key for the button', () => {
      expect(translationService.getButton(MESSAGE_GROUP, 'label-content')).toBe('ng.message-group.label-content.btn');
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
