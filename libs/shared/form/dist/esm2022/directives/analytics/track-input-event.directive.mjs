import { Directive, Host, HostListener, Input } from '@angular/core';
import { EventTypes, DatalayerEventNames } from '@telenet/ng-lib-datalayer';
import * as i0 from "@angular/core";
import * as i1 from "@telenet/ng-lib-datalayer";
import * as i2 from "./tracking-info.directive";
import * as i3 from "@ngx-translate/core";
export class TrackInputEventDirective {
    dataLayerService;
    trackingInfoDirective;
    translateService;
    trackInputEvent;
    blockData = true;
    constructor(dataLayerService, trackingInfoDirective, translateService) {
        this.dataLayerService = dataLayerService;
        this.trackingInfoDirective = trackingInfoDirective;
        this.translateService = translateService;
    }
    trackingEvent(event) {
        let label = event.label;
        if (this.trackInputEvent && this.trackInputEvent.label) {
            label = this.trackInputEvent.label;
        }
        const category = this.dataLayerService.createCategory(this.trackingInfoDirective.trackingInfo.primaryCategory || '', this.trackingInfoDirective.trackingInfo.subCategory);
        const type = event.type;
        this.addFormFieldCompletedEvent({
            itemName: label ? this.translateService.instant(label) : '',
            itemData: !this.blockData ? event.value : '',
            intent: this.trackingInfoDirective.trackingInfo.intent,
            flowType: this.trackingInfoDirective.trackingInfo.flowType,
            cart: this.getCart(),
        }, category, type).then();
    }
    addFormFieldCompletedEvent(attributes, category, type = DatalayerEventNames.FORM_FIELD_COMPLETED) {
        const eventInfoData = this.dataLayerService.createEventInfo(type, EventTypes.CLICK);
        return this.dataLayerService.sendEvent({ eventInfo: eventInfoData, attributes, category });
    }
    getCart() {
        if (this.trackingInfoDirective && this.trackingInfoDirective.trackingInfo.cart) {
            return this.trackingInfoDirective.trackingInfo.cart;
        }
        return {};
    }
    static ɵfac = function TrackInputEventDirective_Factory(t) { return new (t || TrackInputEventDirective)(i0.ɵɵdirectiveInject(i1.DataLayerService), i0.ɵɵdirectiveInject(i2.TrackingInfoDirective, 1), i0.ɵɵdirectiveInject(i3.TranslateService)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: TrackInputEventDirective, selectors: [["tg-form-input", "trackInputEvent", ""], ["tg-form-input-checkbox", "trackInputEvent", ""], ["tg-form-radio-with-input-vertical", "trackInputEvent", ""], ["tg-form-radio-horizontal", "trackInputEvent", ""], ["tg-form-radio-with-input-horizontal", "trackInputEvent", ""], ["tg-form-checkbox", "trackInputEvent", ""], ["tg-form-checkbox-with-card", "trackInputEvent", ""], ["tg-form-radio-with-card", "trackInputEvent", ""], ["tg-form-dropdown", "trackInputEvent", ""], ["tg-form-radio-with-card-mini-no-select-box-labels", "trackInputEvent", ""], ["tg-form-dropdown", "trackInputEvent", ""], ["tg-form-radio-with-card-mini-with-select-box-labels", "trackInputEvent", ""]], hostBindings: function TrackInputEventDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("trackingEvent", function TrackInputEventDirective_trackingEvent_HostBindingHandler($event) { return ctx.trackingEvent($event); });
        } }, inputs: { trackInputEvent: "trackInputEvent", blockData: "blockData" } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TrackInputEventDirective, [{
        type: Directive,
        args: [{
                selector: 'tg-form-input[trackInputEvent], tg-form-input-checkbox[trackInputEvent], ' +
                    'tg-form-radio-with-input-vertical[trackInputEvent], tg-form-radio-horizontal[trackInputEvent],' +
                    'tg-form-radio-with-input-horizontal[trackInputEvent], tg-form-checkbox[trackInputEvent],' +
                    'tg-form-checkbox-with-card[trackInputEvent], tg-form-radio-with-card[trackInputEvent],' +
                    'tg-form-dropdown[trackInputEvent], tg-form-radio-with-card-mini-no-select-box-labels[trackInputEvent],' +
                    'tg-form-dropdown[trackInputEvent], tg-form-radio-with-card-mini-with-select-box-labels[trackInputEvent]',
            }]
    }], () => [{ type: i1.DataLayerService }, { type: i2.TrackingInfoDirective, decorators: [{
                type: Host
            }] }, { type: i3.TranslateService }], { trackInputEvent: [{
            type: Input
        }], blockData: [{
            type: Input
        }], trackingEvent: [{
            type: HostListener,
            args: ['trackingEvent', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhY2staW5wdXQtZXZlbnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2RpcmVjdGl2ZXMvYW5hbHl0aWNzL3RyYWNrLWlucHV0LWV2ZW50LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJFLE9BQU8sRUFBb0IsVUFBVSxFQUFFLG1CQUFtQixFQUF1QixNQUFNLDJCQUEyQixDQUFDOzs7OztBQWVuSCxNQUFNLE9BQU8sd0JBQXdCO0lBS2hCO0lBQ1E7SUFDUjtJQU5WLGVBQWUsQ0FBa0I7SUFDakMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUUxQixZQUNtQixnQkFBa0MsRUFDMUIscUJBQTRDLEVBQ3BELGdCQUFrQztRQUZsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzFCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDcEQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUNsRCxDQUFDO0lBR0osYUFBYSxDQUFDLEtBQW9CO1FBQ2hDLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDeEIsSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdkQsS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDO1FBQ3JDLENBQUM7UUFFRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUNuRCxJQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLGVBQWUsSUFBSSxFQUFFLEVBQzdELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUNwRCxDQUFDO1FBRUYsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUV4QixJQUFJLENBQUMsMEJBQTBCLENBQzdCO1lBQ0UsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUMzRCxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzVDLE1BQU0sRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLE1BQU07WUFDdEQsUUFBUSxFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsUUFBUTtZQUMxRCxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRTtTQUNyQixFQUNELFFBQVEsRUFDUixJQUFJLENBQ0wsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNYLENBQUM7SUFFRCwwQkFBMEIsQ0FDeEIsVUFBK0IsRUFDL0IsUUFBbUIsRUFDbkIsT0FBNEIsbUJBQW1CLENBQUMsb0JBQW9CO1FBRXBFLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwRixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQzdGLENBQUM7SUFFTyxPQUFPO1FBQ2IsSUFBSSxJQUFJLENBQUMscUJBQXFCLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMvRSxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1FBQ3RELENBQUM7UUFDRCxPQUFPLEVBQVUsQ0FBQztJQUNwQixDQUFDO2tGQW5EVSx3QkFBd0I7NkRBQXhCLHdCQUF3QjsrSEFBeEIseUJBQXFCOzs7aUZBQXJCLHdCQUF3QjtjQVRwQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUNOLDJFQUEyRTtvQkFDM0UsZ0dBQWdHO29CQUNoRywwRkFBMEY7b0JBQzFGLHdGQUF3RjtvQkFDeEYsd0dBQXdHO29CQUN4Ryx5R0FBeUc7YUFDNUc7O3NCQU9JLElBQUk7b0RBTEUsZUFBZTtrQkFBdkIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFTTixhQUFhO2tCQURaLFlBQVk7bUJBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0LCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYXJ0LCBDYXRlZ29yeSB9IGZyb20gJ3VkbCc7XG5pbXBvcnQgeyBEYXRhTGF5ZXJTZXJ2aWNlLCBFdmVudFR5cGVzLCBEYXRhbGF5ZXJFdmVudE5hbWVzLCBEYXRhTGF5ZXJBdHRyaWJ1dGVzIH0gZnJvbSAnQHRlbGVuZXQvbmctbGliLWRhdGFsYXllcic7XG5pbXBvcnQgeyBUcmFja2luZ0luZm9EaXJlY3RpdmUgfSBmcm9tICcuL3RyYWNraW5nLWluZm8uZGlyZWN0aXZlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IFRyYWNrRXZlbnRJbmZvIH0gZnJvbSAnLi90cmFjay1ldmVudC1pbmZvLmludGVyZmFjZSc7XG5pbXBvcnQgeyBUcmFja2luZ0V2ZW50IH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjpcbiAgICAndGctZm9ybS1pbnB1dFt0cmFja0lucHV0RXZlbnRdLCB0Zy1mb3JtLWlucHV0LWNoZWNrYm94W3RyYWNrSW5wdXRFdmVudF0sICcgK1xuICAgICd0Zy1mb3JtLXJhZGlvLXdpdGgtaW5wdXQtdmVydGljYWxbdHJhY2tJbnB1dEV2ZW50XSwgdGctZm9ybS1yYWRpby1ob3Jpem9udGFsW3RyYWNrSW5wdXRFdmVudF0sJyArXG4gICAgJ3RnLWZvcm0tcmFkaW8td2l0aC1pbnB1dC1ob3Jpem9udGFsW3RyYWNrSW5wdXRFdmVudF0sIHRnLWZvcm0tY2hlY2tib3hbdHJhY2tJbnB1dEV2ZW50XSwnICtcbiAgICAndGctZm9ybS1jaGVja2JveC13aXRoLWNhcmRbdHJhY2tJbnB1dEV2ZW50XSwgdGctZm9ybS1yYWRpby13aXRoLWNhcmRbdHJhY2tJbnB1dEV2ZW50XSwnICtcbiAgICAndGctZm9ybS1kcm9wZG93blt0cmFja0lucHV0RXZlbnRdLCB0Zy1mb3JtLXJhZGlvLXdpdGgtY2FyZC1taW5pLW5vLXNlbGVjdC1ib3gtbGFiZWxzW3RyYWNrSW5wdXRFdmVudF0sJyArXG4gICAgJ3RnLWZvcm0tZHJvcGRvd25bdHJhY2tJbnB1dEV2ZW50XSwgdGctZm9ybS1yYWRpby13aXRoLWNhcmQtbWluaS13aXRoLXNlbGVjdC1ib3gtbGFiZWxzW3RyYWNrSW5wdXRFdmVudF0nLFxufSlcbmV4cG9ydCBjbGFzcyBUcmFja0lucHV0RXZlbnREaXJlY3RpdmUge1xuICBASW5wdXQoKSB0cmFja0lucHV0RXZlbnQ/OiBUcmFja0V2ZW50SW5mbztcbiAgQElucHV0KCkgYmxvY2tEYXRhID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRhdGFMYXllclNlcnZpY2U6IERhdGFMYXllclNlcnZpY2UsXG4gICAgQEhvc3QoKSBwcml2YXRlIHJlYWRvbmx5IHRyYWNraW5nSW5mb0RpcmVjdGl2ZTogVHJhY2tpbmdJbmZvRGlyZWN0aXZlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZVxuICApIHt9XG5cbiAgQEhvc3RMaXN0ZW5lcigndHJhY2tpbmdFdmVudCcsIFsnJGV2ZW50J10pXG4gIHRyYWNraW5nRXZlbnQoZXZlbnQ6IFRyYWNraW5nRXZlbnQpIHtcbiAgICBsZXQgbGFiZWwgPSBldmVudC5sYWJlbDtcbiAgICBpZiAodGhpcy50cmFja0lucHV0RXZlbnQgJiYgdGhpcy50cmFja0lucHV0RXZlbnQubGFiZWwpIHtcbiAgICAgIGxhYmVsID0gdGhpcy50cmFja0lucHV0RXZlbnQubGFiZWw7XG4gICAgfVxuXG4gICAgY29uc3QgY2F0ZWdvcnkgPSB0aGlzLmRhdGFMYXllclNlcnZpY2UuY3JlYXRlQ2F0ZWdvcnkoXG4gICAgICB0aGlzLnRyYWNraW5nSW5mb0RpcmVjdGl2ZS50cmFja2luZ0luZm8ucHJpbWFyeUNhdGVnb3J5IHx8ICcnLFxuICAgICAgdGhpcy50cmFja2luZ0luZm9EaXJlY3RpdmUudHJhY2tpbmdJbmZvLnN1YkNhdGVnb3J5XG4gICAgKTtcblxuICAgIGNvbnN0IHR5cGUgPSBldmVudC50eXBlO1xuXG4gICAgdGhpcy5hZGRGb3JtRmllbGRDb21wbGV0ZWRFdmVudChcbiAgICAgIHtcbiAgICAgICAgaXRlbU5hbWU6IGxhYmVsID8gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQobGFiZWwpIDogJycsXG4gICAgICAgIGl0ZW1EYXRhOiAhdGhpcy5ibG9ja0RhdGEgPyBldmVudC52YWx1ZSA6ICcnLFxuICAgICAgICBpbnRlbnQ6IHRoaXMudHJhY2tpbmdJbmZvRGlyZWN0aXZlLnRyYWNraW5nSW5mby5pbnRlbnQsXG4gICAgICAgIGZsb3dUeXBlOiB0aGlzLnRyYWNraW5nSW5mb0RpcmVjdGl2ZS50cmFja2luZ0luZm8uZmxvd1R5cGUsXG4gICAgICAgIGNhcnQ6IHRoaXMuZ2V0Q2FydCgpLFxuICAgICAgfSxcbiAgICAgIGNhdGVnb3J5LFxuICAgICAgdHlwZVxuICAgICkudGhlbigpO1xuICB9XG5cbiAgYWRkRm9ybUZpZWxkQ29tcGxldGVkRXZlbnQoXG4gICAgYXR0cmlidXRlczogRGF0YUxheWVyQXR0cmlidXRlcyxcbiAgICBjYXRlZ29yeT86IENhdGVnb3J5LFxuICAgIHR5cGU6IERhdGFsYXllckV2ZW50TmFtZXMgPSBEYXRhbGF5ZXJFdmVudE5hbWVzLkZPUk1fRklFTERfQ09NUExFVEVEXG4gICkge1xuICAgIGNvbnN0IGV2ZW50SW5mb0RhdGEgPSB0aGlzLmRhdGFMYXllclNlcnZpY2UuY3JlYXRlRXZlbnRJbmZvKHR5cGUsIEV2ZW50VHlwZXMuQ0xJQ0spO1xuICAgIHJldHVybiB0aGlzLmRhdGFMYXllclNlcnZpY2Uuc2VuZEV2ZW50KHsgZXZlbnRJbmZvOiBldmVudEluZm9EYXRhLCBhdHRyaWJ1dGVzLCBjYXRlZ29yeSB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2FydCgpOiBDYXJ0IHtcbiAgICBpZiAodGhpcy50cmFja2luZ0luZm9EaXJlY3RpdmUgJiYgdGhpcy50cmFja2luZ0luZm9EaXJlY3RpdmUudHJhY2tpbmdJbmZvLmNhcnQpIHtcbiAgICAgIHJldHVybiB0aGlzLnRyYWNraW5nSW5mb0RpcmVjdGl2ZS50cmFja2luZ0luZm8uY2FydDtcbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIENhcnQ7XG4gIH1cbn1cbiJdfQ==