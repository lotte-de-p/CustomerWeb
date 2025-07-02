import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractRadioComponent } from '../abstract-radio.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../../directives/whitespace/whitespace.directive";
import * as i3 from "@ngx-translate/core";
function InputRadioDefaultComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 1)(2, "div", 2)(3, "input", 3);
    i0.ɵɵlistener("click", function InputRadioDefaultComponent_ng_container_0_Template_input_click_3_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const option_r1 = restoredCtx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.selectOption(option_r1)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "label", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "label", 5);
    i0.ɵɵlistener("click", function InputRadioDefaultComponent_ng_container_0_Template_label_click_5_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const option_r1 = restoredCtx.$implicit; const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.selectOption(option_r1)); });
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(7, "div", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate2("id", "form-input-radio-", i_r2, "-", ctx_r0.key, "")("name", "radio-group-name-", i_r2, "-", ctx_r0.key, "");
    i0.ɵɵproperty("checked", ctx_r0.selectedOption && option_r1.value === ctx_r0.selectedOption.value);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate2("for", "form-input-radio-", i_r2, "-", ctx_r0.key, "");
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate2("for", "form-input-radio-", i_r2, "-", ctx_r0.key, "");
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(6, 11, ctx_r0.getOptionLabel(option_r1)), i0.ɵɵsanitizeHtml);
    i0.ɵɵattribute("data-cy", ctx_r0.messageGroup + "." + ctx_r0.key + ".option." + option_r1.value);
} }
export class InputRadioDefaultComponent extends AbstractRadioComponent {
    static ɵfac = /*@__PURE__*/ (() => { let ɵInputRadioDefaultComponent_BaseFactory; return function InputRadioDefaultComponent_Factory(t) { return (ɵInputRadioDefaultComponent_BaseFactory || (ɵInputRadioDefaultComponent_BaseFactory = i0.ɵɵgetInheritedFactory(InputRadioDefaultComponent)))(t || InputRadioDefaultComponent); }; })();
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputRadioDefaultComponent, selectors: [["tg-form-radio-default"]], features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputRadioDefaultComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [1, "radio-checkbox"], [1, "radio", "form__radio", 2, "--animation-delay", "i"], ["type", "radio", 1, "form__radio__input", 3, "checked", "id", "name", "click"], [1, "form__radio__label", 3, "for"], [1, "label--large", 3, "innerHTML", "for", "click"], ["tgWhitespace", "tiny"]], template: function InputRadioDefaultComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, InputRadioDefaultComponent_ng_container_0_Template, 8, 13, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngForOf", ctx.optionList);
        } }, dependencies: [i1.NgForOf, i2.WhitespaceDirective, i3.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputRadioDefaultComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-radio-default', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputRadioDefaultComponent),
                        multi: true,
                    },
                ], template: "<ng-container *ngFor=\"let option of optionList; let i = index\">\n  <div class=\"radio-checkbox\">\n    <div class=\"radio form__radio\" style=\"--animation-delay: i\">\n      <input\n        (click)=\"selectOption(option)\"\n        [checked]=\"selectedOption && option.value === selectedOption.value\"\n        class=\"form__radio__input\"\n        id=\"form-input-radio-{{ i }}-{{ key }}\"\n        name=\"radio-group-name-{{ i }}-{{ key }}\"\n        type=\"radio\" />\n      <label class=\"form__radio__label\" for=\"form-input-radio-{{ i }}-{{ key }}\"></label>\n    </div>\n    <label\n      (click)=\"selectOption(option)\"\n      [innerHTML]=\"getOptionLabel(option) | translate\"\n      class=\"label--large\"\n      [attr.data-cy]=\"messageGroup + '.' + key + '.option.' + option.value\"\n      for=\"form-input-radio-{{ i }}-{{ key }}\">\n    </label>\n  </div>\n  <div tgWhitespace=\"tiny\"></div>\n</ng-container>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputRadioDefaultComponent, { className: "InputRadioDefaultComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xzL3JhZGlvLWNoZWNrYm94L3JhZGlvL2RlZmF1bHQvcmFkaW8uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xzL3JhZGlvLWNoZWNrYm94L3JhZGlvL2RlZmF1bHQvcmFkaW8uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7SUNGckUsNkJBQStEO0lBQzdELDhCQUE0QixhQUFBLGVBQUE7SUFHdEIsNE9BQVMsZUFBQSw4QkFBb0IsQ0FBQSxJQUFDO0lBRGhDLGlCQU1pQjtJQUNqQiwyQkFBbUY7SUFDckYsaUJBQU07SUFDTixnQ0FLMkM7SUFKekMsNE9BQVMsZUFBQSw4QkFBb0IsQ0FBQSxJQUFDOztJQUtoQyxpQkFBUSxFQUFBO0lBRVYseUJBQStCO0lBQ2pDLDBCQUFlOzs7OztJQWRQLGVBQXVDO0lBQXZDLCtFQUF1Qyx3REFBQTtJQUZ2QyxrR0FBbUU7SUFLbkMsY0FBd0M7SUFBeEMsZ0ZBQXdDO0lBTzFFLGNBQXdDO0lBQXhDLGdGQUF3QztJQUh4QyxzR0FBZ0Q7SUFFaEQsZ0dBQXFFOztBREQzRSxNQUFNLE9BQU8sMEJBQTJCLFNBQVEsc0JBQXNCO3FRQUF6RCwwQkFBMEIsU0FBMUIsMEJBQTBCOzZEQUExQiwwQkFBMEIsMkVBUjFCO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsMEJBQTBCLENBQUM7b0JBQ3pELEtBQUssRUFBRSxJQUFJO2lCQUNaO2FBQ0Y7WUNiSCw4RkFxQmU7O1lBckJrQix3Q0FBZTs7O2lGRGVuQywwQkFBMEI7Y0FYdEMsU0FBUzsyQkFDRSx1QkFBdUIsYUFFdEI7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsMkJBQTJCLENBQUM7d0JBQ3pELEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGOztrRkFFVSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQWJzdHJhY3RSYWRpb0NvbXBvbmVudCB9IGZyb20gJy4uL2Fic3RyYWN0LXJhZGlvLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RnLWZvcm0tcmFkaW8tZGVmYXVsdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9yYWRpby5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gSW5wdXRSYWRpb0RlZmF1bHRDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRSYWRpb0RlZmF1bHRDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdFJhZGlvQ29tcG9uZW50IHt9XG4iLCI8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBvcHRpb24gb2Ygb3B0aW9uTGlzdDsgbGV0IGkgPSBpbmRleFwiPlxuICA8ZGl2IGNsYXNzPVwicmFkaW8tY2hlY2tib3hcIj5cbiAgICA8ZGl2IGNsYXNzPVwicmFkaW8gZm9ybV9fcmFkaW9cIiBzdHlsZT1cIi0tYW5pbWF0aW9uLWRlbGF5OiBpXCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgKGNsaWNrKT1cInNlbGVjdE9wdGlvbihvcHRpb24pXCJcbiAgICAgICAgW2NoZWNrZWRdPVwic2VsZWN0ZWRPcHRpb24gJiYgb3B0aW9uLnZhbHVlID09PSBzZWxlY3RlZE9wdGlvbi52YWx1ZVwiXG4gICAgICAgIGNsYXNzPVwiZm9ybV9fcmFkaW9fX2lucHV0XCJcbiAgICAgICAgaWQ9XCJmb3JtLWlucHV0LXJhZGlvLXt7IGkgfX0te3sga2V5IH19XCJcbiAgICAgICAgbmFtZT1cInJhZGlvLWdyb3VwLW5hbWUte3sgaSB9fS17eyBrZXkgfX1cIlxuICAgICAgICB0eXBlPVwicmFkaW9cIiAvPlxuICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybV9fcmFkaW9fX2xhYmVsXCIgZm9yPVwiZm9ybS1pbnB1dC1yYWRpby17eyBpIH19LXt7IGtleSB9fVwiPjwvbGFiZWw+XG4gICAgPC9kaXY+XG4gICAgPGxhYmVsXG4gICAgICAoY2xpY2spPVwic2VsZWN0T3B0aW9uKG9wdGlvbilcIlxuICAgICAgW2lubmVySFRNTF09XCJnZXRPcHRpb25MYWJlbChvcHRpb24pIHwgdHJhbnNsYXRlXCJcbiAgICAgIGNsYXNzPVwibGFiZWwtLWxhcmdlXCJcbiAgICAgIFthdHRyLmRhdGEtY3ldPVwibWVzc2FnZUdyb3VwICsgJy4nICsga2V5ICsgJy5vcHRpb24uJyArIG9wdGlvbi52YWx1ZVwiXG4gICAgICBmb3I9XCJmb3JtLWlucHV0LXJhZGlvLXt7IGkgfX0te3sga2V5IH19XCI+XG4gICAgPC9sYWJlbD5cbiAgPC9kaXY+XG4gIDxkaXYgdGdXaGl0ZXNwYWNlPVwidGlueVwiPjwvZGl2PlxuPC9uZy1jb250YWluZXI+XG4iXX0=