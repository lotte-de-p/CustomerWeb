import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractRadioComponent } from '../abstract-radio.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@ngx-translate/core";
function InputRadioWithCardMiniNoSelectBoxLabelsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3)(1, "span", 4);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 1, ctx_r0.getText()));
} }
function InputRadioWithCardMiniNoSelectBoxLabelsComponent_div_2_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 17);
} if (rf & 2) {
    const option_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHTML", ctx_r4.getSubscript(option_r2), i0.ɵɵsanitizeHtml);
} }
function InputRadioWithCardMiniNoSelectBoxLabelsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelement(1, "input", 6);
    i0.ɵɵelementStart(2, "div", 7)(3, "div", 8)(4, "div", 9)(5, "label", 10);
    i0.ɵɵlistener("click", function InputRadioWithCardMiniNoSelectBoxLabelsComponent_div_2_Template_label_click_5_listener() { const restoredCtx = i0.ɵɵrestoreView(_r7); const option_r2 = restoredCtx.$implicit; const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.selectOption(option_r2)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 11);
    i0.ɵɵelement(7, "i", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 13);
    i0.ɵɵelement(9, "div", 14);
    i0.ɵɵpipe(10, "translate");
    i0.ɵɵtemplate(11, InputRadioWithCardMiniNoSelectBoxLabelsComponent_div_2_div_11_Template, 1, 1, "div", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(12, "div", 16);
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
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(10, 12, ctx_r1.getOptionLabel(option_r2)), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.hasSubscript(option_r2));
} }
export class InputRadioWithCardMiniNoSelectBoxLabelsComponent extends AbstractRadioComponent {
    static ɵfac = /*@__PURE__*/ (() => { let ɵInputRadioWithCardMiniNoSelectBoxLabelsComponent_BaseFactory; return function InputRadioWithCardMiniNoSelectBoxLabelsComponent_Factory(t) { return (ɵInputRadioWithCardMiniNoSelectBoxLabelsComponent_BaseFactory || (ɵInputRadioWithCardMiniNoSelectBoxLabelsComponent_BaseFactory = i0.ɵɵgetInheritedFactory(InputRadioWithCardMiniNoSelectBoxLabelsComponent)))(t || InputRadioWithCardMiniNoSelectBoxLabelsComponent); }; })();
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputRadioWithCardMiniNoSelectBoxLabelsComponent, selectors: [["tg-form-radio-with-card-mini-no-select-box-labels"]], features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputRadioWithCardMiniNoSelectBoxLabelsComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 2, consts: [["class", "notification notification--errorfield", 4, "ngIf"], [1, "label-modifier-box", "card-mini", "card-mini--no-select-box"], ["class", "label-modifier-slot animation-show-slide-up", 3, "style", 4, "ngFor", "ngForOf"], [1, "notification", "notification--errorfield"], [1, "icon", "icon-error-shape", "errorfield"], [1, "label-modifier-slot", "animation-show-slide-up"], ["type", "radio", 1, "label-modifier-radio", 3, "checked", "id", "name", "value"], [1, "label-modifier--append", "label-modifier--container", "cursor--pointer"], [1, "label-modifier--body"], [1, "label-modifier--body--inner-container"], [1, "label-modifier-radio__label", 3, "for", "click"], [1, "label-modifier-content__header"], [1, "icon", "icon-tick"], [1, "label-modifier-content__body"], [1, "text-flow", "text-flow--button", "label-modifier-content__body-label", 3, "innerHTML"], ["appTextFlow", "legal", "class", "label-modifier-content__body-range", 3, "innerHTML", 4, "ngIf"], [1, "label-modifier-content__timing"], ["appTextFlow", "legal", 1, "label-modifier-content__body-range", 3, "innerHTML"]], template: function InputRadioWithCardMiniNoSelectBoxLabelsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, InputRadioWithCardMiniNoSelectBoxLabelsComponent_div_0_Template, 4, 3, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵtemplate(2, InputRadioWithCardMiniNoSelectBoxLabelsComponent_div_2_Template, 13, 14, "div", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.error);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.optionList);
        } }, dependencies: [i1.NgForOf, i1.NgIf, i2.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputRadioWithCardMiniNoSelectBoxLabelsComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-radio-with-card-mini-no-select-box-labels', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputRadioWithCardMiniNoSelectBoxLabelsComponent),
                        multi: true,
                    },
                ], template: "<div *ngIf=\"error\" class=\"notification notification--errorfield\">\n  <span class=\"icon icon-error-shape errorfield\">{{ getText() | translate }}</span>\n</div>\n<div class=\"label-modifier-box card-mini card-mini--no-select-box\">\n  <div\n    *ngFor=\"let option of optionList; let i = index\"\n    class=\"label-modifier-slot animation-show-slide-up\"\n    style=\"{{ '--animation-delay:' + i }}\">\n    <input\n      [checked]=\"selectedOption && option.value === selectedOption.value\"\n      class=\"label-modifier-radio\"\n      id=\"choice-{{ i }}-{{ key }}\"\n      name=\"choice-{{ key }}\"\n      type=\"radio\"\n      value=\"{{ option.value }}\" />\n    <!-- Effective body -->\n    <div class=\"label-modifier--append label-modifier--container cursor--pointer\">\n      <div class=\"label-modifier--body\">\n        <div class=\"label-modifier--body--inner-container\">\n          <label\n            (click)=\"selectOption(option)\"\n            class=\"label-modifier-radio__label\"\n            for=\"choice-{{ i }}-{{ key }}\"></label>\n          <div class=\"label-modifier-content__header\">\n            <i class=\"icon icon-tick\"></i>\n          </div>\n          <div class=\"label-modifier-content__body\">\n            <div\n              [innerHTML]=\"getOptionLabel(option) | translate\"\n              class=\"text-flow text-flow--button label-modifier-content__body-label\"></div>\n            <div\n              *ngIf=\"hasSubscript(option)\"\n              [innerHTML]=\"getSubscript(option)\"\n              appTextFlow=\"legal\"\n              class=\"label-modifier-content__body-range\"></div>\n          </div>\n          <div class=\"label-modifier-content__timing\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputRadioWithCardMiniNoSelectBoxLabelsComponent, { className: "InputRadioWithCardMiniNoSelectBoxLabelsComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l0aC1jYXJkLW1pbmktbm8tc2VsZWN0LWJveC1sYWJlbHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xzL3JhZGlvLWNoZWNrYm94L3JhZGlvL3dpdGgtY2FyZC1taW5pLW5vLXNlbGVjdC1ib3gtbGFiZWxzL3dpdGgtY2FyZC1taW5pLW5vLXNlbGVjdC1ib3gtbGFiZWxzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb250cm9scy9yYWRpby1jaGVja2JveC9yYWRpby93aXRoLWNhcmQtbWluaS1uby1zZWxlY3QtYm94LWxhYmVscy93aXRoLWNhcmQtbWluaS1uby1zZWxlY3QtYm94LWxhYmVscy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7SUNGckUsOEJBQWlFLGNBQUE7SUFDaEIsWUFBMkI7O0lBQUEsaUJBQU8sRUFBQTs7O0lBQWxDLGVBQTJCO0lBQTNCLDREQUEyQjs7O0lBNkJoRSwwQkFJbUQ7Ozs7SUFGakQsNkVBQWtDOzs7O0lBNUI5Qyw4QkFHeUM7SUFDdkMsMkJBTStCO0lBRS9CLDhCQUE4RSxhQUFBLGFBQUEsZ0JBQUE7SUFJdEUseVBBQVMsZUFBQSw4QkFBb0IsQ0FBQSxJQUFDO0lBRUMsaUJBQVE7SUFDekMsK0JBQTRDO0lBQzFDLHdCQUE4QjtJQUNoQyxpQkFBTTtJQUNOLCtCQUEwQztJQUN4QywwQkFFK0U7O0lBQy9FLDBHQUltRDtJQUNyRCxpQkFBTTtJQUNOLDJCQUFrRDtJQUNwRCxpQkFBTSxFQUFBLEVBQUEsRUFBQTs7Ozs7SUE5QlYsMENBQXNDO0lBSXBDLGNBQTZCO0lBQTdCLHFFQUE2QjtJQUM3Qiw0REFBdUI7SUFFdkIsa0RBQTBCO0lBTDFCLGtHQUFtRTtJQWE3RCxlQUE4QjtJQUE5QixzRUFBOEI7SUFNNUIsZUFBZ0Q7SUFBaEQsdUdBQWdEO0lBRy9DLGVBQTBCO0lBQTFCLHFEQUEwQjs7QURoQnpDLE1BQU0sT0FBTyxnREFBaUQsU0FBUSxzQkFBc0I7NlZBQS9FLGdEQUFnRCxTQUFoRCxnREFBZ0Q7NkRBQWhELGdEQUFnRCx1R0FSaEQ7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxnREFBZ0QsQ0FBQztvQkFDL0UsS0FBSyxFQUFFLElBQUk7aUJBQ1o7YUFDRjtZQ2JILGlHQUVNO1lBQ04sOEJBQW1FO1lBQ2pFLG1HQW9DTTtZQUNSLGlCQUFNOztZQXpDQSxnQ0FBVztZQUtNLGVBQWU7WUFBZix3Q0FBZTs7O2lGRFV6QixnREFBZ0Q7Y0FYNUQsU0FBUzsyQkFDRSxtREFBbUQsYUFFbEQ7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsaURBQWlELENBQUM7d0JBQy9FLEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGOztrRkFFVSxnREFBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQWJzdHJhY3RSYWRpb0NvbXBvbmVudCB9IGZyb20gJy4uL2Fic3RyYWN0LXJhZGlvLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RnLWZvcm0tcmFkaW8td2l0aC1jYXJkLW1pbmktbm8tc2VsZWN0LWJveC1sYWJlbHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vd2l0aC1jYXJkLW1pbmktbm8tc2VsZWN0LWJveC1sYWJlbHMuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IElucHV0UmFkaW9XaXRoQ2FyZE1pbmlOb1NlbGVjdEJveExhYmVsc0NvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dFJhZGlvV2l0aENhcmRNaW5pTm9TZWxlY3RCb3hMYWJlbHNDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdFJhZGlvQ29tcG9uZW50IHt9XG4iLCI8ZGl2ICpuZ0lmPVwiZXJyb3JcIiBjbGFzcz1cIm5vdGlmaWNhdGlvbiBub3RpZmljYXRpb24tLWVycm9yZmllbGRcIj5cbiAgPHNwYW4gY2xhc3M9XCJpY29uIGljb24tZXJyb3Itc2hhcGUgZXJyb3JmaWVsZFwiPnt7IGdldFRleHQoKSB8IHRyYW5zbGF0ZSB9fTwvc3Bhbj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImxhYmVsLW1vZGlmaWVyLWJveCBjYXJkLW1pbmkgY2FyZC1taW5pLS1uby1zZWxlY3QtYm94XCI+XG4gIDxkaXZcbiAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG9wdGlvbkxpc3Q7IGxldCBpID0gaW5kZXhcIlxuICAgIGNsYXNzPVwibGFiZWwtbW9kaWZpZXItc2xvdCBhbmltYXRpb24tc2hvdy1zbGlkZS11cFwiXG4gICAgc3R5bGU9XCJ7eyAnLS1hbmltYXRpb24tZGVsYXk6JyArIGkgfX1cIj5cbiAgICA8aW5wdXRcbiAgICAgIFtjaGVja2VkXT1cInNlbGVjdGVkT3B0aW9uICYmIG9wdGlvbi52YWx1ZSA9PT0gc2VsZWN0ZWRPcHRpb24udmFsdWVcIlxuICAgICAgY2xhc3M9XCJsYWJlbC1tb2RpZmllci1yYWRpb1wiXG4gICAgICBpZD1cImNob2ljZS17eyBpIH19LXt7IGtleSB9fVwiXG4gICAgICBuYW1lPVwiY2hvaWNlLXt7IGtleSB9fVwiXG4gICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgdmFsdWU9XCJ7eyBvcHRpb24udmFsdWUgfX1cIiAvPlxuICAgIDwhLS0gRWZmZWN0aXZlIGJvZHkgLS0+XG4gICAgPGRpdiBjbGFzcz1cImxhYmVsLW1vZGlmaWVyLS1hcHBlbmQgbGFiZWwtbW9kaWZpZXItLWNvbnRhaW5lciBjdXJzb3ItLXBvaW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbC1tb2RpZmllci0tYm9keVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWwtbW9kaWZpZXItLWJvZHktLWlubmVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdE9wdGlvbihvcHRpb24pXCJcbiAgICAgICAgICAgIGNsYXNzPVwibGFiZWwtbW9kaWZpZXItcmFkaW9fX2xhYmVsXCJcbiAgICAgICAgICAgIGZvcj1cImNob2ljZS17eyBpIH19LXt7IGtleSB9fVwiPjwvbGFiZWw+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsLW1vZGlmaWVyLWNvbnRlbnRfX2hlYWRlclwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uIGljb24tdGlja1wiPjwvaT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWwtbW9kaWZpZXItY29udGVudF9fYm9keVwiPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cImdldE9wdGlvbkxhYmVsKG9wdGlvbikgfCB0cmFuc2xhdGVcIlxuICAgICAgICAgICAgICBjbGFzcz1cInRleHQtZmxvdyB0ZXh0LWZsb3ctLWJ1dHRvbiBsYWJlbC1tb2RpZmllci1jb250ZW50X19ib2R5LWxhYmVsXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICpuZ0lmPVwiaGFzU3Vic2NyaXB0KG9wdGlvbilcIlxuICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cImdldFN1YnNjcmlwdChvcHRpb24pXCJcbiAgICAgICAgICAgICAgYXBwVGV4dEZsb3c9XCJsZWdhbFwiXG4gICAgICAgICAgICAgIGNsYXNzPVwibGFiZWwtbW9kaWZpZXItY29udGVudF9fYm9keS1yYW5nZVwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbC1tb2RpZmllci1jb250ZW50X190aW1pbmdcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==