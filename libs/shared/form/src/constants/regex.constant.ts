export class RegexConstants {
  static FIXED_PHONE_NUMBER = /^[0-9]{8,9}$/;
  static BELGIAN_EID_NUMBER = /^[a-zA-Z0-9]{3}-\d{7}-\d{2}$/;
  static FOREIGN_EID_NUMBER_REGEX = /^[a-zA-Z0-9.-]{1,20}$/;
  static NATIONAL_REGISTRY_NUMBER = /^\d{2}.\d{2}.\d{2}-\d{3}.\d{2}$/;
  static DELIVERY_PHONE_NUMBER =
    /^(((0032|032|\+32|32)\d{8})|((0032|032|\+32|32)4\d{8})|((\+)(?!32)\d{7,15})|((0|00)(?!32)([1-9])\d{8})|((0|00)4\d{8})|(4\d{7,8})|(([1-9])\d{7}))$/;
  static TELENET_PHONE_NUMBER = /^(((0|0032|\+32)4\d{8})|((00|\+)(?!32)\d{7,12}))$/;
  static EMAIL = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,25})$/i;
  static NETWORK_NAME = /([\^`,"'])/;
  static NO_START_SPACE_REGEX = /^\s/;
  static MAC_ADDRESS = /^[0-9a-f]{1,2}([.:-])[0-9a-f]{1,2}(?:\1[0-9a-f]{1,2}){4}$/i;
  static NUMBER_ONLY_REGEX = '^[0-9]*$';
  static COMPANY_REGEX = /^([a-zA-Z0-9àâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ\s.\-’']+)$/;
}
