import { newSpecPage } from '@stencil/core/testing';
import { Checkbox } from './checkbox';

describe('wink-checkbox', () => {
  it('should create an instance of Checkbox class component', () => {
    const comp = new Checkbox();

    expect(comp).toBeInstanceOf(Checkbox);
  });

  it('should render the element wink-checkbox', async () => {
    const page = await newSpecPage({
      components: [Checkbox],
      html: `<wink-checkbox></wink-checkbox>`,
    });

    expect(page.root).toEqualHtml(`
    <wink-checkbox>
      <label>
        <input type="checkbox" value="">
        <wink-form-label helper="" label="" rendition="subComponent"></wink-form-label>
      </label>
    </wink-checkbox>
  `);
  });

  it('should render the label correct and the helper text correct based on its props', async () => {
    const page = await newSpecPage({
      components: [Checkbox],
      html: `<wink-checkbox label="I'm the label" helper="I'm the helper"></wink-checkbox>`,
    });

    expect(page.root).toEqualHtml(`
      <wink-checkbox helper="I'm the helper" label="I'm the label">
        <label>
          <input type="checkbox" value="I'm the label">
           <wink-form-label helper="I'm the helper" label="I'm the label" rendition="subComponent"></wink-form-label>
        </label>
      </wink-checkbox>
    `);
  });

  it('should render the checkbox correct when error or disabled prop is set', async () => {
    const page = await newSpecPage({
      components: [Checkbox],
      html: `<wink-checkbox label="I'm the label" error disabled></wink-checkbox>`,
    });

    expect(page.root).toEqualHtml(`
      <wink-checkbox label="I'm the label" error disabled>
        <label>
          <input type="checkbox" value="I'm the label" aria-invalid="" disabled="">
          <wink-form-label helper="" label="I'm the label" rendition="subComponent"></wink-form-label>
        </label>
      </wink-checkbox>
    `);
  });

  it('should render the checked checkbox correctly', async () => {
    const page = await newSpecPage({
      components: [Checkbox],
      html: `<wink-checkbox label="I'm the label" checked></wink-checkbox>`,
    });

    expect(page.root).toEqualHtml(`
      <wink-checkbox label="I'm the label" checked>
        <label>
          <input type="checkbox" value="I'm the label" checked>
          <wink-form-label helper="" label="I'm the label" rendition="subComponent"></wink-form-label>
        </label>
      </wink-checkbox>
    `);
  });
});
