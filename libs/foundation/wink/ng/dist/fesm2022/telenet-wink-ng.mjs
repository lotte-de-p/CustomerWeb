import * as i0 from '@angular/core';
import { ChangeDetectorRef, ElementRef, NgZone, Component, ChangeDetectionStrategy } from '@angular/core';
import { fromEvent } from 'rxjs';
import { defineCustomElement as defineCustomElement$1 } from '@telenet/wink-core/components/wink-accordion.js';
import { defineCustomElement as defineCustomElement$2 } from '@telenet/wink-core/components/wink-animation.js';
import { defineCustomElement as defineCustomElement$3 } from '@telenet/wink-core/components/wink-avatar.js';
import { defineCustomElement as defineCustomElement$4 } from '@telenet/wink-core/components/wink-badge.js';
import { defineCustomElement as defineCustomElement$5 } from '@telenet/wink-core/components/wink-button.js';
import { defineCustomElement as defineCustomElement$6 } from '@telenet/wink-core/components/wink-check-box.js';
import { defineCustomElement as defineCustomElement$7 } from '@telenet/wink-core/components/wink-check-box-group.js';
import { defineCustomElement as defineCustomElement$8 } from '@telenet/wink-core/components/wink-column-count.js';
import { defineCustomElement as defineCustomElement$9 } from '@telenet/wink-core/components/wink-customer-orientation.js';
import { defineCustomElement as defineCustomElement$a } from '@telenet/wink-core/components/wink-dropdown-menu.js';
import { defineCustomElement as defineCustomElement$b } from '@telenet/wink-core/components/wink-flyout.js';
import { defineCustomElement as defineCustomElement$c } from '@telenet/wink-core/components/wink-form-label.js';
import { defineCustomElement as defineCustomElement$d } from '@telenet/wink-core/components/wink-global-header.js';
import { defineCustomElement as defineCustomElement$e } from '@telenet/wink-core/components/wink-icon.js';
import { defineCustomElement as defineCustomElement$f } from '@telenet/wink-core/components/wink-img.js';
import { defineCustomElement as defineCustomElement$g } from '@telenet/wink-core/components/wink-indicator.js';
import { defineCustomElement as defineCustomElement$h } from '@telenet/wink-core/components/wink-input.js';
import { defineCustomElement as defineCustomElement$i } from '@telenet/wink-core/components/wink-intent-bar.js';
import { defineCustomElement as defineCustomElement$j } from '@telenet/wink-core/components/wink-link.js';
import { defineCustomElement as defineCustomElement$k } from '@telenet/wink-core/components/wink-logo.js';
import { defineCustomElement as defineCustomElement$l } from '@telenet/wink-core/components/wink-main-navigation.js';
import { defineCustomElement as defineCustomElement$m } from '@telenet/wink-core/components/wink-navigation-list.js';
import { defineCustomElement as defineCustomElement$n } from '@telenet/wink-core/components/wink-navigation-list-item.js';
import { defineCustomElement as defineCustomElement$o } from '@telenet/wink-core/components/wink-notification.js';
import { defineCustomElement as defineCustomElement$p } from '@telenet/wink-core/components/wink-paragraph.js';
import { defineCustomElement as defineCustomElement$q } from '@telenet/wink-core/components/wink-pricing.js';
import { defineCustomElement as defineCustomElement$r } from '@telenet/wink-core/components/wink-radio-button.js';
import { defineCustomElement as defineCustomElement$s } from '@telenet/wink-core/components/wink-radio-group.js';
import { defineCustomElement as defineCustomElement$t } from '@telenet/wink-core/components/wink-range-slider.js';
import { defineCustomElement as defineCustomElement$u } from '@telenet/wink-core/components/wink-select.js';
import { defineCustomElement as defineCustomElement$v } from '@telenet/wink-core/components/wink-sheet.js';
import { defineCustomElement as defineCustomElement$w } from '@telenet/wink-core/components/wink-spacer.js';
import { defineCustomElement as defineCustomElement$x } from '@telenet/wink-core/components/wink-stack.js';
import { defineCustomElement as defineCustomElement$y } from '@telenet/wink-core/components/wink-tabs.js';
import { defineCustomElement as defineCustomElement$z } from '@telenet/wink-core/components/wink-textarea.js';
import { defineCustomElement as defineCustomElement$A } from '@telenet/wink-core/components/wink-title.js';
import { defineCustomElement as defineCustomElement$B } from '@telenet/wink-core/components/wink-toast.js';
import { defineCustomElement as defineCustomElement$C } from '@telenet/wink-core/components/wink-toaster.js';
import { defineCustomElement as defineCustomElement$D } from '@telenet/wink-core/components/wink-toggle-switch.js';
import { defineCustomElement as defineCustomElement$E } from '@telenet/wink-core/components/wink-validation-message.js';

/* eslint-disable */
/* tslint:disable */
const proxyInputs = (Cmp, inputs) => {
    const Prototype = Cmp.prototype;
    inputs.forEach((item) => {
        Object.defineProperty(Prototype, item, {
            get() {
                return this.el[item];
            },
            set(val) {
                this.z.runOutsideAngular(() => (this.el[item] = val));
            },
            /**
             * In the event that proxyInputs is called
             * multiple times re-defining these inputs
             * will cause an error to be thrown. As a result
             * we set configurable: true to indicate these
             * properties can be changed.
             */
            configurable: true,
        });
    });
};
const proxyMethods = (Cmp, methods) => {
    const Prototype = Cmp.prototype;
    methods.forEach((methodName) => {
        Prototype[methodName] = function () {
            const args = arguments;
            return this.z.runOutsideAngular(() => this.el[methodName].apply(this.el, args));
        };
    });
};
const proxyOutputs = (instance, el, events) => {
    events.forEach((eventName) => (instance[eventName] = fromEvent(el, eventName)));
};
const defineCustomElement = (tagName, customElement) => {
    if (customElement !== undefined && typeof customElements !== 'undefined' && !customElements.get(tagName)) {
        customElements.define(tagName, customElement);
    }
};
// tslint:disable-next-line: only-arrow-functions
function ProxyCmp(opts) {
    const decorator = function (cls) {
        const { defineCustomElementFn, inputs, methods } = opts;
        if (defineCustomElementFn !== undefined) {
            defineCustomElementFn();
        }
        if (inputs) {
            proxyInputs(cls, inputs);
        }
        if (methods) {
            proxyMethods(cls, methods);
        }
        return cls;
    };
    return decorator;
}

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
        defineCustomElementFn: defineCustomElement$1,
        inputs: ['heading', 'icon', 'isExpanded']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkAccordion);
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
        defineCustomElementFn: defineCustomElement$2,
        inputs: ['autoplay', 'clickToPlay', 'controls', 'count', 'src'],
        methods: ['toggleAnimation']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkAnimation);
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
        defineCustomElementFn: defineCustomElement$3,
        inputs: ['size', 'src']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkAvatar);
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
        defineCustomElementFn: defineCustomElement$4,
        inputs: ['background', 'size', 'text']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkBadge);
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
        defineCustomElementFn: defineCustomElement$5,
        inputs: ['appearance', 'element', 'href', 'icon', 'iconButtonAriaLabel', 'iconPosition', 'loadingText', 'size', 'status', 'target', 'text', 'type', 'width']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkButton);
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
        defineCustomElementFn: defineCustomElement$6,
        inputs: ['checkboxId', 'checked', 'disabled', 'error', 'helper', 'label', 'name']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkCheckBox);
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
        defineCustomElementFn: defineCustomElement$7,
        inputs: ['direction', 'error', 'helper', 'isRequired', 'label', 'optionalText'],
        methods: ['setValidation']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkCheckBoxGroup);
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
        defineCustomElementFn: defineCustomElement$8,
        inputs: ['colsCount']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkColumnCount);
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
        defineCustomElementFn: defineCustomElement$9
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkCustomerOrientation);
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
        defineCustomElementFn: defineCustomElement$a,
        inputs: ['dropdownTabIndex', 'heading', 'isExpanded', 'itemSelected']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkDropdownMenu);
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
        defineCustomElementFn: defineCustomElement$b,
        inputs: ['flyoutId']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkFlyout);
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
        defineCustomElementFn: defineCustomElement$c,
        inputs: ['helper', 'helperId', 'isDisabled', 'label', 'labelId', 'optionalText', 'rendition', 'showOptional']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkFormLabel);
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
        defineCustomElementFn: defineCustomElement$d
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkGlobalHeader);
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
        defineCustomElementFn: defineCustomElement$e,
        inputs: ['appearance', 'icon', 'size']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkIcon);
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
        defineCustomElementFn: defineCustomElement$f,
        inputs: ['alt', 'loading', 'srcDesktop', 'srcMobile', 'srcTablet']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkImg);
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
        defineCustomElementFn: defineCustomElement$g,
        inputs: ['direction', 'size']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkIndicator);
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
        defineCustomElementFn: defineCustomElement$h,
        inputs: ['appearance', 'autocomplete', 'enterkeyhintOption', 'error', 'helper', 'iconLeft', 'iconRight', 'inputId', 'inputModeOption', 'isAutofocused', 'isDisabled', 'isReadonly', 'isRequired', 'label', 'maxValue', 'minValue', 'name', 'optionalText', 'placeholder', 'postfixValue', 'prefixValue', 'size', 'step', 'type', 'value'],
        methods: ['setValidation']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkInput);
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
        defineCustomElementFn: defineCustomElement$i
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkIntentBar);
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
        defineCustomElementFn: defineCustomElement$j,
        inputs: ['appearance', 'href', 'icon', 'iconAppearance', 'iconPosition', 'isDisabled', 'size', 'target']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkLink);
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
        defineCustomElementFn: defineCustomElement$k,
        inputs: ['alt', 'appearance', 'href', 'target']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkLogo);
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
        defineCustomElementFn: defineCustomElement$l,
        inputs: ['menuItems']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkMainNavigation);
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
        defineCustomElementFn: defineCustomElement$m,
        inputs: ['hasBoldLinks', 'listTitle']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkNavigationList);
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
        defineCustomElementFn: defineCustomElement$n,
        inputs: ['href', 'target']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkNavigationListItem);
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
        defineCustomElementFn: defineCustomElement$o,
        inputs: ['appearance', 'hasCloseIcon']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkNotification);
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
        defineCustomElementFn: defineCustomElement$p,
        inputs: ['appearance', 'size']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkParagraph);
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
        defineCustomElementFn: defineCustomElement$q,
        inputs: ['alignment', 'annotation', 'appearance', 'duration', 'frequency', 'price', 'priceStrikethrough', 'startingFrom']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkPricing);
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
        defineCustomElementFn: defineCustomElement$r,
        inputs: ['checked', 'disabled', 'error', 'helper', 'label', 'name', 'radioButtonId']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkRadioButton);
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
        defineCustomElementFn: defineCustomElement$s,
        inputs: ['direction', 'error', 'helper', 'isRequired', 'label', 'optionalText'],
        methods: ['setValidation']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkRadioGroup);
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
        defineCustomElementFn: defineCustomElement$t,
        inputs: ['bottomValue', 'errorMessage', 'helper', 'label', 'maxValue', 'minValue', 'showInput', 'showValues', 'sliderId', 'sliderType', 'step', 'value'],
        methods: ['showFromValue', 'showToValue', 'getDragValue']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkRangeSlider);
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
        defineCustomElementFn: defineCustomElement$u,
        inputs: ['error', 'helper', 'isDisabled', 'isRequired', 'label', 'placeholder', 'selectId', 'selectName', 'value']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkSelect);
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
        defineCustomElementFn: defineCustomElement$v,
        inputs: ['dashboard', 'isVisible', 'multipage'],
        methods: ['open', 'close', 'nextPage']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkSheet);
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
        defineCustomElementFn: defineCustomElement$w,
        inputs: ['size']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkSpacer);
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
        defineCustomElementFn: defineCustomElement$x,
        inputs: ['alignItems', 'col', 'direction', 'gap', 'justifyContent', 'wrap']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkStack);
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
        defineCustomElementFn: defineCustomElement$y,
        inputs: ['appearance']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkTabs);
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
        defineCustomElementFn: defineCustomElement$z,
        inputs: ['autocomplete', 'enterkeyhintOption', 'error', 'helper', 'isDisabled', 'isRequired', 'label', 'maxlength', 'minlength', 'name', 'placeholder', 'rows', 'textareaId']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkTextarea);
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
        defineCustomElementFn: defineCustomElement$A,
        inputs: ['htmlTag', 'noSeo', 'spacingY', 'text']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkTitle);
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
        defineCustomElementFn: defineCustomElement$B,
        inputs: ['appearance', 'currentTheme', 'duration', 'href', 'isOpen', 'linkText', 'target', 'text', 'theme']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkToast);
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
        defineCustomElementFn: defineCustomElement$C,
        methods: ['winkCreateToast']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkToaster);
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
        defineCustomElementFn: defineCustomElement$D,
        inputs: ['alignment', 'checked', 'disabled', 'label', 'toggleSwitchId', 'toggleSwitchName']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkToggleSwitch);
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
        defineCustomElementFn: defineCustomElement$E,
        inputs: ['message', 'type']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], WinkValidationMessage);
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

const DIRECTIVES = [
    WinkAccordion,
    WinkAnimation,
    WinkAvatar,
    WinkBadge,
    WinkButton,
    WinkCheckBox,
    WinkCheckBoxGroup,
    WinkColumnCount,
    WinkCustomerOrientation,
    WinkDropdownMenu,
    WinkFlyout,
    WinkFormLabel,
    WinkGlobalHeader,
    WinkIcon,
    WinkImg,
    WinkIndicator,
    WinkInput,
    WinkIntentBar,
    WinkLink,
    WinkLogo,
    WinkMainNavigation,
    WinkNavigationList,
    WinkNavigationListItem,
    WinkNotification,
    WinkParagraph,
    WinkPricing,
    WinkRadioButton,
    WinkRadioGroup,
    WinkRangeSlider,
    WinkSelect,
    WinkSheet,
    WinkSpacer,
    WinkStack,
    WinkTabs,
    WinkTextarea,
    WinkTitle,
    WinkToast,
    WinkToaster,
    WinkToggleSwitch,
    WinkValidationMessage
];

/**
 * Generated bundle index. Do not edit.
 */

export { DIRECTIVES, WinkAccordion, WinkAnimation, WinkAvatar, WinkBadge, WinkButton, WinkCheckBox, WinkCheckBoxGroup, WinkColumnCount, WinkCustomerOrientation, WinkDropdownMenu, WinkFlyout, WinkFormLabel, WinkGlobalHeader, WinkIcon, WinkImg, WinkIndicator, WinkInput, WinkIntentBar, WinkLink, WinkLogo, WinkMainNavigation, WinkNavigationList, WinkNavigationListItem, WinkNotification, WinkParagraph, WinkPricing, WinkRadioButton, WinkRadioGroup, WinkRangeSlider, WinkSelect, WinkSheet, WinkSpacer, WinkStack, WinkTabs, WinkTextarea, WinkTitle, WinkToast, WinkToaster, WinkToggleSwitch, WinkValidationMessage };
//# sourceMappingURL=telenet-wink-ng.mjs.map
