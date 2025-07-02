import { InputOptionWithOptionalInputField } from '.';

describe('InputOptionWithOptionalInputField', () => {
  it('when a non parameterized instantiation', function () {
    const input = new InputOptionWithOptionalInputField();
    expect(input.hasInputField).toBe(false);
    expect(input.label).toEqual('');
    expect(input.value).toEqual('');
  });

  it('when an instantiation with value', function () {
    const input = new InputOptionWithOptionalInputField('value');
    expect(input.hasInputField).toBe(false);
    expect(input.label).toEqual('');
    expect(input.value).toBe('value');
  });

  it('when an instantiation with label and value', function () {
    const input = new InputOptionWithOptionalInputField('value', 'label');
    expect(input.hasInputField).toBe(false);
    expect(input.label).toBe('label');
    expect(input.value).toBe('value');
  });

  it('when an instantiation with label and value and hasInputField', function () {
    const input = new InputOptionWithOptionalInputField('value', 'label', true);
    expect(input.hasInputField).toBe(true);
    expect(input.label).toBe('label');
    expect(input.value).toBe('value');
  });
});
