import { of, throwError } from 'rxjs';
import { Inject, Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { ErrorMessage } from '@telenet/ng-lib-message';
import { OcapiCallConfig } from '../models';
import { AUTH_SERVICE, AuthenticationPrompt } from './authentication';
import * as i0 from "@angular/core";
import * as i1 from "./ocapi.service";
import * as i2 from "@telenet/ng-lib-page";
import * as i3 from "@telenet/ng-lib-message";
import * as i4 from "../mappers";
import * as i5 from "./user-details.service";
export class LoginService {
    _ngZone;
    window;
    authenticationService;
    ocapiService;
    urlService;
    messageService;
    loginCustomerNameMapper;
    logoutMapper;
    userDetailsService;
    constructor(_ngZone, window, authenticationService, ocapiService, urlService, messageService, loginCustomerNameMapper, logoutMapper, userDetailsService) {
        this._ngZone = _ngZone;
        this.window = window;
        this.authenticationService = authenticationService;
        this.ocapiService = ocapiService;
        this.urlService = urlService;
        this.messageService = messageService;
        this.loginCustomerNameMapper = loginCustomerNameMapper;
        this.logoutMapper = logoutMapper;
        this.userDetailsService = userDetailsService;
    }
    /**
     * @deprecated This function is deprecated, please use getUserDetails from UserDetailsService instead.
     */
    getLoginDetails(withCredentials = true, referrerUrl, _isRoleRequired = true) {
        return this.userDetailsService.getUserDetails({
            withCredentials,
            referrerUrl,
        });
    }
    login(referrerUrl, styleHint) {
        this.getStateAndNonce(referrerUrl).subscribe((loginDetails) => {
            const authParameters = {
                state: loginDetails.state,
                nonce: loginDetails.nonce,
                referrerUrl,
                styleHint,
            };
            this.authenticationService.authenticate(authParameters);
        });
    }
    loginWithPrompt(referrerUrl, styleHint) {
        this.getStateAndNonce(referrerUrl).subscribe((loginDetails) => {
            const authParameters = {
                state: loginDetails.state,
                nonce: loginDetails.nonce,
                referrerUrl,
                styleHint,
                prompt: AuthenticationPrompt.LOGIN,
            };
            this.authenticationService.authenticate(authParameters);
        });
    }
    logout(messageGroupName, logoutPath) {
        const endpoint = '/logout?targetUrl=' + encodeURIComponent(this.getLogoutRedirectUrl(logoutPath));
        const ocapiConfig = new OcapiCallConfig(messageGroupName, endpoint, this.logoutMapper, {});
        ocapiConfig.errorHandler = this.handleErrorResponse.bind(this);
        return this.ocapiService.doGet(ocapiConfig).pipe(map((response) => {
            this.authenticationService.setAuthenticatedStatus(false);
            if (response && response.logout_redirect_uri) {
                this.urlService.redirectTo(response.logout_redirect_uri);
                return {};
            }
            return response;
        }));
    }
    getLogoutRedirectUrl(logoutPath) {
        let logoutRedirectUrl = this.urlService.getCurrentUrl();
        if (logoutPath) {
            logoutRedirectUrl = logoutPath.startsWith('https://')
                ? logoutPath
                : location.protocol + '//' + location.host + logoutPath;
        }
        return this.urlService.removeParametersFromUrl(logoutRedirectUrl, 'jwt');
    }
    getStateAndNonce(refererUrl) {
        return this.userDetailsService.getUserDetails({
            withCredentials: false,
            referrerUrl: refererUrl,
        });
    }
    loginWithCustomerNumber(messageGroupName, _customerNumber, key, value, mobileNumber) {
        const endpoint = '/oauth/login?' + key + '=' + value + '&mobilenumber=' + mobileNumber;
        const ocapiConfig = new OcapiCallConfig(messageGroupName, endpoint, this.loginCustomerNameMapper, {});
        ocapiConfig.errorHandler = this.handleErrorResponse.bind(this);
        return this.ocapiService.doPost(ocapiConfig).pipe(tap(() => {
            this.authenticationService.setAuthenticatedStatus(true);
            this.userDetailsService.reset();
        }), map((response) => response));
    }
    handleErrorResponse(error, ocapiCall) {
        if (error.status === 401) {
            return of({ data: error.error, status: error.status });
        }
        else if (error.status === 400 && error.error && error.error.code) {
            const errorCode = error.status.toString().concat('-').concat(error.error.code);
            this.messageService.addMessage(new ErrorMessage(ocapiCall.messageGroupName, 'ocapi.' + errorCode));
        }
        else {
            this.messageService.addMessage(new ErrorMessage(ocapiCall.messageGroupName, 'ocapi.' + error.status));
        }
        return throwError(() => 'An error occured while trying to fetch ' + ocapiCall.messageGroupName);
    }
    getAuthenticationStatus() {
        return this.authenticationService.getAuthenticationStatus();
    }
    static ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(i0.ɵɵinject(i0.NgZone), i0.ɵɵinject('Window'), i0.ɵɵinject(AUTH_SERVICE), i0.ɵɵinject(i1.OcapiService), i0.ɵɵinject(i2.UrlService), i0.ɵɵinject(i3.MessageService), i0.ɵɵinject(i4.LoginCustomerNameMapper), i0.ɵɵinject(i4.LogoutMapper), i0.ɵɵinject(i5.UserDetailsService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i0.NgZone }, { type: undefined, decorators: [{
                type: Inject,
                args: ['Window']
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [AUTH_SERVICE]
            }] }, { type: i1.OcapiService }, { type: i2.UrlService }, { type: i3.MessageService }, { type: i4.LoginCustomerNameMapper }, { type: i4.LogoutMapper }, { type: i5.UserDetailsService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvbG9naW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWMsRUFBRSxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzFDLE9BQU8sRUFBRSxZQUFZLEVBQWtCLE1BQU0seUJBQXlCLENBQUM7QUFHdkUsT0FBTyxFQUErQixlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFekUsT0FBTyxFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBeUIsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7OztBQU83RixNQUFNLE9BQU8sWUFBWTtJQUVYO0lBQ2tCO0lBQ1c7SUFDdEI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBVG5CLFlBQ1ksT0FBZSxFQUNHLE1BQWMsRUFDSCxxQkFBNEMsRUFDbEUsWUFBMEIsRUFDMUIsVUFBc0IsRUFDdEIsY0FBOEIsRUFDOUIsdUJBQWdELEVBQ2hELFlBQTBCLEVBQzFCLGtCQUFzQztRQVI3QyxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ0csV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNILDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDbEUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO0lBQ3RELENBQUM7SUFFSjs7T0FFRztJQUNI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QUFDLE1BQU0sS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ25FLE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9FLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksWUFBWSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNyRyxDQUFDO2FBQU0sQ0FBQztZQUNOLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksWUFBWSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDeEcsQ0FBQztRQUNELE9BQU8sVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHlDQUF5QyxHQUFHLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2xHLENBQUM7SUFFTSx1QkFBdUI7UUFDNUIsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztJQUM5RCxDQUFDO3NFQXJIVSxZQUFZLHNDQUdiLFFBQVEsZUFDUixZQUFZO2dFQUpYLFlBQVksV0FBWixZQUFZLG1CQUZYLE1BQU07O2lGQUVQLFlBQVk7Y0FIeEIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COztzQkFJSSxNQUFNO3VCQUFDLFFBQVE7O3NCQUNmLE1BQU07dUJBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUsIG9mLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFVybFNlcnZpY2UgfSBmcm9tICdAdGVsZW5ldC9uZy1saWItcGFnZSc7XG5pbXBvcnQgeyBFcnJvck1lc3NhZ2UsIE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnQHRlbGVuZXQvbmctbGliLW1lc3NhZ2UnO1xuaW1wb3J0IHsgTG9naW5DdXN0b21lck5hbWVNYXBwZXIsIExvZ291dE1hcHBlciB9IGZyb20gJy4uL21hcHBlcnMnO1xuaW1wb3J0IHsgT2NhcGlTZXJ2aWNlIH0gZnJvbSAnLi9vY2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IExvZ2luRGV0YWlscywgTG9nb3V0RGV0YWlscywgT2NhcGlDYWxsQ29uZmlnIH0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCB7IFVzZXJEZXRhaWxzU2VydmljZSB9IGZyb20gJy4vdXNlci1kZXRhaWxzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQVVUSF9TRVJWSUNFLCBBdXRoZW50aWNhdGlvblByb21wdCwgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9hdXRoZW50aWNhdGlvbic7XG5cbnR5cGUgV2luZG93ID0gUmVjb3JkPHN0cmluZywgb2JqZWN0PjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBfbmdab25lOiBOZ1pvbmUsXG4gICAgQEluamVjdCgnV2luZG93JykgcHJvdGVjdGVkIHdpbmRvdzogV2luZG93LFxuICAgIEBJbmplY3QoQVVUSF9TRVJWSUNFKSBwcml2YXRlIHJlYWRvbmx5IGF1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgb2NhcGlTZXJ2aWNlOiBPY2FwaVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSB1cmxTZXJ2aWNlOiBVcmxTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgbG9naW5DdXN0b21lck5hbWVNYXBwZXI6IExvZ2luQ3VzdG9tZXJOYW1lTWFwcGVyLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgbG9nb3V0TWFwcGVyOiBMb2dvdXRNYXBwZXIsXG4gICAgcHJpdmF0ZSByZWFkb25seSB1c2VyRGV0YWlsc1NlcnZpY2U6IFVzZXJEZXRhaWxzU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFRoaXMgZnVuY3Rpb24gaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBnZXRVc2VyRGV0YWlscyBmcm9tIFVzZXJEZXRhaWxzU2VydmljZSBpbnN0ZWFkLlxuICAgKi9cbiAgZ2V0TG9naW5EZXRhaWxzKHdpdGhDcmVkZW50aWFscyA9IHRydWUsIHJlZmVycmVyVXJsPzogc3RyaW5nLCBfaXNSb2xlUmVxdWlyZWQgPSB0cnVlKTogT2JzZXJ2YWJsZTxMb2dpbkRldGFpbHM+IHtcbiAgICByZXR1cm4gdGhpcy51c2VyRGV0YWlsc1NlcnZpY2UuZ2V0VXNlckRldGFpbHMoe1xuICAgICAgd2l0aENyZWRlbnRpYWxzLFxuICAgICAgcmVmZXJyZXJVcmwsXG4gICAgfSk7XG4gIH1cblxuICBsb2dpbihyZWZlcnJlclVybD86IHN0cmluZywgc3R5bGVIaW50Pzogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5nZXRTdGF0ZUFuZE5vbmNlKHJlZmVycmVyVXJsKS5zdWJzY3JpYmUoKGxvZ2luRGV0YWlscykgPT4ge1xuICAgICAgY29uc3QgYXV0aFBhcmFtZXRlcnMgPSB7XG4gICAgICAgIHN0YXRlOiBsb2dpbkRldGFpbHMuc3RhdGUsXG4gICAgICAgIG5vbmNlOiBsb2dpbkRldGFpbHMubm9uY2UsXG4gICAgICAgIHJlZmVycmVyVXJsLFxuICAgICAgICBzdHlsZUhpbnQsXG4gICAgICB9O1xuICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuYXV0aGVudGljYXRlKGF1dGhQYXJhbWV0ZXJzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGxvZ2luV2l0aFByb21wdChyZWZlcnJlclVybD86IHN0cmluZywgc3R5bGVIaW50Pzogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5nZXRTdGF0ZUFuZE5vbmNlKHJlZmVycmVyVXJsKS5zdWJzY3JpYmUoKGxvZ2luRGV0YWlscykgPT4ge1xuICAgICAgY29uc3QgYXV0aFBhcmFtZXRlcnMgPSB7XG4gICAgICAgIHN0YXRlOiBsb2dpbkRldGFpbHMuc3RhdGUsXG4gICAgICAgIG5vbmNlOiBsb2dpbkRldGFpbHMubm9uY2UsXG4gICAgICAgIHJlZmVycmVyVXJsLFxuICAgICAgICBzdHlsZUhpbnQsXG4gICAgICAgIHByb21wdDogQXV0aGVudGljYXRpb25Qcm9tcHQuTE9HSU4sXG4gICAgICB9O1xuICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuYXV0aGVudGljYXRlKGF1dGhQYXJhbWV0ZXJzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGxvZ291dChtZXNzYWdlR3JvdXBOYW1lOiBzdHJpbmcsIGxvZ291dFBhdGg6IHN0cmluZyk6IE9ic2VydmFibGU8TG9nb3V0RGV0YWlscz4ge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gJy9sb2dvdXQ/dGFyZ2V0VXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQodGhpcy5nZXRMb2dvdXRSZWRpcmVjdFVybChsb2dvdXRQYXRoKSk7XG5cbiAgICBjb25zdCBvY2FwaUNvbmZpZyA9IG5ldyBPY2FwaUNhbGxDb25maWcobWVzc2FnZUdyb3VwTmFtZSwgZW5kcG9pbnQsIHRoaXMubG9nb3V0TWFwcGVyLCB7fSk7XG4gICAgb2NhcGlDb25maWcuZXJyb3JIYW5kbGVyID0gdGhpcy5oYW5kbGVFcnJvclJlc3BvbnNlLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcy5vY2FwaVNlcnZpY2UuZG9HZXQob2NhcGlDb25maWcpLnBpcGUoXG4gICAgICBtYXAoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLnNldEF1dGhlbnRpY2F0ZWRTdGF0dXMoZmFsc2UpO1xuICAgICAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2UubG9nb3V0X3JlZGlyZWN0X3VyaSkge1xuICAgICAgICAgIHRoaXMudXJsU2VydmljZS5yZWRpcmVjdFRvKHJlc3BvbnNlLmxvZ291dF9yZWRpcmVjdF91cmkpO1xuICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRMb2dvdXRSZWRpcmVjdFVybChsb2dvdXRQYXRoOiBzdHJpbmcpIHtcbiAgICBsZXQgbG9nb3V0UmVkaXJlY3RVcmwgPSB0aGlzLnVybFNlcnZpY2UuZ2V0Q3VycmVudFVybCgpO1xuICAgIGlmIChsb2dvdXRQYXRoKSB7XG4gICAgICBsb2dvdXRSZWRpcmVjdFVybCA9IGxvZ291dFBhdGguc3RhcnRzV2l0aCgnaHR0cHM6Ly8nKVxuICAgICAgICA/IGxvZ291dFBhdGhcbiAgICAgICAgOiBsb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyBsb2NhdGlvbi5ob3N0ICsgbG9nb3V0UGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudXJsU2VydmljZS5yZW1vdmVQYXJhbWV0ZXJzRnJvbVVybChsb2dvdXRSZWRpcmVjdFVybCwgJ2p3dCcpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTdGF0ZUFuZE5vbmNlKHJlZmVyZXJVcmw/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPExvZ2luRGV0YWlscz4ge1xuICAgIHJldHVybiB0aGlzLnVzZXJEZXRhaWxzU2VydmljZS5nZXRVc2VyRGV0YWlscyh7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IGZhbHNlLFxuICAgICAgcmVmZXJyZXJVcmw6IHJlZmVyZXJVcmwsXG4gICAgfSk7XG4gIH1cblxuICBsb2dpbldpdGhDdXN0b21lck51bWJlcihcbiAgICBtZXNzYWdlR3JvdXBOYW1lOiBzdHJpbmcsXG4gICAgX2N1c3RvbWVyTnVtYmVyOiBzdHJpbmcsXG4gICAga2V5OiBzdHJpbmcsXG4gICAgdmFsdWU6IHN0cmluZyxcbiAgICBtb2JpbGVOdW1iZXI6IHN0cmluZ1xuICApIHtcbiAgICBjb25zdCBlbmRwb2ludCA9ICcvb2F1dGgvbG9naW4/JyArIGtleSArICc9JyArIHZhbHVlICsgJyZtb2JpbGVudW1iZXI9JyArIG1vYmlsZU51bWJlcjtcbiAgICBjb25zdCBvY2FwaUNvbmZpZyA9IG5ldyBPY2FwaUNhbGxDb25maWcobWVzc2FnZUdyb3VwTmFtZSwgZW5kcG9pbnQsIHRoaXMubG9naW5DdXN0b21lck5hbWVNYXBwZXIsIHt9KTtcbiAgICBvY2FwaUNvbmZpZy5lcnJvckhhbmRsZXIgPSB0aGlzLmhhbmRsZUVycm9yUmVzcG9uc2UuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiB0aGlzLm9jYXBpU2VydmljZS5kb1Bvc3Qob2NhcGlDb25maWcpLnBpcGUoXG4gICAgICB0YXAoKCkgPT4ge1xuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5zZXRBdXRoZW50aWNhdGVkU3RhdHVzKHRydWUpO1xuICAgICAgICB0aGlzLnVzZXJEZXRhaWxzU2VydmljZS5yZXNldCgpO1xuICAgICAgfSksXG4gICAgICBtYXAoKHJlc3BvbnNlKSA9PiByZXNwb25zZSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFcnJvclJlc3BvbnNlPFQsIEc+KGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSwgb2NhcGlDYWxsOiBPY2FwaUNhbGxDb25maWc8VCwgRz4pIHtcbiAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgIHJldHVybiBvZih7IGRhdGE6IGVycm9yLmVycm9yLCBzdGF0dXM6IGVycm9yLnN0YXR1cyB9KTtcbiAgICB9IGVsc2UgaWYgKGVycm9yLnN0YXR1cyA9PT0gNDAwICYmIGVycm9yLmVycm9yICYmIGVycm9yLmVycm9yLmNvZGUpIHtcbiAgICAgIGNvbnN0IGVycm9yQ29kZSA9IGVycm9yLnN0YXR1cy50b1N0cmluZygpLmNvbmNhdCgnLScpLmNvbmNhdChlcnJvci5lcnJvci5jb2RlKTtcbiAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkTWVzc2FnZShuZXcgRXJyb3JNZXNzYWdlKG9jYXBpQ2FsbC5tZXNzYWdlR3JvdXBOYW1lLCAnb2NhcGkuJyArIGVycm9yQ29kZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZE1lc3NhZ2UobmV3IEVycm9yTWVzc2FnZShvY2FwaUNhbGwubWVzc2FnZUdyb3VwTmFtZSwgJ29jYXBpLicgKyBlcnJvci5zdGF0dXMpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRocm93RXJyb3IoKCkgPT4gJ0FuIGVycm9yIG9jY3VyZWQgd2hpbGUgdHJ5aW5nIHRvIGZldGNoICcgKyBvY2FwaUNhbGwubWVzc2FnZUdyb3VwTmFtZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0QXV0aGVudGljYXRpb25TdGF0dXMoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmdldEF1dGhlbnRpY2F0aW9uU3RhdHVzKCk7XG4gIH1cbn1cbiJdfQ==