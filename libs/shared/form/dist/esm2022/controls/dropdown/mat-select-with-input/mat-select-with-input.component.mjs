var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, EventEmitter, forwardRef, HostListener, Input, Output, ViewChild, } from '@angular/core';
import { AbstractDropdownComponent } from '../abstract-dropdown.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/select";
import * as i5 from "@angular/material/core";
import * as i6 from "@ngx-translate/core";
const _c0 = ["selectDropdown"];
function MatSelectWithInputComponent_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "div", 12);
    i0.ɵɵelement(2, "i", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 14)(4, "div", 15)(5, "div", 16)(6, "div", 17);
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "translate");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(8, 1, ctx_r5.getTooltip()), " ");
} }
function MatSelectWithInputComponent_div_1_label_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 18);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, ctx_r6.getLabel() + ".optional"));
} }
const _c1 = a0 => ({ labelStyle: a0 });
function MatSelectWithInputComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7)(1, "div")(2, "label", 8);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, MatSelectWithInputComponent_div_1_div_5_Template, 9, 3, "div", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, MatSelectWithInputComponent_div_1_label_6_Template, 3, 3, "label", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c1, ctx_r0.labelStyle));
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("for", ctx_r0.key);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 5, ctx_r0.getLabel()));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.toolTipRequired);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.required);
} }
function MatSelectWithInputComponent_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-option", 19);
} }
function MatSelectWithInputComponent_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-option", 20);
    i0.ɵɵlistener("click", function MatSelectWithInputComponent_mat_option_6_Template_mat_option_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.changeSelectedValue()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r7 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("value", option_r7);
    i0.ɵɵattribute("data-cy", ctx_r3.messageGroup + "." + ctx_r3.key + ".option." + option_r7.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", option_r7.label, " ");
} }
function MatSelectWithInputComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵattribute("data-cy", ctx_r4.messageGroup + ".error." + ctx_r4.key);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, ctx_r4.getText()), "\n");
} }
const _c2 = (a0, a1) => ({ "form__input--disabled": a0, "form__input--error": a1 });
let MatSelectWithInputComponent = class MatSelectWithInputComponent extends AbstractDropdownComponent {
    select;
    required = true;
    disabled = false;
    toolTipRequired = false;
    selectChange = new EventEmitter();
    selectedOption;
    ngAfterContentInit() {
        this.selectedOption = this.getValueAsInputOption(this.value);
        this.changeControlValue();
        this.control?.control?.valueChanges
            .pipe(untilDestroyed(this))
            .subscribe((data) => (this.selectedOption = this.getValueAsInputOption(data)));
    }
    checkErrors() {
        if (this.control.control && this.control.control.errors) {
            this.error = Object.keys(this.control.control.errors)[0];
        }
    }
    getValueAsInputOption(value) {
        return this.optionList?.filter((option) => option.value === value)?.[0];
    }
    changeControlValue() {
        this.control?.control?.setValue(this.selectedOption?.value);
    }
    changeSelectedValue() {
        this.changeControlValue();
        this.selectChange.emit();
    }
    handleOutsideClick(event) {
        if (!this.select._elementRef.nativeElement.contains(event.target)) {
            this.select.close();
        }
    }
    static ɵfac = /*@__PURE__*/ (() => { let ɵMatSelectWithInputComponent_BaseFactory; return function MatSelectWithInputComponent_Factory(t) { return (ɵMatSelectWithInputComponent_BaseFactory || (ɵMatSelectWithInputComponent_BaseFactory = i0.ɵɵgetInheritedFactory(MatSelectWithInputComponent)))(t || MatSelectWithInputComponent); }; })();
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MatSelectWithInputComponent, selectors: [["tg-form-dropdown-single-select"]], viewQuery: function MatSelectWithInputComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.select = _t.first);
        } }, hostBindings: function MatSelectWithInputComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function MatSelectWithInputComponent_click_HostBindingHandler($event) { return ctx.handleOutsideClick($event); }, false, i0.ɵɵresolveDocument);
        } }, inputs: { required: "required", disabled: "disabled", toolTipRequired: "toolTipRequired" }, outputs: { selectChange: "selectChange" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => MatSelectWithInputComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 8, vars: 14, consts: [["appearance", "fill", 1, "width--full"], ["class", "display--flex align-items--center justify-content--between", 3, "ngClass", 4, "ngIf"], [3, "ngModel", "disabled", "ngClass", "placeholder", "ngModelChange", "closed"], ["selectDropdown", ""], ["disabled", "", 4, "ngIf"], ["class", "select-dropdown__options__list cursor---pointer", 3, "value", "click", 4, "ngFor", "ngForOf"], ["class", "formErrorInput Form__input__invalid-message", 4, "ngIf"], [1, "display--flex", "align-items--center", "justify-content--between", 3, "ngClass"], [3, "for"], ["class", "tooltip position--relative inline-block", 4, "ngIf"], ["class", "fl-right", 4, "ngIf"], [1, "tooltip", "position--relative", "inline-block"], [1, "tooltip__icon-section", "display--flex", "flex-direction--row--sm", "flex-direction--row-reverse", "align-items--center", "justify-content--center", "cursor--pointer", "my--xxxs"], [1, "icon", "icon-information-shape"], [1, "tooltip__info-section", "tooltip__info-section__arrow-left", "tooltip__info-section__auto-width"], [1, "horizontal-center-align"], [1, "info-section__description"], [1, "info-section__description__text"], [1, "fl-right"], ["disabled", ""], [1, "select-dropdown__options__list", "cursor---pointer", 3, "value", "click"], [1, "formErrorInput", "Form__input__invalid-message"]], template: function MatSelectWithInputComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field", 0);
            i0.ɵɵtemplate(1, MatSelectWithInputComponent_div_1_Template, 7, 9, "div", 1);
            i0.ɵɵelementStart(2, "mat-select", 2, 3);
            i0.ɵɵlistener("ngModelChange", function MatSelectWithInputComponent_Template_mat_select_ngModelChange_2_listener($event) { return ctx.selectedOption = $event; })("closed", function MatSelectWithInputComponent_Template_mat_select_closed_2_listener() { return ctx.checkErrors(); });
            i0.ɵɵpipe(4, "translate");
            i0.ɵɵtemplate(5, MatSelectWithInputComponent_mat_option_5_Template, 1, 0, "mat-option", 4)(6, MatSelectWithInputComponent_mat_option_6_Template, 2, 3, "mat-option", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(7, MatSelectWithInputComponent_div_7_Template, 3, 4, "div", 6);
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.customLabel);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngModel", ctx.selectedOption)("disabled", ctx.disabled)("ngClass", i0.ɵɵpureFunction2(11, _c2, ctx.disabled, ctx.error))("placeholder", ctx.showPlaceHolder ? i0.ɵɵpipeBind1(4, 9, ctx.getPlaceholder()) : "");
            i0.ɵɵattribute("data-cy", ctx.messageGroup + ".select." + ctx.key);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", (ctx.optionList == null ? null : ctx.optionList.length) === 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.optionList);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.error);
        } }, dependencies: [i1.NgClass, i1.NgForOf, i1.NgIf, i2.NgControlStatus, i2.NgModel, i3.MatFormField, i4.MatSelect, i5.MatOption, i6.TranslatePipe], encapsulation: 2 });
};
MatSelectWithInputComponent = __decorate([
    UntilDestroy({ checkProperties: true })
], MatSelectWithInputComponent);
export { MatSelectWithInputComponent };
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatSelectWithInputComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-dropdown-single-select', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => MatSelectWithInputComponent),
                        multi: true,
                    },
                ], template: "<mat-form-field class=\"width--full\" appearance=\"fill\">\n  <div\n    *ngIf=\"customLabel\"\n    [ngClass]=\"{ labelStyle: this.labelStyle }\"\n    class=\"display--flex align-items--center justify-content--between\">\n    <div>\n      <label for=\"{{ key }}\">{{ getLabel() | translate }}</label>\n      <div *ngIf=\"toolTipRequired\" class=\"tooltip position--relative inline-block\">\n        <div\n          class=\"tooltip__icon-section display--flex flex-direction--row--sm flex-direction--row-reverse align-items--center justify-content--center cursor--pointer my--xxxs\">\n          <i class=\"icon icon-information-shape\"></i>\n        </div>\n        <div class=\"tooltip__info-section tooltip__info-section__arrow-left tooltip__info-section__auto-width\">\n          <div class=\"horizontal-center-align\">\n            <div class=\"info-section__description\">\n              <div class=\"info-section__description__text\">\n                {{ getTooltip() | translate }}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <label class=\"fl-right\" *ngIf=\"!required\">{{ getLabel() + '.optional' | translate }}</label>\n  </div>\n  <mat-select\n    #selectDropdown\n    [(ngModel)]=\"selectedOption\"\n    [attr.data-cy]=\"messageGroup + '.select.' + key\"\n    [disabled]=\"disabled\"\n    (closed)=\"checkErrors()\"\n    [ngClass]=\"{ 'form__input--disabled': disabled, 'form__input--error': error }\"\n    [placeholder]=\"showPlaceHolder ? (getPlaceholder() | translate) : ''\">\n    <mat-option *ngIf=\"optionList?.length === 0\" disabled></mat-option>\n    <mat-option\n      [attr.data-cy]=\"messageGroup + '.' + key + '.option.' + option.value\"\n      (click)=\"changeSelectedValue()\"\n      class=\"select-dropdown__options__list cursor---pointer\"\n      *ngFor=\"let option of optionList\"\n      [value]=\"option\">\n      {{ option.label }}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n<div [attr.data-cy]=\"messageGroup + '.error.' + key\" class=\"formErrorInput Form__input__invalid-message\" *ngIf=\"error\">\n  {{ getText() | translate }}\n</div>\n" }]
    }], null, { select: [{
            type: ViewChild,
            args: ['selectDropdown']
        }], required: [{
            type: Input
        }], disabled: [{
            type: Input
        }], toolTipRequired: [{
            type: Input
        }], selectChange: [{
            type: Output
        }], handleOutsideClick: [{
            type: HostListener,
            args: ['document:click', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MatSelectWithInputComponent, { className: "MatSelectWithInputComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXNlbGVjdC13aXRoLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb250cm9scy9kcm9wZG93bi9tYXQtc2VsZWN0LXdpdGgtaW5wdXQvbWF0LXNlbGVjdC13aXRoLWlucHV0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9jb250cm9scy9kcm9wZG93bi9tYXQtc2VsZWN0LXdpdGgtaW5wdXQvbWF0LXNlbGVjdC13aXRoLWlucHV0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7Ozs7OztJQ1AvRCwrQkFBNkUsY0FBQTtJQUd6RSx3QkFBMkM7SUFDN0MsaUJBQU07SUFDTiwrQkFBdUcsY0FBQSxjQUFBLGNBQUE7SUFJL0YsWUFDRjs7SUFBQSxpQkFBTSxFQUFBLEVBQUEsRUFBQSxFQUFBOzs7SUFESixlQUNGO0lBREUsMEVBQ0Y7OztJQU1WLGlDQUEwQztJQUFBLFlBQTBDOztJQUFBLGlCQUFROzs7SUFBbEQsY0FBMEM7SUFBMUMsMkVBQTBDOzs7O0lBdEJ0Riw4QkFHcUUsVUFBQSxlQUFBO0lBRTFDLFlBQTRCOztJQUFBLGlCQUFRO0lBQzNELGtGQWNNO0lBQ1IsaUJBQU07SUFDTix1RkFBNEY7SUFDOUYsaUJBQU07OztJQXJCSix1RUFBMkM7SUFHbEMsZUFBZTtJQUFmLDJDQUFlO0lBQUMsY0FBNEI7SUFBNUIsNkRBQTRCO0lBQzdDLGVBQXFCO0lBQXJCLDZDQUFxQjtJQWdCSixjQUFlO0lBQWYsdUNBQWU7OztJQVV4QyxpQ0FBbUU7Ozs7SUFDbkUsc0NBS21CO0lBSGpCLG1MQUFTLGVBQUEsNEJBQXFCLENBQUEsSUFBQztJQUkvQixZQUNGO0lBQUEsaUJBQWE7Ozs7SUFGWCxpQ0FBZ0I7SUFKaEIsZ0dBQXFFO0lBS3JFLGNBQ0Y7SUFERSxnREFDRjs7O0lBR0osK0JBQXVIO0lBQ3JILFlBQ0Y7O0lBQUEsaUJBQU07OztJQUZELHVFQUErQztJQUNsRCxjQUNGO0lBREUsd0VBQ0Y7OztBRGxCTyxJQUFNLDJCQUEyQixHQUFqQyxNQUFNLDJCQUE0QixTQUFRLHlCQUF5QjtJQUMzQyxNQUFNLENBQVk7SUFDdEMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUNoQixRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ2pCLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFFdkIsWUFBWSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7SUFFbEQsY0FBYyxDQUFjO0lBRTVCLGtCQUFrQjtRQUNoQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWTthQUNoQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzFCLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUNELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3hELElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRCxDQUFDO0lBQ0gsQ0FBQztJQUVPLHFCQUFxQixDQUFDLEtBQWE7UUFDekMsT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDLE1BQW1CLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBRU8sa0JBQWtCO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCxtQkFBbUI7UUFDakIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBR0Qsa0JBQWtCLENBQUMsS0FBaUI7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7WUFDbEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0QixDQUFDO0lBQ0gsQ0FBQzt5UUF6Q1UsMkJBQTJCLFNBQTNCLDJCQUEyQjs2REFBM0IsMkJBQTJCOzs7Ozs7a0hBQTNCLDhCQUEwQjtxTEFUMUI7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztvQkFDMUQsS0FBSyxFQUFFLElBQUk7aUJBQ1o7YUFDRjtZQ3pCSCx5Q0FBc0Q7WUFDcEQsNEVBdUJNO1lBQ04sd0NBT3dFO1lBTHRFLGlLQUE0QixpR0FHbEIsaUJBQWEsSUFISzs7WUFNNUIsMEZBQW1FLDZFQUFBO1lBU3JFLGlCQUFhLEVBQUE7WUFFZiw0RUFFTTs7WUE1Q0QsY0FBaUI7WUFBakIsc0NBQWlCO1lBeUJsQixjQUE0QjtZQUE1Qiw0Q0FBNEIsMEJBQUEsaUVBQUEsc0ZBQUE7WUFDNUIsa0VBQWdEO1lBS25DLGVBQThCO1lBQTlCLG9GQUE4QjtZQUt0QixjQUFhO1lBQWIsd0NBQWE7WUFNb0UsY0FBVztZQUFYLGdDQUFXOzs7QURoQnhHLDJCQUEyQjtJQUR2QyxZQUFZLENBQUMsRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLENBQUM7R0FDM0IsMkJBQTJCLENBMEN2Qzs7aUZBMUNZLDJCQUEyQjtjQVp2QyxTQUFTOzJCQUNFLGdDQUFnQyxhQUUvQjtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSw0QkFBNEIsQ0FBQzt3QkFDMUQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7Z0JBSTRCLE1BQU07a0JBQWxDLFNBQVM7bUJBQUMsZ0JBQWdCO1lBQ2xCLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUVJLFlBQVk7a0JBQXJCLE1BQU07WUErQlAsa0JBQWtCO2tCQURqQixZQUFZO21CQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDOztrRkFwQy9CLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdERyb3Bkb3duQ29tcG9uZW50IH0gZnJvbSAnLi4vYWJzdHJhY3QtZHJvcGRvd24uY29tcG9uZW50JztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTWF0U2VsZWN0IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7IElucHV0T3B0aW9uIH0gZnJvbSAnLi4vLi4vcmFkaW8nO1xuaW1wb3J0IHsgVW50aWxEZXN0cm95LCB1bnRpbERlc3Ryb3llZCB9IGZyb20gJ0BuZ25lYXQvdW50aWwtZGVzdHJveSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RnLWZvcm0tZHJvcGRvd24tc2luZ2xlLXNlbGVjdCcsXG4gIHRlbXBsYXRlVXJsOiAnbWF0LXNlbGVjdC13aXRoLWlucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNYXRTZWxlY3RXaXRoSW5wdXRDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbn0pXG5AVW50aWxEZXN0cm95KHsgY2hlY2tQcm9wZXJ0aWVzOiB0cnVlIH0pXG5leHBvcnQgY2xhc3MgTWF0U2VsZWN0V2l0aElucHV0Q29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3REcm9wZG93bkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBAVmlld0NoaWxkKCdzZWxlY3REcm9wZG93bicpIHNlbGVjdDogTWF0U2VsZWN0O1xuICBASW5wdXQoKSByZXF1aXJlZCA9IHRydWU7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRvb2xUaXBSZXF1aXJlZCA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKSBzZWxlY3RDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgc2VsZWN0ZWRPcHRpb246IElucHV0T3B0aW9uO1xuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gdGhpcy5nZXRWYWx1ZUFzSW5wdXRPcHRpb24odGhpcy52YWx1ZSk7XG4gICAgdGhpcy5jaGFuZ2VDb250cm9sVmFsdWUoKTtcbiAgICB0aGlzLmNvbnRyb2w/LmNvbnRyb2w/LnZhbHVlQ2hhbmdlc1xuICAgICAgLnBpcGUodW50aWxEZXN0cm95ZWQodGhpcykpXG4gICAgICAuc3Vic2NyaWJlKChkYXRhKSA9PiAodGhpcy5zZWxlY3RlZE9wdGlvbiA9IHRoaXMuZ2V0VmFsdWVBc0lucHV0T3B0aW9uKGRhdGEpKSk7XG4gIH1cbiAgY2hlY2tFcnJvcnMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29udHJvbC5jb250cm9sICYmIHRoaXMuY29udHJvbC5jb250cm9sLmVycm9ycykge1xuICAgICAgdGhpcy5lcnJvciA9IE9iamVjdC5rZXlzKHRoaXMuY29udHJvbC5jb250cm9sLmVycm9ycylbMF07XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRWYWx1ZUFzSW5wdXRPcHRpb24odmFsdWU6IHN0cmluZyk6IElucHV0T3B0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25MaXN0Py5maWx0ZXIoKG9wdGlvbjogSW5wdXRPcHRpb24pID0+IG9wdGlvbi52YWx1ZSA9PT0gdmFsdWUpPy5bMF07XG4gIH1cblxuICBwcml2YXRlIGNoYW5nZUNvbnRyb2xWYWx1ZSgpIHtcbiAgICB0aGlzLmNvbnRyb2w/LmNvbnRyb2w/LnNldFZhbHVlKHRoaXMuc2VsZWN0ZWRPcHRpb24/LnZhbHVlKTtcbiAgfVxuXG4gIGNoYW5nZVNlbGVjdGVkVmFsdWUoKSB7XG4gICAgdGhpcy5jaGFuZ2VDb250cm9sVmFsdWUoKTtcbiAgICB0aGlzLnNlbGVjdENoYW5nZS5lbWl0KCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50J10pXG4gIGhhbmRsZU91dHNpZGVDbGljayhldmVudDogTW91c2VFdmVudCkge1xuICAgIGlmICghdGhpcy5zZWxlY3QuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICB0aGlzLnNlbGVjdC5jbG9zZSgpO1xuICAgIH1cbiAgfVxufVxuIiwiPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwid2lkdGgtLWZ1bGxcIiBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICA8ZGl2XG4gICAgKm5nSWY9XCJjdXN0b21MYWJlbFwiXG4gICAgW25nQ2xhc3NdPVwieyBsYWJlbFN0eWxlOiB0aGlzLmxhYmVsU3R5bGUgfVwiXG4gICAgY2xhc3M9XCJkaXNwbGF5LS1mbGV4IGFsaWduLWl0ZW1zLS1jZW50ZXIganVzdGlmeS1jb250ZW50LS1iZXR3ZWVuXCI+XG4gICAgPGRpdj5cbiAgICAgIDxsYWJlbCBmb3I9XCJ7eyBrZXkgfX1cIj57eyBnZXRMYWJlbCgpIHwgdHJhbnNsYXRlIH19PC9sYWJlbD5cbiAgICAgIDxkaXYgKm5nSWY9XCJ0b29sVGlwUmVxdWlyZWRcIiBjbGFzcz1cInRvb2x0aXAgcG9zaXRpb24tLXJlbGF0aXZlIGlubGluZS1ibG9ja1wiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJ0b29sdGlwX19pY29uLXNlY3Rpb24gZGlzcGxheS0tZmxleCBmbGV4LWRpcmVjdGlvbi0tcm93LS1zbSBmbGV4LWRpcmVjdGlvbi0tcm93LXJldmVyc2UgYWxpZ24taXRlbXMtLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtLWNlbnRlciBjdXJzb3ItLXBvaW50ZXIgbXktLXh4eHNcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImljb24gaWNvbi1pbmZvcm1hdGlvbi1zaGFwZVwiPjwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b29sdGlwX19pbmZvLXNlY3Rpb24gdG9vbHRpcF9faW5mby1zZWN0aW9uX19hcnJvdy1sZWZ0IHRvb2x0aXBfX2luZm8tc2VjdGlvbl9fYXV0by13aWR0aFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJob3Jpem9udGFsLWNlbnRlci1hbGlnblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm8tc2VjdGlvbl9fZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm8tc2VjdGlvbl9fZGVzY3JpcHRpb25fX3RleHRcIj5cbiAgICAgICAgICAgICAgICB7eyBnZXRUb29sdGlwKCkgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8bGFiZWwgY2xhc3M9XCJmbC1yaWdodFwiICpuZ0lmPVwiIXJlcXVpcmVkXCI+e3sgZ2V0TGFiZWwoKSArICcub3B0aW9uYWwnIHwgdHJhbnNsYXRlIH19PC9sYWJlbD5cbiAgPC9kaXY+XG4gIDxtYXQtc2VsZWN0XG4gICAgI3NlbGVjdERyb3Bkb3duXG4gICAgWyhuZ01vZGVsKV09XCJzZWxlY3RlZE9wdGlvblwiXG4gICAgW2F0dHIuZGF0YS1jeV09XCJtZXNzYWdlR3JvdXAgKyAnLnNlbGVjdC4nICsga2V5XCJcbiAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgIChjbG9zZWQpPVwiY2hlY2tFcnJvcnMoKVwiXG4gICAgW25nQ2xhc3NdPVwieyAnZm9ybV9faW5wdXQtLWRpc2FibGVkJzogZGlzYWJsZWQsICdmb3JtX19pbnB1dC0tZXJyb3InOiBlcnJvciB9XCJcbiAgICBbcGxhY2Vob2xkZXJdPVwic2hvd1BsYWNlSG9sZGVyID8gKGdldFBsYWNlaG9sZGVyKCkgfCB0cmFuc2xhdGUpIDogJydcIj5cbiAgICA8bWF0LW9wdGlvbiAqbmdJZj1cIm9wdGlvbkxpc3Q/Lmxlbmd0aCA9PT0gMFwiIGRpc2FibGVkPjwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvblxuICAgICAgW2F0dHIuZGF0YS1jeV09XCJtZXNzYWdlR3JvdXAgKyAnLicgKyBrZXkgKyAnLm9wdGlvbi4nICsgb3B0aW9uLnZhbHVlXCJcbiAgICAgIChjbGljayk9XCJjaGFuZ2VTZWxlY3RlZFZhbHVlKClcIlxuICAgICAgY2xhc3M9XCJzZWxlY3QtZHJvcGRvd25fX29wdGlvbnNfX2xpc3QgY3Vyc29yLS0tcG9pbnRlclwiXG4gICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG9wdGlvbkxpc3RcIlxuICAgICAgW3ZhbHVlXT1cIm9wdGlvblwiPlxuICAgICAge3sgb3B0aW9uLmxhYmVsIH19XG4gICAgPC9tYXQtb3B0aW9uPlxuICA8L21hdC1zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuPGRpdiBbYXR0ci5kYXRhLWN5XT1cIm1lc3NhZ2VHcm91cCArICcuZXJyb3IuJyArIGtleVwiIGNsYXNzPVwiZm9ybUVycm9ySW5wdXQgRm9ybV9faW5wdXRfX2ludmFsaWQtbWVzc2FnZVwiICpuZ0lmPVwiZXJyb3JcIj5cbiAge3sgZ2V0VGV4dCgpIHwgdHJhbnNsYXRlIH19XG48L2Rpdj5cbiJdfQ==