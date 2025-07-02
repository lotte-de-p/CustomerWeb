import { html } from 'lit-html';
import { Meta } from '@storybook/web-components';
import { getStoryArgTypes } from '../../../utils/utils';
import { BADGES } from '../../../models/badges.types';
import columnCountStories from '../../_utils/column-count/column-count.stories';
import TitleStories from '../../title/title.stories';
import { STORY_CATEGORIES } from '../../../models/categories.types';

export default {
  title: 'PATTERNS/Related links',
  component: 'RelatedLinks',
  parameters: {
    badges: [BADGES.ready],
    controls: { sort: 'none' },
  },
  argTypes: {
    showTitle: {
      control: 'boolean',
      description: 'Show the title',
      table: {
        category: STORY_CATEGORIES.sp,
      },
    },
    ...getStoryArgTypes(TitleStories.argTypes || {}, STORY_CATEGORIES.cp, ['spacingY'], 'showTitle'),
    ...getStoryArgTypes(columnCountStories.argTypes || {}, 'column count'),
  },
  args: {
    showTitle: true,
    ...{
      ...TitleStories.args,
      text: 'Wat zoek je?',
    },
    ...columnCountStories.args,
    items: [
      {
        text: 'Weten hoe je draadloos internet moet instellen?',
        href: '#',
      },
      {
        text: 'Uitbreiding van ons fibernetwerk',
        href: '/home',
      },
      {
        text: 'Wifi-problemen op een van je toestellen?',
        href: '/home',
      },
      {
        text: 'Haal het beste uit je wifi met deze tips',
        href: '/home',
      },
      {
        text: 'Klaar voor morgen met 5G',
        href: '/home',
      },
      {
        text: 'Optimaal wifi-signaal met onze slimme wifi-versterkers',
        href: '/home',
      },
      {
        text: 'Veilige internetverbinding dankzij onze cybersecurityoplossingen',
        href: '/home',
      },
      {
        text: 'De betekenis van de lichtjes op je wifi-pods',
        href: '/home',
      },
    ],
  },
  render: (args: any) => {
    const items = args.items.map(
      (item: { href: string; text: string }) =>
        html` <wink-link
          appearance="subtle"
          icon="chevron-right"
          size="body-regular"
          icon-position="left"
          icon-appearance="primary"
          is-disabled="false"
          href="#">
          <wink-icon slot="link-icon" appearance="primary" icon="chevron-right" size="sm"></wink-icon>
          <wink-paragraph appearance="body" size="small" class="font--body-regular">${item.text}</wink-paragraph>
        </wink-link>`
    );

    return html` ${args.showTitle
        ? html` <wink-title
              no-seo="${args.noSeo}"
              html-tag="${args.htmlTag}"
              text="${args.text}"
              spacing-y="none"></wink-title>
            <wink-spacer size="lg"></wink-spacer>`
        : ''}

      <wink-column-count cols-count="${args.colsCount}">${items}</wink-column-count>`;
  },
} as Meta;

export const Default = {};
