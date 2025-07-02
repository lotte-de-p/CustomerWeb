import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@telenet/ng-lib-form";
import * as i3 from "@ngx-translate/core";
const _c0 = () => ({ position: "l", size: "s" });
function SummaryHeaderComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("tgMargin", i0.ɵɵpureFunction0(4, _c0));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, ctx_r0.noLinkText), " ");
} }
function SummaryHeaderComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵlistener("click", function SummaryHeaderComponent_div_6_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.linkClicked.emit()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("tgMargin", i0.ɵɵpureFunction0(2, _c0));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.linkText, " ");
} }
export class SummaryHeaderComponent {
    title;
    icon;
    linkText;
    noLinkText;
    linkClicked = new EventEmitter();
    static ɵfac = function SummaryHeaderComponent_Factory(t) { return new (t || SummaryHeaderComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SummaryHeaderComponent, selectors: [["tg-summary-header"]], inputs: { title: "title", icon: "icon", linkText: "linkText", noLinkText: "noLinkText" }, outputs: { linkClicked: "linkClicked" }, decls: 7, vars: 5, consts: [[1, "summary-content--row", "flex-direction--column"], [1, "display--flex", "justify-content--between", "mb--xxs", "width--full"], [1, "text-block__left", "text-font-family--t4", "text-weight--g", "text--m"], ["class", "text-block__right", "tgFontColor", "brand-2e", "tgFontFamily", "t4", "tgFontSize", "m", "tgFontWeight", "m", 3, "tgMargin", 4, "ngIf"], ["class", "link link--unstyled text-flow text-flow--hyperlink", "tgFontColor", "brand-2e", "tgFontFamily", "t4", "tgFontSize", "m", "tgFontWeight", "m", 3, "tgMargin", "click", 4, "ngIf"], ["tgFontColor", "brand-2e", "tgFontFamily", "t4", "tgFontSize", "m", "tgFontWeight", "m", 1, "text-block__right", 3, "tgMargin"], ["tgFontColor", "brand-2e", "tgFontFamily", "t4", "tgFontSize", "m", "tgFontWeight", "m", 1, "link", "link--unstyled", "text-flow", "text-flow--hyperlink", 3, "tgMargin", "click"]], template: function SummaryHeaderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
            i0.ɵɵtext(3);
            i0.ɵɵpipe(4, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, SummaryHeaderComponent_div_5_Template, 3, 5, "div", 3)(6, SummaryHeaderComponent_div_6_Template, 2, 3, "div", 4);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(4, 3, ctx.title), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.linkText && ctx.noLinkText);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.linkText);
        } }, dependencies: [i1.NgIf, i2.MarginDirective, i2.FontSizeDirective, i2.FontFamilyDirective, i2.FontWeightDirective, i2.FontColorDirective, i3.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SummaryHeaderComponent, [{
        type: Component,
        args: [{ selector: 'tg-summary-header', template: "<div class=\"summary-content--row flex-direction--column\">\n  <div class=\"display--flex justify-content--between mb--xxs width--full\">\n    <div class=\"text-block__left text-font-family--t4 text-weight--g text--m\">\n      {{ title | translate }}\n    </div>\n    <div\n      *ngIf=\"!linkText && noLinkText\"\n      [tgMargin]=\"{ position: 'l', size: 's' }\"\n      class=\"text-block__right\"\n      tgFontColor=\"brand-2e\"\n      tgFontFamily=\"t4\"\n      tgFontSize=\"m\"\n      tgFontWeight=\"m\">\n      {{ noLinkText | translate }}\n    </div>\n\n    <div\n      (click)=\"linkClicked.emit()\"\n      *ngIf=\"linkText\"\n      [tgMargin]=\"{ position: 'l', size: 's' }\"\n      class=\"link link--unstyled text-flow text-flow--hyperlink\"\n      tgFontColor=\"brand-2e\"\n      tgFontFamily=\"t4\"\n      tgFontSize=\"m\"\n      tgFontWeight=\"m\">\n      {{ linkText }}\n    </div>\n  </div>\n</div>\n" }]
    }], null, { title: [{
            type: Input
        }], icon: [{
            type: Input
        }], linkText: [{
            type: Input
        }], noLinkText: [{
            type: Input
        }], linkClicked: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SummaryHeaderComponent, { className: "SummaryHeaderComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyeS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9zdW1tYXJ5L3N1bW1hcnktaGVhZGVyL3N1bW1hcnktaGVhZGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvc3VtbWFyeS9zdW1tYXJ5LWhlYWRlci9zdW1tYXJ5LWhlYWRlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0lDS25FLDhCQU9tQjtJQUNqQixZQUNGOztJQUFBLGlCQUFNOzs7SUFQSixxREFBeUM7SUFNekMsY0FDRjtJQURFLHdFQUNGOzs7O0lBRUEsOEJBUW1CO0lBUGpCLGdLQUFTLGVBQUEseUJBQWtCLENBQUEsSUFBQztJQVE1QixZQUNGO0lBQUEsaUJBQU07OztJQVBKLHFEQUF5QztJQU16QyxjQUNGO0lBREUsZ0RBQ0Y7O0FEcEJKLE1BQU0sT0FBTyxzQkFBc0I7SUFDeEIsS0FBSyxDQUFTO0lBQ2QsSUFBSSxDQUFTO0lBQ2IsUUFBUSxDQUFTO0lBQ2pCLFVBQVUsQ0FBUztJQUNsQixXQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztnRkFMaEMsc0JBQXNCOzZEQUF0QixzQkFBc0I7WUNObkMsOEJBQXlELGFBQUEsYUFBQTtZQUduRCxZQUNGOztZQUFBLGlCQUFNO1lBQ04sdUVBU00sMERBQUE7WUFhUixpQkFBTSxFQUFBOztZQXhCRixlQUNGO1lBREUsZ0VBQ0Y7WUFFRyxlQUE2QjtZQUE3QixzREFBNkI7WUFZN0IsY0FBYztZQUFkLG1DQUFjOzs7aUZEWlIsc0JBQXNCO2NBSmxDLFNBQVM7MkJBQ0UsbUJBQW1CO2dCQUlwQixLQUFLO2tCQUFiLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNJLFdBQVc7a0JBQXBCLE1BQU07O2tGQUxJLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RnLXN1bW1hcnktaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1bW1hcnktaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU3VtbWFyeUhlYWRlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgQElucHV0KCkgbGlua1RleHQ6IHN0cmluZztcbiAgQElucHV0KCkgbm9MaW5rVGV4dDogc3RyaW5nO1xuICBAT3V0cHV0KCkgbGlua0NsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG59XG4iLCI8ZGl2IGNsYXNzPVwic3VtbWFyeS1jb250ZW50LS1yb3cgZmxleC1kaXJlY3Rpb24tLWNvbHVtblwiPlxuICA8ZGl2IGNsYXNzPVwiZGlzcGxheS0tZmxleCBqdXN0aWZ5LWNvbnRlbnQtLWJldHdlZW4gbWItLXh4cyB3aWR0aC0tZnVsbFwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWJsb2NrX19sZWZ0IHRleHQtZm9udC1mYW1pbHktLXQ0IHRleHQtd2VpZ2h0LS1nIHRleHQtLW1cIj5cbiAgICAgIHt7IHRpdGxlIHwgdHJhbnNsYXRlIH19XG4gICAgPC9kaXY+XG4gICAgPGRpdlxuICAgICAgKm5nSWY9XCIhbGlua1RleHQgJiYgbm9MaW5rVGV4dFwiXG4gICAgICBbdGdNYXJnaW5dPVwieyBwb3NpdGlvbjogJ2wnLCBzaXplOiAncycgfVwiXG4gICAgICBjbGFzcz1cInRleHQtYmxvY2tfX3JpZ2h0XCJcbiAgICAgIHRnRm9udENvbG9yPVwiYnJhbmQtMmVcIlxuICAgICAgdGdGb250RmFtaWx5PVwidDRcIlxuICAgICAgdGdGb250U2l6ZT1cIm1cIlxuICAgICAgdGdGb250V2VpZ2h0PVwibVwiPlxuICAgICAge3sgbm9MaW5rVGV4dCB8IHRyYW5zbGF0ZSB9fVxuICAgIDwvZGl2PlxuXG4gICAgPGRpdlxuICAgICAgKGNsaWNrKT1cImxpbmtDbGlja2VkLmVtaXQoKVwiXG4gICAgICAqbmdJZj1cImxpbmtUZXh0XCJcbiAgICAgIFt0Z01hcmdpbl09XCJ7IHBvc2l0aW9uOiAnbCcsIHNpemU6ICdzJyB9XCJcbiAgICAgIGNsYXNzPVwibGluayBsaW5rLS11bnN0eWxlZCB0ZXh0LWZsb3cgdGV4dC1mbG93LS1oeXBlcmxpbmtcIlxuICAgICAgdGdGb250Q29sb3I9XCJicmFuZC0yZVwiXG4gICAgICB0Z0ZvbnRGYW1pbHk9XCJ0NFwiXG4gICAgICB0Z0ZvbnRTaXplPVwibVwiXG4gICAgICB0Z0ZvbnRXZWlnaHQ9XCJtXCI+XG4gICAgICB7eyBsaW5rVGV4dCB9fVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19