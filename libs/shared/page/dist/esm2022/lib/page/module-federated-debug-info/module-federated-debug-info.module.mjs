import { APP_INITIALIZER, NgModule } from '@angular/core';
import { DEBUG_CONFIG_TOKEN, ModuleFederatedDebugInfoService } from './module-federated-debug-info.service';
import { ModuleFederatedDebugInfoComponent } from './module-federated-debug-info.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class ModuleFederatedDebugInfoModule {
    static forRoot(config) {
        return {
            ngModule: ModuleFederatedDebugInfoModule,
            providers: [
                {
                    provide: DEBUG_CONFIG_TOKEN,
                    useValue: config,
                },
                ModuleFederatedDebugInfoService,
                {
                    provide: APP_INITIALIZER,
                    deps: [ModuleFederatedDebugInfoService],
                    multi: true,
                    useFactory: (service) => () => initModuleFederatedDebugInfoService(service),
                },
            ],
        };
    }
    static ɵfac = function ModuleFederatedDebugInfoModule_Factory(t) { return new (t || ModuleFederatedDebugInfoModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ModuleFederatedDebugInfoModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [ModuleFederatedDebugInfoService], imports: [CommonModule, RouterModule.forRoot([])] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModuleFederatedDebugInfoModule, [{
        type: NgModule,
        args: [{
                declarations: [ModuleFederatedDebugInfoComponent],
                imports: [CommonModule, RouterModule.forRoot([])],
                providers: [ModuleFederatedDebugInfoService],
                exports: [ModuleFederatedDebugInfoComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ModuleFederatedDebugInfoModule, { declarations: [ModuleFederatedDebugInfoComponent], imports: [CommonModule, i1.RouterModule], exports: [ModuleFederatedDebugInfoComponent] }); })();
function initModuleFederatedDebugInfoService(service) {
    // Promise is needed for the useFactory
    return new Promise((resolve) => {
        service.load();
        resolve();
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLWZlZGVyYXRlZC1kZWJ1Zy1pbmZvLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvcGFnZS9tb2R1bGUtZmVkZXJhdGVkLWRlYnVnLWluZm8vbW9kdWxlLWZlZGVyYXRlZC1kZWJ1Zy1pbmZvLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZUFBZSxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLCtCQUErQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFNUcsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDNUYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBUS9DLE1BQU0sT0FBTyw4QkFBOEI7SUFDekMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUE2QztRQUMxRCxPQUFPO1lBQ0wsUUFBUSxFQUFFLDhCQUE4QjtZQUN4QyxTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGtCQUFrQjtvQkFDM0IsUUFBUSxFQUFFLE1BQU07aUJBQ2pCO2dCQUNELCtCQUErQjtnQkFDL0I7b0JBQ0UsT0FBTyxFQUFFLGVBQWU7b0JBQ3hCLElBQUksRUFBRSxDQUFDLCtCQUErQixDQUFDO29CQUN2QyxLQUFLLEVBQUUsSUFBSTtvQkFDWCxVQUFVLEVBQUUsQ0FBQyxPQUF3QyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQyxPQUFPLENBQUM7aUJBQzdHO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzt3RkFsQlUsOEJBQThCOzREQUE5Qiw4QkFBOEI7aUVBSDlCLENBQUMsK0JBQStCLENBQUMsWUFEbEMsWUFBWSxFQUFFLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDOztpRkFJckMsOEJBQThCO2NBTjFDLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztnQkFDakQsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ2pELFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2dCQUM1QyxPQUFPLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQzthQUM3Qzs7d0ZBQ1ksOEJBQThCLG1CQUwxQixpQ0FBaUMsYUFDdEMsWUFBWSw4QkFFWixpQ0FBaUM7QUF1QjdDLFNBQVMsbUNBQW1DLENBQUMsT0FBd0M7SUFDbkYsdUNBQXVDO0lBQ3ZDLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtRQUM3QixPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDZixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQUF9JTklUSUFMSVpFUiwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERFQlVHX0NPTkZJR19UT0tFTiwgTW9kdWxlRmVkZXJhdGVkRGVidWdJbmZvU2VydmljZSB9IGZyb20gJy4vbW9kdWxlLWZlZGVyYXRlZC1kZWJ1Zy1pbmZvLnNlcnZpY2UnO1xuaW1wb3J0IHsgTW9kdWxlRmVkZXJhdGVkRGVidWdJbmZvTW9kdWxlQ29uZmlnIH0gZnJvbSAnLi9zaGFyZWQtbGliLWNvbmZpZy5tb2RlbCc7XG5pbXBvcnQgeyBNb2R1bGVGZWRlcmF0ZWREZWJ1Z0luZm9Db21wb25lbnQgfSBmcm9tICcuL21vZHVsZS1mZWRlcmF0ZWQtZGVidWctaW5mby5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW01vZHVsZUZlZGVyYXRlZERlYnVnSW5mb0NvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFJvdXRlck1vZHVsZS5mb3JSb290KFtdKV0sXG4gIHByb3ZpZGVyczogW01vZHVsZUZlZGVyYXRlZERlYnVnSW5mb1NlcnZpY2VdLFxuICBleHBvcnRzOiBbTW9kdWxlRmVkZXJhdGVkRGVidWdJbmZvQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgTW9kdWxlRmVkZXJhdGVkRGVidWdJbmZvTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoY29uZmlnPzogTW9kdWxlRmVkZXJhdGVkRGVidWdJbmZvTW9kdWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVyczxNb2R1bGVGZWRlcmF0ZWREZWJ1Z0luZm9Nb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE1vZHVsZUZlZGVyYXRlZERlYnVnSW5mb01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogREVCVUdfQ09ORklHX1RPS0VOLFxuICAgICAgICAgIHVzZVZhbHVlOiBjb25maWcsXG4gICAgICAgIH0sXG4gICAgICAgIE1vZHVsZUZlZGVyYXRlZERlYnVnSW5mb1NlcnZpY2UsXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICAgICAgZGVwczogW01vZHVsZUZlZGVyYXRlZERlYnVnSW5mb1NlcnZpY2VdLFxuICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IChzZXJ2aWNlOiBNb2R1bGVGZWRlcmF0ZWREZWJ1Z0luZm9TZXJ2aWNlKSA9PiAoKSA9PiBpbml0TW9kdWxlRmVkZXJhdGVkRGVidWdJbmZvU2VydmljZShzZXJ2aWNlKSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0TW9kdWxlRmVkZXJhdGVkRGVidWdJbmZvU2VydmljZShzZXJ2aWNlOiBNb2R1bGVGZWRlcmF0ZWREZWJ1Z0luZm9TZXJ2aWNlKTogUHJvbWlzZTx2b2lkPiB7XG4gIC8vIFByb21pc2UgaXMgbmVlZGVkIGZvciB0aGUgdXNlRmFjdG9yeVxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBzZXJ2aWNlLmxvYWQoKTtcbiAgICByZXNvbHZlKCk7XG4gIH0pO1xufVxuIl19