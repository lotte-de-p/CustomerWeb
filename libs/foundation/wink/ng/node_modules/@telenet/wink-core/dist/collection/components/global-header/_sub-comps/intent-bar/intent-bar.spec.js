import { newSpecPage } from "@stencil/core/testing";
import { IntentBar } from "./intent-bar";
describe('wink-intent-bar', () => {
    it('should should create an instance of IntentBar class component', () => {
        const comp = new IntentBar();
        expect(comp).toBeInstanceOf(IntentBar);
    });
    it('should render the element wink-intent-bar', async () => {
        const page = await newSpecPage({
            components: [IntentBar],
            html: `<wink-intent-bar></wink-intent-bar>`,
        });
        expect(page.root).toEqualHtml(`
    <wink-intent-bar>
      <mock:shadow-root>
         <wink-link appearance="menu-secondary" href="#" icon="headset" icon-appearance="default" icon-position="left" size="body-regular">
           <wink-icon appearance="default" icon="message-question" size="sm" slot="link-icon"></wink-icon>
           Hulp
         </wink-link>
         <wink-link appearance="menu-secondary" href="#" icon="headset" icon-appearance="default" icon-position="left" size="body-regular">
           <wink-icon appearance="default" icon="headset" size="sm" slot="link-icon"></wink-icon>
           Contact
         </wink-link>
         <wink-link appearance="menu-secondary" href="#" icon="headset" icon-appearance="default" icon-position="left" size="body-regular">
           <wink-icon appearance="default" icon="email" size="sm" slot="link-icon"></wink-icon>
           Webmail
         </wink-link>
      </mock:shadow-root>
    </wink-intent-bar>
  `);
    });
});
//# sourceMappingURL=intent-bar.spec.js.map
