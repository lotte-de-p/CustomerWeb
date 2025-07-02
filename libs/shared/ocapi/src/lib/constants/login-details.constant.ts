export class LoginDetailsConstants {
  static EMPTY = '';
  static MASTER_ROLES = ['MASTER_USER', 'PREPAID_MASTER_USER', 'MANAGER'];
  static CHILD_ROLES = ['CHILD_USER', 'PREPAID_CHILD_USER'];
  static FLEET_MANAGER_ROLE = 'FLEET MANAGER';
  static FLEET_USER_ROLE = 'FLEET USER';
  static MEMBER_ROLE = 'MEMBER';
  static MANAGER_ROLE = 'MANAGER';
  static ORPHAN_ROLE = 'ORPHAN';
  static INTERNET_MASTER_ROLE = 'INTERNET_MASTER';
  static CUSTOMER_ADMIN_ROLE = 'CUSTOMER_ADMIN';
  static CONTRACT_HOLDER_ROLE = 'CONTRACT_HOLDER';
  static MANAGER_ROLES = [
    LoginDetailsConstants.MANAGER_ROLE,
    LoginDetailsConstants.INTERNET_MASTER_ROLE,
    LoginDetailsConstants.CUSTOMER_ADMIN_ROLE,
    LoginDetailsConstants.CONTRACT_HOLDER_ROLE,
  ];
  static CHARACTER_LIMIT = 39;
  static SUFFIX = '...';
  static BSS_SYSTEM_BASE_LEGACY = 'BASE_LEGACY';
  static BSS_SYSTEM_TELENET_LEGACY = 'TELENET_LEGACY';
  static BSS_SYSTEM_NETCRACKER = 'NETCRACKER';
  static STYLE_HINT = 'care';
  static PROMPT_NONE = 'none';
  static PROMPT_LOGIN = 'login';
  static CODE = 'code';
  static CLAIMS = '{"id_token":{"http://telenet.be/claims/roles":null,"http://telenet.be/claims/licenses":null}}';
  static CLIENT_ID_OCAPI_BASE = 'ocapi_base';
  static SOURCE_EMAIL = 'EMAIL';
  static CUSTOMER_REGISTRATION_URL = 'customer_registration_url';
  static COOKIE_KEYS = 'cookie_keys';
  static PARAM_CHANNEL = 'channel';
  static PARAM_IDP = 'idp';
  static PARAM_FLOW = 'flow';
  static PARAM_SDATA = 'sdata';
  static PARAM_REFERRER_URL = 'referrer_url';
  static ITS_ME_REGISTER_ENDPOINT = '/itsme/register';
  static STEP_ID_LOGIN_REGISTER = 'login-register';
  static LOGIN = 'LOGIN';
  static LOGIN_STATUS_COOKIENAME = 'loginStatus';
}
