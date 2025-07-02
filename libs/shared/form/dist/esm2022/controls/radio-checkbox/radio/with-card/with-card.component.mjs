import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractRadioComponent } from '../abstract-radio.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-inline-svg-2";
import * as i3 from "@ngx-translate/core";
function InputRadioWithCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3)(1, "span", 4);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 1, ctx_r0.getText()));
} }
function InputRadioWithCardComponent_div_2_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 18);
    i0.ɵɵpipe(1, "translate");
} if (rf & 2) {
    const option_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, ctx_r4.getOptionText(option_r2)), i0.ɵɵsanitizeHtml);
} }
function InputRadioWithCardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelement(1, "input", 6);
    i0.ɵɵelementStart(2, "div", 7)(3, "div", 8)(4, "div", 9)(5, "label", 10);
    i0.ɵɵlistener("click", function InputRadioWithCardComponent_div_2_Template_label_click_5_listener() { const restoredCtx = i0.ɵɵrestoreView(_r7); const option_r2 = restoredCtx.$implicit; const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.selectOption(option_r2)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 11);
    i0.ɵɵelement(7, "i", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(8, "div", 13);
    i0.ɵɵelementStart(9, "div", 14);
    i0.ɵɵelement(10, "div", 15);
    i0.ɵɵpipe(11, "translate");
    i0.ɵɵtemplate(12, InputRadioWithCardComponent_div_2_div_12_Template, 2, 3, "div", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(13, "div", 17);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleMap("--animation-delay:" + i_r3);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate2("id", "choice-", i_r3, "-", ctx_r1.key, "");
    i0.ɵɵpropertyInterpolate1("name", "choice-", ctx_r1.key, "");
    i0.ɵɵpropertyInterpolate("value", option_r2.value);
    i0.ɵɵproperty("checked", ctx_r1.selectedOption && option_r2.value === ctx_r1.selectedOption.value);
    i0.ɵɵadvance(4);
    i0.ɵɵpropertyInterpolate2("for", "choice-", i_r3, "-", ctx_r1.key, "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("inlineSVG", option_r2.imagePath);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(11, 13, ctx_r1.getOptionLabel(option_r2)), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.customOptionExplanationText);
} }
export class InputRadioWithCardComponent extends AbstractRadioComponent {
    optionList = [];
    multipleSelectable = false;
    small = false;
    static ɵfac = /*@__PURE__*/ (() => { let ɵInputRadioWithCardComponent_BaseFactory; return function InputRadioWithCardComponent_Factory(t) { return (ɵInputRadioWithCardComponent_BaseFactory || (ɵInputRadioWithCardComponent_BaseFactory = i0.ɵɵgetInheritedFactory(InputRadioWithCardComponent)))(t || InputRadioWithCardComponent); }; })();
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputRadioWithCardComponent, selectors: [["tg-form-radio-with-card"]], inputs: { optionList: "optionList", multipleSelectable: "multipleSelectable", small: "small" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputRadioWithCardComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 4, consts: [["class", "notification notification--errorfield", 4, "ngIf"], [1, "label-modifier-box", "card-square", "flex-direction--column", "flex-direction--row--sm"], ["class", "animation-show-slide-up mr--default--sm", 3, "style", 4, "ngFor", "ngForOf"], [1, "notification", "notification--errorfield"], [1, "icon", "icon-error-shape", "errorfield"], [1, "animation-show-slide-up", "mr--default--sm"], ["type", "radio", 1, "label-modifier-radio", 3, "checked", "id", "name", "value"], [1, "label-modifier--append", "label-modifier--container", "cursor--pointer"], [1, "label-modifier--body"], [1, "label-modifier--body--inner-container"], [1, "label-modifier-radio__label", 3, "for", "click"], [1, "label-modifier-content__header"], [1, "icon", "icon-tick"], [1, "label-modifier-content__image", "hide-until-sm", 3, "inlineSVG"], [1, "label-modifier-content__body"], [1, "text-flow", "text-flow--button", "label-modifier-content__body-label", 3, "innerHTML"], ["class", "text-align--left text-align--center--sm", 3, "innerHTML", 4, "ngIf"], [1, "label-modifier-content__timing"], [1, "text-align--left", "text-align--center--sm", 3, "innerHTML"]], template: function InputRadioWithCardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, InputRadioWithCardComponent_div_0_Template, 4, 3, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵtemplate(2, InputRadioWithCardComponent_div_2_Template, 14, 15, "div", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.error);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("card-square--small", ctx.small);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.optionList);
        } }, dependencies: [i1.NgForOf, i1.NgIf, i2.InlineSVGDirective, i3.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputRadioWithCardComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-radio-with-card', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputRadioWithCardComponent),
                        multi: true,
                    },
                ], template: "<div *ngIf=\"error\" class=\"notification notification--errorfield\">\n  <span class=\"icon icon-error-shape errorfield\">{{ getText() | translate }}</span>\n</div>\n<div\n  [class.card-square--small]=\"small\"\n  class=\"label-modifier-box card-square flex-direction--column flex-direction--row--sm\">\n  <div\n    *ngFor=\"let option of optionList; let i = index\"\n    class=\"animation-show-slide-up mr--default--sm\"\n    style=\"{{ '--animation-delay:' + i }}\">\n    <input\n      [checked]=\"selectedOption && option.value === selectedOption.value\"\n      class=\"label-modifier-radio\"\n      id=\"choice-{{ i }}-{{ key }}\"\n      name=\"choice-{{ key }}\"\n      type=\"radio\"\n      value=\"{{ option.value }}\" />\n    <div class=\"label-modifier--append label-modifier--container cursor--pointer\">\n      <div class=\"label-modifier--body\">\n        <div class=\"label-modifier--body--inner-container\">\n          <label\n            (click)=\"selectOption(option)\"\n            class=\"label-modifier-radio__label\"\n            for=\"choice-{{ i }}-{{ key }}\"></label>\n          <div class=\"label-modifier-content__header\">\n            <i class=\"icon icon-tick\"></i>\n          </div>\n          <div [inlineSVG]=\"option.imagePath\" class=\"label-modifier-content__image hide-until-sm\"></div>\n          <div class=\"label-modifier-content__body\">\n            <div\n              [innerHTML]=\"getOptionLabel(option) | translate\"\n              class=\"text-flow text-flow--button label-modifier-content__body-label\"></div>\n            <div\n              *ngIf=\"customOptionExplanationText\"\n              [innerHTML]=\"getOptionText(option) | translate\"\n              class=\"text-align--left text-align--center--sm\"></div>\n          </div>\n          <div class=\"label-modifier-content__timing\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n" }]
    }], null, { optionList: [{
            type: Input
        }], multipleSelectable: [{
            type: Input
        }], small: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputRadioWithCardComponent, { className: "InputRadioWithCardComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l0aC1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb250cm9scy9yYWRpby1jaGVja2JveC9yYWRpby93aXRoLWNhcmQvd2l0aC1jYXJkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb250cm9scy9yYWRpby1jaGVja2JveC9yYWRpby93aXRoLWNhcmQvd2l0aC1jYXJkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7O0lDSHJFLDhCQUFpRSxjQUFBO0lBQ2hCLFlBQTJCOztJQUFBLGlCQUFPLEVBQUE7OztJQUFsQyxlQUEyQjtJQUEzQiw0REFBMkI7OztJQStCaEUsMEJBR3dEOzs7OztJQUR0RCxvR0FBK0M7Ozs7SUE1QjNELDhCQUd5QztJQUN2QywyQkFNK0I7SUFDL0IsOEJBQThFLGFBQUEsYUFBQSxnQkFBQTtJQUl0RSxvT0FBUyxlQUFBLDhCQUFvQixDQUFBLElBQUM7SUFFQyxpQkFBUTtJQUN6QywrQkFBNEM7SUFDMUMsd0JBQThCO0lBQ2hDLGlCQUFNO0lBQ04sMEJBQThGO0lBQzlGLCtCQUEwQztJQUN4QywyQkFFK0U7O0lBQy9FLHFGQUd3RDtJQUMxRCxpQkFBTTtJQUNOLDJCQUFrRDtJQUNwRCxpQkFBTSxFQUFBLEVBQUEsRUFBQTs7Ozs7SUE3QlYsMENBQXNDO0lBSXBDLGNBQTZCO0lBQTdCLHFFQUE2QjtJQUM3Qiw0REFBdUI7SUFFdkIsa0RBQTBCO0lBTDFCLGtHQUFtRTtJQVk3RCxlQUE4QjtJQUE5QixzRUFBOEI7SUFJM0IsZUFBOEI7SUFBOUIsK0NBQThCO0lBRy9CLGVBQWdEO0lBQWhELHVHQUFnRDtJQUcvQyxlQUFpQztJQUFqQyx5REFBaUM7O0FEakJoRCxNQUFNLE9BQU8sMkJBQTRCLFNBQVEsc0JBQXNCO0lBQzVELFVBQVUsR0FBMkIsRUFBRSxDQUFDO0lBQ3hDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztJQUMzQixLQUFLLEdBQUcsS0FBSyxDQUFDO3lRQUhaLDJCQUEyQixTQUEzQiwyQkFBMkI7NkRBQTNCLDJCQUEyQiw2S0FSM0I7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztvQkFDMUQsS0FBSyxFQUFFLElBQUk7aUJBQ1o7YUFDRjtZQ2RILDRFQUVNO1lBQ04sOEJBRXdGO1lBQ3RGLDhFQW1DTTtZQUNSLGlCQUFNOztZQTFDQSxnQ0FBVztZQUlmLGNBQWtDO1lBQWxDLCtDQUFrQztZQUdiLGNBQWU7WUFBZix3Q0FBZTs7O2lGRFN6QiwyQkFBMkI7Y0FYdkMsU0FBUzsyQkFDRSx5QkFBeUIsYUFFeEI7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsNEJBQTRCLENBQUM7d0JBQzFELEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO2dCQUdRLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxrQkFBa0I7a0JBQTFCLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7O2tGQUhLLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSW5wdXRPcHRpb25XaXRoSW1hZ2UgfSBmcm9tICcuLi8uLi8uLi9yYWRpbyc7XG5pbXBvcnQgeyBBYnN0cmFjdFJhZGlvQ29tcG9uZW50IH0gZnJvbSAnLi4vYWJzdHJhY3QtcmFkaW8uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGctZm9ybS1yYWRpby13aXRoLWNhcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vd2l0aC1jYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBJbnB1dFJhZGlvV2l0aENhcmRDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRSYWRpb1dpdGhDYXJkQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RSYWRpb0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIG9wdGlvbkxpc3Q6IElucHV0T3B0aW9uV2l0aEltYWdlW10gPSBbXTtcbiAgQElucHV0KCkgbXVsdGlwbGVTZWxlY3RhYmxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNtYWxsID0gZmFsc2U7XG59XG4iLCI8ZGl2ICpuZ0lmPVwiZXJyb3JcIiBjbGFzcz1cIm5vdGlmaWNhdGlvbiBub3RpZmljYXRpb24tLWVycm9yZmllbGRcIj5cbiAgPHNwYW4gY2xhc3M9XCJpY29uIGljb24tZXJyb3Itc2hhcGUgZXJyb3JmaWVsZFwiPnt7IGdldFRleHQoKSB8IHRyYW5zbGF0ZSB9fTwvc3Bhbj5cbjwvZGl2PlxuPGRpdlxuICBbY2xhc3MuY2FyZC1zcXVhcmUtLXNtYWxsXT1cInNtYWxsXCJcbiAgY2xhc3M9XCJsYWJlbC1tb2RpZmllci1ib3ggY2FyZC1zcXVhcmUgZmxleC1kaXJlY3Rpb24tLWNvbHVtbiBmbGV4LWRpcmVjdGlvbi0tcm93LS1zbVwiPlxuICA8ZGl2XG4gICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBvcHRpb25MaXN0OyBsZXQgaSA9IGluZGV4XCJcbiAgICBjbGFzcz1cImFuaW1hdGlvbi1zaG93LXNsaWRlLXVwIG1yLS1kZWZhdWx0LS1zbVwiXG4gICAgc3R5bGU9XCJ7eyAnLS1hbmltYXRpb24tZGVsYXk6JyArIGkgfX1cIj5cbiAgICA8aW5wdXRcbiAgICAgIFtjaGVja2VkXT1cInNlbGVjdGVkT3B0aW9uICYmIG9wdGlvbi52YWx1ZSA9PT0gc2VsZWN0ZWRPcHRpb24udmFsdWVcIlxuICAgICAgY2xhc3M9XCJsYWJlbC1tb2RpZmllci1yYWRpb1wiXG4gICAgICBpZD1cImNob2ljZS17eyBpIH19LXt7IGtleSB9fVwiXG4gICAgICBuYW1lPVwiY2hvaWNlLXt7IGtleSB9fVwiXG4gICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgdmFsdWU9XCJ7eyBvcHRpb24udmFsdWUgfX1cIiAvPlxuICAgIDxkaXYgY2xhc3M9XCJsYWJlbC1tb2RpZmllci0tYXBwZW5kIGxhYmVsLW1vZGlmaWVyLS1jb250YWluZXIgY3Vyc29yLS1wb2ludGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibGFiZWwtbW9kaWZpZXItLWJvZHlcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsLW1vZGlmaWVyLS1ib2R5LS1pbm5lci1jb250YWluZXJcIj5cbiAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3RPcHRpb24ob3B0aW9uKVwiXG4gICAgICAgICAgICBjbGFzcz1cImxhYmVsLW1vZGlmaWVyLXJhZGlvX19sYWJlbFwiXG4gICAgICAgICAgICBmb3I9XCJjaG9pY2Ute3sgaSB9fS17eyBrZXkgfX1cIj48L2xhYmVsPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbC1tb2RpZmllci1jb250ZW50X19oZWFkZXJcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvbiBpY29uLXRpY2tcIj48L2k+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBbaW5saW5lU1ZHXT1cIm9wdGlvbi5pbWFnZVBhdGhcIiBjbGFzcz1cImxhYmVsLW1vZGlmaWVyLWNvbnRlbnRfX2ltYWdlIGhpZGUtdW50aWwtc21cIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWwtbW9kaWZpZXItY29udGVudF9fYm9keVwiPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cImdldE9wdGlvbkxhYmVsKG9wdGlvbikgfCB0cmFuc2xhdGVcIlxuICAgICAgICAgICAgICBjbGFzcz1cInRleHQtZmxvdyB0ZXh0LWZsb3ctLWJ1dHRvbiBsYWJlbC1tb2RpZmllci1jb250ZW50X19ib2R5LWxhYmVsXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICpuZ0lmPVwiY3VzdG9tT3B0aW9uRXhwbGFuYXRpb25UZXh0XCJcbiAgICAgICAgICAgICAgW2lubmVySFRNTF09XCJnZXRPcHRpb25UZXh0KG9wdGlvbikgfCB0cmFuc2xhdGVcIlxuICAgICAgICAgICAgICBjbGFzcz1cInRleHQtYWxpZ24tLWxlZnQgdGV4dC1hbGlnbi0tY2VudGVyLS1zbVwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbC1tb2RpZmllci1jb250ZW50X190aW1pbmdcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==