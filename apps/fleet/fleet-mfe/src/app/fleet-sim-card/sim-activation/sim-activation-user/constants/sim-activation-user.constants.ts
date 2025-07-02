export class SimActivationUserConstants {
  static readonly MESSAGE_GROUP = 'activate-sim-user';
  static readonly RECAPTCHA_ACTION_ACTIVATION_STATUS = 'simActivationStatus';
  static readonly ORDER_NUMBER_PARAM_KEY = 'orderNumber';
  static readonly MSISDN_PARAM_KEY = 'msisdn';
  static readonly SIM_CARD_NUMBER_PREFIX = '893203';
  static readonly SIM_ACTIVATION_STATUS_READY_TO_ACTIVATE = 'Waiting';
  static readonly SIM_ACTIVATION_STATUS_ALREADY_ACTIVATED = 'Completed';
  static readonly ERROR_DEFAULT = 'ERROR_DEFAULT';
  static readonly ERROR_WRONG_SIM_CARD_NUMBER = 'ERROR_WRONG_SIM_CARD_NUMBER';
  static readonly ERROR_SIM_ACTIVATION_NOT_POSSIBLE = 'ERROR_SIM_ACTIVATION_NOT_POSSIBLE';
  static readonly OCAPI_ERROR_CODE_WRONG_SIM_CARD_NUMBER = 'OCAPI-VAL-422';
  static readonly OCAPI_ERROR_CODES_SIM_ACTIVATION_STATUS_NOT_FOUND = [
    'OCAPI-ACT-427',
    'OCAPI-ACT-429',
    'OCAPI-ACT-430',
    'OCAPI-ACT-431',
  ];
}
