import { HeaderUtil } from './header.util';

describe('HeaderUtil', () => {
  it('should create http headers', () => {
    const actual = HeaderUtil.createHttpHeaders('currentUrl');

    expect(actual.has('x-alt-referer')).toBe(true);
    expect(actual.get('x-alt-referer')).toEqual('currentUrl');
    expect(actual.has('X-Requested-With')).toBe(true);
    expect(actual.get('X-Requested-With')).toEqual('XMLHttpRequest');
  });
});
