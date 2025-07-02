import { html, nothing } from "lit-html";
import { BADGES } from "../../models/badges.types";
import { LOGO_CATEGORIES } from "./models/logo.types";
import { TARGETS } from "../../models/targets.types";
import { logos } from "./data/logo.data";
const getLogosOnCategory = (category) => {
    return Object.entries(logos)
        .filter((item) => item[1].category === category)
        .map(([key]) => key);
};
const brandControl = {
    control: 'select',
    name: 'appearance',
    description: 'The appearance property in the logo component determines its visual style or variation.',
    type: { name: 'string', required: true },
};
export default {
    title: 'COMPONENTS/Logo',
    component: 'logo',
    parameters: {
        badges: [BADGES.ready],
    },
    argTypes: {
        category: {
            control: 'select',
            options: Object.values(LOGO_CATEGORIES),
            description: 'The category property in the logo component specifies its category or theme.',
        },
        variantTelenet: {
            ...brandControl,
            options: getLogosOnCategory(LOGO_CATEGORIES.telenet),
            if: { arg: 'category', eq: LOGO_CATEGORIES.telenet },
        },
        variantBase: {
            ...brandControl,
            options: getLogosOnCategory(LOGO_CATEGORIES.base),
            if: { arg: 'category', eq: LOGO_CATEGORIES.base },
        },
        variantEntPlay: {
            ...brandControl,
            options: getLogosOnCategory(LOGO_CATEGORIES.entPlay),
            if: { arg: 'category', eq: LOGO_CATEGORIES.entPlay },
        },
        variantEntStream: {
            ...brandControl,
            options: getLogosOnCategory(LOGO_CATEGORIES.entStream),
            if: { arg: 'category', eq: LOGO_CATEGORIES.entStream },
        },
        alt: {
            control: 'text',
            description: 'The alt property provides alternative text for an image, describing its content or function for accessibility purposes within the logo component.',
        },
        href: {
            control: 'text',
            description: 'The href property specifies the hyperlink reference for the logo component when it is rendered as an anchor tag, allowing navigation to a specific URL when clicked.',
        },
        target: {
            control: 'inline-radio',
            options: [TARGETS.blank, TARGETS.self],
            if: { arg: 'href', neq: '' },
            description: 'The target property determines how the linked URL should be opened, allowing options such as "_self" and "_blank" for defining the browsing context.',
            table: {
                defaultValue: { summary: TARGETS.self },
            },
        },
    },
    args: {
        category: 'telenet',
        variantTelenet: 'telenet-yellow',
        variantBase: 'base',
        variantEntPlay: 'goplay',
        variantEntStream: 'netflix',
        href: 'https://www.telenet.be',
        target: TARGETS.self,
        alt: 'Inspect element to check',
    },
    render: (args) => {
        let exportVariant = args.variantTelenet;
        switch (args.category) {
            case LOGO_CATEGORIES.base:
                exportVariant = args.variantBase;
                break;
            case LOGO_CATEGORIES.entPlay:
                exportVariant = args.variantEntPlay;
                break;
            case LOGO_CATEGORIES.entStream:
                exportVariant = args.variantEntStream;
                break;
        }
        return html ` <wink-logo
      appearance="${exportVariant?.toLowerCase()}"
      href="${args.href || nothing}"
      target="${args.target || nothing}"
      alt="${args.alt || nothing}">
    </wink-logo>`;
    },
};
export const Default = {};
export const BaseLogos = {
    args: {
        category: LOGO_CATEGORIES.base,
    },
};
export const EntertainmentPlayLogos = {
    args: {
        category: LOGO_CATEGORIES.entPlay,
    },
};
export const EntertainmentStreamingLogos = {
    args: {
        category: LOGO_CATEGORIES.entStream,
    },
};
//# sourceMappingURL=logo.stories.js.map
