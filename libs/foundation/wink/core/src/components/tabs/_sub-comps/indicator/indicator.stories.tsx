import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { BADGES } from '../../../../models';
import * as ButtonStory from '../../../button/button.stories';
import { INDICATOR_DIRECTIONS } from '../../../../models/directions.types';

export default {
  title: 'UTILS/Indicator',
  component: 'Indicator',
  tags: ['hidden'],
  parameters: {
    badges: [BADGES.ready],
  },
  argTypes: {
    direction: {
      control: 'inline-radio',
      options: Object.values(INDICATOR_DIRECTIONS),
      description: 'The direction property allows selection between the four directions the indicator can point to.',
      table: {
        defaultValue: { summary: INDICATOR_DIRECTIONS.right },
      },
    },
    size: {
      ...(ButtonStory.default?.argTypes?.size ?? {}),
    },
  },
  args: {
    direction: INDICATOR_DIRECTIONS.right,
    size: ButtonStory.default?.args?.size,
  },
  render: (args) => html`<wink-indicator direction="${args.direction}" size="${args.size}"></wink-indicator>`,
} as Meta;

export const Default = {};
