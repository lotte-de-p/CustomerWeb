import { Link } from "./link";
import { newSpecPage } from "@stencil/core/testing";
describe('wink-link', () => {
    it('Should create an instance of Link comp', () => {
        const comp = new Link();
        expect(comp).toBeInstanceOf(Link);
    });
    it('should assign value false to hasBackdrop when icon appearance is default', () => {
        const comp = new Link();
        comp.iconAppearance = 'default';
        expect(comp['hasBackdrop']()).toBe(false);
    });
    it('should assign value true to hasBackdrop when icon appearance is primary', () => {
        const comp = new Link();
        comp.iconAppearance = 'primary';
        expect(comp['hasBackdrop']()).toBe(true);
    });
    it('should assign value true to hasBackdrop when appearance is secondary', () => {
        const comp = new Link();
        comp.iconAppearance = 'secondary';
        expect(comp['hasBackdrop']()).toBe(true);
    });
    it('Should render wink-link component', async () => {
        const page = await newSpecPage({
            components: [Link],
            html: `<wink-link></wink-link>`,
        });
        expect(page.root).toEqualLightHtml(`<wink-link appearance="default"></wink-link>`);
    });
    it('Should render wink-link component with default icon', async () => {
        const page = await newSpecPage({
            components: [Link],
            html: `<wink-link icon="search"></wink-link>`,
        });
        expect(page.root).toEqualHtml(`<wink-link appearance="default" icon="search">
      <mock:shadow-root>
      <a class="font-inherit link link-with-icon link-with-icon-left" href="" target="_self">
         <slot name="link-icon"></slot>
         <div id="link-content">
            <slot></slot>
         </div>
         </a>
        </mock:shadow-root>
        </wink-link>`);
    });
    it('should render dropdown link correctly', async () => {
        const page = await newSpecPage({
            components: [Link],
            html: `<wink-link appearance="dropdown-menu-link" icon="user" icon-appearance="secondary" icon-size="sm"></wink-link>`,
        });
        expect(page.root).toEqualHtml(`
    <wink-link appearance="dropdown-menu-link" icon="user" icon-appearance="secondary" icon-size="sm">
        <mock:shadow-root>
        <a class="dropdown-menu-link font-inherit link link-with-icon link-with-icon-left link-with-icon-backdrop" href="" target="_self">
        <slot name="link-icon"></slot>
         <div id="link-content">
            <slot></slot>
         </div>
          </a>
        </mock:shadow-root>
      </wink-link>
      `);
    });
});
//# sourceMappingURL=link.spec.js.map
