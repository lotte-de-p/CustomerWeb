import { Component, forwardRef, Input, Optional } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractDropdownComponent } from '../abstract-dropdown.component';
import * as i0 from "@angular/core";
import * as i1 from "@telenet/ng-lib-page";
import * as i2 from "../../../errors";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
import * as i5 from "@ngx-translate/core";
const _c0 = a0 => ({ labelStyle: a0 });
function DropdownWithInputComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8)(1, "label", 9);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c0, ctx_r0.labelStyle));
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", ctx_r0.key);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 3, ctx_r0.getLabel()));
} }
function DropdownWithInputComponent_div_7_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 13);
    i0.ɵɵlistener("mousedown", function DropdownWithInputComponent_div_7_li_2_Template_li_mousedown_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r6); const option_r4 = restoredCtx.$implicit; const ctx_r5 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r5.updateValue(option_r4)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r4 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", option_r4.value, " ");
} }
function DropdownWithInputComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10)(1, "ul", 11);
    i0.ɵɵtemplate(2, DropdownWithInputComponent_div_7_li_2_Template, 2, 1, "li", 12);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.optionList);
} }
function DropdownWithInputComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r2.getText()), " ");
} }
const _c1 = a0 => ({ "form__input--disabled": a0 });
const _c2 = (a0, a1) => ({ "form__input--disabled": a0, "form__input--error": a1 });
export class DropdownWithInputComponent extends AbstractDropdownComponent {
    languageService;
    formService;
    messageGroupDirective;
    injector;
    shouldShowDropdown;
    disabled = false;
    required;
    constructor(languageService, formService, messageGroupDirective, injector) {
        super(languageService, formService, messageGroupDirective, injector);
        this.languageService = languageService;
        this.formService = formService;
        this.messageGroupDirective = messageGroupDirective;
        this.injector = injector;
    }
    updateValue(option) {
        this.writeValue(option.value);
        this.onChange(option.value);
        this.toggle();
    }
    focusOut() {
        if (this.shouldShowDropdown) {
            if (this.control.control) {
                this.control.control.markAllAsTouched();
            }
            this.checkErrors();
            this.toggle();
        }
    }
    toggle() {
        this.shouldShowDropdown = !this.shouldShowDropdown;
    }
    checkErrors() {
        if (this.control.control && this.control.control.errors) {
            this.error = Object.keys(this.control.control.errors)[0];
        }
    }
    static ɵfac = function DropdownWithInputComponent_Factory(t) { return new (t || DropdownWithInputComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(i2.FormErrorService), i0.ɵɵdirectiveInject(i2.MessageGroupDirective, 8), i0.ɵɵdirectiveInject(i0.Injector)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DropdownWithInputComponent, selectors: [["tg-form-dropdown-with-input"]], inputs: { disabled: "disabled", required: "required" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => DropdownWithInputComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 9, vars: 21, consts: [[1, "form-group", "position--relative"], [3, "ngClass", 4, "ngIf"], [1, "select-dropdown-section", "default"], [1, "form-control", "select-dropdown", "p--n", 3, "ngClass", "click"], ["type", "text", "readonly", "", 1, "form__input", "form-control", "cursor--pointer", "ellipsis", 3, "id", "name", "ngModel", "disabled", "required", "placeholder", "ngClass", "ngModelChange", "focusout"], [1, "icon", "position--absolute", "text--m", "text-weight--g", 3, "ngClass"], ["class", "select-dropdown__options position--absolute width--full", 4, "ngIf"], ["class", "formErrorInput Form__input__invalid-message", 4, "ngIf"], [3, "ngClass"], [3, "for"], [1, "select-dropdown__options", "position--absolute", "width--full"], [1, "select-dropdown__options__content", "pl--n", "m--n", "position--relative"], ["class", "select-dropdown__options__list cursor---pointer", 3, "mousedown", 4, "ngFor", "ngForOf"], [1, "select-dropdown__options__list", "cursor---pointer", 3, "mousedown"], [1, "formErrorInput", "Form__input__invalid-message"]], template: function DropdownWithInputComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, DropdownWithInputComponent_div_1_Template, 4, 7, "div", 1);
            i0.ɵɵelementStart(2, "div", 2)(3, "div", 3);
            i0.ɵɵlistener("click", function DropdownWithInputComponent_Template_div_click_3_listener() { return ctx.toggle(); });
            i0.ɵɵelementStart(4, "input", 4);
            i0.ɵɵlistener("ngModelChange", function DropdownWithInputComponent_Template_input_ngModelChange_4_listener($event) { return ctx.value = $event; })("focusout", function DropdownWithInputComponent_Template_input_focusout_4_listener() { return ctx.focusOut(); });
            i0.ɵɵpipe(5, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(6, "div", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(7, DropdownWithInputComponent_div_7_Template, 3, 1, "div", 6)(8, DropdownWithInputComponent_div_8_Template, 3, 3, "div", 7);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.customLabel);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(16, _c1, ctx.disabled));
            i0.ɵɵadvance();
            i0.ɵɵclassProp("ng-invalid-custom", ctx.error);
            i0.ɵɵpropertyInterpolate("id", ctx.key);
            i0.ɵɵpropertyInterpolate("name", ctx.key);
            i0.ɵɵproperty("ngModel", ctx.value)("disabled", ctx.disabled)("required", ctx.required)("placeholder", ctx.showPlaceHolder ? i0.ɵɵpipeBind1(5, 14, ctx.getPlaceholder()) : "")("ngClass", i0.ɵɵpureFunction2(18, _c2, ctx.disabled, ctx.error));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", ctx.shouldShowDropdown ? "icon-chevron-up" : "icon-chevron-down");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.shouldShowDropdown);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.error);
        } }, dependencies: [i3.NgClass, i3.NgForOf, i3.NgIf, i4.DefaultValueAccessor, i4.NgControlStatus, i4.RequiredValidator, i4.NgModel, i5.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DropdownWithInputComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-dropdown-with-input', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => DropdownWithInputComponent),
                        multi: true,
                    },
                ], template: "<div class=\"form-group position--relative\">\n  <div *ngIf=\"customLabel\" [ngClass]=\"{ labelStyle: this.labelStyle }\">\n    <label for=\"{{ key }}\">{{ getLabel() | translate }}</label>\n  </div>\n  <div class=\"select-dropdown-section default\">\n    <div class=\"form-control select-dropdown p--n\" [ngClass]=\"{ 'form__input--disabled': disabled }\" (click)=\"toggle()\">\n      <input\n        id=\"{{ key }}\"\n        type=\"text\"\n        class=\"form__input form-control cursor--pointer ellipsis\"\n        name=\"{{ key }}\"\n        [(ngModel)]=\"value\"\n        [disabled]=\"disabled\"\n        [required]=\"required\"\n        [placeholder]=\"showPlaceHolder ? (getPlaceholder() | translate) : ''\"\n        [class.ng-invalid-custom]=\"error\"\n        (focusout)=\"focusOut()\"\n        [ngClass]=\"{ 'form__input--disabled': disabled, 'form__input--error': error }\"\n        readonly />\n      <div\n        class=\"icon position--absolute text--m text-weight--g\"\n        [ngClass]=\"shouldShowDropdown ? 'icon-chevron-up' : 'icon-chevron-down'\"></div>\n    </div>\n  </div>\n  <div *ngIf=\"shouldShowDropdown\" class=\"select-dropdown__options position--absolute width--full\">\n    <ul class=\"select-dropdown__options__content pl--n m--n position--relative\">\n      <li\n        *ngFor=\"let option of optionList\"\n        (mousedown)=\"updateValue(option)\"\n        class=\"select-dropdown__options__list cursor---pointer\">\n        {{ option.value }}\n      </li>\n    </ul>\n  </div>\n  <div class=\"formErrorInput Form__input__invalid-message\" *ngIf=\"error\">\n    {{ getText() | translate }}\n  </div>\n</div>\n" }]
    }], () => [{ type: i1.LanguageService }, { type: i2.FormErrorService }, { type: i2.MessageGroupDirective, decorators: [{
                type: Optional
            }] }, { type: i0.Injector }], { disabled: [{
            type: Input
        }], required: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DropdownWithInputComponent, { className: "DropdownWithInputComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l0aC1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29udHJvbHMvZHJvcGRvd24vd2l0aC1pbnB1dC93aXRoLWlucHV0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9jb250cm9scy9kcm9wZG93bi93aXRoLWlucHV0L3dpdGgtaW5wdXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVksS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7Ozs7O0lDRnpFLDhCQUFxRSxlQUFBO0lBQzVDLFlBQTRCOztJQUFBLGlCQUFRLEVBQUE7OztJQURwQyx1RUFBMkM7SUFDM0QsY0FBZTtJQUFmLDJDQUFlO0lBQUMsY0FBNEI7SUFBNUIsNkRBQTRCOzs7O0lBd0JqRCw4QkFHMEQ7SUFEeEQsOE9BQWEsZUFBQSw2QkFBbUIsQ0FBQSxJQUFDO0lBRWpDLFlBQ0Y7SUFBQSxpQkFBSzs7O0lBREgsY0FDRjtJQURFLGdEQUNGOzs7SUFQSiwrQkFBZ0csYUFBQTtJQUU1RixnRkFLSztJQUNQLGlCQUFLLEVBQUE7OztJQUxrQixlQUFhO0lBQWIsMkNBQWE7OztJQU90QywrQkFBdUU7SUFDckUsWUFDRjs7SUFBQSxpQkFBTTs7O0lBREosY0FDRjtJQURFLHVFQUNGOzs7O0FEbEJGLE1BQU0sT0FBTywwQkFBMkIsU0FBUSx5QkFBeUI7SUFNOUQ7SUFDQTtJQUNZO0lBQ1o7SUFSVCxrQkFBa0IsQ0FBVTtJQUNuQixRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ2pCLFFBQVEsQ0FBVTtJQUUzQixZQUNTLGVBQWdDLEVBQ2hDLFdBQTZCLEVBQ2pCLHFCQUE0QyxFQUN4RCxRQUFrQjtRQUV6QixLQUFLLENBQUMsZUFBZSxFQUFFLFdBQVcsRUFBRSxxQkFBcUIsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUw5RCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBQ2pCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDeEQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUczQixDQUFDO0lBRUQsV0FBVyxDQUFDLE1BQW1CO1FBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDNUIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQzFDLENBQUM7WUFDRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNyRCxDQUFDO0lBRU8sV0FBVztRQUNqQixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3hELElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRCxDQUFDO0lBQ0gsQ0FBQztvRkF0Q1UsMEJBQTBCOzZEQUExQiwwQkFBMEIseUlBUjFCO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsMEJBQTBCLENBQUM7b0JBQ3pELEtBQUssRUFBRSxJQUFJO2lCQUNaO2FBQ0Y7WUNoQkgsOEJBQTJDO1lBQ3pDLDJFQUVNO1lBQ04sOEJBQTZDLGFBQUE7WUFDc0Qsb0dBQVMsWUFBUSxJQUFDO1lBQ2pILGdDQVlhO1lBUFgsa0pBQW1CLCtGQUtQLGNBQVUsSUFMSDs7WUFMckIsaUJBWWE7WUFDYix5QkFFaUY7WUFDbkYsaUJBQU0sRUFBQTtZQUVSLDJFQVNNLDhEQUFBO1lBSVIsaUJBQU07O1lBcENFLGNBQWlCO1lBQWpCLHNDQUFpQjtZQUkwQixlQUFpRDtZQUFqRCxtRUFBaUQ7WUFVNUYsY0FBaUM7WUFBakMsOENBQWlDO1lBUmpDLHVDQUFjO1lBR2QseUNBQWdCO1lBQ2hCLG1DQUFtQiwwQkFBQSwwQkFBQSx1RkFBQSxpRUFBQTtZQVVuQixlQUF3RTtZQUF4RSwwRkFBd0U7WUFHeEUsY0FBd0I7WUFBeEIsNkNBQXdCO1lBVTRCLGNBQVc7WUFBWCxnQ0FBVzs7O2lGRGhCMUQsMEJBQTBCO2NBWHRDLFNBQVM7MkJBQ0UsNkJBQTZCLGFBRTVCO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLDJCQUEyQixDQUFDO3dCQUN6RCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjs7c0JBVUUsUUFBUTs0Q0FORixRQUFRO2tCQUFoQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSzs7a0ZBSEssMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbmplY3RvciwgSW5wdXQsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSB9IGZyb20gJ0B0ZWxlbmV0L25nLWxpYi1wYWdlJztcbmltcG9ydCB7IEFic3RyYWN0RHJvcGRvd25Db21wb25lbnQgfSBmcm9tICcuLi9hYnN0cmFjdC1kcm9wZG93bi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybUVycm9yU2VydmljZSwgTWVzc2FnZUdyb3VwRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vZXJyb3JzJztcbmltcG9ydCB7IElucHV0T3B0aW9uIH0gZnJvbSAnLi4vLi4vcmFkaW8nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0Zy1mb3JtLWRyb3Bkb3duLXdpdGgtaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJ3dpdGgtaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IERyb3Bkb3duV2l0aElucHV0Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duV2l0aElucHV0Q29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3REcm9wZG93bkNvbXBvbmVudCB7XG4gIHNob3VsZFNob3dEcm9wZG93bjogYm9vbGVhbjtcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgcmVxdWlyZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgIHB1YmxpYyBmb3JtU2VydmljZTogRm9ybUVycm9yU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgbWVzc2FnZUdyb3VwRGlyZWN0aXZlOiBNZXNzYWdlR3JvdXBEaXJlY3RpdmUsXG4gICAgcHVibGljIGluamVjdG9yOiBJbmplY3RvclxuICApIHtcbiAgICBzdXBlcihsYW5ndWFnZVNlcnZpY2UsIGZvcm1TZXJ2aWNlLCBtZXNzYWdlR3JvdXBEaXJlY3RpdmUsIGluamVjdG9yKTtcbiAgfVxuXG4gIHVwZGF0ZVZhbHVlKG9wdGlvbjogSW5wdXRPcHRpb24pOiB2b2lkIHtcbiAgICB0aGlzLndyaXRlVmFsdWUob3B0aW9uLnZhbHVlKTtcbiAgICB0aGlzLm9uQ2hhbmdlKG9wdGlvbi52YWx1ZSk7XG4gICAgdGhpcy50b2dnbGUoKTtcbiAgfVxuXG4gIGZvY3VzT3V0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNob3VsZFNob3dEcm9wZG93bikge1xuICAgICAgaWYgKHRoaXMuY29udHJvbC5jb250cm9sKSB7XG4gICAgICAgIHRoaXMuY29udHJvbC5jb250cm9sLm1hcmtBbGxBc1RvdWNoZWQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2hlY2tFcnJvcnMoKTtcbiAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlKCk6IHZvaWQge1xuICAgIHRoaXMuc2hvdWxkU2hvd0Ryb3Bkb3duID0gIXRoaXMuc2hvdWxkU2hvd0Ryb3Bkb3duO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0Vycm9ycygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb250cm9sLmNvbnRyb2wgJiYgdGhpcy5jb250cm9sLmNvbnRyb2wuZXJyb3JzKSB7XG4gICAgICB0aGlzLmVycm9yID0gT2JqZWN0LmtleXModGhpcy5jb250cm9sLmNvbnRyb2wuZXJyb3JzKVswXTtcbiAgICB9XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHBvc2l0aW9uLS1yZWxhdGl2ZVwiPlxuICA8ZGl2ICpuZ0lmPVwiY3VzdG9tTGFiZWxcIiBbbmdDbGFzc109XCJ7IGxhYmVsU3R5bGU6IHRoaXMubGFiZWxTdHlsZSB9XCI+XG4gICAgPGxhYmVsIGZvcj1cInt7IGtleSB9fVwiPnt7IGdldExhYmVsKCkgfCB0cmFuc2xhdGUgfX08L2xhYmVsPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInNlbGVjdC1kcm9wZG93bi1zZWN0aW9uIGRlZmF1bHRcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jb250cm9sIHNlbGVjdC1kcm9wZG93biBwLS1uXCIgW25nQ2xhc3NdPVwieyAnZm9ybV9faW5wdXQtLWRpc2FibGVkJzogZGlzYWJsZWQgfVwiIChjbGljayk9XCJ0b2dnbGUoKVwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIGlkPVwie3sga2V5IH19XCJcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBjbGFzcz1cImZvcm1fX2lucHV0IGZvcm0tY29udHJvbCBjdXJzb3ItLXBvaW50ZXIgZWxsaXBzaXNcIlxuICAgICAgICBuYW1lPVwie3sga2V5IH19XCJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiXG4gICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJzaG93UGxhY2VIb2xkZXIgPyAoZ2V0UGxhY2Vob2xkZXIoKSB8IHRyYW5zbGF0ZSkgOiAnJ1wiXG4gICAgICAgIFtjbGFzcy5uZy1pbnZhbGlkLWN1c3RvbV09XCJlcnJvclwiXG4gICAgICAgIChmb2N1c291dCk9XCJmb2N1c091dCgpXCJcbiAgICAgICAgW25nQ2xhc3NdPVwieyAnZm9ybV9faW5wdXQtLWRpc2FibGVkJzogZGlzYWJsZWQsICdmb3JtX19pbnB1dC0tZXJyb3InOiBlcnJvciB9XCJcbiAgICAgICAgcmVhZG9ubHkgLz5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJpY29uIHBvc2l0aW9uLS1hYnNvbHV0ZSB0ZXh0LS1tIHRleHQtd2VpZ2h0LS1nXCJcbiAgICAgICAgW25nQ2xhc3NdPVwic2hvdWxkU2hvd0Ryb3Bkb3duID8gJ2ljb24tY2hldnJvbi11cCcgOiAnaWNvbi1jaGV2cm9uLWRvd24nXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2ICpuZ0lmPVwic2hvdWxkU2hvd0Ryb3Bkb3duXCIgY2xhc3M9XCJzZWxlY3QtZHJvcGRvd25fX29wdGlvbnMgcG9zaXRpb24tLWFic29sdXRlIHdpZHRoLS1mdWxsXCI+XG4gICAgPHVsIGNsYXNzPVwic2VsZWN0LWRyb3Bkb3duX19vcHRpb25zX19jb250ZW50IHBsLS1uIG0tLW4gcG9zaXRpb24tLXJlbGF0aXZlXCI+XG4gICAgICA8bGlcbiAgICAgICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBvcHRpb25MaXN0XCJcbiAgICAgICAgKG1vdXNlZG93bik9XCJ1cGRhdGVWYWx1ZShvcHRpb24pXCJcbiAgICAgICAgY2xhc3M9XCJzZWxlY3QtZHJvcGRvd25fX29wdGlvbnNfX2xpc3QgY3Vyc29yLS0tcG9pbnRlclwiPlxuICAgICAgICB7eyBvcHRpb24udmFsdWUgfX1cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJmb3JtRXJyb3JJbnB1dCBGb3JtX19pbnB1dF9faW52YWxpZC1tZXNzYWdlXCIgKm5nSWY9XCJlcnJvclwiPlxuICAgIHt7IGdldFRleHQoKSB8IHRyYW5zbGF0ZSB9fVxuICA8L2Rpdj5cbjwvZGl2PlxuIl19