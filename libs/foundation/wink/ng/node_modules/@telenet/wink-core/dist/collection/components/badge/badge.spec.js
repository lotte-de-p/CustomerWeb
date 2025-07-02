import { newSpecPage } from "@stencil/core/testing";
import { Badge } from "./badge";
describe('wink-badge', () => {
    it('should render the wink-badge element ', async () => {
        const page = await newSpecPage({
            components: [Badge],
            html: `<wink-badge></wink-badge>`,
        });
        expect(page.root).toEqualHtml(`
      <wink-badge>
        <mock:shadow-root>
        </mock:shadow-root>
      </wink-badge>
    `);
    });
    it('should change the text in the badge if the text prop on the wink-badge element  is set', async () => {
        const page = await newSpecPage({
            components: [Badge],
            html: `<wink-badge text="test"></wink-badge>`,
        });
        expect(page.root).toEqualHtml(`
      <wink-badge text="test">
        <mock:shadow-root>
          test
        </mock:shadow-root>
      </wink-badge>
    `);
    });
    it('should not change the structure of the shadow-dom if background or size is set', async () => {
        const page = await newSpecPage({
            components: [Badge],
            html: `<wink-badge background="yellow" size="sm"></wink-badge>`,
        });
        expect(page.root).toEqualHtml(`
      <wink-badge background="yellow" size="sm">
        <mock:shadow-root>
        </mock:shadow-root>
      </wink-badge>
    `);
    });
});
//# sourceMappingURL=badge.spec.js.map
