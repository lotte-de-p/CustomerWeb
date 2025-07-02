import { newSpecPage } from "@stencil/core/testing";
import { CheckBox } from "./check-box";
describe('wink-check-box', () => {
    it('should should create an instance of CheckBox class component', () => {
        const comp = new CheckBox();
        expect(comp).toBeInstanceOf(CheckBox);
    });
    it('should render the element wink-check-box', async () => {
        const page = await newSpecPage({
            components: [CheckBox],
            html: `<wink-check-box></wink-check-box>`,
        });
        expect(page.root).toEqualHtml(`
    <wink-check-box>
      <label>
        <input type="checkbox" value="">
        <wink-form-label helper="" label="" rendition="subComponent"></wink-form-label>
      </label>
    </wink-check-box>
  `);
    });
    it('should render the label correct and the helper text correct based on its props', async () => {
        const page = await newSpecPage({
            components: [CheckBox],
            html: `<wink-check-box label="I'm the label" helper="I'm the helper"></wink-check-box>`,
        });
        expect(page.root).toEqualHtml(`
      <wink-check-box helper="I'm the helper" label="I'm the label">
        <label>
          <input type="checkbox" value="I'm the label">
           <wink-form-label helper="I'm the helper" label="I'm the label" rendition="subComponent"></wink-form-label>
        </label>
      </wink-check-box>
    `);
    });
    it('should render the checkbox correct when error or disabled prop is set', async () => {
        const page = await newSpecPage({
            components: [CheckBox],
            html: `<wink-check-box label="I'm the label" error disabled></wink-check-box>`,
        });
        expect(page.root).toEqualHtml(`
      <wink-check-box label="I'm the label" error disabled>
        <label>
          <input type="checkbox" value="I'm the label" aria-invalid="" disabled="">
          <wink-form-label helper="" label="I'm the label" rendition="subComponent"></wink-form-label>
        </label>
      </wink-check-box>
    `);
    });
    it('should render the checked checkbox correctly', async () => {
        const page = await newSpecPage({
            components: [CheckBox],
            html: `<wink-check-box label="I'm the label" checked></wink-check-box>`,
        });
        expect(page.root).toEqualHtml(`
      <wink-check-box label="I'm the label" checked>
        <label>
          <input type="checkbox" value="I'm the label" checked>
          <wink-form-label helper="" label="I'm the label" rendition="subComponent"></wink-form-label>
        </label>
      </wink-check-box>
    `);
    });
});
//# sourceMappingURL=check-box.spec.js.map
