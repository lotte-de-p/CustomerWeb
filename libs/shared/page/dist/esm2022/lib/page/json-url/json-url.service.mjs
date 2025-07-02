import { Inject, Injectable } from '@angular/core';
import { from } from 'rxjs';
import * as i0 from "@angular/core";
export class JsonUrlService {
    window;
    static JSON_URL = 'JsonUrl';
    libng;
    constructor(window) {
        this.window = window;
        this.libng =
            this.window[JsonUrlService.JSON_URL] &&
                this.window[JsonUrlService.JSON_URL]('lzma');
    }
    compress(object) {
        return from(this.libng.compress(object));
    }
    decompress(compressedString) {
        return from(this.libng.decompress(compressedString));
    }
    static ɵfac = function JsonUrlService_Factory(t) { return new (t || JsonUrlService)(i0.ɵɵinject('Window')); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: JsonUrlService, factory: JsonUrlService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(JsonUrlService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: Window, decorators: [{
                type: Inject,
                args: ['Window']
            }] }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi11cmwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvcGFnZS9qc29uLXVybC9qc29uLXVybC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxJQUFJLEVBQWMsTUFBTSxNQUFNLENBQUM7O0FBR3hDLE1BQU0sT0FBTyxjQUFjO0lBSXNCO0lBSHZDLE1BQU0sQ0FBVSxRQUFRLEdBQUcsU0FBUyxDQUFDO0lBQzVCLEtBQUssQ0FBQztJQUV2QixZQUErQyxNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUMzRCxJQUFJLENBQUMsS0FBSztZQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQXdCLENBQUM7Z0JBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQXdCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsUUFBUSxDQUFDLE1BQWU7UUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFXLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsVUFBVSxDQUFDLGdCQUF3QjtRQUNqQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQzt3RUFoQlUsY0FBYyxjQUlMLFFBQVE7Z0VBSmpCLGNBQWMsV0FBZCxjQUFjLG1CQURELE1BQU07O2lGQUNuQixjQUFjO2NBRDFCLFVBQVU7ZUFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7O3NCQUtuQixNQUFNO3VCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb20sIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBKc29uVXJsU2VydmljZSB7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEpTT05fVVJMID0gJ0pzb25VcmwnO1xuICBwcml2YXRlIHJlYWRvbmx5IGxpYm5nO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ1dpbmRvdycpIHByaXZhdGUgcmVhZG9ubHkgd2luZG93OiBXaW5kb3cpIHtcbiAgICB0aGlzLmxpYm5nID1cbiAgICAgIHRoaXMud2luZG93W0pzb25VcmxTZXJ2aWNlLkpTT05fVVJMIGFzIGtleW9mIFdpbmRvd10gJiZcbiAgICAgIHRoaXMud2luZG93W0pzb25VcmxTZXJ2aWNlLkpTT05fVVJMIGFzIGtleW9mIFdpbmRvd10oJ2x6bWEnKTtcbiAgfVxuXG4gIGNvbXByZXNzKG9iamVjdDogdW5rbm93bik6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIGZyb20odGhpcy5saWJuZy5jb21wcmVzcyhvYmplY3QpIGFzIHN0cmluZyk7XG4gIH1cblxuICBkZWNvbXByZXNzKGNvbXByZXNzZWRTdHJpbmc6IHN0cmluZyk6IE9ic2VydmFibGU8dW5rbm93bj4ge1xuICAgIHJldHVybiBmcm9tKHRoaXMubGlibmcuZGVjb21wcmVzcyhjb21wcmVzc2VkU3RyaW5nKSk7XG4gIH1cbn1cbiJdfQ==