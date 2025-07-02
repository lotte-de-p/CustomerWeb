import { InputOption } from './input-radio.model';

describe('InputOption', () => {
  it('when a non parameterized instantiation', function () {
    const input = new InputOption();
    expect(input.disabled).toEqual(false);
    expect(input.label).toEqual('');
    expect(input.value).toEqual('');
  });

  it('when an instantiation with value', function () {
    const input = new InputOption('value');
    expect(input.disabled).toEqual(false);
    expect(input.label).toEqual('');
    expect(input.value).toBe('value');
  });

  it('when an instantiation with label and value', function () {
    const input = new InputOption('value', 'label');
    expect(input.disabled).toEqual(false);
    expect(input.label).toBe('label');
    expect(input.value).toBe('value');
  });

  it('when an instantiation with label and value and hasInputField', function () {
    const input = new InputOption('value', 'label', true);
    expect(input.disabled).toBe(true);
    expect(input.label).toBe('label');
    expect(input.value).toBe('value');
  });
});
