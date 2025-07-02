import { Button } from "./button";
import { newSpecPage } from "@stencil/core/testing";
describe('wink-button', () => {
    it('should render default button correctly', async () => {
        const page = await newSpecPage({
            components: [Button],
            html: `
        <wink-button text="test button" element="button" type="button" appearance="primary" size="md" status="none">
        </wink-button>
        `,
        });
        expect(page.root).toEqualHtml(`
      <wink-button text="test button" size="md" status="none" element="button" type="button" appearance="primary">
         <mock:shadow-root>
         <button class="button primary" type="button" aria-label="test button">test button</button>
         </mock:shadow-root>
      </wink-button>
    `);
    });
    it('should render small secondary button correctly', async () => {
        const page = await newSpecPage({
            components: [Button],
            html: `
       <wink-button text="button secondary" element="input" type="button" appearance="secondary" size="sm" status="none" >
       </wink-button>
          `,
        });
        expect(page.root).toEqualHtml(`
       <wink-button text="button secondary" element="input" type="button" appearance="secondary" size="sm" status="none">
          <mock:shadow-root>
          <input class="button type-input secondary size-sm" type="button" value="button secondary" role="button" aria-label="button secondary">
          </mock:shadow-root>
       </wink-button>
     `);
    });
    it('should render tertiary button with left icon correctly', async () => {
        const page = await newSpecPage({
            components: [Button],
            html: `
      <wink-button text="button tertiary" element="a" appearance="tertiary" size="md" status="none" href="telenet.be" has-icon icon-position="left" icon="arrow-left">
      </wink-button>
         `,
        });
        expect(page.root).toEqualHtml(`
      <wink-button text="button tertiary" element="a" exportparts="icon, icon-arrow-left" appearance="tertiary" size="md" status="none" href="telenet.be" has-icon icon-position="left" icon="arrow-left">
         <mock:shadow-root>
         <a href="telenet.be" class="button type-a tertiary icon-left" target="_self" aria-label="button tertiary" role="button">
            <wink-icon appearance="default" icon="arrow-left" size="md"></wink-icon>
            button tertiary
         </a>
         </mock:shadow-root>
      </wink-button>
    `);
    });
    it('should render secondary button with right icon correctly', async () => {
        const page = await newSpecPage({
            components: [Button],
            html: `
      <wink-button text="button" element="button" appearance="secondary" size="md" state="none" has-icon="true" icon-position="right" icon="arrow-left">
      </wink-button>
         `,
        });
        expect(page.root).toEqualHtml(`
      <wink-button text="button" element="button" exportparts="icon, icon-arrow-left" appearance="secondary" size="md" state="none" has-icon="true" icon-position="right" icon="arrow-left">
        <mock:shadow-root>
         <button class="button icon-right secondary" type="button" aria-label="button">
            <wink-icon appearance="default" icon="arrow-left" size="md"></wink-icon>
            button
          </button>
        </mock:shadow-root>
      </wink-button>
    `);
    });
    it('should render primary loading button correctly', async () => {
        const page = await newSpecPage({
            components: [Button],
            html: `
       <wink-button text="" loading-text="Loading" element="button" appearance="primary" size="md" status="loading" type="button">
       </wink-button>
          `,
        });
        expect(page.root).toEqualHtml(`
       <wink-button text="" loading-text="Loading" element="button" appearance="primary" size="md" status="loading" type="button" >
          <mock:shadow-root>
          <button class="button primary state-loading" disabled aria-disabled="true" type="button">
            <wink-animation autoplay="" class="animation" src="/assets/shared/animations/spinner.json"></wink-animation>
            Loading
          </button>
          </mock:shadow-root>
       </wink-button>
     `);
    });
    it('should render primary icon button correctly', async () => {
        const page = await newSpecPage({
            components: [Button],
            html: `
      <wink-button element="button" appearance="primary" size="md" status="none" type="button" has-icon icon-position="left" icon="accessibility">
      </wink-button>
         `,
        });
        expect(page.root).toEqualHtml(`
      <wink-button element="button" exportparts="icon, icon-accessibility" appearance="primary" size="md" status="none" type="button" has-icon icon-position="left" icon="accessibility">
         <mock:shadow-root>
         <button class="button icon-button primary icon-left" type="button">
            <wink-icon appearance="default" icon="accessibility" size="md"></wink-icon>
         </button>
         </mock:shadow-root>
      </wink-button>
    `);
    });
});
//# sourceMappingURL=button.spec.js.map
