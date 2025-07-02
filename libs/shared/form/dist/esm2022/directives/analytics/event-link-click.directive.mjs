import { Directive, Host, HostListener, Input } from '@angular/core';
import { DatalayerEventNames, EventTypes } from '@telenet/ng-lib-datalayer';
import * as i0 from "@angular/core";
import * as i1 from "@telenet/ng-lib-datalayer";
import * as i2 from "./tracking-info.directive";
export class EventLinkClickDirective {
    dataLayerService;
    trackingInfoDirective;
    clickEvent;
    constructor(_elmRef, dataLayerService, trackingInfoDirective) {
        this.dataLayerService = dataLayerService;
        this.trackingInfoDirective = trackingInfoDirective;
    }
    trackingEvent(event) {
        let label = '';
        if (this.clickEvent && this.clickEvent.label) {
            label = this.clickEvent.label;
        }
        const category = this.dataLayerService.createCategory(this.trackingInfoDirective.trackingInfo.primaryCategory, this.trackingInfoDirective.trackingInfo.subCategory);
        this.addEvent({
            itemName: label,
            itemData: event.value,
            intent: this.trackingInfoDirective.trackingInfo.intent,
            flowType: this.trackingInfoDirective.trackingInfo.flowType,
        }, category).then();
    }
    addEvent(attributes, category) {
        const eventInfo = this.dataLayerService.createEventInfo(DatalayerEventNames.LINK_CLICKED, EventTypes.LINK_CLICK);
        return this.dataLayerService.sendEvent({
            eventInfo,
            attributes,
            category,
        });
    }
    static ɵfac = function EventLinkClickDirective_Factory(t) { return new (t || EventLinkClickDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.DataLayerService), i0.ɵɵdirectiveInject(i2.TrackingInfoDirective, 1)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: EventLinkClickDirective, selectors: [["a", "clickEvent", ""], ["span", "clickEvent", ""]], hostBindings: function EventLinkClickDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function EventLinkClickDirective_click_HostBindingHandler($event) { return ctx.trackingEvent($event); });
        } }, inputs: { clickEvent: "clickEvent" } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EventLinkClickDirective, [{
        type: Directive,
        args: [{
                selector: 'a[clickEvent], span[clickEvent]',
            }]
    }], () => [{ type: i0.ElementRef }, { type: i1.DataLayerService }, { type: i2.TrackingInfoDirective, decorators: [{
                type: Host
            }] }], { clickEvent: [{
            type: Input
        }], trackingEvent: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtbGluay1jbGljay5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZGlyZWN0aXZlcy9hbmFseXRpY3MvZXZlbnQtbGluay1jbGljay5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxJQUFJLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRixPQUFPLEVBQXVCLG1CQUFtQixFQUFvQixVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7OztBQVFuSCxNQUFNLE9BQU8sdUJBQXVCO0lBS2Y7SUFDUTtJQUxsQixVQUFVLENBQWtCO0lBRXJDLFlBQ0UsT0FBbUIsRUFDRixnQkFBa0MsRUFDMUIscUJBQTRDO1FBRHBELHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDMUIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtJQUNwRSxDQUFDO0lBR0osYUFBYSxDQUFDLEtBQWdDO1FBQzVDLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzdDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUNoQyxDQUFDO1FBQ0QsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FDbkQsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQ3ZELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUNwRCxDQUFDO1FBRUYsSUFBSSxDQUFDLFFBQVEsQ0FDWDtZQUNFLFFBQVEsRUFBRSxLQUFLO1lBQ2YsUUFBUSxFQUFFLEtBQUssQ0FBQyxLQUFLO1lBQ3JCLE1BQU0sRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLE1BQU07WUFDdEQsUUFBUSxFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsUUFBUTtTQUMzRCxFQUNELFFBQVEsQ0FDVCxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ1gsQ0FBQztJQUVELFFBQVEsQ0FBQyxVQUErQixFQUFFLFFBQW1CO1FBQzNELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqSCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7WUFDckMsU0FBUztZQUNULFVBQVU7WUFDVixRQUFRO1NBQ1QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztpRkF0Q1UsdUJBQXVCOzZEQUF2Qix1QkFBdUI7OEdBQXZCLHlCQUFxQjs7O2lGQUFyQix1QkFBdUI7Y0FIbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQ0FBaUM7YUFDNUM7O3NCQU9JLElBQUk7cUJBTEUsVUFBVTtrQkFBbEIsS0FBSztZQVNOLGFBQWE7a0JBRFosWUFBWTttQkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3QsIEhvc3RMaXN0ZW5lciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFMYXllckF0dHJpYnV0ZXMsIERhdGFsYXllckV2ZW50TmFtZXMsIERhdGFMYXllclNlcnZpY2UsIEV2ZW50VHlwZXMgfSBmcm9tICdAdGVsZW5ldC9uZy1saWItZGF0YWxheWVyJztcbmltcG9ydCB7IENhdGVnb3J5IH0gZnJvbSAndWRsJztcbmltcG9ydCB7IFRyYWNraW5nSW5mb0RpcmVjdGl2ZSB9IGZyb20gJy4vdHJhY2tpbmctaW5mby5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVHJhY2tFdmVudEluZm8gfSBmcm9tICcuL3RyYWNrLWV2ZW50LWluZm8uaW50ZXJmYWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnYVtjbGlja0V2ZW50XSwgc3BhbltjbGlja0V2ZW50XScsXG59KVxuZXhwb3J0IGNsYXNzIEV2ZW50TGlua0NsaWNrRGlyZWN0aXZlIHtcbiAgQElucHV0KCkgY2xpY2tFdmVudD86IFRyYWNrRXZlbnRJbmZvO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIF9lbG1SZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZWFkb25seSBkYXRhTGF5ZXJTZXJ2aWNlOiBEYXRhTGF5ZXJTZXJ2aWNlLFxuICAgIEBIb3N0KCkgcHJpdmF0ZSByZWFkb25seSB0cmFja2luZ0luZm9EaXJlY3RpdmU6IFRyYWNraW5nSW5mb0RpcmVjdGl2ZVxuICApIHt9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICB0cmFja2luZ0V2ZW50KGV2ZW50OiBFdmVudCAmIHsgdmFsdWU6IHN0cmluZyB9KSB7XG4gICAgbGV0IGxhYmVsID0gJyc7XG4gICAgaWYgKHRoaXMuY2xpY2tFdmVudCAmJiB0aGlzLmNsaWNrRXZlbnQubGFiZWwpIHtcbiAgICAgIGxhYmVsID0gdGhpcy5jbGlja0V2ZW50LmxhYmVsO1xuICAgIH1cbiAgICBjb25zdCBjYXRlZ29yeSA9IHRoaXMuZGF0YUxheWVyU2VydmljZS5jcmVhdGVDYXRlZ29yeShcbiAgICAgIHRoaXMudHJhY2tpbmdJbmZvRGlyZWN0aXZlLnRyYWNraW5nSW5mby5wcmltYXJ5Q2F0ZWdvcnksXG4gICAgICB0aGlzLnRyYWNraW5nSW5mb0RpcmVjdGl2ZS50cmFja2luZ0luZm8uc3ViQ2F0ZWdvcnlcbiAgICApO1xuXG4gICAgdGhpcy5hZGRFdmVudChcbiAgICAgIHtcbiAgICAgICAgaXRlbU5hbWU6IGxhYmVsLFxuICAgICAgICBpdGVtRGF0YTogZXZlbnQudmFsdWUsXG4gICAgICAgIGludGVudDogdGhpcy50cmFja2luZ0luZm9EaXJlY3RpdmUudHJhY2tpbmdJbmZvLmludGVudCxcbiAgICAgICAgZmxvd1R5cGU6IHRoaXMudHJhY2tpbmdJbmZvRGlyZWN0aXZlLnRyYWNraW5nSW5mby5mbG93VHlwZSxcbiAgICAgIH0sXG4gICAgICBjYXRlZ29yeVxuICAgICkudGhlbigpO1xuICB9XG5cbiAgYWRkRXZlbnQoYXR0cmlidXRlczogRGF0YUxheWVyQXR0cmlidXRlcywgY2F0ZWdvcnk/OiBDYXRlZ29yeSkge1xuICAgIGNvbnN0IGV2ZW50SW5mbyA9IHRoaXMuZGF0YUxheWVyU2VydmljZS5jcmVhdGVFdmVudEluZm8oRGF0YWxheWVyRXZlbnROYW1lcy5MSU5LX0NMSUNLRUQsIEV2ZW50VHlwZXMuTElOS19DTElDSyk7XG4gICAgcmV0dXJuIHRoaXMuZGF0YUxheWVyU2VydmljZS5zZW5kRXZlbnQoe1xuICAgICAgZXZlbnRJbmZvLFxuICAgICAgYXR0cmlidXRlcyxcbiAgICAgIGNhdGVnb3J5LFxuICAgIH0pO1xuICB9XG59XG4iXX0=