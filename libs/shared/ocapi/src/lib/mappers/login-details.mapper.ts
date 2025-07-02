// @ts-nocheck
import { Injectable } from '@angular/core';
import { LoginDetails } from '../models/login-details.model';
import { RawLoginDetailsInterface } from '../interfaces/raw-login-details.interface';
import { MapperInterface } from '@telenet/ng-lib-shared';
import { map } from 'lodash-es';

@Injectable({
  providedIn: 'root',
})
export class LoginDetailsMapper implements MapperInterface<unknown, LoginDetails> {
  toModel(rawResponse: Record<string, unknown>): LoginDetails {
    if (rawResponse.status && rawResponse.status === 401) {
      return this.getLoginDetails(rawResponse.data as Record<string, unknown>, rawResponse.status);
    } else {
      return this.getLoginDetails(rawResponse, 200);
    }
  }

  private getLoginDetails(rawResponse: Record<string, unknown>, status: number): LoginDetails {
    const loginDetails = new LoginDetails(status);
    if (loginDetails.isLoggedIn()) {
      this.createLoginDetails(rawResponse as RawLoginDetailsInterface, loginDetails);
    } else {
      this.createStatAndNonce(rawResponse as string, loginDetails);
    }
    return loginDetails;
  }

  private createStatAndNonce(rawResponse: string, loginDetails: LoginDetails) {
    loginDetails.state = rawResponse?.split?.(',')?.[0];
    loginDetails.nonce = rawResponse?.split?.(',')?.[1];
  }

  private createLoginDetails(rawResponse: RawLoginDetailsInterface, loginDetails: LoginDetails) {
    const rawLoginDetails: RawLoginDetailsInterface = rawResponse;
    loginDetails.customerNumber = rawLoginDetails.customer_number;
    loginDetails.identityId = rawLoginDetails.identity_id;
    loginDetails.username = rawLoginDetails.username;
    loginDetails.firstName = rawLoginDetails.first_name;
    loginDetails.lastName = rawLoginDetails.last_name;
    loginDetails.narrowedScope = rawLoginDetails.narrowed_scope;
    loginDetails.scopes = this.createScopes(rawLoginDetails.scopes ? rawLoginDetails.scopes : []);
    loginDetails.authAge = rawLoginDetails.auth_age;
    loginDetails.isPid = rawLoginDetails.is_pid;
    loginDetails.bssSystem = rawLoginDetails.bss_system;
    loginDetails.isImpersonated = rawLoginDetails.impersonated;
    loginDetails.role = rawLoginDetails.role;
    loginDetails.isExplicitLogin = rawLoginDetails.explicit_login;
    loginDetails.isTelenetLogin = rawLoginDetails.is_telenet_login;
    loginDetails.isSubLogin = rawLoginDetails.is_sub_login;
    loginDetails.loginAlias = rawLoginDetails.login_alias;
    loginDetails.status = rawLoginDetails.status;
    loginDetails.identityRequestId = rawLoginDetails.identity_request_id;
    loginDetails.pegaServiceCaseId = rawLoginDetails.pega_service_case_id;
    loginDetails.contactNumber = rawLoginDetails.contact_number;
    loginDetails.advisorId = rawLoginDetails.advisorId || '';
  }

  private createScopes(rawScopes: string[]): string[] {
    return map(rawScopes, this.createScope);
  }

  private createScope(rawScope: string): string {
    return rawScope.split(':')[0];
  }
}
