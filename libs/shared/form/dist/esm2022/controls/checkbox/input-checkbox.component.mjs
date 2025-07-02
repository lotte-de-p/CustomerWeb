import { Component, forwardRef, Input, Optional } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputAbstractComponent } from '../input-abstract.component';
import * as i0 from "@angular/core";
import * as i1 from "@telenet/ng-lib-page";
import * as i2 from "../../errors";
import * as i3 from "@angular/forms";
import * as i4 from "@ngx-translate/core";
export class InputCheckboxComponent extends InputAbstractComponent {
    languageService;
    formService;
    messageGroupDirective;
    injector;
    checkBoxModifier;
    customLabel;
    value = '';
    constructor(languageService, formService, messageGroupDirective, injector) {
        super(languageService, formService, messageGroupDirective, injector);
        this.languageService = languageService;
        this.formService = formService;
        this.messageGroupDirective = messageGroupDirective;
        this.injector = injector;
    }
    getLabel() {
        return super.getLabel(this.customLabel);
    }
    onChange = (_) => {
        // empty implementation
    };
    onTouched = (_) => {
        // empty implementation
    };
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(_isDisabled) {
        // empty implementation
    }
    writeValue(value) {
        this.value = value;
    }
    updateValue(value) {
        this.onTouched(true);
        this.onChange(value);
        this.trackingEvent.emit({ label: this.getLabel(), value: value.toString() });
    }
    static ɵfac = function InputCheckboxComponent_Factory(t) { return new (t || InputCheckboxComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(i2.FormErrorService), i0.ɵɵdirectiveInject(i2.MessageGroupDirective, 8), i0.ɵɵdirectiveInject(i0.Injector)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputCheckboxComponent, selectors: [["tg-form-input-checkbox"]], inputs: { checkBoxModifier: "checkBoxModifier", customLabel: "customLabel" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputCheckboxComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 9, vars: 11, consts: [[1, "radio-checkbox"], [1, "form__checkbox"], ["type", "checkbox", 1, "form__checkbox__input", 3, "id", "checked", "ngModel", "ngModelChange"], [3, "for"], [1, "label--large", "color-text", 3, "for", "innerHTML"], ["errorContainer", ""]], template: function InputCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "input", 2);
            i0.ɵɵlistener("ngModelChange", function InputCheckboxComponent_Template_input_ngModelChange_2_listener($event) { return ctx.updateValue($event); })("ngModelChange", function InputCheckboxComponent_Template_input_ngModelChange_2_listener($event) { return ctx.value = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "label", 3);
            i0.ɵɵtext(4, "\u00A0");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(5, "label", 4);
            i0.ɵɵpipe(6, "translate");
            i0.ɵɵelement(7, "div", null, 5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵpropertyInterpolate("id", ctx.key);
            i0.ɵɵproperty("checked", ctx.value)("ngModel", ctx.value);
            i0.ɵɵadvance();
            i0.ɵɵclassMapInterpolate1("form__checkbox__label ", ctx.checkBoxModifier, "");
            i0.ɵɵpropertyInterpolate("for", ctx.key);
            i0.ɵɵadvance(2);
            i0.ɵɵpropertyInterpolate("for", ctx.key);
            i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(6, 9, ctx.getLabel()), i0.ɵɵsanitizeHtml);
        } }, dependencies: [i3.CheckboxControlValueAccessor, i3.NgControlStatus, i3.NgModel, i4.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputCheckboxComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-input-checkbox', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputCheckboxComponent),
                        multi: true,
                    },
                ], template: "<div class=\"radio-checkbox\">\n  <div class=\"form__checkbox\">\n    <input\n      type=\"checkbox\"\n      class=\"form__checkbox__input\"\n      id=\"{{ key }}\"\n      [checked]=\"value\"\n      (ngModelChange)=\"updateValue($event)\"\n      [(ngModel)]=\"value\" />\n    <label class=\"form__checkbox__label {{ checkBoxModifier }}\" for=\"{{ key }}\">&nbsp;</label>\n  </div>\n  <label class=\"label--large color-text\" for=\"{{ key }}\" [innerHTML]=\"getLabel() | translate\"></label>\n  <div #errorContainer></div>\n</div>\n" }]
    }], () => [{ type: i1.LanguageService }, { type: i2.FormErrorService }, { type: i2.MessageGroupDirective, decorators: [{
                type: Optional
            }] }, { type: i0.Injector }], { checkBoxModifier: [{
            type: Input
        }], customLabel: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputCheckboxComponent, { className: "InputCheckboxComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xzL2NoZWNrYm94L2lucHV0LWNoZWNrYm94LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3NyYy9jb250cm9scy9jaGVja2JveC9pbnB1dC1jaGVja2JveC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFZLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7OztBQWVyRSxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsc0JBQXNCO0lBTTlDO0lBQ0E7SUFDWTtJQUNaO0lBUlQsZ0JBQWdCLENBQXVCO0lBQ3ZDLFdBQVcsQ0FBUztJQUM3QixLQUFLLEdBQUcsRUFBRSxDQUFDO0lBRVgsWUFDa0IsZUFBZ0MsRUFDaEMsV0FBNkIsRUFDakIscUJBQTRDLEVBQ3hELFFBQWtCO1FBRWxDLEtBQUssQ0FBQyxlQUFlLEVBQUUsV0FBVyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBTHJELG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFDakIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUN4RCxhQUFRLEdBQVIsUUFBUSxDQUFVO0lBR3BDLENBQUM7SUFFUSxRQUFRO1FBQ2YsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsUUFBUSxHQUFHLENBQUMsQ0FBUyxFQUFFLEVBQUU7UUFDdkIsdUJBQXVCO0lBQ3pCLENBQUMsQ0FBQztJQUNGLFNBQVMsR0FBRyxDQUFDLENBQVUsRUFBRSxFQUFFO1FBQ3pCLHVCQUF1QjtJQUN6QixDQUFDLENBQUM7SUFFTyxnQkFBZ0IsQ0FBQyxFQUFnQjtRQUN4QyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRVEsaUJBQWlCLENBQUMsRUFBZ0I7UUFDekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVRLGdCQUFnQixDQUFDLFdBQW9CO1FBQzVDLHVCQUF1QjtJQUN6QixDQUFDO0lBRVEsVUFBVSxDQUFDLEtBQWE7UUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFhO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDL0UsQ0FBQztnRkE3Q1Usc0JBQXNCOzZEQUF0QixzQkFBc0IsMEpBUnRCO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsc0JBQXNCLENBQUM7b0JBQ3JELEtBQUssRUFBRSxJQUFJO2lCQUNaO2FBQ0Y7WUNoQkgsOEJBQTRCLGFBQUEsZUFBQTtZQU90Qix3SEFBaUIsdUJBQW1CLElBQUMsaUlBQUE7WUFMdkMsaUJBTXdCO1lBQ3hCLGdDQUE0RTtZQUFBLHNCQUFNO1lBQUEsaUJBQVEsRUFBQTtZQUU1RiwyQkFBb0c7O1lBQ3BHLCtCQUEyQjtZQUM3QixpQkFBTTs7WUFSQSxlQUFjO1lBQWQsdUNBQWM7WUFDZCxtQ0FBaUIsc0JBQUE7WUFHWixjQUFvRDtZQUFwRCw2RUFBb0Q7WUFBQyx3Q0FBZTtZQUV0QyxlQUFlO1lBQWYsd0NBQWU7WUFBQyxtRkFBb0M7OztpRkRPaEYsc0JBQXNCO2NBWGxDLFNBQVM7MkJBQ0Usd0JBQXdCLGFBRXZCO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLHVCQUF1QixDQUFDO3dCQUNyRCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjs7c0JBVUUsUUFBUTs0Q0FQRixnQkFBZ0I7a0JBQXhCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLOztrRkFGSyxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIEluamVjdG9yLCBJbnB1dCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSB9IGZyb20gJ0B0ZWxlbmV0L25nLWxpYi1wYWdlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSW5wdXRBYnN0cmFjdENvbXBvbmVudCB9IGZyb20gJy4uL2lucHV0LWFic3RyYWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGVja2JveE1vZGlmaWVyRW51bSB9IGZyb20gJy4vY29uc3QnO1xuaW1wb3J0IHsgRm9ybUVycm9yU2VydmljZSwgTWVzc2FnZUdyb3VwRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZXJyb3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGctZm9ybS1pbnB1dC1jaGVja2JveCcsXG4gIHRlbXBsYXRlVXJsOiAnaW5wdXQtY2hlY2tib3guaHRtbCcsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gSW5wdXRDaGVja2JveENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dENoZWNrYm94Q29tcG9uZW50IGV4dGVuZHMgSW5wdXRBYnN0cmFjdENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGNoZWNrQm94TW9kaWZpZXI6IENoZWNrYm94TW9kaWZpZXJFbnVtO1xuICBASW5wdXQoKSBjdXN0b21MYWJlbDogc3RyaW5nO1xuICB2YWx1ZSA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBvdmVycmlkZSBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZSxcbiAgICBwdWJsaWMgb3ZlcnJpZGUgZm9ybVNlcnZpY2U6IEZvcm1FcnJvclNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIG92ZXJyaWRlIG1lc3NhZ2VHcm91cERpcmVjdGl2ZTogTWVzc2FnZUdyb3VwRGlyZWN0aXZlLFxuICAgIHB1YmxpYyBvdmVycmlkZSBpbmplY3RvcjogSW5qZWN0b3JcbiAgKSB7XG4gICAgc3VwZXIobGFuZ3VhZ2VTZXJ2aWNlLCBmb3JtU2VydmljZSwgbWVzc2FnZUdyb3VwRGlyZWN0aXZlLCBpbmplY3Rvcik7XG4gIH1cblxuICBvdmVycmlkZSBnZXRMYWJlbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBzdXBlci5nZXRMYWJlbCh0aGlzLmN1c3RvbUxhYmVsKTtcbiAgfVxuXG4gIG9uQ2hhbmdlID0gKF86IHN0cmluZykgPT4ge1xuICAgIC8vIGVtcHR5IGltcGxlbWVudGF0aW9uXG4gIH07XG4gIG9uVG91Y2hlZCA9IChfOiBib29sZWFuKSA9PiB7XG4gICAgLy8gZW1wdHkgaW1wbGVtZW50YXRpb25cbiAgfTtcblxuICBvdmVycmlkZSByZWdpc3Rlck9uQ2hhbmdlKGZuOiBWb2lkRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICBvdmVycmlkZSByZWdpc3Rlck9uVG91Y2hlZChmbjogVm9pZEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIG92ZXJyaWRlIHNldERpc2FibGVkU3RhdGUoX2lzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAvLyBlbXB0eSBpbXBsZW1lbnRhdGlvblxuICB9XG5cbiAgb3ZlcnJpZGUgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgdXBkYXRlVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkKHRydWUpO1xuICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgIHRoaXMudHJhY2tpbmdFdmVudC5lbWl0KHsgbGFiZWw6IHRoaXMuZ2V0TGFiZWwoKSwgdmFsdWU6IHZhbHVlLnRvU3RyaW5nKCkgfSk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJyYWRpby1jaGVja2JveFwiPlxuICA8ZGl2IGNsYXNzPVwiZm9ybV9fY2hlY2tib3hcIj5cbiAgICA8aW5wdXRcbiAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICBjbGFzcz1cImZvcm1fX2NoZWNrYm94X19pbnB1dFwiXG4gICAgICBpZD1cInt7IGtleSB9fVwiXG4gICAgICBbY2hlY2tlZF09XCJ2YWx1ZVwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJ1cGRhdGVWYWx1ZSgkZXZlbnQpXCJcbiAgICAgIFsobmdNb2RlbCldPVwidmFsdWVcIiAvPlxuICAgIDxsYWJlbCBjbGFzcz1cImZvcm1fX2NoZWNrYm94X19sYWJlbCB7eyBjaGVja0JveE1vZGlmaWVyIH19XCIgZm9yPVwie3sga2V5IH19XCI+Jm5ic3A7PC9sYWJlbD5cbiAgPC9kaXY+XG4gIDxsYWJlbCBjbGFzcz1cImxhYmVsLS1sYXJnZSBjb2xvci10ZXh0XCIgZm9yPVwie3sga2V5IH19XCIgW2lubmVySFRNTF09XCJnZXRMYWJlbCgpIHwgdHJhbnNsYXRlXCI+PC9sYWJlbD5cbiAgPGRpdiAjZXJyb3JDb250YWluZXI+PC9kaXY+XG48L2Rpdj5cbiJdfQ==