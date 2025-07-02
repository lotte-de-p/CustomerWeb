import { Observable } from 'rxjs';
import { NgZone } from '@angular/core';
import { UrlService } from '@telenet/ng-lib-page';
import { MessageService } from '@telenet/ng-lib-message';
import { LoginCustomerNameMapper, LogoutMapper } from '../mappers';
import { OcapiService } from './ocapi.service';
import { LoginDetails, LogoutDetails } from '../models';
import { UserDetailsService } from './user-details.service';
import { AuthenticationService } from './authentication';
import * as i0 from "@angular/core";
type Window = Record<string, object>;
export declare class LoginService {
    protected _ngZone: NgZone;
    protected window: Window;
    private readonly authenticationService;
    private readonly ocapiService;
    private readonly urlService;
    private readonly messageService;
    private readonly loginCustomerNameMapper;
    private readonly logoutMapper;
    private readonly userDetailsService;
    constructor(_ngZone: NgZone, window: Window, authenticationService: AuthenticationService, ocapiService: OcapiService, urlService: UrlService, messageService: MessageService, loginCustomerNameMapper: LoginCustomerNameMapper, logoutMapper: LogoutMapper, userDetailsService: UserDetailsService);
    /**
     * @deprecated This function is deprecated, please use getUserDetails from UserDetailsService instead.
     */
    getLoginDetails(withCredentials?: boolean, referrerUrl?: string, _isRoleRequired?: boolean): Observable<LoginDetails>;
    login(referrerUrl?: string, styleHint?: string): void;
    loginWithPrompt(referrerUrl?: string, styleHint?: string): void;
    logout(messageGroupName: string, logoutPath: string): Observable<LogoutDetails>;
    getLogoutRedirectUrl(logoutPath: string): string;
    private getStateAndNonce;
    loginWithCustomerNumber(messageGroupName: string, _customerNumber: string, key: string, value: string, mobileNumber: string): Observable<null>;
    private handleErrorResponse;
    getAuthenticationStatus(): Observable<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoginService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LoginService>;
}
export {};
//# sourceMappingURL=login.service.d.ts.map