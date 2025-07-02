import { makeFactory } from 'factory.ts';
import { PersonalIdentity, PersonalIdentityResponse } from './personal-identity.interface';

export const personalIdentityTestFactory = makeFactory<PersonalIdentity>({
  'First Name': 'Tom',
  'Last Name': 'Test',
  'Phone Number': '0485151522',
  'Fixed Phone Number': '027518545',
  'Mobile Number': '0485151522',
  'E-Mail': 'test@telenetgroup.be',
});

export const personalIdentityResponseTestFactory = makeFactory<PersonalIdentityResponse>({
  chars: personalIdentityTestFactory.build(),
});
