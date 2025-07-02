import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CafeTimeSlotMapper } from './timeslot.mapper';
import { CafeTimeSlotList } from '../models';
import { TimeslotMomentEnum } from '../enums';

const mockCafeTimeSlotJson = require('../utils/data/cafe-timeslots.json');

describe('CafeTimeSlotMapper', () => {
  let cafeTimeSlotMapper: CafeTimeSlotMapper;
  beforeAll(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    cafeTimeSlotMapper = TestBed.inject(CafeTimeSlotMapper);
  });

  describe('toModel', () => {
    let cafeTimeSlotList: CafeTimeSlotList;

    beforeEach(() => {
      cafeTimeSlotList = cafeTimeSlotMapper.toModel(mockCafeTimeSlotJson);
    });

    it('should map first available months', () => {
      expect(cafeTimeSlotList.firstAvailableSlotMonth).toBe(11);
    });

    it('should map first days', () => {
      expect(cafeTimeSlotList.firstDays.length).toBe(3);
      expect(cafeTimeSlotList.firstDays[0].toDateString()).toBe('Tue Oct 01 2019');
      expect(cafeTimeSlotList.firstDays[1].toDateString()).toBe('Fri Nov 01 2019');
      expect(cafeTimeSlotList.firstDays[2].toDateString()).toBe('Sun Dec 01 2019');
    });

    it('should map timeslots', () => {
      expect(cafeTimeSlotList.timeslots[0].date.toDateString()).toBe('Fri Nov 08 2019');
      expect(cafeTimeSlotList.timeslots[0].moments).toEqual([TimeslotMomentEnum.MORNING]);
    });
  });
});
