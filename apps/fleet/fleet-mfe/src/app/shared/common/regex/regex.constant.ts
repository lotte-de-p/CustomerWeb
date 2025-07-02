export class RegexConstants {
  static COMPANY = /^([a-zA-Z0-9àâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ\s.-’']+)$/;
  static EMAIL = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,25})$/i;
  static NUMBER_ONLY_REGEX = '^[0-9]*$';
  static SIM_CARD_REGEX = /^(\d{13}|\d{19})$/;
}
