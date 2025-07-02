import { newSpecPage } from "@stencil/core/testing";
import { CustomerOrientation } from "./customer-orientation";
describe('wink-customer-orientation', () => {
    it('should should create an instance of CustomerOrientation class component', () => {
        const comp = new CustomerOrientation();
        expect(comp).toBeInstanceOf(CustomerOrientation);
    });
    it('should render the element wink-customer-orientation', async () => {
        const page = await newSpecPage({
            components: [CustomerOrientation],
            html: `<wink-customer-orientation></wink-customer-orientation>`,
        });
        expect(page.root).toEqualHtml(`
    <wink-customer-orientation>
      <mock:shadow-root>
         <wink-dropdown-menu heading="Particulieren" item-selected="Particulieren" list-position="left">
           <wink-link appearance="dropdown-menu-link">
             Particulieren
           </wink-link>
           <wink-link appearance="dropdown-menu-link">
             Zelfstandigen
           </wink-link>
           <wink-link appearance="dropdown-menu-link">
             Bedrijven
           </wink-link>
         </wink-dropdown-menu>
         <wink-dropdown-menu heading="Alle websites" item-selected="Alle websites" list-position="left">
           <wink-link appearance="dropdown-menu-link">
             Alle websites
           </wink-link>
           <wink-link appearance="dropdown-menu-link">
             Play sports
           </wink-link>
           <wink-link appearance="dropdown-menu-link">
             Telenet-apps
           </wink-link>
         </wink-dropdown-menu>
      </mock:shadow-root>
    </wink-customer-orientation>
  `);
    });
});
//# sourceMappingURL=customer-orientation.spec.js.map
