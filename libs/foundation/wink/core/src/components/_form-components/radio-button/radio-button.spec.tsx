import { newSpecPage } from '@stencil/core/testing';
import { RadioButton } from './radio-button';

describe('wink-radio-button', () => {
  it('should create an instance of RadioButton class component', () => {
    const comp = new RadioButton();

    expect(comp).toBeInstanceOf(RadioButton);
  });

  it('should render the element wink-radio-button', async () => {
    const page = await newSpecPage({
      components: [RadioButton],
      html: `<wink-radio-button label="Radio button"></wink-radio-button>`,
    });

    expect(page.root).toEqualHtml(`
    <wink-radio-button label="Radio button">
      <label>
         <input type="radio" value="Radio button">
          <wink-form-label helper="" label="Radio button" rendition="subComponent"/>
       </label>
    </wink-radio-button>
  `);
  });

  it('should render the element wink-radio-button with helper text', async () => {
    const page = await newSpecPage({
      components: [RadioButton],
      html: `<wink-radio-button label="Radio button" helper="I'm helping here"></wink-radio-button>`,
    });

    expect(page.root).toEqualHtml(`
    <wink-radio-button label="Radio button" helper="I'm helping here">
    <label>
      <input type="radio" value="Radio button">
      <wink-form-label helper="I'm helping here" label="Radio button"  rendition="subComponent"/>
    </label>
    </wink-radio-button>
  `);
  });

  it('should render the checked element wink-radio-button', async () => {
    const page = await newSpecPage({
      components: [RadioButton],
      html: `<wink-radio-button checked label="Radio button"></wink-radio-button>`,
    });

    expect(page.root).toEqualHtml(`
    <wink-radio-button checked label="Radio button">
      <label>
         <input type="radio" value="Radio button" checked>
          <wink-form-label helper="" label="Radio button" rendition="subComponent"/>
       </label>
    </wink-radio-button>
  `);
  });
});
