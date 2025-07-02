import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { ConfigConstants } from '@telenet/ng-lib-config';
import { ErrorMessage } from '@telenet/ng-lib-message';
import { catchError, map, mergeMap, take } from 'rxjs/operators';
import { AddressEnum } from '../enums/address.enum';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@telenet/ng-lib-config";
import * as i3 from "@telenet/ng-lib-message";
import * as i4 from "../helpers/omapi-query.helper";
import * as i5 from "@telenet/ng-lib-omapi";
export class OmapiQueryService {
    http;
    configService;
    messageService;
    omapiQueryHelper;
    omapiEnrichService;
    constructor(http, configService, messageService, omapiQueryHelper, omapiEnrichService) {
        this.http = http;
        this.configService = configService;
        this.messageService = messageService;
        this.omapiQueryHelper = omapiQueryHelper;
        this.omapiEnrichService = omapiEnrichService;
    }
    doPost(omapiQueryCallConfig) {
        return this.doRequest(omapiQueryCallConfig).pipe(mergeMap((omapiQueryResponse) => {
            return this.omapiEnrichService.enrichResponseWithOmapiData(omapiQueryCallConfig.messageGroupName, omapiQueryResponse);
        }), map((omapiQueryResponseEnrichedWithOmapiData) => {
            return omapiQueryCallConfig.mapper.toModel(omapiQueryResponseEnrichedWithOmapiData);
        }));
    }
    doGet(omapiQueryCallConfig) {
        return this.http
            .get(this.configService.getConfig(ConfigConstants.OMAPI_QUERY_URL) + omapiQueryCallConfig.endpoint)
            .pipe(
        // eslint-disable-next-line @typescript-eslint/ban-types
        mergeMap((omapiQueryResponse) => {
            return this.omapiEnrichService.enrichResponseWithOmapiData(omapiQueryCallConfig.messageGroupName, omapiQueryResponse);
        }), map((omapiResponseEnrichedWithOmapiData) => omapiQueryCallConfig.mapper.toModel(omapiResponseEnrichedWithOmapiData)), catchError((error) => {
            return this.handleError(error, omapiQueryCallConfig);
        }));
    }
    doRequest(omapiQueryCall) {
        const options = this.omapiQueryHelper.getHttpOptions();
        return this.http
            .post(this.configService.getConfig(ConfigConstants.OMAPI_QUERY_URL) + omapiQueryCall.endpoint, omapiQueryCall.data, options)
            .pipe(take(1), catchError((error) => {
            return this.handleError(error, omapiQueryCall);
        }));
    }
    handleError(error, omapiQueryCall) {
        if (omapiQueryCall.errorHandler !== undefined) {
            return omapiQueryCall.errorHandler(error, omapiQueryCall);
        }
        let errorCode = 'omapi-query.'.concat(error.status.toString());
        let detailedErrorCode;
        switch (error.status) {
            case 400:
                errorCode = AddressEnum.ADDRESS_NOT_FOUND
                    ? `${omapiQueryCall.messageGroupName}.${AddressEnum.ADDRESS_NOT_FOUND}`
                    : errorCode;
                this.messageService.addMessage(new ErrorMessage(omapiQueryCall.messageGroupName, errorCode));
                break;
            case 500:
                this.messageService.addMessage(new ErrorMessage(omapiQueryCall.messageGroupName, errorCode));
                break;
            default:
                detailedErrorCode = this.getDetailedErrorCode(error, errorCode);
                if (detailedErrorCode) {
                    errorCode = detailedErrorCode;
                }
                this.messageService.addMessage(new ErrorMessage(omapiQueryCall.messageGroupName, errorCode));
                break;
        }
        return throwError(() => 'An error occured while trying to fetch ' + omapiQueryCall.messageGroupName + ' | ' + errorCode);
    }
    getDetailedErrorCode(error, errorCode) {
        if (error.error && error.error.code) {
            return errorCode.concat('-').concat(error.error.code);
        }
        return undefined;
    }
    static ɵfac = function OmapiQueryService_Factory(t) { return new (t || OmapiQueryService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigService), i0.ɵɵinject(i3.MessageService), i0.ɵɵinject(i4.OmapiQueryHelper), i0.ɵɵinject(i5.OmapiEnrichService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: OmapiQueryService, factory: OmapiQueryService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OmapiQueryService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.HttpClient }, { type: i2.ConfigService }, { type: i3.MessageService }, { type: i4.OmapiQueryHelper }, { type: i5.OmapiEnrichService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib21hcGktcXVlcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvb21hcGktcXVlcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLGVBQWUsRUFBaUIsTUFBTSx3QkFBd0IsQ0FBQztBQUV4RSxPQUFPLEVBQUUsWUFBWSxFQUFrQixNQUFNLHlCQUF5QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUlqRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7QUFLcEQsTUFBTSxPQUFPLGlCQUFpQjtJQUVUO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFMbkIsWUFDbUIsSUFBZ0IsRUFDaEIsYUFBNEIsRUFDNUIsY0FBOEIsRUFDOUIsZ0JBQWtDLEVBQ2xDLGtCQUFzQztRQUp0QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7SUFDdEQsQ0FBQztJQUVHLE1BQU0sQ0FBTyxvQkFBZ0Q7UUFDbEUsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDLENBQUMsSUFBSSxDQUM5QyxRQUFRLENBQUMsQ0FBQyxrQkFBcUIsRUFBRSxFQUFFO1lBQ2pDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLDJCQUEyQixDQUN4RCxvQkFBb0IsQ0FBQyxnQkFBZ0IsRUFDckMsa0JB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QztnQkFDaEUsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO29CQUN0QixTQUFTLEdBQUcsaUJBQWlCLENBQUM7Z0JBQ2hDLENBQUM7Z0JBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxZQUFZLENBQUMsY0FBYyxDQUFDLGdCQUFnQixFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdGLE1BQU07UUFDVixDQUFDO1FBQ0QsT0FBTyxVQUFVLENBQ2YsR0FBRyxFQUFFLENBQUMseUNBQXlDLEdBQUcsY0FBYyxDQUFDLGdCQUFnQixHQUFHLEtBQUssR0FBRyxTQUFTLENBQ3RHLENBQUM7SUFDSixDQUFDO0lBRU8sb0JBQW9CLENBQUMsS0FBd0IsRUFBRSxTQUFpQjtRQUN0RSxJQUFJLEtBQUssQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNwQyxPQUFPLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEQsQ0FBQztRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7MkVBOUZVLGlCQUFpQjtnRUFBakIsaUJBQWlCLFdBQWpCLGlCQUFpQixtQkFGaEIsTUFBTTs7aUZBRVAsaUJBQWlCO2NBSDdCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvbmZpZ0NvbnN0YW50cywgQ29uZmlnU2VydmljZSB9IGZyb20gJ0B0ZWxlbmV0L25nLWxpYi1jb25maWcnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBFcnJvck1lc3NhZ2UsIE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnQHRlbGVuZXQvbmctbGliLW1lc3NhZ2UnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBtZXJnZU1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9tYXBpUXVlcnlIZWxwZXIgfSBmcm9tICcuLi9oZWxwZXJzL29tYXBpLXF1ZXJ5LmhlbHBlcic7XG5pbXBvcnQgeyBPbWFwaVF1ZXJ5Q2FsbENvbmZpZyB9IGZyb20gJy4uL21vZGVscy9vbWFwaS1xdWVyeS1jYWxsLm1vZGVsJztcbmltcG9ydCB7IE9tYXBpRW5yaWNoU2VydmljZSB9IGZyb20gJ0B0ZWxlbmV0L25nLWxpYi1vbWFwaSc7XG5pbXBvcnQgeyBBZGRyZXNzRW51bSB9IGZyb20gJy4uL2VudW1zL2FkZHJlc3MuZW51bSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBPbWFwaVF1ZXJ5U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBvbWFwaVF1ZXJ5SGVscGVyOiBPbWFwaVF1ZXJ5SGVscGVyLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgb21hcGlFbnJpY2hTZXJ2aWNlOiBPbWFwaUVucmljaFNlcnZpY2VcbiAgKSB7fVxuXG4gIHB1YmxpYyBkb1Bvc3Q8VCwgRz4ob21hcGlRdWVyeUNhbGxDb25maWc6IE9tYXBpUXVlcnlDYWxsQ29uZmlnPFQsIEc+KTogT2JzZXJ2YWJsZTxHPiB7XG4gICAgcmV0dXJuIHRoaXMuZG9SZXF1ZXN0KG9tYXBpUXVlcnlDYWxsQ29uZmlnKS5waXBlKFxuICAgICAgbWVyZ2VNYXAoKG9tYXBpUXVlcnlSZXNwb25zZTogVCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5vbWFwaUVucmljaFNlcnZpY2UuZW5yaWNoUmVzcG9uc2VXaXRoT21hcGlEYXRhPFQ+KFxuICAgICAgICAgIG9tYXBpUXVlcnlDYWxsQ29uZmlnLm1lc3NhZ2VHcm91cE5hbWUsXG4gICAgICAgICAgb21hcGlRdWVyeVJlc3BvbnNlXG4gICAgICAgICk7XG4gICAgICB9KSxcbiAgICAgIG1hcCgob21hcGlRdWVyeVJlc3BvbnNlRW5yaWNoZWRXaXRoT21hcGlEYXRhOiBUKSA9PiB7XG4gICAgICAgIHJldHVybiBvbWFwaVF1ZXJ5Q2FsbENvbmZpZy5tYXBwZXIudG9Nb2RlbChvbWFwaVF1ZXJ5UmVzcG9uc2VFbnJpY2hlZFdpdGhPbWFwaURhdGEpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGRvR2V0PFQsIEc+KG9tYXBpUXVlcnlDYWxsQ29uZmlnOiBPbWFwaVF1ZXJ5Q2FsbENvbmZpZzxULCBHPik6IE9ic2VydmFibGU8Rz4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQodGhpcy5jb25maWdTZXJ2aWNlLmdldENvbmZpZyhDb25maWdDb25zdGFudHMuT01BUElfUVVFUllfVVJMKSArIG9tYXBpUXVlcnlDYWxsQ29uZmlnLmVuZHBvaW50KVxuICAgICAgLnBpcGUoXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG4gICAgICAgIG1lcmdlTWFwKChvbWFwaVF1ZXJ5UmVzcG9uc2U6IE9iamVjdCkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLm9tYXBpRW5yaWNoU2VydmljZS5lbnJpY2hSZXNwb25zZVdpdGhPbWFwaURhdGE8VD4oXG4gICAgICAgICAgICBvbWFwaVF1ZXJ5Q2FsbENvbmZpZy5tZXNzYWdlR3JvdXBOYW1lLFxuICAgICAgICAgICAgb21hcGlRdWVyeVJlc3BvbnNlIGFzIFRcbiAgICAgICAgICApO1xuICAgICAgICB9KSxcbiAgICAgICAgbWFwKChvbWFwaVJlc3BvbnNlRW5yaWNoZWRXaXRoT21hcGlEYXRhOiBUKSA9PlxuICAgICAgICAgIG9tYXBpUXVlcnlDYWxsQ29uZmlnLm1hcHBlci50b01vZGVsKG9tYXBpUmVzcG9uc2VFbnJpY2hlZFdpdGhPbWFwaURhdGEpXG4gICAgICAgICksXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiB1bmtub3duKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IgYXMgSHR0cEVycm9yUmVzcG9uc2UsIG9tYXBpUXVlcnlDYWxsQ29uZmlnKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICBwcml2YXRlIGRvUmVxdWVzdDxULCBHPihvbWFwaVF1ZXJ5Q2FsbDogT21hcGlRdWVyeUNhbGxDb25maWc8VCwgRz4pOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5vbWFwaVF1ZXJ5SGVscGVyLmdldEh0dHBPcHRpb25zKCk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBvc3Q8VD4oXG4gICAgICAgIHRoaXMuY29uZmlnU2VydmljZS5nZXRDb25maWcoQ29uZmlnQ29uc3RhbnRzLk9NQVBJX1FVRVJZX1VSTCkgKyBvbWFwaVF1ZXJ5Q2FsbC5lbmRwb2ludCxcbiAgICAgICAgb21hcGlRdWVyeUNhbGwuZGF0YSxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2UoMSksXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiB1bmtub3duKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IgYXMgSHR0cEVycm9yUmVzcG9uc2UsIG9tYXBpUXVlcnlDYWxsKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVycm9yPFQsIEc+KGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSwgb21hcGlRdWVyeUNhbGw6IE9tYXBpUXVlcnlDYWxsQ29uZmlnPFQsIEc+KSB7XG4gICAgaWYgKG9tYXBpUXVlcnlDYWxsLmVycm9ySGFuZGxlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gb21hcGlRdWVyeUNhbGwuZXJyb3JIYW5kbGVyKGVycm9yLCBvbWFwaVF1ZXJ5Q2FsbCk7XG4gICAgfVxuXG4gICAgbGV0IGVycm9yQ29kZSA9ICdvbWFwaS1xdWVyeS4nLmNvbmNhdChlcnJvci5zdGF0dXMudG9TdHJpbmcoKSk7XG4gICAgbGV0IGRldGFpbGVkRXJyb3JDb2RlO1xuICAgIHN3aXRjaCAoZXJyb3Iuc3RhdHVzKSB7XG4gICAgICBjYXNlIDQwMDpcbiAgICAgICAgZXJyb3JDb2RlID0gQWRkcmVzc0VudW0uQUREUkVTU19OT1RfRk9VTkRcbiAgICAgICAgICA/IGAke29tYXBpUXVlcnlDYWxsLm1lc3NhZ2VHcm91cE5hbWV9LiR7QWRkcmVzc0VudW0uQUREUkVTU19OT1RfRk9VTkR9YFxuICAgICAgICAgIDogZXJyb3JDb2RlO1xuICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZE1lc3NhZ2UobmV3IEVycm9yTWVzc2FnZShvbWFwaVF1ZXJ5Q2FsbC5tZXNzYWdlR3JvdXBOYW1lLCBlcnJvckNvZGUpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDUwMDpcbiAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5hZGRNZXNzYWdlKG5ldyBFcnJvck1lc3NhZ2Uob21hcGlRdWVyeUNhbGwubWVzc2FnZUdyb3VwTmFtZSwgZXJyb3JDb2RlKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZGV0YWlsZWRFcnJvckNvZGUgPSB0aGlzLmdldERldGFpbGVkRXJyb3JDb2RlKGVycm9yLCBlcnJvckNvZGUpO1xuICAgICAgICBpZiAoZGV0YWlsZWRFcnJvckNvZGUpIHtcbiAgICAgICAgICBlcnJvckNvZGUgPSBkZXRhaWxlZEVycm9yQ29kZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZE1lc3NhZ2UobmV3IEVycm9yTWVzc2FnZShvbWFwaVF1ZXJ5Q2FsbC5tZXNzYWdlR3JvdXBOYW1lLCBlcnJvckNvZGUpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiB0aHJvd0Vycm9yKFxuICAgICAgKCkgPT4gJ0FuIGVycm9yIG9jY3VyZWQgd2hpbGUgdHJ5aW5nIHRvIGZldGNoICcgKyBvbWFwaVF1ZXJ5Q2FsbC5tZXNzYWdlR3JvdXBOYW1lICsgJyB8ICcgKyBlcnJvckNvZGVcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXREZXRhaWxlZEVycm9yQ29kZShlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UsIGVycm9yQ29kZTogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAoZXJyb3IuZXJyb3IgJiYgZXJyb3IuZXJyb3IuY29kZSkge1xuICAgICAgcmV0dXJuIGVycm9yQ29kZS5jb25jYXQoJy0nKS5jb25jYXQoZXJyb3IuZXJyb3IuY29kZSk7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cbiJdfQ==