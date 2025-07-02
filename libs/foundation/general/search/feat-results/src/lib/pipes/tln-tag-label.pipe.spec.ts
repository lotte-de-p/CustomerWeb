import { TlnTagLabelPipe } from './tln-tag-label.pipe';

describe('TlnTagLabelPipe', () => {
  const label = 'Label goes here';
  it('create an instance', () => {
    const pipe = new TlnTagLabelPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return value after pipe when tag starts with cp_label|', () => {
    const pipe = new TlnTagLabelPipe();
    expect(pipe.transform('cp_label|')).toBe('');
    expect(pipe.transform(`cp_label|${label}`)).toBe(label);
    expect(pipe.transform(`cp_label_base|${label}`)).toBe(label);
    expect(pipe.transform(`cp_label_random_string|${label}`)).toBe(label);
  });

  it('should return value after pipe  when tag starts with vp_label|', () => {
    const pipe = new TlnTagLabelPipe();
    expect(pipe.transform('vp_label|')).toBe('');
    expect(pipe.transform(`vp_label|${label}`)).toBe(label);
    expect(pipe.transform(`vp_label_base|${label}`)).toBe(label);
    expect(pipe.transform(`vp_label_random_string|${label}`)).toBe(label);
  });

  it('should value after pipe when tag starts with online_excl|', () => {
    const pipe = new TlnTagLabelPipe();
    expect(pipe.transform('online_excl|')).toBe('');
    expect(pipe.transform(`online_excl|${label}`)).toBe(label);
    expect(pipe.transform(`online_excl_base|${label}`)).toBe(label);
    expect(pipe.transform(`online_excl_random_string|${label}`)).toBe(label);
  });

  it('should return recommended when tag starts with pre_order_label|', () => {
    const pipe = new TlnTagLabelPipe();
    expect(pipe.transform('pre_order_label|')).toBe('');
    expect(pipe.transform(`pre_order_label|${label}`)).toBe(label);
    expect(pipe.transform(`pre_order_label_base|${label}`)).toBe(label);
    expect(pipe.transform(`pre_order_label_random_string|${label}`)).toBe(label);
  });
});
