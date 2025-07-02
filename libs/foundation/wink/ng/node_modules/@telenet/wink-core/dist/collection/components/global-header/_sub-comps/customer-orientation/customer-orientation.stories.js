import { html } from "lit-html";
import { BADGES } from "../../../../models";
export default {
    title: 'COMPONENTS/Global header/Customer orientation',
    component: 'CustomerOrientation',
    tags: ['hidden'],
    parameters: {
        badges: [BADGES.inProgress],
    },
    argTypes: {},
    args: {},
    render: () => html `<wink-customer-orientation></wink-customer-orientation>`,
};
export const Default = {};
//# sourceMappingURL=customer-orientation.stories.js.map
