import { html, nothing } from "lit-html";
import { BADGES } from "../../../../models/badges.types";
export default {
    title: 'COMPONENTS/Global header/Navigation list',
    component: 'NavigationList',
    tags: ['hidden'],
    argTypes: {
        listTitle: {
            description: 'The listTitle property specifies the title or label displayed for the menu, providing context or instruction to users regarding its content or purpose.',
            control: { type: 'text' },
        },
        hasBoldLinks: {
            description: 'The hasBoldLinks property specifies whether the links in the list should be bold or not.',
            control: { type: 'boolean' },
        },
        links: {
            description: 'The links property gives the links to be displayed in the list. Each link should have a text and a href property.',
            control: { type: 'array' },
        },
    },
    args: {
        listTitle: 'Support',
        hasBoldLinks: false,
        links: [
            {
                text: 'Hulp nodig met internet',
                href: '/home',
            },
            {
                text: 'Jouw product beheren',
                href: '#',
            },
            {
                text: 'Meer inspiratie omtrent internet',
                href: '#',
            },
            {
                text: 'Meer inspiratie omtrent internet',
                href: '#',
            },
        ],
    },
    parameters: {
        badges: [BADGES.inProgress],
    },
    render: (args) => {
        const links = args.links.map((link) => html `<wink-navigation-list-item href="${link.href}">${link.text}</wink-navigation-list-item>`);
        return html `
      <wink-navigation-list list-title="${args.listTitle}" has-bold-links="${args.hasBoldLinks || nothing}">
        ${links}
      </wink-navigation-list>
    `;
    },
};
export const Default = {};
export const withBoldLinks = {
    args: {
        listTitle: 'Internet producten',
        hasBoldLinks: true,
        links: [
            {
                text: 'Internet + Mobiel + TV',
                href: '/home',
            },
            {
                text: 'Internet + Mobiel',
                href: '#',
            },
            {
                text: 'Internet + TV',
                href: '#',
                target: '_blank',
            },
            {
                text: 'Internet only',
                href: '#',
            },
        ],
    },
};
//# sourceMappingURL=navigation-list.stories.js.map
