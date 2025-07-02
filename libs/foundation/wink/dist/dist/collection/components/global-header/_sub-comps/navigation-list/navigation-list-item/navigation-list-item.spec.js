import { newSpecPage } from "@stencil/core/testing";
import { NavigationListItem } from "./navigation-list-item";
describe('NavigationListItem', () => {
    it('renders a navigation list item with the correct href and target', async () => {
        const page = await newSpecPage({
            components: [NavigationListItem],
            html: `
                <wink-navigation-list-item href="/home" target="_blank"> Test</wink-navigation-list-item>
            `,
        });
        expect(page.root).toEqualHtml(`
            <wink-navigation-list-item href="/home" target="_blank">
                <mock:shadow-root>
                    <a class="navigation-list-item"  href="/home" target="_blank"><slot></slot></a>
                </mock:shadow-root>
                Test
            </wink-navigation-list-item>
        `);
    });
    it('renders a navigation list item with the default target if not provided', async () => {
        const page = await newSpecPage({
            components: [NavigationListItem],
            html: `
                <wink-navigation-list-item href="/about">Test</wink-navigation-list-item>
            `,
        });
        expect(page.root).toEqualHtml(`
            <wink-navigation-list-item href="/about">
                <mock:shadow-root>
                    <a class="navigation-list-item"  href="/about" target="_self"><slot></slot></a>
                </mock:shadow-root>
                Test
            </wink-navigation-list-item>
        `);
    });
});
//# sourceMappingURL=navigation-list-item.spec.js.map
