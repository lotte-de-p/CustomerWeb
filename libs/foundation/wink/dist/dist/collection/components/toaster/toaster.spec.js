import { newSpecPage } from "@stencil/core/testing";
import { Toaster } from "./toaster";
describe('wink-toaster', () => {
    it('should should create an instance of Toaster class component', () => {
        const comp = new Toaster();
        expect(comp).toBeInstanceOf(Toaster);
    });
    it('should render the element wink-toaster with a child', async () => {
        const page = await newSpecPage({
            components: [Toaster],
            html: `<wink-toaster>
      <wink-toast
        isOpen="true"
        appearance="negative"
        text="Toast feedback"
        href="#"
        link-text="Link"
        duration="0"
      ></wink-toast>
      </wink-toaster>`,
        });
        expect(page.root).toEqualHtml(`
    <wink-toaster aria-atomic="true" aria-live="polite">
      <wink-toast duration="0" href="#" isopen="true" link-text="Link" text="Toast feedback" appearance="negative"></wink-toast>
    </wink-toaster>
  `);
    });
});
//# sourceMappingURL=toaster.spec.js.map
