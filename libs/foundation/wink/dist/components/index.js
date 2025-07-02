import { setMode } from '@stencil/core/internal/client';
export { getAssetPath, setAssetPath, setNonce, setPlatformOptions } from '@stencil/core/internal/client';
export { WinkAccordion, defineCustomElement as defineCustomElementWinkAccordion } from './wink-accordion.js';
export { WinkAnimation, defineCustomElement as defineCustomElementWinkAnimation } from './wink-animation.js';
export { WinkAvatar, defineCustomElement as defineCustomElementWinkAvatar } from './wink-avatar.js';
export { WinkBadge, defineCustomElement as defineCustomElementWinkBadge } from './wink-badge.js';
export { WinkButton, defineCustomElement as defineCustomElementWinkButton } from './wink-button.js';
export { WinkCheckBox, defineCustomElement as defineCustomElementWinkCheckBox } from './wink-check-box.js';
export { WinkCheckBoxGroup, defineCustomElement as defineCustomElementWinkCheckBoxGroup } from './wink-check-box-group.js';
export { WinkColumnCount, defineCustomElement as defineCustomElementWinkColumnCount } from './wink-column-count.js';
export { WinkCustomerOrientation, defineCustomElement as defineCustomElementWinkCustomerOrientation } from './wink-customer-orientation.js';
export { WinkDropdownMenu, defineCustomElement as defineCustomElementWinkDropdownMenu } from './wink-dropdown-menu.js';
export { WinkFlyout, defineCustomElement as defineCustomElementWinkFlyout } from './wink-flyout.js';
export { WinkFormLabel, defineCustomElement as defineCustomElementWinkFormLabel } from './wink-form-label.js';
export { WinkGlobalHeader, defineCustomElement as defineCustomElementWinkGlobalHeader } from './wink-global-header.js';
export { WinkIcon, defineCustomElement as defineCustomElementWinkIcon } from './wink-icon.js';
export { WinkImg, defineCustomElement as defineCustomElementWinkImg } from './wink-img.js';
export { WinkIndicator, defineCustomElement as defineCustomElementWinkIndicator } from './wink-indicator.js';
export { WinkInput, defineCustomElement as defineCustomElementWinkInput } from './wink-input.js';
export { WinkIntentBar, defineCustomElement as defineCustomElementWinkIntentBar } from './wink-intent-bar.js';
export { WinkLink, defineCustomElement as defineCustomElementWinkLink } from './wink-link.js';
export { WinkLogo, defineCustomElement as defineCustomElementWinkLogo } from './wink-logo.js';
export { WinkMainNavigation, defineCustomElement as defineCustomElementWinkMainNavigation } from './wink-main-navigation.js';
export { WinkNavigationList, defineCustomElement as defineCustomElementWinkNavigationList } from './wink-navigation-list.js';
export { WinkNavigationListItem, defineCustomElement as defineCustomElementWinkNavigationListItem } from './wink-navigation-list-item.js';
export { WinkNotification, defineCustomElement as defineCustomElementWinkNotification } from './wink-notification.js';
export { WinkParagraph, defineCustomElement as defineCustomElementWinkParagraph } from './wink-paragraph.js';
export { WinkPricing, defineCustomElement as defineCustomElementWinkPricing } from './wink-pricing.js';
export { WinkRadioButton, defineCustomElement as defineCustomElementWinkRadioButton } from './wink-radio-button.js';
export { WinkRadioGroup, defineCustomElement as defineCustomElementWinkRadioGroup } from './wink-radio-group.js';
export { WinkRangeSlider, defineCustomElement as defineCustomElementWinkRangeSlider } from './wink-range-slider.js';
export { WinkSelect, defineCustomElement as defineCustomElementWinkSelect } from './wink-select.js';
export { WinkSheet, defineCustomElement as defineCustomElementWinkSheet } from './wink-sheet.js';
export { WinkSpacer, defineCustomElement as defineCustomElementWinkSpacer } from './wink-spacer.js';
export { WinkStack, defineCustomElement as defineCustomElementWinkStack } from './wink-stack.js';
export { WinkTabs, defineCustomElement as defineCustomElementWinkTabs } from './wink-tabs.js';
export { WinkTextarea, defineCustomElement as defineCustomElementWinkTextarea } from './wink-textarea.js';
export { WinkTitle, defineCustomElement as defineCustomElementWinkTitle } from './wink-title.js';
export { WinkToast, defineCustomElement as defineCustomElementWinkToast } from './wink-toast.js';
export { WinkToaster, defineCustomElement as defineCustomElementWinkToaster } from './wink-toaster.js';
export { WinkToggleSwitch, defineCustomElement as defineCustomElementWinkToggleSwitch } from './wink-toggle-switch.js';
export { WinkValidationMessage, defineCustomElement as defineCustomElementWinkValidationMessage } from './wink-validation-message.js';

const BRANDS = ['telenet', 'base'];
const STORAGE_BRAND = localStorage.getItem('currentBrand') || 'telenet';
setMode((el) => {
    const comp_brand = el.getAttribute('brand') || STORAGE_BRAND;
    if (!BRANDS.includes(comp_brand)) {
        el.setAttribute('brand', STORAGE_BRAND);
    }
    el.setAttribute('brand', STORAGE_BRAND);
    return comp_brand;
});

//# sourceMappingURL=index.js.map