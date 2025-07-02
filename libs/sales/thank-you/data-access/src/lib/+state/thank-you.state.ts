export interface ThankYouState {
  redirectUrl: string | undefined;
  orderNumber: string | undefined;
}

export const defaultState: ThankYouState = {
  redirectUrl: undefined,
  orderNumber: undefined,
};
