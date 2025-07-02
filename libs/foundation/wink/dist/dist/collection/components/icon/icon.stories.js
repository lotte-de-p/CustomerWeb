import { html } from "lit-html";
import { ICON_SIZES, ICON_TYPES } from "./models/icon.types";
import { BADGES } from "../../models/badges.types";
import { ICONS_NAMES_GROUPED } from "../../assets/shared/data/icons-name.data";
import { getValuesAsArrayFromObject } from "../../utils/utils";
const ALL_ICONS_CATEGORY_NAME = 'all-icons';
const ALL_ICONS_CATEGORIES = [ALL_ICONS_CATEGORY_NAME, ...Object.keys(ICONS_NAMES_GROUPED)];
const categoriesArgTypes = ALL_ICONS_CATEGORIES.reduce((acc, cat) => ({
    ...acc,
    [cat]: {
        name: 'icon',
        control: 'select',
        options: cat === ALL_ICONS_CATEGORY_NAME ? getValuesAsArrayFromObject(ICONS_NAMES_GROUPED) : ICONS_NAMES_GROUPED[cat],
        description: `Available icons for ${cat} category`,
        table: {
            defaultValue: { summary: cat === ALL_ICONS_CATEGORY_NAME ? 'bell' : ICONS_NAMES_GROUPED[cat][0] },
        },
        if: { arg: 'category', eq: cat },
    },
}), {});
const categoriesArgs = ALL_ICONS_CATEGORIES.reduce((acc, cat) => {
    return {
        ...acc,
        [cat]: cat === ALL_ICONS_CATEGORY_NAME ? 'bell' : ICONS_NAMES_GROUPED[cat][0],
    };
}, {});
export default {
    title: 'COMPONENTS/Icon',
    component: 'Icon',
    parameters: {
        badges: [BADGES.ready],
    },
    argTypes: {
        appearance: {
            control: 'select',
            options: Object.values(ICON_TYPES),
            description: 'The appearance property defines its visual style, with options like "default", "primary", "secondary", or "transparent".',
            table: {
                defaultValue: { summary: ICON_TYPES.default },
            },
        },
        category: {
            name: 'category of icons',
            control: 'select',
            options: ALL_ICONS_CATEGORIES,
            description: 'The category of icons to make easier to find the desired icon',
            table: {
                defaultValue: { summary: ALL_ICONS_CATEGORY_NAME },
            },
        },
        size: {
            control: 'inline-radio',
            options: Object.values(ICON_SIZES),
            description: 'The size property determines its visual dimensions, offering options such as "sm", "md", "lg", and "xl" for controlling its size.',
            table: {
                defaultValue: { summary: ICON_SIZES.md },
            },
        },
        ...categoriesArgTypes,
    },
    args: {
        category: ALL_ICONS_CATEGORY_NAME,
        ...categoriesArgs,
        appearance: ICON_TYPES.default,
        size: ICON_SIZES.md,
    },
    render: (args) => html ` <wink-icon icon="${args[args.category]}" appearance="${args.appearance}" size="${args.size}"></wink-icon>`,
};
export const Default = {};
export const WithBackdrop = {
    args: {
        appearance: ICON_TYPES.primary,
    },
};
//# sourceMappingURL=icon.stories.js.map
