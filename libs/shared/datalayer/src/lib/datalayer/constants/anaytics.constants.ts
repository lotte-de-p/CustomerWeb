export class AnalyticsConstants {
  static readonly ATTRIBUTE_STEP_ID = 'stepId';
  static readonly ATTRIBUTES_INTENT = 'intent';
  static readonly ATTRIBUTES_FLOW_TYPE = 'flowType';

  static readonly INTENT_C5_CHECKOUT = 'C5 checkout';
  static readonly INTENT_AEM_SALES_FLOW = 'AEM sales flow';
  static readonly FLOW_TYPE_MARKETING = 'marketing';
  static readonly FLOW_TYPE_CARE = 'care';
  static readonly PRIMARY_CATEGORY_SALES = 'sales';
  static readonly PRIMARY_CATEGORY_CARE = 'care';
  static readonly LOGIN_PAGE_ID = 'checkout login page';
  static readonly PRICE = 'price';
  static readonly PRICE_EXCL_VAT = 'priceexclvat';

  static readonly ITEM_DATA_EASYSWITCH_TRUE = 'Cancellation: Easy Switch';
  static readonly ITEM_DATA_EASYSWITCH_FALSE = 'Cancellation: No Easy Switch';

  static readonly ITEM_NAME_ADDRESS_SELECTION_OTHER = 'Installation address: different address';
  static readonly ITEM_NAME_ADDRESS_SELECTION_CHANGED = 'Installation address changed';
  static readonly ITEM_NAME_ADDRESS_SELECTION_POSTAL_CODE = 'Postal Code';
  static readonly ITEM_NAME_EASYSWITCH_OPERATOR = 'Cancellation: Previous operator';
  static readonly ITEM_NAME_INSTALLATION = 'Installation';
  static readonly ITEM_NAME_CONNECTION_CABLE = 'Connection: Telenet cable';
  static readonly ITEM_NAME_FIXED_TELEPHONY_CHANGED = 'Fixed telephony changed';

  static readonly ITEM_NAME_WIFI_NETWORK_SETUP = 'wifi-network-setup';
  static readonly INTENT_MOVE_FLOW = 'Move flow';
  static readonly FLOW_TYPE_SELF_SERVICE = 'self-service';
  static readonly ZENDESK_CHAT: 'zendesk chat';
  static readonly INTENT_CHANGE_MODEM_SETTINGS = 'change modem-settings';
  static readonly INTENT_RESET_MODEM_SETTINGS = 'reset-modem-settings';
  static readonly INTENT_REBOOT_MODEM = 'modem reboot';
  static readonly INTENT_UNLOCK_SETTINGS = 'unlock settings';

  static readonly INTENT_ACTIVATE_SIM = 'activate-sim';
  static readonly STEP_ACTIVATE_SIM_OVERLAY = 'activate-sim-overlay';
  static readonly CATEGORY_FLEET = 'fleet';
  static readonly SUB_CATEGORY_SIM_CARD = 'sim-card';
  static readonly EVENT_NAME_SIM_ACTIVATION_START = 'sim activation started';
  static readonly EVENT_NAME_SIM_ACTIVATED = 'sim activated';
  static readonly EVENT_TYPE_SELF_SERVICE_FLOW_START = 'self-service-flow-start';
  static readonly EVENT_TYPE_SELF_SERVICE_FLOW_END = 'self-service-flow-end';
  static readonly PRIMARY_CATEGORY_GENERAL = 'general';
}
