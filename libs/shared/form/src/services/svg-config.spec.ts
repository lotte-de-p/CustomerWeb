import { SvgConfig } from './svg-config';

describe('SvgConfig', function () {
  it('should instantiate', function () {
    const svgConfigService = new SvgConfig('image');

    expect(svgConfigService.baseUrl).toEqual('image');
    expect(svgConfigService.clientOnly).toBe(true);
  });
});
