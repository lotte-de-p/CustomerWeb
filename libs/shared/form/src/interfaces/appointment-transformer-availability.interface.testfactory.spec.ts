import { transformedAvailabilityInterfaceTestfactory } from './appointment-transformer-availability.interface.testfactory';
import { TimeslotMomentEnum } from '../enums/timeslot.enum';

describe('transformedAvailabilityInterfaceTestfactory', () => {
  it('should create oobject', function () {
    const transformedAvailability = transformedAvailabilityInterfaceTestfactory.build();
    expect(transformedAvailability.code).toEqual(TimeslotMomentEnum.LUNCH);
    expect(transformedAvailability.specUrl).toEqual('http://specurl.test/test');
    expect(transformedAvailability.availabiltyId).toEqual('123456789');
    expect(transformedAvailability.timeFormat).toEqual('00+00');
    expect(transformedAvailability.productInfo).toBeTruthy();
    expect(transformedAvailability.timeslotMoment?.key).toEqual(TimeslotMomentEnum.LUNCH);
    expect(transformedAvailability.timeslotMoment?.startHours).toEqual('11');
    expect(transformedAvailability.timeslotMoment?.startMinutes).toEqual('00');
    expect(transformedAvailability.timeslotMoment?.endHours).toEqual('13');
    expect(transformedAvailability.timeslotMoment?.endMinutes).toEqual('00');
  });
});
