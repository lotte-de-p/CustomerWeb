import {
  TimeslotAddressRequestInterfaceTestFactory,
  TimeslotRequestInterfaceTestFactory,
} from './timeslot-request.testfactory';
import { LanguageEnum } from '@telenet/ng-lib-page';

describe('time slot test factory', () => {
  describe('TimeslotAddressRequestInterfaceTestFactory', () => {
    it('should change property via parameter', function () {
      let timeslotAddressRequestInterface = TimeslotAddressRequestInterfaceTestFactory.build();
      expect(timeslotAddressRequestInterface.zip).toEqual('2800');
      timeslotAddressRequestInterface = TimeslotAddressRequestInterfaceTestFactory.build({ zip: '2000' });
      expect(timeslotAddressRequestInterface.zip).toEqual('2000');
    });
  });

  describe('TimeslotRequestInterfaceTestFactory', () => {
    it('should change property via parameter', function () {
      let timeslotAddressRequestInterface = TimeslotRequestInterfaceTestFactory.build();
      expect(timeslotAddressRequestInterface.language).toEqual(LanguageEnum.NL);
      timeslotAddressRequestInterface = TimeslotRequestInterfaceTestFactory.build({ language: LanguageEnum.FR });
      expect(timeslotAddressRequestInterface.language).toEqual(LanguageEnum.FR);
    });
  });
});
