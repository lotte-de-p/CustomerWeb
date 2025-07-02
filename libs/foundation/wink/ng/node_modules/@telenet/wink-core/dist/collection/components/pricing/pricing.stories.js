import { html, nothing } from "lit-html";
import { PRICING_ALIGN, LANGUAGES, PRICING_TYPES } from "./models/pricing.types";
import { BADGES } from "../../models/badges.types";
const inlineRadio = 'inline-radio';
const alignmentDescription = 'The alignment property specifies whether the content is aligned to the left or right within its container.';
export default {
    title: 'COMPONENTS/Pricing',
    component: 'Pricing',
    argTypes: {
        appearance: {
            control: inlineRadio,
            options: Object.values(PRICING_TYPES),
            description: 'The appearance property specifies the style variation, offering options like "text" or "patch" to determine the appearance of the pricing information.',
            table: {
                defaultValue: { summary: PRICING_TYPES.text },
            },
        },
        annotation: {
            control: inlineRadio,
            options: Object.values(LANGUAGES),
            description: 'The annotation property determines the language used for the currency notation of the price value within the pricing component.',
            table: {
                defaultValue: { summary: LANGUAGES.nl },
            },
        },
        alignmentText: {
            name: 'alignment',
            control: inlineRadio,
            options: [PRICING_ALIGN.left, PRICING_ALIGN.center],
            description: alignmentDescription,
            if: { arg: 'appearance', eq: PRICING_TYPES.text },
            table: {
                defaultValue: { summary: PRICING_ALIGN.left },
            },
        },
        alignmentSubtle: {
            name: 'alignment',
            control: inlineRadio,
            options: [PRICING_ALIGN.left, PRICING_ALIGN.center, PRICING_ALIGN.right],
            description: alignmentDescription,
            if: { arg: 'appearance', eq: PRICING_TYPES.subtle },
            table: {
                defaultValue: { summary: PRICING_ALIGN.left },
            },
        },
        startingFrom: {
            description: 'The startingFrom property is used to display text indicating that the price represents a starting point or minimum value.',
        },
        priceStrikethrough: {
            description: 'The priceStrikethrough property specifies the promotional price displayed at the top, typically in a smaller font size, drawing attention to special offers or discounts.',
        },
        price: {
            description: 'The price property displays the actual price value, indicating the cost associated with the product or service being offered.',
            type: { name: 'string', required: true },
        },
        frequency: {
            description: "The frequency property indicates the frequency at which the pricing is charged or billed, providing information on whether it's a one-time payment, monthly subscription, or other recurring intervals.",
        },
        duration: {
            description: "The duration property specifies the duration or validity period of the promotional price, providing additional context about the offer's timeframe.",
        },
    },
    parameters: {
        badges: [BADGES.ready],
    },
    args: {
        appearance: PRICING_TYPES.text,
        alignmentText: PRICING_ALIGN.left,
        alignmentSubtle: PRICING_ALIGN.left,
        annotation: LANGUAGES.nl,
        startingFrom: 'Vanaf',
        priceStrikethrough: '131,90',
        price: '65.95',
        frequency: 'per maand',
        duration: 'Gedurende 3 maanden',
    },
    render: (args, { globals: { brand, theme } }) => {
        let alignmentValue = args.alignmentText;
        switch (args.appearance) {
            case PRICING_TYPES.patch:
                alignmentValue = PRICING_ALIGN.center;
                break;
            case PRICING_TYPES.subtle:
                alignmentValue = args.alignmentSubtle;
                break;
        }
        return html `
      <wink-pricing
        theme="${theme}"
        brand="${brand}"
        appearance="${args.appearance}"
        alignment="${alignmentValue}"
        annotation="${args.annotation}"
        starting-from="${args.startingFrom}"
        price-strikethrough="${args.priceStrikethrough || nothing}"
        price="${args.price || nothing}"
        frequency="${args.frequency || nothing}"
        duration="${args.duration || nothing}">
      </wink-pricing>
    `;
    },
};
export const Default = {};
//# sourceMappingURL=pricing.stories.js.map
