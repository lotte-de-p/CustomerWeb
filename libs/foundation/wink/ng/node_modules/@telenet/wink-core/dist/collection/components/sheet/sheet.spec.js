import { newSpecPage } from "@stencil/core/testing";
import { Sheet } from "./sheet";
describe('wink-sheet', () => {
    it('should should create an instance of Sheet class component', () => {
        const comp = new Sheet();
        expect(comp).toBeInstanceOf(Sheet);
    });
    it('should render the element wink-sheet', async () => {
        const page = await newSpecPage({
            components: [Sheet],
            html: `<wink-sheet>
              <wink-title html-tag="h2" text="Slimme wifi-pods" spacing-y="default"></wink-title>
              <div slot="footer">
                <wink-button
                  text="Read More"
                  element="button"
                  type="button"
                  appearance="secondary"
                  size="md"
                  width="full"></wink-button>
              </div>
      </wink-sheet>`,
        });
        expect(page.root).toEqualHtml(`
    <wink-sheet>
      <mock:shadow-root>
        <dialog aria-live="assertive" class="sheet sheet-margin-bottom">
            <wink-button appearance="tertiary" class="sheet-icon sheet-icon-close" icon="cross" icon-button-aria-label="Sluiten" icon-position="center" size="md"></wink-button>
            <div class="sheet-content">
              <div class="sheet-content-scroll">
                <slot></slot>
              </div>
              <div class="sheet-footer">
                <slot name="footer"></slot>
              </div>
            </div>
          </dialog>      
        </mock:shadow-root>
      <wink-title html-tag="h2" text="Slimme wifi-pods" spacing-y="default"></wink-title>
      <div slot="footer">
        <wink-button
          text="Read More"
          element="button"
          type="button"
          appearance="secondary"
          size="md"
          width="full"></wink-button>
    </wink-sheet>
  `);
    });
    it('should render the element wink-sheet with multipage', async () => {
        const page = await newSpecPage({
            components: [Sheet],
            html: `<wink-sheet is-multipage>
          <div slot="page-first">
            <wink-title html-tag="h2" text="Slimme wifi-pods" spacing-y="default"></wink-title>   
              </div>
              <div slot="page-second">
                <wink-title
                  html-tag="h2"
                  text="Telenet slimme wifi om je wifi-signaal te versterken"
                  spacing-y="default"></wink-title>
              </div>
              <wink-button
                slot="footer"
                text="Read More"
                class="wink-button-forward"
                element="button"
                type="button"
                appearance="secondary"
                size="md"
                width="full"></wink-button>
              <wink-button
                slot="footer-second"
                class="wink-button-back"
                text="Cancel"
                element="button"
                type="button"
                appearance="secondary"
                size="md"
                width="full"></wink-button>
              <wink-button
                class="wink-button-close"
                slot="footer-second"
                text="Confirm"
                element="button"
                type="button"
                appearance="primary"
                size="md"
                width="full"></wink-button>
      </wink-sheet>`,
        });
        expect(page.root).toEqualHtml(`
    <wink-sheet is-multipage="">
      <mock:shadow-root>
        <dialog aria-live="assertive" class="sheet sheet-margin-bottom">
          <wink-button appearance="tertiary" class="sheet-icon sheet-icon-close" icon="cross" icon-button-aria-label="Sluiten" icon-position="center" size="md"></wink-button>
           <div class="sheet-content">
             <div class="sheet-content-scroll">
               <slot></slot>
             </div>
            <div class="sheet-footer">
              <slot name="footer"></slot>
            </div>
           </div>
         </dialog>
      </mock:shadow-root>
         <div slot="page-first">
         <wink-title html-tag="h2" spacing-y="default" text="Slimme wifi-pods"></wink-title>
       </div>
       <div slot="page-second">
         <wink-title html-tag="h2" spacing-y="default" text="Telenet slimme wifi om je wifi-signaal te versterken"></wink-title>
       </div>
       <wink-button appearance="secondary" class="wink-button-forward" element="button" size="md" slot="footer" text="Read More" type="button" width="full"></wink-button>
       <wink-button appearance="secondary" class="wink-button-back" element="button" size="md" slot="footer-second" text="Cancel" type="button" width="full"></wink-button>
       <wink-button appearance="primary" class="wink-button-close" element="button" size="md" slot="footer-second" text="Confirm" type="button" width="full"></wink-button>
    </wink-sheet>
  `);
    });
    it('should render the element wink-sheet not visible', async () => {
        const page = await newSpecPage({
            components: [Sheet],
            html: `<wink-sheet is-visible="false"></wink-sheet>`,
        });
        expect(page.root).toEqualHtml(`
    <wink-sheet is-visible="false">
      <mock:shadow-root>
        <dialog aria-live="assertive" class="sheet">
          <wink-button appearance="tertiary" class="sheet-icon sheet-icon-close" icon="cross" icon-button-aria-label="Sluiten" icon-position="center" size="md"></wink-button>
            <div class="sheet-content">
            <div class="sheet-content-scroll">
              <slot></slot>
            </div>
          </div>
        </dialog>
      </mock:shadow-root>
    </wink-sheet>
  `);
    });
    it('should render the element wink-sheet with class darker if dashboard is set', async () => {
        const page = await newSpecPage({
            components: [Sheet],
            html: `<wink-sheet dashboard="true"></wink-sheet>`,
        });
        expect(page.root).toEqualHtml(`
    <wink-sheet dashboard="true">
      <mock:shadow-root>
        <dialog aria-live="assertive" class="sheet sheet-darker">
          <wink-button appearance="tertiary" class="sheet-icon sheet-icon-close" icon="cross" icon-button-aria-label="Sluiten" icon-position="center" size="md"></wink-button>
            <div class="sheet-content">
            <div class="sheet-content-scroll">
              <slot></slot>
            </div>
          </div>
        </dialog>
      </mock:shadow-root>
    </wink-sheet>
  `);
    });
});
//# sourceMappingURL=sheet.spec.js.map
