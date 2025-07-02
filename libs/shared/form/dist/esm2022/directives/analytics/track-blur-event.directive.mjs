import { Directive, Host, HostListener, Input } from '@angular/core';
import { DatalayerEventNames, EventTypes } from '@telenet/ng-lib-datalayer';
import * as i0 from "@angular/core";
import * as i1 from "@telenet/ng-lib-datalayer";
import * as i2 from "./tracking-info.directive";
import * as i3 from "@ngx-translate/core";
export class TrackBlurEventDirective {
    dataLayerService;
    trackingInfoDirective;
    translateService;
    trackBlurEvent;
    blockData = true;
    constructor(dataLayerService, trackingInfoDirective, translateService) {
        this.dataLayerService = dataLayerService;
        this.trackingInfoDirective = trackingInfoDirective;
        this.translateService = translateService;
    }
    trackingEvent(event) {
        let label = event.target.attributes.getNamedItem('formControlName')?.value || '';
        if (this.trackBlurEvent && this.trackBlurEvent.label) {
            label = this.trackBlurEvent.label;
        }
        const category = this.dataLayerService.createCategory(this.trackingInfoDirective.trackingInfo.primaryCategory, this.trackingInfoDirective.trackingInfo.subCategory);
        this.addFormFieldCompletedEvent({
            itemName: this.translateService.instant(label),
            itemData: !this.blockData ? event.target.value : '',
            intent: this.trackingInfoDirective.trackingInfo.intent,
            flowType: this.trackingInfoDirective.trackingInfo.flowType,
            cart: this.getCart(),
        }, category).then();
    }
    addFormFieldCompletedEvent(attributes, category) {
        const eventInfoData = this.dataLayerService.createEventInfo(DatalayerEventNames.FORM_FIELD_COMPLETED, EventTypes.CLICK);
        return this.dataLayerService.sendEvent({ eventInfo: eventInfoData, attributes, category });
    }
    getCart() {
        if (this.trackingInfoDirective && this.trackingInfoDirective.trackingInfo.cart) {
            return this.trackingInfoDirective.trackingInfo.cart;
        }
        return {};
    }
    static ɵfac = function TrackBlurEventDirective_Factory(t) { return new (t || TrackBlurEventDirective)(i0.ɵɵdirectiveInject(i1.DataLayerService), i0.ɵɵdirectiveInject(i2.TrackingInfoDirective, 1), i0.ɵɵdirectiveInject(i3.TranslateService)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: TrackBlurEventDirective, selectors: [["input", "trackBlurEvent", ""]], hostBindings: function TrackBlurEventDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("focusout", function TrackBlurEventDirective_focusout_HostBindingHandler($event) { return ctx.trackingEvent($event); });
        } }, inputs: { trackBlurEvent: "trackBlurEvent", blockData: "blockData" } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TrackBlurEventDirective, [{
        type: Directive,
        args: [{
                selector: 'input[trackBlurEvent]',
            }]
    }], () => [{ type: i1.DataLayerService }, { type: i2.TrackingInfoDirective, decorators: [{
                type: Host
            }] }, { type: i3.TranslateService }], { trackBlurEvent: [{
            type: Input
        }], blockData: [{
            type: Input
        }], trackingEvent: [{
            type: HostListener,
            args: ['focusout', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhY2stYmx1ci1ldmVudC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZGlyZWN0aXZlcy9hbmFseXRpY3MvdHJhY2stYmx1ci1ldmVudC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQXVCLG1CQUFtQixFQUFvQixVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7QUFTbkgsTUFBTSxPQUFPLHVCQUF1QjtJQUtmO0lBQ1E7SUFDUjtJQU5WLGNBQWMsQ0FBa0I7SUFDaEMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUUxQixZQUNtQixnQkFBa0MsRUFDMUIscUJBQTRDLEVBQ3BELGdCQUFrQztRQUZsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzFCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDcEQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUNsRCxDQUFDO0lBR0osYUFBYSxDQUFDLEtBQTJDO1FBQ3ZELElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDakYsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDckQsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDO1FBQ3BDLENBQUM7UUFDRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUNuRCxJQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFDdkQsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxXQUFXLENBQ3BELENBQUM7UUFDRixJQUFJLENBQUMsMEJBQTBCLENBQzdCO1lBQ0UsUUFBUSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQzlDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ25ELE1BQU0sRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLE1BQU07WUFDdEQsUUFBUSxFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsUUFBUTtZQUMxRCxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRTtTQUNyQixFQUNELFFBQVEsQ0FDVCxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ1gsQ0FBQztJQUVELDBCQUEwQixDQUFDLFVBQStCLEVBQUUsUUFBbUI7UUFDN0UsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FDekQsbUJBQW1CLENBQUMsb0JBQW9CLEVBQ3hDLFVBQVUsQ0FBQyxLQUFLLENBQ2pCLENBQUM7UUFDRixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQzdGLENBQUM7SUFFTyxPQUFPO1FBQ2IsSUFBSSxJQUFJLENBQUMscUJBQXFCLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMvRSxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1FBQ3RELENBQUM7UUFDRCxPQUFPLEVBQVUsQ0FBQztJQUNwQixDQUFDO2lGQTdDVSx1QkFBdUI7NkRBQXZCLHVCQUF1QjtvSEFBdkIseUJBQXFCOzs7aUZBQXJCLHVCQUF1QjtjQUhuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjthQUNsQzs7c0JBT0ksSUFBSTtvREFMRSxjQUFjO2tCQUF0QixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQVNOLGFBQWE7a0JBRFosWUFBWTttQkFBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3QsIEhvc3RMaXN0ZW5lciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFMYXllckF0dHJpYnV0ZXMsIERhdGFsYXllckV2ZW50TmFtZXMsIERhdGFMYXllclNlcnZpY2UsIEV2ZW50VHlwZXMgfSBmcm9tICdAdGVsZW5ldC9uZy1saWItZGF0YWxheWVyJztcbmltcG9ydCB7IENhcnQsIENhdGVnb3J5IH0gZnJvbSAndWRsJztcbmltcG9ydCB7IFRyYWNraW5nSW5mb0RpcmVjdGl2ZSB9IGZyb20gJy4vdHJhY2tpbmctaW5mby5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgVHJhY2tFdmVudEluZm8gfSBmcm9tICcuL3RyYWNrLWV2ZW50LWluZm8uaW50ZXJmYWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnaW5wdXRbdHJhY2tCbHVyRXZlbnRdJyxcbn0pXG5leHBvcnQgY2xhc3MgVHJhY2tCbHVyRXZlbnREaXJlY3RpdmUge1xuICBASW5wdXQoKSB0cmFja0JsdXJFdmVudD86IFRyYWNrRXZlbnRJbmZvO1xuICBASW5wdXQoKSBibG9ja0RhdGEgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGF0YUxheWVyU2VydmljZTogRGF0YUxheWVyU2VydmljZSxcbiAgICBASG9zdCgpIHByaXZhdGUgcmVhZG9ubHkgdHJhY2tpbmdJbmZvRGlyZWN0aXZlOiBUcmFja2luZ0luZm9EaXJlY3RpdmUsXG4gICAgcHJpdmF0ZSByZWFkb25seSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlXG4gICkge31cblxuICBASG9zdExpc3RlbmVyKCdmb2N1c291dCcsIFsnJGV2ZW50J10pXG4gIHRyYWNraW5nRXZlbnQoZXZlbnQ6IEV2ZW50ICYgeyB0YXJnZXQ6IEhUTUxJbnB1dEVsZW1lbnQgfSkge1xuICAgIGxldCBsYWJlbCA9IGV2ZW50LnRhcmdldC5hdHRyaWJ1dGVzLmdldE5hbWVkSXRlbSgnZm9ybUNvbnRyb2xOYW1lJyk/LnZhbHVlIHx8ICcnO1xuICAgIGlmICh0aGlzLnRyYWNrQmx1ckV2ZW50ICYmIHRoaXMudHJhY2tCbHVyRXZlbnQubGFiZWwpIHtcbiAgICAgIGxhYmVsID0gdGhpcy50cmFja0JsdXJFdmVudC5sYWJlbDtcbiAgICB9XG4gICAgY29uc3QgY2F0ZWdvcnkgPSB0aGlzLmRhdGFMYXllclNlcnZpY2UuY3JlYXRlQ2F0ZWdvcnkoXG4gICAgICB0aGlzLnRyYWNraW5nSW5mb0RpcmVjdGl2ZS50cmFja2luZ0luZm8ucHJpbWFyeUNhdGVnb3J5LFxuICAgICAgdGhpcy50cmFja2luZ0luZm9EaXJlY3RpdmUudHJhY2tpbmdJbmZvLnN1YkNhdGVnb3J5XG4gICAgKTtcbiAgICB0aGlzLmFkZEZvcm1GaWVsZENvbXBsZXRlZEV2ZW50KFxuICAgICAge1xuICAgICAgICBpdGVtTmFtZTogdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQobGFiZWwpLFxuICAgICAgICBpdGVtRGF0YTogIXRoaXMuYmxvY2tEYXRhID8gZXZlbnQudGFyZ2V0LnZhbHVlIDogJycsXG4gICAgICAgIGludGVudDogdGhpcy50cmFja2luZ0luZm9EaXJlY3RpdmUudHJhY2tpbmdJbmZvLmludGVudCxcbiAgICAgICAgZmxvd1R5cGU6IHRoaXMudHJhY2tpbmdJbmZvRGlyZWN0aXZlLnRyYWNraW5nSW5mby5mbG93VHlwZSxcbiAgICAgICAgY2FydDogdGhpcy5nZXRDYXJ0KCksXG4gICAgICB9LFxuICAgICAgY2F0ZWdvcnlcbiAgICApLnRoZW4oKTtcbiAgfVxuXG4gIGFkZEZvcm1GaWVsZENvbXBsZXRlZEV2ZW50KGF0dHJpYnV0ZXM6IERhdGFMYXllckF0dHJpYnV0ZXMsIGNhdGVnb3J5PzogQ2F0ZWdvcnkpIHtcbiAgICBjb25zdCBldmVudEluZm9EYXRhID0gdGhpcy5kYXRhTGF5ZXJTZXJ2aWNlLmNyZWF0ZUV2ZW50SW5mbyhcbiAgICAgIERhdGFsYXllckV2ZW50TmFtZXMuRk9STV9GSUVMRF9DT01QTEVURUQsXG4gICAgICBFdmVudFR5cGVzLkNMSUNLXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy5kYXRhTGF5ZXJTZXJ2aWNlLnNlbmRFdmVudCh7IGV2ZW50SW5mbzogZXZlbnRJbmZvRGF0YSwgYXR0cmlidXRlcywgY2F0ZWdvcnkgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldENhcnQoKTogQ2FydCB7XG4gICAgaWYgKHRoaXMudHJhY2tpbmdJbmZvRGlyZWN0aXZlICYmIHRoaXMudHJhY2tpbmdJbmZvRGlyZWN0aXZlLnRyYWNraW5nSW5mby5jYXJ0KSB7XG4gICAgICByZXR1cm4gdGhpcy50cmFja2luZ0luZm9EaXJlY3RpdmUudHJhY2tpbmdJbmZvLmNhcnQ7XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBDYXJ0O1xuICB9XG59XG4iXX0=