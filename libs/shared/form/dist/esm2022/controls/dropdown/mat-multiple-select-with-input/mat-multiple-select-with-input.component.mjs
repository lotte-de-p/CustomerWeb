import { Component, forwardRef, HostListener, Input, ViewChild } from '@angular/core';
import { AbstractDropdownComponent } from '../abstract-dropdown.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { isEmpty } from 'lodash-es';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/select";
import * as i5 from "@angular/material/core";
import * as i6 from "@ngx-translate/core";
const _c0 = ["selectDropdown"];
const _c1 = ["allSelected"];
function MatMultipleSelectWithInputComponent_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12)(1, "div", 13);
    i0.ɵɵelement(2, "i", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 15)(4, "div", 16)(5, "div", 17)(6, "div", 18);
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "translate");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(8, 1, ctx_r5.getTooltip()), " ");
} }
function MatMultipleSelectWithInputComponent_div_1_label_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 19);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, ctx_r6.getLabel() + ".optional"));
} }
const _c2 = a0 => ({ labelStyle: a0 });
function MatMultipleSelectWithInputComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8)(1, "div")(2, "label", 9);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, MatMultipleSelectWithInputComponent_div_1_div_5_Template, 9, 3, "div", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, MatMultipleSelectWithInputComponent_div_1_label_6_Template, 3, 3, "label", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c2, ctx_r0.labelStyle));
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("for", ctx_r0.key);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 5, ctx_r0.getLabel()));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.toolTipRequired);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.required);
} }
function MatMultipleSelectWithInputComponent_mat_select_trigger_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-select-trigger", 20)(1, "span", 21);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.selectedOptionsCount);
} }
function MatMultipleSelectWithInputComponent_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-option", 22);
    i0.ɵɵlistener("click", function MatMultipleSelectWithInputComponent_mat_option_10_Template_mat_option_click_0_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.updateValueAndPreventClosing($event)); })("touchstart", function MatMultipleSelectWithInputComponent_mat_option_10_Template_mat_option_touchstart_0_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r10 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r10.updateValueAndPreventClosing($event)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r7 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("value", option_r7);
    i0.ɵɵattribute("data-cy", ctx_r4.messageGroup + ".mat-select." + ctx_r4.key + ".option." + option_r7.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(option_r7.label);
} }
export class MatMultipleSelectWithInputComponent extends AbstractDropdownComponent {
    multiSelect;
    allSelectedOption;
    selectedOptions = [];
    toolTipRequired = false;
    required = true;
    selectedOptionsCount;
    ngOnChanges() {
        this.writeValues();
    }
    updateValueAndPreventClosing(event) {
        this.preventClosing(event);
        this.writeValues();
        if (this.allSelectedOption.selected) {
            this.multiSelect.options.first.deselect();
        }
    }
    toggleAllSelection(event) {
        this.preventClosing(event);
        if (this.allSelectedOption.selected) {
            this.multiSelect.options.forEach((item) => item.select());
        }
        else {
            this.multiSelect.options.forEach((item) => item.deselect());
        }
        this.writeValues();
    }
    handleOutsideClick(event) {
        if (this.multiSelect && !this.multiSelect._elementRef.nativeElement.contains(event.target)) {
            this.multiSelect.close();
        }
    }
    preventClosing(event) {
        event.stopPropagation();
    }
    writeValues() {
        const selectedValues = [];
        this.selectedOptions?.forEach((option) => {
            if (!isEmpty(option)) {
                selectedValues.push(option.value);
            }
        });
        this.selectedOptionsCount = selectedValues.length;
        this.control?.control?.setValue(selectedValues);
    }
    static ɵfac = /*@__PURE__*/ (() => { let ɵMatMultipleSelectWithInputComponent_BaseFactory; return function MatMultipleSelectWithInputComponent_Factory(t) { return (ɵMatMultipleSelectWithInputComponent_BaseFactory || (ɵMatMultipleSelectWithInputComponent_BaseFactory = i0.ɵɵgetInheritedFactory(MatMultipleSelectWithInputComponent)))(t || MatMultipleSelectWithInputComponent); }; })();
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MatMultipleSelectWithInputComponent, selectors: [["tg-form-dropdown-with-multiple-select"]], viewQuery: function MatMultipleSelectWithInputComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.multiSelect = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.allSelectedOption = _t.first);
        } }, hostBindings: function MatMultipleSelectWithInputComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function MatMultipleSelectWithInputComponent_click_HostBindingHandler($event) { return ctx.handleOutsideClick($event); }, false, i0.ɵɵresolveDocument)("touchstart", function MatMultipleSelectWithInputComponent_touchstart_HostBindingHandler($event) { return ctx.handleOutsideClick($event); }, false, i0.ɵɵresolveDocument);
        } }, inputs: { selectedOptions: "selectedOptions", toolTipRequired: "toolTipRequired", required: "required" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => MatMultipleSelectWithInputComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 11, vars: 12, consts: [["appearance", "fill", 1, "width--full", "mat-select-multiple"], ["class", "display--flex align-items--center justify-content--between", 3, "ngClass", 4, "ngIf"], ["multiple", "", 3, "ngModel", "placeholder", "ngModelChange"], ["selectDropdown", ""], ["class", "background-yellow border-radius--all--l py--xxxs px--m", 4, "ngIf"], [3, "click", "touchstart"], ["allSelected", ""], [3, "value", "click", "touchstart", 4, "ngFor", "ngForOf"], [1, "display--flex", "align-items--center", "justify-content--between", 3, "ngClass"], [3, "for"], ["class", "tooltip position--relative inline-block", 4, "ngIf"], ["class", "fl-right", 4, "ngIf"], [1, "tooltip", "position--relative", "inline-block"], [1, "tooltip__icon-section", "display--flex", "flex-direction--row--sm", "flex-direction--row-reverse", "align-items--center", "justify-content--center", "cursor--pointer", "my--xxxs"], [1, "icon", "icon-information-shape"], [1, "tooltip__info-section", "tooltip__info-section__arrow-left", "tooltip__info-section__auto-width"], [1, "horizontal-center-align"], [1, "info-section__description"], [1, "info-section__description__text"], [1, "fl-right"], [1, "background-yellow", "border-radius--all--l", "py--xxxs", "px--m"], [1, "text--s"], [3, "value", "click", "touchstart"]], template: function MatMultipleSelectWithInputComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field", 0);
            i0.ɵɵtemplate(1, MatMultipleSelectWithInputComponent_div_1_Template, 7, 9, "div", 1);
            i0.ɵɵelementStart(2, "mat-select", 2, 3);
            i0.ɵɵlistener("ngModelChange", function MatMultipleSelectWithInputComponent_Template_mat_select_ngModelChange_2_listener($event) { return ctx.selectedOptions = $event; });
            i0.ɵɵpipe(4, "translate");
            i0.ɵɵtemplate(5, MatMultipleSelectWithInputComponent_mat_select_trigger_5_Template, 3, 1, "mat-select-trigger", 4);
            i0.ɵɵelementStart(6, "mat-option", 5, 6);
            i0.ɵɵlistener("click", function MatMultipleSelectWithInputComponent_Template_mat_option_click_6_listener($event) { return ctx.toggleAllSelection($event); })("touchstart", function MatMultipleSelectWithInputComponent_Template_mat_option_touchstart_6_listener($event) { return ctx.toggleAllSelection($event); });
            i0.ɵɵtext(8);
            i0.ɵɵpipe(9, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(10, MatMultipleSelectWithInputComponent_mat_option_10_Template, 2, 3, "mat-option", 7);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.customLabel);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngModel", ctx.selectedOptions)("placeholder", ctx.showPlaceHolder ? i0.ɵɵpipeBind1(4, 8, ctx.getPlaceholder()) : "");
            i0.ɵɵattribute("data-cy", ctx.messageGroup + ".mat-select." + ctx.key);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.selectedOptions.length > 0);
            i0.ɵɵadvance();
            i0.ɵɵattribute("data-cy", ctx.messageGroup + ".mat-select." + ctx.key + ".select-all");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(9, 10, ctx.getLabel() + "-select-all"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.optionList);
        } }, dependencies: [i1.NgClass, i1.NgForOf, i1.NgIf, i2.NgControlStatus, i2.NgModel, i3.MatFormField, i4.MatSelect, i4.MatSelectTrigger, i5.MatOption, i6.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatMultipleSelectWithInputComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-dropdown-with-multiple-select', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => MatMultipleSelectWithInputComponent),
                        multi: true,
                    },
                ], template: "<mat-form-field class=\"width--full mat-select-multiple\" appearance=\"fill\">\n  <div\n    *ngIf=\"customLabel\"\n    [ngClass]=\"{ labelStyle: this.labelStyle }\"\n    class=\"display--flex align-items--center justify-content--between\">\n    <div>\n      <label for=\"{{ key }}\">{{ getLabel() | translate }}</label>\n      <div *ngIf=\"toolTipRequired\" class=\"tooltip position--relative inline-block\">\n        <div\n          class=\"tooltip__icon-section display--flex flex-direction--row--sm flex-direction--row-reverse align-items--center justify-content--center cursor--pointer my--xxxs\">\n          <i class=\"icon icon-information-shape\"></i>\n        </div>\n        <div class=\"tooltip__info-section tooltip__info-section__arrow-left tooltip__info-section__auto-width\">\n          <div class=\"horizontal-center-align\">\n            <div class=\"info-section__description\">\n              <div class=\"info-section__description__text\">\n                {{ getTooltip() | translate }}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <label class=\"fl-right\" *ngIf=\"!required\">{{ getLabel() + '.optional' | translate }}</label>\n  </div>\n  <mat-select\n    #selectDropdown\n    multiple\n    [attr.data-cy]=\"messageGroup + '.mat-select.' + key\"\n    [(ngModel)]=\"selectedOptions\"\n    [placeholder]=\"showPlaceHolder ? (getPlaceholder() | translate) : ''\">\n    <mat-select-trigger\n      *ngIf=\"selectedOptions.length > 0\"\n      class=\"background-yellow border-radius--all--l py--xxxs px--m\">\n      <span class=\"text--s\">{{ selectedOptionsCount }}</span>\n    </mat-select-trigger>\n    <mat-option\n      [attr.data-cy]=\"messageGroup + '.mat-select.' + key + '.select-all'\"\n      #allSelected\n      (click)=\"toggleAllSelection($event)\"\n      (touchstart)=\"toggleAllSelection($event)\"\n      >{{ getLabel() + '-select-all' | translate }}</mat-option\n    >\n    <mat-option\n      [attr.data-cy]=\"messageGroup + '.mat-select.' + key + '.option.' + option.value\"\n      (click)=\"updateValueAndPreventClosing($event)\"\n      (touchstart)=\"updateValueAndPreventClosing($event)\"\n      *ngFor=\"let option of optionList\"\n      [value]=\"option\"\n      >{{ option.label }}</mat-option\n    >\n  </mat-select>\n</mat-form-field>\n" }]
    }], null, { multiSelect: [{
            type: ViewChild,
            args: ['selectDropdown']
        }], allSelectedOption: [{
            type: ViewChild,
            args: ['allSelected']
        }], selectedOptions: [{
            type: Input
        }], toolTipRequired: [{
            type: Input
        }], required: [{
            type: Input
        }], handleOutsideClick: [{
            type: HostListener,
            args: ['document:click', ['$event']]
        }, {
            type: HostListener,
            args: ['document:touchstart', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MatMultipleSelectWithInputComponent, { className: "MatMultipleSelectWithInputComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LW11bHRpcGxlLXNlbGVjdC13aXRoLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb250cm9scy9kcm9wZG93bi9tYXQtbXVsdGlwbGUtc2VsZWN0LXdpdGgtaW5wdXQvbWF0LW11bHRpcGxlLXNlbGVjdC13aXRoLWlucHV0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9jb250cm9scy9kcm9wZG93bi9tYXQtbXVsdGlwbGUtc2VsZWN0LXdpdGgtaW5wdXQvbWF0LW11bHRpcGxlLXNlbGVjdC13aXRoLWlucHV0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRzNFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7Ozs7Ozs7Ozs7O0lDQzlCLCtCQUE2RSxjQUFBO0lBR3pFLHdCQUEyQztJQUM3QyxpQkFBTTtJQUNOLCtCQUF1RyxjQUFBLGNBQUEsY0FBQTtJQUkvRixZQUNGOztJQUFBLGlCQUFNLEVBQUEsRUFBQSxFQUFBLEVBQUE7OztJQURKLGVBQ0Y7SUFERSwwRUFDRjs7O0lBTVYsaUNBQTBDO0lBQUEsWUFBMEM7O0lBQUEsaUJBQVE7OztJQUFsRCxjQUEwQztJQUExQywyRUFBMEM7Ozs7SUF0QnRGLDhCQUdxRSxVQUFBLGVBQUE7SUFFMUMsWUFBNEI7O0lBQUEsaUJBQVE7SUFDM0QsMkZBY007SUFDUixpQkFBTTtJQUNOLCtGQUE0RjtJQUM5RixpQkFBTTs7O0lBckJKLHVFQUEyQztJQUdsQyxlQUFlO0lBQWYsMkNB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Y2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uQ2hhbmdlcywgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdERyb3Bkb3duQ29tcG9uZW50IH0gZnJvbSAnLi4vYWJzdHJhY3QtZHJvcGRvd24uY29tcG9uZW50JztcbmltcG9ydCB7IE1hdFNlbGVjdCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XG5pbXBvcnQgeyBJbnB1dE9wdGlvbiB9IGZyb20gJy4uLy4uL3JhZGlvJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTWF0T3B0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnbG9kYXNoLWVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGctZm9ybS1kcm9wZG93bi13aXRoLW11bHRpcGxlLXNlbGVjdCcsXG4gIHRlbXBsYXRlVXJsOiAnbWF0LW11bHRpcGxlLXNlbGVjdC13aXRoLWlucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNYXRNdWx0aXBsZVNlbGVjdFdpdGhJbnB1dENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBNYXRNdWx0aXBsZVNlbGVjdFdpdGhJbnB1dENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0RHJvcGRvd25Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBAVmlld0NoaWxkKCdzZWxlY3REcm9wZG93bicpIG11bHRpU2VsZWN0OiBNYXRTZWxlY3Q7XG4gIEBWaWV3Q2hpbGQoJ2FsbFNlbGVjdGVkJykgYWxsU2VsZWN0ZWRPcHRpb246IE1hdE9wdGlvbjtcbiAgQElucHV0KCkgc2VsZWN0ZWRPcHRpb25zOiBJbnB1dE9wdGlvbltdID0gW107XG4gIEBJbnB1dCgpIHRvb2xUaXBSZXF1aXJlZCA9IGZhbHNlO1xuICBASW5wdXQoKSByZXF1aXJlZCA9IHRydWU7XG4gIHNlbGVjdGVkT3B0aW9uc0NvdW50OiBudW1iZXI7XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy53cml0ZVZhbHVlcygpO1xuICB9XG5cbiAgdXBkYXRlVmFsdWVBbmRQcmV2ZW50Q2xvc2luZyhldmVudDogRXZlbnQpIHtcbiAgICB0aGlzLnByZXZlbnRDbG9zaW5nKGV2ZW50KTtcbiAgICB0aGlzLndyaXRlVmFsdWVzKCk7XG4gICAgaWYgKHRoaXMuYWxsU2VsZWN0ZWRPcHRpb24uc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMubXVsdGlTZWxlY3Qub3B0aW9ucy5maXJzdC5kZXNlbGVjdCgpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZUFsbFNlbGVjdGlvbihldmVudDogRXZlbnQpIHtcbiAgICB0aGlzLnByZXZlbnRDbG9zaW5nKGV2ZW50KTtcbiAgICBpZiAodGhpcy5hbGxTZWxlY3RlZE9wdGlvbi5zZWxlY3RlZCkge1xuICAgICAgdGhpcy5tdWx0aVNlbGVjdC5vcHRpb25zLmZvckVhY2goKGl0ZW06IE1hdE9wdGlvbikgPT4gaXRlbS5zZWxlY3QoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubXVsdGlTZWxlY3Qub3B0aW9ucy5mb3JFYWNoKChpdGVtOiBNYXRPcHRpb24pID0+IGl0ZW0uZGVzZWxlY3QoKSk7XG4gICAgfVxuICAgIHRoaXMud3JpdGVWYWx1ZXMoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6dG91Y2hzdGFydCcsIFsnJGV2ZW50J10pXG4gIGhhbmRsZU91dHNpZGVDbGljayhldmVudDogRXZlbnQpIHtcbiAgICBpZiAodGhpcy5tdWx0aVNlbGVjdCAmJiAhdGhpcy5tdWx0aVNlbGVjdC5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHRoaXMubXVsdGlTZWxlY3QuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHByZXZlbnRDbG9zaW5nKGV2ZW50OiBFdmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgcHJpdmF0ZSB3cml0ZVZhbHVlcygpOiB2b2lkIHtcbiAgICBjb25zdCBzZWxlY3RlZFZhbHVlczogc3RyaW5nW10gPSBbXTtcbiAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucz8uZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICBpZiAoIWlzRW1wdHkob3B0aW9uKSkge1xuICAgICAgICBzZWxlY3RlZFZhbHVlcy5wdXNoKG9wdGlvbi52YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5zZWxlY3RlZE9wdGlvbnNDb3VudCA9IHNlbGVjdGVkVmFsdWVzLmxlbmd0aDtcbiAgICB0aGlzLmNvbnRyb2w/LmNvbnRyb2w/LnNldFZhbHVlKHNlbGVjdGVkVmFsdWVzKTtcbiAgfVxufVxuIiwiPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwid2lkdGgtLWZ1bGwgbWF0LXNlbGVjdC1tdWx0aXBsZVwiIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gIDxkaXZcbiAgICAqbmdJZj1cImN1c3RvbUxhYmVsXCJcbiAgICBbbmdDbGFzc109XCJ7IGxhYmVsU3R5bGU6IHRoaXMubGFiZWxTdHlsZSB9XCJcbiAgICBjbGFzcz1cImRpc3BsYXktLWZsZXggYWxpZ24taXRlbXMtLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtLWJldHdlZW5cIj5cbiAgICA8ZGl2PlxuICAgICAgPGxhYmVsIGZvcj1cInt7IGtleSB9fVwiPnt7IGdldExhYmVsKCkgfCB0cmFuc2xhdGUgfX08L2xhYmVsPlxuICAgICAgPGRpdiAqbmdJZj1cInRvb2xUaXBSZXF1aXJlZFwiIGNsYXNzPVwidG9vbHRpcCBwb3NpdGlvbi0tcmVsYXRpdmUgaW5saW5lLWJsb2NrXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cInRvb2x0aXBfX2ljb24tc2VjdGlvbiBkaXNwbGF5LS1mbGV4IGZsZXgtZGlyZWN0aW9uLS1yb3ctLXNtIGZsZXgtZGlyZWN0aW9uLS1yb3ctcmV2ZXJzZSBhbGlnbi1pdGVtcy0tY2VudGVyIGp1c3RpZnktY29udGVudC0tY2VudGVyIGN1cnNvci0tcG9pbnRlciBteS0teHh4c1wiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiaWNvbiBpY29uLWluZm9ybWF0aW9uLXNoYXBlXCI+PC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRvb2x0aXBfX2luZm8tc2VjdGlvbiB0b29sdGlwX19pbmZvLXNlY3Rpb25fX2Fycm93LWxlZnQgdG9vbHRpcF9faW5mby1zZWN0aW9uX19hdXRvLXdpZHRoXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImhvcml6b250YWwtY2VudGVyLWFsaWduXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1zZWN0aW9uX19kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1zZWN0aW9uX19kZXNjcmlwdGlvbl9fdGV4dFwiPlxuICAgICAgICAgICAgICAgIHt7IGdldFRvb2x0aXAoKSB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxsYWJlbCBjbGFzcz1cImZsLXJpZ2h0XCIgKm5nSWY9XCIhcmVxdWlyZWRcIj57eyBnZXRMYWJlbCgpICsgJy5vcHRpb25hbCcgfCB0cmFuc2xhdGUgfX08L2xhYmVsPlxuICA8L2Rpdj5cbiAgPG1hdC1zZWxlY3RcbiAgICAjc2VsZWN0RHJvcGRvd25cbiAgICBtdWx0aXBsZVxuICAgIFthdHRyLmRhdGEtY3ldPVwibWVzc2FnZUdyb3VwICsgJy5tYXQtc2VsZWN0LicgKyBrZXlcIlxuICAgIFsobmdNb2RlbCldPVwic2VsZWN0ZWRPcHRpb25zXCJcbiAgICBbcGxhY2Vob2xkZXJdPVwic2hvd1BsYWNlSG9sZGVyID8gKGdldFBsYWNlaG9sZGVyKCkgfCB0cmFuc2xhdGUpIDogJydcIj5cbiAgICA8bWF0LXNlbGVjdC10cmlnZ2VyXG4gICAgICAqbmdJZj1cInNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPiAwXCJcbiAgICAgIGNsYXNzPVwiYmFja2dyb3VuZC15ZWxsb3cgYm9yZGVyLXJhZGl1cy0tYWxsLS1sIHB5LS14eHhzIHB4LS1tXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cInRleHQtLXNcIj57eyBzZWxlY3RlZE9wdGlvbnNDb3VudCB9fTwvc3Bhbj5cbiAgICA8L21hdC1zZWxlY3QtdHJpZ2dlcj5cbiAgICA8bWF0LW9wdGlvblxuICAgICAgW2F0dHIuZGF0YS1jeV09XCJtZXNzYWdlR3JvdXAgKyAnLm1hdC1zZWxlY3QuJyArIGtleSArICcuc2VsZWN0LWFsbCdcIlxuICAgICAgI2FsbFNlbGVjdGVkXG4gICAgICAoY2xpY2spPVwidG9nZ2xlQWxsU2VsZWN0aW9uKCRldmVudClcIlxuICAgICAgKHRvdWNoc3RhcnQpPVwidG9nZ2xlQWxsU2VsZWN0aW9uKCRldmVudClcIlxuICAgICAgPnt7IGdldExhYmVsKCkgKyAnLXNlbGVjdC1hbGwnIHwgdHJhbnNsYXRlIH19PC9tYXQtb3B0aW9uXG4gICAgPlxuICAgIDxtYXQtb3B0aW9uXG4gICAgICBbYXR0ci5kYXRhLWN5XT1cIm1lc3NhZ2VHcm91cCArICcubWF0LXNlbGVjdC4nICsga2V5ICsgJy5vcHRpb24uJyArIG9wdGlvbi52YWx1ZVwiXG4gICAgICAoY2xpY2spPVwidXBkYXRlVmFsdWVBbmRQcmV2ZW50Q2xvc2luZygkZXZlbnQpXCJcbiAgICAgICh0b3VjaHN0YXJ0KT1cInVwZGF0ZVZhbHVlQW5kUHJldmVudENsb3NpbmcoJGV2ZW50KVwiXG4gICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG9wdGlvbkxpc3RcIlxuICAgICAgW3ZhbHVlXT1cIm9wdGlvblwiXG4gICAgICA+e3sgb3B0aW9uLmxhYmVsIH19PC9tYXQtb3B0aW9uXG4gICAgPlxuICA8L21hdC1zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19