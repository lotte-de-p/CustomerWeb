import { html, nothing } from "lit-html";
import { BADGES } from "../../../models";
import { STORY_CATEGORIES } from "../../../models/categories.types";
export default {
    title: 'FORM-COMPONENTS/Select',
    component: 'Select',
    parameters: {
        badges: [BADGES.ready],
    },
    argTypes: {
        label: {
            control: 'text',
            description: 'The label property specifies the label text displayed above the select, providing context or instructions for the user.',
            table: { category: STORY_CATEGORIES.cp },
        },
        helper: {
            control: 'text',
            description: 'The helper property provides additional assistance or information related to the select in the form of helper text displayed below the label, offering guidance or clarification to the user.',
            table: { category: STORY_CATEGORIES.cp },
        },
        isRequired: {
            control: 'boolean',
            description: 'If the field is required, it will remove the optional label.',
            table: { category: STORY_CATEGORIES.cp },
        },
        placeholder: {
            control: 'text',
            description: 'The placeholder is the text that will be shown when no option is selected.',
            table: { category: STORY_CATEGORIES.cp },
        },
        error: {
            control: 'text',
            description: 'Set some text here to simulate an error.',
            table: { category: STORY_CATEGORIES.cp },
        },
        isDisabled: {
            control: 'boolean',
            description: 'The disabled property set if the select should be disabled.',
            table: { category: STORY_CATEGORIES.cp },
        },
        selectName: {
            control: 'text',
            description: 'The selectName property assigns a name to the select, which is submitted with the form data when the form is submitted.',
            table: { category: STORY_CATEGORIES.cp },
            type: { name: 'string', required: true },
        },
        selectId: {
            control: 'text',
            description: 'The selectId property assigns a unique identifier to the select, facilitating accessibility and functionality.',
            table: { category: STORY_CATEGORIES.cp },
        },
        selectItems: {
            control: 'object',
            description: 'The selectItems property specifies the options that will be displayed in the select.',
            table: { category: STORY_CATEGORIES.sp },
        },
    },
    args: {
        label: 'Kies een Iphone uit deze lijst',
        helper: 'Hier kan je kiezen tussen de verschillende iphone modellen.',
        isRequired: false,
        placeholder: 'Kies een Iphone',
        error: '',
        isDisabled: false,
        selectName: 'select-01',
        selectId: 'select-01',
        selectItems: ['iPhone 15', 'iPhone 14', 'iPhone SE'],
    },
    render: (args) => html ` <wink-select
      label="${args.label || nothing}"
      helper="${args.helper || nothing}"
      ?is-required="${args.isRequired || nothing}"
      placeholder="${args.placeholder || nothing}"
      error="${args.error || nothing}"
      ?is-disabled="${args.isDisabled || nothing}"
      select-name="${args.selectName || nothing}"
      select-id="${args.selectId || nothing}">
      ${args.selectItems.map((item) => html `<option value="${item.toLowerCase().replace(' ', '-')}">${item}</option>`)}
    </wink-select>`,
};
export const Default = {};
export const SelectWithoutPlaceholder = {
    args: {
        placeholder: '',
    },
};
//# sourceMappingURL=select.stories.js.map
