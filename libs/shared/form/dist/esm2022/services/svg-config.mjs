import { Injectable, Inject } from '@angular/core';
import { InlineSVGConfig } from 'ng-inline-svg-2';
import * as i0 from "@angular/core";
export class SvgConfig extends InlineSVGConfig {
    imageBasePath;
    // Do what ever conditions you need to set this, e.g. checking for server-side rendering
    // and only set baseURL when server-side rendered if you want.
    constructor(imageBasePath) {
        super();
        this.imageBasePath = imageBasePath;
        // When the server-side rendered app runs on localhost:3000, make sure baseURL is
        // http://localhost:3000 and make sure the Express server is configured properly to
        // allow the URL of the asset folders storing the SVG files.
        this.baseUrl = this.imageBasePath || '';
        // If you don't want the directive to run on the server side.
        this.clientOnly = true;
    }
    static ɵfac = function SvgConfig_Factory(t) { return new (t || SvgConfig)(i0.ɵɵinject('IMAGE_BASE_PATH')); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SvgConfig, factory: SvgConfig.ɵfac });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SvgConfig, [{
        type: Injectable
    }], () => [{ type: undefined, decorators: [{
                type: Inject,
                args: ['IMAGE_BASE_PATH']
            }] }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2aWNlcy9zdmctY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFHbEQsTUFBTSxPQUFPLFNBQVUsU0FBUSxlQUFlO0lBSVk7SUFIeEQsd0ZBQXdGO0lBQ3hGLDhEQUE4RDtJQUU5RCxZQUF3RCxhQUFxQjtRQUMzRSxLQUFLLEVBQUUsQ0FBQztRQUQ4QyxrQkFBYSxHQUFiLGFBQWEsQ0FBUTtRQUczRSxpRkFBaUY7UUFDakYsbUZBQW1GO1FBQ25GLDREQUE0RDtRQUM1RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLElBQUksRUFBRSxDQUFDO1FBRXhDLDZEQUE2RDtRQUM3RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDO21FQWRVLFNBQVMsY0FJQSxpQkFBaUI7Z0VBSjFCLFNBQVMsV0FBVCxTQUFTOztpRkFBVCxTQUFTO2NBRHJCLFVBQVU7O3NCQUtJLE1BQU07dUJBQUMsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbmxpbmVTVkdDb25maWcgfSBmcm9tICduZy1pbmxpbmUtc3ZnLTInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3ZnQ29uZmlnIGV4dGVuZHMgSW5saW5lU1ZHQ29uZmlnIHtcbiAgLy8gRG8gd2hhdCBldmVyIGNvbmRpdGlvbnMgeW91IG5lZWQgdG8gc2V0IHRoaXMsIGUuZy4gY2hlY2tpbmcgZm9yIHNlcnZlci1zaWRlIHJlbmRlcmluZ1xuICAvLyBhbmQgb25seSBzZXQgYmFzZVVSTCB3aGVuIHNlcnZlci1zaWRlIHJlbmRlcmVkIGlmIHlvdSB3YW50LlxuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ0lNQUdFX0JBU0VfUEFUSCcpIHByaXZhdGUgcmVhZG9ubHkgaW1hZ2VCYXNlUGF0aDogc3RyaW5nKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8vIFdoZW4gdGhlIHNlcnZlci1zaWRlIHJlbmRlcmVkIGFwcCBydW5zIG9uIGxvY2FsaG9zdDozMDAwLCBtYWtlIHN1cmUgYmFzZVVSTCBpc1xuICAgIC8vIGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMCBhbmQgbWFrZSBzdXJlIHRoZSBFeHByZXNzIHNlcnZlciBpcyBjb25maWd1cmVkIHByb3Blcmx5IHRvXG4gICAgLy8gYWxsb3cgdGhlIFVSTCBvZiB0aGUgYXNzZXQgZm9sZGVycyBzdG9yaW5nIHRoZSBTVkcgZmlsZXMuXG4gICAgdGhpcy5iYXNlVXJsID0gdGhpcy5pbWFnZUJhc2VQYXRoIHx8ICcnO1xuXG4gICAgLy8gSWYgeW91IGRvbid0IHdhbnQgdGhlIGRpcmVjdGl2ZSB0byBydW4gb24gdGhlIHNlcnZlciBzaWRlLlxuICAgIHRoaXMuY2xpZW50T25seSA9IHRydWU7XG4gIH1cbn1cbiJdfQ==