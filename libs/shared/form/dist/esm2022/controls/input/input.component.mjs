import { Component, EventEmitter, forwardRef, Input, Optional, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputAbstractComponent } from '../input-abstract.component';
import * as i0 from "@angular/core";
import * as i1 from "@telenet/ng-lib-page";
import * as i2 from "../../errors";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
import * as i5 from "ngx-mask";
import * as i6 from "@ngx-translate/core";
const _c0 = (a0, a1) => ({ labelStyle: a0, "text-flow--label": a1 });
function InputComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4)(1, "label", 5);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(5, _c0, ctx_r0.labelStyle, !ctx_r0.labelStyle));
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", ctx_r0.key);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 3, ctx_r0.getLabel()));
} }
function InputComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵattribute("data-cy", ctx_r1.messageGroup + ".error." + ctx_r1.key);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, ctx_r1.getText()), " ");
} }
const _c1 = (a0, a1) => ({ "form__input--disabled": a0, "form__input--error": a1 });
export class InputComponent extends InputAbstractComponent {
    languageService;
    formService;
    messageGroupDirective;
    injector;
    showPlaceHolder = true;
    labelStyle;
    customLabel;
    hideLabel = false;
    prefix;
    mask;
    disabled = false;
    required = true;
    maxLength;
    showError = true;
    changeInput = new EventEmitter();
    value;
    constructor(languageService, formService, messageGroupDirective, injector) {
        super(languageService, formService, messageGroupDirective, injector);
        this.languageService = languageService;
        this.formService = formService;
        this.messageGroupDirective = messageGroupDirective;
        this.injector = injector;
    }
    getLabel() {
        return super.getLabel(this.customLabel);
    }
    getPlaceholder() {
        return super.getPlaceholder(this.customLabel);
    }
    onChange = (_) => {
        // empty implementation
    };
    onTouched = () => {
        // empty implementation
    };
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(_isDisabled) {
        this.disabled = _isDisabled;
    }
    writeValue(value) {
        this.value = value;
    }
    updateValue(value) {
        this.onChange(value);
        this.changeInput.emit(value);
    }
    onBlur() {
        this.trackingEvent.emit({ label: this.getLabel(), value: this.value });
        this.onTouched();
    }
    static ɵfac = function InputComponent_Factory(t) { return new (t || InputComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(i2.FormErrorService), i0.ɵɵdirectiveInject(i2.MessageGroupDirective, 8), i0.ɵɵdirectiveInject(i0.Injector)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputComponent, selectors: [["tg-form-input"]], inputs: { showPlaceHolder: "showPlaceHolder", labelStyle: "labelStyle", customLabel: "customLabel", hideLabel: "hideLabel", prefix: "prefix", mask: "mask", disabled: "disabled", required: "required", maxLength: "maxLength", showError: "showError" }, outputs: { changeInput: "changeInput" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 5, vars: 20, consts: [[1, "form-group"], [3, "ngClass", 4, "ngIf"], ["type", "text", 1, "Form__input", "form-control", 3, "id", "ngClass", "required", "mask", "dropSpecialCharacters", "name", "prefix", "ngModel", "disabled", "placeholder", "maxlength", "blur", "ngModelChange"], ["class", "formErrorInput Form__input__invalid-message", 4, "ngIf"], [3, "ngClass"], [3, "for"], [1, "formErrorInput", "Form__input__invalid-message"]], template: function InputComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, InputComponent_div_1_Template, 4, 8, "div", 1);
            i0.ɵɵelementStart(2, "input", 2);
            i0.ɵɵlistener("blur", function InputComponent_Template_input_blur_2_listener() { return ctx.onBlur(); })("ngModelChange", function InputComponent_Template_input_ngModelChange_2_listener($event) { return ctx.updateValue($event); })("ngModelChange", function InputComponent_Template_input_ngModelChange_2_listener($event) { return ctx.value = $event; });
            i0.ɵɵpipe(3, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, InputComponent_div_4_Template, 3, 4, "div", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.hideLabel);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("ng-invalid-custom", ctx.error);
            i0.ɵɵpropertyInterpolate("id", ctx.key);
            i0.ɵɵpropertyInterpolate("mask", ctx.mask && ctx.mask.maskValue);
            i0.ɵɵpropertyInterpolate("name", ctx.key);
            i0.ɵɵpropertyInterpolate("maxlength", ctx.maxLength);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(17, _c1, ctx.disabled, ctx.error))("required", ctx.required)("dropSpecialCharacters", ctx.mask && ctx.mask.dropSpecialCharacters)("prefix", ctx.prefix || "")("ngModel", ctx.value)("disabled", ctx.disabled)("placeholder", ctx.showPlaceHolder ? i0.ɵɵpipeBind1(3, 15, ctx.getPlaceholder()) : "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.error && ctx.showError);
        } }, dependencies: [i3.NgClass, i3.NgIf, i4.DefaultValueAccessor, i4.NgControlStatus, i4.RequiredValidator, i4.MaxLengthValidator, i4.NgModel, i5.NgxMaskDirective, i6.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-input', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputComponent),
                        multi: true,
                    },
                ], template: "<div class=\"form-group\">\n  <div *ngIf=\"!hideLabel\" [ngClass]=\"{labelStyle: this.labelStyle, 'text-flow--label': !labelStyle}\">\n    <label for=\"{{ key }}\">{{ getLabel() | translate}}</label>\n  </div>\n  <input\n    id=\"{{ key }}\"\n    type=\"text\"\n    class=\"Form__input form-control\"\n    [ngClass]=\"{'form__input--disabled' : disabled, 'form__input--error': error}\"\n    [required]=\"required\"\n    mask=\"{{ mask && mask.maskValue }}\"\n    [dropSpecialCharacters]=\"mask && mask.dropSpecialCharacters\"\n    name=\"{{ key }}\"\n    [prefix]=\"prefix || ''\"\n    (blur)=\"onBlur()\"\n    (ngModelChange)=\"updateValue($event)\"\n    [(ngModel)]=\"value\"\n    [disabled]=\"disabled\"\n    [placeholder]=\"showPlaceHolder ? (getPlaceholder() | translate) : ''\"\n    [class.ng-invalid-custom]=\"error\"\n    maxlength=\"{{ maxLength }}\" />\n  <div\n    [attr.data-cy]=\"messageGroup + '.error.' + key\"\n    class=\"formErrorInput Form__input__invalid-message\"\n    *ngIf=\"error && showError\">\n    {{ getText() | translate}}\n  </div>\n</div>\n" }]
    }], () => [{ type: i1.LanguageService }, { type: i2.FormErrorService }, { type: i2.MessageGroupDirective, decorators: [{
                type: Optional
            }] }, { type: i0.Injector }], { showPlaceHolder: [{
            type: Input
        }], labelStyle: [{
            type: Input
        }], customLabel: [{
            type: Input
        }], hideLabel: [{
            type: Input
        }], prefix: [{
            type: Input
        }], mask: [{
            type: Input
        }], disabled: [{
            type: Input
        }], required: [{
            type: Input
        }], maxLength: [{
            type: Input
        }], showError: [{
            type: Input
        }], changeInput: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputComponent, { className: "InputComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xzL2lucHV0L2lucHV0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3NyYy9jb250cm9scy9pbnB1dC9pbnB1dC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBWSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7Ozs7OztJQ0ZuRSw4QkFBbUcsZUFBQTtJQUMxRSxZQUEyQjs7SUFBQSxpQkFBUSxFQUFBOzs7SUFEcEMsMkZBQTBFO0lBQ3pGLGNBQWU7SUFBZiwyQ0FBZTtJQUFDLGNBQTJCO0lBQTNCLDZEQUEyQjs7O0lBbUJwRCw4QkFHNkI7SUFDM0IsWUFDRjs7SUFBQSxpQkFBTTs7O0lBSkosdUVBQStDO0lBRy9DLGNBQ0Y7SUFERSx1RUFDRjs7O0FEVEYsTUFBTSxPQUFPLGNBQWUsU0FBUSxzQkFBc0I7SUFlL0M7SUFDQTtJQUNZO0lBQ1o7SUFqQkEsZUFBZSxHQUFHLElBQUksQ0FBQztJQUN2QixVQUFVLENBQVM7SUFDbkIsV0FBVyxDQUFTO0lBQ3BCLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDbEIsTUFBTSxDQUFVO0lBQ2hCLElBQUksQ0FBd0Q7SUFDNUQsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUNqQixRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ2hCLFNBQVMsQ0FBVTtJQUNuQixTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ2hCLFdBQVcsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBQ25ELEtBQUssQ0FBUztJQUVkLFlBQ1MsZUFBZ0MsRUFDaEMs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QUFRO2tCQUFoQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0ksV0FBVztrQkFBcEIsTUFBTTs7a0ZBWEksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBJbmplY3RvciwgSW5wdXQsIE9wdGlvbmFsLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSB9IGZyb20gJ0B0ZWxlbmV0L25nLWxpYi1wYWdlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSW5wdXRBYnN0cmFjdENvbXBvbmVudCB9IGZyb20gJy4uL2lucHV0LWFic3RyYWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JtRXJyb3JTZXJ2aWNlLCBNZXNzYWdlR3JvdXBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9lcnJvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0Zy1mb3JtLWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICdpbnB1dC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBJbnB1dENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dENvbXBvbmVudCBleHRlbmRzIElucHV0QWJzdHJhY3RDb21wb25lbnQge1xuICBASW5wdXQoKSBzaG93UGxhY2VIb2xkZXIgPSB0cnVlO1xuICBASW5wdXQoKSBsYWJlbFN0eWxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGN1c3RvbUxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhpZGVMYWJlbCA9IGZhbHNlO1xuICBASW5wdXQoKSBwcmVmaXg/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1hc2s6IHsgbWFza1ZhbHVlOiBzdHJpbmc7IGRyb3BTcGVjaWFsQ2hhcmFjdGVyczogYm9vbGVhbiB9O1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSByZXF1aXJlZCA9IHRydWU7XG4gIEBJbnB1dCgpIG1heExlbmd0aD86IG51bWJlcjtcbiAgQElucHV0KCkgc2hvd0Vycm9yID0gdHJ1ZTtcbiAgQE91dHB1dCgpIGNoYW5nZUlucHV0ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIHZhbHVlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgIHB1YmxpYyBmb3JtU2VydmljZTogRm9ybUVycm9yU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgbWVzc2FnZUdyb3VwRGlyZWN0aXZlOiBNZXNzYWdlR3JvdXBEaXJlY3RpdmUsXG4gICAgcHVibGljIGluamVjdG9yOiBJbmplY3RvclxuICApIHtcbiAgICBzdXBlcihsYW5ndWFnZVNlcnZpY2UsIGZvcm1TZXJ2aWNlLCBtZXNzYWdlR3JvdXBEaXJlY3RpdmUsIGluamVjdG9yKTtcbiAgfVxuXG4gIGdldExhYmVsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHN1cGVyLmdldExhYmVsKHRoaXMuY3VzdG9tTGFiZWwpO1xuICB9XG5cbiAgZ2V0UGxhY2Vob2xkZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0UGxhY2Vob2xkZXIodGhpcy5jdXN0b21MYWJlbCk7XG4gIH1cblxuICBvbkNoYW5nZSA9IChfOiBzdHJpbmcpID0+IHtcbiAgICAvLyBlbXB0eSBpbXBsZW1lbnRhdGlvblxuICB9O1xuXG4gIG9uVG91Y2hlZCA9ICgpOiB2b2lkID0+IHtcbiAgICAvLyBlbXB0eSBpbXBsZW1lbnRhdGlvblxuICB9O1xuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IFZvaWRGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBWb2lkRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShfaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBfaXNEaXNhYmxlZDtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHVwZGF0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICB0aGlzLmNoYW5nZUlucHV0LmVtaXQodmFsdWUpO1xuICB9XG5cbiAgb25CbHVyKCkge1xuICAgIHRoaXMudHJhY2tpbmdFdmVudC5lbWl0KHsgbGFiZWw6IHRoaXMuZ2V0TGFiZWwoKSwgdmFsdWU6IHRoaXMudmFsdWUgfSk7XG4gICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgPGRpdiAqbmdJZj1cIiFoaWRlTGFiZWxcIiBbbmdDbGFzc109XCJ7bGFiZWxTdHlsZTogdGhpcy5sYWJlbFN0eWxlLCAndGV4dC1mbG93LS1sYWJlbCc6ICFsYWJlbFN0eWxlfVwiPlxuICAgIDxsYWJlbCBmb3I9XCJ7eyBrZXkgfX1cIj57eyBnZXRMYWJlbCgpIHwgdHJhbnNsYXRlfX08L2xhYmVsPlxuICA8L2Rpdj5cbiAgPGlucHV0XG4gICAgaWQ9XCJ7eyBrZXkgfX1cIlxuICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICBjbGFzcz1cIkZvcm1fX2lucHV0IGZvcm0tY29udHJvbFwiXG4gICAgW25nQ2xhc3NdPVwieydmb3JtX19pbnB1dC0tZGlzYWJsZWQnIDogZGlzYWJsZWQsICdmb3JtX19pbnB1dC0tZXJyb3InOiBlcnJvcn1cIlxuICAgIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiXG4gICAgbWFzaz1cInt7IG1hc2sgJiYgbWFzay5tYXNrVmFsdWUgfX1cIlxuICAgIFtkcm9wU3BlY2lhbENoYXJhY3RlcnNdPVwibWFzayAmJiBtYXNrLmRyb3BTcGVjaWFsQ2hhcmFjdGVyc1wiXG4gICAgbmFtZT1cInt7IGtleSB9fVwiXG4gICAgW3ByZWZpeF09XCJwcmVmaXggfHwgJydcIlxuICAgIChibHVyKT1cIm9uQmx1cigpXCJcbiAgICAobmdNb2RlbENoYW5nZSk9XCJ1cGRhdGVWYWx1ZSgkZXZlbnQpXCJcbiAgICBbKG5nTW9kZWwpXT1cInZhbHVlXCJcbiAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgIFtwbGFjZWhvbGRlcl09XCJzaG93UGxhY2VIb2xkZXIgPyAoZ2V0UGxhY2Vob2xkZXIoKSB8IHRyYW5zbGF0ZSkgOiAnJ1wiXG4gICAgW2NsYXNzLm5nLWludmFsaWQtY3VzdG9tXT1cImVycm9yXCJcbiAgICBtYXhsZW5ndGg9XCJ7eyBtYXhMZW5ndGggfX1cIiAvPlxuICA8ZGl2XG4gICAgW2F0dHIuZGF0YS1jeV09XCJtZXNzYWdlR3JvdXAgKyAnLmVycm9yLicgKyBrZXlcIlxuICAgIGNsYXNzPVwiZm9ybUVycm9ySW5wdXQgRm9ybV9faW5wdXRfX2ludmFsaWQtbWVzc2FnZVwiXG4gICAgKm5nSWY9XCJlcnJvciAmJiBzaG93RXJyb3JcIj5cbiAgICB7eyBnZXRUZXh0KCkgfCB0cmFuc2xhdGV9fVxuICA8L2Rpdj5cbjwvZGl2PlxuIl19