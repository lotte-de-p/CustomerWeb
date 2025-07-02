import { TlnTagBadgeColorPipe } from './tln-tag-badge-color.pipe';

describe('TlnTagBadgeColorPipe', () => {
  it('create an instance', () => {
    const pipe = new TlnTagBadgeColorPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return info when tag does not match', () => {
    const pipe = new TlnTagBadgeColorPipe();
    expect(pipe.transform('')).toBe('info');
    expect(pipe.transform('random')).toBe('info');
    expect(pipe.transform('random_cp_label_randomstring')).toBe('info');
    expect(pipe.transform('random_vp_label_randomstring')).toBe('info');
    expect(pipe.transform('random_pre_order_label_randomstring')).toBe('info');
    expect(pipe.transform('random_online_excl_randomstring')).toBe('info');
  });

  it('should return cashback when tag starts with cp_label|', () => {
    const pipe = new TlnTagBadgeColorPipe();
    expect(pipe.transform('cp_label|')).toBe('cashback');
    expect(pipe.transform('cp_label|Label goes here')).toBe('cashback');
    expect(pipe.transform('cp_label_base|Label goes here')).toBe('cashback');
    expect(pipe.transform('cp_label_this_is_a_random_string|Label goes here')).toBe('cashback');
  });

  it('should return accessories when tag starts with vp_label|', () => {
    const pipe = new TlnTagBadgeColorPipe();
    expect(pipe.transform('vp_label|')).toBe('accessories');
    expect(pipe.transform('vp_label|Label goes here')).toBe('accessories');
    expect(pipe.transform('vp_label_base|Label goes here')).toBe('accessories');
    expect(pipe.transform('vp_label_this_is_a_random_string|Label goes here')).toBe('accessories');
  });

  it('should return recommended when tag starts with online_excl|', () => {
    const pipe = new TlnTagBadgeColorPipe();
    expect(pipe.transform('online_excl|')).toBe('recommended');
    expect(pipe.transform('online_excl|Label goes here')).toBe('recommended');
    expect(pipe.transform('online_excl|')).toBe('recommended');
    expect(pipe.transform('online_excl_base|Label goes here')).toBe('recommended');
    expect(pipe.transform('online_excl_this_is_a_random_string|Label goes here')).toBe('recommended');
  });

  it('should return recommended when tag starts with pre_order_label|', () => {
    const pipe = new TlnTagBadgeColorPipe();
    expect(pipe.transform('pre_order_label|')).toBe('recommended');
    expect(pipe.transform('pre_order_label|Label goes here')).toBe('recommended');
    expect(pipe.transform('pre_order_label_base|Label goes here')).toBe('recommended');
    expect(pipe.transform('pre_order_label_this_is_a_random_string|Label goes here')).toBe('recommended');
  });
});
