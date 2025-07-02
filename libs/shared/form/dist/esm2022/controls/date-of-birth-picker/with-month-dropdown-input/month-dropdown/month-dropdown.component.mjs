import { Component, forwardRef, Input, Optional } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DropdownWithInputComponent } from '../../../dropdown';
import * as i0 from "@angular/core";
import * as i1 from "@telenet/ng-lib-page";
import * as i2 from "../../../../errors";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
import * as i5 from "@ngx-translate/core";
function MonthDropdownComponent_div_7_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 11);
    i0.ɵɵlistener("mousedown", function MonthDropdownComponent_div_7_li_2_Template_li_mousedown_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const option_r3 = restoredCtx.$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.selectOptionValue(option_r3)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", option_r3.label, " ");
} }
function MonthDropdownComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8)(1, "ul", 9);
    i0.ɵɵtemplate(2, MonthDropdownComponent_div_7_li_2_Template, 2, 1, "li", 10);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.optionList);
} }
function MonthDropdownComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "ng.dob.error-month-required"), " ");
} }
export class MonthDropdownComponent extends DropdownWithInputComponent {
    languageService;
    formService;
    messageGroupDirective;
    injector;
    month;
    optionLabel = '';
    constructor(languageService, formService, messageGroupDirective, injector) {
        super(languageService, formService, messageGroupDirective, injector);
        this.languageService = languageService;
        this.formService = formService;
        this.messageGroupDirective = messageGroupDirective;
        this.injector = injector;
    }
    ngOnInit() {
        super.ngOnInit();
    }
    ngOnChanges(changes) {
        if (changes['month'] && changes['month'].currentValue !== changes['month'].previousValue) {
            const defaultInputOption = this.optionList.find((option) => Number(option.value) === this.month);
            this.optionLabel = defaultInputOption ? defaultInputOption.label : '';
        }
    }
    selectOptionValue(option) {
        this.optionLabel = option.label;
        this.updateValue(option);
    }
    static ɵfac = function MonthDropdownComponent_Factory(t) { return new (t || MonthDropdownComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(i2.FormErrorService), i0.ɵɵdirectiveInject(i2.MessageGroupDirective, 8), i0.ɵɵdirectiveInject(i0.Injector)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MonthDropdownComponent, selectors: [["app-month-dropdown"]], inputs: { month: "month" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => MonthDropdownComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 9, vars: 13, consts: [[1, "form-group", "position--relative"], [1, "select-dropdown-section", "default"], [1, "form-control", "select-dropdown", "p--n"], ["type", "hidden", "readonly", "", 3, "ngModel", "ngModelChange"], ["type", "text", "readonly", "", "required", "", 1, "Form__input", "form-control", "cursor--pointer", 3, "id", "name", "value", "disabled", "placeholder", "focusout", "click"], [1, "icon", "position--absolute", "text--m", "text-weight--g", 3, "ngClass"], ["class", "select-dropdown__options position--absolute width--full", 4, "ngIf"], ["class", "formErrorInput Form__input__invalid-message", 4, "ngIf"], [1, "select-dropdown__options", "position--absolute", "width--full"], [1, "select-dropdown__options__content", "pl--n", "m--n", "position--relative"], ["class", "select-dropdown__options__list cursor---pointer", 3, "mousedown", 4, "ngFor", "ngForOf"], [1, "select-dropdown__options__list", "cursor---pointer", 3, "mousedown"], [1, "formErrorInput", "Form__input__invalid-message"]], template: function MonthDropdownComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "input", 3);
            i0.ɵɵlistener("ngModelChange", function MonthDropdownComponent_Template_input_ngModelChange_3_listener($event) { return ctx.value = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "input", 4);
            i0.ɵɵlistener("focusout", function MonthDropdownComponent_Template_input_focusout_4_listener() { return ctx.focusOut(); })("click", function MonthDropdownComponent_Template_input_click_4_listener() { return ctx.toggle(); });
            i0.ɵɵpipe(5, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(6, "div", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(7, MonthDropdownComponent_div_7_Template, 3, 1, "div", 6)(8, MonthDropdownComponent_div_8_Template, 3, 3, "div", 7);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngModel", ctx.value);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("ng-invalid-custom", ctx.error);
            i0.ɵɵpropertyInterpolate("id", ctx.key);
            i0.ɵɵpropertyInterpolate("name", ctx.key);
            i0.ɵɵproperty("value", ctx.optionLabel)("disabled", ctx.disabled)("placeholder", ctx.showPlaceHolder ? i0.ɵɵpipeBind1(5, 11, "ng.dob.lbl.select-month-placeholder") : "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", ctx.shouldShowDropdown ? "icon-chevron-up" : "icon-chevron-down");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.shouldShowDropdown);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.error);
        } }, dependencies: [i3.NgClass, i3.NgForOf, i3.NgIf, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i5.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MonthDropdownComponent, [{
        type: Component,
        args: [{ selector: 'app-month-dropdown', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => MonthDropdownComponent),
                        multi: true,
                    },
                ], template: "<div class=\"form-group position--relative\">\n  <div class=\"select-dropdown-section default\">\n    <div class=\"form-control select-dropdown p--n\">\n      <input type=\"hidden\" readonly [(ngModel)]=\"value\" />\n      <input\n        id=\"{{ key }}\"\n        type=\"text\"\n        class=\"Form__input form-control cursor--pointer\"\n        name=\"{{ key }}\"\n        [value]=\"optionLabel\"\n        [disabled]=\"disabled\"\n        [placeholder]=\"showPlaceHolder ? ('ng.dob.lbl.select-month-placeholder' | translate) : ''\"\n        [class.ng-invalid-custom]=\"error\"\n        (focusout)=\"focusOut()\"\n        (click)=\"toggle()\"\n        readonly\n        required />\n      <div\n        class=\"icon position--absolute text--m text-weight--g\"\n        [ngClass]=\"shouldShowDropdown ? 'icon-chevron-up' : 'icon-chevron-down'\"></div>\n    </div>\n  </div>\n  <div *ngIf=\"shouldShowDropdown\" class=\"select-dropdown__options position--absolute width--full\">\n    <ul class=\"select-dropdown__options__content pl--n m--n position--relative\">\n      <li\n        *ngFor=\"let option of optionList\"\n        (mousedown)=\"selectOptionValue(option)\"\n        class=\"select-dropdown__options__list cursor---pointer\">\n        {{ option.label }}\n      </li>\n    </ul>\n  </div>\n  <div class=\"formErrorInput Form__input__invalid-message\" *ngIf=\"error\">\n    {{ 'ng.dob.error-month-required' | translate }}\n  </div>\n</div>\n" }]
    }], () => [{ type: i1.LanguageService }, { type: i2.FormErrorService }, { type: i2.MessageGroupDirective, decorators: [{
                type: Optional
            }] }, { type: i0.Injector }], { month: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MonthDropdownComponent, { className: "MonthDropdownComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xzL2RhdGUtb2YtYmlydGgtcGlja2VyL3dpdGgtbW9udGgtZHJvcGRvd24taW5wdXQvbW9udGgtZHJvcGRvd24vbW9udGgtZHJvcGRvd24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xzL2RhdGUtb2YtYmlydGgtcGlja2VyL3dpdGgtbW9udGgtZHJvcGRvd24taW5wdXQvbW9udGgtZHJvcGRvd24vbW9udGgtZHJvcGRvd24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVksS0FBSyxFQUFxQixRQUFRLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ25ILE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7Ozs7SUNxQnpELDhCQUcwRDtJQUR4RCwwT0FBYSxlQUFBLG1DQUF5QixDQUFBLElBQUM7SUFFdkMsWUFDRjtJQUFBLGlCQUFLOzs7SUFESCxjQUNGO0lBREUsZ0RBQ0Y7OztJQVBKLDhCQUFnRyxZQUFBO0lBRTVGLDRFQUtLO0lBQ1AsaUJBQUssRUFBQTs7O0lBTGtCLGVBQWE7SUFBYiwyQ0FBYTs7O0lBT3RDLCtCQUF1RTtJQUNyRSxZQUNGOztJQUFBLGlCQUFNOztJQURKLGNBQ0Y7SUFERSxvRkFDRjs7QURoQkYsTUFBTSxPQUFPLHNCQUF1QixTQUFRLDBCQUEwQjtJQUszRDtJQUNBO0lBQ1k7SUFDWjtJQVBBLEtBQUssQ0FBUztJQUN2QixXQUFXLEdBQUcsRUFBRSxDQUFDO0lBRWpCLFlBQ1MsZUFBZ0MsRUFDaEMsV0FBNkIsRUFDakIscUJBQTRDLEVBQ3hELFFBQWtCO1FBRXpCLEtBQUssQ0FBQyxlQUFlLEVBQUUsV0FBVyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBTDlELG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFDakIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUN4RCxhQUFRLEdBQVIsUUFBUSxDQUFVO0lBRzNCLENBQUM7SUFFRCxRQUFRO1FBQ04sS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksS0FBSyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDekYsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakcsSUFBSSxDQUFDLFdBQVcsR0FBRyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDeEUsQ0FBQztJQUNILENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxNQUFtQjtRQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQixDQUFDO2dGQTNCVSxzQkFBc0I7NkRBQXRCLHNCQUFzQixvR0FSdEI7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztvQkFDckQsS0FBSyxFQUFFLElBQUk7aUJBQ1o7YUFDRjtZQ2hCSCw4QkFBMkMsYUFBQSxhQUFBLGVBQUE7WUFHUCw4SUFBbUI7WUFBakQsaUJBQW9EO1lBQ3BELGdDQVlhO1lBSFgsd0dBQVksY0FBVSxJQUFDLHFGQUNkLFlBQVEsSUFETTs7WUFUekIsaUJBWWE7WUFDYix5QkFFaUY7WUFDbkYsaUJBQU0sRUFBQTtZQUVSLHVFQVNNLDBEQUFBO1lBSVIsaUJBQU07O1lBaEM4QixlQUFtQjtZQUFuQixtQ0FBbUI7WUFTL0MsY0FBaUM7WUFBakMsOENBQWlDO1lBUGpDLHVDQUFjO1lBR2QseUNBQWdCO1lBQ2hCLHVDQUFxQiwwQkFBQSx3R0FBQTtZQVVyQixlQUF3RTtZQUF4RSwwRkFBd0U7WUFHeEUsY0FBd0I7WUFBeEIsNkNBQXdCO1lBVTRCLGNBQVc7WUFBWCxnQ0FBVzs7O2lGRGQxRCxzQkFBc0I7Y0FYbEMsU0FBUzsyQkFDRSxvQkFBb0IsYUFFbkI7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsdUJBQXVCLENBQUM7d0JBQ3JELEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGOztzQkFTRSxRQUFROzRDQU5GLEtBQUs7a0JBQWIsS0FBSzs7a0ZBREssc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbmplY3RvciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPcHRpb25hbCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICdAdGVsZW5ldC9uZy1saWItcGFnZSc7XG5pbXBvcnQgeyBEcm9wZG93bldpdGhJbnB1dENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2Ryb3Bkb3duJztcbmltcG9ydCB7IEZvcm1FcnJvclNlcnZpY2UsIE1lc3NhZ2VHcm91cERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2Vycm9ycyc7XG5pbXBvcnQgeyBJbnB1dE9wdGlvbiB9IGZyb20gJy4uLy4uLy4uL3JhZGlvJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLW1vbnRoLWRyb3Bkb3duJyxcbiAgdGVtcGxhdGVVcmw6ICdtb250aC1kcm9wZG93bi5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTW9udGhEcm9wZG93bkNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBNb250aERyb3Bkb3duQ29tcG9uZW50IGV4dGVuZHMgRHJvcGRvd25XaXRoSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIG1vbnRoOiBudW1iZXI7XG4gIG9wdGlvbkxhYmVsID0gJyc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgIHB1YmxpYyBmb3JtU2VydmljZTogRm9ybUVycm9yU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgbWVzc2FnZUdyb3VwRGlyZWN0aXZlOiBNZXNzYWdlR3JvdXBEaXJlY3RpdmUsXG4gICAgcHVibGljIGluamVjdG9yOiBJbmplY3RvclxuICApIHtcbiAgICBzdXBlcihsYW5ndWFnZVNlcnZpY2UsIGZvcm1TZXJ2aWNlLCBtZXNzYWdlR3JvdXBEaXJlY3RpdmUsIGluamVjdG9yKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXNbJ21vbnRoJ10gJiYgY2hhbmdlc1snbW9udGgnXS5jdXJyZW50VmFsdWUgIT09IGNoYW5nZXNbJ21vbnRoJ10ucHJldmlvdXNWYWx1ZSkge1xuICAgICAgY29uc3QgZGVmYXVsdElucHV0T3B0aW9uID0gdGhpcy5vcHRpb25MaXN0LmZpbmQoKG9wdGlvbikgPT4gTnVtYmVyKG9wdGlvbi52YWx1ZSkgPT09IHRoaXMubW9udGgpO1xuICAgICAgdGhpcy5vcHRpb25MYWJlbCA9IGRlZmF1bHRJbnB1dE9wdGlvbiA/IGRlZmF1bHRJbnB1dE9wdGlvbi5sYWJlbCA6ICcnO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdE9wdGlvblZhbHVlKG9wdGlvbjogSW5wdXRPcHRpb24pIHtcbiAgICB0aGlzLm9wdGlvbkxhYmVsID0gb3B0aW9uLmxhYmVsO1xuICAgIHRoaXMudXBkYXRlVmFsdWUob3B0aW9uKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcG9zaXRpb24tLXJlbGF0aXZlXCI+XG4gIDxkaXYgY2xhc3M9XCJzZWxlY3QtZHJvcGRvd24tc2VjdGlvbiBkZWZhdWx0XCI+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tY29udHJvbCBzZWxlY3QtZHJvcGRvd24gcC0tblwiPlxuICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiByZWFkb25seSBbKG5nTW9kZWwpXT1cInZhbHVlXCIgLz5cbiAgICAgIDxpbnB1dFxuICAgICAgICBpZD1cInt7IGtleSB9fVwiXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgY2xhc3M9XCJGb3JtX19pbnB1dCBmb3JtLWNvbnRyb2wgY3Vyc29yLS1wb2ludGVyXCJcbiAgICAgICAgbmFtZT1cInt7IGtleSB9fVwiXG4gICAgICAgIFt2YWx1ZV09XCJvcHRpb25MYWJlbFwiXG4gICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJzaG93UGxhY2VIb2xkZXIgPyAoJ25nLmRvYi5sYmwuc2VsZWN0LW1vbnRoLXBsYWNlaG9sZGVyJyB8IHRyYW5zbGF0ZSkgOiAnJ1wiXG4gICAgICAgIFtjbGFzcy5uZy1pbnZhbGlkLWN1c3RvbV09XCJlcnJvclwiXG4gICAgICAgIChmb2N1c291dCk9XCJmb2N1c091dCgpXCJcbiAgICAgICAgKGNsaWNrKT1cInRvZ2dsZSgpXCJcbiAgICAgICAgcmVhZG9ubHlcbiAgICAgICAgcmVxdWlyZWQgLz5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJpY29uIHBvc2l0aW9uLS1hYnNvbHV0ZSB0ZXh0LS1tIHRleHQtd2VpZ2h0LS1nXCJcbiAgICAgICAgW25nQ2xhc3NdPVwic2hvdWxkU2hvd0Ryb3Bkb3duID8gJ2ljb24tY2hldnJvbi11cCcgOiAnaWNvbi1jaGV2cm9uLWRvd24nXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2ICpuZ0lmPVwic2hvdWxkU2hvd0Ryb3Bkb3duXCIgY2xhc3M9XCJzZWxlY3QtZHJvcGRvd25fX29wdGlvbnMgcG9zaXRpb24tLWFic29sdXRlIHdpZHRoLS1mdWxsXCI+XG4gICAgPHVsIGNsYXNzPVwic2VsZWN0LWRyb3Bkb3duX19vcHRpb25zX19jb250ZW50IHBsLS1uIG0tLW4gcG9zaXRpb24tLXJlbGF0aXZlXCI+XG4gICAgICA8bGlcbiAgICAgICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBvcHRpb25MaXN0XCJcbiAgICAgICAgKG1vdXNlZG93bik9XCJzZWxlY3RPcHRpb25WYWx1ZShvcHRpb24pXCJcbiAgICAgICAgY2xhc3M9XCJzZWxlY3QtZHJvcGRvd25fX29wdGlvbnNfX2xpc3QgY3Vyc29yLS0tcG9pbnRlclwiPlxuICAgICAgICB7eyBvcHRpb24ubGFiZWwgfX1cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJmb3JtRXJyb3JJbnB1dCBGb3JtX19pbnB1dF9faW52YWxpZC1tZXNzYWdlXCIgKm5nSWY9XCJlcnJvclwiPlxuICAgIHt7ICduZy5kb2IuZXJyb3ItbW9udGgtcmVxdWlyZWQnIHwgdHJhbnNsYXRlIH19XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=