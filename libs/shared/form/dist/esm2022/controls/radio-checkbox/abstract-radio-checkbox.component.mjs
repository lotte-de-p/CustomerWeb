import { Component, EventEmitter, Input, Optional, Output } from '@angular/core';
import { InputAbstractComponent } from '../input-abstract.component';
import { LabelUtil } from '../../utils';
import * as i0 from "@angular/core";
import * as i1 from "@telenet/ng-lib-page";
import * as i2 from "../../errors";
export class AbstractRadioCheckboxComponent extends InputAbstractComponent {
    languageService;
    formService;
    messageGroupDirective;
    injector;
    optionList = [];
    customLabel = false;
    hideError = false;
    customOptionLabel = false;
    multipleSelectable = false;
    selectEvent = new EventEmitter();
    selectedOption;
    constructor(languageService, formService, messageGroupDirective, injector) {
        super(languageService, formService, messageGroupDirective, injector);
        this.languageService = languageService;
        this.formService = formService;
        this.messageGroupDirective = messageGroupDirective;
        this.injector = injector;
    }
    onChange = (_value) => {
        // empty implementation
    };
    onTouch = (_touched) => {
        // empty implementation
    };
    toHideError() {
        return this.hideError;
    }
    getOptionLabel(option) {
        if (this.customOptionLabel) {
            return option.label;
        }
        return LabelUtil.getLabelKeyWithTypeLabel(this.getKey(option.label));
    }
    getOptionText(option) {
        return LabelUtil.getLabelKeyWithTypeText(this.getKey(option.label));
    }
    getLabelValue(option) {
        if (this.customOptionLabel) {
            return option;
        }
        return LabelUtil.getLabelKeyWithTypeLabel(this.getKey(option));
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    setDisabledState(_isDisabled) {
        // empty implementation
    }
    getKey(key) {
        if (this.messageGroup) {
            key = this.messageGroup + '.' + key;
        }
        return key;
    }
    static ɵfac = function AbstractRadioCheckboxComponent_Factory(t) { return new (t || AbstractRadioCheckboxComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(i2.FormErrorService), i0.ɵɵdirectiveInject(i2.MessageGroupDirective, 8), i0.ɵɵdirectiveInject(i0.Injector)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AbstractRadioCheckboxComponent, selectors: [["abstract-radio-checkbox"]], inputs: { optionList: "optionList", customLabel: "customLabel", hideError: "hideError", customOptionLabel: "customOptionLabel", multipleSelectable: "multipleSelectable" }, outputs: { selectEvent: "selectEvent" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function AbstractRadioCheckboxComponent_Template(rf, ctx) { }, encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AbstractRadioCheckboxComponent, [{
        type: Component,
        args: [{
                selector: 'abstract-radio-checkbox',
                template: '',
            }]
    }], () => [{ type: i1.LanguageService }, { type: i2.FormErrorService }, { type: i2.MessageGroupDirective, decorators: [{
                type: Optional
            }] }, { type: i0.Injector }], { optionList: [{
            type: Input
        }], customLabel: [{
            type: Input
        }], hideError: [{
            type: Input
        }], customOptionLabel: [{
            type: Input
        }], multipleSelectable: [{
            type: Input
        }], selectEvent: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AbstractRadioCheckboxComponent, { className: "AbstractRadioCheckboxComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtcmFkaW8tY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xzL3JhZGlvLWNoZWNrYm94L2Fic3RyYWN0LXJhZGlvLWNoZWNrYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBWSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUdyRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7O0FBTXhDLE1BQU0sT0FBTyw4QkFBK0IsU0FBUSxzQkFBc0I7SUFVL0Q7SUFDQTtJQUNZO0lBQ1o7SUFaQSxVQUFVLEdBQWtCLEVBQUUsQ0FBQztJQUMvQixXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDbEIsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQzFCLGtCQUFrQixHQUFHLEtBQUssQ0FBQztJQUMxQixXQUFXLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7SUFDM0UsY0FBYyxDQUFlO0lBRTdCLFlBQ1MsZUFBZ0MsRUFDaEMsV0FBNkIsRUFDakIscUJBQTRDLEVBQ3hELFFBQWtCO1FBRXpCLEtBQUssQ0FBQyxlQUFlLEVBQUUsV0FBVyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBTDlELG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFDakIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUN4RCxhQUFRLEdBQVIsUUFBUSxDQUFVO0lBRzNCLENBQUM7SUFFRCxRQUFRLEdBQUcsQ0FBQyxNQUF5QixFQUFFLEVBQUU7UUFDdkMsdUJBQXVCO0lBQ3pCLENBQUMsQ0FBQztJQUNGLE9BQU8sR0FBRyxDQUFDLFFBQTBCLEVBQUUsRUFBRTtRQUN2Qyx1QkFBdUI7SUFDekIsQ0FBQyxDQUFDO0lBRUYsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQsY0FBYyxDQUFDLE1BQW1CO1FBQ2hDLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDM0IsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7UUFDRCxPQUFPLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxhQUFhLENBQUMsTUFBbUI7UUFDL0IsT0FBTyxTQUFTLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQsYUFBYSxDQUFDLE1BQWM7UUFDMUIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUMzQixPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDO1FBQ0QsT0FBTyxTQUFTLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFnQjtRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsaUJBQWlCLENBQUMsRUFBZ0I7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELGdCQUFnQixDQUFDLFdBQW9CO1FBQ25DLHVCQUF1QjtJQUN6QixDQUFDO0lBRVMsTUFBTSxDQUFDLEdBQVc7UUFDMUIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDdEIsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUN0QyxDQUFDO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO3dGQWhFVSw4QkFBOEI7NkRBQTlCLDhCQUE4Qjs7aUZBQTlCLDhCQUE4QjtjQUoxQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsUUFBUSxFQUFFLEVBQUU7YUFDYjs7c0JBYUksUUFBUTs0Q0FYRixVQUFVO2tCQUFsQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFDRyxrQkFBa0I7a0JBQTFCLEtBQUs7WUFDSSxXQUFXO2tCQUFwQixNQUFNOztrRkFOSSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICdAdGVsZW5ldC9uZy1saWItcGFnZSc7XG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5qZWN0b3IsIElucHV0LCBPcHRpb25hbCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dEFic3RyYWN0Q29tcG9uZW50IH0gZnJvbSAnLi4vaW5wdXQtYWJzdHJhY3QuY29tcG9uZW50JztcbmltcG9ydCB7IElucHV0T3B0aW9uIH0gZnJvbSAnLi4vcmFkaW8nO1xuaW1wb3J0IHsgRm9ybUVycm9yU2VydmljZSwgTWVzc2FnZUdyb3VwRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZXJyb3JzJztcbmltcG9ydCB7IExhYmVsVXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWJzdHJhY3QtcmFkaW8tY2hlY2tib3gnLFxuICB0ZW1wbGF0ZTogJycsXG59KVxuZXhwb3J0IGNsYXNzIEFic3RyYWN0UmFkaW9DaGVja2JveENvbXBvbmVudCBleHRlbmRzIElucHV0QWJzdHJhY3RDb21wb25lbnQge1xuICBASW5wdXQoKSBvcHRpb25MaXN0OiBJbnB1dE9wdGlvbltdID0gW107XG4gIEBJbnB1dCgpIGN1c3RvbUxhYmVsID0gZmFsc2U7XG4gIEBJbnB1dCgpIGhpZGVFcnJvciA9IGZhbHNlO1xuICBASW5wdXQoKSBjdXN0b21PcHRpb25MYWJlbCA9IGZhbHNlO1xuICBASW5wdXQoKSBtdWx0aXBsZVNlbGVjdGFibGUgPSBmYWxzZTtcbiAgQE91dHB1dCgpIHNlbGVjdEV2ZW50OiBFdmVudEVtaXR0ZXI8dW5rbm93bj4gPSBuZXcgRXZlbnRFbWl0dGVyPHVua25vd24+KCk7XG4gIHNlbGVjdGVkT3B0aW9uPzogSW5wdXRPcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgIHB1YmxpYyBmb3JtU2VydmljZTogRm9ybUVycm9yU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgbWVzc2FnZUdyb3VwRGlyZWN0aXZlOiBNZXNzYWdlR3JvdXBEaXJlY3RpdmUsXG4gICAgcHVibGljIGluamVjdG9yOiBJbmplY3RvclxuICApIHtcbiAgICBzdXBlcihsYW5ndWFnZVNlcnZpY2UsIGZvcm1TZXJ2aWNlLCBtZXNzYWdlR3JvdXBEaXJlY3RpdmUsIGluamVjdG9yKTtcbiAgfVxuXG4gIG9uQ2hhbmdlID0gKF92YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10pID0+IHtcbiAgICAvLyBlbXB0eSBpbXBsZW1lbnRhdGlvblxuICB9O1xuICBvblRvdWNoID0gKF90b3VjaGVkOiBzdHJpbmcgfCBib29sZWFuKSA9PiB7XG4gICAgLy8gZW1wdHkgaW1wbGVtZW50YXRpb25cbiAgfTtcblxuICB0b0hpZGVFcnJvcigpIHtcbiAgICByZXR1cm4gdGhpcy5oaWRlRXJyb3I7XG4gIH1cblxuICBnZXRPcHRpb25MYWJlbChvcHRpb246IElucHV0T3B0aW9uKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5jdXN0b21PcHRpb25MYWJlbCkge1xuICAgICAgcmV0dXJuIG9wdGlvbi5sYWJlbDtcbiAgICB9XG4gICAgcmV0dXJuIExhYmVsVXRpbC5nZXRMYWJlbEtleVdpdGhUeXBlTGFiZWwodGhpcy5nZXRLZXkob3B0aW9uLmxhYmVsKSk7XG4gIH1cblxuICBnZXRPcHRpb25UZXh0KG9wdGlvbjogSW5wdXRPcHRpb24pOiBzdHJpbmcge1xuICAgIHJldHVybiBMYWJlbFV0aWwuZ2V0TGFiZWxLZXlXaXRoVHlwZVRleHQodGhpcy5nZXRLZXkob3B0aW9uLmxhYmVsKSk7XG4gIH1cblxuICBnZXRMYWJlbFZhbHVlKG9wdGlvbjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5jdXN0b21PcHRpb25MYWJlbCkge1xuICAgICAgcmV0dXJuIG9wdGlvbjtcbiAgICB9XG4gICAgcmV0dXJuIExhYmVsVXRpbC5nZXRMYWJlbEtleVdpdGhUeXBlTGFiZWwodGhpcy5nZXRLZXkob3B0aW9uKSk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBWb2lkRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogVm9pZEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKF9pc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgLy8gZW1wdHkgaW1wbGVtZW50YXRpb25cbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRLZXkoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLm1lc3NhZ2VHcm91cCkge1xuICAgICAga2V5ID0gdGhpcy5tZXNzYWdlR3JvdXAgKyAnLicgKyBrZXk7XG4gICAgfVxuICAgIHJldHVybiBrZXk7XG4gIH1cbn1cbiJdfQ==