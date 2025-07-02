import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractCheckboxComponent } from '../abstract-checkbox.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@ngx-translate/core";
function InputCheckboxDefaultComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "span", 3);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 1, ctx_r0.getText()));
} }
function InputCheckboxDefaultComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 4)(2, "div", 5)(3, "input", 6);
    i0.ɵɵlistener("click", function InputCheckboxDefaultComponent_ng_container_1_Template_input_click_3_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const option_r2 = restoredCtx.$implicit; const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.selectOption(option_r2)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "label", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "label", 8);
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("id", ctx_r1.key + i_r3);
    i0.ɵɵproperty("checked", ctx_r1.selectedOptions.includes(option_r2));
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", ctx_r1.key + i_r3);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", ctx_r1.key + i_r3);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(6, 5, ctx_r1.getOptionLabel(option_r2)), i0.ɵɵsanitizeHtml);
} }
export class InputCheckboxDefaultComponent extends AbstractCheckboxComponent {
    static ɵfac = /*@__PURE__*/ (() => { let ɵInputCheckboxDefaultComponent_BaseFactory; return function InputCheckboxDefaultComponent_Factory(t) { return (ɵInputCheckboxDefaultComponent_BaseFactory || (ɵInputCheckboxDefaultComponent_BaseFactory = i0.ɵɵgetInheritedFactory(InputCheckboxDefaultComponent)))(t || InputCheckboxDefaultComponent); }; })();
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputCheckboxDefaultComponent, selectors: [["tg-form-checkbox"]], features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputCheckboxDefaultComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 2, consts: [["class", "notification notification--errorfield", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "notification", "notification--errorfield"], [1, "icon", "icon-error-shape", "errorfield"], [1, "radio-checkbox"], [1, "form__checkbox", 2, "--animation-delay", "i"], ["name", "checkbox-group-name", "type", "checkbox", 1, "form__checkbox__input", 3, "checked", "id", "click"], [1, "form__checkbox__label", 3, "for"], [1, "label--large", 3, "innerHTML", "for"]], template: function InputCheckboxDefaultComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, InputCheckboxDefaultComponent_div_0_Template, 4, 3, "div", 0)(1, InputCheckboxDefaultComponent_ng_container_1_Template, 7, 7, "ng-container", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.error);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.optionList);
        } }, dependencies: [i1.NgForOf, i1.NgIf, i2.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputCheckboxDefaultComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-checkbox', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputCheckboxDefaultComponent),
                        multi: true,
                    },
                ], template: "<div *ngIf=\"error\" class=\"notification notification--errorfield\">\n  <span class=\"icon icon-error-shape errorfield\">{{ getText() | translate }}</span>\n</div>\n<ng-container *ngFor=\"let option of optionList; let i = index\">\n  <div class=\"radio-checkbox\">\n    <div class=\"form__checkbox\" style=\"--animation-delay: i\">\n      <input\n        (click)=\"selectOption(option)\"\n        [checked]=\"selectedOptions.includes(option)\"\n        class=\"form__checkbox__input\"\n        id=\"{{ key + i }}\"\n        name=\"checkbox-group-name\"\n        type=\"checkbox\" />\n      <label class=\"form__checkbox__label\" for=\"{{ key + i }}\"></label>\n    </div>\n    <label [innerHTML]=\"getOptionLabel(option) | translate\" class=\"label--large\" for=\"{{ key + i }}\"> </label>\n  </div>\n</ng-container>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputCheckboxDefaultComponent, { className: "InputCheckboxDefaultComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29udHJvbHMvcmFkaW8tY2hlY2tib3gvY2hlY2tib3gvZGVmYXVsdC9kZWZhdWx0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb250cm9scy9yYWRpby1jaGVja2JveC9jaGVja2JveC9kZWZhdWx0L2RlZmF1bHQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7O0lDRjNFLDhCQUFpRSxjQUFBO0lBQ2hCLFlBQTJCOztJQUFBLGlCQUFPLEVBQUE7OztJQUFsQyxlQUEyQjtJQUEzQiw0REFBMkI7Ozs7SUFFNUUsNkJBQStEO0lBQzdELDhCQUE0QixhQUFBLGVBQUE7SUFHdEIsK09BQVMsZUFBQSw4QkFBb0IsQ0FBQSxJQUFDO0lBRGhDLGlCQU1vQjtJQUNwQiwyQkFBaUU7SUFDbkUsaUJBQU07SUFDTiwyQkFBMEc7O0lBQzVHLGlCQUFNO0lBQ1IsMEJBQWU7Ozs7O0lBUFAsZUFBa0I7SUFBbEIsaURBQWtCO0lBRmxCLG9FQUE0QztJQUtULGNBQW1CO0lBQW5CLGtEQUFtQjtJQUVtQixjQUFtQjtJQUFuQixrREFBbUI7SUFBekYscUdBQWdEOztBREEzRCxNQUFNLE9BQU8sNkJBQThCLFNBQVEseUJBQXlCO2lSQUEvRCw2QkFBNkIsU0FBN0IsNkJBQTZCOzZEQUE3Qiw2QkFBNkIsc0VBUjdCO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsNkJBQTZCLENBQUM7b0JBQzVELEtBQUssRUFBRSxJQUFJO2lCQUNaO2FBQ0Y7WUNiSCw4RUFFTSxtRkFBQTs7WUFGQSxnQ0FBVztZQUdnQixjQUFlO1lBQWYsd0NBQWU7OztpRkRZbkMsNkJBQTZCO2NBWHpDLFNBQVM7MkJBQ0Usa0JBQWtCLGFBRWpCO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLDhCQUE4QixDQUFDO3dCQUM1RCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjs7a0ZBRVUsNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFic3RyYWN0Q2hlY2tib3hDb21wb25lbnQgfSBmcm9tICcuLi9hYnN0cmFjdC1jaGVja2JveC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0Zy1mb3JtLWNoZWNrYm94JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RlZmF1bHQuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IElucHV0Q2hlY2tib3hEZWZhdWx0Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIElucHV0Q2hlY2tib3hEZWZhdWx0Q29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RDaGVja2JveENvbXBvbmVudCB7fVxuIiwiPGRpdiAqbmdJZj1cImVycm9yXCIgY2xhc3M9XCJub3RpZmljYXRpb24gbm90aWZpY2F0aW9uLS1lcnJvcmZpZWxkXCI+XG4gIDxzcGFuIGNsYXNzPVwiaWNvbiBpY29uLWVycm9yLXNoYXBlIGVycm9yZmllbGRcIj57eyBnZXRUZXh0KCkgfCB0cmFuc2xhdGUgfX08L3NwYW4+XG48L2Rpdj5cbjxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBvcHRpb25MaXN0OyBsZXQgaSA9IGluZGV4XCI+XG4gIDxkaXYgY2xhc3M9XCJyYWRpby1jaGVja2JveFwiPlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtX19jaGVja2JveFwiIHN0eWxlPVwiLS1hbmltYXRpb24tZGVsYXk6IGlcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICAoY2xpY2spPVwic2VsZWN0T3B0aW9uKG9wdGlvbilcIlxuICAgICAgICBbY2hlY2tlZF09XCJzZWxlY3RlZE9wdGlvbnMuaW5jbHVkZXMob3B0aW9uKVwiXG4gICAgICAgIGNsYXNzPVwiZm9ybV9fY2hlY2tib3hfX2lucHV0XCJcbiAgICAgICAgaWQ9XCJ7eyBrZXkgKyBpIH19XCJcbiAgICAgICAgbmFtZT1cImNoZWNrYm94LWdyb3VwLW5hbWVcIlxuICAgICAgICB0eXBlPVwiY2hlY2tib3hcIiAvPlxuICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybV9fY2hlY2tib3hfX2xhYmVsXCIgZm9yPVwie3sga2V5ICsgaSB9fVwiPjwvbGFiZWw+XG4gICAgPC9kaXY+XG4gICAgPGxhYmVsIFtpbm5lckhUTUxdPVwiZ2V0T3B0aW9uTGFiZWwob3B0aW9uKSB8IHRyYW5zbGF0ZVwiIGNsYXNzPVwibGFiZWwtLWxhcmdlXCIgZm9yPVwie3sga2V5ICsgaSB9fVwiPiA8L2xhYmVsPlxuICA8L2Rpdj5cbjwvbmctY29udGFpbmVyPlxuIl19