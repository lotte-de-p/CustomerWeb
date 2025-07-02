import { html, nothing } from "lit-html";
import { BADGES } from "../../../models";
import { STORY_CATEGORIES } from "../../../models/categories.types";
import { AUTOCOMPLETE_OPTIONS } from "./models/textarea.types";
import * as InputStory from "../input/input.stories";
export default {
    title: 'FORM COMPONENTS/Textarea',
    component: 'TextArea',
    parameters: {
        badges: [BADGES.inProgress],
    },
    argTypes: {
        label: {
            ...InputStory.default.argTypes?.label,
        },
        helper: {
            ...InputStory.default.argTypes?.helper,
        },
        name: {
            ...InputStory.default.argTypes?.name,
        },
        isDisabled: {
            ...InputStory.default.argTypes?.isDisabled,
        },
        textareaId: {
            control: 'text',
            table: { category: STORY_CATEGORIES.cpBasic },
            description: 'The textareaId property assigns a unique identifier to the textarea, facilitating accessibility and functionality.',
        },
        placeholder: {
            ...InputStory.default.argTypes?.placeholder,
        },
        isRequired: {
            ...InputStory.default.argTypes?.isRequired,
        },
        autocomplete: {
            control: 'radio',
            options: Object.values(AUTOCOMPLETE_OPTIONS),
            table: { category: STORY_CATEGORIES.cpAdvanced },
            description: 'Set if the textarea should have autocomplete enabled.',
        },
        minlength: {
            control: {
                type: 'number',
                min: 0,
                max: 200,
                step: 10,
            },
            table: { category: STORY_CATEGORIES.cpAdvanced },
            description: 'Set the minimum length of the input.',
        },
        maxlength: {
            control: {
                type: 'number',
                min: 0,
                max: 1000,
                step: 10,
            },
            table: { category: STORY_CATEGORIES.cpAdvanced },
            description: 'Set the maximum length of the input.',
        },
        rows: {
            control: {
                type: 'number',
                min: 1,
                max: 15,
            },
            table: { category: STORY_CATEGORIES.cpAdvanced },
            description: 'Sets the amount of visible rows in the textarea.',
        },
        error: {
            ...InputStory.default.argTypes?.error,
        },
        enterkeyhintOption: {
            ...InputStory.default.argTypes?.enterkeyhintOption,
        },
    },
    args: {
        label: 'textarea',
        helper: 'textarea met helper text',
        name: 'textarea',
        isRequired: false,
        isDisabled: false,
        textareaId: 'textarea-01',
        error: '',
        autocomplete: AUTOCOMPLETE_OPTIONS.off,
        minlength: 0,
        maxlength: 500,
        rows: 3,
        placeholder: 'Placeholder',
        enterkeyhintOption: '',
    },
    render: (args) => html ` <wink-textarea
      label=${args.label || nothing}
      helper=${args.helper || nothing}
      name=${args.name || nothing}
      is-disabled=${args.isDisabled || nothing}
      textarea-id=${args.textareaId || nothing}
      error=${args.error || nothing}
      ?is-required=${args.isRequired}
      autocomplete=${args.autocomplete || nothing}
      minlength=${args.minlength || nothing}
      maxlength=${args.maxlength || nothing}
      rows=${args.rows || nothing}
      enterkeyhint-option=${args.enterkeyhintOption || nothing}
      placeholder=${args.placeholder || nothing}></wink-textarea>`,
};
export const Default = {};
//# sourceMappingURL=textarea.stories.js.map
