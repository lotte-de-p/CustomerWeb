import { html } from "lit-html";
import { BADGES } from "../../models/badges.types";
import { PARAGRAPH_APPEARANCES, PARAGRAPH_SIZES } from "./models/paragraph.types";
export default {
    title: 'COMPONENTS/Paragraph',
    component: 'Paragraph',
    parameters: {
        badges: [BADGES.ready],
    },
    argTypes: {
        appearance: {
            control: 'inline-radio',
            options: Object.values(PARAGRAPH_APPEARANCES),
            description: 'The appearance property determines the style or formatting of the text in the paragraph, allowing options like "body" for regular text or "caption" for smaller supplementary text.',
            table: {
                defaultValue: { summary: PARAGRAPH_APPEARANCES.body },
            },
        },
        size: {
            control: 'inline-radio',
            options: Object.values(PARAGRAPH_SIZES),
            description: 'The size property allows selecting from options like "regular", "small", "large", or "bold" to control the text size and weight within the paragraph component.',
            table: {
                defaultValue: { summary: PARAGRAPH_SIZES.regular },
            },
        },
        slot: {
            description: 'The slot property serves as a placeholder allowing users to add custom content within the paragraph component.',
        },
    },
    args: {
        slot: 'Onze klanten zijn onze prioriteit. We zetten ons in om de beste service te bieden en de klanttevredenheid te verhogen.',
        size: PARAGRAPH_SIZES.regular,
        appearance: PARAGRAPH_APPEARANCES.body,
    },
    render: (args) => html ` <wink-paragraph size="${args.size}" appearance="${args.appearance}">${args.slot}</wink-paragraph>`,
};
export const Default = {};
export const caption = {
    args: {
        size: PARAGRAPH_SIZES.bold,
        appearance: PARAGRAPH_APPEARANCES.caption,
    },
};
//# sourceMappingURL=paragraph.stories.js.map
