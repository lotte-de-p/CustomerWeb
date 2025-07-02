import * as i0 from '@angular/core';
import { Injectable, Component, Input, NgModule } from '@angular/core';
import * as i4 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from '@ngx-translate/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import * as i3 from '@telenet/ng-lib-shared';

var MessageType;
(function (MessageType) {
    MessageType["ERROR"] = "errorfield";
    MessageType["WARNING"] = "warning";
    MessageType["INFORMATION_WARNING"] = "information warning";
    MessageType["SUCCESS"] = "success";
    MessageType["INFO"] = "info";
    MessageType["ICON_ERROR"] = "error-shape";
    MessageType["ICON_WARNING"] = "alert-shape";
    MessageType["ICON_INFO"] = "information-shape";
    MessageType["ICON_SUCCESS"] = "check-shape";
})(MessageType || (MessageType = {}));

class MessageService {
    messages = {};
    addMessage(message) {
        if (!this.messages[message.messageGroupName]) {
            this.messages[message.messageGroupName] = {
                [message.type]: [],
            };
        }
        if (!this.messages[message.messageGroupName][message.type]) {
            this.messages[message.messageGroupName][message.type] = [];
        }
        this.messages[message.messageGroupName][message.type].push(message);
    }
    getErrorMessages(messageGroupName) {
        return this.getMessagesByType(messageGroupName, MessageType.ERROR);
    }
    getMessagesByGroupName(messageGroupName) {
        const messages = [];
        if (this.hasMessagesOfType(messageGroupName, MessageType.ERROR)) {
            messages.push(this.getMessagesByType(messageGroupName, MessageType.ERROR)[0]);
        }
        if (this.hasMessagesOfType(messageGroupName, MessageType.WARNING)) {
            messages.push(this.getMessagesByType(messageGroupName, MessageType.WARNING)[0]);
        }
        if (this.hasMessagesOfType(messageGroupName, MessageType.SUCCESS)) {
            messages.push(this.getMessagesByType(messageGroupName, MessageType.SUCCESS)[0]);
        }
        if (this.hasMessagesOfType(messageGroupName, MessageType.INFO)) {
            messages.push(this.getMessagesByType(messageGroupName, MessageType.INFO)[0]);
        }
        return messages;
    }
    getMessagesByType(messageGroupName, type) {
        const messagesByGroupName = this.messages[messageGroupName];
        if (!messagesByGroupName) {
            return [];
        }
        return messagesByGroupName[type];
    }
    clearErrorMessages(messageGroupName) {
        return this.clearMessagesByType(messageGroupName, MessageType.ERROR);
    }
    clearMessagesByType(messageGroupName, type) {
        if (!this.messages[messageGroupName]) {
            return;
        }
        this.messages[messageGroupName] = {
            [type]: [],
        };
    }
    hasErrorMessages(messageGroupName) {
        return this.hasMessagesOfType(messageGroupName, MessageType.ERROR);
    }
    hasMessagesOfType(messageGroupName, type) {
        return this.getMessagesByType(messageGroupName, type)?.filter((m) => m.type === type).length > 0;
    }
    clearMessages(messageGroupName) {
        if (!this.messages[messageGroupName]) {
            return;
        }
        this.messages[messageGroupName] = {};
    }
    getRegisteredGroupNames() {
        return Object.keys(this.messages);
    }
    static ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: MessageService, factory: MessageService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MessageService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

function MessageComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "span", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r4 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("notification notification--", message_r4.type, "");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("icon icon-", message_r4.subtype, " ", message_r4.type, "");
    i0.ɵɵproperty("innerHTML", ctx_r3.getTranslatedLabel(message_r4), i0.ɵɵsanitizeHtml);
} }
function MessageComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, MessageComponent_ng_container_0_div_1_Template, 2, 8, "div", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.getMessages());
} }
function MessageComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
const _c0$1 = ["*"];
class MessageComponent {
    messageService;
    translateService;
    domService;
    messageGroupName = '';
    scrollCheck = false;
    constructor(messageService, translateService, domService) {
        this.messageService = messageService;
        this.translateService = translateService;
        this.domService = domService;
    }
    getMessages() {
        const messages = this.messageService.getMessagesByGroupName(this.messageGroupName);
        if (messages.length > 0) {
            this.scrollToTop();
            return [messages[0]];
        }
        else {
            this.scrollCheck = false;
            return [];
        }
    }
    getTranslatedLabel(message) {
        const translatedLabel = this.translateService.instant(message.getMessageLabel(), message.interpolateParams);
        if (translatedLabel === '' || translatedLabel === message.getMessageLabel()) {
            return this.translateService.instant('ng.' + message.getMessageSuffix(), message.interpolateParams);
        }
        return translatedLabel;
    }
    scrollToTop() {
        if (!this.scrollCheck) {
            this.domService.scrollToTop();
            this.scrollCheck = true;
        }
    }
    static ɵfac = function MessageComponent_Factory(t) { return new (t || MessageComponent)(i0.ɵɵdirectiveInject(MessageService), i0.ɵɵdirectiveInject(i2.TranslateService), i0.ɵɵdirectiveInject(i3.DomService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MessageComponent, selectors: [["app-message"]], inputs: { messageGroupName: "messageGroupName" }, ngContentSelectors: _c0$1, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["noErrorTemplate", ""], [3, "class", 4, "ngFor", "ngForOf"], [3, "innerHTML"]], template: function MessageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, MessageComponent_ng_container_0_Template, 2, 1, "ng-container", 0)(1, MessageComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const _r2 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngIf", ctx.getMessages().length > 0)("ngIfElse", _r2);
        } }, dependencies: [i4.NgForOf, i4.NgIf], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MessageComponent, [{
        type: Component,
        args: [{ selector: 'app-message', template: "<ng-container *ngIf=\"getMessages().length > 0; else noErrorTemplate\">\n  <div *ngFor=\"let message of getMessages()\" class=\"notification notification--{{ message.type }}\">\n    <span class=\"icon icon-{{ message.subtype }} {{ message.type }}\" [innerHTML]=\"getTranslatedLabel(message)\"></span>\n  </div>\n</ng-container>\n<ng-template #noErrorTemplate>\n  <ng-content></ng-content>\n</ng-template>\n" }]
    }], () => [{ type: MessageService }, { type: i2.TranslateService }, { type: i3.DomService }], { messageGroupName: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MessageComponent, { className: "MessageComponent" }); })();

function MessageFlowComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "span")(2, "div", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r4 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate2("notification notification--", message_r4.type, " notification--", message_r4.type, "--flow");
    i0.ɵɵattribute("data-cy", "app-message-flow");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("icon-", message_r4.subtype, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", ctx_r3.getTranslatedLabel(message_r4), i0.ɵɵsanitizeHtml);
} }
function MessageFlowComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, MessageFlowComponent_ng_container_0_div_1_Template, 3, 9, "div", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.getMessages());
} }
function MessageFlowComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
const _c0 = ["*"];
class MessageFlowComponent extends MessageComponent {
    static ɵfac = /*@__PURE__*/ (() => { let ɵMessageFlowComponent_BaseFactory; return function MessageFlowComponent_Factory(t) { return (ɵMessageFlowComponent_BaseFactory || (ɵMessageFlowComponent_BaseFactory = i0.ɵɵgetInheritedFactory(MessageFlowComponent)))(t || MessageFlowComponent); }; })();
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MessageFlowComponent, selectors: [["app-message-flow"]], features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["noErrorTemplate", ""], [3, "class", 4, "ngFor", "ngForOf"], [3, "innerHTML"]], template: function MessageFlowComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, MessageFlowComponent_ng_container_0_Template, 2, 1, "ng-container", 0)(1, MessageFlowComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const _r2 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngIf", ctx.getMessages().length > 0)("ngIfElse", _r2);
        } }, dependencies: [i4.NgForOf, i4.NgIf], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MessageFlowComponent, [{
        type: Component,
        args: [{ selector: 'app-message-flow', template: "<ng-container *ngIf=\"getMessages().length > 0; else noErrorTemplate\">\n  <div\n    [attr.data-cy]=\"'app-message-flow'\"\n    *ngFor=\"let message of getMessages()\"\n    class=\"notification notification--{{ message.type }} notification--{{ message.type }}--flow\">\n    <span class=\"icon-{{ message.subtype }}\"></span>\n    <div [innerHTML]=\"getTranslatedLabel(message)\"></div>\n  </div>\n</ng-container>\n<ng-template #noErrorTemplate>\n  <ng-content></ng-content>\n</ng-template>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MessageFlowComponent, { className: "MessageFlowComponent" }); })();

class MessagesModule {
    static ɵfac = function MessagesModule_Factory(t) { return new (t || MessagesModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: MessagesModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [TranslateService], imports: [CommonModule, TranslateModule] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MessagesModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, TranslateModule],
                declarations: [MessageComponent, MessageFlowComponent],
                exports: [MessageComponent, MessageFlowComponent],
                providers: [TranslateService],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MessagesModule, { declarations: [MessageComponent, MessageFlowComponent], imports: [CommonModule, TranslateModule], exports: [MessageComponent, MessageFlowComponent] }); })();

class AbstractMessage {
    _messageGroupName;
    _key;
    _type;
    _subtype;
    _interpolateParams;
    constructor(type, messageGroupName, key, subtype, interpolateParams) {
        this._messageGroupName = messageGroupName;
        this._key = key;
        this._type = type;
        this._subtype = subtype;
        this._interpolateParams = interpolateParams;
    }
    get messageGroupName() {
        return this._messageGroupName;
    }
    get key() {
        return this._key;
    }
    get type() {
        return this._type;
    }
    get subtype() {
        return this._subtype;
    }
    get interpolateParams() {
        return this._interpolateParams;
    }
    getMessageLabel() {
        return 'ng.' + this.messageGroupName + '.' + this.getMessageSuffix();
    }
    getMessageSuffix() {
        return this.key + '-' + this.type;
    }
}

class ErrorFlowMessage extends AbstractMessage {
    constructor(messageGroupName, key) {
        super(MessageType.ERROR, messageGroupName, key, MessageType.ICON_ERROR);
    }
}

class ErrorMessage extends AbstractMessage {
    constructor(messageGroupName, key, interpolateParams) {
        super(MessageType.ERROR, messageGroupName, key, MessageType.ICON_ERROR, interpolateParams);
    }
}

class InfoFlowMessage extends AbstractMessage {
    constructor(messageGroupName, key, interpolateParams) {
        super(MessageType.INFO, messageGroupName, key, MessageType.ICON_INFO, interpolateParams);
    }
}

class SuccessFlowMessageModel extends AbstractMessage {
    constructor(messageGroupName, key, interpolateParams) {
        super(MessageType.SUCCESS, messageGroupName, key, MessageType.SUCCESS, interpolateParams);
    }
}

class SuccessMessage extends AbstractMessage {
    constructor(messageGroupName, key) {
        super(MessageType.SUCCESS, messageGroupName, key, MessageType.ICON_SUCCESS);
    }
}

class WarningFlowMessage extends AbstractMessage {
    constructor(messageGroupName, key, interpolateParams) {
        super(MessageType.WARNING, messageGroupName, key, MessageType.INFORMATION_WARNING, interpolateParams);
    }
}

class WarningMessage extends AbstractMessage {
    constructor(messageGroupName, key, interpolateParams) {
        super(MessageType.WARNING, messageGroupName, key, MessageType.ICON_WARNING, interpolateParams);
    }
}

/*
 * Public API Surface of ng-lib-message
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AbstractMessage, ErrorFlowMessage, ErrorMessage, InfoFlowMessage, MessageComponent, MessageFlowComponent, MessageService, MessageType, MessagesModule, SuccessFlowMessageModel, SuccessMessage, WarningFlowMessage, WarningMessage };
//# sourceMappingURL=telenet-ng-lib-message.mjs.map
