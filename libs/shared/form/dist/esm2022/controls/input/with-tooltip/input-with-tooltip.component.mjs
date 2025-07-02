import { Component, EventEmitter, forwardRef, Input, Optional, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputAbstractComponent } from '../../input-abstract.component';
import * as i0 from "@angular/core";
import * as i1 from "@telenet/ng-lib-page";
import * as i2 from "../../../errors";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
import * as i5 from "ngx-mask";
import * as i6 from "@ngx-translate/core";
const _c0 = (a0, a1) => ({ labelStyle: a0, "text-flow--label": a1 });
function InputWithTooltipComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4)(1, "label", 5);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 6)(5, "div", 7);
    i0.ɵɵelement(6, "i", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 9)(8, "div", 10)(9, "div", 11)(10, "div", 12);
    i0.ɵɵtext(11);
    i0.ɵɵpipe(12, "translate");
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(8, _c0, ctx_r0.labelStyle, !ctx_r0.labelStyle));
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", ctx_r0.key);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 4, ctx_r0.getLabel()));
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(12, 6, ctx_r0.getTooltip()), " ");
} }
function InputWithTooltipComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
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
export class InputWithTooltipComponent extends InputAbstractComponent {
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
        this.changeInput.emit(_);
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
    setDisabledState(_) {
        // empty implementation
    }
    writeValue(value) {
        this.value = value;
    }
    updateValue(value) {
        this.onChange(value);
    }
    onBlur() {
        this.trackingEvent.emit({ label: this.getLabel(), value: this.value });
        this.onTouched();
    }
    static ɵfac = function InputWithTooltipComponent_Factory(t) { return new (t || InputWithTooltipComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(i2.FormErrorService), i0.ɵɵdirectiveInject(i2.MessageGroupDirective, 8), i0.ɵɵdirectiveInject(i0.Injector)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputWithTooltipComponent, selectors: [["tg-form-input-with-tooltip"]], inputs: { showPlaceHolder: "showPlaceHolder", labelStyle: "labelStyle", customLabel: "customLabel", hideLabel: "hideLabel", prefix: "prefix", mask: "mask", disabled: "disabled", required: "required", maxLength: "maxLength" }, outputs: { changeInput: "changeInput" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputWithTooltipComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 5, vars: 20, consts: [[1, "form-group"], [3, "ngClass", 4, "ngIf"], ["type", "text", 1, "Form__input", "form-control", 3, "id", "required", "ngClass", "mask", "dropSpecialCharacters", "name", "prefix", "ngModel", "disabled", "placeholder", "maxlength", "blur", "ngModelChange"], ["class", "formErrorInput Form__input__invalid-message", 4, "ngIf"], [3, "ngClass"], [3, "for"], [1, "tooltip", "position--relative", "display--inline-block"], [1, "tooltip__icon-section", "display--flex", "flex-direction--row--sm", "flex-direction--row-reverse", "align-items--center", "justify-content--center", "cursor--pointer", "my--xxxs"], [1, "icon", "icon-information-shape"], [1, "tooltip__info-section", "tooltip__info-section__arrow-left", "tooltip__info-section__auto-width"], [1, "horizontal-center-align"], [1, "info-section__description"], [1, "info-section__description__text"], [1, "formErrorInput", "Form__input__invalid-message"]], template: function InputWithTooltipComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, InputWithTooltipComponent_div_1_Template, 13, 11, "div", 1);
            i0.ɵɵelementStart(2, "input", 2);
            i0.ɵɵlistener("blur", function InputWithTooltipComponent_Template_input_blur_2_listener() { return ctx.onBlur(); })("ngModelChange", function InputWithTooltipComponent_Template_input_ngModelChange_2_listener($event) { return ctx.updateValue($event); })("ngModelChange", function InputWithTooltipComponent_Template_input_ngModelChange_2_listener($event) { return ctx.value = $event; });
            i0.ɵɵpipe(3, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, InputWithTooltipComponent_div_4_Template, 3, 4, "div", 3);
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
            i0.ɵɵproperty("required", ctx.required)("ngClass", i0.ɵɵpureFunction2(17, _c1, ctx.disabled, ctx.error))("dropSpecialCharacters", ctx.mask && ctx.mask.dropSpecialCharacters)("prefix", ctx.prefix || "")("ngModel", ctx.value)("disabled", ctx.disabled)("placeholder", ctx.showPlaceHolder ? i0.ɵɵpipeBind1(3, 15, ctx.getPlaceholder()) : "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.error);
        } }, dependencies: [i3.NgClass, i3.NgIf, i4.DefaultValueAccessor, i4.NgControlStatus, i4.RequiredValidator, i4.MaxLengthValidator, i4.NgModel, i5.NgxMaskDirective, i6.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputWithTooltipComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-input-with-tooltip', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputWithTooltipComponent),
                        multi: true,
                    },
                ], template: "<div class=\"form-group\">\n  <div *ngIf=\"!hideLabel\" [ngClass]=\"{ labelStyle: this.labelStyle, 'text-flow--label': !labelStyle }\">\n    <label for=\"{{ key }}\">{{ getLabel() | translate }}</label>\n    <div class=\"tooltip position--relative display--inline-block\">\n      <div\n        class=\"tooltip__icon-section display--flex flex-direction--row--sm flex-direction--row-reverse align-items--center justify-content--center cursor--pointer my--xxxs\">\n        <i class=\"icon icon-information-shape\"></i>\n      </div>\n      <div class=\"tooltip__info-section tooltip__info-section__arrow-left tooltip__info-section__auto-width\">\n        <div class=\"horizontal-center-align\">\n          <div class=\"info-section__description\">\n            <div class=\"info-section__description__text\">\n              {{ getTooltip() | translate }}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <input\n    id=\"{{ key }}\"\n    type=\"text\"\n    class=\"Form__input form-control\"\n    [required]=\"required\"\n    [ngClass]=\"{ 'form__input--disabled': disabled, 'form__input--error': error }\"\n    mask=\"{{ mask && mask.maskValue }}\"\n    [dropSpecialCharacters]=\"mask && mask.dropSpecialCharacters\"\n    name=\"{{ key }}\"\n    [prefix]=\"prefix || ''\"\n    (blur)=\"onBlur()\"\n    (ngModelChange)=\"updateValue($event)\"\n    [(ngModel)]=\"value\"\n    [disabled]=\"disabled\"\n    [placeholder]=\"showPlaceHolder ? (getPlaceholder() | translate) : ''\"\n    [class.ng-invalid-custom]=\"error\"\n    maxlength=\"{{ maxLength }}\" />\n  <div\n    [attr.data-cy]=\"messageGroup + '.error.' + key\"\n    class=\"formErrorInput Form__input__invalid-message\"\n    *ngIf=\"error\">\n    {{ getText() | translate }}\n  </div>\n</div>\n" }]
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
        }], changeInput: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputWithTooltipComponent, { className: "InputWithTooltipComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtd2l0aC10b29sdGlwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb250cm9scy9pbnB1dC93aXRoLXRvb2x0aXAvaW5wdXQtd2l0aC10b29sdGlwLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9jb250cm9scy9pbnB1dC93aXRoLXRvb2x0aXAvaW5wdXQtd2l0aC10b29sdGlwLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBWSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7Ozs7OztJQ0Z0RSw4QkFBcUcsZUFBQTtJQUM1RSxZQUE0Qjs7SUFBQSxpQkFBUTtJQUMzRCw4QkFBOEQsYUFBQTtJQUcxRCx1QkFBMkM7SUFDN0MsaUJBQU07SUFDTiw4QkFBdUcsY0FBQSxjQUFBLGVBQUE7SUFJL0YsYUFDRjs7SUFBQSxpQkFBTSxFQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUE7OztJQVpRLDJGQUE0RTtJQUMzRixjQUFlO0lBQWYsMkNBQWU7SUFBQyxjQUE0QjtJQUE1Qiw2REFBNEI7SUFVekMsZUFDRjtJQURFLDJFQUNGOzs7SUF1QlYsK0JBR2dCO0lBQ2QsWUFDRjs7SUFBQSxpQkFBTTs7O0lBSkosdUVBQStDO0lBRy9DLGNBQ0Y7SUFERSx1RUFDRjs7O0FEeEJGLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxzQkFBc0I7SUFjMUQ7SUFDQTtJQUNZO0lBQ1o7SUFoQkEsZUFBZSxHQUFHLElBQUksQ0FBQztJQUN2QixVQUFVLENBQVM7SUFDbkIsV0FBVyxDQUFTO0lBQ3BCLFNBQVMs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QUk7cUJBQ1o7aUJBQ0Y7O3NCQWtCRSxRQUFROzRDQWZGLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDSSxXQUFXO2tCQUFwQixNQUFNOztrRkFWSSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgSW5qZWN0b3IsIElucHV0LCBPcHRpb25hbCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSB9IGZyb20gJ0B0ZWxlbmV0L25nLWxpYi1wYWdlJztcbmltcG9ydCB7IElucHV0QWJzdHJhY3RDb21wb25lbnQgfSBmcm9tICcuLi8uLi9pbnB1dC1hYnN0cmFjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybUVycm9yU2VydmljZSwgTWVzc2FnZUdyb3VwRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vZXJyb3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGctZm9ybS1pbnB1dC13aXRoLXRvb2x0aXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQtd2l0aC10b29sdGlwLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBJbnB1dFdpdGhUb29sdGlwQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIElucHV0V2l0aFRvb2x0aXBDb21wb25lbnQgZXh0ZW5kcyBJbnB1dEFic3RyYWN0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgc2hvd1BsYWNlSG9sZGVyID0gdHJ1ZTtcbiAgQElucHV0KCkgbGFiZWxTdHlsZTogc3RyaW5nO1xuICBASW5wdXQoKSBjdXN0b21MYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBoaWRlTGFiZWwgPSBmYWxzZTtcbiAgQElucHV0KCkgcHJlZml4Pzogc3RyaW5nO1xuICBASW5wdXQoKSBtYXNrOiB7IG1hc2tWYWx1ZTogc3RyaW5nOyBkcm9wU3BlY2lhbENoYXJhY3RlcnM6IGJvb2xlYW4gfTtcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgcmVxdWlyZWQgPSB0cnVlO1xuICBASW5wdXQoKSBtYXhMZW5ndGg/OiBudW1iZXI7XG4gIEBPdXRwdXQoKSBjaGFuZ2VJbnB1dCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICB2YWx1ZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZSxcbiAgICBwdWJsaWMgZm9ybVNlcnZpY2U6IEZvcm1FcnJvclNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIG1lc3NhZ2VHcm91cERpcmVjdGl2ZTogTWVzc2FnZUdyb3VwRGlyZWN0aXZlLFxuICAgIHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3JcbiAgKSB7XG4gICAgc3VwZXIobGFuZ3VhZ2VTZXJ2aWNlLCBmb3JtU2VydmljZSwgbWVzc2FnZUdyb3VwRGlyZWN0aXZlLCBpbmplY3Rvcik7XG4gIH1cblxuICBnZXRMYWJlbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBzdXBlci5nZXRMYWJlbCh0aGlzLmN1c3RvbUxhYmVsKTtcbiAgfVxuXG4gIGdldFBsYWNlaG9sZGVyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHN1cGVyLmdldFBsYWNlaG9sZGVyKHRoaXMuY3VzdG9tTGFiZWwpO1xuICB9XG5cbiAgb25DaGFuZ2UgPSAoXzogc3RyaW5nKSA9PiB7XG4gICAgdGhpcy5jaGFuZ2VJbnB1dC5lbWl0KF8pO1xuICB9O1xuXG4gIG9uVG91Y2hlZCA9ICgpOiB2b2lkID0+IHtcbiAgICAvLyBlbXB0eSBpbXBsZW1lbnRhdGlvblxuICB9O1xuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IFZvaWRGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBWb2lkRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShfOiBib29sZWFuKTogdm9pZCB7XG4gICAgLy8gZW1wdHkgaW1wbGVtZW50YXRpb25cbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHVwZGF0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgfVxuXG4gIG9uQmx1cigpIHtcbiAgICB0aGlzLnRyYWNraW5nRXZlbnQuZW1pdCh7IGxhYmVsOiB0aGlzLmdldExhYmVsKCksIHZhbHVlOiB0aGlzLnZhbHVlIH0pO1xuICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gIDxkaXYgKm5nSWY9XCIhaGlkZUxhYmVsXCIgW25nQ2xhc3NdPVwieyBsYWJlbFN0eWxlOiB0aGlzLmxhYmVsU3R5bGUsICd0ZXh0LWZsb3ctLWxhYmVsJzogIWxhYmVsU3R5bGUgfVwiPlxuICAgIDxsYWJlbCBmb3I9XCJ7eyBrZXkgfX1cIj57eyBnZXRMYWJlbCgpIHwgdHJhbnNsYXRlIH19PC9sYWJlbD5cbiAgICA8ZGl2IGNsYXNzPVwidG9vbHRpcCBwb3NpdGlvbi0tcmVsYXRpdmUgZGlzcGxheS0taW5saW5lLWJsb2NrXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwidG9vbHRpcF9faWNvbi1zZWN0aW9uIGRpc3BsYXktLWZsZXggZmxleC1kaXJlY3Rpb24tLXJvdy0tc20gZmxleC1kaXJlY3Rpb24tLXJvdy1yZXZlcnNlIGFsaWduLWl0ZW1zLS1jZW50ZXIganVzdGlmeS1jb250ZW50LS1jZW50ZXIgY3Vyc29yLS1wb2ludGVyIG15LS14eHhzXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiaWNvbiBpY29uLWluZm9ybWF0aW9uLXNoYXBlXCI+PC9pPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidG9vbHRpcF9faW5mby1zZWN0aW9uIHRvb2x0aXBfX2luZm8tc2VjdGlvbl9fYXJyb3ctbGVmdCB0b29sdGlwX19pbmZvLXNlY3Rpb25fX2F1dG8td2lkdGhcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhvcml6b250YWwtY2VudGVyLWFsaWduXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImluZm8tc2VjdGlvbl9fZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLXNlY3Rpb25fX2Rlc2NyaXB0aW9uX190ZXh0XCI+XG4gICAgICAgICAgICAgIHt7IGdldFRvb2x0aXAoKSB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8aW5wdXRcbiAgICBpZD1cInt7IGtleSB9fVwiXG4gICAgdHlwZT1cInRleHRcIlxuICAgIGNsYXNzPVwiRm9ybV9faW5wdXQgZm9ybS1jb250cm9sXCJcbiAgICBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIlxuICAgIFtuZ0NsYXNzXT1cInsgJ2Zvcm1fX2lucHV0LS1kaXNhYmxlZCc6IGRpc2FibGVkLCAnZm9ybV9faW5wdXQtLWVycm9yJzogZXJyb3IgfVwiXG4gICAgbWFzaz1cInt7IG1hc2sgJiYgbWFzay5tYXNrVmFsdWUgfX1cIlxuICAgIFtkcm9wU3BlY2lhbENoYXJhY3RlcnNdPVwibWFzayAmJiBtYXNrLmRyb3BTcGVjaWFsQ2hhcmFjdGVyc1wiXG4gICAgbmFtZT1cInt7IGtleSB9fVwiXG4gICAgW3ByZWZpeF09XCJwcmVmaXggfHwgJydcIlxuICAgIChibHVyKT1cIm9uQmx1cigpXCJcbiAgICAobmdNb2RlbENoYW5nZSk9XCJ1cGRhdGVWYWx1ZSgkZXZlbnQpXCJcbiAgICBbKG5nTW9kZWwpXT1cInZhbHVlXCJcbiAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgIFtwbGFjZWhvbGRlcl09XCJzaG93UGxhY2VIb2xkZXIgPyAoZ2V0UGxhY2Vob2xkZXIoKSB8IHRyYW5zbGF0ZSkgOiAnJ1wiXG4gICAgW2NsYXNzLm5nLWludmFsaWQtY3VzdG9tXT1cImVycm9yXCJcbiAgICBtYXhsZW5ndGg9XCJ7eyBtYXhMZW5ndGggfX1cIiAvPlxuICA8ZGl2XG4gICAgW2F0dHIuZGF0YS1jeV09XCJtZXNzYWdlR3JvdXAgKyAnLmVycm9yLicgKyBrZXlcIlxuICAgIGNsYXNzPVwiZm9ybUVycm9ySW5wdXQgRm9ybV9faW5wdXRfX2ludmFsaWQtbWVzc2FnZVwiXG4gICAgKm5nSWY9XCJlcnJvclwiPlxuICAgIHt7IGdldFRleHQoKSB8IHRyYW5zbGF0ZSB9fVxuICA8L2Rpdj5cbjwvZGl2PlxuIl19