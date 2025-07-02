import { newSpecPage } from "@stencil/core/testing";
import { GlobalHeader } from "./global-header";
describe('wink-global-header', () => {
    it('should render element with no sections', async () => {
        const page = await newSpecPage({
            components: [GlobalHeader],
            html: `<wink-global-header></wink-global-header>`,
        });
        expect(page.root).toEqualHtml(`
      <wink-global-header class="compact">
        <mock:shadow-root>
        </mock:shadow-root>
      </wink-global-header>
    `);
    });
    it('should render element with top and bottom row sections', async () => {
        const page = await newSpecPage({
            components: [GlobalHeader],
            html: `<wink-global-header>
                  <div slot="brand"></div>
                  <div slot='customer-orientation'></div>
                  <div slot='intent-bar'></div>
                  <div slot='customer-zone'></div>
                  <div slot='language'></div>
                  <div slot='main-navigation'></div>
                  <div slot='search'></div>
                  <div slot='call-to-action'></div>
                  <div slot="mobile-brand"></div>
                  <div slot='mobile-customer-orientation'></div>
                  <div slot='mobile-intent-bar'></div>
                  <div slot='mobile-customer-zone'></div>
                  <div slot='mobile-language'></div>
                  <div slot='mobile-main-navigation'></div>
                  <div slot='mobile-search'></div>
                  <div slot='mobile-call-to-action'></div>
                </wink-global-header>`,
        });
        expect(page.root).toEqualHtml(`
      <wink-global-header>
         <mock:shadow-root>
           <div class='top-row'>
              <slot name='customer-orientation'></slot>
              <slot name='intent-bar'></slot>
              <slot name='customer-zone'></slot>
              <slot name="language"></slot>
           </div>
           <div class="bottom-row">
              <slot name="brand"></slot>
              <slot name="main-navigation"></slot>
              <slot name="search"></slot>
              <slot name="call-to-action"></slot>
           </div>
           <div class="mobile-row">
              <slot name="mobile-brand"></slot>
              <div class="mobile-row-right">
                  <slot name="mobile-customer-zone"></slot>
                  <slot name="mobile-search"></slot>
                  <div class="mobile-hamburger">
                      <input type="checkbox" class="mobile-hamburger-button">
                      <wink-icon class="mobile-hamburger-button open" appearance="transparent" icon="hamburger-menu" size="md"></wink-icon>
                      <wink-icon class="mobile-hamburger-button close" appearance="secondary" icon="cross" size="md"></wink-icon>
                      <div class="mobile-fly-out">
                          <div class="mobile-fly-out-top">
                             <div class="mobile-fly-out-top-main">
                               <slot name="mobile-main-navigation"></slot>
                               <slot name="mobile-call-to-action"></slot>
                               <slot name="mobile-intent-bar"></slot>
                             </div>
                             <div class="mobile-fly-out-top-sub-nav"></div>
                          </div>
                          <div class="mobile-fly-out-bottom">
                              <slot name="mobile-customer-orientation"></slot>
                              <slot name="mobile-language"></slot>
                          </div>
                      </div>
                  </div>
              </div>
           </div>
         </mock:shadow-root>
          <div slot='brand'></div>
          <div slot='customer-orientation'></div>
          <div slot='intent-bar'></div>
          <div slot='customer-zone'></div>
          <div slot='language'></div>
          <div slot='main-navigation'></div>
          <div slot='search'></div>
          <div slot='call-to-action'></div>
          <div slot='mobile-brand'></div>
          <div slot='mobile-customer-orientation'></div>
          <div slot='mobile-intent-bar'></div>
          <div slot='mobile-customer-zone'></div>
          <div slot='mobile-language'></div>
          <div slot='mobile-main-navigation'></div>
          <div slot='mobile-search'></div>
          <div slot='mobile-call-to-action'></div>
      </wink-global-header>
    `);
    });
    it('should render element with top row sections', async () => {
        const page = await newSpecPage({
            components: [GlobalHeader],
            html: `<wink-global-header>
                  <div slot='brand'></div>
                  <div slot='customer-orientation'></div>
                  <div slot='mobile-brand'></div>
                  <div slot='mobile-customer-orientation'></div>
                </wink-global-header>`,
        });
        expect(page.root).toEqualHtml(`
      <wink-global-header>
         <mock:shadow-root>
           <div class='top-row'>
            <slot name='customer-orientation'></slot>
           </div>
           <div class='bottom-row'>
            <slot name='brand'></slot>
           </div>
           <div class="mobile-row">
              <slot name="mobile-brand"></slot>
              <div class="mobile-row-right">
                  <div class="mobile-hamburger">
                      <input type="checkbox" class="mobile-hamburger-button">
                      <wink-icon class="mobile-hamburger-button open" appearance="transparent" icon="hamburger-menu" size="md"></wink-icon>
                      <wink-icon class="mobile-hamburger-button close" appearance="secondary" icon="cross" size="md"></wink-icon>
                      <div class="mobile-fly-out">
                           <div class="mobile-fly-out-top">
                            <div class="mobile-fly-out-top-main"></div>
                            <div class="mobile-fly-out-top-sub-nav"></div>
                          </div>
                          <div class="mobile-fly-out-bottom">
                              <slot name="mobile-customer-orientation"></slot>
                          </div>
                      </div>
                  </div>
              </div>
           </div>
         </mock:shadow-root>
          <div slot='brand'></div>
          <div slot='customer-orientation'></div>
          <div slot='mobile-brand'></div>
          <div slot='mobile-customer-orientation'></div>
      </wink-global-header>
    `);
    });
    it('should render element with bottom row sections', async () => {
        const page = await newSpecPage({
            components: [GlobalHeader],
            html: `<wink-global-header>
                  <div slot='brand'></div>
                  <div slot='main-navigation'></div>
                  <div slot='mobile-brand'></div>
                  <div slot='mobile-main-navigation'></div>
                </wink-global-header>`,
        });
        expect(page.root).toEqualHtml(`
      <wink-global-header class="compact">
         <mock:shadow-root>
           <div class='bottom-row'>
            <slot name="brand"></slot>
            <slot name="main-navigation"></slot>
           </div>
           <div class="mobile-row">
              <slot name="mobile-brand"></slot>
              <div class="mobile-row-right">
                  <div class="mobile-hamburger">
                      <input type="checkbox" class="mobile-hamburger-button">
                      <wink-icon class="mobile-hamburger-button open" appearance="transparent" icon="hamburger-menu" size="md"></wink-icon>
                      <wink-icon class="mobile-hamburger-button close" appearance="secondary" icon="cross" size="md"></wink-icon>
                      <div class="mobile-fly-out">
                          <div class="mobile-fly-out-top">
                               <div class="mobile-fly-out-top-main">
                                 <slot name="mobile-main-navigation"></slot>
                               </div>
                               <div class="mobile-fly-out-top-sub-nav"></div>
                          </div>
                          <div class="mobile-fly-out-bottom">
                          </div>
                      </div>
                  </div>
              </div>
           </div>
         </mock:shadow-root>
          <div slot='brand'></div>
          <div slot='main-navigation'></div>
          <div slot='mobile-brand'></div>
          <div slot='mobile-main-navigation'></div>
      </wink-global-header>
    `);
    });
});
//# sourceMappingURL=global-header.spec.js.map
