import { User } from '@tools/e2e';

const password = 'Test@12345';
const myPrepaid = 'My Prepaid';

export const int_users: User[] = [
  {
    products: ['BASE 15'],
    customerNumber: '1209013982',
    type: 'manager_with_mobile_product',
    username: 'Manager_1209013982_avdpph@telenetgroup.be',
    password: password,
  },
  {
    products: ['BASE 20'],
    customerNumber: '1209003935',
    type: 'member_with_mobile_post_paid_subscription',
    username: 'Member_1209003935_kxnnzq@telenetgroup.be',
    password: password,
    mobile: {
      phoneNumber: '0488380341',
    },
  },
  {
    products: ['BASE 15'],
    customerNumber: '1210205511',
    type: 'manager_with_mobile_post_paid_subscription',
    username: 'Manager_1210205511_gmwzhv@telenetgroup.be',
    password: password,
    mobile: {
      phoneNumber: '0489836309',
    },
  },
  {
    products: ['BASE 15'],
    customerNumber: '1209008566',
    type: 'manager_with_2_mobile_1_pending_activation',
    username: 'Manager_1209008566_tbkwua@telenetgroup.be',
    password: password,
    mobile: {
      phoneNumber: '0484879848',
    },
  },
  {
    products: ['BASE 20 pending activation - assigned'],
    customerNumber: '1209008566',
    type: 'member_with_2_mobile_1_pending_activation_assigned',
    username: 'Member_1209008566_qvnqmr@telenetgroup.be',
    password: password,
    mobile: {
      phoneNumber: '0486856782',
    },
  },
  {
    products: [
      'BASE 9',
      'BASE 45 - limit almost reached',
      'Internet unlimited',
      'Internet limited - limit almost reached',
      '2 billing accounts',
    ],
    customerNumber: '1209003682',
    type: 'manager_with_two_mobile_internet_billing',
    username: 'Manager_1209003682_rlgniq@telenetgroup.be',
    password: 'Test@12345',
    mobile: {
      phoneNumber: '0487335193',
      nickname: 'Eli',
      unassignedNumber: '0487335166',
    },
    internet: {
      productCode1: 'BINT050001334',
      productCode2: 'BINT050001336',
    },
    personal: {
      firstName: 'Elijas',
      address1: 'Darwin Loadteststraat',
      houseNumber: '8242',
      subHouseNumber: '',
      boxNumber: '',
      ZIPCode: '2800',
      city: 'Mechelen',
      address2: 'Fourteenth New Telenet Teststraat',
      clientNumber1: '125787994',
      clientNumber2: '125787998',
    },
  },
  {
    products: ['BASE 15'],
    customerNumber: '1209007610',
    type: 'manager_with_2_mobile_1_suspended',
    username: 'Manager_1209007610_dfeuop@telenetgroup.be',
    password: password,
    mobile: {
      phoneNumber: '0484507866',
    },
  },
  {
    products: ['BASE 20 suspended - assigned'],
    customerNumber: '1209007610',
    type: 'member_with_2_mobile_1_suspended_assigned',
    username: 'Member_1209007610_lisvdb@telenetgroup.be',
    password: password,
    mobile: {
      phoneNumber: '0485171054',
    },
  },
  {
    products: ['internet limited'],
    customerNumber: '1209002090',
    type: 'manager_with_internet_subscription',
    username: 'Manager_1209002090_pgwtku@telenetgroup.be',
    password: password,
    internet: {
      productCode1: 'BINT050001197',
      productCode2: '',
    },
  },
  {
    products: ['internet limited'],
    customerNumber: '1209002090',
    type: 'member_with_internet_subscription',
    username: 'Member_1209002090_svqxly@telenetgroup.be',
    password: password,
  },
  {
    products: ['BASE 15', 'internet unlimited'],
    customerNumber: '1209002278',
    type: 'manager_with_mobile_post_paid_and_internet_subscription',
    username: 'Manager_1209002278_kngrwg@telenetgroup.be',
    password: password,
  },
  {
    products: [myPrepaid],
    customerNumber: '1209004091',
    type: 'manager_with_one_mobile_prepaid_subscription',
    username: 'Manager_1209004091_fulied@telenetgroup.be',
    password: password,
    mobile: {
      phoneNumber: '0488631743',
    },
  },
  {
    products: [''],
    customerNumber: '1209003372',
    type: 'contract_holder_with_mobile_prepaid_subscription',
    username: 'automation.fnika.zeeyg@itdmtest.be',
    password: password,
  },
  {
    products: [myPrepaid],
    customerNumber: '1209003372',
    type: 'manager_with_mobile_prepaid_subscription',
    username: 'Manager_1209003372_ekhzxl@telenetgroup.be',
    password: password,
    mobile: {
      phoneNumber: '0486320084',
    },
  },
  {
    products: [myPrepaid],
    customerNumber: '1209003372',
    type: 'member_with_mobile_prepaid_subscription',
    username: 'Member_1209003372_fostia@telenetgroup.be',
    password: password,
    mobile: {
      phoneNumber: '0487206210',
    },
  },
  {
    products: ['BASE unlimited'],
    customerNumber: '1210205526',
    type: 'manager_with_mobile_post_paid_subscription_unlimited_data',
    username: 'Manager_1210205526_rfffyr@telenetgroup.be',
    password: password,
    mobile: {
      phoneNumber: '0489836733',
    },
  },
  {
    products: ['BASE 15'],
    customerNumber: '1209014010',
    type: 'manager_with_global_all_mobile_barrings_enabled',
    username: 'Manager_1209014010_ipuyco@telenetgroup.be',
    password: password,
  },
  {
    products: ['Internet Anywhere 30 - datasim', 'BASE 15'],
    customerNumber: '1210205929',
    type: 'manager_with_datasim',
    username: 'Manager_1210205929_mjgofh@telenetgroup.be',
    password: password,
    mobile: {
      phoneNumber: '0488377017', // number of data sim
    },
  },
];
