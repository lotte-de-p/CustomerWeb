import { html, nothing } from "lit-html";
import { INPUT_AUTOCOMPLETES, INPUT_ENTERKEYHINTS, INPUT_MODES, INPUT_TYPES } from "./models/input.types";
import { STORY_CATEGORIES } from "../../../models/categories.types";
import { BADGES } from "../../../models/badges.types";
import { getValuesAsArrayFromObject } from "../../../utils/utils";
import { ICONS_NAMES_GROUPED } from "../../../assets/shared/data/icons-name.data";
const exampleId = 'exampleInputId';
export default {
    title: 'FORM COMPONENTS/Input',
    component: 'Input',
    parameters: {
        badges: [BADGES.ready],
    },
    argTypes: {
        inputId: {
            control: 'text',
            table: { category: STORY_CATEGORIES.cpBasic },
            description: 'The inputId property assigns a  custom identifier to the input field, facilitating accessibility and functionality. If there is no custom input-id defined the component will generate one.',
        },
        name: {
            control: 'text',
            table: { category: STORY_CATEGORIES.cpBasic },
            description: 'The name property assigns a name to the input field, which is submitted with the form data when the form is submitted.',
            type: { name: 'string', required: true },
        },
        type: {
            control: 'select',
            table: { category: STORY_CATEGORIES.cpBasic },
            options: Object.values(INPUT_TYPES),
            description: 'The type property defines the type of input field, such as "text", "email", "password", etc., determining the format and validation rules for the entered data.',
            type: { name: 'string', required: true },
        },
        placeholder: {
            control: 'text',
            table: { category: STORY_CATEGORIES.cpBasic },
            description: 'The placeholder property provides a temporary hint or example text displayed in the input field, guiding users on what to input without permanently setting the value.',
            type: { name: 'string', required: true },
        },
        value: {
            control: 'text',
            table: { category: STORY_CATEGORIES.cpBasic },
            description: 'The value property sets the initial value of the input field, allowing pre-filling of the input with existing data or default values.',
        },
        label: {
            control: 'text',
            table: { category: STORY_CATEGORIES.cpBasic },
            description: 'The label property specifies the label text displayed alongside the input field, providing context or instructions for the user.',
        },
        helper: {
            control: 'text',
            table: { category: STORY_CATEGORIES.cpBasic },
            description: 'The helper property provides additional assistance or information related to the input field in the form of helper text displayed below the label, offering guidance or clarification to the user.',
        },
        inputModeOption: {
            control: 'select',
            table: { category: STORY_CATEGORIES.cpAdvanced },
            options: ['', ...Object.values(INPUT_MODES)],
            description: 'The inputModeOption property allows specifying the input mode for the input field, which can control the keyboard layout or behavior on mobile devices, such as "text", "numeric", "tel", etc.',
        },
        autocomplete: {
            control: 'select',
            table: { category: STORY_CATEGORIES.cpAdvanced },
            options: ['', ...Object.values(INPUT_AUTOCOMPLETES)],
            description: "The autocomplete property enables browser autofill functionality for the input field, suggesting previously entered values or data based on the input's name and context.",
        },
        enterkeyhintOption: {
            control: 'select',
            table: { category: STORY_CATEGORIES.cpAdvanced },
            options: ['', ...Object.values(INPUT_ENTERKEYHINTS)],
            description: 'The enterkeyhintOption property specifies the expected action for the "Enter" key on mobile devices.',
        },
        isReadonly: {
            control: 'boolean',
            table: { category: STORY_CATEGORIES.cpAdvanced },
            description: 'The isReadonly property, when set to true, makes the input field read-only, preventing users from editing its contents.',
        },
        isRequired: {
            control: 'boolean',
            table: { category: STORY_CATEGORIES.cpBasic },
            description: 'The isRequired property, when set to true, marks the input field as mandatory, requiring users to provide a value before submitting the form.',
        },
        isDisabled: {
            control: 'boolean',
            table: { category: STORY_CATEGORIES.cpBasic },
            description: 'The isDisabled property, when set to true, disables the input field, preventing users from interacting with it or submitting data.',
        },
        isAutofocused: {
            control: 'boolean',
            table: { category: STORY_CATEGORIES.cpAdvanced },
            description: 'The isAutofocused property, when set to true, automatically focuses the input field when the page loads, allowing users to start typing without manually selecting the field.',
        },
        error: {
            control: 'text',
            table: { category: STORY_CATEGORIES.cpBasic },
            description: 'The error property provides an error message to be displayed when error is set to true, informing the user about the nature of the error in the input field.',
        },
        prefixValue: {
            control: 'text',
            table: { category: STORY_CATEGORIES.cpAdvanced },
            description: "The prefixValue property adds a prefix or a fixed value before the user's input in the input field.",
        },
        postfixValue: {
            control: 'text',
            table: { category: STORY_CATEGORIES.cpAdvanced },
            description: "The postfixValue property adds a suffix or a fixed value after the user's input in the input field.",
        },
        iconLeft: {
            control: 'select',
            table: { category: STORY_CATEGORIES.cpAdvanced },
            options: ['', ...getValuesAsArrayFromObject(ICONS_NAMES_GROUPED)],
            description: 'The iconLeft property specifies the name of the icon used in the left icon button of the input field.',
        },
        iconRight: {
            control: 'select',
            table: { category: STORY_CATEGORIES.cpAdvanced },
            options: ['', ...getValuesAsArrayFromObject(ICONS_NAMES_GROUPED)],
            description: 'The iconRight property specifies the name of the icon used in the right icon button of the input field.',
        },
        minValue: {
            control: {
                type: 'number',
                min: 0,
                max: 200,
                step: 1,
            },
            table: { category: STORY_CATEGORIES.cpBasic },
            description: 'The minValue property specifies the minimum value of a number input.',
        },
        maxValue: {
            control: {
                type: 'number',
                min: 0,
                max: 200,
                step: 1,
            },
            table: { category: STORY_CATEGORIES.cpBasic },
            description: 'The maxValue property specifies the maximum value of a number input.',
        },
        step: {
            control: {
                type: 'number',
                min: 0,
                max: 10,
                step: 1,
            },
            table: { category: STORY_CATEGORIES.cpBasic },
            description: 'The step property specifies the step with which the value will increment.',
            if: { arg: 'inputModType', eq: INPUT_MODES.numeric },
        },
    },
    args: {
        label: '',
        helper: '',
        isRequired: false,
        type: INPUT_TYPES.text,
        value: '',
        minValue: 0,
        maxValue: 100,
        step: 1,
        placeholder: '',
        isDisabled: false,
        isReadonly: false,
        error: '',
        name: 'input-name',
        inputId: '',
        prefixValue: '',
        iconLeft: '',
        iconRight: '',
        postfixValue: '',
        autocomplete: '',
        enterkeyhintOption: '',
        inputModeOption: '',
        isAutofocused: false,
    },
    // eslint-disable-next-line sonarjs/cognitive-complexity
    render: (args) => html ` <wink-input
      label="${args.label || nothing}"
      helper="${args.helper || nothing}"
      is-required="${args.isRequired || nothing}"
      type="${args.type || nothing}"
      value="${args.value || nothing}"
      min-value="${args.minValue || nothing}"
      max-value="${args.maxValue || nothing}"
      step="${args.step || nothing}"
      placeholder="${args.placeholder || nothing}"
      is-disabled="${args.isDisabled || nothing}"
      is-readonly="${args.isReadonly || nothing}"
      prefix-value="${args.prefixValue || nothing}"
      icon-left="${args.iconLeft || nothing}"
      icon-right="${args.iconRight || nothing}"
      postfix-value="${args.postfixValue || nothing}"
      error="${args.error || nothing}"
      name="${args.name || nothing}"
      input-id="${args.inputId || nothing}"
      input-mode-option="${args.inputModeOption || nothing}"
      autocomplete="${args.autocomplete || nothing}"
      enterkeyhint-option="${args.enterkeyhintOption || nothing}"
      is-autofocused="${args.isAutofocused || nothing}"></wink-input>`,
};
export const Basic = {
    args: {
        label: 'Naam',
        helper: 'Vul hier je naam in',
        placeholder: 'Jouw naam',
        inputId: '',
    },
    parameters: {
        controls: {
            exclude: [
                'autocomplete',
                'enterkeyhintOption',
                'error',
                'iconRight',
                'iconLeft',
                'inputModeOption',
                'isAutofocused',
                'isReadonly',
                'postfixValue',
                'prefixValue',
                'maxValue',
                'minValue',
            ],
        },
    },
};
export const Full = {
    args: {
        label: 'Gebruikersnaam',
        helper: '',
        placeholder: 'Jouw Gebruikersnaam',
    },
};
export const Text = {
    args: {
        label: 'Naam',
        helper: 'Vul hier je naam in',
        placeholder: 'Jouw naam',
    },
    parameters: {
        controls: {
            exclude: ['maxValue', 'minValue'],
        },
    },
};
export const Numerical = {
    args: {
        label: 'Leden gezinsabonnement',
        helper: 'Moet leden wil je toevoegen aan dit abonnement ?',
        isRequired: false,
        type: INPUT_TYPES.number,
        placeholder: '123456',
        value: '4',
        isReadonly: false,
        error: false,
        inputId: exampleId,
        inputModType: INPUT_MODES.numeric,
        isAutofocused: false,
        enterkeyhintOption: 'select',
    },
};
export const Email = {
    args: {
        label: 'Email',
        helper: 'Vul hier je emailadres in',
        isRequired: false,
        type: INPUT_MODES.email,
        placeholder: 'voorbeeld@telenet.be',
        isReadonly: false,
        error: false,
        inputId: exampleId,
        inputModeOption: INPUT_MODES.email,
        isAutofocused: false,
        enterkeyhintOption: 'select',
    },
    parameters: {
        controls: {
            exclude: ['maxValue', 'minValue'],
        },
    },
};
export const Tel = {
    args: {
        label: 'Telefoonnummer',
        isRequired: false,
        type: INPUT_MODES.tel,
        value: '015/33.45.69',
        placeholder: '015/33.45.67',
        isReadonly: false,
        inputId: exampleId,
        isAutofocused: false,
        inputModeOption: INPUT_MODES.tel,
        enterkeyhintOption: '',
    },
    parameters: {
        controls: {
            exclude: ['maxValue', 'minValue'],
        },
    },
};
export const Url = {
    args: {
        label: 'Website',
        helper: 'Vul hier een url in',
        isRequired: false,
        type: INPUT_MODES.url,
        placeholder: 'telenet.be',
        isReadonly: false,
        error: false,
        inputId: exampleId,
        inputModeOption: INPUT_MODES.url,
        isAutofocused: false,
        enterkeyhintOption: 'select',
    },
    parameters: {
        controls: {
            exclude: ['maxValue', 'minValue'],
        },
    },
};
//# sourceMappingURL=input.stories.js.map
