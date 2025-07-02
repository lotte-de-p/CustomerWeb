import { html } from 'lit-html';
import { NOTIFICATION_TYPES } from './models/notification.types';
import { BADGES } from '../../models/badges.types';
import { STORY_CATEGORIES } from '../../models/categories.types';

const inlineRadio = 'inline-radio';
export default {
  title: 'COMPONENTS/Notification',
  component: 'Notification',
  parameters: {
    badges: [BADGES.ready],
  },
  argTypes: {
    appearance: {
      control: inlineRadio,
      options: Object.values(NOTIFICATION_TYPES),
      description:
        'The appearance property specifies the type or style of the notification, offering options like "success", "error", "warning", or "info" to convey different levels of importance or feedback to the user.',
      table: {
        category: STORY_CATEGORIES.cp,
      },
    },
    hasCloseIcon: {
      control: 'boolean',
      description:
        'The hasCloseIcon property toggles the visibility of the close icon within the notification, allowing users to dismiss the notification when enabled.',
      table: {
        category: STORY_CATEGORIES.cp,
      },
    },
    heading: {
      control: 'text',
      description:
        'The heading property serves as a placeholder allowing users to add custom content within the notification component.',
      table: {
        category: STORY_CATEGORIES.sp,
      },
    },
    content: {
      control: 'text',
      description:
        'The content property serves as a placeholder allowing users to add custom content within the notification component.',
      table: {
        category: STORY_CATEGORIES.sp,
      },
    },
  },
  args: {
    appearance: NOTIFICATION_TYPES.information,
    hasCloseIcon: false,
    heading: 'Belangrijk',
    content: 'Neem contact op met de klantendienst als je wil overstappen op een andere verzendmethode.',
  },

  render: (args: Args) => {
    const hasHeading = args.heading !== '';
    return html`
      <wink-notification appearance="${args.appearance}" has-close-icon="${args.hasCloseIcon}">
        ${hasHeading
          ? html`<wink-title slot="heading" html-tag="h6" spacing-y="bottom" text="${args.heading}"></wink-title>`
          : ''}
        <wink-paragraph slot="content" appearance="body" size="small"> ${args.content} </wink-paragraph>
      </wink-notification>
    `;
  },
};

type Args = {
  appearance: string;
  hasCloseIcon: string;
  heading: string;
  content: string;
};

export const Information = {};

export const Success = {
  args: {
    appearance: NOTIFICATION_TYPES.success,
  },
};

export const Error = {
  args: {
    appearance: NOTIFICATION_TYPES.error,
  },
};

export const Warning = {
  args: {
    appearance: NOTIFICATION_TYPES.warning,
  },
};
