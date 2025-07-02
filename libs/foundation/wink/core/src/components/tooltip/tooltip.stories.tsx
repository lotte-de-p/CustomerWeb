import { Meta } from '@storybook/web-components';
import { html, nothing } from 'lit-html';
import { BADGES } from '../../models';
import { VERTICAL_TOOLTIP_POSITIONS, HORIZONTAL_TOOLTIP_POSITIONS } from './models/tooltip.types';
import { STORY_CATEGORIES } from '../../models/categories.types';
import { ICONS_NAMES_GROUPED } from '../../assets/shared/data/icons-name.data';
import { getValuesAsArrayFromObject } from '../../utils/utils';

export default {
  title: 'COMPONENTS/Tooltip',
  component: 'Tooltip',
  parameters: {
    badges: [BADGES.inProgress],
  },
  argTypes: {
    hideIcon: {
      control: 'boolean',
      description:
        'The hideIcon property allows hiding of the icon, if set to true there is a slot named "trigger" that can be used to add a trigger element.',
      table: {
        category: STORY_CATEGORIES.cp,
      },
    },
    icon: {
      control: 'select',
      options: getValuesAsArrayFromObject(ICONS_NAMES_GROUPED),
      description: 'The icon property specifies the the icon used as the tooltip trigger.',
      table: {
        defaultValue: { summary: 'question-shape' },
        category: STORY_CATEGORIES.cp,
      },
      if: { arg: 'hideIcon', eq: false },
    },
    verticalPosition: {
      control: 'inline-radio',
      options: Object.values(VERTICAL_TOOLTIP_POSITIONS),
      description: 'The verticalPosition property allows selection of the vertical position of the tooltip.',
      table: {
        defaultValue: { summary: VERTICAL_TOOLTIP_POSITIONS.top },
        category: STORY_CATEGORIES.cp,
      },
    },
    horizontalPosition: {
      control: 'inline-radio',
      options: Object.values(HORIZONTAL_TOOLTIP_POSITIONS),
      description: 'The horizontalPosition property allows selection of the horizontal position of the tooltip.',
      table: {
        defaultValue: { summary: HORIZONTAL_TOOLTIP_POSITIONS.center },
        category: STORY_CATEGORIES.cp,
      },
    },
    content: {
      control: 'text',
      description:
        'The content property specifies the content of the tooltip. This is a storybook only prop, as the component provides a slot for this content.',
      table: {
        category: STORY_CATEGORIES.sp,
      },
    },
  },
  args: {
    hideIcon: false,
    verticalPosition: VERTICAL_TOOLTIP_POSITIONS.top,
    horizontalPosition: HORIZONTAL_TOOLTIP_POSITIONS.center,
    content: 'Tooltip content',
    icon: 'question-shape',
  },
  render: (args) =>
    html` <style>
        #root-inner {
          height: 95vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      </style>
      <wink-tooltip
        hide-icon=${args.hideIcon || nothing}
        vertical-position=${args.verticalPosition || nothing}
        horizontal-position=${args.horizontalPosition || nothing}
        icon=${args.icon || nothing}>
        ${args.content}
      </wink-tooltip>`,
} as Meta;

export const Default = {};

export const WithoutIcon = {
  args: {
    hideIcon: true,
    verticalPosition: 'top',
    horizontalPosition: 'center',
    content: 'Tooltip content',
  },
  render: (args: any) =>
    html` <style>
        #root-inner {
          height: 95vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      </style>
      <wink-tooltip
        hide-icon=${args.hideIcon || nothing}
        vertical-position=${args.verticalPosition || nothing}
        horizontal-position=${args.horizontalPosition || nothing}>
        ${args.content}

        <wink-link appearance="default" size="inherit" slot="trigger"> Onze klanten zijn onze prioriteit. </wink-link>
      </wink-tooltip>`,
};
