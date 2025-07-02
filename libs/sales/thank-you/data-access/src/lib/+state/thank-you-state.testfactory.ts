import { makeFactory } from 'factory.ts';
import { ThankYouState } from './thank-you.state';

export const thankYouStateFactory = makeFactory<ThankYouState>({
  redirectUrl: undefined,
  orderNumber: undefined,
});
