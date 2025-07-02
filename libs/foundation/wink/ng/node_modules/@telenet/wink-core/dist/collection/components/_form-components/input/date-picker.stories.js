import { html, nothing } from "lit-html";
import { STORY_CATEGORIES } from "../../../models/categories.types";
import { BADGES } from "../../../models/badges.types";
import * as InputStory from "../input/input.stories";
import { INPUT_TYPES } from "./models/input.types";
const format = (value) => {
    try {
        const date = new Date(value);
        return date.toISOString().split('T')[0];
    }
    catch (e) {
        return value;
    }
};
export default {
    title: 'FORM COMPONENTS/Date picker',
    component: 'Input',
    parameters: {
        badges: [BADGES.ready],
        controls: {
            exclude: [
                'autocomplete',
                'enterkeyhintOption',
                'placeholder',
                'iconRight',
                'iconLeft',
                'inputModeOption',
                'isAutofocused',
                'postfixValue',
                'prefixValue',
                'size',
                'type',
            ],
        },
    },
    argTypes: {
        ...InputStory.default.argTypes,
        value: {
            ...InputStory.default.argTypes?.value,
            control: 'date',
        },
        minValue: {
            control: 'date',
            table: { category: STORY_CATEGORIES.cpBasic },
            description: 'The minValue property specifies the earliest date that can be selected.',
        },
        maxValue: {
            control: 'date',
            table: { category: STORY_CATEGORIES.cpBasic },
            description: 'The maxValue property specifies the latest date that can be selected.',
        },
    },
    args: {
        label: 'Date picker',
        helper: 'Date picker helper text',
        name: 'date picker',
        isRequired: false,
        type: INPUT_TYPES.date,
        isDisabled: false,
        isReadonly: false,
        inputId: 'date-picker-01',
        error: '',
        value: '2024-06-01',
        minValue: '2014-06-01',
        maxValue: '2034-06-01',
    },
    render: (args) => {
        return html ` <wink-input
      type=${args.type}
      label=${args.label || nothing}
      helper=${args.helper || nothing}
      name=${args.name || nothing}
      value=${format(args.value) || nothing}
      is-disabled=${args.isDisabled || nothing}
      is-readonly=${args.isReadonly || nothing}
      input-id=${args.inputId || nothing}
      error=${args.error || nothing}
      ?is-required=${args.isRequired}
      min-value=${format(args.minValue) || nothing}
      max-value=${format(args.maxValue) || nothing}></wink-input>`;
    },
};
export const Default = {};
export const Range = {
    argTypes: {
        endValue: {
            control: 'text',
            table: { category: STORY_CATEGORIES.cpBasic },
            description: 'The value property sets the initial value of the second input field, allowing pre-filling of the input with existing data or default values.',
        },
        endLabel: {
            control: 'text',
            table: { category: STORY_CATEGORIES.cpBasic },
            description: 'The endLabel property specifies the label text displayed alongside the second input field, providing context or instructions for the user.',
        },
    },
    args: {
        label: 'Start datum',
        endLabel: 'Eind date',
        helper: '',
        name: 'date-picker-startdate',
        isRequired: false,
        isDisabled: false,
        isReadonly: false,
        inputId: 'date-picker-01',
        error: '',
        value: '2024-06-01',
        endValue: '2024-06-09',
        minValue: '2014-06-01',
        maxValue: '2034-06-01',
    },
    // eslint-disable-next-line sonarjs/cognitive-complexity
    render: (args) => {
        return html ` <wink-input
        type=${args.type}
        label=${args.label || nothing}
        helper=${args.helper || nothing}
        name=${args.name + 'start' || nothing}
        value=${format(args.value) || nothing}
        is-disabled=${args.isDisabled || nothing}
        is-readonly=${args.isReadonly || nothing}
        input-id=${args.inputId || nothing}
        error=${args.error || nothing}
        ?is-required=${args.isRequired}
        min-value=${format(args.minValue) || nothing}
        max-value=${format(args.endValue) || nothing}></wink-input>

      <wink-input
        type=${args.type}
        label=${args.endLabel || nothing}
        helper=${args.helper || nothing}
        name=${args.name + 'end' || nothing}
        value=${format(args.endValue) || nothing}
        is-disabled=${args.isDisabled || nothing}
        is-readonly=${args.isReadonly || nothing}
        input-id=${args.inputId || nothing}
        error=${args.error || nothing}
        ?is-required=${args.isRequired}
        min-value=${format(args.value) || nothing}
        max-value=${format(args.maxValue) || nothing}></wink-input>`;
    },
};
export const Time = {
    args: {
        label: 'Hoe laat wil je afspreken?',
        helper: 'Kies een bepaald uur',
        name: 'date-picker',
        isRequired: false,
        type: INPUT_TYPES.time,
        inputId: 'time-picker-01',
        value: '10:10',
        minValue: '09:00',
        maxValue: '17:00',
    },
};
//# sourceMappingURL=date-picker.stories.js.map
