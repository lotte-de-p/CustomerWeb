import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractCheckboxComponent } from '../abstract-checkbox.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@ngx-translate/core";
function InputCheckboxWithCardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "div", 2);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelement(3, "div", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassProp("form__label--error", ctx_r0.error);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 3, ctx_r0.getLabel()), i0.ɵɵsanitizeHtml);
} }
function InputCheckboxWithCardComponent_div_3_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 12);
} if (rf & 2) {
    const option_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHTML", ctx_r4.getSubscript(option_r2), i0.ɵɵsanitizeHtml);
} }
function InputCheckboxWithCardComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4)(1, "input", 5);
    i0.ɵɵlistener("click", function InputCheckboxWithCardComponent_div_3_Template_input_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r7); const option_r2 = restoredCtx.$implicit; const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.selectOption(option_r2)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "label", 6)(3, "div", 7);
    i0.ɵɵelement(4, "i", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 9);
    i0.ɵɵelement(6, "div", 10);
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵtemplate(8, InputCheckboxWithCardComponent_div_3_div_8_Template, 1, 1, "div", 11);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleMap("--animation-delay:" + i_r3);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate2("id", "checkboxCard-", i_r3, "-", ctx_r1.key, "");
    i0.ɵɵpropertyInterpolate1("name", "choice-", ctx_r1.key, "");
    i0.ɵɵpropertyInterpolate("value", option_r2.value);
    i0.ɵɵproperty("checked", ctx_r1.selectedOptions.includes(option_r2));
    i0.ɵɵattribute("disabled", option_r2.disabled ? "disabled" : null);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate2("for", "checkboxCard-", i_r3, "-", ctx_r1.key, "");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(7, 13, ctx_r1.getOptionLabel(option_r2)), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.hasSubscript(option_r2));
} }
export class InputCheckboxWithCardComponent extends AbstractCheckboxComponent {
    getSubscript(option) {
        return option.subScript || '';
    }
    static ɵfac = /*@__PURE__*/ (() => { let ɵInputCheckboxWithCardComponent_BaseFactory; return function InputCheckboxWithCardComponent_Factory(t) { return (ɵInputCheckboxWithCardComponent_BaseFactory || (ɵInputCheckboxWithCardComponent_BaseFactory = i0.ɵɵgetInheritedFactory(InputCheckboxWithCardComponent)))(t || InputCheckboxWithCardComponent); }; })();
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputCheckboxWithCardComponent, selectors: [["tg-form-checkbox-with-card"]], features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputCheckboxWithCardComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 2, consts: [[4, "ngIf"], ["class", "checkbox-container animation-show-slide-up", 3, "style", 4, "ngFor", "ngForOf"], [1, "text-flow", "text-flow--h3", "text-align--center", 3, "innerHTML"], [1, "whitespace", "whitespace--small"], [1, "checkbox-container", "animation-show-slide-up"], ["disabled", "disabled", "type", "checkbox", 1, "checkbox-container__input", 3, "checked", "id", "name", "value", "click"], [1, "checkbox-container__label", 3, "for"], [1, "checkbox-container__label__tick"], [1, "icon-tick"], [1, "checkbox-container__label__content"], [3, "innerHTML"], ["class", "text--small", 3, "innerHTML", 4, "ngIf"], [1, "text--small", 3, "innerHTML"]], template: function InputCheckboxWithCardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵtemplate(1, InputCheckboxWithCardComponent_div_1_Template, 4, 5, "div", 0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div");
            i0.ɵɵtemplate(3, InputCheckboxWithCardComponent_div_3_Template, 9, 15, "div", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.customLabel && !ctx.toHideError());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.optionList);
        } }, dependencies: [i1.NgForOf, i1.NgIf, i2.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputCheckboxWithCardComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-checkbox-with-card', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputCheckboxWithCardComponent),
                        multi: true,
                    },
                ], template: "<div>\n  <!-- Error banner/message for the input groups with label-modifiers -->\n  <div *ngIf=\"customLabel && !toHideError()\">\n    <div\n      [class.form__label--error]=\"error\"\n      [innerHTML]=\"getLabel() | translate\"\n      class=\"text-flow text-flow--h3 text-align--center\"></div>\n    <div class=\"whitespace whitespace--small\"></div>\n  </div>\n</div>\n<div>\n  <div\n    *ngFor=\"let option of optionList; let i = index\"\n    class=\"checkbox-container animation-show-slide-up\"\n    style=\"{{ '--animation-delay:' + i }}\">\n    <input\n      (click)=\"selectOption(option)\"\n      [attr.disabled]=\"option.disabled ? 'disabled' : null\"\n      [checked]=\"selectedOptions.includes(option)\"\n      class=\"checkbox-container__input\"\n      disabled=\"disabled\"\n      id=\"checkboxCard-{{ i }}-{{ key }}\"\n      name=\"choice-{{ key }}\"\n      type=\"checkbox\"\n      value=\"{{ option.value }}\" />\n    <!-- Effective body -->\n    <label class=\"checkbox-container__label\" for=\"checkboxCard-{{ i }}-{{ key }}\">\n      <div class=\"checkbox-container__label__tick\">\n        <i class=\"icon-tick\"></i>\n      </div>\n      <div class=\"checkbox-container__label__content\">\n        <div [innerHTML]=\"getOptionLabel(option) | translate\"></div>\n        <div *ngIf=\"hasSubscript(option)\" [innerHTML]=\"getSubscript(option)\" class=\"text--small\"></div>\n      </div>\n    </label>\n    <!-- End Effective Body -->\n  </div>\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputCheckboxWithCardComponent, { className: "InputCheckboxWithCardComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l0aC1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb250cm9scy9yYWRpby1jaGVja2JveC9jaGVja2JveC93aXRoLWNhcmQvd2l0aC1jYXJkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb250cm9scy9yYWRpby1jaGVja2JveC9jaGVja2JveC93aXRoLWNhcmQvd2l0aC1jYXJkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7OztJQ0F6RSwyQkFBMkM7SUFDekMseUJBRzJEOztJQUMzRCx5QkFBZ0Q7SUFDbEQsaUJBQU07OztJQUpGLGNBQWtDO0lBQWxDLGtEQUFrQztJQUNsQyxzRkFBb0M7OztJQTJCbEMsMEJBQStGOzs7O0lBQTdELDZFQUFrQzs7OztJQXJCMUUsOEJBR3lDLGVBQUE7SUFFckMsdU9BQVMsZUFBQSw4QkFBb0IsQ0FBQSxJQUFDO0lBRGhDLGlCQVMrQjtJQUUvQixnQ0FBOEUsYUFBQTtJQUUxRSx1QkFBeUI7SUFDM0IsaUJBQU07SUFDTiw4QkFBZ0Q7SUFDOUMsMEJBQTREOztJQUM1RCxzRkFBK0Y7SUFDakcsaUJBQU0sRUFBQSxFQUFBOzs7OztJQW5CUiwwQ0FBc0M7SUFPcEMsY0FBbUM7SUFBbkMsMkVBQW1DO0lBQ25DLDREQUF1QjtJQUV2QixrREFBMEI7SUFOMUIsb0VBQTRDO0lBRDVDLGtFQUFxRDtJQVNkLGNBQW9DO0lBQXBDLDRFQUFvQztJQUtwRSxlQUFnRDtJQUFoRCxzR0FBZ0Q7SUFDL0MsZUFBMEI7SUFBMUIscURBQTBCOztBRGhCeEMsTUFBTSxPQUFPLDhCQUErQixTQUFRLHlCQUF5QjtJQUMzRSxZQUFZLENBQUMsTUFBbUI7UUFDOUIsT0FBUSxNQUFtQyxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7SUFDOUQsQ0FBQztxUkFIVSw4QkFBOEIsU0FBOUIsOEJBQThCOzZEQUE5Qiw4QkFBOEIsZ0ZBUjlCO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsOEJBQThCLENBQUM7b0JBQzdELEtBQUssRUFBRSxJQUFJO2lCQUNaO2FBQ0Y7WUNkSCwyQkFBSztZQUVILCtFQU1NO1lBQ1IsaUJBQU07WUFDTiwyQkFBSztZQUNILGdGQXlCTTtZQUNSLGlCQUFNOztZQW5DRSxjQUFtQztZQUFuQyw0REFBbUM7WUFVcEIsZUFBZTtZQUFmLHdDQUFlOzs7aUZESXpCLDhCQUE4QjtjQVgxQyxTQUFTOzJCQUNFLDRCQUE0QixhQUUzQjtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSwrQkFBK0IsQ0FBQzt3QkFDN0QsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7O2tGQUVVLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBYnN0cmFjdENoZWNrYm94Q29tcG9uZW50IH0gZnJvbSAnLi4vYWJzdHJhY3QtY2hlY2tib3guY29tcG9uZW50JztcbmltcG9ydCB7IElucHV0T3B0aW9uLCBJbnB1dE9wdGlvbldpdGhTdWJzY3JpcHQgfSBmcm9tICcuLi8uLi8uLi9yYWRpbyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RnLWZvcm0tY2hlY2tib3gtd2l0aC1jYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3dpdGgtY2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gSW5wdXRDaGVja2JveFdpdGhDYXJkQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIElucHV0Q2hlY2tib3hXaXRoQ2FyZENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0Q2hlY2tib3hDb21wb25lbnQge1xuICBnZXRTdWJzY3JpcHQob3B0aW9uOiBJbnB1dE9wdGlvbik6IHN0cmluZyB7XG4gICAgcmV0dXJuIChvcHRpb24gYXMgSW5wdXRPcHRpb25XaXRoU3Vic2NyaXB0KS5zdWJTY3JpcHQgfHwgJyc7XG4gIH1cbn1cbiIsIjxkaXY+XG4gIDwhLS0gRXJyb3IgYmFubmVyL21lc3NhZ2UgZm9yIHRoZSBpbnB1dCBncm91cHMgd2l0aCBsYWJlbC1tb2RpZmllcnMgLS0+XG4gIDxkaXYgKm5nSWY9XCJjdXN0b21MYWJlbCAmJiAhdG9IaWRlRXJyb3IoKVwiPlxuICAgIDxkaXZcbiAgICAgIFtjbGFzcy5mb3JtX19sYWJlbC0tZXJyb3JdPVwiZXJyb3JcIlxuICAgICAgW2lubmVySFRNTF09XCJnZXRMYWJlbCgpIHwgdHJhbnNsYXRlXCJcbiAgICAgIGNsYXNzPVwidGV4dC1mbG93IHRleHQtZmxvdy0taDMgdGV4dC1hbGlnbi0tY2VudGVyXCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIndoaXRlc3BhY2Ugd2hpdGVzcGFjZS0tc21hbGxcIj48L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbjxkaXY+XG4gIDxkaXZcbiAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG9wdGlvbkxpc3Q7IGxldCBpID0gaW5kZXhcIlxuICAgIGNsYXNzPVwiY2hlY2tib3gtY29udGFpbmVyIGFuaW1hdGlvbi1zaG93LXNsaWRlLXVwXCJcbiAgICBzdHlsZT1cInt7ICctLWFuaW1hdGlvbi1kZWxheTonICsgaSB9fVwiPlxuICAgIDxpbnB1dFxuICAgICAgKGNsaWNrKT1cInNlbGVjdE9wdGlvbihvcHRpb24pXCJcbiAgICAgIFthdHRyLmRpc2FibGVkXT1cIm9wdGlvbi5kaXNhYmxlZCA/ICdkaXNhYmxlZCcgOiBudWxsXCJcbiAgICAgIFtjaGVja2VkXT1cInNlbGVjdGVkT3B0aW9ucy5pbmNsdWRlcyhvcHRpb24pXCJcbiAgICAgIGNsYXNzPVwiY2hlY2tib3gtY29udGFpbmVyX19pbnB1dFwiXG4gICAgICBkaXNhYmxlZD1cImRpc2FibGVkXCJcbiAgICAgIGlkPVwiY2hlY2tib3hDYXJkLXt7IGkgfX0te3sga2V5IH19XCJcbiAgICAgIG5hbWU9XCJjaG9pY2Ute3sga2V5IH19XCJcbiAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICB2YWx1ZT1cInt7IG9wdGlvbi52YWx1ZSB9fVwiIC8+XG4gICAgPCEtLSBFZmZlY3RpdmUgYm9keSAtLT5cbiAgICA8bGFiZWwgY2xhc3M9XCJjaGVja2JveC1jb250YWluZXJfX2xhYmVsXCIgZm9yPVwiY2hlY2tib3hDYXJkLXt7IGkgfX0te3sga2V5IH19XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tib3gtY29udGFpbmVyX19sYWJlbF9fdGlja1wiPlxuICAgICAgICA8aSBjbGFzcz1cImljb24tdGlja1wiPjwvaT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNoZWNrYm94LWNvbnRhaW5lcl9fbGFiZWxfX2NvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBbaW5uZXJIVE1MXT1cImdldE9wdGlvbkxhYmVsKG9wdGlvbikgfCB0cmFuc2xhdGVcIj48L2Rpdj5cbiAgICAgICAgPGRpdiAqbmdJZj1cImhhc1N1YnNjcmlwdChvcHRpb24pXCIgW2lubmVySFRNTF09XCJnZXRTdWJzY3JpcHQob3B0aW9uKVwiIGNsYXNzPVwidGV4dC0tc21hbGxcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbGFiZWw+XG4gICAgPCEtLSBFbmQgRWZmZWN0aXZlIEJvZHkgLS0+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=