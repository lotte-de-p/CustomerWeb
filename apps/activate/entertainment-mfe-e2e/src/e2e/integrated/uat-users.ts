import { User } from '@tools/e2e';

const password = 'Test@12345';

export const uat_users: User[] = [
  {
    products: ['DTV BOX'],
    customerNumber: '1209101835',
    type: 'customer_with_dtv_box',
    username: '1209101835@itdm.be',
    password: password,
  },
];
