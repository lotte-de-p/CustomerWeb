import { InjectionToken } from '@angular/core';
import { ModuleFederatedDebugInfoModuleConfig, SharedLibConfig } from './shared-lib-config.model';
import * as i0 from "@angular/core";
export declare const DEBUG_CONFIG_TOKEN: InjectionToken<ModuleFederatedDebugInfoModuleConfig>;
export declare class ModuleFederatedDebugInfoService {
    private readonly debugConfig?;
    private readonly route;
    isDebug$: import("rxjs").Observable<boolean>;
    private readonly sharedLibrariesBs$;
    sharedLibraries$: import("rxjs").Observable<SharedLibConfig[] | null>;
    private readonly enrichLibInfo;
    constructor(debugConfig?: ModuleFederatedDebugInfoModuleConfig | undefined);
    load(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModuleFederatedDebugInfoService, [{ optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ModuleFederatedDebugInfoService>;
}
//# sourceMappingURL=module-federated-debug-info.service.d.ts.map