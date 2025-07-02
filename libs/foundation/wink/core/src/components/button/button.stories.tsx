import type { Meta } from '@storybook/web-components';
import { html, nothing } from 'lit-html';
import { BADGES } from '../../models';
import { TARGETS } from '../../models/targets.types';

import {
  BUTTON_APPEARANCES,
  BUTTON_ELEMENTS,
  BUTTON_ICON_POSITIONS,
  BUTTON_SIZES,
  BUTTON_STATUSES,
  BUTTON_WIDTHS,
  TYPES,
} from './models/button.types';
import { getValuesAsArrayFromObject, zeroheightBaseStory } from '../../utils/utils';
import { ICONS_NAMES_GROUPED } from '../../assets/shared/data/icons-name.data';

export default {
  title: 'COMPONENTS/Button',
  component: 'Button',
  parameters: {
    badges: [BADGES.ready],
  },
  argTypes: {
    text: {
      control: 'text',
      description:
        'The text property defines the text displayed on the button component, serving as both visible text and accessible content for users relying on screen readers or other accessibility tools.',
    },
    loadingText: {
      control: 'text',
      description: 'The loading text property defined the text that will be visible when the loading state is active.',
      if: { arg: 'status', eq: BUTTON_STATUSES.loading },
    },
    element: {
      control: {
        type: 'inline-radio',
        labels: {
          button: 'button',
          input: 'input',
          a: 'a (link)',
        },
      },
      options: Object.values(BUTTON_ELEMENTS),
      description:
        'The element property specifies whether the button component should be rendered as a button, an input element, or an anchor tag.',
      table: {
        defaultValue: { summary: BUTTON_ELEMENTS.button },
      },
    },
    href: {
      control: 'text',
      description:
        'The href property specifies the hyperlink reference for the button component when it is rendered as an anchor tag, allowing navigation to a specific URL when clicked.',
      if: { arg: 'element', eq: 'a' },
    },
    target: {
      control: 'select',
      options: Object.values(TARGETS),
      description:
        'The target property determines how the linked URL should be opened when the button component is rendered as an anchor tag, allowing options such as "_self", "_blank", "_parent", or "_top" for defining the browsing context.',
      if: { arg: 'element', eq: 'a' },
    },
    type: {
      control: 'select',
      options: Object.values(TYPES),
      description:
        'The type property specifies the behavior of the button component, allowing options such as "button", "submit", "reset", or "file" for defining different actions or inputs.',
      if: { arg: 'element', neq: 'a' },
    },
    appearance: {
      control: 'select',
      options: Object.values(BUTTON_APPEARANCES),
      description:
        'The appearance property in the button component allows selecting from primary, secondary, or tertiary visual styles or themes for the button.',
    },
    size: {
      control: 'inline-radio',
      options: Object.values(BUTTON_SIZES),
      description:
        'The size property allows choosing between medium (md) and small (sm) sizes for the button component.',
    },
    width: {
      control: 'select',
      options: Object.values(BUTTON_WIDTHS),
      description: 'The width property allows choosing between regular and full width for the button component.',
    },
    status: {
      control: 'select',
      options: Object.values(BUTTON_STATUSES),
      description:
        'The status property indicates the current state of the button component, allowing options such as "disabled", "loading", or "skeleton" for visual representation of different states.',
    },
    icon: {
      control: 'select',
      options: ['', ...getValuesAsArrayFromObject(ICONS_NAMES_GROUPED)],
      if: { arg: 'element', neq: 'input' },
      description:
        'The icon property specifies the name of the icon displayed on the button component. Choosing the first or empty option disables the icon. Note: This property cannot be used with input elements.',
    },
    iconPosition: {
      control: 'select',
      options: Object.values(BUTTON_ICON_POSITIONS),
      if: { arg: 'text', neq: '' },
      description:
        'The iconPosition property determines the placement of the icon within the button component, allowing options such as "left" or "right".',
    },
    iconButtonAriaLabel: {
      control: 'text',
      if: { arg: 'text', eq: '' },
      description:
        'The iconButtonAriaLabel is only needed when the button has no text. It is used to provide an accessible label for the icon button.',
    },
  },
  args: {
    text: 'Secondary button',
    appearance: BUTTON_APPEARANCES.secondary,
    size: BUTTON_SIZES.md,
    width: BUTTON_WIDTHS.none,
    icon: 'chevron-right',
    iconPosition: BUTTON_ICON_POSITIONS.right,
    iconButtonAriaLabel: '',
    status: BUTTON_STATUSES.none,
    loadingText: 'loading',
    element: BUTTON_ELEMENTS.button,
    href: '',
    target: '',
    type: TYPES.button,
  },

  render: (args, { globals: { theme } }) =>
    html` <wink-button
      theme="${theme}"
      text="${args.text || nothing}"
      appearance="${args.appearance}"
      size="${args.size}"
      width="${args.width || nothing}"
      icon="${args.icon || nothing}"
      icon-button-aria-label="${args.iconButtonAriaLabel || nothing}"
      icon-position="${args.iconPosition || nothing}"
      status="${args.status}"
      loading-text="${args.loadingText || nothing}"
      element="${args.element}"
      href="${args.href || nothing}"
      target="${args.target || nothing}"
      type="${args.type || nothing}">
    </wink-button>`,
} as Meta;

export const Primary = {
  args: {
    text: 'Button primary',
    appearance: BUTTON_APPEARANCES.primary,
  },
};

export const Secondary = {
  args: {},
};

export const Tertiary = {
  args: {
    text: 'Button tertiary',
    appearance: BUTTON_APPEARANCES.tertiary,
  },
};

export const IconButton = {
  args: {
    text: '',
    appearance: BUTTON_APPEARANCES.primary,
    size: BUTTON_SIZES.md,
    icon: 'basket',
    iconPosition: BUTTON_ICON_POSITIONS.left,
    status: BUTTON_STATUSES.none,
    element: BUTTON_ELEMENTS.button,
  },
};

export const ButtonWithoutIcon = {
  args: {
    text: 'Button without icon',
    appearance: BUTTON_APPEARANCES.primary,
    size: BUTTON_SIZES.md,
    icon: '',
    iconPosition: BUTTON_ICON_POSITIONS.left,
    status: BUTTON_STATUSES.none,
    element: BUTTON_ELEMENTS.button,
  },
};

export const InputButton = {
  args: {
    text: 'Input Element',
    appearance: BUTTON_APPEARANCES.primary,
    size: BUTTON_SIZES.md,
    status: BUTTON_STATUSES.none,
    element: BUTTON_ELEMENTS.input,
    type: TYPES.button,
  },
};

export const LinkButton = {
  args: {
    text: 'Link',
    appearance: BUTTON_APPEARANCES.primary,
    size: BUTTON_SIZES.md,
    status: BUTTON_STATUSES.none,
    element: BUTTON_ELEMENTS.a,
    href: 'https://www.telenet.be/',
    target: TARGETS.self,
  },
};

export const LoadingButton = {
  args: {
    text: '',
    appearance: BUTTON_APPEARANCES.primary,
    size: BUTTON_SIZES.md,
    iconButtonAriaLabel: 'Loading',
    status: BUTTON_STATUSES.loading,
    loadingText: 'Loading',
    element: BUTTON_ELEMENTS.a,
    href: 'https://www.telenet.be/',
    target: TARGETS.self,
  },
};

export const FullWidthButton = {
  args: {
    text: 'A full width Button',
    appearance: BUTTON_APPEARANCES.primary,
    size: BUTTON_SIZES.md,
    width: 'full',
    icon: '',
    iconPosition: BUTTON_ICON_POSITIONS.left,
    status: BUTTON_STATUSES.none,
    element: BUTTON_ELEMENTS.button,
  },
};

export const DefaultBase = zeroheightBaseStory();
