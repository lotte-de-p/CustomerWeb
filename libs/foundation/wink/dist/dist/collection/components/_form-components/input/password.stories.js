import { BADGES } from "../../../models/badges.types";
import inputStories from "./input.stories";
import { INPUT_TYPES } from "./models/input.types";
export default {
    title: 'FORM COMPONENTS/Password',
    parameters: {
        badges: [BADGES.ready],
    },
    argTypes: {
        ...inputStories.argTypes,
    },
    args: {
        ...inputStories.args,
        type: INPUT_TYPES.password,
    },
    render: inputStories.render,
};
export const Default = {
    args: {
        label: 'Uw wachtwoord',
        helper: 'Een wachtwoord moet minimaal 8 karakters , 1 hoofdletter, 1 kleine letter en 1 cijfer bevatten.',
        placeholder: 'Uw wachtwoord',
        type: INPUT_TYPES.password,
        iconRight: 'eye',
    },
};
//# sourceMappingURL=password.stories.js.map
