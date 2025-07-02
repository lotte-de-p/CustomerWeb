var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';
import { defineCustomElement as defineWinkAccordion } from '@telenet/wink-core/components/wink-accordion.js';
import { defineCustomElement as defineWinkAnimation } from '@telenet/wink-core/components/wink-animation.js';
import { defineCustomElement as defineWinkAvatar } from '@telenet/wink-core/components/wink-avatar.js';
import { defineCustomElement as defineWinkBadge } from '@telenet/wink-core/components/wink-badge.js';
import { defineCustomElement as defineWinkButton } from '@telenet/wink-core/components/wink-button.js';
import { defineCustomElement as defineWinkCheckBox } from '@telenet/wink-core/components/wink-check-box.js';
import { defineCustomElement as defineWinkCheckBoxGroup } from '@telenet/wink-core/components/wink-check-box-group.js';
import { defineCustomElement as defineWinkColumnCount } from '@telenet/wink-core/components/wink-column-count.js';
import { defineCustomElement as defineWinkCustomerOrientation } from '@telenet/wink-core/components/wink-customer-orientation.js';
import { defineCustomElement as defineWinkDropdownMenu } from '@telenet/wink-core/components/wink-dropdown-menu.js';
import { defineCustomElement as defineWinkFlyout } from '@telenet/wink-core/components/wink-flyout.js';
import { defineCustomElement as defineWinkFormLabel } from '@telenet/wink-core/components/wink-form-label.js';
import { defineCustomElement as defineWinkGlobalHeader } from '@telenet/wink-core/components/wink-global-header.js';
import { defineCustomElement as defineWinkIcon } from '@telenet/wink-core/components/wink-icon.js';
import { defineCustomElement as defineWinkImg } from '@telenet/wink-core/components/wink-img.js';
import { defineCustomElement as defineWinkIndicator } from '@telenet/wink-core/components/wink-indicator.js';
import { defineCustomElement as defineWinkInput } from '@telenet/wink-core/components/wink-input.js';
import { defineCustomElement as defineWinkIntentBar } from '@telenet/wink-core/components/wink-intent-bar.js';
import { defineCustomElement as defineWinkLink } from '@telenet/wink-core/components/wink-link.js';
import { defineCustomElement as defineWinkLogo } from '@telenet/wink-core/components/wink-logo.js';
import { defineCustomElement as defineWinkMainNavigation } from '@telenet/wink-core/components/wink-main-navigation.js';
import { defineCustomElement as defineWinkNavigationList } from '@telenet/wink-core/components/wink-navigation-list.js';
import { defineCustomElement as defineWinkNavigationListItem } from '@telenet/wink-core/components/wink-navigation-list-item.js';
import { defineCustomElement as defineWinkNotification } from '@telenet/wink-core/components/wink-notification.js';
import { defineCustomElement as defineWinkParagraph } from '@telenet/wink-core/components/wink-paragraph.js';
import { defineCustomElement as defineWinkPricing } from '@telenet/wink-core/components/wink-pricing.js';
import { defineCustomElement as defineWinkRadioButton } from '@telenet/wink-core/components/wink-radio-button.js';
import { defineCustomElement as defineWinkRadioGroup } from '@telenet/wink-core/components/wink-radio-group.js';
import { defineCustomElement as defineWinkRangeSlider } from '@telenet/wink-core/components/wink-range-slider.js';
import { defineCustomElement as defineWinkSelect } from '@telenet/wink-core/components/wink-select.js';
import { defineCustomElement as defineWinkSheet } from '@telenet/wink-core/components/wink-sheet.js';
import { defineCustomElement as defineWinkSpacer } from '@telenet/wink-core/components/wink-spacer.js';
import { defineCustomElement as defineWinkStack } from '@telenet/wink-core/components/wink-stack.js';
import { defineCustomElement as defineWinkTabs } from '@telenet/wink-core/components/wink-tabs.js';
import { defineCustomElement as defineWinkTextarea } from '@telenet/wink-core/components/wink-textarea.js';
import { defineCustomElement as defineWinkTitle } from '@telenet/wink-core/components/wink-title.js';
import { defineCustomElement as defineWinkToast } from '@telenet/wink-core/components/wink-toast.js';
import { defineCustomElement as defineWinkToaster } from '@telenet/wink-core/components/wink-toaster.js';
import { defineCustomElement as defineWinkToggleSwitch } from '@telenet/wink-core/components/wink-toggle-switch.js';
import { defineCustomElement as defineWinkValidationMessage } from '@telenet/wink-core/components/wink-validation-message.js';
import * as i0 from "@angular/core";
let WinkAccordion = class WinkAccordion {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkAccordion, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: WinkAccordion, isStandalone: true, selector: "wink-accordion", inputs: { heading: "heading", icon: "icon", isExpanded: "isExpanded" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
WinkAccordion = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineWinkAccordion,
        inputs: ['heading', 'icon', 'isExpanded']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkAccordion);
export { WinkAccordion };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkAccordion, decorators: [{
            type: Component,
            args: [{
                    selector: 'wink-accordion',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['heading', 'icon', 'isExpanded'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let WinkAnimation = class WinkAnimation {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkAnimation, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: WinkAnimation, isStandalone: true, selector: "wink-animation", inputs: { autoplay: "autoplay", clickToPlay: "clickToPlay", controls: "controls", count: "count", src: "src" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
WinkAnimation = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineWinkAnimation,
        inputs: ['autoplay', 'clickToPlay', 'controls', 'count', 'src'],
        methods: ['toggleAnimation']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkAnimation);
export { WinkAnimation };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkAnimation, decorators: [{
            type: Component,
            args: [{
                    selector: 'wink-animation',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['autoplay', 'clickToPlay', 'controls', 'count', 'src'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let WinkAvatar = class WinkAvatar {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkAvatar, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: WinkAvatar, isStandalone: true, selector: "wink-avatar", inputs: { size: "size", src: "src" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
WinkAvatar = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineWinkAvatar,
        inputs: ['size', 'src']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkAvatar);
export { WinkAvatar };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkAvatar, decorators: [{
            type: Component,
            args: [{
                    selector: 'wink-avatar',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['size', 'src'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let WinkBadge = class WinkBadge {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkBadge, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: WinkBadge, isStandalone: true, selector: "wink-badge", inputs: { background: "background", size: "size", text: "text" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
WinkBadge = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineWinkBadge,
        inputs: ['background', 'size', 'text']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkBadge);
export { WinkBadge };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkBadge, decorators: [{
            type: Component,
            args: [{
                    selector: 'wink-badge',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['background', 'size', 'text'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let WinkButton = class WinkButton {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkButton, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: WinkButton, isStandalone: true, selector: "wink-button", inputs: { appearance: "appearance", element: "element", href: "href", icon: "icon", iconButtonAriaLabel: "iconButtonAriaLabel", iconPosition: "iconPosition", loadingText: "loadingText", size: "size", status: "status", target: "target", text: "text", type: "type", width: "width" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
WinkButton = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineWinkButton,
        inputs: ['appearance', 'element', 'href', 'icon', 'iconButtonAriaLabel', 'iconPosition', 'loadingText', 'size', 'status', 'target', 'text', 'type', 'width']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkButton);
export { WinkButton };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkButton, decorators: [{
            type: Component,
            args: [{
                    selector: 'wink-button',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['appearance', 'element', 'href', 'icon', 'iconButtonAriaLabel', 'iconPosition', 'loadingText', 'size', 'status', 'target', 'text', 'type', 'width'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let WinkCheckBox = class WinkCheckBox {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkCheckBox, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: WinkCheckBox, isStandalone: true, selector: "wink-check-box", inputs: { checkboxId: "checkboxId", checked: "checked", disabled: "disabled", error: "error", helper: "helper", label: "label", name: "name" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
WinkCheckBox = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineWinkCheckBox,
        inputs: ['checkboxId', 'checked', 'disabled', 'error', 'helper', 'label', 'name']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkCheckBox);
export { WinkCheckBox };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkCheckBox, decorators: [{
            type: Component,
            args: [{
                    selector: 'wink-check-box',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['checkboxId', 'checked', 'disabled', 'error', 'helper', 'label', 'name'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let WinkCheckBoxGroup = class WinkCheckBoxGroup {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkCheckBoxGroup, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: WinkCheckBoxGroup, isStandalone: true, selector: "wink-check-box-group", inputs: { direction: "direction", error: "error", helper: "helper", isRequired: "isRequired", label: "label", optionalText: "optionalText" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
WinkCheckBoxGroup = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineWinkCheckBoxGroup,
        inputs: ['direction', 'error', 'helper', 'isRequired', 'label', 'optionalText'],
        methods: ['setValidation']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkCheckBoxGroup);
export { WinkCheckBoxGroup };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkCheckBoxGroup, decorators: [{
            type: Component,
            args: [{
                    selector: 'wink-check-box-group',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['direction', 'error', 'helper', 'isRequired', 'label', 'optionalText'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let WinkColumnCount = class WinkColumnCount {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkColumnCount, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: WinkColumnCount, isStandalone: true, selector: "wink-column-count", inputs: { colsCount: "colsCount" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
WinkColumnCount = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineWinkColumnCount,
        inputs: ['colsCount']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkColumnCount);
export { WinkColumnCount };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkColumnCount, decorators: [{
            type: Component,
            args: [{
                    selector: 'wink-column-count',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['colsCount'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let WinkCustomerOrientation = class WinkCustomerOrientation {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkCustomerOrientation, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: WinkCustomerOrientation, isStandalone: true, selector: "wink-customer-orientation", ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
WinkCustomerOrientation = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineWinkCustomerOrientation
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkCustomerOrientation);
export { WinkCustomerOrientation };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkCustomerOrientation, decorators: [{
            type: Component,
            args: [{
                    selector: 'wink-customer-orientation',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: [],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let WinkDropdownMenu = class WinkDropdownMenu {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkDropdownMenu, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: WinkDropdownMenu, isStandalone: true, selector: "wink-dropdown-menu", inputs: { dropdownTabIndex: "dropdownTabIndex", heading: "heading", isExpanded: "isExpanded", itemSelected: "itemSelected" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
WinkDropdownMenu = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineWinkDropdownMenu,
        inputs: ['dropdownTabIndex', 'heading', 'isExpanded', 'itemSelected']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkDropdownMenu);
export { WinkDropdownMenu };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkDropdownMenu, decorators: [{
            type: Component,
            args: [{
                    selector: 'wink-dropdown-menu',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['dropdownTabIndex', 'heading', 'isExpanded', 'itemSelected'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let WinkFlyout = class WinkFlyout {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['flyoutBackLinkClicked']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkFlyout, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: WinkFlyout, isStandalone: true, selector: "wink-flyout", inputs: { flyoutId: "flyoutId" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
WinkFlyout = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineWinkFlyout,
        inputs: ['flyoutId']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkFlyout);
export { WinkFlyout };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkFlyout, decorators: [{
            type: Component,
            args: [{
                    selector: 'wink-flyout',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['flyoutId'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let WinkFormLabel = class WinkFormLabel {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkFormLabel, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: WinkFormLabel, isStandalone: true, selector: "wink-form-label", inputs: { helper: "helper", helperId: "helperId", isDisabled: "isDisabled", label: "label", labelId: "labelId", optionalText: "optionalText", rendition: "rendition", showOptional: "showOptional" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
WinkFormLabel = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineWinkFormLabel,
        inputs: ['helper', 'helperId', 'isDisabled', 'label', 'labelId', 'optionalText', 'rendition', 'showOptional']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkFormLabel);
export { WinkFormLabel };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkFormLabel, decorators: [{
            type: Component,
            args: [{
                    selector: 'wink-form-label',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['helper', 'helperId', 'isDisabled', 'label', 'labelId', 'optionalText', 'rendition', 'showOptional'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let WinkGlobalHeader = class WinkGlobalHeader {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkGlobalHeader, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: WinkGlobalHeader, isStandalone: true, selector: "wink-global-header", ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
WinkGlobalHeader = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineWinkGlobalHeader
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkGlobalHeader);
export { WinkGlobalHeader };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkGlobalHeader, decorators: [{
            type: Component,
            args: [{
                    selector: 'wink-global-header',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: [],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let WinkIcon = class WinkIcon {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkIcon, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: WinkIcon, isStandalone: true, selector: "wink-icon", inputs: { appearance: "appearance", icon: "icon", size: "size" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
WinkIcon = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineWinkIcon,
        inputs: ['appearance', 'icon', 'size']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkIcon);
export { WinkIcon };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkIcon, decorators: [{
            type: Component,
            args: [{
                    selector: 'wink-icon',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['appearance', 'icon', 'size'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let WinkImg = class WinkImg {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkImg, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: WinkImg, isStandalone: true, selector: "wink-img", inputs: { alt: "alt", loading: "loading", srcDesktop: "srcDesktop", srcMobile: "srcMobile", srcTablet: "srcTablet" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
WinkImg = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineWinkImg,
        inputs: ['alt', 'loading', 'srcDesktop', 'srcMobile', 'srcTablet']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkImg);
export { WinkImg };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkImg, decorators: [{
            type: Component,
            args: [{
                    selector: 'wink-img',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['alt', 'loading', 'srcDesktop', 'srcMobile', 'srcTablet'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let WinkIndicator = class WinkIndicator {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkIndicator, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: WinkIndicator, isStandalone: true, selector: "wink-indicator", inputs: { direction: "direction", size: "size" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
WinkIndicator = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineWinkIndicator,
        inputs: ['direction', 'size']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkIndicator);
export { WinkIndicator };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkIndicator, decorators: [{
            type: Component,
            args: [{
                    selector: 'wink-indicator',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['direction', 'size'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let WinkInput = class WinkInput {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['valueChanged']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkInput, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: WinkInput, isStandalone: true, selector: "wink-input", inputs: { appearance: "appearance", autocomplete: "autocomplete", enterkeyhintOption: "enterkeyhintOption", error: "error", helper: "helper", iconLeft: "iconLeft", iconRight: "iconRight", inputId: "inputId", inputModeOption: "inputModeOption", isAutofocused: "isAutofocused", isDisabled: "isDisabled", isReadonly: "isReadonly", isRequired: "isRequired", label: "label", maxValue: "maxValue", minValue: "minValue", name: "name", optionalText: "optionalText", placeholder: "placeholder", postfixValue: "postfixValue", prefixValue: "prefixValue", size: "size", step: "step", type: "type", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
WinkInput = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineWinkInput,
        inputs: ['appearance', 'autocomplete', 'enterkeyhintOption', 'error', 'helper', 'iconLeft', 'iconRight', 'inputId', 'inputModeOption', 'isAutofocused', 'isDisabled', 'isReadonly', 'isRequired', 'label', 'maxValue', 'minValue', 'name', 'optionalText', 'placeholder', 'postfixValue', 'prefixValue', 'size', 'step', 'type', 'value'],
        methods: ['setValidation']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkInput);
export { WinkInput };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkInput, decorators: [{
            type: Component,
            args: [{
                    selector: 'wink-input',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['appearance', 'autocomplete', 'enterkeyhintOption', 'error', 'helper', 'iconLeft', 'iconRight', 'inputId', 'inputModeOption', 'isAutofocused', 'isDisabled', 'isReadonly', 'isRequired', 'label', 'maxValue', 'minValue', 'name', 'optionalText', 'placeholder', 'postfixValue', 'prefixValue', 'size', 'step', 'type', 'value'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let WinkIntentBar = class WinkIntentBar {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkIntentBar, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: WinkIntentBar, isStandalone: true, selector: "wink-intent-bar", ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
WinkIntentBar = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineWinkIntentBar
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkIntentBar);
export { WinkIntentBar };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkIntentBar, decorators: [{
            type: Component,
            args: [{
                    selector: 'wink-intent-bar',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: [],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let WinkLink = class WinkLink {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkLink, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: WinkLink, isStandalone: true, selector: "wink-link", inputs: { appearance: "appearance", href: "href", icon: "icon", iconAppearance: "iconAppearance", iconPosition: "iconPosition", isDisabled: "isDisabled", size: "size", target: "target" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
WinkLink = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineWinkLink,
        inputs: ['appearance', 'href', 'icon', 'iconAppearance', 'iconPosition', 'isDisabled', 'size', 'target']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkLink);
export { WinkLink };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkLink, decorators: [{
            type: Component,
            args: [{
                    selector: 'wink-link',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['appearance', 'href', 'icon', 'iconAppearance', 'iconPosition', 'isDisabled', 'size', 'target'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let WinkLogo = class WinkLogo {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkLogo, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: WinkLogo, isStandalone: true, selector: "wink-logo", inputs: { alt: "alt", appearance: "appearance", href: "href", target: "target" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
WinkLogo = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineWinkLogo,
        inputs: ['alt', 'appearance', 'href', 'target']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkLogo);
export { WinkLogo };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkLogo, decorators: [{
            type: Component,
            args: [{
                    selector: 'wink-logo',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['alt', 'appearance', 'href', 'target'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let WinkMainNavigation = class WinkMainNavigation {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['mainNavigationItemClicked']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkMainNavigation, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: WinkMainNavigation, isStandalone: true, selector: "wink-main-navigation", inputs: { menuItems: "menuItems" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
WinkMainNavigation = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineWinkMainNavigation,
        inputs: ['menuItems']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkMainNavigation);
export { WinkMainNavigation };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkMainNavigation, decorators: [{
            type: Component,
            args: [{
                    selector: 'wink-main-navigation',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['menuItems'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let WinkNavigationList = class WinkNavigationList {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkNavigationList, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: WinkNavigationList, isStandalone: true, selector: "wink-navigation-list", inputs: { hasBoldLinks: "hasBoldLinks", listTitle: "listTitle" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
WinkNavigationList = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineWinkNavigationList,
        inputs: ['hasBoldLinks', 'listTitle']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkNavigationList);
export { WinkNavigationList };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkNavigationList, decorators: [{
            type: Component,
            args: [{
                    selector: 'wink-navigation-list',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['hasBoldLinks', 'listTitle'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let WinkNavigationListItem = class WinkNavigationListItem {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkNavigationListItem, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: WinkNavigationListItem, isStandalone: true, selector: "wink-navigation-list-item", inputs: { href: "href", target: "target" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
WinkNavigationListItem = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineWinkNavigationListItem,
        inputs: ['href', 'target']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkNavigationListItem);
export { WinkNavigationListItem };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkNavigationListItem, decorators: [{
            type: Component,
            args: [{
                    selector: 'wink-navigation-list-item',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['href', 'target'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let WinkNotification = class WinkNotification {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkNotification, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: WinkNotification, isStandalone: true, selector: "wink-notification", inputs: { appearance: "appearance", hasCloseIcon: "hasCloseIcon" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
WinkNotification = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineWinkNotification,
        inputs: ['appearance', 'hasCloseIcon']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkNotification);
export { WinkNotification };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkNotification, decorators: [{
            type: Component,
            args: [{
                    selector: 'wink-notification',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['appearance', 'hasCloseIcon'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let WinkParagraph = class WinkParagraph {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkParagraph, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: WinkParagraph, isStandalone: true, selector: "wink-paragraph", inputs: { appearance: "appearance", size: "size" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
WinkParagraph = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineWinkParagraph,
        inputs: ['appearance', 'size']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkParagraph);
export { WinkParagraph };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkParagraph, decorators: [{
            type: Component,
            args: [{
                    selector: 'wink-paragraph',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['appearance', 'size'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let WinkPricing = class WinkPricing {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkPricing, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: WinkPricing, isStandalone: true, selector: "wink-pricing", inputs: { alignment: "alignment", annotation: "annotation", appearance: "appearance", duration: "duration", frequency: "frequency", price: "price", priceStrikethrough: "priceStrikethrough", startingFrom: "startingFrom" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
WinkPricing = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineWinkPricing,
        inputs: ['alignment', 'annotation', 'appearance', 'duration', 'frequency', 'price', 'priceStrikethrough', 'startingFrom']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkPricing);
export { WinkPricing };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkPricing, decorators: [{
            type: Component,
            args: [{
                    selector: 'wink-pricing',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['alignment', 'annotation', 'appearance', 'duration', 'frequency', 'price', 'priceStrikethrough', 'startingFrom'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let WinkRadioButton = class WinkRadioButton {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkRadioButton, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: WinkRadioButton, isStandalone: true, selector: "wink-radio-button", inputs: { checked: "checked", disabled: "disabled", error: "error", helper: "helper", label: "label", name: "name", radioButtonId: "radioButtonId" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
WinkRadioButton = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineWinkRadioButton,
        inputs: ['checked', 'disabled', 'error', 'helper', 'label', 'name', 'radioButtonId']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkRadioButton);
export { WinkRadioButton };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkRadioButton, decorators: [{
            type: Component,
            args: [{
                    selector: 'wink-radio-button',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['checked', 'disabled', 'error', 'helper', 'label', 'name', 'radioButtonId'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let WinkRadioGroup = class WinkRadioGroup {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkRadioGroup, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: WinkRadioGroup, isStandalone: true, selector: "wink-radio-group", inputs: { direction: "direction", error: "error", helper: "helper", isRequired: "isRequired", label: "label", optionalText: "optionalText" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
WinkRadioGroup = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineWinkRadioGroup,
        inputs: ['direction', 'error', 'helper', 'isRequired', 'label', 'optionalText'],
        methods: ['setValidation']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkRadioGroup);
export { WinkRadioGroup };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkRadioGroup, decorators: [{
            type: Component,
            args: [{
                    selector: 'wink-radio-group',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['direction', 'error', 'helper', 'isRequired', 'label', 'optionalText'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let WinkRangeSlider = class WinkRangeSlider {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkRangeSlider, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: WinkRangeSlider, isStandalone: true, selector: "wink-range-slider", inputs: { bottomValue: "bottomValue", errorMessage: "errorMessage", helper: "helper", label: "label", maxValue: "maxValue", minValue: "minValue", showInput: "showInput", showValues: "showValues", sliderId: "sliderId", sliderType: "sliderType", step: "step", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
WinkRangeSlider = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineWinkRangeSlider,
        inputs: ['bottomValue', 'errorMessage', 'helper', 'label', 'maxValue', 'minValue', 'showInput', 'showValues', 'sliderId', 'sliderType', 'step', 'value'],
        methods: ['showFromValue', 'showToValue', 'getDragValue']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkRangeSlider);
export { WinkRangeSlider };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkRangeSlider, decorators: [{
            type: Component,
            args: [{
                    selector: 'wink-range-slider',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['bottomValue', 'errorMessage', 'helper', 'label', 'maxValue', 'minValue', 'showInput', 'showValues', 'sliderId', 'sliderType', 'step', 'value'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let WinkSelect = class WinkSelect {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkSelect, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: WinkSelect, isStandalone: true, selector: "wink-select", inputs: { error: "error", helper: "helper", isDisabled: "isDisabled", isRequired: "isRequired", label: "label", placeholder: "placeholder", selectId: "selectId", selectName: "selectName", value: "value" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
WinkSelect = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineWinkSelect,
        inputs: ['error', 'helper', 'isDisabled', 'isRequired', 'label', 'placeholder', 'selectId', 'selectName', 'value']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkSelect);
export { WinkSelect };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkSelect, decorators: [{
            type: Component,
            args: [{
                    selector: 'wink-select',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['error', 'helper', 'isDisabled', 'isRequired', 'label', 'placeholder', 'selectId', 'selectName', 'value'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let WinkSheet = class WinkSheet {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkSheet, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: WinkSheet, isStandalone: true, selector: "wink-sheet", inputs: { dashboard: "dashboard", isVisible: "isVisible", multipage: "multipage" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
WinkSheet = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineWinkSheet,
        inputs: ['dashboard', 'isVisible', 'multipage'],
        methods: ['open', 'close', 'nextPage']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkSheet);
export { WinkSheet };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkSheet, decorators: [{
            type: Component,
            args: [{
                    selector: 'wink-sheet',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['dashboard', 'isVisible', 'multipage'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let WinkSpacer = class WinkSpacer {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkSpacer, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: WinkSpacer, isStandalone: true, selector: "wink-spacer", inputs: { size: "size" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
WinkSpacer = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineWinkSpacer,
        inputs: ['size']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkSpacer);
export { WinkSpacer };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkSpacer, decorators: [{
            type: Component,
            args: [{
                    selector: 'wink-spacer',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['size'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let WinkStack = class WinkStack {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkStack, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: WinkStack, isStandalone: true, selector: "wink-stack", inputs: { alignItems: "alignItems", col: "col", direction: "direction", gap: "gap", justifyContent: "justifyContent", wrap: "wrap" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
WinkStack = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineWinkStack,
        inputs: ['alignItems', 'col', 'direction', 'gap', 'justifyContent', 'wrap']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkStack);
export { WinkStack };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkStack, decorators: [{
            type: Component,
            args: [{
                    selector: 'wink-stack',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['alignItems', 'col', 'direction', 'gap', 'justifyContent', 'wrap'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let WinkTabs = class WinkTabs {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkTabs, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: WinkTabs, isStandalone: true, selector: "wink-tabs", inputs: { appearance: "appearance" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
WinkTabs = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineWinkTabs,
        inputs: ['appearance']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkTabs);
export { WinkTabs };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkTabs, decorators: [{
            type: Component,
            args: [{
                    selector: 'wink-tabs',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['appearance'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let WinkTextarea = class WinkTextarea {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkTextarea, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: WinkTextarea, isStandalone: true, selector: "wink-textarea", inputs: { autocomplete: "autocomplete", enterkeyhintOption: "enterkeyhintOption", error: "error", helper: "helper", isDisabled: "isDisabled", isRequired: "isRequired", label: "label", maxlength: "maxlength", minlength: "minlength", name: "name", placeholder: "placeholder", rows: "rows", textareaId: "textareaId" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
WinkTextarea = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineWinkTextarea,
        inputs: ['autocomplete', 'enterkeyhintOption', 'error', 'helper', 'isDisabled', 'isRequired', 'label', 'maxlength', 'minlength', 'name', 'placeholder', 'rows', 'textareaId']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkTextarea);
export { WinkTextarea };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkTextarea, decorators: [{
            type: Component,
            args: [{
                    selector: 'wink-textarea',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['autocomplete', 'enterkeyhintOption', 'error', 'helper', 'isDisabled', 'isRequired', 'label', 'maxlength', 'minlength', 'name', 'placeholder', 'rows', 'textareaId'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let WinkTitle = class WinkTitle {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkTitle, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: WinkTitle, isStandalone: true, selector: "wink-title", inputs: { htmlTag: "htmlTag", noSeo: "noSeo", spacingY: "spacingY", text: "text" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
WinkTitle = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineWinkTitle,
        inputs: ['htmlTag', 'noSeo', 'spacingY', 'text']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkTitle);
export { WinkTitle };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkTitle, decorators: [{
            type: Component,
            args: [{
                    selector: 'wink-title',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['htmlTag', 'noSeo', 'spacingY', 'text'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let WinkToast = class WinkToast {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkToast, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: WinkToast, isStandalone: true, selector: "wink-toast", inputs: { appearance: "appearance", currentTheme: "currentTheme", duration: "duration", href: "href", isOpen: "isOpen", linkText: "linkText", target: "target", text: "text", theme: "theme" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
WinkToast = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineWinkToast,
        inputs: ['appearance', 'currentTheme', 'duration', 'href', 'isOpen', 'linkText', 'target', 'text', 'theme']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkToast);
export { WinkToast };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkToast, decorators: [{
            type: Component,
            args: [{
                    selector: 'wink-toast',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['appearance', 'currentTheme', 'duration', 'href', 'isOpen', 'linkText', 'target', 'text', 'theme'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let WinkToaster = class WinkToaster {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkToaster, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: WinkToaster, isStandalone: true, selector: "wink-toaster", ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
WinkToaster = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineWinkToaster,
        methods: ['winkCreateToast']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkToaster);
export { WinkToaster };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkToaster, decorators: [{
            type: Component,
            args: [{
                    selector: 'wink-toaster',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: [],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let WinkToggleSwitch = class WinkToggleSwitch {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkToggleSwitch, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: WinkToggleSwitch, isStandalone: true, selector: "wink-toggle-switch", inputs: { alignment: "alignment", checked: "checked", disabled: "disabled", label: "label", toggleSwitchId: "toggleSwitchId", toggleSwitchName: "toggleSwitchName" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
WinkToggleSwitch = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineWinkToggleSwitch,
        inputs: ['alignment', 'checked', 'disabled', 'label', 'toggleSwitchId', 'toggleSwitchName']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkToggleSwitch);
export { WinkToggleSwitch };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkToggleSwitch, decorators: [{
            type: Component,
            args: [{
                    selector: 'wink-toggle-switch',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['alignment', 'checked', 'disabled', 'label', 'toggleSwitchId', 'toggleSwitchName'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
let WinkValidationMessage = class WinkValidationMessage {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkValidationMessage, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: WinkValidationMessage, isStandalone: true, selector: "wink-validation-message", inputs: { message: "message", type: "type" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
WinkValidationMessage = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineWinkValidationMessage,
        inputs: ['message', 'type']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkValidationMessage);
export { WinkValidationMessage };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: WinkValidationMessage, decorators: [{
            type: Component,
            args: [{
                    selector: 'wink-validation-message',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['message', 'type'],
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJveGllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9nZW5lcmF0ZWQvcHJveGllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsOENBQThDO0FBQzlDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFnQixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEgsT0FBTyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUl2RSxPQUFPLEVBQUUsbUJBQW1CLElBQUksbUJBQW1CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUM3RyxPQUFPLEVBQUUsbUJBQW1CLElBQUksbUJBQW1CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUM3RyxPQUFPLEVBQUUsbUJBQW1CLElBQUksZ0JBQWdCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN2RyxPQUFPLEVBQUUsbUJBQW1CLElBQUksZUFBZSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDckcsT0FBTyxFQUFFLG1CQUFtQixJQUFJLGdCQUFnQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDdkcsT0FBTyxFQUFFLG1CQUFtQixJQUFJLGtCQUFrQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDNUcsT0FBTyxFQUFFLG1CQUFtQixJQUFJLHVCQUF1QixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDdkgsT0FBTyxFQUFFLG1CQUFtQixJQUFJLHFCQUFxQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDbEgsT0FBTyxFQUFFLG1CQUFtQixJQUFJLDZCQUE2QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDbEksT0FBTyxFQUFFLG1CQUFtQixJQUFJLHNCQUFzQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDcEgsT0FBTyxFQUFFLG1CQUFtQixJQUFJLGdCQUFnQixFQUFF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UzttQkFBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsdUVBQXVFO29CQUN2RSxNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDO29CQUMzQixVQUFVLEVBQUUsSUFBSTtpQkFDakIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogYXV0by1nZW5lcmF0ZWQgYW5ndWxhciBkaXJlY3RpdmUgcHJveGllcyAqL1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFByb3h5Q21wLCBwcm94eU91dHB1dHMgfSBmcm9tICcuL2FuZ3VsYXItY29tcG9uZW50LWxpYi91dGlscyc7XG5cbmltcG9ydCB0eXBlIHsgQ29tcG9uZW50cyB9IGZyb20gJ0B0ZWxlbmV0L3dpbmstY29yZS9jb21wb25lbnRzJztcblxuaW1wb3J0IHsgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkZWZpbmVXaW5rQWNjb3JkaW9uIH0gZnJvbSAnQHRlbGVuZXQvd2luay1jb3JlL2NvbXBvbmVudHMvd2luay1hY2NvcmRpb24uanMnO1xuaW1wb3J0IHsgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkZWZpbmVXaW5rQW5pbWF0aW9uIH0gZnJvbSAnQHRlbGVuZXQvd2luay1jb3JlL2NvbXBvbmVudHMvd2luay1hbmltYXRpb24uanMnO1xuaW1wb3J0IHsgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkZWZpbmVXaW5rQXZhdGFyIH0gZnJvbSAnQHRlbGVuZXQvd2luay1jb3JlL2NvbXBvbmVudHMvd2luay1hdmF0YXIuanMnO1xuaW1wb3J0IHsgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkZWZpbmVXaW5rQmFkZ2UgfSBmcm9tICdAdGVsZW5ldC93aW5rLWNvcmUvY29tcG9uZW50cy93aW5rLWJhZGdlLmpzJztcbmltcG9ydCB7IGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZGVmaW5lV2lua0J1dHRvbiB9IGZyb20gJ0B0ZWxlbmV0L3dpbmstY29yZS9jb21wb25lbnRzL3dpbmstYnV0dG9uLmpzJztcbmltcG9ydCB7IGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZGVmaW5lV2lua0NoZWNrQm94IH0gZnJvbSAnQHRlbGVuZXQvd2luay1jb3JlL2NvbXBvbmVudHMvd2luay1jaGVjay1ib3guanMnO1xuaW1wb3J0IHsgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkZWZpbmVXaW5rQ2hlY2tCb3hHcm91cCB9IGZyb20gJ0B0ZWxlbmV0L3dpbmstY29yZS9jb21wb25lbnRzL3dpbmstY2hlY2stYm94LWdyb3VwLmpzJztcbmltcG9ydCB7IGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZGVmaW5lV2lua0NvbHVtbkNvdW50IH0gZnJvbSAnQHRlbGVuZXQvd2luay1jb3JlL2NvbXBvbmVudHMvd2luay1jb2x1bW4tY291bnQuanMnO1xuaW1wb3J0IHsgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkZWZpbmVXaW5rQ3VzdG9tZXJPcmllbnRhdGlvbiB9IGZyb20gJ0B0ZWxlbmV0L3dpbmstY29yZS9jb21wb25lbnRzL3dpbmstY3VzdG9tZXItb3JpZW50YXRpb24uanMnO1xuaW1wb3J0IHsgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkZWZpbmVXaW5rRHJvcGRvd25NZW51IH0gZnJvbSAnQHRlbGVuZXQvd2luay1jb3JlL2NvbXBvbmVudHMvd2luay1kcm9wZG93bi1tZW51LmpzJztcbmltcG9ydCB7IGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZGVmaW5lV2lua0ZseW91dCB9IGZyb20gJ0B0ZWxlbmV0L3dpbmstY29yZS9jb21wb25lbnRzL3dpbmstZmx5b3V0LmpzJztcbmltcG9ydCB7IGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZGVmaW5lV2lua0Zvcm1MYWJlbCB9IGZyb20gJ0B0ZWxlbmV0L3dpbmstY29yZS9jb21wb25lbnRzL3dpbmstZm9ybS1sYWJlbC5qcyc7XG5pbXBvcnQgeyBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGRlZmluZVdpbmtHbG9iYWxIZWFkZXIgfSBmcm9tICdAdGVsZW5ldC93aW5rLWNvcmUvY29tcG9uZW50cy93aW5rLWdsb2JhbC1oZWFkZXIuanMnO1xuaW1wb3J0IHsgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkZWZpbmVXaW5rSWNvbiB9IGZyb20gJ0B0ZWxlbmV0L3dpbmstY29yZS9jb21wb25lbnRzL3dpbmstaWNvbi5qcyc7XG5pbXBvcnQgeyBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGRlZmluZVdpbmtJbWcgfSBmcm9tICdAdGVsZW5ldC93aW5rLWNvcmUvY29tcG9uZW50cy93aW5rLWltZy5qcyc7XG5pbXBvcnQgeyBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGRlZmluZVdpbmtJbmRpY2F0b3IgfSBmcm9tICdAdGVsZW5ldC93aW5rLWNvcmUvY29tcG9uZW50cy93aW5rLWluZGljYXRvci5qcyc7XG5pbXBvcnQgeyBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGRlZmluZVdpbmtJbnB1dCB9IGZyb20gJ0B0ZWxlbmV0L3dpbmstY29yZS9jb21wb25lbnRzL3dpbmstaW5wdXQuanMnO1xuaW1wb3J0IHsgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkZWZpbmVXaW5rSW50ZW50QmFyIH0gZnJvbSAnQHRlbGVuZXQvd2luay1jb3JlL2NvbXBvbmVudHMvd2luay1pbnRlbnQtYmFyLmpzJztcbmltcG9ydCB7IGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZGVmaW5lV2lua0xpbmsgfSBmcm9tICdAdGVsZW5ldC93aW5rLWNvcmUvY29tcG9uZW50cy93aW5rLWxpbmsuanMnO1xuaW1wb3J0IHsgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkZWZpbmVXaW5rTG9nbyB9IGZyb20gJ0B0ZWxlbmV0L3dpbmstY29yZS9jb21wb25lbnRzL3dpbmstbG9nby5qcyc7XG5pbXBvcnQgeyBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGRlZmluZVdpbmtNYWluTmF2aWdhdGlvbiB9IGZyb20gJ0B0ZWxlbmV0L3dpbmstY29yZS9jb21wb25lbnRzL3dpbmstbWFpbi1uYXZpZ2F0aW9uLmpzJztcbmltcG9ydCB7IGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZGVmaW5lV2lua05hdmlnYXRpb25MaXN0IH0gZnJvbSAnQHRlbGVuZXQvd2luay1jb3JlL2NvbXBvbmVudHMvd2luay1uYXZpZ2F0aW9uLWxpc3QuanMnO1xuaW1wb3J0IHsgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkZWZpbmVXaW5rTmF2aWdhdGlvbkxpc3RJdGVtIH0gZnJvbSAnQHRlbGVuZXQvd2luay1jb3JlL2NvbXBvbmVudHMvd2luay1uYXZpZ2F0aW9uLWxpc3QtaXRlbS5qcyc7XG5pbXBvcnQgeyBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGRlZmluZVdpbmtOb3RpZmljYXRpb24gfSBmcm9tICdAdGVsZW5ldC93aW5rLWNvcmUvY29tcG9uZW50cy93aW5rLW5vdGlmaWNhdGlvbi5qcyc7XG5pbXBvcnQgeyBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGRlZmluZVdpbmtQYXJhZ3JhcGggfSBmcm9tICdAdGVsZW5ldC93aW5rLWNvcmUvY29tcG9uZW50cy93aW5rLXBhcmFncmFwaC5qcyc7XG5pbXBvcnQgeyBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGRlZmluZVdpbmtQcmljaW5nIH0gZnJvbSAnQHRlbGVuZXQvd2luay1jb3JlL2NvbXBvbmVudHMvd2luay1wcmljaW5nLmpzJztcbmltcG9ydCB7IGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZGVmaW5lV2lua1JhZGlvQnV0dG9uIH0gZnJvbSAnQHRlbGVuZXQvd2luay1jb3JlL2NvbXBvbmVudHMvd2luay1yYWRpby1idXR0b24uanMnO1xuaW1wb3J0IHsgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkZWZpbmVXaW5rUmFkaW9Hcm91cCB9IGZyb20gJ0B0ZWxlbmV0L3dpbmstY29yZS9jb21wb25lbnRzL3dpbmstcmFkaW8tZ3JvdXAuanMnO1xuaW1wb3J0IHsgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkZWZpbmVXaW5rUmFuZ2VTbGlkZXIgfSBmcm9tICdAdGVsZW5ldC93aW5rLWNvcmUvY29tcG9uZW50cy93aW5rLXJhbmdlLXNsaWRlci5qcyc7XG5pbXBvcnQgeyBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGRlZmluZVdpbmtTZWxlY3QgfSBmcm9tICdAdGVsZW5ldC93aW5rLWNvcmUvY29tcG9uZW50cy93aW5rLXNlbGVjdC5qcyc7XG5pbXBvcnQgeyBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGRlZmluZVdpbmtTaGVldCB9IGZyb20gJ0B0ZWxlbmV0L3dpbmstY29yZS9jb21wb25lbnRzL3dpbmstc2hlZXQuanMnO1xuaW1wb3J0IHsgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkZWZpbmVXaW5rU3BhY2VyIH0gZnJvbSAnQHRlbGVuZXQvd2luay1jb3JlL2NvbXBvbmVudHMvd2luay1zcGFjZXIuanMnO1xuaW1wb3J0IHsgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkZWZpbmVXaW5rU3RhY2sgfSBmcm9tICdAdGVsZW5ldC93aW5rLWNvcmUvY29tcG9uZW50cy93aW5rLXN0YWNrLmpzJztcbmltcG9ydCB7IGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZGVmaW5lV2lua1RhYnMgfSBmcm9tICdAdGVsZW5ldC93aW5rLWNvcmUvY29tcG9uZW50cy93aW5rLXRhYnMuanMnO1xuaW1wb3J0IHsgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkZWZpbmVXaW5rVGV4dGFyZWEgfSBmcm9tICdAdGVsZW5ldC93aW5rLWNvcmUvY29tcG9uZW50cy93aW5rLXRleHRhcmVhLmpzJztcbmltcG9ydCB7IGRlZmluZUN1c3RvbUVsZW1lbnQgYXMgZGVmaW5lV2lua1RpdGxlIH0gZnJvbSAnQHRlbGVuZXQvd2luay1jb3JlL2NvbXBvbmVudHMvd2luay10aXRsZS5qcyc7XG5pbXBvcnQgeyBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGRlZmluZVdpbmtUb2FzdCB9IGZyb20gJ0B0ZWxlbmV0L3dpbmstY29yZS9jb21wb25lbnRzL3dpbmstdG9hc3QuanMnO1xuaW1wb3J0IHsgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkZWZpbmVXaW5rVG9hc3RlciB9IGZyb20gJ0B0ZWxlbmV0L3dpbmstY29yZS9jb21wb25lbnRzL3dpbmstdG9hc3Rlci5qcyc7XG5pbXBvcnQgeyBkZWZpbmVDdXN0b21FbGVtZW50IGFzIGRlZmluZVdpbmtUb2dnbGVTd2l0Y2ggfSBmcm9tICdAdGVsZW5ldC93aW5rLWNvcmUvY29tcG9uZW50cy93aW5rLXRvZ2dsZS1zd2l0Y2guanMnO1xuaW1wb3J0IHsgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkZWZpbmVXaW5rVmFsaWRhdGlvbk1lc3NhZ2UgfSBmcm9tICdAdGVsZW5ldC93aW5rLWNvcmUvY29tcG9uZW50cy93aW5rLXZhbGlkYXRpb24tbWVzc2FnZS5qcyc7XG5AUHJveHlDbXAoe1xuICBkZWZpbmVDdXN0b21FbGVtZW50Rm46IGRlZmluZVdpbmtBY2NvcmRpb24sXG4gIGlucHV0czogWydoZWFkaW5nJywgJ2ljb24nLCAnaXNFeHBhbmRlZCddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnd2luay1hY2NvcmRpb24nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2hlYWRpbmcnLCAnaWNvbicsICdpc0V4cGFuZGVkJ10sXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgV2lua0FjY29yZGlvbiB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIFdpbmtBY2NvcmRpb24gZXh0ZW5kcyBDb21wb25lbnRzLldpbmtBY2NvcmRpb24ge31cblxuXG5AUHJveHlDbXAoe1xuICBkZWZpbmVDdXN0b21FbGVtZW50Rm46IGRlZmluZVdpbmtBbmltYXRpb24sXG4gIGlucHV0czogWydhdXRvcGxheScsICdjbGlja1RvUGxheScsICdjb250cm9scycsICdjb3VudCcsICdzcmMnXSxcbiAgbWV0aG9kczogWyd0b2dnbGVBbmltYXRpb24nXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3dpbmstYW5pbWF0aW9uJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydhdXRvcGxheScsICdjbGlja1RvUGxheScsICdjb250cm9scycsICdjb3VudCcsICdzcmMnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBXaW5rQW5pbWF0aW9uIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgV2lua0FuaW1hdGlvbiBleHRlbmRzIENvbXBvbmVudHMuV2lua0FuaW1hdGlvbiB7fVxuXG5cbkBQcm94eUNtcCh7XG4gIGRlZmluZUN1c3RvbUVsZW1lbnRGbjogZGVmaW5lV2lua0F2YXRhcixcbiAgaW5wdXRzOiBbJ3NpemUnLCAnc3JjJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd3aW5rLWF2YXRhcicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnc2l6ZScsICdzcmMnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBXaW5rQXZhdGFyIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgV2lua0F2YXRhciBleHRlbmRzIENvbXBvbmVudHMuV2lua0F2YXRhciB7fVxuXG5cbkBQcm94eUNtcCh7XG4gIGRlZmluZUN1c3RvbUVsZW1lbnRGbjogZGVmaW5lV2lua0JhZGdlLFxuICBpbnB1dHM6IFsnYmFja2dyb3VuZCcsICdzaXplJywgJ3RleHQnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3dpbmstYmFkZ2UnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2JhY2tncm91bmQnLCAnc2l6ZScsICd0ZXh0J10sXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgV2lua0JhZGdlIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgV2lua0JhZGdlIGV4dGVuZHMgQ29tcG9uZW50cy5XaW5rQmFkZ2Uge31cblxuXG5AUHJveHlDbXAoe1xuICBkZWZpbmVDdXN0b21FbGVtZW50Rm46IGRlZmluZVdpbmtCdXR0b24sXG4gIGlucHV0czogWydhcHBlYXJhbmNlJywgJ2VsZW1lbnQnLCAnaHJlZicsICdpY29uJywgJ2ljb25CdXR0b25BcmlhTGFiZWwnLCAnaWNvblBvc2l0aW9uJywgJ2xvYWRpbmdUZXh0JywgJ3NpemUnLCAnc3RhdHVzJywgJ3RhcmdldCcsICd0ZXh0JywgJ3R5cGUnLCAnd2lkdGgnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3dpbmstYnV0dG9uJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydhcHBlYXJhbmNlJywgJ2VsZW1lbnQnLCAnaHJlZicsICdpY29uJywgJ2ljb25CdXR0b25BcmlhTGFiZWwnLCAnaWNvblBvc2l0aW9uJywgJ2xvYWRpbmdUZXh0JywgJ3NpemUnLCAnc3RhdHVzJywgJ3RhcmdldCcsICd0ZXh0JywgJ3R5cGUnLCAnd2lkdGgnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBXaW5rQnV0dG9uIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgV2lua0J1dHRvbiBleHRlbmRzIENvbXBvbmVudHMuV2lua0J1dHRvbiB7fVxuXG5cbkBQcm94eUNtcCh7XG4gIGRlZmluZUN1c3RvbUVsZW1lbnRGbjogZGVmaW5lV2lua0NoZWNrQm94LFxuICBpbnB1dHM6IFsnY2hlY2tib3hJZCcsICdjaGVja2VkJywgJ2Rpc2FibGVkJywgJ2Vycm9yJywgJ2hlbHBlcicsICdsYWJlbCcsICduYW1lJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd3aW5rLWNoZWNrLWJveCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnY2hlY2tib3hJZCcsICdjaGVja2VkJywgJ2Rpc2FibGVkJywgJ2Vycm9yJywgJ2hlbHBlcicsICdsYWJlbCcsICduYW1lJ10sXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgV2lua0NoZWNrQm94IHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgV2lua0NoZWNrQm94IGV4dGVuZHMgQ29tcG9uZW50cy5XaW5rQ2hlY2tCb3gge31cblxuXG5AUHJveHlDbXAoe1xuICBkZWZpbmVDdXN0b21FbGVtZW50Rm46IGRlZmluZVdpbmtDaGVja0JveEdyb3VwLFxuICBpbnB1dHM6IFsnZGlyZWN0aW9uJywgJ2Vycm9yJywgJ2hlbHBlcicsICdpc1JlcXVpcmVkJywgJ2xhYmVsJywgJ29wdGlvbmFsVGV4dCddLFxuICBtZXRob2RzOiBbJ3NldFZhbGlkYXRpb24nXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3dpbmstY2hlY2stYm94LWdyb3VwJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydkaXJlY3Rpb24nLCAnZXJyb3InLCAnaGVscGVyJywgJ2lzUmVxdWlyZWQnLCAnbGFiZWwnLCAnb3B0aW9uYWxUZXh0J10sXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgV2lua0NoZWNrQm94R3JvdXAge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBXaW5rQ2hlY2tCb3hHcm91cCBleHRlbmRzIENvbXBvbmVudHMuV2lua0NoZWNrQm94R3JvdXAge31cblxuXG5AUHJveHlDbXAoe1xuICBkZWZpbmVDdXN0b21FbGVtZW50Rm46IGRlZmluZVdpbmtDb2x1bW5Db3VudCxcbiAgaW5wdXRzOiBbJ2NvbHNDb3VudCddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnd2luay1jb2x1bW4tY291bnQnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2NvbHNDb3VudCddLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIFdpbmtDb2x1bW5Db3VudCB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIFdpbmtDb2x1bW5Db3VudCBleHRlbmRzIENvbXBvbmVudHMuV2lua0NvbHVtbkNvdW50IHt9XG5cblxuQFByb3h5Q21wKHtcbiAgZGVmaW5lQ3VzdG9tRWxlbWVudEZuOiBkZWZpbmVXaW5rQ3VzdG9tZXJPcmllbnRhdGlvblxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3dpbmstY3VzdG9tZXItb3JpZW50YXRpb24nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBXaW5rQ3VzdG9tZXJPcmllbnRhdGlvbiB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIFdpbmtDdXN0b21lck9yaWVudGF0aW9uIGV4dGVuZHMgQ29tcG9uZW50cy5XaW5rQ3VzdG9tZXJPcmllbnRhdGlvbiB7fVxuXG5cbkBQcm94eUNtcCh7XG4gIGRlZmluZUN1c3RvbUVsZW1lbnRGbjogZGVmaW5lV2lua0Ryb3Bkb3duTWVudSxcbiAgaW5wdXRzOiBbJ2Ryb3Bkb3duVGFiSW5kZXgnLCAnaGVhZGluZycsICdpc0V4cGFuZGVkJywgJ2l0ZW1TZWxlY3RlZCddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnd2luay1kcm9wZG93bi1tZW51JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydkcm9wZG93blRhYkluZGV4JywgJ2hlYWRpbmcnLCAnaXNFeHBhbmRlZCcsICdpdGVtU2VsZWN0ZWQnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBXaW5rRHJvcGRvd25NZW51IHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgV2lua0Ryb3Bkb3duTWVudSBleHRlbmRzIENvbXBvbmVudHMuV2lua0Ryb3Bkb3duTWVudSB7fVxuXG5cbkBQcm94eUNtcCh7XG4gIGRlZmluZUN1c3RvbUVsZW1lbnRGbjogZGVmaW5lV2lua0ZseW91dCxcbiAgaW5wdXRzOiBbJ2ZseW91dElkJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd3aW5rLWZseW91dCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnZmx5b3V0SWQnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBXaW5rRmx5b3V0IHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsnZmx5b3V0QmFja0xpbmtDbGlja2VkJ10pO1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIFdpbmtGbHlvdXQgZXh0ZW5kcyBDb21wb25lbnRzLldpbmtGbHlvdXQge1xuXG4gIGZseW91dEJhY2tMaW5rQ2xpY2tlZDogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PGFueT4+O1xufVxuXG5cbkBQcm94eUNtcCh7XG4gIGRlZmluZUN1c3RvbUVsZW1lbnRGbjogZGVmaW5lV2lua0Zvcm1MYWJlbCxcbiAgaW5wdXRzOiBbJ2hlbHBlcicsICdoZWxwZXJJZCcsICdpc0Rpc2FibGVkJywgJ2xhYmVsJywgJ2xhYmVsSWQnLCAnb3B0aW9uYWxUZXh0JywgJ3JlbmRpdGlvbicsICdzaG93T3B0aW9uYWwnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3dpbmstZm9ybS1sYWJlbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnaGVscGVyJywgJ2hlbHBlcklkJywgJ2lzRGlzYWJsZWQnLCAnbGFiZWwnLCAnbGFiZWxJZCcsICdvcHRpb25hbFRleHQnLCAncmVuZGl0aW9uJywgJ3Nob3dPcHRpb25hbCddLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIFdpbmtGb3JtTGFiZWwge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBXaW5rRm9ybUxhYmVsIGV4dGVuZHMgQ29tcG9uZW50cy5XaW5rRm9ybUxhYmVsIHt9XG5cblxuQFByb3h5Q21wKHtcbiAgZGVmaW5lQ3VzdG9tRWxlbWVudEZuOiBkZWZpbmVXaW5rR2xvYmFsSGVhZGVyXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnd2luay1nbG9iYWwtaGVhZGVyJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogW10sXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgV2lua0dsb2JhbEhlYWRlciB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIFdpbmtHbG9iYWxIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnRzLldpbmtHbG9iYWxIZWFkZXIge31cblxuXG5AUHJveHlDbXAoe1xuICBkZWZpbmVDdXN0b21FbGVtZW50Rm46IGRlZmluZVdpbmtJY29uLFxuICBpbnB1dHM6IFsnYXBwZWFyYW5jZScsICdpY29uJywgJ3NpemUnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3dpbmstaWNvbicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnYXBwZWFyYW5jZScsICdpY29uJywgJ3NpemUnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBXaW5rSWNvbiB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIFdpbmtJY29uIGV4dGVuZHMgQ29tcG9uZW50cy5XaW5rSWNvbiB7fVxuXG5cbkBQcm94eUNtcCh7XG4gIGRlZmluZUN1c3RvbUVsZW1lbnRGbjogZGVmaW5lV2lua0ltZyxcbiAgaW5wdXRzOiBbJ2FsdCcsICdsb2FkaW5nJywgJ3NyY0Rlc2t0b3AnLCAnc3JjTW9iaWxlJywgJ3NyY1RhYmxldCddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnd2luay1pbWcnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2FsdCcsICdsb2FkaW5nJywgJ3NyY0Rlc2t0b3AnLCAnc3JjTW9iaWxlJywgJ3NyY1RhYmxldCddLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIFdpbmtJbWcge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBXaW5rSW1nIGV4dGVuZHMgQ29tcG9uZW50cy5XaW5rSW1nIHt9XG5cblxuQFByb3h5Q21wKHtcbiAgZGVmaW5lQ3VzdG9tRWxlbWVudEZuOiBkZWZpbmVXaW5rSW5kaWNhdG9yLFxuICBpbnB1dHM6IFsnZGlyZWN0aW9uJywgJ3NpemUnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3dpbmstaW5kaWNhdG9yJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydkaXJlY3Rpb24nLCAnc2l6ZSddLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIFdpbmtJbmRpY2F0b3Ige1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBXaW5rSW5kaWNhdG9yIGV4dGVuZHMgQ29tcG9uZW50cy5XaW5rSW5kaWNhdG9yIHt9XG5cblxuQFByb3h5Q21wKHtcbiAgZGVmaW5lQ3VzdG9tRWxlbWVudEZuOiBkZWZpbmVXaW5rSW5wdXQsXG4gIGlucHV0czogWydhcHBlYXJhbmNlJywgJ2F1dG9jb21wbGV0ZScsICdlbnRlcmtleWhpbnRPcHRpb24nLCAnZXJyb3InLCAnaGVscGVyJywgJ2ljb25MZWZ0JywgJ2ljb25SaWdodCcsICdpbnB1dElkJywgJ2lucHV0TW9kZU9wdGlvbicsICdpc0F1dG9mb2N1c2VkJywgJ2lzRGlzYWJsZWQnLCAnaXNSZWFkb25seScsICdpc1JlcXVpcmVkJywgJ2xhYmVsJywgJ21heFZhbHVlJywgJ21pblZhbHVlJywgJ25hbWUnLCAnb3B0aW9uYWxUZXh0JywgJ3BsYWNlaG9sZGVyJywgJ3Bvc3RmaXhWYWx1ZScsICdwcmVmaXhWYWx1ZScsICdzaXplJywgJ3N0ZXAnLCAndHlwZScsICd2YWx1ZSddLFxuICBtZXRob2RzOiBbJ3NldFZhbGlkYXRpb24nXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3dpbmstaW5wdXQnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2FwcGVhcmFuY2UnLCAnYXV0b2NvbXBsZXRlJywgJ2VudGVya2V5aGludE9wdGlvbicsICdlcnJvcicsICdoZWxwZXInLCAnaWNvbkxlZnQnLCAnaWNvblJpZ2h0JywgJ2lucHV0SWQnLCAnaW5wdXRNb2RlT3B0aW9uJywgJ2lzQXV0b2ZvY3VzZWQnLCAnaXNEaXNhYmxlZCcsICdpc1JlYWRvbmx5JywgJ2lzUmVxdWlyZWQnLCAnbGFiZWwnLCAnbWF4VmFsdWUnLCAnbWluVmFsdWUnLCAnbmFtZScsICdvcHRpb25hbFRleHQnLCAncGxhY2Vob2xkZXInLCAncG9zdGZpeFZhbHVlJywgJ3ByZWZpeFZhbHVlJywgJ3NpemUnLCAnc3RlcCcsICd0eXBlJywgJ3ZhbHVlJ10sXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgV2lua0lucHV0IHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsndmFsdWVDaGFuZ2VkJ10pO1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIFdpbmtJbnB1dCBleHRlbmRzIENvbXBvbmVudHMuV2lua0lucHV0IHtcblxuICB2YWx1ZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxhbnk+Pjtcbn1cblxuXG5AUHJveHlDbXAoe1xuICBkZWZpbmVDdXN0b21FbGVtZW50Rm46IGRlZmluZVdpbmtJbnRlbnRCYXJcbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd3aW5rLWludGVudC1iYXInLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBXaW5rSW50ZW50QmFyIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgV2lua0ludGVudEJhciBleHRlbmRzIENvbXBvbmVudHMuV2lua0ludGVudEJhciB7fVxuXG5cbkBQcm94eUNtcCh7XG4gIGRlZmluZUN1c3RvbUVsZW1lbnRGbjogZGVmaW5lV2lua0xpbmssXG4gIGlucHV0czogWydhcHBlYXJhbmNlJywgJ2hyZWYnLCAnaWNvbicsICdpY29uQXBwZWFyYW5jZScsICdpY29uUG9zaXRpb24nLCAnaXNEaXNhYmxlZCcsICdzaXplJywgJ3RhcmdldCddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnd2luay1saW5rJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydhcHBlYXJhbmNlJywgJ2hyZWYnLCAnaWNvbicsICdpY29uQXBwZWFyYW5jZScsICdpY29uUG9zaXRpb24nLCAnaXNEaXNhYmxlZCcsICdzaXplJywgJ3RhcmdldCddLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIFdpbmtMaW5rIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgV2lua0xpbmsgZXh0ZW5kcyBDb21wb25lbnRzLldpbmtMaW5rIHt9XG5cblxuQFByb3h5Q21wKHtcbiAgZGVmaW5lQ3VzdG9tRWxlbWVudEZuOiBkZWZpbmVXaW5rTG9nbyxcbiAgaW5wdXRzOiBbJ2FsdCcsICdhcHBlYXJhbmNlJywgJ2hyZWYnLCAndGFyZ2V0J11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd3aW5rLWxvZ28nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2FsdCcsICdhcHBlYXJhbmNlJywgJ2hyZWYnLCAndGFyZ2V0J10sXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgV2lua0xvZ28ge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBXaW5rTG9nbyBleHRlbmRzIENvbXBvbmVudHMuV2lua0xvZ28ge31cblxuXG5AUHJveHlDbXAoe1xuICBkZWZpbmVDdXN0b21FbGVtZW50Rm46IGRlZmluZVdpbmtNYWluTmF2aWdhdGlvbixcbiAgaW5wdXRzOiBbJ21lbnVJdGVtcyddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnd2luay1tYWluLW5hdmlnYXRpb24nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ21lbnVJdGVtcyddLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIFdpbmtNYWluTmF2aWdhdGlvbiB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ21haW5OYXZpZ2F0aW9uSXRlbUNsaWNrZWQnXSk7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgV2lua01haW5OYXZpZ2F0aW9uIGV4dGVuZHMgQ29tcG9uZW50cy5XaW5rTWFpbk5hdmlnYXRpb24ge1xuXG4gIG1haW5OYXZpZ2F0aW9uSXRlbUNsaWNrZWQ6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudDxhbnk+Pjtcbn1cblxuXG5AUHJveHlDbXAoe1xuICBkZWZpbmVDdXN0b21FbGVtZW50Rm46IGRlZmluZVdpbmtOYXZpZ2F0aW9uTGlzdCxcbiAgaW5wdXRzOiBbJ2hhc0JvbGRMaW5rcycsICdsaXN0VGl0bGUnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3dpbmstbmF2aWdhdGlvbi1saXN0JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydoYXNCb2xkTGlua3MnLCAnbGlzdFRpdGxlJ10sXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgV2lua05hdmlnYXRpb25MaXN0IHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgV2lua05hdmlnYXRpb25MaXN0IGV4dGVuZHMgQ29tcG9uZW50cy5XaW5rTmF2aWdhdGlvbkxpc3Qge31cblxuXG5AUHJveHlDbXAoe1xuICBkZWZpbmVDdXN0b21FbGVtZW50Rm46IGRlZmluZVdpbmtOYXZpZ2F0aW9uTGlzdEl0ZW0sXG4gIGlucHV0czogWydocmVmJywgJ3RhcmdldCddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnd2luay1uYXZpZ2F0aW9uLWxpc3QtaXRlbScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnaHJlZicsICd0YXJnZXQnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBXaW5rTmF2aWdhdGlvbkxpc3RJdGVtIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgV2lua05hdmlnYXRpb25MaXN0SXRlbSBleHRlbmRzIENvbXBvbmVudHMuV2lua05hdmlnYXRpb25MaXN0SXRlbSB7fVxuXG5cbkBQcm94eUNtcCh7XG4gIGRlZmluZUN1c3RvbUVsZW1lbnRGbjogZGVmaW5lV2lua05vdGlmaWNhdGlvbixcbiAgaW5wdXRzOiBbJ2FwcGVhcmFuY2UnLCAnaGFzQ2xvc2VJY29uJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd3aW5rLW5vdGlmaWNhdGlvbicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnYXBwZWFyYW5jZScsICdoYXNDbG9zZUljb24nXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBXaW5rTm90aWZpY2F0aW9uIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgV2lua05vdGlmaWNhdGlvbiBleHRlbmRzIENvbXBvbmVudHMuV2lua05vdGlmaWNhdGlvbiB7fVxuXG5cbkBQcm94eUNtcCh7XG4gIGRlZmluZUN1c3RvbUVsZW1lbnRGbjogZGVmaW5lV2lua1BhcmFncmFwaCxcbiAgaW5wdXRzOiBbJ2FwcGVhcmFuY2UnLCAnc2l6ZSddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnd2luay1wYXJhZ3JhcGgnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2FwcGVhcmFuY2UnLCAnc2l6ZSddLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIFdpbmtQYXJhZ3JhcGgge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBXaW5rUGFyYWdyYXBoIGV4dGVuZHMgQ29tcG9uZW50cy5XaW5rUGFyYWdyYXBoIHt9XG5cblxuQFByb3h5Q21wKHtcbiAgZGVmaW5lQ3VzdG9tRWxlbWVudEZuOiBkZWZpbmVXaW5rUHJpY2luZyxcbiAgaW5wdXRzOiBbJ2FsaWdubWVudCcsICdhbm5vdGF0aW9uJywgJ2FwcGVhcmFuY2UnLCAnZHVyYXRpb24nLCAnZnJlcXVlbmN5JywgJ3ByaWNlJywgJ3ByaWNlU3RyaWtldGhyb3VnaCcsICdzdGFydGluZ0Zyb20nXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3dpbmstcHJpY2luZycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnYWxpZ25tZW50JywgJ2Fubm90YXRpb24nLCAnYXBwZWFyYW5jZScsICdkdXJhdGlvbicsICdmcmVxdWVuY3knLCAncHJpY2UnLCAncHJpY2VTdHJpa2V0aHJvdWdoJywgJ3N0YXJ0aW5nRnJvbSddLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIFdpbmtQcmljaW5nIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgV2lua1ByaWNpbmcgZXh0ZW5kcyBDb21wb25lbnRzLldpbmtQcmljaW5nIHt9XG5cblxuQFByb3h5Q21wKHtcbiAgZGVmaW5lQ3VzdG9tRWxlbWVudEZuOiBkZWZpbmVXaW5rUmFkaW9CdXR0b24sXG4gIGlucHV0czogWydjaGVja2VkJywgJ2Rpc2FibGVkJywgJ2Vycm9yJywgJ2hlbHBlcicsICdsYWJlbCcsICduYW1lJywgJ3JhZGlvQnV0dG9uSWQnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3dpbmstcmFkaW8tYnV0dG9uJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydjaGVja2VkJywgJ2Rpc2FibGVkJywgJ2Vycm9yJywgJ2hlbHBlcicsICdsYWJlbCcsICduYW1lJywgJ3JhZGlvQnV0dG9uSWQnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBXaW5rUmFkaW9CdXR0b24ge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBXaW5rUmFkaW9CdXR0b24gZXh0ZW5kcyBDb21wb25lbnRzLldpbmtSYWRpb0J1dHRvbiB7fVxuXG5cbkBQcm94eUNtcCh7XG4gIGRlZmluZUN1c3RvbUVsZW1lbnRGbjogZGVmaW5lV2lua1JhZGlvR3JvdXAsXG4gIGlucHV0czogWydkaXJlY3Rpb24nLCAnZXJyb3InLCAnaGVscGVyJywgJ2lzUmVxdWlyZWQnLCAnbGFiZWwnLCAnb3B0aW9uYWxUZXh0J10sXG4gIG1ldGhvZHM6IFsnc2V0VmFsaWRhdGlvbiddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnd2luay1yYWRpby1ncm91cCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnZGlyZWN0aW9uJywgJ2Vycm9yJywgJ2hlbHBlcicsICdpc1JlcXVpcmVkJywgJ2xhYmVsJywgJ29wdGlvbmFsVGV4dCddLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIFdpbmtSYWRpb0dyb3VwIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgV2lua1JhZGlvR3JvdXAgZXh0ZW5kcyBDb21wb25lbnRzLldpbmtSYWRpb0dyb3VwIHt9XG5cblxuQFByb3h5Q21wKHtcbiAgZGVmaW5lQ3VzdG9tRWxlbWVudEZuOiBkZWZpbmVXaW5rUmFuZ2VTbGlkZXIsXG4gIGlucHV0czogWydib3R0b21WYWx1ZScsICdlcnJvck1lc3NhZ2UnLCAnaGVscGVyJywgJ2xhYmVsJywgJ21heFZhbHVlJywgJ21pblZhbHVlJywgJ3Nob3dJbnB1dCcsICdzaG93VmFsdWVzJywgJ3NsaWRlcklkJywgJ3NsaWRlclR5cGUnLCAnc3RlcCcsICd2YWx1ZSddLFxuICBtZXRob2RzOiBbJ3Nob3dGcm9tVmFsdWUnLCAnc2hvd1RvVmFsdWUnLCAnZ2V0RHJhZ1ZhbHVlJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd3aW5rLXJhbmdlLXNsaWRlcicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnYm90dG9tVmFsdWUnLCAnZXJyb3JNZXNzYWdlJywgJ2hlbHBlcicsICdsYWJlbCcsICdtYXhWYWx1ZScsICdtaW5WYWx1ZScsICdzaG93SW5wdXQnLCAnc2hvd1ZhbHVlcycsICdzbGlkZXJJZCcsICdzbGlkZXJUeXBlJywgJ3N0ZXAnLCAndmFsdWUnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBXaW5rUmFuZ2VTbGlkZXIge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBXaW5rUmFuZ2VTbGlkZXIgZXh0ZW5kcyBDb21wb25lbnRzLldpbmtSYW5nZVNsaWRlciB7fVxuXG5cbkBQcm94eUNtcCh7XG4gIGRlZmluZUN1c3RvbUVsZW1lbnRGbjogZGVmaW5lV2lua1NlbGVjdCxcbiAgaW5wdXRzOiBbJ2Vycm9yJywgJ2hlbHBlcicsICdpc0Rpc2FibGVkJywgJ2lzUmVxdWlyZWQnLCAnbGFiZWwnLCAncGxhY2Vob2xkZXInLCAnc2VsZWN0SWQnLCAnc2VsZWN0TmFtZScsICd2YWx1ZSddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnd2luay1zZWxlY3QnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2Vycm9yJywgJ2hlbHBlcicsICdpc0Rpc2FibGVkJywgJ2lzUmVxdWlyZWQnLCAnbGFiZWwnLCAncGxhY2Vob2xkZXInLCAnc2VsZWN0SWQnLCAnc2VsZWN0TmFtZScsICd2YWx1ZSddLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIFdpbmtTZWxlY3Qge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBXaW5rU2VsZWN0IGV4dGVuZHMgQ29tcG9uZW50cy5XaW5rU2VsZWN0IHt9XG5cblxuQFByb3h5Q21wKHtcbiAgZGVmaW5lQ3VzdG9tRWxlbWVudEZuOiBkZWZpbmVXaW5rU2hlZXQsXG4gIGlucHV0czogWydkYXNoYm9hcmQnLCAnaXNWaXNpYmxlJywgJ211bHRpcGFnZSddLFxuICBtZXRob2RzOiBbJ29wZW4nLCAnY2xvc2UnLCAnbmV4dFBhZ2UnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3dpbmstc2hlZXQnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2Rhc2hib2FyZCcsICdpc1Zpc2libGUnLCAnbXVsdGlwYWdlJ10sXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgV2lua1NoZWV0IHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgV2lua1NoZWV0IGV4dGVuZHMgQ29tcG9uZW50cy5XaW5rU2hlZXQge31cblxuXG5AUHJveHlDbXAoe1xuICBkZWZpbmVDdXN0b21FbGVtZW50Rm46IGRlZmluZVdpbmtTcGFjZXIsXG4gIGlucHV0czogWydzaXplJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd3aW5rLXNwYWNlcicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnc2l6ZSddLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIFdpbmtTcGFjZXIge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBXaW5rU3BhY2VyIGV4dGVuZHMgQ29tcG9uZW50cy5XaW5rU3BhY2VyIHt9XG5cblxuQFByb3h5Q21wKHtcbiAgZGVmaW5lQ3VzdG9tRWxlbWVudEZuOiBkZWZpbmVXaW5rU3RhY2ssXG4gIGlucHV0czogWydhbGlnbkl0ZW1zJywgJ2NvbCcsICdkaXJlY3Rpb24nLCAnZ2FwJywgJ2p1c3RpZnlDb250ZW50JywgJ3dyYXAnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3dpbmstc3RhY2snLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2FsaWduSXRlbXMnLCAnY29sJywgJ2RpcmVjdGlvbicsICdnYXAnLCAnanVzdGlmeUNvbnRlbnQnLCAnd3JhcCddLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIFdpbmtTdGFjayB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIFdpbmtTdGFjayBleHRlbmRzIENvbXBvbmVudHMuV2lua1N0YWNrIHt9XG5cblxuQFByb3h5Q21wKHtcbiAgZGVmaW5lQ3VzdG9tRWxlbWVudEZuOiBkZWZpbmVXaW5rVGFicyxcbiAgaW5wdXRzOiBbJ2FwcGVhcmFuY2UnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3dpbmstdGFicycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnYXBwZWFyYW5jZSddLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIFdpbmtUYWJzIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgV2lua1RhYnMgZXh0ZW5kcyBDb21wb25lbnRzLldpbmtUYWJzIHt9XG5cblxuQFByb3h5Q21wKHtcbiAgZGVmaW5lQ3VzdG9tRWxlbWVudEZuOiBkZWZpbmVXaW5rVGV4dGFyZWEsXG4gIGlucHV0czogWydhdXRvY29tcGxldGUnLCAnZW50ZXJrZXloaW50T3B0aW9uJywgJ2Vycm9yJywgJ2hlbHBlcicsICdpc0Rpc2FibGVkJywgJ2lzUmVxdWlyZWQnLCAnbGFiZWwnLCAnbWF4bGVuZ3RoJywgJ21pbmxlbmd0aCcsICduYW1lJywgJ3BsYWNlaG9sZGVyJywgJ3Jvd3MnLCAndGV4dGFyZWFJZCddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnd2luay10ZXh0YXJlYScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnYXV0b2NvbXBsZXRlJywgJ2VudGVya2V5aGludE9wdGlvbicsICdlcnJvcicsICdoZWxwZXInLCAnaXNEaXNhYmxlZCcsICdpc1JlcXVpcmVkJywgJ2xhYmVsJywgJ21heGxlbmd0aCcsICdtaW5sZW5ndGgnLCAnbmFtZScsICdwbGFjZWhvbGRlcicsICdyb3dzJywgJ3RleHRhcmVhSWQnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBXaW5rVGV4dGFyZWEge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBXaW5rVGV4dGFyZWEgZXh0ZW5kcyBDb21wb25lbnRzLldpbmtUZXh0YXJlYSB7fVxuXG5cbkBQcm94eUNtcCh7XG4gIGRlZmluZUN1c3RvbUVsZW1lbnRGbjogZGVmaW5lV2lua1RpdGxlLFxuICBpbnB1dHM6IFsnaHRtbFRhZycsICdub1NlbycsICdzcGFjaW5nWScsICd0ZXh0J11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd3aW5rLXRpdGxlJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydodG1sVGFnJywgJ25vU2VvJywgJ3NwYWNpbmdZJywgJ3RleHQnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBXaW5rVGl0bGUge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBXaW5rVGl0bGUgZXh0ZW5kcyBDb21wb25lbnRzLldpbmtUaXRsZSB7fVxuXG5cbkBQcm94eUNtcCh7XG4gIGRlZmluZUN1c3RvbUVsZW1lbnRGbjogZGVmaW5lV2lua1RvYXN0LFxuICBpbnB1dHM6IFsnYXBwZWFyYW5jZScsICdjdXJyZW50VGhlbWUnLCAnZHVyYXRpb24nLCAnaHJlZicsICdpc09wZW4nLCAnbGlua1RleHQnLCAndGFyZ2V0JywgJ3RleHQnLCAndGhlbWUnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3dpbmstdG9hc3QnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2FwcGVhcmFuY2UnLCAnY3VycmVudFRoZW1lJywgJ2R1cmF0aW9uJywgJ2hyZWYnLCAnaXNPcGVuJywgJ2xpbmtUZXh0JywgJ3RhcmdldCcsICd0ZXh0JywgJ3RoZW1lJ10sXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgV2lua1RvYXN0IHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgV2lua1RvYXN0IGV4dGVuZHMgQ29tcG9uZW50cy5XaW5rVG9hc3Qge31cblxuXG5AUHJveHlDbXAoe1xuICBkZWZpbmVDdXN0b21FbGVtZW50Rm46IGRlZmluZVdpbmtUb2FzdGVyLFxuICBtZXRob2RzOiBbJ3dpbmtDcmVhdGVUb2FzdCddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnd2luay10b2FzdGVyJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogW10sXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgV2lua1RvYXN0ZXIge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBXaW5rVG9hc3RlciBleHRlbmRzIENvbXBvbmVudHMuV2lua1RvYXN0ZXIge31cblxuXG5AUHJveHlDbXAoe1xuICBkZWZpbmVDdXN0b21FbGVtZW50Rm46IGRlZmluZVdpbmtUb2dnbGVTd2l0Y2gsXG4gIGlucHV0czogWydhbGlnbm1lbnQnLCAnY2hlY2tlZCcsICdkaXNhYmxlZCcsICdsYWJlbCcsICd0b2dnbGVTd2l0Y2hJZCcsICd0b2dnbGVTd2l0Y2hOYW1lJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd3aW5rLXRvZ2dsZS1zd2l0Y2gnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgaW5wdXRzOiBbJ2FsaWdubWVudCcsICdjaGVja2VkJywgJ2Rpc2FibGVkJywgJ2xhYmVsJywgJ3RvZ2dsZVN3aXRjaElkJywgJ3RvZ2dsZVN3aXRjaE5hbWUnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBXaW5rVG9nZ2xlU3dpdGNoIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgV2lua1RvZ2dsZVN3aXRjaCBleHRlbmRzIENvbXBvbmVudHMuV2lua1RvZ2dsZVN3aXRjaCB7fVxuXG5cbkBQcm94eUNtcCh7XG4gIGRlZmluZUN1c3RvbUVsZW1lbnRGbjogZGVmaW5lV2lua1ZhbGlkYXRpb25NZXNzYWdlLFxuICBpbnB1dHM6IFsnbWVzc2FnZScsICd0eXBlJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd3aW5rLXZhbGlkYXRpb24tbWVzc2FnZScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsnbWVzc2FnZScsICd0eXBlJ10sXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgV2lua1ZhbGlkYXRpb25NZXNzYWdlIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgV2lua1ZhbGlkYXRpb25NZXNzYWdlIGV4dGVuZHMgQ29tcG9uZW50cy5XaW5rVmFsaWRhdGlvbk1lc3NhZ2Uge31cblxuXG4iXX0=