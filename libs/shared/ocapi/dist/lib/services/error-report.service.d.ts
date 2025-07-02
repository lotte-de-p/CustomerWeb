import { DataLayerService } from '@telenet/ng-lib-datalayer';
import { OcapiCallConfig } from '../models';
import { UrlService } from '@telenet/ng-lib-page';
import * as i0 from "@angular/core";
export declare class ErrorReportService {
    private readonly dataLayerService;
    private readonly urlService;
    constructor(dataLayerService: DataLayerService, urlService: UrlService);
    sendErrorEventToAnalytics<T, G>(ocapiCall: OcapiCallConfig<T, G>, errorResponse?: unknown, errorCode?: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ErrorReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ErrorReportService>;
}
//# sourceMappingURL=error-report.service.d.ts.map