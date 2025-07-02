import { Component, Input, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { each, filter } from 'lodash-es';
import { RegexConstants } from '../../constants';
import { MACAddressConstants } from './constants';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "../../errors/form.directive";
import * as i4 from "@ngx-translate/core";
const _c0 = ["formRow"];
function MACAddressComponent_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 4, 5);
    i0.ɵɵlistener("keyup", function MACAddressComponent_input_2_Template_input_keyup_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r7); const i_r4 = restoredCtx.index; const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.keyUpEvent($event, i_r4)); })("blur", function MACAddressComponent_input_2_Template_input_blur_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.getFullMACAddress()); })("paste", function MACAddressComponent_input_2_Template_input_paste_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r9 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r9.onPaste($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const input_r3 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("formControlName", input_r3);
} }
function MACAddressComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 7);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 1, "ng.mac-address.lbl.mac-address-error"), " ");
} }
function MACAddressComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 7);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 1, "ng.mac-address.lbl.mac-address-invalid"), " ");
} }
export class MACAddressComponent {
    macAddressForm = new FormGroup({});
    formInput = ['input0', 'input1', 'input2', 'input3', 'input4', 'input5'];
    rows;
    macAddress;
    canShowError;
    isValidMacAddress = true;
    isValuedCopied = false;
    constructor() {
        this.macAddressForm = this.toFormGroup(this.formInput);
    }
    ngOnInit() {
        if (this.macAddress) {
            const macAddressArray = this.macAddress.split(':');
            macAddressArray.forEach((value, i) => {
                const controlName = 'input' + i;
                this.macAddressForm.controls[controlName].setValue(value);
            });
        }
    }
    isValidMacAddressEntered() {
        let isValidMacAddressValue = true;
        if (!this.macAddress && this.macAddressForm.invalid) {
            this.rows.get(0)?.nativeElement.focus();
            this.macAddressForm.markAllAsTouched();
            this.canShowError = true;
            isValidMacAddressValue = false;
        }
        if (!RegexConstants.MAC_ADDRESS.test(this.macAddress)) {
            this.setErrorForFormControls(true);
            this.isValidMacAddress = false;
            isValidMacAddressValue = false;
        }
        return isValidMacAddressValue;
    }
    showError() {
        return this.macAddressForm.invalid && this.allElementsTouched();
    }
    getFullMACAddress() {
        this.canShowError = false;
        let currentMacAddress = '';
        each(this.macAddressForm.controls, function (input, index) {
            if (input.value) {
                currentMacAddress += index === 'input5' ? input.value : input.value + ':';
            }
        });
        this.macAddress = currentMacAddress;
        this.isValidMacAddress = true;
    }
    keyUpEvent(event, index) {
        const keyboardEvent = event;
        const position = keyboardEvent.code === '8' && keyboardEvent.key === MACAddressConstants.BACKSPACE ? index - 1 : index + 1;
        const isBackSpaceKeyAndValueEmpty = this.chechBackSpaceKeyAndValueEmpty(keyboardEvent);
        if (keyboardEvent.target) {
            if (keyboardEvent.code === '32') {
                keyboardEvent.target.value = '';
                keyboardEvent.preventDefault?.();
            }
            else if (position > -1 &&
                position < this.formInput.length &&
                ((!this.isValuedCopied && keyboardEvent.target.value.length === 2) ||
                    isBackSpaceKeyAndValueEmpty)) {
                this.rows.get(position)?.nativeElement.focus();
            }
        }
        if (this.isValuedCopied) {
            this.rows.get(5)?.nativeElement.focus();
            this.isValuedCopied = false;
        }
    }
    getMacAddressComplexityClass() {
        if (!this.macAddress) {
            return MACAddressConstants.DEFAULT_CLASS;
        }
        else if (this.showError()) {
            return MACAddressConstants.ERROR_CLASS;
        }
        else if (this.macAddress && this.macAddress.length < 12) {
            return MACAddressConstants.FAIR_CLASS;
        }
        return MACAddressConstants.VALID_CLASS;
    }
    onPaste(event) {
        const clipboardData = event.clipboardData;
        const pastedText = clipboardData?.getData('text') || '';
        const macAddress = pastedText.indexOf('-') > -1 ? pastedText.split('-') : pastedText.split(':');
        if (macAddress.length > 0) {
            macAddress.forEach((value, i) => {
                const controlName = 'input' + i;
                this.macAddressForm.controls[controlName].setValue(value);
            });
            this.isValuedCopied = true;
        }
    }
    toFormGroup(elements) {
        const group = {};
        elements.forEach((key) => {
            group[key] = new FormControl('', Validators.required);
        });
        return new FormGroup(group);
    }
    setErrorForFormControls(isInvalid) {
        Object.keys(this.macAddressForm.controls).forEach((controlName) => {
            const formControl = this.macAddressForm.controls[controlName];
            isInvalid ? formControl.setErrors({ InvalidMAC: true }) : formControl.setErrors(null);
        });
    }
    allElementsTouched() {
        return (filter(this.formInput, (input) => {
            return !this.macAddressForm.controls[input].touched;
        }).length === 0);
    }
    chechBackSpaceKeyAndValueEmpty(event) {
        return event.key === MACAddressConstants.BACKSPACE && event.target.value.length === 0;
    }
    static ɵfac = function MACAddressComponent_Factory(t) { return new (t || MACAddressComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MACAddressComponent, selectors: [["app-mac-address"]], viewQuery: function MACAddressComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.rows = _t);
        } }, inputs: { macAddress: "macAddress" }, decls: 5, vars: 4, consts: [[3, "formGroup"], [1, "display--flex"], ["type", "text", "class", "form__input pid-profile__otp-value-container mr--xxs text-align--center pl-5", "required", "true", "placeholder", "00", "maxlength", "2", 3, "formControlName", "keyup", "blur", "paste", 4, "ngFor", "ngForOf"], ["class", "formErrorInput", 4, "ngIf"], ["type", "text", "required", "true", "placeholder", "00", "maxlength", "2", 1, "form__input", "pid-profile__otp-value-container", "mr--xxs", "text-align--center", "pl-5", 3, "formControlName", "keyup", "blur", "paste"], ["formRow", ""], [1, "formErrorInput"], [1, "color-red", "text--s", "text-align--left", "cursor--default"]], template: function MACAddressComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 0)(1, "div", 1);
            i0.ɵɵtemplate(2, MACAddressComponent_input_2_Template, 2, 1, "input", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, MACAddressComponent_div_3_Template, 4, 3, "div", 3)(4, MACAddressComponent_div_4_Template, 4, 3, "div", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("formGroup", ctx.macAddressForm);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.formInput);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showError() && ctx.isValidMacAddress && ctx.canShowError);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.isValidMacAddress);
        } }, dependencies: [i1.NgForOf, i1.NgIf, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MaxLengthValidator, i2.FormGroupDirective, i2.FormControlName, i3.FormDirective, i4.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MACAddressComponent, [{
        type: Component,
        args: [{ selector: 'app-mac-address', template: "<form [formGroup]=\"macAddressForm\">\n  <div class=\"display--flex\">\n    <input\n      *ngFor=\"let input of formInput; index as i\"\n      #formRow\n      type=\"text\"\n      formControlName=\"{{ input }}\"\n      class=\"form__input pid-profile__otp-value-container mr--xxs text-align--center pl-5\"\n      required=\"true\"\n      placeholder=\"00\"\n      maxlength=\"2\"\n      (keyup)=\"keyUpEvent($event, i)\"\n      (blur)=\"getFullMACAddress()\"\n      (paste)=\"onPaste($event)\" />\n  </div>\n  <div class=\"formErrorInput\" *ngIf=\"showError() && isValidMacAddress && canShowError\">\n    <div class=\"color-red text--s text-align--left cursor--default\">\n      {{ 'ng.mac-address.lbl.mac-address-error' | translate }}\n    </div>\n  </div>\n  <div class=\"formErrorInput\" *ngIf=\"!isValidMacAddress\">\n    <div class=\"color-red text--s text-align--left cursor--default\">\n      {{ 'ng.mac-address.lbl.mac-address-invalid' | translate }}\n    </div>\n  </div>\n</form>\n" }]
    }], () => [], { rows: [{
            type: ViewChildren,
            args: ['formRow']
        }], macAddress: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MACAddressComponent, { className: "MACAddressComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFjLWFkZHJlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xzL21hYy1hZGRyZXNzL21hYy1hZGRyZXNzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3NyYy9jb250cm9scy9tYWMtYWRkcmVzcy9tYWMtYWRkcmVzcy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBcUIsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7Ozs7OztJQ0Y5QyxtQ0FXOEI7SUFGNUIsMk5BQVMsZUFBQSwrQkFBcUIsQ0FBQSxJQUFDLGtKQUN2QixlQUFBLDBCQUFtQixDQUFBLElBREksMEpBRXRCLGVBQUEsc0JBQWUsQ0FBQSxJQUZPO0lBVGpDLGlCQVc4Qjs7O0lBUDVCLHFEQUE2Qjs7O0lBU2pDLDhCQUFxRixhQUFBO0lBRWpGLFlBQ0Y7O0lBQUEsaUJBQU0sRUFBQTs7SUFESixlQUNGO0lBREUsNkZBQ0Y7OztJQUVGLDhCQUF1RCxhQUFBO0lBRW5ELFlBQ0Y7O0lBQUEsaUJBQU0sRUFBQTs7SUFESixlQUNGO0lBREUsK0ZBQ0Y7O0FEYkosTUFBTSxPQUFPLG1CQUFtQjtJQUM5QixjQUFjLEdBQWMsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUMsU0FBUyxHQUFhLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFB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O1lBQXRELG1GQUFzRDtZQUt0RCxjQUF3QjtZQUF4Qiw2Q0FBd0I7OztpRkRWMUMsbUJBQW1CO2NBSi9CLFNBQVM7MkJBQ0UsaUJBQWlCO29CQU1GLElBQUk7a0JBQTVCLFlBQVk7bUJBQUMsU0FBUztZQUNkLFVBQVU7a0JBQWxCLEtBQUs7O2tGQUpLLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgUXVlcnlMaXN0LCBWaWV3Q2hpbGRyZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBlYWNoLCBmaWx0ZXIgfSBmcm9tICdsb2Rhc2gtZXMnO1xuaW1wb3J0IHsgUmVnZXhDb25zdGFudHMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgTUFDQWRkcmVzc0NvbnN0YW50cyB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLW1hYy1hZGRyZXNzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21hYy1hZGRyZXNzLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTUFDQWRkcmVzc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG1hY0FkZHJlc3NGb3JtOiBGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHt9KTtcbiAgZm9ybUlucHV0OiBzdHJpbmdbXSA9IFsnaW5wdXQwJywgJ2lucHV0MScsICdpbnB1dDInLCAnaW5wdXQzJywgJ2lucHV0NCcsICdpbnB1dDUnXTtcbiAgQFZpZXdDaGlsZHJlbignZm9ybVJvdycpIHJvd3M6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcbiAgQElucHV0KCkgbWFjQWRkcmVzczogc3RyaW5nO1xuICBjYW5TaG93RXJyb3I6IGJvb2xlYW47XG4gIGlzVmFsaWRNYWNBZGRyZXNzID0gdHJ1ZTtcbiAgaXNWYWx1ZWRDb3BpZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1hY0FkZHJlc3NGb3JtID0gdGhpcy50b0Zvcm1Hcm91cCh0aGlzLmZvcm1JbnB1dCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5tYWNBZGRyZXNzKSB7XG4gICAgICBjb25zdCBtYWNBZGRyZXNzQXJyYXkgPSB0aGlzLm1hY0FkZHJlc3Muc3BsaXQoJzonKTtcbiAgICAgIG1hY0FkZHJlc3NBcnJheS5mb3JFYWNoKCh2YWx1ZSwgaSkgPT4ge1xuICAgICAgICBjb25zdCBjb250cm9sTmFtZSA9ICdpbnB1dCcgKyBpO1xuICAgICAgICB0aGlzLm1hY0FkZHJlc3NGb3JtLmNvbnRyb2xzW2NvbnRyb2xOYW1lXS5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBpc1ZhbGlkTWFjQWRkcmVzc0VudGVyZWQoKTogYm9vbGVhbiB7XG4gICAgbGV0IGlzVmFsaWRNYWNBZGRyZXNzVmFsdWUgPSB0cnVlO1xuICAgIGlmICghdGhpcy5tYWNBZGRyZXNzICYmIHRoaXMubWFjQWRkcmVzc0Zvcm0uaW52YWxpZCkge1xuICAgICAgdGhpcy5yb3dzLmdldCgwKT8ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgdGhpcy5tYWNBZGRyZXNzRm9ybS5tYXJrQWxsQXNUb3VjaGVkKCk7XG4gICAgICB0aGlzLmNhblNob3dFcnJvciA9IHRydWU7XG4gICAgICBpc1ZhbGlkTWFjQWRkcmVzc1ZhbHVlID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICghUmVnZXhDb25zdGFudHMuTUFDX0FERFJFU1MudGVzdCh0aGlzLm1hY0FkZHJlc3MpKSB7XG4gICAgICB0aGlzLnNldEVycm9yRm9yRm9ybUNvbnRyb2xzKHRydWUpO1xuICAgICAgdGhpcy5pc1ZhbGlkTWFjQWRkcmVzcyA9IGZhbHNlO1xuICAgICAgaXNWYWxpZE1hY0FkZHJlc3NWYWx1ZSA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gaXNWYWxpZE1hY0FkZHJlc3NWYWx1ZTtcbiAgfVxuXG4gIHNob3dFcnJvcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tYWNBZGRyZXNzRm9ybS5pbnZhbGlkICYmIHRoaXMuYWxsRWxlbWVudHNUb3VjaGVkKCk7XG4gIH1cblxuICBnZXRGdWxsTUFDQWRkcmVzcygpOiB2b2lkIHtcbiAgICB0aGlzLmNhblNob3dFcnJvciA9IGZhbHNlO1xuICAgIGxldCBjdXJyZW50TWFjQWRkcmVzcyA9ICcnO1xuICAgIGVhY2godGhpcy5tYWNBZGRyZXNzRm9ybS5jb250cm9scywgZnVuY3Rpb24gKGlucHV0LCBpbmRleCkge1xuICAgICAgaWYgKGlucHV0LnZhbHVlKSB7XG4gICAgICAgIGN1cnJlbnRNYWNBZGRyZXNzICs9IGluZGV4ID09PSAnaW5wdXQ1JyA/IGlucHV0LnZhbHVlIDogaW5wdXQudmFsdWUgKyAnOic7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5tYWNBZGRyZXNzID0gY3VycmVudE1hY0FkZHJlc3M7XG4gICAgdGhpcy5pc1ZhbGlkTWFjQWRkcmVzcyA9IHRydWU7XG4gIH1cblxuICBrZXlVcEV2ZW50KGV2ZW50OiBLZXlib2FyZEV2ZW50IHwgdW5rbm93biwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGtleWJvYXJkRXZlbnQgPSBldmVudCBhcyBLZXlib2FyZEV2ZW50O1xuICAgIGNvbnN0IHBvc2l0aW9uOiBudW1iZXIgPVxuICAgICAga2V5Ym9hcmRFdmVudC5jb2RlID09PSAnOCcgJiYga2V5Ym9hcmRFdmVudC5rZXkgPT09IE1BQ0FkZHJlc3NDb25zdGFudHMuQkFDS1NQQUNFID8gaW5kZXggLSAxIDogaW5kZXggKyAxO1xuICAgIGNvbnN0IGlzQmFja1NwYWNlS2V5QW5kVmFsdWVFbXB0eTogYm9vbGVhbiA9IHRoaXMuY2hlY2hCYWNrU3BhY2VLZXlBbmRWYWx1ZUVtcHR5KGtleWJvYXJkRXZlbnQpO1xuICAgIGlmIChrZXlib2FyZEV2ZW50LnRhcmdldCkge1xuICAgICAgaWYgKGtleWJvYXJkRXZlbnQuY29kZSA9PT0gJzMyJykge1xuICAgICAgICAoa2V5Ym9hcmRFdmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPSAnJztcbiAgICAgICAga2V5Ym9hcmRFdmVudC5wcmV2ZW50RGVmYXVsdD8uKCk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBwb3NpdGlvbiA+IC0xICYmXG4gICAgICAgIHBvc2l0aW9uIDwgdGhpcy5mb3JtSW5wdXQubGVuZ3RoICYmXG4gICAgICAgICgoIXRoaXMuaXNWYWx1ZWRDb3BpZWQgJiYgKGtleWJvYXJkRXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLmxlbmd0aCA9PT0gMikgfHxcbiAgICAgICAgICBpc0JhY2tTcGFjZUtleUFuZFZhbHVlRW1wdHkpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5yb3dzLmdldChwb3NpdGlvbik/Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuaXNWYWx1ZWRDb3BpZWQpIHtcbiAgICAgIHRoaXMucm93cy5nZXQoNSk/Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIHRoaXMuaXNWYWx1ZWRDb3BpZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBnZXRNYWNBZGRyZXNzQ29tcGxleGl0eUNsYXNzKCk6IHN0cmluZyB7XG4gICAgaWYgKCF0aGlzLm1hY0FkZHJlc3MpIHtcbiAgICAgIHJldHVybiBNQUNBZGRyZXNzQ29uc3RhbnRzLkRFRkFVTFRfQ0xBU1M7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNob3dFcnJvcigpKSB7XG4gICAgICByZXR1cm4gTUFDQWRkcmVzc0NvbnN0YW50cy5FUlJPUl9DTEFTUztcbiAgICB9IGVsc2UgaWYgKHRoaXMubWFjQWRkcmVzcyAmJiB0aGlzLm1hY0FkZHJlc3MubGVuZ3RoIDwgMTIpIHtcbiAgICAgIHJldHVybiBNQUNBZGRyZXNzQ29uc3RhbnRzLkZBSVJfQ0xBU1M7XG4gICAgfVxuICAgIHJldHVybiBNQUNBZGRyZXNzQ29uc3RhbnRzLlZBTElEX0NMQVNTO1xuICB9XG5cbiAgb25QYXN0ZShldmVudDogQ2xpcGJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBjbGlwYm9hcmREYXRhID0gZXZlbnQuY2xpcGJvYXJkRGF0YTtcbiAgICBjb25zdCBwYXN0ZWRUZXh0ID0gY2xpcGJvYXJkRGF0YT8uZ2V0RGF0YSgndGV4dCcpIHx8ICcnO1xuICAgIGNvbnN0IG1hY0FkZHJlc3M6IHN0cmluZ1tdID0gcGFzdGVkVGV4dC5pbmRleE9mKCctJykgPiAtMSA/IHBhc3RlZFRleHQuc3BsaXQoJy0nKSA6IHBhc3RlZFRleHQuc3BsaXQoJzonKTtcbiAgICBpZiAobWFjQWRkcmVzcy5sZW5ndGggPiAwKSB7XG4gICAgICBtYWNBZGRyZXNzLmZvckVhY2goKHZhbHVlOiBzdHJpbmcsIGk6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBjb250cm9sTmFtZSA9ICdpbnB1dCcgKyBpO1xuICAgICAgICB0aGlzLm1hY0FkZHJlc3NGb3JtLmNvbnRyb2xzW2NvbnRyb2xOYW1lXS5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuaXNWYWx1ZWRDb3BpZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdG9Gb3JtR3JvdXAoZWxlbWVudHM6IHN0cmluZ1tdKTogRm9ybUdyb3VwIHtcbiAgICBjb25zdCBncm91cDogUmVjb3JkPHN0cmluZywgRm9ybUNvbnRyb2w+ID0ge307XG4gICAgZWxlbWVudHMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBncm91cFtrZXldID0gbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3IEZvcm1Hcm91cChncm91cCk7XG4gIH1cblxuICBwcml2YXRlIHNldEVycm9yRm9yRm9ybUNvbnRyb2xzKGlzSW52YWxpZDogYm9vbGVhbikge1xuICAgIE9iamVjdC5rZXlzKHRoaXMubWFjQWRkcmVzc0Zvcm0uY29udHJvbHMpLmZvckVhY2goKGNvbnRyb2xOYW1lKSA9PiB7XG4gICAgICBjb25zdCBmb3JtQ29udHJvbCA9IHRoaXMubWFjQWRkcmVzc0Zvcm0uY29udHJvbHNbY29udHJvbE5hbWVdO1xuICAgICAgaXNJbnZhbGlkID8gZm9ybUNvbnRyb2wuc2V0RXJyb3JzKHsgSW52YWxpZE1BQzogdHJ1ZSB9KSA6IGZvcm1Db250cm9sLnNldEVycm9ycyhudWxsKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYWxsRWxlbWVudHNUb3VjaGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICBmaWx0ZXIodGhpcy5mb3JtSW5wdXQsIChpbnB1dCkgPT4ge1xuICAgICAgICByZXR1cm4gIXRoaXMubWFjQWRkcmVzc0Zvcm0uY29udHJvbHNbaW5wdXRdLnRvdWNoZWQ7XG4gICAgICB9KS5sZW5ndGggPT09IDBcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVjaEJhY2tTcGFjZUtleUFuZFZhbHVlRW1wdHkoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZXZlbnQua2V5ID09PSBNQUNBZGRyZXNzQ29uc3RhbnRzLkJBQ0tTUEFDRSAmJiAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLmxlbmd0aCA9PT0gMDtcbiAgfVxufVxuIiwiPGZvcm0gW2Zvcm1Hcm91cF09XCJtYWNBZGRyZXNzRm9ybVwiPlxuICA8ZGl2IGNsYXNzPVwiZGlzcGxheS0tZmxleFwiPlxuICAgIDxpbnB1dFxuICAgICAgKm5nRm9yPVwibGV0IGlucHV0IG9mIGZvcm1JbnB1dDsgaW5kZXggYXMgaVwiXG4gICAgICAjZm9ybVJvd1xuICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgZm9ybUNvbnRyb2xOYW1lPVwie3sgaW5wdXQgfX1cIlxuICAgICAgY2xhc3M9XCJmb3JtX19pbnB1dCBwaWQtcHJvZmlsZV9fb3RwLXZhbHVlLWNvbnRhaW5lciBtci0teHhzIHRleHQtYWxpZ24tLWNlbnRlciBwbC01XCJcbiAgICAgIHJlcXVpcmVkPVwidHJ1ZVwiXG4gICAgICBwbGFjZWhvbGRlcj1cIjAwXCJcbiAgICAgIG1heGxlbmd0aD1cIjJcIlxuICAgICAgKGtleXVwKT1cImtleVVwRXZlbnQoJGV2ZW50LCBpKVwiXG4gICAgICAoYmx1cik9XCJnZXRGdWxsTUFDQWRkcmVzcygpXCJcbiAgICAgIChwYXN0ZSk9XCJvblBhc3RlKCRldmVudClcIiAvPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImZvcm1FcnJvcklucHV0XCIgKm5nSWY9XCJzaG93RXJyb3IoKSAmJiBpc1ZhbGlkTWFjQWRkcmVzcyAmJiBjYW5TaG93RXJyb3JcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sb3ItcmVkIHRleHQtLXMgdGV4dC1hbGlnbi0tbGVmdCBjdXJzb3ItLWRlZmF1bHRcIj5cbiAgICAgIHt7ICduZy5tYWMtYWRkcmVzcy5sYmwubWFjLWFkZHJlc3MtZXJyb3InIHwgdHJhbnNsYXRlIH19XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZm9ybUVycm9ySW5wdXRcIiAqbmdJZj1cIiFpc1ZhbGlkTWFjQWRkcmVzc1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2xvci1yZWQgdGV4dC0tcyB0ZXh0LWFsaWduLS1sZWZ0IGN1cnNvci0tZGVmYXVsdFwiPlxuICAgICAge3sgJ25nLm1hYy1hZGRyZXNzLmxibC5tYWMtYWRkcmVzcy1pbnZhbGlkJyB8IHRyYW5zbGF0ZSB9fVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZm9ybT5cbiJdfQ==