import { html, nothing } from "lit-html";
import { BADGES } from "../../../models";
import { STORY_CATEGORIES } from "../../../models/categories.types";
import { DIRECTIONS } from "../../../models/positions.types";
export default {
    title: 'FORM COMPONENTS/Checkbox',
    component: 'CheckBox',
    parameters: {
        badges: [BADGES.inProgress],
    },
    argTypes: {
        label: {
            control: 'text',
            table: { category: STORY_CATEGORIES.cpBasic },
            description: 'The label property specifies the label text displayed alongside the check box, providing context or instructions for the user.',
        },
        helper: {
            control: 'text',
            table: { category: STORY_CATEGORIES.cpBasic },
            description: 'The helper property provides additional assistance or information related to the checkbox in the form of helper text displayed below the label, offering guidance or clarification to the user.',
        },
        name: {
            control: 'text',
            table: { category: STORY_CATEGORIES.cpBasic },
            description: 'The name property assigns a name to the checkbox, which is submitted with the form data when the form is submitted.',
            type: { name: 'string', required: true },
        },
        checkboxId: {
            control: 'text',
            table: { category: STORY_CATEGORIES.cpBasic },
            description: 'The checkboxId property assigns a unique identifier to the checkbox, facilitating accessibility and functionality.',
        },
        checked: {
            control: 'boolean',
            table: { category: STORY_CATEGORIES.cpBasic },
            description: 'The checked property, when set the checkbox programmatically, marks the check-box as checked.',
        },
        error: {
            control: 'boolean',
            table: { category: STORY_CATEGORIES.cpBasic },
            description: 'The error property set if the checkbox should be invalid.',
        },
        disabled: {
            control: 'boolean',
            table: { category: STORY_CATEGORIES.cpBasic },
            description: 'The disabled property set if the checkbox should be disabled.',
        },
        amount: {
            table: { category: STORY_CATEGORIES.cpGroup },
            description: 'The amount property specifies which how many check-boxes need to be displayed in the group.',
            control: { type: 'number', min: 2 },
            if: { arg: 'amount', exists: true },
        },
        direction: {
            control: 'inline-radio',
            table: { category: STORY_CATEGORIES.cpGroup },
            options: Object.values(DIRECTIONS).reverse(),
            description: 'The direction property specifies the direction for rendering the checkboxes inside the check-box-group.',
            if: { arg: 'amount', exists: true },
        },
        groupLabel: {
            control: 'text',
            table: { category: STORY_CATEGORIES.cpGroup },
            description: 'The groupLabel property specifies the label text displayed above the check-box-group, providing context or instructions for the user.',
            if: { arg: 'amount', exists: true },
        },
        groupHelper: {
            control: 'text',
            table: { category: STORY_CATEGORIES.cpGroup },
            description: 'The groupHelper property provides additional assistance or information related to the check-box-group in the form of helper text displayed below the label, offering guidance or clarification to the user.',
            if: { arg: 'amount', exists: true },
        },
        errorText: {
            control: 'text',
            table: { category: STORY_CATEGORIES.cpGroup },
            description: 'Set some text here to simulate an error.',
        },
        isRequired: {
            control: 'boolean',
            table: { category: STORY_CATEGORIES.cpGroup },
            description: 'The isRequired property, when set to true, marks the check-box-group as mandatory, requiring users to provide a value before submitting the form.',
        },
    },
    args: {
        label: 'Checkbox 1',
        helper: 'Dit is een helper tekst',
        checked: false,
        disabled: false,
        error: false,
        name: 'example-1',
        checkboxId: 'example-01',
    },
    render: (args) => html `<wink-check-box
      label="${args.label || nothing}"
      helper="${args.helper || nothing}"
      name="${args.name}"
      id="${args.checkboxId || nothing}"
      ?checked="${args.checked || nothing}"
      ?error="${args.error || nothing}"
      ?disabled="${args.disabled || nothing}"></wink-check-box>`,
};
export const SingleCheckbox = {
    parameters: {
        controls: {
            exclude: ['errorText', 'isRequired'],
        },
    },
};
export const MultipleCheckboxes = {
    args: {
        direction: DIRECTIONS.vertical,
        groupLabel: 'Wifipods Toevoegen',
        groupHelper: 'Hoeveel Wifipods wilt u toevoegen in u bundel',
        isRequired: false,
        checked: false,
        amount: 2,
        errorText: '',
        label: 'Wifipods extra',
        helper: 'nodig vanaf aantal kamers: ',
        disabled: false,
    },
    parameters: {
        controls: {
            exclude: ['error', 'checked'],
        },
    },
    render: (args) => html `
    <wink-check-box-group
      direction="${args.direction}"
      label="${args.groupLabel || nothing}"
      helper="${args.groupHelper || nothing}"
      error="${args.errorText}"
      ?is-required="${args.isRequired}">
      ${[...Array(args.amount).keys()].map((n) => html `
          <wink-check-box
            id="${args.checkboxId + (n + 1) || nothing}"
            label="${n + 1 + ' ' + args.label || nothing}"
            helper="${args.helper + ' ' + (n + 1) || nothing}"
            name="${args.name || nothing}"
            ?checked="${args.checked}"
            ?disabled="${args.disabled}"
            ?error="${args?.errorText?.length >= 1}">
          </wink-check-box>
        `)}
      <wink-check-box
        id="disabled"
        label="0 wifipods"
        helper="U kan dit item niet selecteren"
        name="${args.name}"
        ?checked="${args.checked}"
        disabled="true"></wink-check-box>
    </wink-check-box-group>
  `,
};
//# sourceMappingURL=check-box.stories.js.map
