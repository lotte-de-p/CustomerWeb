export class CreateProfileConstants {
  static MESSAGE_GROUP = 'create-profile';
  static SELECT_CAPTCHA_MESSAGE_GROUP = 'select-captcha-message';
  static RECOVER_PASSWORD = 'recoverpwd';
  static ACCESS_CODE = 'accesscode';
  static DEFAULT_CLASS = 'default';
  static ERROR_CLASS = 'error';
  static FAIR_CLASS = 'fair';
  static VALID_CLASS = 'strong';
  static VALID_PASSWORD_CLASS = 'valid';
  static INVALID_PASSWORD_CLASS = 'invalid';
  static DEFAULT_PASSWORD_CLASS = 'default';
  static ROLE = 'Contract_Holder';
  static COMPLETE_PROFILE = 'completeProfile';
  static LANGUAGE_TYPES = [
    { name: 'ng.create-profile.complete-profile.language-dutch', value: 'NL' },
    { name: 'ng.create-profile.complete-profile.language-french', value: 'FR' },
    { name: 'ng.create-profile.complete-profile.language-english', value: 'EN' },
  ];
  static GENDERS = [
    { name: 'ng.create-profile.complete-profile.male', value: 'MALE' },
    { name: 'ng.create-profile.complete-profile.female', value: 'FEMALE' },
  ];
  static SELF_REGISTRATION = 'selfRegistration';
  static NATIONAL_MOBILE_NUMBER_REGEX = /^((0)4\d{8})$/;
  static BASE_BRAND = 'BASE';
  static TELENET_BRAND = 'TELENET';
  static ADD_ITEM_IMAGE_PATH_CONFIRMATION =
    '/components/care/profile/nc/create-profile/media/central-success-illustration.svg';
  static MEMBER = 'Member';
  static CONTRACT_HOLDER = 'Contract_Holder';
  static REQUEST_PARAM_ALIAS = 'alias';
  static REQUEST_PARAM_CREDENTIAL_REFERENCE = 'credentialReference';
  static REQUEST_PARAM_MSISDN = 'msisdn';
  static REQUEST_PARAM_CUSTOMERNUMBER = 'customerNumber';
  static CUSTOMERTYPE_ACTION = 'customerType';
  static VALIDATE_CH_ACTION = 'validateCH';
  static LOGO_TELENET_PATH = '/components/care/profile/nc/create-profile/media/logo-telenet.svg';
  static BACKSPACE = 'Backspace';
  static INVALID_MAC_ADDRESS_MESSAGE_KEY = 'create-profile.verify-mac-address.lbl.invalid-mac-address';
  static INTENT_SELFREGISTER = 'SelfRegister';
  static GENERIC_ERROR_MESSAGE_KEY = 'create-profile.lbl.generic-error';
  static INVITE_NETWETER_ACTION = 'inviteNetweter';
  static ERROR_MESSAGE_LEGACY_USER = 'create-profile.lbl.legacy-user';
  static ORPHAN = 'Orphan';
  static SELF_REGISTRATION_NON_BASE_MSISDN_ERROR = 'create-profile.verify-identity-anonymous.lbl.non-base-msisdn';
  static RECOVER_PASSWORD_NON_BASE_ERROR = 'create-profile.recover-password.lbl.non-base-error';
  static MIGRATED_CUSTOMER = 'selfRegistrationMigratedCustomer';
  static WELCOME_BACK_IMAGE_PATH = '/components/care/profile/nc/create-profile/media/password-for-profile.svg';
  static IDENTITY_REQUEST_ID_NOT_FOUND = 'create-profile.verify-contract-holder.lbl.no-identity-request-id';
  static TYPE_EMAIL = 'E-mail';
  static LOGO_BASE_PATH = '/components/care/profile/nc/create-profile/media/central-success-base.png';
  static IDENTITY_REQUEST_ID_NOT_FOUND_FOR_MIGRATED_CUSTOMER =
    'create-profile.verify-contract-holder.lbl.no-identity-request-id-for-migrated-customer';
}
