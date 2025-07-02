import { TranslateHelperService } from './translate-helper.service';
import { TestBed } from '@angular/core/testing';

describe('TranslateHelperService', function () {
  let translateHelperService: TranslateHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TranslateHelperService],
    });

    translateHelperService = TestBed.inject(TranslateHelperService);
  });

  describe('getTitle', function () {
    it('CPH should return the correct label key for title', function () {
      expect(translateHelperService.getTitle('test')).toEqual('ng.priced-cph.test.title');
    });
  });

  describe('getLabel', function () {
    it('CPH should return the correct label key for label', function () {
      expect(translateHelperService.getLabel('test')).toEqual('ng.priced-cph.test.lbl');
    });
  });

  describe('getText', function () {
    it('CPH should return the correct label key for text', function () {
      expect(translateHelperService.getText('test')).toEqual('ng.priced-cph.test.text');
    });
  });
});
