// @ts-nocheck
import { isEmpty, forEach } from 'lodash-es';
import { of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { ConfigConstants } from '@telenet/ng-lib-config';
import { ErrorMessage } from '@telenet/ng-lib-message';
import { catchError, concatMap, map, mergeMap, take, tap } from 'rxjs/operators';
import { HttpTypesEnum } from '../enums';
import { SalesConstants } from '../constants';
import { LogFactory } from '@telenet/ng-lib-shared';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@telenet/ng-lib-config";
import * as i3 from "@telenet/ng-lib-message";
import * as i4 from "@telenet/ng-lib-omapi";
import * as i5 from "@telenet/ng-lib-omapi-query";
import * as i6 from "../utils";
import * as i7 from "@telenet/ng-lib-datalayer";
import * as i8 from "@telenet/ng-lib-page";
import * as i9 from "./authentication/state/authentication.state";
import * as i10 from "./error-report.service";
export class OcapiService {
    http;
    configService;
    messageService;
    omapiProductService;
    omapiQueryProductService;
    ocapiHelper;
    dataLayerService;
    urlService;
    authenticationState;
    errorReportService;
    static LOG = LogFactory.createLogger(OcapiService);
    constructor(http, configService, messageService, omapiProductService, omapiQueryProductService, ocapiHelper, dataLayerService, urlService, authenticationState, errorReportService) {
        this.http = http;
        this.configService = configService;
        this.messageService = messageService;
        this.omapiProductService = omapiProductService;
        this.omapiQueryProductService = omapiQueryProductService;
        this.ocapiHelper = ocapiHelper;
        this.dataLayerService = dataLayerService;
        this.urlService = urlService;
        this.authenticationState = authenticationState;
        this.errorReportService = errorReportService;
    }
    doGet(ocapiCallConfig) {
        return this.doResolve(HttpTypesEnum.GET, ocapiCallConfig);
    }
    doPost(ocapiCallConfig) {
        return this.doResolve(HttpTypesEnum.POST, ocapiCallConfig);
    }
    doPut(ocapiCallConfig) {
        return this.doResolve(HttpTypesEnum.PUT, ocapiCallConfig);
    }
    doRestHead(ocapiCallConfig) {
        return this.doResolve(HttpTypesEnum.HEAD, ocapiCallConfig);
    }
    doPatch(ocapiCallConfig) {
        return this.doResolve(HttpTypesEnum.PATCH, ocapiCallConfig);
    }
    doDelete(ocapiCallConfig) {
        return this.doResolve(HttpTypesEnum.DELETE, ocapiCallConfig);
    }
    doResolve(httpType, ocapiCallConfig) {
        ocapiCallConfig.httpType = httpType;
        try {
            return this.doRequest(ocapiCallConfig).pipe(mergeMap((ocapiResponse) => {
                return this.ocapiResponseEnrichedWithOmapiData$(ocapiCallConfig.messageGroupName, ocapiResponse, ocapiCallConfig.observeAsResponse, ocapiCallConfig.silentlyHandleError);
            }), mergeMap((ocapiResponse) => {
                return this.ocapiResponseEnrichedWithOmapiQueryData$(ocapiCallConfig.messageGroupName, ocapiResponse, ocapiCallConfig.observeAsResponse);
            }), map((ocapiResponseEnrichedWithOmapiData) => {
                return (ocapiCallConfig.mapper?.toModel(ocapiResponseEnrichedWithOmapiData) || ocapiResponseEnrichedWithOmapiData);
            }));
        }
        catch (e) {
            this.errorReportService.sendErrorEventToAnalytics(ocapiCallConfig);
            this.messageService.addMessage(new ErrorMessage(ocapiCallConfig.messageGroupName, 'Ocapi call failed:' + ocapiCallConfig.endpoint + 'with data ' + JSON.stringify(ocapiCallConfig.data)));
        }
    }
    ocapiResponseEnrichedWithOmapiQueryData$(messageGroup, ocapiResponse, isResponseObservable) {
        const queryUrls = this.recursiveUrls(ocapiResponse, SalesConstants.QUERY_URL);
        let responseBody = ocapiResponse;
        if (isResponseObservable) {
            responseBody = ocapiResponse['body'];
        }
        if (!isEmpty(queryUrls)) {
            return this.omapiQueryProductService.rawQueryProductsFromEndpoints$(messageGroup, queryUrls).pipe(tap((omapiQueryResponses) => {
                forEach(omapiQueryResponses, (omapiQueryResponse) => this.recursiveAddDataToOcapiResponse(responseBody, omapiQueryResponse, SalesConstants.QUERY_URL));
            }), map(() => {
                return ocapiResponse;
            }));
        }
        else {
            return of(ocapiResponse);
        }
    }
    ocapiResponseEnrichedWithOmapiData$(messageGroup, ocapiResponse, isResponseObservable, silentlyHandleError) {
        const specUrls = this.recursiveUrls(ocapiResponse, SalesConstants.SPEC_URL);
        let responseBody = ocapiResponse;
        if (isResponseObservable) {
            responseBody = ocapiResponse['body'];
        }
        if (!isEmpty(specUrls)) {
            return this.omapiProductService.rawProductsFromEndpoints$(messageGroup, specUrls, silentlyHandleError).pipe(tap((omapiResponses) => {
                forEach(omapiResponses, (omapiResponse) => this.recursiveAddDataToOcapiResponse(responseBody, omapiResponse, SalesConstants.SPEC_URL));
            }), map(() => {
                return ocapiResponse;
            }));
        }
        else {
            return of(ocapiResponse);
        }
    }
    doRequest(ocapiCall) {
        const options = this.ocapiHelper.getHttpOptions(ocapiCall);
        switch (ocapiCall.httpType) {
            case HttpTypesEnum.GET: {
                const request$ = this.http
                    .get(this.configService.getConfig(ConfigConstants.OCAPI_URl) + ocapiCall.getEndpoint(), options)
                    .pipe(catchError((error) => this.handleError(error, ocapiCall)));
                if (ocapiCall.authNeeded) {
                    OcapiService.LOG.logDebug(`Auth is needed for request: ${ocapiCall.getEndpoint()}`);
                    return this.authenticationState.getAuthenticated().pipe(concatMap(() => {
                        return request$;
                    }));
                }
                OcapiService.LOG.logDebug(`Auth is not needed for request: ${ocapiCall.getEndpoint()}`);
                return request$;
            }
            case HttpTypesEnum.POST:
                return this.http
                    .post(this.configService.getConfig(ConfigConstants.OCAPI_URl) + ocapiCall.endpoint, ocapiCall.data, options)
                    .pipe(take(1), catchError((error) => this.handleError(error, ocapiCall)));
            case HttpTypesEnum.PUT:
                return this.http
                    .put(this.configService.getConfig(ConfigConstants.OCAPI_URl) + ocapiCall.endpoint, ocapiCall.data, options)
                    .pipe(take(1), catchError((error) => this.handleError(error, ocapiCall)));
            case HttpTypesEnum.PATCH:
                return this.http
                    .patch(this.configService.getConfig(ConfigConstants.OCAPI_URl) + ocapiCall.endpoint, ocapiCall.data, options)
                    .pipe(take(1), catchError((error) => this.handleError(error, ocapiCall)));
            case HttpTypesEnum.HEAD:
                return this.http
                    .head(this.configService.getConfig(ConfigConstants.OCAPI_URl) + ocapiCall.endpoint, options)
                    .pipe(take(1), catchError((error) => this.handleError(error, ocapiCall)));
            case HttpTypesEnum.DELETE:
                return this.http
                    .delete(this.configService.getConfig(ConfigConstants.OCAPI_URl) + ocapiCall.endpoint, options)
                    .pipe(take(1), catchError((error) => {
                    return this.handleError(error, ocapiCall);
                }));
        }
    }
    recursiveAddDataToOcapiResponse(data, omapiorOmapiQueryResponse, type) {
        if (data) {
            Object.entries(data).forEach(([key, value]) => {
                if (key === SalesConstants.SPEC_URL && type === SalesConstants.SPEC_URL) {
                    this.isSpecUrl(value, data, omapiorOmapiQueryResponse);
                }
                else if (key === SalesConstants.QUERY_URL && type === SalesConstants.QUERY_URL) {
                    this.isQueryUrl(value, data, omapiorOmapiQueryResponse);
                }
                if (typeof value === 'object') {
                    this.recursiveAddDataToOcapiResponse(value, omapiorOmapiQueryResponse, type);
                }
            });
        }
        return data;
    }
    isQueryUrl(value, data, omapiorOmapiQueryResponse) {
        const itemCodeFromQueryUrl = this.urlService.getParamsValueFromUrl(value.toString(), 'itemcodes');
        const itemCodeFromOmapiQuery = this.getProductIdFromOmapiResponse(omapiorOmapiQueryResponse, itemCodeFromQueryUrl);
        if ((itemCodeFromQueryUrl && itemCodeFromQueryUrl.toString()) ===
            (itemCodeFromOmapiQuery && itemCodeFromOmapiQuery.toString()) ||
            isEmpty(omapiorOmapiQueryResponse.products)) {
            data['rawOmapiQuery'] = omapiorOmapiQueryResponse;
        }
    }
    isSpecUrl(value, data, omapiorOmapiQueryResponse) {
        const epcFromSpecUrl = value.toString() && value.toString().split('/').pop();
        const epcFromOmapi = omapiorOmapiQueryResponse.product && omapiorOmapiQueryResponse.product.productid;
        if ((epcFromSpecUrl && epcFromSpecUrl.toString()) === (epcFromOmapi && epcFromOmapi.toString())) {
            data['rawOmapi'] = omapiorOmapiQueryResponse;
        }
    }
    getProductIdFromOmapiResponse(omapiQueryResponse, itemCode) {
        if (!isEmpty(omapiQueryResponse.products) && !isEmpty(omapiQueryResponse.products[0].variants)) {
            const filteredVariant = omapiQueryResponse.products[0].variants.find((varaint) => {
                return varaint.productId === itemCode;
            });
            return !isEmpty(filteredVariant) ? filteredVariant.productId : '';
        }
        else {
            return '';
        }
    }
    recursiveUrls(data, type, urls = []) {
        if (data) {
            Object.entries(data).forEach(([key, value]) => {
                if (key === type && value !== null) {
                    urls.push(value.toString());
                }
                if (value !== null && typeof value === 'object') {
                    this.recursiveUrls(value, type, urls);
                }
            });
        }
        return urls;
    }
    handleError(error, ocapiCall) {
        if (ocapiCall.errorHandler !== undefined) {
            this.sendErrorEventToAnalyticsForCustomError(error, ocapiCall);
            return ocapiCall.errorHandler(error, ocapiCall);
        }
        let errorCode = 'ocapi.'.concat(error.status.toString());
        switch (error.status) {
            case 401:
                break;
            case 400:
            case 500:
                this.messageService.addMessage(new ErrorMessage(ocapiCall.messageGroupName, errorCode));
                this.errorReportService.sendErrorEventToAnalytics(ocapiCall, error.error, errorCode);
                break;
            default:
                errorCode = this.getDetailedErrorCode(error, errorCode);
                if (errorCode !== 'ocapi.422-OCAPI-ERR-ODSO156') {
                    this.messageService.addMessage(new ErrorMessage(ocapiCall.messageGroupName, errorCode));
                }
                this.errorReportService.sendErrorEventToAnalytics(ocapiCall, error.error, errorCode);
                break;
        }
        const errorDetails = 'An error occured while trying to fetch ' + ocapiCall.messageGroupName + ' | ' + errorCode;
        const throwErrorDetails = errorCode && errorCode.includes('VM000061') ? errorDetails + ' | ' + error.error.cause : errorDetails;
        return throwError(() => throwErrorDetails);
    }
    sendErrorEventToAnalyticsForCustomError(error, ocapiCall) {
        if (error && error.status !== 401) {
            let errorCode = 'ocapi.'.concat(error.status.toString());
            errorCode = this.getDetailedErrorCode(error, errorCode);
            this.errorReportService.sendErrorEventToAnalytics(ocapiCall, error.error, errorCode);
        }
    }
    getDetailedErrorCode(error, errorCode) {
        if (error.error && error.error.code) {
            return errorCode.concat('-').concat(error.error.code);
        }
        return errorCode;
    }
    static ɵfac = function OcapiService_Factory(t) { return new (t || OcapiService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigService), i0.ɵɵinject(i3.MessageService), i0.ɵɵinject(i4.OmapiProductService), i0.ɵɵinject(i5.OmapiQueryProductService), i0.ɵɵinject(i6.OcapiHelper), i0.ɵɵinject(i7.DataLayerService), i0.ɵɵinject(i8.UrlService), i0.ɵɵinject(i9.AuthenticationState), i0.ɵɵinject(i10.ErrorReportService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: OcapiService, factory: OcapiService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OcapiService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.HttpClient }, { type: i2.ConfigService }, { type: i3.MessageService }, { type: i4.OmapiProductService }, { type: i5.OmapiQueryProductService }, { type: i6.OcapiHelper }, { type: i7.DataLayerService }, { type: i8.UrlService }, { type: i9.AuthenticationState }, { type: i10.ErrorReportService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NhcGkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvb2NhcGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjO0FBQ2QsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDN0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFpQixNQUFNLHdCQUF3QixDQUFDO0FBRXhFLE9BQU8sRUFBRSxZQUFZLEVBQWtCLE1BQU0seUJBQXlCLENBQUM7QUFDdkUsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPakYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRTlDLE9BQU8sRUFBTyxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7O0FBTXpELE1BQU0sT0FBTyxZQUFZO0lBSUo7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFaWCxNQUFNLENBQVUsR0FBRyxHQUFRLFVBQVUsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7SUFFekUsWUFDbUIsSUFBZ0IsRUFDaEIsYUFBNEIsRUFDNUIsY0FBOEIsRUFDOUIsbUJBQXdDLEVBQ3hDLHdCQUFrRCxFQUNsRCxXQUF3QixFQUN4QixnQkFBa0MsRUFDbEMsVUFBc0IsRUFDdEIsbUJBQXdDLEVBQ3hDLGtCQUFzQztRQVR0QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hC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Q3hHLE9BQU8sVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVPLHVDQUF1QyxDQUFPLEtBQXdCLEVBQUUsU0FBZ0M7UUFDOUcsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNsQyxJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUN6RCxTQUFTLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsa0JBQWtCLENBQUMseUJBQXlCLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDdkYsQ0FBQztJQUNILENBQUM7SUFFTyxvQkFBb0IsQ0FBQyxLQUF3QixFQUFFLFNBQWlCO1FBQ3RFLElBQUksS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3BDLE9BQU8sU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RCxDQUFDO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztzRUF4U1UsWUFBWTtnRUFBWixZQUFZLFdBQVosWUFBWSxtQkFGWCxNQUFNOztpRkFFUCxZQUFZO2NBSHhCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgeyBpc0VtcHR5LCBmb3JFYWNoIH0gZnJvbSAnbG9kYXNoLWVzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWdDb25zdGFudHMsIENvbmZpZ1NlcnZpY2UgfSBmcm9tICdAdGVsZW5ldC9uZy1saWItY29uZmlnJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgRXJyb3JNZXNzYWdlLCBNZXNzYWdlU2VydmljZSB9IGZyb20gJ0B0ZWxlbmV0L25nLWxpYi1tZXNzYWdlJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGNvbmNhdE1hcCwgbWFwLCBtZXJnZU1hcCwgdGFrZSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBPbWFwaVByb2R1Y3RTZXJ2aWNlLCBSYXdPbWFwaVByb2R1Y3RJbnRlcmZhY2UgfSBmcm9tICdAdGVsZW5ldC9uZy1saWItb21hcGknO1xuaW1wb3J0IHsgRGF0YUxheWVyU2VydmljZSB9IGZyb20gJ0B0ZWxlbmV0L25nLWxpYi1kYXRhbGF5ZXInO1xuaW1wb3J0IHsgVXJsU2VydmljZSB9IGZyb20gJ0B0ZWxlbmV0L25nLWxpYi1wYWdlJztcbmltcG9ydCB7IE9jYXBpSGVscGVyIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgT2NhcGlDYWxsQ29uZmlnIH0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCB7IEh0dHBUeXBlc0VudW0gfSBmcm9tICcuLi9lbnVtcyc7XG5pbXBvcnQgeyBPbWFwaVF1ZXJ5UHJvZHVjdFNlcnZpY2UsIFJhd09tYXBpUXVlcnlQcm9kdWN0SW50ZXJmYWNlIH0gZnJvbSAnQHRlbGVuZXQvbmctbGliLW9tYXBpLXF1ZXJ5JztcbmltcG9ydCB7IFNhbGVzQ29uc3RhbnRzIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU3RhdGUgfSBmcm9tICcuL2F1dGhlbnRpY2F0aW9uL3N0YXRlL2F1dGhlbnRpY2F0aW9uLnN0YXRlJztcbmltcG9ydCB7IExvZywgTG9nRmFjdG9yeSB9IGZyb20gJ0B0ZWxlbmV0L25nLWxpYi1zaGFyZWQnO1xuaW1wb3J0IHsgRXJyb3JSZXBvcnRTZXJ2aWNlIH0gZnJvbSAnLi9lcnJvci1yZXBvcnQuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBPY2FwaVNlcnZpY2Uge1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBMT0c6IExvZyA9IExvZ0ZhY3RvcnkuY3JlYXRlTG9nZ2VyKE9jYXBpU2VydmljZSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IG9tYXBpUHJvZHVjdFNlcnZpY2U6IE9tYXBpUHJvZHVjdFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBvbWFwaVF1ZXJ5UHJvZHVjdFNlcnZpY2U6IE9tYXBpUXVlcnlQcm9kdWN0U2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IG9jYXBpSGVscGVyOiBPY2FwaUhlbHBlcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRhdGFMYXllclNlcnZpY2U6IERhdGFMYXllclNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSB1cmxTZXJ2aWNlOiBVcmxTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgYXV0aGVudGljYXRpb25TdGF0ZTogQXV0aGVudGljYXRpb25TdGF0ZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGVycm9yUmVwb3J0U2VydmljZTogRXJyb3JSZXBvcnRTZXJ2aWNlXG4gICkge31cblxuICBwdWJsaWMgZG9HZXQ8VCwgRz4ob2NhcGlDYWxsQ29uZmlnOiBPY2FwaUNhbGxDb25maWc8VCwgRz4pOiBPYnNlcnZhYmxlPEc+IHtcbiAgICByZXR1cm4gdGhpcy5kb1Jlc29sdmUoSHR0cFR5cGVzRW51bS5HRVQsIG9jYXBpQ2FsbENvbmZpZyk7XG4gIH1cblxuICBwdWJsaWMgZG9Qb3N0PFQsIEc+KG9jYXBpQ2FsbENvbmZpZzogT2NhcGlDYWxsQ29uZmlnPFQsIEc+KTogT2JzZXJ2YWJsZTxHPiB7XG4gICAgcmV0dXJuIHRoaXMuZG9SZXNvbHZlKEh0dHBUeXBlc0VudW0uUE9TVCwgb2NhcGlDYWxsQ29uZmlnKTtcbiAgfVxuXG4gIHB1YmxpYyBkb1B1dDxULCBHPihvY2FwaUNhbGxDb25maWc6IE9jYXBpQ2FsbENvbmZpZzxULCBHPik6IE9ic2VydmFibGU8Rz4ge1xuICAgIHJldHVybiB0aGlzLmRvUmVzb2x2ZShIdHRwVHlwZXNFbnVtLlBVVCwgb2NhcGlDYWxsQ29uZmlnKTtcbiAgfVxuXG4gIHB1YmxpYyBkb1Jlc3RIZWFkPFQsIEc+KG9jYXBpQ2FsbENvbmZpZzogT2NhcGlDYWxsQ29uZmlnPFQsIEc+KTogT2JzZXJ2YWJsZTxHPiB7XG4gICAgcmV0dXJuIHRoaXMuZG9SZXNvbHZlKEh0dHBUeXBlc0VudW0uSEVBRCwgb2NhcGlDYWxsQ29uZmlnKTtcbiAgfVxuXG4gIHB1YmxpYyBkb1BhdGNoPFQsIEc+KG9jYXBpQ2FsbENvbmZpZzogT2NhcGlDYWxsQ29uZmlnPFQsIEc+KTogT2JzZXJ2YWJsZTxHPiB7XG4gICAgcmV0dXJuIHRoaXMuZG9SZXNvbHZlKEh0dHBUeXBlc0VudW0uUEFUQ0gsIG9jYXBpQ2FsbENvbmZpZyk7XG4gIH1cblxuICBwdWJsaWMgZG9EZWxldGU8VCwgRz4ob2NhcGlDYWxsQ29uZmlnOiBPY2FwaUNhbGxDb25maWc8VCwgRz4pOiBPYnNlcnZhYmxlPEc+IHtcbiAgICByZXR1cm4gdGhpcy5kb1Jlc29sdmUoSHR0cFR5cGVzRW51bS5ERUxFVEUsIG9jYXBpQ2FsbENvbmZpZyk7XG4gIH1cblxuICBwcml2YXRlIGRvUmVzb2x2ZTxULCBHPihodHRwVHlwZTogSHR0cFR5cGVzRW51bSwgb2NhcGlDYWxsQ29uZmlnOiBPY2FwaUNhbGxDb25maWc8VCwgRz4pOiBPYnNlcnZhYmxlPEc+IHtcbiAgICBvY2FwaUNhbGxDb25maWcuaHR0cFR5cGUgPSBodHRwVHlwZTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHRoaXMuZG9SZXF1ZXN0KG9jYXBpQ2FsbENvbmZpZykucGlwZShcbiAgICAgICAgbWVyZ2VNYXAoKG9jYXBpUmVzcG9uc2U6IFQpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5vY2FwaVJlc3BvbnNlRW5yaWNoZWRXaXRoT21hcGlEYXRhJDxUPihcbiAgICAgICAgICAgIG9jYXBpQ2FsbENvbmZpZy5tZXNzYWdlR3JvdXBOYW1lLFxuICAgICAgICAgICAgb2NhcGlSZXNwb25zZSxcbiAgICAgICAgICAgIG9jYXBpQ2FsbENvbmZpZy5vYnNlcnZlQXNSZXNwb25zZSxcbiAgICAgICAgICAgIG9jYXBpQ2FsbENvbmZpZy5zaWxlbnRseUhhbmRsZUVycm9yXG4gICAgICAgICAgKTtcbiAgICAgICAgfSksXG4gICAgICAgIG1lcmdlTWFwKChvY2FwaVJlc3BvbnNlOiBUKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMub2NhcGlSZXNwb25zZUVucmljaGVkV2l0aE9tYXBpUXVlcnlEYXRhJDxUPihcbiAgICAgICAgICAgIG9jYXBpQ2FsbENvbmZpZy5tZXNzYWdlR3JvdXBOYW1lLFxuICAgICAgICAgICAgb2NhcGlSZXNwb25zZSxcbiAgICAgICAgICAgIG9jYXBpQ2FsbENvbmZpZy5vYnNlcnZlQXNSZXNwb25zZVxuICAgICAgICAgICk7XG4gICAgICAgIH0pLFxuICAgICAgICBtYXAoKG9jYXBpUmVzcG9uc2VFbnJpY2hlZFdpdGhPbWFwaURhdGE6IFQpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgb2NhcGlDYWxsQ29uZmlnLm1hcHBlcj8udG9Nb2RlbChvY2FwaVJlc3BvbnNlRW5yaWNoZWRXaXRoT21hcGlEYXRhKSB8fCBvY2FwaVJlc3BvbnNlRW5yaWNoZWRXaXRoT21hcGlEYXRhXG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5lcnJvclJlcG9ydFNlcnZpY2Uuc2VuZEVycm9yRXZlbnRUb0FuYWx5dGljcyhvY2FwaUNhbGxDb25maWcpO1xuICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5hZGRNZXNzYWdlKFxuICAgICAgICBuZXcgRXJyb3JNZXNzYWdlKFxuICAgICAgICAgIG9jYXBpQ2FsbENvbmZpZy5tZXNzYWdlR3JvdXBOYW1lLFxuICAgICAgICAgICdPY2FwaSBjYWxsIGZhaWxlZDonICsgb2NhcGlDYWxsQ29uZmlnLmVuZHBvaW50ICsgJ3dpdGggZGF0YSAnICsgSlNPTi5zdHJpbmdpZnkob2NhcGlDYWxsQ29uZmlnLmRhdGEpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvY2FwaVJlc3BvbnNlRW5yaWNoZWRXaXRoT21hcGlRdWVyeURhdGEkPFQ+KFxuICAgIG1lc3NhZ2VHcm91cDogc3RyaW5nLFxuICAgIG9jYXBpUmVzcG9uc2U6IFQsXG4gICAgaXNSZXNwb25zZU9ic2VydmFibGU6IGJvb2xlYW4gfCB1bmRlZmluZWRcbiAgKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgY29uc3QgcXVlcnlVcmxzID0gdGhpcy5yZWN1cnNpdmVVcmxzKG9jYXBpUmVzcG9uc2UsIFNhbGVzQ29uc3RhbnRzLlFVRVJZX1VSTCk7XG4gICAgbGV0IHJlc3BvbnNlQm9keSA9IG9jYXBpUmVzcG9uc2U7XG4gICAgaWYgKGlzUmVzcG9uc2VPYnNlcnZhYmxlKSB7XG4gICAgICByZXNwb25zZUJvZHkgPSBvY2FwaVJlc3BvbnNlWydib2R5J107XG4gICAgfVxuICAgIGlmICghaXNFbXB0eShxdWVyeVVybHMpKSB7XG4gICAgICByZXR1cm4gdGhpcy5vbWFwaVF1ZXJ5UHJvZHVjdFNlcnZpY2UucmF3UXVlcnlQcm9kdWN0c0Zyb21FbmRwb2ludHMkKG1lc3NhZ2VHcm91cCwgcXVlcnlVcmxzKS5waXBlKFxuICAgICAgICB0YXAoKG9tYXBpUXVlcnlSZXNwb25zZXM6IFJhd09tYXBpUXVlcnlQcm9kdWN0SW50ZXJmYWNlW10pID0+IHtcbiAgICAgICAgICBmb3JFYWNoKG9tYXBpUXVlcnlSZXNwb25zZXMsIChvbWFwaVF1ZXJ5UmVzcG9uc2U6IFJhd09tYXBpUXVlcnlQcm9kdWN0SW50ZXJmYWNlKSA9PlxuICAgICAgICAgICAgdGhpcy5yZWN1cnNpdmVBZGREYXRhVG9PY2FwaVJlc3BvbnNlKHJlc3BvbnNlQm9keSwgb21hcGlRdWVyeVJlc3BvbnNlLCBTYWxlc0NvbnN0YW50cy5RVUVSWV9VUkwpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSksXG4gICAgICAgIG1hcCgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG9jYXBpUmVzcG9uc2U7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb2Yob2NhcGlSZXNwb25zZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvY2FwaVJlc3BvbnNlRW5yaWNoZWRXaXRoT21hcGlEYXRhJDxUPihcbiAgICBtZXNzYWdlR3JvdXA6IHN0cmluZyxcbiAgICBvY2FwaVJlc3BvbnNlOiBULFxuICAgIGlzUmVzcG9uc2VPYnNlcnZhYmxlOiBib29sZWFuIHwgdW5kZWZpbmVkLFxuICAgIHNpbGVudGx5SGFuZGxlRXJyb3I6IGJvb2xlYW5cbiAgKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgY29uc3Qgc3BlY1VybHMgPSB0aGlzLnJlY3Vyc2l2ZVVybHMob2NhcGlSZXNwb25zZSwgU2FsZXNDb25zdGFudHMuU1BFQ19VUkwpO1xuICAgIGxldCByZXNwb25zZUJvZHkgPSBvY2FwaVJlc3BvbnNlO1xuICAgIGlmIChpc1Jlc3BvbnNlT2JzZXJ2YWJsZSkge1xuICAgICAgcmVzcG9uc2VCb2R5ID0gb2NhcGlSZXNwb25zZVsnYm9keSddO1xuICAgIH1cbiAgICBpZiAoIWlzRW1wdHkoc3BlY1VybHMpKSB7XG4gICAgICByZXR1cm4gdGhpcy5vbWFwaVByb2R1Y3RTZXJ2aWNlLnJhd1Byb2R1Y3RzRnJvbUVuZHBvaW50cyQobWVzc2FnZUdyb3VwLCBzcGVjVXJscywgc2lsZW50bHlIYW5kbGVFcnJvcikucGlwZShcbiAgICAgICAgdGFwKChvbWFwaVJlc3BvbnNlczogUmF3T21hcGlQcm9kdWN0SW50ZXJmYWNlW10pID0+IHtcbiAgICAgICAgICBmb3JFYWNoKG9tYXBpUmVzcG9uc2VzLCAob21hcGlSZXNwb25zZTogUmF3T21hcGlQcm9kdWN0SW50ZXJmYWNlKSA9PlxuICAgICAgICAgICAgdGhpcy5yZWN1cnNpdmVBZGREYXRhVG9PY2FwaVJlc3BvbnNlKHJlc3BvbnNlQm9keSwgb21hcGlSZXNwb25zZSwgU2FsZXNDb25zdGFudHMuU1BFQ19VUkwpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSksXG4gICAgICAgIG1hcCgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG9jYXBpUmVzcG9uc2U7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb2Yob2NhcGlSZXNwb25zZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBkb1JlcXVlc3Q8VCwgRz4ob2NhcGlDYWxsOiBPY2FwaUNhbGxDb25maWc8VCwgRz4pOiBPYnNlcnZhYmxlPHVua25vd24+IHtcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5vY2FwaUhlbHBlci5nZXRIdHRwT3B0aW9ucyhvY2FwaUNhbGwpO1xuXG4gICAgc3dpdGNoIChvY2FwaUNhbGwuaHR0cFR5cGUpIHtcbiAgICAgIGNhc2UgSHR0cFR5cGVzRW51bS5HRVQ6IHtcbiAgICAgICAgY29uc3QgcmVxdWVzdCQgPSB0aGlzLmh0dHBcbiAgICAgICAgICAuZ2V0KHRoaXMuY29uZmlnU2VydmljZS5nZXRDb25maWcoQ29uZmlnQ29uc3RhbnRzLk9DQVBJX1VSbCkgKyBvY2FwaUNhbGwuZ2V0RW5kcG9pbnQoKSwgb3B0aW9ucylcbiAgICAgICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogdW5rbm93bikgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvciBhcyBIdHRwRXJyb3JSZXNwb25zZSwgb2NhcGlDYWxsKSkpO1xuXG4gICAgICAgIGlmIChvY2FwaUNhbGwuYXV0aE5lZWRlZCkge1xuICAgICAgICAgIE9jYXBpU2VydmljZS5MT0cubG9nRGVidWcoYEF1dGggaXMgbmVlZGVkIGZvciByZXF1ZXN0OiAke29jYXBpQ2FsbC5nZXRFbmRwb2ludCgpfWApO1xuICAgICAgICAgIHJldHVybiB0aGlzLmF1dGhlbnRpY2F0aW9uU3RhdGUuZ2V0QXV0aGVudGljYXRlZCgpLnBpcGUoXG4gICAgICAgICAgICBjb25jYXRNYXAoKCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gcmVxdWVzdCQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgT2NhcGlTZXJ2aWNlLkxPRy5sb2dEZWJ1ZyhgQXV0aCBpcyBub3QgbmVlZGVkIGZvciByZXF1ZXN0OiAke29jYXBpQ2FsbC5nZXRFbmRwb2ludCgpfWApO1xuICAgICAgICByZXR1cm4gcmVxdWVzdCQ7XG4gICAgICB9XG4gICAgICBjYXNlIEh0dHBUeXBlc0VudW0uUE9TVDpcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgICAgIC5wb3N0KHRoaXMuY29uZmlnU2VydmljZS5nZXRDb25maWcoQ29uZmlnQ29uc3RhbnRzLk9DQVBJX1VSbCkgKyBvY2FwaUNhbGwuZW5kcG9pbnQsIG9jYXBpQ2FsbC5kYXRhLCBvcHRpb25zKVxuICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiB1bmtub3duKSA9PiB0aGlzLmhhbmRsZUVycm9yKGVycm9yIGFzIEh0dHBFcnJvclJlc3BvbnNlLCBvY2FwaUNhbGwpKVxuICAgICAgICAgICk7XG5cbiAgICAgIGNhc2UgSHR0cFR5cGVzRW51bS5QVVQ6XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgICAgICAucHV0KHRoaXMuY29uZmlnU2VydmljZS5nZXRDb25maWcoQ29uZmlnQ29uc3RhbnRzLk9DQVBJX1VSbCkgKyBvY2FwaUNhbGwuZW5kcG9pbnQsIG9jYXBpQ2FsbC5kYXRhLCBvcHRpb25zKVxuICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiB1bmtub3duKSA9PiB0aGlzLmhhbmRsZUVycm9yKGVycm9yIGFzIEh0dHBFcnJvclJlc3BvbnNlLCBvY2FwaUNhbGwpKVxuICAgICAgICAgICk7XG5cbiAgICAgIGNhc2UgSHR0cFR5cGVzRW51bS5QQVRDSDpcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgICAgIC5wYXRjaCh0aGlzLmNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnKENvbmZpZ0NvbnN0YW50cy5PQ0FQSV9VUmwpICsgb2NhcGlDYWxsLmVuZHBvaW50LCBvY2FwaUNhbGwuZGF0YSwgb3B0aW9ucylcbiAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgICBjYXRjaEVycm9yKChlcnJvcjogdW5rbm93bikgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvciBhcyBIdHRwRXJyb3JSZXNwb25zZSwgb2NhcGlDYWxsKSlcbiAgICAgICAgICApO1xuXG4gICAgICBjYXNlIEh0dHBUeXBlc0VudW0uSEVBRDpcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgICAgIC5oZWFkKHRoaXMuY29uZmlnU2VydmljZS5nZXRDb25maWcoQ29uZmlnQ29uc3RhbnRzLk9DQVBJX1VSbCkgKyBvY2FwaUNhbGwuZW5kcG9pbnQsIG9wdGlvbnMpXG4gICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IHVua25vd24pID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IgYXMgSHR0cEVycm9yUmVzcG9uc2UsIG9jYXBpQ2FsbCkpXG4gICAgICAgICAgKTtcblxuICAgICAgY2FzZSBIdHRwVHlwZXNFbnVtLkRFTEVURTpcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgICAgIC5kZWxldGUodGhpcy5jb25maWdTZXJ2aWNlLmdldENvbmZpZyhDb25maWdDb25zdGFudHMuT0NBUElfVVJsKSArIG9jYXBpQ2FsbC5lbmRwb2ludCwgb3B0aW9ucylcbiAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgICBjYXRjaEVycm9yKChlcnJvcjogdW5rbm93bikgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVFcnJvcihlcnJvciBhcyBIdHRwRXJyb3JSZXNwb25zZSwgb2NhcGlDYWxsKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlY3Vyc2l2ZUFkZERhdGFUb09jYXBpUmVzcG9uc2UoZGF0YTogdW5rbm93biwgb21hcGlvck9tYXBpUXVlcnlSZXNwb25zZTogdW5rbm93biwgdHlwZTogc3RyaW5nKSB7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIE9iamVjdC5lbnRyaWVzKGRhdGEpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICBpZiAoa2V5ID09PSBTYWxlc0NvbnN0YW50cy5TUEVDX1VSTCAmJiB0eXBlID09PSBTYWxlc0NvbnN0YW50cy5TUEVDX1VSTCkge1xuICAgICAgICAgIHRoaXMuaXNTcGVjVXJsKHZhbHVlLCBkYXRhLCBvbWFwaW9yT21hcGlRdWVyeVJlc3BvbnNlKTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09IFNhbGVzQ29uc3RhbnRzLlFVRVJZX1VSTCAmJiB0eXBlID09PSBTYWxlc0NvbnN0YW50cy5RVUVSWV9VUkwpIHtcbiAgICAgICAgICB0aGlzLmlzUXVlcnlVcmwodmFsdWUsIGRhdGEsIG9tYXBpb3JPbWFwaVF1ZXJ5UmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhpcy5yZWN1cnNpdmVBZGREYXRhVG9PY2FwaVJlc3BvbnNlKHZhbHVlLCBvbWFwaW9yT21hcGlRdWVyeVJlc3BvbnNlLCB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgcHJpdmF0ZSBpc1F1ZXJ5VXJsKHZhbHVlLCBkYXRhLCBvbWFwaW9yT21hcGlRdWVyeVJlc3BvbnNlKSB7XG4gICAgY29uc3QgaXRlbUNvZGVGcm9tUXVlcnlVcmw6IHN0cmluZyA9IHRoaXMudXJsU2VydmljZS5nZXRQYXJhbXNWYWx1ZUZyb21VcmwodmFsdWUudG9TdHJpbmcoKSwgJ2l0ZW1jb2RlcycpO1xuICAgIGNvbnN0IGl0ZW1Db2RlRnJvbU9tYXBpUXVlcnkgPSB0aGlzLmdldFByb2R1Y3RJZEZyb21PbWFwaVJlc3BvbnNlKG9tYXBpb3JPbWFwaVF1ZXJ5UmVzcG9uc2UsIGl0ZW1Db2RlRnJvbVF1ZXJ5VXJsKTtcbiAgICBpZiAoXG4gICAgICAoaXRlbUNvZGVGcm9tUXVlcnlVcmwgJiYgaXRlbUNvZGVGcm9tUXVlcnlVcmwudG9TdHJpbmcoKSkgPT09XG4gICAgICAgIChpdGVtQ29kZUZyb21PbWFwaVF1ZXJ5ICYmIGl0ZW1Db2RlRnJvbU9tYXBpUXVlcnkudG9TdHJpbmcoKSkgfHxcbiAgICAgIGlzRW1wdHkob21hcGlvck9tYXBpUXVlcnlSZXNwb25zZS5wcm9kdWN0cylcbiAgICApIHtcbiAgICAgIGRhdGFbJ3Jhd09tYXBpUXVlcnknXSA9IG9tYXBpb3JPbWFwaVF1ZXJ5UmVzcG9uc2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpc1NwZWNVcmwodmFsdWUsIGRhdGEsIG9tYXBpb3JPbWFwaVF1ZXJ5UmVzcG9uc2UpIHtcbiAgICBjb25zdCBlcGNGcm9tU3BlY1VybCA9IHZhbHVlLnRvU3RyaW5nKCkgJiYgdmFsdWUudG9TdHJpbmcoKS5zcGxpdCgnLycpLnBvcCgpO1xuICAgIGNvbnN0IGVwY0Zyb21PbWFwaSA9IG9tYXBpb3JPbWFwaVF1ZXJ5UmVzcG9uc2UucHJvZHVjdCAmJiBvbWFwaW9yT21hcGlRdWVyeVJlc3BvbnNlLnByb2R1Y3QucHJvZHVjdGlkO1xuICAgIGlmICgoZXBjRnJvbVNwZWNVcmwgJiYgZXBjRnJvbVNwZWNVcmwudG9TdHJpbmcoKSkgPT09IChlcGNGcm9tT21hcGkgJiYgZXBjRnJvbU9tYXBpLnRvU3RyaW5nKCkpKSB7XG4gICAgICBkYXRhWydyYXdPbWFwaSddID0gb21hcGlvck9tYXBpUXVlcnlSZXNwb25zZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFByb2R1Y3RJZEZyb21PbWFwaVJlc3BvbnNlKG9tYXBpUXVlcnlSZXNwb25zZTogdW5rbm93biwgaXRlbUNvZGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKCFpc0VtcHR5KG9tYXBpUXVlcnlSZXNwb25zZS5wcm9kdWN0cykgJiYgIWlzRW1wdHkob21hcGlRdWVyeVJlc3BvbnNlLnByb2R1Y3RzWzBdLnZhcmlhbnRzKSkge1xuICAgICAgY29uc3QgZmlsdGVyZWRWYXJpYW50ID0gb21hcGlRdWVyeVJlc3BvbnNlLnByb2R1Y3RzWzBdLnZhcmlhbnRzLmZpbmQoKHZhcmFpbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIHZhcmFpbnQucHJvZHVjdElkID09PSBpdGVtQ29kZTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuICFpc0VtcHR5KGZpbHRlcmVkVmFyaWFudCkgPyBmaWx0ZXJlZFZhcmlhbnQucHJvZHVjdElkIDogJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlY3Vyc2l2ZVVybHMoZGF0YSwgdHlwZTogc3RyaW5nLCB1cmxzID0gW10pIHtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgT2JqZWN0LmVudHJpZXMoZGF0YSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIGlmIChrZXkgPT09IHR5cGUgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICB1cmxzLnB1c2godmFsdWUudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aGlzLnJlY3Vyc2l2ZVVybHModmFsdWUsIHR5cGUsIHVybHMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHVybHM7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVycm9yPFQsIEc+KGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSwgb2NhcGlDYWxsOiBPY2FwaUNhbGxDb25maWc8VCwgRz4pIHtcbiAgICBpZiAob2NhcGlDYWxsLmVycm9ySGFuZGxlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnNlbmRFcnJvckV2ZW50VG9BbmFseXRpY3NGb3JDdXN0b21FcnJvcihlcnJvciwgb2NhcGlDYWxsKTtcbiAgICAgIHJldHVybiBvY2FwaUNhbGwuZXJyb3JIYW5kbGVyKGVycm9yLCBvY2FwaUNhbGwpO1xuICAgIH1cblxuICAgIGxldCBlcnJvckNvZGUgPSAnb2NhcGkuJy5jb25jYXQoZXJyb3Iuc3RhdHVzLnRvU3RyaW5nKCkpO1xuICAgIHN3aXRjaCAoZXJyb3Iuc3RhdHVzKSB7XG4gICAgICBjYXNlIDQwMTpcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQwMDpcbiAgICAgIGNhc2UgNTAwOlxuICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZE1lc3NhZ2UobmV3IEVycm9yTWVzc2FnZShvY2FwaUNhbGwubWVzc2FnZUdyb3VwTmFtZSwgZXJyb3JDb2RlKSk7XG4gICAgICAgIHRoaXMuZXJyb3JSZXBvcnRTZXJ2aWNlLnNlbmRFcnJvckV2ZW50VG9BbmFseXRpY3Mob2NhcGlDYWxsLCBlcnJvci5lcnJvciwgZXJyb3JDb2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBlcnJvckNvZGUgPSB0aGlzLmdldERldGFpbGVkRXJyb3JDb2RlKGVycm9yLCBlcnJvckNvZGUpO1xuICAgICAgICBpZiAoZXJyb3JDb2RlICE9PSAnb2NhcGkuNDIyLU9DQVBJLUVSUi1PRFNPMTU2Jykge1xuICAgICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkTWVzc2FnZShuZXcgRXJyb3JNZXNzYWdlKG9jYXBpQ2FsbC5tZXNzYWdlR3JvdXBOYW1lLCBlcnJvckNvZGUpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVycm9yUmVwb3J0U2VydmljZS5zZW5kRXJyb3JFdmVudFRvQW5hbHl0aWNzKG9jYXBpQ2FsbCwgZXJyb3IuZXJyb3IsIGVycm9yQ29kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjb25zdCBlcnJvckRldGFpbHMgPSAnQW4gZXJyb3Igb2NjdXJlZCB3aGlsZSB0cnlpbmcgdG8gZmV0Y2ggJyArIG9jYXBpQ2FsbC5tZXNzYWdlR3JvdXBOYW1lICsgJyB8ICcgKyBlcnJvckNvZGU7XG4gICAgY29uc3QgdGhyb3dFcnJvckRldGFpbHMgPVxuICAgICAgZXJyb3JDb2RlICYmIGVycm9yQ29kZS5pbmNsdWRlcygnVk0wMDAwNjEnKSA/IGVycm9yRGV0YWlscyArICcgfCAnICsgZXJyb3IuZXJyb3IuY2F1c2UgOiBlcnJvckRldGFpbHM7XG4gICAgcmV0dXJuIHRocm93RXJyb3IoKCkgPT4gdGhyb3dFcnJvckRldGFpbHMpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZW5kRXJyb3JFdmVudFRvQW5hbHl0aWNzRm9yQ3VzdG9tRXJyb3I8VCwgRz4oZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlLCBvY2FwaUNhbGw6IE9jYXBpQ2FsbENvbmZpZzxULCBHPikge1xuICAgIGlmIChlcnJvciAmJiBlcnJvci5zdGF0dXMgIT09IDQwMSkge1xuICAgICAgbGV0IGVycm9yQ29kZSA9ICdvY2FwaS4nLmNvbmNhdChlcnJvci5zdGF0dXMudG9TdHJpbmcoKSk7XG4gICAgICBlcnJvckNvZGUgPSB0aGlzLmdldERldGFpbGVkRXJyb3JDb2RlKGVycm9yLCBlcnJvckNvZGUpO1xuICAgICAgdGhpcy5lcnJvclJlcG9ydFNlcnZpY2Uuc2VuZEVycm9yRXZlbnRUb0FuYWx5dGljcyhvY2FwaUNhbGwsIGVycm9yLmVycm9yLCBlcnJvckNvZGUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGV0YWlsZWRFcnJvckNvZGUoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlLCBlcnJvckNvZGU6IHN0cmluZykge1xuICAgIGlmIChlcnJvci5lcnJvciAmJiBlcnJvci5lcnJvci5jb2RlKSB7XG4gICAgICByZXR1cm4gZXJyb3JDb2RlLmNvbmNhdCgnLScpLmNvbmNhdChlcnJvci5lcnJvci5jb2RlKTtcbiAgICB9XG4gICAgcmV0dXJuIGVycm9yQ29kZTtcbiAgfVxufVxuIl19