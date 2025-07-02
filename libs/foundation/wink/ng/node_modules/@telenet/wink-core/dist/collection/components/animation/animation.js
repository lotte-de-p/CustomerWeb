import { h, Host } from "@stencil/core";
import { ANIMATION_STATES } from "./models/animation.types";
import lottie from "lottie-web";
export class Animation {
    constructor() {
        this.src = '';
        this.count = 0;
        this.autoplay = false;
        this.controls = false;
        this.clickToPlay = false;
        this.lottie = {};
        this.status = ANIMATION_STATES.play;
        this.loaded = false;
    }
    host;
    watchPropHandler(newValue, oldValue) {
        if (newValue !== oldValue && this.loaded) {
            this.loadAnimation();
        }
    }
    async toggleAnimation() {
        if (this.status === ANIMATION_STATES.stop || this.status === ANIMATION_STATES.pauze) {
            this.play();
            this.autoplay = true;
        }
        else {
            this.pause();
        }
    }
    componentDidLoad() {
        this.loadAnimation();
        if (!this.autoplay) {
            this.pause();
        }
    }
    loadAnimation() {
        const container = this.host.shadowRoot?.querySelector('.animation-wrapper');
        if (container) {
            if (this.lottie.isLoaded) {
                this.lottie?.destroy();
            }
            container.innerHTML = '';
            this.lottie = lottie.loadAnimation({
                container: container,
                renderer: 'svg',
                loop: this.count > 0 ? this.count : true,
                autoplay: this.autoplay,
                path: this.src,
            });
            this.loaded = true;
        }
        if (this.autoplay) {
            this.play();
            this.status = ANIMATION_STATES.play;
        }
        this.lottie.addEventListener('complete', () => {
            this.status = ANIMATION_STATES.stop;
        });
    }
    play() {
        if (this.status === ANIMATION_STATES.stop) {
            this.lottie.goToAndPlay(0);
        }
        else {
            this.lottie.play();
        }
        this.status = ANIMATION_STATES.play;
    }
    pause() {
        this.status = ANIMATION_STATES.pauze;
        this.lottie.pause();
    }
    stop() {
        this.status = ANIMATION_STATES.stop;
        this.lottie.stop();
    }
    toggleAnimationOnClick() {
        if (!this.clickToPlay)
            return;
        if (this.status === ANIMATION_STATES.stop || this.status === ANIMATION_STATES.pauze) {
            this.play();
        }
        else {
            this.pause();
        }
    }
    renderControls() {
        return (h("div", { class: "controls" }, this.lottie.isPaused ? (h("wink-button", { element: "button", type: "button", appearance: "primary", size: "sm", icon: "play", onClick: this.play.bind(this) })) : (h("wink-button", { element: "button", type: "button", appearance: "primary", size: "sm", icon: "pause", onClick: this.pause.bind(this) })), h("wink-button", { element: "button", type: "button", appearance: "primary", size: "sm", icon: "stop", onClick: this.stop.bind(this) })));
    }
    render() {
        return (h(Host, { key: '68d3c41efa8301a1b6dd5b056c93b8318bc7007e' }, h("div", { key: 'd0b94395072a43af73184fccfd5fbf075d77427b', onClick: () => this.toggleAnimationOnClick(), class: "animation-wrapper", "data-status": this.status }), this.lottie && this.controls && this.renderControls()));
    }
    static get is() { return "wink-animation"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "telenet": ["styles/brands/animation.telenet.scss"],
            "base": ["styles/brands/animation.base.scss"]
        };
    }
    static get styleUrls() {
        return {
            "telenet": ["styles/brands/animation.telenet.css"],
            "base": ["styles/brands/animation.base.css"]
        };
    }
    static get properties() {
        return {
            "src": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "src",
                "reflect": false,
                "defaultValue": "''"
            },
            "count": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "count",
                "reflect": false,
                "defaultValue": "0"
            },
            "autoplay": {
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
                "attribute": "autoplay",
                "reflect": true,
                "defaultValue": "false"
            },
            "controls": {
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
                "attribute": "controls",
                "reflect": true,
                "defaultValue": "false"
            },
            "clickToPlay": {
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
                "attribute": "click-to-play",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "lottie": {},
            "status": {},
            "loaded": {}
        };
    }
    static get methods() {
        return {
            "toggleAnimation": {
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
                "propName": "src",
                "methodName": "watchPropHandler"
            }, {
                "propName": "count",
                "methodName": "watchPropHandler"
            }, {
                "propName": "autoplay",
                "methodName": "watchPropHandler"
            }, {
                "propName": "controls",
                "methodName": "watchPropHandler"
            }];
    }
}
//# sourceMappingURL=animation.js.map
