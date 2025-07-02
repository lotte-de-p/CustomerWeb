/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import type { Components } from '@telenet/wink-core/components';

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
@ProxyCmp({
  defineCustomElementFn: defineWinkAccordion,
  inputs: ['heading', 'icon', 'isExpanded']
})
@Component({
  selector: 'wink-accordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['heading', 'icon', 'isExpanded'],
  standalone: true
})
export class WinkAccordion {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WinkAccordion extends Components.WinkAccordion {}


@ProxyCmp({
  defineCustomElementFn: defineWinkAnimation,
  inputs: ['autoplay', 'clickToPlay', 'controls', 'count', 'src'],
  methods: ['toggleAnimation']
})
@Component({
  selector: 'wink-animation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autoplay', 'clickToPlay', 'controls', 'count', 'src'],
  standalone: true
})
export class WinkAnimation {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WinkAnimation extends Components.WinkAnimation {}


@ProxyCmp({
  defineCustomElementFn: defineWinkAvatar,
  inputs: ['size', 'src']
})
@Component({
  selector: 'wink-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size', 'src'],
  standalone: true
})
export class WinkAvatar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WinkAvatar extends Components.WinkAvatar {}


@ProxyCmp({
  defineCustomElementFn: defineWinkBadge,
  inputs: ['background', 'size', 'text']
})
@Component({
  selector: 'wink-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['background', 'size', 'text'],
  standalone: true
})
export class WinkBadge {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WinkBadge extends Components.WinkBadge {}


@ProxyCmp({
  defineCustomElementFn: defineWinkButton,
  inputs: ['appearance', 'element', 'href', 'icon', 'iconButtonAriaLabel', 'iconPosition', 'loadingText', 'size', 'status', 'target', 'text', 'type', 'width']
})
@Component({
  selector: 'wink-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['appearance', 'element', 'href', 'icon', 'iconButtonAriaLabel', 'iconPosition', 'loadingText', 'size', 'status', 'target', 'text', 'type', 'width'],
  standalone: true
})
export class WinkButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WinkButton extends Components.WinkButton {}


@ProxyCmp({
  defineCustomElementFn: defineWinkCheckBox,
  inputs: ['checkboxId', 'checked', 'disabled', 'error', 'helper', 'label', 'name']
})
@Component({
  selector: 'wink-check-box',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checkboxId', 'checked', 'disabled', 'error', 'helper', 'label', 'name'],
  standalone: true
})
export class WinkCheckBox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WinkCheckBox extends Components.WinkCheckBox {}


@ProxyCmp({
  defineCustomElementFn: defineWinkCheckBoxGroup,
  inputs: ['direction', 'error', 'helper', 'isRequired', 'label', 'optionalText'],
  methods: ['setValidation']
})
@Component({
  selector: 'wink-check-box-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['direction', 'error', 'helper', 'isRequired', 'label', 'optionalText'],
  standalone: true
})
export class WinkCheckBoxGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WinkCheckBoxGroup extends Components.WinkCheckBoxGroup {}


@ProxyCmp({
  defineCustomElementFn: defineWinkColumnCount,
  inputs: ['colsCount']
})
@Component({
  selector: 'wink-column-count',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['colsCount'],
  standalone: true
})
export class WinkColumnCount {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WinkColumnCount extends Components.WinkColumnCount {}


@ProxyCmp({
  defineCustomElementFn: defineWinkCustomerOrientation
})
@Component({
  selector: 'wink-customer-orientation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: true
})
export class WinkCustomerOrientation {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WinkCustomerOrientation extends Components.WinkCustomerOrientation {}


@ProxyCmp({
  defineCustomElementFn: defineWinkDropdownMenu,
  inputs: ['dropdownTabIndex', 'heading', 'isExpanded', 'itemSelected']
})
@Component({
  selector: 'wink-dropdown-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['dropdownTabIndex', 'heading', 'isExpanded', 'itemSelected'],
  standalone: true
})
export class WinkDropdownMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WinkDropdownMenu extends Components.WinkDropdownMenu {}


@ProxyCmp({
  defineCustomElementFn: defineWinkFlyout,
  inputs: ['flyoutId']
})
@Component({
  selector: 'wink-flyout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['flyoutId'],
  standalone: true
})
export class WinkFlyout {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['flyoutBackLinkClicked']);
  }
}


export declare interface WinkFlyout extends Components.WinkFlyout {

  flyoutBackLinkClicked: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  defineCustomElementFn: defineWinkFormLabel,
  inputs: ['helper', 'helperId', 'isDisabled', 'label', 'labelId', 'optionalText', 'rendition', 'showOptional']
})
@Component({
  selector: 'wink-form-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['helper', 'helperId', 'isDisabled', 'label', 'labelId', 'optionalText', 'rendition', 'showOptional'],
  standalone: true
})
export class WinkFormLabel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WinkFormLabel extends Components.WinkFormLabel {}


@ProxyCmp({
  defineCustomElementFn: defineWinkGlobalHeader
})
@Component({
  selector: 'wink-global-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: true
})
export class WinkGlobalHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WinkGlobalHeader extends Components.WinkGlobalHeader {}


@ProxyCmp({
  defineCustomElementFn: defineWinkIcon,
  inputs: ['appearance', 'icon', 'size']
})
@Component({
  selector: 'wink-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['appearance', 'icon', 'size'],
  standalone: true
})
export class WinkIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WinkIcon extends Components.WinkIcon {}


@ProxyCmp({
  defineCustomElementFn: defineWinkImg,
  inputs: ['alt', 'loading', 'srcDesktop', 'srcMobile', 'srcTablet']
})
@Component({
  selector: 'wink-img',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alt', 'loading', 'srcDesktop', 'srcMobile', 'srcTablet'],
  standalone: true
})
export class WinkImg {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WinkImg extends Components.WinkImg {}


@ProxyCmp({
  defineCustomElementFn: defineWinkIndicator,
  inputs: ['direction', 'size']
})
@Component({
  selector: 'wink-indicator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['direction', 'size'],
  standalone: true
})
export class WinkIndicator {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WinkIndicator extends Components.WinkIndicator {}


@ProxyCmp({
  defineCustomElementFn: defineWinkInput,
  inputs: ['appearance', 'autocomplete', 'enterkeyhintOption', 'error', 'helper', 'iconLeft', 'iconRight', 'inputId', 'inputModeOption', 'isAutofocused', 'isDisabled', 'isReadonly', 'isRequired', 'label', 'maxValue', 'minValue', 'name', 'optionalText', 'placeholder', 'postfixValue', 'prefixValue', 'size', 'step', 'type', 'value'],
  methods: ['setValidation']
})
@Component({
  selector: 'wink-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['appearance', 'autocomplete', 'enterkeyhintOption', 'error', 'helper', 'iconLeft', 'iconRight', 'inputId', 'inputModeOption', 'isAutofocused', 'isDisabled', 'isReadonly', 'isRequired', 'label', 'maxValue', 'minValue', 'name', 'optionalText', 'placeholder', 'postfixValue', 'prefixValue', 'size', 'step', 'type', 'value'],
  standalone: true
})
export class WinkInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChanged']);
  }
}


export declare interface WinkInput extends Components.WinkInput {

  valueChanged: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  defineCustomElementFn: defineWinkIntentBar
})
@Component({
  selector: 'wink-intent-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: true
})
export class WinkIntentBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WinkIntentBar extends Components.WinkIntentBar {}


@ProxyCmp({
  defineCustomElementFn: defineWinkLink,
  inputs: ['appearance', 'href', 'icon', 'iconAppearance', 'iconPosition', 'isDisabled', 'size', 'target']
})
@Component({
  selector: 'wink-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['appearance', 'href', 'icon', 'iconAppearance', 'iconPosition', 'isDisabled', 'size', 'target'],
  standalone: true
})
export class WinkLink {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WinkLink extends Components.WinkLink {}


@ProxyCmp({
  defineCustomElementFn: defineWinkLogo,
  inputs: ['alt', 'appearance', 'href', 'target']
})
@Component({
  selector: 'wink-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alt', 'appearance', 'href', 'target'],
  standalone: true
})
export class WinkLogo {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WinkLogo extends Components.WinkLogo {}


@ProxyCmp({
  defineCustomElementFn: defineWinkMainNavigation,
  inputs: ['menuItems']
})
@Component({
  selector: 'wink-main-navigation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['menuItems'],
  standalone: true
})
export class WinkMainNavigation {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['mainNavigationItemClicked']);
  }
}


export declare interface WinkMainNavigation extends Components.WinkMainNavigation {

  mainNavigationItemClicked: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  defineCustomElementFn: defineWinkNavigationList,
  inputs: ['hasBoldLinks', 'listTitle']
})
@Component({
  selector: 'wink-navigation-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['hasBoldLinks', 'listTitle'],
  standalone: true
})
export class WinkNavigationList {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WinkNavigationList extends Components.WinkNavigationList {}


@ProxyCmp({
  defineCustomElementFn: defineWinkNavigationListItem,
  inputs: ['href', 'target']
})
@Component({
  selector: 'wink-navigation-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['href', 'target'],
  standalone: true
})
export class WinkNavigationListItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WinkNavigationListItem extends Components.WinkNavigationListItem {}


@ProxyCmp({
  defineCustomElementFn: defineWinkNotification,
  inputs: ['appearance', 'hasCloseIcon']
})
@Component({
  selector: 'wink-notification',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['appearance', 'hasCloseIcon'],
  standalone: true
})
export class WinkNotification {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WinkNotification extends Components.WinkNotification {}


@ProxyCmp({
  defineCustomElementFn: defineWinkParagraph,
  inputs: ['appearance', 'size']
})
@Component({
  selector: 'wink-paragraph',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['appearance', 'size'],
  standalone: true
})
export class WinkParagraph {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WinkParagraph extends Components.WinkParagraph {}


@ProxyCmp({
  defineCustomElementFn: defineWinkPricing,
  inputs: ['alignment', 'annotation', 'appearance', 'duration', 'frequency', 'price', 'priceStrikethrough', 'startingFrom']
})
@Component({
  selector: 'wink-pricing',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alignment', 'annotation', 'appearance', 'duration', 'frequency', 'price', 'priceStrikethrough', 'startingFrom'],
  standalone: true
})
export class WinkPricing {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WinkPricing extends Components.WinkPricing {}


@ProxyCmp({
  defineCustomElementFn: defineWinkRadioButton,
  inputs: ['checked', 'disabled', 'error', 'helper', 'label', 'name', 'radioButtonId']
})
@Component({
  selector: 'wink-radio-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'error', 'helper', 'label', 'name', 'radioButtonId'],
  standalone: true
})
export class WinkRadioButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WinkRadioButton extends Components.WinkRadioButton {}


@ProxyCmp({
  defineCustomElementFn: defineWinkRadioGroup,
  inputs: ['direction', 'error', 'helper', 'isRequired', 'label', 'optionalText'],
  methods: ['setValidation']
})
@Component({
  selector: 'wink-radio-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['direction', 'error', 'helper', 'isRequired', 'label', 'optionalText'],
  standalone: true
})
export class WinkRadioGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WinkRadioGroup extends Components.WinkRadioGroup {}


@ProxyCmp({
  defineCustomElementFn: defineWinkRangeSlider,
  inputs: ['bottomValue', 'errorMessage', 'helper', 'label', 'maxValue', 'minValue', 'showInput', 'showValues', 'sliderId', 'sliderType', 'step', 'value'],
  methods: ['showFromValue', 'showToValue', 'getDragValue']
})
@Component({
  selector: 'wink-range-slider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['bottomValue', 'errorMessage', 'helper', 'label', 'maxValue', 'minValue', 'showInput', 'showValues', 'sliderId', 'sliderType', 'step', 'value'],
  standalone: true
})
export class WinkRangeSlider {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WinkRangeSlider extends Components.WinkRangeSlider {}


@ProxyCmp({
  defineCustomElementFn: defineWinkSelect,
  inputs: ['error', 'helper', 'isDisabled', 'isRequired', 'label', 'placeholder', 'selectId', 'selectName', 'value']
})
@Component({
  selector: 'wink-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['error', 'helper', 'isDisabled', 'isRequired', 'label', 'placeholder', 'selectId', 'selectName', 'value'],
  standalone: true
})
export class WinkSelect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WinkSelect extends Components.WinkSelect {}


@ProxyCmp({
  defineCustomElementFn: defineWinkSheet,
  inputs: ['dashboard', 'isVisible', 'multipage'],
  methods: ['open', 'close', 'nextPage']
})
@Component({
  selector: 'wink-sheet',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['dashboard', 'isVisible', 'multipage'],
  standalone: true
})
export class WinkSheet {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WinkSheet extends Components.WinkSheet {}


@ProxyCmp({
  defineCustomElementFn: defineWinkSpacer,
  inputs: ['size']
})
@Component({
  selector: 'wink-spacer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
  standalone: true
})
export class WinkSpacer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WinkSpacer extends Components.WinkSpacer {}


@ProxyCmp({
  defineCustomElementFn: defineWinkStack,
  inputs: ['alignItems', 'col', 'direction', 'gap', 'justifyContent', 'wrap']
})
@Component({
  selector: 'wink-stack',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alignItems', 'col', 'direction', 'gap', 'justifyContent', 'wrap'],
  standalone: true
})
export class WinkStack {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WinkStack extends Components.WinkStack {}


@ProxyCmp({
  defineCustomElementFn: defineWinkTabs,
  inputs: ['appearance']
})
@Component({
  selector: 'wink-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['appearance'],
  standalone: true
})
export class WinkTabs {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WinkTabs extends Components.WinkTabs {}


@ProxyCmp({
  defineCustomElementFn: defineWinkTextarea,
  inputs: ['autocomplete', 'enterkeyhintOption', 'error', 'helper', 'isDisabled', 'isRequired', 'label', 'maxlength', 'minlength', 'name', 'placeholder', 'rows', 'textareaId']
})
@Component({
  selector: 'wink-textarea',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autocomplete', 'enterkeyhintOption', 'error', 'helper', 'isDisabled', 'isRequired', 'label', 'maxlength', 'minlength', 'name', 'placeholder', 'rows', 'textareaId'],
  standalone: true
})
export class WinkTextarea {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WinkTextarea extends Components.WinkTextarea {}


@ProxyCmp({
  defineCustomElementFn: defineWinkTitle,
  inputs: ['htmlTag', 'noSeo', 'spacingY', 'text']
})
@Component({
  selector: 'wink-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['htmlTag', 'noSeo', 'spacingY', 'text'],
  standalone: true
})
export class WinkTitle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WinkTitle extends Components.WinkTitle {}


@ProxyCmp({
  defineCustomElementFn: defineWinkToast,
  inputs: ['appearance', 'currentTheme', 'duration', 'href', 'isOpen', 'linkText', 'target', 'text', 'theme']
})
@Component({
  selector: 'wink-toast',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['appearance', 'currentTheme', 'duration', 'href', 'isOpen', 'linkText', 'target', 'text', 'theme'],
  standalone: true
})
export class WinkToast {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WinkToast extends Components.WinkToast {}


@ProxyCmp({
  defineCustomElementFn: defineWinkToaster,
  methods: ['winkCreateToast']
})
@Component({
  selector: 'wink-toaster',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: true
})
export class WinkToaster {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WinkToaster extends Components.WinkToaster {}


@ProxyCmp({
  defineCustomElementFn: defineWinkToggleSwitch,
  inputs: ['alignment', 'checked', 'disabled', 'label', 'toggleSwitchId', 'toggleSwitchName']
})
@Component({
  selector: 'wink-toggle-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alignment', 'checked', 'disabled', 'label', 'toggleSwitchId', 'toggleSwitchName'],
  standalone: true
})
export class WinkToggleSwitch {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WinkToggleSwitch extends Components.WinkToggleSwitch {}


@ProxyCmp({
  defineCustomElementFn: defineWinkValidationMessage,
  inputs: ['message', 'type']
})
@Component({
  selector: 'wink-validation-message',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['message', 'type'],
  standalone: true
})
export class WinkValidationMessage {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface WinkValidationMessage extends Components.WinkValidationMessage {}


