import { Component } from '@angular/core';
import { AbstractDateOfBirthPickerComponent } from '../abstract-date-of-birth-picker.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "../../input/input.component";
import * as i4 from "../../../errors/form.directive";
import * as i5 from "@ngx-translate/core";
function DateOfBirthPickerComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵattribute("data-cy", "day-field-required-error");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, "ng.dob.error-day-required"), " ");
} }
function DateOfBirthPickerComponent_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵattribute("data-cy", "day-invalid-error");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, "ng.dob.error-day-invalid"), " ");
} }
function DateOfBirthPickerComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtemplate(1, DateOfBirthPickerComponent_div_6_div_1_Template, 3, 4, "div", 19)(2, DateOfBirthPickerComponent_div_6_div_2_Template, 3, 4, "div", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.form.controls["day"].errors == null ? null : ctx_r1.form.controls["day"].errors["required"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.form.controls["day"].errors == null ? null : ctx_r1.form.controls["day"].errors["invalidDate"]);
} }
function DateOfBirthPickerComponent_option_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 21);
    i0.ɵɵpipe(1, "number");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r10 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("value", i0.ɵɵpipeBind1(1, 2, option_r10.value));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", option_r10.label, " ");
} }
function DateOfBirthPickerComponent_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵattribute("data-cy", "month-of-birth-field-required-error");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, "ng.dob.error-month-required"), " ");
} }
function DateOfBirthPickerComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtemplate(1, DateOfBirthPickerComponent_div_17_div_1_Template, 3, 4, "div", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r4.form.controls["selectedMonth"].errors == null ? null : ctx_r4.form.controls["selectedMonth"].errors["required"]);
} }
function DateOfBirthPickerComponent_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵattribute("data-cy", "year-of-birth-field-required-error");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, "ng.dob.error-year-required"), " ");
} }
function DateOfBirthPickerComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtemplate(1, DateOfBirthPickerComponent_div_21_div_1_Template, 3, 4, "div", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r6.form.controls["year"].errors == null ? null : ctx_r6.form.controls["year"].errors["required"]);
} }
function DateOfBirthPickerComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18)(1, "div", 22);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵattribute("data-cy", "year-of-birth-field-invalid-error");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r7.form.errors == null ? null : ctx_r7.form.errors["invalidBirthDate"], " ");
} }
const _c0 = () => ({ maskValue: "d0", dropSpecialCharacters: true });
const _c1 = () => ({ maskValue: "0000", dropSpecialCharacters: true });
export class DateOfBirthPickerComponent extends AbstractDateOfBirthPickerComponent {
    static ɵfac = /*@__PURE__*/ (() => { let ɵDateOfBirthPickerComponent_BaseFactory; return function DateOfBirthPickerComponent_Factory(t) { return (ɵDateOfBirthPickerComponent_BaseFactory || (ɵDateOfBirthPickerComponent_BaseFactory = i0.ɵɵgetInheritedFactory(DateOfBirthPickerComponent)))(t || DateOfBirthPickerComponent); }; })();
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DateOfBirthPickerComponent, selectors: [["app-date-of-birth-picker"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 23, vars: 25, consts: [[3, "formGroup"], [1, "form-group", "dob-field"], [1, "dob-field__content", "text-align--left"], [1, "date-field-day"], ["labelPrefix", "dob.error", "formControlName", "day", 3, "hideLabel", "required", "showPlaceHolder", "showError", "mask"], ["day", ""], ["class", "formErrorInput", 4, "ngIf"], [1, "form-group", "dob-picker__selectdiv"], [1, "dob-picker__dropdowns", "ml-5"], [1, "select-dropdown-section", "display--flex"], ["id", "dob-month-mobile", "name", "dob-month-mobile", "formControlName", "selectedMonth", 1, "form-control", "select-dropdown", "mb-0"], ["selectedMonth", ""], ["value", "", "hidden", "", 1, "placeholder-option", 3, "selected"], ["selected", "", 3, "value", 4, "ngFor", "ngForOf"], [1, "icon", "icon-chevron-down", "position--absolute", "text--m", "text-weight--g"], [1, "date-field-year"], ["formControlName", "year", "labelPrefix", "dob.error", 3, "required", "hideLabel", "showPlaceHolder", "showError", "mask"], ["year", ""], [1, "formErrorInput"], ["class", "text--s", 4, "ngIf"], [1, "text--s"], ["selected", "", 3, "value"], [1, "text--s", "mt-5"]], template: function DateOfBirthPickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
            i0.ɵɵelement(4, "tg-form-input", 4, 5);
            i0.ɵɵtemplate(6, DateOfBirthPickerComponent_div_6_Template, 3, 2, "div", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "select", 10, 11)(12, "option", 12);
            i0.ɵɵtext(13);
            i0.ɵɵpipe(14, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(15, DateOfBirthPickerComponent_option_15_Template, 3, 4, "option", 13);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(16, "div", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(17, DateOfBirthPickerComponent_div_17_Template, 2, 1, "div", 6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(18, "div", 15);
            i0.ɵɵelement(19, "tg-form-input", 16, 17);
            i0.ɵɵtemplate(21, DateOfBirthPickerComponent_div_21_Template, 2, 1, "div", 6);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(22, DateOfBirthPickerComponent_div_22_Template, 3, 2, "div", 6);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("hideLabel", true)("required", true)("showPlaceHolder", true)("showError", false)("mask", i0.ɵɵpureFunction0(23, _c0));
            i0.ɵɵattribute("data-cy", "day-of-birth-field");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.form.controls["day"].errors && ctx.form.controls["day"].touched);
            i0.ɵɵadvance(4);
            i0.ɵɵattribute("data-cy", "month-of-birth-field");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("selected", true);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(14, 21, "ng.dob.lbl.select-month-placeholder"), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.options);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.form.controls["selectedMonth"].errors && ctx.form.controls["selectedMonth"].touched);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("required", true)("hideLabel", true)("showPlaceHolder", true)("showError", false)("mask", i0.ɵɵpureFunction0(24, _c1));
            i0.ɵɵattribute("data-cy", "year-of-birth-field");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.form.controls["year"].errors && ctx.form.controls["year"].touched);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.form.errors == null ? null : ctx.form.errors["invalidBirthDate"]);
        } }, dependencies: [i1.NgForOf, i1.NgIf, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.FormGroupDirective, i2.FormControlName, i3.InputComponent, i4.FormDirective, i1.DecimalPipe, i5.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DateOfBirthPickerComponent, [{
        type: Component,
        args: [{ selector: 'app-date-of-birth-picker', template: "<form [formGroup]=\"form\">\n  <div class=\"form-group dob-field\">\n    <div class=\"dob-field__content text-align--left\">\n      <div class=\"date-field-day\">\n        <tg-form-input\n          #day\n          labelPrefix=\"dob.error\"\n          formControlName=\"day\"\n          [attr.data-cy]=\"'day-of-birth-field'\"\n          [hideLabel]=\"true\"\n          [required]=\"true\"\n          [showPlaceHolder]=\"true\"\n          [showError]=\"false\"\n          [mask]=\"{ maskValue: 'd0', dropSpecialCharacters: true }\">\n        </tg-form-input>\n        <div class=\"formErrorInput\" *ngIf=\"form.controls['day'].errors && form.controls['day'].touched\">\n          <div\n            class=\"text--s\"\n            *ngIf=\"form.controls['day'].errors?.['required']\"\n            [attr.data-cy]=\"'day-field-required-error'\">\n            {{ 'ng.dob.error-day-required' | translate }}\n          </div>\n          <div\n            class=\"text--s\"\n            [attr.data-cy]=\"'day-invalid-error'\"\n            *ngIf=\"form.controls['day'].errors?.['invalidDate']\">\n            {{ 'ng.dob.error-day-invalid' | translate }}\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group dob-picker__selectdiv\">\n        <div class=\"dob-picker__dropdowns ml-5\">\n          <div class=\"select-dropdown-section display--flex\">\n            <select\n              #selectedMonth\n              id=\"dob-month-mobile\"\n              class=\"form-control select-dropdown mb-0\"\n              name=\"dob-month-mobile\"\n              formControlName=\"selectedMonth\"\n              [attr.data-cy]=\"'month-of-birth-field'\">\n              <option value=\"\" class=\"placeholder-option\" [selected]=\"true\" hidden>\n                {{ 'ng.dob.lbl.select-month-placeholder' | translate }}\n              </option>\n              <option selected *ngFor=\"let option of options\" value=\"{{ option.value | number }}\">\n                {{ option.label }}\n              </option>\n            </select>\n            <div class=\"icon icon-chevron-down position--absolute text--m text-weight--g\"></div>\n          </div>\n          <div\n            class=\"formErrorInput\"\n            *ngIf=\"form.controls['selectedMonth'].errors && form.controls['selectedMonth'].touched\">\n            <div\n              class=\"text--s\"\n              [attr.data-cy]=\"'month-of-birth-field-required-error'\"\n              *ngIf=\"form.controls['selectedMonth'].errors?.['required']\">\n              {{ 'ng.dob.error-month-required' | translate }}\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"date-field-year\">\n        <tg-form-input\n          #year\n          [required]=\"true\"\n          [hideLabel]=\"true\"\n          formControlName=\"year\"\n          [attr.data-cy]=\"'year-of-birth-field'\"\n          [showPlaceHolder]=\"true\"\n          [showError]=\"false\"\n          labelPrefix=\"dob.error\"\n          [mask]=\"{ maskValue: '0000', dropSpecialCharacters: true }\">\n        </tg-form-input>\n        <div class=\"formErrorInput\" *ngIf=\"form.controls['year'].errors && form.controls['year'].touched\">\n          <div\n            class=\"text--s\"\n            *ngIf=\"form.controls['year'].errors?.['required']\"\n            [attr.data-cy]=\"'year-of-birth-field-required-error'\">\n            {{ 'ng.dob.error-year-required' | translate }}\n          </div>\n        </div>\n      </div>\n    </div>\n    <div\n      class=\"formErrorInput\"\n      [attr.data-cy]=\"'year-of-birth-field-invalid-error'\"\n      *ngIf=\"this.form.errors?.['invalidBirthDate']\">\n      <div class=\"text--s mt-5\">\n        {{ this.form.errors?.['invalidBirthDate'] }}\n      </div>\n    </div>\n  </div>\n</form>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DateOfBirthPickerComponent, { className: "DateOfBirthPickerComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1vZi1iaXJ0aC1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xzL2RhdGUtb2YtYmlydGgtcGlja2VyL2RlZmF1bHQvZGF0ZS1vZi1iaXJ0aC1waWNrZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xzL2RhdGUtb2YtYmlydGgtcGlja2VyL2RlZmF1bHQvZGF0ZS1vZi1iaXJ0aC1waWNrZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7Ozs7Ozs7SUNldEYsK0JBRzhDO0lBQzVDLFlBQ0Y7O0lBQUEsaUJBQU07O0lBRkoscURBQTJDO0lBQzNDLGNBQ0Y7SUFERSxrRkFDRjs7O0lBQ0EsK0JBR3VEO0lBQ3JELFlBQ0Y7O0lBQUEsaUJBQU07O0lBSEosOENBQW9DO0lBRXBDLGNBQ0Y7SUFERSxpRkFDRjs7O0lBWkYsK0JBQWdHO0lBQzlGLGtGQUtNLHFFQUFBO0lBT1IsaUJBQU07OztJQVZELGNBQStDO0lBQS9DLHlIQUErQztJQU8vQyxjQUFrRDtJQUFsRCw0SEFBa0Q7OztJQWtCakQsa0NBQW9GOztJQUNsRixZQUNGO0lBQUEsaUJBQVM7OztJQUZ1Qyx5RUFBbUM7SUFDakYsZUFDRjtJQURFLGlEQUNGOzs7SUFPRiwrQkFHOEQ7SUFDNUQsWUFDRjs7SUFBQSxpQkFBTTs7SUFISixnRUFBc0Q7SUFFdEQsY0FDRjtJQURFLG9GQUNGOzs7SUFSRiwrQkFFMEY7SUFDeEYsbUZBS007SUFDUixpQkFBTTs7O0lBSEQsY0FBeUQ7SUFBekQsNklBQXlEOzs7SUFtQjlELCtCQUd3RDtJQUN0RCxZQUNGOztJQUFBLGlCQUFNOztJQUZKLCtEQUFxRDtJQUNyRCxjQUNGO0lBREUsbUZBQ0Y7OztJQU5GLCtCQUFrRztJQUNoRyxtRkFLTTtJQUNSLGlCQUFNOzs7SUFKRCxjQUFnRDtJQUFoRCwySEFBZ0Q7OztJQU96RCwrQkFHaUQsY0FBQTtJQUU3QyxZQUNGO0lBQUEsaUJBQU0sRUFBQTs7O0lBSk4sOERBQW9EO0lBR2xELGVBQ0Y7SUFERSwyR0FDRjs7OztBRGxGTixNQUFNLE9BQU8sMEJBQTJCLFNBQVEsa0NBQWtDO3FRQUFyRSwwQkFBMEIsU0FBMUIsMEJBQTBCOzZEQUExQiwwQkFBMEI7WUNQdkMsK0JBQXlCLGFBQUEsYUFBQSxhQUFBO1lBSWpCLHNDQVVnQjtZQUNoQiwyRUFhTTtZQUNSLGlCQUFNO1lBQ04sOEJBQThDLGFBQUEsYUFBQSxzQkFBQSxrQkFBQTtZQVdwQyxhQUNGOztZQUFBLGlCQUFTO1lBQ1Qsb0ZBRVM7WUFDWCxpQkFBUztZQUNULDJCQUFvRjtZQUN0RixpQkFBTTtZQUNOLDZFQVNNO1lBQ1IsaUJBQU0sRUFBQTtZQUVSLGdDQUE2QjtZQUMzQix5Q0FVZ0I7WUFDaEIsNkVBT007WUFDUixpQkFBTSxFQUFBO1lBRVIsNkVBT007WUFDUixpQkFBTSxFQUFBOztZQTNGRixvQ0FBa0I7WUFTZCxlQUFrQjtZQUFsQixnQ0FBa0Isa0JBQUEseUJBQUEsb0JBQUEscUNBQUE7WUFEbEIsK0NBQXFDO1lBT1YsZUFBaUU7WUFBakUsMEZBQWlFO1lBd0J4RixlQUF1QztZQUF2QyxpREFBdUM7WUFDSyxlQUFpQjtZQUFqQiwrQkFBaUI7WUFDM0QsY0FDRjtZQURFLDhGQUNGO1lBQ29DLGVBQVU7WUFBVixxQ0FBVTtZQVEvQyxlQUFxRjtZQUFyRiw4R0FBcUY7WUFheEYsZUFBaUI7WUFBakIsK0JBQWlCLG1CQUFBLHlCQUFBLG9CQUFBLHFDQUFBO1lBR2pCLGdEQUFzQztZQU1YLGVBQW1FO1lBQW5FLDRGQUFtRTtZQWFqRyxjQUE0QztZQUE1QywyRkFBNEM7OztpRkQvRXRDLDBCQUEwQjtjQUp0QyxTQUFTOzJCQUNFLDBCQUEwQjs7a0ZBR3pCLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3REYXRlT2ZCaXJ0aFBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4uL2Fic3RyYWN0LWRhdGUtb2YtYmlydGgtcGlja2VyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1kYXRlLW9mLWJpcnRoLXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlLW9mLWJpcnRoLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIERhdGVPZkJpcnRoUGlja2VyQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3REYXRlT2ZCaXJ0aFBpY2tlckNvbXBvbmVudCB7fVxuIiwiPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtXCI+XG4gIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGRvYi1maWVsZFwiPlxuICAgIDxkaXYgY2xhc3M9XCJkb2ItZmllbGRfX2NvbnRlbnQgdGV4dC1hbGlnbi0tbGVmdFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImRhdGUtZmllbGQtZGF5XCI+XG4gICAgICAgIDx0Zy1mb3JtLWlucHV0XG4gICAgICAgICAgI2RheVxuICAgICAgICAgIGxhYmVsUHJlZml4PVwiZG9iLmVycm9yXCJcbiAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJkYXlcIlxuICAgICAgICAgIFthdHRyLmRhdGEtY3ldPVwiJ2RheS1vZi1iaXJ0aC1maWVsZCdcIlxuICAgICAgICAgIFtoaWRlTGFiZWxdPVwidHJ1ZVwiXG4gICAgICAgICAgW3JlcXVpcmVkXT1cInRydWVcIlxuICAgICAgICAgIFtzaG93UGxhY2VIb2xkZXJdPVwidHJ1ZVwiXG4gICAgICAgICAgW3Nob3dFcnJvcl09XCJmYWxzZVwiXG4gICAgICAgICAgW21hc2tdPVwieyBtYXNrVmFsdWU6ICdkMCcsIGRyb3BTcGVjaWFsQ2hhcmFjdGVyczogdHJ1ZSB9XCI+XG4gICAgICAgIDwvdGctZm9ybS1pbnB1dD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1FcnJvcklucHV0XCIgKm5nSWY9XCJmb3JtLmNvbnRyb2xzWydkYXknXS5lcnJvcnMgJiYgZm9ybS5jb250cm9sc1snZGF5J10udG91Y2hlZFwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwidGV4dC0tc1wiXG4gICAgICAgICAgICAqbmdJZj1cImZvcm0uY29udHJvbHNbJ2RheSddLmVycm9ycz8uWydyZXF1aXJlZCddXCJcbiAgICAgICAgICAgIFthdHRyLmRhdGEtY3ldPVwiJ2RheS1maWVsZC1yZXF1aXJlZC1lcnJvcidcIj5cbiAgICAgICAgICAgIHt7ICduZy5kb2IuZXJyb3ItZGF5LXJlcXVpcmVkJyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwidGV4dC0tc1wiXG4gICAgICAgICAgICBbYXR0ci5kYXRhLWN5XT1cIidkYXktaW52YWxpZC1lcnJvcidcIlxuICAgICAgICAgICAgKm5nSWY9XCJmb3JtLmNvbnRyb2xzWydkYXknXS5lcnJvcnM/LlsnaW52YWxpZERhdGUnXVwiPlxuICAgICAgICAgICAge3sgJ25nLmRvYi5lcnJvci1kYXktaW52YWxpZCcgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGRvYi1waWNrZXJfX3NlbGVjdGRpdlwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZG9iLXBpY2tlcl9fZHJvcGRvd25zIG1sLTVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VsZWN0LWRyb3Bkb3duLXNlY3Rpb24gZGlzcGxheS0tZmxleFwiPlxuICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAjc2VsZWN0ZWRNb250aFxuICAgICAgICAgICAgICBpZD1cImRvYi1tb250aC1tb2JpbGVcIlxuICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCBzZWxlY3QtZHJvcGRvd24gbWItMFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJkb2ItbW9udGgtbW9iaWxlXCJcbiAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwic2VsZWN0ZWRNb250aFwiXG4gICAgICAgICAgICAgIFthdHRyLmRhdGEtY3ldPVwiJ21vbnRoLW9mLWJpcnRoLWZpZWxkJ1wiPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgY2xhc3M9XCJwbGFjZWhvbGRlci1vcHRpb25cIiBbc2VsZWN0ZWRdPVwidHJ1ZVwiIGhpZGRlbj5cbiAgICAgICAgICAgICAgICB7eyAnbmcuZG9iLmxibC5zZWxlY3QtbW9udGgtcGxhY2Vob2xkZXInIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkICpuZ0Zvcj1cImxldCBvcHRpb24gb2Ygb3B0aW9uc1wiIHZhbHVlPVwie3sgb3B0aW9uLnZhbHVlIHwgbnVtYmVyIH19XCI+XG4gICAgICAgICAgICAgICAge3sgb3B0aW9uLmxhYmVsIH19XG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvbiBpY29uLWNoZXZyb24tZG93biBwb3NpdGlvbi0tYWJzb2x1dGUgdGV4dC0tbSB0ZXh0LXdlaWdodC0tZ1wiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwiZm9ybUVycm9ySW5wdXRcIlxuICAgICAgICAgICAgKm5nSWY9XCJmb3JtLmNvbnRyb2xzWydzZWxlY3RlZE1vbnRoJ10uZXJyb3JzICYmIGZvcm0uY29udHJvbHNbJ3NlbGVjdGVkTW9udGgnXS50b3VjaGVkXCI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzPVwidGV4dC0tc1wiXG4gICAgICAgICAgICAgIFthdHRyLmRhdGEtY3ldPVwiJ21vbnRoLW9mLWJpcnRoLWZpZWxkLXJlcXVpcmVkLWVycm9yJ1wiXG4gICAgICAgICAgICAgICpuZ0lmPVwiZm9ybS5jb250cm9sc1snc2VsZWN0ZWRNb250aCddLmVycm9ycz8uWydyZXF1aXJlZCddXCI+XG4gICAgICAgICAgICAgIHt7ICduZy5kb2IuZXJyb3ItbW9udGgtcmVxdWlyZWQnIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkYXRlLWZpZWxkLXllYXJcIj5cbiAgICAgICAgPHRnLWZvcm0taW5wdXRcbiAgICAgICAgICAjeWVhclxuICAgICAgICAgIFtyZXF1aXJlZF09XCJ0cnVlXCJcbiAgICAgICAgICBbaGlkZUxhYmVsXT1cInRydWVcIlxuICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInllYXJcIlxuICAgICAgICAgIFthdHRyLmRhdGEtY3ldPVwiJ3llYXItb2YtYmlydGgtZmllbGQnXCJcbiAgICAgICAgICBbc2hvd1BsYWNlSG9sZGVyXT1cInRydWVcIlxuICAgICAgICAgIFtzaG93RXJyb3JdPVwiZmFsc2VcIlxuICAgICAgICAgIGxhYmVsUHJlZml4PVwiZG9iLmVycm9yXCJcbiAgICAgICAgICBbbWFza109XCJ7IG1hc2tWYWx1ZTogJzAwMDAnLCBkcm9wU3BlY2lhbENoYXJhY3RlcnM6IHRydWUgfVwiPlxuICAgICAgICA8L3RnLWZvcm0taW5wdXQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtRXJyb3JJbnB1dFwiICpuZ0lmPVwiZm9ybS5jb250cm9sc1sneWVhciddLmVycm9ycyAmJiBmb3JtLmNvbnRyb2xzWyd5ZWFyJ10udG91Y2hlZFwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwidGV4dC0tc1wiXG4gICAgICAgICAgICAqbmdJZj1cImZvcm0uY29udHJvbHNbJ3llYXInXS5lcnJvcnM/LlsncmVxdWlyZWQnXVwiXG4gICAgICAgICAgICBbYXR0ci5kYXRhLWN5XT1cIid5ZWFyLW9mLWJpcnRoLWZpZWxkLXJlcXVpcmVkLWVycm9yJ1wiPlxuICAgICAgICAgICAge3sgJ25nLmRvYi5lcnJvci15ZWFyLXJlcXVpcmVkJyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwiZm9ybUVycm9ySW5wdXRcIlxuICAgICAgW2F0dHIuZGF0YS1jeV09XCIneWVhci1vZi1iaXJ0aC1maWVsZC1pbnZhbGlkLWVycm9yJ1wiXG4gICAgICAqbmdJZj1cInRoaXMuZm9ybS5lcnJvcnM/LlsnaW52YWxpZEJpcnRoRGF0ZSddXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dC0tcyBtdC01XCI+XG4gICAgICAgIHt7IHRoaXMuZm9ybS5lcnJvcnM/LlsnaW52YWxpZEJpcnRoRGF0ZSddIH19XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Zvcm0+XG4iXX0=