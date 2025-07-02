var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgControl } from '@angular/forms';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Optional, Output, } from '@angular/core';
import { LabelUtil } from '../utils';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import * as i0 from "@angular/core";
import * as i1 from "@telenet/ng-lib-page";
import * as i2 from "../errors";
let InputAbstractComponent = class InputAbstractComponent {
    languageService;
    formService;
    messageGroupDirective;
    injector;
    valueChangesSubscription$;
    formSubscription$;
    messageGroup = '';
    labelPrefix;
    error = undefined;
    formControlName;
    trackingEvent = new EventEmitter();
    key;
    control;
    constructor(languageService, formService, messageGroupDirective, injector) {
        this.languageService = languageService;
        this.formService = formService;
        this.messageGroupDirective = messageGroupDirective;
        this.injector = injector;
    }
    ngOnInit() {
        this.control = this.injector?.get(NgControl);
        this.key = this.formControlName;
        this.initMessageGroup();
    }
    ngAfterViewInit() {
        this.valueChangesSubscription$ = this.control?.valueChanges?.pipe(untilDestroyed(this)).subscribe(() => {
            this.setError(this.control.errors);
        });
        this.formSubscription$ = this.formService.submit$.pipe(untilDestroyed(this)).subscribe(() => {
            this.setError(this.control.errors);
        });
    }
    initMessageGroup() {
        if (!this.messageGroup && this.messageGroupDirective && this.messageGroupDirective.messageGroup) {
            this.messageGroup = this.messageGroupDirective.messageGroup;
        }
    }
    getLabel(customLabel) {
        return LabelUtil.getLabelKeyWithTypeLabel(this.generateLabelKey(customLabel));
    }
    getTooltip(customLabel) {
        return LabelUtil.getLabelKeyWithTypeTooltip(this.generateLabelKey(customLabel));
    }
    setError(value) {
        if (value) {
            this.error = Object.keys(value)[0];
        }
        else {
            this.error = undefined;
        }
    }
    getPlaceholder(customLabel) {
        return LabelUtil.getLabelKeyWithTypePlaceholder(this.generateLabelKey(customLabel));
    }
    registerOnChange(_) {
        // empty implementation
    }
    registerOnTouched(_fn) {
        // empty implementation
    }
    setDisabledState(_isDisabled) {
        // empty implementation
    }
    writeValue(_obj) {
        // empty implementation
    }
    getText() {
        const keyList = [];
        if (this.messageGroup) {
            keyList.push(this.messageGroup);
        }
        if (this.labelPrefix) {
            keyList.push(this.labelPrefix);
        }
        keyList.push(this.formControlName.toString().toLowerCase());
        keyList.push(this.error?.toString()?.toLowerCase());
        return LabelUtil.getLabelKeyWithTypeError(keyList.join('.'));
    }
    generateLabelKey(customLabel) {
        const keyList = [];
        if (this.messageGroup) {
            keyList.push(this.messageGroup);
        }
        if (this.labelPrefix) {
            keyList.push(this.labelPrefix);
        }
        if (customLabel) {
            keyList.push(this.camelCaseToKebapCase(customLabel));
        }
        else {
            keyList.push(this.camelCaseToKebapCase(this.key || this.formControlName));
        }
        return keyList.join('.');
    }
    camelCaseToKebapCase(input) {
        return input
            ? input
                .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
                .replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1-$2')
                .toLowerCase()
            : '';
    }
    static ɵfac = function InputAbstractComponent_Factory(t) { return new (t || InputAbstractComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(i2.FormErrorService), i0.ɵɵdirectiveInject(i2.MessageGroupDirective, 8), i0.ɵɵdirectiveInject(i0.Injector)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputAbstractComponent, selectors: [["input-abstract-component"]], inputs: { messageGroup: "messageGroup", labelPrefix: "labelPrefix", error: "error", formControlName: "formControlName" }, outputs: { trackingEvent: "trackingEvent" }, decls: 0, vars: 0, template: function InputAbstractComponent_Template(rf, ctx) { }, encapsulation: 2 });
};
InputAbstractComponent = __decorate([
    UntilDestroy()
], InputAbstractComponent);
export { InputAbstractComponent };
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputAbstractComponent, [{
        type: Component,
        args: [{
                selector: 'input-abstract-component',
                template: '',
                changeDetection: ChangeDetectionStrategy.Default,
            }]
    }], () => [{ type: i1.LanguageService }, { type: i2.FormErrorService }, { type: i2.MessageGroupDirective, decorators: [{
                type: Optional
            }] }, { type: i0.Injector }], { messageGroup: [{
            type: Input
        }], labelPrefix: [{
            type: Input
        }], error: [{
            type: Input
        }], formControlName: [{
            type: Input
        }], trackingEvent: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputAbstractComponent, { className: "InputAbstractComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtYWJzdHJhY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnRyb2xzL2lucHV0LWFic3RyYWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQXdCLFNBQVMsRUFBb0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRixPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBRVosS0FBSyxFQUVMLFFBQVEsRUFDUixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFJdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNyQyxPQUFPLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7O0FBUzlELElBQU0sc0JBQXNCLEdBQTVCLE1BQU0sc0JBQXNCO0lBWWY7SUFDQTtJQUNZO0lBQ1o7SUFkbEIseUJBQXlCLENBQWdCO0lBQ3pDLGlCQUFpQixDQUFlO0lBQ3ZCLFlBQVksR0FBRyxFQUFFLENBQUM7SUFDbEIsV0FBVyxDQUFVO0lBQ3JCLEtBQUssR0FBWSxTQUFTLENBQUM7SUFDM0IsZUFBZSxDQUFTO0lBQ3ZCLGFBQWEsR0FBZ0MsSUFBSSxZQUFZLEVBQWlCLENBQUM7SUFDekYsR0FBRyxDQUFTO0lBQ1osT0FBTyxDQUFZO0lBRW5CLFlBQ2tCLGVBQWdDLEVBQ2hDLFdBQTZCLEVBQ2pCLHFCQUE0QyxFQUN4RCxRQUFrQjtRQUhsQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBQ2pCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDeEQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUNqQyxDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7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QkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxRQUFRLEVBQUUsRUFBRTtnQkFDWixlQUFlLEVBQUUsdUJBQXVCLENBQUMsT0FBTzthQUNqRDs7c0JBZUksUUFBUTs0Q0FYRixZQUFZO2tCQUFwQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFDSSxhQUFhO2tCQUF0QixNQUFNOztrRkFQSSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTmdDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3RvcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICdAdGVsZW5ldC9uZy1saWItcGFnZSc7XG5pbXBvcnQgeyBUcmFja2luZ0V2ZW50IH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBGb3JtRXJyb3JTZXJ2aWNlLCBNZXNzYWdlR3JvdXBEaXJlY3RpdmUgfSBmcm9tICcuLi9lcnJvcnMnO1xuaW1wb3J0IHsgTGFiZWxVdGlsIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgVW50aWxEZXN0cm95LCB1bnRpbERlc3Ryb3llZCB9IGZyb20gJ0BuZ25lYXQvdW50aWwtZGVzdHJveSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQFVudGlsRGVzdHJveSgpXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpbnB1dC1hYnN0cmFjdC1jb21wb25lbnQnLFxuICB0ZW1wbGF0ZTogJycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuRGVmYXVsdCxcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRBYnN0cmFjdENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICB2YWx1ZUNoYW5nZXNTdWJzY3JpcHRpb24kPzogU3Vic2NyaXB0aW9uO1xuICBmb3JtU3Vic2NyaXB0aW9uJDogU3Vic2NyaXB0aW9uO1xuICBASW5wdXQoKSBtZXNzYWdlR3JvdXAgPSAnJztcbiAgQElucHV0KCkgbGFiZWxQcmVmaXg/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGVycm9yOiB1bmtub3duID0gdW5kZWZpbmVkO1xuICBASW5wdXQoKSBmb3JtQ29udHJvbE5hbWU6IHN0cmluZztcbiAgQE91dHB1dCgpIHRyYWNraW5nRXZlbnQ6IEV2ZW50RW1pdHRlcjxUcmFja2luZ0V2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VHJhY2tpbmdFdmVudD4oKTtcbiAga2V5OiBzdHJpbmc7XG4gIGNvbnRyb2w6IE5nQ29udHJvbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcmVhZG9ubHkgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UsXG4gICAgcHVibGljIHJlYWRvbmx5IGZvcm1TZXJ2aWNlOiBGb3JtRXJyb3JTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyByZWFkb25seSBtZXNzYWdlR3JvdXBEaXJlY3RpdmU6IE1lc3NhZ2VHcm91cERpcmVjdGl2ZSxcbiAgICBwdWJsaWMgcmVhZG9ubHkgaW5qZWN0b3I6IEluamVjdG9yXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLmluamVjdG9yPy5nZXQoTmdDb250cm9sKTtcbiAgICB0aGlzLmtleSA9IHRoaXMuZm9ybUNvbnRyb2xOYW1lO1xuICAgIHRoaXMuaW5pdE1lc3NhZ2VHcm91cCgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudmFsdWVDaGFuZ2VzU3Vic2NyaXB0aW9uJCA9IHRoaXMuY29udHJvbD8udmFsdWVDaGFuZ2VzPy5waXBlKHVudGlsRGVzdHJveWVkKHRoaXMpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRFcnJvcih0aGlzLmNvbnRyb2wuZXJyb3JzKTtcbiAgICB9KTtcbiAgICB0aGlzLmZvcm1TdWJzY3JpcHRpb24kID0gdGhpcy5mb3JtU2VydmljZS5zdWJtaXQkLnBpcGUodW50aWxEZXN0cm95ZWQodGhpcykpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnNldEVycm9yKHRoaXMuY29udHJvbC5lcnJvcnMpO1xuICAgIH0pO1xuICB9XG5cbiAgaW5pdE1lc3NhZ2VHcm91cCgpIHtcbiAgICBpZiAoIXRoaXMubWVzc2FnZUdyb3VwICYmIHRoaXMubWVzc2FnZUdyb3VwRGlyZWN0aXZlICYmIHRoaXMubWVzc2FnZUdyb3VwRGlyZWN0aXZlLm1lc3NhZ2VHcm91cCkge1xuICAgICAgdGhpcy5tZXNzYWdlR3JvdXAgPSB0aGlzLm1lc3NhZ2VHcm91cERpcmVjdGl2ZS5tZXNzYWdlR3JvdXA7XG4gICAgfVxuICB9XG5cbiAgZ2V0TGFiZWwoY3VzdG9tTGFiZWw/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBMYWJlbFV0aWwuZ2V0TGFiZWxLZXlXaXRoVHlwZUxhYmVsKHRoaXMuZ2VuZXJhdGVMYWJlbEtleShjdXN0b21MYWJlbCkpO1xuICB9XG5cbiAgZ2V0VG9vbHRpcChjdXN0b21MYWJlbD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIExhYmVsVXRpbC5nZXRMYWJlbEtleVdpdGhUeXBlVG9vbHRpcCh0aGlzLmdlbmVyYXRlTGFiZWxLZXkoY3VzdG9tTGFiZWwpKTtcbiAgfVxuXG4gIHNldEVycm9yKHZhbHVlPzogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwpOiB2b2lkIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuZXJyb3IgPSBPYmplY3Qua2V5cyh2YWx1ZSlbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgZ2V0UGxhY2Vob2xkZXIoY3VzdG9tTGFiZWw/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBMYWJlbFV0aWwuZ2V0TGFiZWxLZXlXaXRoVHlwZVBsYWNlaG9sZGVyKHRoaXMuZ2VuZXJhdGVMYWJlbEtleShjdXN0b21MYWJlbCkpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShfOiB1bmtub3duKTogdm9pZCB7XG4gICAgLy8gZW1wdHkgaW1wbGVtZW50YXRpb25cbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKF9mbjogdW5rbm93bik6IHZvaWQge1xuICAgIC8vIGVtcHR5IGltcGxlbWVudGF0aW9uXG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKF9pc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgLy8gZW1wdHkgaW1wbGVtZW50YXRpb25cbiAgfVxuXG4gIHdyaXRlVmFsdWUoX29iajogdW5rbm93bik6IHZvaWQge1xuICAgIC8vIGVtcHR5IGltcGxlbWVudGF0aW9uXG4gIH1cblxuICBnZXRUZXh0KCkge1xuICAgIGNvbnN0IGtleUxpc3QgPSBbXTtcbiAgICBpZiAodGhpcy5tZXNzYWdlR3JvdXApIHtcbiAgICAgIGtleUxpc3QucHVzaCh0aGlzLm1lc3NhZ2VHcm91cCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmxhYmVsUHJlZml4KSB7XG4gICAgICBrZXlMaXN0LnB1c2godGhpcy5sYWJlbFByZWZpeCk7XG4gICAgfVxuICAgIGtleUxpc3QucHVzaCh0aGlzLmZvcm1Db250cm9sTmFtZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpO1xuICAgIGtleUxpc3QucHVzaCh0aGlzLmVycm9yPy50b1N0cmluZygpPy50b0xvd2VyQ2FzZSgpKTtcbiAgICByZXR1cm4gTGFiZWxVdGlsLmdldExhYmVsS2V5V2l0aFR5cGVFcnJvcihrZXlMaXN0LmpvaW4oJy4nKSk7XG4gIH1cblxuICBwcml2YXRlIGdlbmVyYXRlTGFiZWxLZXkoY3VzdG9tTGFiZWw/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBrZXlMaXN0ID0gW107XG4gICAgaWYgKHRoaXMubWVzc2FnZUdyb3VwKSB7XG4gICAgICBrZXlMaXN0LnB1c2godGhpcy5tZXNzYWdlR3JvdXApO1xuICAgIH1cbiAgICBpZiAodGhpcy5sYWJlbFByZWZpeCkge1xuICAgICAga2V5TGlzdC5wdXNoKHRoaXMubGFiZWxQcmVmaXgpO1xuICAgIH1cbiAgICBpZiAoY3VzdG9tTGFiZWwpIHtcbiAgICAgIGtleUxpc3QucHVzaCh0aGlzLmNhbWVsQ2FzZVRvS2ViYXBDYXNlKGN1c3RvbUxhYmVsKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleUxpc3QucHVzaCh0aGlzLmNhbWVsQ2FzZVRvS2ViYXBDYXNlKHRoaXMua2V5IHx8IHRoaXMuZm9ybUNvbnRyb2xOYW1lKSk7XG4gICAgfVxuICAgIHJldHVybiBrZXlMaXN0LmpvaW4oJy4nKTtcbiAgfVxuXG4gIHByaXZhdGUgY2FtZWxDYXNlVG9LZWJhcENhc2UoaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGlucHV0XG4gICAgICA/IGlucHV0XG4gICAgICAgICAgLnJlcGxhY2UoLyhbYS16MC05XSkoW0EtWl0pL2csICckMS0kMicpXG4gICAgICAgICAgLnJlcGxhY2UoLyhbQS1aXSkoW0EtWl0pKD89W2Etel0pL2csICckMS0kMicpXG4gICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgIDogJyc7XG4gIH1cbn1cbiJdfQ==