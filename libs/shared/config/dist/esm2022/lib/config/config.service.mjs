// @ts-nocheck
import { Inject, Injectable } from '@angular/core';
import { LogFactory } from '@telenet/ng-lib-shared';
import * as i0 from "@angular/core";
export class ConfigService {
    window;
    static LOG = LogFactory.createLogger(ConfigService);
    defaultConfig = { remoteHosts: {} };
    constructor(window) {
        this.window = window;
        this.window['Config'] = window['Config'] ?? this.defaultConfig;
        ConfigService.LOG.logDebug('ConfigService Instantiating ' + new Date().toDateString(), this.window['Config']);
    }
    getAllConfig() {
        return this.window['Config'];
    }
    getConfig(key) {
        const configuration = this.window['Config'] || {};
        ConfigService.LOG.logDebug(`ConfigService GetConfig: ${key} [${configuration[key]}]`);
        return configuration[key] ?? '';
    }
    addRemoteHostConfig(moduleId, remoteModuleConfigOptions) {
        if (this.window['Config']?.['remoteHosts']) {
            this.window['Config']['remoteHosts'][moduleId] = remoteModuleConfigOptions;
        }
    }
    addConfig(config) {
        this.window['Config'] = { ...this.window['Config'], ...config };
    }
    getRemoteHostConfig(moduleId) {
        if (this.window['Config']?.['remoteHosts']) {
            return this.window['Config']['remoteHosts'][moduleId];
        }
        return undefined;
    }
    static ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(i0.ɵɵinject('Window')); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConfigService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: Window, decorators: [{
                type: Inject,
                args: ['Window']
            }] }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbmZpZy9jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjO0FBQ2QsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFPLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUd6RCxNQUFNLE9BQU8sYUFBYTtJQUllO0lBSC9CLE1BQU0sQ0FBVSxHQUFHLEdBQVEsVUFBVSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN6RCxhQUFhLEdBQVcsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFFN0QsWUFBdUMsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDbkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUMvRCxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyw4QkFBOEIsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLFlBQVksRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNoSCxDQUFDO0lBRUQsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsU0FBUyxDQUFDLEdBQVc7UUFDbkIsTUFBTSxhQUFhLEdBQTJCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzFFLGFBQWEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLDRCQUE0QixHQUFHLEtBQUssYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0RixPQUFPLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELG1CQUFtQixDQUFDLFFBQWdCLEVBQUUseUJBQThEO1FBQ2xHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7WUFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyx5QkFBeUIsQ0FBQztRQUM3RSxDQUFDO0lBQ0gsQ0FBQztJQUVELFNBQVMsQ0FBQyxNQUFjO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxNQUFNLEVBQUUsQ0FBQztJQUNsRSxDQUFDO0lBRUQsbUJBQW1CLENBQUMsUUFBZ0I7UUFDbEMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQztZQUMzQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEQsQ0FBQztRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7dUVBbENVLGFBQWEsY0FJSixRQUFRO2dFQUpqQixhQUFhLFdBQWIsYUFBYSxtQkFEQSxNQUFNOztpRkFDbkIsYUFBYTtjQUR6QixVQUFVO2VBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOztzQkFLbkIsTUFBTTt1QkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQHRzLW5vY2hlY2tcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9nLCBMb2dGYWN0b3J5IH0gZnJvbSAnQHRlbGVuZXQvbmctbGliLXNoYXJlZCc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQ29uZmlnU2VydmljZSB7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IExPRzogTG9nID0gTG9nRmFjdG9yeS5jcmVhdGVMb2dnZXIoQ29uZmlnU2VydmljZSk7XG4gIHByaXZhdGUgcmVhZG9ubHkgZGVmYXVsdENvbmZpZzogQ29uZmlnID0geyByZW1vdGVIb3N0czoge30gfTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdXaW5kb3cnKSByZWFkb25seSB3aW5kb3c6IFdpbmRvdykge1xuICAgIHRoaXMud2luZG93WydDb25maWcnXSA9IHdpbmRvd1snQ29uZmlnJ10gPz8gdGhpcy5kZWZhdWx0Q29uZmlnO1xuICAgIENvbmZpZ1NlcnZpY2UuTE9HLmxvZ0RlYnVnKCdDb25maWdTZXJ2aWNlIEluc3RhbnRpYXRpbmcgJyArIG5ldyBEYXRlKCkudG9EYXRlU3RyaW5nKCksIHRoaXMud2luZG93WydDb25maWcnXSk7XG4gIH1cblxuICBnZXRBbGxDb25maWcoKTogQ29uZmlnIHtcbiAgICByZXR1cm4gdGhpcy53aW5kb3dbJ0NvbmZpZyddO1xuICB9XG5cbiAgZ2V0Q29uZmlnKGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBjb25maWd1cmF0aW9uOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0gdGhpcy53aW5kb3dbJ0NvbmZpZyddIHx8IHt9O1xuICAgIENvbmZpZ1NlcnZpY2UuTE9HLmxvZ0RlYnVnKGBDb25maWdTZXJ2aWNlIEdldENvbmZpZzogJHtrZXl9IFske2NvbmZpZ3VyYXRpb25ba2V5XX1dYCk7XG4gICAgcmV0dXJuIGNvbmZpZ3VyYXRpb25ba2V5XSA/PyAnJztcbiAgfVxuXG4gIGFkZFJlbW90ZUhvc3RDb25maWcobW9kdWxlSWQ6IHN0cmluZywgcmVtb3RlTW9kdWxlQ29uZmlnT3B0aW9uczogUGFydGlhbDxSZW1vdGVIb3N0Q29uZmlnPiB8IHVua25vd24pOiB2b2lkIHtcbiAgICBpZiAodGhpcy53aW5kb3dbJ0NvbmZpZyddPy5bJ3JlbW90ZUhvc3RzJ10pIHtcbiAgICAgIHRoaXMud2luZG93WydDb25maWcnXVsncmVtb3RlSG9zdHMnXVttb2R1bGVJZF0gPSByZW1vdGVNb2R1bGVDb25maWdPcHRpb25zO1xuICAgIH1cbiAgfVxuXG4gIGFkZENvbmZpZyhjb25maWc6IENvbmZpZyk6IHZvaWQge1xuICAgIHRoaXMud2luZG93WydDb25maWcnXSA9IHsgLi4udGhpcy53aW5kb3dbJ0NvbmZpZyddLCAuLi5jb25maWcgfTtcbiAgfVxuXG4gIGdldFJlbW90ZUhvc3RDb25maWcobW9kdWxlSWQ6IHN0cmluZyk6IFBhcnRpYWw8UmVtb3RlSG9zdENvbmZpZz4ge1xuICAgIGlmICh0aGlzLndpbmRvd1snQ29uZmlnJ10/LlsncmVtb3RlSG9zdHMnXSkge1xuICAgICAgcmV0dXJuIHRoaXMud2luZG93WydDb25maWcnXVsncmVtb3RlSG9zdHMnXVttb2R1bGVJZF07XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQ29uZmlnID0gUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgUmVjb3JkPHN0cmluZywgc3RyaW5nPiB8IGJvb2xlYW4gfCB1bmRlZmluZWQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlbW90ZUhvc3RDb25maWcge1xuICByZW1vdGVIb3N0OiBzdHJpbmc7XG4gIGV4cG9zZWRNb2R1bGU6IHN0cmluZztcbiAgbW9kdWxlSWQ6IHN0cmluZztcbiAgbW9kdWxlOiBzdHJpbmc7XG4gIHJlbW90ZUVudHJ5UGF0aDogc3RyaW5nO1xuICBleHBvc2VkRXNNb2R1bGU6IHN0cmluZztcbn1cbiJdfQ==