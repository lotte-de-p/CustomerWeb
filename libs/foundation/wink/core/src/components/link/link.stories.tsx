import { html, nothing } from 'lit-html';
import { ICON_SIZES, ICON_TYPES_BASIS } from '../icon/models/icon.types';
import { BADGES } from '../../models/badges.types';
import {
  LINK_APPEARANCES_DEFAULT,
  LINK_APPEARANCES_SNOWFLAKES,
  LINK_ICON_POSITIONS,
  LINK_SIZES,
} from './models/link.types';
import { TARGETS } from '../../models/targets.types';
import { getValuesAsArrayFromObject } from '../../utils/utils';
import { ICONS_NAMES_GROUPED } from '../../assets/shared/data/icons-name.data';

const inlineRadio = 'inline-radio';

type Args = {
  appearance: string;
  size: string;
  icon: string;
  iconSize: string;
  iconPosition: string;
  iconAppearance: string;
  isDisabled: boolean;
  href: string;
  target: string;
  slot: string;
};

export default {
  title: 'COMPONENTS/Link',
  component: 'Link',
  parameters: {
    badges: [BADGES.ready],
  },
  argTypes: {
    appearance: {
      control: inlineRadio,
      options: Object.values(LINK_APPEARANCES_DEFAULT),
      description:
        'The appearance property in the link component specifies its visual style, offering options like "default", "subtle", or "area" for consistent presentation and interaction within different contexts.',
    },
    size: {
      control: inlineRadio,
      options: Object.values(LINK_SIZES),
      description:
        'The size property in the link component offers options like "inherit" or "bodyRegular" for controlling its text size, ensuring consistent typography and readability.',
    },
    icon: {
      control: 'select',
      options: ['', ...getValuesAsArrayFromObject(ICONS_NAMES_GROUPED)],
      description: 'The icon property specifies the name of the icon displayed.',
    },
    iconPosition: {
      control: 'select',
      options: Object.values(LINK_ICON_POSITIONS),
      description:
        'The iconPosition property determines the placement of the icon within the link component, allowing options such as "left" or "right".',
    },
    iconAppearance: {
      control: 'inline-radio',
      options: Object.values(ICON_TYPES_BASIS),
      description:
        'The iconAppearance property in the link component allows selection from options like "default", "primary", or "secondary", influencing the style of the displayed icon for enhanced visual differentiation and coherence.',
    },
    isDisabled: {
      control: 'boolean',
      description:
        'The isDisabled property in the link component, when set to true, disables interaction with the link, providing visual feedback and preventing user engagement.',
      table: {
        defaultValue: { summary: false },
      },
    },
    href: {
      control: 'text',
      description:
        'The href property specifies the hyperlink reference for the link component when it is rendered as an anchor tag, allowing navigation to a specific URL when clicked.',
      type: { name: 'string', required: true },
    },
    target: {
      control: 'select',
      options: Object.values(TARGETS),
      description:
        'The target property determines how the linked URL should be opened when the button component is rendered as an anchor tag, allowing options such as "_self", "_blank", "_parent", or "_top" for defining the browsing context.',
      table: {
        defaultValue: { summary: TARGETS.self },
      },
    },
    slot: {
      description:
        'The slot property serves as a placeholder allowing users to add custom content within the link component.',
    },
  },
  args: {
    appearance: LINK_APPEARANCES_DEFAULT.default,
    slot: '',
    size: LINK_SIZES.inherit,
    href: '#',
    target: TARGETS.self,
    icon: 'arrow-left',
    iconSize: ICON_SIZES.md,
    iconPosition: LINK_ICON_POSITIONS.left,
    iconAppearance: ICON_TYPES_BASIS.default,
    isDisabled: false,
  },
  render: (args: Args) => {
    return html`
      <wink-link
        appearance="${args.appearance}"
        size="${args.size}"
        href="${args.href}"
        icon="${args.icon}"
        icon-position="${args.icon ? args.iconPosition : nothing}"
        icon-appearance="${args.icon ? args.iconAppearance : nothing}"
        is-disabled="${args.isDisabled}">
        ${args.icon !== ''
          ? html`<wink-icon
              slot="link-icon"
              appearance="${args.icon ? args.iconAppearance : nothing}"
              icon=${args.icon}
              size=${args.iconSize}></wink-icon>`
          : ''}
        ${args.slot}
      </wink-link>
    `;
  },
};

export const Inline = {
  args: {
    appearance: LINK_APPEARANCES_DEFAULT.default,
    slot: 'Default inline link with Inherit Font Style',
    size: LINK_SIZES.inherit,
    href: '#',
    target: TARGETS.self,
    icon: '',
    isDisabled: false,
  },
  parameters: {
    controls: {
      include: ['slot', 'href', 'target', 'isDisabled'],
    },
  },
};
export const Standalone = {
  args: {
    appearance: LINK_APPEARANCES_DEFAULT.default,
    slot: 'Link Standalone',
    size: LINK_SIZES.bodyRegular,
    icon: 'location-pin',
    iconSize: ICON_SIZES.md,
    iconPosition: LINK_ICON_POSITIONS.left,
    iconAppearance: ICON_TYPES_BASIS.default,
  },
  parameters: {
    controls: {
      include: ['slot', 'href', 'target', 'icon', 'iconPosition', 'isDisabled'],
    },
  },
};
export const StandaloneSubtle = {
  args: {
    appearance: LINK_APPEARANCES_DEFAULT.subtle,
    slot: 'Link Standalone Subtle',
    size: LINK_SIZES.bodyRegular,
    icon: 'location-pin',
    iconSize: ICON_SIZES.md,
    iconPosition: LINK_ICON_POSITIONS.left,
    iconAppearance: ICON_TYPES_BASIS.default,
  },
  parameters: {
    controls: {
      include: ['slot', 'href', 'target', 'icon', 'iconPosition', 'isDisabled'],
    },
  },
};
export const Highlight = {
  args: {
    appearance: LINK_APPEARANCES_DEFAULT.subtle,
    slot: 'Link Highlight',
    size: LINK_SIZES.bodyRegular,
    href: '#',
    target: TARGETS.self,
    icon: 'chevron-right',
    iconSize: ICON_SIZES.sm,
    iconPosition: LINK_ICON_POSITIONS.left,
    iconAppearance: ICON_TYPES_BASIS.primary,
    isDisabled: false,
  },
  parameters: {
    controls: {
      include: ['slot', 'href', 'target', 'isDisabled'],
    },
  },
};
export const Back = {
  args: {
    appearance: LINK_APPEARANCES_DEFAULT.subtle,
    slot: 'Link Back',
    size: LINK_SIZES.bodyRegular,
    href: '#',
    target: TARGETS.self,
    icon: 'chevron-left',
    iconSize: ICON_SIZES.sm,
    iconPosition: LINK_ICON_POSITIONS.left,
    iconAppearance: ICON_TYPES_BASIS.secondary,
    isDisabled: false,
  },
  parameters: {
    controls: {
      include: ['slot', 'href', 'target', 'isDisabled'],
    },
  },
};

export const Area = {
  args: {
    appearance: LINK_APPEARANCES_DEFAULT.area,
    slot: 'Link Area',
    size: LINK_SIZES.inherit,
    href: '#',
    target: TARGETS.self,
    icon: '',
    isDisabled: false,
  },
  parameters: {
    controls: {
      include: ['slot', 'href', 'target', 'isDisabled'],
    },
  },
};
export const dropdownMenuLink = {
  tags: ['hidden'],
  args: {
    appearance: LINK_APPEARANCES_SNOWFLAKES.dropdownMenuLink,
    slot: 'Account',
    size: LINK_SIZES.inherit,
    href: '#',
    target: TARGETS.self,
    icon: 'user',
    iconSize: ICON_SIZES.sm,
    iconPosition: LINK_ICON_POSITIONS.left,
    iconAppearance: ICON_TYPES_BASIS.secondary,
    isDisabled: false,
  },
  parameters: {
    controls: {
      exclude: ['appearance', 'size'],
    },
  },
};
export const LinkMenuSecondary = {
  tags: ['hidden'],
  args: {
    appearance: LINK_APPEARANCES_SNOWFLAKES.menuSecondary,
    slot: 'Menu Secondary',
    size: LINK_SIZES.bodyRegular,
    href: '#',
    target: TARGETS.self,
    icon: 'headset',
    iconPosition: LINK_ICON_POSITIONS.left,
    iconAppearance: ICON_TYPES_BASIS.default,
  },
};

export const LinkMenuBack = {
  tags: ['hidden'],
  args: {
    appearance: LINK_APPEARANCES_SNOWFLAKES.menuBack,
    slot: 'Bundles',
    href: '#',
    target: TARGETS.self,
    size: 'caption-bold',
    icon: 'arrow-left',
    iconSize: ICON_SIZES.md,
    iconPosition: LINK_ICON_POSITIONS.left,
    iconAppearance: ICON_TYPES_BASIS.default,
  },
};
