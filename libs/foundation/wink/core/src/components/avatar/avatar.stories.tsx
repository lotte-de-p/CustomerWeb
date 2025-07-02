import { Meta } from '@storybook/web-components';
import { html, nothing } from 'lit-html';
import { BADGES } from '../../models/badges.types';
import { AVATAR_SIZES, AvatarSize } from './models/avatar.types';

export default {
  title: 'COMPONENTS/Avatar',
  component: 'avatar',
  argTypes: {
    src: { description: 'The src property specifies the source URL or path for the avatar image to be displayed.' },
    size: {
      control: 'inline-radio',
      options: Object.values(AVATAR_SIZES),
      description: 'The size property determines the visual dimensions of the avatar image.',
      table: {
        defaultValue: { summary: AVATAR_SIZES.md },
      },
    },
  },
  parameters: {
    badges: [BADGES.ready],
  },
  args: {
    src: '',
    size: AVATAR_SIZES.md,
  },
} as Meta;

type Args = {
  src: string;
  size: AvatarSize;
};

export const Default = (args: Args) => {
  return html` <wink-avatar src="${args.src || nothing}" size="${args.size || nothing}"></wink-avatar> `;
};
