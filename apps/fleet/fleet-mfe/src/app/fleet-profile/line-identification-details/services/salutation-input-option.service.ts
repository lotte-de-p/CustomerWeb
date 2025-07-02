import { Injectable } from '@angular/core';
import { map, isEmpty } from 'lodash-es';
import { TranslateService } from '@ngx-translate/core';
import { InputOption } from '@telenet/ng-lib-form';
import { FleetProfileFormConstants } from '../constants/fleet-profile-form-constants';

@Injectable({
  providedIn: 'root',
})
export class SalutationInputOptionService {
  constructor(private readonly translate: TranslateService) {}

  getSalutationOptions(): InputOption[] {
    return map(FleetProfileFormConstants.GENDER_LIST, (val) => {
      return new InputOption().withValue(this.getTranslation(val.translation)).withLabel(val.key);
    });
  }

  getGender(gender: string): string | undefined {
    const genderLabel = this.getSalutationOptions().find((salutation) => salutation.value === gender)?.label;

    return FleetProfileFormConstants.GENDER_LIST.find((g) => g.key === genderLabel)?.gender;
  }

  getEpithet(epithet: string): string | undefined {
    const epithetLabel = this.getSalutationOptions().find((salutation) => salutation.value === epithet)?.label;

    return FleetProfileFormConstants.GENDER_LIST.find((e) => e.key === epithetLabel)?.epithet;
  }

  getSalutation(salutation: string): string | undefined {
    if (isEmpty(salutation)) {
      return FleetProfileFormConstants.EMPTY;
    }

    return this.getTranslation(
      FleetProfileFormConstants.GENDER_LIST.find((s) => s.epithet === salutation)?.translation
    );
  }

  private getTranslation(key: string): string {
    return this.translate.instant(key);
  }
}
