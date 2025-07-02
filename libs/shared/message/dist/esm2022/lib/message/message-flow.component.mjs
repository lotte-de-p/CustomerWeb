import { Component } from '@angular/core';
import { MessageComponent } from './message.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function MessageFlowComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "span")(2, "div", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r4 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate2("notification notification--", message_r4.type, " notification--", message_r4.type, "--flow");
    i0.ɵɵattribute("data-cy", "app-message-flow");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("icon-", message_r4.subtype, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", ctx_r3.getTranslatedLabel(message_r4), i0.ɵɵsanitizeHtml);
} }
function MessageFlowComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, MessageFlowComponent_ng_container_0_div_1_Template, 3, 9, "div", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.getMessages());
} }
function MessageFlowComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
const _c0 = ["*"];
export class MessageFlowComponent extends MessageComponent {
    static ɵfac = /*@__PURE__*/ (() => { let ɵMessageFlowComponent_BaseFactory; return function MessageFlowComponent_Factory(t) { return (ɵMessageFlowComponent_BaseFactory || (ɵMessageFlowComponent_BaseFactory = i0.ɵɵgetInheritedFactory(MessageFlowComponent)))(t || MessageFlowComponent); }; })();
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MessageFlowComponent, selectors: [["app-message-flow"]], features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["noErrorTemplate", ""], [3, "class", 4, "ngFor", "ngForOf"], [3, "innerHTML"]], template: function MessageFlowComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, MessageFlowComponent_ng_container_0_Template, 2, 1, "ng-container", 0)(1, MessageFlowComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const _r2 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngIf", ctx.getMessages().length > 0)("ngIfElse", _r2);
        } }, dependencies: [i1.NgForOf, i1.NgIf], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MessageFlowComponent, [{
        type: Component,
        args: [{ selector: 'app-message-flow', template: "<ng-container *ngIf=\"getMessages().length > 0; else noErrorTemplate\">\n  <div\n    [attr.data-cy]=\"'app-message-flow'\"\n    *ngFor=\"let message of getMessages()\"\n    class=\"notification notification--{{ message.type }} notification--{{ message.type }}--flow\">\n    <span class=\"icon-{{ message.subtype }}\"></span>\n    <div [innerHTML]=\"getTranslatedLabel(message)\"></div>\n  </div>\n</ng-container>\n<ng-template #noErrorTemplate>\n  <ng-content></ng-content>\n</ng-template>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MessageFlowComponent, { className: "MessageFlowComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS1mbG93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvbWVzc2FnZS9tZXNzYWdlLWZsb3cuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vc3JjL2xpYi9tZXNzYWdlL21lc3NhZ2UtZmxvdy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0lDQXJELDJCQUcrRjtJQUM3Rix1QkFBZ0QsYUFBQTtJQUVsRCxpQkFBTTs7OztJQUhKLHVIQUE0RjtJQUY1Riw2Q0FBbUM7SUFHN0IsY0FBa0M7SUFBbEMsMERBQWtDO0lBQ25DLGNBQXlDO0lBQXpDLG9GQUF5Qzs7O0lBTmxELDZCQUFxRTtJQUNuRSxvRkFNTTtJQUNSLDBCQUFlOzs7SUFMUyxjQUFnQjtJQUFoQiw4Q0FBZ0I7OztJQU90QyxrQkFBeUI7OztBREgzQixNQUFNLE9BQU8sb0JBQXFCLFNBQVEsZ0JBQWdCOzZPQUE3QyxvQkFBb0IsU0FBcEIsb0JBQW9COzZEQUFwQixvQkFBb0I7O1lDUGpDLHVGQVFlLHlHQUFBOzs7WUFSQSxtREFBZ0MsaUJBQUE7OztpRkRPbEMsb0JBQW9CO2NBSmhDLFNBQVM7MkJBQ0Usa0JBQWtCOztrRkFHakIsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9tZXNzYWdlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1tZXNzYWdlLWZsb3cnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWVzc2FnZS1mbG93LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTWVzc2FnZUZsb3dDb21wb25lbnQgZXh0ZW5kcyBNZXNzYWdlQ29tcG9uZW50IHt9XG4iLCI8bmctY29udGFpbmVyICpuZ0lmPVwiZ2V0TWVzc2FnZXMoKS5sZW5ndGggPiAwOyBlbHNlIG5vRXJyb3JUZW1wbGF0ZVwiPlxuICA8ZGl2XG4gICAgW2F0dHIuZGF0YS1jeV09XCInYXBwLW1lc3NhZ2UtZmxvdydcIlxuICAgICpuZ0Zvcj1cImxldCBtZXNzYWdlIG9mIGdldE1lc3NhZ2VzKClcIlxuICAgIGNsYXNzPVwibm90aWZpY2F0aW9uIG5vdGlmaWNhdGlvbi0te3sgbWVzc2FnZS50eXBlIH19IG5vdGlmaWNhdGlvbi0te3sgbWVzc2FnZS50eXBlIH19LS1mbG93XCI+XG4gICAgPHNwYW4gY2xhc3M9XCJpY29uLXt7IG1lc3NhZ2Uuc3VidHlwZSB9fVwiPjwvc3Bhbj5cbiAgICA8ZGl2IFtpbm5lckhUTUxdPVwiZ2V0VHJhbnNsYXRlZExhYmVsKG1lc3NhZ2UpXCI+PC9kaXY+XG4gIDwvZGl2PlxuPC9uZy1jb250YWluZXI+XG48bmctdGVtcGxhdGUgI25vRXJyb3JUZW1wbGF0ZT5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==