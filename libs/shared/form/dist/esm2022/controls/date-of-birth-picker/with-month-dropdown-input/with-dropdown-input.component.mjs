import { Component } from '@angular/core';
import { AbstractDateOfBirthPickerComponent } from '../abstract-date-of-birth-picker.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "../../input/input.component";
import * as i4 from "../../../errors/form.directive";
import * as i5 from "./month-dropdown/month-dropdown.component";
function DateOfBirthPickerWithDropdownInputComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.form.errors == null ? null : ctx_r2.form.errors["invalidBirthDate"], " ");
} }
const _c0 = () => ({ maskValue: "99", dropSpecialCharacters: true });
const _c1 = () => ({ maskValue: "0000", dropSpecialCharacters: true });
export class DateOfBirthPickerWithDropdownInputComponent extends AbstractDateOfBirthPickerComponent {
    static ɵfac = /*@__PURE__*/ (() => { let ɵDateOfBirthPickerWithDropdownInputComponent_BaseFactory; return function DateOfBirthPickerWithDropdownInputComponent_Factory(t) { return (ɵDateOfBirthPickerWithDropdownInputComponent_BaseFactory || (ɵDateOfBirthPickerWithDropdownInputComponent_BaseFactory = i0.ɵɵgetInheritedFactory(DateOfBirthPickerWithDropdownInputComponent)))(t || DateOfBirthPickerWithDropdownInputComponent); }; })();
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DateOfBirthPickerWithDropdownInputComponent, selectors: [["tg-date-of-birth-picker-with-dropdown-input"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 13, vars: 14, consts: [[3, "formGroup"], [1, "form-group", "dob-field"], [1, "dob-field__content", "text-align--left"], [1, "date-field-day"], ["formControlName", "day", "labelPrefix", "dob.error", 3, "required", "hideLabel", "showPlaceHolder", "mask"], ["day", ""], [1, "form-group", "dob-picker__selectdiv"], [1, "dob-picker__dropdowns", "ml-5"], ["formControlName", "selectedMonth", "ngDefaultControl", "", 3, "month", "optionList"], [1, "date-field-year"], ["formControlName", "year", "labelPrefix", "dob.error", 3, "required", "hideLabel", "showPlaceHolder", "mask"], ["year", ""], ["class", "formErrorInput mt-5", 4, "ngIf"], [1, "formErrorInput", "mt-5"]], template: function DateOfBirthPickerWithDropdownInputComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
            i0.ɵɵelement(4, "tg-form-input", 4, 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 6)(7, "div", 7);
            i0.ɵɵelement(8, "app-month-dropdown", 8);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 9);
            i0.ɵɵelement(10, "tg-form-input", 10, 11);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(12, DateOfBirthPickerWithDropdownInputComponent_div_12_Template, 2, 1, "div", 12);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("required", true)("hideLabel", true)("showPlaceHolder", true)("mask", i0.ɵɵpureFunction0(12, _c0));
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("month", ctx.month)("optionList", ctx.options);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("required", true)("hideLabel", true)("showPlaceHolder", true)("mask", i0.ɵɵpureFunction0(13, _c1));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.form.errors == null ? null : ctx.form.errors["invalidBirthDate"]);
        } }, dependencies: [i1.NgIf, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.FormGroupDirective, i2.FormControlName, i3.InputComponent, i4.FormDirective, i5.MonthDropdownComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DateOfBirthPickerWithDropdownInputComponent, [{
        type: Component,
        args: [{ selector: 'tg-date-of-birth-picker-with-dropdown-input', template: "<form [formGroup]=\"form\">\n  <div class=\"form-group dob-field\">\n    <div class=\"dob-field__content text-align--left\">\n      <div class=\"date-field-day\">\n        <tg-form-input\n          #day\n          formControlName=\"day\"\n          labelPrefix=\"dob.error\"\n          [required]=\"true\"\n          [hideLabel]=\"true\"\n          [showPlaceHolder]=\"true\"\n          [mask]=\"{ maskValue: '99', dropSpecialCharacters: true }\">\n        </tg-form-input>\n      </div>\n      <div class=\"form-group dob-picker__selectdiv\">\n        <div class=\"dob-picker__dropdowns ml-5\">\n          <app-month-dropdown formControlName=\"selectedMonth\" [month]=\"month\" [optionList]=\"options\" ngDefaultControl>\n          </app-month-dropdown>\n        </div>\n      </div>\n      <div class=\"date-field-year\">\n        <tg-form-input\n          #year\n          formControlName=\"year\"\n          labelPrefix=\"dob.error\"\n          [required]=\"true\"\n          [hideLabel]=\"true\"\n          [showPlaceHolder]=\"true\"\n          [mask]=\"{ maskValue: '0000', dropSpecialCharacters: true }\">\n        </tg-form-input>\n      </div>\n    </div>\n    <div class=\"formErrorInput mt-5\" *ngIf=\"this.form.errors?.['invalidBirthDate']\">\n      {{ this.form.errors?.['invalidBirthDate'] }}\n    </div>\n  </div>\n</form>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DateOfBirthPickerWithDropdownInputComponent, { className: "DateOfBirthPickerWithDropdownInputComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l0aC1kcm9wZG93bi1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29udHJvbHMvZGF0ZS1vZi1iaXJ0aC1waWNrZXIvd2l0aC1tb250aC1kcm9wZG93bi1pbnB1dC93aXRoLWRyb3Bkb3duLWlucHV0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9jb250cm9scy9kYXRlLW9mLWJpcnRoLXBpY2tlci93aXRoLW1vbnRoLWRyb3Bkb3duLWlucHV0L3dpdGgtZHJvcGRvd24taW5wdXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7Ozs7Ozs7SUMrQjVGLCtCQUFnRjtJQUM5RSxZQUNGO0lBQUEsaUJBQU07OztJQURKLGNBQ0Y7SUFERSwyR0FDRjs7OztBRDNCSixNQUFNLE9BQU8sMkNBQTRDLFNBQVEsa0NBQWtDO3lVQUF0RiwyQ0FBMkMsU0FBM0MsMkNBQTJDOzZEQUEzQywyQ0FBMkM7WUNQeEQsK0JBQXlCLGFBQUEsYUFBQSxhQUFBO1lBSWpCLHNDQVFnQjtZQUNsQixpQkFBTTtZQUNOLDhCQUE4QyxhQUFBO1lBRTFDLHdDQUNxQjtZQUN2QixpQkFBTSxFQUFBO1lBRVIsOEJBQTZCO1lBQzNCLHlDQVFnQjtZQUNsQixpQkFBTSxFQUFBO1lBRVIsK0ZBRU07WUFDUixpQkFBTSxFQUFBOztZQW5DRixvQ0FBa0I7WUFRZCxlQUFpQjtZQUFqQiwrQkFBaUIsbUJBQUEseUJBQUEscUNBQUE7WUFRbUMsZUFBZTtZQUFmLGlDQUFlLDJCQUFBO1lBU25FLGVBQWlCO1lBQWpCLCtCQUFpQixtQkFBQSx5QkFBQSxxQ0FBQTtZQU9XLGVBQTRDO1lBQTVDLDJGQUE0Qzs7O2lGRHpCckUsMkNBQTJDO2NBSnZELFNBQVM7MkJBQ0UsNkNBQTZDOztrRkFHNUMsMkNBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0RGF0ZU9mQmlydGhQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuLi9hYnN0cmFjdC1kYXRlLW9mLWJpcnRoLXBpY2tlci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0Zy1kYXRlLW9mLWJpcnRoLXBpY2tlci13aXRoLWRyb3Bkb3duLWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3dpdGgtZHJvcGRvd24taW5wdXQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlT2ZCaXJ0aFBpY2tlcldpdGhEcm9wZG93bklucHV0Q29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3REYXRlT2ZCaXJ0aFBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7fVxuIiwiPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtXCI+XG4gIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGRvYi1maWVsZFwiPlxuICAgIDxkaXYgY2xhc3M9XCJkb2ItZmllbGRfX2NvbnRlbnQgdGV4dC1hbGlnbi0tbGVmdFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImRhdGUtZmllbGQtZGF5XCI+XG4gICAgICAgIDx0Zy1mb3JtLWlucHV0XG4gICAgICAgICAgI2RheVxuICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImRheVwiXG4gICAgICAgICAgbGFiZWxQcmVmaXg9XCJkb2IuZXJyb3JcIlxuICAgICAgICAgIFtyZXF1aXJlZF09XCJ0cnVlXCJcbiAgICAgICAgICBbaGlkZUxhYmVsXT1cInRydWVcIlxuICAgICAgICAgIFtzaG93UGxhY2VIb2xkZXJdPVwidHJ1ZVwiXG4gICAgICAgICAgW21hc2tdPVwieyBtYXNrVmFsdWU6ICc5OScsIGRyb3BTcGVjaWFsQ2hhcmFjdGVyczogdHJ1ZSB9XCI+XG4gICAgICAgIDwvdGctZm9ybS1pbnB1dD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgZG9iLXBpY2tlcl9fc2VsZWN0ZGl2XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkb2ItcGlja2VyX19kcm9wZG93bnMgbWwtNVwiPlxuICAgICAgICAgIDxhcHAtbW9udGgtZHJvcGRvd24gZm9ybUNvbnRyb2xOYW1lPVwic2VsZWN0ZWRNb250aFwiIFttb250aF09XCJtb250aFwiIFtvcHRpb25MaXN0XT1cIm9wdGlvbnNcIiBuZ0RlZmF1bHRDb250cm9sPlxuICAgICAgICAgIDwvYXBwLW1vbnRoLWRyb3Bkb3duPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImRhdGUtZmllbGQteWVhclwiPlxuICAgICAgICA8dGctZm9ybS1pbnB1dFxuICAgICAgICAgICN5ZWFyXG4gICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwieWVhclwiXG4gICAgICAgICAgbGFiZWxQcmVmaXg9XCJkb2IuZXJyb3JcIlxuICAgICAgICAgIFtyZXF1aXJlZF09XCJ0cnVlXCJcbiAgICAgICAgICBbaGlkZUxhYmVsXT1cInRydWVcIlxuICAgICAgICAgIFtzaG93UGxhY2VIb2xkZXJdPVwidHJ1ZVwiXG4gICAgICAgICAgW21hc2tdPVwieyBtYXNrVmFsdWU6ICcwMDAwJywgZHJvcFNwZWNpYWxDaGFyYWN0ZXJzOiB0cnVlIH1cIj5cbiAgICAgICAgPC90Zy1mb3JtLWlucHV0PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZvcm1FcnJvcklucHV0IG10LTVcIiAqbmdJZj1cInRoaXMuZm9ybS5lcnJvcnM/LlsnaW52YWxpZEJpcnRoRGF0ZSddXCI+XG4gICAgICB7eyB0aGlzLmZvcm0uZXJyb3JzPy5bJ2ludmFsaWRCaXJ0aERhdGUnXSB9fVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZm9ybT5cbiJdfQ==