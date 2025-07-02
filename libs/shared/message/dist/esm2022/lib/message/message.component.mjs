import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../message.service";
import * as i2 from "@ngx-translate/core";
import * as i3 from "@telenet/ng-lib-shared";
import * as i4 from "@angular/common";
function MessageComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "span", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r4 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("notification notification--", message_r4.type, "");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("icon icon-", message_r4.subtype, " ", message_r4.type, "");
    i0.ɵɵproperty("innerHTML", ctx_r3.getTranslatedLabel(message_r4), i0.ɵɵsanitizeHtml);
} }
function MessageComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, MessageComponent_ng_container_0_div_1_Template, 2, 8, "div", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.getMessages());
} }
function MessageComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
const _c0 = ["*"];
export class MessageComponent {
    messageService;
    translateService;
    domService;
    messageGroupName = '';
    scrollCheck = false;
    constructor(messageService, translateService, domService) {
        this.messageService = messageService;
        this.translateService = translateService;
        this.domService = domService;
    }
    getMessages() {
        const messages = this.messageService.getMessagesByGroupName(this.messageGroupName);
        if (messages.length > 0) {
            this.scrollToTop();
            return [messages[0]];
        }
        else {
            this.scrollCheck = false;
            return [];
        }
    }
    getTranslatedLabel(message) {
        const translatedLabel = this.translateService.instant(message.getMessageLabel(), message.interpolateParams);
        if (translatedLabel === '' || translatedLabel === message.getMessageLabel()) {
            return this.translateService.instant('ng.' + message.getMessageSuffix(), message.interpolateParams);
        }
        return translatedLabel;
    }
    scrollToTop() {
        if (!this.scrollCheck) {
            this.domService.scrollToTop();
            this.scrollCheck = true;
        }
    }
    static ɵfac = function MessageComponent_Factory(t) { return new (t || MessageComponent)(i0.ɵɵdirectiveInject(i1.MessageService), i0.ɵɵdirectiveInject(i2.TranslateService), i0.ɵɵdirectiveInject(i3.DomService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MessageComponent, selectors: [["app-message"]], inputs: { messageGroupName: "messageGroupName" }, ngContentSelectors: _c0, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["noErrorTemplate", ""], [3, "class", 4, "ngFor", "ngForOf"], [3, "innerHTML"]], template: function MessageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, MessageComponent_ng_container_0_Template, 2, 1, "ng-container", 0)(1, MessageComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const _r2 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngIf", ctx.getMessages().length > 0)("ngIfElse", _r2);
        } }, dependencies: [i4.NgForOf, i4.NgIf], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MessageComponent, [{
        type: Component,
        args: [{ selector: 'app-message', template: "<ng-container *ngIf=\"getMessages().length > 0; else noErrorTemplate\">\n  <div *ngFor=\"let message of getMessages()\" class=\"notification notification--{{ message.type }}\">\n    <span class=\"icon icon-{{ message.subtype }} {{ message.type }}\" [innerHTML]=\"getTranslatedLabel(message)\"></span>\n  </div>\n</ng-container>\n<ng-template #noErrorTemplate>\n  <ng-content></ng-content>\n</ng-template>\n" }]
    }], () => [{ type: i1.MessageService }, { type: i2.TranslateService }, { type: i3.DomService }], { messageGroupName: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MessageComponent, { className: "MessageComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9zcmMvbGliL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztJQ0MvQywyQkFBaUc7SUFDL0YsMEJBQWtIO0lBQ3BILGlCQUFNOzs7O0lBRnFDLDZFQUFxRDtJQUN4RixjQUEwRDtJQUExRCxxRkFBMEQ7SUFBQyxvRkFBeUM7OztJQUY5Ryw2QkFBcUU7SUFDbkUsZ0ZBRU07SUFDUiwwQkFBZTs7O0lBSFksY0FBZ0I7SUFBaEIsOENBQWdCOzs7SUFLekMsa0JBQXlCOzs7QURJM0IsTUFBTSxPQUFPLGdCQUFnQjtJQUtSO0lBQ0E7SUFDQTtJQU5WLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztJQUN2QixXQUFXLEdBQUcsS0FBSyxDQUFDO0lBRTVCLFlBQ21CLGNBQThCLEVBQzlCLGdCQUFrQyxFQUNsQyxVQUFzQjtRQUZ0QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQ3RDLENBQUM7SUFFSixXQUFXO1FBQ1QsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNuRixJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixDQUFDO2FBQU0sQ0FBQztZQUNOLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLE9BQU8sRUFBRSxDQUFDO1FBQ1osQ0FBQztJQUNILENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxPQUF3QjtRQUN6QyxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsRUFBRSxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUM1RyxJQUFJLGVBQWUsS0FBSyxFQUFFLElBQUksZUFBZSxLQUFLLE9BQU8sQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDO1lBQzVFLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixFQUFFLEVBQUUsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDdEcsQ0FBQztRQUNELE9BQU8sZUFBZSxDQUFDO0lBQ3pCLENBQUM7SUFFTyxXQUFXO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUMxQixDQUFDO0lBQ0gsQ0FBQzswRUFsQ1UsZ0JBQWdCOzZEQUFoQixnQkFBZ0I7O1lDVjdCLG1GQUllLHFHQUFBOzs7WUFKQSxtREFBZ0MsaUJBQUE7OztpRkRVbEMsZ0JBQWdCO2NBSjVCLFNBQVM7MkJBQ0UsYUFBYTt1R0FJZCxnQkFBZ0I7a0JBQXhCLEtBQUs7O2tGQURLLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7IEFic3RyYWN0TWVzc2FnZSB9IGZyb20gJy4uL21vZGVsJztcbmltcG9ydCB7IERvbVNlcnZpY2UgfSBmcm9tICdAdGVsZW5ldC9uZy1saWItc2hhcmVkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLW1lc3NhZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWVzc2FnZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VDb21wb25lbnQge1xuICBASW5wdXQoKSBtZXNzYWdlR3JvdXBOYW1lID0gJyc7XG4gIHByaXZhdGUgc2Nyb2xsQ2hlY2sgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBkb21TZXJ2aWNlOiBEb21TZXJ2aWNlXG4gICkge31cblxuICBnZXRNZXNzYWdlcygpOiBBYnN0cmFjdE1lc3NhZ2VbXSB7XG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmdldE1lc3NhZ2VzQnlHcm91cE5hbWUodGhpcy5tZXNzYWdlR3JvdXBOYW1lKTtcbiAgICBpZiAobWVzc2FnZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5zY3JvbGxUb1RvcCgpO1xuICAgICAgcmV0dXJuIFttZXNzYWdlc1swXV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2Nyb2xsQ2hlY2sgPSBmYWxzZTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cblxuICBnZXRUcmFuc2xhdGVkTGFiZWwobWVzc2FnZTogQWJzdHJhY3RNZXNzYWdlKTogc3RyaW5nIHtcbiAgICBjb25zdCB0cmFuc2xhdGVkTGFiZWwgPSB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuaW5zdGFudChtZXNzYWdlLmdldE1lc3NhZ2VMYWJlbCgpLCBtZXNzYWdlLmludGVycG9sYXRlUGFyYW1zKTtcbiAgICBpZiAodHJhbnNsYXRlZExhYmVsID09PSAnJyB8fCB0cmFuc2xhdGVkTGFiZWwgPT09IG1lc3NhZ2UuZ2V0TWVzc2FnZUxhYmVsKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuaW5zdGFudCgnbmcuJyArIG1lc3NhZ2UuZ2V0TWVzc2FnZVN1ZmZpeCgpLCBtZXNzYWdlLmludGVycG9sYXRlUGFyYW1zKTtcbiAgICB9XG4gICAgcmV0dXJuIHRyYW5zbGF0ZWRMYWJlbDtcbiAgfVxuXG4gIHByaXZhdGUgc2Nyb2xsVG9Ub3AoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnNjcm9sbENoZWNrKSB7XG4gICAgICB0aGlzLmRvbVNlcnZpY2Uuc2Nyb2xsVG9Ub3AoKTtcbiAgICAgIHRoaXMuc2Nyb2xsQ2hlY2sgPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cImdldE1lc3NhZ2VzKCkubGVuZ3RoID4gMDsgZWxzZSBub0Vycm9yVGVtcGxhdGVcIj5cbiAgPGRpdiAqbmdGb3I9XCJsZXQgbWVzc2FnZSBvZiBnZXRNZXNzYWdlcygpXCIgY2xhc3M9XCJub3RpZmljYXRpb24gbm90aWZpY2F0aW9uLS17eyBtZXNzYWdlLnR5cGUgfX1cIj5cbiAgICA8c3BhbiBjbGFzcz1cImljb24gaWNvbi17eyBtZXNzYWdlLnN1YnR5cGUgfX0ge3sgbWVzc2FnZS50eXBlIH19XCIgW2lubmVySFRNTF09XCJnZXRUcmFuc2xhdGVkTGFiZWwobWVzc2FnZSlcIj48L3NwYW4+XG4gIDwvZGl2PlxuPC9uZy1jb250YWluZXI+XG48bmctdGVtcGxhdGUgI25vRXJyb3JUZW1wbGF0ZT5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==