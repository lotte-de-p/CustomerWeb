import { Component, forwardRef, Input, Optional } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputAbstractComponent } from '../../../input-abstract.component';
import { LabelUtil } from '../../../../utils';
import * as i0 from "@angular/core";
import * as i1 from "@telenet/ng-lib-page";
import * as i2 from "../../../../errors";
import * as i3 from "@angular/common";
import * as i4 from "@ngx-translate/core";
function InputMomentPickerComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5)(1, "span", 6);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 1, ctx_r0.labels.momentPickerErrorLabel));
} }
function InputMomentPickerComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 7);
    i0.ɵɵelement(2, "input", 8);
    i0.ɵɵelementStart(3, "div", 9)(4, "div", 10)(5, "div", 11)(6, "label", 12);
    i0.ɵɵlistener("click", function InputMomentPickerComponent_ng_container_6_Template_label_click_6_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const moment_r2 = restoredCtx.$implicit; const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.selectMoment(moment_r2)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 13);
    i0.ɵɵelement(8, "i", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 15)(10, "div", 16);
    i0.ɵɵtext(11);
    i0.ɵɵpipe(12, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 17);
    i0.ɵɵtext(14);
    i0.ɵɵpipe(15, "translate");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(16, "div", 18);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const moment_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵstyleMap("--animation-delay:" + i_r3);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("value", moment_r2);
    i0.ɵɵpropertyInterpolate1("id", "time-", i_r3, "");
    i0.ɵɵproperty("checked", moment_r2.timeslot === ctx_r1.selectedMoment);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("disabled", !moment_r2.available);
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate1("for", "time-", i_r3, "");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(12, 11, moment_r2.label), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(15, 13, moment_r2.displayTime), " ");
} }
export class InputMomentPickerComponent extends InputAbstractComponent {
    languageService;
    formService;
    messageGroupDirective;
    injector;
    timeslot;
    availableMoments;
    labels;
    selectedMoment;
    constructor(languageService, formService, messageGroupDirective, injector) {
        super(languageService, formService, messageGroupDirective, injector);
        this.languageService = languageService;
        this.formService = formService;
        this.messageGroupDirective = messageGroupDirective;
        this.injector = injector;
    }
    ngOnInit() {
        super.ngOnInit();
        this.setLabels();
    }
    onChange = (_) => {
        // empty on purpose
    };
    onTouch = (_) => {
        // empty on purpose
    };
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    writeValue(value) {
        if (value) {
            this.selectedMoment = this.availableMoments?.find((moment) => {
                return moment?.timeslot === value;
            })?.timeslot;
        }
        else {
            this.selectedMoment = undefined;
            if (this.control.valueChanges) {
                this.valueChangesSubscription$?.unsubscribe();
                this.error = null;
            }
        }
    }
    selectMoment(moment) {
        this.onChange(moment.timeslot);
    }
    setLabels() {
        this.labels = {
            momentPickerLabel: LabelUtil.getLabelKeyWithTypeLabel([this.messageGroup, this.formControlName, 'moment-picker']),
            momentPickerErrorLabel: LabelUtil.getLabelKeyWithTypeLabel([
                this.messageGroup,
                this.formControlName,
                'moment-picker-error',
            ]),
        };
    }
    static ɵfac = function InputMomentPickerComponent_Factory(t) { return new (t || InputMomentPickerComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(i2.FormErrorService), i0.ɵɵdirectiveInject(i2.MessageGroupDirective, 8), i0.ɵɵdirectiveInject(i0.Injector)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputMomentPickerComponent, selectors: [["app-form-moment-picker"]], inputs: { timeslot: "timeslot", availableMoments: "availableMoments" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputMomentPickerComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 7, vars: 5, consts: [[1, "section", "section-time", "container"], [1, "text-flow", "text-flow--h3", "section__title", "text-align--center"], ["class", "notification notification--errorfield notification--errorfield--flow mb-15", 4, "ngIf"], [1, "label-modifier-box", "card-mini", "card-mini--with-icon"], [4, "ngFor", "ngForOf"], [1, "notification", "notification--errorfield", "notification--errorfield--flow", "mb-15"], [1, "icon", "icon-error-shape", "errorfield"], [1, "label-modifier-slot", "animation-show-slide-up"], ["type", "radio", "name", "time", 1, "label-modifier-radio", 3, "value", "id", "checked"], [1, "label-modifier--append", "label-modifier--container", "cursor--pointer", "mb--m"], [1, "label-modifier--body"], [1, "label-modifier--body--inner-container"], [1, "label-modifier-radio__label", 3, "for", "click"], [1, "label-modifier-content__header"], [1, "icon", "icon-tick"], [1, "label-modifier-content__body"], [1, "text-flow", "text-flow--button", "label-modifier-content__body-label"], [1, "text-flow", "text-flow--legal", "label-modifier-content__body-range"], [1, "label-modifier-content__timing", "icon-appointment"]], template: function InputMomentPickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵtext(2);
            i0.ɵɵpipe(3, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, InputMomentPickerComponent_div_4_Template, 4, 3, "div", 2);
            i0.ɵɵelementStart(5, "div", 3);
            i0.ɵɵtemplate(6, InputMomentPickerComponent_ng_container_6_Template, 17, 15, "ng-container", 4);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 3, ctx.labels.momentPickerLabel), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.error);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.availableMoments);
        } }, dependencies: [i3.NgForOf, i3.NgIf, i4.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputMomentPickerComponent, [{
        type: Component,
        args: [{ selector: 'app-form-moment-picker', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputMomentPickerComponent),
                        multi: true,
                    },
                ], template: "<div class=\"section section-time container\">\n  <div class=\"text-flow text-flow--h3 section__title text-align--center\">\n    {{ labels.momentPickerLabel | translate }}\n  </div>\n  <div class=\"notification notification--errorfield notification--errorfield--flow mb-15\" *ngIf=\"error\">\n    <span class=\"icon icon-error-shape errorfield\">{{ labels.momentPickerErrorLabel | translate }}</span>\n  </div>\n\n  <div class=\"label-modifier-box card-mini card-mini--with-icon\">\n    <ng-container *ngFor=\"let moment of availableMoments; let i = index\">\n      <div class=\"label-modifier-slot animation-show-slide-up\" style=\"{{ '--animation-delay:' + i }}\">\n        <input\n          type=\"radio\"\n          name=\"time\"\n          value=\"{{ moment }}\"\n          id=\"time-{{ i }}\"\n          class=\"label-modifier-radio\"\n          [checked]=\"moment.timeslot === selectedMoment\" />\n        <div\n          class=\"label-modifier--append label-modifier--container cursor--pointer mb--m\"\n          [class.disabled]=\"!moment.available\">\n          <div class=\"label-modifier--body\">\n            <div class=\"label-modifier--body--inner-container\">\n              <label for=\"time-{{ i }}\" class=\"label-modifier-radio__label\" (click)=\"selectMoment(moment)\"></label>\n              <div class=\"label-modifier-content__header\"><i class=\"icon icon-tick\"></i></div>\n              <div class=\"label-modifier-content__body\">\n                <div class=\"text-flow text-flow--button label-modifier-content__body-label\">\n                  {{ moment.label | translate }}\n                </div>\n                <div class=\"text-flow text-flow--legal label-modifier-content__body-range\">\n                  {{ moment.displayTime | translate }}\n                </div>\n              </div>\n              <div class=\"label-modifier-content__timing icon-appointment\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n</div>\n" }]
    }], () => [{ type: i1.LanguageService }, { type: i2.FormErrorService }, { type: i2.MessageGroupDirective, decorators: [{
                type: Optional
            }] }, { type: i0.Injector }], { timeslot: [{
            type: Input
        }], availableMoments: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputMomentPickerComponent, { className: "InputMomentPickerComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9tZW50LXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29udHJvbHMvbmV3LWFwcG9pbnRtZW50LXBpY2tlci9jb21wb25lbnRzL21vbWVudC1waWNrZXIvbW9tZW50LXBpY2tlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29udHJvbHMvbmV3LWFwcG9pbnRtZW50LXBpY2tlci9jb21wb25lbnRzL21vbWVudC1waWNrZXIvbW9tZW50LXBpY2tlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBWSxLQUFLLEVBQVUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR25ELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBSTNFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7OztJQ0o1Qyw4QkFBc0csY0FBQTtJQUNyRCxZQUErQzs7SUFBQSxpQkFBTyxFQUFBOzs7SUFBdEQsZUFBK0M7SUFBL0MsZ0ZBQStDOzs7O0lBSTlGLDZCQUFxRTtJQUNuRSw4QkFBZ0c7SUFDOUYsMkJBTW1EO0lBQ25ELDhCQUV1QyxjQUFBLGNBQUEsZ0JBQUE7SUFHNkIsNE9BQVMsZUFBQSw4QkFBb0IsQ0FBQSxJQUFDO0lBQUMsaUJBQVE7SUFDckcsK0JBQTRDO0lBQUEsd0JBQThCO0lBQUEsaUJBQU07SUFDaEYsK0JBQTBDLGVBQUE7SUFFdEMsYUFDRjs7SUFBQSxpQkFBTTtJQUNOLGdDQUEyRTtJQUN6RSxhQUNGOztJQUFBLGlCQUFNLEVBQUE7SUFFUiwyQkFBbUU7SUFDckUsaUJBQU0sRUFBQSxFQUFBLEVBQUE7SUFJZCwwQkFBZTs7Ozs7SUE1QjRDLGNBQXND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QTtZQUV4QyxZQUNGOztZQUFBLGlCQUFNO1lBQ04sMkVBRU07WUFFTiw4QkFBK0Q7WUFDN0QsK0ZBNkJlO1lBQ2pCLGlCQUFNLEVBQUE7O1lBckNKLGVBQ0Y7WUFERSxtRkFDRjtZQUN5RixlQUFXO1lBQVgsZ0NBQVc7WUFLakUsZUFBcUI7WUFBckIsOENBQXFCOzs7aUZEWTdDLDBCQUEwQjtjQVh0QyxTQUFTOzJCQUNFLHdCQUF3QixhQUV2QjtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSwyQkFBMkIsQ0FBQzt3QkFDekQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7O3NCQVlFLFFBQVE7NENBVEYsUUFBUTtrQkFBaEIsS0FBSztZQUNHLGdCQUFnQjtrQkFBeEIsS0FBSzs7a0ZBRkssMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbmplY3RvciwgSW5wdXQsIE9uSW5pdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnQHRlbGVuZXQvbmctbGliLXBhZ2UnO1xuaW1wb3J0IHsgQXBwb2ludG1lbnRUcmFuc2Zvcm1lclNsb3QgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbHMnO1xuaW1wb3J0IHsgSW5wdXRBYnN0cmFjdENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2lucHV0LWFic3RyYWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb21lbnRQaWNrZXJMYWJlbHNJbnRlcmZhY2UsIFRpbWVzbG90QXZhaWxhYmlsaXR5SW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBUaW1lc2xvdE1vbWVudEVudW0gfSBmcm9tICcuLi8uLi8uLi8uLi9lbnVtcyc7XG5pbXBvcnQgeyBGb3JtRXJyb3JTZXJ2aWNlLCBNZXNzYWdlR3JvdXBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi9lcnJvcnMnO1xuaW1wb3J0IHsgTGFiZWxVdGlsIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZm9ybS1tb21lbnQtcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21vbWVudC1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IElucHV0TW9tZW50UGlja2VyQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIElucHV0TW9tZW50UGlja2VyQ29tcG9uZW50IGV4dGVuZHMgSW5wdXRBYnN0cmFjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHRpbWVzbG90PzogQXBwb2ludG1lbnRUcmFuc2Zvcm1lclNsb3Q7XG4gIEBJbnB1dCgpIGF2YWlsYWJsZU1vbWVudHM6IFRpbWVzbG90QXZhaWxhYmlsaXR5SW50ZXJmYWNlW107XG4gIGxhYmVsczogTW9tZW50UGlja2VyTGFiZWxzSW50ZXJmYWNlO1xuXG4gIHNlbGVjdGVkTW9tZW50PzogVGltZXNsb3RNb21lbnRFbnVtO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZSxcbiAgICBwdWJsaWMgZm9ybVNlcnZpY2U6IEZvcm1FcnJvclNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIG1lc3NhZ2VHcm91cERpcmVjdGl2ZTogTWVzc2FnZUdyb3VwRGlyZWN0aXZlLFxuICAgIHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3JcbiAgKSB7XG4gICAgc3VwZXIobGFuZ3VhZ2VTZXJ2aWNlLCBmb3JtU2VydmljZSwgbWVzc2FnZUdyb3VwRGlyZWN0aXZlLCBpbmplY3Rvcik7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICAgIHRoaXMuc2V0TGFiZWxzKCk7XG4gIH1cblxuICBvbkNoYW5nZSA9IChfOiBUaW1lc2xvdEF2YWlsYWJpbGl0eUludGVyZmFjZSB8IHVua25vd24pOiB2b2lkID0+IHtcbiAgICAvLyBlbXB0eSBvbiBwdXJwb3NlXG4gIH07XG5cbiAgb25Ub3VjaCA9IChfOiBib29sZWFuKTogdm9pZCA9PiB7XG4gICAgLy8gZW1wdHkgb24gcHVycG9zZVxuICB9O1xuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IFZvaWRGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBWb2lkRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2ggPSBmbjtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IFRpbWVzbG90TW9tZW50RW51bSB8IG51bGwpOiB2b2lkIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRNb21lbnQgPSB0aGlzLmF2YWlsYWJsZU1vbWVudHM/LmZpbmQoKG1vbWVudCkgPT4ge1xuICAgICAgICByZXR1cm4gbW9tZW50Py50aW1lc2xvdCA9PT0gdmFsdWU7XG4gICAgICB9KT8udGltZXNsb3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRNb21lbnQgPSB1bmRlZmluZWQ7XG4gICAgICBpZiAodGhpcy5jb250cm9sLnZhbHVlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlc1N1YnNjcmlwdGlvbiQ/LnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNlbGVjdE1vbWVudChtb21lbnQ6IFRpbWVzbG90QXZhaWxhYmlsaXR5SW50ZXJmYWNlKSB7XG4gICAgdGhpcy5vbkNoYW5nZShtb21lbnQudGltZXNsb3QpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRMYWJlbHMoKSB7XG4gICAgdGhpcy5sYWJlbHMgPSB7XG4gICAgICBtb21lbnRQaWNrZXJMYWJlbDogTGFiZWxVdGlsLmdldExhYmVsS2V5V2l0aFR5cGVMYWJlbChbdGhpcy5tZXNzYWdlR3JvdXAsIHRoaXMuZm9ybUNvbnRyb2xOYW1lLCAnbW9tZW50LXBpY2tlciddKSxcbiAgICAgIG1vbWVudFBpY2tlckVycm9yTGFiZWw6IExhYmVsVXRpbC5nZXRMYWJlbEtleVdpdGhUeXBlTGFiZWwoW1xuICAgICAgICB0aGlzLm1lc3NhZ2VHcm91cCxcbiAgICAgICAgdGhpcy5mb3JtQ29udHJvbE5hbWUsXG4gICAgICAgICdtb21lbnQtcGlja2VyLWVycm9yJyxcbiAgICAgIF0pLFxuICAgIH07XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJzZWN0aW9uIHNlY3Rpb24tdGltZSBjb250YWluZXJcIj5cbiAgPGRpdiBjbGFzcz1cInRleHQtZmxvdyB0ZXh0LWZsb3ctLWgzIHNlY3Rpb25fX3RpdGxlIHRleHQtYWxpZ24tLWNlbnRlclwiPlxuICAgIHt7IGxhYmVscy5tb21lbnRQaWNrZXJMYWJlbCB8IHRyYW5zbGF0ZSB9fVxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cIm5vdGlmaWNhdGlvbiBub3RpZmljYXRpb24tLWVycm9yZmllbGQgbm90aWZpY2F0aW9uLS1lcnJvcmZpZWxkLS1mbG93IG1iLTE1XCIgKm5nSWY9XCJlcnJvclwiPlxuICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpY29uLWVycm9yLXNoYXBlIGVycm9yZmllbGRcIj57eyBsYWJlbHMubW9tZW50UGlja2VyRXJyb3JMYWJlbCB8IHRyYW5zbGF0ZSB9fTwvc3Bhbj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImxhYmVsLW1vZGlmaWVyLWJveCBjYXJkLW1pbmkgY2FyZC1taW5pLS13aXRoLWljb25cIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBtb21lbnQgb2YgYXZhaWxhYmxlTW9tZW50czsgbGV0IGkgPSBpbmRleFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImxhYmVsLW1vZGlmaWVyLXNsb3QgYW5pbWF0aW9uLXNob3ctc2xpZGUtdXBcIiBzdHlsZT1cInt7ICctLWFuaW1hdGlvbi1kZWxheTonICsgaSB9fVwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgIG5hbWU9XCJ0aW1lXCJcbiAgICAgICAgICB2YWx1ZT1cInt7IG1vbWVudCB9fVwiXG4gICAgICAgICAgaWQ9XCJ0aW1lLXt7IGkgfX1cIlxuICAgICAgICAgIGNsYXNzPVwibGFiZWwtbW9kaWZpZXItcmFkaW9cIlxuICAgICAgICAgIFtjaGVja2VkXT1cIm1vbWVudC50aW1lc2xvdCA9PT0gc2VsZWN0ZWRNb21lbnRcIiAvPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJsYWJlbC1tb2RpZmllci0tYXBwZW5kIGxhYmVsLW1vZGlmaWVyLS1jb250YWluZXIgY3Vyc29yLS1wb2ludGVyIG1iLS1tXCJcbiAgICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwiIW1vbWVudC5hdmFpbGFibGVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWwtbW9kaWZpZXItLWJvZHlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbC1tb2RpZmllci0tYm9keS0taW5uZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0aW1lLXt7IGkgfX1cIiBjbGFzcz1cImxhYmVsLW1vZGlmaWVyLXJhZGlvX19sYWJlbFwiIChjbGljayk9XCJzZWxlY3RNb21lbnQobW9tZW50KVwiPjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbC1tb2RpZmllci1jb250ZW50X19oZWFkZXJcIj48aSBjbGFzcz1cImljb24gaWNvbi10aWNrXCI+PC9pPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWwtbW9kaWZpZXItY29udGVudF9fYm9keVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWZsb3cgdGV4dC1mbG93LS1idXR0b24gbGFiZWwtbW9kaWZpZXItY29udGVudF9fYm9keS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAge3sgbW9tZW50LmxhYmVsIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtZmxvdyB0ZXh0LWZsb3ctLWxlZ2FsIGxhYmVsLW1vZGlmaWVyLWNvbnRlbnRfX2JvZHktcmFuZ2VcIj5cbiAgICAgICAgICAgICAgICAgIHt7IG1vbWVudC5kaXNwbGF5VGltZSB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsLW1vZGlmaWVyLWNvbnRlbnRfX3RpbWluZyBpY29uLWFwcG9pbnRtZW50XCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==