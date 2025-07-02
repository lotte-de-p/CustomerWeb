import { html } from "lit-html";
import { styleMap } from "lit-html/directives/style-map.js";
import { BADGES } from "../../models";
import { ICONS_NAMES_GROUPED } from "../../assets/shared/data/icons-name.data";
import { capitalize } from "../../assets/shared/scripts/utils";
export default {
    title: 'Icons overview',
    component: 'IconsOverview',
    parameters: {
        badges: [BADGES.inProgress],
        controls: { disable: true },
        a11y: { disable: true },
        html: { disable: true },
    },
    render: () => {
        const iconWrapperCss = {
            padding: '3rem',
        };
        const iconGridOverviewCss = {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(17rem, 1fr))',
            gap: '1rem',
        };
        const iconItemCss = {
            display: 'grid',
            gap: '1rem',
            justifyItems: 'center',
            alignContent: 'space-between',
            textAlign: 'center',
            backgroundColor: 'var(--semantic-color-background-surface-subtle-default)',
            borderRadius: '1rem',
            padding: '3rem 1rem',
            boxSizing: 'border-box',
        };
        return html `
      <div style=${styleMap(iconWrapperCss)}>
        ${Object.entries(ICONS_NAMES_GROUPED).map(([category, icons]) => {
            return html `
            <wink-title html-tag="h1" text="${capitalize(category)}"></wink-title>
            <div style=${styleMap(iconGridOverviewCss)}>
              ${icons.map((icon) => html `
                  <div style=${styleMap(iconItemCss)}>
                    <wink-icon appearance="default" icon=${icon} size="xl"></wink-icon>
                    <wink-paragraph class="font--caption-small">${capitalize(icon)}</wink-paragraph>

                    <wink-link
                      appearance="default"
                      size="body-regular"
                      target="_parent"
                      href=${`./?path=/story/components-icon--default&args=size:md;category:all-icons;all-icons:${icon}`}>
                      Go to code
                    </wink-link>
                  </div>
                `)}
            </div>
          `;
        })}
      </div>
    `;
    },
};
export const Default = { name: 'Icons overview' };
//# sourceMappingURL=icons-overview.stories.js.map
