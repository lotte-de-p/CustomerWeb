import { Observable } from 'rxjs';
import { JsonUrlService } from '@telenet/ng-lib-page';
import { RawSalesData, SalesData } from '../models/sales-data.model';
import { SalesDataMapper } from '../mappers/sales-data.mapper';
import * as i0 from "@angular/core";
export declare class SalesDataService {
    private readonly jsonUrlService;
    private readonly salesDataMapper;
    constructor(jsonUrlService: JsonUrlService, salesDataMapper: SalesDataMapper);
    getCompressedSalesData(salesData: SalesData): Observable<string>;
    getDecompressedSalesData(compressedSalesData: string): Observable<SalesData>;
    mapSalesData(rawSalesData: RawSalesData): SalesData;
    static ɵfac: i0.ɵɵFactoryDeclaration<SalesDataService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SalesDataService>;
}
//# sourceMappingURL=sales-data.service.d.ts.map