import { makeFactory } from 'factory.ts';
import { BillingAccount } from './billing-account.interface';

export const defaultBillingAccountFactory = makeFactory<BillingAccount>({
  id: '9168125680713712884',
  defaultBillingAccount: {
    name: 'Yes',
    id: '7777001',
  },
  billingAddress: {
    formattedAddress: 'België, 2800 Mechelen, defaultaccounnt, h. 17767',
    name: '17767',
    id: '9165656989113844238',
  },
});

export const billingAccountTestfactory = makeFactory<BillingAccount>({
  id: '9168125724813722982',
  defaultBillingAccount: {
    name: 'No',
    id: '7777002',
  },
  billingAddress: {
    formattedAddress: 'België, 3000 Leuven, non default, h. 17767',
    name: '17768',
    id: '1234656989113844238',
  },
});
