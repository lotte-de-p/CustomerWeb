import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';
import * as i0 from "@angular/core";
function OverlayPopupComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13)(1, "div", 14);
    i0.ɵɵlistener("click", function OverlayPopupComponent_Conditional_4_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.closeButtonClicked.emit()); });
    i0.ɵɵelementEnd()();
} }
function OverlayPopupComponent_h5_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.title);
} }
function OverlayPopupComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.subtitle);
} }
function OverlayPopupComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r3.content);
} }
function OverlayPopupComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 18);
    i0.ɵɵlistener("click", function OverlayPopupComponent_a_11_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.secondaryButtonClicked.emit()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r4.secondaryButtonText);
} }
function OverlayPopupComponent_a_12_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 19);
    i0.ɵɵlistener("click", function OverlayPopupComponent_a_12_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r10.primaryButtonClicked.emit()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r5.primaryButtonText);
} }
export class OverlayPopupComponent {
    title = '';
    subtitle = '';
    content = '';
    enableClose = true;
    primaryButtonText = '';
    secondaryButtonText = '';
    primaryButtonClicked = new EventEmitter();
    secondaryButtonClicked = new EventEmitter();
    closeButtonClicked = new EventEmitter();
    static ɵfac = function OverlayPopupComponent_Factory(t) { return new (t || OverlayPopupComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OverlayPopupComponent, selectors: [["app-overlay-popup"]], inputs: { title: "title", subtitle: "subtitle", content: "content", enableClose: "enableClose", primaryButtonText: "primaryButtonText", secondaryButtonText: "secondaryButtonText" }, outputs: { primaryButtonClicked: "primaryButtonClicked", secondaryButtonClicked: "secondaryButtonClicked", closeButtonClicked: "closeButtonClicked" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 13, vars: 6, consts: [[1, "overlay"], [1, "overlay__mask"], [1, "overlay__section"], [1, "overlay__section__content", "p--m", "p--l--md", "animation--slide-down-to-screen"], ["class", "overlay__section__content__close"], [1, "text-align--left"], ["class", "heading--notopmargin overlay__section__content__title", 4, "ngIf"], ["class", "overlay__section__content__sub-title", 4, "ngIf"], [1, "mt--xs"], ["class", "overlay__section__content__description", 4, "ngIf"], [1, "overlay__section__content__action"], ["class", "button button--secondary", 3, "click", 4, "ngIf"], ["class", "button button--primary", 3, "click", 4, "ngIf"], [1, "overlay__section__content__close"], [1, "icon", "icon-cross", 3, "click"], [1, "heading--notopmargin", "overlay__section__content__title"], [1, "overlay__section__content__sub-title"], [1, "overlay__section__content__description"], [1, "button", "button--secondary", 3, "click"], [1, "button", "button--primary", 3, "click"]], template: function OverlayPopupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelement(1, "div", 1);
            i0.ɵɵelementStart(2, "div", 2)(3, "div", 3);
            i0.ɵɵtemplate(4, OverlayPopupComponent_Conditional_4_Template, 2, 0, "div", 4);
            i0.ɵɵelementStart(5, "div", 5);
            i0.ɵɵtemplate(6, OverlayPopupComponent_h5_6_Template, 2, 1, "h5", 6)(7, OverlayPopupComponent_div_7_Template, 2, 1, "div", 7);
            i0.ɵɵelementStart(8, "div", 8);
            i0.ɵɵtemplate(9, OverlayPopupComponent_div_9_Template, 2, 1, "div", 9);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "div", 10);
            i0.ɵɵtemplate(11, OverlayPopupComponent_a_11_Template, 2, 1, "a", 11)(12, OverlayPopupComponent_a_12_Template, 2, 1, "a", 12);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵconditional(4, ctx.enableClose ? 4 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.title);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.subtitle);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.content);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.secondaryButtonText);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.primaryButtonText);
        } }, dependencies: [NgIf], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OverlayPopupComponent, [{
        type: Component,
        args: [{ standalone: true, selector: 'app-overlay-popup', imports: [NgIf], template: "<div class=\"overlay\">\n  <div class=\"overlay__mask\"></div>\n  <div class=\"overlay__section\">\n    <div class=\"overlay__section__content p--m p--l--md animation--slide-down-to-screen\">\n      @if (enableClose) {\n        <div class=\"overlay__section__content__close\">\n          <div class=\"icon icon-cross\" (click)=\"this.closeButtonClicked.emit()\"></div>\n        </div>\n      }\n      <div class=\"text-align--left\">\n        <h5 *ngIf=\"title\" class=\"heading--notopmargin overlay__section__content__title\">{{ title }}</h5>\n        <div *ngIf=\"subtitle\" class=\"overlay__section__content__sub-title\">{{ subtitle }}</div>\n        <div class=\"mt--xs\">\n          <div *ngIf=\"content\" class=\"overlay__section__content__description\">{{ content }}</div>\n        </div>\n      </div>\n      <div class=\"overlay__section__content__action\">\n        <a *ngIf=\"secondaryButtonText\" (click)=\"this.secondaryButtonClicked.emit()\" class=\"button button--secondary\">{{\n          secondaryButtonText\n        }}</a>\n        <a *ngIf=\"primaryButtonText\" (click)=\"this.primaryButtonClicked.emit()\" class=\"button button--primary\">{{\n          primaryButtonText\n        }}</a>\n      </div>\n    </div>\n  </div>\n</div>\n" }]
    }], null, { title: [{
            type: Input
        }], subtitle: [{
            type: Input
        }], content: [{
            type: Input
        }], enableClose: [{
            type: Input
        }], primaryButtonText: [{
            type: Input
        }], secondaryButtonText: [{
            type: Input
        }], primaryButtonClicked: [{
            type: Output
        }], secondaryButtonClicked: [{
            type: Output
        }], closeButtonClicked: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(OverlayPopupComponent, { className: "OverlayPopupComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1wb3B1cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL3VpL292ZXJsYXktcG9wdXAvb3ZlcmxheS1wb3B1cC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL3VpL292ZXJsYXktcG9wdXAvb3ZlcmxheS1wb3B1cC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7OztJQ0kvQiwrQkFBOEMsY0FBQTtJQUNmLHVLQUFTLGVBQUEsZ0NBQThCLENBQUEsSUFBQztJQUFDLGlCQUFNLEVBQUE7OztJQUk5RSw4QkFBZ0Y7SUFBQSxZQUFXO0lBQUEsaUJBQUs7OztJQUFoQixjQUFXO0lBQVgsa0NBQVc7OztJQUMzRiwrQkFBbUU7SUFBQSxZQUFjO0lBQUEsaUJBQU07OztJQUFwQixjQUFjO0lBQWQscUNBQWM7OztJQUUvRSwrQkFBb0U7SUFBQSxZQUFhO0lBQUEsaUJBQU07OztJQUFuQixjQUFhO0lBQWIsb0NBQWE7Ozs7SUFJbkYsNkJBQTZHO0lBQTlFLDRKQUFTLGVBQUEsb0NBQWtDLENBQUEsSUFBQztJQUFrQyxZQUUzRztJQUFBLGlCQUFJOzs7SUFGdUcsY0FFM0c7SUFGMkcsZ0RBRTNHOzs7O0lBQ0YsNkJBQXVHO0lBQTFFLDhKQUFTLGVBQUEsbUNBQWdDLENBQUEsSUFBQztJQUFnQyxZQUVyRztJQUFBLGlCQUFJOzs7SUFGaUcsY0FFckc7SUFGcUcsOENBRXJHOztBRGJWLE1BQU0sT0FBTyxxQkFBcUI7SUFDdkIsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNYLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDZCxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ2IsV0FBVyxHQUFHLElBQUksQ0FBQztJQUNuQixpQkFBaUIsR0FBRyxFQUFFLENBQUM7SUFDdkIsbUJBQW1CLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLG9CQUFvQixHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7SUFDaEQsc0JBQXNCLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQUNsRCxrQkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDOytFQVQ3QyxxQkFBcUI7NkRBQXJCLHFCQUFxQjtZQ1RsQyw4QkFBcUI7WUFDbkIseUJBQWlDO1lBQ2pDLDhCQUE4QixhQUFBO1lBRTFCLDhFQUlDO1lBQ0QsOEJBQThCO1lBQzVCLG9FQUFnRyx5REFBQTtZQUVoRyw4QkFBb0I7WUFDbEIsc0VBQXVGO1lBQ3pGLGlCQUFNLEVBQUE7WUFFUixnQ0FBK0M7WUFDN0MscUVBRU0sd0RBQUE7WUFJUixpQkFBTSxFQUFBLEVBQUEsRUFBQTs7WUFuQk4sZUFJQztZQUpELDZDQUlDO1lBRU0sZUFBVztZQUFYLGdDQUFXO1lBQ1YsY0FBYztZQUFkLG1DQUFjO1lBRVosZUFBYTtZQUFiLGtDQUFhO1lBSWpCLGVBQXlCO1lBQXpCLDhDQUF5QjtZQUd6QixjQUF1QjtZQUF2Qiw0Q0FBdUI7NEJEYnZCLElBQUk7O2lGQUVILHFCQUFxQjtjQU5qQyxTQUFTOzZCQUNJLElBQUksWUFDTixtQkFBbUIsV0FFcEIsQ0FBQyxJQUFJLENBQUM7Z0JBR04sS0FBSztrQkFBYixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFDRyxtQkFBbUI7a0JBQTNCLEtBQUs7WUFDSSxvQkFBb0I7a0JBQTdCLE1BQU07WUFDRyxzQkFBc0I7a0JBQS9CLE1BQU07WUFDRyxrQkFBa0I7a0JBQTNCLE1BQU07O2tGQVRJLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0lmIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIHNlbGVjdG9yOiAnYXBwLW92ZXJsYXktcG9wdXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vb3ZlcmxheS1wb3B1cC5jb21wb25lbnQuaHRtbCcsXG4gIGltcG9ydHM6IFtOZ0lmXSxcbn0pXG5leHBvcnQgY2xhc3MgT3ZlcmxheVBvcHVwQ29tcG9uZW50IHtcbiAgQElucHV0KCkgdGl0bGUgPSAnJztcbiAgQElucHV0KCkgc3VidGl0bGUgPSAnJztcbiAgQElucHV0KCkgY29udGVudCA9ICcnO1xuICBASW5wdXQoKSBlbmFibGVDbG9zZSA9IHRydWU7XG4gIEBJbnB1dCgpIHByaW1hcnlCdXR0b25UZXh0ID0gJyc7XG4gIEBJbnB1dCgpIHNlY29uZGFyeUJ1dHRvblRleHQgPSAnJztcbiAgQE91dHB1dCgpIHByaW1hcnlCdXR0b25DbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgc2Vjb25kYXJ5QnV0dG9uQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIGNsb3NlQnV0dG9uQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbn1cbiIsIjxkaXYgY2xhc3M9XCJvdmVybGF5XCI+XG4gIDxkaXYgY2xhc3M9XCJvdmVybGF5X19tYXNrXCI+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJvdmVybGF5X19zZWN0aW9uXCI+XG4gICAgPGRpdiBjbGFzcz1cIm92ZXJsYXlfX3NlY3Rpb25fX2NvbnRlbnQgcC0tbSBwLS1sLS1tZCBhbmltYXRpb24tLXNsaWRlLWRvd24tdG8tc2NyZWVuXCI+XG4gICAgICBAaWYgKGVuYWJsZUNsb3NlKSB7XG4gICAgICAgIDxkaXYgY2xhc3M9XCJvdmVybGF5X19zZWN0aW9uX19jb250ZW50X19jbG9zZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpY29uIGljb24tY3Jvc3NcIiAoY2xpY2spPVwidGhpcy5jbG9zZUJ1dHRvbkNsaWNrZWQuZW1pdCgpXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgICAgPGRpdiBjbGFzcz1cInRleHQtYWxpZ24tLWxlZnRcIj5cbiAgICAgICAgPGg1ICpuZ0lmPVwidGl0bGVcIiBjbGFzcz1cImhlYWRpbmctLW5vdG9wbWFyZ2luIG92ZXJsYXlfX3NlY3Rpb25fX2NvbnRlbnRfX3RpdGxlXCI+e3sgdGl0bGUgfX08L2g1PlxuICAgICAgICA8ZGl2ICpuZ0lmPVwic3VidGl0bGVcIiBjbGFzcz1cIm92ZXJsYXlfX3NlY3Rpb25fX2NvbnRlbnRfX3N1Yi10aXRsZVwiPnt7IHN1YnRpdGxlIH19PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtdC0teHNcIj5cbiAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY29udGVudFwiIGNsYXNzPVwib3ZlcmxheV9fc2VjdGlvbl9fY29udGVudF9fZGVzY3JpcHRpb25cIj57eyBjb250ZW50IH19PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheV9fc2VjdGlvbl9fY29udGVudF9fYWN0aW9uXCI+XG4gICAgICAgIDxhICpuZ0lmPVwic2Vjb25kYXJ5QnV0dG9uVGV4dFwiIChjbGljayk9XCJ0aGlzLnNlY29uZGFyeUJ1dHRvbkNsaWNrZWQuZW1pdCgpXCIgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1zZWNvbmRhcnlcIj57e1xuICAgICAgICAgIHNlY29uZGFyeUJ1dHRvblRleHRcbiAgICAgICAgfX08L2E+XG4gICAgICAgIDxhICpuZ0lmPVwicHJpbWFyeUJ1dHRvblRleHRcIiAoY2xpY2spPVwidGhpcy5wcmltYXJ5QnV0dG9uQ2xpY2tlZC5lbWl0KClcIiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXByaW1hcnlcIj57e1xuICAgICAgICAgIHByaW1hcnlCdXR0b25UZXh0XG4gICAgICAgIH19PC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=