import { newSpecPage } from "@stencil/core/testing";
import { RadioGroup } from "./radio-group";
describe('wink-radio-group', () => {
    it('should should create an instance of RadioGroup class component', () => {
        const comp = new RadioGroup();
        expect(comp).toBeInstanceOf(RadioGroup);
    });
    it('should render the element wink-radio-group', async () => {
        const page = await newSpecPage({
            components: [RadioGroup],
            html: `<wink-radio-group>
          <wink-radio-button label="Radio button"></wink-radio-button>
      </wink-radio-group>`,
        });
        expect(page.root).toEqualHtml(`
      <wink-radio-group>
        <fieldset>
         <legend class="radio-group__wrapper">
           <wink-form-label helper="" label="" show-optional  optional-text="Optioneel"></wink-form-label>
         </legend>
          <div class="radio-group--vertical">
            <wink-radio-button label="Radio button"></wink-radio-button>
            </div>
        </fieldset>
      </wink-radio-group>
    `);
    });
    it('should have an horizontal class', async () => {
        const page = await newSpecPage({
            components: [RadioGroup],
            html: `<wink-radio-group direction="horizontal">
          <wink-radio-button label="Radio button"></wink-radio-button>
      </wink-radio-group>`,
        });
        expect(page.root).toEqualHtml(`
      <wink-radio-group direction="horizontal">
        <fieldset>
          <legend class="radio-group__wrapper">
            <wink-form-label helper="" label="" show-optional  optional-text="Optioneel"></wink-form-label>
          </legend>
          <div class="radio-group--horizontal">
           <wink-radio-button label="Radio button"></wink-radio-button>
          </div>
        </fieldset>
      </wink-radio-group>
    `);
    });
    it('should have a label and a helper', async () => {
        const page = await newSpecPage({
            components: [RadioGroup],
            html: `<wink-radio-group label="This is the group label" helper="This is the group helper">
          <wink-radio-button label="Radio button"></wink-radio-button>
      </wink-radio-group>`,
        });
        expect(page.root).toEqualHtml(`
     <wink-radio-group helper="This is the group helper" label="This is the group label">
       <fieldset>
         <legend class="radio-group__wrapper">
           <wink-form-label helper="This is the group helper" label="This is the group label" show-optional   optional-text="Optioneel"></wink-form-label>
         </legend>
         <div class="radio-group--vertical">
           <wink-radio-button label="Radio button"></wink-radio-button>
         </div>
       </fieldset>
     </wink-radio-group>
    `);
    });
    it('Should have a show an error when needed', async () => {
        const page = await newSpecPage({
            components: [RadioGroup],
            html: `<wink-radio-group label="This is the group label" error="Please check at least one radio-button">
            <wink-radio-button label="Radio button"></wink-radio-button>
      </wink-radio-group>`,
        });
        expect(page.root).toEqualHtml(`
     <wink-radio-group error="Please check at least one radio-button" label="This is the group label">
       <fieldset>
         <legend class="radio-group__wrapper">
           <wink-form-label helper="" label="This is the group label" show-optional   optional-text="Optioneel"></wink-form-label>
         </legend>
         <div class="radio-group--vertical">
           <wink-radio-button label="Radio button"></wink-radio-button>
         </div>
         <wink-validation-message message="Please check at least one radio-button" type="error"></wink-validation-message>
       </fieldset>
     </wink-radio-group>
    `);
    });
    it('Should remove the optional label when needed', async () => {
        const page = await newSpecPage({
            components: [RadioGroup],
            html: `<wink-radio-group label="This is the group label" is-required> 
            <wink-radio-button label="Radio button"></wink-radio-button>
      </wink-radio-group>`,
        });
        expect(page.root).toEqualHtml(`
     <wink-radio-group label="This is the group label" is-required>
       <fieldset>
         <legend class="radio-group__wrapper">
           <wink-form-label helper="" label="This is the group label"  optional-text="Optioneel"></wink-form-label>
         </legend>
         <div class="radio-group--vertical">
           <wink-radio-button label="Radio button"></wink-radio-button>
         </div>
       </fieldset>
     </wink-radio-group>
    `);
    });
});
//# sourceMappingURL=radio-group.spec.js.map
