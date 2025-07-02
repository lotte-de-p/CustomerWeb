import {
  FakeMissingTranslationHandler,
  TranslateDefaultParser,
  TranslateFakeCompiler,
  TranslateFakeLoader,
  TranslateService,
  TranslateStore,
} from '@ngx-translate/core';

export class MockTranslateService extends TranslateService {
  constructor() {
    super(
      new TranslateStore(),
      new TranslateFakeLoader(),
      new TranslateFakeCompiler(),
      new TranslateDefaultParser(),
      new FakeMissingTranslationHandler(),
      false,
      false,
      false,
      'en'
    );
  }

  override instant(key: string): string {
    return key;
  }
}
