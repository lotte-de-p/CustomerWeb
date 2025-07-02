export interface IngenicoRequestForm {
  PSPID: string; // required
  ORDERID: string; // transactionID
  CURRENCY: string; // required
  AMOUNT: string; // required
  LANGUAGE: string; // required
  SHASIGN: string; // required
  SECRET?: string; // required
  EMAIL: string;
  OWNERADDRESS: string;
  OWNERZIP: string;
  OWNERTOWN: string;
  TP: string;
  DEVICE: string;
  CN: string;
  OWNERCTY: string;
  OWNERTELNO: string;
  PM: string;
  BRAND: string;
  ALIAS: string;
  ALIASUSAGE: string;
  ALIASOPERATION: string;
  PARAMPLUS: string;
  PARAMVAR: string;
  PMLISTTYPE: string;

  ACCEPTURL: string; // payment successful, no value given will use backoffice default

  DECLINEURL: string; // transaction declined

  EXCEPTIONURL: string; // something went wrong
  CANCELURL: string; // payment cancelled by customer
}
