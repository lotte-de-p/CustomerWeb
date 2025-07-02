import { html } from "lit-html";
import { repeat } from "../../assets/shared/scripts/utils";
import { BADGES } from "../../models/badges.types";
import { ALIGN_ITEMS, FLEX_DIRECTIONS, JUSTIFY_CONTENTS, WRAPS } from "../../models/flex.types";
import { STACK_SIZES } from "./models/stack.types";
import { STORY_CATEGORIES } from "../../models/categories.types";
const data = {
    col: {
        control: { type: 'number', min: 1, max: 12 },
        description: 'The col property determines the width of the stack, with options ranging from 1 to 12, following a grid system where each column represents a fraction of the total available width.',
    },
    direction: {
        control: 'select',
        options: Object.values(FLEX_DIRECTIONS),
        description: 'The direction property determines the arrangement of flex items along the main axis.',
    },
    gap: {
        control: 'select',
        options: Object.values(STACK_SIZES),
        description: 'The gap property adjusts the spacing between items within a container, facilitating control over the layout and visual balance of the design.',
    },
    justifyContent: {
        control: 'select',
        options: Object.values(JUSTIFY_CONTENTS),
        description: 'The justifyContent property aligns the flex items along the main axis within the container, affecting their positioning relative to each other.',
    },
    alignItems: {
        control: 'select',
        options: Object.values(ALIGN_ITEMS),
        description: 'The alignItems property aligns the flex items along the cross-axis within the container, influencing their positioning relative to each other in the perpendicular direction to the main axis.',
    },
    wrap: {
        control: 'select',
        options: Object.values(WRAPS),
        description: 'The wrap property in the flex container controls whether flex items wrap onto multiple lines based on available space or remain on a single line.',
    },
};
export default {
    title: 'COMPONENTS/Stack',
    component: 'Stack',
    parameters: {
        badges: [BADGES.ready],
    },
    argTypes: {
        exampleItems: {
            control: { type: 'number', min: 1, max: 12 },
            description: 'Allows you to add or remove additional items within the container to observe and test the behavior of the layout.',
            table: {
                category: STORY_CATEGORIES.sp,
            },
        },
        col: data.col,
        direction: data.direction,
        gap: data.gap,
        justifyContent: data.justifyContent,
        alignItems: data.alignItems,
        wrap: data.wrap,
        viewPortSm: {
            control: 'boolean',
            description: 'Reassigning properties for sm breakpoint and above.',
        },
        colSm: { ...data.col, if: { arg: 'viewPortSm' } },
        directionSm: { ...data.direction, if: { arg: 'viewPortSm' } },
        gapSm: { ...data.gap, if: { arg: 'viewPortSm' } },
        justifyContentSm: { ...data.justifyContent, if: { arg: 'viewPortSm' } },
        alignItemsSm: { ...data.alignItems, if: { arg: 'viewPortSm' } },
        wrapSm: { ...data.wrap, if: { arg: 'viewPortSm' } },
        viewPortMd: {
            control: 'boolean',
            description: 'Reassigning properties for md breakpoint and above.',
        },
        colMd: { ...data.col, if: { arg: 'viewPortMd' } },
        directionMd: { ...data.direction, if: { arg: 'viewPortMd' } },
        gapMd: { ...data.gap, if: { arg: 'viewPortMd' } },
        justifyContentMd: { ...data.justifyContent, if: { arg: 'viewPortMd' } },
        alignItemsMd: { ...data.alignItems, if: { arg: 'viewPortMd' } },
        wrapMd: { ...data.wrap, if: { arg: 'viewPortMd' } },
    },
    args: {
        exampleItems: 3,
        col: 12,
        direction: FLEX_DIRECTIONS.row,
        gap: STACK_SIZES.xs,
        justifyContent: JUSTIFY_CONTENTS.center,
        alignItems: ALIGN_ITEMS.center,
        wrap: WRAPS.wrap,
        viewPortSm: false,
        viewPortMd: false,
    },
    render: (args) => {
        const col = { default: args.col, sm: args.colSm, md: args.colMd };
        const colAsString = JSON.stringify(col).replaceAll('"', ' ');
        const direction = { default: args.direction, sm: args.directionSm, md: args.directionMd };
        const directionAsString = JSON.stringify(direction).replaceAll('"', ' ');
        const gap = { default: args.gap, sm: args.gapSm, md: args.gapMd };
        const gapAsString = JSON.stringify(gap).replaceAll('"', ' ');
        const justifyContent = { default: args.justifyContent, sm: args.justifyContentSm, md: args.justifyContentMd };
        const justifyContentAsString = JSON.stringify(justifyContent).replaceAll('"', ' ');
        const alignItems = { default: args.alignItems, sm: args.alignItemsSm, md: args.alignItemsMd };
        const alignItemsAsString = JSON.stringify(alignItems).replaceAll('"', ' ');
        const wrap = { default: args.wrap, sm: args.wrapSm, md: args.wrapMd };
        const wrapAsString = JSON.stringify(wrap).replaceAll('"', ' ');
        return html ` <wink-stack
      col="${colAsString}"
      direction="${directionAsString}"
      gap="${gapAsString}"
      justify-content="${justifyContentAsString}"
      align-items="${alignItemsAsString}"
      wrap="${wrapAsString}"
      .col="${col}"
      .direction="${direction}"
      .gap="${gap}"
      .justifyContent="${justifyContent}"
      .alignItems="${alignItems}"
      .wrap="${wrap}">
      ${repeat(args.exampleItems, html ` <div style="background: orange; padding: 1rem;">Column</div>`)}
    </wink-stack>`;
    },
};
export const Default = {};
//# sourceMappingURL=stack.stories.js.map
