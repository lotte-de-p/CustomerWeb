import { html, nothing } from 'lit-html';
import { DROPDOWN_ALIGN } from './models/dropdown-menu.types';
import { BADGES } from '../../models';

export default {
  title: 'COMPONENTS/Dropdown menu',
  component: 'DropdownMenu',
  parameters: {
    badges: [BADGES.ready],
  },
  argTypes: {
    itemSelected: {
      description:
        "The itemSelected property specifies the currently selected or highlighted item in the menu, enabling visual differentiation or interaction with the user's selection.",
      table: { defaultValue: { summary: 'account' } },
    },
    isExpanded: {
      description:
        'The isExpanded property, when set to true, indicates that the dropdown menu component is in an expanded state, displaying its contents to the user.',
      table: { defaultValue: { summary: false } },
    },
    heading: {
      description:
        'The heading property specifies the title or label displayed for the menu, providing context or instruction to users regarding its content or purpose.',
      type: { name: 'string', required: true },
    },
    listPosition: {
      control: 'select',
      description:
        'The listPosition property allows aligning the items within the menu either to the left or to the right along the cross-axis, ensuring proper layout and presentation.',
      options: Object.values(DROPDOWN_ALIGN),
      table: { defaultValue: { summary: 'left' } },
    },
    avatar: {
      control: 'boolean',
      description: 'Add a wink-avatar to the slot to show the wink avatar.',
      table: { defaultValue: { summary: false } },
    },
  },
  args: {
    isExpanded: false,
    heading: 'Account',
    avatar: true,
    itemSelected: 'Account',
    listPosition: DROPDOWN_ALIGN.topLeft,
  },

  render: (args: any) => {
    const avatarHtml = html`<wink-avatar size="sm" slot="dropdown-menu--avatar"></wink-avatar>`;
    return html`<wink-dropdown-menu
      ?is-expanded="${args.isExpanded || nothing}"
      heading="${args.heading || nothing}"
      item-selected="${args.itemSelected || nothing}"
      align-items="${args.listPosition || nothing}">
      ${args.avatar ? avatarHtml : ''}
      <wink-link
        appearance="dropdown-menu-link"
        size="inherit"
        icon-position="left"
        icon-appearance="secondary"
        is-disabled="false"
        href="/"
        ><wink-icon slot="link-icon" appearance="secondary" icon="user" size="sm"></wink-icon>Account</wink-link
      >
      <wink-link
        appearance="dropdown-menu-link"
        size="inherit"
        icon-position="left"
        icon-appearance="secondary"
        is-disabled="false"
        href="/"
        ><wink-icon slot="link-icon" appearance="secondary" icon="stack" size="sm"></wink-icon>Products</wink-link
      >
      <wink-link
        appearance="dropdown-menu-link"
        size="inherit"
        icon-position="left"
        icon-appearance="secondary"
        is-disabled="false"
        href="#"
        ><wink-icon slot="link-icon" appearance="secondary" icon="bill" size="sm"></wink-icon>Billy</wink-link
      >
    </wink-dropdown-menu>`;
  },
};

export const Default = {};
export const LanguageDropdown = {
  args: {
    heading: 'NL',
    itemSelected: 'NL',
  },
  render: (args: any) => html`
    <wink-dropdown-menu is-expanded="${args.isExpanded}" heading="${args.heading}" item-selected="${args.itemSelected}">
      <wink-link appearance="dropdown-menu-link">NL</wink-link>
      <wink-link appearance="dropdown-menu-link">FR</wink-link>
      <wink-link appearance="dropdown-menu-link">EN</wink-link>
    </wink-dropdown-menu>
  `,
};
