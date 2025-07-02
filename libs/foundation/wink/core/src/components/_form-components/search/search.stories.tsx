import type { Meta } from '@storybook/web-components';
import { html, nothing } from 'lit-html';
import { BADGES } from '../../../models/badges.types';
import * as InputStory from '../input/input.stories';

import { cleanScopedWinkElements } from '../../../utils/utils';

export default {
  title: 'FORM COMPONENTS/Search',
  parameters: {
    badges: [BADGES.ready],
    html: {
      transform: (code: string) => cleanScopedWinkElements(code, ['wink-search']),
    },
  },
  tags: ['hidden'],
  argTypes: {
    inputId: {
      ...InputStory.default.argTypes?.inputId,
    },
    name: {
      ...InputStory.default.argTypes?.name,
    },
    value: {
      ...InputStory.default.argTypes?.value,
    },
    placeholder: {
      ...InputStory.default.argTypes?.placeholder,
    },
    enterkeyhintOption: {
      ...InputStory.default.argTypes?.enterkeyhintOption,
    },
  },
  args: {
    name: 'search',
    inputId: 'search',
    value: '',
    placeholder: 'Uw zoekopdracht',
    enterkeyhintOption: 'search',
  },
  render: (args: any) =>
    html`<wink-search
      value="${args.value || nothing}"
      placeholder="${args.placeholder || nothing}"
      input-id=${args.inputId || nothing}
      name="${args.name || nothing}"
      enterkeyhint-option=${args.enterkeyhintOption || nothing}></wink-search> `,
} as Meta;

export const Default = {};
