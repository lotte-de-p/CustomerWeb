import { TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { AssetService } from './asset.service';

const imagenameSvg = 'imagename.svg';
describe('AssetService', () => {
  beforeAll(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: {} }],
      imports: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
  });

  describe('getImagePath', function () {
    it('should return correct image url for move', function () {
      const imageName = imagenameSvg;
      expect(AssetService.getImagePath('MOVE', imageName)).toBe(
        '/components/care/administration/cafe/move/media/imagename.svg'
      );
    });

    it('should return correct image url for sales', function () {
      const brand = 'telenet';
      const imageName = imagenameSvg;
      expect(AssetService.getImagePath('SALES', imageName, brand)).toBe(
        '/components/sales/nc/sales-checkout/media/telenet/imagename.svg'
      );
    });

    it('should return correct image url for CHANGE_FLAVOUR', function () {
      const imageName = imagenameSvg;
      expect(AssetService.getImagePath('CHANGE_FLAVOUR', imageName)).toBe(
        '/components/sales/cafe/change-flavour/media/imagename.svg'
      );
    });

    it('should return correct image url for CONNECT_FIVE', function () {
      const imageName = imagenameSvg;
      expect(AssetService.getImagePath('CONNECT_FIVE', imageName)).toBe(
        '/components/sales/cafe/connect-five/media/imagename.svg'
      );
    });

    it('should return correct image url for SELF_INSTALL', function () {
      const imageName = imagenameSvg;
      expect(AssetService.getImagePath('SELF_INSTALL', imageName)).toBe(
        '/components/care/administration/nc/self-install/media/imagename.svg'
      );
    });

    it('should return correct image url for TIP', function () {
      const imageName = imagenameSvg;
      expect(AssetService.getImagePath('TIP', imageName)).toBe('/components/tip/nc/media/imagename.svg');
    });

    it('should return correct image url for DEFAULT_PROFILE_PIC', function () {
      const imageName = imagenameSvg;
      expect(AssetService.getImagePath('DEFAULT_PROFILE_PIC', imageName)).toBe(
        '/components/general/common/telenet-login/media/imagename.svg'
      );
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
