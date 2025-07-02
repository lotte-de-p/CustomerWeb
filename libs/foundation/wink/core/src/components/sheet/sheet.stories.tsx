import { Meta } from '@storybook/web-components';
import { html, nothing } from 'lit-html';
import { BADGES } from '../../models';
import { STORY_CATEGORIES } from '../../models/categories.types';

export default {
  title: 'COMPONENTS/Sheet',
  component: 'Sheet',
  parameters: {
    badges: [BADGES.ready],
    layout: 'fullscreen',
    html: {
      transform: (code: string) => {
        return code.replace(
          /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>|<wink-button\b[^<]*(?=.*?class="sb-only")[^<]*<\/wink-button>/g,
          ''
        );
      },
    },
  },
  argTypes: {
    isVisible: {
      type: 'boolean',
      description: 'The isVisible property specifies whether the sheet should be visible or not.',
      table: {
        defaultValue: { summary: 'true' },
        category: STORY_CATEGORIES.cp,
      },
    },
    dashboard: {
      type: 'boolean',
      description: 'The dashboard property specifies whether the sheet should be darker in color or not.',
      table: {
        defaultValue: { summary: 'false' },
        category: STORY_CATEGORIES.cp,
      },
    },
    multipage: {
      type: 'boolean',
      description: 'The multipage property specifies whether the sheet should be multipage or not.',
      table: {
        defaultValue: { summary: 'false' },
        category: STORY_CATEGORIES.cp,
      },
    },
    showSheetButton: {
      control: 'boolean',
      description: 'The showSheetButton property specifies whether the create sheet button should be shown or not.',
      table: {
        defaultValue: { summary: 'true' },
        category: STORY_CATEGORIES.sp,
      },
    },
  },
  args: {
    isVisible: true,
    showSheetButton: true,
    dashboard: false,
    multipage: false,
  },
  render: (args) =>
    html` ${args.showSheetButton
        ? html`<script>
              const showSheet = async (params) => {
                await customElements.whenDefined('wink-sheet');
                const sheetElement = document.querySelector('wink-sheet');
                await sheetElement.open();
              };
            </script>
            <wink-button
              class="sb-only"
              style="margin: 4rem"
              onClick="showSheet()"
              text="Show/hide Sheet"
              element="button"
              type="button"
              appearance="primary"
              size="md"
              status="none">
            </wink-button>`
        : ''}
      <wink-sheet
        is-visible="${args.isVisible}"
        dashboard="${args.dashboard || nothing}"
        multipage="${args.multipage || nothing}">
        ${args.multipage
          ? html`
              <div slot="page-first">
                <wink-title html-tag="h2" text="Slimme wifi-pods" spacing-y="bottom"></wink-title>
                <wink-paragraph appearance="body" size="small">
                  De slimme wifi-pods, onze laatste nieuwe wifi-versterkers, vormen samen met je modem en gekoppelde
                  diensten een zelfregelend systeem. Dat systeem – Telenet 360° Wifi genoemd – zorgt voor een stabiele
                  en snelle wifi-verbinding overal in huis en op elk toestel. Probeer ze 3 maanden gratis.
                </wink-paragraph>
              </div>
              <div slot="page-second">
                <wink-title
                  html-tag="h2"
                  text="Telenet slimme wifi om je wifi-signaal te versterken"
                  spacing-y="bottom"></wink-title>
                <wink-paragraph appearance="body" size="small">
                  Niets vervelender dan wifi die niet werkt zoals het moet. Hakkelende videogesprekken, haperend beeld,
                  lange laadtijden. Frustrerend en niet bepaald handig. Niet voor je gezin, dat volop wil streamen –
                  maar ook niet als je thuis werkt of een eigen zaak hebt. Gelukkig is er ook voor dit probleem een
                  oplossing: ons superslim wifi-systeem aka de slimme wifi-pods.
                </wink-paragraph>
              </div>
              <wink-button
                slot="footer"
                text="Lees meer"
                class="wink-button-forward"
                element="button"
                type="button"
                appearance="secondary"
                size="md"
                width="full"></wink-button>
              <wink-button
                slot="footer-second"
                class="wink-button-back"
                text="Terug"
                element="button"
                type="button"
                appearance="secondary"
                size="md"
                width="full"></wink-button>
              <wink-button
                class="wink-button-close"
                slot="footer-second"
                text="Confirmeren"
                element="button"
                type="button"
                appearance="primary"
                size="md"
                width="full"></wink-button>
            `
          : html`
              <wink-title html-tag="h2" text="Slimme wifi-pods" spacing-y="bottom"></wink-title>
              <wink-paragraph appearance="body" size="small">
                De slimme wifi-pods, onze laatste nieuwe wifi-versterkers, vormen samen met je modem en gekoppelde
                diensten een zelfregelend systeem. Dat systeem – Telenet 360° Wifi genoemd – zorgt voor een stabiele en
                snelle wifi-verbinding overal in huis en op elk toestel. Probeer ze 3 maanden gratis.
              </wink-paragraph>
              <br />
              <wink-button text="Ontdek" element="button" type="button" appearance="secondary"></wink-button>
              <div slot="footer">
                <wink-button
                  text="Lees meer"
                  element="button"
                  type="button"
                  appearance="secondary"
                  size="md"
                  width="full"></wink-button>
              </div>
            `}
      </wink-sheet>`,
} as Meta;

export const Default = {
  args: {
    isVisible: true,
    showSheetButton: true,
    dashboard: false,
    multipage: false,
  },
};

export const Multipage = {
  args: {
    isVisible: true,
    showSheetButton: true,
    multipage: true,
    dashboard: true,
  },
};
