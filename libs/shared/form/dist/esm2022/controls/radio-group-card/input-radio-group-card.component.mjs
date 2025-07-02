import { Component, EventEmitter, forwardRef, Input, Optional, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputAbstractComponent } from '../input-abstract.component';
import { LabelUtil } from '../../utils';
import * as i0 from "@angular/core";
import * as i1 from "@telenet/ng-lib-page";
import * as i2 from "../../errors";
import * as i3 from "@angular/common";
import * as i4 from "ng-inline-svg-2";
import * as i5 from "@ngx-translate/core";
import * as i6 from "../../pipes/price.pipe";
function InputRadioGroupCardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 5);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "div", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassProp("form__label--error", ctx_r0.error);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 3, ctx_r0.getLabel()), " ");
} }
function InputRadioGroupCardComponent_ng_container_4_span_13_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, ctx_r8.getLabelValue("business-price-symbol")));
} }
const _c0 = a0 => ({ "text-strikethrough": a0 });
const _c1 = a0 => ({ price: a0 });
function InputRadioGroupCardComponent_ng_container_4_span_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 21);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵpipe(3, "price");
    i0.ɵɵtemplate(4, InputRadioGroupCardComponent_ng_container_4_span_13_span_4_Template, 3, 3, "span", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(8, _c0, option_r2.isPromo));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind2(2, 3, ctx_r4.getLabelValue("installType-price"), i0.ɵɵpureFunction1(10, _c1, i0.ɵɵpipeBind1(3, 6, option_r2.price))), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !option_r2.isPromo && ctx_r4.isBusiness);
} }
function InputRadioGroupCardComponent_ng_container_4_span_14_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, ctx_r10.getLabelValue("business-price-symbol")));
} }
const _c2 = a0 => ({ priceAfterPromo: a0 });
function InputRadioGroupCardComponent_ng_container_4_span_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 22);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵpipe(3, "price");
    i0.ɵɵtemplate(4, InputRadioGroupCardComponent_ng_container_4_span_14_span_4_Template, 3, 3, "span", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind2(2, 2, ctx_r5.getLabelValue("installType-priceAfterPromo"), i0.ɵɵpureFunction1(7, _c2, i0.ɵɵpipeBind1(3, 5, option_r2.priceAfterPromo))), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r5.isBusiness);
} }
function InputRadioGroupCardComponent_ng_container_4_span_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 22);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, ctx_r6.getLabelValue("gratis")));
} }
function InputRadioGroupCardComponent_ng_container_4_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23)(1, "div", 24)(2, "div", 25)(3, "span", 26);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "translate");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 1, ctx_r7.getLabelValue("promo")));
} }
function InputRadioGroupCardComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 7);
    i0.ɵɵelement(2, "input", 8);
    i0.ɵɵelementStart(3, "div", 9)(4, "div", 10)(5, "div", 11)(6, "label", 12);
    i0.ɵɵlistener("click", function InputRadioGroupCardComponent_ng_container_4_Template_label_click_6_listener() { const restoredCtx = i0.ɵɵrestoreView(_r13); const option_r2 = restoredCtx.$implicit; const ctx_r12 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r12.selectOption(option_r2)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 13);
    i0.ɵɵelement(8, "i", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(9, "div", 15);
    i0.ɵɵelementStart(10, "div", 16);
    i0.ɵɵelement(11, "div", 17);
    i0.ɵɵpipe(12, "translate");
    i0.ɵɵtemplate(13, InputRadioGroupCardComponent_ng_container_4_span_13_Template, 5, 12, "span", 18)(14, InputRadioGroupCardComponent_ng_container_4_span_14_Template, 5, 9, "span", 19)(15, InputRadioGroupCardComponent_ng_container_4_span_15_Template, 3, 3, "span", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(16, InputRadioGroupCardComponent_ng_container_4_div_16_Template, 6, 3, "div", 20);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate1("name", "choice-", ctx_r1.key, "");
    i0.ɵɵpropertyInterpolate("value", option_r2.value);
    i0.ɵɵpropertyInterpolate2("id", "choice-", i_r3, "-", ctx_r1.key, "");
    i0.ɵɵproperty("checked", ctx_r1.selectedOption && option_r2.value === ctx_r1.selectedOption.value);
    i0.ɵɵadvance(4);
    i0.ɵɵpropertyInterpolate2("for", "choice-", i_r3, "-", ctx_r1.key, "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("inlineSVG", option_r2.imagePath);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(12, 13, ctx_r1.getOptionLabel(option_r2)), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", option_r2.price > 0 && ctx_r1.isModemInstallType);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", option_r2.priceAfterPromo > 0 && ctx_r1.isModemInstallType && option_r2.isPromo);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", option_r2.priceAfterPromo === 0 && option_r2.isPromo && ctx_r1.isModemInstallType);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", option_r2.isPromo && ctx_r1.isModemInstallType);
} }
export class InputRadioGroupCardComponent extends InputAbstractComponent {
    languageService;
    formService;
    messageGroupDirective;
    injector;
    constructor(languageService, formService, messageGroupDirective, injector) {
        super(languageService, formService, messageGroupDirective, injector);
        this.languageService = languageService;
        this.formService = formService;
        this.messageGroupDirective = messageGroupDirective;
        this.injector = injector;
    }
    optionList = [];
    customLabel = false;
    hideError = false;
    customOptionLabel = false;
    multipleSelectable = false;
    isModemInstallType = false;
    isBusiness = false;
    selectEvent = new EventEmitter();
    selectedOption;
    onChange = (_value) => {
        // empty implementation
    };
    onTouch = (_touched) => {
        // empty implementation
    };
    toHideError() {
        return this.hideError;
    }
    getOptionLabel(option) {
        if (this.customOptionLabel) {
            return option.label;
        }
        return LabelUtil.getLabelKeyWithTypeLabel(this.getKey(option.label));
    }
    getLabelValue(option) {
        if (this.customOptionLabel) {
            return option;
        }
        return LabelUtil.getLabelKeyWithTypeLabel(this.getKey(option));
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    setDisabledState(_isDisabled) {
        // empty implementation
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
        else {
            this.selectedOption = undefined;
        }
    }
    selectOption(option) {
        this.selectedOption = option;
        this.onTouch(option.value);
        this.onChange(option.value);
        this.selectEvent.emit();
    }
    getKey(key) {
        if (this.messageGroup) {
            key = this.messageGroup + '.' + key;
        }
        return key;
    }
    static ɵfac = function InputRadioGroupCardComponent_Factory(t) { return new (t || InputRadioGroupCardComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(i2.FormErrorService), i0.ɵɵdirectiveInject(i2.MessageGroupDirective, 8), i0.ɵɵdirectiveInject(i0.Injector)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputRadioGroupCardComponent, selectors: [["tg-form-radio-group-card"]], inputs: { optionList: "optionList", customLabel: "customLabel", hideError: "hideError", customOptionLabel: "customOptionLabel", multipleSelectable: "multipleSelectable", isModemInstallType: "isModemInstallType", isBusiness: "isBusiness" }, outputs: { selectEvent: "selectEvent" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputRadioGroupCardComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 5, vars: 2, consts: [[1, "group-cards-input"], ["data-id", "choice", 1, "group", "group--square", "group--square__small"], [4, "ngIf"], [1, "cards"], [4, "ngFor", "ngForOf"], [1, "text-flow", "text-flow--h2", "section__title"], [1, "whitespace", "whitespace--small"], [1, "cards-slot"], ["type", "radio", 1, "cards-radio", 3, "name", "value", "id", "checked"], [1, "cards--append", "cards--container", "cursor--pointer", "selected"], [1, "cards--body"], [1, "cards--body--inner-container"], [1, "cards-radio__label", 3, "for", "click"], [1, "cards-content__header"], [1, "icon-tick"], [1, "cards-content__image", 3, "inlineSVG"], [1, "cards-content__body"], [1, "text-flow", "text-flow--button", "cards-content__body-label", 3, "innerHTML"], ["class", "text-flow--detail", 3, "ngClass", 4, "ngIf"], ["class", "text-uppercase", 4, "ngIf"], ["class", "cover", 4, "ngIf"], [1, "text-flow--detail", 3, "ngClass"], [1, "text-uppercase"], [1, "cover"], [1, "promo-highlight", "promo-highlight--primary-color", "promo-highlight--mini"], [1, "promo-highlight__first-row"], [1, "promo-highlight__first-row--text"]], template: function InputRadioGroupCardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵtemplate(2, InputRadioGroupCardComponent_div_2_Template, 5, 5, "div", 2);
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵtemplate(4, InputRadioGroupCardComponent_ng_container_4_Template, 17, 15, "ng-container", 4);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.customLabel && !ctx.toHideError());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.optionList);
        } }, dependencies: [i3.NgClass, i3.NgForOf, i3.NgIf, i4.InlineSVGDirective, i5.TranslatePipe, i6.PricePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputRadioGroupCardComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-radio-group-card', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputRadioGroupCardComponent),
                        multi: true,
                    },
                ], template: "<div class=\"group-cards-input\">\n  <div class=\"group group--square group--square__small\" data-id=\"choice\">\n    <div *ngIf=\"customLabel && !toHideError()\">\n      <div class=\"text-flow text-flow--h2 section__title\" [class.form__label--error]=\"error\">\n        {{ getLabel() | translate }}\n      </div>\n      <div class=\"whitespace whitespace--small\"></div>\n    </div>\n    <div class=\"cards\">\n      <ng-container *ngFor=\"let option of optionList; let i = index\">\n        <div class=\"cards-slot\">\n          <input\n            type=\"radio\"\n            name=\"choice-{{ key }}\"\n            value=\"{{ option.value }}\"\n            id=\"choice-{{ i }}-{{ key }}\"\n            class=\"cards-radio\"\n            [checked]=\"selectedOption && option.value === selectedOption.value\" />\n          <div class=\"cards--append cards--container cursor--pointer selected\">\n            <div class=\"cards--body\">\n              <div class=\"cards--body--inner-container\">\n                <label for=\"choice-{{ i }}-{{ key }}\" class=\"cards-radio__label\" (click)=\"selectOption(option)\"></label>\n                <div class=\"cards-content__header\">\n                  <i class=\"icon-tick\"></i>\n                </div>\n                <div class=\"cards-content__image\" [inlineSVG]=\"option.imagePath\"></div>\n                <div class=\"cards-content__body\">\n                  <div\n                    class=\"text-flow text-flow--button cards-content__body-label\"\n                    [innerHTML]=\"getOptionLabel(option) | translate\"></div>\n                  <span\n                    *ngIf=\"option.price > 0 && isModemInstallType\"\n                    [ngClass]=\"{ 'text-strikethrough': option.isPromo }\"\n                    class=\"text-flow--detail\"\n                    >{{ getLabelValue('installType-price') | translate: { price: option.price | price } }}\n                    <span *ngIf=\"!option.isPromo && isBusiness\">{{\n                      getLabelValue('business-price-symbol') | translate\n                    }}</span>\n                  </span>\n                  <span\n                    *ngIf=\"option.priceAfterPromo > 0 && isModemInstallType && option.isPromo\"\n                    class=\"text-uppercase\"\n                    >{{\n                      getLabelValue('installType-priceAfterPromo')\n                        | translate: { priceAfterPromo: option.priceAfterPromo | price }\n                    }}\n                    <span *ngIf=\"isBusiness\">{{ getLabelValue('business-price-symbol') | translate }}</span>\n                  </span>\n                  <span\n                    *ngIf=\"option.priceAfterPromo === 0 && option.isPromo && isModemInstallType\"\n                    class=\"text-uppercase\"\n                    >{{ getLabelValue('gratis') | translate }}</span\n                  >\n                </div>\n                <div class=\"cover\" *ngIf=\"option.isPromo && isModemInstallType\">\n                  <div class=\"promo-highlight promo-highlight--primary-color promo-highlight--mini\">\n                    <div class=\"promo-highlight__first-row\">\n                      <span class=\"promo-highlight__first-row--text\">{{ getLabelValue('promo') | translate }}</span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n</div>\n" }]
    }], () => [{ type: i1.LanguageService }, { type: i2.FormErrorService }, { type: i2.MessageGroupDirective, decorators: [{
                type: Optional
            }] }, { type: i0.Injector }], { optionList: [{
            type: Input
        }], customLabel: [{
            type: Input
        }], hideError: [{
            type: Input
        }], customOptionLabel: [{
            type: Input
        }], multipleSelectable: [{
            type: Input
        }], isModemInstallType: [{
            type: Input
        }], isBusiness: [{
            type: Input
        }], selectEvent: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputRadioGroupCardComponent, { className: "InputRadioGroupCardComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtcmFkaW8tZ3JvdXAtY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29udHJvbHMvcmFkaW8tZ3JvdXAtY2FyZC9pbnB1dC1yYWRpby1ncm91cC1jYXJkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3NyYy9jb250cm9scy9yYWRpby1ncm91cC1jYXJkL2lucHV0LXJhZGlvLWdyb3VwLWNhcmQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFZLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBR3JFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7Ozs7OztJQ0pwQywyQkFBMkMsYUFBQTtJQUV2QyxZQUNGOztJQUFBLGlCQUFNO0lBQ04seUJBQWdEO0lBQ2xELGlCQUFNOzs7SUFKZ0QsY0FBa0M7SUFBbEMsa0RBQWtDO0lBQ3BGLGNBQ0Y7SUFERSx3RUFDRjs7O0lBOEJjLDRCQUE0QztJQUFBLFlBRTFDOztJQUFBLGlCQUFPOzs7SUFGbUMsY0FFMUM7SUFGMEMseUZBRTFDOzs7OztJQVBKLGdDQUlHO0lBQUEsWUFDRDs7O0lBQUEsc0dBRVM7SUFDWCxpQkFBTzs7OztJQU5MLHVFQUFvRDtJQUVuRCxjQUNEO0lBREMsbUtBQ0Q7SUFBTyxlQUFtQztJQUFuQyw4REFBbUM7OztJQVcxQyw0QkFBeUI7SUFBQSxZQUF3RDs7SUFBQSxpQkFBTzs7O0lBQS9ELGNBQXdEO0lBQXhELDBGQUF3RDs7OztJQVBuRixnQ0FHRztJQUFBLFlBSUQ7OztJQUFBLHNHQUF3RjtJQUMxRixp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LEdBQUcsR0FBRyxDQUFDO1FBQ3RDLENBQUM7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7c0ZBdkZVLDRCQUE0Qjs2REFBNUIsNEJBQTRCLHVXQVI1QjtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLDRCQUE0QixDQUFDO29CQUMzRCxLQUFLLEVBQUUsSUFBSTtpQkFDWjthQUNGO1lDakJILDhCQUErQixhQUFBO1lBRTNCLDZFQUtNO1lBQ04sOEJBQW1CO1lBQ2pCLGlHQXdEZTtZQUNqQixpQkFBTSxFQUFBLEVBQUE7O1lBaEVBLGVBQW1DO1lBQW5DLDREQUFtQztZQU9OLGVBQWU7WUFBZix3Q0FBZTs7O2lGRFV6Qyw0QkFBNEI7Y0FYeEMsU0FBUzsyQkFDRSwwQkFBMEIsYUFFekI7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsNkJBQTZCLENBQUM7d0JBQzNELEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGOztzQkFNRSxRQUFROzRDQU1GLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLGlCQUFpQjtrQkFBekIsS0FBSztZQUNHLGtCQUFrQjtrQkFBMUIsS0FBSztZQUNHLGtCQUFrQjtrQkFBMUIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDSSxXQUFXO2tCQUFwQixNQUFNOztrRkFqQkksNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIEluamVjdG9yLCBJbnB1dCwgT3B0aW9uYWwsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnQHRlbGVuZXQvbmctbGliLXBhZ2UnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJbnB1dEFic3RyYWN0Q29tcG9uZW50IH0gZnJvbSAnLi4vaW5wdXQtYWJzdHJhY3QuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1FcnJvclNlcnZpY2UsIE1lc3NhZ2VHcm91cERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2Vycm9ycyc7XG5pbXBvcnQgeyBJbnB1dE9wdGlvbldpdGhJbWFnZSB9IGZyb20gJy4uL3JhZGlvJztcbmltcG9ydCB7IExhYmVsVXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGctZm9ybS1yYWRpby1ncm91cC1jYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LXJhZGlvLWdyb3VwLWNhcmQuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IElucHV0UmFkaW9Hcm91cENhcmRDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRSYWRpb0dyb3VwQ2FyZENvbXBvbmVudCBleHRlbmRzIElucHV0QWJzdHJhY3RDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UsXG4gICAgcHVibGljIGZvcm1TZXJ2aWNlOiBGb3JtRXJyb3JTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBtZXNzYWdlR3JvdXBEaXJlY3RpdmU6IE1lc3NhZ2VHcm91cERpcmVjdGl2ZSxcbiAgICBwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yXG4gICkge1xuICAgIHN1cGVyKGxhbmd1YWdlU2VydmljZSwgZm9ybVNlcnZpY2UsIG1lc3NhZ2VHcm91cERpcmVjdGl2ZSwgaW5qZWN0b3IpO1xuICB9XG5cbiAgQElucHV0KCkgb3B0aW9uTGlzdDogSW5wdXRPcHRpb25XaXRoSW1hZ2VbXSA9IFtdO1xuICBASW5wdXQoKSBjdXN0b21MYWJlbCA9IGZhbHNlO1xuICBASW5wdXQoKSBoaWRlRXJyb3IgPSBmYWxzZTtcbiAgQElucHV0KCkgY3VzdG9tT3B0aW9uTGFiZWwgPSBmYWxzZTtcbiAgQElucHV0KCkgbXVsdGlwbGVTZWxlY3RhYmxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlzTW9kZW1JbnN0YWxsVHlwZSA9IGZhbHNlO1xuICBASW5wdXQoKSBpc0J1c2luZXNzID0gZmFsc2U7XG4gIEBPdXRwdXQoKSBzZWxlY3RFdmVudDogRXZlbnRFbWl0dGVyPHVua25vd24+ID0gbmV3IEV2ZW50RW1pdHRlcjx1bmtub3duPigpO1xuXG4gIHNlbGVjdGVkT3B0aW9uPzogSW5wdXRPcHRpb25XaXRoSW1hZ2U7XG5cbiAgb25DaGFuZ2UgPSAoX3ZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAvLyBlbXB0eSBpbXBsZW1lbnRhdGlvblxuICB9O1xuICBvblRvdWNoID0gKF90b3VjaGVkOiBzdHJpbmcpID0+IHtcbiAgICAvLyBlbXB0eSBpbXBsZW1lbnRhdGlvblxuICB9O1xuXG4gIHRvSGlkZUVycm9yKCkge1xuICAgIHJldHVybiB0aGlzLmhpZGVFcnJvcjtcbiAgfVxuXG4gIGdldE9wdGlvbkxhYmVsKG9wdGlvbjogSW5wdXRPcHRpb25XaXRoSW1hZ2UpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmN1c3RvbU9wdGlvbkxhYmVsKSB7XG4gICAgICByZXR1cm4gb3B0aW9uLmxhYmVsO1xuICAgIH1cbiAgICByZXR1cm4gTGFiZWxVdGlsLmdldExhYmVsS2V5V2l0aFR5cGVMYWJlbCh0aGlzLmdldEtleShvcHRpb24ubGFiZWwpKTtcbiAgfVxuXG4gIGdldExhYmVsVmFsdWUob3B0aW9uOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmN1c3RvbU9wdGlvbkxhYmVsKSB7XG4gICAgICByZXR1cm4gb3B0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gTGFiZWxVdGlsLmdldExhYmVsS2V5V2l0aFR5cGVMYWJlbCh0aGlzLmdldEtleShvcHRpb24pKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IFZvaWRGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBWb2lkRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2ggPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoX2lzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAvLyBlbXB0eSBpbXBsZW1lbnRhdGlvblxuICB9XG5cbiAgZ2V0TGFiZWwoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5jdXN0b21MYWJlbCkge1xuICAgICAgcmV0dXJuIHN1cGVyLmdldExhYmVsKCk7XG4gICAgfVxuICAgIHJldHVybiAnY29udHJvbHMuaW5wdXQtcmFkaW8taW1hZ2UuY2hvb3NlJztcbiAgfVxuXG4gIHdyaXRlVmFsdWUob3B0aW9uVmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmIChvcHRpb25WYWx1ZSkge1xuICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IHRoaXMub3B0aW9uTGlzdC5maW5kKChvcHRpb25PZkxpc3QpID0+IHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbk9mTGlzdC52YWx1ZSA9PT0gb3B0aW9uVmFsdWU7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RPcHRpb24ob3B0aW9uOiBJbnB1dE9wdGlvbldpdGhJbWFnZSk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSBvcHRpb247XG4gICAgdGhpcy5vblRvdWNoKG9wdGlvbi52YWx1ZSk7XG4gICAgdGhpcy5vbkNoYW5nZShvcHRpb24udmFsdWUpO1xuICAgIHRoaXMuc2VsZWN0RXZlbnQuZW1pdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRLZXkoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLm1lc3NhZ2VHcm91cCkge1xuICAgICAga2V5ID0gdGhpcy5tZXNzYWdlR3JvdXAgKyAnLicgKyBrZXk7XG4gICAgfVxuICAgIHJldHVybiBrZXk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJncm91cC1jYXJkcy1pbnB1dFwiPlxuICA8ZGl2IGNsYXNzPVwiZ3JvdXAgZ3JvdXAtLXNxdWFyZSBncm91cC0tc3F1YXJlX19zbWFsbFwiIGRhdGEtaWQ9XCJjaG9pY2VcIj5cbiAgICA8ZGl2ICpuZ0lmPVwiY3VzdG9tTGFiZWwgJiYgIXRvSGlkZUVycm9yKClcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWZsb3cgdGV4dC1mbG93LS1oMiBzZWN0aW9uX190aXRsZVwiIFtjbGFzcy5mb3JtX19sYWJlbC0tZXJyb3JdPVwiZXJyb3JcIj5cbiAgICAgICAge3sgZ2V0TGFiZWwoKSB8IHRyYW5zbGF0ZSB9fVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwid2hpdGVzcGFjZSB3aGl0ZXNwYWNlLS1zbWFsbFwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkc1wiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG9wdGlvbkxpc3Q7IGxldCBpID0gaW5kZXhcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRzLXNsb3RcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICBuYW1lPVwiY2hvaWNlLXt7IGtleSB9fVwiXG4gICAgICAgICAgICB2YWx1ZT1cInt7IG9wdGlvbi52YWx1ZSB9fVwiXG4gICAgICAgICAgICBpZD1cImNob2ljZS17eyBpIH19LXt7IGtleSB9fVwiXG4gICAgICAgICAgICBjbGFzcz1cImNhcmRzLXJhZGlvXCJcbiAgICAgICAgICAgIFtjaGVja2VkXT1cInNlbGVjdGVkT3B0aW9uICYmIG9wdGlvbi52YWx1ZSA9PT0gc2VsZWN0ZWRPcHRpb24udmFsdWVcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkcy0tYXBwZW5kIGNhcmRzLS1jb250YWluZXIgY3Vyc29yLS1wb2ludGVyIHNlbGVjdGVkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZHMtLWJvZHlcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRzLS1ib2R5LS1pbm5lci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hvaWNlLXt7IGkgfX0te3sga2V5IH19XCIgY2xhc3M9XCJjYXJkcy1yYWRpb19fbGFiZWxcIiAoY2xpY2spPVwic2VsZWN0T3B0aW9uKG9wdGlvbilcIj48L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkcy1jb250ZW50X19oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvbi10aWNrXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkcy1jb250ZW50X19pbWFnZVwiIFtpbmxpbmVTVkddPVwib3B0aW9uLmltYWdlUGF0aFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkcy1jb250ZW50X19ib2R5XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1mbG93IHRleHQtZmxvdy0tYnV0dG9uIGNhcmRzLWNvbnRlbnRfX2JvZHktbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cImdldE9wdGlvbkxhYmVsKG9wdGlvbikgfCB0cmFuc2xhdGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwib3B0aW9uLnByaWNlID4gMCAmJiBpc01vZGVtSW5zdGFsbFR5cGVcIlxuICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7ICd0ZXh0LXN0cmlrZXRocm91Z2gnOiBvcHRpb24uaXNQcm9tbyB9XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWZsb3ctLWRldGFpbFwiXG4gICAgICAgICAgICAgICAgICAgID57eyBnZXRMYWJlbFZhbHVlKCdpbnN0YWxsVHlwZS1wcmljZScpIHwgdHJhbnNsYXRlOiB7IHByaWNlOiBvcHRpb24ucHJpY2UgfCBwcmljZSB9IH19XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIW9wdGlvbi5pc1Byb21vICYmIGlzQnVzaW5lc3NcIj57e1xuICAgICAgICAgICAgICAgICAgICAgIGdldExhYmVsVmFsdWUoJ2J1c2luZXNzLXByaWNlLXN5bWJvbCcpIHwgdHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJvcHRpb24ucHJpY2VBZnRlclByb21vID4gMCAmJiBpc01vZGVtSW5zdGFsbFR5cGUgJiYgb3B0aW9uLmlzUHJvbW9cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtdXBwZXJjYXNlXCJcbiAgICAgICAgICAgICAgICAgICAgPnt7XG4gICAgICAgICAgICAgICAgICAgICAgZ2V0TGFiZWxWYWx1ZSgnaW5zdGFsbFR5cGUtcHJpY2VBZnRlclByb21vJylcbiAgICAgICAgICAgICAgICAgICAgICAgIHwgdHJhbnNsYXRlOiB7IHByaWNlQWZ0ZXJQcm9tbzogb3B0aW9uLnByaWNlQWZ0ZXJQcm9tbyB8IHByaWNlIH1cbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJpc0J1c2luZXNzXCI+e3sgZ2V0TGFiZWxWYWx1ZSgnYnVzaW5lc3MtcHJpY2Utc3ltYm9sJykgfCB0cmFuc2xhdGUgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIm9wdGlvbi5wcmljZUFmdGVyUHJvbW8gPT09IDAgJiYgb3B0aW9uLmlzUHJvbW8gJiYgaXNNb2RlbUluc3RhbGxUeXBlXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LXVwcGVyY2FzZVwiXG4gICAgICAgICAgICAgICAgICAgID57eyBnZXRMYWJlbFZhbHVlKCdncmF0aXMnKSB8IHRyYW5zbGF0ZSB9fTwvc3BhblxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3ZlclwiICpuZ0lmPVwib3B0aW9uLmlzUHJvbW8gJiYgaXNNb2RlbUluc3RhbGxUeXBlXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvbW8taGlnaGxpZ2h0IHByb21vLWhpZ2hsaWdodC0tcHJpbWFyeS1jb2xvciBwcm9tby1oaWdobGlnaHQtLW1pbmlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb21vLWhpZ2hsaWdodF9fZmlyc3Qtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcm9tby1oaWdobGlnaHRfX2ZpcnN0LXJvdy0tdGV4dFwiPnt7IGdldExhYmVsVmFsdWUoJ3Byb21vJykgfCB0cmFuc2xhdGUgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=