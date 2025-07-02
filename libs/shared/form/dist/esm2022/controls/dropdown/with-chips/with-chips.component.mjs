import { Component, forwardRef, Input, Optional } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractDropdownComponent } from '../abstract-dropdown.component';
import * as i0 from "@angular/core";
import * as i1 from "@telenet/ng-lib-page";
import * as i2 from "../../../errors";
import * as i3 from "@angular/common";
import * as i4 from "@ngx-translate/core";
const _c0 = a0 => ({ labelStyle: a0 });
function DropDownWithChipsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9)(1, "label", 10);
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
function DropDownWithChipsComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 11)(1, "span", 12);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "a", 13);
    i0.ɵɵlistener("click", function DropDownWithChipsComponent_li_5_Template_a_click_3_listener() { const restoredCtx = i0.ɵɵrestoreView(_r6); const selectedOption_r4 = restoredCtx.$implicit; const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.removeOption(selectedOption_r4)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const selectedOption_r4 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(selectedOption_r4.label);
} }
function DropDownWithChipsComponent_div_7_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 17);
    i0.ɵɵlistener("mousedown", function DropDownWithChipsComponent_div_7_li_2_Template_li_mousedown_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r10); const option_r8 = restoredCtx.$implicit; const ctx_r9 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r9.updateValue(option_r8)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r8 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", option_r8.label, " ");
} }
function DropDownWithChipsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14)(1, "ul", 15);
    i0.ɵɵtemplate(2, DropDownWithChipsComponent_div_7_li_2_Template, 2, 1, "li", 16);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r2.sortBy("label"));
} }
function DropDownWithChipsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r3.getText()), " ");
} }
export class DropDownWithChipsComponent extends AbstractDropdownComponent {
    languageService;
    formService;
    messageGroupDirective;
    injector;
    shouldShowDropdown = false;
    disabled = false;
    required;
    dropDownValues = [];
    selectedOptions = [];
    constructor(languageService, formService, messageGroupDirective, injector) {
        super(languageService, formService, messageGroupDirective, injector);
        this.languageService = languageService;
        this.formService = formService;
        this.messageGroupDirective = messageGroupDirective;
        this.injector = injector;
        this.dropDownValues = this.sortBy('label');
    }
    reset() {
        this.optionList = [...this.optionList, ...this.selectedOptions];
        this.selectedOptions = [];
    }
    updateValue(option) {
        this.selectedOptions.push(option);
        this.writeValues();
        this.toggle();
        this.dropDownValues = this.sortBy('label');
    }
    writeValues() {
        const selectedValues = [];
        if (this.selectedOptions !== null) {
            this.selectedOptions.forEach((option) => {
                selectedValues.push(option.value);
                this.optionList.splice(this.optionList.indexOf(option), 1);
            });
        }
        this.control.control?.setValue(selectedValues);
    }
    writeValue(value) {
        if (value === null) {
            this.reset();
        }
        this.value = value || '';
    }
    focusOut() {
        if (this.shouldShowDropdown) {
            if (this.control.control) {
                this.control.control.markAllAsTouched();
            }
            this.checkErrors();
            this.shouldShowDropdown = false;
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
    removeOption(selectedOption) {
        this.optionList.push(selectedOption);
        const optionIndex = this.selectedOptions.indexOf(selectedOption);
        this.selectedOptions.splice(optionIndex, 1);
        this.writeValues();
    }
    sortBy(prop) {
        return this.optionList.sort((a, b) => this.compareObjectProperties(a, b, prop));
    }
    compareObjectProperties(objA, objB, prop) {
        if (objA[prop] > objB[prop]) {
            return 1;
        }
        else if (objA[prop] === objB[prop]) {
            return 0;
        }
        else {
            return -1;
        }
    }
    static ɵfac = function DropDownWithChipsComponent_Factory(t) { return new (t || DropDownWithChipsComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(i2.FormErrorService), i0.ɵɵdirectiveInject(i2.MessageGroupDirective, 8), i0.ɵɵdirectiveInject(i0.Injector)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DropDownWithChipsComponent, selectors: [["tg-form-dropdown-with-chips"]], inputs: { disabled: "disabled", required: "required" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => DropDownWithChipsComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 9, vars: 5, consts: [[1, "form-group", "position--relative"], [3, "ngClass", 4, "ngIf"], [1, "ui-select-container", "ui-select-multiple", "select2", "select2-container", "select2-container-multi"], [1, "select2-choices"], [1, "ui-select-match", 3, "click"], ["class", "ui-select-match-item select2-search-choice display--flex align-items--center", 4, "ngFor", "ngForOf"], [1, "icon", "fl-right", "text--m", "text-weight--g", 3, "ngClass"], ["class", "select-dropdown__options position--absolute width--full", 4, "ngIf"], ["class", "formErrorInput Form__input__invalid-message", 4, "ngIf"], [3, "ngClass"], [3, "for"], [1, "ui-select-match-item", "select2-search-choice", "display--flex", "align-items--center"], [1, "mx--xs"], [1, "ui-select-match-close", "select2-search-choice-close", 3, "click"], [1, "select-dropdown__options", "position--absolute", "width--full"], [1, "select-dropdown__options__content", "pl--n", "m--n", "position--relative"], ["class", "select-dropdown__options__list cursor---pointer", 3, "mousedown", 4, "ngFor", "ngForOf"], [1, "select-dropdown__options__list", "cursor---pointer", 3, "mousedown"], [1, "formErrorInput", "Form__input__invalid-message"]], template: function DropDownWithChipsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, DropDownWithChipsComponent_div_1_Template, 4, 7, "div", 1);
            i0.ɵɵelementStart(2, "div", 2)(3, "ul", 3)(4, "span", 4);
            i0.ɵɵlistener("click", function DropDownWithChipsComponent_Template_span_click_4_listener() { return ctx.toggle(); });
            i0.ɵɵtemplate(5, DropDownWithChipsComponent_li_5_Template, 4, 1, "li", 5);
            i0.ɵɵelement(6, "div", 6);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(7, DropDownWithChipsComponent_div_7_Template, 3, 1, "div", 7)(8, DropDownWithChipsComponent_div_8_Template, 3, 3, "div", 8);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.customLabel);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngForOf", ctx.selectedOptions);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", ctx.shouldShowDropdown ? "icon-chevron-up" : "icon-chevron-down");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.shouldShowDropdown);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.error);
        } }, dependencies: [i3.NgClass, i3.NgForOf, i3.NgIf, i4.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DropDownWithChipsComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-dropdown-with-chips', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => DropDownWithChipsComponent),
                        multi: true,
                    },
                ], template: "<div class=\"form-group position--relative\">\n  <div *ngIf=\"customLabel\" [ngClass]=\"{ labelStyle: this.labelStyle }\">\n    <label for=\"{{ key }}\">{{ getLabel() | translate }}</label>\n  </div>\n  <div class=\"ui-select-container ui-select-multiple select2 select2-container select2-container-multi\">\n    <ul class=\"select2-choices\">\n      <span class=\"ui-select-match\" (click)=\"toggle()\">\n        <li\n          class=\"ui-select-match-item select2-search-choice display--flex align-items--center\"\n          *ngFor=\"let selectedOption of selectedOptions\">\n          <span class=\"mx--xs\">{{ selectedOption.label }}</span>\n          <a class=\"ui-select-match-close select2-search-choice-close\" (click)=\"removeOption(selectedOption)\"></a>\n        </li>\n        <div\n          class=\"icon fl-right text--m text-weight--g\"\n          [ngClass]=\"shouldShowDropdown ? 'icon-chevron-up' : 'icon-chevron-down'\"></div>\n      </span>\n    </ul>\n  </div>\n  <div *ngIf=\"shouldShowDropdown\" class=\"select-dropdown__options position--absolute width--full\">\n    <ul class=\"select-dropdown__options__content pl--n m--n position--relative\">\n      <li\n        *ngFor=\"let option of sortBy('label')\"\n        (mousedown)=\"updateValue(option)\"\n        class=\"select-dropdown__options__list cursor---pointer\">\n        {{ option.label }}\n      </li>\n    </ul>\n  </div>\n  <div class=\"formErrorInput Form__input__invalid-message\" *ngIf=\"error\">\n    {{ getText() | translate }}\n  </div>\n</div>\n" }]
    }], () => [{ type: i1.LanguageService }, { type: i2.FormErrorService }, { type: i2.MessageGroupDirective, decorators: [{
                type: Optional
            }] }, { type: i0.Injector }], { disabled: [{
            type: Input
        }], required: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DropDownWithChipsComponent, { className: "DropDownWithChipsComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l0aC1jaGlwcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29udHJvbHMvZHJvcGRvd24vd2l0aC1jaGlwcy93aXRoLWNoaXBzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9jb250cm9scy9kcm9wZG93bi93aXRoLWNoaXBzL3dpdGgtY2hpcHMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVksS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7Ozs7SUNGekUsOEJBQXFFLGdCQUFBO0lBQzVDLFlBQTRCOztJQUFBLGlCQUFRLEVBQUE7OztJQURwQyx1RUFBMkM7SUFDM0QsY0FBZTtJQUFmLDJDQUFlO0lBQUMsY0FBNEI7SUFBNUIsNkRBQTRCOzs7O0lBSy9DLDhCQUVpRCxlQUFBO0lBQzFCLFlBQTBCO0lBQUEsaUJBQU87SUFDdEQsNkJBQW9HO0lBQXZDLHNPQUFTLGVBQUEsc0NBQTRCLENBQUEsSUFBQztJQUFDLGlCQUFJLEVBQUE7OztJQURuRixlQUEwQjtJQUExQiw2Q0FBMEI7Ozs7SUFXbkQsOEJBRzBEO0lBRHhELCtPQUFhLGVBQUEsNkJBQW1CLENBQUEsSUFBQztJQUVqQyxZQUNGO0lBQUEsaUJBQUs7OztJQURILGNBQ0Y7SUFERSxnREFDRjs7O0lBUEosK0JBQWdHLGFBQUE7SUFFNUYsZ0ZBS0s7SUFDUCxpQkFBSyxFQUFBOzs7SUFMa0IsZUFBa0I7SUFBbEIsZ0RBQWtCOzs7SUFPM0MsK0JBQXVFO0lBQ3JFLFlBQ0Y7O0lBQUEsaUJBQU07OztJQURKLGNBQ0Y7SUFERSx1RUFDRjs7QURiRixNQUFNLE9B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QUMsR0FBRyxFQUFFLENBQUMsMEJBQTBCLENBQUM7b0JBQ3pELEtBQUssRUFBRSxJQUFJO2lCQUNaO2FBQ0Y7WUNoQkgsOEJBQTJDO1lBQ3pDLDJFQUVNO1lBQ04sOEJBQXNHLFlBQUEsY0FBQTtZQUVwRSxxR0FBUyxZQUFRLElBQUM7WUFDOUMseUVBS0s7WUFDTCx5QkFFaUY7WUFDbkYsaUJBQU8sRUFBQSxFQUFBO1lBR1gsMkVBU00sOERBQUE7WUFJUixpQkFBTTs7WUEvQkUsY0FBaUI7WUFBakIsc0NBQWlCO1lBUVksZUFBa0I7WUFBbEIsNkNBQWtCO1lBTTdDLGNBQXdFO1lBQXhFLDBGQUF3RTtZQUkxRSxjQUF3QjtZQUF4Qiw2Q0FBd0I7WUFVNEIsY0FBVztZQUFYLGdDQUFXOzs7aUZEWDFELDBCQUEwQjtjQVh0QyxTQUFTOzJCQUNFLDZCQUE2QixhQUU1QjtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSwyQkFBMkIsQ0FBQzt3QkFDekQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7O3NCQWFFLFFBQVE7NENBVEYsUUFBUTtrQkFBaEIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7O2tGQUhLLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5qZWN0b3IsIElucHV0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICdAdGVsZW5ldC9uZy1saWItcGFnZSc7XG5pbXBvcnQgeyBBYnN0cmFjdERyb3Bkb3duQ29tcG9uZW50IH0gZnJvbSAnLi4vYWJzdHJhY3QtZHJvcGRvd24uY29tcG9uZW50JztcbmltcG9ydCB7IElucHV0T3B0aW9uIH0gZnJvbSAnLi4vLi4vcmFkaW8nO1xuaW1wb3J0IHsgRm9ybUVycm9yU2VydmljZSwgTWVzc2FnZUdyb3VwRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vZXJyb3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGctZm9ybS1kcm9wZG93bi13aXRoLWNoaXBzJyxcbiAgdGVtcGxhdGVVcmw6ICd3aXRoLWNoaXBzLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBEcm9wRG93bldpdGhDaGlwc0NvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBEcm9wRG93bldpdGhDaGlwc0NvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0RHJvcGRvd25Db21wb25lbnQge1xuICBzaG91bGRTaG93RHJvcGRvd24gPSBmYWxzZTtcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgcmVxdWlyZWQ6IGJvb2xlYW47XG4gIGRyb3BEb3duVmFsdWVzOiBJbnB1dE9wdGlvbltdID0gW107XG5cbiAgc2VsZWN0ZWRPcHRpb25zOiBJbnB1dE9wdGlvbltdID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgIHB1YmxpYyBmb3JtU2VydmljZTogRm9ybUVycm9yU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgbWVzc2FnZUdyb3VwRGlyZWN0aXZlOiBNZXNzYWdlR3JvdXBEaXJlY3RpdmUsXG4gICAgcHVibGljIGluamVjdG9yOiBJbmplY3RvclxuICApIHtcbiAgICBzdXBlcihsYW5ndWFnZVNlcnZpY2UsIGZvcm1TZXJ2aWNlLCBtZXNzYWdlR3JvdXBEaXJlY3RpdmUsIGluamVjdG9yKTtcbiAgICB0aGlzLmRyb3BEb3duVmFsdWVzID0gdGhpcy5zb3J0QnkoJ2xhYmVsJyk7XG4gIH1cblxuICByZXNldCgpOiB2b2lkIHtcbiAgICB0aGlzLm9wdGlvbkxpc3QgPSBbLi4udGhpcy5vcHRpb25MaXN0LCAuLi50aGlzLnNlbGVjdGVkT3B0aW9uc107XG4gICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBbXTtcbiAgfVxuXG4gIHVwZGF0ZVZhbHVlKG9wdGlvbjogSW5wdXRPcHRpb24pOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucy5wdXNoKG9wdGlvbik7XG4gICAgdGhpcy53cml0ZVZhbHVlcygpO1xuICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgdGhpcy5kcm9wRG93blZhbHVlcyA9IHRoaXMuc29ydEJ5KCdsYWJlbCcpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZXMoKTogdm9pZCB7XG4gICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZXM6IHN0cmluZ1tdID0gW107XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRPcHRpb25zICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgc2VsZWN0ZWRWYWx1ZXMucHVzaChvcHRpb24udmFsdWUpO1xuICAgICAgICB0aGlzLm9wdGlvbkxpc3Quc3BsaWNlKHRoaXMub3B0aW9uTGlzdC5pbmRleE9mKG9wdGlvbiksIDEpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuY29udHJvbC5jb250cm9sPy5zZXRWYWx1ZShzZWxlY3RlZFZhbHVlcyk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcgfCBudWxsKTogdm9pZCB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZSB8fCAnJztcbiAgfVxuXG4gIGZvY3VzT3V0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNob3VsZFNob3dEcm9wZG93bikge1xuICAgICAgaWYgKHRoaXMuY29udHJvbC5jb250cm9sKSB7XG4gICAgICAgIHRoaXMuY29udHJvbC5jb250cm9sLm1hcmtBbGxBc1RvdWNoZWQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2hlY2tFcnJvcnMoKTtcbiAgICAgIHRoaXMuc2hvdWxkU2hvd0Ryb3Bkb3duID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlKCk6IHZvaWQge1xuICAgIHRoaXMuc2hvdWxkU2hvd0Ryb3Bkb3duID0gIXRoaXMuc2hvdWxkU2hvd0Ryb3Bkb3duO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0Vycm9ycygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb250cm9sLmNvbnRyb2wgJiYgdGhpcy5jb250cm9sLmNvbnRyb2wuZXJyb3JzKSB7XG4gICAgICB0aGlzLmVycm9yID0gT2JqZWN0LmtleXModGhpcy5jb250cm9sLmNvbnRyb2wuZXJyb3JzKVswXTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVPcHRpb24oc2VsZWN0ZWRPcHRpb246IElucHV0T3B0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vcHRpb25MaXN0LnB1c2goc2VsZWN0ZWRPcHRpb24pO1xuICAgIGNvbnN0IG9wdGlvbkluZGV4ID0gdGhpcy5zZWxlY3RlZE9wdGlvbnMuaW5kZXhPZihzZWxlY3RlZE9wdGlvbik7XG4gICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMuc3BsaWNlKG9wdGlvbkluZGV4LCAxKTtcbiAgICB0aGlzLndyaXRlVmFsdWVzKCk7XG4gIH1cblxuICBzb3J0QnkocHJvcDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9uTGlzdC5zb3J0KChhLCBiKSA9PiB0aGlzLmNvbXBhcmVPYmplY3RQcm9wZXJ0aWVzKGEsIGIsIHByb3AgYXMga2V5b2YgSW5wdXRPcHRpb24pKTtcbiAgfVxuXG4gIGNvbXBhcmVPYmplY3RQcm9wZXJ0aWVzKG9iakE6IElucHV0T3B0aW9uLCBvYmpCOiBJbnB1dE9wdGlvbiwgcHJvcDoga2V5b2YgSW5wdXRPcHRpb24pIHtcbiAgICBpZiAob2JqQVtwcm9wXSA+IG9iakJbcHJvcF0pIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAob2JqQVtwcm9wXSA9PT0gb2JqQltwcm9wXSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHBvc2l0aW9uLS1yZWxhdGl2ZVwiPlxuICA8ZGl2ICpuZ0lmPVwiY3VzdG9tTGFiZWxcIiBbbmdDbGFzc109XCJ7IGxhYmVsU3R5bGU6IHRoaXMubGFiZWxTdHlsZSB9XCI+XG4gICAgPGxhYmVsIGZvcj1cInt7IGtleSB9fVwiPnt7IGdldExhYmVsKCkgfCB0cmFuc2xhdGUgfX08L2xhYmVsPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInVpLXNlbGVjdC1jb250YWluZXIgdWktc2VsZWN0LW11bHRpcGxlIHNlbGVjdDIgc2VsZWN0Mi1jb250YWluZXIgc2VsZWN0Mi1jb250YWluZXItbXVsdGlcIj5cbiAgICA8dWwgY2xhc3M9XCJzZWxlY3QyLWNob2ljZXNcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwidWktc2VsZWN0LW1hdGNoXCIgKGNsaWNrKT1cInRvZ2dsZSgpXCI+XG4gICAgICAgIDxsaVxuICAgICAgICAgIGNsYXNzPVwidWktc2VsZWN0LW1hdGNoLWl0ZW0gc2VsZWN0Mi1zZWFyY2gtY2hvaWNlIGRpc3BsYXktLWZsZXggYWxpZ24taXRlbXMtLWNlbnRlclwiXG4gICAgICAgICAgKm5nRm9yPVwibGV0IHNlbGVjdGVkT3B0aW9uIG9mIHNlbGVjdGVkT3B0aW9uc1wiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibXgtLXhzXCI+e3sgc2VsZWN0ZWRPcHRpb24ubGFiZWwgfX08L3NwYW4+XG4gICAgICAgICAgPGEgY2xhc3M9XCJ1aS1zZWxlY3QtbWF0Y2gtY2xvc2Ugc2VsZWN0Mi1zZWFyY2gtY2hvaWNlLWNsb3NlXCIgKGNsaWNrKT1cInJlbW92ZU9wdGlvbihzZWxlY3RlZE9wdGlvbilcIj48L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cImljb24gZmwtcmlnaHQgdGV4dC0tbSB0ZXh0LXdlaWdodC0tZ1wiXG4gICAgICAgICAgW25nQ2xhc3NdPVwic2hvdWxkU2hvd0Ryb3Bkb3duID8gJ2ljb24tY2hldnJvbi11cCcgOiAnaWNvbi1jaGV2cm9uLWRvd24nXCI+PC9kaXY+XG4gICAgICA8L3NwYW4+XG4gICAgPC91bD5cbiAgPC9kaXY+XG4gIDxkaXYgKm5nSWY9XCJzaG91bGRTaG93RHJvcGRvd25cIiBjbGFzcz1cInNlbGVjdC1kcm9wZG93bl9fb3B0aW9ucyBwb3NpdGlvbi0tYWJzb2x1dGUgd2lkdGgtLWZ1bGxcIj5cbiAgICA8dWwgY2xhc3M9XCJzZWxlY3QtZHJvcGRvd25fX29wdGlvbnNfX2NvbnRlbnQgcGwtLW4gbS0tbiBwb3NpdGlvbi0tcmVsYXRpdmVcIj5cbiAgICAgIDxsaVxuICAgICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIHNvcnRCeSgnbGFiZWwnKVwiXG4gICAgICAgIChtb3VzZWRvd24pPVwidXBkYXRlVmFsdWUob3B0aW9uKVwiXG4gICAgICAgIGNsYXNzPVwic2VsZWN0LWRyb3Bkb3duX19vcHRpb25zX19saXN0IGN1cnNvci0tLXBvaW50ZXJcIj5cbiAgICAgICAge3sgb3B0aW9uLmxhYmVsIH19XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZm9ybUVycm9ySW5wdXQgRm9ybV9faW5wdXRfX2ludmFsaWQtbWVzc2FnZVwiICpuZ0lmPVwiZXJyb3JcIj5cbiAgICB7eyBnZXRUZXh0KCkgfCB0cmFuc2xhdGUgfX1cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==