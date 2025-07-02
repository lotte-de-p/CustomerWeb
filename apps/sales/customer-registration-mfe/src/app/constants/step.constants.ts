import { BusinessIdentityDetailsComponent } from '@sales/customer-registration/feat-business-identity-details';
import { ComponentStep } from '@sales/shared/data-access';
import { PersonalDetailsComponent } from '@sales/customer-registration/feat-personal-details';
import { IdentityDetailsComponent } from '@sales/customer-registration/feat-identity-details';
import { AddressIdentityComponent } from '@sales/customer-registration/feat-address-identity';
import { NavsIdentityDetailsComponent } from '@sales/customer-registration/feat-navs-identity-details';

export const SalesStepsForResidential: ComponentStep[] = [
  {
    key: 'personal',
    component: PersonalDetailsComponent,
  },
  {
    key: 'identity',
    component: IdentityDetailsComponent,
  },
  {
    key: 'address',
    component: AddressIdentityComponent,
  },
  {
    key: 'navs',
    component: NavsIdentityDetailsComponent,
  },
];

export const SalesStepsForBusiness: ComponentStep[] = [
  {
    key: 'personal',
    component: PersonalDetailsComponent,
  },
  {
    key: 'business-identity',
    component: BusinessIdentityDetailsComponent,
  },
];
