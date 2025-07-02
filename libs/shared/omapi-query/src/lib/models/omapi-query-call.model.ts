import { MapperInterface } from '@telenet/ng-lib-shared';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpTypesEnum } from '../enums/http-types.enum';

export class OmapiQueryCallConfig<K, G> {
  messageGroupName: string;
  endpoint: string;
  mapper: MapperInterface<K, G>;
  data: unknown;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errorHandler?: (errorHandler: HttpErrorResponse, config: OmapiQueryCallConfig<K, G>) => Observable<any>;
  httpType: HttpTypesEnum = HttpTypesEnum.POST;
  // eslint-disable-next-line @typescript-eslint/ban-types
  customHeaders?: object;

  constructor(
    messageGroupName: string,
    endpoint: string,
    mapper: MapperInterface<K, G>,
    data?: unknown,
    // eslint-disable-next-line @typescript-eslint/ban-types
    customHeaders?: Object
  ) {
    this.messageGroupName = messageGroupName;
    this.endpoint = endpoint;
    this.mapper = mapper;
    this.data = data;
    this.customHeaders = customHeaders;
  }
}
