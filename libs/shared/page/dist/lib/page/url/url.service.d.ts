import { UrlParam } from './url-param.model';
import { ClientBrowserTypeService } from '../client-browser-type/client-browser-type.service';
import { QueryParamEnum } from '../enums/query-param.enum';
import { DataLayerService } from '@telenet/ng-lib-datalayer';
import * as i0 from "@angular/core";
export declare class UrlService {
    protected window: Window;
    private readonly dataLayerService;
    private readonly clientBrowserTypeService;
    constructor(window: Window, dataLayerService: DataLayerService, clientBrowserTypeService: ClientBrowserTypeService);
    getCurrentUrl(): string;
    openWindow(url: string): void;
    openNewTab(url: string): void;
    reloadWindow(): void;
    getParameterByName(name: string): string | null;
    getParamsValueFromUrl(url: string, paramKey: string): string | null;
    getUrlWithParams(url: string, params: UrlParam[]): string;
    redirectTo(url: string): void;
    doHistoryBack(): void;
    getRequestParametersAsString(): string;
    getRequestParameters(): Record<string, string>;
    getRequestParameterOrDefault(key: string, defaultValue: string): string;
    getRequestParamValue(key: string, defaultValue: string): string;
    requestParamsContains(key: string): boolean;
    getHashParameter(key: string): string | null;
    getUrlWithOnlyHashParam(): string;
    removeURLParameters(removeParams: string[]): void;
    removeParametersFromUrl(url: string, parameters: string | string[]): string;
    replaceURLParameters(data: {
        key: string;
        value: string;
    }[]): void;
    fromSource(value: QueryParamEnum): boolean;
    getHashParameters(): never[] | import("lodash").Dictionary<{
        key: string;
        value: string;
    }>;
    buildUrlWithParams(url: string, params: Map<string, string>): string;
    buildUrlWithHashParams(url: string, params: Map<string, string>): string;
    getOrigin(): string;
    getActionParametersRemovedURL(): string;
    getParameters(urlString: string): Map<string, string>;
    private openNewTabForSafari;
    static ɵfac: i0.ɵɵFactoryDeclaration<UrlService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UrlService>;
}
//# sourceMappingURL=url.service.d.ts.map