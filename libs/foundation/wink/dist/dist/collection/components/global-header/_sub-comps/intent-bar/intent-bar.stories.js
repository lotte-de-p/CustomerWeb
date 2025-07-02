import { html } from "lit-html";
import { BADGES } from "../../../../models";
export default {
    title: 'COMPONENTS/Global header/Intent bar',
    component: 'IntentBar',
    tags: ['hidden'],
    parameters: {
        badges: [BADGES.inProgress],
    },
    argTypes: {},
    args: {},
    render: () => html `<wink-intent-bar></wink-intent-bar>`,
};
export const Default = {};
//# sourceMappingURL=intent-bar.stories.js.map
