import { Directive, Host, HostListener, Input } from '@angular/core';
import { DatalayerEventNames, EventTypes } from '@telenet/ng-lib-datalayer';
import * as i0 from "@angular/core";
import * as i1 from "@telenet/ng-lib-datalayer";
import * as i2 from "./tracking-info.directive";
export class ButtonClickDirective {
    dataLayerService;
    trackingInfoDirective;
    clickEvent;
    constructor(_elmRef, dataLayerService, trackingInfoDirective) {
        this.dataLayerService = dataLayerService;
        this.trackingInfoDirective = trackingInfoDirective;
    }
    eventHandler() {
        const category = this.dataLayerService.createCategory(this.trackingInfoDirective.trackingInfo.primaryCategory, this.trackingInfoDirective.trackingInfo.subCategory);
        this.addEvent({
            itemName: this.clickEvent?.label,
            itemData: '',
            intent: this.trackingInfoDirective.trackingInfo.intent,
            flowType: this.trackingInfoDirective.trackingInfo.flowType,
            cart: this.trackingInfoDirective.trackingInfo.cart,
        }, category).then();
    }
    addEvent(attributes, category) {
        let eventName = DatalayerEventNames.BUTTON_CLICKED;
        if (this.clickEvent && this.clickEvent.event && this.clickEvent.event.name) {
            eventName = this.clickEvent.event.name;
        }
        const eventInfoData = this.dataLayerService.createEventInfo(eventName, EventTypes.CLICK);
        return this.dataLayerService.sendEvent({ eventInfo: eventInfoData, attributes, category });
    }
    static ɵfac = function ButtonClickDirective_Factory(t) { return new (t || ButtonClickDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.DataLayerService), i0.ɵɵdirectiveInject(i2.TrackingInfoDirective, 1)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ButtonClickDirective, selectors: [["button", "clickEvent", ""]], hostBindings: function ButtonClickDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function ButtonClickDirective_click_HostBindingHandler($event) { return ctx.eventHandler($event); });
        } }, inputs: { clickEvent: "clickEvent" } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ButtonClickDirective, [{
        type: Directive,
        args: [{
                selector: 'button[clickEvent]',
            }]
    }], () => [{ type: i0.ElementRef }, { type: i1.DataLayerService }, { type: i2.TrackingInfoDirective, decorators: [{
                type: Host
            }] }], { clickEvent: [{
            type: Input
        }], eventHandler: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWNsaWNrLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kaXJlY3RpdmVzL2FuYWx5dGljcy9idXR0b24tY2xpY2suZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsSUFBSSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUF1QixtQkFBbUIsRUFBb0IsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7QUFRbkgsTUFBTSxPQUFPLG9CQUFvQjtJQUtaO0lBQ1E7SUFMbEIsVUFBVSxDQUFpQjtJQUVwQyxZQUNFLE9BQW1CLEVBQ0YsZ0JBQWtDLEVBQzFCLHFCQUE0QztRQURwRCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzFCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7SUFDcEUsQ0FBQztJQUdKLFlBQVk7UUFDVixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUNuRCxJQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFDdkQsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxXQUFXLENBQ3BELENBQUM7UUFDRixJQUFJLENBQUMsUUFBUSxDQUNYO1lBQ0UsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSztZQUNoQyxRQUFRLEVBQUUsRUFBRTtZQUNaLE1BQU0sRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLE1BQU07WUFDdEQsUUFBUSxFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsUUFBUTtZQUMxRCxJQUFJLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxJQUFJO1NBQ25ELEVBQ0QsUUFBUSxDQUNULENBQUMsSUFBSSxFQUFFLENBQUM7SUFDWCxDQUFDO0lBRUQsUUFBUSxDQUFDLFVBQStCLEVBQUUsUUFBbUI7UUFDM0QsSUFBSSxTQUFTLEdBQUcsbUJBQW1CLENBQUMsY0FBYyxDQUFDO1FBQ25ELElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMzRSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3pDLENBQUM7UUFDRCxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekYsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUM3RixDQUFDOzhFQWxDVSxvQkFBb0I7NkRBQXBCLG9CQUFvQjsyR0FBcEIsd0JBQW9COzs7aUZBQXBCLG9CQUFvQjtjQUhoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjthQUMvQjs7c0JBT0ksSUFBSTtxQkFMRSxVQUFVO2tCQUFsQixLQUFLO1lBU04sWUFBWTtrQkFEWCxZQUFZO21CQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdCwgSG9zdExpc3RlbmVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YUxheWVyQXR0cmlidXRlcywgRGF0YWxheWVyRXZlbnROYW1lcywgRGF0YUxheWVyU2VydmljZSwgRXZlbnRUeXBlcyB9IGZyb20gJ0B0ZWxlbmV0L25nLWxpYi1kYXRhbGF5ZXInO1xuaW1wb3J0IHsgQ2F0ZWdvcnkgfSBmcm9tICd1ZGwnO1xuaW1wb3J0IHsgVHJhY2tFdmVudEluZm8gfSBmcm9tICcuL3RyYWNrLWV2ZW50LWluZm8uaW50ZXJmYWNlJztcbmltcG9ydCB7IFRyYWNraW5nSW5mb0RpcmVjdGl2ZSB9IGZyb20gJy4vdHJhY2tpbmctaW5mby5kaXJlY3RpdmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdidXR0b25bY2xpY2tFdmVudF0nLFxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25DbGlja0RpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIGNsaWNrRXZlbnQ6IFRyYWNrRXZlbnRJbmZvO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIF9lbG1SZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZWFkb25seSBkYXRhTGF5ZXJTZXJ2aWNlOiBEYXRhTGF5ZXJTZXJ2aWNlLFxuICAgIEBIb3N0KCkgcHJpdmF0ZSByZWFkb25seSB0cmFja2luZ0luZm9EaXJlY3RpdmU6IFRyYWNraW5nSW5mb0RpcmVjdGl2ZVxuICApIHt9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBldmVudEhhbmRsZXIoKSB7XG4gICAgY29uc3QgY2F0ZWdvcnkgPSB0aGlzLmRhdGFMYXllclNlcnZpY2UuY3JlYXRlQ2F0ZWdvcnkoXG4gICAgICB0aGlzLnRyYWNraW5nSW5mb0RpcmVjdGl2ZS50cmFja2luZ0luZm8ucHJpbWFyeUNhdGVnb3J5LFxuICAgICAgdGhpcy50cmFja2luZ0luZm9EaXJlY3RpdmUudHJhY2tpbmdJbmZvLnN1YkNhdGVnb3J5XG4gICAgKTtcbiAgICB0aGlzLmFkZEV2ZW50KFxuICAgICAge1xuICAgICAgICBpdGVtTmFtZTogdGhpcy5jbGlja0V2ZW50Py5sYWJlbCxcbiAgICAgICAgaXRlbURhdGE6ICcnLFxuICAgICAgICBpbnRlbnQ6IHRoaXMudHJhY2tpbmdJbmZvRGlyZWN0aXZlLnRyYWNraW5nSW5mby5pbnRlbnQsXG4gICAgICAgIGZsb3dUeXBlOiB0aGlzLnRyYWNraW5nSW5mb0RpcmVjdGl2ZS50cmFja2luZ0luZm8uZmxvd1R5cGUsXG4gICAgICAgIGNhcnQ6IHRoaXMudHJhY2tpbmdJbmZvRGlyZWN0aXZlLnRyYWNraW5nSW5mby5jYXJ0LFxuICAgICAgfSxcbiAgICAgIGNhdGVnb3J5XG4gICAgKS50aGVuKCk7XG4gIH1cblxuICBhZGRFdmVudChhdHRyaWJ1dGVzOiBEYXRhTGF5ZXJBdHRyaWJ1dGVzLCBjYXRlZ29yeT86IENhdGVnb3J5KSB7XG4gICAgbGV0IGV2ZW50TmFtZSA9IERhdGFsYXllckV2ZW50TmFtZXMuQlVUVE9OX0NMSUNLRUQ7XG4gICAgaWYgKHRoaXMuY2xpY2tFdmVudCAmJiB0aGlzLmNsaWNrRXZlbnQuZXZlbnQgJiYgdGhpcy5jbGlja0V2ZW50LmV2ZW50Lm5hbWUpIHtcbiAgICAgIGV2ZW50TmFtZSA9IHRoaXMuY2xpY2tFdmVudC5ldmVudC5uYW1lO1xuICAgIH1cbiAgICBjb25zdCBldmVudEluZm9EYXRhID0gdGhpcy5kYXRhTGF5ZXJTZXJ2aWNlLmNyZWF0ZUV2ZW50SW5mbyhldmVudE5hbWUsIEV2ZW50VHlwZXMuQ0xJQ0spO1xuICAgIHJldHVybiB0aGlzLmRhdGFMYXllclNlcnZpY2Uuc2VuZEV2ZW50KHsgZXZlbnRJbmZvOiBldmVudEluZm9EYXRhLCBhdHRyaWJ1dGVzLCBjYXRlZ29yeSB9KTtcbiAgfVxufVxuIl19