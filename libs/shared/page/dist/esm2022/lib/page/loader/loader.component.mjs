var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "./services/loader.service";
import * as i2 from "@ngx-translate/core";
import * as i3 from "../path-categorisation/path-categorisation.service";
let LoaderComponent = class LoaderComponent {
    loaderService;
    translate;
    pathCategorisationService;
    window;
    pageType = '';
    startByDefault = false;
    enableLoader = false;
    enableMask = false;
    pageLoaderID = 'page-loader';
    loaderObj;
    messages;
    constructor(loaderService, translate, pathCategorisationService, window) {
        this.loaderService = loaderService;
        this.translate = translate;
        this.pathCategorisationService = pathCategorisationService;
        this.window = window;
        this.loaderObj = this.window?.['telenetgroupLoader'];
        this.messages = [
            this.translate.instant('ng.loader.message.sm'),
            this.translate.instant('ng.loader.message.lg'),
            this.translate.instant('ng.loader.message.xlg'),
        ];
    }
    ngAfterViewInit() {
        if (this.loaderObj) {
            if (this.startByDefault) {
                this.showPageLoader();
            }
            this.loaderService.loadingStatus
                .pipe(untilDestroyed(this), map((loaderData) => loaderData.isAPIExecutionInProgress))
                .subscribe((isAPIExecutionInProgress) => {
                if (isAPIExecutionInProgress) {
                    this.showPageLoader();
                }
                else {
                    this.hidePageLoader();
                }
            });
        }
        else {
            console.error('Loader Plugin not initialised');
        }
    }
    showPageLoader() {
        const brand = this.pathCategorisationService.getCustomerBrand();
        const options = {
            enable_loader: this.enableLoader,
            enable_mask: this.enableMask,
            loader_message: this.messages,
            brand: brand,
            selector: this.pageLoaderID,
        };
        this.loaderObj.showPageLoader(options);
    }
    hidePageLoader() {
        setTimeout(() => {
            this.loaderObj.hidePageLoader();
        }, 250);
    }
    static ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(i0.ɵɵdirectiveInject(i1.LoaderService), i0.ɵɵdirectiveInject(i2.TranslateService), i0.ɵɵdirectiveInject(i3.PathCategorisationService), i0.ɵɵdirectiveInject('Window')); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoaderComponent, selectors: [["app-loader"]], inputs: { pageType: "pageType", startByDefault: "startByDefault", enableLoader: "enableLoader", enableMask: "enableMask" }, decls: 0, vars: 0, template: function LoaderComponent_Template(rf, ctx) { }, encapsulation: 2, changeDetection: 0 });
};
LoaderComponent = __decorate([
    UntilDestroy()
], LoaderComponent);
export { LoaderComponent };
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoaderComponent, [{
        type: Component,
        args: [{
                selector: 'app-loader',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], () => [{ type: i1.LoaderService }, { type: i2.TranslateService }, { type: i3.PathCategorisationService }, { type: Window, decorators: [{
                type: Inject,
                args: ['Window']
            }] }], { pageType: [{
            type: Input
        }], startByDefault: [{
            type: Input
        }], enableLoader: [{
            type: Input
        }], enableMask: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LoaderComponent, { className: "LoaderComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvcGFnZS9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQWlCLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBS2pHLE9BQU8sRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDckUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQVE5QixJQUFNLGVBQWUsR0FBckIsTUFBTSxlQUFlO0lBWVA7SUFDQTtJQUNBO0lBQ2tCO0lBZDVCLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDZCxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDckIsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUVYLFlBQVksR0FBRyxhQUFhLENBQUM7SUFFN0IsU0FBUyxDQUFDO0lBQ1YsUUFBUSxDQUFDO0lBRTFCLFlBQ21CLGFBQTRCLEVBQzVCLFNBQTJCLEVBQzNCLHlCQUFvRCxFQUNsQyxNQUFjO1FBSGhDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFDbEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUVqRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxRQUFRLEdBQUc7WUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQztZQUM5QyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQztZQUM5QyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQztTQUNoRCxDQUFDO0lBQ0osQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNuQixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3hCLENBQUM7WUFFRCxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWE7aUJBQzdCLElBQUksQ0FDSCxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQ3BCLEdBQUcsQ0FBQyxDQUFDLFVBQXNCLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxDQUNyRTtpQkFDQSxTQUFTLENBQUMsQ0FBQyx3QkFBaUMsRUFBRSxFQUFFO2dCQUMvQyxJQUFJLHdCQUF3QixFQUFFLENBQUM7b0JBQzdCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDeEIsQ0FBQztxQkFBTSxDQUFDO29CQUNOLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDeEIsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQzthQUFNLENBQUM7WUFDTixPQUFPLENBQUMsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUM7UUFDakQsQ0FBQztJQUNILENBQUM7SUFFUyxjQUFjO1FBQ3RCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ2hFLE1BQU0sT0FBTyxHQUFHO1lBQ2QsYUFBYSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQ2hDLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUM1QixjQUFjLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDN0IsS0FBSyxFQUFFLEtBQUs7WUFDWixRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVk7U0FDNUIsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFTyxjQUFjO1FBQ3BCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ2xDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7eUVBaEVVLGVBQWUsOEpBZWhCLFFBQVE7NkRBZlAsZUFBZTs7QUFBZixlQUFlO0lBTjNCLFlBQVksRUFBRTtHQU1GLGVBQWUsQ0FpRTNCOztpRkFqRVksZUFBZTtjQUwzQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRSxFQUFFO2dCQUNaLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOztzQkFnQkksTUFBTTt1QkFBQyxRQUFRO3FCQWRULFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxjQUFjO2tCQUF0QixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7O2tGQUpLLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbmplY3QsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9sb2FkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBMb2FkZXJEYXRhIH0gZnJvbSAnLi9sb2FkZXJEYXRhLm1vZGVsJztcbmltcG9ydCB7IFBhdGhDYXRlZ29yaXNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9wYXRoLWNhdGVnb3Jpc2F0aW9uL3BhdGgtY2F0ZWdvcmlzYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBVbnRpbERlc3Ryb3ksIHVudGlsRGVzdHJveWVkIH0gZnJvbSAnQG5nbmVhdC91bnRpbC1kZXN0cm95JztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQFVudGlsRGVzdHJveSgpXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbG9hZGVyJyxcbiAgdGVtcGxhdGU6ICcnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTG9hZGVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIHBhZ2VUeXBlID0gJyc7XG4gIEBJbnB1dCgpIHN0YXJ0QnlEZWZhdWx0ID0gZmFsc2U7XG4gIEBJbnB1dCgpIGVuYWJsZUxvYWRlciA9IGZhbHNlO1xuICBASW5wdXQoKSBlbmFibGVNYXNrID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBwYWdlTG9hZGVySUQgPSAncGFnZS1sb2FkZXInO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgbG9hZGVyT2JqO1xuICBwcml2YXRlIHJlYWRvbmx5IG1lc3NhZ2VzO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgbG9hZGVyU2VydmljZTogTG9hZGVyU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IHBhdGhDYXRlZ29yaXNhdGlvblNlcnZpY2U6IFBhdGhDYXRlZ29yaXNhdGlvblNlcnZpY2UsXG4gICAgQEluamVjdCgnV2luZG93JykgcHJpdmF0ZSByZWFkb25seSB3aW5kb3c6IFdpbmRvd1xuICApIHtcbiAgICB0aGlzLmxvYWRlck9iaiA9IHRoaXMud2luZG93Py5bJ3RlbGVuZXRncm91cExvYWRlciddO1xuICAgIHRoaXMubWVzc2FnZXMgPSBbXG4gICAgICB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KCduZy5sb2FkZXIubWVzc2FnZS5zbScpLFxuICAgICAgdGhpcy50cmFuc2xhdGUuaW5zdGFudCgnbmcubG9hZGVyLm1lc3NhZ2UubGcnKSxcbiAgICAgIHRoaXMudHJhbnNsYXRlLmluc3RhbnQoJ25nLmxvYWRlci5tZXNzYWdlLnhsZycpLFxuICAgIF07XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubG9hZGVyT2JqKSB7XG4gICAgICBpZiAodGhpcy5zdGFydEJ5RGVmYXVsdCkge1xuICAgICAgICB0aGlzLnNob3dQYWdlTG9hZGVyKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubG9hZGVyU2VydmljZS5sb2FkaW5nU3RhdHVzXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHVudGlsRGVzdHJveWVkKHRoaXMpLFxuICAgICAgICAgIG1hcCgobG9hZGVyRGF0YTogTG9hZGVyRGF0YSkgPT4gbG9hZGVyRGF0YS5pc0FQSUV4ZWN1dGlvbkluUHJvZ3Jlc3MpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoaXNBUElFeGVjdXRpb25JblByb2dyZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgaWYgKGlzQVBJRXhlY3V0aW9uSW5Qcm9ncmVzcykge1xuICAgICAgICAgICAgdGhpcy5zaG93UGFnZUxvYWRlcigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhpZGVQYWdlTG9hZGVyKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcignTG9hZGVyIFBsdWdpbiBub3QgaW5pdGlhbGlzZWQnKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgc2hvd1BhZ2VMb2FkZXIoKTogdm9pZCB7XG4gICAgY29uc3QgYnJhbmQgPSB0aGlzLnBhdGhDYXRlZ29yaXNhdGlvblNlcnZpY2UuZ2V0Q3VzdG9tZXJCcmFuZCgpO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBlbmFibGVfbG9hZGVyOiB0aGlzLmVuYWJsZUxvYWRlcixcbiAgICAgIGVuYWJsZV9tYXNrOiB0aGlzLmVuYWJsZU1hc2ssXG4gICAgICBsb2FkZXJfbWVzc2FnZTogdGhpcy5tZXNzYWdlcyxcbiAgICAgIGJyYW5kOiBicmFuZCxcbiAgICAgIHNlbGVjdG9yOiB0aGlzLnBhZ2VMb2FkZXJJRCxcbiAgICB9O1xuICAgIHRoaXMubG9hZGVyT2JqLnNob3dQYWdlTG9hZGVyKG9wdGlvbnMpO1xuICB9XG5cbiAgcHJpdmF0ZSBoaWRlUGFnZUxvYWRlcigpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubG9hZGVyT2JqLmhpZGVQYWdlTG9hZGVyKCk7XG4gICAgfSwgMjUwKTtcbiAgfVxufVxuIl19