var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, EventEmitter, forwardRef, Input, Optional, Output, ViewChild, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputAbstractComponent } from '../../input-abstract.component';
import { AppointmentPickerTypeEnum } from '../appointment-picker-type.enum';
import { AppointmentSlotOption } from '../appointment-slot-option.model';
import { InputAppointmentPickerByMomentComponent } from '../appointment-picker-by-moment';
import { InputAppointmentPickerByDateComponent } from '../appointment-picker-by-date';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import * as i0 from "@angular/core";
import * as i1 from "../../../errors";
import * as i2 from "@telenet/ng-lib-page";
const _c0 = ["appointmentPickerComponent"];
let InputAppointmentPickerComponent = class InputAppointmentPickerComponent extends InputAbstractComponent {
    viewContainerRef;
    messageGroupDirective;
    languageService;
    formErrorService;
    injector;
    startDate = new Date();
    endDate;
    timeslots;
    slidesToScroll;
    slidesToShow;
    appointmentPickerType;
    updateSlots;
    showLoadMore;
    consumerType;
    disableLoadMore;
    error;
    isDeviceLandscape;
    reset;
    enableAppointmentsUI;
    loadMore = new EventEmitter();
    scrollTo = new EventEmitter();
    sendAnalytics = new EventEmitter();
    appointmentPickerComponent;
    componentRef;
    selectedAppointmentSlotOption;
    constructor(viewContainerRef, messageGroupDirective, languageService, formErrorService, injector) {
        super(languageService, formErrorService, messageGroupDirective, injector);
        this.viewContainerRef = viewContainerRef;
        this.messageGroupDirective = messageGroupDirective;
        this.languageService = languageService;
        this.formErrorService = formErrorService;
        this.injector = injector;
    }
    onChange = (_) => {
        // empty implementation
    };
    onTouched = () => {
        // empty implementation
    };
    ngOnInit() {
        super.ngOnInit();
        this.initMessageGroup();
        this.loadAppointmentPickerComponent();
    }
    setError(value) {
        if (value) {
            this.componentRef.instance.error = Object.keys(value)[0];
        }
        else {
            this.componentRef.instance.error = null;
        }
    }
    ngOnChanges(changes) {
        if (changes['appointmentPickerType']) {
            this.formErrorService.reset$.next(null);
            this.appointmentPickerType = changes['appointmentPickerType'].currentValue;
            this.loadAppointmentPickerComponent();
        }
        if (changes['reset']?.currentValue) {
            this.loadAppointmentPickerComponent();
        }
        if (changes['showLoadMore']) {
            this.componentRef.instance.showLoadMore = this.showLoadMore;
        }
        if (changes['updateSlots']) {
            this.componentRef.instance.updateSlots = this.updateSlots;
        }
        if (changes['disableLoadMore']) {
            this.componentRef.instance.disableLoadMore = this.disableLoadMore;
        }
        if (changes['error']) {
            this.setError(this.error);
        }
        if (changes['isDeviceLandscape']) {
            this.componentRef.instance.isDeviceLandscape = this.isDeviceLandscape;
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(_) {
        // empty implementation
    }
    writeValue(appointmentSlotOption) {
        if (appointmentSlotOption) {
            this.selectedAppointmentSlotOption = appointmentSlotOption;
            this.componentRef.instance.setSelectedAppointment(appointmentSlotOption);
        }
    }
    loadAppointmentPickerComponent() {
        this.viewContainerRef.clear();
        const component = this.appointmentPickerType === AppointmentPickerTypeEnum.BY_DATE
            ? InputAppointmentPickerByDateComponent
            : InputAppointmentPickerByMomentComponent;
        this.componentRef = this.viewContainerRef.createComponent(component);
        this.componentRef.changeDetectorRef.detectChanges();
        this.setSelectedAppointment(new AppointmentSlotOption(null, null));
        this.componentRef.instance.startDate = this.startDate;
        this.componentRef.instance.endDate = this.endDate;
        this.componentRef.instance.timeslots = this.timeslots;
        this.componentRef.instance.slidesToScroll = this.slidesToScroll;
        this.componentRef.instance.appointmentSlotSelected
            .pipe(untilDestroyed(this))
            .subscribe((selectedAppointment) => {
            this.setSelectedAppointment(selectedAppointment);
        });
        this.componentRef.instance.messageGroup = this.messageGroup;
        this.componentRef.instance.initialised = true;
        this.componentRef.instance.setLabels([
            this.messageGroup || '',
            this.formControlName,
        ]);
        this.componentRef.instance.error = this.error;
        this.componentRef.instance.updateSlots = this.updateSlots;
        this.componentRef.instance.showLoadMore = this.showLoadMore;
        this.componentRef.instance.loadMore
            ?.pipe(untilDestroyed(this))
            .subscribe((value) => {
            this.loadMore.emit(value);
        });
        this.componentRef.instance.consumerType = this.consumerType;
        this.componentRef.instance.disableLoadMore = this.disableLoadMore;
        this.componentRef.instance.scrollTo
            ?.pipe(untilDestroyed(this))
            .subscribe((section) => {
            this.scrollTo.emit(section);
        });
        this.componentRef.instance.slidesToShow = this.slidesToShow;
        this.componentRef.instance.appointmentPickerType =
            this.appointmentPickerType;
        this.componentRef.instance.isDeviceLandscape = this.isDeviceLandscape;
        this.componentRef.instance.enableAppointmentsUI =
            this.enableAppointmentsUI;
    }
    setSelectedAppointment(selectedAppointment) {
        this.onChange(selectedAppointment);
        this.sendAnalytics.emit(selectedAppointment);
        this.onTouched();
        this.componentRef.instance.error = null;
    }
    static ɵfac = function InputAppointmentPickerComponent_Factory(t) { return new (t || InputAppointmentPickerComponent)(i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i1.MessageGroupDirective, 8), i0.ɵɵdirectiveInject(i2.LanguageService), i0.ɵɵdirectiveInject(i1.FormErrorService), i0.ɵɵdirectiveInject(i0.Injector)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputAppointmentPickerComponent, selectors: [["app-form-appointment-picker"]], viewQuery: function InputAppointmentPickerComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.appointmentPickerComponent = _t.first);
        } }, inputs: { startDate: "startDate", endDate: "endDate", timeslots: "timeslots", slidesToScroll: "slidesToScroll", slidesToShow: "slidesToShow", appointmentPickerType: "appointmentPickerType", updateSlots: "updateSlots", showLoadMore: "showLoadMore", consumerType: "consumerType", disableLoadMore: "disableLoadMore", error: "error", isDeviceLandscape: "isDeviceLandscape", reset: "reset", enableAppointmentsUI: "enableAppointmentsUI" }, outputs: { loadMore: "loadMore", scrollTo: "scrollTo", sendAnalytics: "sendAnalytics" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputAppointmentPickerComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 2, vars: 0, consts: [["appointmentPickerComponent", ""]], template: function InputAppointmentPickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementContainer(0, null, 0);
        } }, encapsulation: 2 });
};
InputAppointmentPickerComponent = __decorate([
    UntilDestroy()
], InputAppointmentPickerComponent);
export { InputAppointmentPickerComponent };
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputAppointmentPickerComponent, [{
        type: Component,
        args: [{ selector: 'app-form-appointment-picker', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputAppointmentPickerComponent),
                        multi: true,
                    },
                ], template: "<ng-container #appointmentPickerComponent></ng-container>\n" }]
    }], () => [{ type: i0.ViewContainerRef }, { type: i1.MessageGroupDirective, decorators: [{
                type: Optional
            }] }, { type: i2.LanguageService }, { type: i1.FormErrorService }, { type: i0.Injector }], { startDate: [{
            type: Input
        }], endDate: [{
            type: Input
        }], timeslots: [{
            type: Input
        }], slidesToScroll: [{
            type: Input
        }], slidesToShow: [{
            type: Input
        }], appointmentPickerType: [{
            type: Input
        }], updateSlots: [{
            type: Input
        }], showLoadMore: [{
            type: Input
        }], consumerType: [{
            type: Input
        }], disableLoadMore: [{
            type: Input
        }], error: [{
            type: Input
        }], isDeviceLandscape: [{
            type: Input
        }], reset: [{
            type: Input
        }], enableAppointmentsUI: [{
            type: Input
        }], loadMore: [{
            type: Output
        }], scrollTo: [{
            type: Output
        }], sendAnalytics: [{
            type: Output
        }], appointmentPickerComponent: [{
            type: ViewChild,
            args: ['appointmentPickerComponent', { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputAppointmentPickerComponent, { className: "InputAppointmentPickerComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtYXBwb2ludG1lbnQtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb250cm9scy9hcHBvaW50bWVudC1waWNrZXIvYXBwb2ludG1lbnQtcGlja2VyL2lucHV0LWFwcG9pbnRtZW50LXBpY2tlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9zcmMvY29udHJvbHMvYXBwb2ludG1lbnQtcGlja2VyL2FwcG9pbnRtZW50LXBpY2tlci9pbnB1dC1hcHBvaW50bWVudC1waWNrZXIuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUdULFlBQVksRUFDWixVQUFVLEVBRVYsS0FBSyxFQUdMLFFBQVEsRUFDUixNQUFNLEVBRU4sU0FBUyxHQUVWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBb0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUlyRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUV4RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMxRixPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN0RixPQUFPLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7OztBQWM5RCxJQUFNLCtCQUErQixHQUFyQyxNQUFNLCtCQUFnQyxTQUFRLHNCQUFzQjtJQXdCdEQ7SUFDVztJQUNaO0lBQ0M7SUFDRDtJQTNCVCxTQUFTLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUM3QixPQUFPLENBQU87SUFDZCxTQUFTLENBQStCO0lBQ3hDLGNB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QUFRO2tCQUFqQixNQUFNO1lBQ0csUUFBUTtrQkFBakIsTUFBTTtZQUNHLGFBQWE7a0JBQXRCLE1BQU07WUFDb0QsMEJBQTBCO2tCQUFwRixTQUFTO21CQUFDLDRCQUE0QixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7a0ZBbEI5QywrQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENvbXBvbmVudFJlZixcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBJbmplY3RvcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIFZhbGlkYXRpb25FcnJvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICdAdGVsZW5ldC9uZy1saWItcGFnZSc7XG5pbXBvcnQgeyBGb3JtRXJyb3JTZXJ2aWNlLCBNZXNzYWdlR3JvdXBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi8uLi9lcnJvcnMnO1xuaW1wb3J0IHsgQXBwb2ludG1lbnRUcmFuc2Zvcm1lclNsb3QgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMnO1xuaW1wb3J0IHsgSW5wdXRBYnN0cmFjdENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2lucHV0LWFic3RyYWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBvaW50bWVudFBpY2tlckNvbXBvbmVudEludGVyZmFjZSB9IGZyb20gJy4uL2FwcG9pbnRtZW50LXBpY2tlci1jb21wb25lbnQuaW50ZXJmYWNlJztcbmltcG9ydCB7IEFwcG9pbnRtZW50UGlja2VyVHlwZUVudW0gfSBmcm9tICcuLi9hcHBvaW50bWVudC1waWNrZXItdHlwZS5lbnVtJztcbmltcG9ydCB7IEFwcG9pbnRtZW50U2xvdE9wdGlvbiB9IGZyb20gJy4uL2FwcG9pbnRtZW50LXNsb3Qtb3B0aW9uLm1vZGVsJztcbmltcG9ydCB7IElucHV0QXBwb2ludG1lbnRQaWNrZXJCeU1vbWVudENvbXBvbmVudCB9IGZyb20gJy4uL2FwcG9pbnRtZW50LXBpY2tlci1ieS1tb21lbnQnO1xuaW1wb3J0IHsgSW5wdXRBcHBvaW50bWVudFBpY2tlckJ5RGF0ZUNvbXBvbmVudCB9IGZyb20gJy4uL2FwcG9pbnRtZW50LXBpY2tlci1ieS1kYXRlJztcbmltcG9ydCB7IFVudGlsRGVzdHJveSwgdW50aWxEZXN0cm95ZWQgfSBmcm9tICdAbmduZWF0L3VudGlsLWRlc3Ryb3knO1xuXG5AVW50aWxEZXN0cm95KClcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1mb3JtLWFwcG9pbnRtZW50LXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnB1dC1hcHBvaW50bWVudC1waWNrZXIuaHRtbCcsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gSW5wdXRBcHBvaW50bWVudFBpY2tlckNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dEFwcG9pbnRtZW50UGlja2VyQ29tcG9uZW50IGV4dGVuZHMgSW5wdXRBYnN0cmFjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgc3RhcnREYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcbiAgQElucHV0KCkgZW5kRGF0ZTogRGF0ZTtcbiAgQElucHV0KCkgdGltZXNsb3RzOiBBcHBvaW50bWVudFRyYW5zZm9ybWVyU2xvdFtdO1xuICBASW5wdXQoKSBzbGlkZXNUb1Njcm9sbDogbnVtYmVyO1xuICBASW5wdXQoKSBzbGlkZXNUb1Nob3c6IG51bWJlcjtcbiAgQElucHV0KCkgYXBwb2ludG1lbnRQaWNrZXJUeXBlOiBBcHBvaW50bWVudFBpY2tlclR5cGVFbnVtO1xuICBASW5wdXQoKSB1cGRhdGVTbG90czogQXBwb2ludG1lbnRUcmFuc2Zvcm1lclNsb3RbXTtcbiAgQElucHV0KCkgc2hvd0xvYWRNb3JlOiBib29sZWFuO1xuICBASW5wdXQoKSBjb25zdW1lclR5cGU6IHN0cmluZztcbiAgQElucHV0KCkgZGlzYWJsZUxvYWRNb3JlOiBib29sZWFuO1xuICBASW5wdXQoKSBkZWNsYXJlIGVycm9yOiBWYWxpZGF0aW9uRXJyb3JzO1xuICBASW5wdXQoKSBpc0RldmljZUxhbmRzY2FwZTogYm9vbGVhbjtcbiAgQElucHV0KCkgcmVzZXQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGVuYWJsZUFwcG9pbnRtZW50c1VJOiBib29sZWFuO1xuICBAT3V0cHV0KCkgbG9hZE1vcmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBzY3JvbGxUbyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHNlbmRBbmFseXRpY3MgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBWaWV3Q2hpbGQoJ2FwcG9pbnRtZW50UGlja2VyQ29tcG9uZW50JywgeyBzdGF0aWM6IHRydWUgfSkgYXBwb2ludG1lbnRQaWNrZXJDb21wb25lbnQ6IEVsZW1lbnRSZWY7XG5cbiAgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8dW5rbm93bj47XG4gIHNlbGVjdGVkQXBwb2ludG1lbnRTbG90T3B0aW9uOiBBcHBvaW50bWVudFNsb3RPcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBvdmVycmlkZSBtZXNzYWdlR3JvdXBEaXJlY3RpdmU6IE1lc3NhZ2VHcm91cERpcmVjdGl2ZSxcbiAgICBwdWJsaWMgb3ZlcnJpZGUgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBmb3JtRXJyb3JTZXJ2aWNlOiBGb3JtRXJyb3JTZXJ2aWNlLFxuICAgIHB1YmxpYyBvdmVycmlkZSBpbmplY3RvcjogSW5qZWN0b3JcbiAgKSB7XG4gICAgc3VwZXIobGFuZ3VhZ2VTZXJ2aWNlLCBmb3JtRXJyb3JTZXJ2aWNlLCBtZXNzYWdlR3JvdXBEaXJlY3RpdmUsIGluamVjdG9yKTtcbiAgfVxuXG4gIG9uQ2hhbmdlID0gKF86IEFwcG9pbnRtZW50U2xvdE9wdGlvbikgPT4ge1xuICAgIC8vIGVtcHR5IGltcGxlbWVudGF0aW9uXG4gIH07XG5cbiAgb25Ub3VjaGVkID0gKCkgPT4ge1xuICAgIC8vIGVtcHR5IGltcGxlbWVudGF0aW9uXG4gIH07XG5cbiAgb3ZlcnJpZGUgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgICB0aGlzLmluaXRNZXNzYWdlR3JvdXAoKTtcbiAgICB0aGlzLmxvYWRBcHBvaW50bWVudFBpY2tlckNvbXBvbmVudCgpO1xuICB9XG5cbiAgb3ZlcnJpZGUgc2V0RXJyb3IodmFsdWU/OiB1bmtub3duKTogdm9pZCB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAodGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UgYXMgQXBwb2ludG1lbnRQaWNrZXJDb21wb25lbnRJbnRlcmZhY2UpLmVycm9yID0gT2JqZWN0LmtleXModmFsdWUpWzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICAodGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UgYXMgQXBwb2ludG1lbnRQaWNrZXJDb21wb25lbnRJbnRlcmZhY2UpLmVycm9yID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXNbJ2FwcG9pbnRtZW50UGlja2VyVHlwZSddKSB7XG4gICAgICB0aGlzLmZvcm1FcnJvclNlcnZpY2UucmVzZXQkLm5leHQobnVsbCk7XG4gICAgICB0aGlzLmFwcG9pbnRtZW50UGlja2VyVHlwZSA9IGNoYW5nZXNbJ2FwcG9pbnRtZW50UGlja2VyVHlwZSddLmN1cnJlbnRWYWx1ZTtcbiAgICAgIHRoaXMubG9hZEFwcG9pbnRtZW50UGlja2VyQ29tcG9uZW50KCk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzWydyZXNldCddPy5jdXJyZW50VmFsdWUpIHtcbiAgICAgIHRoaXMubG9hZEFwcG9pbnRtZW50UGlja2VyQ29tcG9uZW50KCk7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXNbJ3Nob3dMb2FkTW9yZSddKSB7XG4gICAgICAodGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UgYXMgQXBwb2ludG1lbnRQaWNrZXJDb21wb25lbnRJbnRlcmZhY2UpLnNob3dMb2FkTW9yZSA9IHRoaXMuc2hvd0xvYWRNb3JlO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzWyd1cGRhdGVTbG90cyddKSB7XG4gICAgICAodGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UgYXMgQXBwb2ludG1lbnRQaWNrZXJDb21wb25lbnRJbnRlcmZhY2UpLnVwZGF0ZVNsb3RzID0gdGhpcy51cGRhdGVTbG90cztcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlc1snZGlzYWJsZUxvYWRNb3JlJ10pIHtcbiAgICAgICh0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZSBhcyBBcHBvaW50bWVudFBpY2tlckNvbXBvbmVudEludGVyZmFjZSkuZGlzYWJsZUxvYWRNb3JlID0gdGhpcy5kaXNhYmxlTG9hZE1vcmU7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXNbJ2Vycm9yJ10pIHtcbiAgICAgIHRoaXMuc2V0RXJyb3IodGhpcy5lcnJvcik7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXNbJ2lzRGV2aWNlTGFuZHNjYXBlJ10pIHtcbiAgICAgICh0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZSBhcyBBcHBvaW50bWVudFBpY2tlckNvbXBvbmVudEludGVyZmFjZSkuaXNEZXZpY2VMYW5kc2NhcGUgPSB0aGlzLmlzRGV2aWNlTGFuZHNjYXBlO1xuICAgIH1cbiAgfVxuXG4gIG92ZXJyaWRlIHJlZ2lzdGVyT25DaGFuZ2UoZm46IFZvaWRGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIG92ZXJyaWRlIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBWb2lkRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgb3ZlcnJpZGUgc2V0RGlzYWJsZWRTdGF0ZShfOiBib29sZWFuKTogdm9pZCB7XG4gICAgLy8gZW1wdHkgaW1wbGVtZW50YXRpb25cbiAgfVxuXG4gIG92ZXJyaWRlIHdyaXRlVmFsdWUoYXBwb2ludG1lbnRTbG90T3B0aW9uOiBBcHBvaW50bWVudFNsb3RPcHRpb24gfCBudWxsKTogdm9pZCB7XG4gICAgaWYgKGFwcG9pbnRtZW50U2xvdE9wdGlvbikge1xuICAgICAgdGhpcy5zZWxlY3RlZEFwcG9pbnRtZW50U2xvdE9wdGlvbiA9IGFwcG9pbnRtZW50U2xvdE9wdGlvbjtcbiAgICAgICh0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZSBhcyBBcHBvaW50bWVudFBpY2tlckNvbXBvbmVudEludGVyZmFjZSkuc2V0U2VsZWN0ZWRBcHBvaW50bWVudChhcHBvaW50bWVudFNsb3RPcHRpb24pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbG9hZEFwcG9pbnRtZW50UGlja2VyQ29tcG9uZW50KCk6IHZvaWQge1xuICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuICAgIGNvbnN0IGNvbXBvbmVudCA9XG4gICAgICB0aGlzLmFwcG9pbnRtZW50UGlja2VyVHlwZSA9PT0gQXBwb2ludG1lbnRQaWNrZXJUeXBlRW51bS5CWV9EQVRFXG4gICAgICAgID8gSW5wdXRBcHBvaW50bWVudFBpY2tlckJ5RGF0ZUNvbXBvbmVudFxuICAgICAgICA6IElucHV0QXBwb2ludG1lbnRQaWNrZXJCeU1vbWVudENvbXBvbmVudDtcbiAgICB0aGlzLmNvbXBvbmVudFJlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICB0aGlzLmNvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgdGhpcy5zZXRTZWxlY3RlZEFwcG9pbnRtZW50KG5ldyBBcHBvaW50bWVudFNsb3RPcHRpb24obnVsbCwgbnVsbCkpO1xuICAgICh0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZSBhcyBBcHBvaW50bWVudFBpY2tlckNvbXBvbmVudEludGVyZmFjZSkuc3RhcnREYXRlID0gdGhpcy5zdGFydERhdGU7XG4gICAgKHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlIGFzIEFwcG9pbnRtZW50UGlja2VyQ29tcG9uZW50SW50ZXJmYWNlKS5lbmREYXRlID0gdGhpcy5lbmREYXRlO1xuICAgICh0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZSBhcyBBcHBvaW50bWVudFBpY2tlckNvbXBvbmVudEludGVyZmFjZSkudGltZXNsb3RzID0gdGhpcy50aW1lc2xvdHM7XG4gICAgKHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlIGFzIEFwcG9pbnRtZW50UGlja2VyQ29tcG9uZW50SW50ZXJmYWNlKS5zbGlkZXNUb1Njcm9sbCA9IHRoaXMuc2xpZGVzVG9TY3JvbGw7XG4gICAgKHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlIGFzIEFwcG9pbnRtZW50UGlja2VyQ29tcG9uZW50SW50ZXJmYWNlKS5hcHBvaW50bWVudFNsb3RTZWxlY3RlZFxuICAgICAgLnBpcGUodW50aWxEZXN0cm95ZWQodGhpcykpXG4gICAgICAuc3Vic2NyaWJlKChzZWxlY3RlZEFwcG9pbnRtZW50KSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRBcHBvaW50bWVudChzZWxlY3RlZEFwcG9pbnRtZW50KTtcbiAgICAgIH0pO1xuICAgICh0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZSBhcyBBcHBvaW50bWVudFBpY2tlckNvbXBvbmVudEludGVyZmFjZSkubWVzc2FnZUdyb3VwID0gdGhpcy5tZXNzYWdlR3JvdXA7XG4gICAgKHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlIGFzIEFwcG9pbnRtZW50UGlja2VyQ29tcG9uZW50SW50ZXJmYWNlKS5pbml0aWFsaXNlZCA9IHRydWU7XG4gICAgKHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlIGFzIEFwcG9pbnRtZW50UGlja2VyQ29tcG9uZW50SW50ZXJmYWNlKS5zZXRMYWJlbHMoW1xuICAgICAgdGhpcy5tZXNzYWdlR3JvdXAgfHwgJycsXG4gICAgICB0aGlzLmZvcm1Db250cm9sTmFtZSxcbiAgICBdKTtcbiAgICAodGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UgYXMgQXBwb2ludG1lbnRQaWNrZXJDb21wb25lbnRJbnRlcmZhY2UpLmVycm9yID0gdGhpcy5lcnJvcjtcbiAgICAodGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UgYXMgQXBwb2ludG1lbnRQaWNrZXJDb21wb25lbnRJbnRlcmZhY2UpLnVwZGF0ZVNsb3RzID0gdGhpcy51cGRhdGVTbG90cztcbiAgICAodGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UgYXMgQXBwb2ludG1lbnRQaWNrZXJDb21wb25lbnRJbnRlcmZhY2UpLnNob3dMb2FkTW9yZSA9IHRoaXMuc2hvd0xvYWRNb3JlO1xuICAgICh0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZSBhcyBBcHBvaW50bWVudFBpY2tlckNvbXBvbmVudEludGVyZmFjZSkubG9hZE1vcmVcbiAgICAgID8ucGlwZSh1bnRpbERlc3Ryb3llZCh0aGlzKSlcbiAgICAgIC5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICAgIHRoaXMubG9hZE1vcmUuZW1pdCh2YWx1ZSk7XG4gICAgICB9KTtcbiAgICAodGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UgYXMgQXBwb2ludG1lbnRQaWNrZXJDb21wb25lbnRJbnRlcmZhY2UpLmNvbnN1bWVyVHlwZSA9IHRoaXMuY29uc3VtZXJUeXBlO1xuICAgICh0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZSBhcyBBcHBvaW50bWVudFBpY2tlckNvbXBvbmVudEludGVyZmFjZSkuZGlzYWJsZUxvYWRNb3JlID0gdGhpcy5kaXNhYmxlTG9hZE1vcmU7XG4gICAgKHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlIGFzIEFwcG9pbnRtZW50UGlja2VyQ29tcG9uZW50SW50ZXJmYWNlKS5zY3JvbGxUb1xuICAgICAgPy5waXBlKHVudGlsRGVzdHJveWVkKHRoaXMpKVxuICAgICAgLnN1YnNjcmliZSgoc2VjdGlvbikgPT4ge1xuICAgICAgICB0aGlzLnNjcm9sbFRvLmVtaXQoc2VjdGlvbik7XG4gICAgICB9KTtcbiAgICAodGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UgYXMgQXBwb2ludG1lbnRQaWNrZXJDb21wb25lbnRJbnRlcmZhY2UpLnNsaWRlc1RvU2hvdyA9IHRoaXMuc2xpZGVzVG9TaG93O1xuICAgICh0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZSBhcyBBcHBvaW50bWVudFBpY2tlckNvbXBvbmVudEludGVyZmFjZSkuYXBwb2ludG1lbnRQaWNrZXJUeXBlID1cbiAgICAgIHRoaXMuYXBwb2ludG1lbnRQaWNrZXJUeXBlO1xuICAgICh0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZSBhcyBBcHBvaW50bWVudFBpY2tlckNvbXBvbmVudEludGVyZmFjZSkuaXNEZXZpY2VMYW5kc2NhcGUgPSB0aGlzLmlzRGV2aWNlTGFuZHNjYXBlO1xuICAgICh0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZSBhcyBBcHBvaW50bWVudFBpY2tlckNvbXBvbmVudEludGVyZmFjZSkuZW5hYmxlQXBwb2ludG1lbnRzVUkgPVxuICAgICAgdGhpcy5lbmFibGVBcHBvaW50bWVudHNVSTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0U2VsZWN0ZWRBcHBvaW50bWVudChzZWxlY3RlZEFwcG9pbnRtZW50OiBBcHBvaW50bWVudFNsb3RPcHRpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlKHNlbGVjdGVkQXBwb2ludG1lbnQpO1xuICAgIHRoaXMuc2VuZEFuYWx5dGljcy5lbWl0KHNlbGVjdGVkQXBwb2ludG1lbnQpO1xuICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgKHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlIGFzIEFwcG9pbnRtZW50UGlja2VyQ29tcG9uZW50SW50ZXJmYWNlKS5lcnJvciA9IG51bGw7XG4gIH1cbn1cbiIsIjxuZy1jb250YWluZXIgI2FwcG9pbnRtZW50UGlja2VyQ29tcG9uZW50PjwvbmctY29udGFpbmVyPlxuIl19