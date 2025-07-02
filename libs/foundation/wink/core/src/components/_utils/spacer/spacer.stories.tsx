import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { BADGES } from '../../../models';

export default {
  title: 'UTILS/Spacer',
  component: 'Spacer',
  tags: ['hidden'],
  parameters: {
    badges: [BADGES.ready],
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'The size property specifies the height of the spacer.',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
  },
  args: {
    size: 'lg',
  },
  render: (args) =>
    html` <div data-hidden-div style="background: var(--semantic-color-brand-default)">
      <wink-spacer size="${args.size}"></wink-spacer>
    </div>`,
} as Meta;

export const Default = {};
