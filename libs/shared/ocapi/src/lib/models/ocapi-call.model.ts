import { MapperInterface } from '@telenet/ng-lib-shared';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpTypesEnum } from '../enums';

export class OcapiCallConfig<T, G> {
  messageGroupName: string;
  endpoint: string;
  mapper?: MapperInterface<T, G>;
  data: unknown;
  withCredentials = true;
  withDefaultContentType = true;
  errorHandler: (errorHandler: HttpErrorResponse, config: OcapiCallConfig<T, G>) => Observable<unknown>;
  httpType: HttpTypesEnum;
  customHeaders: Record<string, string | string[]>;
  observeAsResponse?: boolean;
  responseType?: string;
  useAdaptorEndpoint?: boolean;
  silentlyHandleError: boolean;
  authNeeded = true;

  constructor(
    messageGroupName: string,
    endpoint: string,
    mapper?: MapperInterface<T, G>,
    data?: unknown,
    customHeaders: Record<string, string | string[]> = {},
    observeAsResponse?: boolean,
    responseType?: string,
    useAdaptorEndpoint?: boolean,
    silentlyHandleError = false
  ) {
    this.messageGroupName = messageGroupName;
    this.endpoint = endpoint;
    this.mapper = mapper;
    this.data = data;
    this.customHeaders = customHeaders;
    this.observeAsResponse = observeAsResponse;
    this.responseType = responseType;
    this.useAdaptorEndpoint = useAdaptorEndpoint;
    this.silentlyHandleError = silentlyHandleError;
  }

  getEndpoint(): string {
    return this.useAdaptorEndpoint ? this.endpoint.replace('/public', '-adaptor/public') : this.endpoint;
  }
}
