import { newSpecPage } from "@stencil/core/testing";
import { Indicator } from "./indicator";
describe('wink-indicator', () => {
    it('should should create an instance of Indicator class component', () => {
        const comp = new Indicator();
        expect(comp).toBeInstanceOf(Indicator);
    });
    it('should render the element wink-indicator with default right indicator', async () => {
        const page = await newSpecPage({
            components: [Indicator],
            html: `<wink-indicator></wink-indicator>`,
        });
        expect(page.root).toEqualHtml(`
    <wink-indicator>
      <div class="wrapper">
        <div class="indicator">
        <wink-icon appearance="default" icon="chevron-right-small" size="sm"></wink-icon>
        </div>
      </div>
    </wink-indicator>
  `);
    });
    it('should render the element wink-indicator with left indicator', async () => {
        const page = await newSpecPage({
            components: [Indicator],
            html: `<wink-indicator direction="left"></wink-indicator>`,
        });
        expect(page.root).toEqualHtml(`
    <wink-indicator direction="left">
      <div class="wrapper">
        <div class="indicator">
        <wink-icon appearance="default" icon="chevron-left-small" size="sm"></wink-icon>
        </div>
      </div>
    </wink-indicator>
  `);
    });
    it('should render the element wink-indicator with up indicator', async () => {
        const page = await newSpecPage({
            components: [Indicator],
            html: `<wink-indicator direction="up"></wink-indicator>`,
        });
        expect(page.root).toEqualHtml(`
    <wink-indicator direction="up">
      <div class="wrapper">
        <div class="indicator">
        <wink-icon appearance="default" icon="chevron-up-small" size="sm"></wink-icon>
        </div>
      </div>
    </wink-indicator>
  `);
    });
    it('should render the element wink-indicator with down indicator', async () => {
        const page = await newSpecPage({
            components: [Indicator],
            html: `<wink-indicator direction="down"></wink-indicator>`,
        });
        expect(page.root).toEqualHtml(`
    <wink-indicator direction="down">
      <div class="wrapper">
        <div class="indicator">
        <wink-icon appearance="default" icon="chevron-down-small" size="sm"></wink-icon>
        </div>
      </div>
    </wink-indicator>
  `);
    });
});
//# sourceMappingURL=indicator.spec.js.map
