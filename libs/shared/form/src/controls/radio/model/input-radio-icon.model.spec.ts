import { InputOptionWithIcon } from './input-radio-icon.model';

describe('InputOptionWithIcon', () => {
  const ICON_SEARCH = 'icon-search';
  const VALUE = 'value';
  const LABEL = 'label';
  const DESCRIPTION = 'description';

  it('when a non parameterized instantiation', () => {
    const input = new InputOptionWithIcon();
    expect(input.icon).toEqual('');
    expect(input.label).toEqual('');
    expect(input.value).toEqual('');
    expect(input.text).toBeUndefined();
  });

  it('when an instantiation with value', () => {
    const input = new InputOptionWithIcon(VALUE);
    expect(input.icon).toEqual('');
    expect(input.label).toEqual('');
    expect(input.value).toBe(VALUE);
    expect(input.text).toBeUndefined();
  });

  it('when an instantiation with label and value', () => {
    const input = new InputOptionWithIcon(VALUE, LABEL);
    expect(input.icon).toEqual('');
    expect(input.label).toBe(LABEL);
    expect(input.value).toBe(VALUE);
    expect(input.text).toBeUndefined();
  });

  it('when an instantiation with label and value and icon', () => {
    const input = new InputOptionWithIcon(VALUE, LABEL, ICON_SEARCH);
    expect(input.icon).toBe(ICON_SEARCH);
    expect(input.label).toBe(LABEL);
    expect(input.value).toBe(VALUE);
    expect(input.text).toBeUndefined();
  });

  it('when an instantiation with label, value, description and icon', () => {
    const input = new InputOptionWithIcon(VALUE, LABEL, ICON_SEARCH, DESCRIPTION);
    expect(input.icon).toBe(ICON_SEARCH);
    expect(input.label).toBe(LABEL);
    expect(input.value).toBe(VALUE);
    expect(input.text).toBe(DESCRIPTION);
  });

  it('should create the input and set the properties', () => {
    const input = new InputOptionWithIcon()
      .withText(DESCRIPTION)
      .withLabel(LABEL)
      .withIcon(ICON_SEARCH)
      .withValue(VALUE);

    expect(input.text).toBe(DESCRIPTION);
    expect(input.label).toBe(LABEL);
    expect(input.icon).toBe(ICON_SEARCH);
    expect(input.value).toBe(VALUE);
  });

  it('should create an input with value and label', () => {
    const input = new InputOptionWithIcon().withValueAndLabel(LABEL);

    expect(input.value).toBe(LABEL);
    expect(input.label).toBe(LABEL);
  });
});
