import { newSpecPage } from '@stencil/core/testing';
import { FormLabel } from './form-label';

describe('wink-form-label', () => {
  it('should create an instance of FormLabel class component', () => {
    const comp = new FormLabel();

    expect(comp).toBeInstanceOf(FormLabel);
  });

  it('should render the element wink-form-label', async () => {
    const page = await newSpecPage({
      components: [FormLabel],
      html: `<wink-form-label></wink-form-label>`,
    });

    expect(page.root).toEqualHtml(`
    <wink-form-label class="label--default">
      <span class="label--content-wrapper">
        <span class="label--text"></span>
      </span>
    </wink-form-label>
  `);
  });

  it('should render the element wink-form-label with a tooltip', async () => {
    const page = await newSpecPage({
      components: [FormLabel],
      html: `<wink-form-label tooltip="Tooltip"></wink-form-label>`,
    });

    expect(page.root).toEqualHtml(`
    <wink-form-label class="label--default" tooltip="Tooltip">
      <span class="label--content-wrapper">
        <span class="label--text">
        <wink-tooltip>
          Tooltip
        </wink-tooltip>
      </span>
    </wink-form-label>
  `);
  });
});
