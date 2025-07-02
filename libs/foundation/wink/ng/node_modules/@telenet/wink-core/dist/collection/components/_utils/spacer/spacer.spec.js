import { newSpecPage } from "@stencil/core/testing";
import { Spacer } from "./spacer";
describe('wink-spacer', () => {
    it('should should create an instance of Spacer class component', () => {
        const comp = new Spacer();
        expect(comp).toBeInstanceOf(Spacer);
    });
    it('should render the element wink-spacer', async () => {
        const page = await newSpecPage({
            components: [Spacer],
            html: `<wink-spacer></wink-spacer>`,
        });
        expect(page.root).toEqualHtml(`
    <wink-spacer>
      <mock:shadow-root>
         <div class="height-md"></div>
      </mock:shadow-root>
    </wink-spacer>
  `);
    });
});
//# sourceMappingURL=spacer.spec.js.map
