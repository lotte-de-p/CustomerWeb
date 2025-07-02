import { Injectable } from '@angular/core';
import { map } from 'lodash-es';
import { TranslateService } from '@ngx-translate/core';
import { InputOption } from '@telenet/ng-lib-form';
import { FleetProfileFormConstants } from '../constants/fleet-profile-form-constants';

@Injectable({
  providedIn: 'root',
})
export class LanguageInputOptionService {
  constructor(private readonly translate: TranslateService) {}

  getLanguageOptions(): InputOption[] {
    return map(FleetProfileFormConstants.LANGUAGE_TYPES, (val) => {
      return new InputOption().withValue(this.translate.instant(val.translationKey)).withLabel(val.key);
    });
  }

  getTranslatedLanguage(languageValue: string): string | undefined {
    return this.getLanguageOptions().find((language) => language.label === languageValue)?.value;
  }

  getLanguageValue(translatedLanguage: string) {
    return this.getLanguageOptions().find((language) => language.value === translatedLanguage)?.label;
  }
}
