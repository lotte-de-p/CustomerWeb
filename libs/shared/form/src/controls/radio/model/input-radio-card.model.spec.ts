import { InputOptionWithCard } from './input-radio-card.model';

describe('InputOptionWithCard', () => {
  it('when a non parameterized instantiation', function () {
    const input = new InputOptionWithCard();
    expect(input.text).toEqual('');
    expect(input.label).toEqual('');
    expect(input.value).toEqual('');
  });

  it('when an instantiation with value', function () {
    const input = new InputOptionWithCard('value');
    expect(input.text).toEqual('');
    expect(input.label).toEqual('');
    expect(input.value).toBe('value');
  });

  it('when an instantiation with label and value', function () {
    const input = new InputOptionWithCard('value', 'label');
    expect(input.text).toEqual('');
    expect(input.label).toBe('label');
    expect(input.value).toBe('value');
  });

  it('when an instantiation with label and value and hasInputField', function () {
    const input = new InputOptionWithCard('value', 'label', 'text');
    expect(input.text).toBe('text');
    expect(input.label).toBe('label');
    expect(input.value).toBe('value');
  });

  it('when an instantiation with label and value and hasInputField and withLabel', function () {
    const input = new InputOptionWithCard('value', 'label', 'text');
    input.withLabel('other label');
    expect(input.text).toBe('text');
    expect(input.label).toBe('other label');
    expect(input.value).toBe('value');
  });

  it('when an instantiation with label and value and hasInputField and withText', function () {
    const input = new InputOptionWithCard('value', 'label', 'text');
    input.withText('other text');
    expect(input.text).toBe('other text');
    expect(input.label).toBe('label');
    expect(input.value).toBe('value');
  });

  it('when an instantiation with label and value and hasInputField and withValue', function () {
    const input = new InputOptionWithCard('value', 'label', 'text');
    input.withValue('other value');
    expect(input.text).toBe('text');
    expect(input.label).toBe('label');
    expect(input.value).toBe('other value');
  });
});
