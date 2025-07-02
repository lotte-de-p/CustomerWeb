import { Component, forwardRef, Input, Optional } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputAbstractComponent } from '../input-abstract.component';
import { LabelUtil } from '../../utils';
import * as i0 from "@angular/core";
import * as i1 from "@telenet/ng-lib-page";
import * as i2 from "../../errors";
import * as i3 from "@angular/common";
import * as i4 from "@ngx-translate/core";
function InputRadioIconComponent_ng_container_0_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 15);
    i0.ɵɵpipe(1, "translate");
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, ctx_r3.getLabel()), i0.ɵɵsanitizeHtml);
} }
function InputRadioIconComponent_ng_container_0_i_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 16);
} if (rf & 2) {
    const option_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngClass", option_r1.icon ? option_r1.icon : "");
} }
function InputRadioIconComponent_ng_container_0_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r1 = i0.ɵɵnextContext().$implicit;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", !!ctx_r5.customOptionLabel ? option_r1.text : i0.ɵɵpipeBind1(2, 1, option_r1.text), " ");
} }
function InputRadioIconComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 1)(2, "div", 2);
    i0.ɵɵelement(3, "input", 3);
    i0.ɵɵelementStart(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "label", 7);
    i0.ɵɵlistener("click", function InputRadioIconComponent_ng_container_0_Template_label_click_7_listener() { const restoredCtx = i0.ɵɵrestoreView(_r9); const option_r1 = restoredCtx.$implicit; const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.selectOption(option_r1)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 8);
    i0.ɵɵelement(9, "span", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 10);
    i0.ɵɵtemplate(11, InputRadioIconComponent_ng_container_0_div_11_Template, 2, 3, "div", 11);
    i0.ɵɵelementStart(12, "div", 12);
    i0.ɵɵtemplate(13, InputRadioIconComponent_ng_container_0_i_13_Template, 1, 1, "i", 13);
    i0.ɵɵtext(14);
    i0.ɵɵpipe(15, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(16, InputRadioIconComponent_ng_container_0_div_16_Template, 3, 3, "div", 14);
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate1("name", "radio-group-name-", ctx_r0.key, "");
    i0.ɵɵpropertyInterpolate("value", option_r1.value);
    i0.ɵɵpropertyInterpolate2("id", "choice-", i_r2, "-", ctx_r0.key, "");
    i0.ɵɵproperty("checked", ctx_r0.selectedOption && option_r1.value === ctx_r0.selectedOption.value);
    i0.ɵɵadvance(4);
    i0.ɵɵpropertyInterpolate2("for", "choice-", i_r2, "-", ctx_r0.key, "");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r0.customLabel);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !!option_r1.icon);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", !!ctx_r0.customOptionLabel ? option_r1.label : i0.ɵɵpipeBind1(15, 11, option_r1.label), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !!option_r1.text);
} }
export class InputRadioIconComponent extends InputAbstractComponent {
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
        return 'controls.input-radio-icon.choose';
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
    static ɵfac = function InputRadioIconComponent_Factory(t) { return new (t || InputRadioIconComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(i2.FormErrorService), i0.ɵɵdirectiveInject(i2.MessageGroupDirective, 8), i0.ɵɵdirectiveInject(i0.Injector)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputRadioIconComponent, selectors: [["tg-form-radio-icon"]], inputs: { optionList: "optionList", customLabel: "customLabel", customOptionLabel: "customOptionLabel", multipleSelectable: "multipleSelectable" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputRadioIconComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], ["data-id", "choice", 1, "label-modifier-box", "card-mini", "card-mini--radio-circle-box"], [1, "label-modifier-slot"], ["type", "radio", 1, "label-modifier-radio", 3, "name", "value", "id", "checked"], [1, "label-modifier--append", "label-modifier--container", "cur-pointer"], [1, "label-modifier--body"], [1, "label-modifier--body--inner-container"], [1, "label-modifier-radio__label", 3, "for", "click"], [1, "label-modifier-content__header"], [1, "radio-circle-box", "display--inline-flex", "justify-content--center", "align-items--center", "align-self--center", "border-radius--circle"], [1, "label-modifier-content__body"], ["class", "text-flow text-flow--button label-modifier-content__body-label", 3, "innerHTML", 4, "ngIf"], [1, "text-flow", "text-flow--button", "label-modifier-content__body-label"], ["class", "icon", 3, "ngClass", 4, "ngIf"], ["class", "px--l text-flow text-flow--legal label-modifier-content__body-range", 4, "ngIf"], [1, "text-flow", "text-flow--button", "label-modifier-content__body-label", 3, "innerHTML"], [1, "icon", 3, "ngClass"], [1, "px--l", "text-flow", "text-flow--legal", "label-modifier-content__body-range"]], template: function InputRadioIconComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, InputRadioIconComponent_ng_container_0_Template, 17, 13, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngForOf", ctx.optionList);
        } }, dependencies: [i3.NgClass, i3.NgForOf, i3.NgIf, i4.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputRadioIconComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-radio-icon', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputRadioIconComponent),
                        multi: true,
                    },
                ], template: "<ng-container *ngFor=\"let option of optionList; let i = index\">\n  <div class=\"label-modifier-box card-mini card-mini--radio-circle-box\" data-id=\"choice\">\n    <div class=\"label-modifier-slot\">\n      <input\n        type=\"radio\"\n        class=\"label-modifier-radio\"\n        name=\"radio-group-name-{{ key }}\"\n        value=\"{{ option.value }}\"\n        id=\"choice-{{ i }}-{{ key }}\"\n        [checked]=\"selectedOption && option.value === selectedOption.value\" />\n      <div class=\"label-modifier--append label-modifier--container cur-pointer\">\n        <div class=\"label-modifier--body\">\n          <div class=\"label-modifier--body--inner-container\">\n            <label\n              for=\"choice-{{ i }}-{{ key }}\"\n              class=\"label-modifier-radio__label\"\n              (click)=\"selectOption(option)\"></label>\n            <div class=\"label-modifier-content__header\">\n              <span\n                class=\"radio-circle-box display--inline-flex justify-content--center align-items--center align-self--center border-radius--circle\"></span>\n            </div>\n            <div class=\"label-modifier-content__body\">\n              <div\n                *ngIf=\"customLabel\"\n                class=\"text-flow text-flow--button label-modifier-content__body-label\"\n                [innerHTML]=\"getLabel() | translate\"></div>\n              <div class=\"text-flow text-flow--button label-modifier-content__body-label\">\n                <i *ngIf=\"!!option.icon\" class=\"icon\" [ngClass]=\"option.icon ? option.icon : ''\"></i>\n                {{ !!customOptionLabel ? option.label : (option.label | translate) }}\n              </div>\n              <div *ngIf=\"!!option.text\" class=\"px--l text-flow text-flow--legal label-modifier-content__body-range\">\n                {{ !!customOptionLabel ? option.text : (option.text | translate) }}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-container>\n" }]
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputRadioIconComponent, { className: "InputRadioIconComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtcmFkaW8taWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29udHJvbHMvcmFkaW8taWNvbi9pbnB1dC1yYWRpby1pY29uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3NyYy9jb250cm9scy9yYWRpby1pY29uL2lucHV0LXJhZGlvLWljb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVksS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUdyRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7Ozs7O0lDZ0IxQiwwQkFHNkM7Ozs7SUFBM0Msc0ZBQW9DOzs7SUFFcEMsd0JBQXFGOzs7SUFBL0MsOERBQTBDOzs7SUFHbEYsK0JBQXVHO0lBQ3JHLFlBQ0Y7O0lBQUEsaUJBQU07Ozs7SUFESixjQUNGO0lBREUsbUhBQ0Y7Ozs7SUFoQ2QsNkJBQStEO0lBQzdELDhCQUF1RixhQUFBO0lBRW5GLDJCQU13RTtJQUN4RSw4QkFBMEUsYUFBQSxhQUFBLGVBQUE7SUFNbEUseU9BQVMsZUFBQSw4QkFBb0IsQ0FBQSxJQUFDO0lBQUMsaUJBQVE7SUFDekMsOEJBQTRDO0lBQzFDLDBCQUM0STtJQUM5SSxpQkFBTTtJQUNOLGdDQUEwQztJQUN4QywwRkFHNkM7SUFDN0MsZ0NBQTRFO0lBQzFFLHNGQUFxRjtJQUNyRixhQUNGOztJQUFBLGlCQUFNO0lBQ04sMEZBRU07SUFDUixpQkFBTSxFQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUE7SUFNbEIsMEJBQWU7Ozs7O0lBakNQLGVBQWlDO0lBQWpDLHNFQUFpQztJQUNqQyxrREFBMEI7SUFDMUIscUVBQTZCO0lBQzdCLGtHQUFtRTtJQUs3RCxlQUE4QjtJQUE5QixzRUFBOEI7SUFTM0IsZUFBaUI7SUFBakIseUNBQWlCO0lBSWQsZUFBbUI7SUFBbkIsdUNBQW1CO0lBQ3ZCLGNBQ0Y7SUFERSx1SEFDRjtJQUNNLGVBQW1CO0lBQW5CLHVDQUFtQjs7QURYdkMsTUFBTSxPQUFPLHVCQUF3QixTQUFRLHNCQUFzQjtJQU94RDtJQUNBO0lBQ1k7SUFDWjtJQVRBLFVBQVUsR0FBMEIsRUFBRSxDQUFDO0lBQ3ZDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDcEIsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQzFCLGtCQUFrQixHQUFHLEtBQUssQ0FBQztJQUVwQyxZQUNTLGVBQWdDLEVBQ2hDLFdBQTZCLEVBQ2pCLHFCQUE0QyxFQUN4RCxRQUFrQjtRQUV6QixLQUFLLENBQUMsZUFBZSxFQUFFLFdBQVcsRUFBRSxxQkFBcUIsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUw5RCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBQ2pCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDeEQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUczQixDQUFDO0lBRUQsY0FBYyxDQUF1QjtJQUVyQyxRQUFRLEdBQUcsQ0FBQyxDQUFTLEVBQUUsRUFBRTtRQUN2Qix1QkFBdUI7SUFDekIsQ0FBQyxDQUFDO0lBQ0YsT0FBTyxHQUFHLENBQUMsQ0FBUyxFQUFFLEVBQUU7UUFDdEIsdUJBQXVCO0lBQ3pCLENBQUMsQ0FBQztJQUVGLGNBQWMsQ0FBQyxNQUEyQjtRQUN4QyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQzNCLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDO1FBQ0QsT0FBTyxTQUFTLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsRUFBZ0I7UUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELGlCQUFpQixDQUFDLEVBQWdCO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDckIsT0FBTyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDMUIsQ0FBQztRQUNELE9BQU8sa0NBQWtDLENBQUM7SUFDNUMsQ0FBQztJQUVELFVBQVUsQ0FBQyxXQUFtQjtRQUM1QixJQUFJLFdBQVcsRUFBRSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLEVBQUUsRUFBRTtnQkFDMUQsT0FBTyxZQUFZLENBQUMsS0FBSyxLQUFLLFdBQVcsQ0FBQztZQUM1QyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDO0lBRUQsWUFBWSxDQUFDLE1BQTJCO1FBQ3RDLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFTyxNQUFNLENBQUMsR0FBVztRQUN4QixNQUFNLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDdEIsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbEMsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3JCLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pDLENBQUM7UUFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDO2lGQXRFVSx1QkFBdUI7NkRBQXZCLHVCQUF1Qiw0TkFSdkI7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztvQkFDdEQsS0FBSyxFQUFFLElBQUk7aUJBQ1o7YUFDRjtZQ2pCSCw0RkF1Q2U7O1lBdkNrQix3Q0FBZTs7O2lGRG1CbkMsdUJBQXVCO2NBWG5DLFNBQVM7MkJBQ0Usb0JBQW9CLGFBRW5CO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLHdCQUF3QixDQUFDO3dCQUN0RCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjs7c0JBV0UsUUFBUTs0Q0FSRixVQUFVO2tCQUFsQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLGlCQUFpQjtrQkFBekIsS0FBSztZQUNHLGtCQUFrQjtrQkFBMUIsS0FBSzs7a0ZBSkssdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbmplY3RvciwgSW5wdXQsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICdAdGVsZW5ldC9uZy1saWItcGFnZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElucHV0QWJzdHJhY3RDb21wb25lbnQgfSBmcm9tICcuLi9pbnB1dC1hYnN0cmFjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5wdXRPcHRpb25XaXRoSWNvbiB9IGZyb20gJy4uL3JhZGlvJztcbmltcG9ydCB7IEZvcm1FcnJvclNlcnZpY2UsIE1lc3NhZ2VHcm91cERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2Vycm9ycyc7XG5pbXBvcnQgeyBMYWJlbFV0aWwgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RnLWZvcm0tcmFkaW8taWNvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnB1dC1yYWRpby1pY29uLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBJbnB1dFJhZGlvSWNvbkNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dFJhZGlvSWNvbkNvbXBvbmVudCBleHRlbmRzIElucHV0QWJzdHJhY3RDb21wb25lbnQge1xuICBASW5wdXQoKSBvcHRpb25MaXN0OiBJbnB1dE9wdGlvbldpdGhJY29uW10gPSBbXTtcbiAgQElucHV0KCkgY3VzdG9tTGFiZWwgPSBmYWxzZTtcbiAgQElucHV0KCkgY3VzdG9tT3B0aW9uTGFiZWwgPSBmYWxzZTtcbiAgQElucHV0KCkgbXVsdGlwbGVTZWxlY3RhYmxlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgIHB1YmxpYyBmb3JtU2VydmljZTogRm9ybUVycm9yU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgbWVzc2FnZUdyb3VwRGlyZWN0aXZlOiBNZXNzYWdlR3JvdXBEaXJlY3RpdmUsXG4gICAgcHVibGljIGluamVjdG9yOiBJbmplY3RvclxuICApIHtcbiAgICBzdXBlcihsYW5ndWFnZVNlcnZpY2UsIGZvcm1TZXJ2aWNlLCBtZXNzYWdlR3JvdXBEaXJlY3RpdmUsIGluamVjdG9yKTtcbiAgfVxuXG4gIHNlbGVjdGVkT3B0aW9uPzogSW5wdXRPcHRpb25XaXRoSWNvbjtcblxuICBvbkNoYW5nZSA9IChfOiBzdHJpbmcpID0+IHtcbiAgICAvLyBlbXB0eSBpbXBsZW1lbnRhdGlvblxuICB9O1xuICBvblRvdWNoID0gKF86IHN0cmluZykgPT4ge1xuICAgIC8vIGVtcHR5IGltcGxlbWVudGF0aW9uXG4gIH07XG5cbiAgZ2V0T3B0aW9uTGFiZWwob3B0aW9uOiBJbnB1dE9wdGlvbldpdGhJY29uKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5jdXN0b21PcHRpb25MYWJlbCkge1xuICAgICAgcmV0dXJuIG9wdGlvbi5sYWJlbDtcbiAgICB9XG4gICAgcmV0dXJuIExhYmVsVXRpbC5nZXRMYWJlbEtleVdpdGhUeXBlTGFiZWwodGhpcy5nZXRLZXkob3B0aW9uLmxhYmVsKSk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBWb2lkRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogVm9pZEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoID0gZm47XG4gIH1cblxuICBnZXRMYWJlbCgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmN1c3RvbUxhYmVsKSB7XG4gICAgICByZXR1cm4gc3VwZXIuZ2V0TGFiZWwoKTtcbiAgICB9XG4gICAgcmV0dXJuICdjb250cm9scy5pbnB1dC1yYWRpby1pY29uLmNob29zZSc7XG4gIH1cblxuICB3cml0ZVZhbHVlKG9wdGlvblZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAob3B0aW9uVmFsdWUpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSB0aGlzLm9wdGlvbkxpc3QuZmluZCgob3B0aW9uT2ZMaXN0KSA9PiB7XG4gICAgICAgIHJldHVybiBvcHRpb25PZkxpc3QudmFsdWUgPT09IG9wdGlvblZhbHVlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0T3B0aW9uKG9wdGlvbjogSW5wdXRPcHRpb25XaXRoSWNvbik6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSBvcHRpb247XG4gICAgdGhpcy5vblRvdWNoKG9wdGlvbi52YWx1ZSk7XG4gICAgdGhpcy5vbkNoYW5nZShvcHRpb24udmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRLZXkoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGtleUxpc3QgPSBbXTtcbiAgICBpZiAodGhpcy5tZXNzYWdlR3JvdXApIHtcbiAgICAgIGtleUxpc3QucHVzaCh0aGlzLm1lc3NhZ2VHcm91cCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmxhYmVsUHJlZml4KSB7XG4gICAgICBrZXlMaXN0LnB1c2godGhpcy5sYWJlbFByZWZpeCk7XG4gICAgfVxuICAgIGtleUxpc3QucHVzaChrZXkpO1xuICAgIHJldHVybiBrZXlMaXN0LmpvaW4oJy4nKTtcbiAgfVxufVxuIiwiPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG9wdGlvbkxpc3Q7IGxldCBpID0gaW5kZXhcIj5cbiAgPGRpdiBjbGFzcz1cImxhYmVsLW1vZGlmaWVyLWJveCBjYXJkLW1pbmkgY2FyZC1taW5pLS1yYWRpby1jaXJjbGUtYm94XCIgZGF0YS1pZD1cImNob2ljZVwiPlxuICAgIDxkaXYgY2xhc3M9XCJsYWJlbC1tb2RpZmllci1zbG90XCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgY2xhc3M9XCJsYWJlbC1tb2RpZmllci1yYWRpb1wiXG4gICAgICAgIG5hbWU9XCJyYWRpby1ncm91cC1uYW1lLXt7IGtleSB9fVwiXG4gICAgICAgIHZhbHVlPVwie3sgb3B0aW9uLnZhbHVlIH19XCJcbiAgICAgICAgaWQ9XCJjaG9pY2Ute3sgaSB9fS17eyBrZXkgfX1cIlxuICAgICAgICBbY2hlY2tlZF09XCJzZWxlY3RlZE9wdGlvbiAmJiBvcHRpb24udmFsdWUgPT09IHNlbGVjdGVkT3B0aW9uLnZhbHVlXCIgLz5cbiAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbC1tb2RpZmllci0tYXBwZW5kIGxhYmVsLW1vZGlmaWVyLS1jb250YWluZXIgY3VyLXBvaW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsLW1vZGlmaWVyLS1ib2R5XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsLW1vZGlmaWVyLS1ib2R5LS1pbm5lci1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICBmb3I9XCJjaG9pY2Ute3sgaSB9fS17eyBrZXkgfX1cIlxuICAgICAgICAgICAgICBjbGFzcz1cImxhYmVsLW1vZGlmaWVyLXJhZGlvX19sYWJlbFwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3RPcHRpb24ob3B0aW9uKVwiPjwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWwtbW9kaWZpZXItY29udGVudF9faGVhZGVyXCI+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJyYWRpby1jaXJjbGUtYm94IGRpc3BsYXktLWlubGluZS1mbGV4IGp1c3RpZnktY29udGVudC0tY2VudGVyIGFsaWduLWl0ZW1zLS1jZW50ZXIgYWxpZ24tc2VsZi0tY2VudGVyIGJvcmRlci1yYWRpdXMtLWNpcmNsZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsLW1vZGlmaWVyLWNvbnRlbnRfX2JvZHlcIj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiY3VzdG9tTGFiZWxcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1mbG93IHRleHQtZmxvdy0tYnV0dG9uIGxhYmVsLW1vZGlmaWVyLWNvbnRlbnRfX2JvZHktbGFiZWxcIlxuICAgICAgICAgICAgICAgIFtpbm5lckhUTUxdPVwiZ2V0TGFiZWwoKSB8IHRyYW5zbGF0ZVwiPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1mbG93IHRleHQtZmxvdy0tYnV0dG9uIGxhYmVsLW1vZGlmaWVyLWNvbnRlbnRfX2JvZHktbGFiZWxcIj5cbiAgICAgICAgICAgICAgICA8aSAqbmdJZj1cIiEhb3B0aW9uLmljb25cIiBjbGFzcz1cImljb25cIiBbbmdDbGFzc109XCJvcHRpb24uaWNvbiA/IG9wdGlvbi5pY29uIDogJydcIj48L2k+XG4gICAgICAgICAgICAgICAge3sgISFjdXN0b21PcHRpb25MYWJlbCA/IG9wdGlvbi5sYWJlbCA6IChvcHRpb24ubGFiZWwgfCB0cmFuc2xhdGUpIH19XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiISFvcHRpb24udGV4dFwiIGNsYXNzPVwicHgtLWwgdGV4dC1mbG93IHRleHQtZmxvdy0tbGVnYWwgbGFiZWwtbW9kaWZpZXItY29udGVudF9fYm9keS1yYW5nZVwiPlxuICAgICAgICAgICAgICAgIHt7ICEhY3VzdG9tT3B0aW9uTGFiZWwgPyBvcHRpb24udGV4dCA6IChvcHRpb24udGV4dCB8IHRyYW5zbGF0ZSkgfX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==