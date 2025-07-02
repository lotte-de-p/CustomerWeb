import { Meta } from '@storybook/web-components';
import { html, nothing } from 'lit-html';
import { BADGES } from '../../../models';
import { FORM_LABEL_RENDITION } from './models/form-label.types';
import * as LinkStory from '../../link/link.stories';

export default {
  title: 'FORM COMPONENTS/Form label',
  component: 'FormLabel',
  parameters: {
    badges: [BADGES.ready],
  },
  tags: ['hidden'],
  argTypes: {
    rendition: {
      control: 'inline-radio',
      options: Object.values(FORM_LABEL_RENDITION),
      description: 'The rendition property determines the visual representation of the form-label.',
    },
    label: {
      control: 'text',
      description:
        'The label property specifies the label text displayed alongside a component, providing context or instructions for the user.',
    },
    helper: {
      control: 'text',
      description:
        'The helper property provides additional assistance or information related to a component. The helper text displayed below the label, offering guidance or clarification to the user.',
    },
    showOptional: {
      control: 'boolean',
      description: 'Whether to show the optional label if its desired or not.',
    },
    optionalText: {
      control: 'text',
      description: 'Here you can change the text of the optional label. This will be used for translations.',
      if: { arg: 'showOptional', eq: true },
    },
    href: {
      ...LinkStory.default.argTypes.href,
    },
    linkText: {
      ...LinkStory.default.argTypes.slot,
    },
    tooltip: {
      control: 'text',
      description:
        'The tooltip property specifies the content of the tooltip. If this is left empty, the tooltip will not be displayed. Setting this will also add padding to storybook to display it correctly, this is for storybook only and will not impact the component itself.',
    },
  },

  args: {
    rendition: FORM_LABEL_RENDITION.subComponent,
    label: 'Dit is een label',
    helper: 'Dit is een helper text',
    showOptional: false,
    optionalText: 'Optioneel',
    linkText: 'Wachtwoord vergeten?',
    href: 'Set link destination.',
    tooltip: 'Dit is een tooltip',
  },
  render: (args) =>
    html` ${args.tooltip &&
      html`<style>
        #root-inner {
          padding-top: 5rem;
        }
      </style>`}
      <wink-form-label
        label="${args.label || nothing}"
        helper="${args.helper || nothing}"
        rendition="${args.rendition}"
        ?show-optional="${args.showOptional}"
        optional-text=${args.optionalText}
        href="${args.href}"
        link-text="${args.linkText}"
        tooltip="${args.tooltip}">
      </wink-form-label>`,
} as Meta;

export const Default = {};
