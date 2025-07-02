import { Component, Input } from '@angular/core';
import { StrikeTroughSummaryContentRow, SummaryContentPromoRowLevel1, SummaryContentPromoRowLevel2, SummaryContentPromoRowLevel3, SummaryContentRowLevel1, SummaryContentRowLevel2, SummaryContentRowLevel3, SummaryContentRowParentLevel1, } from './summary-content-row.interface';
import { OverviewPriceType } from '../../model/product-overview-data.model';
import { LabelUtil, TextFlowType } from '@telenet/ng-lib-form';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@telenet/ng-lib-form";
import * as i3 from "@ngx-translate/core";
const _c0 = a0 => ({ price: a0 });
function SummaryContentRowComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 4);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵpipe(4, "price");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("tgFontSize", ctx_r0.strikeTroughConfiguration.fontSize)("tgFontWeight", ctx_r0.strikeTroughConfiguration.fontWeight)("tgMargin", ctx_r0.strikeTroughConfiguration.margin)("tgTextFlow", ctx_r0.strikeTroughConfiguration.textFlow);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(3, 5, ctx_r0.getLabel(ctx_r0.level, ctx_r0.strikeThroughPrice.type), i0.ɵɵpureFunction1(10, _c0, i0.ɵɵpipeBind1(4, 8, ctx_r0.strikeThroughPrice.value))), " ");
} }
const _c1 = () => ({ position: "t", size: "m" });
function SummaryContentRowComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 5);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵpipe(4, "price");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("tgFontSize", (ctx_r1.priceConfiguration == null ? null : ctx_r1.priceConfiguration.fontSize) || "m")("tgFontWeight", (ctx_r1.priceConfiguration == null ? null : ctx_r1.priceConfiguration.fontWeight) || "r")("tgMargin", (ctx_r1.priceConfiguration == null ? null : ctx_r1.priceConfiguration.margin) || i0.ɵɵpureFunction0(11, _c1))("tgTextFlow", (ctx_r1.priceConfiguration == null ? null : ctx_r1.priceConfiguration.textFlow) || "body");
    i0.ɵɵadvance();
    i0.ɵɵproperty("tgTextFlow", ctx_r1.getTextFlow());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(3, 6, ctx_r1.getLabel(ctx_r1.level, ctx_r1.price.type), i0.ɵɵpureFunction1(12, _c0, i0.ɵɵpipeBind1(4, 9, ctx_r1.price.value))), " ");
} }
const _c2 = ["*"];
const CONNECT_FIVE_MESSAGE_GROUP = 'c5-checkout';
export class SummaryContentRowComponent {
    level;
    price;
    strikeThroughPrice;
    firstItem;
    promo;
    isFollowedByPromoLabel;
    labelConfiguration;
    priceConfiguration;
    priceType = OverviewPriceType;
    strikeTroughConfiguration = StrikeTroughSummaryContentRow;
    rowMargin;
    ngOnInit() {
        if (!this.labelConfiguration) {
            this.labelConfiguration = this.getConfigurationType();
        }
        if (!this.priceConfiguration) {
            this.priceConfiguration = this.getConfigurationType();
        }
        if (this.level === 1 && !this.firstItem) {
            this.rowMargin = SummaryContentRowParentLevel1;
        }
    }
    getConfigurationType() {
        return this.promo ? this.getPromoRowConfigurationType() : this.getRowConfigurationType();
    }
    getPromoRowConfigurationType() {
        switch (this.level) {
            case 1:
                return SummaryContentPromoRowLevel1;
            case 2:
                return SummaryContentPromoRowLevel2;
            case 3:
                return SummaryContentPromoRowLevel3;
            default:
                return SummaryContentPromoRowLevel1;
        }
    }
    getRowConfigurationType() {
        switch (this.level) {
            case 1:
                return SummaryContentRowLevel1;
            case 2:
                return SummaryContentRowLevel2;
            case 3:
                return SummaryContentRowLevel3;
            default:
                return SummaryContentRowLevel1;
        }
    }
    getTextFlow() {
        if (this.level === 1) {
            return TextFlowType.h4;
        }
        return TextFlowType.body;
    }
    getLabel(level, priceType) {
        let key = '';
        if (level === 1) {
            key = priceType === OverviewPriceType.ONE_TIME ? 'one-time-price' : 'price-per-month';
        }
        else {
            key = priceType === OverviewPriceType.ONE_TIME ? 'detail-one-time-price' : 'detail-price-per-month';
        }
        return LabelUtil.getLabelKeyWithTypeLabel([CONNECT_FIVE_MESSAGE_GROUP, 'overview', key].join('.'));
    }
    static ɵfac = function SummaryContentRowComponent_Factory(t) { return new (t || SummaryContentRowComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SummaryContentRowComponent, selectors: [["tg-summary-content-row"]], inputs: { level: "level", price: "price", strikeThroughPrice: "strikeThroughPrice", firstItem: "firstItem", promo: "promo", isFollowedByPromoLabel: "isFollowedByPromoLabel", labelConfiguration: "labelConfiguration", priceConfiguration: "priceConfiguration" }, ngContentSelectors: _c2, decls: 6, vars: 9, consts: [[1, "display--flex", "justify-content--between", "width--full", 3, "tgMargin", "ngClass"], [1, "text-block__left", 3, "tgFontSize", "tgFontWeight", "tgMargin", "tgTextFlow"], [1, "center-align"], ["class", "text-block__left", 3, "tgFontSize", "tgFontWeight", "tgMargin", "tgTextFlow", 4, "ngIf"], ["tgTextFlow", "body", 1, "text-decoration--line-through", "text-block__right", "space-nowrap"], [1, "text-block__right", "space-nowrap", 3, "tgTextFlow"]], template: function SummaryContentRowComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵprojection(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 2);
            i0.ɵɵtemplate(4, SummaryContentRowComponent_div_4_Template, 5, 12, "div", 3)(5, SummaryContentRowComponent_div_5_Template, 5, 14, "div", 3);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("tgMargin", (ctx.rowMargin == null ? null : ctx.rowMargin.margin) || i0.ɵɵpureFunction0(8, _c1))("ngClass", ctx.isFollowedByPromoLabel ? "mb--xxxs" : "mb--xxs");
            i0.ɵɵadvance();
            i0.ɵɵproperty("tgFontSize", ctx.labelConfiguration == null ? null : ctx.labelConfiguration.fontSize)("tgFontWeight", ctx.labelConfiguration == null ? null : ctx.labelConfiguration.fontWeight)("tgMargin", ctx.labelConfiguration == null ? null : ctx.labelConfiguration.margin)("tgTextFlow", ctx.labelConfiguration == null ? null : ctx.labelConfiguration.textFlow);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.strikeThroughPrice);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.price);
        } }, dependencies: [i1.NgClass, i1.NgIf, i2.MarginDirective, i2.TextFlowDirective, i2.FontSizeDirective, i2.FontWeightDirective, i3.TranslatePipe, i2.PricePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SummaryContentRowComponent, [{
        type: Component,
        args: [{ selector: 'tg-summary-content-row', template: "<div\n  [tgMargin]=\"rowMargin?.margin || { position: 't', size: 'm' }\"\n  class=\"display--flex justify-content--between width--full\"\n  [ngClass]=\"isFollowedByPromoLabel ? 'mb--xxxs' : 'mb--xxs'\">\n  <div\n    [tgFontSize]=\"labelConfiguration?.fontSize!\"\n    [tgFontWeight]=\"labelConfiguration?.fontWeight!\"\n    [tgMargin]=\"labelConfiguration?.margin!\"\n    [tgTextFlow]=\"labelConfiguration?.textFlow!\"\n    class=\"text-block__left\">\n    <ng-content></ng-content>\n  </div>\n  <div class=\"center-align\">\n    <div\n      *ngIf=\"strikeThroughPrice\"\n      [tgFontSize]=\"strikeTroughConfiguration.fontSize!\"\n      [tgFontWeight]=\"strikeTroughConfiguration.fontWeight!\"\n      [tgMargin]=\"strikeTroughConfiguration.margin!\"\n      [tgTextFlow]=\"strikeTroughConfiguration.textFlow!\"\n      class=\"text-block__left\">\n      <div class=\"text-decoration--line-through text-block__right space-nowrap\" tgTextFlow=\"body\">\n        {{ getLabel(level, strikeThroughPrice.type) | translate: { price: strikeThroughPrice.value | price } }}\n      </div>\n    </div>\n    <div\n      *ngIf=\"price\"\n      [tgFontSize]=\"priceConfiguration?.fontSize || 'm'\"\n      [tgFontWeight]=\"priceConfiguration?.fontWeight || 'r'\"\n      [tgMargin]=\"priceConfiguration?.margin || { position: 't', size: 'm' }\"\n      [tgTextFlow]=\"priceConfiguration?.textFlow || 'body'\"\n      class=\"text-block__left\">\n      <div [tgTextFlow]=\"getTextFlow()\" class=\"text-block__right space-nowrap\">\n        {{ getLabel(level, price.type) | translate: { price: price.value | price } }}\n      </div>\n    </div>\n  </div>\n</div>\n" }]
    }], null, { level: [{
            type: Input
        }], price: [{
            type: Input
        }], strikeThroughPrice: [{
            type: Input
        }], firstItem: [{
            type: Input
        }], promo: [{
            type: Input
        }], isFollowedByPromoLabel: [{
            type: Input
        }], labelConfiguration: [{
            type: Input
        }], priceConfiguration: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SummaryContentRowComponent, { className: "SummaryContentRowComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyeS1jb250ZW50LXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL3N1bW1hcnkvc3VtbWFyeS1jb250ZW50LXJvdy9zdW1tYXJ5LWNvbnRlbnQtcm93LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvc3VtbWFyeS9zdW1tYXJ5LWNvbnRlbnQtcm93L3N1bW1hcnktY29udGVudC1yb3cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUNMLDZCQUE2QixFQUM3Qiw0QkFBNEIsRUFDNUIsNEJBQTRCLEVBQzVCLDRCQUE0QixFQUU1Qix1QkFBdUIsRUFDdkIsdUJBQXVCLEVBQ3ZCLHVCQUF1QixFQUN2Qiw2QkFBNkIsR0FDOUIsTUFBTSxpQ0FBaUMsQ0FBQztBQUN6QyxPQUFPLEVBQWlCLGlCQUFpQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDM0YsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7OztJQ0EzRCw4QkFNMkIsYUFBQTtJQUV2QixZQUNGOzs7SUFBQSxpQkFBTSxFQUFBOzs7SUFQTixzRUFBa0QsNkRBQUEscURBQUEseURBQUE7SUFNaEQsZUFDRjtJQURFLHdNQUNGOzs7O0lBRUYsOEJBTTJCLGFBQUE7SUFFdkIsWUFDRjs7O0lBQUEsaUJBQU0sRUFBQTs7O0lBUE4sbUhBQWtELDBHQUFBLDBIQUFBLHlHQUFBO0lBSzdDLGNBQTRCO0lBQTVCLGlEQUE0QjtJQUMvQixjQUNGO0lBREUsOEtBQ0Y7OztBRGxCTixNQUFNLDBCQUEwQixHQUFHLGFBQWEsQ0FBQztBQU1qRCxNQUFNLE9BQU8sMEJBQTBCO0lBQzVCLEtBQUssQ0FBUztJQUNkLEtBQUssQ0FBZ0I7SUFDckIsa0JB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QztZQUE1QyxvR0FBNEMsMkZBQUEsbUZBQUEsdUZBQUE7WUFTekMsZUFBd0I7WUFBeEIsNkNBQXdCO1lBV3hCLGNBQVc7WUFBWCxnQ0FBVzs7O2lGREpMLDBCQUEwQjtjQUp0QyxTQUFTOzJCQUNFLHdCQUF3QjtnQkFJekIsS0FBSztrQkFBYixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csa0JBQWtCO2tCQUExQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLHNCQUFzQjtrQkFBOUIsS0FBSztZQUVHLGtCQUFrQjtrQkFBMUIsS0FBSztZQUNHLGtCQUFrQjtrQkFBMUIsS0FBSzs7a0ZBVEssMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBTdHJpa2VUcm91Z2hTdW1tYXJ5Q29udGVudFJvdyxcbiAgU3VtbWFyeUNvbnRlbnRQcm9tb1Jvd0xldmVsMSxcbiAgU3VtbWFyeUNvbnRlbnRQcm9tb1Jvd0xldmVsMixcbiAgU3VtbWFyeUNvbnRlbnRQcm9tb1Jvd0xldmVsMyxcbiAgU3VtbWFyeUNvbnRlbnRSb3dDb25maWd1cmF0aW9uLFxuICBTdW1tYXJ5Q29udGVudFJvd0xldmVsMSxcbiAgU3VtbWFyeUNvbnRlbnRSb3dMZXZlbDIsXG4gIFN1bW1hcnlDb250ZW50Um93TGV2ZWwzLFxuICBTdW1tYXJ5Q29udGVudFJvd1BhcmVudExldmVsMSxcbn0gZnJvbSAnLi9zdW1tYXJ5LWNvbnRlbnQtcm93LmludGVyZmFjZSc7XG5pbXBvcnQgeyBPdmVydmlld1ByaWNlLCBPdmVydmlld1ByaWNlVHlwZSB9IGZyb20gJy4uLy4uL21vZGVsL3Byb2R1Y3Qtb3ZlcnZpZXctZGF0YS5tb2RlbCc7XG5pbXBvcnQgeyBMYWJlbFV0aWwsIFRleHRGbG93VHlwZSB9IGZyb20gJ0B0ZWxlbmV0L25nLWxpYi1mb3JtJztcblxuY29uc3QgQ09OTkVDVF9GSVZFX01FU1NBR0VfR1JPVVAgPSAnYzUtY2hlY2tvdXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0Zy1zdW1tYXJ5LWNvbnRlbnQtcm93JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1bW1hcnktY29udGVudC1yb3cuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTdW1tYXJ5Q29udGVudFJvd0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGxldmVsOiBudW1iZXI7XG4gIEBJbnB1dCgpIHByaWNlOiBPdmVydmlld1ByaWNlO1xuICBASW5wdXQoKSBzdHJpa2VUaHJvdWdoUHJpY2U6IE92ZXJ2aWV3UHJpY2U7XG4gIEBJbnB1dCgpIGZpcnN0SXRlbTogYm9vbGVhbjtcbiAgQElucHV0KCkgcHJvbW86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGlzRm9sbG93ZWRCeVByb21vTGFiZWw6IGJvb2xlYW47XG5cbiAgQElucHV0KCkgbGFiZWxDb25maWd1cmF0aW9uPzogU3VtbWFyeUNvbnRlbnRSb3dDb25maWd1cmF0aW9uO1xuICBASW5wdXQoKSBwcmljZUNvbmZpZ3VyYXRpb24/OiBTdW1tYXJ5Q29udGVudFJvd0NvbmZpZ3VyYXRpb247XG4gIHByaWNlVHlwZSA9IE92ZXJ2aWV3UHJpY2VUeXBlO1xuICBzdHJpa2VUcm91Z2hDb25maWd1cmF0aW9uID0gU3RyaWtlVHJvdWdoU3VtbWFyeUNvbnRlbnRSb3c7XG4gIHJvd01hcmdpbj86IFN1bW1hcnlDb250ZW50Um93Q29uZmlndXJhdGlvbjtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubGFiZWxDb25maWd1cmF0aW9uKSB7XG4gICAgICB0aGlzLmxhYmVsQ29uZmlndXJhdGlvbiA9IHRoaXMuZ2V0Q29uZmlndXJhdGlvblR5cGUoKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnByaWNlQ29uZmlndXJhdGlvbikge1xuICAgICAgdGhpcy5wcmljZUNvbmZpZ3VyYXRpb24gPSB0aGlzLmdldENvbmZpZ3VyYXRpb25UeXBlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmxldmVsID09PSAxICYmICF0aGlzLmZpcnN0SXRlbSkge1xuICAgICAgdGhpcy5yb3dNYXJnaW4gPSBTdW1tYXJ5Q29udGVudFJvd1BhcmVudExldmVsMTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldENvbmZpZ3VyYXRpb25UeXBlKCk6IFN1bW1hcnlDb250ZW50Um93Q29uZmlndXJhdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMucHJvbW8gPyB0aGlzLmdldFByb21vUm93Q29uZmlndXJhdGlvblR5cGUoKSA6IHRoaXMuZ2V0Um93Q29uZmlndXJhdGlvblR5cGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UHJvbW9Sb3dDb25maWd1cmF0aW9uVHlwZSgpOiBTdW1tYXJ5Q29udGVudFJvd0NvbmZpZ3VyYXRpb24ge1xuICAgIHN3aXRjaCAodGhpcy5sZXZlbCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gU3VtbWFyeUNvbnRlbnRQcm9tb1Jvd0xldmVsMTtcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIFN1bW1hcnlDb250ZW50UHJvbW9Sb3dMZXZlbDI7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBTdW1tYXJ5Q29udGVudFByb21vUm93TGV2ZWwzO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFN1bW1hcnlDb250ZW50UHJvbW9Sb3dMZXZlbDE7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRSb3dDb25maWd1cmF0aW9uVHlwZSgpOiBTdW1tYXJ5Q29udGVudFJvd0NvbmZpZ3VyYXRpb24ge1xuICAgIHN3aXRjaCAodGhpcy5sZXZlbCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gU3VtbWFyeUNvbnRlbnRSb3dMZXZlbDE7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBTdW1tYXJ5Q29udGVudFJvd0xldmVsMjtcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIFN1bW1hcnlDb250ZW50Um93TGV2ZWwzO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFN1bW1hcnlDb250ZW50Um93TGV2ZWwxO1xuICAgIH1cbiAgfVxuXG4gIGdldFRleHRGbG93KCk6IFRleHRGbG93VHlwZSB7XG4gICAgaWYgKHRoaXMubGV2ZWwgPT09IDEpIHtcbiAgICAgIHJldHVybiBUZXh0Rmxvd1R5cGUuaDQ7XG4gICAgfVxuICAgIHJldHVybiBUZXh0Rmxvd1R5cGUuYm9keTtcbiAgfVxuXG4gIGdldExhYmVsKGxldmVsOiBudW1iZXIsIHByaWNlVHlwZT86IE92ZXJ2aWV3UHJpY2VUeXBlKTogc3RyaW5nIHtcbiAgICBsZXQga2V5ID0gJyc7XG4gICAgaWYgKGxldmVsID09PSAxKSB7XG4gICAgICBrZXkgPSBwcmljZVR5cGUgPT09IE92ZXJ2aWV3UHJpY2VUeXBlLk9ORV9USU1FID8gJ29uZS10aW1lLXByaWNlJyA6ICdwcmljZS1wZXItbW9udGgnO1xuICAgIH0gZWxzZSB7XG4gICAgICBrZXkgPSBwcmljZVR5cGUgPT09IE92ZXJ2aWV3UHJpY2VUeXBlLk9ORV9USU1FID8gJ2RldGFpbC1vbmUtdGltZS1wcmljZScgOiAnZGV0YWlsLXByaWNlLXBlci1tb250aCc7XG4gICAgfVxuXG4gICAgcmV0dXJuIExhYmVsVXRpbC5nZXRMYWJlbEtleVdpdGhUeXBlTGFiZWwoW0NPTk5FQ1RfRklWRV9NRVNTQUdFX0dST1VQLCAnb3ZlcnZpZXcnLCBrZXldLmpvaW4oJy4nKSk7XG4gIH1cbn1cbiIsIjxkaXZcbiAgW3RnTWFyZ2luXT1cInJvd01hcmdpbj8ubWFyZ2luIHx8IHsgcG9zaXRpb246ICd0Jywgc2l6ZTogJ20nIH1cIlxuICBjbGFzcz1cImRpc3BsYXktLWZsZXgganVzdGlmeS1jb250ZW50LS1iZXR3ZWVuIHdpZHRoLS1mdWxsXCJcbiAgW25nQ2xhc3NdPVwiaXNGb2xsb3dlZEJ5UHJvbW9MYWJlbCA/ICdtYi0teHh4cycgOiAnbWItLXh4cydcIj5cbiAgPGRpdlxuICAgIFt0Z0ZvbnRTaXplXT1cImxhYmVsQ29uZmlndXJhdGlvbj8uZm9udFNpemUhXCJcbiAgICBbdGdGb250V2VpZ2h0XT1cImxhYmVsQ29uZmlndXJhdGlvbj8uZm9udFdlaWdodCFcIlxuICAgIFt0Z01hcmdpbl09XCJsYWJlbENvbmZpZ3VyYXRpb24/Lm1hcmdpbiFcIlxuICAgIFt0Z1RleHRGbG93XT1cImxhYmVsQ29uZmlndXJhdGlvbj8udGV4dEZsb3chXCJcbiAgICBjbGFzcz1cInRleHQtYmxvY2tfX2xlZnRcIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY2VudGVyLWFsaWduXCI+XG4gICAgPGRpdlxuICAgICAgKm5nSWY9XCJzdHJpa2VUaHJvdWdoUHJpY2VcIlxuICAgICAgW3RnRm9udFNpemVdPVwic3RyaWtlVHJvdWdoQ29uZmlndXJhdGlvbi5mb250U2l6ZSFcIlxuICAgICAgW3RnRm9udFdlaWdodF09XCJzdHJpa2VUcm91Z2hDb25maWd1cmF0aW9uLmZvbnRXZWlnaHQhXCJcbiAgICAgIFt0Z01hcmdpbl09XCJzdHJpa2VUcm91Z2hDb25maWd1cmF0aW9uLm1hcmdpbiFcIlxuICAgICAgW3RnVGV4dEZsb3ddPVwic3RyaWtlVHJvdWdoQ29uZmlndXJhdGlvbi50ZXh0RmxvdyFcIlxuICAgICAgY2xhc3M9XCJ0ZXh0LWJsb2NrX19sZWZ0XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dC1kZWNvcmF0aW9uLS1saW5lLXRocm91Z2ggdGV4dC1ibG9ja19fcmlnaHQgc3BhY2Utbm93cmFwXCIgdGdUZXh0Rmxvdz1cImJvZHlcIj5cbiAgICAgICAge3sgZ2V0TGFiZWwobGV2ZWwsIHN0cmlrZVRocm91Z2hQcmljZS50eXBlKSB8IHRyYW5zbGF0ZTogeyBwcmljZTogc3RyaWtlVGhyb3VnaFByaWNlLnZhbHVlIHwgcHJpY2UgfSB9fVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdlxuICAgICAgKm5nSWY9XCJwcmljZVwiXG4gICAgICBbdGdGb250U2l6ZV09XCJwcmljZUNvbmZpZ3VyYXRpb24/LmZvbnRTaXplIHx8ICdtJ1wiXG4gICAgICBbdGdGb250V2VpZ2h0XT1cInByaWNlQ29uZmlndXJhdGlvbj8uZm9udFdlaWdodCB8fCAncidcIlxuICAgICAgW3RnTWFyZ2luXT1cInByaWNlQ29uZmlndXJhdGlvbj8ubWFyZ2luIHx8IHsgcG9zaXRpb246ICd0Jywgc2l6ZTogJ20nIH1cIlxuICAgICAgW3RnVGV4dEZsb3ddPVwicHJpY2VDb25maWd1cmF0aW9uPy50ZXh0RmxvdyB8fCAnYm9keSdcIlxuICAgICAgY2xhc3M9XCJ0ZXh0LWJsb2NrX19sZWZ0XCI+XG4gICAgICA8ZGl2IFt0Z1RleHRGbG93XT1cImdldFRleHRGbG93KClcIiBjbGFzcz1cInRleHQtYmxvY2tfX3JpZ2h0IHNwYWNlLW5vd3JhcFwiPlxuICAgICAgICB7eyBnZXRMYWJlbChsZXZlbCwgcHJpY2UudHlwZSkgfCB0cmFuc2xhdGU6IHsgcHJpY2U6IHByaWNlLnZhbHVlIHwgcHJpY2UgfSB9fVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=