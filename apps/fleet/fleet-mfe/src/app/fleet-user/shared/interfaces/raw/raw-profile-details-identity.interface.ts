export interface RawProfileDetailsIdentityInterface {
  pid: string;
  firstname: string;
  lastname: string;
  email: string;
  language: string;
  phonenumber: string;
  gender: string;
  birthdate: string;
  privacysetting: number;
  role: string;
  credential: string;
  primarycredentialalias: string;
  telenethosted: boolean;
  legacylogin: boolean;
  version: number;
  status: string;
  msisdn: string[];
  alias: string[];
  nickname?: string;
  unverifiedphonenumber?: string;
  itsMeId?: string;
  facebookLoginId?: string;
  googleSignInId?: string;
  mailboxUUID?: string;
  mailboxAlias?: string[];
  transferPIDRequest?: TransferPIDInterface;
  age?: number;
  contactid?: string;
  msisdnOnly?: boolean;
}

export interface TransferPIDInterface {
  id: string;
  targethouseholdName: string;
  currenthouseholdName: string;
  consentApproval?: ConsentApprovalInterface[];
}

export interface ConsentApprovalInterface {
  identityId?: string;
  status?: string;
}
