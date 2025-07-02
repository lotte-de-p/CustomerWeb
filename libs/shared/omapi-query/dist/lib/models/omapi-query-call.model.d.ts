import { MapperInterface } from '@telenet/ng-lib-shared';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpTypesEnum } from '../enums/http-types.enum';
export declare class OmapiQueryCallConfig<K, G> {
    messageGroupName: string;
    endpoint: string;
    mapper: MapperInterface<K, G>;
    data: unknown;
    errorHandler?: (errorHandler: HttpErrorResponse, config: OmapiQueryCallConfig<K, G>) => Observable<any>;
    httpType: HttpTypesEnum;
    customHeaders?: object;
    constructor(messageGroupName: string, endpoint: string, mapper: MapperInterface<K, G>, data?: unknown, customHeaders?: Object);
}
//# sourceMappingURL=omapi-query-call.model.d.ts.map