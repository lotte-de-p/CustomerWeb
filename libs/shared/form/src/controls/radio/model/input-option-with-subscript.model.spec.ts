import { InputOptionWithSubscript } from '.';

describe('InputOptionWithSubscript', () => {
  it('when a non parameterized instantiation', function () {
    const input = new InputOptionWithSubscript();
    expect(input.subScript).toBeUndefined();
    expect(input.label).toEqual('');
    expect(input.value).toEqual('');
  });

  it('when an instantiation with value', function () {
    const input = new InputOptionWithSubscript('value');
    expect(input.subScript).toBeUndefined();
    expect(input.label).toEqual('');
    expect(input.value).toBe('value');
  });

  it('when an instantiation with label and value', function () {
    const input = new InputOptionWithSubscript('value', 'label');
    expect(input.subScript).toBeUndefined();
    expect(input.label).toBe('label');
    expect(input.value).toBe('value');
  });

  it('when an instantiation with label and value and hasInputField', function () {
    const input = new InputOptionWithSubscript('value', 'label', 'subscript');
    expect(input.subScript).toBe('subscript');
    expect(input.label).toBe('label');
    expect(input.value).toBe('value');
  });
});
