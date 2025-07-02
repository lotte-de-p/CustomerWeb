import { html } from "lit-html";
import { BADGES } from "../../../models";
export default {
    title: 'UTILS/Spacer',
    component: 'Spacer',
    tags: ['hidden'],
    parameters: {
        badges: [BADGES.inProgress],
    },
    argTypes: {
        size: {
            control: 'inline-radio',
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            description: 'The size property specifies the height of the spacer.',
            table: {
                defaultValue: { summary: 'md' },
            },
        },
    },
    args: {
        size: 'lg',
    },
    render: (args) => html ` <div data-hidden-div style="background: var(--semantic-color-brand-default)">
      <wink-spacer size="${args.size}"></wink-spacer>
    </div>`,
};
export const Default = {};
//# sourceMappingURL=spacer.stories.js.map
