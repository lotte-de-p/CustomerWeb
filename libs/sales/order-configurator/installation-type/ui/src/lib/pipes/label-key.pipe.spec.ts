import { LabelKeyPipe } from './label-key.pipe';

const exampleValue = 'Example Value';

describe('LabelKeyPipe', () => {
  let pipe: LabelKeyPipe;

  beforeEach(() => {
    pipe = new LabelKeyPipe();
  });

  it('should transform value to correct label key with prefix and suffix', () => {
    const result = pipe.transform(exampleValue, 'prefix', 'suffix');
    expect(result).toBe('ng.sales-checkout.lbl-prefix-example-value-suffix');
  });

  it('should transform value to correct label key with prefix only', () => {
    const result = pipe.transform(exampleValue, 'prefix');
    expect(result).toBe('ng.sales-checkout.lbl-prefix-example-value');
  });

  it('should transform value to correct label key with suffix only', () => {
    const result = pipe.transform(exampleValue, undefined, 'suffix');
    expect(result).toBe('ng.sales-checkout.lbl-example-value-suffix');
  });

  it('should transform value to correct label key without prefix and suffix', () => {
    const result = pipe.transform(exampleValue);
    expect(result).toBe('ng.sales-checkout.lbl-example-value');
  });

  it('should handle empty value gracefully', () => {
    const result = pipe.transform('', 'prefix', 'suffix');
    expect(result).toBe('ng.sales-checkout.lbl-prefix--suffix');
  });

  it('should handle undefined prefix gracefully', () => {
    const result = pipe.transform(exampleValue, undefined, 'suffix');
    expect(result).toBe('ng.sales-checkout.lbl-example-value-suffix');
  });

  it('should handle undefined suffix gracefully', () => {
    const result = pipe.transform(exampleValue, 'prefix', undefined);
    expect(result).toBe('ng.sales-checkout.lbl-prefix-example-value');
  });
});
