import { inject, Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap, take, tap } from 'rxjs/operators';
import { ModuleFederatedDebugInfoModuleConfig, SharedLibConfig } from './shared-lib-config.model';
import { BehaviorSubject } from 'rxjs';

export const DEBUG_CONFIG_TOKEN = new InjectionToken<ModuleFederatedDebugInfoModuleConfig>('debugConfig');

@Injectable({ providedIn: 'root' })
export class ModuleFederatedDebugInfoService {
  private readonly route = inject(ActivatedRoute);
  isDebug$ = this.route.queryParams.pipe(map((queryParams) => queryParams['debug'] === 'true'));
  private readonly sharedLibrariesBs$ = new BehaviorSubject<SharedLibConfig[] | null>(null);
  sharedLibraries$ = this.sharedLibrariesBs$.pipe(filter((value) => !!value));

  private readonly enrichLibInfo = (debugConfig?: ModuleFederatedDebugInfoModuleConfig): SharedLibConfig[] => {
    const sharedLibraries = debugConfig?.sharedLibsFunction()?.['sharedLibraries'];
    return Object.keys(sharedLibraries || {}).map((key) => ({
      [key]: {
        ...sharedLibraries?.[key],
        version:
          (this.debugConfig?.packageLockFunction()?.['dependencies'][key]?.['version'] as string) ??
          sharedLibraries?.[key]?.version,
      },
    }));
  };

  constructor(
    @Inject(DEBUG_CONFIG_TOKEN) @Optional() private readonly debugConfig?: ModuleFederatedDebugInfoModuleConfig
  ) {
    const sharedLibConfigs = this.enrichLibInfo(debugConfig);
    this.sharedLibrariesBs$.next(sharedLibConfigs);
  }

  load(): void {
    this.isDebug$
      .pipe(
        filter((isDebug) => isDebug),
        mergeMap(() => this.sharedLibraries$),
        tap((sharedLibraries) => console.debug('SHARED_LIBRARIES', sharedLibraries)),
        take(1)
      )
      .subscribe();
  }
}
