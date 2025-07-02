export interface LegalEnityRawInterface {
  domain: string;
  property: string;
  values: LegalEntityInterface[];
}

export interface LegalEntityInterface {
  name: string;
  id: string;
}

export interface LegalEntityPayload {
  languageCode: string;
  property: string;
  domain: string;
}
