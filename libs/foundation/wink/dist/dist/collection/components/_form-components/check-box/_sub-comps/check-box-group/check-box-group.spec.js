import { newSpecPage } from "@stencil/core/testing";
import { CheckBoxGroup } from "./check-box-group";
describe('wink-check-box-group', () => {
    it('should should create an instance of CheckBoxGroup class component', () => {
        const comp = new CheckBoxGroup();
        expect(comp).toBeInstanceOf(CheckBoxGroup);
    });
    it('should render the element wink-check-box-group', async () => {
        const page = await newSpecPage({
            components: [CheckBoxGroup],
            html: `<wink-check-box-group>
          <wink-check-box label="check box"></wink-check-box>
      </wink-check-box-group>`,
        });
        expect(page.root).toEqualHtml(`
      <wink-check-box-group>
        <fieldset>
          <legend class="check-box-group__wrapper">
            <wink-form-label helper="" label="" show-optional  optional-text="Optioneel"></wink-form-label>
          </legend>
          <div class="check-box-group--vertical">
            <wink-check-box label="check box"></wink-check-box>
          </div>
        </fieldset>
      </wink-check-box-group>
    `);
    });
    it('should have an horizontal class', async () => {
        const page = await newSpecPage({
            components: [CheckBoxGroup],
            html: `<wink-check-box-group direction="horizontal">
          <wink-check-box label="check box"></wink-check-box>
      </wink-check-box-group>`,
        });
        expect(page.root).toEqualHtml(`
      <wink-check-box-group direction="horizontal">
        <fieldset>
          <legend class="check-box-group__wrapper">
            <wink-form-label helper="" label="" show-optional  optional-text="Optioneel"></wink-form-label>
          </legend>
        <div class="check-box-group--horizontal">
          <wink-check-box label="check box"></wink-check-box>
        </div>
        </fieldset>
      </wink-check-box-group>
    `);
    });
    it('should have a label and a helper', async () => {
        const page = await newSpecPage({
            components: [CheckBoxGroup],
            html: `<wink-check-box-group label="This is the group label" helper="This is the group helper">
          <wink-check-box label="check box"></wink-check-box>
      </wink-check-box-group>`,
        });
        expect(page.root).toEqualHtml(`
      <wink-check-box-group label="This is the group label" helper="This is the group helper">
        <fieldset>
          <legend class="check-box-group__wrapper">
            <wink-form-label helper="This is the group helper" label="This is the group label" show-optional  optional-text="Optioneel"></wink-form-label>
          </legend>
          <div class="check-box-group--vertical">
            <wink-check-box label="check box"></wink-check-box>
          </div>
        </fieldset>
      </wink-check-box-group>
    `);
    });
    it('Should have a show an error when needed', async () => {
        const page = await newSpecPage({
            components: [CheckBoxGroup],
            html: `<wink-check-box-group label="This is the group label" error="Please check at least one checkbox">
          <wink-check-box label="check box"></wink-check-box>
      </wink-check-box-group>`,
        });
        expect(page.root).toEqualHtml(`
      <wink-check-box-group label="This is the group label" error="Please check at least one checkbox">
        <fieldset>
          <legend class="check-box-group__wrapper">
           <wink-form-label  helper="" label="This is the group label"  optional-text="Optioneel" show-optional></wink-form-label>
          </legend>
          <div class="check-box-group--vertical">
            <wink-check-box label="check box"></wink-check-box>
          </div>
          <wink-validation-message message="Please check at least one checkbox" type="error"></wink-validation-message>
        </fieldset>
      </wink-check-box-group>
    `);
    });
    it('Should remove optional when needed when needed', async () => {
        const page = await newSpecPage({
            components: [CheckBoxGroup],
            html: `<wink-check-box-group label="This is the group label" is-required >
          <wink-check-box label="check box"></wink-check-box>
      </wink-check-box-group>`,
        });
        expect(page.root).toEqualHtml(`
      <wink-check-box-group label="This is the group label"  is-required>
        <fieldset>
          <legend class="check-box-group__wrapper">
           <wink-form-label  helper="" label="This is the group label"  optional-text="Optioneel"/>
          </legend>
          <div class="check-box-group--vertical">
            <wink-check-box label="check box"></wink-check-box>
          </div>
        </fieldset>
      </wink-check-box-group>
    `);
    });
});
//# sourceMappingURL=check-box-group.spec.js.map
