import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputComponent } from './input.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@ngx-translate/core";
function InputAtomicComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵattribute("data-cy", ctx_r0.messageGroup + ".error." + ctx_r0.key);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, ctx_r0.getText()), "\n");
} }
export class InputAtomicComponent extends InputComponent {
    static ɵfac = /*@__PURE__*/ (() => { let ɵInputAtomicComponent_BaseFactory; return function InputAtomicComponent_Factory(t) { return (ɵInputAtomicComponent_BaseFactory || (ɵInputAtomicComponent_BaseFactory = i0.ɵɵgetInheritedFactory(InputAtomicComponent)))(t || InputAtomicComponent); }; })();
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputAtomicComponent, selectors: [["tg-form-input-atomic"]], features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputAtomicComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 8, vars: 11, consts: [[1, "label-input-flow"], [1, "text-flow--label", 3, "for"], [1, "form__input-container"], ["type", "text", "required", "required", 1, "Form__input", "form-control", 3, "id", "ngModel", "ngClass", "placeholder", "ngModelChange"], ["class", "form__msg--error form__input__invalid-message", 4, "ngIf"], [1, "form__msg--error", "form__input__invalid-message"]], template: function InputAtomicComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "label", 1);
            i0.ɵɵtext(2);
            i0.ɵɵpipe(3, "translate");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(4, "div", 2)(5, "input", 3);
            i0.ɵɵlistener("ngModelChange", function InputAtomicComponent_Template_input_ngModelChange_5_listener($event) { return ctx.updateValue($event); })("ngModelChange", function InputAtomicComponent_Template_input_ngModelChange_5_listener($event) { return ctx.value = $event; });
            i0.ɵɵpipe(6, "translate");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(7, InputAtomicComponent_div_7_Template, 3, 4, "div", 4);
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵpropertyInterpolate("for", ctx.key);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 7, ctx.getLabel()));
            i0.ɵɵadvance(3);
            i0.ɵɵpropertyInterpolate("id", ctx.key);
            i0.ɵɵproperty("ngModel", ctx.value)("ngClass", ctx.error ? "error" : "")("placeholder", ctx.showPlaceHolder ? i0.ɵɵpipeBind1(6, 9, ctx.getPlaceholder()) : "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.error);
        } }, dependencies: [i1.NgClass, i1.NgIf, i2.DefaultValueAccessor, i2.NgControlStatus, i2.RequiredValidator, i2.NgModel, i3.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputAtomicComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-input-atomic', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputAtomicComponent),
                        multi: true,
                    },
                ], template: "<div class=\"label-input-flow\">\n  <label for=\"{{ key }}\" class=\"text-flow--label\">{{ getLabel() | translate}}</label>\n</div>\n<div class=\"form__input-container\">\n  <input\n    id=\"{{ key }}\"\n    type=\"text\"\n    class=\"Form__input form-control\"\n    required=\"required\"\n    (ngModelChange)=\"updateValue($event)\"\n    [(ngModel)]=\"value\"\n    [ngClass]=\"error ? 'error' : ''\"\n    [placeholder]=\"showPlaceHolder ? (getPlaceholder() | translate) : ''\" />\n</div>\n<div\n  [attr.data-cy]=\"messageGroup + '.error.' + key\"\n  class=\"form__msg--error form__input__invalid-message\"\n  *ngIf=\"error\">\n  {{ getText() | translate}}\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputAtomicComponent, { className: "InputAtomicComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtYXRvbWljLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250cm9scy9pbnB1dC9pbnB1dC1hdG9taWMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xzL2lucHV0L2lucHV0LWF0b21pYy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7O0lDWW5ELDhCQUdnQjtJQUNkLFlBQ0Y7O0lBQUEsaUJBQU07OztJQUpKLHVFQUErQztJQUcvQyxjQUNGO0lBREUsd0VBQ0Y7O0FESkEsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGNBQWM7Nk9BQTNDLG9CQUFvQixTQUFwQixvQkFBb0I7NkRBQXBCLG9CQUFvQiwwRUFScEI7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztvQkFDbkQsS0FBSyxFQUFFLElBQUk7aUJBQ1o7YUFDRjtZQ2JILDhCQUE4QixlQUFBO1lBQ29CLFlBQTJCOztZQUFBLGlCQUFRLEVBQUE7WUFFckYsOEJBQW1DLGVBQUE7WUFNL0Isc0hBQWlCLHVCQUFtQixJQUFDLCtIQUFBOztZQUx2QyxpQkFRMEUsRUFBQTtZQUU1RSxxRUFLTTs7WUFsQkcsY0FBZTtZQUFmLHdDQUFlO1lBQTBCLGNBQTJCO1lBQTNCLDBEQUEyQjtZQUl6RSxlQUFjO1lBQWQsdUNBQWM7WUFLZCxtQ0FBbUIscUNBQUEsc0ZBQUE7WUFPcEIsZUFBVztZQUFYLGdDQUFXOzs7aUZERkQsb0JBQW9CO2NBWGhDLFNBQVM7MkJBQ0Usc0JBQXNCLGFBRXJCO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLHFCQUFxQixDQUFDO3dCQUNuRCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjs7a0ZBRVUsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9pbnB1dC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0Zy1mb3JtLWlucHV0LWF0b21pYycsXG4gIHRlbXBsYXRlVXJsOiAnaW5wdXQtYXRvbWljLmh0bWwnLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IElucHV0QXRvbWljQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIElucHV0QXRvbWljQ29tcG9uZW50IGV4dGVuZHMgSW5wdXRDb21wb25lbnQge31cbiIsIjxkaXYgY2xhc3M9XCJsYWJlbC1pbnB1dC1mbG93XCI+XG4gIDxsYWJlbCBmb3I9XCJ7eyBrZXkgfX1cIiBjbGFzcz1cInRleHQtZmxvdy0tbGFiZWxcIj57eyBnZXRMYWJlbCgpIHwgdHJhbnNsYXRlfX08L2xhYmVsPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiZm9ybV9faW5wdXQtY29udGFpbmVyXCI+XG4gIDxpbnB1dFxuICAgIGlkPVwie3sga2V5IH19XCJcbiAgICB0eXBlPVwidGV4dFwiXG4gICAgY2xhc3M9XCJGb3JtX19pbnB1dCBmb3JtLWNvbnRyb2xcIlxuICAgIHJlcXVpcmVkPVwicmVxdWlyZWRcIlxuICAgIChuZ01vZGVsQ2hhbmdlKT1cInVwZGF0ZVZhbHVlKCRldmVudClcIlxuICAgIFsobmdNb2RlbCldPVwidmFsdWVcIlxuICAgIFtuZ0NsYXNzXT1cImVycm9yID8gJ2Vycm9yJyA6ICcnXCJcbiAgICBbcGxhY2Vob2xkZXJdPVwic2hvd1BsYWNlSG9sZGVyID8gKGdldFBsYWNlaG9sZGVyKCkgfCB0cmFuc2xhdGUpIDogJydcIiAvPlxuPC9kaXY+XG48ZGl2XG4gIFthdHRyLmRhdGEtY3ldPVwibWVzc2FnZUdyb3VwICsgJy5lcnJvci4nICsga2V5XCJcbiAgY2xhc3M9XCJmb3JtX19tc2ctLWVycm9yIGZvcm1fX2lucHV0X19pbnZhbGlkLW1lc3NhZ2VcIlxuICAqbmdJZj1cImVycm9yXCI+XG4gIHt7IGdldFRleHQoKSB8IHRyYW5zbGF0ZX19XG48L2Rpdj5cbiJdfQ==