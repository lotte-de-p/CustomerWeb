import { User } from '@tools/e2e';

const password = 'Test@12345';

export const int_users: User[] = [
  {
    products: ['Easy Internet + Telenet TV Iconic'],
    customerNumber: '662075621',
    type: 'manager_with_4out5_discounts',
    username: 'Manager_662075621_fmmlkz@telenetgroup.be',
    password: password,
  },
  {
    products: ['Mobile 20GB'],
    customerNumber: '1209004115',
    type: 'contractholder_with_5out5_discounts',
    username: 'dyson.higuera@itdm.test',
    password: password,
  },
  {
    products: [],
    customerNumber: '1210203631',
    type: 'manager_soho_with_5_discounts',
    username: 'Manager_1210203631_dscxuc@telenetgroup.be',
    password: password,
  },
];
