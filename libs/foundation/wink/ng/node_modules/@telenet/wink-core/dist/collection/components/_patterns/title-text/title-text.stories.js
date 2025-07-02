import { html } from "lit-html";
import * as TitleStory from "../../title/title.stories";
import * as ParagraphStory from "../../paragraph/paragraph.stories";
import { TITLE_SIZES } from "../../title/models/title.types";
import { PARAGRAPH_APPEARANCES, PARAGRAPH_SIZES } from "../../paragraph/models/paragraph.types";
import { BADGES } from "../../../models/badges.types";
export default {
    title: 'PATTERNS/TitleText',
    argTypes: {
        ...TitleStory.default.argTypes,
        ...ParagraphStory.default.argTypes,
    },
    args: {
        text: 'Het netwerk van de toekomst is hier',
        htmlTag: TITLE_SIZES.h1,
        spacingY: 'default',
        slot: 'Aan variatie en uitdaging geen gebrek bij een baan in onze winkels of contactcenters. Elke dag is anders, en dat is hoe jij het leuk vindt. Je helpt klanten niet zomaar; jij rolt met plezier de rode loper voor ze uit. Terwijl u er bent voor onze klanten, zijn wij er voor elkaar. Met ‘een tien voor sociale, vriendelijke werkomgeving’, een betekenisvolle baan en de mogelijkheid om thuis te werken.',
        appearance: PARAGRAPH_APPEARANCES.body,
        size: PARAGRAPH_SIZES.regular,
    },
    parameters: {
        badges: [BADGES.ready],
        controls: {
            sort: 'none',
            exclude: ['spacingY', 'noSeo'],
        },
    },
    render: (args) => html `
    <wink-title html-tag="${args.htmlTag}" text="${args.text}"></wink-title>
    <wink-paragraph appearance="${args.appearance}" size="${args.size}">${args.slot}</wink-paragraph>
  `,
};
export const Default = {};
//# sourceMappingURL=title-text.stories.js.map
