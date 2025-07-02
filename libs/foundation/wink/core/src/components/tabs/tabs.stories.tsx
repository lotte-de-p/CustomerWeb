import { html } from 'lit-html';
import type { Meta } from '@storybook/web-components';
import { BADGES } from '../../models/badges.types';
import { TAB_TYPES } from './models/tabs.types';

const slotContent = html`
  <div slot="tab-1" data-title="22 feb. - 21 mrt." data-subtitle="Huidige aanrekeningsperiode">
    <wink-title html-tag="h2" text="Klantenservice" spacing-y="default"> </wink-title>
    <wink-paragraph appearance="body" size="small">
      We zetten ons in om de beste service te bieden en de klanttevredenheid te verhogen.
    </wink-paragraph>
  </div>

  <div slot="tab-2" disabled data-title="22 jan. - 21 feb." data-subtitle="Vorige aanrekeningsperiode">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita hic optio quos recusandae! Lorem ipsum dolor sit
    amet, consectetur adipisicing elit. Dicta, doloremque, mollitia!
  </div>

  <div slot="tab-3" data-title="22 dec. - 21 jan." data-subtitle="Vorige aanrekeningsperiode">
    <wink-img
      src-desktop="/assets/shared/img/place-holders/testimg-desktop.jpg"
      src-mobile="/assets/shared/img/place-holders/testimg-mobile.jpg"
      src-tablet="/assets/shared/img/place-holders/testimg-tablet.jpg"
      alt="Please describe picture for screen-readers"
      loading="lazy">
    </wink-img>
  </div>

  <div slot="tab-4" data-title="22 nov. - 21 dec." data-subtitle="Vorige aanrekeningsperiode">
    <wink-title html-tag="h2" text="Onze klanten zijn onze prioriteit." spacing-y="default"> </wink-title>
    <wink-paragraph appearance="body" size="small">
      We zetten ons in om de beste service te bieden en de klanttevredenheid te verhogen.
    </wink-paragraph>
  </div>
`;

export default {
  title: 'COMPONENTS/Tabs',
  component: 'Tabs',
  parameters: {
    badges: [BADGES.ready],
  },
  argTypes: {
    appearance: {
      control: 'inline-radio',
      options: [TAB_TYPES.container, TAB_TYPES.inline],
      description:
        'The appearance property allows selection between variants of the tab, allowing the tab to be used in different contexts.',
      table: {
        defaultValue: { summary: TAB_TYPES.inline },
      },
    },
  },
  args: {
    appearance: TAB_TYPES.container,
  },

  render: (args) => html`
    ${args.appearance === TAB_TYPES.container
      ? html`<style>
          .sb-main-padded[theme='telenet-light-theme'] {
            background-color: var(--semantic-color-background-surface-subtle-default) !important;
          }
        </style>`
      : ''}
    <wink-tabs appearance="${args.appearance}"> ${slotContent} </wink-tabs>
  `,
} as Meta;

export const Default = {
  args: {},
};

export const Inline = {
  args: {
    appearance: TAB_TYPES.inline,
  },
};
