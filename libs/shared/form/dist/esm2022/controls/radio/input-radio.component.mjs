import { Component, EventEmitter, forwardRef, Input, Optional, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputAbstractComponent } from '../input-abstract.component';
import { InputOption } from './model';
import { LabelUtil } from '../../utils';
import * as i0 from "@angular/core";
import * as i1 from "@telenet/ng-lib-page";
import * as i2 from "../../errors";
import * as i3 from "@angular/common";
import * as i4 from "@ngx-translate/core";
function InputRadioComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 3);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "div", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 1, ctx_r0.getLabel()));
} }
function InputRadioComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5)(1, "span", 6);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 1, ctx_r1.getText()));
} }
function InputRadioComponent_ng_container_3_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 4);
} }
function InputRadioComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "div", 7)(3, "input", 8);
    i0.ɵɵlistener("click", function InputRadioComponent_ng_container_3_Template_input_click_3_listener() { const restoredCtx = i0.ɵɵrestoreView(_r7); const option_r3 = restoredCtx.$implicit; const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.selectOption(option_r3)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "label", 9);
    i0.ɵɵtext(5, "\u00A0");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(6, "label", 10);
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, InputRadioComponent_ng_container_3_div_8_Template, 1, 0, "div", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r2.surroundingClass);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate2("name", "", ctx_r2.id, "-", ctx_r2.key, "");
    i0.ɵɵpropertyInterpolate("value", option_r3.value);
    i0.ɵɵpropertyInterpolate3("id", "", ctx_r2.id, "-", i_r4, "-", ctx_r2.key, "");
    i0.ɵɵproperty("checked", ctx_r2.selectedOption && option_r3.value === ctx_r2.selectedOption.value);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate3("for", "", ctx_r2.id, "-", i_r4, "-", ctx_r2.key, "");
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate3("for", "", ctx_r2.id, "-", i_r4, "-", ctx_r2.key, "");
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(7, 18, ctx_r2.getOptionLabel(option_r3)), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r2.hideSpace);
} }
export class InputRadioComponent extends InputAbstractComponent {
    languageService;
    formService;
    messageGroupDirective;
    injector;
    messageGroup = '';
    optionList;
    customLabel = false;
    customOptionLabel = false;
    multipleSelectable = false;
    selectedOption;
    surroundingClass = '';
    horizontalStyle = '';
    useCustomLabel = false;
    id = 'choice';
    hideSpace = false;
    clearErrorMessagesFunction = new EventEmitter();
    error;
    constructor(languageService, formService, messageGroupDirective, injector) {
        super(languageService, formService, messageGroupDirective, injector);
        this.languageService = languageService;
        this.formService = formService;
        this.messageGroupDirective = messageGroupDirective;
        this.injector = injector;
    }
    onChange(_value) {
        // empty implementation
    }
    onTouch = (_touched) => {
        // empty implementation
    };
    hasError(errorString) {
        return this.error === errorString;
    }
    getOptionLabel(option) {
        if (this.customOptionLabel) {
            return option.label;
        }
        return LabelUtil.getLabelKeyWithTypeLabel(this.getKey(option.label));
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    getLabel() {
        if (this.customLabel) {
            return super.getLabel();
        }
        return 'controls.input-radio-image.choose';
    }
    writeValue(optionValue) {
        this.selectedOption = new InputOption('', '', false);
        if (optionValue) {
            this.selectedOption = this.optionList.find((optionOfList) => {
                return optionOfList.value === optionValue;
            });
        }
    }
    selectOption(option) {
        this.clearErrorMessagesFunction.emit();
        this.selectedOption = option;
        this.onTouch(!!option.value);
        this.onChange(option.value);
    }
    getKey(key) {
        if (this.messageGroup) {
            key = this.messageGroup + '.' + key;
        }
        return key;
    }
    static ɵfac = function InputRadioComponent_Factory(t) { return new (t || InputRadioComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(i2.FormErrorService), i0.ɵɵdirectiveInject(i2.MessageGroupDirective, 8), i0.ɵɵdirectiveInject(i0.Injector)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputRadioComponent, selectors: [["tg-form-radio"]], inputs: { messageGroup: "messageGroup", optionList: "optionList", customLabel: "customLabel", customOptionLabel: "customOptionLabel", multipleSelectable: "multipleSelectable", selectedOption: "selectedOption", surroundingClass: "surroundingClass", horizontalStyle: "horizontalStyle", useCustomLabel: "useCustomLabel", id: "id", hideSpace: "hideSpace" }, outputs: { clearErrorMessagesFunction: "clearErrorMessagesFunction" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputRadioComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 6, consts: [[4, "ngIf"], ["class", "notification notification--errorfield", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "label-input-flow"], [1, "whitespace", "whitespace--tiny"], [1, "notification", "notification--errorfield"], [1, "icon", "icon-error-shape", "errorfield"], [1, "form__radio"], ["type", "radio", 1, "form__radio__input", 3, "name", "value", "id", "checked", "click"], [1, "form__radio__label", 3, "for"], [1, "label--large", 3, "for", "innerHTML"], ["class", "whitespace whitespace--tiny", 4, "ngIf"]], template: function InputRadioComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, InputRadioComponent_div_0_Template, 5, 3, "div", 0)(1, InputRadioComponent_div_1_Template, 4, 3, "div", 1);
            i0.ɵɵelementStart(2, "div");
            i0.ɵɵtemplate(3, InputRadioComponent_ng_container_3_Template, 9, 20, "ng-container", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.useCustomLabel);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.error);
            i0.ɵɵadvance();
            i0.ɵɵclassMap(ctx.horizontalStyle);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.optionList);
        } }, dependencies: [i3.NgForOf, i3.NgIf, i4.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputRadioComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-radio', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputRadioComponent),
                        multi: true,
                    },
                ], template: "<div *ngIf=\"!useCustomLabel\">\n  <div class=\"label-input-flow\">{{ getLabel() | translate }}</div>\n  <div class=\"whitespace whitespace--tiny\"></div>\n</div>\n<div *ngIf=\"error\" class=\"notification notification--errorfield\">\n  <span class=\"icon icon-error-shape errorfield\">{{ getText() | translate }}</span>\n</div>\n<div class=\"{{ horizontalStyle }}\">\n  <ng-container *ngFor=\"let option of optionList; let i = index\">\n    <div class=\"{{ surroundingClass }}\">\n      <div class=\"form__radio\">\n        <input\n          type=\"radio\"\n          name=\"{{ id }}-{{ key }}\"\n          value=\"{{ option.value }}\"\n          id=\"{{ id }}-{{ i }}-{{ key }}\"\n          class=\"form__radio__input\"\n          [checked]=\"selectedOption && option.value === selectedOption.value\"\n          (click)=\"selectOption(option)\" />\n\n        <label class=\"form__radio__label\" for=\"{{ id }}-{{ i }}-{{ key }}\">&nbsp;</label>\n      </div>\n      <label class=\"label--large\" for=\"{{ id }}-{{ i }}-{{ key }}\" [innerHTML]=\"getOptionLabel(option) | translate\">\n      </label>\n    </div>\n    <div *ngIf=\"!hideSpace\" class=\"whitespace whitespace--tiny\"></div>\n  </ng-container>\n</div>\n" }]
    }], () => [{ type: i1.LanguageService }, { type: i2.FormErrorService }, { type: i2.MessageGroupDirective, decorators: [{
                type: Optional
            }] }, { type: i0.Injector }], { messageGroup: [{
            type: Input
        }], optionList: [{
            type: Input
        }], customLabel: [{
            type: Input
        }], customOptionLabel: [{
            type: Input
        }], multipleSelectable: [{
            type: Input
        }], selectedOption: [{
            type: Input
        }], surroundingClass: [{
            type: Input
        }], horizontalStyle: [{
            type: Input
        }], useCustomLabel: [{
            type: Input
        }], id: [{
            type: Input
        }], hideSpace: [{
            type: Input
        }], clearErrorMessagesFunction: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputRadioComponent, { className: "InputRadioComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtcmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xzL3JhZGlvL2lucHV0LXJhZGlvLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3NyYy9jb250cm9scy9yYWRpby9pbnB1dC1yYWRpby5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQVksS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUV0QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7Ozs7O0lDTnhDLDJCQUE2QixhQUFBO0lBQ0csWUFBNEI7O0lBQUEsaUJBQU07SUFDaEUseUJBQStDO0lBQ2pELGlCQUFNOzs7SUFGMEIsZUFBNEI7SUFBNUIsNkRBQTRCOzs7SUFHNUQsOEJBQWlFLGNBQUE7SUFDaEIsWUFBMkI7O0lBQUEsaUJBQU8sRUFBQTs7O0lBQWxDLGVBQTJCO0lBQTNCLDREQUEyQjs7O0lBb0J4RSx5QkFBa0U7Ozs7SUFqQnBFLDZCQUErRDtJQUM3RCwyQkFBb0MsYUFBQSxlQUFBO0lBUzlCLHFPQUFTLGVBQUEsOEJBQW9CLENBQUEsSUFBQztJQVBoQyxpQkFPbUM7SUFFbkMsZ0NBQW1FO0lBQUEsc0JBQU07SUFBQSxpQkFBUSxFQUFBO0lBRW5GLDRCQUNROztJQUNWLGlCQUFNO0lBQ04sb0ZBQWtFO0lBQ3BFLDBCQUFlOzs7OztJQWpCUixjQUE4QjtJQUE5QixzQ0FBOEI7SUFJN0IsZUFBeUI7SUFBekIscUVBQXlCO0lB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QUF0QixLQUFLO1lBQ0csRUFBRTtrQkFBVixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNJLDBCQUEwQjtrQkFBbkMsTUFBTTs7a0ZBWkksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIEluamVjdG9yLCBJbnB1dCwgT3B0aW9uYWwsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnQHRlbGVuZXQvbmctbGliLXBhZ2UnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJbnB1dEFic3RyYWN0Q29tcG9uZW50IH0gZnJvbSAnLi4vaW5wdXQtYWJzdHJhY3QuY29tcG9uZW50JztcbmltcG9ydCB7IElucHV0T3B0aW9uIH0gZnJvbSAnLi9tb2RlbCc7XG5pbXBvcnQgeyBGb3JtRXJyb3JTZXJ2aWNlLCBNZXNzYWdlR3JvdXBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9lcnJvcnMnO1xuaW1wb3J0IHsgTGFiZWxVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0Zy1mb3JtLXJhZGlvJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LXJhZGlvLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBJbnB1dFJhZGlvQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIElucHV0UmFkaW9Db21wb25lbnQgZXh0ZW5kcyBJbnB1dEFic3RyYWN0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgbWVzc2FnZUdyb3VwID0gJyc7XG4gIEBJbnB1dCgpIG9wdGlvbkxpc3Q6IElucHV0T3B0aW9uW107XG4gIEBJbnB1dCgpIGN1c3RvbUxhYmVsID0gZmFsc2U7XG4gIEBJbnB1dCgpIGN1c3RvbU9wdGlvbkxhYmVsID0gZmFsc2U7XG4gIEBJbnB1dCgpIG11bHRpcGxlU2VsZWN0YWJsZSA9IGZhbHNlO1xuICBASW5wdXQoKSBzZWxlY3RlZE9wdGlvbj86IElucHV0T3B0aW9uO1xuICBASW5wdXQoKSBzdXJyb3VuZGluZ0NsYXNzID0gJyc7XG4gIEBJbnB1dCgpIGhvcml6b250YWxTdHlsZSA9ICcnO1xuICBASW5wdXQoKSB1c2VDdXN0b21MYWJlbCA9IGZhbHNlO1xuICBASW5wdXQoKSBpZCA9ICdjaG9pY2UnO1xuICBASW5wdXQoKSBoaWRlU3BhY2UgPSBmYWxzZTtcbiAgQE91dHB1dCgpIGNsZWFyRXJyb3JNZXNzYWdlc0Z1bmN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBkZWNsYXJlIGVycm9yOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgIHB1YmxpYyBmb3JtU2VydmljZTogRm9ybUVycm9yU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgbWVzc2FnZUdyb3VwRGlyZWN0aXZlOiBNZXNzYWdlR3JvdXBEaXJlY3RpdmUsXG4gICAgcHVibGljIGluamVjdG9yOiBJbmplY3RvclxuICApIHtcbiAgICBzdXBlcihsYW5ndWFnZVNlcnZpY2UsIGZvcm1TZXJ2aWNlLCBtZXNzYWdlR3JvdXBEaXJlY3RpdmUsIGluamVjdG9yKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKF92YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgLy8gZW1wdHkgaW1wbGVtZW50YXRpb25cbiAgfVxuXG4gIG9uVG91Y2ggPSAoX3RvdWNoZWQ6IGJvb2xlYW4pOiB2b2lkID0+IHtcbiAgICAvLyBlbXB0eSBpbXBsZW1lbnRhdGlvblxuICB9O1xuXG4gIGhhc0Vycm9yKGVycm9yU3RyaW5nOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5lcnJvciA9PT0gZXJyb3JTdHJpbmc7XG4gIH1cblxuICBnZXRPcHRpb25MYWJlbChvcHRpb246IElucHV0T3B0aW9uKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5jdXN0b21PcHRpb25MYWJlbCkge1xuICAgICAgcmV0dXJuIG9wdGlvbi5sYWJlbDtcbiAgICB9XG4gICAgcmV0dXJuIExhYmVsVXRpbC5nZXRMYWJlbEtleVdpdGhUeXBlTGFiZWwodGhpcy5nZXRLZXkob3B0aW9uLmxhYmVsKSk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBWb2lkRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogVm9pZEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoID0gZm47XG4gIH1cblxuICBnZXRMYWJlbCgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmN1c3RvbUxhYmVsKSB7XG4gICAgICByZXR1cm4gc3VwZXIuZ2V0TGFiZWwoKTtcbiAgICB9XG4gICAgcmV0dXJuICdjb250cm9scy5pbnB1dC1yYWRpby1pbWFnZS5jaG9vc2UnO1xuICB9XG5cbiAgd3JpdGVWYWx1ZShvcHRpb25WYWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IG5ldyBJbnB1dE9wdGlvbignJywgJycsIGZhbHNlKTtcbiAgICBpZiAob3B0aW9uVmFsdWUpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSB0aGlzLm9wdGlvbkxpc3QuZmluZCgob3B0aW9uT2ZMaXN0KSA9PiB7XG4gICAgICAgIHJldHVybiBvcHRpb25PZkxpc3QudmFsdWUgPT09IG9wdGlvblZhbHVlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNlbGVjdE9wdGlvbihvcHRpb246IElucHV0T3B0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhckVycm9yTWVzc2FnZXNGdW5jdGlvbi5lbWl0KCk7XG4gICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IG9wdGlvbjtcbiAgICB0aGlzLm9uVG91Y2goISFvcHRpb24udmFsdWUpO1xuICAgIHRoaXMub25DaGFuZ2Uob3B0aW9uLnZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0S2V5KGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5tZXNzYWdlR3JvdXApIHtcbiAgICAgIGtleSA9IHRoaXMubWVzc2FnZUdyb3VwICsgJy4nICsga2V5O1xuICAgIH1cbiAgICByZXR1cm4ga2V5O1xuICB9XG59XG4iLCI8ZGl2ICpuZ0lmPVwiIXVzZUN1c3RvbUxhYmVsXCI+XG4gIDxkaXYgY2xhc3M9XCJsYWJlbC1pbnB1dC1mbG93XCI+e3sgZ2V0TGFiZWwoKSB8IHRyYW5zbGF0ZSB9fTwvZGl2PlxuICA8ZGl2IGNsYXNzPVwid2hpdGVzcGFjZSB3aGl0ZXNwYWNlLS10aW55XCI+PC9kaXY+XG48L2Rpdj5cbjxkaXYgKm5nSWY9XCJlcnJvclwiIGNsYXNzPVwibm90aWZpY2F0aW9uIG5vdGlmaWNhdGlvbi0tZXJyb3JmaWVsZFwiPlxuICA8c3BhbiBjbGFzcz1cImljb24gaWNvbi1lcnJvci1zaGFwZSBlcnJvcmZpZWxkXCI+e3sgZ2V0VGV4dCgpIHwgdHJhbnNsYXRlIH19PC9zcGFuPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwie3sgaG9yaXpvbnRhbFN0eWxlIH19XCI+XG4gIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBvcHRpb25MaXN0OyBsZXQgaSA9IGluZGV4XCI+XG4gICAgPGRpdiBjbGFzcz1cInt7IHN1cnJvdW5kaW5nQ2xhc3MgfX1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtX19yYWRpb1wiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgIG5hbWU9XCJ7eyBpZCB9fS17eyBrZXkgfX1cIlxuICAgICAgICAgIHZhbHVlPVwie3sgb3B0aW9uLnZhbHVlIH19XCJcbiAgICAgICAgICBpZD1cInt7IGlkIH19LXt7IGkgfX0te3sga2V5IH19XCJcbiAgICAgICAgICBjbGFzcz1cImZvcm1fX3JhZGlvX19pbnB1dFwiXG4gICAgICAgICAgW2NoZWNrZWRdPVwic2VsZWN0ZWRPcHRpb24gJiYgb3B0aW9uLnZhbHVlID09PSBzZWxlY3RlZE9wdGlvbi52YWx1ZVwiXG4gICAgICAgICAgKGNsaWNrKT1cInNlbGVjdE9wdGlvbihvcHRpb24pXCIgLz5cblxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtX19yYWRpb19fbGFiZWxcIiBmb3I9XCJ7eyBpZCB9fS17eyBpIH19LXt7IGtleSB9fVwiPiZuYnNwOzwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsLS1sYXJnZVwiIGZvcj1cInt7IGlkIH19LXt7IGkgfX0te3sga2V5IH19XCIgW2lubmVySFRNTF09XCJnZXRPcHRpb25MYWJlbChvcHRpb24pIHwgdHJhbnNsYXRlXCI+XG4gICAgICA8L2xhYmVsPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgKm5nSWY9XCIhaGlkZVNwYWNlXCIgY2xhc3M9XCJ3aGl0ZXNwYWNlIHdoaXRlc3BhY2UtLXRpbnlcIj48L2Rpdj5cbiAgPC9uZy1jb250YWluZXI+XG48L2Rpdj5cbiJdfQ==