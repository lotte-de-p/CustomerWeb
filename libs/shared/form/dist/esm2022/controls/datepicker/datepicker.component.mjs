import { Component, forwardRef, Input, Optional, ViewChild } from '@angular/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputAbstractComponent } from '../input-abstract.component';
import * as i0 from "@angular/core";
import * as i1 from "@telenet/ng-lib-page";
import * as i2 from "../../errors";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/datepicker";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/material/form-field";
import * as i7 from "@ngx-translate/core";
const _c0 = ["datepicker"];
export const MY_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'L',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
export class DatepickerComponent extends InputAbstractComponent {
    languageService;
    formService;
    messageGroupDirective;
    injector;
    customLabel = false;
    showPlaceHolder = true;
    minDate;
    maxDate;
    datepicker;
    value;
    constructor(languageService, formService, messageGroupDirective, injector) {
        super(languageService, formService, messageGroupDirective, injector);
        this.languageService = languageService;
        this.formService = formService;
        this.messageGroupDirective = messageGroupDirective;
        this.injector = injector;
    }
    onChange = (_) => {
        // empty implementation
    };
    onTouch = (_) => {
        // empty implementation
    };
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    getLabel() {
        if (this.customLabel) {
            return super.getLabel();
        }
        return '';
    }
    writeValue(value) {
        this.value = value;
    }
    updateValue(value) {
        this.onTouched(true);
        this.onChange(value);
    }
    onTouched = (_) => {
        // empty implementation
    };
    static ɵfac = function DatepickerComponent_Factory(t) { return new (t || DatepickerComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(i2.FormErrorService), i0.ɵɵdirectiveInject(i2.MessageGroupDirective, 8), i0.ɵɵdirectiveInject(i0.Injector)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DatepickerComponent, selectors: [["app-datepicker"]], viewQuery: function DatepickerComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.datepicker = _t.first);
        } }, inputs: { customLabel: "customLabel", showPlaceHolder: "showPlaceHolder", minDate: "minDate", maxDate: "maxDate" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => DatepickerComponent),
                    multi: true,
                },
                {
                    provide: DateAdapter,
                    useClass: MomentDateAdapter,
                    deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
                },
                { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 13, vars: 11, consts: [[1, "form-builder", "form-group"], [1, "date-picker", "hide-until-sm"], ["matInput", "", 1, "date-picker-input", 3, "min", "max", "matDatepicker", "placeholder", "ngModel", "ngModelChange", "click"], ["matSuffix", "", 3, "for"], ["datepicker", ""], [1, "hide-from-sm", "display--flex", "align-content--center"], ["type", "date", 1, "form__input", "form-control"], [1, "icon-calendar"]], template: function DatepickerComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 0)(1, "label");
            i0.ɵɵtext(2);
            i0.ɵɵpipe(3, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 1)(5, "input", 2);
            i0.ɵɵlistener("ngModelChange", function DatepickerComponent_Template_input_ngModelChange_5_listener($event) { return ctx.updateValue($event); })("ngModelChange", function DatepickerComponent_Template_input_ngModelChange_5_listener($event) { return ctx.value = $event; })("click", function DatepickerComponent_Template_input_click_5_listener() { i0.ɵɵrestoreView(_r1); const _r0 = i0.ɵɵreference(9); return i0.ɵɵresetView(_r0.open()); });
            i0.ɵɵpipe(6, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(7, "mat-datepicker-toggle", 3)(8, "mat-datepicker", null, 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "div", 5);
            i0.ɵɵelement(11, "input", 6)(12, "i", 7);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            const _r0 = i0.ɵɵreference(9);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 7, ctx.getLabel()));
            i0.ɵɵadvance(3);
            i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(6, 9, ctx.getPlaceholder()));
            i0.ɵɵproperty("min", ctx.minDate ? ctx.minDate : "")("max", ctx.maxDate ? ctx.maxDate : "")("matDatepicker", _r0)("ngModel", ctx.value);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("for", _r0);
        } }, dependencies: [i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i4.MatDatepicker, i4.MatDatepickerInput, i4.MatDatepickerToggle, i5.MatInput, i6.MatSuffix, i7.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DatepickerComponent, [{
        type: Component,
        args: [{ selector: 'app-datepicker', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => DatepickerComponent),
                        multi: true,
                    },
                    {
                        provide: DateAdapter,
                        useClass: MomentDateAdapter,
                        deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
                    },
                    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
                ], template: "<div class=\"form-builder form-group\">\n  <label>{{getLabel() | translate}}</label>\n  <div class=\"date-picker hide-until-sm\">\n    <input\n      matInput\n      class=\"date-picker-input\"\n      [min]=\"minDate? minDate: ''\"\n      [max]=\"maxDate? maxDate: ''\"\n      [matDatepicker]=\"datepicker\"\n      placeholder=\"{{getPlaceholder() | translate}}\"\n      (ngModelChange)=\"updateValue($event)\"\n      [(ngModel)]=\"value\"\n      (click)=\"datepicker.open()\" />\n    <mat-datepicker-toggle matSuffix [for]=\"datepicker\"></mat-datepicker-toggle>\n    <mat-datepicker #datepicker></mat-datepicker>\n  </div>\n  <div class=\"hide-from-sm display--flex align-content--center\">\n    <input type=\"date\" class=\"form__input form-control\" />\n    <i class=\"icon-calendar\"></i>\n  </div>\n</div>\n" }]
    }], () => [{ type: i1.LanguageService }, { type: i2.FormErrorService }, { type: i2.MessageGroupDirective, decorators: [{
                type: Optional
            }] }, { type: i0.Injector }], { customLabel: [{
            type: Input
        }], showPlaceHolder: [{
            type: Input
        }], minDate: [{
            type: Input
        }], maxDate: [{
            type: Input
        }], datepicker: [{
            type: ViewChild,
            args: ['datepicker']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DatepickerComponent, { className: "DatepickerComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29udHJvbHMvZGF0ZXBpY2tlci9kYXRlcGlja2VyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3NyYy9jb250cm9scy9kYXRlcGlja2VyL2RhdGVwaWNrZXIuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBWSxLQUFLLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RixPQUFPLEVBQUUsK0JBQStCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RyxPQUFPLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXhGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7Ozs7Ozs7O0FBSXJFLE1BQU0sQ0FBQyxNQUFNLFVBQVUsR0FBRztJQUN4QixLQUFLLEVBQUU7UUFDTCxTQUFTLEVBQUUsSUFBSTtLQUNoQjtJQUNELE9BQU8sRUFBRTtRQUNQLFNBQVMsRUFBRSxHQUFHO1FBQ2QsY0FBYyxFQUFFLFVBQVU7UUFDMUIsYUFBYSxFQUFFLElBQUk7UUFDbkIsa0JBQWtCLEVBQUUsV0FBVztLQUNoQztDQUNGLENBQUM7QUFvQkYsTUFBTSxPQUFPLG1CQUFvQixTQUFRLHNCQUFzQjtJQVNwRDtJQUNBO0lBQ1k7SUFDWjtJQVhBLFdBQVcsR0FBSSxLQUFLLENBQUM7SUFDckIsZUFBZSxHQUFHLElBQUksQ0FBQztJQUN2QixPQUFPLENBQVE7SUFDZixPQUFPLENBQVE7SUFDQyxVQUFVLENBQXNCO0lBQ3pELEtBQUssQ0FBUztJQUVkLFlBQ1MsZUFBZ0MsRUFDaEMsV0FBNkIs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QUFROzRDQVZGLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ21CLFVBQVU7a0JBQWxDLFNBQVM7bUJBQUMsWUFBWTs7a0ZBTFosbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbmplY3RvciwgSW5wdXQsIE9wdGlvbmFsLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1BVF9NT01FTlRfREFURV9BREFQVEVSX09QVElPTlMsIE1vbWVudERhdGVBZGFwdGVyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwtbW9tZW50LWFkYXB0ZXInO1xuaW1wb3J0IHsgRGF0ZUFkYXB0ZXIsIE1BVF9EQVRFX0ZPUk1BVFMsIE1BVF9EQVRFX0xPQ0FMRSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnQHRlbGVuZXQvbmctbGliLXBhZ2UnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJbnB1dEFic3RyYWN0Q29tcG9uZW50IH0gZnJvbSAnLi4vaW5wdXQtYWJzdHJhY3QuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1FcnJvclNlcnZpY2UsIE1lc3NhZ2VHcm91cERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2Vycm9ycyc7XG5pbXBvcnQgeyBNYXREYXRlcGlja2VyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XG5cbmV4cG9ydCBjb25zdCBNWV9GT1JNQVRTID0ge1xuICBwYXJzZToge1xuICAgIGRhdGVJbnB1dDogJ0xMJyxcbiAgfSxcbiAgZGlzcGxheToge1xuICAgIGRhdGVJbnB1dDogJ0wnLFxuICAgIG1vbnRoWWVhckxhYmVsOiAnTU1NIFlZWVknLFxuICAgIGRhdGVBMTF5TGFiZWw6ICdMTCcsXG4gICAgbW9udGhZZWFyQTExeUxhYmVsOiAnTU1NTSBZWVlZJyxcbiAgfSxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1kYXRlcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGVwaWNrZXIuaHRtbCcsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRGF0ZXBpY2tlckNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IERhdGVBZGFwdGVyLFxuICAgICAgdXNlQ2xhc3M6IE1vbWVudERhdGVBZGFwdGVyLFxuICAgICAgZGVwczogW01BVF9EQVRFX0xPQ0FMRSwgTUFUX01PTUVOVF9EQVRFX0FEQVBURVJfT1BUSU9OU10sXG4gICAgfSxcblxuICAgIHsgcHJvdmlkZTogTUFUX0RBVEVfRk9STUFUUywgdXNlVmFsdWU6IE1ZX0ZPUk1BVFMgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckNvbXBvbmVudCBleHRlbmRzIElucHV0QWJzdHJhY3RDb21wb25lbnQge1xuICBASW5wdXQoKSBjdXN0b21MYWJlbD8gPSBmYWxzZTtcbiAgQElucHV0KCkgc2hvd1BsYWNlSG9sZGVyID0gdHJ1ZTtcbiAgQElucHV0KCkgbWluRGF0ZT86IERhdGU7XG4gIEBJbnB1dCgpIG1heERhdGU/OiBEYXRlO1xuICBAVmlld0NoaWxkKCdkYXRlcGlja2VyJykgZGF0ZXBpY2tlcjogTWF0RGF0ZXBpY2tlcjxEYXRlPjtcbiAgdmFsdWU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UsXG4gICAgcHVibGljIGZvcm1TZXJ2aWNlOiBGb3JtRXJyb3JTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBtZXNzYWdlR3JvdXBEaXJlY3RpdmU6IE1lc3NhZ2VHcm91cERpcmVjdGl2ZSxcbiAgICBwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yXG4gICkge1xuICAgIHN1cGVyKGxhbmd1YWdlU2VydmljZSwgZm9ybVNlcnZpY2UsIG1lc3NhZ2VHcm91cERpcmVjdGl2ZSwgaW5qZWN0b3IpO1xuICB9XG5cbiAgb25DaGFuZ2UgPSAoXzogc3RyaW5nKSA9PiB7XG4gICAgLy8gZW1wdHkgaW1wbGVtZW50YXRpb25cbiAgfTtcbiAgb25Ub3VjaCA9IChfOiBib29sZWFuKSA9PiB7XG4gICAgLy8gZW1wdHkgaW1wbGVtZW50YXRpb25cbiAgfTtcblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBWb2lkRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogVm9pZEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoID0gZm47XG4gIH1cblxuICBnZXRMYWJlbCgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmN1c3RvbUxhYmVsKSB7XG4gICAgICByZXR1cm4gc3VwZXIuZ2V0TGFiZWwoKTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgdXBkYXRlVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkKHRydWUpO1xuICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICB9XG5cbiAgb25Ub3VjaGVkID0gKF86IGJvb2xlYW4pID0+IHtcbiAgICAvLyBlbXB0eSBpbXBsZW1lbnRhdGlvblxuICB9O1xufVxuIiwiPGRpdiBjbGFzcz1cImZvcm0tYnVpbGRlciBmb3JtLWdyb3VwXCI+XG4gIDxsYWJlbD57e2dldExhYmVsKCkgfCB0cmFuc2xhdGV9fTwvbGFiZWw+XG4gIDxkaXYgY2xhc3M9XCJkYXRlLXBpY2tlciBoaWRlLXVudGlsLXNtXCI+XG4gICAgPGlucHV0XG4gICAgICBtYXRJbnB1dFxuICAgICAgY2xhc3M9XCJkYXRlLXBpY2tlci1pbnB1dFwiXG4gICAgICBbbWluXT1cIm1pbkRhdGU/IG1pbkRhdGU6ICcnXCJcbiAgICAgIFttYXhdPVwibWF4RGF0ZT8gbWF4RGF0ZTogJydcIlxuICAgICAgW21hdERhdGVwaWNrZXJdPVwiZGF0ZXBpY2tlclwiXG4gICAgICBwbGFjZWhvbGRlcj1cInt7Z2V0UGxhY2Vob2xkZXIoKSB8IHRyYW5zbGF0ZX19XCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInVwZGF0ZVZhbHVlKCRldmVudClcIlxuICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiXG4gICAgICAoY2xpY2spPVwiZGF0ZXBpY2tlci5vcGVuKClcIiAvPlxuICAgIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwiZGF0ZXBpY2tlclwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICAgIDxtYXQtZGF0ZXBpY2tlciAjZGF0ZXBpY2tlcj48L21hdC1kYXRlcGlja2VyPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImhpZGUtZnJvbS1zbSBkaXNwbGF5LS1mbGV4IGFsaWduLWNvbnRlbnQtLWNlbnRlclwiPlxuICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGNsYXNzPVwiZm9ybV9faW5wdXQgZm9ybS1jb250cm9sXCIgLz5cbiAgICA8aSBjbGFzcz1cImljb24tY2FsZW5kYXJcIj48L2k+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=