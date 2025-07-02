import { InstallTypeModel } from './install-type.model';

describe('InstallTypeModel', (): void => {
  describe('withSelected withDescription withPrice', (): void => {
    it('should create and return', (): void => {
      const installType = new InstallTypeModel().withSelected().withDescription('some description').withPrice(25);
      expect(installType.selected).toEqual(true);
      expect(installType.description).toEqual('some description');
      expect(installType.price).toEqual(25);
    });
  });

  describe('isPreInstall', (): void => {
    it('should return true given preinstall', (): void => {
      const actual = new InstallTypeModel().withDescription('preinstall').isPreInstall();
      expect(actual).toEqual(true);
    });
    it('should return false given no preinstall', (): void => {
      const actual = new InstallTypeModel().withDescription('nope').isPreInstall();
      expect(actual).toEqual(false);
    });
  });
  describe('isComfortInstall', (): void => {
    it('should return true given confortinstall', (): void => {
      const actual = new InstallTypeModel().withDescription('comfortinstall').isComfortInstall();
      expect(actual).toEqual(true);
    });
    it('should return false given preinstall', (): void => {
      const actual = new InstallTypeModel().withDescription('preinstall').isComfortInstall();
      expect(actual).toEqual(false);
    });
  });
  describe('isSelfInstall', (): void => {
    it('should return true given selfinstall', (): void => {
      const actual = new InstallTypeModel().withDescription('selfinstall').isSelfInstall();
      expect(actual).toEqual(true);
    });
    it('should return false given preinstall', (): void => {
      const actual = new InstallTypeModel().withDescription('preinstall').isSelfInstall();
      expect(actual).toEqual(false);
    });
  });
});
