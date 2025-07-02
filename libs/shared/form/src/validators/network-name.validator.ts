import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { RegexConstants } from '../constants/regex.constant';

export class NetworkNameValidator extends Validators {
  static validNetworkName(forbiddenNames: string[], forbiddenWords: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      const pattern = RegexConstants.NETWORK_NAME.test(value);
      const notStartingWithSpace = this.notStartingWithSpace(value);
      const hasForbiiddenSSIDs = this.hasForbiiddenSSIDs(forbiddenNames, forbiddenWords, value);

      if (pattern || notStartingWithSpace || hasForbiiddenSSIDs) {
        return {
          pattern: pattern,
          notStartingWithSpace: notStartingWithSpace,
          hasForbiiddenSSIDs: hasForbiiddenSSIDs,
        };
      } else {
        return null;
      }
    };
  }

  private static notStartingWithSpace(value: string) {
    return RegexConstants.NO_START_SPACE_REGEX.test(value);
  }

  private static hasForbiiddenSSIDs(forbiddenNames: string[], forbiddenWords: string[], value: string) {
    const startWithTelent = forbiddenWords.map((name) => 'telenet' + name);
    const endWithTelent = forbiddenWords.map((name) => name + 'telenet');
    const startWithTelenetWithSpace = forbiddenWords.map((name) => 'telenet ' + name);
    const endWithTelentWithSpace = forbiddenWords.map((name) => name + ' telenet');

    const wordsArrayNotAllowed = forbiddenNames.concat(
      startWithTelent,
      endWithTelent,
      startWithTelenetWithSpace,
      endWithTelentWithSpace
    );

    return value && wordsArrayNotAllowed.includes(value.toLowerCase());
  }
}
