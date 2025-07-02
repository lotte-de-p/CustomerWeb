export interface UpdateDeliveryAddressInfo {
  'Municipality/Sub-municipality': string;
  'Postal Code'?: string;
  Street: string;
  'House Number'?: string;
  'Sub-house Number'?: string | null;
  'Box Number'?: string | null;
  Country: string;
}

export interface UpdateDeliveryPersonalInfo {
  'First Name': string;
  'Last Name': string;
  'Mobile Number': string;
  'E-Mail': string;
}

export interface UpdateDeliveryCharsRequest
  extends Partial<UpdateDeliveryAddressInfo>,
    Partial<UpdateDeliveryPersonalInfo> {}
