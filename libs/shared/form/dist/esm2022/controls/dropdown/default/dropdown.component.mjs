import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractDropdownComponent } from '../abstract-dropdown.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@ngx-translate/core";
function DropdownComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div")(2, "label", 8);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r0.labelStyle);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", ctx_r0.key);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 5, ctx_r0.getLabel()));
} }
function DropdownComponent_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("value", option_r3.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", option_r3.label, " ");
} }
function DropdownComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r2.getText()), " ");
} }
export class DropdownComponent extends AbstractDropdownComponent {
    static ɵfac = /*@__PURE__*/ (() => { let ɵDropdownComponent_BaseFactory; return function DropdownComponent_Factory(t) { return (ɵDropdownComponent_BaseFactory || (ɵDropdownComponent_BaseFactory = i0.ɵɵgetInheritedFactory(DropdownComponent)))(t || DropdownComponent); }; })();
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DropdownComponent, selectors: [["tg-form-dropdown"]], features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => DropdownComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 10, vars: 10, consts: [[1, "form-group"], [4, "ngIf"], [1, "select-dropdown-section", 2, "border-bottom", "0"], ["required", "required", 1, "form-control", "select-dropdown", 3, "ngModel", "id", "name", "ngModelChange"], ["selected", "", "value", "", 1, "placeholder-option", 3, "hidden"], [3, "value", 4, "ngFor", "ngForOf"], [1, "icon", "icon-chevron-down", "position--absolute", "text--m", "text-weight--g"], ["class", "formErrorInput Form__input__invalid-message", 4, "ngIf"], [1, "text-flow--label", 3, "for"], [3, "value"], [1, "formErrorInput", "Form__input__invalid-message"]], template: function DropdownComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, DropdownComponent_div_1_Template, 5, 7, "div", 1);
            i0.ɵɵelementStart(2, "div", 2)(3, "select", 3);
            i0.ɵɵlistener("ngModelChange", function DropdownComponent_Template_select_ngModelChange_3_listener($event) { return ctx.updateValue($event); })("ngModelChange", function DropdownComponent_Template_select_ngModelChange_3_listener($event) { return ctx.value = $event; });
            i0.ɵɵelementStart(4, "option", 4);
            i0.ɵɵtext(5);
            i0.ɵɵpipe(6, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(7, DropdownComponent_option_7_Template, 2, 2, "option", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(8, "div", 6);
            i0.ɵɵtemplate(9, DropdownComponent_div_9_Template, 3, 3, "div", 7);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.customLabel);
            i0.ɵɵadvance(2);
            i0.ɵɵpropertyInterpolate("id", ctx.key);
            i0.ɵɵpropertyInterpolate("name", ctx.key);
            i0.ɵɵproperty("ngModel", ctx.value);
            i0.ɵɵadvance();
            i0.ɵɵproperty("hidden", !ctx.showPlaceHolder);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 8, ctx.getPlaceholder()), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.optionList);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.error);
        } }, dependencies: [i1.NgForOf, i1.NgIf, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.RequiredValidator, i2.NgModel, i3.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DropdownComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-dropdown', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => DropdownComponent),
                        multi: true,
                    },
                ], template: "<div class=\"form-group\">\n  <div *ngIf=\"customLabel\">\n    <div class=\"{{ labelStyle }}\">\n      <label class=\"text-flow--label\" for=\"{{ key }}\">{{ getLabel() | translate }}</label>\n    </div>\n  </div>\n  <div class=\"select-dropdown-section\" style=\"border-bottom: 0\">\n    <select\n      (ngModelChange)=\"updateValue($event)\"\n      [(ngModel)]=\"value\"\n      class=\"form-control select-dropdown\"\n      id=\"{{ key }}\"\n      name=\"{{ key }}\"\n      required=\"required\">\n      <option class=\"placeholder-option\" [hidden]=\"!showPlaceHolder\" selected value=\"\">\n        {{ getPlaceholder() | translate }}\n      </option>\n      <option *ngFor=\"let option of optionList; let i = index\" value=\"{{ option.value }}\">\n        {{ option.label }}\n      </option>\n    </select>\n    <div class=\"icon icon-chevron-down position--absolute text--m text-weight--g\"></div>\n    <div class=\"formErrorInput Form__input__invalid-message\" *ngIf=\"error\">\n      {{ getText() | translate }}\n    </div>\n  </div>\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DropdownComponent, { className: "DropdownComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xzL2Ryb3Bkb3duL2RlZmF1bHQvZHJvcGRvd24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xzL2Ryb3Bkb3duL2RlZmF1bHQvZHJvcGRvd24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7OztJQ0R6RSwyQkFBeUIsVUFBQSxlQUFBO0lBRTJCLFlBQTRCOztJQUFBLGlCQUFRLEVBQUEsRUFBQTs7O0lBRGpGLGNBQXdCO0lBQXhCLGdDQUF3QjtJQUNLLGNBQWU7SUFBZiwyQ0FBZTtJQUFDLGNBQTRCO0lBQTVCLDZEQUE0Qjs7O0lBYzVFLGlDQUFvRjtJQUNsRixZQUNGO0lBQUEsaUJBQVM7OztJQUZnRCxrREFBMEI7SUFDakYsY0FDRjtJQURFLGdEQUNGOzs7SUFHRiwrQkFBdUU7SUFDckUsWUFDRjs7SUFBQSxpQkFBTTs7O0lBREosY0FDRjtJQURFLHVFQUNGOztBRFRKLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSx5QkFBeUI7aU9BQW5ELGlCQUFpQixTQUFqQixpQkFBaUI7NkRBQWpCLGlCQUFpQixzRUFSakI7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDaEQsS0FBSyxFQUFFLElBQUk7aUJBQ1o7YUFDRjtZQ2JILDhCQUF3QjtZQUN0QixrRUFJTTtZQUNOLDhCQUE4RCxnQkFBQTtZQUUxRCxvSEFBaUIsdUJBQW1CLElBQUMsNkhBQUE7WUFNckMsaUNBQWlGO1lBQy9FLFlBQ0Y7O1lBQUEsaUJBQVM7WUFDVCx3RUFFUztZQUNYLGlCQUFTO1lBQ1QseUJBQW9GO1lBQ3BGLGtFQUVNO1lBQ1IsaUJBQU0sRUFBQTs7WUF4QkEsY0FBaUI7WUFBakIsc0NBQWlCO1lBVW5CLGVBQWM7WUFBZCx1Q0FBYztZQUNkLHlDQUFnQjtZQUhoQixtQ0FBbUI7WUFLZ0IsY0FBMkI7WUFBM0IsNkNBQTJCO1lBQzVELGNBQ0Y7WUFERSwyRUFDRjtZQUMyQixlQUFlO1lBQWYsd0NBQWU7WUFLYyxlQUFXO1lBQVgsZ0NBQVc7OztpRkRQNUQsaUJBQWlCO2NBWDdCLFNBQVM7MkJBQ0Usa0JBQWtCLGFBRWpCO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGtCQUFrQixDQUFDO3dCQUNoRCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjs7a0ZBRVUsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFic3RyYWN0RHJvcGRvd25Db21wb25lbnQgfSBmcm9tICcuLi9hYnN0cmFjdC1kcm9wZG93bi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0Zy1mb3JtLWRyb3Bkb3duJyxcbiAgdGVtcGxhdGVVcmw6ICdkcm9wZG93bi5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRHJvcGRvd25Db21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRHJvcGRvd25Db21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdERyb3Bkb3duQ29tcG9uZW50IHt9XG4iLCI8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICA8ZGl2ICpuZ0lmPVwiY3VzdG9tTGFiZWxcIj5cbiAgICA8ZGl2IGNsYXNzPVwie3sgbGFiZWxTdHlsZSB9fVwiPlxuICAgICAgPGxhYmVsIGNsYXNzPVwidGV4dC1mbG93LS1sYWJlbFwiIGZvcj1cInt7IGtleSB9fVwiPnt7IGdldExhYmVsKCkgfCB0cmFuc2xhdGUgfX08L2xhYmVsPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInNlbGVjdC1kcm9wZG93bi1zZWN0aW9uXCIgc3R5bGU9XCJib3JkZXItYm90dG9tOiAwXCI+XG4gICAgPHNlbGVjdFxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwidXBkYXRlVmFsdWUoJGV2ZW50KVwiXG4gICAgICBbKG5nTW9kZWwpXT1cInZhbHVlXCJcbiAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIHNlbGVjdC1kcm9wZG93blwiXG4gICAgICBpZD1cInt7IGtleSB9fVwiXG4gICAgICBuYW1lPVwie3sga2V5IH19XCJcbiAgICAgIHJlcXVpcmVkPVwicmVxdWlyZWRcIj5cbiAgICAgIDxvcHRpb24gY2xhc3M9XCJwbGFjZWhvbGRlci1vcHRpb25cIiBbaGlkZGVuXT1cIiFzaG93UGxhY2VIb2xkZXJcIiBzZWxlY3RlZCB2YWx1ZT1cIlwiPlxuICAgICAgICB7eyBnZXRQbGFjZWhvbGRlcigpIHwgdHJhbnNsYXRlIH19XG4gICAgICA8L29wdGlvbj5cbiAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBvcHRpb25MaXN0OyBsZXQgaSA9IGluZGV4XCIgdmFsdWU9XCJ7eyBvcHRpb24udmFsdWUgfX1cIj5cbiAgICAgICAge3sgb3B0aW9uLmxhYmVsIH19XG4gICAgICA8L29wdGlvbj5cbiAgICA8L3NlbGVjdD5cbiAgICA8ZGl2IGNsYXNzPVwiaWNvbiBpY29uLWNoZXZyb24tZG93biBwb3NpdGlvbi0tYWJzb2x1dGUgdGV4dC0tbSB0ZXh0LXdlaWdodC0tZ1wiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtRXJyb3JJbnB1dCBGb3JtX19pbnB1dF9faW52YWxpZC1tZXNzYWdlXCIgKm5nSWY9XCJlcnJvclwiPlxuICAgICAge3sgZ2V0VGV4dCgpIHwgdHJhbnNsYXRlIH19XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=