import { RawAddressInterface } from './raw/raw-address.interface';
export interface CharsInterface {
  email?: string;
  phoneNumber?: string;
  locationId?: string;
  contactFirstName?: string;
  contactLastName?: string;
  companyName?: string;
  address?: RawAddressInterface;
  manualAddress?: RawAddressInterface;
  endDate?: string;
  deliveryEmail?: string;
  key?: CharsEnum;
  hasVoiceMailBox?: boolean;
  values?: string[];
  unit?: string;
}

enum CharsEnum {
  HIDE_ADD_BUTTON_WHEN_PACK_ACTIVE = 'hideaddbuttonwhenpackactive',
  MUTUALLY_EXCLUSIVE_TO_CONTENT_PACK = 'mutuallyexclusivetocontentpack',
  CALL_CONTENT_PACK_DISCOUNTED_PRICE_API = 'callcontentpackdicsountedpriceapi',
  UPGRADABLE_TO = 'upgradableto',
  INTERNET_USAGE_LIMIT = 'internet_usage_limit',
  INTERNET_USAGE_INITIAL_THRESHOLD = 'internet_usage_initial_threshold',
  INTERNET_USAGE_ALERT_THRESHOLD = 'internet_usage_alert_threshold',
  IS_EXTERNAL_CONTENT_PACK = 'isExternalContentPack',
  PRODUCT_TIER = 'producttier',
}
