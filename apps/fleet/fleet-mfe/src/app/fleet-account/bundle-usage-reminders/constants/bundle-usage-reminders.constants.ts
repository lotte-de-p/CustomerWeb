export class BundleUsageRemindersConstants {
  static readonly SCOPES = ['groupbundles'];
  static readonly MESSAGE_GROUP = 'bundle-usage-reminders';
  static readonly EMPTY = '';
  static readonly DATA_LAYER_CLICK_TYPE = 'click';
  static readonly SUCCESS_UPDATE_ACCOUNT_KEY = 'bundle-usage-reminders.response-success-update-account';
  static readonly UPDATE_IN_PROGRESS_KEY = 'bundle-usage-reminders.update-in.progress';
  static readonly EVENT_ATTRIBUTE_ITEM_NAME = 'itemName';
  static readonly EVENT_NAME_BUNDLE_THRESHOLD_ACTIVATED = 'out of bundle threshold activated';
  static readonly EVENT_NAME_BUNDLE_THRESHOLD_DEACTIVATED = 'out of bundle threshold deactivated';
  static readonly EVENT_NAME_BUNDLE_THRESHOLD_AMOUNT_CHANGED = 'out of bundle threshold amount changed';
  static readonly OVERCONSUMPTION_NO_THRESHOLD_SELECTED_DEFAULT_NUMBER = 10000000000;
}
