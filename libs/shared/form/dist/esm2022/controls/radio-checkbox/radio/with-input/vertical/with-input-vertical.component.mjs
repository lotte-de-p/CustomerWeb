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
function InputRadioWithInputVerticalComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 12)(2, "div", 13);
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
function InputRadioWithInputVerticalComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15)(1, "span", 16);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 1, ctx_r1.getText()));
} }
function InputRadioWithInputVerticalComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 4)(2, "div", 5);
    i0.ɵɵelement(3, "input", 6);
    i0.ɵɵelementStart(4, "label", 7);
    i0.ɵɵlistener("click", function InputRadioWithInputVerticalComponent_ng_container_3_Template_label_click_4_listener() { const restoredCtx = i0.ɵɵrestoreView(_r6); const option_r3 = restoredCtx.$implicit; const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.selectOption(option_r3)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "label", 17);
    i0.ɵɵlistener("click", function InputRadioWithInputVerticalComponent_ng_container_3_Template_label_click_5_listener() { const restoredCtx = i0.ɵɵrestoreView(_r6); const option_r3 = restoredCtx.$implicit; const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.selectOption(option_r3)); });
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵstyleMap("--animation-delay:" + i_r4);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate2("id", "choice-", i_r4, "-", ctx_r2.key, "")("name", "choice-", i_r4, "-", ctx_r2.key, "");
    i0.ɵɵproperty("checked", ctx_r2.selectedOption && option_r3.value === ctx_r2.selectedOption.value);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate2("for", "choice-", i_r4, "-", ctx_r2.key, "");
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate2("for", "choice-", i_r4, "-", ctx_r2.key, "");
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(6, 12, ctx_r2.getOptionLabel(option_r3)), i0.ɵɵsanitizeHtml);
} }
const _c1 = () => ({ size: "l", position: "b" });
export class InputRadioWithInputVerticalComponent extends AbstractInputRadioWithInputComponent {
    onBlur() {
        this.trackingEvent.emit({ label: this.getLabel(), value: this.inputValue });
    }
    static ɵfac = /*@__PURE__*/ (() => { let ɵInputRadioWithInputVerticalComponent_BaseFactory; return function InputRadioWithInputVerticalComponent_Factory(t) { return (ɵInputRadioWithInputVerticalComponent_BaseFactory || (ɵInputRadioWithInputVerticalComponent_BaseFactory = i0.ɵɵgetInheritedFactory(InputRadioWithInputVerticalComponent)))(t || InputRadioWithInputVerticalComponent); }; })();
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputRadioWithInputVerticalComponent, selectors: [["tg-form-radio-with-input-vertical"]], features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputRadioWithInputVerticalComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 14, vars: 22, consts: [["tgGridRow", "", 3, "tgMargin", 4, "ngIf"], ["class", "notification notification--errorfield", 4, "ngIf"], ["tgGridRow", "", 3, "tgMargin"], [4, "ngFor", "ngForOf"], [1, "radio-checkbox"], [1, "radio", "form__radio"], ["type", "radio", 1, "form__radio__input", 3, "checked", "id", "name"], [1, "form__radio__label", 3, "for", "click"], [1, "label--large", 3, "for", "click"], [1, "input-field-in-radio"], [1, "form__input-container"], ["name", "radio-group-name", "pattern", "", "required", "required", "type", "text", 1, "form__input", "Form__input", 3, "ngModel", "id", "placeholder", "blur", "focus", "ngModelChange"], [1, "col--grow"], ["appTextFlow", "label"], [1, "label-input-flow"], [1, "notification", "notification--errorfield"], [1, "icon", "icon-error-shape", "errorfield"], [1, "label--large", 3, "innerHTML", "for", "click"]], template: function InputRadioWithInputVerticalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, InputRadioWithInputVerticalComponent_div_0_Template, 7, 5, "div", 0)(1, InputRadioWithInputVerticalComponent_div_1_Template, 4, 3, "div", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵtemplate(3, InputRadioWithInputVerticalComponent_ng_container_3_Template, 7, 14, "ng-container", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 2)(5, "div", 4)(6, "div", 5);
            i0.ɵɵelement(7, "input", 6);
            i0.ɵɵelementStart(8, "label", 7);
            i0.ɵɵlistener("click", function InputRadioWithInputVerticalComponent_Template_label_click_8_listener() { return ctx.selectInput(); });
            i0.ɵɵtext(9, "\u00A0");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "label", 8);
            i0.ɵɵlistener("click", function InputRadioWithInputVerticalComponent_Template_label_click_10_listener() { return ctx.selectInput(); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "div", 9)(12, "div", 10)(13, "input", 11);
            i0.ɵɵlistener("blur", function InputRadioWithInputVerticalComponent_Template_input_blur_13_listener() { return ctx.onBlur(); })("focus", function InputRadioWithInputVerticalComponent_Template_input_focus_13_listener() { return ctx.focusOtherSelected(); })("ngModelChange", function InputRadioWithInputVerticalComponent_Template_input_ngModelChange_13_listener($event) { return ctx.inputValue = $event; });
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.customLabel);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.error);
            i0.ɵɵadvance();
            i0.ɵɵproperty("tgMargin", i0.ɵɵpureFunction0(20, _c1));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.optionList);
            i0.ɵɵadvance();
            i0.ɵɵproperty("tgMargin", i0.ɵɵpureFunction0(21, _c1));
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputRadioWithInputVerticalComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-radio-with-input-vertical', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputRadioWithInputVerticalComponent),
                        multi: true,
                    },
                ], template: "<div *ngIf=\"customLabel\" [tgMargin]=\"{ size: 'm', position: 'b' }\" tgGridRow>\n  <div class=\"col--grow\">\n    <div appTextFlow=\"label\">\n      <div class=\"label-input-flow\"></div>\n      <label>{{ getLabel() | translate }}</label>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"error\" class=\"notification notification--errorfield\">\n  <span class=\"icon icon-error-shape errorfield\">{{ getText() | translate }}</span>\n</div>\n<div [tgMargin]=\"{ size: 'l', position: 'b' }\" tgGridRow>\n  <ng-container *ngFor=\"let option of optionList; let i = index\">\n    <div class=\"radio-checkbox\">\n      <div [style]=\"'--animation-delay:' + i\" class=\"radio form__radio\">\n        <input\n          [checked]=\"selectedOption && option.value === selectedOption.value\"\n          class=\"form__radio__input\"\n          id=\"choice-{{ i }}-{{ key }}\"\n          name=\"choice-{{ i }}-{{ key }}\"\n          type=\"radio\" />\n        <label (click)=\"selectOption(option)\" class=\"form__radio__label\" for=\"choice-{{ i }}-{{ key }}\"></label>\n      </div>\n      <label\n        (click)=\"selectOption(option)\"\n        [innerHTML]=\"getOptionLabel(option) | translate\"\n        class=\"label--large\"\n        for=\"choice-{{ i }}-{{ key }}\">\n      </label>\n    </div>\n  </ng-container>\n</div>\n<div [tgMargin]=\"{ size: 'l', position: 'b' }\" tgGridRow>\n  <div class=\"radio-checkbox\">\n    <div [style]=\"'--animation-delay:' + optionList.length\" class=\"radio form__radio\">\n      <input\n        [checked]=\"inputRadioSelected\"\n        class=\"form__radio__input\"\n        id=\"choice-{{ optionList.length }}-{{ key }}\"\n        name=\"choice-{{ optionList.length }}-{{ key }}\"\n        type=\"radio\" />\n      <label (click)=\"selectInput()\" class=\"form__radio__label\" for=\"choice-{{ optionList.length }}-{{ key }}\"\n        >&nbsp;</label\n      >\n    </div>\n    <label (click)=\"selectInput()\" class=\"label--large\" for=\"choice-{{ optionList.length }}-{{ key }}\"></label>\n  </div>\n  <div class=\"input-field-in-radio\">\n    <div class=\"form__input-container\">\n      <input\n        (blur)=\"onBlur()\"\n        (focus)=\"focusOtherSelected()\"\n        [(ngModel)]=\"inputValue\"\n        class=\"form__input Form__input\"\n        id=\"choice-input-{{ optionList.length }}-{{ key }}\"\n        name=\"radio-group-name\"\n        pattern=\"\"\n        placeholder=\"{{ inputPlaceholder }}\"\n        required=\"required\"\n        type=\"text\" />\n    </div>\n  </div>\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputRadioWithInputVerticalComponent, { className: "InputRadioWithInputVerticalComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l0aC1pbnB1dC12ZXJ0aWNhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29udHJvbHMvcmFkaW8tY2hlY2tib3gvcmFkaW8vd2l0aC1pbnB1dC92ZXJ0aWNhbC93aXRoLWlucHV0LXZlcnRpY2FsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb250cm9scy9yYWRpby1jaGVja2JveC9yYWRpby93aXRoLWlucHV0L3ZlcnRpY2FsL3dpdGgtaW5wdXQtdmVydGljYWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7Ozs7OztJQ0Z4Riw4QkFBNkUsY0FBQSxjQUFBO0lBR3ZFLDBCQUFvQztJQUNwQyw2QkFBTztJQUFBLFlBQTRCOztJQUFBLGlCQUFRLEVBQUEsRUFBQSxFQUFBOzs7SUFKeEIscURBQXlDO0lBSXJELGVBQTRCO0lBQTVCLDZEQUE0Qjs7O0lBSXpDLCtCQUFpRSxlQUFBO0lBQ2hCLFlBQTJCOztJQUFBLGlCQUFPLEVBQUE7OztJQUFsQyxlQUEyQjtJQUEzQiw0REFBMkI7Ozs7SUFHMUUsNkJBQStEO0lBQzdELDhCQUE0QixhQUFBO0lBRXhCLDJCQUtpQjtJQUNqQixnQ0FBZ0c7SUFBekYsc1BBQVMsZUFBQSw4QkFBb0IsQ0FBQSxJQUFDO0lBQTJELGlCQUFRLEVBQUE7SUFFMUcsaUNBSWlDO0lBSC9CLHNQQUFTLGVBQUEsOEJBQW9CLENBQUEsSUFBQzs7SUFJaEMsaUJBQVEsRUFBQTtJQUVaLDBCQUFlOzs7OztJQWhCTixlQUFrQztJQUFsQywwQ0FBa0M7SUFJbkMsY0FBNkI7SUFBN0IscUVBQTZCLDhDQUFBO0lBRjdCLGtHQUFtRTtJQUtKLGNBQThCO0lBQTlCLHNFQUE4QjtJQU0vRixjQUE4QjtJQUE5QixzRUFBOEI7SUFGOUIsc0dBQWdEOzs7QURWeEQsTUFBTSxPQUFPLG9DQUFxQyxTQUFRLG9DQUFvQztJQUM1RixNQUFNO1FBQ0osSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUM5RSxDQUFDOzZTQUhVLG9DQUFvQyxTQUFwQyxvQ0FBb0M7NkRBQXBDLG9DQUFvQyx1RkFScEM7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQztvQkFDbkUsS0FBSyxFQUFFLElBQUk7aUJBQ1o7YUFDRjtZQ2JILHFGQU9NLHdFQUFBO1lBSU4sOEJBQXlEO1lBQ3ZELHdHQWtCZTtZQUNqQixpQkFBTTtZQUNOLDhCQUF5RCxhQUFBLGFBQUE7WUFHbkQsMkJBS2lCO1lBQ2pCLGdDQUNHO1lBREksZ0hBQVMsaUJBQWEsSUFBQztZQUMzQixzQkFBTTtZQUFBLGlCQUNSLEVBQUE7WUFFSCxpQ0FBbUc7WUFBNUYsaUhBQVMsaUJBQWEsSUFBQztZQUFxRSxpQkFBUSxFQUFBO1lBRTdHLCtCQUFrQyxlQUFBLGlCQUFBO1lBRzVCLCtHQUFRLFlBQVEsSUFBQyxvR0FDUix3QkFBb0IsSUFEWixxSkFBQTtZQURuQixpQkFVZ0IsRUFBQSxFQUFBLEVBQUE7O1lBM0RoQixzQ0FBaUI7WUFRakIsY0FBVztZQUFYLGdDQUFXO1lBR1osY0FBeUM7WUFBekMsc0RBQXlDO1lBQ1gsY0FBZTtZQUFmLHdDQUFlO1lBb0I3QyxjQUF5QztZQUF6QyxzREFBeUM7WUFFckMsZUFBa0Q7WUFBbEQsMkRBQWtEO1lBSW5ELGNBQTZDO1lBQTdDLG1GQUE2Qyw0REFBQTtZQUY3QyxnREFBOEI7WUFLMEIsY0FBOEM7WUFBOUMsb0ZBQThDO1lBSXRELGVBQThDO1lBQTlDLG9GQUE4QztZQVM5RixlQUFtRDtZQUFuRCx5RkFBbUQ7WUFHbkQsNkRBQW9DO1lBTHBDLHdDQUF3Qjs7O2lGRHJDbkIsb0NBQW9DO2NBWGhELFNBQVM7MkJBQ0UsbUNBQW1DLGFBRWxDO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLHFDQUFxQyxDQUFDO3dCQUNuRSxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjs7a0ZBRVUsb0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFic3RyYWN0SW5wdXRSYWRpb1dpdGhJbnB1dENvbXBvbmVudCB9IGZyb20gJy4uL2Fic3RyYWN0LXdpdGgtaW5wdXQuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGctZm9ybS1yYWRpby13aXRoLWlucHV0LXZlcnRpY2FsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3dpdGgtaW5wdXQtdmVydGljYWwuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IElucHV0UmFkaW9XaXRoSW5wdXRWZXJ0aWNhbENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dFJhZGlvV2l0aElucHV0VmVydGljYWxDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdElucHV0UmFkaW9XaXRoSW5wdXRDb21wb25lbnQge1xuICBvbkJsdXIoKSB7XG4gICAgdGhpcy50cmFja2luZ0V2ZW50LmVtaXQoeyBsYWJlbDogdGhpcy5nZXRMYWJlbCgpLCB2YWx1ZTogdGhpcy5pbnB1dFZhbHVlIH0pO1xuICB9XG59XG4iLCI8ZGl2ICpuZ0lmPVwiY3VzdG9tTGFiZWxcIiBbdGdNYXJnaW5dPVwieyBzaXplOiAnbScsIHBvc2l0aW9uOiAnYicgfVwiIHRnR3JpZFJvdz5cbiAgPGRpdiBjbGFzcz1cImNvbC0tZ3Jvd1wiPlxuICAgIDxkaXYgYXBwVGV4dEZsb3c9XCJsYWJlbFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImxhYmVsLWlucHV0LWZsb3dcIj48L2Rpdj5cbiAgICAgIDxsYWJlbD57eyBnZXRMYWJlbCgpIHwgdHJhbnNsYXRlIH19PC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgKm5nSWY9XCJlcnJvclwiIGNsYXNzPVwibm90aWZpY2F0aW9uIG5vdGlmaWNhdGlvbi0tZXJyb3JmaWVsZFwiPlxuICA8c3BhbiBjbGFzcz1cImljb24gaWNvbi1lcnJvci1zaGFwZSBlcnJvcmZpZWxkXCI+e3sgZ2V0VGV4dCgpIHwgdHJhbnNsYXRlIH19PC9zcGFuPlxuPC9kaXY+XG48ZGl2IFt0Z01hcmdpbl09XCJ7IHNpemU6ICdsJywgcG9zaXRpb246ICdiJyB9XCIgdGdHcmlkUm93PlxuICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBvcHRpb24gb2Ygb3B0aW9uTGlzdDsgbGV0IGkgPSBpbmRleFwiPlxuICAgIDxkaXYgY2xhc3M9XCJyYWRpby1jaGVja2JveFwiPlxuICAgICAgPGRpdiBbc3R5bGVdPVwiJy0tYW5pbWF0aW9uLWRlbGF5OicgKyBpXCIgY2xhc3M9XCJyYWRpbyBmb3JtX19yYWRpb1wiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBbY2hlY2tlZF09XCJzZWxlY3RlZE9wdGlvbiAmJiBvcHRpb24udmFsdWUgPT09IHNlbGVjdGVkT3B0aW9uLnZhbHVlXCJcbiAgICAgICAgICBjbGFzcz1cImZvcm1fX3JhZGlvX19pbnB1dFwiXG4gICAgICAgICAgaWQ9XCJjaG9pY2Ute3sgaSB9fS17eyBrZXkgfX1cIlxuICAgICAgICAgIG5hbWU9XCJjaG9pY2Ute3sgaSB9fS17eyBrZXkgfX1cIlxuICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIC8+XG4gICAgICAgIDxsYWJlbCAoY2xpY2spPVwic2VsZWN0T3B0aW9uKG9wdGlvbilcIiBjbGFzcz1cImZvcm1fX3JhZGlvX19sYWJlbFwiIGZvcj1cImNob2ljZS17eyBpIH19LXt7IGtleSB9fVwiPjwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxsYWJlbFxuICAgICAgICAoY2xpY2spPVwic2VsZWN0T3B0aW9uKG9wdGlvbilcIlxuICAgICAgICBbaW5uZXJIVE1MXT1cImdldE9wdGlvbkxhYmVsKG9wdGlvbikgfCB0cmFuc2xhdGVcIlxuICAgICAgICBjbGFzcz1cImxhYmVsLS1sYXJnZVwiXG4gICAgICAgIGZvcj1cImNob2ljZS17eyBpIH19LXt7IGtleSB9fVwiPlxuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgPC9uZy1jb250YWluZXI+XG48L2Rpdj5cbjxkaXYgW3RnTWFyZ2luXT1cInsgc2l6ZTogJ2wnLCBwb3NpdGlvbjogJ2InIH1cIiB0Z0dyaWRSb3c+XG4gIDxkaXYgY2xhc3M9XCJyYWRpby1jaGVja2JveFwiPlxuICAgIDxkaXYgW3N0eWxlXT1cIictLWFuaW1hdGlvbi1kZWxheTonICsgb3B0aW9uTGlzdC5sZW5ndGhcIiBjbGFzcz1cInJhZGlvIGZvcm1fX3JhZGlvXCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgW2NoZWNrZWRdPVwiaW5wdXRSYWRpb1NlbGVjdGVkXCJcbiAgICAgICAgY2xhc3M9XCJmb3JtX19yYWRpb19faW5wdXRcIlxuICAgICAgICBpZD1cImNob2ljZS17eyBvcHRpb25MaXN0Lmxlbmd0aCB9fS17eyBrZXkgfX1cIlxuICAgICAgICBuYW1lPVwiY2hvaWNlLXt7IG9wdGlvbkxpc3QubGVuZ3RoIH19LXt7IGtleSB9fVwiXG4gICAgICAgIHR5cGU9XCJyYWRpb1wiIC8+XG4gICAgICA8bGFiZWwgKGNsaWNrKT1cInNlbGVjdElucHV0KClcIiBjbGFzcz1cImZvcm1fX3JhZGlvX19sYWJlbFwiIGZvcj1cImNob2ljZS17eyBvcHRpb25MaXN0Lmxlbmd0aCB9fS17eyBrZXkgfX1cIlxuICAgICAgICA+Jm5ic3A7PC9sYWJlbFxuICAgICAgPlxuICAgIDwvZGl2PlxuICAgIDxsYWJlbCAoY2xpY2spPVwic2VsZWN0SW5wdXQoKVwiIGNsYXNzPVwibGFiZWwtLWxhcmdlXCIgZm9yPVwiY2hvaWNlLXt7IG9wdGlvbkxpc3QubGVuZ3RoIH19LXt7IGtleSB9fVwiPjwvbGFiZWw+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiaW5wdXQtZmllbGQtaW4tcmFkaW9cIj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybV9faW5wdXQtY29udGFpbmVyXCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgKGJsdXIpPVwib25CbHVyKClcIlxuICAgICAgICAoZm9jdXMpPVwiZm9jdXNPdGhlclNlbGVjdGVkKClcIlxuICAgICAgICBbKG5nTW9kZWwpXT1cImlucHV0VmFsdWVcIlxuICAgICAgICBjbGFzcz1cImZvcm1fX2lucHV0IEZvcm1fX2lucHV0XCJcbiAgICAgICAgaWQ9XCJjaG9pY2UtaW5wdXQte3sgb3B0aW9uTGlzdC5sZW5ndGggfX0te3sga2V5IH19XCJcbiAgICAgICAgbmFtZT1cInJhZGlvLWdyb3VwLW5hbWVcIlxuICAgICAgICBwYXR0ZXJuPVwiXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJ7eyBpbnB1dFBsYWNlaG9sZGVyIH19XCJcbiAgICAgICAgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==