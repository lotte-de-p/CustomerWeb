import { Component, Input } from '@angular/core';
import { extractFormDetails } from '../../index';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function FormInfoComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "pre");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "json");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div");
    i0.ɵɵtext(11);
    i0.ɵɵpipe(12, "json");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "pre");
    i0.ɵɵtext(14);
    i0.ɵɵpipe(15, "json");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("formValue: ", i0.ɵɵpipeBind1(3, 6, ctx_r0.formGroup.value), "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("valid: ", ctx_r0.formGroup.valid, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("touched: ", ctx_r0.formGroup.touched, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("pristine: ", ctx_r0.formGroup.pristine, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("errors: ", i0.ɵɵpipeBind1(12, 8, ctx_r0.formGroup.errors), "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(15, 10, ctx_r0.extractFormDetails(ctx_r0.formGroup)));
} }
function FormInfoComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Did you forget to add the formGroup?");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵstyleProp("color", "red");
} }
export class FormInfoComponent {
    extractFormDetails = extractFormDetails;
    formGroup;
    static ɵfac = function FormInfoComponent_Factory(t) { return new (t || FormInfoComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FormInfoComponent, selectors: [["tg-form-info"]], inputs: { formGroup: "formGroup" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["formGroupNotAvailable", ""]], template: function FormInfoComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, FormInfoComponent_div_0_Template, 16, 12, "div", 0)(1, FormInfoComponent_ng_template_1_Template, 2, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const _r2 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngIf", ctx.formGroup)("ngIfElse", _r2);
        } }, dependencies: [CommonModule, i1.NgIf, i1.JsonPipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormInfoComponent, [{
        type: Component,
        args: [{
                selector: 'tg-form-info',
                imports: [CommonModule],
                template: `
    <div *ngIf="formGroup; else formGroupNotAvailable">
      <pre>formValue: {{ formGroup.value | json }}</pre>
      <div>valid: {{ formGroup.valid }}</div>
      <div>touched: {{ formGroup.touched }}</div>
      <div>pristine: {{ formGroup.pristine }}</div>
      <div>errors: {{ formGroup.errors | json }}</div>
      <pre>{{ extractFormDetails(formGroup) | json }}</pre>
    </div>
    <ng-template #formGroupNotAvailable>
      <div [style.color]="'red'">Did you forget to add the formGroup?</div>
    </ng-template>
  `,
                standalone: true,
            }]
    }], null, { formGroup: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FormInfoComponent, { className: "FormInfoComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1pbmZvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Zvcm0taW5mby9mb3JtLWluZm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7SUFNM0MsMkJBQW1ELFVBQUE7SUFDNUMsWUFBdUM7O0lBQUEsaUJBQU07SUFDbEQsMkJBQUs7SUFBQSxZQUE0QjtJQUFBLGlCQUFNO0lBQ3ZDLDJCQUFLO0lBQUEsWUFBZ0M7SUFBQSxpQkFBTTtJQUMzQywyQkFBSztJQUFBLFlBQWtDO0lBQUEsaUJBQU07SUFDN0MsNEJBQUs7SUFBQSxhQUFxQzs7SUFBQSxpQkFBTTtJQUNoRCw0QkFBSztJQUFBLGFBQTBDOztJQUFBLGlCQUFNLEVBQUE7OztJQUxoRCxlQUF1QztJQUF2QyxzRkFBdUM7SUFDdkMsZUFBNEI7SUFBNUIsNERBQTRCO0lBQzVCLGVBQWdDO0lBQWhDLGdFQUFnQztJQUNoQyxlQUFrQztJQUFsQyxrRUFBa0M7SUFDbEMsZUFBcUM7SUFBckMscUZBQXFDO0lBQ3JDLGVBQTBDO0lBQTFDLHlGQUEwQzs7O0lBRy9DLDJCQUEyQjtJQUFBLG9EQUFvQztJQUFBLGlCQUFNOztJQUFoRSw4QkFBcUI7O0FBS2hDLE1BQU0sT0FBTyxpQkFBaUI7SUFDNUIsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUM7SUFHeEMsU0FBUyxDQUFhOzJFQUpYLGlCQUFpQjs2REFBakIsaUJBQWlCO1lBZDFCLG9FQU9NLHNHQUFBOzs7WUFQQSxvQ0FBaUIsaUJBQUE7NEJBRmYsWUFBWTs7aUZBZ0JYLGlCQUFpQjtjQWxCN0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7O0dBWVQ7Z0JBQ0QsVUFBVSxFQUFFLElBQUk7YUFDakI7Z0JBS0MsU0FBUztrQkFEUixLQUFLOztrRkFISyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBleHRyYWN0Rm9ybURldGFpbHMgfSBmcm9tICcuLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0Zy1mb3JtLWluZm8nLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2ICpuZ0lmPVwiZm9ybUdyb3VwOyBlbHNlIGZvcm1Hcm91cE5vdEF2YWlsYWJsZVwiPlxuICAgICAgPHByZT5mb3JtVmFsdWU6IHt7IGZvcm1Hcm91cC52YWx1ZSB8IGpzb24gfX08L3ByZT5cbiAgICAgIDxkaXY+dmFsaWQ6IHt7IGZvcm1Hcm91cC52YWxpZCB9fTwvZGl2PlxuICAgICAgPGRpdj50b3VjaGVkOiB7eyBmb3JtR3JvdXAudG91Y2hlZCB9fTwvZGl2PlxuICAgICAgPGRpdj5wcmlzdGluZToge3sgZm9ybUdyb3VwLnByaXN0aW5lIH19PC9kaXY+XG4gICAgICA8ZGl2PmVycm9yczoge3sgZm9ybUdyb3VwLmVycm9ycyB8IGpzb24gfX08L2Rpdj5cbiAgICAgIDxwcmU+e3sgZXh0cmFjdEZvcm1EZXRhaWxzKGZvcm1Hcm91cCkgfCBqc29uIH19PC9wcmU+XG4gICAgPC9kaXY+XG4gICAgPG5nLXRlbXBsYXRlICNmb3JtR3JvdXBOb3RBdmFpbGFibGU+XG4gICAgICA8ZGl2IFtzdHlsZS5jb2xvcl09XCIncmVkJ1wiPkRpZCB5b3UgZm9yZ2V0IHRvIGFkZCB0aGUgZm9ybUdyb3VwPzwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1JbmZvQ29tcG9uZW50IHtcbiAgZXh0cmFjdEZvcm1EZXRhaWxzID0gZXh0cmFjdEZvcm1EZXRhaWxzO1xuXG4gIEBJbnB1dCgpXG4gIGZvcm1Hcm91cCE6IEZvcm1Hcm91cDtcbn1cbiJdfQ==