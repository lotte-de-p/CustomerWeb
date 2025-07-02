import * as i0 from "@angular/core";
export declare class ConfigService {
    readonly window: Window;
    private static readonly LOG;
    private readonly defaultConfig;
    constructor(window: Window);
    getAllConfig(): Config;
    getConfig(key: string): string;
    addRemoteHostConfig(moduleId: string, remoteModuleConfigOptions: Partial<RemoteHostConfig> | unknown): void;
    addConfig(config: Config): void;
    getRemoteHostConfig(moduleId: string): Partial<RemoteHostConfig>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConfigService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ConfigService>;
}
export type Config = Record<string, string | Record<string, string> | boolean | undefined>;
export interface RemoteHostConfig {
    remoteHost: string;
    exposedModule: string;
    moduleId: string;
    module: string;
    remoteEntryPath: string;
    exposedEsModule: string;
}
//# sourceMappingURL=config.service.d.ts.map