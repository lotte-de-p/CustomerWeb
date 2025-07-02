import { Component, EventEmitter, forwardRef, Input, Optional, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputAbstractComponent } from '../input-abstract.component';
import { LabelUtil } from '../../utils';
import * as i0 from "@angular/core";
import * as i1 from "@telenet/ng-lib-page";
import * as i2 from "../../errors";
import * as i3 from "@angular/common";
import * as i4 from "@ngx-translate/core";
function InputRadioCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 3);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "div", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassProp("form__label--error", ctx_r0.error);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 3, ctx_r0.getLabel()));
} }
function InputRadioCardComponent_div_2_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 17);
    i0.ɵɵpipe(1, "translate");
} if (rf & 2) {
    const option_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, ctx_r4.getOptionSubLabel(option_r2)), i0.ɵɵsanitizeHtml);
} }
function InputRadioCardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelement(1, "input", 6);
    i0.ɵɵelementStart(2, "div", 7)(3, "div", 8)(4, "div", 9)(5, "label", 10);
    i0.ɵɵlistener("click", function InputRadioCardComponent_div_2_Template_label_click_5_listener() { const restoredCtx = i0.ɵɵrestoreView(_r7); const option_r2 = restoredCtx.$implicit; const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.selectOption(option_r2)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 11);
    i0.ɵɵelement(7, "i", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 13);
    i0.ɵɵelement(9, "div", 14);
    i0.ɵɵpipe(10, "translate");
    i0.ɵɵtemplate(11, InputRadioCardComponent_div_2_div_11_Template, 2, 3, "div", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(12, "div", 16);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleMap("--animation-delay:" + i_r3);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate1("name", "choice-", ctx_r1.key, "");
    i0.ɵɵpropertyInterpolate("value", option_r2.value);
    i0.ɵɵpropertyInterpolate2("id", "choice-", i_r3, "-", ctx_r1.key, "");
    i0.ɵɵproperty("checked", ctx_r1.selectedOption && option_r2.value === ctx_r1.selectedOption.value);
    i0.ɵɵadvance(4);
    i0.ɵɵpropertyInterpolate2("for", "choice-", i_r3, "-", ctx_r1.key, "");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(10, 11, ctx_r1.getOptionLabel(option_r2)), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", option_r2.text && option_r2.text !== "");
} }
export class InputRadioCardComponent extends InputAbstractComponent {
    languageService;
    formService;
    messageGroupDirective;
    injector;
    optionList = [];
    customLabel = false;
    customOptionLabel = false;
    multipleSelectable = false;
    clearErrorMessagesFunction = new EventEmitter();
    inputChanged = new EventEmitter();
    constructor(languageService, formService, messageGroupDirective, injector) {
        super(languageService, formService, messageGroupDirective, injector);
        this.languageService = languageService;
        this.formService = formService;
        this.messageGroupDirective = messageGroupDirective;
        this.injector = injector;
    }
    selectedOption;
    onChange(_) {
        // empty implementation
    }
    onTouched(_) {
        // empty implementation
    }
    getOptionLabel(option) {
        if (this.customOptionLabel) {
            return option.label;
        }
        return LabelUtil.getLabelKeyWithTypeLabel(this.getKey(option.label));
    }
    getOptionSubLabel(option) {
        return LabelUtil.getLabelKeyWithTypeText(this.getKey(option.text));
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(_) {
        // empty implementation
    }
    getLabel() {
        if (this.customLabel) {
            return super.getLabel();
        }
        return 'controls.input-radio-card.choose';
    }
    writeValue(optionValue) {
        if (optionValue) {
            this.selectedOption = this.optionList.find((optionOfList) => {
                return optionOfList.value === optionValue;
            });
        }
    }
    selectOption(option) {
        this.clearErrorMessagesFunction.emit();
        this.selectedOption = option;
        this.onTouched(true);
        this.onChange(option.value);
        this.inputChanged.emit(option.value);
    }
    getKey(key) {
        if (this.messageGroup) {
            key = this.messageGroup + '.' + key;
        }
        return key;
    }
    static ɵfac = function InputRadioCardComponent_Factory(t) { return new (t || InputRadioCardComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(i2.FormErrorService), i0.ɵɵdirectiveInject(i2.MessageGroupDirective, 8), i0.ɵɵdirectiveInject(i0.Injector)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputRadioCardComponent, selectors: [["tg-form-radio-card"]], inputs: { optionList: "optionList", customLabel: "customLabel", customOptionLabel: "customOptionLabel", multipleSelectable: "multipleSelectable" }, outputs: { clearErrorMessagesFunction: "clearErrorMessagesFunction", inputChanged: "inputChanged" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputRadioCardComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 2, consts: [[4, "ngIf"], [1, "label-modifier-box", "card-mini"], ["class", "label-modifier-slot animation-show-slide-up", 3, "style", 4, "ngFor", "ngForOf"], [1, "text-flow", "text-flow--h3"], [1, "whitespace", "whitespace--tiny"], [1, "label-modifier-slot", "animation-show-slide-up"], ["type", "radio", 1, "label-modifier-radio", 3, "name", "value", "id", "checked"], [1, "label-modifier--append", "label-modifier--container", "cursor--pointer"], [1, "label-modifier--body"], [1, "label-modifier--body--inner-container"], [1, "label-modifier-radio__label", 3, "for", "click"], [1, "label-modifier-content__header"], [1, "icon", "icon-tick"], [1, "label-modifier-content__body"], [1, "text-flow", "text-flow--button", "label-modifier-content__body-label", 3, "innerHTML"], ["class", "text-flow text-flow--legal label-modifier-content__body-range", 3, "innerHTML", 4, "ngIf"], [1, "label-modifier-content__timing"], [1, "text-flow", "text-flow--legal", "label-modifier-content__body-range", 3, "innerHTML"]], template: function InputRadioCardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, InputRadioCardComponent_div_0_Template, 5, 5, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵtemplate(2, InputRadioCardComponent_div_2_Template, 13, 13, "div", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.customLabel);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.optionList);
        } }, dependencies: [i3.NgForOf, i3.NgIf, i4.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputRadioCardComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-radio-card', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputRadioCardComponent),
                        multi: true,
                    },
                ], template: "<div *ngIf=\"customLabel\">\n  <!-- optional class can be added, defined by parent component -->\n  <div class=\"text-flow text-flow--h3\" [class.form__label--error]=\"error\">{{ getLabel() | translate }}</div>\n  <div class=\"whitespace whitespace--tiny\"></div>\n\n  <!-- Error banner/message for the input groups with label-modifiers -->\n</div>\n<div class=\"label-modifier-box card-mini\">\n  <div\n    class=\"label-modifier-slot animation-show-slide-up\"\n    *ngFor=\"let option of optionList; let i = index\"\n    [style]=\"'--animation-delay:' + i\">\n    <input\n      type=\"radio\"\n      name=\"choice-{{ key }}\"\n      value=\"{{ option.value }}\"\n      id=\"choice-{{ i }}-{{ key }}\"\n      class=\"label-modifier-radio\"\n      [checked]=\"selectedOption && option.value === selectedOption.value\" />\n    <div class=\"label-modifier--append label-modifier--container cursor--pointer\">\n      <div class=\"label-modifier--body\">\n        <div class=\"label-modifier--body--inner-container\">\n          <label\n            for=\"choice-{{ i }}-{{ key }}\"\n            class=\"label-modifier-radio__label\"\n            (click)=\"selectOption(option)\"></label>\n          <div class=\"label-modifier-content__header\">\n            <i class=\"icon icon-tick\"></i>\n          </div>\n          <div class=\"label-modifier-content__body\">\n            <div\n              class=\"text-flow text-flow--button label-modifier-content__body-label\"\n              [innerHTML]=\"getOptionLabel(option) | translate\"></div>\n            <div\n              *ngIf=\"option.text && option.text !== ''\"\n              class=\"text-flow text-flow--legal label-modifier-content__body-range\"\n              [innerHTML]=\"getOptionSubLabel(option) | translate\"></div>\n          </div>\n          <div class=\"label-modifier-content__timing\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Error label-message for the default input group -->\n</div>\n" }]
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
        }], clearErrorMessagesFunction: [{
            type: Output
        }], inputChanged: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputRadioCardComponent, { className: "InputRadioCardComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtcmFkaW8tY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29udHJvbHMvcmFkaW8tY2FyZC9pbnB1dC1yYWRpby1jYXJkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3NyYy9jb250cm9scy9yYWRpby1jYXJkL2lucHV0LXJhZGlvLWNhcmQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFZLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBR3JFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7Ozs7SUNOeEMsMkJBQXlCLGFBQUE7SUFFaUQsWUFBNEI7O0lBQUEsaUJBQU07SUFDMUcseUJBQStDO0lBR2pELGlCQUFNOzs7SUFKaUMsY0FBa0M7SUFBbEMsa0RBQWtDO0lBQUMsY0FBNEI7SUFBNUIsNkRBQTRCOzs7SUErQjFGLDBCQUc0RDs7Ozs7SUFBMUQsd0dBQW1EOzs7O0lBNUIvRCw4QkFHcUM7SUFDbkMsMkJBTXdFO0lBQ3hFLDhCQUE4RSxhQUFBLGFBQUEsZ0JBQUE7SUFNdEUsZ09BQVMsZUFBQSw4QkFBb0IsQ0FBQSxJQUFDO0lBQUMsaUJBQVE7SUFDekMsK0JBQTRDO0lBQzFDLHdCQUE4QjtJQUNoQyxpQkFBTTtJQUNOLCtCQUEwQztJQUN4QywwQkFFeUQ7O0lBQ3pELGlGQUc0RDtJQUM5RCxpQkFBTTtJQUNOLDJCQUFrRDtJQUNwRCxpQkFBTSxFQUFBLEVBQUEsRUFBQTs7Ozs7SUE1QlYsMENBQWtDO0lBR2hDLGNBQXVCO0lBQXZCLDREQUF1QjtJQUN2QixrREFBMEI7SUFDMUIscUVBQTZCO0lBRTdCLGtHQUFtRTtJQUs3RCxlQUE4QjtJQUE5QixzRUFBOEI7SUFTNUIsZUFBZ0Q7SUFBaEQsdUdBQWdEO0lBRS9DLGVBQXVDO0lBQXZDLDhEQUF1Qzs7QURmdEQsTUFBTSxPQUFPLHVCQUF3QixTQUFRLHNCQUFzQjtJQVN4RDtJQUNBO0lBQ1k7SUFDWjtJQVhBLFVBQVUsR0FBMEIsRUFBRSxDQUFDO0lBQ3ZDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDcEIsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQzFCLGtCQUFrQixHQUFHLEtBQUssQ0FBQztJQUMxQiwwQkFBMEIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ2hELFlBQVksR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBRXBELFlBQ1MsZUFBZ0MsRUFDaEMsV0FBNkIsRUFDakIscUJBQTRDLEVBQ3hELFFBQWtCO1FBRXpCLEtBQUssQ0FBQyxlQUFlLEVBQUUsV0FBVyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBTDlELG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFDakIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUN4RCxhQUFRLEdBQVIsUUFBUSxDQUFVO0lBRzNCLENBQUM7SUFFRCxjQUFjLENBQXVCO0lBRXJDLFFBQVEsQ0FBQyxDQUFVO1FBQ2pCLHVCQUF1QjtJQUN6QixDQUFDO0lBRUQsU0FBUyxDQUFDLENBQVU7UUFDbEIsdUJBQXVCO0lBQ3pCLENBQUM7SUFFRCxjQUFjLENBQUMsTUFBMkI7UUFDeEMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUMzQixPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQztRQUNELE9BQU8sU0FBUyxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVELGlCQUFpQixDQUFDLE1BQTJCO1FBQzNDLE9BQU8sU0FBUyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELGdCQUFnQixDQUFDLEVBQWdCO1FBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxFQUFnQjtRQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsQ0FBVTtRQUN6Qix1QkFBdUI7SUFDekIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNyQixPQUFPLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMxQixDQUFDO1FBQ0QsT0FBTyxrQ0FBa0MsQ0FBQztJQUM1QyxDQUFDO0lBRUQsVUFBVSxDQUFDLFdBQW1CO1FBQzVCLElBQUksV0FBVyxFQUFFLENBQUM7WUFDaEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksRUFBRSxFQUFFO2dCQUMxRCxPQUFPLFlBQVksQ0FBQyxLQUFLLEtBQUssV0FBVyxDQUFDO1lBQzVDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztJQUNILENBQUM7SUFFRCxZQUFZLENBQUMsTUFBMkI7UUFDdEMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO1FBRTdCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTyxNQUFNLENBQUMsR0FBVztRQUN4QixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN0QixHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ3RDLENBQUM7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7aUZBL0VVLHVCQUF1Qjs2REFBdkIsdUJBQXVCLGlVQVJ2QjtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHVCQUF1QixDQUFDO29CQUN0RCxLQUFLLEVBQUUsSUFBSTtpQkFDWjthQUNGO1lDakJILHdFQU1NO1lBQ04sOEJBQTBDO1lBQ3hDLDBFQWtDTTtZQUVSLGlCQUFNOztZQTVDQSxzQ0FBaUI7WUFVQSxlQUFlO1lBQWYsd0NBQWU7OztpRkRTekIsdUJBQXVCO2NBWG5DLFNBQVM7MkJBQ0Usb0JBQW9CLGFBRW5CO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLHdCQUF3QixDQUFDO3dCQUN0RCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjs7c0JBYUUsUUFBUTs0Q0FWRixVQUFVO2tCQUFsQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLGlCQUFpQjtrQkFBekIsS0FBSztZQUNHLGtCQUFrQjtrQkFBMUIsS0FBSztZQUNJLDBCQUEwQjtrQkFBbkMsTUFBTTtZQUNHLFlBQVk7a0JBQXJCLE1BQU07O2tGQU5JLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBJbmplY3RvciwgSW5wdXQsIE9wdGlvbmFsLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSB9IGZyb20gJ0B0ZWxlbmV0L25nLWxpYi1wYWdlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSW5wdXRBYnN0cmFjdENvbXBvbmVudCB9IGZyb20gJy4uL2lucHV0LWFic3RyYWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbnB1dE9wdGlvbldpdGhDYXJkIH0gZnJvbSAnLi4vcmFkaW8nO1xuaW1wb3J0IHsgRm9ybUVycm9yU2VydmljZSwgTWVzc2FnZUdyb3VwRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZXJyb3JzJztcbmltcG9ydCB7IExhYmVsVXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGctZm9ybS1yYWRpby1jYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LXJhZGlvLWNhcmQuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IElucHV0UmFkaW9DYXJkQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIElucHV0UmFkaW9DYXJkQ29tcG9uZW50IGV4dGVuZHMgSW5wdXRBYnN0cmFjdENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIG9wdGlvbkxpc3Q6IElucHV0T3B0aW9uV2l0aENhcmRbXSA9IFtdO1xuICBASW5wdXQoKSBjdXN0b21MYWJlbCA9IGZhbHNlO1xuICBASW5wdXQoKSBjdXN0b21PcHRpb25MYWJlbCA9IGZhbHNlO1xuICBASW5wdXQoKSBtdWx0aXBsZVNlbGVjdGFibGUgPSBmYWxzZTtcbiAgQE91dHB1dCgpIGNsZWFyRXJyb3JNZXNzYWdlc0Z1bmN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgaW5wdXRDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgIHB1YmxpYyBmb3JtU2VydmljZTogRm9ybUVycm9yU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgbWVzc2FnZUdyb3VwRGlyZWN0aXZlOiBNZXNzYWdlR3JvdXBEaXJlY3RpdmUsXG4gICAgcHVibGljIGluamVjdG9yOiBJbmplY3RvclxuICApIHtcbiAgICBzdXBlcihsYW5ndWFnZVNlcnZpY2UsIGZvcm1TZXJ2aWNlLCBtZXNzYWdlR3JvdXBEaXJlY3RpdmUsIGluamVjdG9yKTtcbiAgfVxuXG4gIHNlbGVjdGVkT3B0aW9uPzogSW5wdXRPcHRpb25XaXRoQ2FyZDtcblxuICBvbkNoYW5nZShfOiB1bmtub3duKTogdm9pZCB7XG4gICAgLy8gZW1wdHkgaW1wbGVtZW50YXRpb25cbiAgfVxuXG4gIG9uVG91Y2hlZChfOiB1bmtub3duKTogdm9pZCB7XG4gICAgLy8gZW1wdHkgaW1wbGVtZW50YXRpb25cbiAgfVxuXG4gIGdldE9wdGlvbkxhYmVsKG9wdGlvbjogSW5wdXRPcHRpb25XaXRoQ2FyZCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuY3VzdG9tT3B0aW9uTGFiZWwpIHtcbiAgICAgIHJldHVybiBvcHRpb24ubGFiZWw7XG4gICAgfVxuICAgIHJldHVybiBMYWJlbFV0aWwuZ2V0TGFiZWxLZXlXaXRoVHlwZUxhYmVsKHRoaXMuZ2V0S2V5KG9wdGlvbi5sYWJlbCkpO1xuICB9XG5cbiAgZ2V0T3B0aW9uU3ViTGFiZWwob3B0aW9uOiBJbnB1dE9wdGlvbldpdGhDYXJkKTogc3RyaW5nIHtcbiAgICByZXR1cm4gTGFiZWxVdGlsLmdldExhYmVsS2V5V2l0aFR5cGVUZXh0KHRoaXMuZ2V0S2V5KG9wdGlvbi50ZXh0KSk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBWb2lkRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogVm9pZEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoXzogYm9vbGVhbik6IHZvaWQge1xuICAgIC8vIGVtcHR5IGltcGxlbWVudGF0aW9uXG4gIH1cblxuICBnZXRMYWJlbCgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmN1c3RvbUxhYmVsKSB7XG4gICAgICByZXR1cm4gc3VwZXIuZ2V0TGFiZWwoKTtcbiAgICB9XG4gICAgcmV0dXJuICdjb250cm9scy5pbnB1dC1yYWRpby1jYXJkLmNob29zZSc7XG4gIH1cblxuICB3cml0ZVZhbHVlKG9wdGlvblZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAob3B0aW9uVmFsdWUpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSB0aGlzLm9wdGlvbkxpc3QuZmluZCgob3B0aW9uT2ZMaXN0KSA9PiB7XG4gICAgICAgIHJldHVybiBvcHRpb25PZkxpc3QudmFsdWUgPT09IG9wdGlvblZhbHVlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0T3B0aW9uKG9wdGlvbjogSW5wdXRPcHRpb25XaXRoQ2FyZCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJFcnJvck1lc3NhZ2VzRnVuY3Rpb24uZW1pdCgpO1xuICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSBvcHRpb247XG5cbiAgICB0aGlzLm9uVG91Y2hlZCh0cnVlKTtcbiAgICB0aGlzLm9uQ2hhbmdlKG9wdGlvbi52YWx1ZSk7XG4gICAgdGhpcy5pbnB1dENoYW5nZWQuZW1pdChvcHRpb24udmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRLZXkoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLm1lc3NhZ2VHcm91cCkge1xuICAgICAga2V5ID0gdGhpcy5tZXNzYWdlR3JvdXAgKyAnLicgKyBrZXk7XG4gICAgfVxuICAgIHJldHVybiBrZXk7XG4gIH1cbn1cbiIsIjxkaXYgKm5nSWY9XCJjdXN0b21MYWJlbFwiPlxuICA8IS0tIG9wdGlvbmFsIGNsYXNzIGNhbiBiZSBhZGRlZCwgZGVmaW5lZCBieSBwYXJlbnQgY29tcG9uZW50IC0tPlxuICA8ZGl2IGNsYXNzPVwidGV4dC1mbG93IHRleHQtZmxvdy0taDNcIiBbY2xhc3MuZm9ybV9fbGFiZWwtLWVycm9yXT1cImVycm9yXCI+e3sgZ2V0TGFiZWwoKSB8IHRyYW5zbGF0ZSB9fTwvZGl2PlxuICA8ZGl2IGNsYXNzPVwid2hpdGVzcGFjZSB3aGl0ZXNwYWNlLS10aW55XCI+PC9kaXY+XG5cbiAgPCEtLSBFcnJvciBiYW5uZXIvbWVzc2FnZSBmb3IgdGhlIGlucHV0IGdyb3VwcyB3aXRoIGxhYmVsLW1vZGlmaWVycyAtLT5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImxhYmVsLW1vZGlmaWVyLWJveCBjYXJkLW1pbmlcIj5cbiAgPGRpdlxuICAgIGNsYXNzPVwibGFiZWwtbW9kaWZpZXItc2xvdCBhbmltYXRpb24tc2hvdy1zbGlkZS11cFwiXG4gICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBvcHRpb25MaXN0OyBsZXQgaSA9IGluZGV4XCJcbiAgICBbc3R5bGVdPVwiJy0tYW5pbWF0aW9uLWRlbGF5OicgKyBpXCI+XG4gICAgPGlucHV0XG4gICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgbmFtZT1cImNob2ljZS17eyBrZXkgfX1cIlxuICAgICAgdmFsdWU9XCJ7eyBvcHRpb24udmFsdWUgfX1cIlxuICAgICAgaWQ9XCJjaG9pY2Ute3sgaSB9fS17eyBrZXkgfX1cIlxuICAgICAgY2xhc3M9XCJsYWJlbC1tb2RpZmllci1yYWRpb1wiXG4gICAgICBbY2hlY2tlZF09XCJzZWxlY3RlZE9wdGlvbiAmJiBvcHRpb24udmFsdWUgPT09IHNlbGVjdGVkT3B0aW9uLnZhbHVlXCIgLz5cbiAgICA8ZGl2IGNsYXNzPVwibGFiZWwtbW9kaWZpZXItLWFwcGVuZCBsYWJlbC1tb2RpZmllci0tY29udGFpbmVyIGN1cnNvci0tcG9pbnRlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImxhYmVsLW1vZGlmaWVyLS1ib2R5XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbC1tb2RpZmllci0tYm9keS0taW5uZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICBmb3I9XCJjaG9pY2Ute3sgaSB9fS17eyBrZXkgfX1cIlxuICAgICAgICAgICAgY2xhc3M9XCJsYWJlbC1tb2RpZmllci1yYWRpb19fbGFiZWxcIlxuICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdE9wdGlvbihvcHRpb24pXCI+PC9sYWJlbD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWwtbW9kaWZpZXItY29udGVudF9faGVhZGVyXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImljb24gaWNvbi10aWNrXCI+PC9pPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbC1tb2RpZmllci1jb250ZW50X19ib2R5XCI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1mbG93IHRleHQtZmxvdy0tYnV0dG9uIGxhYmVsLW1vZGlmaWVyLWNvbnRlbnRfX2JvZHktbGFiZWxcIlxuICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cImdldE9wdGlvbkxhYmVsKG9wdGlvbikgfCB0cmFuc2xhdGVcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgKm5nSWY9XCJvcHRpb24udGV4dCAmJiBvcHRpb24udGV4dCAhPT0gJydcIlxuICAgICAgICAgICAgICBjbGFzcz1cInRleHQtZmxvdyB0ZXh0LWZsb3ctLWxlZ2FsIGxhYmVsLW1vZGlmaWVyLWNvbnRlbnRfX2JvZHktcmFuZ2VcIlxuICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cImdldE9wdGlvblN1YkxhYmVsKG9wdGlvbikgfCB0cmFuc2xhdGVcIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWwtbW9kaWZpZXItY29udGVudF9fdGltaW5nXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8IS0tIEVycm9yIGxhYmVsLW1lc3NhZ2UgZm9yIHRoZSBkZWZhdWx0IGlucHV0IGdyb3VwIC0tPlxuPC9kaXY+XG4iXX0=