import type { Meta } from '@storybook/web-components';
import { html, nothing } from 'lit-html';
import { STORY_CATEGORIES } from '../../../models/categories.types';
import { BADGES } from '../../../models/badges.types';
import * as InputStory from '../input/input.stories';
import { INPUT_TYPES } from './models/input.types';
import { cleanScopedWinkElements } from '../../../utils/utils';

const format = (value: string) => {
  try {
    const date = new Date(value);
    return date.toISOString().split('T')[0];
  } catch (e) {
    return value;
  }
};

export default {
  title: 'FORM COMPONENTS/Date picker',
  component: 'Input',
  parameters: {
    badges: [BADGES.ready],
    html: {
      transform: (code: string) => cleanScopedWinkElements(code, ['wink-input']),
    },
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
    tooltip: '',
  },
  render: (args: any) => {
    return html` ${args.tooltip &&
      html`<style>
        #root-inner {
          padding-top: 5rem;
        }
      </style>`}
      <wink-input
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
        max-value=${format(args.maxValue) || nothing}
        tooltip=${args.tooltip || nothing}></wink-input>`;
  },
} as Meta;

export const Default = {};

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
