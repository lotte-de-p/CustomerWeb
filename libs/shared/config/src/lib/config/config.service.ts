// @ts-nocheck
import { Inject, Injectable } from '@angular/core';
import { Log, LogFactory } from '@telenet/ng-lib-shared';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  private static readonly LOG: Log = LogFactory.createLogger(ConfigService);
  private readonly defaultConfig: Config = { remoteHosts: {} };

  constructor(@Inject('Window') readonly window: Window) {
    this.window['Config'] = window['Config'] ?? this.defaultConfig;
    ConfigService.LOG.logDebug('ConfigService Instantiating ' + new Date().toDateString(), this.window['Config']);
  }

  getAllConfig(): Config {
    return this.window['Config'];
  }

  getConfig(key: string): string {
    const configuration: Record<string, string> = this.window['Config'] || {};
    ConfigService.LOG.logDebug(`ConfigService GetConfig: ${key} [${configuration[key]}]`);
    return configuration[key] ?? '';
  }

  addRemoteHostConfig(moduleId: string, remoteModuleConfigOptions: Partial<RemoteHostConfig> | unknown): void {
    if (this.window['Config']?.['remoteHosts']) {
      this.window['Config']['remoteHosts'][moduleId] = remoteModuleConfigOptions;
    }
  }

  addConfig(config: Config): void {
    this.window['Config'] = { ...this.window['Config'], ...config };
  }

  getRemoteHostConfig(moduleId: string): Partial<RemoteHostConfig> {
    if (this.window['Config']?.['remoteHosts']) {
      return this.window['Config']['remoteHosts'][moduleId];
    }
    return undefined;
  }
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
