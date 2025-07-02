import { h } from "@stencil/core";
export class Sheet {
    constructor() {
        this.dashboard = false;
        this.multipage = false;
        this.isVisible = false;
        this.isOpen = false;
        this.hasStickyFooter = false;
        this.firstPage = true;
    }
    host;
    onIsVisibleChange() {
        if (this.isVisible && !this.isOpen) {
            this.openModal();
        }
        if (!this.isVisible && this.isOpen) {
            this.closeModal();
        }
    }
    async open() {
        this.openModal();
    }
    async close() {
        this.closeModal();
    }
    async nextPage() {
        this.goForward();
    }
    componentWillLoad() {
        if (this.isVisible && !this.isOpen) {
            this.openModal();
        }
        const stickyElements = this.host?.querySelectorAll('[slot*="footer"]');
        if (stickyElements.length > 0) {
            this.hasStickyFooter = true;
        }
    }
    componentDidLoad() {
        document.addEventListener('click', this.handleOutsideClick, true);
    }
    disconnectedCallback() {
        document.removeEventListener('click', this.handleOutsideClick, true);
    }
    handleOutsideClick = (event) => {
        if (this.isOpen && !this.host.contains(event.target)) {
            this.closeModal();
        }
    };
    handleButtonClick = (event) => {
        const target = event.target;
        if (target.tagName.toLowerCase() === 'wink-button') {
            if (target.classList.contains('wink-button-forward')) {
                this.goForward();
            }
            if (target.classList.contains('wink-button-back')) {
                this.goBack();
            }
            if (target.classList.contains('wink-button-close')) {
                this.close();
            }
        }
    };
    openModal() {
        if (this.isOpen)
            return;
        this.isVisible = true;
        this.isOpen = true;
        setTimeout(() => {
            const dialog = this.host.shadowRoot?.querySelector('dialog');
            if (dialog) {
                dialog.showModal();
            }
        }, 0);
    }
    closeModal() {
        if (!this.isOpen)
            return;
        this.isVisible = false;
        this.isOpen = false;
        const dialog = this.host.shadowRoot?.querySelector('dialog');
        if (dialog) {
            dialog.close();
        }
    }
    goBack() {
        this.firstPage = true;
    }
    goForward() {
        this.firstPage = false;
    }
    renderFooter() {
        if (!this.hasStickyFooter)
            return;
        if (this.multipage) {
            return (h("div", { class: "sheet-footer" }, h("div", { class: `sheet-footer-sub ${this.firstPage ? 'sheet-footer-visible' : ''}` }, h("slot", { name: "footer" })), h("div", { class: `sheet-footer-sub ${!this.firstPage ? 'sheet-footer-visible' : ''}` }, h("slot", { name: "footer-second" }))));
        }
        return (h("div", { class: "sheet-footer" }, h("slot", { name: "footer" })));
    }
    render() {
        return (h("dialog", { key: '6c391240655b93400dd6736dc93cd169a12338b8', onClick: this.handleButtonClick, class: `sheet  ${this.hasStickyFooter ? 'sheet-margin-bottom' : ''} ${this.dashboard ? 'sheet-darker' : ''}`, "aria-live": "assertive" }, !this.firstPage && (h("wink-button", { appearance: "tertiary", size: "md", icon: "chevron-left", "icon-position": "center", class: "sheet-icon sheet-icon-back", "icon-button-aria-label": "Terug", onClick: this.goBack.bind(this) })), h("wink-button", { key: '93349cd37b62fd955255b5a758ba796182d851ce', appearance: "tertiary", size: "md", icon: "cross", "icon-position": "center", class: "sheet-icon sheet-icon-close", "icon-button-aria-label": "Sluiten", onClick: this.closeModal.bind(this) }), h("div", { key: 'a99178e56a7a76ee6371955b59481db8c5a1654d', class: "sheet-content" }, this.multipage ? (h("div", { class: "sheet-content-scroll" }, h("div", { class: `sheet-content-page sheet-content-page-first ${this.firstPage ? 'sheet-content-page-visible' : ''}` }, h("slot", { name: "page-first" })), h("div", { class: `sheet-content-page sheet-content-page-second ${!this.firstPage ? 'sheet-content-page-visible' : ''} ` }, h("slot", { name: "page-second" })), h("slot", null))) : (h("div", { class: "sheet-content-scroll" }, h("slot", null))), this.renderFooter())));
    }
    static get is() { return "wink-sheet"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "telenet": ["styles/brands/sheet.telenet.scss"],
            "base": ["styles/brands/sheet.base.scss"]
        };
    }
    static get styleUrls() {
        return {
            "telenet": ["styles/brands/sheet.telenet.css"],
            "base": ["styles/brands/sheet.base.css"]
        };
    }
    static get properties() {
        return {
            "dashboard": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "dashboard",
                "reflect": false,
                "defaultValue": "false"
            },
            "multipage": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "multipage",
                "reflect": false,
                "defaultValue": "false"
            },
            "isVisible": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "is-visible",
                "reflect": true,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "isOpen": {},
            "hasStickyFooter": {},
            "firstPage": {}
        };
    }
    static get methods() {
        return {
            "open": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "close": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "nextPage": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "host"; }
    static get watchers() {
        return [{
                "propName": "isVisible",
                "methodName": "onIsVisibleChange"
            }];
    }
}
//# sourceMappingURL=sheet.js.map
