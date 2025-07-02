import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { BADGES } from '../../models/badges.types';
import { BADGE_COLORS, BADGE_SIZES, BadgeColor, BadgeSize } from './models/badge.types';

export default {
  title: 'COMPONENTS/Badge',
  component: 'Badge',
  argTypes: {
    text: {
      description: 'The text specifies the text content displayed within the badge.',
      type: { name: 'string', required: true },
    },
    size: {
      control: 'inline-radio',
      options: Object.values(BADGE_SIZES),
      description: 'The size property determines the visual dimensions of the badge.',
      table: {
        defaultValue: { summary: BADGE_SIZES.md },
      },
    },
    background: {
      control: 'select',
      options: Object.values(BADGE_COLORS),
      description:
        "The background property allows selection from predefined colors to set the badge's background color.",
      table: {
        defaultValue: { summary: BADGE_COLORS.default },
      },
    },
    isBold: {
      control: 'boolean',
      description: 'The isBold property allows selection between regular and bold text.',
    },
  },
  parameters: {
    badges: [BADGES.ready],
  },
  args: {
    text: 'Onze snelste',
    size: BADGE_SIZES.md,
    background: BADGE_COLORS.default,
    isBold: true,
  },
} as Meta;

type Args = {
  text: string;
  size: BadgeSize;
  background: BadgeColor;
  isBold: boolean;
};

export const Default = (args: Args) => {
  return html`<wink-badge
    text="${args.text}"
    ?is-bold="${args.isBold}"
    size="${args.size}"
    background="${args.background}"></wink-badge> `;
};
