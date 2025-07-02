export interface OrganizationInterface {
  customerNumber?: string;
  companyName: string;
  legalForm: string;
  vatNumber: string;
}

export interface RawOrganizationInterface {
  name: string;
  customernumber: string;
  type: string;
  vat: string;
}
