import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule, Injectable } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i3 from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import * as i2 from '@telenet/ng-lib-form';
import { MarginPosition, MarginSize, TextFlowType, FontSize, FontWeight, LabelUtil, TgFormsModule, PricePipe } from '@telenet/ng-lib-form';

const _c0$1 = () => ({ position: "l", size: "s" });
function SummaryHeaderComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("tgMargin", i0.ɵɵpureFunction0(4, _c0$1));
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
    i0.ɵɵproperty("tgMargin", i0.ɵɵpureFunction0(2, _c0$1));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.linkText, " ");
} }
class SummaryHeaderComponent {
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

const SummaryContentRowParentLevel1 = {
    margin: [
        {
            position: MarginPosition.top,
            size: MarginSize.large,
        },
    ],
};
const SummaryContentRowLevel1 = {
    textFlow: TextFlowType.h4,
};
const SummaryContentPromoRowLevel1 = {
    textFlow: TextFlowType.legal,
};
const SummaryContentRowLevel2 = {
    fontSize: FontSize.m,
    fontWeight: FontWeight.xxl,
    margin: {
        position: MarginPosition.left,
        size: MarginSize.medium,
    },
    textFlow: TextFlowType.body,
};
const SummaryContentPromoRowLevel2 = {
    margin: {
        position: MarginPosition.left,
        size: MarginSize.medium,
    },
    textFlow: TextFlowType.legal,
};
const SummaryContentRowLevel3 = {
    fontSize: FontSize.s,
    margin: {
        position: MarginPosition.left,
        size: MarginSize.xLarge,
    },
    textFlow: TextFlowType.body,
};
const SummaryContentPromoRowLevel3 = {
    margin: {
        position: MarginPosition.left,
        size: MarginSize.xLarge,
    },
    textFlow: TextFlowType.legal,
};
const StrikeTroughSummaryContentRow = {
    fontSize: FontSize.xxs,
    margin: {
        position: MarginPosition.right,
        size: MarginSize.xxSmall,
    },
};
const SummaryContentMonthlyLabel = {
    fontSize: FontSize.s,
    margin: {
        position: MarginPosition.left,
        size: MarginSize.xLarge,
    },
    textFlow: TextFlowType.body,
};
const SummaryContentMonthlyPrice = {
    textFlow: TextFlowType.h4,
};

var OverviewPriceType;
(function (OverviewPriceType) {
    OverviewPriceType[OverviewPriceType["MONTHLY"] = 0] = "MONTHLY";
    OverviewPriceType[OverviewPriceType["ONE_TIME"] = 1] = "ONE_TIME";
})(OverviewPriceType || (OverviewPriceType = {}));

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
class SummaryContentRowComponent {
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

class LayoutLibModule {
    static ɵfac = function LayoutLibModule_Factory(t) { return new (t || LayoutLibModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: LayoutLibModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, TranslateModule, TgFormsModule] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayoutLibModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, TranslateModule, TgFormsModule, PricePipe],
                declarations: [SummaryHeaderComponent, SummaryContentRowComponent],
                exports: [SummaryHeaderComponent, SummaryContentRowComponent],
                providers: [],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LayoutLibModule, { declarations: [SummaryHeaderComponent, SummaryContentRowComponent], imports: [CommonModule, TranslateModule, TgFormsModule, PricePipe], exports: [SummaryHeaderComponent, SummaryContentRowComponent] }); })();

class RegexConstants {
    static BASE_SIM_CARD = /^\d{13}$/;
    static BASE_SALES_ORDER = /^\d{1,16}$/;
    static FOREIGN_EID_NUMBER = /^[\d]{9}$/;
    static PHONE_NUMBER = /^[0-9/.+-]{8,15}$/;
    static FIXED_PHONE_NUMBER = /^[0-9]{8,9}$/;
    static ADDRESS_NUMBER = /^[A-Za-z0-9]{0,6}$/;
    static TEXT_FIELD_GENERAL = /^([a-zA-Z0-9\s-']+)$/;
    static TEXT_FIELD_ONLY_ALPHABETS = /^([a-zA-Z\s]+)$/;
    static NATIONAL_PHONE_NUMBER = /^((0|0032|\+32)\d{8})$/;
    static NATIONAL_MOBILE_NUMBER = /^((0|0032|32|\+32)4\d{8})$/;
    static INTERNATIONAL_PHONE_NUMBER = /^((00|\+)(?!32)\d{7,15})$/;
    static BELGIAN_EID_NUMBER = /^[a-zA-Z0-9]{3}-[\d]{7}-[\d]{2}$/;
    static FOREIGN_EID_NUMBER_REGEX = /^[a-zA-Z0-9.-]{1,20}$/;
    static NATIONAL_REGISTRY_NUMBER = /^[\d]{2}.[\d]{2}.[\d]{2}-[\d]{3}.[\d]{2}$$/;
    static INTERNATIONAL_NUMBER = /^(\+|00|0)(?:[0-9] ?){6,14}[0-9]$/;
    static BASE_AND_FIXED_NUMBER = /^(((\+32)\d{8})|((00)\d{8})|((0)\d{8}))$/;
    static COMPANY = /^([a-zA-Z0-9àâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ\s.-’']+)$/;
    static MULTI_LINGUAL = /^([a-zA-Z0-9àâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇÆæ\s-]+)$/;
    static TELENET_PHONE_NUMBER = /^(((0|0032|\+32)4\d{8})|((00|\+)(?!32)\d{7,12}))$/;
    static TELENET_MOBILE_NUMBER = /^((|0|0032|32|\+32)4\d{8})$/;
    static INTERNATIONAL_AND_FIXED_NUMBER = /^(((00)\d{8,13})|((0)\d{8,9})|((0)\d{8}))$/;
    static EMAIL = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,25})$/i;
    static BASE_PHONE_NUMBER = /^(((0|0032|\+32|032|32)4\d{8})|((00|\+)(?!32)4\d{8})|(4\d{8}))$/;
    static FORMATTED_BASE_PHONE_NUMBER = /^((([0-9]{4})[ ][0-9]{2})(([ ]?[0-9]){2})(([ ]?[0-9]){2}))$/;
    static BASE_EMAIL = /^[_a-z0-9!#$%&'*+-/=?^_`{|}~-]+(\.[_a-z0-9!#$%&'*+-/=?^_`{|}~-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,25})$/i;
    static DELIVERY_ORDER_PHONE_NUMBER = /^(((0032|032|\+32|32)\d{8})|((0032|032|\+32|32)4\d{8})|((\+)(?!32)\d{7,13})|((0|00)(?!32)([1-9])\d{7})|((0|00)4\d{8})|(4\d{7,8})|(([1-9])\d{7}))$/;
    static ZERO_PREFIX_CHECK_REGEX = /(^[1-9][0-9]{7})|(^[1-9][0-9]{8})$/;
    static DARWIN_EMAIL = /^[-A-Za-z0-9~!#$%^&*_=+}|/{'`?][-A-Za-z0-9~!#$%^&*_=+.}|/{'`?]*[-A-Za-z0-9~!#$%^&*_=+}|/{'`?]@(([-A-Za-z0-9]+[.]?[-A-Za-z0-9]+\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|local|museum|name|net|org|pro|travel|mobi|global|[a-z][a-z]))|(\[([0-9]{1,3}\.){3}[0-9]{1,3}]))$/i;
    static NETWORK_NAME = /([\^`,"'])/;
    static SPECIAL_CHAR_REGEX = /(?=.*[\x21-\x2F\x3A-\x40\x5B-\x60\x7B-\x7E])/;
    static LOWER_CASE_REGEX = /(?=.*[a-z])/;
    static UPPER_CASE_REGEX = /(?=.*[A-Z])/;
    static NUMBER_REGEX = /(?=.*[0-9])/;
    static NO_START_END_SPACE_REGEX = /^\s|\s$/;
    static NO_START_SPACE_REGEX = /^\s/;
    static MAC_ADDRESS = /^[0-9a-f]{1,2}([.:-])[0-9a-f]{1,2}(?:\1[0-9a-f]{1,2}){4}$/i;
    static NO_NONE_WORD_REGEX = /\b(none)\b/g;
    static NUMBER_ONLY_REGEX = '^[0-9]*$';
    static PRICE = /^\d+(?:[.,]\d{2})?$/;
    static INTERNATIONAL_IBAN = '^([A-Z]{2}[ ]?[0-9]{2})(?=(?:[ -]?[A-Z0-9]){9,30}$)((?:[ -]?[A-Z0-9]{3,5}){2,7})([ -]?[A-Z0-9]{1,3})?$';
    static NO_START_END_SPACE = /^\S[\w\d\s\x21-\x2F\x3A-\x40\x5B-\x60\x7B-\x7E]*\S$/;
    static NUMBER_RANGE_REGEX = /^(\d+\s?-\s?\d+)$/;
    static SIM_CARD_REGEX = /^(\d{13}|\d{19})$/;
    static HEXADECIMAL = '^[a-fA-F0-9]*$';
    static ALPHA_NUMERIC_REGEX = /(?=.*[a-zA-Z0-9])/;
}

class ConstraintsService {
    isValidationError(fieldName, formGroup, errorType) {
        let isValid = false;
        const control = formGroup.get(fieldName);
        if (control && control.errors) {
            isValid = (control.touched || control.dirty) && control.errors[errorType];
        }
        return isValid;
    }
    isValidationErrorWhenPristine(fieldName, formGroup, errorType) {
        const control = formGroup.get(fieldName);
        return control && control.errors ? control.errors[errorType] : false;
    }
    isValidAddressNumber(val) {
        return RegexConstants.ADDRESS_NUMBER.test(val);
    }
    isValidNationalMobileNumber(value) {
        return RegexConstants.NATIONAL_MOBILE_NUMBER.test(value);
    }
    isValidInternationalNumber(number) {
        const value = number.replace(/[-/\\,\s.]/g, '');
        return RegexConstants.INTERNATIONAL_NUMBER.test(value);
    }
    getFormattedNRN(nrn) {
        nrn = this.removeSpecialCharacters(nrn);
        const nrnLength = nrn && nrn.length;
        if (nrnLength === 11) {
            return (nrn.slice(0, 2) +
                '.' +
                nrn.slice(2, 4) +
                '.' +
                nrn.slice(4, 6) +
                '-' +
                nrn.slice(6, 9) +
                '.' +
                nrn.slice(9, nrnLength));
        }
        return nrn;
    }
    removeSpecialCharacters(val) {
        return val ? val.replace(/[^0-9a-z]/gi, '') : '';
    }
    static ɵfac = function ConstraintsService_Factory(t) { return new (t || ConstraintsService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ConstraintsService, factory: ConstraintsService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConstraintsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

class PhoneNumberTransformService {
    constraintsService;
    constructor(constraintsService) {
        this.constraintsService = constraintsService;
    }
    transform(phoneNumber) {
        if (RegexConstants.NATIONAL_PHONE_NUMBER.test(phoneNumber)) {
            return this.filterNationalPhoneNumber(phoneNumber);
        }
        if (RegexConstants.NATIONAL_MOBILE_NUMBER.test(phoneNumber)) {
            return this.filterNationalMobileNumber(phoneNumber);
        }
        if (RegexConstants.BASE_PHONE_NUMBER.test(phoneNumber)) {
            return this.filterBasePhoneNumber(phoneNumber);
        }
        if (RegexConstants.INTERNATIONAL_PHONE_NUMBER.test(phoneNumber)) {
            return this.filterInternationalNumber(phoneNumber);
        }
        return phoneNumber;
    }
    doNormaliseMsisdn(phoneNumber) {
        let transFormedNumber = this.transform(phoneNumber);
        transFormedNumber = transFormedNumber.indexOf('0') !== 0 ? '0' + transFormedNumber : transFormedNumber;
        return transFormedNumber && transFormedNumber.replace(/ /g, '');
    }
    autoFormatPhoneNumber(msisdn) {
        const formattedPhoneNumber = this.doNormaliseMsisdn(msisdn);
        if (!msisdn || !formattedPhoneNumber) {
            return msisdn;
        }
        else {
            if (this.constraintsService.isValidNationalMobileNumber(formattedPhoneNumber)) {
                return 0 + formattedPhoneNumber.substring(1);
            }
            else if (this.constraintsService.isValidInternationalNumber(msisdn)) {
                return msisdn;
            }
            return formattedPhoneNumber;
        }
    }
    filterNationalPhoneNumber(phoneNumber) {
        const numberLength = phoneNumber.length;
        let numberStart = phoneNumber.slice(0, numberLength - 6);
        let zoneCode = '0';
        if (this.contains(numberStart, '0032')) {
            numberStart = numberStart.slice(4, numberStart.length);
        }
        if (this.contains(numberStart, '+32')) {
            numberStart = numberStart.slice(3, numberStart.length);
        }
        if (numberStart.length === 3) {
            numberStart = numberStart.slice(1, numberStart.length);
        }
        if (numberStart[0] === '2' || numberStart[0] === '3' || numberStart[0] === '4' || numberStart[0] === '9') {
            zoneCode += numberStart[0] + ' ';
            numberStart = numberStart.slice(1, numberStart.length);
        }
        else {
            zoneCode += numberStart + ' ';
            numberStart = '';
        }
        return (zoneCode +
            numberStart +
            phoneNumber.slice(numberLength - 6, numberLength - 4) +
            ' ' +
            phoneNumber.slice(numberLength - 4, numberLength - 2) +
            ' ' +
            phoneNumber.slice(numberLength - 2, numberLength));
    }
    filterNationalMobileNumber(phoneNumber) {
        const numberLength = phoneNumber.length;
        let numberStart = phoneNumber.slice(0, numberLength - 6);
        if (numberStart.indexOf('0032') === 0) {
            numberStart = '0' + numberStart.slice(4, numberStart.length);
        }
        if (numberStart.indexOf('+32') === 0) {
            numberStart = '0' + numberStart.slice(3, numberStart.length);
        }
        if (numberStart.indexOf('32') === 0) {
            numberStart = '0' + numberStart.slice(2, numberStart.length);
        }
        return (numberStart +
            ' ' +
            phoneNumber.slice(numberLength - 6, numberLength - 4) +
            ' ' +
            phoneNumber.slice(numberLength - 4, numberLength - 2) +
            ' ' +
            phoneNumber.slice(numberLength - 2, numberLength));
    }
    filterBasePhoneNumber(phoneNumber) {
        const numberLength = phoneNumber.length;
        let numberStart = phoneNumber.slice(0, numberLength - 6);
        if (this.contains(numberStart, '0032')) {
            numberStart = '0' + numberStart.slice(4, numberStart.length);
        }
        if (this.contains(numberStart, '032')) {
            numberStart = '0' + numberStart.slice(3, numberStart.length);
        }
        if (this.contains(numberStart, '+32')) {
            numberStart = '0' + numberStart.slice(3, numberStart.length);
        }
        if (this.contains(numberStart, '32')) {
            numberStart = '0' + numberStart.slice(2, numberStart.length);
        }
        if (this.contains(numberStart, '00')) {
            numberStart = '0' + numberStart.slice(2, numberStart.length);
        }
        return (numberStart +
            ' ' +
            phoneNumber.slice(numberLength - 6, numberLength - 4) +
            ' ' +
            phoneNumber.slice(numberLength - 4, numberLength - 2) +
            ' ' +
            phoneNumber.slice(numberLength - 2, numberLength));
    }
    filterInternationalNumber(phoneNumber) {
        const numberStart = phoneNumber.slice(0, 2);
        if (this.contains(numberStart, '00')) {
            return '+' + phoneNumber.slice(2, phoneNumber.length);
        }
        return phoneNumber;
    }
    contains(master, test) {
        return master.indexOf(test) > -1;
    }
    static ɵfac = function PhoneNumberTransformService_Factory(t) { return new (t || PhoneNumberTransformService)(i0.ɵɵinject(ConstraintsService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PhoneNumberTransformService, factory: PhoneNumberTransformService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PhoneNumberTransformService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: ConstraintsService }], null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { ConstraintsService, LayoutLibModule, OverviewPriceType, PhoneNumberTransformService, StrikeTroughSummaryContentRow, SummaryContentMonthlyLabel, SummaryContentMonthlyPrice, SummaryContentPromoRowLevel1, SummaryContentPromoRowLevel2, SummaryContentPromoRowLevel3, SummaryContentRowComponent, SummaryContentRowLevel1, SummaryContentRowLevel2, SummaryContentRowLevel3, SummaryContentRowParentLevel1, SummaryHeaderComponent };
//# sourceMappingURL=telenet-ng-lib-layout.mjs.map
