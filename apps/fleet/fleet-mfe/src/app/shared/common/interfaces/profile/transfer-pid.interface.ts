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
