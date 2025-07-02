export class RegexConstants {
  static BASE_SIM_CARD = /^\d{13}$/;
  static BASE_SALES_ORDER = /^\d{1,16}$/;
  static FOREIGN_EID_NUMBER = /^[\d]{9}$/;
  static PHONE_NUMBER = /^[0-9/.+-]{8,15}$/;
  static FIXED_PHONE_NUMBER = /^[0-9]{8,9}$/;
  static ADDRESS_NUMBER = /^[A-Za-z0-9]{0,6}$/;
  static TEXT_FIELD_GENERAL = /^([a-zA-Z0-9\s-']+)$/;
  static TEXT_FIELD_ONLY_ALPHABETS = /^([a-zA-Z\s]+)$/;
  static NATIONAL_PHONE_NUMBER = /^((0|0032|\+32)\d{8})$/;
  static NATIONAL_MOBILE_NUMBER = /^((0|0032|32|\+32)4\d{8})$/;
  static INTERNATIONAL_PHONE_NUMBER = /^((00|\+)(?!32)\d{7,15})$/;
  static BELGIAN_EID_NUMBER = /^[a-zA-Z0-9]{3}-[\d]{7}-[\d]{2}$/;
  static FOREIGN_EID_NUMBER_REGEX = /^[a-zA-Z0-9.-]{1,20}$/;
  static NATIONAL_REGISTRY_NUMBER = /^[\d]{2}.[\d]{2}.[\d]{2}-[\d]{3}.[\d]{2}$$/;
  static INTERNATIONAL_NUMBER = /^(\+|00|0)(?:[0-9] ?){6,14}[0-9]$/;
  static BASE_AND_FIXED_NUMBER = /^(((\+32)\d{8})|((00)\d{8})|((0)\d{8}))$/;
  static COMPANY = /^([a-zA-Z0-9àâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ\s.-’']+)$/;
  static MULTI_LINGUAL = /^([a-zA-Z0-9àâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇÆæ\s-]+)$/;
  static TELENET_PHONE_NUMBER = /^(((0|0032|\+32)4\d{8})|((00|\+)(?!32)\d{7,12}))$/;
  static TELENET_MOBILE_NUMBER = /^((|0|0032|32|\+32)4\d{8})$/;
  static INTERNATIONAL_AND_FIXED_NUMBER = /^(((00)\d{8,13})|((0)\d{8,9})|((0)\d{8}))$/;
  static EMAIL = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,25})$/i;
  static BASE_PHONE_NUMBER = /^(((0|0032|\+32|032|32)4\d{8})|((00|\+)(?!32)4\d{8})|(4\d{8}))$/;
  static FORMATTED_BASE_PHONE_NUMBER = /^((([0-9]{4})[ ][0-9]{2})(([ ]?[0-9]){2})(([ ]?[0-9]){2}))$/;
  static BASE_EMAIL =
    /^[_a-z0-9!#$%&'*+-/=?^_`{|}~-]+(\.[_a-z0-9!#$%&'*+-/=?^_`{|}~-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,25})$/i;
  static DELIVERY_ORDER_PHONE_NUMBER =
    /^(((0032|032|\+32|32)\d{8})|((0032|032|\+32|32)4\d{8})|((\+)(?!32)\d{7,13})|((0|00)(?!32)([1-9])\d{7})|((0|00)4\d{8})|(4\d{7,8})|(([1-9])\d{7}))$/;
  static ZERO_PREFIX_CHECK_REGEX = /(^[1-9][0-9]{7})|(^[1-9][0-9]{8})$/;
  static DARWIN_EMAIL =
    /^[-A-Za-z0-9~!#$%^&*_=+}|/{'`?][-A-Za-z0-9~!#$%^&*_=+.}|/{'`?]*[-A-Za-z0-9~!#$%^&*_=+}|/{'`?]@(([-A-Za-z0-9]+[.]?[-A-Za-z0-9]+\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|local|museum|name|net|org|pro|travel|mobi|global|[a-z][a-z]))|(\[([0-9]{1,3}\.){3}[0-9]{1,3}]))$/i;
  static NETWORK_NAME = /([\^`,"'])/;
  static SPECIAL_CHAR_REGEX = /(?=.*[\x21-\x2F\x3A-\x40\x5B-\x60\x7B-\x7E])/;
  static LOWER_CASE_REGEX = /(?=.*[a-z])/;
  static UPPER_CASE_REGEX = /(?=.*[A-Z])/;
  static NUMBER_REGEX = /(?=.*[0-9])/;
  static NO_START_END_SPACE_REGEX = /^\s|\s$/;
  static NO_START_SPACE_REGEX = /^\s/;
  static MAC_ADDRESS = /^[0-9a-f]{1,2}([.:-])[0-9a-f]{1,2}(?:\1[0-9a-f]{1,2}){4}$/i;
  static NO_NONE_WORD_REGEX = /\b(none)\b/g;
  static NUMBER_ONLY_REGEX = '^[0-9]*$';
  static PRICE = /^\d+(?:[.,]\d{2})?$/;
  static INTERNATIONAL_IBAN =
    '^([A-Z]{2}[ ]?[0-9]{2})(?=(?:[ -]?[A-Z0-9]){9,30}$)((?:[ -]?[A-Z0-9]{3,5}){2,7})([ -]?[A-Z0-9]{1,3})?$';
  static NO_START_END_SPACE = /^\S[\w\d\s\x21-\x2F\x3A-\x40\x5B-\x60\x7B-\x7E]*\S$/;
  static NUMBER_RANGE_REGEX = /^(\d+\s?-\s?\d+)$/;
  static SIM_CARD_REGEX = /^(\d{13}|\d{19})$/;
  static HEXADECIMAL = '^[a-fA-F0-9]*$';
  static ALPHA_NUMERIC_REGEX = /(?=.*[a-zA-Z0-9])/;
}
