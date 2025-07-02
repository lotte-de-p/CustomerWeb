import type { Meta } from '@storybook/web-components';
import { BADGES } from '../../../models/badges.types';
import inputStories from './input.stories';
import { INPUT_TYPES } from './models/input.types';
import { cleanScopedWinkElements } from '../../../utils/utils';

export default {
  title: 'FORM COMPONENTS/Password',
  parameters: {
    badges: [BADGES.ready],
    html: {
      transform: (code: string) => cleanScopedWinkElements(code, ['wink-input']),
    },
  },
  argTypes: {
    ...inputStories.argTypes,
  },
  args: {
    ...inputStories.args,
    type: INPUT_TYPES.password,
  },
  render: inputStories.render,
} as Meta;

export const Default = {
  args: {
    label: 'Uw wachtwoord',
    helper: 'Een wachtwoord moet minimaal 8 karakters , 1 hoofdletter, 1 kleine letter en 1 cijfer bevatten.',
    placeholder: 'Uw wachtwoord',
    type: INPUT_TYPES.password,
    isRequired: true,
    iconRight: 'eye',
    labelLinkText: 'Wachtwoord vergeten?',
    labelHref: 'Set link destination.',
  },
};
