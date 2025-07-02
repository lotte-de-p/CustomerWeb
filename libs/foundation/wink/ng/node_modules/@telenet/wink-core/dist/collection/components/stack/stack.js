import { h, Host } from "@stencil/core";
import { STACK_SIZES } from "./models/stack.types";
export class Stack {
    constructor() {
        this.col = { default: 12 };
        this.gap = { default: STACK_SIZES.xs };
        this.direction = undefined;
        this.justifyContent = undefined;
        this.alignItems = undefined;
        this.wrap = undefined;
    }
    getStackClasses = () => {
        return {
            ...this.getClassesByPostfix('col', 'col'),
            ...this.getClassesByPostfix('gap', 'gap'),
            ...this.getClassesByPostfix('flex-direction', 'direction'),
            ...this.getClassesByPostfix('justify-content', 'justifyContent'),
            ...this.getClassesByPostfix('align-items', 'alignItems'),
            ...this.getClassesByPostfix('flex-wrap', 'wrap'),
        };
    };
    getClassesByPostfix(postFix, prop) {
        if (!this[prop]) {
            return {};
        }
        return {
            ...(this[prop].default && { [`${postFix}-${this[prop].default}`]: true }),
            ...(this[prop].sm && { [`${postFix}-${this[prop].sm}-sm`]: true }),
            ...(this[prop].md && { [`${postFix}-${this[prop].md}-md`]: true }),
        };
    }
    render() {
        return (h(Host, { key: '3af6d8c575758d252dd72454dfd40d02e2ccffe3', class: this.getStackClasses() }, h("slot", { key: 'f614e77cf433a44ea8f4580d85f0ec853b804ad0' })));
    }
    static get is() { return "wink-stack"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "telenet": ["styles/brands/stack.telenet.scss"],
            "base": ["styles/brands/stack.base.scss"]
        };
    }
    static get styleUrls() {
        return {
            "telenet": ["styles/brands/stack.telenet.css"],
            "base": ["styles/brands/stack.base.css"]
        };
    }
    static get properties() {
        return {
            "col": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Size",
                    "resolved": "{ default?: string | number | undefined; sm?: string | number | undefined; md?: string | number | undefined; }",
                    "references": {
                        "Size": {
                            "location": "import",
                            "path": "./models/stack.types",
                            "id": "../core/src/components/stack/models/stack.types.ts::Size"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "defaultValue": "{ default: 12 }"
            },
            "gap": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Size",
                    "resolved": "{ default?: string | number | undefined; sm?: string | number | undefined; md?: string | number | undefined; }",
                    "references": {
                        "Size": {
                            "location": "import",
                            "path": "./models/stack.types",
                            "id": "../core/src/components/stack/models/stack.types.ts::Size"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "defaultValue": "{ default: STACK_SIZES.xs }"
            },
            "direction": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Size",
                    "resolved": "undefined | { default?: string | number | undefined; sm?: string | number | undefined; md?: string | number | undefined; }",
                    "references": {
                        "Size": {
                            "location": "import",
                            "path": "./models/stack.types",
                            "id": "../core/src/components/stack/models/stack.types.ts::Size"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
            "justifyContent": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Size",
                    "resolved": "undefined | { default?: string | number | undefined; sm?: string | number | undefined; md?: string | number | undefined; }",
                    "references": {
                        "Size": {
                            "location": "import",
                            "path": "./models/stack.types",
                            "id": "../core/src/components/stack/models/stack.types.ts::Size"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
            "alignItems": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Size",
                    "resolved": "undefined | { default?: string | number | undefined; sm?: string | number | undefined; md?: string | number | undefined; }",
                    "references": {
                        "Size": {
                            "location": "import",
                            "path": "./models/stack.types",
                            "id": "../core/src/components/stack/models/stack.types.ts::Size"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
            "wrap": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Size",
                    "resolved": "undefined | { default?: string | number | undefined; sm?: string | number | undefined; md?: string | number | undefined; }",
                    "references": {
                        "Size": {
                            "location": "import",
                            "path": "./models/stack.types",
                            "id": "../core/src/components/stack/models/stack.types.ts::Size"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            }
        };
    }
}
//# sourceMappingURL=stack.js.map
