import { Meta } from '@storybook/web-components';
import { html, nothing } from 'lit-html';
import { BADGES } from '../../../models';
import { STORY_CATEGORIES } from '../../../models/categories.types';
import { DIRECTIONS } from '../../../models/positions.types';
import { cleanScopedWinkElements } from '../../../utils/utils';
import * as LabelStories from '../form-label/form-label.stories';

export default {
  title: 'FORM COMPONENTS/Radio button',
  component: 'RadioButton',
  parameters: {
    badges: [BADGES.ready],
    html: {
      transform: (code: string) => cleanScopedWinkElements(code, ['wink-radio-button']),
    },
  },
  argTypes: {
    label: {
      control: 'text',
      table: { category: STORY_CATEGORIES.cpBasic },
      description:
        'The label property specifies the label text displayed alongside the radio button, providing context or instructions for the user.',
    },
    helper: {
      control: 'text',
      table: { category: STORY_CATEGORIES.cpBasic },
      description:
        'The helper property provides additional assistance or information related to the radio-button in the form of helper text displayed below the label, offering guidance or clarification to the user.',
    },
    name: {
      control: 'text',
      table: { category: STORY_CATEGORIES.cpBasic },
      description:
        'The name property assigns a name to the radio-button, which is submitted with the form data when the form is submitted.',
      type: { name: 'string', required: true },
    },
    checked: {
      control: 'boolean',
      table: { category: STORY_CATEGORIES.cpBasic },
      description: 'The checked property, when set the radio programmatically, marks the radio-box as checked.',
    },
    disabled: {
      control: 'boolean',
      table: { category: STORY_CATEGORIES.cpBasic },
      description: 'The disabled property set if the radio button should be disabled.',
    },
    error: {
      control: 'boolean',
      table: { category: STORY_CATEGORIES.cpBasic },
      description: 'The error property set if the radio button should be invalid.',
    },
    radioButtonId: {
      control: 'text',
      table: { category: STORY_CATEGORIES.cpBasic },
      description:
        'The radioButtonId property assigns a unique identifier to the radio-button, facilitating accessibility and functionality.',
    },
    amount: {
      table: { category: STORY_CATEGORIES.cpGroup },
      description: 'The amount property specifies which how many radio-buttons need to be displayed in the group.',
      control: { type: 'number', min: 2 },
      if: { arg: 'amount', exists: true },
    },
    direction: {
      control: 'inline-radio',
      table: { category: STORY_CATEGORIES.cpGroup },
      options: Object.values(DIRECTIONS).reverse(),
      description:
        'The direction property specifies the direction for rendering the radio buttons inside the radio-group.',
      if: { arg: 'amount', exists: true },
    },
    groupLabel: {
      control: 'text',
      table: { category: STORY_CATEGORIES.cpGroup },
      description:
        'The groupLabel property specifies the label text displayed above the radio-group, providing context or instructions for the user.',
      if: { arg: 'amount', exists: true },
    },
    groupHelper: {
      control: 'text',
      table: { category: STORY_CATEGORIES.cpGroup },
      description:
        'The groupHelper property provides additional assistance or information related to the radio-group in the form of helper text displayed below the label, offering guidance or clarification to the user.',
      if: { arg: 'amount', exists: true },
    },
    errorText: {
      control: 'text',
      table: { category: STORY_CATEGORIES.cpGroup },
      description: 'Set a text here to simulate an error.',
      if: { arg: 'amount', exists: true },
    },
    isRequired: {
      control: 'boolean',
      table: { category: STORY_CATEGORIES.cpGroup },
      description:
        'The isRequired property, when set to true, marks the radio-group as mandatory, requiring users to provide a value before submitting the form.',
      if: { arg: 'amount', exists: true },
    },
    tooltip: {
      ...LabelStories.default.argTypes?.tooltip,
      table: { category: STORY_CATEGORIES.cpGroup },
    },
  },
  args: {
    label: 'Radio button 1',
    helper: 'Dit is een helper tekst',
    isRequired: false,
    checked: false,
    disabled: false,
    error: false,
    radioButtonId: 'voorbeeld-01',
    name: 'voorbeeld-1',
    tooltip: '',
  },
  render: (args) =>
    html` <wink-radio-button
      label="${args.label || nothing}"
      helper="${args.helper || nothing}"
      ?checked="${args.checked || nothing}"
      ?disabled="${args.disabled || nothing}"
      ?error="${args.error || nothing}"
      name="${args.name}"
      id="${args.radioButtonId || nothing} ">
    </wink-radio-button>`,
} as Meta;

export const SingleRadioButton = {
  parameters: {
    controls: {
      exclude: ['tooltip'],
    },
  },
};

export const MultipleRadioButtons = {
  args: {
    direction: DIRECTIONS.vertical,
    groupLabel: 'Kies een bundel',
    groupHelper: 'Selecteer een bundel die u wilt toevoegen aan u pakket',
    isRequired: false,
    amount: 2,
    errorText: '',
    label: 'Bundel',
    helper: 'Info over wat er in je bundel zit',
    disabled: false,
  },
  parameters: {
    controls: {
      exclude: ['error', 'checked'],
    },
    html: {
      transform: (code: string) => cleanScopedWinkElements(code, ['wink-radio-group', 'wink-radio-button']),
    },
  },
  render: (args: any) => html`
    ${args.tooltip &&
    html`<style>
      #root-inner {
        padding-top: 5rem;
      }
    </style>`}
    <wink-radio-group
      label="${args.groupLabel || nothing}"
      helper="${args.groupHelper || nothing}"
      direction="${args.direction || nothing}"
      error="${args.errorText || nothing}"
      ?is-required="${args.isRequired}"
      tooltip="${args.tooltip}">
      ${[...Array(args.amount).keys()].map(
        (n) => html`
          <wink-radio-button
            id="${args.radioButtonId + (n + 1) || nothing}"
            label="${args.label + ' ' + (n + 1) || nothing}"
            helper="${args.helper || nothing}"
            name="${args.name || nothing}"
            ?checked="${args.checked}"
            ?disabled="${args.disabled}"
            ?error="${args?.errorText?.length >= 1}"></wink-radio-button>
        `
      )}
      <wink-radio-button
        id="disabled"
        label="Deze bundel kan je niet selecteren"
        helper="Daarom hebben we deze button is uitgeschakeld"
        name="${args.name}"
        ?checked="${args.checked}"
        disabled="true"></wink-radio-button>
    </wink-radio-group>
  `,
};
