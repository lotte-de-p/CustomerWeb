import type { Meta } from '@storybook/web-components';
import { BADGES } from '../../models';
import { html, nothing } from 'lit-html';
import { getValuesAsArrayFromObject } from '../../utils/utils';
import { ICONS_NAMES_GROUPED } from '../../assets/shared/data/icons-name.data';

export default {
  title: 'COMPONENTS/Accordion',
  component: 'accordion',
  parameters: {
    badges: [BADGES.ready],
  },
  argTypes: {
    heading: {
      name: 'heading',
      control: 'text',
      description: 'The heading property specifies the text content displayed as the title of an accordion section.',
      type: { name: 'string', required: true },
    },
    icon: {
      name: 'icon',
      control: 'select',
      options: ['', ...getValuesAsArrayFromObject(ICONS_NAMES_GROUPED)],
      description: 'The icon property defines the icon displayed before the title in an accordion section.',
    },
    isExpanded: {
      name: 'isExpanded',
      control: 'boolean',
      description: 'The isExpanded property, when set to true, indicates that the accordion section is expanded.',
    },
    slot: {
      name: 'slot',
      control: 'text',
      description:
        'The slot property serves as a placeholder allowing users to add custom content within the accordion component.',
    },
  },
  args: {
    icon: '',
    heading: 'Installatie en activatie',
    slot: '<p>Gratis (zelf) installeren: Indien je in aanmerking komt voor een Self Starter-installatie, kan je jouw vaste Telenet-diensten gratis zelf installeren. Kan op het registratieadres geen Self Starter-installatie geboekt worden, dan kom je in aanmerking voor een gratis Comfort-installatie t.w.v. €85. Een technieker zal dan op het woonadres van de klant de Telenet-diensten komen installeren.</p>',
    isExpanded: false,
  },
  render: (args) => {
    const parser = new DOMParser();
    const safeHtml = parser.parseFromString(args.slot, 'text/html');
    return html`
      <wink-accordion
        icon="${args.icon || nothing}"
        heading="${args.heading || nothing}"
        is-expanded="${args.isExpanded || nothing}">
        ${safeHtml.body.firstChild}
      </wink-accordion>
    `;
  },
} as Meta;

export const Default = {};
