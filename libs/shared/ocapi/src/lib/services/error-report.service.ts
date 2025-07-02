import { Injectable } from '@angular/core';
import {
  DataLayerService,
  DataLayerAttributes,
  EventNameEnum,
  EventTypeEnum,
  EventStatusEnum,
} from '@telenet/ng-lib-datalayer';
import { OcapiCallConfig } from '../models';
import { QueryParamEnum, UrlService } from '@telenet/ng-lib-page';

@Injectable({
  providedIn: 'root',
})
export class ErrorReportService {
  constructor(
    private readonly dataLayerService: DataLayerService,
    private readonly urlService: UrlService
  ) {}

  sendErrorEventToAnalytics<T, G>(ocapiCall: OcapiCallConfig<T, G>, errorResponse?: unknown, errorCode?: string): void {
    const eventInfo = this.dataLayerService.createEventInfo(
      EventNameEnum.EVENT_NAME_ERROR_OCCURRED,
      EventTypeEnum.EVENT_TYPE_ERROR
    );
    eventInfo.setEventStatus(EventStatusEnum.EVENT_STATUS_FAILED);
    let errorMessage: string | undefined = errorCode;
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

    const attributes: DataLayerAttributes = {
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
}
