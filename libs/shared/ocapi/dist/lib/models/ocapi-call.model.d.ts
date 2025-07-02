import { MapperInterface } from '@telenet/ng-lib-shared';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpTypesEnum } from '../enums';
export declare class OcapiCallConfig<T, G> {
    messageGroupName: string;
    endpoint: string;
    mapper?: MapperInterface<T, G>;
    data: unknown;
    withCredentials: boolean;
    withDefaultContentType: boolean;
    errorHandler: (errorHandler: HttpErrorResponse, config: OcapiCallConfig<T, G>) => Observable<unknown>;
    httpType: HttpTypesEnum;
    customHeaders: Record<string, string | string[]>;
    observeAsResponse?: boolean;
    responseType?: string;
    useAdaptorEndpoint?: boolean;
    silentlyHandleError: boolean;
    authNeeded: boolean;
    constructor(messageGroupName: string, endpoint: string, mapper?: MapperInterface<T, G>, data?: unknown, customHeaders?: Record<string, string | string[]>, observeAsResponse?: boolean, responseType?: string, useAdaptorEndpoint?: boolean, silentlyHandleError?: boolean);
    getEndpoint(): string;
}
//# sourceMappingURL=ocapi-call.model.d.ts.map