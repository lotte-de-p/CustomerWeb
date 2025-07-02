export class MobileConstants {
  static EMPTY = '';
  static API_VERSION_V1 = 'v1';
  static API_VERSION_V2 = 'v2';
  static MOBILE_SERVICE_PREFIX = '/public/api/mobile-service/';
  static SUBSCRIPTIONS = '/subscriptions';
  static API_VERSION_V3 = 'v3';
  static TESTCASE_ENABLED = false;
  static MOBILE_SUBSCRIPTIONS_PREFIX = '/mobilesubscriptions';
  static MOBILE_SUBSCRIPTION_PREFIX = '/mobile-subscription';
  static USAGE_ENDPOINT = '/usages';
  static DATA_PAUSE_ENDPOINT = '/datapause';
  static BASE_0_PLAN_IDENTIFIER = 'BASE0000';
  static AUTO_PAUSE = '/autopause';
  static SIM_DETAILS_ENDPOINT = '/simdetails';
  static ENDPOINT_VALIDATE_SIM_ICCID = '/simcards/{{iccid}}/validation';
  static ENDPOINT_STATUS_SIM_ICCID = '/simcards/{{iccid}}/status';
  static ENDPOINT_ACTIVATE_SIM = '/subscriptions/{{msisdn}}/simcard/triggeractivation';
  static ENDPOINT_SIM_ACTIVATION_STATUS =
    '/subscriptions/{{msisdn}}/{{orderNumber}}/simcard/activationstatus?token={{token}}';
}
