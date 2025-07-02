import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractInputRadioWithInputComponent } from '../abstract-with-input.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "../../../../../directives/margin/margin.directive";
import * as i4 from "../../../../../directives/row/row.directive";
import * as i5 from "@ngx-translate/core";
const _c0 = () => ({ size: "m", position: "b" });
function InputRadioWithInputHorizontalComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 10)(2, "div", 13);
    i0.ɵɵelement(3, "div", 14);
    i0.ɵɵelementStart(4, "label");
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("tgMargin", i0.ɵɵpureFunction0(4, _c0));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(6, 2, ctx_r0.getLabel()));
} }
function InputRadioWithInputHorizontalComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15)(1, "span", 16);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 1, ctx_r1.getText()));
} }
const _c1 = () => ({ size: "m", position: "t" });
const _c2 = (a0, a1) => [a0, a1];
function InputRadioWithInputHorizontalComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 10)(2, "div", 4)(3, "div", 5)(4, "div", 6);
    i0.ɵɵelement(5, "input", 7);
    i0.ɵɵelementStart(6, "label", 8);
    i0.ɵɵlistener("click", function InputRadioWithInputHorizontalComponent_ng_container_3_Template_label_click_6_listener() { const restoredCtx = i0.ɵɵrestoreView(_r6); const option_r3 = restoredCtx.$implicit; const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.selectOption(option_r3)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "label", 17);
    i0.ɵɵlistener("click", function InputRadioWithInputHorizontalComponent_ng_container_3_Template_label_click_7_listener() { const restoredCtx = i0.ɵɵrestoreView(_r6); const option_r3 = restoredCtx.$implicit; const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.selectOption(option_r3)); });
    i0.ɵɵpipe(8, "translate");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("tgMargin", i0.ɵɵpureFunction2(17, _c2, i0.ɵɵpureFunction0(15, _c1), i0.ɵɵpureFunction0(16, _c0)));
    i0.ɵɵadvance(2);
    i0.ɵɵstyleMap("--animation-delay:" + i_r4);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate2("id", "choice-", i_r4, "-", ctx_r2.key, "")("name", "choice-", i_r4, "-", ctx_r2.key, "");
    i0.ɵɵproperty("checked", ctx_r2.selectedOption && option_r3.value === ctx_r2.selectedOption.value);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate2("for", "choice-", i_r4, "-", ctx_r2.key, "");
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate2("for", "choice-", i_r4, "-", ctx_r2.key, "");
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(8, 13, ctx_r2.getOptionLabel(option_r3)), i0.ɵɵsanitizeHtml);
} }
const _c3 = () => ({ size: "l", position: "b" });
export class InputRadioWithInputHorizontalComponent extends AbstractInputRadioWithInputComponent {
    onBlur() {
        this.trackingEvent.emit({ label: this.getLabel(), value: this.inputValue });
    }
    static ɵfac = /*@__PURE__*/ (() => { let ɵInputRadioWithInputHorizontalComponent_BaseFactory; return function InputRadioWithInputHorizontalComponent_Factory(t) { return (ɵInputRadioWithInputHorizontalComponent_BaseFactory || (ɵInputRadioWithInputHorizontalComponent_BaseFactory = i0.ɵɵgetInheritedFactory(InputRadioWithInputHorizontalComponent)))(t || InputRadioWithInputHorizontalComponent); }; })();
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputRadioWithInputHorizontalComponent, selectors: [["tg-form-radio-with-input-horizontal"]], features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputRadioWithInputHorizontalComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 14, vars: 26, consts: [["tgGridRow", "", 3, "tgMargin", 4, "ngIf"], ["class", "notification notification--errorfield", 4, "ngIf"], ["tgGridRow", "", 3, "tgMargin"], [4, "ngFor", "ngForOf"], [3, "tgMargin"], [1, "radio-checkbox"], [1, "radio", "form__radio"], ["type", "radio", 1, "form__radio__input", 3, "checked", "id", "name"], [1, "form__radio__label", 3, "for", "click"], [1, "label--large", 3, "for", "click"], [1, "col--grow"], [1, "form__input-container"], ["name", "radio-group-name", "pattern", "", "required", "required", "type", "text", 1, "form__input", "Form__input", 3, "ngModel", "id", "placeholder", "blur", "focus", "ngModelChange"], ["appTextFlow", "label"], [1, "label-input-flow"], [1, "notification", "notification--errorfield"], [1, "icon", "icon-error-shape", "errorfield"], [1, "label--large", 3, "innerHTML", "for", "click"]], template: function InputRadioWithInputHorizontalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, InputRadioWithInputHorizontalComponent_div_0_Template, 7, 5, "div", 0)(1, InputRadioWithInputHorizontalComponent_div_1_Template, 4, 3, "div", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵtemplate(3, InputRadioWithInputHorizontalComponent_ng_container_3_Template, 9, 20, "ng-container", 3);
            i0.ɵɵelementStart(4, "div", 4)(5, "div", 5)(6, "div", 6);
            i0.ɵɵelement(7, "input", 7);
            i0.ɵɵelementStart(8, "label", 8);
            i0.ɵɵlistener("click", function InputRadioWithInputHorizontalComponent_Template_label_click_8_listener() { return ctx.selectInput(); });
            i0.ɵɵtext(9, "\u00A0");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "label", 9);
            i0.ɵɵlistener("click", function InputRadioWithInputHorizontalComponent_Template_label_click_10_listener() { return ctx.selectInput(); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(11, "div", 10)(12, "div", 11)(13, "input", 12);
            i0.ɵɵlistener("blur", function InputRadioWithInputHorizontalComponent_Template_input_blur_13_listener() { return ctx.onBlur(); })("focus", function InputRadioWithInputHorizontalComponent_Template_input_focus_13_listener() { return ctx.focusOtherSelected(); })("ngModelChange", function InputRadioWithInputHorizontalComponent_Template_input_ngModelChange_13_listener($event) { return ctx.inputValue = $event; });
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.customLabel);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.error);
            i0.ɵɵadvance();
            i0.ɵɵproperty("tgMargin", i0.ɵɵpureFunction0(20, _c3));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.optionList);
            i0.ɵɵadvance();
            i0.ɵɵproperty("tgMargin", i0.ɵɵpureFunction2(23, _c2, i0.ɵɵpureFunction0(21, _c1), i0.ɵɵpureFunction0(22, _c0)));
            i0.ɵɵadvance(2);
            i0.ɵɵstyleMap("--animation-delay:" + ctx.optionList.length);
            i0.ɵɵadvance();
            i0.ɵɵpropertyInterpolate2("id", "choice-", ctx.optionList.length, "-", ctx.key, "")("name", "choice-", ctx.optionList.length, "-", ctx.key, "");
            i0.ɵɵproperty("checked", ctx.inputRadioSelected);
            i0.ɵɵadvance();
            i0.ɵɵpropertyInterpolate2("for", "choice-", ctx.optionList.length, "-", ctx.key, "");
            i0.ɵɵadvance(2);
            i0.ɵɵpropertyInterpolate2("for", "choice-", ctx.optionList.length, "-", ctx.key, "");
            i0.ɵɵadvance(3);
            i0.ɵɵpropertyInterpolate2("id", "choice-input-", ctx.optionList.length, "-", ctx.key, "");
            i0.ɵɵpropertyInterpolate("placeholder", ctx.inputPlaceholder);
            i0.ɵɵproperty("ngModel", ctx.inputValue);
        } }, dependencies: [i1.NgForOf, i1.NgIf, i2.DefaultValueAccessor, i2.NgControlStatus, i2.RequiredValidator, i2.PatternValidator, i2.NgModel, i3.MarginDirective, i4.RowDirective, i5.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputRadioWithInputHorizontalComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-radio-with-input-horizontal', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputRadioWithInputHorizontalComponent),
                        multi: true,
                    },
                ], template: "<div *ngIf=\"customLabel\" [tgMargin]=\"{ size: 'm', position: 'b' }\" tgGridRow>\n  <div class=\"col--grow\">\n    <div appTextFlow=\"label\">\n      <div class=\"label-input-flow\"></div>\n      <label>{{ getLabel() | translate }}</label>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"error\" class=\"notification notification--errorfield\">\n  <span class=\"icon icon-error-shape errorfield\">{{ getText() | translate }}</span>\n</div>\n<div [tgMargin]=\"{ size: 'l', position: 'b' }\" tgGridRow>\n  <ng-container *ngFor=\"let option of optionList; let i = index\">\n    <div class=\"col--grow\">\n      <div\n        [tgMargin]=\"[\n          { size: 'm', position: 't' },\n          { size: 'm', position: 'b' }\n        ]\">\n        <div class=\"radio-checkbox\">\n          <div [style]=\"'--animation-delay:' + i\" class=\"radio form__radio\">\n            <input\n              [checked]=\"selectedOption && option.value === selectedOption.value\"\n              class=\"form__radio__input\"\n              id=\"choice-{{ i }}-{{ key }}\"\n              name=\"choice-{{ i }}-{{ key }}\"\n              type=\"radio\" />\n            <label (click)=\"selectOption(option)\" class=\"form__radio__label\" for=\"choice-{{ i }}-{{ key }}\"></label>\n          </div>\n          <label\n            (click)=\"selectOption(option)\"\n            [innerHTML]=\"getOptionLabel(option) | translate\"\n            class=\"label--large\"\n            for=\"choice-{{ i }}-{{ key }}\">\n          </label>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n  <div\n    [tgMargin]=\"[\n      { size: 'm', position: 't' },\n      { size: 'm', position: 'b' }\n    ]\">\n    <div class=\"radio-checkbox\">\n      <div [style]=\"'--animation-delay:' + optionList.length\" class=\"radio form__radio\">\n        <input\n          [checked]=\"inputRadioSelected\"\n          class=\"form__radio__input\"\n          id=\"choice-{{ optionList.length }}-{{ key }}\"\n          name=\"choice-{{ optionList.length }}-{{ key }}\"\n          type=\"radio\" />\n        <label (click)=\"selectInput()\" class=\"form__radio__label\" for=\"choice-{{ optionList.length }}-{{ key }}\"\n          >&nbsp;</label\n        >\n      </div>\n      <label (click)=\"selectInput()\" class=\"label--large\" for=\"choice-{{ optionList.length }}-{{ key }}\"></label>\n    </div>\n  </div>\n  <div class=\"col--grow\">\n    <div class=\"form__input-container\">\n      <input\n        (blur)=\"onBlur()\"\n        (focus)=\"focusOtherSelected()\"\n        [(ngModel)]=\"inputValue\"\n        class=\"form__input Form__input\"\n        id=\"choice-input-{{ optionList.length }}-{{ key }}\"\n        name=\"radio-group-name\"\n        pattern=\"\"\n        placeholder=\"{{ inputPlaceholder }}\"\n        required=\"required\"\n        type=\"text\" />\n    </div>\n  </div>\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputRadioWithInputHorizontalComponent, { className: "InputRadioWithInputHorizontalComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l0aC1pbnB1dC1ob3Jpem9udGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb250cm9scy9yYWRpby1jaGVja2JveC9yYWRpby93aXRoLWlucHV0L2hvcml6b250YWwvd2l0aC1pbnB1dC1ob3Jpem9udGFsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb250cm9scy9yYWRpby1jaGVja2JveC9yYWRpby93aXRoLWlucHV0L2hvcml6b250YWwvd2l0aC1pbnB1dC1ob3Jpem9udGFsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOzs7Ozs7Ozs7SUNGeEYsOEJBQTZFLGNBQUEsY0FBQTtJQUd2RSwwQkFBb0M7SUFDcEMsNkJBQU87SUFBQSxZQUE0Qjs7SUFBQSxpQkFBUSxFQUFBLEVBQUEsRUFBQTs7O0lBSnhCLHFEQUF5QztJQUlyRCxlQUE0QjtJQUE1Qiw2REFBNEI7OztJQUl6QywrQkFBaUUsZUFBQTtJQUNoQixZQUEyQjs7SUFBQSxpQkFBTyxFQUFBOzs7SUFBbEMsZUFBMkI7SUFBM0IsNERBQTJCOzs7Ozs7SUFHMUUsNkJBQStEO0lBQzdELCtCQUF1QixhQUFBLGFBQUEsYUFBQTtJQVFmLDJCQUtpQjtJQUNqQixnQ0FBZ0c7SUFBekYsd1BBQVMsZUFBQSw4QkFBb0IsQ0FBQSxJQUFDO0lBQTJELGlCQUFRLEVBQUE7SUFFMUcsaUNBSWlDO0lBSC9CLHdQQUFTLGVBQUEsOEJBQW9CLENBQUEsSUFBQzs7SUFJaEMsaUJBQVEsRUFBQSxFQUFBLEVBQUE7SUFJaEIsMEJBQWU7Ozs7O0lBdkJULGVBR0U7SUFIRixnSEFHRTtJQUVLLGVBQWtDO0lBQWxDLDBDQUFrQztJQUluQyxjQUE2QjtJQUE3QixxRUFBNkIsOENBQUE7SUFGN0Isa0dBQW1FO0lBS0osY0FBOEI7SUFBOUIsc0VBQThCO0lBTS9GLGNBQThCO0lBQTlCLHNFQUE4QjtJQUY5QixzR0FBZ0Q7OztBRGhCNUQsTUFBTSxPQUFPLHNDQUF1QyxTQUFRLG9DQUFvQztJQUM5RixNQUFNO1FBQ0osSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUM5RSxDQUFDO3FUQUhVLHNDQUFzQyxTQUF0QyxzQ0FBc0M7NkRBQXRDLHNDQUFzQyx5RkFSdEM7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxzQ0FBc0MsQ0FBQztvQkFDckUsS0FBSyxFQUFFLElBQUk7aUJBQ1o7YUFDRjtZQ2JILHVGQU9NLDBFQUFBO1lBSU4sOEJBQXlEO1lBQ3ZELDBHQTBCZTtZQUNmLDhCQUlLLGFBQUEsYUFBQTtZQUdDLDJCQUtpQjtZQUNqQixnQ0FDRztZQURJLGtIQUFTLGlCQUFhLElBQUM7WUFDM0Isc0JBQU07WUFBQSxpQkFDUixFQUFBO1lBRUgsaUNBQW1HO1lBQTVGLG1IQUFTLGlCQUFhLElBQUM7WUFBcUUsaUJBQVEsRUFBQSxFQUFBO1lBRy9HLGdDQUF1QixlQUFBLGlCQUFBO1lBR2pCLGlIQUFRLFlBQVEsSUFBQyxzR0FDUix3QkFBb0IsSUFEWix1SkFBQTtZQURuQixpQkFVZ0IsRUFBQSxFQUFBLEVBQUE7O1lBdkVoQixzQ0FBaUI7WUFRakIsY0FBVztZQUFYLGdDQUFXO1lBR1osY0FBeUM7WUFBekMsc0RBQXlDO1lBQ1gsY0FBZTtZQUFmLHdDQUFlO1lBNEI5QyxjQUdFO1lBSEYsZ0hBR0U7WUFFSyxlQUFrRDtZQUFsRCwyREFBa0Q7WUFJbkQsY0FBNkM7WUFBN0MsbUZBQTZDLDREQUFBO1lBRjdDLGdEQUE4QjtZQUswQixjQUE4QztZQUE5QyxvRkFBOEM7WUFJdEQsZUFBOEM7WUFBOUMsb0ZBQThDO1lBVWhHLGVBQW1EO1lBQW5ELHlGQUFtRDtZQUduRCw2REFBb0M7WUFMcEMsd0NBQXdCOzs7aUZEakRuQixzQ0FBc0M7Y0FYbEQsU0FBUzsyQkFDRSxxQ0FBcUMsYUFFcEM7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsdUNBQXVDLENBQUM7d0JBQ3JFLEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGOztrRkFFVSxzQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQWJzdHJhY3RJbnB1dFJhZGlvV2l0aElucHV0Q29tcG9uZW50IH0gZnJvbSAnLi4vYWJzdHJhY3Qtd2l0aC1pbnB1dC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0Zy1mb3JtLXJhZGlvLXdpdGgtaW5wdXQtaG9yaXpvbnRhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi93aXRoLWlucHV0LWhvcml6b250YWwuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IElucHV0UmFkaW9XaXRoSW5wdXRIb3Jpem9udGFsQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIElucHV0UmFkaW9XaXRoSW5wdXRIb3Jpem9udGFsQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RJbnB1dFJhZGlvV2l0aElucHV0Q29tcG9uZW50IHtcbiAgb25CbHVyKCkge1xuICAgIHRoaXMudHJhY2tpbmdFdmVudC5lbWl0KHsgbGFiZWw6IHRoaXMuZ2V0TGFiZWwoKSwgdmFsdWU6IHRoaXMuaW5wdXRWYWx1ZSB9KTtcbiAgfVxufVxuIiwiPGRpdiAqbmdJZj1cImN1c3RvbUxhYmVsXCIgW3RnTWFyZ2luXT1cInsgc2l6ZTogJ20nLCBwb3NpdGlvbjogJ2InIH1cIiB0Z0dyaWRSb3c+XG4gIDxkaXYgY2xhc3M9XCJjb2wtLWdyb3dcIj5cbiAgICA8ZGl2IGFwcFRleHRGbG93PVwibGFiZWxcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbC1pbnB1dC1mbG93XCI+PC9kaXY+XG4gICAgICA8bGFiZWw+e3sgZ2V0TGFiZWwoKSB8IHRyYW5zbGF0ZSB9fTwvbGFiZWw+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG48ZGl2ICpuZ0lmPVwiZXJyb3JcIiBjbGFzcz1cIm5vdGlmaWNhdGlvbiBub3RpZmljYXRpb24tLWVycm9yZmllbGRcIj5cbiAgPHNwYW4gY2xhc3M9XCJpY29uIGljb24tZXJyb3Itc2hhcGUgZXJyb3JmaWVsZFwiPnt7IGdldFRleHQoKSB8IHRyYW5zbGF0ZSB9fTwvc3Bhbj5cbjwvZGl2PlxuPGRpdiBbdGdNYXJnaW5dPVwieyBzaXplOiAnbCcsIHBvc2l0aW9uOiAnYicgfVwiIHRnR3JpZFJvdz5cbiAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG9wdGlvbkxpc3Q7IGxldCBpID0gaW5kZXhcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLS1ncm93XCI+XG4gICAgICA8ZGl2XG4gICAgICAgIFt0Z01hcmdpbl09XCJbXG4gICAgICAgICAgeyBzaXplOiAnbScsIHBvc2l0aW9uOiAndCcgfSxcbiAgICAgICAgICB7IHNpemU6ICdtJywgcG9zaXRpb246ICdiJyB9XG4gICAgICAgIF1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJhZGlvLWNoZWNrYm94XCI+XG4gICAgICAgICAgPGRpdiBbc3R5bGVdPVwiJy0tYW5pbWF0aW9uLWRlbGF5OicgKyBpXCIgY2xhc3M9XCJyYWRpbyBmb3JtX19yYWRpb1wiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIFtjaGVja2VkXT1cInNlbGVjdGVkT3B0aW9uICYmIG9wdGlvbi52YWx1ZSA9PT0gc2VsZWN0ZWRPcHRpb24udmFsdWVcIlxuICAgICAgICAgICAgICBjbGFzcz1cImZvcm1fX3JhZGlvX19pbnB1dFwiXG4gICAgICAgICAgICAgIGlkPVwiY2hvaWNlLXt7IGkgfX0te3sga2V5IH19XCJcbiAgICAgICAgICAgICAgbmFtZT1cImNob2ljZS17eyBpIH19LXt7IGtleSB9fVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIC8+XG4gICAgICAgICAgICA8bGFiZWwgKGNsaWNrKT1cInNlbGVjdE9wdGlvbihvcHRpb24pXCIgY2xhc3M9XCJmb3JtX19yYWRpb19fbGFiZWxcIiBmb3I9XCJjaG9pY2Ute3sgaSB9fS17eyBrZXkgfX1cIj48L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdE9wdGlvbihvcHRpb24pXCJcbiAgICAgICAgICAgIFtpbm5lckhUTUxdPVwiZ2V0T3B0aW9uTGFiZWwob3B0aW9uKSB8IHRyYW5zbGF0ZVwiXG4gICAgICAgICAgICBjbGFzcz1cImxhYmVsLS1sYXJnZVwiXG4gICAgICAgICAgICBmb3I9XCJjaG9pY2Ute3sgaSB9fS17eyBrZXkgfX1cIj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L25nLWNvbnRhaW5lcj5cbiAgPGRpdlxuICAgIFt0Z01hcmdpbl09XCJbXG4gICAgICB7IHNpemU6ICdtJywgcG9zaXRpb246ICd0JyB9LFxuICAgICAgeyBzaXplOiAnbScsIHBvc2l0aW9uOiAnYicgfVxuICAgIF1cIj5cbiAgICA8ZGl2IGNsYXNzPVwicmFkaW8tY2hlY2tib3hcIj5cbiAgICAgIDxkaXYgW3N0eWxlXT1cIictLWFuaW1hdGlvbi1kZWxheTonICsgb3B0aW9uTGlzdC5sZW5ndGhcIiBjbGFzcz1cInJhZGlvIGZvcm1fX3JhZGlvXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIFtjaGVja2VkXT1cImlucHV0UmFkaW9TZWxlY3RlZFwiXG4gICAgICAgICAgY2xhc3M9XCJmb3JtX19yYWRpb19faW5wdXRcIlxuICAgICAgICAgIGlkPVwiY2hvaWNlLXt7IG9wdGlvbkxpc3QubGVuZ3RoIH19LXt7IGtleSB9fVwiXG4gICAgICAgICAgbmFtZT1cImNob2ljZS17eyBvcHRpb25MaXN0Lmxlbmd0aCB9fS17eyBrZXkgfX1cIlxuICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIC8+XG4gICAgICAgIDxsYWJlbCAoY2xpY2spPVwic2VsZWN0SW5wdXQoKVwiIGNsYXNzPVwiZm9ybV9fcmFkaW9fX2xhYmVsXCIgZm9yPVwiY2hvaWNlLXt7IG9wdGlvbkxpc3QubGVuZ3RoIH19LXt7IGtleSB9fVwiXG4gICAgICAgICAgPiZuYnNwOzwvbGFiZWxcbiAgICAgICAgPlxuICAgICAgPC9kaXY+XG4gICAgICA8bGFiZWwgKGNsaWNrKT1cInNlbGVjdElucHV0KClcIiBjbGFzcz1cImxhYmVsLS1sYXJnZVwiIGZvcj1cImNob2ljZS17eyBvcHRpb25MaXN0Lmxlbmd0aCB9fS17eyBrZXkgfX1cIj48L2xhYmVsPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImNvbC0tZ3Jvd1wiPlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtX19pbnB1dC1jb250YWluZXJcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICAoYmx1cik9XCJvbkJsdXIoKVwiXG4gICAgICAgIChmb2N1cyk9XCJmb2N1c090aGVyU2VsZWN0ZWQoKVwiXG4gICAgICAgIFsobmdNb2RlbCldPVwiaW5wdXRWYWx1ZVwiXG4gICAgICAgIGNsYXNzPVwiZm9ybV9faW5wdXQgRm9ybV9faW5wdXRcIlxuICAgICAgICBpZD1cImNob2ljZS1pbnB1dC17eyBvcHRpb25MaXN0Lmxlbmd0aCB9fS17eyBrZXkgfX1cIlxuICAgICAgICBuYW1lPVwicmFkaW8tZ3JvdXAtbmFtZVwiXG4gICAgICAgIHBhdHRlcm49XCJcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cInt7IGlucHV0UGxhY2Vob2xkZXIgfX1cIlxuICAgICAgICByZXF1aXJlZD1cInJlcXVpcmVkXCJcbiAgICAgICAgdHlwZT1cInRleHRcIiAvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19