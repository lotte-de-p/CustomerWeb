import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { BADGES } from '../../../../models';

export default {
  title: 'COMPONENTS/Global header/Intent bar',
  component: 'IntentBar',
  tags: ['hidden'],
  parameters: {
    badges: [BADGES.ready],
  },
  argTypes: {},
  args: {},
  render: () => html`<wink-intent-bar></wink-intent-bar>`,
} as Meta;

export const Default = {};
