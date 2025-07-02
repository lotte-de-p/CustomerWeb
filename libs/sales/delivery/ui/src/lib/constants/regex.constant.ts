export class RegexConstants {
  static PHONE_NUMBER = /^[0-9/.+-]{8,15}$/;
  static FIXED_PHONE_NUMBER = /^[0-9]{8,9}$/;
  static NATIONAL_PHONE_NUMBER = /^((0|0032|\+32)\d{8})$/;
  static NATIONAL_MOBILE_NUMBER = /^((0|0032|32|\+32)4\d{8})$/;
  static INTERNATIONAL_PHONE_NUMBER = /^((00|\+)(?!32)\d{7,15})$/;
  static TELENET_PHONE_NUMBER = /^(((0|0032|\+32)4\d{8})|((00|\+)(?!32)\d{7,12}))$/;
  static TELENET_MOBILE_NUMBER = /^((|0|0032|32|\+32)4\d{8})$/;
  static BASE_PHONE_NUMBER = /^(((0|0032|\+32|032|32)4\d{8})|((00|\+)(?!32)4\d{8})|(4\d{8}))$/;
  static FORMATTED_BASE_PHONE_NUMBER = /^((([0-9]{4})[ ][0-9]{2})(([ ]?[0-9]){2})(([ ]?[0-9]){2}))$/;
  static INTERNATIONAL_NUMBER = /^(\+|00|0)(?:[0-9] ?){6,14}[0-9]$/;
  static DELIVERY_ORDER_PHONE_NUMBER =
    /^(((0032|032|\+32|32)\d{8})|((0032|032|\+32|32)4\d{8})|((\+)(?!32)\d{7,13})|((0|00)(?!32)([1-9])\d{7})|((0|00)4\d{8})|(4\d{7,8})|(([1-9])\d{7}))$/;
}
