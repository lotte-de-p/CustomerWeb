import * as i0 from "@angular/core";
export declare class WindowService {
    private readonly paramMap;
    constructor();
    getParamValue(key: string): string | undefined;
    getParamMap(): Map<string, string>;
    goTo(params: Map<string, string>): void;
    hasParam(key: string): boolean;
    private init;
    setWindowObjects<T>(object: string, value: T): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WindowService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WindowService>;
}
//# sourceMappingURL=window.service.d.ts.map