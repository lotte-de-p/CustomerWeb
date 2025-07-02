export interface GroupBundleRequestInterface {
  billingAccountNumber: string;
  offering: Offering[];
}

export interface Offering {
  externalProductCode: string;
}
