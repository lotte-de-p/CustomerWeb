import * as i0 from '@angular/core';
import { Injectable, Inject, Directive, Input, HostListener } from '@angular/core';
import * as udl from 'udl';
import { TransactionBuilder } from 'udl';
import { mergeMap, tap } from 'rxjs/operators';
import { timer, forkJoin } from 'rxjs';
import * as i1 from '@telenet/ng-lib-message';

class AnalyticsConstants {
    static ATTRIBUTE_STEP_ID = 'stepId';
    static ATTRIBUTES_INTENT = 'intent';
    static ATTRIBUTES_FLOW_TYPE = 'flowType';
    static INTENT_C5_CHECKOUT = 'C5 checkout';
    static INTENT_AEM_SALES_FLOW = 'AEM sales flow';
    static FLOW_TYPE_MARKETING = 'marketing';
    static FLOW_TYPE_CARE = 'care';
    static PRIMARY_CATEGORY_SALES = 'sales';
    static PRIMARY_CATEGORY_CARE = 'care';
    static LOGIN_PAGE_ID = 'checkout login page';
    static PRICE = 'price';
    static PRICE_EXCL_VAT = 'priceexclvat';
    static ITEM_DATA_EASYSWITCH_TRUE = 'Cancellation: Easy Switch';
    static ITEM_DATA_EASYSWITCH_FALSE = 'Cancellation: No Easy Switch';
    static ITEM_NAME_ADDRESS_SELECTION_OTHER = 'Installation address: different address';
    static ITEM_NAME_ADDRESS_SELECTION_CHANGED = 'Installation address changed';
    static ITEM_NAME_ADDRESS_SELECTION_POSTAL_CODE = 'Postal Code';
    static ITEM_NAME_EASYSWITCH_OPERATOR = 'Cancellation: Previous operator';
    static ITEM_NAME_INSTALLATION = 'Installation';
    static ITEM_NAME_CONNECTION_CABLE = 'Connection: Telenet cable';
    static ITEM_NAME_FIXED_TELEPHONY_CHANGED = 'Fixed telephony changed';
    static ITEM_NAME_WIFI_NETWORK_SETUP = 'wifi-network-setup';
    static INTENT_MOVE_FLOW = 'Move flow';
    static FLOW_TYPE_SELF_SERVICE = 'self-service';
    static ZENDESK_CHAT;
    static INTENT_CHANGE_MODEM_SETTINGS = 'change modem-settings';
    static INTENT_RESET_MODEM_SETTINGS = 'reset-modem-settings';
    static INTENT_REBOOT_MODEM = 'modem reboot';
    static INTENT_UNLOCK_SETTINGS = 'unlock settings';
    static INTENT_ACTIVATE_SIM = 'activate-sim';
    static STEP_ACTIVATE_SIM_OVERLAY = 'activate-sim-overlay';
    static CATEGORY_FLEET = 'fleet';
    static SUB_CATEGORY_SIM_CARD = 'sim-card';
    static EVENT_NAME_SIM_ACTIVATION_START = 'sim activation started';
    static EVENT_NAME_SIM_ACTIVATED = 'sim activated';
    static EVENT_TYPE_SELF_SERVICE_FLOW_START = 'self-service-flow-start';
    static EVENT_TYPE_SELF_SERVICE_FLOW_END = 'self-service-flow-end';
    static PRIMARY_CATEGORY_GENERAL = 'general';
}

var AttributeEnum;
(function (AttributeEnum) {
    AttributeEnum["KEY_ITEM_DATA"] = "itemData";
    AttributeEnum["KEY_ITEM_NAME"] = "itemName";
    AttributeEnum["KEY_ITEM_GROUP"] = "itemGroup";
    AttributeEnum["KEY_DESTINATION_URL"] = "destinationURL";
    AttributeEnum["KEY_PEGA_OUTCOME"] = "pega_outcome";
    AttributeEnum["KEY_APPEND_STEP_ID"] = "appendStepId";
})(AttributeEnum || (AttributeEnum = {}));

var DatalayerEventNames;
(function (DatalayerEventNames) {
    DatalayerEventNames["MOVE_FLOW_STARTED"] = "move-flow started";
    DatalayerEventNames["MOVE_FLOW_COMPLETED"] = "move-flow completed";
    DatalayerEventNames["OPTION_SELECTED"] = "option selected";
    DatalayerEventNames["OPTION_CHOSEN"] = "option chosen";
    DatalayerEventNames["LINK_CLICKED"] = "link clicked";
    DatalayerEventNames["BUTTON_CLICKED"] = "button clicked";
    DatalayerEventNames["CTA_BUTTON_CLICKED"] = "cta-button clicked";
    DatalayerEventNames["CHAT_REQUESTED"] = "chat requested";
    DatalayerEventNames["CHAT_WAITING"] = "chat waiting";
    DatalayerEventNames["CHAT_STARTED"] = "chat started";
    DatalayerEventNames["CHAT_ENDED"] = "chat ended";
    DatalayerEventNames["CONTACT_OPTIONS_POPUP_VIEW"] = "contact options popup view";
    DatalayerEventNames["CONTACT_OPTIONS_POPUP_CLICK"] = "contact options popup click";
    DatalayerEventNames["CONTACT_OPTION_VIEW"] = "contact option view";
    DatalayerEventNames["CONTACT_OPTION_CLICK"] = "contact option click";
    DatalayerEventNames["SELF_INSTALL_OPTION_VIEWED"] = "self-install option viewed";
    DatalayerEventNames["FORM_FIELD_COMPLETED"] = "form field completed";
    DatalayerEventNames["MOBILE_NUMBERS_ADDED"] = "mobile numbers added";
})(DatalayerEventNames || (DatalayerEventNames = {}));

var EventNameEnum;
(function (EventNameEnum) {
    EventNameEnum["EVENT_NAME_VIEW_PRODUCT_DETAILS"] = "product details viewed";
    EventNameEnum["EVENT_NAME_SELECT_NEW_PRODUCT"] = "new product selected";
    EventNameEnum["EVENT_NAME_VIEW_PRODUCT_HOLDING"] = "product holdings viewed";
    EventNameEnum["EVENT_NAME_SELECT_OWN_PRODUCT"] = "owned product selected";
    EventNameEnum["EVENT_NAME_START_SALES_FLOW"] = "sales flow started";
    EventNameEnum["EVENT_NAME_END_SALES_FLOW"] = "sales flow ended";
    EventNameEnum["EVENT_NAME_SUBMIT_ORDER"] = "order submitted";
    EventNameEnum["EVENT_NAME_VIEW_PAGE"] = "pageview";
    EventNameEnum["EVENT_NAME_VIEW_STEP"] = "step viewed";
    EventNameEnum["EVENT_NAME_SELECT_NEW_LINE"] = "new line selected";
    EventNameEnum["EVENT_NAME_SELECT_NEW_OPTION"] = "new option selected";
    EventNameEnum["EVENT_NAME_REMOVE_OPTION"] = "option removed";
    EventNameEnum["EVENT_NAME_REMOVE_MUTUALLY_EXCLUSIVE_OPTION"] = "mutually exclusive option removed";
    EventNameEnum["EVENT_NAME_ERROR_OCCURRED"] = "error occurred";
    EventNameEnum["EVENT_NAME_CHECK_ELIGIBILITY"] = "eligibility checked";
    EventNameEnum["EVENT_NAME_OUT_OF_BUNDLE_CONSULTED"] = "out of bundle usage consulted";
    EventNameEnum["EVENT_NAME_BUTTON_CLICKED"] = "button clicked";
    EventNameEnum["EVENT_NAME_CONTRACT_SUMMARY_CLICKED"] = "contract summary link clicked";
    EventNameEnum["EVENT_NAME_STEP_LOAD_TIME"] = "step load time";
    EventNameEnum["EVENT_NAME_CART_OPENED"] = "cart opened";
    EventNameEnum["EVENT_NAME_PRODUCT_REMOVED"] = "product removed";
    EventNameEnum["EVENT_NAME_PRODUCT_ADDED"] = "product added";
    EventNameEnum["EVENT_NAME_SALES_FLOW_STARTED"] = "sales flow started";
    EventNameEnum["EVENT_NAME_CONTACT_DETAILS_CHANGED"] = "contact details changed";
    EventNameEnum["EVENT_NAME_ADDRESS_DETAILS_CHANGED"] = "address details changed";
    EventNameEnum["EVENT_NAME_ORDER_SUBMITTED"] = "order submitted";
    EventNameEnum["EVENT_NAME_SAVE_ORDER_CLICKED"] = "save order link clicked";
    EventNameEnum["EVENT_NAME_MOBILE_USAGE_LIMITS_CHANGED"] = "mobile usage limits changed";
    EventNameEnum["EVENT_NAME_RESCHEDULE_APPOINTMENT_FLOW_STARTED"] = "reschedule appointment flow started";
    EventNameEnum["EVENT_NAME_RESCHEDULE_APPOINTMENT_FLOW_COMPLETED"] = "reschedule appointment flow completed";
    EventNameEnum["EVENT_NAME_CANCEL_APPOINTMENT"] = "cancel appointment";
    EventNameEnum["EVENT_NAME_APPOINTMENT_OPTION_SELECTED"] = "option selected";
    EventNameEnum["EVENT_NAME_LINK_CLICKED"] = "link clicked";
    EventNameEnum["EVENT_NAME_LOGIN"] = "redirected to login";
    EventNameEnum["EVENT_NAME_REGISTER"] = "redirected to registration";
    EventNameEnum["EVENT_NAME_MOBILE_USAGE"] = "mobile usage";
    EventNameEnum["EVENT_NAME_EXISTING_ADDRESS_SELECTED"] = "existing address selected";
    EventNameEnum["EVENT_NAME_NEW_ADDRESS_OPTION_SELECTED"] = "new address option selected";
    EventNameEnum["EVENT_NAME_NEW_ADDRESS_SELECTED"] = "new address saved";
    EventNameEnum["EVENT_NAME_NEW_ADDRESS_CANCELED"] = "new address canceled";
    EventNameEnum["EVENT_NAME_CONTINUE_BUTTON_CLICKED"] = "continue button clicked";
    EventNameEnum["EVENT_NAME_NAVIGATED_TO_NEXT_STEP"] = "navigated to next step";
    EventNameEnum["EVENT_NAME_VIEW_INSTALLATION_TYPE"] = "installation type viewed";
    EventNameEnum["EVENT_INSTALLATION_TYPE_SELECTED"] = "installation type selected";
    EventNameEnum["EVENT_NAME_CHEVRON_FEATUE_LINK_CLICKED"] = "featured included link clicked";
    EventNameEnum["EVENT_NAME_MOBILE_USAGE_PAUSED"] = "mobile usage paused";
    EventNameEnum["EVENT_NAME_MOBILE_USAGE_UNPAUSED"] = "mobile usage unpaused";
    EventNameEnum["EVENT_NAME_EASY_SWITCH_OPTION_SELECTED"] = "easy switch option selected";
    EventNameEnum["EVENT_NAME_MULTIPLE_OPERATOR_CHOICE_SELECTED"] = "multiple operator choice selected";
    EventNameEnum["EVENT_NAME_I_WILL_DO_IT_LATER_SELECTED"] = "I will do it later option selected for product";
    EventNameEnum["EVENT_NAME_EASY_SWITCH_SELECTED"] = "easy switch option selected for product";
    EventNameEnum["EVENT_NAME_CURRENT_PROVIDER_CLICKED"] = "current provider option clicked";
    EventNameEnum["EVENT_NAME_CURRENT_PROVIDER_SELECTED"] = "current provider selected";
    EventNameEnum["EVENT_NAME_APPOINTMENT_BY_DATE_OPTION_SELECTED"] = "appointment by date option selected";
    EventNameEnum["EVENT_NAME_APPOINTMENT_BY_TIME_OPTION_SELECTED"] = "appointment by time option selected";
    EventNameEnum["EVENT_NAME_OTHER_TIME_SLOTS_LOADED"] = "other time slots loaded";
    EventNameEnum["EVENT_NAME_EARLIEST_AVAILABLE_APPOINTMENT"] = "earliest available appointment";
    EventNameEnum["EVENT_NAME_CHANGE_ADDRESS_OPTION_SELECTED"] = "change address option selected";
    EventNameEnum["EVENT_NAME_CHANGE_ADDRESS_CANCELLED"] = "change address cancelled";
    EventNameEnum["EVENT_NAME_CHANGE_ADDRESS_SAVED"] = "change address saved";
    EventNameEnum["EVENT_NAME_PHONE_NUMBER_UPDATED"] = "phone number updated";
    EventNameEnum["EVENT_NAME_GET_AVAILABLE_MOBILE_LINES"] = "available mobile lines";
    EventNameEnum["EVENT_NAME_MANAGE_TIP_STARTED"] = "manage-tip started";
    EventNameEnum["EVENT_NAME_MANAGE_TIP_COMPLETED"] = "manage-tip completed";
    EventNameEnum["EVENT_NAME_NEW_BUNDLE_LINE_CONFIGURATION_VIEWED"] = "new bundle line configuration viewed";
    EventNameEnum["EVENT_NAME_SIM_ACCORDION_EXPANDED"] = "sim accordion expanded";
    EventNameEnum["EVENT_NAME_SIM_CONFIGURATION_SELECTED"] = "sim configuration selected";
    EventNameEnum["EVENT_NAME_SIM_CONFIGURATION_SAVED"] = "sim configuration saved";
    EventNameEnum["EVENT_NAME_MOBILE_LINES_TO_TERMINATE"] = "mobile lines to terminate";
    EventNameEnum["EVENT_NAME_EDIT_LINK_CLICKED"] = "sim configuration edit";
    EventNameEnum["EVENT_NAME_FIXED_LINE_SELECTED"] = "fixed line selected";
    EventNameEnum["EVENT_NAME_STANDALONE_CONFIGURATION_SELECTED"] = "standalone configuration selected";
    EventNameEnum["EVENT_NAME_BILLING_ADDRESS_LINK_CLICKED"] = "change billing address link  clicked";
    EventNameEnum["EVENT_NAME_INSTALLATION_ADDRESS"] = "change installation address link clicked";
    EventNameEnum["EVENT_NAME_INSTALLATION_TYPE"] = "change installation type link clicked";
    EventNameEnum["EVENT_NAME_PERSONAL_DETAILS_LINK_CLICKED"] = "change personal detail link  clicked";
    EventNameEnum["EVENT_NAME_DEPRECIATION_TABLE"] = "show depreciation table for {{product}}";
    EventNameEnum["EVENT_NAME_COUPON_CODE_BUTTON_CLICKED"] = "coupon code button clicked";
    EventNameEnum["EVENT_NAME_COUPON_CODE_APPLIED_SUCCESSFULLY"] = "coupon code applied successfully";
    EventNameEnum["EVENT_NAME_ORDER_BUTTON_CLICKED"] = "order button clicked";
    EventNameEnum["EVENT_NAME_SAVE_ORDER_BUTTON_CLICKED"] = "save order button clicked";
    EventNameEnum["EVENT_NAME_SUBMIT_ORDER_BUTTON_CLICKED"] = "submit order button clicked";
    EventNameEnum["EVENT_NAME_REDIRECTED_TO_PAYMENT_GATEWAY"] = "redirected to payment gateway";
    EventNameEnum["EVENT_NAME_PAYMENT_INITIATED"] = "payment initiated";
    EventNameEnum["EVENT_NAME_COUPON_CODE_REMOVED"] = "coupon code removed";
    EventNameEnum["EVENT_NAME_TERMS_CONDITION_CLICKED"] = "Terms and Conditions link clicked";
    EventNameEnum["EVENT_NAME_TERMINATE_EXISTING_CONTRACT_SELECTED"] = "terminate existing contract selected";
    EventNameEnum["EVENT_NAME_APPLY_BUTTON_CLICKED"] = "apply button clicked";
    EventNameEnum["EVENT_NAME_CANCEL_BUTTON_CLICKED"] = "cancel button clicked";
    EventNameEnum["EVENT_NAME_PRODUCT_CANCELLED"] = "product cancelled";
    EventNameEnum["EVENT_NAME_ENABLE_DISCOUNT_LINK_CLICKED"] = "enable discount link clicked";
    EventNameEnum["EVENT_NAME_NEW_OPERATOR_INSTALLATION_ADDRESS_SELECTED"] = "new operator installation address selected";
    EventNameEnum["EVENT_NAME_APPLY_MOVE_BUTTON_CLICKED"] = "apply for move button clicked";
    EventNameEnum["EVENT_NAME_MOVE_SAVE_BUTTON_CLICKED"] = "move address saved";
    EventNameEnum["EVENT_NAME_MOVE_ZIP_CODE"] = "zip code for move address selected";
    EventNameEnum["EVENT_NAME_INSTALLATION_TYPE_CLICKED"] = "installation type clicked";
    EventNameEnum["EVENT_NAME_DELIVERY_ADDRESS_UPDATED"] = "delivery address updated";
    EventNameEnum["EVENT_NAME_CONTACT_UPDATED"] = "contact updated";
    EventNameEnum["EVENT_NAME_CANCEL_SIM_CONFIGURATION_CLICKED"] = "sim configuration cancelled";
    EventNameEnum["EVENT_NAME_RESTRICTED_PRODUCT_DISCLAIMER_SHOWN"] = "restricted product disclaimer shown";
    EventNameEnum["EVENT_NAME_BILLING_ADDRESS_NOT_UPDATED"] = "billing address is not changed";
    EventNameEnum["EVENT_NAME_BILLING_ADDRESS_UPDATED"] = "biling address updated";
    EventNameEnum["EVENT_NAME_PERSONAL_INFO_NOT_CHANGED"] = "personal info is not changed";
    EventNameEnum["EVENT_NAME_PERSONAL_INFO_UPDATED"] = "personal info is updated";
    EventNameEnum["EVENT_NAME_REDIRECTED_TO_INSTALLATION_LOCATION_STEP"] = "redirected to installation location step";
    EventNameEnum["EVENT_NAME_INSTALLATION_ADDRESS_NOT_CHANGED"] = "installation address not changed";
    EventNameEnum["EVENT_NAME_INSTALLATION_TYPE_NOT_CHANGED"] = "installation type not changed";
    EventNameEnum["EVENT_NAME_REDIRECTED_TO_RESERVE_APPOINTMENT_STEP"] = "redirected to reserve appointment step";
    EventNameEnum["EVENT_NAME_REDIRECTED_TO_INSTALLATION_TPE_STEP"] = "redirected to installation type step";
    EventNameEnum["EVENT_NAME_APPLY_COUPON_CODE_FAILED"] = "apply coupon failed";
    EventNameEnum["EVENT_NAME_CHANGE_SHIPPING_ADDRESS_LINK_CLICKED"] = "change shipping address link clicked";
    EventNameEnum["EVENT_NAME_SHIPPING_ADDRESS_UPDATED"] = "shipping address is updated";
    EventNameEnum["EVENT_NAME_SHIPPING_ADDRESS_NOT_CHANGED"] = "shipping address not changed";
    EventNameEnum["EVENT_NAME_EASY_SWITCH_AVAILABLE_OPTION_SELECTED"] = "easyswitch available option clicked";
    EventNameEnum["EVENT_NAME_EASY_SWITCH_TV_OPTION"] = "tv option clicked";
    EventNameEnum["EVENT_NAME_EASY_SWITCH_TV_INTERNET_OPTION"] = "internet and tv option clicked";
    EventNameEnum["EVENT_NAME_START_DATE_OPTION"] = "start date option clicked";
    EventNameEnum["EVENT_NAME_START_DATE_OPTION_MESSAGE"] = "start date option message viewed";
    EventNameEnum["EVENT_NAME_CHANGE_LINE_SELECTED"] = "change line selected";
})(EventNameEnum || (EventNameEnum = {}));

var EventTypeEnum;
(function (EventTypeEnum) {
    EventTypeEnum["EVENT_TYPE_ERROR"] = "error";
    EventTypeEnum["EVENT_TYPE_CLICK"] = "click";
    EventTypeEnum["EVENT_TYPE_CLICK_CARD"] = "click-card";
    EventTypeEnum["EVENT_TYPE_SALES_FLOW_START"] = "sales-flow-start";
    EventTypeEnum["EVENT_TYPE_SALES_FLOW_END"] = "sales-flow-end";
    EventTypeEnum["EVENT_TYPE_SC_ADD"] = "sc-add";
    EventTypeEnum["EVENT_TYPE_SC_OPEN"] = "sc-open";
    EventTypeEnum["EVENT_TYPE_SC_REMOVE"] = "sc-remove";
    EventTypeEnum["EVENT_TYPE_SC_CANCEL"] = "sc-cancel";
    EventTypeEnum["EVENT_TYPE_SC_ADD_ERROR"] = "sc-add + error";
    EventTypeEnum["EVENT_TYPE_SC_REMOVE_ERROR"] = "sc-remove + error";
    EventTypeEnum["EVENT_TYPE_VIEW_PRODUCT_DETAILS"] = "view-product-details";
    EventTypeEnum["EVENT_TYPE_VIEW_MOBILE_USAGE"] = "view-mobile-usage";
    EventTypeEnum["EVENT_TYPE_STEP_LOAD_TIME"] = "step-load-time";
    EventTypeEnum["EVENT_TYPE_ONSITE_SEARCH_CLICK"] = "on-site-search-click";
    EventTypeEnum["EVENT_TYPE_ONSITE_SEARCH"] = "on-site-search";
    EventTypeEnum["EVENT_TYPE_IMPRESSION"] = "impression";
    EventTypeEnum["EVENT_TYPE_BUTTON_CLICK"] = "button-click";
    EventTypeEnum["EVENT_TYPE_CH_STORE"] = "context-hub-store";
    EventTypeEnum["EVENT_TYPE_SELF_SERVICE_FLOW_STARTED"] = "self-service-flow-start";
    EventTypeEnum["EVENT_TYPE_SELF_SERVICE_FLOW_END"] = "self-service-flow-end";
    EventTypeEnum["EVENT_TYPE_VIEW_BANNER"] = "view-banner";
    EventTypeEnum["EVENT_TYPE_VIEWED_PAGE"] = "viewed-page";
    EventTypeEnum["EVENT_TYPE_BILLING_INFO"] = "change-billing-info";
    EventTypeEnum["EVENT_TYPE_INSTALLATION_ADDRESS"] = "change-installation-address";
    EventTypeEnum["EVENT_TYPE_INFO_CARD"] = "change-installation-type-info-card";
    EventTypeEnum["EVENT_TYPE_PERSONAL_INFO"] = "change-personal-info";
    EventTypeEnum["EVENT_TYPE_PRE_ORDER"] = "pre-order";
    EventTypeEnum["EVENT_TYPE_PURCHASE"] = "purchase";
})(EventTypeEnum || (EventTypeEnum = {}));

var EventStatusEnum;
(function (EventStatusEnum) {
    EventStatusEnum["EVENT_STATUS_FAILED"] = "failed";
    EventStatusEnum["EVENT_STATUS_SUCCESS"] = "success";
    EventStatusEnum["EVENT_STATUS_MESSAGE_EMPTY"] = "";
})(EventStatusEnum || (EventStatusEnum = {}));

var EventTypes;
(function (EventTypes) {
    EventTypes["SELF_SERVICE_FLOW_STARTED"] = "self-service-flow-start";
    EventTypes["SELF_SERVICE_FLOW_END"] = "self-service-flow-end";
    EventTypes["OPTION_CLICK"] = "option-click";
    EventTypes["LINK_CLICK"] = "link-click";
    EventTypes["CHAT_REQUEST"] = "chat-request";
    EventTypes["CHAT_WAIT"] = "chat-wait";
    EventTypes["CHAT_START"] = "chat-start";
    EventTypes["CHAT_END"] = "chat-end";
    EventTypes["CONTACT_OPTIONS_POPUP_VIEW"] = "pop-up-view";
    EventTypes["CONTACT_OPTIONS_POPUP_CLICK"] = "pop-up-click";
    EventTypes["CONTACT_OPTION_VIEW"] = "contact-option-view";
    EventTypes["CONTACT_OPTION_CLICK"] = "button-click";
    EventTypes["SELF_INSTALL_VIEW"] = "view-notification";
    EventTypes["CLICK"] = "click";
})(EventTypes || (EventTypes = {}));

var EventCategoryEnum;
(function (EventCategoryEnum) {
    EventCategoryEnum["PRIMARY_CATEGORY_SALES"] = "sales";
    EventCategoryEnum["PRIMARY_CATEGORY_CARE"] = "care";
    EventCategoryEnum["PRIMARY_CATEGORY_GENERAL"] = "general";
    EventCategoryEnum["PRIMARY_CATEGORY_TIP"] = "tip";
    EventCategoryEnum["PRIMARY_CATEGORY_CONTAINER"] = "container";
    EventCategoryEnum["SUBCATEGORY_PRODUCT_HOLDING"] = "product holding";
    EventCategoryEnum["SUBCATEGORY_CONTACT"] = "contact";
    EventCategoryEnum["SUBCATEGORY_EMPTY"] = "";
    EventCategoryEnum["SUBCATEGORY_HOMENETWORK"] = "home-network";
})(EventCategoryEnum || (EventCategoryEnum = {}));

class DataLayerService {
    messageService;
    window;
    dataLayer;
    constructor(messageService, window) {
        this.messageService = messageService;
        this.window = window;
    }
    init() {
        const udlObjectName = this.window['udlObjectName'];
        this.dataLayer = udl.DataLayer.create();
        if (this.window[udlObjectName] && udlObjectName) {
            let componentList = this.dataLayer.getComponents();
            if (componentList && componentList.length > 0) {
                componentList = componentList.map(function (componentItem) {
                    return new udl.Component(componentItem);
                });
            }
            this.dataLayer.setComponents(componentList);
        }
        return true;
    }
    getDataLayer() {
        return this.dataLayer;
    }
    setPage(page) {
        if (this.dataLayer) {
            return this.dataLayer.setPage(page);
        }
        return new Promise(() => false);
    }
    getCategory(componentInstanceId) {
        if (this.dataLayer) {
            return this.dataLayer.getCategory(componentInstanceId);
        }
        return null;
    }
    createCategory(primaryCategory = '', subCategory1) {
        const category = new udl.Category();
        category.setPrimaryCategory(primaryCategory);
        if (subCategory1) {
            category.setSubCategory1(subCategory1);
        }
        return category;
    }
    addPageEvent(pageId, attributes) {
        const pageInfoObject = new udl.PageInfo();
        pageInfoObject.setPageID(pageId);
        pageInfoObject.setPageName(pageId);
        pageInfoObject.setLanguage(this.dataLayer.getPage().getPageInfo().getLanguage());
        const page = new udl.Page({ pageInfo: pageInfoObject });
        if (attributes) {
            Object.keys(attributes).forEach((key) => page.addAttribute(key, attributes[key]));
        }
        this.setPage(page).then();
    }
    addStepViewEvent(attributes) {
        const event = new udl.Event();
        const eventInfo = this.createEventInfo(EventNameEnum.EVENT_NAME_VIEW_STEP);
        event.setEventInfo(eventInfo);
        event.setAttributes(attributes);
        if (this.dataLayer) {
            return this.dataLayer.addStepViewEvent(event);
        }
        return new Promise(() => false);
    }
    createEvent(eventProperties) {
        const { eventInfo, attributes, strategy, category, directCallLabel } = eventProperties;
        const event = new udl.Event();
        event.setEventInfo(eventInfo);
        event.setAttributes(attributes);
        if (strategy) {
            event.setStrategy(strategy);
        }
        if (category) {
            event.setCategory(category);
        }
        if (directCallLabel) {
            event.setDirectCallLabel(directCallLabel);
        }
        return event;
    }
    sendEvent(eventProperties) {
        const event = this.createEvent(eventProperties);
        if (this.dataLayer) {
            return this.dataLayer.addEvent(event);
        }
        return new Promise(() => false);
    }
    addEvent(eventInfo, attributes, category, directCallLabel) {
        const event = new udl.Event();
        event.setEventInfo(eventInfo);
        event.setAttributes(attributes);
        if (category) {
            event.setCategory(category);
        }
        if (directCallLabel) {
            event.setDirectCallLabel(directCallLabel);
        }
        if (this.dataLayer) {
            return this.dataLayer.addEvent(event);
        }
        return new Promise(() => false);
    }
    addStepLoadTimeEvent(attributes) {
        const eventInfo = this.createEventInfo(EventNameEnum.EVENT_NAME_STEP_LOAD_TIME, EventTypeEnum.EVENT_TYPE_STEP_LOAD_TIME);
        return this.addEvent(eventInfo, attributes);
    }
    setCart(cart) {
        if (this.dataLayer) {
            return this.dataLayer.setCart(cart);
        }
        return new Promise(() => false);
    }
    getCart() {
        if (this.dataLayer) {
            return this.dataLayer.getCart();
        }
        return null;
    }
    createEventInfo(eventName, eventType, messageGroups) {
        const eventInfo = new udl.EventInfo();
        eventInfo.setEventName(eventName);
        eventInfo.setType(eventType ?? '');
        eventInfo.setEventStatus(this.getStatus(messageGroups?.length ? messageGroups : []));
        eventInfo.setEventStatusMessage(this.getStatusMessage(messageGroups?.length ? messageGroups : []));
        return eventInfo;
    }
    createCart(cartId, price) {
        const cart = new udl.Cart();
        cart.setCartID(cartId);
        cart.setPrice(price ?? new udl.Price());
        return cart;
    }
    createTransaction(transactionId, price) {
        const transaction = new udl.Transaction();
        transaction.setTransactionID(transactionId);
        transaction.setPrice(price);
        return transaction;
    }
    setTransaction(transaction) {
        if (this.dataLayer) {
            return this.dataLayer.setTransaction(transaction);
        }
        return new Promise(() => false);
    }
    createPrice(oneTimePrice, recurringPrice, basePrice, totalPrice, discountedPrice) {
        const price = new udl.Price();
        price.setOnetimePrice(oneTimePrice ?? 0);
        price.setRecurringPrice(recurringPrice ?? 0);
        price.setBasePrice(basePrice ?? new udl.Price());
        price.setTotalPrice(totalPrice ?? new udl.Price());
        price.setDiscountedPrice(discountedPrice ?? new udl.Price());
        return price;
    }
    createProductInfo(productId, productName, productType, productStatus) {
        const product = new udl.Product();
        product.setProductID(productId);
        product.setProductName(productName ?? '');
        product.setProductType(productType ?? '');
        product.setProductStatus(productStatus ?? '');
        return product;
    }
    createItem(productInfo, price, quantity) {
        const item = new udl.Item();
        item.setProductInfo(productInfo);
        item.setPrice(price ?? new udl.Price());
        item.setQuantity(quantity ?? 0);
        return item;
    }
    getStatus(messageGroups) {
        if (messageGroups?.length) {
            for (const messageGroup of messageGroups) {
                if (this.messageService.hasErrorMessages(messageGroup)) {
                    return EventStatusEnum.EVENT_STATUS_FAILED;
                }
            }
            return EventStatusEnum.EVENT_STATUS_SUCCESS;
        }
        return EventStatusEnum.EVENT_STATUS_MESSAGE_EMPTY;
    }
    getStatusMessage(messageGroups) {
        let statusMessages = '';
        let messagesFromMessageService = [];
        if (messageGroups?.length) {
            for (const messageGroup of messageGroups) {
                if (this.messageService.hasErrorMessages(messageGroup)) {
                    messagesFromMessageService = messagesFromMessageService.concat(this.messageService.getErrorMessages(messageGroup));
                }
            }
            messagesFromMessageService = messagesFromMessageService.filter((msg) => msg.type !== 'success');
            statusMessages = messagesFromMessageService.map((msg) => msg['_key']).join(',');
        }
        return statusMessages;
    }
    getAnalyticsPromises() {
        if (this.dataLayer) {
            return this.dataLayer.getAnalyticsPromises();
        }
        return [];
    }
    rollbackStepIdToParent(stepId) {
        timer(100)
            .pipe(mergeMap(() => {
            const analyticsPromises = this.getAnalyticsPromises();
            return forkJoin(analyticsPromises);
        }), tap(() => this.getDataLayer().getPage().getPageInfo().setStepId(stepId)))
            .subscribe();
    }
    static ɵfac = function DataLayerService_Factory(t) { return new (t || DataLayerService)(i0.ɵɵinject(i1.MessageService), i0.ɵɵinject('Window')); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DataLayerService, factory: DataLayerService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataLayerService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.MessageService }, { type: undefined, decorators: [{
                type: Inject,
                args: ['Window']
            }] }], null); })();

class DataLayerServiceProvider {
    dataLayerService;
    constructor(dataLayerService) {
        this.dataLayerService = dataLayerService;
    }
    init() {
        const timeout = 5000;
        const intervalTimer = 250;
        let numberOfRuns = 0;
        return new Promise((resolve, _) => {
            const interval = setInterval(() => {
                if (this.dataLayerService.init()) {
                    resolve(true);
                    clearInterval(interval);
                }
                else if (timeout <= intervalTimer * numberOfRuns) {
                    clearInterval(interval);
                }
                numberOfRuns++;
            }, 250);
        });
    }
    static ɵfac = function DataLayerServiceProvider_Factory(t) { return new (t || DataLayerServiceProvider)(i0.ɵɵinject(DataLayerService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DataLayerServiceProvider, factory: DataLayerServiceProvider.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataLayerServiceProvider, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: DataLayerService }], null); })();
function dataLayerServiceProviderFactory(dataLayerServiceProvider) {
    return () => dataLayerServiceProvider.init();
}

class AdobeAnalyticsDirective {
    dataLayerService;
    clickPushToAnalytics;
    onClick() {
        this.pushToAnalytics(this.clickPushToAnalytics.attributeName, this.clickPushToAnalytics.eventName, this.clickPushToAnalytics.messageGroupName);
    }
    constructor(dataLayerService) {
        this.dataLayerService = dataLayerService;
    }
    pushToAnalytics(attributeName, eventName, messageGroupName) {
        const eventInfo = this.dataLayerService.createEventInfo(eventName, EventTypes.CLICK, [messageGroupName]);
        const attributes = {
            itemName: attributeName,
        };
        this.addEventToDataLayer(eventInfo, attributes);
    }
    addEventToDataLayer(eventInfo, attributes) {
        const category = this.dataLayerService.createCategory(EventCategoryEnum.PRIMARY_CATEGORY_CARE, EventCategoryEnum.PRIMARY_CATEGORY_GENERAL);
        const enrichedAttributes = attributes || {};
        this.dataLayerService.addEvent(eventInfo, enrichedAttributes, category);
    }
    static ɵfac = function AdobeAnalyticsDirective_Factory(t) { return new (t || AdobeAnalyticsDirective)(i0.ɵɵdirectiveInject(DataLayerService)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: AdobeAnalyticsDirective, selectors: [["", "clickPushToAnalytics", ""]], hostBindings: function AdobeAnalyticsDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function AdobeAnalyticsDirective_click_HostBindingHandler() { return ctx.onClick(); });
        } }, inputs: { clickPushToAnalytics: "clickPushToAnalytics" }, standalone: true });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdobeAnalyticsDirective, [{
        type: Directive,
        args: [{
                selector: '[clickPushToAnalytics]',
                standalone: true,
            }]
    }], () => [{ type: DataLayerService }], { clickPushToAnalytics: [{
            type: Input
        }], onClick: [{
            type: HostListener,
            args: ['click']
        }] }); })();

class DataLayerTransactionBuilder extends TransactionBuilder {
    _dataLayerAttributes;
    _resolvePromiseAfterDelay = 0;
    withDataLayerAttributes(attributes) {
        this._dataLayerAttributes = attributes;
        return this;
    }
    withDataLayerForceResolvePromiseAfterDelay(timeoutInMS) {
        this._resolvePromiseAfterDelay = timeoutInMS;
        return this;
    }
    build() {
        const transaction = super.build();
        if (this._dataLayerAttributes) {
            transaction.setAttributes(this._dataLayerAttributes);
        }
        transaction.setForceResolvePromiseAfterDelay(this._resolvePromiseAfterDelay);
        return transaction;
    }
}

/**
 * Generated bundle index. Do not edit.
 */

export { AdobeAnalyticsDirective, AnalyticsConstants, AttributeEnum, DataLayerService, DataLayerServiceProvider, DataLayerTransactionBuilder, DatalayerEventNames, EventCategoryEnum, EventNameEnum, EventStatusEnum, EventTypeEnum, EventTypes, dataLayerServiceProviderFactory };
//# sourceMappingURL=telenet-ng-lib-datalayer.mjs.map
