import { Directive, HostListener, Input } from '@angular/core';
import { EventCategoryEnum } from '../../enums/event-category.enum';
import { EventTypes } from '../../enums/datalayer-event-types.enum';
import * as i0 from "@angular/core";
import * as i1 from "../../datalayer.service";
export class AdobeAnalyticsDirective {
    dataLayerService;
    clickPushToAnalytics;
    onClick() {
        this.pushToAnalytics(this.clickPushToAnalytics.attributeName, this.clickPushToAnalytics.eventName, this.clickPushToAnalytics.messageGroupName);
    }
    constructor(dataLayerService) {
        this.dataLayerService = dataLayerService;
    }
    pushToAnalytics(attributeName, eventName, messageGroupName) {
        const eventInfo = this.dataLayerService.createEventInfo(eventName, EventTypes.CLICK, [messageGroupName]);
        const attributes = {
            itemName: attributeName,
        };
        this.addEventToDataLayer(eventInfo, attributes);
    }
    addEventToDataLayer(eventInfo, attributes) {
        const category = this.dataLayerService.createCategory(EventCategoryEnum.PRIMARY_CATEGORY_CARE, EventCategoryEnum.PRIMARY_CATEGORY_GENERAL);
        const enrichedAttributes = attributes || {};
        this.dataLayerService.addEvent(eventInfo, enrichedAttributes, category);
    }
    static ɵfac = function AdobeAnalyticsDirective_Factory(t) { return new (t || AdobeAnalyticsDirective)(i0.ɵɵdirectiveInject(i1.DataLayerService)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: AdobeAnalyticsDirective, selectors: [["", "clickPushToAnalytics", ""]], hostBindings: function AdobeAnalyticsDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function AdobeAnalyticsDirective_click_HostBindingHandler() { return ctx.onClick(); });
        } }, inputs: { clickPushToAnalytics: "clickPushToAnalytics" }, standalone: true });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdobeAnalyticsDirective, [{
        type: Directive,
        args: [{
                selector: '[clickPushToAnalytics]',
                standalone: true,
            }]
    }], () => [{ type: i1.DataLayerService }], { clickPushToAnalytics: [{
            type: Input
        }], onClick: [{
            type: HostListener,
            args: ['click']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRvYmUtYW5hbHl0aWNzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvZGF0YWxheWVyL3V0aWwvZGF0YS1sYXllci11dGlsL2Fkb2JlLWFuYWx5dGljcy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSy9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRXBFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7O0FBTXBFLE1BQU0sT0FBTyx1QkFBdUI7SUFZTDtJQVhwQixvQkFBb0IsQ0FBdUY7SUFHcEgsT0FBTztRQUNMLElBQUksQ0FBQyxlQUFlLENBQ2xCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLEVBQ3ZDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLEVBQ25DLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FDM0MsQ0FBQztJQUNKLENBQUM7SUFFRCxZQUE2QixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFHLENBQUM7SUFFbkUsZUFBZSxDQUFDLGFBQXFCLEVBQUUsU0FBOEIsRUFBRSxnQkFBd0I7UUFDN0YsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztRQUN6RyxNQUFNLFVBQVUsR0FBd0I7WUFDdEMsUUFBUSxFQUFFLGFBQWE7U0FDeEIsQ0FBQztRQUNGLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVPLG1CQUFtQixDQUFDLFNBQXdCLEVBQUUsVUFBZ0M7UUFDcEYsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FDbkQsaUJBQWlCLENBQUMscUJBQXFCLEVBQ3ZDLGlCQUFpQixDQUFDLHdCQUF3QixDQUMzQyxDQUFDO1FBQ0YsTUFBTSxrQkFBa0IsR0FBRyxVQUFVLElBQUksRUFBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzFFLENBQUM7aUZBN0JVLHVCQUF1Qjs2REFBdkIsdUJBQXVCO3dHQUF2QixhQUFTOzs7aUZBQVQsdUJBQXVCO2NBSm5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxVQUFVLEVBQUUsSUFBSTthQUNqQjtpREFFVSxvQkFBb0I7a0JBQTVCLEtBQUs7WUFHTixPQUFPO2tCQUROLFlBQVk7bUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgKiBhcyB1ZGwgZnJvbSAndWRsJztcbmltcG9ydCB7IERhdGFMYXllclNlcnZpY2UgfSBmcm9tICcuLi8uLi9kYXRhbGF5ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRhTGF5ZXJBdHRyaWJ1dGVzIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9kYXRhLWxheWVyLWF0dHJpYnV0ZXMnO1xuaW1wb3J0IHsgRXZlbnRDYXRlZ29yeUVudW0gfSBmcm9tICcuLi8uLi9lbnVtcy9ldmVudC1jYXRlZ29yeS5lbnVtJztcbmltcG9ydCB7IERhdGFsYXllckV2ZW50TmFtZXMgfSBmcm9tICcuLi8uLi9lbnVtcy9kYXRhbGF5ZXItZXZlbnQtbmFtZXMuZW51bSc7XG5pbXBvcnQgeyBFdmVudFR5cGVzIH0gZnJvbSAnLi4vLi4vZW51bXMvZGF0YWxheWVyLWV2ZW50LXR5cGVzLmVudW0nO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY2xpY2tQdXNoVG9BbmFseXRpY3NdJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgQWRvYmVBbmFseXRpY3NEaXJlY3RpdmUge1xuICBASW5wdXQoKSBjbGlja1B1c2hUb0FuYWx5dGljcyE6IHsgYXR0cmlidXRlTmFtZTogc3RyaW5nOyBldmVudE5hbWU6IERhdGFsYXllckV2ZW50TmFtZXM7IG1lc3NhZ2VHcm91cE5hbWU6IHN0cmluZyB9O1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgb25DbGljaygpIHtcbiAgICB0aGlzLnB1c2hUb0FuYWx5dGljcyhcbiAgICAgIHRoaXMuY2xpY2tQdXNoVG9BbmFseXRpY3MuYXR0cmlidXRlTmFtZSxcbiAgICAgIHRoaXMuY2xpY2tQdXNoVG9BbmFseXRpY3MuZXZlbnROYW1lLFxuICAgICAgdGhpcy5jbGlja1B1c2hUb0FuYWx5dGljcy5tZXNzYWdlR3JvdXBOYW1lXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZGF0YUxheWVyU2VydmljZTogRGF0YUxheWVyU2VydmljZSkge31cblxuICBwdXNoVG9BbmFseXRpY3MoYXR0cmlidXRlTmFtZTogc3RyaW5nLCBldmVudE5hbWU6IERhdGFsYXllckV2ZW50TmFtZXMsIG1lc3NhZ2VHcm91cE5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGV2ZW50SW5mbyA9IHRoaXMuZGF0YUxheWVyU2VydmljZS5jcmVhdGVFdmVudEluZm8oZXZlbnROYW1lLCBFdmVudFR5cGVzLkNMSUNLLCBbbWVzc2FnZUdyb3VwTmFtZV0pO1xuICAgIGNvbnN0IGF0dHJpYnV0ZXM6IERhdGFMYXllckF0dHJpYnV0ZXMgPSB7XG4gICAgICBpdGVtTmFtZTogYXR0cmlidXRlTmFtZSxcbiAgICB9O1xuICAgIHRoaXMuYWRkRXZlbnRUb0RhdGFMYXllcihldmVudEluZm8sIGF0dHJpYnV0ZXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRFdmVudFRvRGF0YUxheWVyKGV2ZW50SW5mbzogdWRsLkV2ZW50SW5mbywgYXR0cmlidXRlcz86IERhdGFMYXllckF0dHJpYnV0ZXMpOiB2b2lkIHtcbiAgICBjb25zdCBjYXRlZ29yeSA9IHRoaXMuZGF0YUxheWVyU2VydmljZS5jcmVhdGVDYXRlZ29yeShcbiAgICAgIEV2ZW50Q2F0ZWdvcnlFbnVtLlBSSU1BUllfQ0FURUdPUllfQ0FSRSxcbiAgICAgIEV2ZW50Q2F0ZWdvcnlFbnVtLlBSSU1BUllfQ0FURUdPUllfR0VORVJBTFxuICAgICk7XG4gICAgY29uc3QgZW5yaWNoZWRBdHRyaWJ1dGVzID0gYXR0cmlidXRlcyB8fCB7fTtcbiAgICB0aGlzLmRhdGFMYXllclNlcnZpY2UuYWRkRXZlbnQoZXZlbnRJbmZvLCBlbnJpY2hlZEF0dHJpYnV0ZXMsIGNhdGVnb3J5KTtcbiAgfVxufVxuIl19