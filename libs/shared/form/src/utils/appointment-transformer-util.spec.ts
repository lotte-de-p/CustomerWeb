import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AppointmentTransformerUtil } from '.';
import { CafeTimeSlotMapper, CallexcellTimeslotMapper, NCTimeSlotMapper } from '../mappers';
import { CafeTimeSlotList, NCTimeSlotList } from '../models';
import { AppointmentPickerConsumerTypeEnum } from '../interfaces';
import { TimeslotMomentEnum } from '../enums';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';

const mockNCTimeslotJson = require('./data/nc-timeslots.json');
const mockCafeTimeslotsJson = require('./data/cafe-timeslots.json');
const mockCallExcellTimeslotsJson = require('./data/raw-callexcell-timeslots.json');

describe('AppointmentTransformerUtil', () => {
  const beOmapiPublicProductAPPT0000 = 'https://api.int.telenet.be/omapi/public/product/APPT0000';

  let cafeTimeSlotMapper: CafeTimeSlotMapper,
    nCTimeSlotMapper: NCTimeSlotMapper,
    callexcellTimeslotMapper: CallexcellTimeslotMapper;

  beforeAll(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    cafeTimeSlotMapper = TestBed.inject(CafeTimeSlotMapper);
    nCTimeSlotMapper = TestBed.inject(NCTimeSlotMapper);
    callexcellTimeslotMapper = TestBed.inject(CallexcellTimeslotMapper);
  });

  describe('doTransform', () => {
    let cafeTimeSlotList: CafeTimeSlotList, nCTimeSlotList: NCTimeSlotList, callExcellTimeSlotList: CafeTimeSlotList;

    beforeEach(() => {
      cafeTimeSlotList = cafeTimeSlotMapper.toModel(mockCafeTimeslotsJson);
      nCTimeSlotList = nCTimeSlotMapper.toModel(mockNCTimeslotJson);
      callExcellTimeSlotList = callexcellTimeslotMapper.toModel(mockCallExcellTimeslotsJson);
    });

    it('should convert to corresponding AppoinmentTranformerModel if the customer is CAFE', () => {
      const actual = AppointmentTransformerUtil.doTransform(
        cafeTimeSlotList.timeslots,
        AppointmentPickerConsumerTypeEnum.CAFE
      );
      expect(actual.slots[0].date.toDateString()).toBe('Fri Nov 08 2019');
      expect(actual.slots[0].date.toDateString()).toBe('Fri Nov 08 2019');
      expect(actual.slots[0].timeSlots[0].code).toBe(TimeslotMomentEnum.MORNING);
      expect(actual.slots[1].date.toDateString()).toBe('Mon Nov 11 2019');
      expect(actual.slots[1].timeSlots[0].code).toBe(TimeslotMomentEnum.MORNING);
      expect(actual.slots[1].timeSlots[1].code).toBe(TimeslotMomentEnum.LUNCH);
      expect(actual.slots[1].timeSlots[2].code).toBe(TimeslotMomentEnum.AFTERNOON);
    });

    it('should convert to corresponding AppoinmentTranformerModel if the customer is NC', () => {
      const actual = AppointmentTransformerUtil.doTransform(
        nCTimeSlotList.availabilities,
        AppointmentPickerConsumerTypeEnum.NC
      );
      expect(actual.slots[0].date.toDateString()).toBe('Thu Aug 20 2020');
      expect(actual.slots[0].timeSlots[0].availabiltyId).toBe('9158093522413781595');
      expect(actual.slots[0].timeSlots[0].code).toBe(TimeslotMomentEnum.MORNING);
      expect(actual.slots[0].timeSlots[0].specUrl).toBe(beOmapiPublicProductAPPT0000);
      expect(actual.slots[0].timeSlots[1].availabiltyId).toBe('9158093523413781595');
      expect(actual.slots[0].timeSlots[1].code).toBe(TimeslotMomentEnum.EVENING);
      expect(actual.slots[0].timeSlots[1].specUrl).toBe(beOmapiPublicProductAPPT0000);
      expect(actual.slots[1].date.toDateString()).toBe('Fri Aug 21 2020');
      expect(actual.slots[1].timeSlots[0].availabiltyId).toBe('9158093526413781595');
      expect(actual.slots[1].timeSlots[0].code).toBe(TimeslotMomentEnum.LUNCH);
      expect(actual.slots[1].timeSlots[0].specUrl).toBe(beOmapiPublicProductAPPT0000);
      expect(actual.slots[1].timeSlots[1].availabiltyId).toBe('9158093527413781595');
      expect(actual.slots[1].timeSlots[1].code).toBe(TimeslotMomentEnum.AFTERNOON);
      expect(actual.slots[1].timeSlots[1].specUrl).toBe(beOmapiPublicProductAPPT0000);
    });

    it(
      'should convert to corresponding AppointmentTransformerModel if the customer is CAFE and timeslots contain' +
        ' moment objects',
      () => {
        const actual = AppointmentTransformerUtil.doTransform(
          callExcellTimeSlotList.timeslots,
          AppointmentPickerConsumerTypeEnum.CAFE
        );
        expect(actual.slots[0].date.toDateString()).toBe('Fri May 07 2021');
        expect(actual.slots[0].isCustomMoment).toBe(true);
        expect(actual.slots[0].timeSlots[0].code).toBe(TimeslotMomentEnum.EVENING);
        expect(actual.slots[0].timeSlots[0].timeslotMoment?.key).toBe(TimeslotMomentEnum.EVENING);
        expect(actual.slots[0].timeSlots[0].timeslotMoment?.startHours).toBe('17');
        expect(actual.slots[0].timeSlots[0].timeslotMoment?.startMinutes).toBe('00');
        expect(actual.slots[0].timeSlots[0].timeslotMoment?.endHours).toBe('20');
        expect(actual.slots[0].timeSlots[0].timeslotMoment?.endMinutes).toBe('00');

        expect(actual.slots[1].date.toDateString()).toBe('Sat May 08 2021');
        expect(actual.slots[0].isCustomMoment).toBe(true);
        expect(actual.slots[1].timeSlots[0].code).toBe(TimeslotMomentEnum.MORNING);
        expect(actual.slots[1].timeSlots[0].timeslotMoment?.key).toBe(TimeslotMomentEnum.MORNING);
        expect(actual.slots[1].timeSlots[0].timeslotMoment?.startHours).toBe('09');
        expect(actual.slots[1].timeSlots[0].timeslotMoment?.startMinutes).toBe('00');
        expect(actual.slots[1].timeSlots[0].timeslotMoment?.endHours).toBe('11');
        expect(actual.slots[1].timeSlots[0].timeslotMoment?.endMinutes).toBe('00');
      }
    );
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
