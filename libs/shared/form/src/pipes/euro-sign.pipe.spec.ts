import { LanguageEnum, LanguageService } from '@telenet/ng-lib-page';
import { EuroSignPipe } from './euro-sign.pipe';
import Mock = jest.Mock;

describe('EuroSignPipe', () => {
  let euroSignPipe: EuroSignPipe;

  let languageServiceSpy: LanguageService;

  beforeEach(() => {
    languageServiceSpy = new LanguageService({} as Window);
    languageServiceSpy.getLanguage = jest.fn();
    euroSignPipe = new EuroSignPipe(languageServiceSpy);
  });

  it('french notation', () => {
    (languageServiceSpy.getLanguage as Mock).mockReturnValue(LanguageEnum.FR);
    const result = euroSignPipe.transform('100,00');
    expect(result).toBe('100,00€');
  });

  it('dutch notation', () => {
    (languageServiceSpy.getLanguage as Mock).mockReturnValue(LanguageEnum.NL);
    const result = euroSignPipe.transform('100,00');
    expect(result).toBe('€100,00');
  });
});
