export class LineIdentificationDetailsConstants {
  static readonly MESSAGE_GROUP = 'line-identification-details';
  static readonly SALUTATION_OPTIONS = '.salutation.option';
  static readonly MSISDN_DYNAMIC_KEY_INPUT = '$$MSISDN$$';
  static readonly MSISDN: 'msisdn';
  static readonly SCOPES = ['productholding'];
  static readonly PROFILE_STATUS_PENDING = 'PENDING_VALIDATION';
  static readonly PROFILE_ACTIVATION_IN_PROGRESS = 'ACTIVATION_IN_PROGRESS';
  static readonly PROFILE_PLANNED = 'PLANNED';
  static readonly PROFILE_ACTIVATION_PASSED_PONR = 'ACTIVATION_PASSED_PONR';
  static readonly PROFILE_CANCELLING_OF_ACTIVATION = 'CANCELLING_OF_ACTIVATION';
  static readonly PROFILE_STATUS_INVITED = 'INVITED';
  static readonly SIM_STATUS_ACTIVE = 'Active';
  static readonly SIM_STATUS_PENDING = 'Pending';
  static readonly SIM_STATUS_SUSPENDED = 'Suspended';
  static readonly CREATE_NEW_PROFILE_TRANSLATION_KEY = 'duplicate.create-new-profile';
  static readonly DEFAULT_VALUE = 'Default';
  static readonly UPDATE_MESSAGE = LineIdentificationDetailsConstants.MESSAGE_GROUP + '.message.update';
  static readonly NAVIGATION_CLASS = 'navigation-content__details';
  static readonly UPDATE_DATE_FORMAT = 'dd-MM-yyyy';
  static readonly CREATE_DATE_FORMAT = 'yyyy-MM-dd';
  static readonly EMPTY = '';
  static readonly PHONE_NUMBER_REGEX = /^((0)4\d{8})$/;
  static readonly PHONE_NUMBER_ONLY_NUMBERS = /[^0-9]/g;
  static readonly LABEL_KEY_PREFIX = 'ng.line-identification-details.';
  static readonly LABEL_KEY_SUFFIX = '.lbl';
}
