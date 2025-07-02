import { html } from "lit-html";
import { BADGES } from "../../../models";
export default {
    title: 'FORM COMPONENTS/Validation message',
    component: 'ValidationMessage',
    parameters: {
        badges: [BADGES.ready],
    },
    tags: ['hidden'],
    argTypes: {
        message: {
            description: 'The message property sets the text that the error should display.',
            type: { name: 'string', required: true },
        },
    },
    args: {
        message: 'Gelieve dit veld in te vullen',
    },
    render: (args) => html `<wink-validation-message message="${args.message}"></wink-validation-message>`,
};
export const Default = {};
//# sourceMappingURL=validation-message.stories.js.map
