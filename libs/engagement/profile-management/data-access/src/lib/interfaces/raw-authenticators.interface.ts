export interface RawAuthenticatorsInterface {
  authenticators: RawAuthenticatorInterface[];
  '2fa': RawMultiFactorInterface;
}

export interface RawAuthenticatorInterface {
  type: string;
  enabled: boolean;
  details?: RawDetailsInterface;
}

export interface RawDetailsInterface {
  enrollmentLink?: string;
  factors?: RawFactorInterface[];
}

export interface RawFactorInterface {
  id: string;
}

export interface RawMultiFactorInterface {
  enabled: boolean;
}
