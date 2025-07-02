import { newSpecPage } from '@stencil/core/testing';
import { CheckboxGroup } from './checkbox-group';

describe('wink-checkbox-group', () => {
  it('should create an instance of CheckboxGroup class component', () => {
    const comp = new CheckboxGroup();

    expect(comp).toBeInstanceOf(CheckboxGroup);
  });

  it('should render the element wink-checkbox-group', async () => {
    const page = await newSpecPage({
      components: [CheckboxGroup],
      html: `<wink-checkbox-group>
          <wink-checkbox label="check box"></wink-checkbox>
      </wink-checkbox-group>`,
    });

    expect(page.root).toEqualHtml(`
      <wink-checkbox-group>
        <fieldset>
          <legend class="checkbox-group__wrapper">
            <wink-form-label helper="" label="" show-optional  optional-text="Optioneel"></wink-form-label>
          </legend>
          <div class="checkbox-group--vertical">
            <wink-checkbox label="check box"></wink-checkbox>
          </div>
        </fieldset>
      </wink-checkbox-group>
    `);
  });

  it('should have an horizontal class', async () => {
    const page = await newSpecPage({
      components: [CheckboxGroup],
      html: `<wink-checkbox-group direction="horizontal">
          <wink-checkbox label="check box"></wink-checkbox>
      </wink-checkbox-group>`,
    });

    expect(page.root).toEqualHtml(`
      <wink-checkbox-group direction="horizontal">
        <fieldset>
          <legend class="checkbox-group__wrapper">
            <wink-form-label helper="" label="" show-optional  optional-text="Optioneel"></wink-form-label>
          </legend>
        <div class="checkbox-group--horizontal">
          <wink-checkbox label="check box"></wink-checkbox>
        </div>
        </fieldset>
      </wink-checkbox-group>
    `);
  });

  it('should have a label and a helper', async () => {
    const page = await newSpecPage({
      components: [CheckboxGroup],
      html: `<wink-checkbox-group label="This is the group label" helper="This is the group helper">
          <wink-checkbox label="check box"></wink-checkbox>
      </wink-checkbox-group>`,
    });

    expect(page.root).toEqualHtml(`
      <wink-checkbox-group label="This is the group label" helper="This is the group helper">
        <fieldset>
          <legend class="checkbox-group__wrapper">
            <wink-form-label helper="This is the group helper" label="This is the group label" show-optional  optional-text="Optioneel"></wink-form-label>
          </legend>
          <div class="checkbox-group--vertical">
            <wink-checkbox label="check box"></wink-checkbox>
          </div>
        </fieldset>
      </wink-checkbox-group>
    `);
  });

  it('Should have a show an error when needed', async () => {
    const page = await newSpecPage({
      components: [CheckboxGroup],
      html: `<wink-checkbox-group label="This is the group label" error="Please check at least one checkbox">
          <wink-checkbox label="check box"></wink-checkbox>
      </wink-checkbox-group>`,
    });

    expect(page.root).toEqualHtml(`
      <wink-checkbox-group label="This is the group label" error="Please check at least one checkbox">
        <fieldset>
          <legend class="checkbox-group__wrapper">
           <wink-form-label  helper="" label="This is the group label"  optional-text="Optioneel" show-optional></wink-form-label>
          </legend>
          <div class="checkbox-group--vertical">
            <wink-checkbox label="check box"></wink-checkbox>
          </div>
          <wink-validation-message message="Please check at least one checkbox" type="error"></wink-validation-message>
        </fieldset>
      </wink-checkbox-group>
    `);
  });

  it('Should remove optional when needed when needed', async () => {
    const page = await newSpecPage({
      components: [CheckboxGroup],
      html: `<wink-checkbox-group label="This is the group label" is-required >
          <wink-checkbox label="check box"></wink-checkbox>
      </wink-checkbox-group>`,
    });

    expect(page.root).toEqualHtml(`
      <wink-checkbox-group label="This is the group label"  is-required>
        <fieldset>
          <legend class="checkbox-group__wrapper">
           <wink-form-label  helper="" label="This is the group label"  optional-text="Optioneel"/>
          </legend>
          <div class="checkbox-group--vertical">
            <wink-checkbox label="check box"></wink-checkbox>
          </div>
        </fieldset>
      </wink-checkbox-group>
    `);
  });
});
