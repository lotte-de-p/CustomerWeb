import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ModuleFederatedDebugInfoService } from './module-federated-debug-info.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function ModuleFederatedDebugInfoComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "h3");
    i0.ɵɵtext(2, "Shared libraries");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 2);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "json");
    i0.ɵɵpipe(6, "async");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 1, i0.ɵɵpipeBind1(6, 3, ctx_r0.sharedLibraries$)));
} }
export class ModuleFederatedDebugInfoComponent {
    debugInfoService = inject(ModuleFederatedDebugInfoService);
    isDebug$ = this.debugInfoService.isDebug$;
    sharedLibraries$ = this.debugInfoService.sharedLibraries$;
    static ɵfac = function ModuleFederatedDebugInfoComponent_Factory(t) { return new (t || ModuleFederatedDebugInfoComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ModuleFederatedDebugInfoComponent, selectors: [["app-debug-info"]], decls: 2, vars: 3, consts: [["class", "horizontal-center-align flex-direction--column align-items--center background-dark-brown color-white border-radius__all--l p--m", 4, "ngIf"], [1, "horizontal-center-align", "flex-direction--column", "align-items--center", "background-dark-brown", "color-white", "border-radius__all--l", "p--m"], [1, "pre"]], template: function ModuleFederatedDebugInfoComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ModuleFederatedDebugInfoComponent_div_0_Template, 7, 5, "div", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.isDebug$));
        } }, dependencies: [i1.NgIf, i1.AsyncPipe, i1.JsonPipe], styles: [".pre[_ngcontent-%COMP%]{white-space:pre}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModuleFederatedDebugInfoComponent, [{
        type: Component,
        args: [{ selector: 'app-debug-info', template: ` <div
    *ngIf="isDebug$ | async"
    class="horizontal-center-align flex-direction--column align-items--center background-dark-brown color-white border-radius__all--l p--m">
    <h3>Shared libraries</h3>
    <p class="pre">{{ sharedLibraries$ | async | json }}</p>
  </div>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".pre{white-space:pre}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ModuleFederatedDebugInfoComponent, { className: "ModuleFederatedDebugInfoComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLWZlZGVyYXRlZC1kZWJ1Zy1pbmZvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvcGFnZS9tb2R1bGUtZmVkZXJhdGVkLWRlYnVnLWluZm8vbW9kdWxlLWZlZGVyYXRlZC1kZWJ1Zy1pbmZvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7OztJQUkxRSw4QkFFOEgsU0FBQTtJQUNwSSxnQ0FBZ0I7SUFBQSxpQkFBSztJQUN6Qiw0QkFBZTtJQUFBLFlBQXFDOzs7SUFBQSxpQkFBSSxFQUFBOzs7SUFBekMsZUFBcUM7SUFBckMseUZBQXFDOztBQVd4RCxNQUFNLE9BQU8saUNBQWlDO0lBQzNCLGdCQUFnQixHQUFHLE1BQU0sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0lBQzVFLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDO0lBQzFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQzsyRkFIL0MsaUNBQWlDOzZEQUFqQyxpQ0FBaUM7WUFmaEMsa0ZBS047OztZQUpILHlEQUFzQjs7O2lGQWNkLGlDQUFpQztjQWpCN0MsU0FBUzsyQkFDRSxnQkFBZ0IsWUFDaEI7Ozs7O1NBS0gsbUJBQ1UsdUJBQXVCLENBQUMsTUFBTTs7a0ZBU3BDLGlDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIGluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kdWxlRmVkZXJhdGVkRGVidWdJbmZvU2VydmljZSB9IGZyb20gJy4vbW9kdWxlLWZlZGVyYXRlZC1kZWJ1Zy1pbmZvLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZGVidWctaW5mbycsXG4gIHRlbXBsYXRlOiBgIDxkaXZcbiAgICAqbmdJZj1cImlzRGVidWckIHwgYXN5bmNcIlxuICAgIGNsYXNzPVwiaG9yaXpvbnRhbC1jZW50ZXItYWxpZ24gZmxleC1kaXJlY3Rpb24tLWNvbHVtbiBhbGlnbi1pdGVtcy0tY2VudGVyIGJhY2tncm91bmQtZGFyay1icm93biBjb2xvci13aGl0ZSBib3JkZXItcmFkaXVzX19hbGwtLWwgcC0tbVwiPlxuICAgIDxoMz5TaGFyZWQgbGlicmFyaWVzPC9oMz5cbiAgICA8cCBjbGFzcz1cInByZVwiPnt7IHNoYXJlZExpYnJhcmllcyQgfCBhc3luYyB8IGpzb24gfX08L3A+XG4gIDwvZGl2PmAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICAucHJlIHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IHByZTtcbiAgICAgIH1cbiAgICBgLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBNb2R1bGVGZWRlcmF0ZWREZWJ1Z0luZm9Db21wb25lbnQge1xuICBwcml2YXRlIHJlYWRvbmx5IGRlYnVnSW5mb1NlcnZpY2UgPSBpbmplY3QoTW9kdWxlRmVkZXJhdGVkRGVidWdJbmZvU2VydmljZSk7XG4gIGlzRGVidWckID0gdGhpcy5kZWJ1Z0luZm9TZXJ2aWNlLmlzRGVidWckO1xuICBzaGFyZWRMaWJyYXJpZXMkID0gdGhpcy5kZWJ1Z0luZm9TZXJ2aWNlLnNoYXJlZExpYnJhcmllcyQ7XG59XG4iXX0=