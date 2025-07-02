export class FleetProfileFormConstants {
  static readonly GENDER_LIST = [
    {
      key: 'mr',
      translation: 'ng.line-identification-details.salutation.option.mr.lbl',
      gender: 'Male',
      epithet: 'Mr.',
    },
    {
      key: 'mrs',
      translation: 'ng.line-identification-details.salutation.option.mrs.lbl',
      gender: 'Female',
      epithet: 'Mrs.',
    },
  ];
  static readonly EMPTY = '';
  static readonly DEFAULT_VALUE = 'Default';
  static readonly LANGUAGE_TYPES = [
    { key: 'NL', translationKey: 'ng.line-identification-details.language-dutch' },
    { key: 'FR', translationKey: 'ng.line-identification-details.language-french' },
    { key: 'EN', translationKey: 'ng.line-identification-details.language-english' },
  ];
}
