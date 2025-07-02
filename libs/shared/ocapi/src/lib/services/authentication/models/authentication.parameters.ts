export interface AuthenticationParameters {
  prompt?: AuthenticationPrompt;
  state?: string;
  nonce?: string;
  styleHint?: string;
  referrerUrl?: string;
  acr_values?: string;
}

export enum AuthenticationPrompt {
  NONE = 'none',
  LOGIN = 'login',
}
