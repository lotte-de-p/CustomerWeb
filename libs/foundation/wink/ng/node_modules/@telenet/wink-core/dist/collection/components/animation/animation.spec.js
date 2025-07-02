import { newSpecPage } from "@stencil/core/testing";
import { Animation } from "./animation";
describe('wink-animation', () => {
    it('should should create an instance of Animation class component', () => {
        const comp = new Animation();
        expect(comp).toBeInstanceOf(Animation);
    });
    it('should render the element wink-animation', async () => {
        const page = await newSpecPage({
            components: [Animation],
            html: `<wink-animation></wink-animation>`,
        });
        expect(page.root).toEqualHtml(`
    <wink-animation>
      <mock:shadow-root>
        <div class="animation-wrapper" data-status="pause"></div>
      </mock:shadow-root>
    </wink-animation>
  `);
    });
    it('should render the element wink-animation with controls when controls prop is set', async () => {
        const page = await newSpecPage({
            components: [Animation],
            html: `<wink-animation autoplay controls></wink-animation>`,
        });
        expect(page.root).toEqualHtml(`
    <wink-animation autoplay="" controls="">
      <mock:shadow-root>
        <div class="animation-wrapper" data-status="play"></div>
        <div class="controls">
          <wink-button appearance="primary" element="button" icon="pause" size="sm" type="button"></wink-button>
          <wink-button appearance="primary" element="button" icon="stop" size="sm" type="button"></wink-button>
        </div>
      </mock:shadow-root>
    </wink-animation>
  `);
    });
});
//# sourceMappingURL=animation.spec.js.map
