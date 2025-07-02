import { html, nothing } from "lit-html";
import { BADGES } from "../../../models";
import { TOGGLE_ALIGNMENT } from "./models/toggle-switch.types";
export default {
    title: 'FORM COMPONENTS/Toggle switch',
    component: 'ToggleSwitch',
    parameters: {
        badges: [BADGES.ready],
    },
    argTypes: {
        alignment: {
            control: 'inline-radio',
            options: Object.values(TOGGLE_ALIGNMENT),
            description: 'See if the label needs to be next to the toggle button or with space between based on the container width.',
        },
        label: {
            description: 'The label property specifies the label text displayed before the toggle-switch, providing context or instructions for the user.',
        },
        checked: {
            control: 'boolean',
            description: 'The checked property, when set the radio programmatically, marks the check-box as checked.',
        },
        disabled: {
            control: 'boolean',
            description: 'The disabled property set if the toggle switch should be disabled.',
        },
        toggleSwitchId: {
            control: 'text',
            description: 'The toggleSwitchId property assigns a unique identifier to the toggle switch, facilitating accessibility and functionality.',
            type: { name: 'string', required: true },
        },
        toggleSwitchName: {
            control: 'text',
            description: 'The toggleSwitchName property assigns a name to the toggle switch, which is submitted with the form data when the form is submitted, Also it is facilitating accessibility and functionality.',
            type: { name: 'string', required: true },
        },
    },
    args: {
        label: 'Strikt noodzakelijke cookies',
        alignment: TOGGLE_ALIGNMENT.nextTo,
        disabled: false,
        checked: false,
        toggleSwitchId: 'toggle-switch-1',
        toggleSwitchName: 'toggle-switch-1',
    },
    render: (args) => html `<wink-toggle-switch
      toggle-switch-id="${args.toggleSwitchId || nothing}"
      toggle-switch-name="${args.toggleSwitchName}"
      label="${args.label || nothing}"
      alignment="${args.alignment}"
      ?checked="${args.checked || nothing}}"
      ?disabled="${args.disabled || nothing}">
    </wink-toggle-switch>`,
};
export const Default = {};
//# sourceMappingURL=toggle-switch.stories.js.map
