import { newSpecPage } from "@stencil/core/testing";
import { Toast } from "./toast";
describe('wink-toast', () => {
    it('should should create an instance of Toast class component', () => {
        const comp = new Toast();
        expect(comp).toBeInstanceOf(Toast);
    });
    it('should render the element wink-toast with a link and no icon when appearance is actionable', async () => {
        const page = await newSpecPage({
            components: [Toast],
            html: `<wink-toast
        isOpen="true"
        appearance="actionable"
        text="Toast feedback"
        href="#"
        link-text="Link"
        target="_self"
        duration="0"
      ></wink-toast>`,
        });
        expect(page.root).toEqualHtml(`
      <wink-toast duration="0" href="#" current-theme="telenet-light-theme"  theme="telenet-dark-theme" aria-hidden="true" role="alert"  link-text="Link" isOpen="true" target="_self" text="Toast feedback" appearance="actionable">
        <mock:shadow-root>
          <p class="toast-text">Toast feedback</p>
          <wink-link appearance="default" class="toast-link" href="#" icon="" is-disabled="false" size="inherit" target="_self">
            Link
          </wink-link>
          <wink-button appearance="tertiary" class="hydrated toast-close" element="button" exportparts="icon, icon-cross" icon="cross" icon-button-aria-label="close toast" icon-position="center" size="sm" status="none" type="button" width="none"></wink-button>
        </mock:shadow-root>
      </wink-toast>
    `);
    });
    it('should render the element wink-toast with no link and check icon when appearance is positive', async () => {
        const page = await newSpecPage({
            components: [Toast],
            html: `<wink-toast
        isOpen="true"
        appearance="positive"
        text="Toast feedback"
        href="#"
        link-text="Link"
        duration="0"
      ></wink-toast>`,
        });
        expect(page.root).toEqualHtml(`
      <wink-toast duration="0" current-theme="telenet-light-theme" theme="telenet-dark-theme"  aria-hidden="true" role="alert" href="#" link-text="Link" isOpen="true" text="Toast feedback" appearance="positive">
        <mock:shadow-root>
          <wink-icon class="toast-icon toast-icon-positive" icon="check-shape-filled" size="md"></wink-icon>
          <p class="toast-text">Toast feedback</p>
          <wink-button appearance="tertiary" class="hydrated toast-close" element="button" exportparts="icon, icon-cross" icon="cross" icon-button-aria-label="close toast" icon-position="center" size="sm" status="none" type="button" width="none"></wink-button>
        </mock:shadow-root>
      </wink-toast>
    `);
    });
    it('should render the element wink-toast with no link and a cross icon when appearance is negative', async () => {
        const page = await newSpecPage({
            components: [Toast],
            html: `<wink-toast
        isOpen="true"
        appearance="negative"
        text="Toast feedback"
        href="#"
        link-text="Link"
        duration="0"
      ></wink-toast>`,
        });
        expect(page.root).toEqualHtml(`
      <wink-toast duration="0" current-theme="telenet-light-theme"  theme="telenet-dark-theme"  aria-hidden="true" role="alert" href="#" link-text="Link" isOpen="true" text="Toast feedback" appearance="negative">
        <mock:shadow-root>
          <wink-icon class="toast-icon toast-icon-negative" icon="cross-circle-filled" size="md"></wink-icon>
          <p class="toast-text">Toast feedback</p>
          <wink-button appearance="tertiary" class="hydrated toast-close" element="button" exportparts="icon, icon-cross" icon="cross" icon-button-aria-label="close toast" icon-position="center" size="sm" status="none" type="button" width="none"></wink-button>
        </mock:shadow-root>
      </wink-toast>
    `);
    });
});
//# sourceMappingURL=toast.spec.js.map
