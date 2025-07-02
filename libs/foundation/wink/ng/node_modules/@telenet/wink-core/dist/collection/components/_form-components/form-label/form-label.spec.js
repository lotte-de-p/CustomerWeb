import { newSpecPage } from "@stencil/core/testing";
import { FormLabel } from "./form-label";
describe('wink-form-label', () => {
    it('should should create an instance of FormLabel class component', () => {
        const comp = new FormLabel();
        expect(comp).toBeInstanceOf(FormLabel);
    });
    it('should render the element wink-form-label', async () => {
        const page = await newSpecPage({
            components: [FormLabel],
            html: `<wink-form-label></wink-form-label>`,
        });
        expect(page.root).toEqualHtml(`
    <wink-form-label class="label--default">
      <span class="label--content-wrapper">
        <span class="label--text"></span>
      </span>
    </wink-form-label>
  `);
    });
});
//# sourceMappingURL=form-label.spec.js.map
