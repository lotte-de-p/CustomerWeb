import { NgModule } from '@angular/core';
import { ImageSrcPathDirective } from './image-src-path.directive';
import * as i0 from "@angular/core";
export class ImageSrcPathModule {
    static forRoot(imagePath) {
        return {
            ngModule: ImageSrcPathModule,
            providers: [{ provide: 'IMAGE_BASE_PATH', useValue: imagePath }],
        };
    }
    static ɵfac = function ImageSrcPathModule_Factory(t) { return new (t || ImageSrcPathModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ImageSrcPathModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({});
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ImageSrcPathModule, [{
        type: NgModule,
        args: [{
                declarations: [ImageSrcPathDirective],
                imports: [],
                providers: [],
                exports: [ImageSrcPathDirective],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ImageSrcPathModule, { declarations: [ImageSrcPathDirective], exports: [ImageSrcPathDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utc3JjLXBhdGgubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9wYWdlL2Fzc2V0L2RpcmVjdGl2ZXMvaW1hZ2Utc3JjLXBhdGgvaW1hZ2Utc3JjLXBhdGgubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztBQVFuRSxNQUFNLE9BQU8sa0JBQWtCO0lBQzdCLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBaUI7UUFDOUIsT0FBTztZQUNMLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDO1NBQ2pFLENBQUM7SUFDSixDQUFDOzRFQU5VLGtCQUFrQjs0REFBbEIsa0JBQWtCOzs7aUZBQWxCLGtCQUFrQjtjQU45QixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMscUJBQXFCLENBQUM7Z0JBQ3JDLE9BQU8sRUFBRSxFQUFFO2dCQUNYLFNBQVMsRUFBRSxFQUFFO2dCQUNiLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO2FBQ2pDOzt3RkFDWSxrQkFBa0IsbUJBTGQscUJBQXFCLGFBRzFCLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbWFnZVNyY1BhdGhEaXJlY3RpdmUgfSBmcm9tICcuL2ltYWdlLXNyYy1wYXRoLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0ltYWdlU3JjUGF0aERpcmVjdGl2ZV0sXG4gIGltcG9ydHM6IFtdLFxuICBwcm92aWRlcnM6IFtdLFxuICBleHBvcnRzOiBbSW1hZ2VTcmNQYXRoRGlyZWN0aXZlXSxcbn0pXG5leHBvcnQgY2xhc3MgSW1hZ2VTcmNQYXRoTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoaW1hZ2VQYXRoOiBzdHJpbmcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEltYWdlU3JjUGF0aE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogSW1hZ2VTcmNQYXRoTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiAnSU1BR0VfQkFTRV9QQVRIJywgdXNlVmFsdWU6IGltYWdlUGF0aCB9XSxcbiAgICB9O1xuICB9XG59XG4iXX0=