export interface Authenticators {
  authenticators: Authenticator[];
  '2fa': MultiFactor;
}

export interface Authenticator {
  type: string;
  enabled: boolean;
  enrollmentLink?: string | null;
  factors?: Factor[] | null;
}

export interface Factor {
  id: string;
}

export interface MultiFactor {
  enabled: boolean;
}
