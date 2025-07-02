import { Component, Input } from '@angular/core';
import { LanguageEnum } from '@telenet/ng-lib-page';
import * as i0 from "@angular/core";
import * as i1 from "@telenet/ng-lib-page";
import * as i2 from "@angular/common";
import * as i3 from "../pipes/price.pipe";
import * as i4 from "../pipes/euro-sign.pipe";
function InstallTypePriceComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "euroSign");
    i0.ɵɵpipe(3, "price");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵattribute("data-tid", "strike-through");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, i0.ɵɵpipeBind1(3, 4, ctx_r0.strikeThroughPrice)), " ");
} }
function InstallTypePriceComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵtext(1, "\u20AC");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵattribute("data-tid", "nl");
} }
function InstallTypePriceComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵtext(1, "\u20AC");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵattribute("data-tid", "fr");
} }
export class InstallTypePriceComponent {
    languageService;
    installTypePrice;
    integer;
    decimal;
    strikeThroughPrice;
    isFrench;
    constructor(languageService) {
        this.languageService = languageService;
    }
    ngOnInit() {
        this.splitPriceIntoIntegerAndDecimal();
        this.strikeThroughPrice = this.installTypePrice.originalPrice || '';
        this.isFrench = this.languageService.getLanguage() === LanguageEnum.FR;
    }
    splitPriceIntoIntegerAndDecimal() {
        const priceArray = this.installTypePrice.price.split('.');
        this.integer = priceArray[0];
        this.decimal = priceArray[1];
    }
    static ɵfac = function InstallTypePriceComponent_Factory(t) { return new (t || InstallTypePriceComponent)(i0.ɵɵdirectiveInject(i1.LanguageService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InstallTypePriceComponent, selectors: [["app-install-type-price"]], inputs: { installTypePrice: "installTypePrice" }, decls: 11, vars: 7, consts: [[1, "promo-highlight", "display--flex", "flex-direction--column", "align-items--center--md", "align-items--baseline", "flex-wrap--wrap"], [1, "display--flex", "align-items--start", "align-items--center--md", "flex-direction--column"], ["class", "promo-highlight__second-row text-decoration--line-through align-items--baseline font--caption space-nowrap mx--xxxs mb--xxxs", 4, "ngIf"], [1, "display--flex", "flex-direction--row", "flex-direction--column--md", "align-items--center"], [1, "promo-highlight__third-row", "display--flex", "justify-content--center", "space-nowrap"], ["class", "font--body-regular-bold", 4, "ngIf"], [1, "text-flow", "text-flow--h2"], [1, "font--body-regular-bold"], [1, "promo-highlight__second-row", "text-decoration--line-through", "align-items--baseline", "font--caption", "space-nowrap", "mx--xxxs", "mb--xxxs"]], template: function InstallTypePriceComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵtemplate(2, InstallTypePriceComponent_div_2_Template, 4, 6, "div", 2);
            i0.ɵɵelementStart(3, "div", 3)(4, "div", 4);
            i0.ɵɵtemplate(5, InstallTypePriceComponent_span_5_Template, 2, 1, "span", 5);
            i0.ɵɵelementStart(6, "span", 6);
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "span", 7);
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(10, InstallTypePriceComponent_span_10_Template, 2, 1, "span", 5);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.strikeThroughPrice);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", !ctx.isFrench);
            i0.ɵɵadvance();
            i0.ɵɵattribute("data-tid", "integer");
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.integer);
            i0.ɵɵadvance();
            i0.ɵɵattribute("data-tid", "decimal");
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(",", ctx.decimal, "");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isFrench);
        } }, dependencies: [i2.NgIf, i3.PricePipe, i4.EuroSignPipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InstallTypePriceComponent, [{
        type: Component,
        args: [{ selector: 'app-install-type-price', template: "<div\n  class=\"promo-highlight display--flex flex-direction--column align-items--center--md align-items--baseline flex-wrap--wrap\">\n  <div class=\"display--flex align-items--start align-items--center--md flex-direction--column\">\n    <div\n      *ngIf=\"strikeThroughPrice\"\n      [attr.data-tid]=\"'strike-through'\"\n      class=\"promo-highlight__second-row text-decoration--line-through align-items--baseline font--caption space-nowrap mx--xxxs mb--xxxs\">\n      {{ strikeThroughPrice | price | euroSign }}\n    </div>\n    <div class=\"display--flex flex-direction--row flex-direction--column--md align-items--center\">\n      <div class=\"promo-highlight__third-row display--flex justify-content--center space-nowrap\">\n        <span *ngIf=\"!isFrench\" [attr.data-tid]=\"'nl'\" class=\"font--body-regular-bold\">\u20AC</span>\n        <span class=\"text-flow text-flow--h2\" [attr.data-tid]=\"'integer'\">{{ integer }}</span>\n        <span class=\"font--body-regular-bold\" [attr.data-tid]=\"'decimal'\">,{{ decimal }}</span>\n        <span *ngIf=\"isFrench\" class=\"font--body-regular-bold\" [attr.data-tid]=\"'fr'\">\u20AC</span>\n      </div>\n    </div>\n  </div>\n</div>\n" }]
    }], () => [{ type: i1.LanguageService }], { installTypePrice: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InstallTypePriceComponent, { className: "InstallTypePriceComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFsbC10eXBlLXByaWNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2luc3RhbGwtdHlwZS1wcmljZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9pbnN0YWxsLXR5cGUtcHJpY2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBbUIsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7OztJQ0VqRSw4QkFHdUk7SUFDckksWUFDRjs7O0lBQUEsaUJBQU07OztJQUhKLDRDQUFrQztJQUVsQyxjQUNGO0lBREUsc0dBQ0Y7OztJQUdJLCtCQUErRTtJQUFBLHNCQUFDO0lBQUEsaUJBQU87O0lBQS9ELGdDQUFzQjs7O0lBRzlDLCtCQUE4RTtJQUFBLHNCQUFDO0lBQUEsaUJBQU87O0lBQS9CLGdDQUFzQjs7QUROckYsTUFBTSxPQUFPLHlCQUF5QjtJQVNQO0lBUnBCLGdCQUFnQixDQUF3QjtJQUVqRCxPQUFPLENBQVM7SUFDaEIsT0FBTyxDQUFTO0lBQ2hCLGtCQUFrQixDQUFTO0lBRTNCLFFBQVEsQ0FBVTtJQUVsQixZQUE2QixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFBRyxDQUFDO0lBRWpFLFFBQVE7UUFDTixJQUFJLENBQUMsK0JBQStCLEVBQUUsQ0FBQztRQUV2QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsSUFBSSxFQUFFLENBQUM7UUFDcEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxLQUFLLFlBQVksQ0FBQyxFQUFFLENBQUM7SUFDekUsQ0FBQztJQUVPLCtCQUErQjtRQUNyQyxNQUFNLFVBQVUsR0FBYSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO21GQXRCVSx5QkFBeUI7NkRBQXpCLHlCQUF5QjtZQ1J0Qyw4QkFDNkgsYUFBQTtZQUV6SCwwRUFLTTtZQUNOLDhCQUE4RixhQUFBO1lBRTFGLDRFQUF1RjtZQUN2RiwrQkFBa0U7WUFBQSxZQUFhO1lBQUEsaUJBQU87WUFDdEYsK0JBQWtFO1lBQUEsWUFBYztZQUFBLGlCQUFPO1lBQ3ZGLDhFQUFzRjtZQUN4RixpQkFBTSxFQUFBLEVBQUEsRUFBQTs7WUFYTCxlQUF3QjtZQUF4Qiw2Q0FBd0I7WUFPaEIsZUFBZTtZQUFmLG9DQUFlO1lBQ2dCLGNBQTJCO1lBQTNCLHFDQUEyQjtZQUFDLGNBQWE7WUFBYixpQ0FBYTtZQUN6QyxjQUEyQjtZQUEzQixxQ0FBMkI7WUFBQyxjQUFjO1lBQWQsMkNBQWM7WUFDekUsY0FBYztZQUFkLG1DQUFjOzs7aUZETmhCLHlCQUF5QjtjQUpyQyxTQUFTOzJCQUNFLHdCQUF3QjtnREFJekIsZ0JBQWdCO2tCQUF4QixLQUFLOztrRkFESyx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExhbmd1YWdlRW51bSwgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnQHRlbGVuZXQvbmctbGliLXBhZ2UnO1xuaW1wb3J0IHsgSW5zdGFsbFR5cGVQcmljZU1vZGVsIH0gZnJvbSAnLi4vbW9kZWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWluc3RhbGwtdHlwZS1wcmljZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnN0YWxsLXR5cGUtcHJpY2UuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBJbnN0YWxsVHlwZVByaWNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaW5zdGFsbFR5cGVQcmljZTogSW5zdGFsbFR5cGVQcmljZU1vZGVsO1xuXG4gIGludGVnZXI6IHN0cmluZztcbiAgZGVjaW1hbDogc3RyaW5nO1xuICBzdHJpa2VUaHJvdWdoUHJpY2U6IHN0cmluZztcblxuICBpc0ZyZW5jaDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc3BsaXRQcmljZUludG9JbnRlZ2VyQW5kRGVjaW1hbCgpO1xuXG4gICAgdGhpcy5zdHJpa2VUaHJvdWdoUHJpY2UgPSB0aGlzLmluc3RhbGxUeXBlUHJpY2Uub3JpZ2luYWxQcmljZSB8fCAnJztcbiAgICB0aGlzLmlzRnJlbmNoID0gdGhpcy5sYW5ndWFnZVNlcnZpY2UuZ2V0TGFuZ3VhZ2UoKSA9PT0gTGFuZ3VhZ2VFbnVtLkZSO1xuICB9XG5cbiAgcHJpdmF0ZSBzcGxpdFByaWNlSW50b0ludGVnZXJBbmREZWNpbWFsKCkge1xuICAgIGNvbnN0IHByaWNlQXJyYXk6IHN0cmluZ1tdID0gdGhpcy5pbnN0YWxsVHlwZVByaWNlLnByaWNlLnNwbGl0KCcuJyk7XG4gICAgdGhpcy5pbnRlZ2VyID0gcHJpY2VBcnJheVswXTtcbiAgICB0aGlzLmRlY2ltYWwgPSBwcmljZUFycmF5WzFdO1xuICB9XG59XG4iLCI8ZGl2XG4gIGNsYXNzPVwicHJvbW8taGlnaGxpZ2h0IGRpc3BsYXktLWZsZXggZmxleC1kaXJlY3Rpb24tLWNvbHVtbiBhbGlnbi1pdGVtcy0tY2VudGVyLS1tZCBhbGlnbi1pdGVtcy0tYmFzZWxpbmUgZmxleC13cmFwLS13cmFwXCI+XG4gIDxkaXYgY2xhc3M9XCJkaXNwbGF5LS1mbGV4IGFsaWduLWl0ZW1zLS1zdGFydCBhbGlnbi1pdGVtcy0tY2VudGVyLS1tZCBmbGV4LWRpcmVjdGlvbi0tY29sdW1uXCI+XG4gICAgPGRpdlxuICAgICAgKm5nSWY9XCJzdHJpa2VUaHJvdWdoUHJpY2VcIlxuICAgICAgW2F0dHIuZGF0YS10aWRdPVwiJ3N0cmlrZS10aHJvdWdoJ1wiXG4gICAgICBjbGFzcz1cInByb21vLWhpZ2hsaWdodF9fc2Vjb25kLXJvdyB0ZXh0LWRlY29yYXRpb24tLWxpbmUtdGhyb3VnaCBhbGlnbi1pdGVtcy0tYmFzZWxpbmUgZm9udC0tY2FwdGlvbiBzcGFjZS1ub3dyYXAgbXgtLXh4eHMgbWItLXh4eHNcIj5cbiAgICAgIHt7IHN0cmlrZVRocm91Z2hQcmljZSB8IHByaWNlIHwgZXVyb1NpZ24gfX1cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZGlzcGxheS0tZmxleCBmbGV4LWRpcmVjdGlvbi0tcm93IGZsZXgtZGlyZWN0aW9uLS1jb2x1bW4tLW1kIGFsaWduLWl0ZW1zLS1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9tby1oaWdobGlnaHRfX3RoaXJkLXJvdyBkaXNwbGF5LS1mbGV4IGp1c3RpZnktY29udGVudC0tY2VudGVyIHNwYWNlLW5vd3JhcFwiPlxuICAgICAgICA8c3BhbiAqbmdJZj1cIiFpc0ZyZW5jaFwiIFthdHRyLmRhdGEtdGlkXT1cIidubCdcIiBjbGFzcz1cImZvbnQtLWJvZHktcmVndWxhci1ib2xkXCI+4oKsPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtZmxvdyB0ZXh0LWZsb3ctLWgyXCIgW2F0dHIuZGF0YS10aWRdPVwiJ2ludGVnZXInXCI+e3sgaW50ZWdlciB9fTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmb250LS1ib2R5LXJlZ3VsYXItYm9sZFwiIFthdHRyLmRhdGEtdGlkXT1cIidkZWNpbWFsJ1wiPix7eyBkZWNpbWFsIH19PC9zcGFuPlxuICAgICAgICA8c3BhbiAqbmdJZj1cImlzRnJlbmNoXCIgY2xhc3M9XCJmb250LS1ib2R5LXJlZ3VsYXItYm9sZFwiIFthdHRyLmRhdGEtdGlkXT1cIidmcidcIj7igqw8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==