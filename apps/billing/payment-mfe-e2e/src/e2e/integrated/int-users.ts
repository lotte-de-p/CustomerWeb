import { User } from '@tools/e2e';

const password = 'Test@12345';

export const int_users: User[] = [
  {
    products: ['TELENET MOBILE 20GB'],
    customerNumber: '1209010021',
    type: 'customer_with_pay_by_mobile',
    username: 'eriel.slate@itdm.be',
    password: password,
    mobile: {
      phoneNumber: '0469420061',
    },
  },
  {
    products: ['TELENET MOBILE 20GB'],
    customerNumber: '1210204995',
    type: 'customer_with_pay_by_mobile_barred',
    username: 'Manager_1210204995_fykese@telenetgroup.be',
    password: password,
    mobile: {
      phoneNumber: '',
    },
  },
  {
    products: [],
    customerNumber: '1209009648',
    type: 'member_with_mobile_line',
    username: 'Member_1209009648_katurg@telenetgroup.be',
    password: password,
    mobile: {
      phoneNumber: '0469 42 97 51',
    },
  },
];
