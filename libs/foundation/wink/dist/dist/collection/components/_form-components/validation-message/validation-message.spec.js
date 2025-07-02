import { newSpecPage } from "@stencil/core/testing";
import { ValidationMessage } from "./validation-message";
describe('wink-validation-message', () => {
    it('should should create an instance of ValidationMessage class component', () => {
        const comp = new ValidationMessage();
        expect(comp).toBeInstanceOf(ValidationMessage);
    });
    it('should render the element wink-validation-message', async () => {
        const page = await newSpecPage({
            components: [ValidationMessage],
            html: `<wink-validation-message message="This is an error"></wink-validation-message>`,
        });
        expect(page.root).toEqualHtml(`
    <wink-validation-message message="This is an error">
      <div class="validation-message--error">
        <wink-icon icon="error-shape"></wink-icon>
        This is an error
      </div>
    </wink-validation-message>
  `);
    });
});
//# sourceMappingURL=validation-message.spec.js.map
