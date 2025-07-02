import { SpecificationsMapperService } from './specifications-mapper.service';
import { DigitalTvMapper } from './digital-tv.mapper';
import { FixedTelMapper } from './fixed-tel.mapper';
import { InternetMapper } from './internet.mapper';
import { MobileMapper } from './mobile.mapper';
import { Product } from '../../../http/cafe/product-holding/models/product.model';
import { DefaultMapper } from './default.mapper';
import { DataSimMapper } from './data-sim.mapper';
import { TranslateHelperService } from './translate-helper.service';

describe('SpecificationsMapperService', function () {
  const fakeDTVMapper = new DigitalTvMapper();
  const fakeFixedTelMapper = new FixedTelMapper();
  const fakeInternetMapper = new InternetMapper();
  const fakeMobileMapper = new MobileMapper();
  const fakeDataSimMapper = new DataSimMapper();
  const fakeDefaultMapper = new DefaultMapper(new TranslateHelperService());
  const fakeProduct = new Product();

  beforeEach(() => {
    fakeDTVMapper.map = jest.fn();
    fakeFixedTelMapper.map = jest.fn();
    fakeInternetMapper.map = jest.fn();
    fakeMobileMapper.map = jest.fn();
    fakeDataSimMapper.map = jest.fn();
    fakeDefaultMapper.map = jest.fn();
  });

  describe('map', function () {
    const service: SpecificationsMapperService = new SpecificationsMapperService(
      fakeDTVMapper,
      fakeFixedTelMapper,
      fakeInternetMapper,
      fakeMobileMapper,
      fakeDataSimMapper,
      fakeDefaultMapper
    );

    it('should use DTV mapper if product is DTV product', function () {
      fakeProduct.isDTV = jest.fn().mockReturnValue(true);
      fakeProduct.isInternet = jest.fn().mockReturnValue(false);
      fakeProduct.isMobile = jest.fn().mockReturnValue(false);
      fakeProduct.isFixedCalling = jest.fn().mockReturnValue(false);

      service.map(fakeProduct, undefined);

      expect(fakeDTVMapper.map).toHaveBeenCalled();
      expect(fakeFixedTelMapper.map).not.toHaveBeenCalled();
      expect(fakeInternetMapper.map).not.toHaveBeenCalled();
      expect(fakeMobileMapper.map).not.toHaveBeenCalled();
      expect(fakeDefaultMapper.map).not.toHaveBeenCalled();
      expect(fakeDataSimMapper.map).not.toHaveBeenCalled();
    });

    it('should use Fixed Tel mapper if product is Fixed Tel product', function () {
      fakeProduct.isDTV = jest.fn().mockReturnValue(false);
      fakeProduct.isInternet = jest.fn().mockReturnValue(false);
      fakeProduct.isMobile = jest.fn().mockReturnValue(false);
      fakeProduct.isFixedCalling = jest.fn().mockReturnValue(true);

      service.map(fakeProduct, undefined);

      expect(fakeDTVMapper.map).not.toHaveBeenCalled();
      expect(fakeFixedTelMapper.map).toHaveBeenCalled();
      expect(fakeInternetMapper.map).not.toHaveBeenCalled();
      expect(fakeMobileMapper.map).not.toHaveBeenCalled();
      expect(fakeDefaultMapper.map).not.toHaveBeenCalled();
      expect(fakeDataSimMapper.map).not.toHaveBeenCalled();
    });

    it('should use Internet mapper if product is Internet product', function () {
      fakeProduct.isDTV = jest.fn().mockReturnValue(false);
      fakeProduct.isInternet = jest.fn().mockReturnValue(true);
      fakeProduct.isMobile = jest.fn().mockReturnValue(false);
      fakeProduct.isFixedCalling = jest.fn().mockReturnValue(false);

      service.map(fakeProduct, undefined);

      expect(fakeDTVMapper.map).not.toHaveBeenCalled();
      expect(fakeFixedTelMapper.map).not.toHaveBeenCalled();
      expect(fakeInternetMapper.map).toHaveBeenCalled();
      expect(fakeMobileMapper.map).not.toHaveBeenCalled();
      expect(fakeDefaultMapper.map).not.toHaveBeenCalled();
      expect(fakeDataSimMapper.map).not.toHaveBeenCalled();
    });

    it('should use Mobile mapper if product is Mobile product', function () {
      fakeProduct.isDTV = jest.fn().mockReturnValue(false);
      fakeProduct.isInternet = jest.fn().mockReturnValue(false);
      fakeProduct.isMobile = jest.fn().mockReturnValue(true);
      fakeProduct.isFixedCalling = jest.fn().mockReturnValue(false);

      service.map(fakeProduct, undefined);

      expect(fakeDTVMapper.map).not.toHaveBeenCalled();
      expect(fakeFixedTelMapper.map).not.toHaveBeenCalled();
      expect(fakeInternetMapper.map).not.toHaveBeenCalled();
      expect(fakeMobileMapper.map).toHaveBeenCalled();
      expect(fakeDefaultMapper.map).not.toHaveBeenCalled();
      expect(fakeDataSimMapper.map).not.toHaveBeenCalled();
    });

    it('should use datasim mapper if product is Mobile product', function () {
      fakeProduct.isDTV = jest.fn().mockReturnValue(false);
      fakeProduct.isInternet = jest.fn().mockReturnValue(false);
      fakeProduct.isMobile = jest.fn().mockReturnValue(false);
      fakeProduct.isFixedCalling = jest.fn().mockReturnValue(false);
      fakeProduct.isMobileInternet = jest.fn().mockReturnValue(true);

      service.map(fakeProduct, undefined);

      expect(fakeDTVMapper.map).not.toHaveBeenCalled();
      expect(fakeFixedTelMapper.map).not.toHaveBeenCalled();
      expect(fakeInternetMapper.map).not.toHaveBeenCalled();
      expect(fakeMobileMapper.map).not.toHaveBeenCalled();
      expect(fakeDataSimMapper.map).toHaveBeenCalled();
      expect(fakeDefaultMapper.map).not.toHaveBeenCalled();
    });

    it('should use Default mapper if product is None of the above', function () {
      fakeProduct.isDTV = jest.fn().mockReturnValue(false);
      fakeProduct.isInternet = jest.fn().mockReturnValue(false);
      fakeProduct.isMobile = jest.fn().mockReturnValue(false);
      fakeProduct.isFixedCalling = jest.fn().mockReturnValue(false);
      fakeProduct.isMobileInternet = jest.fn().mockReturnValue(false);

      service.map(fakeProduct, undefined);

      expect(fakeDTVMapper.map).not.toHaveBeenCalled();
      expect(fakeFixedTelMapper.map).not.toHaveBeenCalled();
      expect(fakeInternetMapper.map).not.toHaveBeenCalled();
      expect(fakeMobileMapper.map).not.toHaveBeenCalled();
      expect(fakeDefaultMapper.map).toHaveBeenCalled();
      expect(fakeDataSimMapper.map).not.toHaveBeenCalled();
    });
  });
});
