import { html } from 'lit-html';
import { Meta } from '@storybook/web-components';
import { BADGES } from '../../../models/badges.types';
import { STORY_CATEGORIES } from '../../../models/categories.types';

export default {
  title: 'PATTERNS/Address',
  component: 'Address',
  parameters: {
    badges: [BADGES.ready],
  },
  argTypes: {
    fullWidthRows: {
      control: 'boolean',
      description: 'Show the full width.',
      table: {
        category: STORY_CATEGORIES.cpBasic,
      },
    },
  },
  args: {
    fullWidthRows: true,
  },
  render: (args: any) => {
    const renderFormRows = html` <wink-input label="Straat" type="text" name="input-street" is-required></wink-input>
      <wink-spacer size="lg"></wink-spacer>
      <wink-input label="Huisnummer" type="number" name="input-housenumber" is-required></wink-input>
      <wink-spacer size="lg"></wink-spacer>
      <wink-input label="Bus" type="text" name="input-box"></wink-input>
      <wink-spacer size="lg"></wink-spacer>
      <wink-input label="Extra adresregel" type="text" name="input-street"></wink-input>
      <wink-spacer size="lg"></wink-spacer>
      <wink-input label="Postcode" type="number" name="input-postal-code" is-required></wink-input>
      <wink-spacer size="lg"></wink-spacer>
      <wink-input label="Stad" type="text" name="input-city" is-required></wink-input>
      <wink-spacer size="lg"></wink-spacer>
      <wink-input label="Land" type="text" name="input-land" is-required value=""></wink-input>`;

    const renderFormCols = html` <wink-input label="Straat" type="text" name="input-street" is-required></wink-input>
      <wink-spacer size="lg"></wink-spacer>
      <wink-column-count cols-count="2">
        <wink-input label="Huisnummer" type="number" name="input-housenumber" is-required></wink-input>
        <wink-input label="Bus" type="text" name="input-box"></wink-input>
      </wink-column-count>

      <wink-column-count cols-count="2">
        <wink-input label="Extra adresregel" type="text" name="input-street"></wink-input>
      </wink-column-count>
      <wink-spacer size="lg"></wink-spacer>
      <wink-column-count cols-count="2">
        <wink-input label="Postcode" type="number" name="input-postal-code" is-required></wink-input>

        <wink-input label="Stad" type="text" name="input-city" is-required></wink-input>
      </wink-column-count>

      <wink-input label="Land" type="text" name="input-land" is-required value=""></wink-input>`;

    return html`${args.fullWidthRows ? renderFormRows : renderFormCols}`;
  },
} as Meta;

export const Default = {};
