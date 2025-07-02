import { Injectable } from '@angular/core';
import { EventNameEnum, EventTypeEnum, EventStatusEnum, } from '@telenet/ng-lib-datalayer';
import { QueryParamEnum } from '@telenet/ng-lib-page';
import * as i0 from "@angular/core";
import * as i1 from "@telenet/ng-lib-datalayer";
import * as i2 from "@telenet/ng-lib-page";
export class ErrorReportService {
    dataLayerService;
    urlService;
    constructor(dataLayerService, urlService) {
        this.dataLayerService = dataLayerService;
        this.urlService = urlService;
    }
    sendErrorEventToAnalytics(ocapiCall, errorResponse, errorCode) {
        const eventInfo = this.dataLayerService.createEventInfo(EventNameEnum.EVENT_NAME_ERROR_OCCURRED, EventTypeEnum.EVENT_TYPE_ERROR);
        eventInfo.setEventStatus(EventStatusEnum.EVENT_STATUS_FAILED);
        let errorMessage = errorCode;
        if (errorResponse && errorResponse['errorDetails'] && errorResponse['errorDetails'].length) {
            errorMessage =
                errorMessage +
                    '|' +
                    errorResponse['errorDetails'][0].errorDetailCode +
                    '|' +
                    errorResponse['errorDetails'][0].message;
        }
        if (errorMessage) {
            eventInfo.setEventStatusMessage(errorMessage);
        }
        const attributes = {
            itemName: ocapiCall.messageGroupName,
            itemData: ocapiCall.httpType + ' ' + ocapiCall.endpoint,
            itemGroup: errorResponse ? errorResponse['cause'] : '',
            itemIdentifier: errorResponse ? errorResponse['correlationId'] : '',
        };
        const flow = this.urlService.getRequestParamValue(QueryParamEnum.FLOW, '');
        const sData = this.urlService.getRequestParamValue(QueryParamEnum.SDATA, '');
        const sId = this.urlService.getRequestParamValue(QueryParamEnum.SALES_ORDER_ID, '');
        if (!flow || (!sData && !sId)) {
            this.dataLayerService.sendEvent({ eventInfo, attributes });
        }
    }
    static ɵfac = function ErrorReportService_Factory(t) { return new (t || ErrorReportService)(i0.ɵɵinject(i1.DataLayerService), i0.ɵɵinject(i2.UrlService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ErrorReportService, factory: ErrorReportService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ErrorReportService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.DataLayerService }, { type: i2.UrlService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItcmVwb3J0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3NlcnZpY2VzL2Vycm9yLXJlcG9ydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUdMLGFBQWEsRUFDYixhQUFhLEVBQ2IsZUFBZSxHQUNoQixNQUFNLDJCQUEyQixDQUFDO0FBRW5DLE9BQU8sRUFBRSxjQUFjLEVBQWMsTUFBTSxzQkFBc0IsQ0FBQzs7OztBQUtsRSxNQUFNLE9BQU8sa0JBQWtCO0lBRVY7SUFDQTtJQUZuQixZQUNtQixnQkFBa0MsRUFDbEMsVUFBc0I7UUFEdEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQ3RDLENBQUM7SUFFSix5QkFBeUIsQ0FBTyxTQUFnQyxFQUFFLGFBQXVCLEVBQUUsU0FBa0I7UUFDM0csTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FDckQsYUFBYSxDQUFDLHlCQUF5QixFQUN2QyxhQUFhLENBQUMsZ0JBQWdCLENBQy9CLENBQUM7UUFDRixTQUFTLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQzlELElBQUksWUFBWSxHQUF1QixTQUFTLENBQUM7UUFDakQsSUFBSSxhQUFhLElBQUksYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUMzRixZQUFZO2dCQUNWLFlBQVk7b0JBQ1osR0FBRztvQkFDSCxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZTtvQkFDaEQsR0FBRztvQkFDSCxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQzdDLENBQUM7UUFFRCxJQUFJLFlBQVksRUFBRSxDQUFDO1lBQ2pCLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNoRCxDQUFDO1FBRUQsTUFBTSxVQUFVLEdBQXdCO1lBQ3RDLFFBQVEsRUFBRSxTQUFTLENBQUMsZ0JBQWdCO1lBQ3BDLFFBQVEsRUFBRSxTQUFTLENBQUMsUUFBUSxHQUFHLEdBQUcsR0FBRyxTQUFTLENBQUMsUUFBUTtZQUN2RCxTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDdEQsY0FBYyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1NBQ3BFLENBQUM7UUFFRixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDM0UsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzdFLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQzlCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUM3RCxDQUFDO0lBQ0gsQ0FBQzs0RUF2Q1Usa0JBQWtCO2dFQUFsQixrQkFBa0IsV0FBbEIsa0JBQWtCLG1CQUZqQixNQUFNOztpRkFFUCxrQkFBa0I7Y0FIOUIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgRGF0YUxheWVyU2VydmljZSxcbiAgRGF0YUxheWVyQXR0cmlidXRlcyxcbiAgRXZlbnROYW1lRW51bSxcbiAgRXZlbnRUeXBlRW51bSxcbiAgRXZlbnRTdGF0dXNFbnVtLFxufSBmcm9tICdAdGVsZW5ldC9uZy1saWItZGF0YWxheWVyJztcbmltcG9ydCB7IE9jYXBpQ2FsbENvbmZpZyB9IGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQgeyBRdWVyeVBhcmFtRW51bSwgVXJsU2VydmljZSB9IGZyb20gJ0B0ZWxlbmV0L25nLWxpYi1wYWdlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEVycm9yUmVwb3J0U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGF0YUxheWVyU2VydmljZTogRGF0YUxheWVyU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IHVybFNlcnZpY2U6IFVybFNlcnZpY2VcbiAgKSB7fVxuXG4gIHNlbmRFcnJvckV2ZW50VG9BbmFseXRpY3M8VCwgRz4ob2NhcGlDYWxsOiBPY2FwaUNhbGxDb25maWc8VCwgRz4sIGVycm9yUmVzcG9uc2U/OiB1bmtub3duLCBlcnJvckNvZGU/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBldmVudEluZm8gPSB0aGlzLmRhdGFMYXllclNlcnZpY2UuY3JlYXRlRXZlbnRJbmZvKFxuICAgICAgRXZlbnROYW1lRW51bS5FVkVOVF9OQU1FX0VSUk9SX09DQ1VSUkVELFxuICAgICAgRXZlbnRUeXBlRW51bS5FVkVOVF9UWVBFX0VSUk9SXG4gICAgKTtcbiAgICBldmVudEluZm8uc2V0RXZlbnRTdGF0dXMoRXZlbnRTdGF0dXNFbnVtLkVWRU5UX1NUQVRVU19GQUlMRUQpO1xuICAgIGxldCBlcnJvck1lc3NhZ2U6IHN0cmluZyB8IHVuZGVmaW5lZCA9IGVycm9yQ29kZTtcbiAgICBpZiAoZXJyb3JSZXNwb25zZSAmJiBlcnJvclJlc3BvbnNlWydlcnJvckRldGFpbHMnXSAmJiBlcnJvclJlc3BvbnNlWydlcnJvckRldGFpbHMnXS5sZW5ndGgpIHtcbiAgICAgIGVycm9yTWVzc2FnZSA9XG4gICAgICAgIGVycm9yTWVzc2FnZSArXG4gICAgICAgICd8JyArXG4gICAgICAgIGVycm9yUmVzcG9uc2VbJ2Vycm9yRGV0YWlscyddWzBdLmVycm9yRGV0YWlsQ29kZSArXG4gICAgICAgICd8JyArXG4gICAgICAgIGVycm9yUmVzcG9uc2VbJ2Vycm9yRGV0YWlscyddWzBdLm1lc3NhZ2U7XG4gICAgfVxuXG4gICAgaWYgKGVycm9yTWVzc2FnZSkge1xuICAgICAgZXZlbnRJbmZvLnNldEV2ZW50U3RhdHVzTWVzc2FnZShlcnJvck1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGNvbnN0IGF0dHJpYnV0ZXM6IERhdGFMYXllckF0dHJpYnV0ZXMgPSB7XG4gICAgICBpdGVtTmFtZTogb2NhcGlDYWxsLm1lc3NhZ2VHcm91cE5hbWUsXG4gICAgICBpdGVtRGF0YTogb2NhcGlDYWxsLmh0dHBUeXBlICsgJyAnICsgb2NhcGlDYWxsLmVuZHBvaW50LFxuICAgICAgaXRlbUdyb3VwOiBlcnJvclJlc3BvbnNlID8gZXJyb3JSZXNwb25zZVsnY2F1c2UnXSA6ICcnLFxuICAgICAgaXRlbUlkZW50aWZpZXI6IGVycm9yUmVzcG9uc2UgPyBlcnJvclJlc3BvbnNlWydjb3JyZWxhdGlvbklkJ10gOiAnJyxcbiAgICB9O1xuXG4gICAgY29uc3QgZmxvdyA9IHRoaXMudXJsU2VydmljZS5nZXRSZXF1ZXN0UGFyYW1WYWx1ZShRdWVyeVBhcmFtRW51bS5GTE9XLCAnJyk7XG4gICAgY29uc3Qgc0RhdGEgPSB0aGlzLnVybFNlcnZpY2UuZ2V0UmVxdWVzdFBhcmFtVmFsdWUoUXVlcnlQYXJhbUVudW0uU0RBVEEsICcnKTtcbiAgICBjb25zdCBzSWQgPSB0aGlzLnVybFNlcnZpY2UuZ2V0UmVxdWVzdFBhcmFtVmFsdWUoUXVlcnlQYXJhbUVudW0uU0FMRVNfT1JERVJfSUQsICcnKTtcbiAgICBpZiAoIWZsb3cgfHwgKCFzRGF0YSAmJiAhc0lkKSkge1xuICAgICAgdGhpcy5kYXRhTGF5ZXJTZXJ2aWNlLnNlbmRFdmVudCh7IGV2ZW50SW5mbywgYXR0cmlidXRlcyB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==