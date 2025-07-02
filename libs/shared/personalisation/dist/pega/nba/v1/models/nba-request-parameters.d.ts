import { Observable } from 'rxjs';
import { JsonUrlService } from '@telenet/ng-lib-page';
import { NBAList } from './nba-list.model';
import { SalesDataService } from '../../../../sales/service/sales-data.service';
import * as i0 from "@angular/core";
export declare class NBARequestParameters {
    private readonly salesDataService;
    private readonly jsonUrlService;
    private readonly nbaRequestParameters;
    private requestObservables;
    constructor(salesDataService: SalesDataService, jsonUrlService: JsonUrlService);
    toNBAList(): Observable<NBAList>;
    private constructNbaListFromRequestParam;
    private getRequestParam;
    private getRequestParamValue;
    private getRequestParamValueAsArray;
    private createSellingArguments;
    private deCompressRequestParamValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<NBARequestParameters, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NBARequestParameters>;
}
//# sourceMappingURL=nba-request-parameters.d.ts.map