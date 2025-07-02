import { html } from "lit-html";
import { BADGES } from "../../../models";
export default {
    title: 'UTILS/Column count',
    component: 'ColumnCount',
    tags: ['hidden'],
    parameters: {
        badges: [BADGES.new],
    },
    argTypes: {
        colsCount: {
            control: { type: 'number', min: 1, max: 4 },
            description: 'The colsCount property offers the option to define the max number of columns.',
            table: {
                defaultValue: { summary: 4 },
            },
        },
        items: {
            description: 'The items property gives the highlight links parameters to be displayed. Each link should have a text and a href property.',
            control: { type: 'array' },
            type: { name: 'string', required: true },
            table: {
                defaultValue: { summary: 4 },
            },
        },
    },
    args: {
        colsCount: 4,
        items: [
            'Weten hoe je draadloos internet moet instellen?',
            'Uitbreiding van ons fibernetwerk',
            'Wifi-problemen op een van je toestellen?',
            'Haal het beste uit je wifi met deze tips',
            'Klaar voor morgen met 5G',
            'Optimaal wifi-signaal met onze slimme wifi-versterkers',
            'Veilige internetverbinding dankzij onze cybersecurityoplossingen',
            'De betekenis van de lichtjes op je wifi-pods',
        ],
    },
    render: (args) => {
        return html `
      <wink-column-count cols-count="${args.colsCount}">
        ${args.items.map((item) => html ` <wink-paragraph appearance="body" size="small" class="font--body-regular">${item} </wink-paragraph>`)}
      </wink-column-count>
    `;
    },
};
export const Default = {};
//# sourceMappingURL=column-count.stories.js.map
