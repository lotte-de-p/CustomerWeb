export class LineChangeTariffPlanConstants {
  static readonly MSISDN = 'msisdn';
  static readonly MESSAGE_GROUP = 'line-change-tariff';
  static readonly MODIFY_STATUS = 'MODIFY';
  static readonly DISCONNECT_STATUS = 'DISCONNECT';
  static readonly EVENT_ATTRIBUTE_INTENT_CHANGE_TARIFF_PLAN = 'change-tariff-plan';
  static readonly EVENT_NAME_LINE_DETAILS_CHANGED = 'line details changed';
  static readonly EVENT_NAME_CHANGE_LINE_DETAILS_STARTED = 'change line details started';
  static readonly STEP_ID_CHANGE_TARIFF_PLAN_OVERLAY = 'change-tariff-plan-overlay';
  static readonly SUB_CATEGORY1_FLEET_PRODUCT = 'product';
  static readonly EVENT_NAME_CHANGE_LINE_DETAILS_ENDED = 'change line details ended';
  static readonly ACTIVE_STATUS = 'ACTIVE';
  static readonly MOBILE_INTERNET = 'MOBILE_INTERNET';
  static readonly MOBILE_CALLING = 'MOBILE_CALLING';
  static readonly FULL_SPECS_LINE_OPTIONS = [
    'TLTT0005',
    'TLTT0006',
    'TLTT0007',
    'TLTT0008',
    'TLTT0013',
    'TLTT0014',
    'TLTT0015',
    'TLTT0016',
  ];
  static readonly SUCCESS_MESSAGE = 'fleet-user-line-change-tariff-plan.response-success-submit-sales-order';
  static readonly SCOPES: string[] = ['productholding'];
}
