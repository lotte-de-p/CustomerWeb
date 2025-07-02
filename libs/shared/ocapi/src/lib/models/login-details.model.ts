import { ContextHubModelInterface } from '@telenet/ng-lib-page';
import { includes, some, isEmpty, merge } from 'lodash-es';
import { LoginDetailsConstants } from '../constants';

export class LoginDetails implements ContextHubModelInterface<LoginDetails> {
  state: string;
  nonce: string;
  status: string;
  narrowed = false;
  httpStatus: number;
  scopes: string[];
  bssSystem: string;
  customerNumber: string;
  identityId: string;
  username: string;
  firstName: string;
  lastName: string;
  narrowedScope: boolean;
  authAge: number;
  isPid: boolean;
  bssSytem: string;
  isImpersonated: boolean;
  role: string;
  isExplicitLogin: boolean;
  isTelenetLogin: boolean;
  isSubLogin: boolean;
  loginAlias: string;
  identityRequestId?: string;
  pegaServiceCaseId?: string;
  contactNumber?: string;
  advisorId?: string;

  msisdn?: string;

  constructor(httpStatus: number) {
    this.httpStatus = httpStatus;
  }

  isLoggedIn(): boolean {
    return this.httpStatus === 200;
  }

  isNarrowed(): boolean {
    return this.isLoggedIn() && this.narrowedScope;
  }

  invalidResponse(): boolean {
    return this.httpStatus === 0;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn() && !this.isNarrowed() && !this.invalidResponse();
  }

  isMaster(): boolean {
    return !isEmpty(this.role) && includes(LoginDetailsConstants.MASTER_ROLES, this.role);
  }

  isChild(): boolean {
    return !isEmpty(this.role) && includes(LoginDetailsConstants.CHILD_ROLES, this.role);
  }

  isMember(): boolean {
    return !isEmpty(this.role) && this.role.toUpperCase().includes(LoginDetailsConstants.MEMBER_ROLE);
  }

  isContractHolder(): boolean {
    return !isEmpty(this.role) && this.role.toUpperCase().includes(LoginDetailsConstants.CONTRACT_HOLDER_ROLE);
  }

  isOrphan(): boolean {
    return !isEmpty(this.role) && this.role.toUpperCase().includes(LoginDetailsConstants.ORPHAN_ROLE);
  }

  isNewlyRegisteredUser(): boolean {
    return !!isEmpty(this.role) && !isEmpty(this.firstName);
  }

  getName(): string {
    return this.firstName.concat(LoginDetailsConstants.EMPTY).concat(this.lastName);
  }

  getShortenedName(): string {
    return this.getName().length <= LoginDetailsConstants.CHARACTER_LIMIT
      ? this.getName()
      : this.getName()
          .substring(0, LoginDetailsConstants.CHARACTER_LIMIT - LoginDetailsConstants.SUFFIX.length)
          .concat(LoginDetailsConstants.SUFFIX);
  }

  isCafeUser(): boolean {
    return this.bssSystem === LoginDetailsConstants.BSS_SYSTEM_TELENET_LEGACY;
  }

  isBaseLegacyCustomer(): boolean {
    return this.bssSystem === LoginDetailsConstants.BSS_SYSTEM_BASE_LEGACY;
  }

  isBssSystemNetcracker(): boolean {
    return this.bssSystem === LoginDetailsConstants.BSS_SYSTEM_NETCRACKER;
  }

  hasScope(scopeName: string): boolean {
    return some(this.scopes, function (scope) {
      return scope.toUpperCase() === scopeName.toUpperCase();
    });
  }

  isFleetManager(): boolean {
    return !isEmpty(this.role) && this.role === LoginDetailsConstants.FLEET_MANAGER_ROLE;
  }

  isFleetUser(): boolean {
    return !isEmpty(this.role) && this.role === LoginDetailsConstants.FLEET_USER_ROLE;
  }

  isManager(): boolean {
    return !isEmpty(this.role) && this.role === LoginDetailsConstants.MANAGER_ROLE;
  }

  hasManagerRole(): boolean {
    return !isEmpty(this.role) && LoginDetailsConstants.MANAGER_ROLES.includes(this.role);
  }

  enrich(loginDetailsJSON: unknown): LoginDetails {
    let enrichedLoginDetails = new LoginDetails(401);
    if (!isEmpty(loginDetailsJSON)) {
      enrichedLoginDetails = merge(enrichedLoginDetails, loginDetailsJSON);
    }
    return enrichedLoginDetails;
  }

  isNotLoggedInOrDoesNotHaveScope(scope: string) {
    return !this.isLoggedIn() || !this.hasScope(scope);
  }

  get isSuccess(): boolean {
    return this.httpStatus === 200;
  }

  // useless setter but needed to avoid 'cannot set property on [object Object] which only has getter
  set isSuccess(success: boolean) {
    if (success) {
      this.httpStatus = 200;
    }
  }
}
