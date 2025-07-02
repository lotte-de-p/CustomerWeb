import { html, nothing } from 'lit-html';
import { Meta } from '@storybook/web-components';
import { TITLE_SIZES, TITLE_SPACINGS_Y } from './models/title.types';
import { BADGES } from '../../models/badges.types';

export default {
  title: 'COMPONENTS/Title',
  component: 'Title',

  argTypes: {
    htmlTag: {
      control: 'inline-radio',
      options: Object.values(TITLE_SIZES),
      description:
        'The htmlTag property specifies the HTML tag used to render the title text, facilitating semantic structuring and styling.',
      table: {
        defaultValue: { summary: TITLE_SIZES.h2 },
      },
    },
    noSeo: {
      control: 'boolean',
      description:
        'The noSeo property specifies whether the title text should be rendered with or without heading tags, such as h1, h2, h3, etc.',
    },
    text: {
      control: 'text',
      description:
        'The text property specifies the textual content to be displayed as the title within the user interface.',
      type: { name: 'string', required: true },
    },
    spacingY: {
      control: 'select',
      options: Object.values(TITLE_SPACINGS_Y),
      description:
        'The spacingY property adjusts the vertical spacing (Y-axis) between elements or components within the user interface, helping to control the layout and visual balance of the design.',
      table: {
        defaultValue: { summary: TITLE_SPACINGS_Y.default },
      },
    },
  },
  args: {
    text: 'Klantenservice',
    htmlTag: TITLE_SIZES.h2,
    noSeo: false,
    spacingY: TITLE_SPACINGS_Y.default,
  },
  parameters: {
    badges: [BADGES.ready],
  },

  render: (args: any) =>
    html`<wink-title
      text="${args.text}"
      html-tag="${args.htmlTag}"
      no-seo="${args.noSeo || nothing}"
      spacing-y="${args.spacingY}"></wink-title>`,
} as Meta;

export const Default = {};
