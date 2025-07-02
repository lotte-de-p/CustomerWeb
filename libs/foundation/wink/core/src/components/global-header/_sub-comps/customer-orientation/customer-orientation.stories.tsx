import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { BADGES } from '../../../../models';

export default {
  title: 'COMPONENTS/Global header/Customer orientation',
  component: 'CustomerOrientation',
  tags: ['hidden'],
  parameters: {
    badges: [BADGES.ready],
  },
  argTypes: {},
  args: {},
  render: () => html`<wink-customer-orientation></wink-customer-orientation>`,
} as Meta;

export const Default = {};
