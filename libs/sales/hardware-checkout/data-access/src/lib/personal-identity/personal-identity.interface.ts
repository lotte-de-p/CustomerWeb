export interface PersonalIdentityResponse {
  chars: PersonalIdentity;
}

export interface PersonalIdentity {
  'First Name': string | null;
  'Last Name': string | null;
  'Phone Number': string | null;
  'Fixed Phone Number': string | null;
  'Mobile Number': string | null;
  'E-Mail': string | null;
}
