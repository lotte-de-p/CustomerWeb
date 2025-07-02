import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractRadioComponent } from '../abstract-radio.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../../directives/whitespace/whitespace.directive";
import * as i3 from "@ngx-translate/core";
function InputRadioHorizontalComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 4);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "div", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 1, ctx_r0.getLabel()));
} }
function InputRadioHorizontalComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "span", 7);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 1, ctx_r1.getText()));
} }
function InputRadioHorizontalComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8)(2, "div", 9);
    i0.ɵɵelement(3, "input", 10);
    i0.ɵɵelementStart(4, "label", 11);
    i0.ɵɵlistener("click", function InputRadioHorizontalComponent_ng_container_3_Template_label_click_4_listener() { const restoredCtx = i0.ɵɵrestoreView(_r6); const option_r3 = restoredCtx.$implicit; const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.selectOption(option_r3)); });
    i0.ɵɵtext(5, "\u00A0");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "label", 12);
    i0.ɵɵlistener("click", function InputRadioHorizontalComponent_ng_container_3_Template_label_click_6_listener() { const restoredCtx = i0.ɵɵrestoreView(_r6); const option_r3 = restoredCtx.$implicit; const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.selectOption(option_r3)); });
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(8, "div", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate2("id", "form-input-radio-", i_r4, "-", ctx_r2.key, "")("name", "radio-group-name-", i_r4, "-", ctx_r2.key, " ");
    i0.ɵɵproperty("checked", ctx_r2.selectedOption && option_r3.value === ctx_r2.selectedOption.value);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate2("for", "form-input-radio-", i_r4, "-", ctx_r2.key, "");
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate2("for", "form-input-radio-", i_r4, "-", ctx_r2.key, "");
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(7, 10, ctx_r2.getOptionLabel(option_r3)), i0.ɵɵsanitizeHtml);
} }
export class InputRadioHorizontalComponent extends AbstractRadioComponent {
    static ɵfac = /*@__PURE__*/ (() => { let ɵInputRadioHorizontalComponent_BaseFactory; return function InputRadioHorizontalComponent_Factory(t) { return (ɵInputRadioHorizontalComponent_BaseFactory || (ɵInputRadioHorizontalComponent_BaseFactory = i0.ɵɵgetInheritedFactory(InputRadioHorizontalComponent)))(t || InputRadioHorizontalComponent); }; })();
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputRadioHorizontalComponent, selectors: [["tg-form-radio-horizontal"]], features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputRadioHorizontalComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 3, consts: [[4, "ngIf"], ["class", "notification notification--errorfield", 4, "ngIf"], [1, "radio-checkbox--horizontal"], [4, "ngFor", "ngForOf"], [1, "label-input-flow"], [1, "whitespace", "whitespace--tiny"], [1, "notification", "notification--errorfield"], [1, "icon", "icon-error-shape", "errorfield"], [1, "radio-checkbox", "mb--xxs", "mb--n--sm"], [1, "radio", "form__radio", 2, "--animation-delay", "i"], ["type", "radio", 1, "form__radio__input", 3, "checked", "id", "name"], [1, "form__radio__label", 3, "for", "click"], [1, "label--large", 3, "innerHTML", "for", "click"], ["tgWhitespace", "tiny"]], template: function InputRadioHorizontalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, InputRadioHorizontalComponent_div_0_Template, 5, 3, "div", 0)(1, InputRadioHorizontalComponent_div_1_Template, 4, 3, "div", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵtemplate(3, InputRadioHorizontalComponent_ng_container_3_Template, 9, 12, "ng-container", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.customLabel);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.error);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.optionList);
        } }, dependencies: [i1.NgForOf, i1.NgIf, i2.WhitespaceDirective, i3.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputRadioHorizontalComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-radio-horizontal', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputRadioHorizontalComponent),
                        multi: true,
                    },
                ], template: "<div *ngIf=\"customLabel\">\n  <div class=\"label-input-flow\">{{ getLabel() | translate }}</div>\n  <div class=\"whitespace whitespace--tiny\"></div>\n</div>\n<div *ngIf=\"error\" class=\"notification notification--errorfield\">\n  <span class=\"icon icon-error-shape errorfield\">{{ getText() | translate }}</span>\n</div>\n<div class=\"radio-checkbox--horizontal\">\n  <ng-container *ngFor=\"let option of optionList; let i = index\">\n    <div class=\"radio-checkbox mb--xxs mb--n--sm\">\n      <div class=\"radio form__radio\" style=\"--animation-delay: i\">\n        <input\n          [checked]=\"selectedOption && option.value === selectedOption.value\"\n          class=\"form__radio__input\"\n          id=\"form-input-radio-{{ i }}-{{ key }}\"\n          name=\"radio-group-name-{{ i }}-{{ key }} \"\n          type=\"radio\" />\n        <label (click)=\"selectOption(option)\" class=\"form__radio__label\" for=\"form-input-radio-{{ i }}-{{ key }}\"\n          >&nbsp;</label\n        >\n      </div>\n      <label\n        (click)=\"selectOption(option)\"\n        [innerHTML]=\"getOptionLabel(option) | translate\"\n        class=\"label--large\"\n        for=\"form-input-radio-{{ i }}-{{ key }}\">\n      </label>\n    </div>\n    <div tgWhitespace=\"tiny\"></div>\n  </ng-container>\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputRadioHorizontalComponent, { className: "InputRadioHorizontalComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9yaXpvbnRhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29udHJvbHMvcmFkaW8tY2hlY2tib3gvcmFkaW8vaG9yaXpvbnRhbC9ob3Jpem9udGFsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb250cm9scy9yYWRpby1jaGVja2JveC9yYWRpby9ob3Jpem9udGFsL2hvcml6b250YWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7OztJQ0ZyRSwyQkFBeUIsYUFBQTtJQUNPLFlBQTRCOztJQUFBLGlCQUFNO0lBQ2hFLHlCQUErQztJQUNqRCxpQkFBTTs7O0lBRjBCLGVBQTRCO0lBQTVCLDZEQUE0Qjs7O0lBRzVELDhCQUFpRSxjQUFBO0lBQ2hCLFlBQTJCOztJQUFBLGlCQUFPLEVBQUE7OztJQUFsQyxlQUEyQjtJQUEzQiw0REFBMkI7Ozs7SUFHMUUsNkJBQStEO0lBQzdELDhCQUE4QyxhQUFBO0lBRTFDLDRCQUtpQjtJQUNqQixpQ0FDRztJQURJLCtPQUFTLGVBQUEsOEJBQW9CLENBQUEsSUFBQztJQUNsQyxzQkFBTTtJQUFBLGlCQUNSLEVBQUE7SUFFSCxpQ0FJMkM7SUFIekMsK09BQVMsZUFBQSw4QkFBb0IsQ0FBQSxJQUFDOztJQUloQyxpQkFBUSxFQUFBO0lBRVYsMEJBQStCO0lBQ2pDLDBCQUFlOzs7OztJQWZQLGVBQXVDO0lBQXZDLCtFQUF1Qyx5REFBQTtJQUZ2QyxrR0FBbUU7SUFLSixjQUF3QztJQUF4QyxnRkFBd0M7SUFRekcsZUFBd0M7SUFBeEMsZ0ZBQXdDO0lBRnhDLHNHQUFnRDs7QURSeEQsTUFBTSxPQUFPLDZCQUE4QixTQUFRLHNCQUFzQjtpUkFBNUQsNkJBQTZCLFNBQTdCLDZCQUE2Qjs2REFBN0IsNkJBQTZCLDhFQVI3QjtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLDZCQUE2QixDQUFDO29CQUM1RCxLQUFLLEVBQUUsSUFBSTtpQkFDWjthQUNGO1lDYkgsOEVBR00saUVBQUE7WUFJTiw4QkFBd0M7WUFDdEMsaUdBcUJlO1lBQ2pCLGlCQUFNOztZQTlCQSxzQ0FBaUI7WUFJakIsY0FBVztZQUFYLGdDQUFXO1lBSWtCLGVBQWU7WUFBZix3Q0FBZTs7O2lGRE9yQyw2QkFBNkI7Y0FYekMsU0FBUzsyQkFDRSwwQkFBMEIsYUFFekI7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsOEJBQThCLENBQUM7d0JBQzVELEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGOztrRkFFVSw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQWJzdHJhY3RSYWRpb0NvbXBvbmVudCB9IGZyb20gJy4uL2Fic3RyYWN0LXJhZGlvLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RnLWZvcm0tcmFkaW8taG9yaXpvbnRhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9ob3Jpem9udGFsLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBJbnB1dFJhZGlvSG9yaXpvbnRhbENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dFJhZGlvSG9yaXpvbnRhbENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0UmFkaW9Db21wb25lbnQge31cbiIsIjxkaXYgKm5nSWY9XCJjdXN0b21MYWJlbFwiPlxuICA8ZGl2IGNsYXNzPVwibGFiZWwtaW5wdXQtZmxvd1wiPnt7IGdldExhYmVsKCkgfCB0cmFuc2xhdGUgfX08L2Rpdj5cbiAgPGRpdiBjbGFzcz1cIndoaXRlc3BhY2Ugd2hpdGVzcGFjZS0tdGlueVwiPjwvZGl2PlxuPC9kaXY+XG48ZGl2ICpuZ0lmPVwiZXJyb3JcIiBjbGFzcz1cIm5vdGlmaWNhdGlvbiBub3RpZmljYXRpb24tLWVycm9yZmllbGRcIj5cbiAgPHNwYW4gY2xhc3M9XCJpY29uIGljb24tZXJyb3Itc2hhcGUgZXJyb3JmaWVsZFwiPnt7IGdldFRleHQoKSB8IHRyYW5zbGF0ZSB9fTwvc3Bhbj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cInJhZGlvLWNoZWNrYm94LS1ob3Jpem9udGFsXCI+XG4gIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBvcHRpb25MaXN0OyBsZXQgaSA9IGluZGV4XCI+XG4gICAgPGRpdiBjbGFzcz1cInJhZGlvLWNoZWNrYm94IG1iLS14eHMgbWItLW4tLXNtXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicmFkaW8gZm9ybV9fcmFkaW9cIiBzdHlsZT1cIi0tYW5pbWF0aW9uLWRlbGF5OiBpXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIFtjaGVja2VkXT1cInNlbGVjdGVkT3B0aW9uICYmIG9wdGlvbi52YWx1ZSA9PT0gc2VsZWN0ZWRPcHRpb24udmFsdWVcIlxuICAgICAgICAgIGNsYXNzPVwiZm9ybV9fcmFkaW9fX2lucHV0XCJcbiAgICAgICAgICBpZD1cImZvcm0taW5wdXQtcmFkaW8te3sgaSB9fS17eyBrZXkgfX1cIlxuICAgICAgICAgIG5hbWU9XCJyYWRpby1ncm91cC1uYW1lLXt7IGkgfX0te3sga2V5IH19IFwiXG4gICAgICAgICAgdHlwZT1cInJhZGlvXCIgLz5cbiAgICAgICAgPGxhYmVsIChjbGljayk9XCJzZWxlY3RPcHRpb24ob3B0aW9uKVwiIGNsYXNzPVwiZm9ybV9fcmFkaW9fX2xhYmVsXCIgZm9yPVwiZm9ybS1pbnB1dC1yYWRpby17eyBpIH19LXt7IGtleSB9fVwiXG4gICAgICAgICAgPiZuYnNwOzwvbGFiZWxcbiAgICAgICAgPlxuICAgICAgPC9kaXY+XG4gICAgICA8bGFiZWxcbiAgICAgICAgKGNsaWNrKT1cInNlbGVjdE9wdGlvbihvcHRpb24pXCJcbiAgICAgICAgW2lubmVySFRNTF09XCJnZXRPcHRpb25MYWJlbChvcHRpb24pIHwgdHJhbnNsYXRlXCJcbiAgICAgICAgY2xhc3M9XCJsYWJlbC0tbGFyZ2VcIlxuICAgICAgICBmb3I9XCJmb3JtLWlucHV0LXJhZGlvLXt7IGkgfX0te3sga2V5IH19XCI+XG4gICAgICA8L2xhYmVsPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgdGdXaGl0ZXNwYWNlPVwidGlueVwiPjwvZGl2PlxuICA8L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuIl19