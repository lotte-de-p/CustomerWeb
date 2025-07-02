export class CommonConstants {
  static readonly MSISDN = 'msisdn';
  static readonly PHONE_NUMBER_REGEX = /^((0)4\d{8})$/;
  static readonly PHONE_NUMBER_ONLY_NUMBERS = /\D/g;
  static readonly SALES_SERVICE_PREFIX = '/public/api/sales-service';
  static readonly BILLING_SERVICE_PREFIX = '/public/api/fleet-billing-service';
  static readonly API_VERSION_V1 = '/v1';
  static readonly API_VERSION_V2 = '/v2';
}
