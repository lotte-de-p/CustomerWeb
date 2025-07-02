export interface MarketoLeadInterface {
  formId: string;
  input: LeadPayload[];
  'g-recaptcha-response'?: string;
}

export interface LeadPayload {
  leadFormFields: LeadFormFields;
  visitorData: VisitorData;
  cookie?: string;
}

export interface VisitorData {
  pageURL: string;
}

export interface LeadFormFields {
  VAT__c?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  Address_lead: string;
  postalCode: string;
  L_City__c: string;
  Language__c?: string;
  number_employees__c: string;
  privacyTermsConditions: string;
}
