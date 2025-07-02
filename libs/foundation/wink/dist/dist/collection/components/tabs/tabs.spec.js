import { newSpecPage } from "@stencil/core/testing";
import { Tabs } from "./tabs";
describe('wink-Tabs', () => {
    it('should should create an instance of Tabs class component', () => {
        const comp = new Tabs();
        expect(comp).toBeInstanceOf(Tabs);
    });
    it('should render the element wink-Tabs', async () => {
        const page = await newSpecPage({
            components: [Tabs],
            html: `<wink-tabs></wink-tabs>`,
        });
        expect(page.root).toEqualHtml(`
    <wink-tabs>
        <mock:shadow-root>
            <div class="tabs tabs-container">
                <div class="tab-header">
                    <div aria-labelledby="tablist-1" class="tab-list" role="tablist"></div>
                </div>
            </div>
        </mock:shadow-root>
    </wink-tabs>
  `);
    });
    it('should render the element wink-tabs with slotted content', async () => {
        const page = await newSpecPage({
            components: [Tabs],
            html: `<wink-tabs appearance="container">
            <div slot="tab-1" data-title="test title" data-subtitle="test subtitle">
            tab content
        </div>
        <div slot="tab-2" disabled data-title="test title">
            tab content
        </div>
        </wink-tabs>`,
        });
        expect(page.root).toEqualHtml(`
    <wink-tabs appearance="container">
        <mock:shadow-root>
            <div class="tabs tabs-container">
                <div class="tab-header">
                    <div aria-labelledby="tablist-1" class="tab-list" role="tablist">
                        <button aria-controls="tabpanel-1" aria-describedby="tabpanel-1" aria-selected="true" class="is-active-tab tab" id="tab-1" role="tab" type="button">
                            <div class="tab-content">
                                <p class="tab-title">
                                    test title
                                </p>
                                test subtitle
                            </div>
                        </button>
                        <button aria-controls="tabpanel-2" aria-describedby="tabpanel-2" aria-selected="false" class="tab" disabled="" id="tab-2" role="tab" type="button">
                            <div class="tab-content">
                                <p class="tab-title">
                                    test title
                                </p>
                            </div>
                        </button>
                    </div>
                </div>
                <div aria-labelledby="tab-1" id="tabpanel-1" role="tabpanel" tabindex="0">
                    <slot name="tab-1"></slot>
                </div>
                <div aria-labelledby="tab-2" class="is-hidden" id="tabpanel-2" role="tabpanel" tabindex="-1">
                    <slot name="tab-2"></slot>
                </div>
            </div>
        </mock:shadow-root>
        <div data-subtitle="test subtitle" data-title="test title" slot="tab-1">
            tab content
        </div>
        <div data-title="test title" disabled="" slot="tab-2">
            tab content
        </div>
        </div>
    </div>
    </wink-tabs>
  `);
    });
});
//# sourceMappingURL=tabs.spec.js.map
