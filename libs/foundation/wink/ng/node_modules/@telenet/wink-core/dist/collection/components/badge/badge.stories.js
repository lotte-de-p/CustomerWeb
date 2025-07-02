import { html } from "lit-html";
import { BADGES } from "../../models/badges.types";
import { BADGE_COLORS, BADGE_SIZES } from "./models/badge.types";
export default {
    title: 'COMPONENTS/Badge',
    component: 'Badge',
    argTypes: {
        text: {
            description: 'The text specifies the text content displayed within the badge.',
            type: { name: 'string', required: true },
        },
        size: {
            control: 'inline-radio',
            options: Object.values(BADGE_SIZES),
            description: 'The size property determines the visual dimensions of the badge.',
            table: {
                defaultValue: { summary: BADGE_SIZES.md },
            },
        },
        background: {
            control: 'select',
            options: Object.values(BADGE_COLORS),
            description: "The background property allows selection from predefined colors to set the badge's background color.",
            table: {
                defaultValue: { summary: BADGE_COLORS.darkBrown },
            },
        },
    },
    parameters: {
        badges: [BADGES.ready],
    },
    args: {
        text: 'Onze snelste',
        size: BADGE_SIZES.md,
        background: BADGE_COLORS.darkBrown,
    },
};
export const Default = (args) => {
    return html `<wink-badge text="${args.text}" size="${args.size}" background="${args.background}"></wink-badge> `;
};
//# sourceMappingURL=badge.stories.js.map
