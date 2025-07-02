import { Component, forwardRef, Input, Optional } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractDropdownComponent } from '../abstract-dropdown.component';
import * as i0 from "@angular/core";
import * as i1 from "@telenet/ng-lib-page";
import * as i2 from "../../../errors";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
import * as i5 from "@ngx-translate/core";
function DropdownWithTooltipComponent_div_1_label_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 18);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, ctx_r3.getLabel() + ".optional"));
} }
const _c0 = a0 => ({ labelStyle: a0 });
function DropdownWithTooltipComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8)(1, "div")(2, "label", 9);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 10)(6, "div", 11);
    i0.ɵɵelement(7, "i", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 13)(9, "div", 14)(10, "div", 15)(11, "div", 16);
    i0.ɵɵtext(12);
    i0.ɵɵpipe(13, "translate");
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵtemplate(14, DropdownWithTooltipComponent_div_1_label_14_Template, 3, 3, "label", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(9, _c0, ctx_r0.labelStyle));
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("for", ctx_r0.key);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 5, ctx_r0.getLabel()));
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(13, 7, ctx_r0.getTooltip()), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r0.required);
} }
function DropdownWithTooltipComponent_div_7_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 22);
    i0.ɵɵlistener("mousedown", function DropdownWithTooltipComponent_div_7_li_2_Template_li_mousedown_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r7); const option_r5 = restoredCtx.$implicit; const ctx_r6 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r6.updateValue(option_r5)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r5 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", option_r5.label, " ");
} }
function DropdownWithTooltipComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19)(1, "ul", 20);
    i0.ɵɵtemplate(2, DropdownWithTooltipComponent_div_7_li_2_Template, 2, 1, "li", 21);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.optionList);
} }
function DropdownWithTooltipComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r2.getText()), " ");
} }
const _c1 = (a0, a1) => ({ "form__input--disabled": a0, "form__input--error": a1 });
export class DropdownWithTooltipComponent extends AbstractDropdownComponent {
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
    static ɵfac = function DropdownWithTooltipComponent_Factory(t) { return new (t || DropdownWithTooltipComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(i2.FormErrorService), i0.ɵɵdirectiveInject(i2.MessageGroupDirective, 8), i0.ɵɵdirectiveInject(i0.Injector)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DropdownWithTooltipComponent, selectors: [["tg-form-dropdown-with-tooltip"]], inputs: { disabled: "disabled", required: "required" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => DropdownWithTooltipComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 9, vars: 18, consts: [[1, "form-group", "position--relative"], ["class", "display--flex align-items--center justify-content--between", 3, "ngClass", 4, "ngIf"], [1, "select-dropdown-section", "default"], [1, "form-control", "select-dropdown", "p--n"], ["type", "text", "readonly", "", 1, "form__input", "form-control", "cursor--pointer", "ellipsis", 3, "id", "ngClass", "name", "ngModel", "disabled", "required", "placeholder", "ngModelChange", "focusout", "click"], [1, "icon", "position--absolute", "text--m", "text-weight--g", 3, "ngClass"], ["class", "select-dropdown__options position--absolute width--full", 4, "ngIf"], ["class", "formErrorInput Form__input__invalid-message", 4, "ngIf"], [1, "display--flex", "align-items--center", "justify-content--between", 3, "ngClass"], [3, "for"], [1, "tooltip", "position--relative", "display--inline-block"], [1, "tooltip__icon-section", "display--flex", "flex-direction--row--sm", "flex-direction--row-reverse", "align-items--center", "justify-content--center", "cursor--pointer", "my--xxxs"], [1, "icon", "icon-information-shape"], [1, "tooltip__info-section", "tooltip__info-section__arrow-left", "tooltip__info-section__auto-width"], [1, "horizontal-center-align"], [1, "info-section__description"], [1, "info-section__description__text"], ["class", "fl-right", 4, "ngIf"], [1, "fl-right"], [1, "select-dropdown__options", "position--absolute", "width--full"], [1, "select-dropdown__options__content", "pl--n", "m--n", "position--relative"], ["class", "select-dropdown__options__list cursor---pointer", 3, "mousedown", 4, "ngFor", "ngForOf"], [1, "select-dropdown__options__list", "cursor---pointer", 3, "mousedown"], [1, "formErrorInput", "Form__input__invalid-message"]], template: function DropdownWithTooltipComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, DropdownWithTooltipComponent_div_1_Template, 15, 11, "div", 1);
            i0.ɵɵelementStart(2, "div", 2)(3, "div", 3)(4, "input", 4);
            i0.ɵɵlistener("ngModelChange", function DropdownWithTooltipComponent_Template_input_ngModelChange_4_listener($event) { return ctx.value = $event; })("focusout", function DropdownWithTooltipComponent_Template_input_focusout_4_listener() { return ctx.focusOut(); })("click", function DropdownWithTooltipComponent_Template_input_click_4_listener() { return ctx.toggle(); });
            i0.ɵɵpipe(5, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(6, "div", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(7, DropdownWithTooltipComponent_div_7_Template, 3, 1, "div", 6)(8, DropdownWithTooltipComponent_div_8_Template, 3, 3, "div", 7);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.customLabel);
            i0.ɵɵadvance(3);
            i0.ɵɵclassProp("ng-invalid-custom", ctx.error);
            i0.ɵɵpropertyInterpolate("id", ctx.key);
            i0.ɵɵpropertyInterpolate("name", ctx.key);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(15, _c1, ctx.disabled, ctx.error))("ngModel", ctx.value)("disabled", ctx.disabled)("required", ctx.required)("placeholder", ctx.showPlaceHolder ? i0.ɵɵpipeBind1(5, 13, ctx.getPlaceholder()) : "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", ctx.shouldShowDropdown ? "icon-chevron-up" : "icon-chevron-down");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.shouldShowDropdown);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.error);
        } }, dependencies: [i3.NgClass, i3.NgForOf, i3.NgIf, i4.DefaultValueAccessor, i4.NgControlStatus, i4.RequiredValidator, i4.NgModel, i5.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DropdownWithTooltipComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-dropdown-with-tooltip', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => DropdownWithTooltipComponent),
                        multi: true,
                    },
                ], template: "<div class=\"form-group position--relative\">\n  <div\n    *ngIf=\"customLabel\"\n    [ngClass]=\"{ labelStyle: this.labelStyle }\"\n    class=\"display--flex align-items--center justify-content--between\">\n    <div>\n      <label for=\"{{ key }}\">{{ getLabel() | translate }}</label>\n      <div class=\"tooltip position--relative display--inline-block\">\n        <div\n          class=\"tooltip__icon-section display--flex flex-direction--row--sm flex-direction--row-reverse align-items--center justify-content--center cursor--pointer my--xxxs\">\n          <i class=\"icon icon-information-shape\"></i>\n        </div>\n        <div class=\"tooltip__info-section tooltip__info-section__arrow-left tooltip__info-section__auto-width\">\n          <div class=\"horizontal-center-align\">\n            <div class=\"info-section__description\">\n              <div class=\"info-section__description__text\">\n                {{ getTooltip() | translate }}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <label class=\"fl-right\" *ngIf=\"!required\">{{ getLabel() + '.optional' | translate }}</label>\n  </div>\n  <div class=\"select-dropdown-section default\">\n    <div class=\"form-control select-dropdown p--n\">\n      <input\n        id=\"{{ key }}\"\n        type=\"text\"\n        [ngClass]=\"{ 'form__input--disabled': disabled, 'form__input--error': error }\"\n        class=\"form__input form-control cursor--pointer ellipsis\"\n        name=\"{{ key }}\"\n        [(ngModel)]=\"value\"\n        [disabled]=\"disabled\"\n        [required]=\"required\"\n        [placeholder]=\"showPlaceHolder ? (getPlaceholder() | translate) : ''\"\n        [class.ng-invalid-custom]=\"error\"\n        (focusout)=\"focusOut()\"\n        (click)=\"toggle()\"\n        readonly />\n      <div\n        class=\"icon position--absolute text--m text-weight--g\"\n        [ngClass]=\"shouldShowDropdown ? 'icon-chevron-up' : 'icon-chevron-down'\"></div>\n    </div>\n  </div>\n  <div *ngIf=\"shouldShowDropdown\" class=\"select-dropdown__options position--absolute width--full\">\n    <ul class=\"select-dropdown__options__content pl--n m--n position--relative\">\n      <li\n        *ngFor=\"let option of optionList\"\n        (mousedown)=\"updateValue(option)\"\n        class=\"select-dropdown__options__list cursor---pointer\">\n        {{ option.label }}\n      </li>\n    </ul>\n  </div>\n  <div class=\"formErrorInput Form__input__invalid-message\" *ngIf=\"error\">\n    {{ getText() | translate }}\n  </div>\n</div>\n" }]
    }], () => [{ type: i1.LanguageService }, { type: i2.FormErrorService }, { type: i2.MessageGroupDirective, decorators: [{
                type: Optional
            }] }, { type: i0.Injector }], { disabled: [{
            type: Input
        }], required: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DropdownWithTooltipComponent, { className: "DropdownWithTooltipComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l0aC10b29sdGlwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb250cm9scy9kcm9wZG93bi93aXRoLXRvb2x0aXAvd2l0aC10b29sdGlwLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9jb250cm9scy9kcm9wZG93bi93aXRoLXRvb2x0aXAvd2l0aC10b29sdGlwLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFZLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7Ozs7O0lDb0J2RSxpQ0FBMEM7SUFBQSxZQUEwQzs7SUFBQSxpQkFBUTs7O0lBQWxELGNBQTBDO0lBQTFDLDJFQUEwQzs7OztJQXRCdEYsOEJBR3FFLFVBQUEsZUFBQTtJQUUxQyxZQUE0Qjs7SUFBQSxpQkFBUTtJQUMzRCwrQkFBOEQsY0FBQTtJQUcxRCx3QkFBMkM7SUFDN0MsaUJBQU07SUFDTiwrQkFBdUcsY0FBQSxlQUFBLGVBQUE7SUFJL0YsYUFDRjs7SUFBQSxpQkFBTSxFQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUE7SUFNaEIsMEZBQTRGO0lBQzlGLGlCQUFNOzs7SUFyQkosdUVBQTJDO0lBR2xDLGVBQWU7SUFBZiwyQ0FBZTtJQUFDLGNBQTRCO0lBQTVCLDZEQUE0QjtJQVV6QyxlQUNGO0lBREUsMkVBQ0Y7SUFNZSxlQUFlO0lBQWYsdUNBQWU7Ozs7SUF5QnRDLDhCQUcwRDtJQUR4RCxnUEFBYSxlQUFBLDZCQUFtQixDQUFBLElBQUM7SUFFakMsWUFDRjtJQUFBLGlCQUFLOzs7SUFESCxjQUNGO0lBREUsZ0RBQ0Y7OztJQVBKLCtCQUFnRyxhQUFB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QkFDM0QsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7O3NCQVVFLFFBQVE7NENBTkYsUUFBUTtrQkFBaEIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7O2tGQUhLLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5qZWN0b3IsIElucHV0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICdAdGVsZW5ldC9uZy1saWItcGFnZSc7XG5pbXBvcnQgeyBBYnN0cmFjdERyb3Bkb3duQ29tcG9uZW50IH0gZnJvbSAnLi4vYWJzdHJhY3QtZHJvcGRvd24uY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1FcnJvclNlcnZpY2UsIE1lc3NhZ2VHcm91cERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uLy4uL2Vycm9ycyc7XG5pbXBvcnQgeyBJbnB1dE9wdGlvbiB9IGZyb20gJy4uLy4uL3JhZGlvJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGctZm9ybS1kcm9wZG93bi13aXRoLXRvb2x0aXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vd2l0aC10b29sdGlwLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBEcm9wZG93bldpdGhUb29sdGlwQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duV2l0aFRvb2x0aXBDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdERyb3Bkb3duQ29tcG9uZW50IHtcbiAgc2hvdWxkU2hvd0Ryb3Bkb3duOiBib29sZWFuO1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSByZXF1aXJlZDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UsXG4gICAgcHVibGljIGZvcm1TZXJ2aWNlOiBGb3JtRXJyb3JTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBtZXNzYWdlR3JvdXBEaXJlY3RpdmU6IE1lc3NhZ2VHcm91cERpcmVjdGl2ZSxcbiAgICBwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yXG4gICkge1xuICAgIHN1cGVyKGxhbmd1YWdlU2VydmljZSwgZm9ybVNlcnZpY2UsIG1lc3NhZ2VHcm91cERpcmVjdGl2ZSwgaW5qZWN0b3IpO1xuICB9XG5cbiAgdXBkYXRlVmFsdWUob3B0aW9uOiBJbnB1dE9wdGlvbik6IHZvaWQge1xuICAgIHRoaXMud3JpdGVWYWx1ZShvcHRpb24udmFsdWUpO1xuICAgIHRoaXMub25DaGFuZ2Uob3B0aW9uLnZhbHVlKTtcbiAgICB0aGlzLnRvZ2dsZSgpO1xuICB9XG5cbiAgZm9jdXNPdXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2hvdWxkU2hvd0Ryb3Bkb3duKSB7XG4gICAgICBpZiAodGhpcy5jb250cm9sLmNvbnRyb2wpIHtcbiAgICAgICAgdGhpcy5jb250cm9sLmNvbnRyb2wubWFya0FsbEFzVG91Y2hlZCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5jaGVja0Vycm9ycygpO1xuICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgdGhpcy5zaG91bGRTaG93RHJvcGRvd24gPSAhdGhpcy5zaG91bGRTaG93RHJvcGRvd247XG4gIH1cblxuICBwcml2YXRlIGNoZWNrRXJyb3JzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbnRyb2wuY29udHJvbCAmJiB0aGlzLmNvbnRyb2wuY29udHJvbC5lcnJvcnMpIHtcbiAgICAgIHRoaXMuZXJyb3IgPSBPYmplY3Qua2V5cyh0aGlzLmNvbnRyb2wuY29udHJvbC5lcnJvcnMpWzBdO1xuICAgIH1cbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcG9zaXRpb24tLXJlbGF0aXZlXCI+XG4gIDxkaXZcbiAgICAqbmdJZj1cImN1c3RvbUxhYmVsXCJcbiAgICBbbmdDbGFzc109XCJ7IGxhYmVsU3R5bGU6IHRoaXMubGFiZWxTdHlsZSB9XCJcbiAgICBjbGFzcz1cImRpc3BsYXktLWZsZXggYWxpZ24taXRlbXMtLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtLWJldHdlZW5cIj5cbiAgICA8ZGl2PlxuICAgICAgPGxhYmVsIGZvcj1cInt7IGtleSB9fVwiPnt7IGdldExhYmVsKCkgfCB0cmFuc2xhdGUgfX08L2xhYmVsPlxuICAgICAgPGRpdiBjbGFzcz1cInRvb2x0aXAgcG9zaXRpb24tLXJlbGF0aXZlIGRpc3BsYXktLWlubGluZS1ibG9ja1wiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJ0b29sdGlwX19pY29uLXNlY3Rpb24gZGlzcGxheS0tZmxleCBmbGV4LWRpcmVjdGlvbi0tcm93LS1zbSBmbGV4LWRpcmVjdGlvbi0tcm93LXJldmVyc2UgYWxpZ24taXRlbXMtLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtLWNlbnRlciBjdXJzb3ItLXBvaW50ZXIgbXktLXh4eHNcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImljb24gaWNvbi1pbmZvcm1hdGlvbi1zaGFwZVwiPjwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b29sdGlwX19pbmZvLXNlY3Rpb24gdG9vbHRpcF9faW5mby1zZWN0aW9uX19hcnJvdy1sZWZ0IHRvb2x0aXBfX2luZm8tc2VjdGlvbl9fYXV0by13aWR0aFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJob3Jpem9udGFsLWNlbnRlci1hbGlnblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm8tc2VjdGlvbl9fZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm8tc2VjdGlvbl9fZGVzY3JpcHRpb25fX3RleHRcIj5cbiAgICAgICAgICAgICAgICB7eyBnZXRUb29sdGlwKCkgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8bGFiZWwgY2xhc3M9XCJmbC1yaWdodFwiICpuZ0lmPVwiIXJlcXVpcmVkXCI+e3sgZ2V0TGFiZWwoKSArICcub3B0aW9uYWwnIHwgdHJhbnNsYXRlIH19PC9sYWJlbD5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJzZWxlY3QtZHJvcGRvd24tc2VjdGlvbiBkZWZhdWx0XCI+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tY29udHJvbCBzZWxlY3QtZHJvcGRvd24gcC0tblwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIGlkPVwie3sga2V5IH19XCJcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBbbmdDbGFzc109XCJ7ICdmb3JtX19pbnB1dC0tZGlzYWJsZWQnOiBkaXNhYmxlZCwgJ2Zvcm1fX2lucHV0LS1lcnJvcic6IGVycm9yIH1cIlxuICAgICAgICBjbGFzcz1cImZvcm1fX2lucHV0IGZvcm0tY29udHJvbCBjdXJzb3ItLXBvaW50ZXIgZWxsaXBzaXNcIlxuICAgICAgICBuYW1lPVwie3sga2V5IH19XCJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiXG4gICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJzaG93UGxhY2VIb2xkZXIgPyAoZ2V0UGxhY2Vob2xkZXIoKSB8IHRyYW5zbGF0ZSkgOiAnJ1wiXG4gICAgICAgIFtjbGFzcy5uZy1pbnZhbGlkLWN1c3RvbV09XCJlcnJvclwiXG4gICAgICAgIChmb2N1c291dCk9XCJmb2N1c091dCgpXCJcbiAgICAgICAgKGNsaWNrKT1cInRvZ2dsZSgpXCJcbiAgICAgICAgcmVhZG9ubHkgLz5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJpY29uIHBvc2l0aW9uLS1hYnNvbHV0ZSB0ZXh0LS1tIHRleHQtd2VpZ2h0LS1nXCJcbiAgICAgICAgW25nQ2xhc3NdPVwic2hvdWxkU2hvd0Ryb3Bkb3duID8gJ2ljb24tY2hldnJvbi11cCcgOiAnaWNvbi1jaGV2cm9uLWRvd24nXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2ICpuZ0lmPVwic2hvdWxkU2hvd0Ryb3Bkb3duXCIgY2xhc3M9XCJzZWxlY3QtZHJvcGRvd25fX29wdGlvbnMgcG9zaXRpb24tLWFic29sdXRlIHdpZHRoLS1mdWxsXCI+XG4gICAgPHVsIGNsYXNzPVwic2VsZWN0LWRyb3Bkb3duX19vcHRpb25zX19jb250ZW50IHBsLS1uIG0tLW4gcG9zaXRpb24tLXJlbGF0aXZlXCI+XG4gICAgICA8bGlcbiAgICAgICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBvcHRpb25MaXN0XCJcbiAgICAgICAgKG1vdXNlZG93bik9XCJ1cGRhdGVWYWx1ZShvcHRpb24pXCJcbiAgICAgICAgY2xhc3M9XCJzZWxlY3QtZHJvcGRvd25fX29wdGlvbnNfX2xpc3QgY3Vyc29yLS0tcG9pbnRlclwiPlxuICAgICAgICB7eyBvcHRpb24ubGFiZWwgfX1cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJmb3JtRXJyb3JJbnB1dCBGb3JtX19pbnB1dF9faW52YWxpZC1tZXNzYWdlXCIgKm5nSWY9XCJlcnJvclwiPlxuICAgIHt7IGdldFRleHQoKSB8IHRyYW5zbGF0ZSB9fVxuICA8L2Rpdj5cbjwvZGl2PlxuIl19