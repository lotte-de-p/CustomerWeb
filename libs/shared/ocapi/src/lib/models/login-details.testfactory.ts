import { LoginDetails } from './login-details.model';

export class LoginDetailsTestfactory {
  static build(properties?: unknown): LoginDetails {
    const loginDetails = new LoginDetails(200);
    loginDetails.customerNumber = '12345';
    loginDetails.state = 'test_state';
    loginDetails.nonce = 'test_nonce';
    loginDetails.status = 'test_status';
    loginDetails.scopes = [];
    loginDetails.bssSystem = 'test_bss_system';
    loginDetails.identityId = '';
    loginDetails.username = 'test_user';
    loginDetails.firstName = 'test_firstname';
    loginDetails.lastName = 'test_lastname';
    loginDetails.narrowed = false;
    loginDetails.authAge = 18;
    loginDetails.isPid = false;
    loginDetails.bssSytem = 'test_bssSytem';
    loginDetails.isImpersonated = false;
    loginDetails.role = '';
    loginDetails.isExplicitLogin = false;
    loginDetails.isTelenetLogin = true;
    loginDetails.isSubLogin = false;
    loginDetails.loginAlias = 'test_login_alias';
    loginDetails.advisorId = 'adminfmc';

    if (properties) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      Object.keys(properties).forEach((key) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        loginDetails[key] = properties[key];
      });
    }
    return loginDetails;
  }
}
