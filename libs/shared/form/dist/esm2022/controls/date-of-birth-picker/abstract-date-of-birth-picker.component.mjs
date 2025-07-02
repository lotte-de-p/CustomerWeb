var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AbstractDateOfBirthPickerComponent_1;
import { Component, Input, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { times } from 'lodash-es';
import { InputOption } from '../radio';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import dayjs from 'dayjs';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
const _c0 = ["day"];
const _c1 = ["year"];
let AbstractDateOfBirthPickerComponent = class AbstractDateOfBirthPickerComponent {
    static { AbstractDateOfBirthPickerComponent_1 = this; }
    translateService;
    static DOB_DAY_REGEX = /^(([0]?[1-9])|([1-2][0-9])|(3[01]))$/;
    static DOB_MONTH_REGEX = /^(0?[1-9]|1[012])$/;
    static DOB_YEAR_REGEX = /^(19|[2-9]\d)\d{2}$/;
    form;
    day;
    year;
    month;
    minDefaultAge;
    dayBasedValidationFeatureFlag = false;
    dayInputField;
    yearInputField;
    MIN_DEFAULT_LEGAL_AGE = 18;
    options;
    MAX_DEFAULT_LEGAL_AGE = 110;
    MOMENT_DATE_FORMAT = 'DD/MM/YYYY';
    set minDefaultLegalAge(value) {
        this.MIN_DEFAULT_LEGAL_AGE = value || value === 0 ? value : 18;
    }
    get minDefaultLegalAge() {
        return this.MIN_DEFAULT_LEGAL_AGE;
    }
    constructor(translateService) {
        this.translateService = translateService;
    }
    ngOnInit() {
        this.options = this.getTranslatedDayOrMonthNames('months').map((month, index) => new InputOption(String(index + 1), String(month)));
        this.form.addControl('day', new FormControl(this.day, {
            validators: [Validators.required, Validators.pattern(AbstractDateOfBirthPickerComponent_1.DOB_DAY_REGEX)],
            updateOn: 'blur',
        }));
        this.form.addControl('selectedMonth', new FormControl(this.month, {
            validators: [Validators.required, Validators.pattern(AbstractDateOfBirthPickerComponent_1.DOB_MONTH_REGEX)],
        }));
        this.form.addControl('year', new FormControl(this.year, {
            validators: [Validators.required, Validators.pattern(AbstractDateOfBirthPickerComponent_1.DOB_YEAR_REGEX)],
            updateOn: 'blur',
        }));
        this.detectFormControlsValueChange();
    }
    getTranslatedDayOrMonthNames(type) {
        const noOfDays = type === 'days' ? 7 : 12, key = type === 'days' ? 'general.date-picker-day-' : 'general.date-picker-month-';
        return times(noOfDays, (index) => {
            const monthIndex = index + 1;
            return this.translateService.instant(key + monthIndex);
        });
    }
    detectFormControlsValueChange() {
        this.form.valueChanges.pipe(untilDestroyed(this)).subscribe((value) => {
            const day = value.day ? value.day : null;
            const month = value.selectedMonth ? value.selectedMonth : null;
            const year = value.year ? value.year : null;
            const selectedDate = dayjs().month(month).date(day).year(year);
            if (!selectedDate.isValid()) {
                this.form.setErrors(null);
            }
            this.validateDayBasedOnMonth();
            if (day && month && year) {
                this.removeValidationErrors();
                this.checkDay(selectedDate);
                this.checkYear();
                this.checkDate(selectedDate, dayjs().add(1, 'months'));
            }
        });
    }
    validateDayBasedOnMonth() {
        /* eslint-disable @typescript-eslint/no-explicit-any */
        let isValid;
        if (this.dayBasedValidationFeatureFlag && this.form.value.day && this.form.value.selectedMonth && this) {
            this.form.valueChanges.pipe(untilDestroyed(this)).subscribe((value) => {
                const day = Number(value.day);
                const year = Number(value.year);
                const month = Number(value.selectedMonth);
                isValid = year !== 0 ? this.isValidDate(year, month, day) : this.isValidDayForMonth(month, day);
                if (!isValid) {
                    this.dayInputField.setError({ invalidDate: true });
                    this.form.get('day')?.setErrors({ invalidDate: true });
                }
            });
        }
        return isValid;
    }
    isValidDate(year, month, day) {
        const noOfDays = new Date(year, month, 0).getDate();
        const date = new Date(year, month - 1, day);
        return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day && day <= noOfDays;
    }
    isValidDayForMonth(month, day) {
        const noOfDays = new Date(0, month, 0).getDate();
        return day <= noOfDays;
    }
    checkYear() {
        const yearErrors = this.form.get('year')?.errors;
        if (yearErrors?.['pattern']) {
            this.yearInputField.setError({ invalid: true });
            this.form.get('year')?.setErrors({ invalid: true });
        }
    }
    checkDay(selectedDate) {
        const yearErrors = this.form.get('year');
        if (!selectedDate.isValid() && !yearErrors?.errors) {
            this.dayInputField.setError({ invalid: true });
            this.form.get('day')?.setErrors({ invalid: true });
        }
    }
    checkDate(selectedDate, currentDate) {
        const yearErrors = this.form.get('year')?.errors;
        const dayErrors = this.form.get('day')?.errors;
        if (selectedDate.isValid() && !yearErrors && !dayErrors) {
            const maxLegalAge = dayjs(currentDate).add(1, 'months').add(-this.MAX_DEFAULT_LEGAL_AGE, 'years');
            const minLegalAge = dayjs(currentDate).add(1, 'months').add(-this.MIN_DEFAULT_LEGAL_AGE, 'years');
            selectedDate.isAfter(dayjs(minLegalAge));
            if (selectedDate.isAfter(currentDate)) {
                this.setInvalidBirthDateError('ng.dob.error-dob-constraint');
            }
            else if (selectedDate.isBefore(maxLegalAge) || selectedDate.isAfter(minLegalAge)) {
                this.setInvalidBirthDateError('ng.dob.error-age-constraint');
            }
        }
    }
    removeValidationErrors() {
        this.form.setErrors(null);
        this.dayInputField?.setError(null);
        this.form.get('day')?.setErrors(null);
        this.yearInputField.setError(null);
    }
    setInvalidBirthDateError(errorValue) {
        this.form.setErrors({ invalidBirthDate: this.translateService.instant(errorValue) });
    }
    static ɵfac = function AbstractDateOfBirthPickerComponent_Factory(t) { return new (t || AbstractDateOfBirthPickerComponent)(i0.ɵɵdirectiveInject(i1.TranslateService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AbstractDateOfBirthPickerComponent, selectors: [["tg-abstract-date-of-birth-picker-with-dropdown-input"]], viewQuery: function AbstractDateOfBirthPickerComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dayInputField = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.yearInputField = _t.first);
        } }, inputs: { form: "form", day: "day", year: "year", month: "month", minDefaultAge: "minDefaultAge", dayBasedValidationFeatureFlag: "dayBasedValidationFeatureFlag", minDefaultLegalAge: "minDefaultLegalAge" }, decls: 1, vars: 0, template: function AbstractDateOfBirthPickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtext(0, "Do not use the abstract component!\n");
        } }, encapsulation: 2 });
};
AbstractDateOfBirthPickerComponent = AbstractDateOfBirthPickerComponent_1 = __decorate([
    UntilDestroy()
], AbstractDateOfBirthPickerComponent);
export { AbstractDateOfBirthPickerComponent };
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AbstractDateOfBirthPickerComponent, [{
        type: Component,
        args: [{ selector: 'tg-abstract-date-of-birth-picker-with-dropdown-input', template: "Do not use the abstract component!\n" }]
    }], () => [{ type: i1.TranslateService }], { form: [{
            type: Input
        }], day: [{
            type: Input
        }], year: [{
            type: Input
        }], month: [{
            type: Input
        }], minDefaultAge: [{
            type: Input
        }], dayBasedValidationFeatureFlag: [{
            type: Input
        }], dayInputField: [{
            type: ViewChild,
            args: ['day']
        }], yearInputField: [{
            type: ViewChild,
            args: ['year']
        }], minDefaultLegalAge: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AbstractDateOfBirthPickerComponent, { className: "AbstractDateOfBirthPickerComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtZGF0ZS1vZi1iaXJ0aC1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xzL2RhdGUtb2YtYmlydGgtcGlja2VyL2Fic3RyYWN0LWRhdGUtb2YtYmlydGgtcGlja2VyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3NyYy9jb250cm9scy9kYXRlLW9mLWJpcnRoLXBpY2tlci9hYnN0cmFjdC1kYXRlLW9mLWJpcnRoLXBpY2tlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxXQUFXLEVBQStCLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RGLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFbEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUd2QyxPQUFPLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3JFLE9BQU8sS0FBZ0IsTUFBTSxPQUFPLENBQUM7Ozs7O0FBTzlCLElBQU0sa0NBQWtDLEdBQXhDLE1BQU0sa0NBQWtDOztJQThCaEI7SUE3QjdCLE1BQU0sQ0FBVSxhQUFhLEdBQVcsc0NBQXNDLENBQUM7SUFDL0UsTUFBTSxDQUFVLGVBQWUsR0FBVyxvQkFBb0IsQ0FBQztJQUMvRCxNQUFNLENBQVUsY0FBYyxHQUFXLHFCQUFxQixDQUFDO0lBRXRELElBQUksQ0FBWTtJQUNoQixHQUFHLENBQVM7SUFDWixJQUFJLENBQVM7SUFDYixLQUFLLENBQVM7SUFDZCxhQUFhLENBQXFCO0lBQ2xDLDZCQUE2QixHQUFhLEtBQUssQ0FBQztJQUV2QyxhQUFhLENBQWlCO0lBQzdCLGNBQWMsQ0FBaUI7SUFFMUMscUJB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Qy9ELENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVPLHNCQUFzQjtRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVPLHdCQUF3QixDQUFDLFVBQWtCO1FBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdkYsQ0FBQzs0RkE1SlUsa0NBQWtDOzZEQUFsQyxrQ0FBa0M7Ozs7Ozs7O1lDZi9DLG9EQUNBOzs7QURjYSxrQ0FBa0M7SUFMOUMsWUFBWSxFQUFFO0dBS0Ysa0NBQWtDLENBNko5Qzs7aUZBN0pZLGtDQUFrQztjQUo5QyxTQUFTOzJCQUNFLHNEQUFzRDtpREFRdkQsSUFBSTtrQkFBWixLQUFLO1lBQ0csR0FBRztrQkFBWCxLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLDZCQUE2QjtrQkFBckMsS0FBSztZQUVZLGFBQWE7a0JBQTlCLFNBQVM7bUJBQUMsS0FBSztZQUNHLGNBQWM7a0JBQWhDLFNBQVM7bUJBQUMsTUFBTTtZQVNiLGtCQUFrQjtrQkFEckIsS0FBSzs7a0ZBckJLLGtDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0aW9uRXJyb3JzLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgdGltZXMgfSBmcm9tICdsb2Rhc2gtZXMnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRPcHRpb24gfSBmcm9tICcuLi9yYWRpbyc7XG5pbXBvcnQgeyBJbnB1dENvbXBvbmVudCB9IGZyb20gJy4uL2lucHV0JztcbmltcG9ydCB7IElNb250aCB9IGZyb20gJy4vbW9kZWwnO1xuaW1wb3J0IHsgVW50aWxEZXN0cm95LCB1bnRpbERlc3Ryb3llZCB9IGZyb20gJ0BuZ25lYXQvdW50aWwtZGVzdHJveSc7XG5pbXBvcnQgZGF5anMsIHsgRGF5anMgfSBmcm9tICdkYXlqcyc7XG5cbkBVbnRpbERlc3Ryb3koKVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGctYWJzdHJhY3QtZGF0ZS1vZi1iaXJ0aC1waWNrZXItd2l0aC1kcm9wZG93bi1pbnB1dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hYnN0cmFjdC1kYXRlLW9mLWJpcnRoLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEFic3RyYWN0RGF0ZU9mQmlydGhQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBzdGF0aWMgcmVhZG9ubHkgRE9CX0RBWV9SRUdFWDogUmVnRXhwID0gL14oKFswXT9bMS05XSl8KFsxLTJdWzAtOV0pfCgzWzAxXSkpJC87XG4gIHN0YXRpYyByZWFkb25seSBET0JfTU9OVEhfUkVHRVg6IFJlZ0V4cCA9IC9eKDA/WzEtOV18MVswMTJdKSQvO1xuICBzdGF0aWMgcmVhZG9ubHkgRE9CX1lFQVJfUkVHRVg6IFJlZ0V4cCA9IC9eKDE5fFsyLTldXFxkKVxcZHsyfSQvO1xuXG4gIEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cDtcbiAgQElucHV0KCkgZGF5OiBudW1iZXI7XG4gIEBJbnB1dCgpIHllYXI6IG51bWJlcjtcbiAgQElucHV0KCkgbW9udGg6IG51bWJlcjtcbiAgQElucHV0KCkgbWluRGVmYXVsdEFnZTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKSBkYXlCYXNlZFZhbGlkYXRpb25GZWF0dXJlRmxhZz86IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAVmlld0NoaWxkKCdkYXknKSBkYXlJbnB1dEZpZWxkOiBJbnB1dENvbXBvbmVudDtcbiAgQFZpZXdDaGlsZCgneWVhcicpIHllYXJJbnB1dEZpZWxkOiBJbnB1dENvbXBvbmVudDtcblxuICBwcml2YXRlIE1JTl9ERUZBVUxUX0xFR0FMX0FHRSA9IDE4O1xuICBvcHRpb25zOiBJbnB1dE9wdGlvbltdO1xuXG4gIHJlYWRvbmx5IE1BWF9ERUZBVUxUX0xFR0FMX0FHRSA9IDExMDtcbiAgcmVhZG9ubHkgTU9NRU5UX0RBVEVfRk9STUFUID0gJ0REL01NL1lZWVknO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBtaW5EZWZhdWx0TGVnYWxBZ2UodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuTUlOX0RFRkFVTFRfTEVHQUxfQUdFID0gdmFsdWUgfHwgdmFsdWUgPT09IDAgPyB2YWx1ZSA6IDE4O1xuICB9XG5cbiAgZ2V0IG1pbkRlZmF1bHRMZWdhbEFnZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLk1JTl9ERUZBVUxUX0xFR0FMX0FHRTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLmdldFRyYW5zbGF0ZWREYXlPck1vbnRoTmFtZXMoJ21vbnRocycpLm1hcChcbiAgICAgIChtb250aCwgaW5kZXgpID0+IG5ldyBJbnB1dE9wdGlvbihTdHJpbmcoaW5kZXggKyAxKSwgU3RyaW5nKG1vbnRoKSlcbiAgICApO1xuICAgIHRoaXMuZm9ybS5hZGRDb250cm9sKFxuICAgICAgJ2RheScsXG4gICAgICBuZXcgRm9ybUNvbnRyb2wodGhpcy5kYXksIHtcbiAgICAgICAgdmFsaWRhdG9yczogW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMucGF0dGVybihBYnN0cmFjdERhdGVPZkJpcnRoUGlja2VyQ29tcG9uZW50LkRPQl9EQVlfUkVHRVgpXSxcbiAgICAgICAgdXBkYXRlT246ICdibHVyJyxcbiAgICAgIH0pXG4gICAgKTtcbiAgICB0aGlzLmZvcm0uYWRkQ29udHJvbChcbiAgICAgICdzZWxlY3RlZE1vbnRoJyxcbiAgICAgIG5ldyBGb3JtQ29udHJvbCh0aGlzLm1vbnRoLCB7XG4gICAgICAgIHZhbGlkYXRvcnM6IFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLnBhdHRlcm4oQWJzdHJhY3REYXRlT2ZCaXJ0aFBpY2tlckNvbXBvbmVudC5ET0JfTU9OVEhfUkVHRVgpXSxcbiAgICAgIH0pXG4gICAgKTtcbiAgICB0aGlzLmZvcm0uYWRkQ29udHJvbChcbiAgICAgICd5ZWFyJyxcbiAgICAgIG5ldyBGb3JtQ29udHJvbCh0aGlzLnllYXIsIHtcbiAgICAgICAgdmFsaWRhdG9yczogW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMucGF0dGVybihBYnN0cmFjdERhdGVPZkJpcnRoUGlja2VyQ29tcG9uZW50LkRPQl9ZRUFSX1JFR0VYKV0sXG4gICAgICAgIHVwZGF0ZU9uOiAnYmx1cicsXG4gICAgICB9KVxuICAgICk7XG4gICAgdGhpcy5kZXRlY3RGb3JtQ29udHJvbHNWYWx1ZUNoYW5nZSgpO1xuICB9XG5cbiAgZ2V0VHJhbnNsYXRlZERheU9yTW9udGhOYW1lcyh0eXBlOiBzdHJpbmcpOiBJTW9udGhbXSB7XG4gICAgY29uc3Qgbm9PZkRheXMgPSB0eXBlID09PSAnZGF5cycgPyA3IDogMTIsXG4gICAgICBrZXkgPSB0eXBlID09PSAnZGF5cycgPyAnZ2VuZXJhbC5kYXRlLXBpY2tlci1kYXktJyA6ICdnZW5lcmFsLmRhdGUtcGlja2VyLW1vbnRoLSc7XG4gICAgcmV0dXJuIHRpbWVzKG5vT2ZEYXlzLCAoaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG1vbnRoSW5kZXggPSBpbmRleCArIDE7XG4gICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoa2V5ICsgbW9udGhJbmRleCk7XG4gICAgfSk7XG4gIH1cblxuICBkZXRlY3RGb3JtQ29udHJvbHNWYWx1ZUNoYW5nZSgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm0udmFsdWVDaGFuZ2VzLnBpcGUodW50aWxEZXN0cm95ZWQodGhpcykpLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICAgIGNvbnN0IGRheTogbnVtYmVyID0gdmFsdWUuZGF5ID8gdmFsdWUuZGF5IDogbnVsbDtcbiAgICAgIGNvbnN0IG1vbnRoOiBudW1iZXIgPSB2YWx1ZS5zZWxlY3RlZE1vbnRoID8gdmFsdWUuc2VsZWN0ZWRNb250aCA6IG51bGw7XG4gICAgICBjb25zdCB5ZWFyOiBudW1iZXIgPSB2YWx1ZS55ZWFyID8gdmFsdWUueWVhciA6IG51bGw7XG4gICAgICBjb25zdCBzZWxlY3RlZERhdGUgPSBkYXlqcygpLm1vbnRoKG1vbnRoKS5kYXRlKGRheSkueWVhcih5ZWFyKTtcbiAgICAgIGlmICghc2VsZWN0ZWREYXRlLmlzVmFsaWQoKSkge1xuICAgICAgICB0aGlzLmZvcm0uc2V0RXJyb3JzKG51bGwpO1xuICAgICAgfVxuICAgICAgdGhpcy52YWxpZGF0ZURheUJhc2VkT25Nb250aCgpO1xuICAgICAgaWYgKGRheSAmJiBtb250aCAmJiB5ZWFyKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlVmFsaWRhdGlvbkVycm9ycygpO1xuICAgICAgICB0aGlzLmNoZWNrRGF5KHNlbGVjdGVkRGF0ZSk7XG4gICAgICAgIHRoaXMuY2hlY2tZZWFyKCk7XG4gICAgICAgIHRoaXMuY2hlY2tEYXRlKHNlbGVjdGVkRGF0ZSwgZGF5anMoKS5hZGQoMSwgJ21vbnRocycpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHZhbGlkYXRlRGF5QmFzZWRPbk1vbnRoKCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG4gICAgbGV0IGlzVmFsaWQ6IGFueTtcbiAgICBpZiAodGhpcy5kYXlCYXNlZFZhbGlkYXRpb25GZWF0dXJlRmxhZyAmJiB0aGlzLmZvcm0udmFsdWUuZGF5ICYmIHRoaXMuZm9ybS52YWx1ZS5zZWxlY3RlZE1vbnRoICYmIHRoaXMpIHtcbiAgICAgIHRoaXMuZm9ybS52YWx1ZUNoYW5nZXMucGlwZSh1bnRpbERlc3Ryb3llZCh0aGlzKSkuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBkYXkgPSBOdW1iZXIodmFsdWUuZGF5KTtcbiAgICAgICAgY29uc3QgeWVhciA9IE51bWJlcih2YWx1ZS55ZWFyKTtcbiAgICAgICAgY29uc3QgbW9udGggPSBOdW1iZXIodmFsdWUuc2VsZWN0ZWRNb250aCk7XG4gICAgICAgIGlzVmFsaWQgPSB5ZWFyICE9PSAwID8gdGhpcy5pc1ZhbGlkRGF0ZSh5ZWFyLCBtb250aCwgZGF5KSA6IHRoaXMuaXNWYWxpZERheUZvck1vbnRoKG1vbnRoLCBkYXkpO1xuICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICB0aGlzLmRheUlucHV0RmllbGQuc2V0RXJyb3IoeyBpbnZhbGlkRGF0ZTogdHJ1ZSB9KTtcbiAgICAgICAgICB0aGlzLmZvcm0uZ2V0KCdkYXknKT8uc2V0RXJyb3JzKHsgaW52YWxpZERhdGU6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gaXNWYWxpZDtcbiAgfVxuXG4gIGlzVmFsaWREYXRlKHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlciwgZGF5OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBjb25zdCBub09mRGF5cyA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCAwKS5nZXREYXRlKCk7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5KTtcbiAgICByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpID09PSB5ZWFyICYmIGRhdGUuZ2V0TW9udGgoKSA9PT0gbW9udGggLSAxICYmIGRhdGUuZ2V0RGF0ZSgpID09PSBkYXkgJiYgZGF5IDw9IG5vT2ZEYXlzO1xuICB9XG5cbiAgaXNWYWxpZERheUZvck1vbnRoKG1vbnRoOiBudW1iZXIsIGRheTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgY29uc3Qgbm9PZkRheXMgPSBuZXcgRGF0ZSgwLCBtb250aCwgMCkuZ2V0RGF0ZSgpO1xuICAgIHJldHVybiBkYXkgPD0gbm9PZkRheXM7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrWWVhcigpIHtcbiAgICBjb25zdCB5ZWFyRXJyb3JzID0gdGhpcy5mb3JtLmdldCgneWVhcicpPy5lcnJvcnM7XG4gICAgaWYgKHllYXJFcnJvcnM/LlsncGF0dGVybiddKSB7XG4gICAgICB0aGlzLnllYXJJbnB1dEZpZWxkLnNldEVycm9yKHsgaW52YWxpZDogdHJ1ZSB9KTtcbiAgICAgIHRoaXMuZm9ybS5nZXQoJ3llYXInKT8uc2V0RXJyb3JzKHsgaW52YWxpZDogdHJ1ZSB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNoZWNrRGF5KHNlbGVjdGVkRGF0ZTogRGF5anMpIHtcbiAgICBjb25zdCB5ZWFyRXJyb3JzID0gdGhpcy5mb3JtLmdldCgneWVhcicpO1xuICAgIGlmICghc2VsZWN0ZWREYXRlLmlzVmFsaWQoKSAmJiAheWVhckVycm9ycz8uZXJyb3JzKSB7XG4gICAgICB0aGlzLmRheUlucHV0RmllbGQuc2V0RXJyb3IoeyBpbnZhbGlkOiB0cnVlIH0pO1xuICAgICAgdGhpcy5mb3JtLmdldCgnZGF5Jyk/LnNldEVycm9ycyh7IGludmFsaWQ6IHRydWUgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0RhdGUoc2VsZWN0ZWREYXRlOiBEYXlqcywgY3VycmVudERhdGU6IERheWpzKTogdm9pZCB7XG4gICAgY29uc3QgeWVhckVycm9ycyA9IHRoaXMuZm9ybS5nZXQoJ3llYXInKT8uZXJyb3JzO1xuICAgIGNvbnN0IGRheUVycm9ycyA9IHRoaXMuZm9ybS5nZXQoJ2RheScpPy5lcnJvcnM7XG4gICAgaWYgKHNlbGVjdGVkRGF0ZS5pc1ZhbGlkKCkgJiYgIXllYXJFcnJvcnMgJiYgIWRheUVycm9ycykge1xuICAgICAgY29uc3QgbWF4TGVnYWxBZ2UgPSBkYXlqcyhjdXJyZW50RGF0ZSkuYWRkKDEsICdtb250aHMnKS5hZGQoLXRoaXMuTUFYX0RFRkFVTFRfTEVHQUxfQUdFLCAneWVhcnMnKTtcbiAgICAgIGNvbnN0IG1pbkxlZ2FsQWdlID0gZGF5anMoY3VycmVudERhdGUpLmFkZCgxLCAnbW9udGhzJykuYWRkKC10aGlzLk1JTl9ERUZBVUxUX0xFR0FMX0FHRSwgJ3llYXJzJyk7XG4gICAgICBzZWxlY3RlZERhdGUuaXNBZnRlcihkYXlqcyhtaW5MZWdhbEFnZSkpO1xuICAgICAgaWYgKHNlbGVjdGVkRGF0ZS5pc0FmdGVyKGN1cnJlbnREYXRlKSkge1xuICAgICAgICB0aGlzLnNldEludmFsaWRCaXJ0aERhdGVFcnJvcignbmcuZG9iLmVycm9yLWRvYi1jb25zdHJhaW50Jyk7XG4gICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkRGF0ZS5pc0JlZm9yZShtYXhMZWdhbEFnZSkgfHwgc2VsZWN0ZWREYXRlLmlzQWZ0ZXIobWluTGVnYWxBZ2UpKSB7XG4gICAgICAgIHRoaXMuc2V0SW52YWxpZEJpcnRoRGF0ZUVycm9yKCduZy5kb2IuZXJyb3ItYWdlLWNvbnN0cmFpbnQnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZVZhbGlkYXRpb25FcnJvcnMoKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtLnNldEVycm9ycyhudWxsKTtcbiAgICB0aGlzLmRheUlucHV0RmllbGQ/LnNldEVycm9yKG51bGwpO1xuICAgIHRoaXMuZm9ybS5nZXQoJ2RheScpPy5zZXRFcnJvcnMobnVsbCk7XG4gICAgdGhpcy55ZWFySW5wdXRGaWVsZC5zZXRFcnJvcihudWxsKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0SW52YWxpZEJpcnRoRGF0ZUVycm9yKGVycm9yVmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuZm9ybS5zZXRFcnJvcnMoeyBpbnZhbGlkQmlydGhEYXRlOiB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuaW5zdGFudChlcnJvclZhbHVlKSB9KTtcbiAgfVxufVxuIiwiRG8gbm90IHVzZSB0aGUgYWJzdHJhY3QgY29tcG9uZW50IVxuIl19