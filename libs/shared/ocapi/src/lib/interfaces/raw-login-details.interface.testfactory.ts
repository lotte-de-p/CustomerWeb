import { makeFactory } from 'factory.ts';

export interface RawLoginDetailsInterface {
  customer_number: string;
  identity_id: string;
  username: string;
  first_name: string;
  last_name: string;
  is_telenet_login?: boolean;
  is_sub_login?: boolean;
  scopes?: string[];
  explicit_login: boolean;
  narrowed_scope?: boolean;
  auth_age: number;
  is_pid?: boolean;
  bss_system?: string;
  role: string;
  impersonated?: boolean;
  login_alias: string;
  status: string;
  identity_request_id?: string;
  pega_service_case_id?: string;
  contact_number?: string;
  advisorId?: string;
}

export const rawLoginDetailsInterfaceFactory = makeFactory<RawLoginDetailsInterface>({
  status: 'active',
  customer_number: '1208338235',
  identity_id: '817624297',
  username: 'kolatest@gmail.com',
  login_alias: '0625ad87-0a2e-4e02-9b5a-28c71c70f63c',
  first_name: 'kola',
  last_name: 'psc1',
  scopes: ['groupbundles', 'acceptoffer', 'D_manageusers'],
  explicit_login: true,
  narrowed_scope: false,
  bss_system: 'NETCRACKER',
  auth_age: 18,
  role: 'CONTRACT_HOLDER',
});

export const rawFormerLoginDetailsInterfaceFactory = makeFactory<RawLoginDetailsInterface>({
  status: 'Former',
  customer_number: '1208338235',
  identity_id: '817624297',
  username: 'kolatest@gmail.com',
  login_alias: '0625ad87-0a2e-4e02-9b5a-28c71c70f63c',
  first_name: 'kola',
  last_name: 'psc1',
  scopes: ['groupbundles', 'acceptoffer', 'D_manageusers'],
  explicit_login: true,
  narrowed_scope: false,
  bss_system: 'NETCRACKER',
  auth_age: 18,
  role: 'CONTRACT_HOLDER',
});
