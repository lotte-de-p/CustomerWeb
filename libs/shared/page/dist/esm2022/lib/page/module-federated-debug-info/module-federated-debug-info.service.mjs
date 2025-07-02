import { inject, Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap, take, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export const DEBUG_CONFIG_TOKEN = new InjectionToken('debugConfig');
export class ModuleFederatedDebugInfoService {
    debugConfig;
    route = inject(ActivatedRoute);
    isDebug$ = this.route.queryParams.pipe(map((queryParams) => queryParams['debug'] === 'true'));
    sharedLibrariesBs$ = new BehaviorSubject(null);
    sharedLibraries$ = this.sharedLibrariesBs$.pipe(filter((value) => !!value));
    enrichLibInfo = (debugConfig) => {
        const sharedLibraries = debugConfig?.sharedLibsFunction()?.['sharedLibraries'];
        return Object.keys(sharedLibraries || {}).map((key) => ({
            [key]: {
                ...sharedLibraries?.[key],
                version: this.debugConfig?.packageLockFunction()?.['dependencies'][key]?.['version'] ??
                    sharedLibraries?.[key]?.version,
            },
        }));
    };
    constructor(debugConfig) {
        this.debugConfig = debugConfig;
        const sharedLibConfigs = this.enrichLibInfo(debugConfig);
        this.sharedLibrariesBs$.next(sharedLibConfigs);
    }
    load() {
        this.isDebug$
            .pipe(filter((isDebug) => isDebug), mergeMap(() => this.sharedLibraries$), tap((sharedLibraries) => console.debug('SHARED_LIBRARIES', sharedLibraries)), take(1))
            .subscribe();
    }
    static ɵfac = function ModuleFederatedDebugInfoService_Factory(t) { return new (t || ModuleFederatedDebugInfoService)(i0.ɵɵinject(DEBUG_CONFIG_TOKEN, 8)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ModuleFederatedDebugInfoService, factory: ModuleFederatedDebugInfoService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModuleFederatedDebugInfoService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: undefined, decorators: [{
                type: Inject,
                args: [DEBUG_CONFIG_TOKEN]
            }, {
                type: Optional
            }] }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLWZlZGVyYXRlZC1kZWJ1Zy1pbmZvLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL3BhZ2UvbW9kdWxlLWZlZGVyYXRlZC1kZWJ1Zy1pbmZvL21vZHVsZS1mZWRlcmF0ZWQtZGVidWctaW5mby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBRXZDLE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFHLElBQUksY0FBYyxDQUF1QyxhQUFhLENBQUMsQ0FBQztBQUcxRyxNQUFNLE9BQU8sK0JBQStCO0lBbUJpQjtJQWxCMUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNoRCxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDN0Usa0JBQWtCLEdBQUcsSUFBSSxlQUFlLENBQTJCLElBQUksQ0FBQyxDQUFDO0lBQzFGLGdCQUFnQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUUzRCxhQUFhLEdBQUcsQ0FBQyxXQUFrRCxFQUFxQixFQUFFO1FBQ3pHLE1BQU0sZUFBZSxHQUFHLFdBQVcsRUFBRSxrQkFBa0IsRUFBRSxFQUFFLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMvRSxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN0RCxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNMLEdBQUcsZUFBZSxFQUFFLENBQUMsR0FBRyxDQUFDO2dCQUN6QixPQUFPLEVBQ0osSUFBSSxDQUFDLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQVk7b0JBQ3ZGLGVBQWUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE9BQU87YUFDbEM7U0FDRixDQUFDLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztJQUVGLFlBQzJELFdBQWtEO1FBQWxELGdCQUFXLEdBQVgsV0FBVyxDQUF1QztRQUUzRyxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLFFBQVE7YUFDVixJQUFJLENBQ0gsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFDNUIsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUNyQyxHQUFHLENBQUMsQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsZUFBZSxDQUFDLENBQUMsRUFDNUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNSO2FBQ0EsU0FBUyxFQUFFLENBQUM7SUFDakIsQ0FBQzt5RkFsQ1UsK0JBQStCLGNBbUJoQyxrQkFBa0I7Z0VBbkJqQiwrQkFBK0IsV0FBL0IsK0JBQStCLG1CQURsQixNQUFNOztpRkFDbkIsK0JBQStCO2NBRDNDLFVBQVU7ZUFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7O3NCQW9CN0IsTUFBTTt1QkFBQyxrQkFBa0I7O3NCQUFHLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QsIEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4sIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgbWVyZ2VNYXAsIHRha2UsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE1vZHVsZUZlZGVyYXRlZERlYnVnSW5mb01vZHVsZUNvbmZpZywgU2hhcmVkTGliQ29uZmlnIH0gZnJvbSAnLi9zaGFyZWQtbGliLWNvbmZpZy5tb2RlbCc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNvbnN0IERFQlVHX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxNb2R1bGVGZWRlcmF0ZWREZWJ1Z0luZm9Nb2R1bGVDb25maWc+KCdkZWJ1Z0NvbmZpZycpO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE1vZHVsZUZlZGVyYXRlZERlYnVnSW5mb1NlcnZpY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IHJvdXRlID0gaW5qZWN0KEFjdGl2YXRlZFJvdXRlKTtcbiAgaXNEZWJ1ZyQgPSB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnBpcGUobWFwKChxdWVyeVBhcmFtcykgPT4gcXVlcnlQYXJhbXNbJ2RlYnVnJ10gPT09ICd0cnVlJykpO1xuICBwcml2YXRlIHJlYWRvbmx5IHNoYXJlZExpYnJhcmllc0JzJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8U2hhcmVkTGliQ29uZmlnW10gfCBudWxsPihudWxsKTtcbiAgc2hhcmVkTGlicmFyaWVzJCA9IHRoaXMuc2hhcmVkTGlicmFyaWVzQnMkLnBpcGUoZmlsdGVyKCh2YWx1ZSkgPT4gISF2YWx1ZSkpO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgZW5yaWNoTGliSW5mbyA9IChkZWJ1Z0NvbmZpZz86IE1vZHVsZUZlZGVyYXRlZERlYnVnSW5mb01vZHVsZUNvbmZpZyk6IFNoYXJlZExpYkNvbmZpZ1tdID0+IHtcbiAgICBjb25zdCBzaGFyZWRMaWJyYXJpZXMgPSBkZWJ1Z0NvbmZpZz8uc2hhcmVkTGlic0Z1bmN0aW9uKCk/Llsnc2hhcmVkTGlicmFyaWVzJ107XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHNoYXJlZExpYnJhcmllcyB8fCB7fSkubWFwKChrZXkpID0+ICh7XG4gICAgICBba2V5XToge1xuICAgICAgICAuLi5zaGFyZWRMaWJyYXJpZXM/LltrZXldLFxuICAgICAgICB2ZXJzaW9uOlxuICAgICAgICAgICh0aGlzLmRlYnVnQ29uZmlnPy5wYWNrYWdlTG9ja0Z1bmN0aW9uKCk/LlsnZGVwZW5kZW5jaWVzJ11ba2V5XT8uWyd2ZXJzaW9uJ10gYXMgc3RyaW5nKSA/P1xuICAgICAgICAgIHNoYXJlZExpYnJhcmllcz8uW2tleV0/LnZlcnNpb24sXG4gICAgICB9LFxuICAgIH0pKTtcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERFQlVHX0NPTkZJR19UT0tFTikgQE9wdGlvbmFsKCkgcHJpdmF0ZSByZWFkb25seSBkZWJ1Z0NvbmZpZz86IE1vZHVsZUZlZGVyYXRlZERlYnVnSW5mb01vZHVsZUNvbmZpZ1xuICApIHtcbiAgICBjb25zdCBzaGFyZWRMaWJDb25maWdzID0gdGhpcy5lbnJpY2hMaWJJbmZvKGRlYnVnQ29uZmlnKTtcbiAgICB0aGlzLnNoYXJlZExpYnJhcmllc0JzJC5uZXh0KHNoYXJlZExpYkNvbmZpZ3MpO1xuICB9XG5cbiAgbG9hZCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzRGVidWckXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKChpc0RlYnVnKSA9PiBpc0RlYnVnKSxcbiAgICAgICAgbWVyZ2VNYXAoKCkgPT4gdGhpcy5zaGFyZWRMaWJyYXJpZXMkKSxcbiAgICAgICAgdGFwKChzaGFyZWRMaWJyYXJpZXMpID0+IGNvbnNvbGUuZGVidWcoJ1NIQVJFRF9MSUJSQVJJRVMnLCBzaGFyZWRMaWJyYXJpZXMpKSxcbiAgICAgICAgdGFrZSgxKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=