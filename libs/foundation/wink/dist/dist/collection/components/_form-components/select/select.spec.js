import { newSpecPage } from "@stencil/core/testing";
import { Select } from "./select";
import { resetIdsInTest } from "../../../utils/utils";
describe('wink-select', () => {
    it('should should create an instance of Select class component', () => {
        const comp = new Select();
        expect(comp).toBeInstanceOf(Select);
    });
    it('should render the element wink-select', async () => {
        const page = await newSpecPage({
            components: [Select],
            html: `<wink-select></wink-select>`,
        });
        expect(resetIdsInTest(page.root)).toEqualHtml(`
    <wink-select>
      <!---->
      <label htmlfor="">
         <wink-form-label rendition="default"></wink-form-label>
       </label>
       <div class="select-wrapper">
         <select id=""></select>
         <wink-icon appearance="transparent" icon="chevron-down"></wink-icon>
       </div>
    </wink-select>
  `);
    });
    it('should render the element wink-select with the right developer attributes', async () => {
        const page = await newSpecPage({
            components: [Select],
            html: `<wink-select select-name="test-O1" select-id="test-O1">
      <option value="" selected disabled>Choose an option</option>
      <option value="cherry">Cherry</option>
      <option value="Lemon">Lemon</option>
      <option value="other">other</option>
      </wink-select>`,
        });
        expect(page.root).toEqualHtml(`
      <wink-select select-id="test-O1" select-name="test-O1">
       <label htmlfor="test-O1">
         <wink-form-label rendition="default"></wink-form-label>
       </label>
       <div class="select-wrapper">
         <select id="test-O1" name="test-O1">
           <option disabled="" selected="" value=""> Choose an option</option>
           <option value="cherry">Cherry</option>
           <option value="Lemon">Lemon</option>
           <option value="other">other</option>
         </select>
         <wink-icon appearance="transparent" icon="chevron-down"></wink-icon>
       </div>
     </wink-select>
  `);
    });
});
//# sourceMappingURL=select.spec.js.map
