import { Component, forwardRef, Input, Optional } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputAbstractComponent } from '../input-abstract.component';
import { LabelUtil } from '../../utils';
import * as i0 from "@angular/core";
import * as i1 from "@telenet/ng-lib-page";
import * as i2 from "../../errors";
import * as i3 from "@angular/common";
import * as i4 from "ng-inline-svg-2";
import * as i5 from "@ngx-translate/core";
function InputRadioImageComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "div", 6);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelement(3, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassProp("form__label--error", ctx_r0.error);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 3, ctx_r0.getLabel()), i0.ɵɵsanitizeHtml);
} }
function InputRadioImageComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelement(2, "input", 9);
    i0.ɵɵelementStart(3, "div", 10)(4, "div", 11)(5, "div", 12)(6, "label", 13);
    i0.ɵɵlistener("click", function InputRadioImageComponent_ng_container_5_Template_label_click_6_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const option_r2 = restoredCtx.$implicit; const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.selectOption(option_r2)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 14);
    i0.ɵɵelement(8, "i", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 16);
    i0.ɵɵelement(10, "div", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 18);
    i0.ɵɵelement(12, "div", 19);
    i0.ɵɵpipe(13, "translate");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵstyleMapInterpolate1("--animation-delay: ", i_r3, "");
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate1("name", "radio-group-name-", ctx_r1.key, "");
    i0.ɵɵpropertyInterpolate("value", option_r2.value);
    i0.ɵɵpropertyInterpolate2("id", "choice-", i_r3, "-", ctx_r1.key, "");
    i0.ɵɵproperty("checked", ctx_r1.selectedOption && option_r2.value === ctx_r1.selectedOption.value);
    i0.ɵɵadvance(4);
    i0.ɵɵpropertyInterpolate2("for", "choice-", i_r3, "-", ctx_r1.key, "");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("inlineSVG", option_r2.imagePath);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(13, 12, ctx_r1.getOptionLabel(option_r2)), i0.ɵɵsanitizeHtml);
} }
export class InputRadioImageComponent extends InputAbstractComponent {
    languageService;
    formService;
    messageGroupDirective;
    injector;
    optionList = [];
    customLabel = false;
    customOptionLabel = false;
    multipleSelectable = false;
    constructor(languageService, formService, messageGroupDirective, injector) {
        super(languageService, formService, messageGroupDirective, injector);
        this.languageService = languageService;
        this.formService = formService;
        this.messageGroupDirective = messageGroupDirective;
        this.injector = injector;
    }
    selectedOption;
    onChange = (_) => {
        // empty implementation
    };
    onTouch = (_) => {
        // empty implementation
    };
    getOptionLabel(option) {
        if (this.customOptionLabel) {
            return option.label;
        }
        return LabelUtil.getLabelKeyWithTypeLabel(this.getKey(option.label));
    }
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
        return 'controls.input-radio-image.choose';
    }
    writeValue(optionValue) {
        if (optionValue) {
            this.selectedOption = this.optionList.find((optionOfList) => {
                return optionOfList.value === optionValue;
            });
        }
    }
    selectOption(option) {
        this.selectedOption = option;
        this.onTouch(option.value);
        this.onChange(option.value);
    }
    getKey(key) {
        const keyList = [];
        if (this.messageGroup) {
            keyList.push(this.messageGroup);
        }
        if (this.labelPrefix) {
            keyList.push(this.labelPrefix);
        }
        keyList.push(key);
        return keyList.join('.');
    }
    static ɵfac = function InputRadioImageComponent_Factory(t) { return new (t || InputRadioImageComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(i2.FormErrorService), i0.ɵɵdirectiveInject(i2.MessageGroupDirective, 8), i0.ɵɵdirectiveInject(i0.Injector)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputRadioImageComponent, selectors: [["tg-form-radio-image"]], inputs: { optionList: "optionList", customLabel: "customLabel", customOptionLabel: "customOptionLabel", multipleSelectable: "multipleSelectable" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputRadioImageComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 2, consts: [[1, "stepper-move", "stepper-move--user-input"], [1, "whitespace", "whitespace--small"], [1, "section", "section-choices", "container"], [4, "ngIf"], [1, "label-modifier-box", "card-square"], [4, "ngFor", "ngForOf"], [1, "text-flow", "text-flow--h3", "text-align--center", 3, "innerHTML"], [1, "whitespace", "whitespace--medium"], [1, "label-modifier-slot", "animation-show-slide-up"], ["type", "radio", 1, "label-modifier-radio", 3, "name", "value", "id", "checked"], [1, "label-modifier--append", "label-modifier--container", "cursor--pointer"], [1, "label-modifier--body"], [1, "label-modifier--body--inner-container"], [1, "label-modifier-radio__label", 3, "for", "click"], [1, "label-modifier-content__header"], [1, "icon", "icon-tick"], [1, "label-modifier-content__image"], [3, "inlineSVG"], [1, "label-modifier-content__body"], [1, "text-flow", "text-flow--button", "label-modifier-content__body-label", 3, "innerHTML"]], template: function InputRadioImageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelement(1, "div", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵtemplate(3, InputRadioImageComponent_div_3_Template, 4, 5, "div", 3);
            i0.ɵɵelementStart(4, "div", 4);
            i0.ɵɵtemplate(5, InputRadioImageComponent_ng_container_5_Template, 14, 14, "ng-container", 5);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.customLabel);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.optionList);
        } }, dependencies: [i3.NgForOf, i3.NgIf, i4.InlineSVGDirective, i5.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputRadioImageComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-radio-image', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputRadioImageComponent),
                        multi: true,
                    },
                ], template: "<div class=\"stepper-move stepper-move--user-input\">\n  <div class=\"whitespace whitespace--small\"></div>\n  <div class=\"section section-choices container\">\n    <div *ngIf=\"customLabel\">\n      <div\n        class=\"text-flow text-flow--h3 text-align--center\"\n        [class.form__label--error]=\"error\"\n        [innerHTML]=\"getLabel() | translate\"></div>\n      <div class=\"whitespace whitespace--medium\"></div>\n    </div>\n\n    <div class=\"label-modifier-box card-square\">\n      <ng-container *ngFor=\"let option of optionList; let i = index\">\n        <div class=\"label-modifier-slot animation-show-slide-up\" style=\"--animation-delay: {{ i }}\">\n          <input\n            type=\"radio\"\n            class=\"label-modifier-radio\"\n            name=\"radio-group-name-{{ key }}\"\n            value=\"{{ option.value }}\"\n            id=\"choice-{{ i }}-{{ key }}\"\n            [checked]=\"selectedOption && option.value === selectedOption.value\" />\n          <div class=\"label-modifier--append label-modifier--container cursor--pointer\">\n            <div class=\"label-modifier--body\">\n              <div class=\"label-modifier--body--inner-container\">\n                <label\n                  for=\"choice-{{ i }}-{{ key }}\"\n                  class=\"label-modifier-radio__label\"\n                  (click)=\"selectOption(option)\"></label>\n                <div class=\"label-modifier-content__header\">\n                  <i class=\"icon icon-tick\"></i>\n                </div>\n                <div class=\"label-modifier-content__image\">\n                  <div [inlineSVG]=\"option.imagePath\"></div>\n                </div>\n                <div class=\"label-modifier-content__body\">\n                  <div\n                    class=\"text-flow text-flow--button label-modifier-content__body-label\"\n                    [innerHTML]=\"getOptionLabel(option) | translate\"></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n</div>\n" }]
    }], () => [{ type: i1.LanguageService }, { type: i2.FormErrorService }, { type: i2.MessageGroupDirective, decorators: [{
                type: Optional
            }] }, { type: i0.Injector }], { optionList: [{
            type: Input
        }], customLabel: [{
            type: Input
        }], customOptionLabel: [{
            type: Input
        }], multipleSelectable: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputRadioImageComponent, { className: "InputRadioImageComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtcmFkaW8taW1hZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xzL3JhZGlvLWltYWdlL2lucHV0LXJhZGlvLWltYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3NyYy9jb250cm9scy9yYWRpby1pbWFnZS9pbnB1dC1yYWRpby1pbWFnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBWSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBR3JFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7Ozs7O0lDSHBDLDJCQUF5QjtJQUN2Qix5QkFHNkM7O0lBQzdDLHlCQUFpRDtJQUNuRCxpQkFBTTs7O0lBSEYsY0FBa0M7SUFBbEMsa0RBQWtDO0lBQ2xDLHNGQUFvQzs7OztJQUt0Qyw2QkFBK0Q7SUFDN0QsOEJBQTRGO0lBQzFGLDJCQU13RTtJQUN4RSwrQkFBOEUsY0FBQSxjQUFBLGdCQUFBO0lBTXRFLDBPQUFTLGVBQUEsOEJBQW9CLENBQUEsSUFBQztJQUFDLGlCQUFRO0lBQ3pDLCtCQUE0QztJQUMxQyx3QkFBOEI7SUFDaEMsaUJBQU07SUFDTiwrQkFBMkM7SUFDekMsMkJBQTBDO0lBQzVDLGlCQUFNO0lBQ04sZ0NBQTBDO0lBQ3hDLDJCQUV5RDs7SUFDM0QsaUJBQU0sRUFBQSxFQUFBLEVBQUEsRUFBQTtJQUtoQiwwQkFBZTs7Ozs7SUE5QjRDLGNBQWtDO0lBQWxDLDBEQUFrQztJQUl2RixjQUFpQztJQUFqQyxzRUFBaUM7SUFDakMsa0RBQTBCO0lBQzFCLHFFQUE2QjtJQUM3QixrR0FBbUU7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LENBQUM7a0ZBdEVVLHdCQUF3Qjs2REFBeEIsd0JBQXdCLDZOQVJ4QjtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHdCQUF3QixDQUFDO29CQUN2RCxLQUFLLEVBQUUsSUFBSTtpQkFDWjthQUNGO1lDakJILDhCQUFtRDtZQUNqRCx5QkFBZ0Q7WUFDaEQsOEJBQStDO1lBQzdDLHlFQU1NO1lBRU4sOEJBQTRDO1lBQzFDLDZGQStCZTtZQUNqQixpQkFBTSxFQUFBLEVBQUE7O1lBekNBLGVBQWlCO1lBQWpCLHNDQUFpQjtZQVNZLGVBQWU7WUFBZix3Q0FBZTs7O2lGRE96Qyx3QkFBd0I7Y0FYcEMsU0FBUzsyQkFDRSxxQkFBcUIsYUFFcEI7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUseUJBQXlCLENBQUM7d0JBQ3ZELEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGOztzQkFXRSxRQUFROzRDQVJGLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csaUJBQWlCO2tCQUF6QixLQUFLO1lBQ0csa0JBQWtCO2tCQUExQixLQUFLOztrRkFKSyx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIEluamVjdG9yLCBJbnB1dCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSB9IGZyb20gJ0B0ZWxlbmV0L25nLWxpYi1wYWdlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSW5wdXRBYnN0cmFjdENvbXBvbmVudCB9IGZyb20gJy4uL2lucHV0LWFic3RyYWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbnB1dE9wdGlvbldpdGhJbWFnZSB9IGZyb20gJy4uL3JhZGlvJztcbmltcG9ydCB7IEZvcm1FcnJvclNlcnZpY2UsIE1lc3NhZ2VHcm91cERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2Vycm9ycyc7XG5pbXBvcnQgeyBMYWJlbFV0aWwgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RnLWZvcm0tcmFkaW8taW1hZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQtcmFkaW8taW1hZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IElucHV0UmFkaW9JbWFnZUNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dFJhZGlvSW1hZ2VDb21wb25lbnQgZXh0ZW5kcyBJbnB1dEFic3RyYWN0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgb3B0aW9uTGlzdDogSW5wdXRPcHRpb25XaXRoSW1hZ2VbXSA9IFtdO1xuICBASW5wdXQoKSBjdXN0b21MYWJlbCA9IGZhbHNlO1xuICBASW5wdXQoKSBjdXN0b21PcHRpb25MYWJlbCA9IGZhbHNlO1xuICBASW5wdXQoKSBtdWx0aXBsZVNlbGVjdGFibGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UsXG4gICAgcHVibGljIGZvcm1TZXJ2aWNlOiBGb3JtRXJyb3JTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBtZXNzYWdlR3JvdXBEaXJlY3RpdmU6IE1lc3NhZ2VHcm91cERpcmVjdGl2ZSxcbiAgICBwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yXG4gICkge1xuICAgIHN1cGVyKGxhbmd1YWdlU2VydmljZSwgZm9ybVNlcnZpY2UsIG1lc3NhZ2VHcm91cERpcmVjdGl2ZSwgaW5qZWN0b3IpO1xuICB9XG5cbiAgc2VsZWN0ZWRPcHRpb24/OiBJbnB1dE9wdGlvbldpdGhJbWFnZTtcblxuICBvbkNoYW5nZSA9IChfOiBzdHJpbmcpID0+IHtcbiAgICAvLyBlbXB0eSBpbXBsZW1lbnRhdGlvblxuICB9O1xuICBvblRvdWNoID0gKF86IHN0cmluZykgPT4ge1xuICAgIC8vIGVtcHR5IGltcGxlbWVudGF0aW9uXG4gIH07XG5cbiAgZ2V0T3B0aW9uTGFiZWwob3B0aW9uOiBJbnB1dE9wdGlvbldpdGhJbWFnZSk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuY3VzdG9tT3B0aW9uTGFiZWwpIHtcbiAgICAgIHJldHVybiBvcHRpb24ubGFiZWw7XG4gICAgfVxuICAgIHJldHVybiBMYWJlbFV0aWwuZ2V0TGFiZWxLZXlXaXRoVHlwZUxhYmVsKHRoaXMuZ2V0S2V5KG9wdGlvbi5sYWJlbCkpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogVm9pZEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IFZvaWRGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaCA9IGZuO1xuICB9XG5cbiAgZ2V0TGFiZWwoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5jdXN0b21MYWJlbCkge1xuICAgICAgcmV0dXJuIHN1cGVyLmdldExhYmVsKCk7XG4gICAgfVxuICAgIHJldHVybiAnY29udHJvbHMuaW5wdXQtcmFkaW8taW1hZ2UuY2hvb3NlJztcbiAgfVxuXG4gIHdyaXRlVmFsdWUob3B0aW9uVmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmIChvcHRpb25WYWx1ZSkge1xuICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IHRoaXMub3B0aW9uTGlzdC5maW5kKChvcHRpb25PZkxpc3QpID0+IHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbk9mTGlzdC52YWx1ZSA9PT0gb3B0aW9uVmFsdWU7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RPcHRpb24ob3B0aW9uOiBJbnB1dE9wdGlvbldpdGhJbWFnZSk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSBvcHRpb247XG4gICAgdGhpcy5vblRvdWNoKG9wdGlvbi52YWx1ZSk7XG4gICAgdGhpcy5vbkNoYW5nZShvcHRpb24udmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRLZXkoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGtleUxpc3QgPSBbXTtcbiAgICBpZiAodGhpcy5tZXNzYWdlR3JvdXApIHtcbiAgICAgIGtleUxpc3QucHVzaCh0aGlzLm1lc3NhZ2VHcm91cCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmxhYmVsUHJlZml4KSB7XG4gICAgICBrZXlMaXN0LnB1c2godGhpcy5sYWJlbFByZWZpeCk7XG4gICAgfVxuICAgIGtleUxpc3QucHVzaChrZXkpO1xuICAgIHJldHVybiBrZXlMaXN0LmpvaW4oJy4nKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cInN0ZXBwZXItbW92ZSBzdGVwcGVyLW1vdmUtLXVzZXItaW5wdXRcIj5cbiAgPGRpdiBjbGFzcz1cIndoaXRlc3BhY2Ugd2hpdGVzcGFjZS0tc21hbGxcIj48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInNlY3Rpb24gc2VjdGlvbi1jaG9pY2VzIGNvbnRhaW5lclwiPlxuICAgIDxkaXYgKm5nSWY9XCJjdXN0b21MYWJlbFwiPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cInRleHQtZmxvdyB0ZXh0LWZsb3ctLWgzIHRleHQtYWxpZ24tLWNlbnRlclwiXG4gICAgICAgIFtjbGFzcy5mb3JtX19sYWJlbC0tZXJyb3JdPVwiZXJyb3JcIlxuICAgICAgICBbaW5uZXJIVE1MXT1cImdldExhYmVsKCkgfCB0cmFuc2xhdGVcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ3aGl0ZXNwYWNlIHdoaXRlc3BhY2UtLW1lZGl1bVwiPjwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImxhYmVsLW1vZGlmaWVyLWJveCBjYXJkLXNxdWFyZVwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG9wdGlvbkxpc3Q7IGxldCBpID0gaW5kZXhcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsLW1vZGlmaWVyLXNsb3QgYW5pbWF0aW9uLXNob3ctc2xpZGUtdXBcIiBzdHlsZT1cIi0tYW5pbWF0aW9uLWRlbGF5OiB7eyBpIH19XCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgY2xhc3M9XCJsYWJlbC1tb2RpZmllci1yYWRpb1wiXG4gICAgICAgICAgICBuYW1lPVwicmFkaW8tZ3JvdXAtbmFtZS17eyBrZXkgfX1cIlxuICAgICAgICAgICAgdmFsdWU9XCJ7eyBvcHRpb24udmFsdWUgfX1cIlxuICAgICAgICAgICAgaWQ9XCJjaG9pY2Ute3sgaSB9fS17eyBrZXkgfX1cIlxuICAgICAgICAgICAgW2NoZWNrZWRdPVwic2VsZWN0ZWRPcHRpb24gJiYgb3B0aW9uLnZhbHVlID09PSBzZWxlY3RlZE9wdGlvbi52YWx1ZVwiIC8+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsLW1vZGlmaWVyLS1hcHBlbmQgbGFiZWwtbW9kaWZpZXItLWNvbnRhaW5lciBjdXJzb3ItLXBvaW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbC1tb2RpZmllci0tYm9keVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWwtbW9kaWZpZXItLWJvZHktLWlubmVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgZm9yPVwiY2hvaWNlLXt7IGkgfX0te3sga2V5IH19XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwibGFiZWwtbW9kaWZpZXItcmFkaW9fX2xhYmVsXCJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3RPcHRpb24ob3B0aW9uKVwiPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsLW1vZGlmaWVyLWNvbnRlbnRfX2hlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uIGljb24tdGlja1wiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWwtbW9kaWZpZXItY29udGVudF9faW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgW2lubGluZVNWR109XCJvcHRpb24uaW1hZ2VQYXRoXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsLW1vZGlmaWVyLWNvbnRlbnRfX2JvZHlcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWZsb3cgdGV4dC1mbG93LS1idXR0b24gbGFiZWwtbW9kaWZpZXItY29udGVudF9fYm9keS1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgIFtpbm5lckhUTUxdPVwiZ2V0T3B0aW9uTGFiZWwob3B0aW9uKSB8IHRyYW5zbGF0ZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19