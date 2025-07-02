import { newSpecPage } from '@stencil/core/testing';
import { TextArea } from './textarea';
import { resetIdsInTest } from '../../../utils/utils';

describe('wink-textarea', () => {
  it('should create an instance of TextArea class component', () => {
    const comp = new TextArea();

    expect(comp).toBeInstanceOf(TextArea);
  });

  it('should render the element wink-textarea', async () => {
    const page = await newSpecPage({
      components: [TextArea],
      html: `<wink-textarea></wink-textarea>`,
    });

    expect(resetIdsInTest(page.root)).toEqualHtml(`
    <wink-textarea>
      <label>
        <wink-form-label showoptional=""></wink-form-label>
        <textarea autocomplete="off" enterkeyhint="none"></textarea>
      </label>
    </wink-textarea>
  `);
  });

  it('should render the element wink-textarea with an error', async () => {
    const page = await newSpecPage({
      components: [TextArea],
      html: `<wink-textarea
        label="textarea"
        helper="textarea met helper text"
        name="textarea"
        textarea-id="textarea-01"
        error="Geef een geldige waarde in"
        is-required=""
        rows="3"
        placeholder="Placeholder"
      ></wink-textarea>`,
    });

    expect(page.root).toEqualHtml(`
    <wink-textarea error="Geef een geldige waarde in" helper="textarea met helper text" is-required="" label="textarea" name="textarea" placeholder="Placeholder" rows="3" textarea-id="textarea-01">
      <label>
      <wink-form-label helper="textarea met helper text" label="textarea"></wink-form-label><textarea id="textarea-01" autocomplete="off" aria-invalid="" enterkeyhint="none" name="textarea" placeholder="Placeholder" required="" rows="3"></textarea>
        <wink-validation-message message="Geef een geldige waarde in" type="error"></wink-validation-message>
      </label
    </wink-textarea>
  `);
  });

  it('should render the element wink-textarea with the right numeric values', async () => {
    const page = await newSpecPage({
      components: [TextArea],
      html: `<wink-textarea
        label="textarea"
        helper="textarea met helper text"
        name="textarea"
        textarea-id="textarea-01"
        is-required=""
        autocomplete="on"
        minlength="300"
        maxlength="2000"
        rows="7"
        placeholder="Placeholder"
      ></wink-textarea>`,
    });

    expect(page.root).toEqualHtml(`
    <wink-textarea autocomplete="on" helper="textarea met helper text" is-required="" label="textarea" maxlength="2000" minlength="300" name="textarea" placeholder="Placeholder" rows="7" textarea-id="textarea-01">
      <label>
        <wink-form-label helper="textarea met helper text" label="textarea"></wink-form-label><textarea id="textarea-01" autocomplete="on" enterkeyhint="none" maxlength="2000" minlength="300" name="textarea" placeholder="Placeholder" required="" rows="7">
        </textarea>
      </label>
    </wink-textarea>
  `);
  });
});
