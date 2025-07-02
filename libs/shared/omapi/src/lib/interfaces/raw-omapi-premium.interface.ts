export interface RawOmapiPremiumInterface {
  serviceDetails: RawServiceDetailsInterface;
}

export interface RawServiceDetailsInterface {
  premiumSerivceId?: string;
  details: RawDetailsInterface[];
}

export interface RawDetailsInterface {
  serviceType: string;
  serviceStatus: string;
  serviceDescription: string;
  serviceConfirmedDate: string;
  serviceEndDate: string;
  premium: string;
  fixOrMobile: string;
  priceStartDate: string;
  priceEndDate: string;
  sendSms: string;
  receiveSms: string;
  sendMms: string;
  receiveMms: string;
  callPerMinute: string;
  callPerSecond: string;
  setUpCost: string;
  contentProviderStartDate: string;
  contentProviderEndDate: string;
  contentProviderName: string;
  contentProviderStreet: string;
  contentProviderPostalCode: string;
  contentProviderCity: string;
  contentProviderCountry: string;
  customerCareTelephoneOrEmail: string;
  customerCareUrl: string;
}
