import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DuidFormatValidator, MinMaxLengthsValidator } from './validators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "../../errors/form.directive";
import * as i4 from "@ngx-translate/core";
function DuidComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4)(1, "div", 5);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 1, "ng.duid.lbl.duid-length-error"), " ");
} }
export class DuidComponent {
    duidFormGroup;
    duid;
    ngOnInit() {
        this.duidFormGroup.addControl('duidField', new FormControl(this.duid, [Validators.required, MinMaxLengthsValidator, DuidFormatValidator]));
    }
    keyUpEvent(event) {
        const keyboardEvent = event;
        if (keyboardEvent.key !== 'Backspace') {
            const value = this.duidFormGroup.controls['duidField'].value;
            const newValue = value.replace(/:/g, '');
            this.duidFormGroup.controls['duidField'].setValue(newValue.replace(/.{2}(?!$)/g, '$&:'));
        }
    }
    keyPressEvent(event) {
        const keyboardEvent = event;
        const keyCharCode = keyboardEvent.key.charCodeAt(0);
        // 0-9
        if (keyCharCode >= 48 && keyCharCode <= 57) {
            return keyboardEvent.key;
        }
        // A-Z
        if (keyCharCode >= 65 && keyCharCode <= 90) {
            return keyboardEvent.key;
        }
        // a-z
        if (keyCharCode >= 97 && keyCharCode <= 122) {
            return keyboardEvent.key;
        }
        // backspace
        if (keyCharCode === 8) {
            return keyboardEvent.key;
        }
        return false;
    }
    static ɵfac = function DuidComponent_Factory(t) { return new (t || DuidComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DuidComponent, selectors: [["app-duid"]], inputs: { duidFormGroup: "duidFormGroup", duid: "duid" }, decls: 5, vars: 5, consts: [[3, "formGroup"], [1, "display--flex"], ["type", "text", "formControlName", "duidField", "required", "true", "maxlength", "41", 1, "form__input", "mr--xxs", "text-align--left", 3, "placeholder", "keyup", "keypress"], ["class", "formErrorInput", 4, "ngIf"], [1, "formErrorInput"], [1, "color-red", "text--s", "text-align--left", "cursor--default"]], template: function DuidComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 0)(1, "div", 1)(2, "input", 2);
            i0.ɵɵlistener("keyup", function DuidComponent_Template_input_keyup_2_listener($event) { return ctx.keyUpEvent($event); })("keypress", function DuidComponent_Template_input_keypress_2_listener($event) { return ctx.keyPressEvent($event); });
            i0.ɵɵpipe(3, "translate");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(4, DuidComponent_div_4_Template, 4, 3, "div", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("formGroup", ctx.duidFormGroup);
            i0.ɵɵadvance(2);
            i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(3, 3, "ng.duid.lbl.placeholder"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.duidFormGroup.invalid);
        } }, dependencies: [i1.NgIf, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MaxLengthValidator, i2.FormGroupDirective, i2.FormControlName, i3.FormDirective, i4.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DuidComponent, [{
        type: Component,
        args: [{ selector: 'app-duid', template: "<form [formGroup]=\"duidFormGroup\">\n  <div class=\"display--flex\">\n    <input\n      type=\"text\"\n      formControlName=\"duidField\"\n      class=\"form__input mr--xxs text-align--left\"\n      required=\"true\"\n      placeholder=\"{{ 'ng.duid.lbl.placeholder' | translate }}\"\n      maxlength=\"41\"\n      (keyup)=\"keyUpEvent($event)\"\n      (keypress)=\"keyPressEvent($event)\" />\n  </div>\n  <div class=\"formErrorInput\" *ngIf=\"duidFormGroup.invalid\">\n    <div class=\"color-red text--s text-align--left cursor--default\">\n      {{ 'ng.duid.lbl.duid-length-error' | translate }}\n    </div>\n  </div>\n</form>\n" }]
    }], null, { duidFormGroup: [{
            type: Input
        }], duid: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DuidComponent, { className: "DuidComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHVpZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29udHJvbHMvZHVpZC9kdWlkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3NyYy9jb250cm9scy9kdWlkL2R1aWQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBYSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7Ozs7SUNVekUsOEJBQTBELGFBQUE7SUFFdEQsWUFDRjs7SUFBQSxpQkFBTSxFQUFBOztJQURKLGVBQ0Y7SUFERSxzRkFDRjs7QURQSixNQUFNLE9BQU8sYUFBYTtJQUNmLGFBQWEsQ0FBWTtJQUN6QixJQUFJLENBQVM7SUFFdEIsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUMzQixXQUFXLEVBQ1gsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsc0JBQXNCLEVBQUUsbUJBQW1CLENBQUMsQ0FBQyxDQUMvRixDQUFDO0lBQ0osQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUE4QjtRQUN2QyxNQUFNLGFBQWEsR0FBRyxLQUFzQixDQUFDO1FBQzdDLElBQUksYUFBYSxDQUFDLEdBQUcsS0FBSyxXQUFXLEVBQUUsQ0FBQztZQUN0QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDN0QsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDM0YsQ0FBQztJQUNILENBQUM7SUFFRCxhQUFhLENBQUMsS0FBOEI7UUFDMUMsTUFBTSxhQUFhLEdBQUcsS0FBc0IsQ0FBQztRQUM3QyxNQUFNLFdBQVcsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVwRCxNQUFNO1FBQ04sSUFBSSxXQUFXLElBQUksRUFBRSxJQUFJLFdBQVcsSUFBSSxFQUFFLEVBQUUsQ0FBQztZQUMzQyxPQUFPLGFBQWEsQ0FBQyxHQUFHLENBQUM7UUFDM0IsQ0FBQztRQUNELE1BQU07UUFDTixJQUFJLFdBQVcsSUFBSSxFQUFFLElBQUksV0FBVyxJQUFJLEVBQUUsRUFBRSxDQUFDO1lBQzNDLE9BQU8sYUFBYSxDQUFDLEdBQUcsQ0FBQztRQUMzQixDQUFDO1FBQ0QsTUFBTTtRQUNOLElBQUksV0FBVyxJQUFJLEVBQUUsSUFBSSxXQUFXLElBQUksR0FBRyxFQUFFLENBQUM7WUFDNUMsT0FBTyxhQUFhLENBQUMsR0FBRyxDQUFDO1FBQzNCLENBQUM7UUFDRCxZQUFZO1FBQ1osSUFBSSxXQUFXLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDdEIsT0FBTyxhQUFhLENBQUMsR0FBRyxDQUFDO1FBQzNCLENBQUM7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7dUVBMUNVLGFBQWE7NkRBQWIsYUFBYTtZQ1IxQiwrQkFBa0MsYUFBQSxlQUFBO1lBUzVCLCtGQUFTLHNCQUFrQixJQUFDLHdGQUNoQix5QkFBcUIsSUFETDs7WUFQOUIsaUJBUXVDLEVBQUE7WUFFekMsOERBSU07WUFDUixpQkFBTzs7WUFqQkQsNkNBQTJCO1lBTzNCLGVBQXlEO1lBQXpELHdGQUF5RDtZQUtoQyxlQUEyQjtZQUEzQixnREFBMkI7OztpRkRKN0MsYUFBYTtjQUp6QixTQUFTOzJCQUNFLFVBQVU7Z0JBSVgsYUFBYTtrQkFBckIsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSzs7a0ZBRkssYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IER1aWRGb3JtYXRWYWxpZGF0b3IsIE1pbk1heExlbmd0aHNWYWxpZGF0b3IgfSBmcm9tICcuL3ZhbGlkYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZHVpZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9kdWlkLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRHVpZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGR1aWRGb3JtR3JvdXA6IEZvcm1Hcm91cDtcbiAgQElucHV0KCkgZHVpZDogc3RyaW5nO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZHVpZEZvcm1Hcm91cC5hZGRDb250cm9sKFxuICAgICAgJ2R1aWRGaWVsZCcsXG4gICAgICBuZXcgRm9ybUNvbnRyb2wodGhpcy5kdWlkLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgTWluTWF4TGVuZ3Roc1ZhbGlkYXRvciwgRHVpZEZvcm1hdFZhbGlkYXRvcl0pXG4gICAgKTtcbiAgfVxuXG4gIGtleVVwRXZlbnQoZXZlbnQ6IEtleWJvYXJkRXZlbnQgfCB1bmtub3duKTogdm9pZCB7XG4gICAgY29uc3Qga2V5Ym9hcmRFdmVudCA9IGV2ZW50IGFzIEtleWJvYXJkRXZlbnQ7XG4gICAgaWYgKGtleWJvYXJkRXZlbnQua2V5ICE9PSAnQmFja3NwYWNlJykge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmR1aWRGb3JtR3JvdXAuY29udHJvbHNbJ2R1aWRGaWVsZCddLnZhbHVlO1xuICAgICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC86L2csICcnKTtcbiAgICAgIHRoaXMuZHVpZEZvcm1Hcm91cC5jb250cm9sc1snZHVpZEZpZWxkJ10uc2V0VmFsdWUobmV3VmFsdWUucmVwbGFjZSgvLnsyfSg/ISQpL2csICckJjonKSk7XG4gICAgfVxuICB9XG5cbiAga2V5UHJlc3NFdmVudChldmVudDogS2V5Ym9hcmRFdmVudCB8IHVua25vd24pIHtcbiAgICBjb25zdCBrZXlib2FyZEV2ZW50ID0gZXZlbnQgYXMgS2V5Ym9hcmRFdmVudDtcbiAgICBjb25zdCBrZXlDaGFyQ29kZSA9IGtleWJvYXJkRXZlbnQua2V5LmNoYXJDb2RlQXQoMCk7XG5cbiAgICAvLyAwLTlcbiAgICBpZiAoa2V5Q2hhckNvZGUgPj0gNDggJiYga2V5Q2hhckNvZGUgPD0gNTcpIHtcbiAgICAgIHJldHVybiBrZXlib2FyZEV2ZW50LmtleTtcbiAgICB9XG4gICAgLy8gQS1aXG4gICAgaWYgKGtleUNoYXJDb2RlID49IDY1ICYmIGtleUNoYXJDb2RlIDw9IDkwKSB7XG4gICAgICByZXR1cm4ga2V5Ym9hcmRFdmVudC5rZXk7XG4gICAgfVxuICAgIC8vIGEtelxuICAgIGlmIChrZXlDaGFyQ29kZSA+PSA5NyAmJiBrZXlDaGFyQ29kZSA8PSAxMjIpIHtcbiAgICAgIHJldHVybiBrZXlib2FyZEV2ZW50LmtleTtcbiAgICB9XG4gICAgLy8gYmFja3NwYWNlXG4gICAgaWYgKGtleUNoYXJDb2RlID09PSA4KSB7XG4gICAgICByZXR1cm4ga2V5Ym9hcmRFdmVudC5rZXk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCI8Zm9ybSBbZm9ybUdyb3VwXT1cImR1aWRGb3JtR3JvdXBcIj5cbiAgPGRpdiBjbGFzcz1cImRpc3BsYXktLWZsZXhcIj5cbiAgICA8aW5wdXRcbiAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgIGZvcm1Db250cm9sTmFtZT1cImR1aWRGaWVsZFwiXG4gICAgICBjbGFzcz1cImZvcm1fX2lucHV0IG1yLS14eHMgdGV4dC1hbGlnbi0tbGVmdFwiXG4gICAgICByZXF1aXJlZD1cInRydWVcIlxuICAgICAgcGxhY2Vob2xkZXI9XCJ7eyAnbmcuZHVpZC5sYmwucGxhY2Vob2xkZXInIHwgdHJhbnNsYXRlIH19XCJcbiAgICAgIG1heGxlbmd0aD1cIjQxXCJcbiAgICAgIChrZXl1cCk9XCJrZXlVcEV2ZW50KCRldmVudClcIlxuICAgICAgKGtleXByZXNzKT1cImtleVByZXNzRXZlbnQoJGV2ZW50KVwiIC8+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZm9ybUVycm9ySW5wdXRcIiAqbmdJZj1cImR1aWRGb3JtR3JvdXAuaW52YWxpZFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2xvci1yZWQgdGV4dC0tcyB0ZXh0LWFsaWduLS1sZWZ0IGN1cnNvci0tZGVmYXVsdFwiPlxuICAgICAge3sgJ25nLmR1aWQubGJsLmR1aWQtbGVuZ3RoLWVycm9yJyB8IHRyYW5zbGF0ZSB9fVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZm9ybT5cbiJdfQ==