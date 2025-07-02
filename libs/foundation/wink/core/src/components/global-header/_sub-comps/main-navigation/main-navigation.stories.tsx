import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { BADGES } from '../../../../models';
import { mainNavigationItems } from '../../../../assets/shared/data/global-header.data';

export default {
  title: 'COMPONENTS/Global header/Main navigation',
  component: 'MainNavigation',
  tags: ['hidden'],
  parameters: {
    badges: [BADGES.ready],
  },
  argTypes: {
    menuItems: {
      control: 'object',
      description:
        "An array of objects where each object represents a menu item for the main navigation. Each object should have a 'name' property which is the display text for the menu item, and a 'url' property which is the target URL when the menu item is clicked.",
    },
  },
  args: {
    menuItems: mainNavigationItems,
  },
  render: (args) => html` <wink-main-navigation menu-items="${JSON.stringify(args.menuItems)}"></wink-main-navigation>`,
} as Meta;

export const Default = {};
