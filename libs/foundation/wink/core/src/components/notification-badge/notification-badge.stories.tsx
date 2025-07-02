import { Meta } from '@storybook/web-components';
import { html, nothing } from 'lit-html';
import { BADGES } from '../../models';
import { NOTIFICATION_BADGE_SIZES } from './models/notification-badge.types';

export default {
  title: 'COMPONENTS/Notification badge',
  component: 'NotificationBadge',
  parameters: {
    badges: [BADGES.inProgress],
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: Object.values(NOTIFICATION_BADGE_SIZES),
      description: 'The size property determines the visual dimensions of the badge.',
      table: {
        defaultValue: { summary: NOTIFICATION_BADGE_SIZES.md },
      },
    },
    showNumber: {
      control: 'boolean',
      description: 'The showNumber property determines the visual representation of the notifications.',
      if: { arg: 'size', eq: NOTIFICATION_BADGE_SIZES.md },
    },
    amount: {
      control: 'number',
      description: 'The amount property determines the number shown in the badge when the showNumber is set.',
      if: { arg: 'showNumber', eq: true },
    },
    visible: {
      control: 'boolean',
      description: 'The visible property determines if the notification badge should be shown.',
    },
  },
  args: {
    size: NOTIFICATION_BADGE_SIZES.md,
    showNumber: false,
    amount: 1,
    visible: true,
  },
  render: (args) =>
    html`<wink-notification-badge
      size="${args.size}"
      show-number="${args.showNumber || nothing}"
      visible="${args.visible}"
      amount="${args.amount}"></wink-notification-badge>`,
} as Meta;

export const Default = {};

export const ShowNumber = {
  args: {
    size: 'md',
    amount: 5,
    showNumber: true,
    visible: true,
  },
};

export const WithAvatar = {
  args: {
    size: 'sm',
    showNumber: false,
  },
  render: (args: any) =>
    html`<wink-notification-badge
      size="${args.size}"
      show-number="${args.showNumber || nothing}"
      visible="${args.visible}"
      amount="${args.amount}">
      <wink-avatar size="md"></wink-avatar>
    </wink-notification-badge>`,
};
