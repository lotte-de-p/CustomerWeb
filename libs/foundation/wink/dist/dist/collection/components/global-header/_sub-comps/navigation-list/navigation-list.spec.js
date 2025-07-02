import { newSpecPage } from "@stencil/core/testing";
import { NavigationList } from "./navigation-list";
describe('NavigationList', () => {
    it('renders the component', async () => {
        const page = await newSpecPage({
            components: [NavigationList],
            html: `<wink-navigation-list></wink-navigation-list>`,
        });
        expect(page.root).toBeDefined();
    });
    it('renders the list title correctly', async () => {
        const page = await newSpecPage({
            components: [NavigationList],
            html: `<wink-navigation-list list-title="Featured">
            <wink-navigation-list-item href="#">Jouw product beheren</wink-navigation-list-item>
            <wink-navigation-list-item href="#">Meer inspiratie omtrent internet</wink-navigation-list-item>
            <wink-navigation-list-item href="#">Meer inspiratie omtrent internet</wink-navigation-list-item>
      </wink-navigation-list>`,
        });
        expect(page.root).toEqualHtml(`
            <wink-navigation-list list-title="Featured">
                <mock:shadow-root>
                    <wink-paragraph appearance="caption" class="navigation-list--title" size="bold">Featured</wink-paragraph>
                    <ul class="navigation-list--list">
                        <li><wink-navigation-list-item href="#">Jouw product beheren</wink-navigation-list-item></li>
                        <li><wink-navigation-list-item href="#">Meer inspiratie omtrent internet</wink-navigation-list-item></li>
                        <li><wink-navigation-list-item href="#">Meer inspiratie omtrent internet</wink-navigation-list-item></li>
                    </ul>
                </mock:shadow-root>
                <wink-navigation-list-item href="#">Jouw product beheren</wink-navigation-list-item>
                <wink-navigation-list-item href="#">Meer inspiratie omtrent internet</wink-navigation-list-item>
                <wink-navigation-list-item href="#">Meer inspiratie omtrent internet</wink-navigation-list-item>
            </wink-navigation-list>
        `);
    });
    it('renders no list title when no value filled', async () => {
        const page = await newSpecPage({
            components: [NavigationList],
            html: `<wink-navigation-list list-title="">
            <wink-navigation-list-item href="#">Jouw product beheren</wink-navigation-list-item>
            <wink-navigation-list-item href="#">Meer inspiratie omtrent internet</wink-navigation-list-item>
            <wink-navigation-list-item href="#">Meer inspiratie omtrent internet</wink-navigation-list-item>
      </wink-navigation-list>`,
        });
        expect(page.root).toEqualHtml(`
            <wink-navigation-list list-title="">
                <mock:shadow-root>
                    <ul class="navigation-list--list">
                        <li><wink-navigation-list-item href="#">Jouw product beheren</wink-navigation-list-item></li>
                        <li><wink-navigation-list-item href="#">Meer inspiratie omtrent internet</wink-navigation-list-item></li>
                        <li><wink-navigation-list-item href="#">Meer inspiratie omtrent internet</wink-navigation-list-item></li>
                    </ul>
                </mock:shadow-root>
                <wink-navigation-list-item href="#">Jouw product beheren</wink-navigation-list-item>
                <wink-navigation-list-item href="#">Meer inspiratie omtrent internet</wink-navigation-list-item>
                <wink-navigation-list-item href="#">Meer inspiratie omtrent internet</wink-navigation-list-item>
            </wink-navigation-list>
        `);
    });
    it('renders bold links when hasBoldLinks prop is true', async () => {
        const page = await newSpecPage({
            components: [NavigationList],
            html: `
      <wink-navigation-list has-bold-links>
        <wink-navigation-list-item href="/home">Hulp nodig met internet</wink-navigation-list-item>
        <wink-navigation-list-item href="#">Jouw product beheren</wink-navigation-list-item>
        <wink-navigation-list-item href="#">Meer inspiratie omtrent internet</wink-navigation-list-item>
        <wink-navigation-list-item href="#">Meer inspiratie omtrent internet</wink-navigation-list-item>
      </wink-navigation-list>`,
        });
        expect(page.root).toEqualHtml(`
            <wink-navigation-list has-bold-links>
                <mock:shadow-root>
                    <ul class="navigation-list--list">
                    <li><wink-navigation-list-item href="/home">Hulp nodig met internet</wink-navigation-list-item></li>
                    <li><wink-navigation-list-item href="#">Jouw product beheren</wink-navigation-list-item></li>
                    <li><wink-navigation-list-item href="#">Meer inspiratie omtrent internet</wink-navigation-list-item></li>
                    <li><wink-navigation-list-item href="#">Meer inspiratie omtrent internet</wink-navigation-list-item></li>
                    </ul>
                </mock:shadow-root>
                <wink-navigation-list-item href="/home">Hulp nodig met internet</wink-navigation-list-item>
                <wink-navigation-list-item href="#">Jouw product beheren</wink-navigation-list-item>
                <wink-navigation-list-item href="#">Meer inspiratie omtrent internet</wink-navigation-list-item>
                <wink-navigation-list-item href="#">Meer inspiratie omtrent internet</wink-navigation-list-item>
            </wink-navigation-list>
        `);
    });
});
//# sourceMappingURL=navigation-list.spec.js.map
