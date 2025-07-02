import { html } from "lit-html";
import { getStoryArgTypes } from "../../../utils/utils";
import { BADGES } from "../../../models/badges.types";
import columnCountStories from "../../_utils/column-count/column-count.stories";
import TitleStories from "../../title/title.stories";
import { STORY_CATEGORIES } from "../../../models/categories.types";
export default {
    title: 'PATTERNS/Related Links',
    component: 'RelatedLinks',
    parameters: {
        badges: [BADGES.inProgress],
        controls: { sort: 'none' },
    },
    argTypes: {
        WithTitle: {
            control: 'boolean',
            description: 'Show the title',
            table: {
                category: STORY_CATEGORIES.cp,
            },
        },
        ...getStoryArgTypes(TitleStories.argTypes || {}, STORY_CATEGORIES.cp, ['spacingY'], 'WithTitle'),
        ...getStoryArgTypes(columnCountStories.argTypes || {}, 'column count'),
    },
    args: {
        WithTitle: true,
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
    render: (args) => {
        const items = args.items.map((item) => html ` <wink-link
          appearance="subtle"
          icon="chevron-right"
          size="body-regular"
          icon-position="left"
          icon-appearance="primary"
          is-disabled="false"
          href="#">
          <wink-icon slot="link-icon" appearance="primary" icon="chevron-right" size="sm"></wink-icon>
          <wink-paragraph appearance="body" size="small" class="font--body-regular">${item.text}</wink-paragraph>
        </wink-link>`);
        return html ` ${args.WithTitle
            ? html ` <wink-title
              no-seo="${args.noSeo}"
              html-tag="${args.htmlTag}"
              text="${args.text}"
              spacing-y="none"></wink-title>
            <wink-spacer size="lg"></wink-spacer>`
            : ''}

      <wink-column-count cols-count="${args.colsCount}">${items}</wink-column-count>`;
    },
};
export const Default = {};
//# sourceMappingURL=related-links.stories.js.map
