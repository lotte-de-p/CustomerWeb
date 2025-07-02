import { ImagePathPipe } from './image-path.pipe';
import spyOn = jest.spyOn;
import { AssetService } from '@telenet/ng-lib-page';

const expectedPath = '/test/path/test';

describe('ImagePathPipe', () => {
  let pipe: ImagePathPipe;

  beforeEach(() => {
    pipe = new ImagePathPipe();
    spyOn(AssetService, 'getImagePath').mockReturnValue(expectedPath);
  });

  it('should transform value to correct image path with suffix', () => {
    const result = pipe.transform('example', 'brandA', '_suffix');
    expect(result).toBe(expectedPath + '_suffix.svg');
    expect(AssetService.getImagePath).toHaveBeenCalledWith('SALES', 'installation-type/example', 'brandA');
  });

  it('should transform value to correct image path without suffix', () => {
    const result = pipe.transform('example', 'brandA');
    expect(result).toBe(expectedPath + '.svg');
    expect(AssetService.getImagePath).toHaveBeenCalledWith('SALES', 'installation-type/example', 'brandA');
  });

  it('should handle empty value gracefully', () => {
    const result = pipe.transform('', 'brandA');
    expect(result).toBe(expectedPath + '.svg');
    expect(AssetService.getImagePath).toHaveBeenCalledWith('SALES', 'installation-type/', 'brandA');
  });
});
