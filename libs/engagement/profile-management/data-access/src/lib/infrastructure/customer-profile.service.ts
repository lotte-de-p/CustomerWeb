import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { CustomerConstants } from '../constants/customer.constant';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { ProfileDetails } from '../models/profile-details.model';
import { ProfileDetailsMapper } from '../mappers/profile-details.mapper';
import { SocialLogins } from '../models/social-logins.model';
import { SocialLoginsMapper } from '../mappers/social-logins.mapper';
import { ApiResponseMapper } from '../mappers/api-response-mapper';
import { ApiResponse } from '../models/api-response.model';
import { ManageSocialLoginConstants } from '../constants/manage-social-login.constant';
import { ProfileOverview } from '../models/profile.overview.model';
import { ConfigConstants, ConfigService } from '@telenet/ng-lib-config';
import { Authenticators } from '../models/authenticators.model';
import { AuthenticatorsMapper } from '../mappers/authenticators.mapper';
import { RequestSuccessMapper } from '../mappers/request-success.mapper';
import { ManageAuthenticatorsConstants } from '../constants/manage-authenticators.constant';
import { Factor } from '../models/factor.model';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorMessage } from '@telenet/ng-lib-message';

const MESSAGE_GROUP_PROFILE_MANAGEMENT = CustomerConstants.MESSAGE_GROUP;
const MESSAGE_GROUP_PROFILE_OVERVIEW = 'profile-overview';
const MESSAGE_GROUP_MANAGE_SOCIAL_LOGIN = ManageSocialLoginConstants.MESSAGE_GROUP;
const MESSAGE_GROUP_MANAGE_AUTHENTICATORS = ManageAuthenticatorsConstants.MESSAGE_GROUP;

@Injectable({
  providedIn: 'root',
})
export class CustomerProfileService {
  constructor(
    private readonly ocapiService: OcapiService,
    private readonly configService: ConfigService
  ) {}

  getProfileDetailsByIdentityId(identityId: string, pidTransferRequest?: boolean): Observable<ProfileDetails> {
    const parameters = pidTransferRequest ? `?includetransferrequest=true` : '';
    const suffix = '/' + identityId.concat(parameters);
    const endPoint = this.getServiceURI(CustomerConstants.API_VERSION_V1, CustomerConstants.ENDPOINT_IDENTITY, suffix);
    const ocapiConfig = new OcapiCallConfig(MESSAGE_GROUP_PROFILE_MANAGEMENT, endPoint, new ProfileDetailsMapper());

    return this.ocapiService.doGet(ocapiConfig);
  }

  getProfileOverview(identityId: string): Observable<ProfileOverview> {
    const { API_VERSION_V1, ENDPOINT_IDENTITY } = CustomerConstants;
    const apiUrl = this.getClientServiceURI(API_VERSION_V1, ENDPOINT_IDENTITY);
    const endPoint = `${apiUrl}/${identityId}`;
    const ocapiConfig = new OcapiCallConfig(MESSAGE_GROUP_PROFILE_OVERVIEW, endPoint);

    return this.ocapiService.doGet(ocapiConfig) as Observable<ProfileOverview>;
  }

  getProfilePicture(identityId: string): string {
    const { API_VERSION_V1, ENDPOINT_IDENTITY, ENDPOINT_PROFILE_PICTURE } = CustomerConstants;
    const apiUrl = this.getClientServiceURI(API_VERSION_V1, ENDPOINT_IDENTITY);
    const endPoint = `${apiUrl}/${identityId}${ENDPOINT_PROFILE_PICTURE}`;

    return this.configService.getConfig(ConfigConstants.OCAPI_URl) + endPoint;
  }

  getSocialLogins(): Observable<SocialLogins> {
    const { API_VERSION_V1, ENDPOINT_SOCIAL_LOGINS } = CustomerConstants;
    const endPoint = this.getClientServiceURI(API_VERSION_V1, ENDPOINT_SOCIAL_LOGINS);
    const ocapiConfig = new OcapiCallConfig(MESSAGE_GROUP_MANAGE_SOCIAL_LOGIN, endPoint, new SocialLoginsMapper());

    return this.ocapiService.doGet(ocapiConfig);
  }

  unlinkSocialLogin(socialLoginType: string): Observable<ApiResponse> {
    const { API_VERSION_V1, ENDPOINT_UNLINK_SOCIAL_LOGIN } = CustomerConstants;
    const apiUrl = this.getClientServiceURI(API_VERSION_V1, ENDPOINT_UNLINK_SOCIAL_LOGIN);
    const endPoint = `${apiUrl}/${socialLoginType.toUpperCase()}`;
    const ocapiConfig = new OcapiCallConfig(MESSAGE_GROUP_MANAGE_SOCIAL_LOGIN, endPoint, ApiResponseMapper);

    return this.ocapiService.doDelete(ocapiConfig);
  }

  getAuthenticators(): Observable<Authenticators> {
    const { API_VERSION_V1, ENDPOINT_AUTHENTICATORS } = CustomerConstants;
    const endPoint = this.getClientServiceURI(API_VERSION_V1, ENDPOINT_AUTHENTICATORS);
    const ocapiConfig = new OcapiCallConfig(MESSAGE_GROUP_MANAGE_AUTHENTICATORS, endPoint, new AuthenticatorsMapper());

    return this.ocapiService.doGet(ocapiConfig);
  }

  update2faStatus(payload: boolean): Observable<boolean> {
    const { API_VERSION_V1, ENDPOINT_AUTHENTICATORS, ENDPOINT_2FA } = CustomerConstants;
    const endPoint = this.getClientServiceURI(API_VERSION_V1, ENDPOINT_AUTHENTICATORS + ENDPOINT_2FA);
    const ocapiConfig = new OcapiCallConfig(
      MESSAGE_GROUP_MANAGE_AUTHENTICATORS,
      endPoint,
      new RequestSuccessMapper(),
      { enabled: payload },
      {},
      true
    );
    ocapiConfig.errorHandler = this.handleErrorsResponse.bind(this);

    return this.ocapiService.doPatch(ocapiConfig);
  }

  unenrollFactor(factor: Factor): Observable<boolean> {
    const { API_VERSION_V1, ENDPOINT_AUTHENTICATORS } = CustomerConstants;
    const endPoint = this.getClientServiceURI(
      API_VERSION_V1,
      ENDPOINT_AUTHENTICATORS + '/' + factor.type + '/' + factor.id
    );
    const ocapiConfig = new OcapiCallConfig(
      MESSAGE_GROUP_MANAGE_AUTHENTICATORS,
      endPoint,
      new RequestSuccessMapper(),
      null,
      {},
      true
    );
    ocapiConfig.errorHandler = this.handleErrorsResponse.bind(this);

    return this.ocapiService.doDelete(ocapiConfig);
  }

  private getServiceURI(apiVersion: string, context: string, endpoint: string): string {
    return CustomerConstants.CUSTOMER_SERVICE_PREFIX.concat(apiVersion).concat(context).concat(endpoint);
  }

  private getClientServiceURI(apiVersion: string, endpoint: string): string {
    return CustomerConstants.CLIENT_SERVICE_PREFIX.concat(apiVersion).concat(endpoint);
  }

  private handleErrorsResponse<T, G>(error: HttpErrorResponse, ocapiCall: OcapiCallConfig<T, G>) {
    let errorMessage: ErrorMessage;
    if (error.status && error.error && error.error.code) {
      const errorCode = error.status.toString().concat('-').concat(error.error.code);
      errorMessage = new ErrorMessage(ocapiCall.messageGroupName, 'ocapi.' + errorCode);
    } else if (error.status) {
      errorMessage = new ErrorMessage(ocapiCall.messageGroupName, 'ocapi.' + error.status);
    }
    return throwError(() => errorMessage.getMessageLabel());
  }
}
