import { h, Host } from "@stencil/core";
export class CustomerOrientation {
    render() {
        return (h(Host, { key: '542153bceb3a8be168fb0c69e37ec0167710e5fb' }, h("wink-dropdown-menu", { key: '21cb755809796f4d3766e2a6c0ee3c50cd20c1b0', heading: "Particulieren", "item-selected": "Particulieren", "list-position": "left" }, h("wink-link", { key: '5c9e70a069d0248563578b6786be30e2a31f7b6f', appearance: "dropdown-menu-link" }, "Particulieren"), h("wink-link", { key: '89f5e576d2d18090b4b065824188a4965fc3d07d', appearance: "dropdown-menu-link" }, "Zelfstandigen"), h("wink-link", { key: 'd8dc29f6faf20f6730897eb5a98cce43a1777041', appearance: "dropdown-menu-link" }, "Bedrijven")), h("wink-dropdown-menu", { key: 'cfaca4e27040ca50940672c7e4ca2cd71fb031fe', heading: "Alle websites", "item-selected": "Alle websites", "list-position": "left" }, h("wink-link", { key: 'cfa23a104b7e94f53159bd213535b453ec3cb338', appearance: "dropdown-menu-link" }, "Alle websites"), h("wink-link", { key: '7ba33ff27fdd1cb7b9038388fc7342a646137f05', appearance: "dropdown-menu-link" }, "Play sports"), h("wink-link", { key: '007d2ff70e8dbab97245579b06b7dc914d744861', appearance: "dropdown-menu-link" }, "Telenet-apps"))));
    }
    static get is() { return "wink-customer-orientation"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "telenet": ["styles/brands/customer-orientation.telenet.scss"],
            "base": ["styles/brands/customer-orientation.base.scss"]
        };
    }
    static get styleUrls() {
        return {
            "telenet": ["styles/brands/customer-orientation.telenet.css"],
            "base": ["styles/brands/customer-orientation.base.css"]
        };
    }
}
//# sourceMappingURL=customer-orientation.js.map
